import React from 'react';
import { MapPin, Star, AlertTriangle, Eye, ChevronRight } from 'lucide-react';
import { ProdutoComLocalizacoes } from '../types/database';

interface ProductCardProps {
  produto: ProdutoComLocalizacoes;
  onOpenDetails: (produto: ProdutoComLocalizacoes) => void;
  onOpenShelf: (shelfId: string, produto: ProdutoComLocalizacoes) => void;
  onToggleFavorito: (id: string, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  produto,
  onOpenDetails,
  onOpenShelf,
  onToggleFavorito,
}) => {
  const hasLocalizacao = produto.localizacoes && produto.localizacoes.length > 0;

  return (
    <div
      onClick={() => onOpenDetails(produto)}
      className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#14387F]/30 dark:hover:border-blue-500/30 transition-all cursor-pointer active:scale-[0.99]"
    >
      <div>
        {/* Top Metadata (Clean unboxed typography) and Favorite Star */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <span>{produto.categoria || 'Medicamento'}</span>
            {(produto.classificacao || produto.origem) && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#14387F] dark:text-blue-400">
                  {produto.classificacao && produto.classificacao !== 'Não verificado'
                    ? produto.classificacao
                    : produto.origem}
                </span>
              </>
            )}
            {produto.tarja && produto.tarja !== 'Não verificado' && (
              <>
                <span aria-hidden="true">·</span>
                <span
                  className={`font-bold ${
                    produto.tarja === 'Tarja preta'
                      ? 'text-slate-900 dark:text-white underline decoration-[#E30521]'
                      : produto.tarja === 'Tarja vermelha'
                        ? 'text-[#E30521] dark:text-red-400'
                        : 'text-emerald-700 dark:text-emerald-400'
                  }`}
                >
                  {produto.tarja}
                </span>
              </>
            )}
            {produto.medicamento_controlado === 'Sim' && (
              <>
                <span aria-hidden="true">·</span>
                <span className="px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-[10px] font-bold">
                  Controlado
                </span>
              </>
            )}
            {(produto.status_verificacao === 'Pendente de verificação' ||
              produto.status_conferencia) && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-amber-700 dark:text-amber-300">
                  {produto.status_conferencia || produto.status_verificacao}
                </span>
              </>
            )}
          </div>

          <button
            onClick={(e) => onToggleFavorito(produto.id, e)}
            className="p-1.5 -mr-1.5 -mt-1 rounded-lg text-slate-300 hover:text-[#E30521] dark:text-slate-600 dark:hover:text-[#E30521] transition-colors shrink-0"
            title={produto.favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            aria-label="Favoritar medicamento"
          >
            <Star
              className={`w-5 h-5 ${
                produto.favorito ? 'fill-[#E30521] text-[#E30521]' : ''
              }`}
            />
          </button>
        </div>

        {/* Product Name */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#14387F] dark:group-hover:text-blue-400 transition-colors">
          {produto.nome}
        </h3>

        {/* Active Principle & Concentration */}
        {produto.principio_ativo && (
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-1">
            <span className="font-medium text-slate-700 dark:text-slate-200">
              {produto.principio_ativo}
            </span>
            {produto.concentracao && produto.concentracao !== 'Não verificado'
              ? ` · ${produto.concentracao}`
              : ''}
          </p>
        )}

        {/* Pharmaceutical Form, Presentation & Manufacturer */}
        <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-1.5">
          {produto.forma_farmaceutica && produto.forma_farmaceutica !== 'Não verificado' && (
            <span>{produto.forma_farmaceutica}</span>
          )}
          {produto.apresentacao && (
            <>
              {produto.forma_farmaceutica && produto.forma_farmaceutica !== 'Não verificado' && (
                <span aria-hidden="true">·</span>
              )}
              <span>{produto.apresentacao}</span>
            </>
          )}
          {produto.fabricante && produto.fabricante !== 'Não verificado' && (
            <>
              {((produto.forma_farmaceutica && produto.forma_farmaceutica !== 'Não verificado') ||
                produto.apresentacao) && <span aria-hidden="true">·</span>}
              <span className="font-medium text-slate-600 dark:text-slate-300">{produto.fabricante}</span>
            </>
          )}
        </div>

        {/* Prescription Note */}
        {produto.exige_receita && produto.exige_receita !== 'Não verificado' && (
          <p className="mt-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
            {produto.exige_receita}
          </p>
        )}

        {/* Short Indication */}
        {produto.para_que_serve && (
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
            {produto.para_que_serve}
          </p>
        )}
      </div>

      {/* Bottom Area: Shelf Location & Quick View Button */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {hasLocalizacao ? (
            <div className="flex flex-wrap items-center gap-1.5">
              {produto.localizacoes.map((loc) => {
                const fileira = loc.charAt(0);
                const num = loc.slice(1);
                return (
                  <button
                    key={loc}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenShelf(loc, produto);
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-[#E30521] hover:bg-[#E30521] hover:text-white transition-all text-xs font-bold shadow-2xs group/shelf"
                    title={`Ver prateleira ${loc} na foto da Fileira ${fileira}`}
                  >
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      Fileira {fileira} · Prateleira {num}
                    </span>
                    <Eye className="w-3 h-3 opacity-60 group-hover/shelf:opacity-100 ml-0.5" />
                  </button>
                );
              })}
            </div>
          ) : produto.situacao === 'balcao' ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-[#14387F] dark:text-blue-300 text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Balcão de atendimento</span>
            </div>
          ) : produto.situacao === 'indisponivel_em_loja' ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-[#E30521] dark:text-rose-300 text-xs font-bold">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>Indisponível em loja</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 text-xs font-medium">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>{produto.observacao_localizacao || 'Localização ainda não cadastrada'}</span>
            </div>
          )}

          <div className="text-slate-400 group-hover:text-[#14387F] dark:group-hover:text-blue-400 transition-colors ml-auto flex items-center text-xs font-medium gap-0.5">
            <span className="hidden sm:inline">Ver ficha</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {produto.observacao_localizacao && (
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Obs.: {produto.observacao_localizacao}
          </p>
        )}
      </div>
    </div>
  );
};
