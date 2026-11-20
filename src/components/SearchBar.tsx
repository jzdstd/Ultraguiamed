import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  X,
  Filter,
  SlidersHorizontal,
  Clock,
  Pill,
  Flame,
  Thermometer,
  Wind,
  ShieldPlus,
  CloudRain,
  Activity,
  HeartPulse,
  Heart,
  Sparkles,
  Droplets,
  Eye,
  Baby,
  Lock,
  Stethoscope,
  MapPin,
} from 'lucide-react';
import { CATEGORIAS_PADRAO, ProdutoComLocalizacoes } from '../types/database';
import { db } from '../services/db';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  selectedFileira: string;
  onFileiraChange: (fileira: string) => void;
  selectedCategoria: string;
  onCategoriaChange: (categoria: string) => void;
  selectedFabricante: string;
  onFabricanteChange: (fabricante: string) => void;
  selectedSituacao: 'todos' | 'com_localizacao' | 'sem_localizacao' | 'balcao' | 'indisponivel_em_loja';
  onSituacaoChange: (sit: 'todos' | 'com_localizacao' | 'sem_localizacao' | 'balcao' | 'indisponivel_em_loja') => void;
  categorias: string[];
  fabricantes: string[];
  totalResultados: number;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  onSelectSuggestionProduct?: (prod: ProdutoComLocalizacoes) => void;
  searchHistory?: string[];
  onClearSearchHistory?: () => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Analgésicos': <Pill className="w-3.5 h-3.5" />,
  'Anti-inflamatórios': <Flame className="w-3.5 h-3.5" />,
  'Antitérmicos': <Thermometer className="w-3.5 h-3.5" />,
  'Antialérgicos': <Sparkles className="w-3.5 h-3.5" />,
  'Antibióticos': <ShieldPlus className="w-3.5 h-3.5" />,
  'Medicamentos para gripe e resfriado': <CloudRain className="w-3.5 h-3.5" />,
  'Medicamentos para tosse': <Wind className="w-3.5 h-3.5" />,
  'Medicamentos para problemas respiratórios': <Activity className="w-3.5 h-3.5" />,
  'Medicamentos para estômago e digestão': <Stethoscope className="w-3.5 h-3.5" />,
  'Medicamentos para intestino': <Stethoscope className="w-3.5 h-3.5" />,
  'Medicamentos para pressão arterial': <HeartPulse className="w-3.5 h-3.5" />,
  'Medicamentos para coração': <Heart className="w-3.5 h-3.5" />,
  'Vitaminas e suplementos': <Sparkles className="w-3.5 h-3.5" />,
  'Medicamentos dermatológicos': <Droplets className="w-3.5 h-3.5" />,
  'Medicamentos de uso nasal': <Wind className="w-3.5 h-3.5" />,
  'Medicamentos de uso oftalmológico': <Eye className="w-3.5 h-3.5" />,
  'Medicamentos pediátricos': <Baby className="w-3.5 h-3.5" />,
  'Medicamentos de uso controlado': <Lock className="w-3.5 h-3.5" />,
};

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  selectedFileira,
  onFileiraChange,
  selectedCategoria,
  onCategoriaChange,
  selectedFabricante,
  onFabricanteChange,
  selectedSituacao,
  onSituacaoChange,
  categorias,
  fabricantes,
  totalResultados,
  onClearFilters,
  hasActiveFilters,
  onSelectSuggestionProduct,
  searchHistory = [],
  onClearSearchHistory,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const fileiras = db.getFileiras().map((f) => f.letra);
  const quickSuggestions = [
    'Alivium',
    'Allegra',
    'Alginac',
    'Alektos',
    'Amome',
    'Ancoron',
    'Andolba',
    'AltaD',
    'Dipirona',
    'Omeprazol',
  ];

  const liveSuggestions = value.trim().length >= 2 ? db.getSearchSuggestions(value, 7) : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      db.addSearchHistory(value.trim());
      setShowDropdown(false);
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  return (
    <div className="w-full space-y-3" ref={wrapperRef}>
      {/* Main Search Input + Live Suggestions Dropdown */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#14387F] dark:text-blue-400" />
        </div>

        <input
          type="text"
          value={value}
          onFocus={() => setShowDropdown(true)}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            onChange(e.target.value);
            setShowDropdown(true);
          }}
          placeholder="Buscar por nome comercial, princípio ativo, categoria ou prateleira..."
          className="w-full pl-12 pr-28 py-3.5 sm:py-4 bg-white dark:bg-[#132238] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-2xl border-2 border-slate-200 dark:border-slate-700/80 focus:border-[#14387F] dark:focus:border-blue-500 focus:outline-hidden shadow-xs text-base sm:text-lg transition-all"
          autoComplete="off"
        />

        <div className="absolute inset-y-0 right-2 flex items-center gap-1">
          {value && (
            <button
              onClick={() => onChange('')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Limpar busca"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              showFilters || hasActiveFilters
                ? 'bg-[#14387F] text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
            title="Filtros avançados"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filtros</span>
          </button>
        </div>

        {/* Autocomplete Live Suggestions Popover */}
        {showDropdown && value.trim().length >= 2 && liveSuggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-1.5 z-30 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/60 text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Sugestões encontradas (incluindo busca aproximada)</span>
              <span>Clique para abrir a ficha</span>
            </div>
            {liveSuggestions.map((prod) => (
              <button
                key={prod.id}
                type="button"
                onClick={() => {
                  db.addSearchHistory(prod.nome);
                  setShowDropdown(false);
                  if (onSelectSuggestionProduct) {
                    onSelectSuggestionProduct(prod);
                  } else {
                    onChange(prod.nome);
                  }
                }}
                className="w-full px-4 py-2.5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {prod.nome}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {prod.principio_ativo || prod.categoria}
                    {prod.concentracao ? ` · ${prod.concentracao}` : ''}
                    {prod.forma_farmaceutica ? ` · ${prod.forma_farmaceutica}` : ''}
                  </div>
                </div>
                <div className="shrink-0 text-xs font-bold text-[#E30521] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>
                    {prod.localizacoes.length > 0
                      ? prod.localizacoes.join(', ')
                      : prod.situacao === 'balcao'
                        ? 'Balcão'
                        : prod.situacao === 'indisponivel_em_loja'
                          ? 'Indisponível em loja'
                          : 'Sem prat.'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search History + Quick Medication Suggestions */}
      {!value && (
        <div className="space-y-2">
          {searchHistory.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs no-scrollbar">
              <span className="text-slate-500 dark:text-slate-400 shrink-0 font-medium flex items-center gap-1 mr-1">
                <Clock className="w-3.5 h-3.5" />
                Histórico:
              </span>
              {searchHistory.slice(0, 6).map((term) => (
                <button
                  key={term}
                  onClick={() => onChange(term)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#14387F] hover:text-white transition-colors whitespace-nowrap shrink-0 font-medium"
                >
                  {term}
                </button>
              ))}
              {onClearSearchHistory && (
                <button
                  onClick={onClearSearchHistory}
                  className="text-[11px] text-slate-400 hover:text-[#E30521] px-1.5 whitespace-nowrap shrink-0"
                >
                  Limpar
                </button>
              )}
            </div>
          )}

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-slate-500 dark:text-slate-400 shrink-0 font-medium mr-1">
              Destaques:
            </span>
            {quickSuggestions.map((item) => (
              <button
                key={item}
                onClick={() => {
                  db.addSearchHistory(item);
                  onChange(item);
                }}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#14387F] dark:hover:border-blue-400 transition-colors whitespace-nowrap shrink-0"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 18 Clinical Categories Filter Strip with Icons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0 mr-1">
          Finalidade:
        </span>
        <button
          onClick={() => onCategoriaChange('todas')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
            selectedCategoria === 'todas'
              ? 'bg-[#14387F] text-white'
              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
          }`}
        >
          Todas
        </button>
        {CATEGORIAS_PADRAO.map((cat) => {
          const active = selectedCategoria === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoriaChange(active ? 'todas' : cat)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                active
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {CATEGORY_ICONS[cat] || <Pill className="w-3.5 h-3.5" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Quick Fileira Row Buttons (A through L) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0 mr-1">
          Fileira:
        </span>
        <button
          onClick={() => onFileiraChange('todas')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0 whitespace-nowrap ${
            selectedFileira === 'todas'
              ? 'bg-[#14387F] text-white'
              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
          }`}
        >
          Todas
        </button>
        {fileiras.map((letter) => (
          <button
            key={letter}
            onClick={() => onFileiraChange(selectedFileira === letter ? 'todas' : letter)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0 whitespace-nowrap ${
              selectedFileira === letter
                ? 'bg-[#14387F] text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            Fileira {letter}
          </button>
        ))}
      </div>

      {/* Collapsible Advanced Filter Panel */}
      {showFilters && (
        <div className="p-4 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-700 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white">
              <Filter className="w-4 h-4 text-[#14387F] dark:text-blue-400" />
              <span>Filtrar Resultados</span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-xs text-[#E30521] hover:underline font-medium"
              >
                Limpar todos os filtros
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Situacao Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Situação da Localização
              </label>
              <select
                value={selectedSituacao}
                onChange={(e) => onSituacaoChange(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-[#14387F]"
              >
                <option value="todos">Todos os produtos</option>
                <option value="com_localizacao">Com prateleira cadastrada</option>
                <option value="balcao">Balcão de atendimento</option>
                <option value="sem_localizacao">Sem localização (Pendentes)</option>
                <option value="indisponivel_em_loja">Indisponível em loja</option>
              </select>
            </div>

            {/* Categoria Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Categoria Terapêutica
              </label>
              <select
                value={selectedCategoria}
                onChange={(e) => onCategoriaChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-[#14387F]"
              >
                <option value="todas">Todas as categorias</option>
                <optgroup label="Categorias Clínicas Padronizadas">
                  {CATEGORIAS_PADRAO.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Categorias do Catálogo">
                  {categorias
                    .filter((c) => !(CATEGORIAS_PADRAO as readonly string[]).includes(c))
                    .map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                </optgroup>
              </select>
            </div>

            {/* Fabricante Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Laboratório / Fabricante
              </label>
              <select
                value={selectedFabricante}
                onChange={(e) => onFabricanteChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:border-[#14387F]"
              >
                <option value="todos">Todos os fabricantes</option>
                {fabricantes.map((fab) => (
                  <option key={fab} value={fab}>
                    {fab}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 tabular-nums">
        <span>
          Exibindo <strong className="text-slate-800 dark:text-slate-200">{totalResultados}</strong> produtos
          {value ? ` para "${value}"` : ''}
        </span>
        {hasActiveFilters && (
          <button onClick={onClearFilters} className="text-[#14387F] dark:text-blue-400 hover:underline">
            Redefinir filtros
          </button>
        )}
      </div>
    </div>
  );
};
