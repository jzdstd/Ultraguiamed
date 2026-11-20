export interface AuthStatusResponse {
  configured: boolean;
  authenticated: boolean;
  username?: string;
  expiresAt?: string;
  cookieBlocked?: boolean;
}

export interface AdminAuditEntry {
  id: string;
  timestamp: string;
  action: string;
  username: string;
  details: string;
}

export interface AdminOverviewResponse {
  username: string;
  expiresAt?: string;
  stats: {
    totalProdutos: number;
    comLocalizacao: number;
    semLocalizacao: number;
    totalPrateleiras: number;
    totalFileiras: number;
  };
  auditLogs: AdminAuditEntry[];
}

export async function getAuthStatus(): Promise<AuthStatusResponse> {
  const res = await fetch('/api/auth/status', {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Não foi possível verificar a sessão administrativa.');
  }
  return res.json();
}

export async function setupInitialAdminAccount(
  username: string,
  password: string
): Promise<AuthStatusResponse> {
  const res = await fetch('/api/auth/setup', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Erro ao configurar conta administrativa.');
  }

  // Verify the HttpOnly session cookie persisted cleanly
  const verified = await getAuthStatus().catch(() => null);
  if (verified && !verified.authenticated) {
    return { ...data, authenticated: false, cookieBlocked: true };
  }
  return data;
}

export async function loginAdminAccount(
  username: string,
  password: string
): Promise<AuthStatusResponse> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Usuário ou senha inválidos.');
  }

  // Verify the HttpOnly session cookie persisted cleanly
  const verified = await getAuthStatus().catch(() => null);
  if (verified && !verified.authenticated) {
    return { ...data, authenticated: false, cookieBlocked: true };
  }
  return data;
}

export async function keepAliveAdminSession(): Promise<boolean> {
  try {
    const res = await fetch('/api/auth/keepalive', {
      method: 'POST',
      credentials: 'include',
      cache: 'no-store',
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function logoutAdminAccount(): Promise<void> {
  await fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include',
  }).catch(() => undefined);
}

export async function getAdminOverview(): Promise<AdminOverviewResponse> {
  const res = await fetch('/api/admin/overview', {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
  });
  if (res.status === 401) {
    throw new Error('AUTH_REQUIRED');
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Erro ao carregar dados administrativos.');
  }
  return res.json();
}

export async function updateAdminCredentials(params: {
  currentPassword: string;
  newUsername: string;
  newPassword?: string;
}): Promise<{ ok: boolean; username: string; message: string }> {
  const res = await fetch('/api/admin/account/credentials', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  if (res.status === 401) {
    throw new Error('AUTH_REQUIRED');
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Não foi possível atualizar usuário e senha.');
  }
  return data;
}
