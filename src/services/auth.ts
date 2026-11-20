import {
  browserSessionPersistence,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from './firebase';

export const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutos sem atividade

export interface AdminAuditEntry {
  id: string;
  timestamp: string;
  action: string;
  username: string;
  details: string;
}

export interface AdminOverviewResponse {
  username: string;
  stats?: {
    totalProdutos: number;
    comLocalizacao: number;
    semLocalizacao: number;
    totalPrateleiras: number;
    totalFileiras: number;
  };
  auditLogs: AdminAuditEntry[];
  backendAvailable: boolean;
}

function getFirebaseErrorCode(err: unknown): string {
  if (err && typeof err === 'object' && 'code' in err) {
    return String((err as { code?: unknown }).code || '');
  }
  return '';
}

function mapFirebaseLoginError(err: unknown): string {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return 'Sem internet';
  }
  const code = getFirebaseErrorCode(err);
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
    case 'auth/invalid-email':
    case 'auth/user-disabled':
      return 'E-mail ou senha incorretos';
    case 'auth/too-many-requests':
      return 'Muitas tentativas, aguarde alguns minutos';
    case 'auth/network-request-failed':
      return 'Sem internet';
    case 'auth/operation-not-allowed':
      return 'Login por e-mail e senha não está ativado no Firebase.';
    default:
      return 'E-mail ou senha incorretos';
  }
}

export function subscribeToAdminAuth(
  callback: (user: User | null) => void
): () => void {
  if (!isFirebaseConfigured || !auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

export async function loginAdminWithEmail(
  email: string,
  password: string
): Promise<User> {
  if (!isFirebaseConfigured || !auth) {
    throw new Error(
      'Configuração do Firebase ausente. Cadastre as variáveis VITE_FIREBASE_* no ambiente.'
    );
  }
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw new Error('Sem internet');
  }

  const cleanEmail = email.trim();
  if (!cleanEmail || !password) {
    throw new Error('E-mail ou senha incorretos');
  }

  try {
    await setPersistence(auth, browserSessionPersistence);
    const cred = await signInWithEmailAndPassword(auth, cleanEmail, password);
    return cred.user;
  } catch (err) {
    throw new Error(mapFirebaseLoginError(err));
  }
}

export async function sendAdminPasswordReset(email: string): Promise<string> {
  if (!isFirebaseConfigured || !auth) {
    throw new Error(
      'Configuração do Firebase ausente. Cadastre as variáveis VITE_FIREBASE_* no ambiente.'
    );
  }
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw new Error('Sem internet');
  }

  const cleanEmail = email.trim();
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    throw new Error('Digite um e-mail válido para enviar a redefinição de senha.');
  }

  try {
    await sendPasswordResetEmail(auth, cleanEmail);
  } catch (err) {
    const code = getFirebaseErrorCode(err);
    if (code === 'auth/too-many-requests') {
      throw new Error('Muitas tentativas, aguarde alguns minutos');
    }
    if (code === 'auth/network-request-failed') {
      throw new Error('Sem internet');
    }
    if (code === 'auth/invalid-email') {
      throw new Error('Digite um e-mail válido para enviar a redefinição de senha.');
    }
    // Never reveal if an email exists when user-not-found is returned
  }

  return 'Se este e-mail estiver cadastrado como administrador, você receberá um link para redefinir a senha.';
}

export async function logoutAdminAccount(): Promise<void> {
  if (!auth) return;
  try {
    await signOut(auth);
  } catch (err) {
    console.warn('Erro ao encerrar sessão do Firebase:', err);
  }
}

export async function getCurrentFirebaseIdToken(): Promise<string | null> {
  if (!auth?.currentUser) return null;
  try {
    return await auth.currentUser.getIdToken();
  } catch {
    return null;
  }
}

export async function getAdminOverview(): Promise<AdminOverviewResponse> {
  const token = await getCurrentFirebaseIdToken();
  if (!token) {
    throw new Error('AUTH_REQUIRED');
  }

  try {
    const res = await fetch('/api/admin/overview', {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      throw new Error('AUTH_REQUIRED');
    }

    const contentType = res.headers.get('content-type') || '';
    if (!res.ok || !contentType.includes('application/json')) {
      return {
        username: auth?.currentUser?.email || 'Administrador',
        auditLogs: [],
        backendAvailable: false,
      };
    }

    const data = await res.json();
    return {
      ...data,
      backendAvailable: true,
    };
  } catch (err) {
    if (err instanceof Error && err.message === 'AUTH_REQUIRED') {
      throw err;
    }
    return {
      username: auth?.currentUser?.email || 'Administrador',
      auditLogs: [],
      backendAvailable: false,
    };
  }
}
