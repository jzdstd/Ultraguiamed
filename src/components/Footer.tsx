import React from 'react';
import { ExternalLink, ShieldAlert } from 'lucide-react';
import { UltramedLogo } from './UltramedLogo';

interface FooterProps {
  totalProdutos: number;
  comLocalizacao: number;
  semLocalizacao: number;
}

export const Footer: React.FC<FooterProps> = ({
  totalProdutos,
  comLocalizacao,
  semLocalizacao,
}) => {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F1A2E] py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-col items-center md:items-start gap-2">
            <UltramedLogo size="sm" showSubtitle />
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
              Facilidade e agilidade na localização de medicamentos para o atendimento no balcão.
            </p>
          </div>

          {/* Quick Counter Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 dark:text-slate-300">
            <div className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium">
              Catálogo: <strong className="text-[#14387F] dark:text-blue-400">{totalProdutos}</strong> itens
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-medium">
              Localizados: <strong>{comLocalizacao}</strong>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#E30521] font-medium">
              Pendentes: <strong>{semLocalizacao}</strong>
            </div>
          </div>

          {/* Official Anvisa Bulário Link */}
          <a
            href="https://consultas.anvisa.gov.br/#/bulario/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#14387F] dark:text-blue-400 hover:underline"
          >
            <span>Bulário Eletrônico da Anvisa</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mandatory Regulatory Medical Disclaimer */}
        <div className="mt-6 flex items-start sm:items-center justify-center gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
          <ShieldAlert className="w-4 h-4 text-[#E30521] shrink-0 mt-0.5 sm:mt-0" />
          <span>
            Informações de apoio ao atendimento. Não substitui a orientação do farmacêutico nem a bula.
          </span>
        </div>
      </div>
    </footer>
  );
};
