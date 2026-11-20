import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import type { Request, Response, NextFunction } from 'express';

const DATA_DIR = path.join(process.cwd(), '.data');
const AUDIT_FILE = path.join(DATA_DIR, 'admin-audit.json');
const GOOGLE_CERTS_URL =
  'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';

export interface FirebaseAdminIdentity {
  uid: string;
  email: string;
}

export interface AdminAuditEntry {
  id: string;
  timestamp: string;
  action: string;
  username: string;
  details: string;
}

export interface AuthenticatedRequest extends Request {
  adminUser?: FirebaseAdminIdentity;
}

interface CertCache {
  certs: Record<string, string>;
  expiresAt: number;
}

let certCache: CertCache | null = null;

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
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), {
    encoding: 'utf-8',
    mode: 0o600,
  });
  fs.renameSync(tmpPath, filePath);
}

function decodeBase64UrlJson<T>(segment: string): T {
  const padded = segment.replace(/-/g, '+').replace(/_/g, '/');
  const padLen = (4 - (padded.length % 4)) % 4;
  const base64 = padded + '='.repeat(padLen);
  return JSON.parse(Buffer.from(base64, 'base64').toString('utf-8')) as T;
}

async function getGoogleFirebaseCerts(): Promise<Record<string, string>> {
  const now = Date.now();
  if (certCache && certCache.expiresAt > now) {
    return certCache.certs;
  }

  const res = await fetch(GOOGLE_CERTS_URL);
  if (!res.ok) {
    throw new Error('Não foi possível obter certificados públicos do Firebase.');
  }
  const certs = (await res.json()) as Record<string, string>;
  const cacheControl = res.headers.get('cache-control') || '';
  const maxAgeMatch = /max-age=(\d+)/i.exec(cacheControl);
  const maxAgeMs = maxAgeMatch ? Number(maxAgeMatch[1]) * 1000 : 60 * 60 * 1000;

  certCache = {
    certs,
    expiresAt: now + maxAgeMs,
  };
  return certs;
}

export async function verifyFirebaseIdToken(
  idToken: string
): Promise<FirebaseAdminIdentity | null> {
  const projectId =
    process.env.VITE_FIREBASE_PROJECT_ID?.trim() ||
    process.env.FIREBASE_PROJECT_ID?.trim() ||
    '';
  if (!projectId) {
    return null;
  }

  const parts = idToken.split('.');
  if (parts.length !== 3) return null;

  const [headerB64, payloadB64, sigB64] = parts;

  try {
    const header = decodeBase64UrlJson<{ alg?: string; kid?: string }>(headerB64);
    if (header.alg !== 'RS256' || !header.kid) {
      return null;
    }

    const payload = decodeBase64UrlJson<{
      aud?: string;
      iss?: string;
      sub?: string;
      email?: string;
      exp?: number;
      iat?: number;
      auth_time?: number;
    }>(payloadB64);

    const nowSec = Math.floor(Date.now() / 1000);
    if (
      payload.aud !== projectId ||
      payload.iss !== `https://securetoken.google.com/${projectId}` ||
      !payload.sub ||
      typeof payload.exp !== 'number' ||
      payload.exp <= nowSec ||
      typeof payload.iat !== 'number' ||
      payload.iat > nowSec + 300
    ) {
      return null;
    }

    const certs = await getGoogleFirebaseCerts();
    const pem = certs[header.kid];
    if (!pem) return null;

    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(`${headerB64}.${payloadB64}`);
    verifier.end();

    const sigPadded = sigB64.replace(/-/g, '+').replace(/_/g, '/');
    const sigBuf = Buffer.from(
      sigPadded + '='.repeat((4 - (sigPadded.length % 4)) % 4),
      'base64'
    );

    if (!verifier.verify(pem, sigBuf)) {
      return null;
    }

    return {
      uid: payload.sub,
      email: payload.email || payload.sub,
    };
  } catch {
    return null;
  }
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

export async function requireAdminAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization || '';
  const match = /^Bearer\s+(.+)$/i.exec(authHeader);
  if (!match || !match[1]) {
    res.status(401).json({
      error: 'Acesso negado. Faça login com sua conta de administrador.',
      code: 'UNAUTHORIZED',
    });
    return;
  }

  const verified = await verifyFirebaseIdToken(match[1].trim());
  if (!verified) {
    res.status(401).json({
      error: 'Sessão inválida ou expirada. Faça login novamente.',
      code: 'UNAUTHORIZED',
    });
    return;
  }

  req.adminUser = verified;
  next();
}
