import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createWorker, type Worker } from 'tesseract.js';
import {
  Camera,
  FolderOpen,
  FileText,
  Trash2,
  Copy,
  Check,
  ZoomIn,
  X,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from 'lucide-react';

interface DetectedChip {
  id: string;
  label: 'Data' | 'Conselho' | 'CPF';
  value: string;
}

function extractChipsFromText(text: string): DetectedChip[] {
  if (!text) return [];
  const chips: DetectedChip[] = [];
  const seen = new Set<string>();

  const add = (label: DetectedChip['label'], raw: string) => {
    const value = raw.trim();
    if (!value) return;
    const key = `${label}:${value}`;
    if (seen.has(key)) return;
    seen.add(key);
    chips.push({ id: key, label, value });
  };

  let match: RegExpExecArray | null;

  const dateRe = /\b(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})\b/g;
  while ((match = dateRe.exec(text)) !== null) {
    add('Data', match[0]);
  }

  const councilRe = /\b(CRM|CRO|CRMV|CRF)[\s\-\/:]*([A-Z]{2})?[\s\-\/:nº°.]*(\d{3,7})\b/gi;
  while ((match = councilRe.exec(text)) !== null) {
    add('Conselho', match[0].replace(/\s+/g, ' '));
  }

  const cpfRe = /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g;
  while ((match = cpfRe.exec(text)) !== null) {
    add('CPF', match[0]);
  }

  return chips;
}

function preprocessImageToCanvas(
  img: HTMLImageElement,
  enhanceContrast: boolean
): HTMLCanvasElement {
  const maxDim = 2200;
  const scale = Math.min(2, maxDim / Math.max(img.width, img.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(img.width * scale));
  canvas.height = Math.max(1, Math.round(img.height * scale));

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('canvas');
  }

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  if (enhanceContrast) {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const pixelCount = data.length / 4;
    let sum = 0;

    for (let i = 0; i < data.length; i += 4) {
      const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      data[i] = data[i + 1] = data[i + 2] = gray;
      sum += gray;
    }

    const mean = sum / pixelCount;

    for (let i = 0; i < data.length; i += 4) {
      let gray = (data[i] - mean) * 1.6 + mean + 20;
      if (gray < 0) gray = 0;
      else if (gray > 255) gray = 255;
      data[i] = data[i + 1] = data[i + 2] = gray;
    }

    ctx.putImageData(imgData, 0, 0);
  }

  return canvas;
}

async function copyTextToClipboard(value: string): Promise<void> {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Fallback below
    }
  }
  const temp = document.createElement('textarea');
  temp.value = value;
  temp.style.position = 'fixed';
  temp.style.opacity = '0';
  document.body.appendChild(temp);
  temp.select();
  try {
    document.execCommand('copy');
  } finally {
    temp.remove();
  }
}

