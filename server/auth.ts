import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import type { Request, Response, NextFunction } from 'express';

const DATA_DIR = path.join(process.cwd(), '.data');
const AUTH_FILE = path.join(DATA_DIR, 'admin-auth.json');
const SESSIONS_FILE = path.join(DATA_DIR, 'admin-sessions.json');
const AUDIT_FILE = path.join(DATA_DIR, 'admin-audit.json');

export const SESSION_COOKIE_NAME = 'ultramed_admin_session';
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours sliding window
const MAX_FAILED_ATTEMPTS = 5;
const LOCK_DURATION_MS = 5 * 60 * 1000; // 5 minutes lockout

export interface AdminCredentialsRecord {
  username: string;
  passwordHash: string; // scrypt hex
  salt: string; // 16-byte hex
  createdAt: string;
  updatedAt: string;
}

export interface AdminSessionRecord {
  id: string;
  username: string;
  createdAt: number;
  lastActiveAt: number;
  expiresAt: number;
  userAgent?: string;
}

export interface AdminAuditEntry {
  id: string;
  timestamp: string;
  action: string;
  username: string;
  details: string;
}

export interface AuthenticatedRequest extends Request {
  adminSession?: AdminSessionRecord;
}

interface FailedAttemptState {
  count: number;
  lockedUntil: number;
  lastAttemptAt: number;
}

const failedAttemptsByIp = new Map<string, FailedAttemptState>();

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true, mode: 0o700 });
  }
}

function readJsonFile<T>(filePath: string, fallback: T): T {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJsonFile(filePath: string, data: unknown) {
  ensureDataDir();
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), { encoding: 'utf-8', mode: 0o600 });
  fs.renameSync(tmpPath, filePath);
}

function hashPassword(password: string, saltHex?: string): { salt: string; passwordHash: string } {
  const salt = saltHex || crypto.randomBytes(16).toString('hex');
  const derived = crypto.scryptSync(password, salt, 64);
  return {
    salt,
    passwordHash: derived.toString('hex'),
  };
}

function verifyPassword(password: string, salt: string, expectedHashHex: string): boolean {
  try {
    const derived = crypto.scryptSync(password, salt, 64);
    const expected = Buffer.from(expectedHashHex, 'hex');
    if (derived.length !== expected.length) return false;
    return crypto.timingSafeEqual(derived, expected);
  } catch {
    return false;
  }
}

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }
  return req.ip || req.socket.remoteAddress || 'unknown';
}

export function isRequestHttps(req: Request): boolean {
  if (req.secure) return true;
  const proto = req.headers['x-forwarded-proto'];
  if (typeof proto === 'string') {
    return proto.split(',')[0].trim().toLowerCase() === 'https';
  }
  return false;
}

export function parseCookies(req: Request): Record<string, string> {
  const header = req.headers.cookie;
  const cookies: Record<string, string> = {};
  if (!header) return cookies;

  const parts = header.split(';');
  for (const part of parts) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (key) {
      try {
        cookies[key] = decodeURIComponent(val);
      } catch {
        cookies[key] = val;
      }
    }
  }
  return cookies;
}

export function setSessionCookie(req: Request, res: Response, sessionId: string) {
  const maxAgeSec = Math.floor(SESSION_TTL_MS / 1000);
  const https = isRequestHttps(req);
  const parts = [
    `${SESSION_COOKIE_NAME}=${encodeURIComponent(sessionId)}`,
    'Path=/',
    'HttpOnly',
    `Max-Age=${maxAgeSec}`,
    https ? 'SameSite=None' : 'SameSite=Lax',
  ];
  if (https) {
    parts.push('Secure');
  }
  res.setHeader('Set-Cookie', parts.join('; '));
}

export function clearSessionCookie(req: Request, res: Response) {
  const https = isRequestHttps(req);
  const parts = [
    `${SESSION_COOKIE_NAME}=`,
    'Path=/',
    'HttpOnly',
    'Max-Age=0',
    https ? 'SameSite=None' : 'SameSite=Lax',
  ];
  if (https) {
    parts.push('Secure');
  }
  res.setHeader('Set-Cookie', parts.join('; '));
}

export function bootstrapEnvAdminIfNeeded() {
  ensureDataDir();
  const existing = readJsonFile<AdminCredentialsRecord | null>(AUTH_FILE, null);
  if (existing && existing.username && existing.passwordHash) return;

  const envUser = process.env.ADMIN_USERNAME?.trim();
  const envPass = process.env.ADMIN_PASSWORD;
  if (envUser && envPass && envUser.length >= 3 && envPass.length >= 6) {
    const { salt, passwordHash } = hashPassword(envPass);
    const now = new Date().toISOString();
    const record: AdminCredentialsRecord = {
      username: envUser,
      passwordHash,
      salt,
      createdAt: now,
      updatedAt: now,
    };
    writeJsonFile(AUTH_FILE, record);
    recordAudit('env_bootstrap', envUser, 'Credenciais administrativas inicializadas via variáveis de ambiente.');
  }
}

