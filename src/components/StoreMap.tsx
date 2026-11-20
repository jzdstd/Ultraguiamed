import React, { useState } from 'react';
import {
  Map,
  Layers,
  ChevronRight,
  Package,
  Search,
  ExternalLink,
  MapPin,
  ArrowLeft,
  Maximize2,
  ImageOff,
} from 'lucide-react';
import { Fileira, Prateleira, ProdutoComLocalizacoes } from '../types/database';
import { db } from '../services/db';

interface StoreMapProps {
  onSelectProduct: (produto: ProdutoComLocalizacoes) => void;
  onOpenShelfViewer: (shelfId: string) => void;
}

export const StoreMap: React.FC<StoreMapProps> = ({
  onSelectProduct,
  onOpenShelfViewer,
}) => {
  const fileiras = db.getFileiras();
  const [selectedFileira, setSelectedFileira] = useState<Fileira | null>(fileiras[0] || null);
  const [selectedShelf, setSelectedShelf] = useState<Prateleira | null>(null);

  const shelves = selectedFileira ? db.getPrateleirasPorFileira(selectedFileira.letra) : [];
  const produtosNaPrateleira = selectedShelf
    ? db.getProdutosPorPrateleira(selectedShelf.id)
    : [];

  return (
    <div className="space-y-6">
      {/* Title & Store Layout Overview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#14387F] dark:text-white flex items-center gap-2">
            <Map className="w-6 h-6 text-[#14387F] dark:text-blue-400" />
            <span>Mapa da Farmácia — Fileiras Cadastradas</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Selecione uma fileira ({fileiras.map((f) => f.letra).join(', ')}) para ver a foto real e clique em qualquer prateleira para listar os medicamentos.
          </p>
        </div>
      </div>

      {/* Row Selector Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-2">
        {fileiras.map((f) => {
          const isSelected = selectedFileira?.letra === f.letra;
          return (
            <button
              key={f.letra}
              onClick={() => {
                setSelectedFileira(f);
                setSelectedShelf(null);
              }}
              className={`p-2.5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#14387F] text-white border-[#14387F] shadow-md scale-[1.02]'
                  : 'bg-white dark:bg-[#132238] border-slate-200 dark:border-slate-700 hover:border-[#14387F]/40 dark:hover:border-blue-400/40 text-slate-800 dark:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-black">
                  {f.letra}
                </span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {f.total_prateleiras} prat.
                </span>
              </div>
              <p
                className={`mt-2 text-[10px] line-clamp-1 font-medium ${
                  isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {f.descricao}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Fileira View */}
      {selectedFileira && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Row Photo with Clickable Shelves */}
          <div className="lg:col-span-7 bg-white dark:bg-[#132238] p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#14387F] text-white font-black text-sm">
                  {selectedFileira.letra}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {selectedFileira.nome}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {selectedFileira.descricao}
                  </p>
                </div>
              </div>

              {selectedFileira.foto_url && selectedFileira.foto_url !== 'Foto não cadastrada' && (
                <button
                  onClick={() => onOpenShelfViewer(selectedShelf?.id || selectedFileira.letra)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#14387F] text-white text-xs font-bold hover:bg-[#0e295d] transition-colors shadow-2xs shrink-0"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ver Foto Ampliada</span>
                </button>
              )}
            </div>

            {selectedFileira.foto_url && selectedFileira.foto_url !== 'Foto não cadastrada' ? (
              <>
                <div
                  onClick={() => onOpenShelfViewer(selectedShelf?.id || selectedFileira.letra)}
                  className="relative bg-slate-950 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-2 cursor-zoom-in group"
                  title="Clique para abrir a foto em tamanho grande (zoom)"
                >
                  <img
                    src={selectedFileira.foto_url}
                    alt={selectedFileira.nome}
                    className="max-h-[66vh] w-auto object-contain block mx-auto select-none transition-transform duration-200 group-hover:scale-[1.01]"
                  />
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 text-white text-[11px] font-semibold flex items-center gap-1.5 pointer-events-none opacity-90 group-hover:opacity-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Clique para ampliar</span>
                  </span>
                </div>

                <p className="mt-2 text-center text-xs text-slate-400 dark:text-slate-500">
                  Foto real da Fileira {selectedFileira.letra}. Clique na imagem para ampliar (zoom) ou selecione a prateleira ao lado.
                </p>
              </>
            ) : (
              <div className="bg-slate-100 dark:bg-slate-900/70 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl min-h-[280px] flex flex-col items-center justify-center p-8 text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
                  <ImageOff className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  Foto não cadastrada
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                  A imagem da Fileira {selectedFileira.letra} ainda não foi enviada. Você pode selecionar as prateleiras ao lado normalmente.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Shelves list & Products in Selected Shelf */}
          <div className="lg:col-span-5 space-y-4">
            {/* Shelf Grid Buttons */}
            <div className="p-4 rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Prateleiras da Fileira {selectedFileira.letra} (1 a {selectedFileira.total_prateleiras})
              </h4>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
                {shelves.map((s) => {
                  const count = db.getProdutosPorPrateleira(s.id).length;
                  const isSelected = selectedShelf?.id === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedShelf(s)}
                      className={`py-2 px-1.5 rounded-xl text-center transition-all ${
                        isSelected
                          ? 'bg-[#E30521] text-white font-bold shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs font-bold">{s.rotulo}</div>
                      <div
                        className={`text-[10px] ${
                          isSelected ? 'text-red-100' : 'text-slate-400'
                        }`}
                      >
                        {count} itens
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* List of Products in Selected Shelf */}
            <div className="p-4 rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#14387F] dark:text-blue-400" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {selectedShelf
                      ? `Medicamentos na Prateleira ${selectedShelf.rotulo}`
                      : 'Selecione uma prateleira acima'}
                  </h4>
                </div>
                {selectedShelf && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {produtosNaPrateleira.length} produtos
                  </span>
                )}
              </div>

              {selectedShelf ? (
                produtosNaPrateleira.length > 0 ? (
                  <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                    {produtosNaPrateleira.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => onSelectProduct(p)}
                        className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 hover:border-[#14387F] hover:bg-slate-100 cursor-pointer transition-all flex items-center justify-between"
                      >
                        <div className="min-w-0 pr-2">
                          <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                            {p.nome}
                          </h5>
                          {p.principio_ativo && (
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                              {p.principio_ativo} {p.concentracao && `· ${p.concentracao}`}
                            </p>
                          )}
                          <span className="text-[10px] text-slate-400">
                            {p.fabricante}
                          </span>
                        </div>

                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-slate-500 dark:text-slate-400 text-xs font-medium">
                    Nenhum produto cadastrado
                  </div>
                )
              ) : (
                <div className="p-6 text-center text-slate-500 dark:text-slate-400 text-xs">
                  Clique em qualquer prateleira na tabela acima para ver os medicamentos localizados nela.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