export const PrescriptionReaderView: React.FC = () => {
  const camInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewUrlRef = useRef<string | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);
  const [enhanceContrast, setEnhanceContrast] = useState<boolean>(true);

  const [isReading, setIsReading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [statusError, setStatusError] = useState<boolean>(false);

  const [extractedText, setExtractedText] = useState<string>('');
  const [copiedFull, setCopiedFull] = useState<boolean>(false);
  const [copiedChipId, setCopiedChipId] = useState<string | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const chips = useMemo(() => extractChipsFromText(extractedText), [extractedText]);

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    };
  }, []);

  const handleSelectFile = (file: File | undefined) => {
    if (!file) return;

    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
      previewUrlRef.current = null;
    }

    const objectUrl = URL.createObjectURL(file);
    previewUrlRef.current = objectUrl;

    const img = new Image();
    img.onload = () => {
      setLoadedImage(img);
      setPreviewUrl(objectUrl);
      setStatusMessage('');
      setStatusError(false);
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      previewUrlRef.current = null;
      setLoadedImage(null);
      setPreviewUrl(null);
      setStatusMessage('Não consegui abrir essa imagem.');
      setStatusError(true);
    };
    img.src = objectUrl;
  };

  const handleClearAll = () => {
    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
      previewUrlRef.current = null;
    }
    if (camInputRef.current) camInputRef.current.value = '';
    if (fileInputRef.current) fileInputRef.current.value = '';

    setLoadedImage(null);
    setPreviewUrl(null);
    setExtractedText('');
    setStatusMessage('');
    setStatusError(false);
    setProgress(0);
    setCopiedFull(false);
    setCopiedChipId(null);
    setIsZoomOpen(false);
  };

  const handleReadPrescription = async () => {
    if (!loadedImage || isReading) return;

    setIsReading(true);
    setProgress(0);
    setStatusError(false);
    setStatusMessage(
      'Carregando o leitor… na primeira vez demora um pouco (precisa de internet).'
    );

    let worker: Worker | null = null;

    try {
      const processedCanvas = preprocessImageToCanvas(loadedImage, enhanceContrast);

      worker = await createWorker('por', 1, {
        logger: (m) => {
          if (m.status === 'recognizing text') {
            const pct = Math.round((m.progress || 0) * 100);
            setProgress(pct);
            setStatusMessage(`Lendo… ${pct}%`);
          } else if (m.status) {
            setStatusMessage(`Preparando… (${m.status})`);
          }
        },
      });

      const result = await worker.recognize(processedCanvas);
      const cleanedText = (result.data.text || '')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

      setExtractedText(cleanedText);

      if (cleanedText) {
        setStatusMessage('Pronto. Confira o texto com a foto.');
        setStatusError(false);
      } else {
        setStatusMessage('Não consegui ler texto. Tente outra foto, mais nítida.');
        setStatusError(true);
      }
    } catch (err) {
      const msg =
        err instanceof Error && err.message.toLowerCase().includes('fetch')
          ? 'Não consegui carregar o leitor. Verifique a internet e tente novamente.'
          : 'Erro ao ler a receita. Tente outra foto.';
      setStatusMessage(msg);
      setStatusError(true);
    } finally {
      if (worker) {
        try {
          await worker.terminate();
        } catch {
          // Ignore termination error
        }
      }
      setIsReading(false);
    }
  };

  const handleCopyFullText = async () => {
    if (!extractedText.trim()) return;
    await copyTextToClipboard(extractedText);
    setCopiedFull(true);
    window.setTimeout(() => setCopiedFull(false), 1200);
  };

  const handleCopyChip = async (chip: DetectedChip) => {
    await copyTextToClipboard(chip.value);
    setCopiedChipId(chip.id);
    window.setTimeout(() => {
      setCopiedChipId((curr) => (curr === chip.id ? null : curr));
    }, 1200);
  };

  return (
    <div className="space-y-5">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-[#14387F] to-[#1D4FA8] text-white rounded-2xl p-5 sm:p-6 border-b-4 border-[#E30521] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/15 shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Leitor de receita (grátis)
              </h2>
              <p className="text-sm text-blue-100 mt-0.5">
                Assistente Ultramed – lê o texto da receita e deixa pronto para copiar
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/15 text-xs font-medium self-start sm:self-center">
            <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>100% local no aparelho • Sem API</span>
          </div>
        </div>
      </div>

      {/* Main 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Column 1: Photo capture & controls */}
        <section className="lg:col-span-5 bg-white dark:bg-[#0F1A2E] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
          <h3 className="text-base font-bold text-[#14387F] dark:text-blue-300">
            1. Foto da receita
          </h3>

          {/* Hidden File Inputs */}
          <input
            ref={camInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => {
              handleSelectFile(e.target.files?.[0]);
              e.target.value = '';
            }}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              handleSelectFile(e.target.files?.[0]);
              e.target.value = '';
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            <button
              type="button"
              onClick={() => camInputRef.current?.click()}
              disabled={isReading}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-[#14387F] hover:bg-[#0f2c65] disabled:opacity-50 text-white font-bold text-base shadow-xs transition-colors cursor-pointer"
            >
              <Camera className="w-5 h-5" />
              <span>Tirar foto</span>
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isReading}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 disabled:opacity-50 text-[#14387F] dark:text-blue-300 border-2 border-[#14387F] dark:border-blue-500 font-bold text-base transition-colors cursor-pointer"
            >
              <FolderOpen className="w-5 h-5" />
              <span>Escolher imagem</span>
            </button>
          </div>

          {/* Image Preview */}
          {previewUrl && (
            <div className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black">
              <img
                src={previewUrl}
                alt="Receita selecionada"
                onClick={() => setIsZoomOpen(true)}
                className="w-full max-h-[420px] object-contain cursor-zoom-in"
              />
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Ampliar</span>
              </button>
            </div>
          )}

          {/* Enhance Contrast Option */}
          <label className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200 pt-1 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={enhanceContrast}
              onChange={(e) => setEnhanceContrast(e.target.checked)}
              disabled={isReading}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#14387F] focus:ring-[#14387F] accent-[#14387F]"
            />
            <span>Melhorar a imagem (preto e branco, mais contraste)</span>
          </label>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <button
              type="button"
              onClick={handleReadPrescription}
              disabled={!loadedImage || isReading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#E30521] hover:bg-[#c5041c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base shadow-xs transition-colors cursor-pointer"
            >
              {isReading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Lendo receita...</span>
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  <span>Ler receita</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleClearAll}
              disabled={isReading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 text-[#14387F] dark:text-blue-300 border-2 border-[#14387F] dark:border-blue-500 font-bold text-sm transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>Limpar tudo</span>
            </button>
          </div>

          {/* Progress Bar */}
          {isReading && (
            <progress
              value={progress}
              max={100}
              className="block w-full h-2.5 rounded-full overflow-hidden appearance-none [&::-webkit-progress-bar]:bg-slate-200 dark:[&::-webkit-progress-bar]:bg-slate-800 [&::-webkit-progress-value]:bg-[#E30521] [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-200 [&::-moz-progress-bar]:bg-[#E30521]"
            />
          )}

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`flex items-start gap-2 text-sm font-bold pt-0.5 ${
                statusError
                  ? 'text-[#E30521] dark:text-red-400'
                  : 'text-slate-800 dark:text-slate-200'
              }`}
            >
              {statusError && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Privacy & Usage Tip */}
          <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed pt-1 border-t border-slate-100 dark:border-slate-800">
            Funciona de graça e a foto <strong className="text-slate-700 dark:text-slate-300">não sai do seu aparelho</strong>. Lê bem receita{' '}
            <strong className="text-slate-700 dark:text-slate-300">digitada/impressa</strong>. Letra à mão costuma sair errada: sempre confira com a foto. Tire a foto de frente, com boa luz, sem sombra e com a receita ocupando a tela.
          </p>
        </section>

        {/* Column 2: Extracted Text & Quick Copy Chips */}
        <section className="lg:col-span-7 bg-white dark:bg-[#0F1A2E] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-base font-bold text-[#14387F] dark:text-blue-300">
              2. Texto lido
            </h3>
            {extractedText.trim() && (
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Você pode editar o texto antes de copiar
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleCopyFullText}
            disabled={!extractedText.trim()}
            className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#14387F] hover:bg-[#0f2c65] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base shadow-xs transition-colors cursor-pointer"
          >
            {copiedFull ? (
              <>
                <Check className="w-5 h-5 text-emerald-300" />
                <span>✓ Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Copiar texto completo</span>
              </>
            )}
          </button>

          {/* Auto-detected Data / Conselho / CPF chips */}
          {chips.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Dados encontrados (toque para copiar):
              </p>
              <div className="flex flex-wrap gap-2">
                {chips.map((chip) => {
                  const isCopied = copiedChipId === chip.id;
                  return (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => handleCopyChip(chip)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white dark:bg-slate-900 text-[#14387F] dark:text-blue-300 border-[#14387F] dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>✓ Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 opacity-70" />
                          <span>
                            {chip.label}: {chip.value}
                          </span>
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Editable Textarea */}
          <textarea
            value={extractedText}
            onChange={(e) => setExtractedText(e.target.value)}
            placeholder="O texto da receita aparece aqui. Você pode corrigir antes de copiar."
            className="w-full min-h-[360px] p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/70 text-slate-900 dark:text-slate-100 text-[15px] leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-[#14387F] focus:border-[#14387F] resize-y"
          />
        </section>
      </div>

      {/* Fullscreen Image Zoom Modal */}
      {isZoomOpen && previewUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            aria-label="Fechar ampliação"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={previewUrl}
            alt="Receita ampliada"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