export function isAdminConfigured(): boolean {
  const rec = readJsonFile<AdminCredentialsRecord | null>(AUTH_FILE, null);
  return Boolean(rec && rec.username && rec.passwordHash && rec.salt);
}

function loadSessions(): Record<string, AdminSessionRecord> {
  const raw = readJsonFile<Record<string, AdminSessionRecord>>(SESSIONS_FILE, {});
  const now = Date.now();
  let changed = false;
  for (const [id, sess] of Object.entries(raw)) {
    if (!sess || sess.expiresAt <= now) {
      delete raw[id];
      changed = true;
    }
  }
  if (changed) {
    writeJsonFile(SESSIONS_FILE, raw);
  }
  return raw;
}

function saveSessions(sessions: Record<string, AdminSessionRecord>) {
  writeJsonFile(SESSIONS_FILE, sessions);
}

export function createSession(username: string, userAgent?: string): AdminSessionRecord {
  const sessions = loadSessions();
  const now = Date.now();
  const id = crypto.randomBytes(32).toString('hex');
  const session: AdminSessionRecord = {
    id,
    username,
    createdAt: now,
    lastActiveAt: now,
    expiresAt: now + SESSION_TTL_MS,
    userAgent,
  };
  sessions[id] = session;
  saveSessions(sessions);
  return session;
}

export function getActiveSessionFromRequest(req: Request, touch = true): AdminSessionRecord | null {
  const cookies = parseCookies(req);
  const sessionId = cookies[SESSION_COOKIE_NAME];
  if (!sessionId) return null;

  const sessions = loadSessions();
  const sess = sessions[sessionId];
  if (!sess) return null;

  const now = Date.now();
  if (sess.expiresAt <= now) {
    delete sessions[sessionId];
    saveSessions(sessions);
    return null;
  }

  if (touch) {
    sess.lastActiveAt = now;
    sess.expiresAt = now + SESSION_TTL_MS;
    sessions[sessionId] = sess;
    saveSessions(sessions);
  }

  return sess;
}

export function destroySessionByRequest(req: Request): string | null {
  const cookies = parseCookies(req);
  const sessionId = cookies[SESSION_COOKIE_NAME];
  if (!sessionId) return null;

  const sessions = loadSessions();
  const sess = sessions[sessionId];
  if (sess) {
    delete sessions[sessionId];
    saveSessions(sessions);
    return sess.username;
  }
  return null;
}

export function destroyAllOtherSessions(keepSessionId?: string) {
  const sessions = loadSessions();
  const next: Record<string, AdminSessionRecord> = {};
  if (keepSessionId && sessions[keepSessionId]) {
    next[keepSessionId] = sessions[keepSessionId];
  }
  saveSessions(next);
}

export function validateCredentialStrength(
  username: string,
  password: string
): string | null {
  const cleanUser = username.trim();
  if (cleanUser.length < 3 || cleanUser.length > 40) {
    return 'O usuário deve ter entre 3 e 40 caracteres.';
  }
  if (!/^[a-zA-Z0-9._@-]+$/.test(cleanUser)) {
    return 'O usuário deve conter apenas letras, números ou os símbolos . _ @ - (sem espaços).';
  }
  if (!password || password.length < 6) {
    return 'A senha deve ter no mínimo 6 caracteres.';
  }
  if (password.length > 128) {
    return 'A senha excede o limite permitido de caracteres.';
  }
  return null;
}

export function setupInitialAdmin(username: string, password: string): {
  ok: boolean;
  error?: string;
  username?: string;
} {
  if (isAdminConfigured()) {
    return { ok: false, error: 'O administrador já foi configurado anteriormente.' };
  }

  const validationError = validateCredentialStrength(username, password);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  const cleanUser = username.trim();
  const { salt, passwordHash } = hashPassword(password);
  const now = new Date().toISOString();

  const record: AdminCredentialsRecord = {
    username: cleanUser,
    passwordHash,
    salt,
    createdAt: now,
    updatedAt: now,
  };

  writeJsonFile(AUTH_FILE, record);
  recordAudit('admin_setup', cleanUser, 'Conta de administrador criada na configuração inicial.');
  return { ok: true, username: cleanUser };
}

