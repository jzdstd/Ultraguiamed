import React, { useEffect, useState } from 'react';
import { UltramedLogo } from './UltramedLogo';

interface SplashScreenProps {
  onFinish: () => void;
  minDurationMs?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  minDurationMs = 1200,
}) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      const finishTimer = setTimeout(() => {
        onFinish();
      }, 400);
      return () => clearTimeout(finishTimer);
    }, minDurationMs);

    return () => clearTimeout(timer);
  }, [minDurationMs, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#0F1A2E] transition-opacity duration-400 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center px-6">
        {/* Animated Heartbeat Logo */}
        <div className="animate-heartbeat">
          <UltramedLogo size="xl" showSubtitle />
        </div>

        {/* Subtle tagline */}
        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 max-w-xs mt-2">
          Sistema de Apoio ao Atendimento & Localização Rápida no Balcão
        </p>

        {/* Pulse loading indicator */}
        <div className="flex items-center gap-1.5 mt-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#14387F] animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E30521] animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#14387F] animate-bounce" />
        </div>
      </div>
    </div>
  );
};
