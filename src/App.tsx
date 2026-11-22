import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { User } from 'firebase/auth';
import {
  Header,
  ActiveTab,
} from './components/Header';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ShelfViewerModal } from './components/ShelfViewerModal';
import { StoreMap } from './components/StoreMap';
import { AdminPanel } from './components/AdminPanel';
import { AdminAuthGate } from './components/AdminAuthGate';
import { CustomerGuidanceView } from './components/CustomerGuidanceView';
import { LearningCenterView } from './components/LearningCenterView';
import { PrescriptionReaderView } from './components/PrescriptionReaderView';
import { SplashScreen } from './components/SplashScreen';
import { OfflineIndicator } from './components/OfflineIndicator';
import { ProdutoComLocalizacoes } from './types/database';
import { db } from './services/db';
import {
  INACTIVITY_TIMEOUT_MS,
  logoutAdminAccount,
  subscribeToAdminAuth,
} from './services/auth';
import { Star, Clock, AlertTriangle } from 'lucide-react';

function isDirectAdminUrl(): boolean {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  return (
    path === '/admin' ||
    path.startsWith('/admin/') ||
    hash === '#admin' ||
    params.get('tab') === 'admin'
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>('busca');

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('ultramed_theme_mode') === 'dark';
  });

  // Firebase Admin authentication & protected URL gate state
  const [adminUser, setAdminUser] = useState<User | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [inactivityMessage, setInactivityMessage] = useState('');
  const [showAdminModal, setShowAdminModal] = useState(() => isDirectAdminUrl());
  const lastActivityRef = useRef<number>(Date.now());

  const isAdminLoggedIn = Boolean(adminUser);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFileira, setSelectedFileira] = useState('todas');
  const [selectedCategoria, setSelectedCategoria] = useState('todas');
  const [selectedFabricante, setSelectedFabricante] = useState('todos');
  const [selectedSituacao, setSelectedSituacao] = useState<'todos' | 'com_localizacao' | 'sem_localizacao' | 'balcao' | 'indisponivel_em_loja'>('todos');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<ProdutoComLocalizacoes | null>(null);
  const [activeShelfViewerId, setActiveShelfViewerId] = useState<string | null>(null);
  const [shelfViewerProduct, setShelfViewerProduct] = useState<ProdutoComLocalizacoes | null>(null);

  // Data version trigger for updates
  const [dataVersion, setDataVersion] = useState(0);
  const refreshData = () => setDataVersion((v) => v + 1);

  // Sync dark mode class with DOM
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ultramed_theme_mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ultramed_theme_mode', 'light');
    }
  }, [isDarkMode]);

  // Hydrate catalog from backend & listen to Firebase Auth state via onAuthStateChanged
  useEffect(() => {
    let active = true;

    db.syncFromServer().then((synced) => {
      if (active && synced) {
        refreshData();
      }
    });

    const unsubscribeAuth = subscribeToAdminAuth(({ user, unauthorizedError }) => {
      if (!active) return;
      setAdminUser(user);
      setIsCheckingAuth(false);
      if (user) {
        lastActivityRef.current = Date.now();
        setInactivityMessage('');
      } else if (unauthorizedError) {
        setInactivityMessage(unauthorizedError);
      }
    });

    const handleUrlChange = () => {
      if (isDirectAdminUrl()) {
        setShowAdminModal(true);
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      active = false;
      unsubscribeAuth();
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Auto-logout after 30 minutes of inactivity on shared counter computers
  useEffect(() => {
    if (!adminUser) return;

    lastActivityRef.current = Date.now();

    const updateActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const events: Array<keyof WindowEventMap> = [
      'mousemove',
      'mousedown',
      'keydown',
      'touchstart',
      'scroll',
      'click',
    ];

    events.forEach((evt) => {
      window.addEventListener(evt, updateActivity, { passive: true });
    });

    const intervalId = window.setInterval(async () => {
      if (Date.now() - lastActivityRef.current >= INACTIVITY_TIMEOUT_MS) {
        setInactivityMessage(
          'Sessão encerrada automaticamente após 30 minutos sem atividade.'
        );
        await logoutAdminAccount();
      }
    }, 15_000);

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, updateActivity);
      });
      window.clearInterval(intervalId);
    };
  }, [adminUser]);

  const openAdminArea = () => {
    setShowAdminModal(true);
    if (!isDirectAdminUrl()) {
      window.history.pushState({}, '', '/admin');
    }
  };

  const closeAdminArea = () => {
    setShowAdminModal(false);
    if (isDirectAdminUrl()) {
      window.history.replaceState({}, '', '/');
    }
  };

  const handleAdminLogout = async () => {
    setInactivityMessage('');
    await logoutAdminAccount();
    setShowAdminModal(false);
    if (isDirectAdminUrl()) {
      window.history.replaceState({}, '', '/');
    }
  };

  // Read data
  const estatisticas = useMemo(() => {
    return db.getEstatisticas();
  }, [dataVersion]);

  const categorias = useMemo(() => {
    return db.getCategorias();
  }, [dataVersion]);

  const fabricantes = useMemo(() => {
    return db.getFabricantes();
  }, [dataVersion]);

  const searchHistory = useMemo(() => {
    return db.getSearchHistory();
  }, [dataVersion]);

  const produtosExibidos = useMemo(() => {
    if (activeTab === 'favoritos') {
      return db.getProdutos({
        apenasFavoritos: true,
        busca: searchQuery,
      });
    }

    if (activeTab === 'recentes') {
      return db.getProdutos({
        apenasRecentes: true,
        busca: searchQuery,
      });
    }

    if (activeTab === 'pendencias') {
      return db.getProdutos({
        situacao: 'sem_localizacao',
        busca: searchQuery,
      });
    }

    return db.getProdutos({
      busca: searchQuery,
      fileira: selectedFileira,
      categoria: selectedCategoria,
      fabricante: selectedFabricante,
      situacao: selectedSituacao,
    });
  }, [
    activeTab,
    searchQuery,
    selectedFileira,
    selectedCategoria,
    selectedFabricante,
    selectedSituacao,
    dataVersion,
  ]);

  const totalFavoritos = useMemo(() => {
    return db.getProdutos({ apenasFavoritos: true }).length;
  }, [dataVersion]);

  const totalPendencias = estatisticas.semLocalizacao;

  const hasActiveFilters =
    selectedFileira !== 'todas' ||
    selectedCategoria !== 'todas' ||
    selectedFabricante !== 'todos' ||
    selectedSituacao !== 'todos';

  const handleClearFilters = () => {
    setSelectedFileira('todas');
    setSelectedCategoria('todas');
    setSelectedFabricante('todos');
    setSelectedSituacao('todos');
    setSearchQuery('');
  };

  // Handlers
  const handleOpenDetails = (prod: ProdutoComLocalizacoes) => {
    setSelectedProduct(prod);
    db.addRecente(prod.id);
    if (searchQuery.trim().length >= 2) {
      db.addSearchHistory(searchQuery.trim());
    }
    refreshData();
  };

  const handleOpenShelf = (shelfId: string, prod?: ProdutoComLocalizacoes) => {
    setActiveShelfViewerId(shelfId);
    setShelfViewerProduct(prod || null);
  };

  const handleToggleFavorito = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    db.toggleFavorito(id);
    refreshData();
    if (selectedProduct && selectedProduct.id === id) {
      setSelectedProduct(db.getProdutoById(id));
    }
  };

  const handleClearSearchHistory = () => {
    db.clearSearchHistory();
    refreshData();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] dark:bg-[#0F1A2E] text-[#1A2433] dark:text-[#E2E8F0] transition-colors">
      {/* Opening Splash Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Offline Status Toast */}
      <OfflineIndicator />

      {/* Main App Header */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab === 'admin') {
            openAdminArea();
          } else {
            setActiveTab(tab);
          }
        }}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        totalPendencias={totalPendencias}
        totalFavoritos={totalFavoritos}
        onOpenAdmin={openAdminArea}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-6">
        {/* VIEW 1: BUSCA RÁPIDA / MAIN SEARCH */}
        {activeTab === 'busca' && (
          <div className="space-y-6">
            <div className="max-w-5xl mx-auto">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                selectedFileira={selectedFileira}
                onFileiraChange={setSelectedFileira}
                selectedCategoria={selectedCategoria}
                onCategoriaChange={setSelectedCategoria}
                selectedFabricante={selectedFabricante}
                onFabricanteChange={setSelectedFabricante}
                selectedSituacao={selectedSituacao}
                onSituacaoChange={setSelectedSituacao}
                categorias={categorias}
                fabricantes={fabricantes}
                totalResultados={produtosExibidos.length}
                onClearFilters={handleClearFilters}
                hasActiveFilters={hasActiveFilters}
                onSelectSuggestionProduct={handleOpenDetails}
                searchHistory={searchHistory}
                onClearSearchHistory={handleClearSearchHistory}
              />
            </div>

            {produtosExibidos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
                {produtosExibidos.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    produto={prod}
                    onOpenDetails={handleOpenDetails}
                    onOpenShelf={(shelfId) => handleOpenShelf(shelfId, prod)}
                    onToggleFavorito={handleToggleFavorito}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-3 max-w-md mx-auto">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Nenhum medicamento encontrado
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tente buscar com outro termo ou redefinir os filtros aplicados.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2 rounded-xl bg-[#14387F] text-white text-xs font-semibold hover:bg-[#0e295d]"
                >
                  Limpar busca e filtros
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW 1B: LER RECEITA */}
        {activeTab === 'ler-receita' && <PrescriptionReaderView />}

        {/* VIEW 2: COMO ATENDER O CLIENTE */}
        {activeTab === 'atendimento' && <CustomerGuidanceView />}

        {/* VIEW 3: APRENDER SOBRE MEDICAMENTOS */}
        {activeTab === 'aprender' && (
          <LearningCenterView
            onQuickSearchMedication={(termo) => {
              setSearchQuery(termo);
              setActiveTab('busca');
            }}
          />
        )}

        {/* VIEW 4: MAPA DA LOJA */}
        {activeTab === 'mapa' && (
          <StoreMap
            onSelectProduct={handleOpenDetails}
            onOpenShelfViewer={(shelfId) => handleOpenShelf(shelfId)}
          />
        )}

        {/* VIEW 5: FAVORITOS */}
        {activeTab === 'favoritos' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-[#E30521] fill-[#E30521]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#14387F] dark:text-white">
                  Medicamentos Favoritos ({produtosExibidos.length})
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Acesso rápido aos medicamentos mais consultados pelo seu atendimento.
              </p>
            </div>

            {produtosExibidos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
                {produtosExibidos.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    produto={prod}
                    onOpenDetails={handleOpenDetails}
                    onOpenShelf={(shelfId) => handleOpenShelf(shelfId, prod)}
                    onToggleFavorito={handleToggleFavorito}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-3 max-w-md mx-auto">
                <Star className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Nenhum favorito adicionado ainda
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Clique na estrela de qualquer produto na busca rápida para fixá-lo aqui.
                </p>
                <button
                  onClick={() => setActiveTab('busca')}
                  className="px-4 py-2 rounded-xl bg-[#14387F] text-white text-xs font-semibold"
                >
                  Ir para Busca Rápida
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW 6: RECENTES */}
        {activeTab === 'recentes' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#14387F] dark:text-blue-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#14387F] dark:text-white">
                  Consultados Recentemente ({produtosExibidos.length})
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Últimos produtos cuja ficha de localização foi aberta.
              </p>
            </div>

            {produtosExibidos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
                {produtosExibidos.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    produto={prod}
                    onOpenDetails={handleOpenDetails}
                    onOpenShelf={(shelfId) => handleOpenShelf(shelfId, prod)}
                    onToggleFavorito={handleToggleFavorito}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-3 max-w-md mx-auto">
                <Clock className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Nenhum produto consultado recentemente
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Os produtos que você consultar no balcão aparecerão ordenados aqui.
                </p>
              </div>
            )}
          </div>
        )}

        {/* VIEW 7: PENDÊNCIAS (SEM LOCALIZAÇÃO) */}
        {activeTab === 'pendencias' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-[#E30521]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#14387F] dark:text-white">
                    Produtos sem Prateleira Cadastrada ({produtosExibidos.length})
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Estes medicamentos aparecem normalmente nas buscas do balcão com o aviso "Localização ainda não cadastrada". Você pode definir a prateleira deles pelo painel admin.
                </p>
              </div>

              <button
                onClick={openAdminArea}
                className="px-4 py-2.5 rounded-xl bg-[#14387F] hover:bg-[#0e295d] text-white text-xs sm:text-sm font-bold shadow-xs transition-all self-start sm:self-auto shrink-0"
              >
                Atribuir Prateleiras no Admin
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
              {produtosExibidos.map((prod) => (
                <ProductCard
                  key={prod.id}
                  produto={prod}
                  onOpenDetails={handleOpenDetails}
                  onOpenShelf={(shelfId) => handleOpenShelf(shelfId, prod)}
                  onToggleFavorito={handleToggleFavorito}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        totalProdutos={estatisticas.totalProdutos}
        comLocalizacao={estatisticas.comLocalizacao}
        semLocalizacao={estatisticas.semLocalizacao}
      />

      {/* Product Detail Modal (7 Clinical Tabs) */}
      <ProductDetailModal
        produto={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenShelf={(shelfId, prod) => handleOpenShelf(shelfId, prod)}
        onToggleFavorito={handleToggleFavorito}
        onSelectEquivalent={(eq) => handleOpenDetails(eq)}
      />

      {/* Shelf Viewer Lightbox */}
      {activeShelfViewerId && (
        <ShelfViewerModal
          shelfId={activeShelfViewerId}
          produto={shelfViewerProduct}
          onClose={() => {
            setActiveShelfViewerId(null);
            setShelfViewerProduct(null);
          }}
          onSelectShelf={(sId) => setActiveShelfViewerId(sId)}
        />
      )}

      {/* Protected Admin Access Gate (always shown while checking auth or unauthenticated) */}
      {showAdminModal && (!isAdminLoggedIn || isCheckingAuth) && (
        <AdminAuthGate
          isOpen={showAdminModal}
          isCheckingAuth={isCheckingAuth}
          inactivityMessage={inactivityMessage}
          onClose={closeAdminArea}
          onAuthenticated={() => {
            setInactivityMessage('');
            db.syncFromServer().then(() => refreshData());
          }}
        />
      )}

      {/* Authenticated Admin Panel (never mounted unless Firebase user is logged in) */}
      {showAdminModal && isAdminLoggedIn && !isCheckingAuth && adminUser && (
        <AdminPanel
          isOpen={showAdminModal}
          onClose={closeAdminArea}
          adminEmail={adminUser.email || adminUser.uid}
          onLogout={handleAdminLogout}
          onSessionExpired={() => {
            logoutAdminAccount();
          }}
          onRefreshData={refreshData}
        />
      )}
    </div>
  );
}
