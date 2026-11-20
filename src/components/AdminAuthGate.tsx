import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  UserPlus,
  Eye,
  EyeOff,
  AlertCircle,
  Loader2,
  X,
  ExternalLink,
  KeyRound,
} from 'lucide-react';
import {
  setupInitialAdminAccount,
  loginAdminAccount,
} from '../services/auth';

interface AdminAuthGateProps {
  isOpen: boolean;
  isCheckingAuth: boolean;
  isConfigured: boolean;
  onClose: () => void;
  onAuthenticated: (username: string) => void;
}

export const AdminAuthGate: React.FC<AdminAuthGateProps> = ({
  isOpen,
  isCheckingAuth,
  isConfigured,
  onClose,
  onAuthenticated,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [cookieBlocked, setCookieBlocked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setCookieBlocked(false);

    const cleanUser = username.trim();
    if (cleanUser.length < 3) {
      setErrorMsg('Informe um usuário com pelo menos 3 caracteres.');
      return;
    }

    if (!password) {
      setErrorMsg('Informe a senha de administrador.');
      return;
    }

    if (!isConfigured) {
      if (password.length < 6) {
        setErrorMsg('A senha deve ter pelo menos 6 caracteres.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg('As senhas digitadas não conferem.');
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const res = isConfigured
        ? await loginAdminAccount(cleanUser, password)
        : await setupInitialAdminAccount(cleanUser, password);

      if (res.cookieBlocked) {
        setCookieBlocked(true);
        setErrorMsg(
          'Seu navegador bloqueou cookies de sessão dentro do quadro integrado. Abra o sistema em uma nova aba para concluir o acesso administrativo seguro.'
        );
        return;
      }

      if (res.authenticated) {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        onAuthenticated(res.username || cleanUser);
      }
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Erro ao autenticar administrador.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-slate-100 dark:bg-[#0F1A2E] border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#14387F] text-white">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Área Administrativa Protegida
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Farmácias Ultramed Popular
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            title="Voltar ao sistema de consulta"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7">
          {isCheckingAuth ? (
            <div className="py-10 flex flex-col items-center justify-center gap-3 text-slate-500 dark:text-slate-400">
              <Loader2 className="w-7 h-7 animate-spin text-[#14387F] dark:text-blue-400" />
              <p className="text-xs font-medium">Verificando sessão administrativa...</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="text-center space-y-1.5">
                <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-[#14387F] dark:text-blue-400 mb-1">
                  {isConfigured ? (
                    <ShieldCheck className="w-8 h-8" />
                  ) : (
                    <UserPlus className="w-8 h-8" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isConfigured
                    ? 'Login do Administrador'
                    : 'Definir Usuário e Senha do Admin'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isConfigured
                    ? 'Digite seu usuário e senha para acessar o gerenciamento de medicamentos e prateleiras.'
                    : 'Primeiro acesso: cadastre seu próprio usuário e senha exclusivos. As credenciais são criptografadas no servidor.'}
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-[#E30521] dark:text-red-300 space-y-2">
                  <div className="flex items-start gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                  {cookieBlocked && (
                    <a
                      href={window.location.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14387F] text-white font-semibold hover:bg-[#0e295d] transition-colors"
                    >
                      <span>Abrir em Nova Aba</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
                <div>
                  <label
                    htmlFor="admin-username"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Usuário
                  </label>
                  <input
                    id="admin-username"
                    type="text"
                    required
                    autoFocus
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-[#14387F]"
                    placeholder={
                      isConfigured
                        ? 'Digite seu usuário'
                        : 'Escolha seu usuário (ex: gestor.ultramed)'
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="admin-password"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      id="admin-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoComplete={isConfigured ? 'current-password' : 'new-password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-[#14387F]"
                      placeholder={
                        isConfigured ? 'Digite sua senha' : 'Mínimo 6 caracteres'
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-2.5 top-2.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                      title={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {!isConfigured && (
                  <div>
                    <label
                      htmlFor="admin-confirm-password"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Confirmar Senha
                    </label>
                    <input
                      id="admin-confirm-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-[#14387F]"
                      placeholder="Repita a senha escolhida"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#14387F] hover:bg-[#0e295d] disabled:opacity-60 active:scale-[0.99] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isConfigured ? 'Validando...' : 'Salvando acesso...'}</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4" />
                      <span>
                        {isConfigured
                          ? 'Entrar no Painel Admin'
                          : 'Criar Acesso e Entrar'}
                      </span>
                    </>
                  )}
                </button>
              </form>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Sessão protegida via cookie HttpOnly no servidor</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
                >
                  Voltar ao balcão
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
