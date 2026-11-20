import React from 'react';

interface UltramedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  inverted?: boolean;
}

export const UltramedLogo: React.FC<UltramedLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
  inverted = false,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Ultramed Logo Icon: Red heart with navy blue dynamic swoosh and separation */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <img
          src="/assets/ultramed_logo_transparent.png"
          alt="Logo Ultramed"
          className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(20,56,127,0.18)]"
          onError={(e) => {
            // Fallback to direct uploaded screenshot path if needed
            (e.currentTarget as HTMLImageElement).src =
              '/assets/aistudio/Captura_de_tela_2026-10-05_224931_98a8320b.png';
          }}
        />
      </div>

      {/* Brand Name "Farmácias Ultramed Popular" */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase ${
            inverted ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Farmácias
        </span>

        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-semibold tracking-tight ${textSizes[size]} ${
              inverted
                ? 'text-white'
                : 'text-[#14387F] dark:text-white'
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ultramed
          </span>

          <span
            className={`font-black tracking-wider uppercase ${
              size === 'sm'
                ? 'text-xs'
                : size === 'md'
                ? 'text-sm'
                : size === 'lg'
                ? 'text-base'
                : 'text-xl'
            } text-[#E30521]`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Popular
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-[9px] font-medium tracking-wider uppercase mt-0.5 ${
              inverted ? 'text-blue-100' : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            Consulta Rápida de Balcão
          </span>
        )}
      </div>
    </div>
  );
};
