import React, { useEffect, useState } from 'react';
import {
  X,
  MapPin,
  Star,
  ExternalLink,
  Layers,
  FileText,
  AlertCircle,
  ArrowRight,
  ShieldAlert,
  Pill,
  AlertTriangle,
  Stethoscope,
  Repeat,
} from 'lucide-react';
import { ProdutoComLocalizacoes } from '../types/database';
import { db, mapearCategoriasClinicas } from '../services/db';
import { AVISO_NAO_CONFIRMADO } from '../data/initialMedications';

interface ProductDetailModalProps {
  produto: ProdutoComLocalizacoes | null;
  onClose: () => void;
  onOpenShelf: (shelfId: string, produto: ProdutoComLocalizacoes) => void;
  onToggleFavorito: (id: string) => void;
  onSelectEquivalent: (produto: ProdutoComLocalizacoes) => void;
}

type FichaTab =
  | 'visao_geral'
  | 'para_que_serve'
  | 'como_utilizar'
  | 'contraindicacoes'
  | 'efeitos_colaterais'
  | 'interacoes'
  | 'orientacao';

const TABS_FICHA: Array<{ id: FichaTab; label: string }> = [
  { id: 'visao_geral', label: '1. Visão geral' },
  { id: 'para_que_serve', label: '2. Para que serve' },
  { id: 'como_utilizar', label: '3. Como utilizar' },
  { id: 'contraindicacoes', label: '4. Contraindicações' },
  { id: 'efeitos_colaterais', label: '5. Efeitos colaterais' },
  { id: 'interacoes', label: '6. Interações e cuidados' },
  { id: 'orientacao', label: '7. Info. atendimento' },
];

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  produto,
  onClose,
  onOpenShelf,
  onToggleFavorito,
  onSelectEquivalent,
}) => {
  const [activeTab, setActiveTab] = useState<FichaTab>('visao_geral');
  const [equivalentes, setEquivalentes] = useState<ProdutoComLocalizacoes[]>([]);
  const [apresentacoesRelacionadas, setApresentacoesRelacionadas] = useState<ProdutoComLocalizacoes[]>([]);

  useEffect(() => {
    setActiveTab('visao_geral');
    if (produto) {
      setEquivalentes(
        produto.principio_ativo
          ? db.getProdutosEquivalentes(produto.principio_ativo, produto.id)
          : []
      );
      setApresentacoesRelacionadas(db.getApresentacoesRelacionadas(produto));
    } else {
      setEquivalentes([]);
      setApresentacoesRelacionadas([]);
    }
  }, [produto]);

  if (!produto) return null;

  const hasLocalizacao = produto.localizacoes && produto.localizacoes.length > 0;
  const categoriesList = mapearCategoriasClinicas(produto);

  const renderFallbackNotice = () => (
    <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start justify-between gap-3">
      <div className="flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <span>{AVISO_NAO_CONFIRMADO}</span>
      </div>
      <a
        href="https://consultas.anvisa.gov.br/#/bulario/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-semibold text-[#14387F] dark:text-blue-400 hover:underline shrink-0"
      >
        <span>Bula Anvisa</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl my-auto rounded-3xl bg-white dark:bg-[#101F35] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Identification Bar */}
        <div className="p-4 sm:p-6 pb-3 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>{produto.categoria}</span>
                {(produto.classificacao || produto.origem) && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-bold text-[#14387F] dark:text-blue-400">
                      Classificação:{' '}
                      {produto.classificacao && produto.classificacao !== 'Não verificado'
                        ? produto.classificacao
                        : produto.origem}
                    </span>
                  </>
                )}
                {produto.tarja && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span
                      className={`font-bold ${
                        produto.tarja === 'Tarja preta'
                          ? 'text-slate-900 dark:text-white'
                          : produto.tarja === 'Tarja vermelha'
                            ? 'text-[#E30521] dark:text-red-400'
                            : produto.tarja === 'Sem tarja'
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : 'text-slate-500'
                      }`}
                    >
                      Tarja: {produto.tarja}
                    </span>
                  </>
                )}
                {produto.medicamento_controlado === 'Sim' && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-[11px] font-bold">
                      Medicamento Controlado
                    </span>
                  </>
                )}
                {produto.status_verificacao && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span
                      className={`font-bold ${
                        produto.status_verificacao === 'Informações verificadas'
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : produto.status_verificacao === 'Pendente de verificação'
                            ? 'text-amber-700 dark:text-amber-300'
                            : 'text-blue-700 dark:text-blue-300'
                      }`}
                    >
                      {produto.status_verificacao}
                    </span>
                  </>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {produto.nome}
              </h2>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span>
                  Princípio ativo:{' '}
                  <strong className="text-[#14387F] dark:text-blue-400">
                    {produto.principio_ativo || AVISO_NAO_CONFIRMADO}
                  </strong>
                </span>
                {produto.concentracao && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Concentração: <strong>{produto.concentracao}</strong></span>
                  </>
                )}
                {produto.forma_farmaceutica && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Forma: {produto.forma_farmaceutica}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <a
                href="https://consultas.anvisa.gov.br/#/bulario/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#14387F] hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors whitespace-nowrap"
                title="Consultar Bulário Eletrônico da Anvisa"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Consultar bula</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => onToggleFavorito(produto.id)}
                className="p-2 rounded-xl text-slate-400 hover:text-[#E30521] dark:hover:text-[#E30521] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={produto.favorito ? 'Remover dos favoritos' : 'Favoritar produto'}
              >
                <Star
                  className={`w-5 h-5 ${
                    produto.favorito ? 'fill-[#E30521] text-[#E30521]' : ''
                  }`}
                />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 7 Organized Tabs */}
          <div className="mt-4 flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
            {TABS_FICHA.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#14387F] text-white'
                      : 'bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Body for Active Tab */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* TAB 1: VISÃO GERAL */}
          {activeTab === 'visao_geral' && (
            <div className="space-y-5">
              {/* Identification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#162742] border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Nome comercial</span>
                  <strong className="text-slate-900 dark:text-white">{produto.nome}</strong>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Princípio ativo</span>
                  <strong className="text-slate-900 dark:text-white">
                    {produto.principio_ativo || 'Não verificado'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Fabricante / Laboratório</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                    {produto.fabricante || 'Não verificado'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Classificação comercial</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">
                    {produto.classificacao || produto.origem || 'Não verificado'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Concentração / Dosagem</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                    {produto.concentracao || 'Não verificado'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Apresentação / Forma farmacêutica</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                    {[produto.forma_farmaceutica, produto.apresentacao]
                      .filter((v) => v && v !== 'Não verificado')
                      .join(' · ') || 'Não verificado'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Categoria terapêutica</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                    {categoriesList.length > 0 ? categoriesList.join(' · ') : produto.categoria}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Via de administração</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                    {produto.via_administracao || 'Não verificado'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Necessidade de receita médica</span>
                  <span className="text-slate-900 dark:text-white font-semibold">
                    {produto.exige_receita || 'Não verificado'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Classificação de tarja</span>
                  <span
                    className={`font-bold ${
                      produto.tarja === 'Tarja preta'
                        ? 'text-slate-900 dark:text-white'
                        : produto.tarja === 'Tarja vermelha'
                          ? 'text-[#E30521] dark:text-red-400'
                          : produto.tarja === 'Sem tarja'
                            ? 'text-emerald-700 dark:text-emerald-400'
                            : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {produto.tarja || 'Não verificado'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Medicamento controlado</span>
                  <span className="text-slate-900 dark:text-white font-semibold">
                    {produto.medicamento_controlado || 'Não verificado'}
                    {produto.tipo_controle && produto.medicamento_controlado === 'Sim'
                      ? ` · ${produto.tipo_controle}`
                      : ''}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-xs">Orientações de armazenamento</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">
                    {produto.orientacoes_armazenamento || 'Não verificado'}
                  </span>
                </div>
              </div>

              {/* Shelf Locations */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#162742] border border-slate-200 dark:border-slate-700/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                  Localização física na farmácia
                </span>

                {hasLocalizacao ? (
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {produto.localizacoes.map((loc) => {
                        const fileira = loc.charAt(0);
                        const num = loc.slice(1);
                        return (
                          <div
                            key={loc}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#0F1A2E] border-2 border-[#E30521] shadow-xs"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E30521] text-white">
                              <MapPin className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-extrabold text-[#E30521]">
                                Fileira {fileira} · Prateleira {num}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">
                                Código {loc}
                              </div>
                            </div>

                            <button
                              onClick={() => onOpenShelf(loc, produto)}
                              className="ml-2 px-3 py-1.5 rounded-lg bg-[#E30521] hover:bg-[#c9041d] text-white text-xs font-bold transition-colors whitespace-nowrap"
                            >
                              Ver na prateleira
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {produto.observacao_localizacao && (
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                        <strong>Observação de posição:</strong> {produto.observacao_localizacao}
                      </p>
                    )}
                  </div>
                ) : produto.situacao === 'balcao' ? (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-950 dark:text-blue-100">
                    <MapPin className="w-5 h-5 text-[#14387F] dark:text-blue-400 shrink-0" />
                    <div className="text-xs sm:text-sm">
                      <strong>Balcão de atendimento</strong>
                      <p className="text-xs text-blue-800 dark:text-blue-300 mt-0.5">
                        {produto.observacao_localizacao ||
                          'Fica no balcão de atendimento (não é prateleira, sem código de prateleira).'}
                      </p>
                    </div>
                  </div>
                ) : produto.situacao === 'indisponivel_em_loja' ? (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200">
                    <AlertTriangle className="w-5 h-5 text-[#E30521] shrink-0" />
                    <div className="text-xs sm:text-sm">
                      <strong>Indisponível em loja</strong>
                      <p className="text-xs text-rose-700 dark:text-rose-300 mt-0.5">
                        Este medicamento está cadastrado no sistema sem prateleira atribuída por estar indisponível em loja no momento.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <div className="text-xs sm:text-sm">
                      <strong>
                        {produto.observacao_localizacao || 'Localização ainda não cadastrada'}
                      </strong>
                      <p className="text-xs text-amber-700 dark:text-amber-300 mt-0.5">
                        Este produto pode ser vinculado a uma ou mais prateleiras através do Painel Admin.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Concentrations / Presentations of the Same Commercial Medication */}
              {apresentacoesRelacionadas.length > 0 && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Repeat className="w-4 h-4 text-[#14387F] dark:text-blue-400" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Outras concentrações e apresentações desta linha ({apresentacoesRelacionadas.length})
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Atenção: apresentações diferentes podem ter concentrações ou composições distintas. Confira sempre individualmente.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {apresentacoesRelacionadas.map((rel) => (
                      <button
                        key={rel.id}
                        type="button"
                        onClick={() => onSelectEquivalent(rel)}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-[#14387F] text-left transition-colors flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {rel.nome}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {rel.concentracao || rel.forma_farmaceutica || rel.principio_ativo}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Same Active Principle Group */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#14387F] dark:text-blue-400" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Mesmo princípio ativo ({equivalentes.length} opções no catálogo)
                    </h3>
                  </div>
                </div>

                {equivalentes.length > 0 ? (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {equivalentes.map((eq) => {
                      const eqLoc = eq.localizacoes.length > 0 ? eq.localizacoes.join(', ') : 'Sem prateleira';
                      return (
                        <button
                          key={eq.id}
                          type="button"
                          onClick={() => onSelectEquivalent(eq)}
                          className="w-full text-left flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors"
                        >
                          <div className="min-w-0 pr-2">
                            <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                              {eq.nome}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                              {[eq.origem, eq.fabricante, eq.concentracao].filter(Boolean).join(' · ')}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs font-bold text-[#E30521]">{eqLoc}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Nenhum outro registro com este mesmo princípio ativo confirmado no momento.
                  </p>
                )}
              </div>

              {/* Source, Verification Status & Last Update Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
                <span>
                  Status: <strong>{produto.status_verificacao || 'Pendente de verificação'}</strong> · Fonte:{' '}
                  {produto.fonte_informacao || 'Catálogo Ultramed / Anvisa'}
                </span>
                <span>
                  {produto.data_ultima_verificacao
                    ? `Última verificação: ${produto.data_ultima_verificacao}`
                    : produto.atualizado_em
                      ? `Última atualização: ${new Date(produto.atualizado_em).toLocaleDateString('pt-BR')}`
                      : ''}
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: PARA QUE SERVE */}
          {activeTab === 'para_que_serve' && (
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              {produto.para_que_serve_detalhes ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#14387F] dark:text-blue-400 mb-1">
                      Finalidade do medicamento
                    </h4>
                    <p>{produto.para_que_serve_detalhes.finalidade}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Condições que trata
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.para_que_serve_detalhes.condicoes.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Sintomas que pode aliviar
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.para_que_serve_detalhes.sintomas.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Como funciona no organismo
                    </h4>
                    <p className="text-xs sm:text-sm">{produto.para_que_serve_detalhes.como_funciona}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Em quais situações pode ser utilizado
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                      {produto.para_que_serve_detalhes.situacoes_uso.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : produto.para_que_serve &&
                produto.para_que_serve !== 'Não verificado' &&
                !produto.para_que_serve.toLowerCase().includes('informação não confirmada') ? (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Indicação / Finalidade registrada
                    </h4>
                    <p>{produto.para_que_serve}</p>
                  </div>
                </div>
              ) : (
                renderFallbackNotice()
              )}
            </div>
          )}

          {/* TAB 3: COMO UTILIZAR */}
          {activeTab === 'como_utilizar' && (
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              {produto.como_utilizar_detalhes ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Via de administração</h4>
                      <p className="font-medium">{produto.como_utilizar_detalhes.via}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Alimentos ou jejum</h4>
                      <p>{produto.como_utilizar_detalhes.alimentos_jejum}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#14387F] dark:text-blue-400">
                      Posologia aprovada em bula
                    </h4>
                    <p>{produto.como_utilizar_detalhes.posologia_bula}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Orientações sobre horários</h4>
                      <p className="text-xs sm:text-sm">{produto.como_utilizar_detalhes.horarios}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Cuidados durante o uso</h4>
                      <p className="text-xs sm:text-sm">{produto.como_utilizar_detalhes.cuidados_uso}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                    <h4 className="text-xs font-bold text-[#14387F] dark:text-blue-300 mb-1">
                      Diferenças entre apresentações adultas e pediátricas
                    </h4>
                    <p className="text-xs sm:text-sm">{produto.como_utilizar_detalhes.adulto_vs_pediatrico}</p>
                  </div>
                </div>
              ) : (produto.como_tomar &&
                  produto.como_tomar.trim() &&
                  produto.como_tomar !== 'Não verificado' &&
                  !produto.como_tomar.toLowerCase().includes('informação não confirmada')) ||
                (produto.via_administracao && produto.via_administracao !== 'Não verificado') ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Via de administração</h4>
                      <p className="font-medium">{produto.via_administracao || 'Não verificado'}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Necessita acompanhamento médico</h4>
                      <p className="text-xs sm:text-sm">{produto.acompanhamento_medico || 'Não verificado'}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#14387F] dark:text-blue-400">
                      Como utilizar o medicamento / Orientações de uso
                    </h4>
                    <p>{produto.orientacoes_uso || produto.como_tomar || 'Não verificado'}</p>
                  </div>

                  {(produto.cuidados_tratamento || produto.restricoes_uso) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Cuidados durante o tratamento</h4>
                        <p className="text-xs sm:text-sm">{produto.cuidados_tratamento || 'Não verificado'}</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Principais restrições de uso</h4>
                        <p className="text-xs sm:text-sm">{produto.restricoes_uso || 'Não verificado'}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                renderFallbackNotice()
              )}

              <p className="text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 px-3.5 py-2.5 rounded-xl border border-amber-200 dark:border-amber-800/60">
                Orientação geral. A dose correta é a da receita ou bula oficial. Dúvidas: encaminhar ao farmacêutico.
              </p>
            </div>
          )}

          {/* TAB 4: CONTRAINDICAÇÕES */}
          {activeTab === 'contraindicacoes' && (
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              {produto.contraindicacoes_detalhes ? (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#E30521] dark:text-red-400 mb-2 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4" />
                      Quem não deve utilizar
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                      {produto.contraindicacoes_detalhes.quem_nao_deve_usar.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Gestantes e lactantes</h4>
                      <p className="text-xs sm:text-sm">{produto.contraindicacoes_detalhes.gestantes_lactantes}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Crianças e idosos</h4>
                      <p className="text-xs sm:text-sm">{produto.contraindicacoes_detalhes.criancas_idosos}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                      Doenças ou condições que exigem atenção
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                      {produto.contraindicacoes_detalhes.doencas_atencao.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Histórico de alergias relevantes</h4>
                    <p className="text-xs sm:text-sm">{produto.contraindicacoes_detalhes.alergias_relevantes}</p>
                  </div>
                </div>
              ) : produto.contraindicacoes &&
                produto.contraindicacoes.trim() &&
                produto.contraindicacoes !== 'Não verificado' ? (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E30521] dark:text-red-400">
                    Contraindicações
                  </h4>
                  <p>{produto.contraindicacoes}</p>
                </div>
              ) : (
                renderFallbackNotice()
              )}
            </div>
          )}

          {/* TAB 5: EFEITOS COLATERAIS */}
          {activeTab === 'efeitos_colaterais' && (
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              {produto.efeitos_colaterais_detalhes ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Reações mais comuns</h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.efeitos_colaterais_detalhes.comuns.map((e, i) => (
                          <li key={i}>{e}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Reações menos frequentes</h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.efeitos_colaterais_detalhes.menos_frequentes.map((e, i) => (
                          <li key={i}>{e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#E30521] dark:text-red-400">
                      Sinais de reações graves
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                      {produto.efeitos_colaterais_detalhes.sinais_graves.map((g, i) => (
                        <li key={i}>{g}</li>
                      ))}
                    </ul>
                    <p className="pt-2 text-xs font-semibold text-red-900 dark:text-red-200 border-t border-red-200/70 dark:border-red-900/50">
                      Quando interromper e procurar médico: {produto.efeitos_colaterais_detalhes.quando_interromper}
                    </p>
                  </div>
                </div>
              ) : produto.efeitos_colaterais &&
                produto.efeitos_colaterais.trim() &&
                produto.efeitos_colaterais !== 'Não verificado' ? (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Principais efeitos colaterais
                  </h4>
                  <p>{produto.efeitos_colaterais}</p>
                </div>
              ) : (
                renderFallbackNotice()
              )}
            </div>
          )}

          {/* TAB 6: INTERAÇÕES E CUIDADOS ADICIONAIS */}
          {activeTab === 'interacoes' && (
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              {produto.interacoes_detalhes ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Medicamentos que podem interagir</h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.interacoes_detalhes.medicamentos_interagem.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Combinações que exigem atenção</h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.interacoes_detalhes.combinacoes_atencao.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50">
                    <h4 className="text-xs font-bold text-[#E30521] dark:text-red-400 mb-1.5">Associações que devem ser evitadas</h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                      {produto.interacoes_detalhes.associacoes_evitar.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-xs font-semibold">
                      Quando consultar o farmacêutico: {produto.interacoes_detalhes.quando_consultar_farmaceutico}
                    </p>
                  </div>
                </div>
              ) : produto.interacoes_medicamentosas &&
                produto.interacoes_medicamentosas.trim() &&
                produto.interacoes_medicamentosas !== 'Não verificado' ? (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Interações medicamentosas relevantes
                  </h4>
                  <p>{produto.interacoes_medicamentosas}</p>
                </div>
              ) : (
                renderFallbackNotice()
              )}

              {/* H. Cuidados Adicionais & Armazenamento */}
              {produto.cuidados_adicionais ? (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#14387F] dark:text-blue-400 flex items-center gap-1.5">
                    <Pill className="w-4 h-4" />
                    Cuidados adicionais de tratamento e armazenamento
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Durante o tratamento</strong>
                      <span className="text-slate-600 dark:text-slate-300">{produto.cuidados_adicionais.durante_tratamento}</span>
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Risco de automedicação</strong>
                      <span className="text-slate-600 dark:text-slate-300">{produto.cuidados_adicionais.risco_automedicacao}</span>
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Uso prolongado</strong>
                      <span className="text-slate-600 dark:text-slate-300">{produto.cuidados_adicionais.risco_uso_prolongado}</span>
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Sonolência</strong>
                      <span className="text-slate-600 dark:text-slate-300">{produto.cuidados_adicionais.sonolencia}</span>
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Cuidados com álcool</strong>
                      <span className="text-slate-600 dark:text-slate-300">{produto.cuidados_adicionais.alcool}</span>
                    </div>
                    <div>
                      <strong className="block text-slate-900 dark:text-white">Armazenamento</strong>
                      <span className="text-slate-600 dark:text-slate-300">{produto.cuidados_adicionais.armazenamento}</span>
                    </div>
                  </div>
                </div>
              ) : (
                produto.orientacoes_armazenamento &&
                produto.orientacoes_armazenamento !== 'Não verificado' && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#14387F] dark:text-blue-400 flex items-center gap-1.5">
                      <Pill className="w-4 h-4" />
                      Orientações de armazenamento
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      {produto.orientacoes_armazenamento}
                    </p>
                  </div>
                )
              )}
            </div>
          )}

          {/* TAB 7: INFORMAÇÕES PARA ATENDIMENTO */}
          {activeTab === 'orientacao' && (
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>
                  Lembrete de segurança: este módulo auxilia na informação e localização no balcão. Não realiza diagnósticos, não prescreve medicamentos e não recomenda substituição terapêutica.
                </span>
              </div>

              {produto.informacoes_atendimento && (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#14387F] dark:text-blue-400 mb-1">
                      Para qual finalidade é utilizado
                    </h4>
                    <p className="text-xs sm:text-sm">
                      {produto.informacoes_atendimento.finalidade_atendimento}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                      <h4 className="text-xs font-bold text-[#14387F] dark:text-blue-300 mb-1.5">
                        Informações básicas para o atendente
                      </h4>
                      <p className="text-xs sm:text-sm">
                        {produto.informacoes_atendimento.informacoes_basicas_atendente}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                        Cuidados a informar ao cliente
                      </h4>
                      <p className="text-xs sm:text-sm">
                        {produto.informacoes_atendimento.cuidados_informar}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50">
                      <h4 className="text-xs font-bold text-[#E30521] dark:text-red-400 mb-1.5">
                        Quando encaminhar ao farmacêutico
                      </h4>
                      <p className="text-xs sm:text-sm">
                        {produto.informacoes_atendimento.quando_encaminhar_farmaceutico}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50">
                      <h4 className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-1.5">
                        Quando orientar procurar um médico
                      </h4>
                      <p className="text-xs sm:text-sm">
                        {produto.informacoes_atendimento.quando_procurar_medico}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {produto.orientacao_atendimento ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                        Queixas consideradas (sob avaliação)
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.orientacao_atendimento.queixas_consideradas.map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                        Características do cliente a avaliar
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.orientacao_atendimento.caracteristicas_avaliar.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                    <h4 className="text-xs font-bold text-[#14387F] dark:text-blue-300 mb-2">
                      Perguntas obrigatórias antes de orientar
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                      {produto.orientacao_atendimento.perguntas_balcao.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                        Quando NÃO é apropriado
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.orientacao_atendimento.quando_nao_apropriado.map((n, i) => (
                          <li key={i}>{n}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50">
                      <h4 className="text-xs font-bold text-[#E30521] dark:text-red-400 mb-2">
                        Quando encaminhar ao farmacêutico
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                        {produto.orientacao_atendimento.quando_encaminhar_farmaceutico.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : !produto.informacoes_atendimento ? (
                produto.o_que_indicar && produto.o_que_indicar.trim() ? (
                  <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                    <p>{produto.o_que_indicar}</p>
                  </div>
                ) : (
                  renderFallbackNotice()
                )
              ) : null}
            </div>
          )}
        </div>

        {/* Bottom Footer Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 dark:bg-[#132238] border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <a
            href="https://consultas.anvisa.gov.br/#/bulario/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14387F] dark:text-blue-400 hover:underline"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Consultar bula oficial (Anvisa)</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