export function authenticateAdmin(req: Request, username: string, password: string): {
  ok: boolean;
  statusCode?: number;
  error?: string;
  username?: string;
} {
  if (!isAdminConfigured()) {
    return {
      ok: false,
      statusCode: 400,
      error: 'Nenhuma conta administrativa configurada ainda. Defina seu usuário e senha.',
    };
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const failState = failedAttemptsByIp.get(ip);

  if (failState && failState.lockedUntil > now) {
    const secsLeft = Math.ceil((failState.lockedUntil - now) / 1000);
    const minsLeft = Math.ceil(secsLeft / 60);
    return {
      ok: false,
      statusCode: 429,
      error: `Muitas tentativas inválidas. Aguarde ${minsLeft} minuto(s) para tentar novamente.`,
    };
  }

  const rec = readJsonFile<AdminCredentialsRecord | null>(AUTH_FILE, null);
  if (!rec) {
    return { ok: false, statusCode: 500, error: 'Falha ao carregar registro de autenticação.' };
  }

  const inputUser = (username || '').trim();
  const userMatches = inputUser.toLowerCase() === rec.username.toLowerCase();
  const passMatches = verifyPassword(password || '', rec.salt, rec.passwordHash);

  if (!userMatches || !passMatches) {
    const prevCount =
      failState && now - failState.lastAttemptAt < 15 * 60 * 1000 ? failState.count : 0;
    const nextCount = prevCount + 1;
    const lockedUntil = nextCount >= MAX_FAILED_ATTEMPTS ? now + LOCK_DURATION_MS : 0;

    failedAttemptsByIp.set(ip, {
      count: nextCount,
      lockedUntil,
      lastAttemptAt: now,
    });

    recordAudit('login_failed', inputUser || '(vazio)', `Tentativa de login inválida (IP ${ip}).`);

    if (lockedUntil > 0) {
      return {
        ok: false,
        statusCode: 429,
        error: 'Muitas tentativas incorretas. Acesso bloqueado temporariamente por 5 minutos.',
      };
    }

    return {
      ok: false,
      statusCode: 401,
      error: 'Usuário ou senha inválidos.',
    };
  }

  failedAttemptsByIp.delete(ip);
  recordAudit('login_success', rec.username, 'Acesso administrativo autenticado.');
  return { ok: true, username: rec.username };
}

export function changeAdminCredentials(
  currentPassword: string,
  newUsername: string,
  newPassword: string,
  currentSessionId?: string
): { ok: boolean; error?: string; username?: string } {
  const rec = readJsonFile<AdminCredentialsRecord | null>(AUTH_FILE, null);
  if (!rec) {
    return { ok: false, error: 'Conta administrativa não encontrada.' };
  }

  if (!verifyPassword(currentPassword || '', rec.salt, rec.passwordHash)) {
    return { ok: false, error: 'A senha atual informada está incorreta.' };
  }

  const targetUser = (newUsername || rec.username).trim();
  const targetPassword = newPassword ? newPassword : currentPassword;

  const validationError = validateCredentialStrength(targetUser, targetPassword);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  const { salt, passwordHash } = hashPassword(targetPassword);
  const now = new Date().toISOString();

  const updated: AdminCredentialsRecord = {
    username: targetUser,
    passwordHash,
    salt,
    createdAt: rec.createdAt,
    updatedAt: now,
  };

  writeJsonFile(AUTH_FILE, updated);

  // Update active session username and revoke any stale sessions
  if (currentSessionId) {
    const sessions = loadSessions();
    if (sessions[currentSessionId]) {
      sessions[currentSessionId].username = targetUser;
      saveSessions(sessions);
    }
    destroyAllOtherSessions(currentSessionId);
  }

  recordAudit('credentials_updated', targetUser, 'Usuário e/ou senha do administrador atualizados.');
  return { ok: true, username: targetUser };
}

export function recordAudit(action: string, username: string, details: string) {
  const logs = readJsonFile<AdminAuditEntry[]>(AUDIT_FILE, []);
  const entry: AdminAuditEntry = {
    id: `AUD-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`,
    timestamp: new Date().toISOString(),
    action,
    username,
    details,
  };
  const nextLogs = [entry, ...logs].slice(0, 150);
  writeJsonFile(AUDIT_FILE, nextLogs);
}

export function getAuditLogs(limit = 50): AdminAuditEntry[] {
  const logs = readJsonFile<AdminAuditEntry[]>(AUDIT_FILE, []);
  return logs.slice(0, limit);
}

export function requireAdminAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const session = getActiveSessionFromRequest(req, true);
  if (!session) {
    res.status(401).json({
      error: 'Acesso negado. Autenticação administrativa obrigatória.',
      code: 'UNAUTHORIZED',
    });
    return;
  }

  req.adminSession = session;
  // Refresh sliding cookie expiration on active admin usage
  setSessionCookie(req, res, session.id);
  next();
}
