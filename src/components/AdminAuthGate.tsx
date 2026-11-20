import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  Loader2,
  X,
  KeyRound,
  Mail,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import {
  loginAdminWithEmail,
  sendAdminPasswordReset,
} from '../services/auth';
import { isFirebaseConfigured } from '../services/firebase';

interface AdminAuthGateProps {
  isOpen: boolean;
  isCheckingAuth: boolean;
  inactivityMessage?: string;
  onClose: () => void;
  onAuthenticated: () => void;
}

export const AdminAuthGate: React.FC<AdminAuthGateProps> = ({
  isOpen,
  isCheckingAuth,
  inactivityMessage,
  onClose,
  onAuthenticated,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingReset, setIsSendingReset] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [infoMsg, setInfoMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setInfoMsg('');

    const cleanEmail = email.trim();
    if (!cleanEmail || !password) {
      setErrorMsg('E-mail ou senha incorretos');
      return;
    }

    setIsSubmitting(true);
    try {
      await loginAdminWithEmail(cleanEmail, password);
      setEmail('');
      setPassword('');
      onAuthenticated();
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'E-mail ou senha incorretos'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    setErrorMsg('');
    setInfoMsg('');
    setIsSendingReset(true);
    try {
      const msg = await sendAdminPasswordReset(email);
      setInfoMsg(msg);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Não foi possível enviar a redefinição de senha.'
      );
    } finally {
      setIsSendingReset(false);
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
              <p className="text-xs font-medium">
                Verificando sessão administrativa...
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="text-center space-y-1.5">
                <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-[#14387F] dark:text-blue-400 mb-1">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Login do Administrador
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Entre com o e-mail e a senha do administrador cadastrado no Firebase para acessar o gerenciamento.
                </p>
              </div>

              {!isFirebaseConfigured && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    As variáveis de ambiente do Firebase (VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, VITE_FIREBASE_APP_ID) ainda não estão configuradas neste ambiente.
                  </span>
                </div>
              )}

              {inactivityMessage && !errorMsg && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2 font-medium">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{inactivityMessage}</span>
                </div>
              )}

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-[#E30521] dark:text-red-300 flex items-start gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {infoMsg && (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 flex items-start gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{infoMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="admin-email"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      id="admin-email"
                      type="email"
                      required
                      autoFocus
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting || isSendingReset || !isFirebaseConfigured}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-[#14387F]"
                      placeholder="admin@suaempresa.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="admin-password"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Senha
                    </label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      disabled={isSubmitting || isSendingReset || !isFirebaseConfigured}
                      className="text-[11px] font-semibold text-[#14387F] dark:text-blue-400 hover:underline disabled:opacity-50"
                    >
                      {isSendingReset ? 'Enviando...' : 'Esqueci minha senha'}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="admin-password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isSubmitting || isSendingReset || !isFirebaseConfigured}
                      className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-[#14387F]"
                      placeholder="Digite sua senha"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-2.5 top-2.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                      title={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                      aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSendingReset || !isFirebaseConfigured}
                  className="w-full py-3 rounded-xl bg-[#14387F] hover:bg-[#0e295d] disabled:opacity-60 active:scale-[0.99] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Entrando...</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4" />
                      <span>Entrar</span>
                    </>
                  )}
                </button>
              </form>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-[11px] text-slate-400">
                <span>Sessão encerra ao fechar o navegador ou em 30 min sem uso</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium shrink-0"
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
