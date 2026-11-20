import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  ShieldCheck,
  Plus,
  Edit2,
  Trash2,
  FileSpreadsheet,
  Download,
  Upload,
  Search,
  Check,
  AlertTriangle,
  RotateCcw,
  Save,
  X,
  Package,
  Layers,
  Image as ImageIcon,
  Maximize2,
  LogOut,
  KeyRound,
  History,
  Loader2,
  ClipboardCheck,
  Sparkles,
  Filter,
} from 'lucide-react';
import {
  Produto,
  CATEGORIAS_PADRAO,
  ClassificacaoComercial,
  TarjaMedicamento,
  StatusVerificacao,
  InformacoesAtendimento,
} from '../types/database';
import { db, getCamposFaltantesAudit, NAO_VERIFICADO } from '../services/db';
import {
  getAdminOverview,
  type AdminAuditEntry,
} from '../services/auth';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  adminEmail: string;
  onLogout: () => void;
  onSessionExpired: () => void;
  onRefreshData: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  adminEmail,
  onLogout,
  onSessionExpired,
  onRefreshData,
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState<
    'gestao' | 'pendencias' | 'catalogo' | 'organizacao' | 'planilha' | 'seguranca'
  >('gestao');

  // Search & filters in admin
  const [adminSearch, setAdminSearch] = useState('');
  const [filterStatusVerif, setFilterStatusVerif] = useState<string>('todos');
  const [filterClassificacao, setFilterClassificacao] = useState<string>('todos');
  const [filterTarja, setFilterTarja] = useState<string>('todos');
  const [filterControlado, setFilterControlado] = useState<string>('todos');
  const [complementFeedback, setComplementFeedback] = useState<string>('');
  const [confirmManualVerified, setConfirmManualVerified] = useState<boolean>(false);

  // Editing / Creating product
  const [editingProduct, setEditingProduct] = useState<
    (Partial<Produto> & { prateleiras?: string }) | null
  >(null);
  const [isNewProduct, setIsNewProduct] = useState(false);

  // Quick shelf assignment input map: productId -> string
  const [shelfInputMap, setShelfInputMap] = useState<Record<string, string>>({});
  const [saveStatusMap, setSaveStatusMap] = useState<Record<string, boolean>>({});
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [actionError, setActionError] = useState('');
  const [isBusy, setIsBusy] = useState(false);

  // Import file ref
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importResult, setImportResult] = useState<{
    msg: string;
    isError?: boolean;
  } | null>(null);

  // Organization tab state (Fileiras & Fotos & Prateleiras)
  const [orgSelectedFileira, setOrgSelectedFileira] = useState<string>('I');
  const [orgSelectedShelf, setOrgSelectedShelf] = useState<string>('I1');
  const [orgProductSearch, setOrgProductSearch] = useState<string>('');
  const [photoUrlInput, setPhotoUrlInput] = useState<string>('');
  const [photoFeedback, setPhotoFeedback] = useState<string>('');
  const [zoomedOrgPhoto, setZoomedOrgPhoto] = useState<boolean>(false);
  const orgPhotoFileRef = useRef<HTMLInputElement>(null);

  // Account & Security tab state
  const [auditLogs, setAuditLogs] = useState<AdminAuditEntry[]>([]);
  const [backendAuditAvailable, setBackendAuditAvailable] = useState(true);
  const [loadingOverview, setLoadingOverview] = useState(false);

  const loadAuditOverview = useCallback(async () => {
    setLoadingOverview(true);
    try {
      const overview = await getAdminOverview();
      setAuditLogs(overview.auditLogs || []);
      setBackendAuditAvailable(overview.backendAvailable);
    } catch (err) {
      if (err instanceof Error && err.message === 'AUTH_REQUIRED') {
        onSessionExpired();
      }
    } finally {
      setLoadingOverview(false);
    }
  }, [onSessionExpired]);

  useEffect(() => {
    if (isOpen && adminEmail && activeAdminTab === 'seguranca') {
      loadAuditOverview();
    }
  }, [isOpen, adminEmail, activeAdminTab, loadAuditOverview]);

  if (!isOpen || !adminEmail) return null;

  const handleBackendError = (err: unknown, fallbackMsg: string) => {
    if (err instanceof Error && err.message === 'AUTH_REQUIRED') {
      onSessionExpired();
      return;
    }
    setActionError(err instanceof Error ? err.message : fallbackMsg);
  };

  // Get verification statistics & filtered lists
  const verifStats = db.getEstatisticasVerificacao();
  const gestaoProducts = db.getProdutos({
    busca: adminSearch,
    statusVerificacao: filterStatusVerif,
    classificacao: filterClassificacao,
    tarja: filterTarja,
    medicamentoControlado: filterControlado,
  });

  // Get pending products
  const pendingProducts = db.getProdutos({
    situacao: 'sem_localizacao',
    busca: adminSearch,
  });

  // Get all products
  const allProducts = db.getProdutos({
    busca: adminSearch,
  });

  const openEditorForProduct = (prod: Produto & { localizacoes?: string[] }, asNew = false) => {
    setIsNewProduct(asNew);
    setConfirmManualVerified(prod.status_verificacao === 'Informações verificadas');
    setEditingProduct({
      ...prod,
      informacoes_atendimento: prod.informacoes_atendimento || {
        finalidade_atendimento: '',
        informacoes_basicas_atendente: '',
        cuidados_informar: '',
        quando_encaminhar_farmaceutico: '',
        quando_procurar_medico: '',
      },
      prateleiras: prod.localizacoes ? prod.localizacoes.join(', ') : '',
    });
  };

  const openNewProductModal = () => {
    setIsNewProduct(true);
    setConfirmManualVerified(false);
    setEditingProduct({
      id: `MED-${Date.now().toString().slice(-4)}`,
      nome: '',
      principio_ativo: '',
      concentracao: '',
      apresentacao: '',
      forma_farmaceutica: '',
      fabricante: '',
      classificacao: 'Não verificado',
      categoria: 'Analgésicos',
      exige_receita: 'Não verificado',
      tarja: 'Não verificado',
      medicamento_controlado: 'Não verificado',
      tipo_controle: '',
      via_administracao: '',
      para_que_serve: '',
      como_tomar: '',
      orientacoes_uso: '',
      cuidados_tratamento: '',
      restricoes_uso: '',
      acompanhamento_medico: '',
      o_que_indicar: '',
      informacoes_atendimento: {
        finalidade_atendimento: '',
        informacoes_basicas_atendente: '',
        cuidados_informar: '',
        quando_encaminhar_farmaceutico: '',
        quando_procurar_medico: '',
      },
      contraindicacoes: '',
      efeitos_colaterais: '',
      interacoes_medicamentosas: '',
      orientacoes_armazenamento: '',
      fonte_informacao: 'Bulário Eletrônico ANVISA',
      status_verificacao: 'Pendente de verificação',
      data_ultima_verificacao: '',
      origem: 'Similar',
      situacao: 'sem_localizacao',
      observacao_localizacao: '',
      prateleiras: '',
    });
  };

  const handleRunComplementCatalogo = async () => {
    setActionError('');
    setComplementFeedback('');
    setIsBusy(true);
    try {
      const res = await db.adminComplementarCatalogo();
      const r = res.resumo;
      setComplementFeedback(
        `Análise concluída em ${r.totalAnalisados} medicamentos sem sobrescrever dados existentes: ${r.verificados} verificados, ${r.incompletos} com informações incompletas, ${r.necessitaRevisao} necessitam revisão e ${r.pendentes} pendentes de verificação.`
      );
      onRefreshData();
    } catch (err) {
      handleBackendError(err, 'Erro ao executar complementação segura do catálogo.');
    } finally {
      setIsBusy(false);
    }
  };

  // Handle single shelf assignment
  const handleAssignShelf = async (produtoId: string) => {
    const rawShelves = shelfInputMap[produtoId];
    if (rawShelves === undefined) return;

    const shelfArray = rawShelves
      .split(/[,;\s]+/)
      .map((s) => s.trim().toUpperCase())
      .filter(Boolean);

    setActionError('');
    try {
      await db.adminSetProdutoPrateleiras(produtoId, shelfArray);
      setSaveStatusMap((prev) => ({ ...prev, [produtoId]: true }));
      setTimeout(() => {
        setSaveStatusMap((prev) => ({ ...prev, [produtoId]: false }));
      }, 2000);
      onRefreshData();
    } catch (err) {
      handleBackendError(err, 'Erro ao atualizar prateleiras.');
    }
  };

  // Handle Save from Full Product Modal
  const handleSaveProductModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct || !editingProduct.nome) return;

    if (
      editingProduct.status_verificacao === 'Informações verificadas' &&
      !confirmManualVerified
    ) {
      setActionError(
        'Para marcar como "Informações verificadas", confirme na caixa de verificação que os dados foram conferidos em fonte oficial.'
      );
      return;
    }

    const shelfList = (editingProduct.prateleiras || '')
      .split(/[,;\s]+/)
      .map((s) => s.trim().toUpperCase())
      .filter(Boolean);

    const payload: Partial<Produto> & { prateleiras?: string[] } = {
      ...editingProduct,
      prateleiras: shelfList,
    };

    if (
      payload.status_verificacao === 'Informações verificadas' &&
      !payload.data_ultima_verificacao
    ) {
      payload.data_ultima_verificacao = new Date().toISOString().slice(0, 10);
    }

    setActionError('');
    setIsBusy(true);
    try {
      await db.adminSalvarProduto(payload, isNewProduct);

      setEditingProduct(null);
      setIsNewProduct(false);
      onRefreshData();
    } catch (err) {
      handleBackendError(err, 'Erro ao salvar medicamento.');
    } finally {
      setIsBusy(false);
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (id: string) => {
    setActionError('');
    setIsBusy(true);
    try {
      await db.adminExcluirProduto(id);
      setPendingDeleteId(null);
      onRefreshData();
    } catch (err) {
      handleBackendError(err, 'Erro ao excluir medicamento.');
    } finally {
      setIsBusy(false);
    }
  };

  // Handle Excel Export (protected on backend)
  const handleExportExcel = async () => {
    setActionError('');
    try {
      const blob = await db.adminExportarPlanilha();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `catalogo_ultramed_atualizado_${new Date().toISOString().slice(0, 10)}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      handleBackendError(err, 'Erro ao exportar planilha.');
    }
  };

  // Handle Excel / CSV Import (protected on backend)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const buffer = evt.target?.result as ArrayBuffer;
        const res = await db.adminImportarPlanilha(buffer);
        setImportResult({
          msg: `Planilha importada com sucesso! ${res.inseridos} novos medicamentos, ${res.atualizados} atualizados, e ${res.localizacoesImportadas} localizações vinculadas.`,
          isError: false,
        });
        onRefreshData();
      } catch (err: unknown) {
        if (err instanceof Error && err.message === 'AUTH_REQUIRED') {
          onSessionExpired();
          return;
        }
        setImportResult({
          msg: `Erro ao importar arquivo: ${err instanceof Error ? err.message : 'Formato inválido'}`,
          isError: true,
        });
      }
    };
    reader.readAsArrayBuffer(file);
    e.target.value = '';
  };

  // Organization data
  const orgFileiras = db.getFileiras();
  const orgCurrentFileira =
    orgFileiras.find((f) => f.letra === orgSelectedFileira) || orgFileiras[0];
  const orgShelves = orgCurrentFileira
    ? db.getPrateleirasPorFileira(orgCurrentFileira.letra)
    : [];
  const orgShelfProducts = orgSelectedShelf
    ? db.getProdutosPorPrateleira(orgSelectedShelf)
    : [];
  const orgMatchingProducts = orgProductSearch.trim()
    ? db.getProdutos({ busca: orgProductSearch }).slice(0, 25)
    : [];

  const handleOrgPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !orgCurrentFileira) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      const dataUrl = evt.target?.result as string;
      if (dataUrl) {
        try {
          await db.adminUpdateFileiraFoto(orgCurrentFileira.letra, dataUrl);
          setPhotoFeedback(
            `Foto da Fileira ${orgCurrentFileira.letra} atualizada com sucesso!`
          );
          setTimeout(() => setPhotoFeedback(''), 3000);
          onRefreshData();
        } catch (err) {
          handleBackendError(err, 'Erro ao atualizar foto da fileira.');
        }
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleOrgSavePhotoUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgCurrentFileira || !photoUrlInput.trim()) return;
    try {
      await db.adminUpdateFileiraFoto(orgCurrentFileira.letra, photoUrlInput.trim());
      setPhotoUrlInput('');
      setPhotoFeedback(
        `Foto da Fileira ${orgCurrentFileira.letra} atualizada com sucesso!`
      );
      setTimeout(() => setPhotoFeedback(''), 3000);
      onRefreshData();
    } catch (err) {
      handleBackendError(err, 'Erro ao salvar URL da foto.');
    }
  };

  const handleResetDatabase = async () => {
    setIsBusy(true);
    try {
      await db.adminResetBase();
      setConfirmReset(false);
      onRefreshData();
      setImportResult({
        msg: 'Banco de dados restaurado para o padrão com sucesso!',
      });
    } catch (err) {
      handleBackendError(err, 'Erro ao restaurar base.');
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/70 backdrop-blur-sm overflow-hidden">
      <div className="relative w-full max-w-6xl h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#0F1A2E] border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-slate-100 dark:bg-[#132238] border-b border-slate-200 dark:border-slate-800 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#14387F] text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                Painel Administrativo — Farmácias Ultramed Popular
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                Sessão autenticada como <strong className="text-emerald-700 dark:text-emerald-400">{adminEmail}</strong> · Firebase Authentication
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#E30521] bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/50 border border-red-200 dark:border-red-900/60 transition-colors cursor-pointer"
              title="Encerrar sessão administrativa"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
              title="Fechar painel (mantém sessão ativa até fechar o navegador ou 30 min sem uso)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Global Action Error Banner */}
        {actionError && (
          <div className="px-4 sm:px-6 py-2.5 bg-red-50 dark:bg-red-950/50 border-b border-red-200 dark:border-red-900 flex items-center justify-between text-xs text-[#E30521] dark:text-red-300 font-medium">
            <span>{actionError}</span>
            <button onClick={() => setActionError('')} className="p-1 hover:opacity-75">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Logged In Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation Tabs */}
          <div className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-slate-50 dark:bg-[#101b2d] border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveAdminTab('gestao')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeAdminTab === 'gestao'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <ClipboardCheck className="w-4 h-4" />
              <span>Gestão de Medicamentos ({verifStats.total})</span>
            </button>

            <button
              onClick={() => setActiveAdminTab('pendencias')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeAdminTab === 'pendencias'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-[#E30521]" />
              <span>Produtos sem Localização ({pendingProducts.length})</span>
            </button>

            <button
              onClick={() => setActiveAdminTab('catalogo')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeAdminTab === 'catalogo'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Gerenciar Catálogo ({allProducts.length})</span>
            </button>

            <button
              onClick={() => setActiveAdminTab('organizacao')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeAdminTab === 'organizacao'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4 text-[#14387F] dark:text-blue-400" />
              <span>Organização da Farmácia</span>
            </button>

            <button
              onClick={() => setActiveAdminTab('planilha')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeAdminTab === 'planilha'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Importar / Exportar Planilha</span>
            </button>

            <button
              onClick={() => setActiveAdminTab('seguranca')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeAdminTab === 'seguranca'
                  ? 'bg-[#14387F] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Conta e Segurança</span>
            </button>
          </div>

          {/* TAB 0: GESTÃO DE MEDICAMENTOS (COMPLEMENTAÇÃO, VERIFICAÇÃO E FILTROS) */}
          {activeAdminTab === 'gestao' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
              {/* Header + Safe Complement Trigger */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Gestão de Medicamentos — Auditoria, Complementação e Controle
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Analise cadastros incompletos, separe tarja de controle especial e revise informações antes de confirmar.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    disabled={isBusy}
                    onClick={handleRunComplementCatalogo}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-xs font-bold transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isBusy ? 'Processando...' : 'Analisar e Complementar (ANVISA)'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={openNewProductModal}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14387F] hover:bg-[#0e295d] text-white text-xs font-bold transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Novo Medicamento</span>
                  </button>
                </div>
              </div>

              {complementFeedback && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-800 dark:text-emerald-200 flex items-center justify-between gap-2">
                  <span>{complementFeedback}</span>
                  <button
                    type="button"
                    onClick={() => setComplementFeedback('')}
                    className="p-1 hover:opacity-75"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* 4 KPI Summary Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setFilterStatusVerif('todos')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    filterStatusVerif === 'todos'
                      ? 'bg-[#14387F]/8 dark:bg-[#14387F]/25 border-[#14387F]'
                      : 'bg-slate-50 dark:bg-[#132238] border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Total de medicamentos cadastrados
                  </div>
                  <div className="mt-1 text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                    {verifStats.total}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFilterStatusVerif('Informações verificadas')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    filterStatusVerif === 'Informações verificadas'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600'
                      : 'bg-slate-50 dark:bg-[#132238] border-slate-200 dark:border-slate-800 hover:border-emerald-400'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                    Cadastro completo (Verificados)
                  </div>
                  <div className="mt-1 text-2xl font-black text-emerald-700 dark:text-emerald-300 tabular-nums">
                    {verifStats.completos}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFilterStatusVerif('incompletos_ou_revisao')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    filterStatusVerif === 'incompletos_ou_revisao' ||
                    filterStatusVerif === 'Informações incompletas' ||
                    filterStatusVerif === 'Necessita de revisão'
                      ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-600'
                      : 'bg-slate-50 dark:bg-[#132238] border-slate-200 dark:border-slate-800 hover:border-blue-400'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-blue-700 dark:text-blue-300">
                    Incompletos ou em revisão
                  </div>
                  <div className="mt-1 text-2xl font-black text-blue-700 dark:text-blue-200 tabular-nums">
                    {verifStats.comIncompletosOuRevisao}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {verifStats.incompletos} incompletos · {verifStats.necessitaRevisao} revisão
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFilterStatusVerif('Pendente de verificação')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    filterStatusVerif === 'Pendente de verificação'
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-600'
                      : 'bg-slate-50 dark:bg-[#132238] border-slate-200 dark:border-slate-800 hover:border-amber-400'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                    Aguardando verificação
                  </div>
                  <div className="mt-1 text-2xl font-black text-amber-700 dark:text-amber-200 tabular-nums">
                    {verifStats.aguardandoVerificacao}
                  </div>
                </button>
              </div>

              {/* Filter Bar */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-[#14387F] dark:text-blue-400" />
                    Filtros de Gestão ({gestaoProducts.length} encontrados)
                  </span>
                  {(adminSearch ||
                    filterStatusVerif !== 'todos' ||
                    filterClassificacao !== 'todos' ||
                    filterTarja !== 'todos' ||
                    filterControlado !== 'todos') && (
                    <button
                      type="button"
                      onClick={() => {
                        setAdminSearch('');
                        setFilterStatusVerif('todos');
                        setFilterClassificacao('todos');
                        setFilterTarja('todos');
                        setFilterControlado('todos');
                      }}
                      className="text-[11px] text-[#E30521] hover:underline font-semibold"
                    >
                      Limpar filtros
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-xs">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      value={adminSearch}
                      onChange={(e) => setAdminSearch(e.target.value)}
                      placeholder="Nome, ativo ou fabricante..."
                      className="w-full pl-8 pr-2.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <select
                    value={filterStatusVerif}
                    onChange={(e) => setFilterStatusVerif(e.target.value)}
                    className="px-2.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="todos">Status: Todos</option>
                    <option value="Pendente de verificação">Pendente de verificação</option>
                    <option value="Informações incompletas">Informações incompletas</option>
                    <option value="Necessita de revisão">Necessita de revisão</option>
                    <option value="incompletos_ou_revisao">Incompletos ou Revisão</option>
                    <option value="Informações verificadas">Informações verificadas</option>
                  </select>

                  <select
                    value={filterClassificacao}
                    onChange={(e) => setFilterClassificacao(e.target.value)}
                    className="px-2.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="todos">Classificação: Todas</option>
                    <option value="Referência">Referência</option>
                    <option value="Genérico">Genérico</option>
                    <option value="Similar">Similar</option>
                    <option value="Isento / Suplemento / Outro">Isento / Suplemento / Outro</option>
                    <option value={NAO_VERIFICADO}>Não verificado</option>
                  </select>

                  <select
                    value={filterTarja}
                    onChange={(e) => setFilterTarja(e.target.value)}
                    className="px-2.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="todos">Tarja: Todas</option>
                    <option value="Sem tarja">Sem tarja</option>
                    <option value="Tarja vermelha">Tarja vermelha</option>
                    <option value="Tarja preta">Tarja preta</option>
                    <option value={NAO_VERIFICADO}>Não verificado</option>
                  </select>

                  <select
                    value={filterControlado}
                    onChange={(e) => setFilterControlado(e.target.value)}
                    className="px-2.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="todos">Controlado: Todos</option>
                    <option value="Sim">Controlado: Sim</option>
                    <option value="Não">Controlado: Não</option>
                    <option value={NAO_VERIFICADO}>Controlado: Não verificado</option>
                  </select>
                </div>
              </div>

              {/* Medication Audit Rows */}
              <div className="space-y-2">
                {gestaoProducts.slice(0, 120).map((prod) => {
                  const faltantes = getCamposFaltantesAudit(prod);
                  const statusColor =
                    prod.status_verificacao === 'Informações verificadas'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                      : prod.status_verificacao === 'Pendente de verificação'
                        ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                        : 'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800';

                  return (
                    <div
                      key={prod.id}
                      className="p-3.5 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {prod.nome}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">#{prod.id}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor}`}>
                            {prod.status_verificacao || 'Pendente de verificação'}
                          </span>
                          {prod.tarja && prod.tarja !== NAO_VERIFICADO && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                              {prod.tarja}
                            </span>
                          )}
                          {prod.medicamento_controlado === 'Sim' && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300">
                              Controlado
                            </span>
                          )}
                        </div>

                        <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-2 gap-y-0.5">
                          <span>Ativo: <strong className="text-slate-700 dark:text-slate-200">{prod.principio_ativo || NAO_VERIFICADO}</strong></span>
                          <span>· Classif.: {prod.classificacao || NAO_VERIFICADO}</span>
                          <span>· Loc.: {prod.localizacoes.length > 0 ? prod.localizacoes.join(', ') : 'Sem prateleira'}</span>
                          {prod.data_ultima_verificacao && (
                            <span>· Verificado em: {prod.data_ultima_verificacao}</span>
                          )}
                        </div>

                        {faltantes.length > 0 && (
                          <div className="text-[11px] text-amber-700 dark:text-amber-300">
                            <strong>Campos a complementar ({faltantes.length}):</strong>{' '}
                            {faltantes.slice(0, 5).join(', ')}
                            {faltantes.length > 5 ? ` e +${faltantes.length - 5}` : ''}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => openEditorForProduct(prod, false)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#14387F] hover:bg-[#0e295d] text-white text-xs font-bold transition-colors"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          <span>Editar / Complementar</span>
                        </button>
                      </div>
                    </div>
                  );
                })}

                {gestaoProducts.length > 120 && (
                  <p className="text-center text-xs text-slate-400 py-2">
                    Exibindo os primeiros 120 de {gestaoProducts.length} registros. Utilize a busca ou filtros acima para localizar rapidamente qualquer medicamento.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 1: PENDENCIAS (QUICK SHELF ASSIGNMENT) */}
          {activeAdminTab === 'pendencias' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Preenchimento Rápido de Prateleiras</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#E30521]/15 text-[#E30521] font-bold">
                      {pendingProducts.length} pendentes
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Digite a prateleira (ex.: <strong>E7</strong> ou <strong>E4, G8</strong>) e clique em Salvar para vincular imediatamente.
                  </p>
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={adminSearch}
                    onChange={(e) => setAdminSearch(e.target.value)}
                    placeholder="Filtrar pendências..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                {pendingProducts.slice(0, 80).map((prod) => {
                  const currentVal =
                    shelfInputMap[prod.id] !== undefined
                      ? shelfInputMap[prod.id]
                      : prod.localizacoes.join(', ');
                  const isSaved = saveStatusMap[prod.id];

                  return (
                    <div
                      key={prod.id}
                      className="p-3 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                            {prod.nome}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {prod.id}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {prod.principio_ativo}{' '}
                          {prod.concentracao && `· ${prod.concentracao}`} ·{' '}
                          {prod.fabricante}
                        </p>
                      </div>

                      {/* Shelf Input & Save Button */}
                      <div className="flex items-center gap-2 shrink-0">
                        <input
                          type="text"
                          value={currentVal}
                          onChange={(e) =>
                            setShelfInputMap((prev) => ({
                              ...prev,
                              [prod.id]: e.target.value,
                            }))
                          }
                          placeholder="Ex: E7 ou E4, G8"
                          className="w-32 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-[#E30521] uppercase focus:outline-hidden focus:border-[#14387F]"
                        />
                        <button
                          onClick={() => handleAssignShelf(prod.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                            isSaved
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#14387F] hover:bg-[#0e295d] text-white active:scale-95'
                          }`}
                        >
                          {isSaved ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Save className="w-3.5 h-3.5" />
                          )}
                          <span>{isSaved ? 'Salvo!' : 'Salvar'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: CATALOG MANAGEMENT */}
          {activeAdminTab === 'catalogo' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Catálogo Geral de Medicamentos
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Cadastre novos produtos, edite informações farmacêuticas e altere prateleiras.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative w-48 sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={adminSearch}
                      onChange={(e) => setAdminSearch(e.target.value)}
                      placeholder="Buscar no catálogo..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                  </div>

                  <button
                    onClick={openNewProductModal}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14387F] text-white text-xs font-bold hover:bg-[#0e295d] transition-all shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Novo Produto</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {allProducts.slice(0, 100).map((prod) => (
                  <div
                    key={prod.id}
                    className="p-3 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-300"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                          {prod.nome}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            prod.localizacoes.length > 0
                              ? 'bg-red-50 dark:bg-red-950/40 text-[#E30521]'
                              : prod.situacao === 'balcao'
                              ? 'bg-blue-50 dark:bg-blue-950/40 text-[#14387F] dark:text-blue-300'
                              : prod.situacao === 'indisponivel_em_loja'
                              ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                              : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700'
                          }`}
                        >
                          {prod.localizacoes.length > 0
                            ? prod.localizacoes.join(', ')
                            : prod.situacao === 'balcao'
                            ? 'Balcão'
                            : prod.situacao === 'indisponivel_em_loja'
                            ? 'Indisponível em loja'
                            : 'Sem prateleira'}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {prod.principio_ativo}{' '}
                        {prod.concentracao && `· ${prod.concentracao}`} ·{' '}
                        {prod.fabricante}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => openEditorForProduct(prod, false)}
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        title="Editar"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      {pendingDeleteId === prod.id ? (
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleDeleteProduct(prod.id)}
                            disabled={isBusy}
                            className="px-2 py-1 rounded-lg bg-[#E30521] text-white text-[11px] font-bold"
                          >
                            Confirmar
                          </button>
                          <button
                            onClick={() => setPendingDeleteId(null)}
                            className="px-2 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-[11px]"
                          >
                            Cancelar
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setPendingDeleteId(prod.id)}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40"
                          title="Excluir"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ORGANIZAÇÃO DA FARMÁCIA (FOTOS DAS FILEIRAS & PRATELEIRAS) */}
          {activeAdminTab === 'organizacao' && orgCurrentFileira && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Organização da Farmácia — Fileiras e Fotos
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Visualize e troque as fotos das fileiras ({orgFileiras.map((f) => f.letra).join(', ')}) e associe produtos diretamente a cada prateleira.
                  </p>
                </div>
              </div>

              {/* Row Selector Pills */}
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                {orgFileiras.map((f) => {
                  const active = f.letra === orgCurrentFileira.letra;
                  return (
                    <button
                      key={f.letra}
                      onClick={() => {
                        setOrgSelectedFileira(f.letra);
                        setOrgSelectedShelf(`${f.letra}1`);
                        setPhotoFeedback('');
                      }}
                      className={`p-2 rounded-xl border-2 text-center transition-all ${
                        active
                          ? 'bg-[#14387F] text-white border-[#14387F] shadow-sm'
                          : 'bg-white dark:bg-[#132238] border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-[#14387F]/40'
                      }`}
                    >
                      <div className="text-base font-black">{f.letra}</div>
                      <div
                        className={`text-[10px] ${
                          active ? 'text-blue-100' : 'text-slate-400'
                        }`}
                      >
                        {f.total_prateleiras} prat.
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Row Photo Viewer & Photo Replacement */}
                <div className="lg:col-span-5 p-4 rounded-3xl bg-slate-50 dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-[#14387F] dark:text-blue-400" />
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Foto da {orgCurrentFileira.nome}
                      </h4>
                    </div>
                    {orgCurrentFileira.foto_url && orgCurrentFileira.foto_url !== 'Foto não cadastrada' && (
                      <button
                        onClick={() => setZoomedOrgPhoto(true)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#14387F] text-white text-xs font-semibold hover:bg-[#0e295d]"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Ampliar</span>
                      </button>
                    )}
                  </div>

                  {orgCurrentFileira.foto_url && orgCurrentFileira.foto_url !== 'Foto não cadastrada' ? (
                    <div
                      onClick={() => setZoomedOrgPhoto(true)}
                      className="bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center p-2 cursor-zoom-in"
                      title="Clique para ampliar a foto"
                    >
                      <img
                        src={orgCurrentFileira.foto_url}
                        alt={orgCurrentFileira.nome}
                        className="max-h-72 w-auto object-contain mx-auto"
                      />
                    </div>
                  ) : (
                    <div className="bg-slate-100 dark:bg-slate-900/70 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 text-center space-y-1.5">
                      <ImageIcon className="w-7 h-7 mx-auto text-slate-400" />
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-200">
                        Foto não cadastrada
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Envie ou substitua a foto desta fileira abaixo quando estiver disponível.
                      </p>
                    </div>
                  )}

                  {photoFeedback && (
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                      {photoFeedback}
                    </div>
                  )}

                  {/* Upload new photo */}
                  <div className="space-y-2.5">
                    <input
                      ref={orgPhotoFileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleOrgPhotoUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => orgPhotoFileRef.current?.click()}
                      className="w-full py-2.5 rounded-xl bg-[#14387F] hover:bg-[#0e295d] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      <span>
                        Trocar Foto da Fileira {orgCurrentFileira.letra} (Arquivo)
                      </span>
                    </button>

                    <form onSubmit={handleOrgSavePhotoUrl} className="flex gap-2">
                      <input
                        type="text"
                        value={photoUrlInput}
                        onChange={(e) => setPhotoUrlInput(e.target.value)}
                        placeholder="Ou cole o caminho/URL da foto..."
                        className="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-xs font-bold text-slate-800 dark:text-white"
                      >
                        Salvar URL
                      </button>
                    </form>
                  </div>
                </div>

                {/* Right: Shelves Grid & Product Association */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-4 rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Prateleiras da Fileira {orgCurrentFileira.letra} (1 a{' '}
                      {orgCurrentFileira.total_prateleiras})
                    </h4>

                    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-2">
                      {orgShelves.map((s) => {
                        const count = db.getProdutosPorPrateleira(s.id).length;
                        const isSelected = orgSelectedShelf === s.id;
                        return (
                          <button
                            key={s.id}
                            onClick={() => setOrgSelectedShelf(s.id)}
                            className={`p-2 rounded-xl text-center transition-all border ${
                              isSelected
                                ? 'bg-[#E30521] text-white border-[#E30521] font-bold shadow-xs'
                                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100'
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

                  {/* Shelf Products & Associate Input */}
                  <div className="p-4 rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Produtos na Prateleira {orgSelectedShelf}
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {orgShelfProducts.length} associados
                      </span>
                    </div>

                    {orgShelfProducts.length > 0 ? (
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                        {orgShelfProducts.map((p) => (
                          <div
                            key={p.id}
                            className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2"
                          >
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                {p.nome}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                                {p.principio_ativo}{' '}
                                {p.fabricante && `· ${p.fabricante}`}
                              </div>
                            </div>
                            <button
                              onClick={async () => {
                                try {
                                  await db.adminRemoveProdutoPrateleira(
                                    p.id,
                                    orgSelectedShelf
                                  );
                                  onRefreshData();
                                } catch (err) {
                                  handleBackendError(err, 'Erro ao remover da prateleira.');
                                }
                              }}
                              className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#E30521] hover:bg-red-100 text-[11px] font-bold shrink-0"
                            >
                              Remover
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Nenhum produto cadastrado
                      </div>
                    )}

                    {/* Search & Associate Product to Shelf */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                        Associar medicamento à prateleira {orgSelectedShelf}
                      </label>
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          value={orgProductSearch}
                          onChange={(e) => setOrgProductSearch(e.target.value)}
                          placeholder="Digite o nome ou princípio ativo do medicamento para associar..."
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                        />
                      </div>

                      {orgProductSearch.trim() && (
                        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                          {orgMatchingProducts.length > 0 ? (
                            orgMatchingProducts.map((p) => {
                              const alreadyInShelf =
                                p.localizacoes.includes(orgSelectedShelf);
                              return (
                                <div
                                  key={p.id}
                                  className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2"
                                >
                                  <div className="min-w-0">
                                    <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                                      {p.nome}
                                    </div>
                                    <div className="text-[10px] text-slate-500 truncate">
                                      {p.principio_ativo}{' '}
                                      {p.localizacoes.length > 0
                                        ? `· Atual: ${p.localizacoes.join(', ')}`
                                        : '· Sem localização'}
                                    </div>
                                  </div>
                                  <button
                                    disabled={alreadyInShelf}
                                    onClick={async () => {
                                      try {
                                        await db.adminAddProdutoPrateleira(
                                          p.id,
                                          orgSelectedShelf
                                        );
                                        onRefreshData();
                                      } catch (err) {
                                        handleBackendError(err, 'Erro ao associar prateleira.');
                                      }
                                    }}
                                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 ${
                                      alreadyInShelf
                                        ? 'bg-emerald-100 text-emerald-700 cursor-default'
                                        : 'bg-[#14387F] hover:bg-[#0e295d] text-white'
                                    }`}
                                  >
                                    {alreadyInShelf
                                      ? 'Já associado'
                                      : `+ Associar em ${orgSelectedShelf}`}
                                  </button>
                                </div>
                              );
                            })
                          ) : (
                            <div className="text-xs text-slate-400 p-2 text-center">
                              Nenhum medicamento encontrado com essa busca.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: IMPORT / EXPORT EXCEL & CSV */}
          {activeAdminTab === 'planilha' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Sincronização de Planilha Excel (catalogo_ultramed_padronizado.xlsx)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Importe ou exporte os dados utilizando a coluna ID para atualizar produtos sem duplicar.
                </p>
              </div>

              {importResult && (
                <div
                  className={`p-4 rounded-2xl border text-xs sm:text-sm font-medium ${
                    importResult.isError
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800 text-[#E30521]'
                      : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                  }`}
                >
                  {importResult.msg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Export Box */}
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-[#14387F] dark:text-blue-300">
                      <Download className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Exportar Planilha Completa
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Gera arquivo .xlsx protegido no servidor com as 4 abas: Catalogo, Localizacoes, Prateleiras e Pendencias.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleExportExcel}
                    className="w-full py-3 rounded-xl bg-[#14387F] hover:bg-[#0e295d] active:scale-98 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar Planilha Atualizada (.xlsx)</span>
                  </button>
                </div>

                {/* Import Box */}
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Importar Planilha Atualizada
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Suba seu arquivo Excel ou CSV para atualizar produtos existentes e inserir novos.
                      </p>
                    </div>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Selecionar Arquivo (.xlsx / .csv)</span>
                  </button>
                </div>
              </div>

              {/* Reset to Seeds Button */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 dark:text-slate-400">
                  Restaurar banco original da farmácia com todos os medicamentos de fábrica.
                </span>

                {confirmReset ? (
                  <div className="flex items-center gap-2">
                    <span className="text-[#E30521] font-semibold">
                      Confirmar restauração?
                    </span>
                    <button
                      onClick={handleResetDatabase}
                      disabled={isBusy}
                      className="px-3 py-1.5 rounded-lg bg-[#E30521] text-white font-bold"
                    >
                      Sim, restaurar
                    </button>
                    <button
                      onClick={() => setConfirmReset(false)}
                      className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 font-medium"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmReset(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-300 dark:border-red-900 text-[#E30521] hover:bg-red-50 dark:hover:bg-red-950/30 font-medium self-start sm:self-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restaurar Base Padrão</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: CONTA E SEGURANÇA */}
          {activeAdminTab === 'seguranca' && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Firebase Session & Security Policy */}
                <div className="lg:col-span-5 p-5 rounded-3xl bg-slate-50 dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-[#14387F]/10 text-[#14387F] dark:text-blue-400 shrink-0">
                        <KeyRound className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          Conta Administrativa (Firebase)
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          Conectado como: <strong>{adminEmail}</strong>
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={onLogout}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#E30521] text-xs font-bold hover:bg-red-100 shrink-0 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sair</span>
                    </button>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">
                        Proteção de Conta
                      </p>
                      <p>
                        O acesso administrativo é validado pelo Firebase Authentication. Novos administradores só podem ser criados manualmente no Console do Firebase (Authentication &gt; Users).
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">
                        Sessão Segura no Balcão
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>A sessão encerra automaticamente ao fechar o navegador.</li>
                        <li>Desconexão automática após 30 minutos sem atividade.</li>
                        <li>Para trocar sua senha, use &ldquo;Esqueci minha senha&rdquo; na tela de login ou o Console do Firebase.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: Admin Activity Audit Log */}
                <div className="lg:col-span-7 p-5 rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <History className="w-5 h-5 text-[#14387F] dark:text-blue-400" />
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          Registro de Auditoria Administrativa
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Histórico de edições quando conectado ao servidor Node.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={loadAuditOverview}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      Atualizar
                    </button>
                  </div>

                  {loadingOverview ? (
                    <div className="py-10 flex items-center justify-center gap-2 text-xs text-slate-400">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Carregando histórico protegido...</span>
                    </div>
                  ) : !backendAuditAvailable ? (
                    <div className="p-6 text-center text-xs text-slate-500 dark:text-slate-400 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                      Hospedagem estática ativa: a autenticação está protegida pelo Firebase Authentication e as alterações são salvas localmente neste navegador.
                    </div>
                  ) : auditLogs.length > 0 ? (
                    <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                      {auditLogs.map((log) => (
                        <div
                          key={log.id}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                        >
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white">
                              {log.details}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">
                              Administrador: <strong>{log.username}</strong> · Ação:{' '}
                              <span className="font-mono">{log.action}</span>
                            </div>
                          </div>
                          <div className="text-[11px] text-slate-400 tabular-nums shrink-0">
                            {new Date(log.timestamp).toLocaleString('pt-BR')}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs text-slate-400">
                      Nenhum registro encontrado ainda.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal for Creating / Editing / Complementing Full Product */}
        {editingProduct && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs">
            <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 shadow-2xl p-5 sm:p-6 space-y-4 max-h-[92vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isNewProduct
                      ? 'Cadastrar Novo Medicamento'
                      : `Editar / Complementar — ${editingProduct.nome}`}
                  </h3>
                  <div className="text-[11px] text-slate-400 flex flex-wrap gap-x-2">
                    <span>ID #{editingProduct.id}</span>
                    {editingProduct.atualizado_em && (
                      <span>
                        · Última atualização:{' '}
                        {new Date(editingProduct.atualizado_em).toLocaleDateString('pt-BR')}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProductModal} className="space-y-5 text-xs">
                {/* BLOCO 1: IDENTIFICAÇÃO E REGULATÓRIO */}
                <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#14387F] dark:text-blue-400">
                    1. Identificação e Classificação Regulatória
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Nome Comercial *</label>
                      <input
                        type="text"
                        required
                        value={editingProduct.nome || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, nome: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: Alivium 400 mg"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Princípio Ativo</label>
                      <input
                        type="text"
                        value={editingProduct.principio_ativo || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, principio_ativo: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: Ibuprofeno (ou Não verificado)"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Fabricante / Laboratório</label>
                      <input
                        type="text"
                        value={editingProduct.fabricante || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, fabricante: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: EMS, Eurofarma, Medley"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Classificação Comercial</label>
                      <select
                        value={(editingProduct.classificacao as ClassificacaoComercial) || NAO_VERIFICADO}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            classificacao: e.target.value as ClassificacaoComercial,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      >
                        <option value="Referência">Referência</option>
                        <option value="Genérico">Genérico</option>
                        <option value="Similar">Similar</option>
                        <option value="Isento / Suplemento / Outro">Isento / Suplemento / Outro</option>
                        <option value={NAO_VERIFICADO}>Não verificado</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Categoria Terapêutica</label>
                      <select
                        value={editingProduct.categoria || 'Analgésicos'}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, categoria: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      >
                        {editingProduct.categoria &&
                          editingProduct.categoria !== 'Outros' &&
                          !(CATEGORIAS_PADRAO as readonly string[]).includes(
                            editingProduct.categoria
                          ) && (
                            <option value={editingProduct.categoria}>
                              {editingProduct.categoria}
                            </option>
                          )}
                        {CATEGORIAS_PADRAO.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">
                        Localização física (vírgula)
                      </label>
                      <input
                        type="text"
                        value={editingProduct.prateleiras || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, prateleiras: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-[#E30521]"
                        placeholder="Ex: A2, A06 ou C6, C7, C8"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Situação em Loja</label>
                      <select
                        value={editingProduct.situacao || 'sem_localizacao'}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            situacao: e.target.value as Produto['situacao'],
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      >
                        <option value="ativo">Ativo (com prateleira)</option>
                        <option value="balcao">Balcão de atendimento (sem código)</option>
                        <option value="sem_localizacao">Sem localização definida</option>
                        <option value="indisponivel_em_loja">Indisponível em loja</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-semibold mb-1">Observação de Localização</label>
                      <input
                        type="text"
                        value={editingProduct.observacao_localizacao || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            observacao_localizacao: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: Fica na prateleira da direita, na parte de similares."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Concentração / Dosagem</label>
                      <input
                        type="text"
                        value={editingProduct.concentracao || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, concentracao: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: 500 mg, 20 mg/mL"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Forma Farmacêutica</label>
                      <input
                        type="text"
                        value={editingProduct.forma_farmaceutica || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            forma_farmaceutica: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Comprimido, cápsula, gotas, xarope..."
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Apresentação</label>
                      <input
                        type="text"
                        value={editingProduct.apresentacao || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, apresentacao: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: Caixa c/ 20 cp, Frasco 100 mL"
                      />
                    </div>
                  </div>

                  {/* Tarja SEPARADA de Medicamento Controlado */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-1">
                    <div className="sm:col-span-2">
                      <label className="block font-semibold mb-1">Necessidade de Receita Médica</label>
                      <input
                        type="text"
                        value={editingProduct.exige_receita || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, exige_receita: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: Não (Venda livre / MIP) ou Sim (Prescrição médica)"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Classificação de Tarja</label>
                      <select
                        value={(editingProduct.tarja as TarjaMedicamento) || NAO_VERIFICADO}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            tarja: e.target.value as TarjaMedicamento,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      >
                        <option value="Sem tarja">Sem tarja</option>
                        <option value="Tarja vermelha">Tarja vermelha</option>
                        <option value="Tarja preta">Tarja preta</option>
                        <option value={NAO_VERIFICADO}>Não verificado</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Medicamento Controlado?</label>
                      <select
                        value={editingProduct.medicamento_controlado || NAO_VERIFICADO}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            medicamento_controlado: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      >
                        <option value="Não">Não</option>
                        <option value="Sim">Sim (Portaria 344/98)</option>
                        <option value={NAO_VERIFICADO}>Não verificado</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Tipo / Lista de Controle (se aplicável)</label>
                      <input
                        type="text"
                        value={editingProduct.tipo_controle || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, tipo_controle: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: Lista C1 Receita Branca 2 vias / B1 Azul"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Orientações de Armazenamento</label>
                      <input
                        type="text"
                        value={editingProduct.orientacoes_armazenamento || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            orientacoes_armazenamento: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: Temperatura ambiente (15°C a 30°C), protegido da luz"
                      />
                    </div>
                  </div>
                </div>

                {/* BLOCO 2: INDICAÇÃO E SEGURANÇA CLÍNICA */}
                <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#14387F] dark:text-blue-400">
                    2. Indicação, Segurança e Interações
                  </h4>
                  <div>
                    <label className="block font-semibold mb-1">Indicação (Para que serve)</label>
                    <textarea
                      rows={2}
                      value={editingProduct.para_que_serve || ''}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, para_que_serve: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      placeholder="Finalidade oficial conforme bula ANVISA..."
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Contraindicações</label>
                      <textarea
                        rows={2}
                        value={editingProduct.contraindicacoes || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, contraindicacoes: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Principais Efeitos Colaterais</label>
                      <textarea
                        rows={2}
                        value={editingProduct.efeitos_colaterais || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            efeitos_colaterais: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Interações Medicamentosas</label>
                      <textarea
                        rows={2}
                        value={editingProduct.interacoes_medicamentosas || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            interacoes_medicamentosas: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                  </div>
                </div>

                {/* BLOCO 3: INFORMAÇÕES SOBRE UTILIZAÇÃO */}
                <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#14387F] dark:text-blue-400">
                    3. Informações sobre Utilização
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Via de Administração</label>
                      <input
                        type="text"
                        value={editingProduct.via_administracao || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, via_administracao: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Oral, Tópica, Nasal, Inalatória, Oftálmica..."
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Necessita Acompanhamento Médico</label>
                      <input
                        type="text"
                        value={editingProduct.acompanhamento_medico || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            acompanhamento_medico: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Como Utilizar o Medicamento</label>
                      <textarea
                        rows={2}
                        value={editingProduct.como_tomar || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, como_tomar: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Orientações de Uso</label>
                      <textarea
                        rows={2}
                        value={editingProduct.orientacoes_uso || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, orientacoes_uso: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Cuidados Durante o Tratamento</label>
                      <textarea
                        rows={2}
                        value={editingProduct.cuidados_tratamento || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            cuidados_tratamento: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Principais Restrições de Uso</label>
                      <textarea
                        rows={2}
                        value={editingProduct.restricoes_uso || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, restricoes_uso: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                  </div>
                </div>

                {/* BLOCO 4: INFORMAÇÕES PARA ATENDIMENTO */}
                <div className="p-4 rounded-2xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 space-y-3">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#14387F] dark:text-blue-400">
                      4. Informações para Atendimento (Balcão — Sem Diagnóstico ou Prescrição)
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Orientações educativas e de segurança para apoiar o atendente no balcão.
                    </p>
                  </div>
                  {(() => {
                    const infoAt: InformacoesAtendimento =
                      editingProduct.informacoes_atendimento || {
                        finalidade_atendimento: '',
                        informacoes_basicas_atendente: '',
                        cuidados_informar: '',
                        quando_encaminhar_farmaceutico: '',
                        quando_procurar_medico: '',
                      };
                    const setAtField = (key: keyof InformacoesAtendimento, val: string) =>
                      setEditingProduct({
                        ...editingProduct,
                        informacoes_atendimento: { ...infoAt, [key]: val },
                      });
                    return (
                      <div className="space-y-2.5">
                        <div>
                          <label className="block font-semibold mb-1">Para qual finalidade é utilizado</label>
                          <input
                            type="text"
                            value={infoAt.finalidade_atendimento || ''}
                            onChange={(e) => setAtField('finalidade_atendimento', e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block font-semibold mb-1">Informações básicas para o atendente</label>
                            <textarea
                              rows={2}
                              value={infoAt.informacoes_basicas_atendente || ''}
                              onChange={(e) =>
                                setAtField('informacoes_basicas_atendente', e.target.value)
                              }
                              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                            />
                          </div>
                          <div>
                            <label className="block font-semibold mb-1">Cuidados a informar ao cliente</label>
                            <textarea
                              rows={2}
                              value={infoAt.cuidados_informar || ''}
                              onChange={(e) => setAtField('cuidados_informar', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block font-semibold mb-1">Quando encaminhar ao farmacêutico</label>
                            <textarea
                              rows={2}
                              value={infoAt.quando_encaminhar_farmaceutico || ''}
                              onChange={(e) =>
                                setAtField('quando_encaminhar_farmaceutico', e.target.value)
                              }
                              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                            />
                          </div>
                          <div>
                            <label className="block font-semibold mb-1">Quando orientar procurar um médico</label>
                            <textarea
                              rows={2}
                              value={infoAt.quando_procurar_medico || ''}
                              onChange={(e) => setAtField('quando_procurar_medico', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* BLOCO 5: RASTREABILIDADE E STATUS DE VERIFICAÇÃO */}
                <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#14387F] dark:text-blue-400">
                    5. Rastreabilidade e Controle de Verificação
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block font-semibold mb-1">Status de Verificação</label>
                      <select
                        value={
                          (editingProduct.status_verificacao as StatusVerificacao) ||
                          'Pendente de verificação'
                        }
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            status_verificacao: e.target.value as StatusVerificacao,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
                      >
                        <option value="Pendente de verificação">Pendente de verificação</option>
                        <option value="Informações incompletas">Informações incompletas</option>
                        <option value="Necessita de revisão">Necessita de revisão</option>
                        <option value="Informações verificadas">Informações verificadas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Data da Última Verificação</label>
                      <input
                        type="date"
                        value={editingProduct.data_ultima_verificacao || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            data_ultima_verificacao: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Fonte Utilizada</label>
                      <input
                        type="text"
                        value={editingProduct.fonte_informacao || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            fonte_informacao: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        placeholder="Ex: Bulário Eletrônico ANVISA"
                      />
                    </div>
                  </div>

                  {editingProduct.status_verificacao === 'Informações verificadas' && (
                    <label className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={confirmManualVerified}
                        onChange={(e) => setConfirmManualVerified(e.target.checked)}
                        className="mt-0.5"
                      />
                      <span>
                        <strong>Confirmação obrigatória:</strong> Declaro que os dados deste medicamento foram conferidos manualmente com a bula oficial ANVISA / embalagem antes de marcar como <em>Informações verificadas</em>.
                      </span>
                    </label>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isBusy}
                    className="px-5 py-2 rounded-xl bg-[#14387F] hover:bg-[#0e295d] disabled:opacity-60 text-white font-bold"
                  >
                    {isBusy ? 'Salvando...' : 'Salvar Medicamento'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Lightbox Zoom for Organization Photo */}
        {zoomedOrgPhoto &&
          orgCurrentFileira &&
          orgCurrentFileira.foto_url &&
          orgCurrentFileira.foto_url !== 'Foto não cadastrada' && (
          <div
            onClick={() => setZoomedOrgPhoto(false)}
            className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm cursor-zoom-out"
          >
            <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setZoomedOrgPhoto(false)}
                className="absolute -top-3 -right-3 p-2 rounded-full bg-white text-slate-900 shadow-lg hover:bg-slate-100"
                title="Fechar zoom"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={orgCurrentFileira.foto_url}
                alt={orgCurrentFileira.nome}
                className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
