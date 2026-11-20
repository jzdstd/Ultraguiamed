import React, { useState } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Package,
} from 'lucide-react';
import { Prateleira, ProdutoComLocalizacoes } from '../types/database';
import { db } from '../services/db';

interface ShelfViewerModalProps {
  shelfId: string;
  produto?: ProdutoComLocalizacoes | null;
  onClose: () => void;
  onSelectShelf?: (shelfId: string) => void;
}

export const ShelfViewerModal: React.FC<ShelfViewerModalProps> = ({
  shelfId,
  produto,
  onClose,
  onSelectShelf,
}) => {
  const [zoom, setZoom] = useState(1);
  const fileiraLetra = shelfId.charAt(0).toUpperCase();
  const isRowOnly = shelfId.trim().length === 1;
  const fileiras = db.getFileiras();
  const fileira = fileiras.find((f) => f.letra === fileiraLetra);
  const prateleiras = db.getPrateleirasPorFileira(fileiraLetra);
  const currentShelf = !isRowOnly
    ? prateleiras.find((s) => s.id === shelfId) || {
        id: shelfId,
        fileira: fileiraLetra,
        numero: parseInt(shelfId.slice(1), 10) || 1,
        rotulo: shelfId,
        x: 20,
        y: 20,
        largura: 60,
        altura: 8,
      }
    : null;

  // Products on this shelf
  const produtosNaPrateleira = currentShelf ? db.getProdutosPorPrateleira(currentShelf.id) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#0F1A2E] border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-100 dark:bg-[#132238] border-b border-slate-200 dark:border-slate-800 gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#E30521] text-white font-bold shadow-xs shrink-0">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-extrabold text-[#14387F] dark:text-white">
                  {currentShelf ? `Prateleira ${currentShelf.rotulo}` : `Fileira ${fileiraLetra}`}
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-[#E30521]">
                  {currentShelf
                    ? `Fileira ${currentShelf.fileira} · Posição ${currentShelf.numero}`
                    : `${prateleiras.length} prateleiras`}
                </span>
              </div>
              {produto && (
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-sm sm:max-w-md">
                  Localizando: <strong className="text-slate-800 dark:text-slate-200">{produto.nome}</strong>
                </p>
              )}
            </div>
          </div>

          {/* Controls: Zoom & Close */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setZoom((z) => Math.max(0.7, Math.round((z - 0.25) * 100) / 100))}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50"
              title="Diminuir Zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom(1)}
              className="px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50"
              title="Redefinir Zoom"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={() => setZoom((z) => Math.min(3, Math.round((z + 0.25) * 100) / 100))}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50"
              title="Aumentar Zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="ml-1 sm:ml-2 p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              title="Fechar visualizador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Multi-shelf Switcher Bar (if product is on other shelves e.g. E4, G8, G9) */}
        {produto && produto.localizacoes.length > 1 && (
          <div className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-red-50 dark:bg-red-950/30 border-b border-red-100 dark:border-red-900/40 text-xs text-[#E30521]">
            <span className="font-semibold shrink-0">Este produto também está em:</span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {produto.localizacoes.map((loc) => (
                <button
                  key={loc}
                  onClick={() => onSelectShelf && onSelectShelf(loc)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-colors shrink-0 ${
                    loc === shelfId
                      ? 'bg-[#E30521] text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 border border-red-200 dark:border-red-800 text-[#E30521] hover:bg-red-100'
                  }`}
                >
                  Prateleira {loc}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Photo Area with Zoom */}
        <div className="relative flex-1 bg-slate-900 overflow-auto flex items-center justify-center p-2 sm:p-4 select-none touch-pan-x touch-pan-y">
          {fileira?.foto_url && fileira.foto_url !== 'Foto não cadastrada' ? (
            <div
              onClick={() => setZoom((z) => (z > 1 ? 1 : 1.75))}
              className={`relative inline-block transition-transform duration-150 ease-out shadow-2xl rounded-xl overflow-hidden ${
                zoom > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
                maxHeight: '100%',
              }}
              title={zoom > 1 ? 'Clique para voltar a 100%' : 'Clique para ampliar'}
            >
              {/* Photo of the row */}
              <img
                src={fileira.foto_url}
                alt={`Fileira ${fileiraLetra}`}
                className="max-h-[68vh] sm:max-h-[72vh] w-auto object-contain block mx-auto pointer-events-none select-none"
              />
            </div>
          ) : (
            <div className="text-white text-center p-8 space-y-2">
              <p className="text-base font-bold">Foto não cadastrada</p>
              <p className="text-xs text-slate-300">
                A foto da Fileira {fileiraLetra} ainda não foi enviada no Painel Admin.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Drawer: Products on this shelf & row navigator */}
        <div className="px-4 sm:px-6 py-3 bg-white dark:bg-[#132238] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Package className="w-4 h-4 text-[#14387F] dark:text-blue-400 shrink-0" />
            {currentShelf ? (
              produtosNaPrateleira.length > 0 ? (
                <span>
                  <strong>{produtosNaPrateleira.length}</strong> produtos cadastrados nesta prateleira ({currentShelf.rotulo})
                </span>
              ) : (
                <span>Nenhum produto cadastrado nesta prateleira ({currentShelf.rotulo})</span>
              )
            ) : (
              <span>Selecione uma prateleira de {fileiraLetra} para ver os produtos</span>
            )}
          </div>

          {/* Quick jump to adjacent shelves */}
          <div className="flex items-center gap-2 max-w-full overflow-x-auto no-scrollbar">
            <span className="text-slate-400 hidden sm:inline shrink-0">Navegar na fileira {fileiraLetra}:</span>
            <div className="flex items-center gap-1">
              {prateleiras.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectShelf && onSelectShelf(s.id)}
                  className={`min-w-7 px-1.5 h-7 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    s.id === shelfId
                      ? 'bg-[#E30521] text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                  title={`Ver prateleira ${s.rotulo}`}
                >
                  {s.rotulo === 'A06' ? 'A06' : s.numero}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
