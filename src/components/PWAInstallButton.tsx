import React, { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed or neither installable nor iOS, return null
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 rounded-lg bg-[#E30521] px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#c9041d] active:scale-95 transition-all"
        title="Instalar aplicativo no balcão"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Instalar App</span>
        <span className="sm:hidden">Instalar</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-white/20 active:scale-95 transition-all"
          title="Instalar no iPhone / iPad"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Instalar no iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-[#0F1A2E] border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-semibold text-[#14387F] dark:text-white">
                  Instalar Farmácias Ultramed Popular no iPhone
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-lg p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#14387F] text-xs font-bold text-white">
                    1
                  </div>
                  <p>
                    No Safari, toque no botão <strong>Compartilhar</strong> (ícone com quadrado e seta para cima).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#14387F] text-xs font-bold text-white">
                    2
                  </div>
                  <p>
                    Role a lista e selecione <strong>Adicionar à Tela de Início</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#14387F] text-xs font-bold text-white">
                    3
                  </div>
                  <p>
                    Confirme em <strong>Adicionar</strong> no canto superior direito para acessar em 1 toque no balcão!
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-6 w-full rounded-xl bg-[#14387F] py-2.5 text-sm font-semibold text-white hover:bg-[#0e295d] active:scale-95 transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
