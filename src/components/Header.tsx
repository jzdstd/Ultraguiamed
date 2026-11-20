import React from 'react';
import {
  Search,
  Map,
  Star,
  Clock,
  ShieldCheck,
  Moon,
  Sun,
  AlertCircle,
  MessageSquare,
  GraduationCap,
  Lock,
  FileText,
} from 'lucide-react';
import { UltramedLogo } from './UltramedLogo';
import { PWAInstallButton } from './PWAInstallButton';

export type ActiveTab =
  | 'busca'
  | 'ler-receita'
  | 'atendimento'
  | 'aprender'
  | 'mapa'
  | 'favoritos'
  | 'recentes'
  | 'pendencias'
  | 'admin';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  totalPendencias: number;
  totalFavoritos: number;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  isDarkMode,
  onToggleDarkMode,
  totalPendencias,
  totalFavoritos,
  onOpenAdmin,
  isAdminLoggedIn,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0F1A2E]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Brand Logo */}
          <button
            onClick={() => onTabChange('busca')}
            className="flex items-center text-left focus:outline-hidden hover:opacity-95 transition-opacity shrink-0"
            aria-label="Voltar para busca inicial"
          >
            <UltramedLogo size="md" showSubtitle />
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar">
            <button
              onClick={() => onTabChange('busca')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'busca'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Consulta</span>
            </button>

            <button
              onClick={() => onTabChange('ler-receita')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'ler-receita'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <FileText className="w-4 h-4 text-[#E30521]" />
              <span>Ler receita</span>
            </button>

            <button
              onClick={() => onTabChange('atendimento')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'atendimento'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Como Atender</span>
            </button>

            <button
              onClick={() => onTabChange('aprender')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'aprender'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Aprender</span>
            </button>

            <button
              onClick={() => onTabChange('mapa')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'mapa'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Mapa Loja</span>
            </button>

            <button
              onClick={() => onTabChange('favoritos')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'favoritos'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Star className="w-4 h-4 text-[#E30521]" />
              <span>Favoritos</span>
              {totalFavoritos > 0 && (
                <span className="text-xs font-semibold tabular-nums opacity-80">
                  ({totalFavoritos})
                </span>
              )}
            </button>

            <button
              onClick={() => onTabChange('recentes')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'recentes'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Recentes</span>
            </button>

            <button
              onClick={() => onTabChange('pendencias')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'pendencias'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-[#E30521]" />
              <span>Sem Prateleira</span>
              {totalPendencias > 0 && (
                <span className="text-xs font-bold text-[#E30521] tabular-nums">
                  ({totalPendencias})
                </span>
              )}
            </button>
          </nav>

          {/* Right Action Tools: PWA Install, Dark Mode, Admin */}
          <div className="flex items-center gap-2 shrink-0">
            <PWAInstallButton />

            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDarkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              aria-label="Alternar tema escuro/claro"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={onOpenAdmin}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                isAdminLoggedIn || activeTab === 'admin'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title={
                isAdminLoggedIn
                  ? 'Painel Administrativo (Sessão Ativa)'
                  : 'Acesso Restrito ao Administrador'
              }
            >
              {isAdminLoggedIn ? (
                <ShieldCheck className="w-4 h-4" />
              ) : (
                <Lock className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">Admin</span>
            </button>
          </div>
        </div>

        {/* Tablet & Mobile Navigation Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1.5 no-scrollbar border-t border-slate-100 dark:border-slate-800/60">
          <button
            onClick={() => onTabChange('busca')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'busca'
                ? 'bg-[#14387F] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Busca</span>
          </button>

          <button
            onClick={() => onTabChange('ler-receita')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'ler-receita'
                ? 'bg-[#14387F] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#E30521]" />
            <span>Ler receita</span>
          </button>

          <button
            onClick={() => onTabChange('atendimento')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'atendimento'
                ? 'bg-[#14387F] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Como Atender</span>
          </button>

          <button
            onClick={() => onTabChange('aprender')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'aprender'
                ? 'bg-[#14387F] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Aprender</span>
          </button>

          <button
            onClick={() => onTabChange('mapa')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'mapa'
                ? 'bg-[#14387F] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Mapa Loja</span>
          </button>

          <button
            onClick={() => onTabChange('favoritos')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'favoritos'
                ? 'bg-[#14387F] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <Star className="w-3.5 h-3.5 text-[#E30521]" />
            <span>Favoritos ({totalFavoritos})</span>
          </button>

          <button
            onClick={() => onTabChange('recentes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'recentes'
                ? 'bg-[#14387F] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Recentes</span>
          </button>

          <button
            onClick={() => onTabChange('pendencias')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === 'pendencias'
                ? 'bg-[#14387F] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-[#E30521]" />
            <span>Sem Prateleira ({totalPendencias})</span>
          </button>
        </div>
      </div>
    </header>
  );
};
