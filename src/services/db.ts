import * as XLSX from 'xlsx';
import {
  Fileira,
  Prateleira,
  Produto,
  Localizacao,
  ProdutoComLocalizacoes,
  EstatisticasLoja,
  CATEGORIAS_PADRAO,
  StatusVerificacao,
} from '../types/database';
import { getInitialSeedData } from '../data/seedData';
import {
  complementarListaSemSobrescrever,
  complementarProdutoSeguro,
  computeVerificationStatus,
  getCamposFaltantesAudit,
  isUnconfirmedValue,
  NAO_VERIFICADO,
} from '../data/medicationEnrichment';
import { applyCatalogUpdates2026 } from '../data/catalogMigration2026';
import { getCurrentFirebaseIdToken } from './auth';

export { getCamposFaltantesAudit, isUnconfirmedValue, NAO_VERIFICADO };

const STORAGE_KEYS = {
  PRODUTOS: 'ultramed_db_produtos_v8',
  PRATELEIRAS: 'ultramed_db_prateleiras_v8',
  LOCALIZACOES: 'ultramed_db_localizacoes_v8',
  FILEIRAS: 'ultramed_db_fileiras_v8',
  FAVORITOS: 'ultramed_favoritos_ids',
  RECENTES: 'ultramed_recentes_ids',
  SEARCH_HISTORY: 'ultramed_search_history',
  THEME: 'ultramed_theme_mode',
};

// Normalize search text for Portuguese diacritics, punctuation and lowercase
export function normalizeText(text?: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

// Phonetic normalization for Portuguese medication spellings (handles common typos like aliviun, alegra, alginak, diprona, ph->f, y->i, double letters)
function phoneticFold(text: string): string {
  return normalizeText(text)
    .replace(/ph/g, 'f')
    .replace(/y/g, 'i')
    .replace(/w/g, 'v')
    .replace(/k/g, 'c')
    .replace(/qu([ei])/g, 'c$1')
    .replace(/([a-z])\1+/g, '$1')
    .replace(/\bh/g, '')
    .replace(/m\b/g, 'n');
}

function levenshteinBounded(a: string, b: string, maxDist: number): number {
  if (Math.abs(a.length - b.length) > maxDist) return maxDist + 1;
  const m = a.length;
  const n = b.length;
  let prev = new Array(n + 1);
  let curr = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;

  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    let rowMin = curr[0];
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      if (curr[j] < rowMin) rowMin = curr[j];
    }
    if (rowMin > maxDist) return maxDist + 1;
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

// Returns match score (0 = no match, higher = better match)
function scoreTermInText(term: string, text: string): number {
  if (!term || !text) return 0;
  const t = normalizeText(term);
  const s = normalizeText(text);
  if (!t || !s) return 0;

  if (s === t) return 100;
  if (s.startsWith(t)) return 85;
  if (s.includes(t)) return 70;

  const tPhon = phoneticFold(t);
  const sPhon = phoneticFold(s);
  if (tPhon.length >= 3 && sPhon.includes(tPhon)) return 55;

  // Word-level fuzzy tolerance for misspelled names (requires >= 4 chars)
  if (t.length >= 4) {
    const maxDist = t.length >= 7 ? 2 : 1;
    const words = s.split(/[^a-z0-9]+/).filter((w) => w.length >= 3);
    for (const word of words) {
      if (levenshteinBounded(t, word, maxDist) <= maxDist) return 45;
      if (tPhon.length >= 4 && levenshteinBounded(tPhon, phoneticFold(word), maxDist) <= maxDist) {
        return 40;
      }
    }
  }

  return 0;
}

export function mapearCategoriasClinicas(p: Produto): string[] {
  const result = new Set<string>(p.categoria_clinica || []);
  const catNorm = normalizeText(p.categoria);
  const texto = normalizeText(`${p.nome} ${p.principio_ativo || ''} ${p.categoria} ${p.para_que_serve || ''}`);

  // Direct match against standard categories
  for (const stdCat of CATEGORIAS_PADRAO) {
    if (normalizeText(stdCat) === catNorm) {
      result.add(stdCat);
    }
  }

  if (texto.includes('analgesic') || texto.includes('dor de cabeca') || texto.includes('dipirona') || texto.includes('paracetamol') || texto.includes('dorflex')) {
    result.add('Analgésicos');
  }
  if (texto.includes('anti-inflamatorio') || texto.includes('antiinflamatorio') || texto.includes('ibuprofeno') || texto.includes('diclofenaco') || texto.includes('nimesulida') || texto.includes('meloxicam') || texto.includes('naproxeno')) {
    result.add('Anti-inflamatórios');
  }
  if (texto.includes('antitermic') || texto.includes('febre') || texto.includes('dipirona') || texto.includes('paracetamol') || texto.includes('ibuprofeno')) {
    result.add('Antitérmicos');
  }
  if (texto.includes('antialergic') || texto.includes('rinite') || texto.includes('urticaria') || texto.includes('loratadina') || texto.includes('desloratadina') || texto.includes('fexofenadina') || texto.includes('bilastina')) {
    result.add('Antialérgicos');
  }
  if (texto.includes('antibiotic') || texto.includes('amoxicilina') || texto.includes('azitromicina') || texto.includes('cefalexina') || texto.includes('ciprofloxacino') || texto.includes('neomicina')) {
    result.add('Antibióticos');
  }
  if (texto.includes('gripe') || texto.includes('resfriado') || texto.includes('antigripal') || texto.includes('pseudoefedrina') || texto.includes('coriza')) {
    result.add('Medicamentos para gripe e resfriado');
  }
  if (texto.includes('tosse') || texto.includes('expectorante') || texto.includes('xarope') || texto.includes('ambroxol') || texto.includes('acetilcisteina')) {
    result.add('Medicamentos para tosse');
  }
  if (texto.includes('respirat') || texto.includes('asma') || texto.includes('bronquite') || texto.includes('salbutamol') || texto.includes('montelucaste') || texto.includes('falta de ar')) {
    result.add('Medicamentos para problemas respiratórios');
  }
  if (texto.includes('estomago') || texto.includes('digestiv') || texto.includes('antiacido') || texto.includes('omeprazol') || texto.includes('pantoprazol') || texto.includes('azia') || texto.includes('refluxo') || texto.includes('nausea') || texto.includes('metoclopramida')) {
    result.add('Medicamentos para estômago e digestão');
  }
  if (texto.includes('intestin') || texto.includes('laxante') || texto.includes('diarreia') || texto.includes('probiotic') || texto.includes('mesalazina') || texto.includes('prisao de ventre') || texto.includes('nitazoxanida')) {
    result.add('Medicamentos para intestino');
  }
  if (texto.includes('pressao') || texto.includes('hipertens') || texto.includes('losartana') || texto.includes('olmesartana') || texto.includes('metildopa') || texto.includes('nebivolol') || texto.includes('lisinopril') || texto.includes('anlodipino')) {
    result.add('Medicamentos para pressão arterial');
  }
  if (texto.includes('coracao') || texto.includes('cardiac') || texto.includes('arritmia') || texto.includes('amiodarona') || texto.includes('angina') || texto.includes('metoprolol') || texto.includes('insuficiencia cardiaca')) {
    result.add('Medicamentos para coração');
  }
  if (texto.includes('vitamina') || texto.includes('suplemento') || texto.includes('colecalciferol') || texto.includes('calcio') || texto.includes('mineral') || texto.includes('ferro')) {
    result.add('Vitaminas e suplementos');
  }
  if (texto.includes('dermatolog') || texto.includes('pomada') || texto.includes('creme') || texto.includes('pele') || texto.includes('micose') || texto.includes('lidocaina') || texto.includes('andolba') || texto.includes('miconazol') || texto.includes('minoxidil')) {
    result.add('Medicamentos dermatológicos');
  }
  if (texto.includes('nasal') || texto.includes('nariz') || texto.includes('mometasona') || texto.includes('oximetazolina') || texto.includes('descongestionante')) {
    result.add('Medicamentos de uso nasal');
  }
  if (texto.includes('oftalmol') || texto.includes('colirio') || texto.includes('olhos') || texto.includes('olopatadina') || texto.includes('visao')) {
    result.add('Medicamentos de uso oftalmológico');
  }
  if (texto.includes('pediatric') || texto.includes('infantil') || texto.includes('crianca') || texto.includes('bebe') || /\bped\b/.test(texto)) {
    result.add('Medicamentos pediátricos');
  }
  if (
    texto.includes('controlad') ||
    texto.includes('psiquiatric') ||
    texto.includes('sistema nervoso') ||
    texto.includes('receita azul') ||
    texto.includes('receita branca') ||
    texto.includes('tarja preta') ||
    texto.includes('retencao de receita') ||
    texto.includes('portaria 344') ||
    texto.includes('codeina') ||
    texto.includes('tramadol') ||
    /\bc1\b/.test(texto) ||
    texto.includes('clonazepam') ||
    texto.includes('fluoxetina') ||
    texto.includes('sertralina') ||
    texto.includes('pregabalina') ||
    texto.includes('zolpidem')
  ) {
    result.add('Medicamentos de uso controlado');
  }

  return Array.from(result);
}

class DatabaseService {
  private produtos: Map<string, Produto> = new Map();
  private prateleiras: Map<string, Prateleira> = new Map();
  private localizacoes: Map<string, Localizacao> = new Map();
  private fileiras: Map<string, Fileira> = new Map();
  private favoritos: Set<string> = new Set();
  private recentes: string[] = [];
  private searchHistory: string[] = [];
  private isInitialized = false;

  constructor() {
    this.init();
  }

  public init() {
    if (this.isInitialized) return;

    try {
      const storedProds = localStorage.getItem(STORAGE_KEYS.PRODUTOS);
      const storedShelves = localStorage.getItem(STORAGE_KEYS.PRATELEIRAS);
      const storedLocs = localStorage.getItem(STORAGE_KEYS.LOCALIZACOES);
      const storedRows = localStorage.getItem(STORAGE_KEYS.FILEIRAS);
      const storedFavs = localStorage.getItem(STORAGE_KEYS.FAVORITOS);
      const storedRecs = localStorage.getItem(STORAGE_KEYS.RECENTES);
      const storedHistory = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);

      if (storedProds && storedShelves && storedLocs && storedRows) {
        const pList: Produto[] = JSON.parse(storedProds);
        const sList: Prateleira[] = JSON.parse(storedShelves);
        const lList: Localizacao[] = JSON.parse(storedLocs);
        const rList: Fileira[] = JSON.parse(storedRows);

        if (pList.length < 880) {
          this.seedInitialData();
        } else {
          let migrated = false;
          const loadedProds = pList.map((p) => {
            if (!p.status_verificacao || !p.tarja || !p.medicamento_controlado) {
              migrated = true;
              return complementarProdutoSeguro(p);
            }
            return p;
          });
          const migrationRes = applyCatalogUpdates2026({
            fileiras: rList,
            prateleiras: sList,
            produtos: loadedProds,
            localizacoes: lList,
          });
          loadedProds.forEach((p) => this.produtos.set(p.id, p));
          sList.forEach((s) => this.prateleiras.set(s.id, s));
          lList.forEach((l) => this.localizacoes.set(l.id, l));
          rList.forEach((r) => this.fileiras.set(r.letra, r));
          if (migrated || migrationRes.changed) {
            this.persistAll();
          }
        }
      } else {
        this.seedInitialData();
      }

      if (storedFavs) {
        this.favoritos = new Set(JSON.parse(storedFavs));
      }
      if (storedRecs) {
        this.recentes = JSON.parse(storedRecs);
      }
      if (storedHistory) {
        this.searchHistory = JSON.parse(storedHistory);
      }

      this.isInitialized = true;
    } catch (err) {
      console.error('Error initializing database, reloading seeds:', err);
      this.seedInitialData();
      this.isInitialized = true;
    }
  }

  public seedInitialData() {
    this.produtos.clear();
    this.prateleiras.clear();
    this.localizacoes.clear();
    this.fileiras.clear();

    const initial = getInitialSeedData();
    initial.produtos.forEach((p) => this.produtos.set(p.id, p));
    initial.prateleiras.forEach((s) => this.prateleiras.set(s.id, s));
    initial.localizacoes.forEach((l) => this.localizacoes.set(l.id, l));
    initial.fileiras.forEach((r) => this.fileiras.set(r.letra, r));

    this.persistAll();
  }

  private persistAll() {
    try {
      localStorage.setItem(
        STORAGE_KEYS.PRODUTOS,
        JSON.stringify(Array.from(this.produtos.values()))
      );
      localStorage.setItem(
        STORAGE_KEYS.PRATELEIRAS,
        JSON.stringify(Array.from(this.prateleiras.values()))
      );
      localStorage.setItem(
        STORAGE_KEYS.LOCALIZACOES,
        JSON.stringify(Array.from(this.localizacoes.values()))
      );
      localStorage.setItem(
        STORAGE_KEYS.FILEIRAS,
        JSON.stringify(Array.from(this.fileiras.values()))
      );
      localStorage.setItem(
        STORAGE_KEYS.FAVORITOS,
        JSON.stringify(Array.from(this.favoritos))
      );
      localStorage.setItem(
        STORAGE_KEYS.RECENTES,
        JSON.stringify(this.recentes)
      );
      localStorage.setItem(
        STORAGE_KEYS.SEARCH_HISTORY,
        JSON.stringify(this.searchHistory)
      );
    } catch (e) {
      console.warn('Storage quota exceeded or storage disabled:', e);
    }
  }

  // Enrich a base produto with its shelf locations without dropping duplicate shelf assignments
  private enrichProduto(p: Produto): ProdutoComLocalizacoes {
    const locs: string[] = [];
    const shelvesInfo: Prateleira[] = [];

    for (const loc of this.localizacoes.values()) {
      if (loc.produto_id === p.id) {
        if (!locs.includes(loc.prateleira_id)) {
          locs.push(loc.prateleira_id);
        }
        const shelf = this.prateleiras.get(loc.prateleira_id);
        if (shelf) shelvesInfo.push(shelf);
      }
    }

    return {
      ...p,
      localizacoes: locs.sort(),
      prateleirasInfo: shelvesInfo,
      favorito: this.favoritos.has(p.id),
    };
  }

  public getProdutos(filters?: {
    busca?: string;
    fileira?: string;
    categoria?: string;
    categoriaClinica?: string;
    fabricante?: string;
    situacao?: 'todos' | 'com_localizacao' | 'sem_localizacao' | 'balcao' | 'indisponivel_em_loja';
    classificacao?: string;
    tarja?: string;
    medicamentoControlado?: string;
    statusVerificacao?: string;
    apenasFavoritos?: boolean;
    apenasRecentes?: boolean;
  }): ProdutoComLocalizacoes[] {
    let prods = Array.from(this.produtos.values()).map((p) => this.enrichProduto(p));

    if (filters?.apenasFavoritos) {
      prods = prods.filter((p) => this.favoritos.has(p.id));
    }

    if (filters?.apenasRecentes) {
      const idOrder = new Map(this.recentes.map((id, index) => [id, index]));
      prods = prods
        .filter((p) => idOrder.has(p.id))
        .sort((a, b) => (idOrder.get(a.id) ?? 999) - (idOrder.get(b.id) ?? 999));
      if (!filters.busca || !filters.busca.trim()) {
        return prods;
      }
    }

    if (filters?.situacao) {
      if (filters.situacao === 'com_localizacao') {
        prods = prods.filter(
          (p) =>
            (p.localizacoes.length > 0 &&
              p.situacao !== 'sem_localizacao' &&
              p.situacao !== 'indisponivel_em_loja') ||
            p.situacao === 'balcao'
        );
      } else if (filters.situacao === 'sem_localizacao') {
        prods = prods.filter(
          (p) =>
            (p.localizacoes.length === 0 || p.situacao === 'sem_localizacao') &&
            p.situacao !== 'indisponivel_em_loja' &&
            p.situacao !== 'balcao'
        );
      } else if (filters.situacao === 'balcao') {
        prods = prods.filter((p) => p.situacao === 'balcao');
      } else if (filters.situacao === 'indisponivel_em_loja') {
        prods = prods.filter((p) => p.situacao === 'indisponivel_em_loja');
      }
    }

    if (filters?.fileira && filters.fileira !== 'todas') {
      prods = prods.filter((p) =>
        p.localizacoes.some((loc) => loc.startsWith(filters.fileira!))
      );
    }

    if (filters?.categoria && filters.categoria !== 'todas') {
      prods = prods.filter((p) => {
        if (p.categoria === filters.categoria) return true;
        const mapped = mapearCategoriasClinicas(p);
        return mapped.includes(filters.categoria!);
      });
    }

    if (filters?.categoriaClinica && filters.categoriaClinica !== 'todas') {
      prods = prods.filter((p) =>
        mapearCategoriasClinicas(p).includes(filters.categoriaClinica!)
      );
    }

    if (filters?.fabricante && filters.fabricante !== 'todos') {
      prods = prods.filter((p) => p.fabricante === filters.fabricante);
    }

    if (filters?.classificacao && filters.classificacao !== 'todos') {
      prods = prods.filter((p) => (p.classificacao || NAO_VERIFICADO) === filters.classificacao);
    }

    if (filters?.tarja && filters.tarja !== 'todos') {
      prods = prods.filter((p) => (p.tarja || NAO_VERIFICADO) === filters.tarja);
    }

    if (filters?.medicamentoControlado && filters.medicamentoControlado !== 'todos') {
      prods = prods.filter(
        (p) => (p.medicamento_controlado || NAO_VERIFICADO) === filters.medicamentoControlado
      );
    }

    if (filters?.statusVerificacao && filters.statusVerificacao !== 'todos') {
      if (filters.statusVerificacao === 'incompletos_ou_revisao') {
        prods = prods.filter(
          (p) =>
            p.status_verificacao === 'Informações incompletas' ||
            p.status_verificacao === 'Necessita de revisão'
        );
      } else {
        prods = prods.filter((p) => p.status_verificacao === filters.statusVerificacao);
      }
    }

    if (filters?.busca && filters.busca.trim()) {
      const q = normalizeText(filters.busca);
      const terms = q.split(/\s+/).filter(Boolean);

      const scored: Array<{ prod: ProdutoComLocalizacoes; score: number }> = [];

      for (const p of prods) {
        const mappedCats = mapearCategoriasClinicas(p).join(' ');
        const locsText = p.localizacoes.join(' ');
        const fields = [
          { text: p.nome, weight: 3.0 },
          { text: p.principio_ativo || '', weight: 2.5 },
          { text: p.concentracao || '', weight: 1.5 },
          { text: p.forma_farmaceutica || '', weight: 1.2 },
          { text: `${p.categoria} ${mappedCats}`, weight: 1.6 },
          { text: `${locsText} ${p.observacao_localizacao || ''}`, weight: 2.2 },
          { text: p.fabricante || '', weight: 1.2 },
          { text: p.para_que_serve || '', weight: 1.0 },
          {
            text:
              p.situacao === 'indisponivel_em_loja'
                ? 'indisponivel em loja'
                : p.situacao === 'balcao'
                  ? 'balcao balcao de atendimento'
                  : '',
            weight: 1.5,
          },
        ];

        let totalScore = 0;
        let allTermsMatched = true;

        for (const term of terms) {
          let bestTermScore = 0;
          for (const field of fields) {
            const s = scoreTermInText(term, field.text);
            if (s > 0) {
              bestTermScore = Math.max(bestTermScore, s * field.weight);
            }
          }
          if (bestTermScore === 0) {
            allTermsMatched = false;
            break;
          }
          totalScore += bestTermScore;
        }

        if (allTermsMatched) {
          // Slight boost if full query matches commercial name directly
          if (normalizeText(p.nome).includes(q)) totalScore += 60;
          scored.push({ prod: p, score: totalScore });
        }
      }

      scored.sort((a, b) => b.score - a.score);
      return scored.map((item) => item.prod);
    }

    return prods;
  }

  public getSearchSuggestions(query: string, limit = 8): ProdutoComLocalizacoes[] {
    if (!query || !query.trim()) return [];
    return this.getProdutos({ busca: query }).slice(0, limit);
  }

  public getSearchHistory(): string[] {
    return [...this.searchHistory];
  }

  public addSearchHistory(term: string) {
    const clean = term.trim();
    if (clean.length < 2) return;
    this.searchHistory = [
      clean,
      ...this.searchHistory.filter((t) => normalizeText(t) !== normalizeText(clean)),
    ].slice(0, 12);
    this.persistAll();
  }

  public clearSearchHistory() {
    this.searchHistory = [];
    this.persistAll();
  }

  public getProdutoById(id: string): ProdutoComLocalizacoes | null {
    const p = this.produtos.get(id);
    if (!p) return null;
    return this.enrichProduto(p);
  }

  public getProdutosPorPrateleira(prateleiraId: string): ProdutoComLocalizacoes[] {
    const prodIds = new Set<string>();
    for (const loc of this.localizacoes.values()) {
      if (loc.prateleira_id === prateleiraId) {
        prodIds.add(loc.produto_id);
      }
    }
    return Array.from(prodIds)
      .map((id) => this.produtos.get(id))
      .filter((p): p is Produto => !!p)
      .map((p) => this.enrichProduto(p));
  }

  public getProdutosEquivalentes(principioAtivo?: string, excludeId?: string): ProdutoComLocalizacoes[] {
    if (!principioAtivo || !principioAtivo.trim()) return [];
    const targetNorm = normalizeText(principioAtivo);
    if (targetNorm.includes('informacao nao confirmada') || targetNorm.includes('conferir embalagem')) {
      return [];
    }

    return Array.from(this.produtos.values())
      .filter((p) => p.id !== excludeId && p.principio_ativo && normalizeText(p.principio_ativo) === targetNorm)
      .map((p) => this.enrichProduto(p));
  }

  // Group different concentrations / presentations of the same commercial medicine
  public getApresentacoesRelacionadas(produto: ProdutoComLocalizacoes): ProdutoComLocalizacoes[] {
    const words = normalizeText(produto.nome)
      .split(/\s+/)
      .filter((w) => w.length >= 4 && !['gen', 'infantil', 'adulto', 'caps', 'gotas', 'creme', 'pomada'].includes(w));

    const brandRoot = words[0];
    if (!brandRoot) return [];

    return Array.from(this.produtos.values())
      .filter((p) => {
        if (p.id === produto.id) return false;
        const pNorm = normalizeText(p.nome);
        // Match exact first word (e.g. "alivium", "allegra", "alginac", "alektos", "ancoron", "altad")
        const pWords = pNorm.split(/\s+/);
        return pWords[0] === brandRoot || (brandRoot === 'altad' && pNorm.startsWith('altad'));
      })
      .map((p) => this.enrichProduto(p));
  }

  public getPrateleiras(): Prateleira[] {
    return Array.from(this.prateleiras.values()).sort((a, b) => {
      if (a.fileira !== b.fileira) return a.fileira.localeCompare(b.fileira);
      return a.numero - b.numero;
    });
  }

  public getPrateleirasPorFileira(fileira: string): Prateleira[] {
    return Array.from(this.prateleiras.values())
      .filter((s) => s.fileira === fileira)
      .sort((a, b) => a.numero - b.numero);
  }

  public getFileiras(): Fileira[] {
    return Array.from(this.fileiras.values()).sort((a, b) => a.letra.localeCompare(b.letra));
  }

  public updatePrateleiraCoordinates(
    id: string,
    coords: { x: number; y: number; largura: number; altura: number }
  ): Prateleira | null {
    const shelf = this.prateleiras.get(id);
    if (!shelf) return null;

    shelf.x = Math.max(0, Math.min(100, Math.round(coords.x * 10) / 10));
    shelf.y = Math.max(0, Math.min(100, Math.round(coords.y * 10) / 10));
    shelf.largura = Math.max(2, Math.min(100, Math.round(coords.largura * 10) / 10));
    shelf.altura = Math.max(2, Math.min(100, Math.round(coords.altura * 10) / 10));

    this.prateleiras.set(id, shelf);
    this.persistAll();
    return shelf;
  }

  public updateFileiraFoto(letra: string, fotoUrl: string): Fileira | null {
    const f = this.fileiras.get(letra.toUpperCase());
    if (!f) return null;

    f.foto_url = fotoUrl;
    this.fileiras.set(f.letra, f);
    this.persistAll();
    return f;
  }

  public addProdutoPrateleira(produtoId: string, prateleiraId: string): ProdutoComLocalizacoes | null {
    const prod = this.produtos.get(produtoId);
    if (!prod) return null;

    const cleanShelf = prateleiraId.toUpperCase().trim();
    if (!cleanShelf) return null;

    const alreadyLinked = Array.from(this.localizacoes.values()).some(
      (l) => l.produto_id === produtoId && l.prateleira_id === cleanShelf
    );

    if (!alreadyLinked) {
      const existingCount = Array.from(this.localizacoes.values()).filter(
        (l) => l.produto_id === produtoId
      ).length;
      const locId = `LOC-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      this.localizacoes.set(locId, {
        id: locId,
        produto_id: produtoId,
        prateleira_id: cleanShelf,
        principal: existingCount === 0,
      });
    }

    prod.situacao = 'ativo';
    prod.atualizado_em = new Date().toISOString();
    this.produtos.set(produtoId, prod);
    this.persistAll();
    return this.enrichProduto(prod);
  }

  public removeProdutoPrateleira(produtoId: string, prateleiraId: string): ProdutoComLocalizacoes | null {
    const prod = this.produtos.get(produtoId);
    if (!prod) return null;

    const cleanShelf = prateleiraId.toUpperCase().trim();
    for (const [locId, loc] of Array.from(this.localizacoes.entries())) {
      if (loc.produto_id === produtoId && loc.prateleira_id === cleanShelf) {
        this.localizacoes.delete(locId);
      }
    }

    const remaining = Array.from(this.localizacoes.values()).some((l) => l.produto_id === produtoId);
    prod.situacao = remaining ? 'ativo' : 'sem_localizacao';
    prod.atualizado_em = new Date().toISOString();
    this.produtos.set(produtoId, prod);
    this.persistAll();
    return this.enrichProduto(prod);
  }

  public setProdutoPrateleiras(produtoId: string, prateleiras: string[]): ProdutoComLocalizacoes | null {
    const prod = this.produtos.get(produtoId);
    if (!prod) return null;

    for (const [locId, loc] of Array.from(this.localizacoes.entries())) {
      if (loc.produto_id === produtoId) {
        this.localizacoes.delete(locId);
      }
    }

    const uniqueShelves = Array.from(
      new Set(prateleiras.map((s) => s.toUpperCase().trim()).filter(Boolean))
    );

    uniqueShelves.forEach((cleanShelf, idx) => {
      const locId = `LOC-${Date.now()}-${Math.floor(Math.random() * 1000)}-${idx}`;
      this.localizacoes.set(locId, {
        id: locId,
        produto_id: produtoId,
        prateleira_id: cleanShelf,
        principal: idx === 0,
      });
    });

    prod.situacao =
      uniqueShelves.length > 0
        ? 'ativo'
        : prod.situacao === 'indisponivel_em_loja'
          ? 'indisponivel_em_loja'
          : prod.situacao === 'balcao'
            ? 'balcao'
            : 'sem_localizacao';
    prod.atualizado_em = new Date().toISOString();
    this.produtos.set(produtoId, prod);

    this.persistAll();
    return this.enrichProduto(prod);
  }

  public salvarProduto(
    dados: Partial<Produto> & { id?: string; prateleiras?: string[] }
  ): ProdutoComLocalizacoes {
    const id = dados.id || `MED-${Date.now().toString().slice(-5)}`;
    const existing = this.produtos.get(id);

    const classificacaoFinal = dados.classificacao ?? existing?.classificacao ?? NAO_VERIFICADO;
    const origemSync =
      dados.origem ||
      (classificacaoFinal === 'Referência' ||
      classificacaoFinal === 'Genérico' ||
      classificacaoFinal === 'Similar'
        ? classificacaoFinal
        : existing?.origem || 'Similar');

    const produto: Produto = {
      ...existing,
      id,
      nome: dados.nome || existing?.nome || 'Novo Medicamento',
      principio_ativo: dados.principio_ativo ?? existing?.principio_ativo ?? '',
      concentracao: dados.concentracao ?? existing?.concentracao ?? '',
      apresentacao: dados.apresentacao ?? existing?.apresentacao ?? '',
      forma_farmaceutica: dados.forma_farmaceutica ?? existing?.forma_farmaceutica ?? '',
      fabricante: dados.fabricante ?? existing?.fabricante ?? '',
      classificacao: classificacaoFinal,
      para_que_serve: dados.para_que_serve ?? existing?.para_que_serve ?? '',
      categoria: dados.categoria || existing?.categoria || 'Outros',
      categoria_clinica: dados.categoria_clinica ?? existing?.categoria_clinica,
      como_tomar: dados.como_tomar ?? existing?.como_tomar ?? '',
      via_administracao: dados.via_administracao ?? existing?.via_administracao ?? '',
      orientacoes_uso: dados.orientacoes_uso ?? existing?.orientacoes_uso ?? '',
      cuidados_tratamento: dados.cuidados_tratamento ?? existing?.cuidados_tratamento ?? '',
      restricoes_uso: dados.restricoes_uso ?? existing?.restricoes_uso ?? '',
      acompanhamento_medico: dados.acompanhamento_medico ?? existing?.acompanhamento_medico ?? '',
      o_que_indicar: dados.o_que_indicar ?? existing?.o_que_indicar ?? '',
      informacoes_atendimento:
        dados.informacoes_atendimento !== undefined
          ? dados.informacoes_atendimento
          : existing?.informacoes_atendimento,
      exige_receita: dados.exige_receita ?? existing?.exige_receita ?? '',
      tipo_controle: dados.tipo_controle ?? existing?.tipo_controle ?? '',
      tarja: dados.tarja ?? existing?.tarja ?? NAO_VERIFICADO,
      medicamento_controlado:
        dados.medicamento_controlado ?? existing?.medicamento_controlado ?? NAO_VERIFICADO,
      contraindicacoes: dados.contraindicacoes ?? existing?.contraindicacoes ?? '',
      efeitos_colaterais: dados.efeitos_colaterais ?? existing?.efeitos_colaterais ?? '',
      interacoes_medicamentosas:
        dados.interacoes_medicamentosas ?? existing?.interacoes_medicamentosas ?? '',
      orientacoes_armazenamento:
        dados.orientacoes_armazenamento ?? existing?.orientacoes_armazenamento ?? '',
      fonte_informacao: dados.fonte_informacao ?? existing?.fonte_informacao ?? '',
      situacao: dados.situacao || existing?.situacao || 'sem_localizacao',
      observacao_localizacao:
        dados.observacao_localizacao ?? existing?.observacao_localizacao,
      origem: origemSync,
      status_conferencia: dados.status_conferencia ?? existing?.status_conferencia,
      atualizado_em: dados.atualizado_em || new Date().toISOString(),
    };

    const allowedStatuses: StatusVerificacao[] = [
      'Pendente de verificação',
      'Informações verificadas',
      'Informações incompletas',
      'Necessita de revisão',
    ];
    const requestedStatus = dados.status_verificacao as StatusVerificacao | undefined;
    if (requestedStatus && allowedStatuses.includes(requestedStatus)) {
      produto.status_verificacao = requestedStatus;
    } else {
      produto.status_verificacao = computeVerificationStatus(produto, false);
    }

    if (produto.status_verificacao === 'Informações verificadas') {
      produto.data_ultima_verificacao =
        dados.data_ultima_verificacao || new Date().toISOString().slice(0, 10);
      produto.status_conferencia = undefined;
    } else if (dados.data_ultima_verificacao !== undefined) {
      produto.data_ultima_verificacao = dados.data_ultima_verificacao;
    }

    this.produtos.set(id, produto);

    if (dados.prateleiras !== undefined) {
      this.setProdutoPrateleiras(id, dados.prateleiras);
    } else {
      this.persistAll();
    }

    return this.enrichProduto(produto);
  }

  public excluirProduto(id: string): boolean {
    if (!this.produtos.has(id)) return false;
    this.produtos.delete(id);

    for (const [locId, loc] of Array.from(this.localizacoes.entries())) {
      if (loc.produto_id === id) {
        this.localizacoes.delete(locId);
      }
    }

    this.favoritos.delete(id);
    this.recentes = this.recentes.filter((rId) => rId !== id);

    this.persistAll();
    return true;
  }

  public toggleFavorito(produtoId: string): boolean {
    if (this.favoritos.has(produtoId)) {
      this.favoritos.delete(produtoId);
    } else {
      this.favoritos.add(produtoId);
    }
    this.persistAll();
    return this.favoritos.has(produtoId);
  }

  public addRecente(produtoId: string) {
    this.recentes = [produtoId, ...this.recentes.filter((id) => id !== produtoId)].slice(0, 30);
    this.persistAll();
  }

  public getCategorias(): string[] {
    const cats = new Set<string>();
    for (const p of this.produtos.values()) {
      if (p.categoria) cats.add(p.categoria);
    }
    return Array.from(cats).sort();
  }

  public getFabricantes(): string[] {
    const fabs = new Set<string>();
    for (const p of this.produtos.values()) {
      if (p.fabricante) fabs.add(p.fabricante);
    }
    return Array.from(fabs).sort();
  }

  public getEstatisticas(): EstatisticasLoja {
    let comLoc = 0;
    let semLoc = 0;

    for (const p of this.produtos.values()) {
      if (p.situacao === 'indisponivel_em_loja') continue;
      const hasShelf = Array.from(this.localizacoes.values()).some((l) => l.produto_id === p.id);
      if ((hasShelf && p.situacao !== 'sem_localizacao') || p.situacao === 'balcao') {
        comLoc++;
      } else {
        semLoc++;
      }
    }

    return {
      totalProdutos: this.produtos.size,
      comLocalizacao: comLoc,
      semLocalizacao: semLoc,
      totalPrateleiras: this.prateleiras.size,
      totalFileiras: this.fileiras.size,
    };
  }

  public getEstatisticasVerificacao(): {
    total: number;
    completos: number;
    incompletos: number;
    necessitaRevisao: number;
    aguardandoVerificacao: number;
    comIncompletosOuRevisao: number;
  } {
    let completos = 0;
    let incompletos = 0;
    let necessitaRevisao = 0;
    let aguardandoVerificacao = 0;

    for (const p of this.produtos.values()) {
      if (p.status_verificacao === 'Informações verificadas') completos++;
      else if (p.status_verificacao === 'Informações incompletas') incompletos++;
      else if (p.status_verificacao === 'Necessita de revisão') necessitaRevisao++;
      else aguardandoVerificacao++;
    }

    return {
      total: this.produtos.size,
      completos,
      incompletos,
      necessitaRevisao,
      aguardandoVerificacao,
      comIncompletosOuRevisao: incompletos + necessitaRevisao,
    };
  }

  // Import workbook preserving multiple locations across rows/shelves
  public importarPlanilha(data: ArrayBuffer | Uint8Array): {
    atualizados: number;
    inseridos: number;
    localizacoesImportadas: number;
    erros: string[];
  } {
    const wb = XLSX.read(data, { type: 'array' });
    let inseridos = 0;
    let atualizados = 0;
    let localizacoesImportadas = 0;
    const erros: string[] = [];

    const sheetNames = wb.SheetNames;
    const catalogoName = sheetNames.find((s) => normalizeText(s).includes('catalogo')) || sheetNames[0];

    if (catalogoName) {
      const sheet = wb.Sheets[catalogoName];
      const rows: any[] = XLSX.utils.sheet_to_json(sheet);

      rows.forEach((row, idx) => {
        const id = String(row.ID || row.id || row.Codigo || row.codigo || `MED-IMP-${idx + 1}`).trim();
        const nome = String(row.Nome || row.nome || row.Produto || row.produto || '').trim();

        if (!nome) return;

        const existing = this.produtos.get(id);
        const isNew = !existing;
        const produtoRaw: Produto = {
          ...existing,
          id,
          nome,
          principio_ativo: String(row.Principio_Ativo || row.principio_ativo || row['Princípio Ativo'] || existing?.principio_ativo || '').trim(),
          concentracao: String(row.Concentracao || row.concentracao || row['Concentração'] || existing?.concentracao || '').trim(),
          apresentacao: String(row.Apresentacao || row.apresentacao || row['Apresentação'] || existing?.apresentacao || '').trim(),
          forma_farmaceutica: String(row.Forma_Farmaceutica || row.forma_farmaceutica || row['Forma Farmacêutica'] || existing?.forma_farmaceutica || '').trim(),
          fabricante: String(row.Fabricante || row.fabricante || existing?.fabricante || '').trim(),
          classificacao: String(row.Classificacao || row.classificacao || existing?.classificacao || '').trim(),
          para_que_serve: String(row.Para_Que_Serve || row.para_que_serve || row['Para que serve'] || row.Finalidade || existing?.para_que_serve || '').trim(),
          categoria: String(row.Categoria || row.categoria || existing?.categoria || 'Outros').trim(),
          como_tomar: String(row.Como_Tomar || row.como_tomar || row['Como tomar'] || existing?.como_tomar || '').trim(),
          via_administracao: String(row.Via_Administracao || row.via_administracao || existing?.via_administracao || '').trim(),
          orientacoes_uso: String(row.Orientacoes_Uso || row.orientacoes_uso || existing?.orientacoes_uso || '').trim(),
          cuidados_tratamento: String(row.Cuidados_Tratamento || row.cuidados_tratamento || existing?.cuidados_tratamento || '').trim(),
          restricoes_uso: String(row.Restricoes_Uso || row.restricoes_uso || existing?.restricoes_uso || '').trim(),
          acompanhamento_medico: String(row.Acompanhamento_Medico || row.acompanhamento_medico || existing?.acompanhamento_medico || '').trim(),
          o_que_indicar: String(row.O_Que_Indicar || row.o_que_indicar || row['O que indicar'] || existing?.o_que_indicar || '').trim(),
          exige_receita: String(row.Exige_Receita || row.exige_receita || existing?.exige_receita || '').trim(),
          tarja: String(row.Tarja || row.tarja || existing?.tarja || '').trim(),
          medicamento_controlado: String(row.Controlado || row.medicamento_controlado || existing?.medicamento_controlado || '').trim(),
          contraindicacoes: String(row.Contraindicacoes || row.contraindicacoes || existing?.contraindicacoes || '').trim(),
          efeitos_colaterais: String(row.Efeitos_Colaterais || row.efeitos_colaterais || existing?.efeitos_colaterais || '').trim(),
          interacoes_medicamentosas: String(row.Interacoes || row.interacoes || existing?.interacoes_medicamentosas || '').trim(),
          orientacoes_armazenamento: String(row.Armazenamento || row.orientacoes_armazenamento || existing?.orientacoes_armazenamento || '').trim(),
          fonte_informacao: String(row.Fonte || row.fonte_informacao || existing?.fonte_informacao || '').trim(),
          status_verificacao: String(row.Status_Verificacao || row.status_verificacao || existing?.status_verificacao || '').trim() || undefined,
          data_ultima_verificacao: String(row.Ultima_Verificacao || row.data_ultima_verificacao || existing?.data_ultima_verificacao || '').trim() || undefined,
          situacao: (row.Situacao || row.situacao || existing?.situacao || 'sem_localizacao') as any,
          origem: String(row.Origem || row.origem || existing?.origem || 'Similar').trim(),
          atualizado_em: new Date().toISOString(),
        };

        this.produtos.set(id, complementarProdutoSeguro(produtoRaw));
        if (isNew) inseridos++;
        else atualizados++;

        const inlineLoc = row.Localizacoes || row.Localizacao || row.localizacao || row.Prateleira || row.prateleira;
        if (inlineLoc) {
          const locList = String(inlineLoc).split(/[,;]+/).map((s) => s.trim().toUpperCase()).filter(Boolean);
          locList.forEach((loc) => {
            this.addProdutoPrateleira(id, loc);
            localizacoesImportadas++;
          });
        }
      });
    }

    const locSheetName = sheetNames.find((s) => normalizeText(s).includes('localizac'));
    if (locSheetName) {
      const sheet = wb.Sheets[locSheetName];
      const rows: any[] = XLSX.utils.sheet_to_json(sheet);

      rows.forEach((row) => {
        const prodId = String(row.produto_id || row.Produto_ID || row.ProdutoId || row.ID || '').trim();
        const shelfId = String(row.prateleira_id || row.Prateleira_ID || row.Prateleira || row.prateleira || '').trim().toUpperCase();

        if (prodId && shelfId && this.produtos.has(prodId)) {
          this.addProdutoPrateleira(prodId, shelfId);
          localizacoesImportadas++;
        }
      });
    }

    const shelfSheetName = sheetNames.find((s) => normalizeText(s).includes('prateleira'));
    if (shelfSheetName) {
      const sheet = wb.Sheets[shelfSheetName];
      const rows: any[] = XLSX.utils.sheet_to_json(sheet);

      rows.forEach((row) => {
        const id = String(row.id || row.ID || row.rotulo || row.Rotulo || '').trim().toUpperCase();
        if (id && this.prateleiras.has(id)) {
          const shelf = this.prateleiras.get(id)!;
          if (row.x !== undefined) shelf.x = Number(row.x);
          if (row.y !== undefined) shelf.y = Number(row.y);
          if (row.largura !== undefined) shelf.largura = Number(row.largura);
          if (row.altura !== undefined) shelf.altura = Number(row.altura);
        }
      });
    }

    this.persistAll();
    return { atualizados, inseridos, localizacoesImportadas, erros };
  }

  public exportarPlanilha(): Uint8Array {
    const wb = XLSX.utils.book_new();

    const catalogoData = Array.from(this.produtos.values()).map((p) => {
      const locs = Array.from(this.localizacoes.values())
        .filter((l) => l.produto_id === p.id)
        .map((l) => l.prateleira_id)
        .join(', ');

      return {
        ID: p.id,
        Nome: p.nome,
        Principio_Ativo: p.principio_ativo || '',
        Concentracao: p.concentracao || '',
        Apresentacao: p.apresentacao || '',
        Forma_Farmaceutica: p.forma_farmaceutica || '',
        Fabricante: p.fabricante || '',
        Classificacao: p.classificacao || '',
        Para_Que_Serve: p.para_que_serve || '',
        Categoria: p.categoria || '',
        Via_Administracao: p.via_administracao || '',
        Como_Tomar: p.como_tomar || '',
        Orientacoes_Uso: p.orientacoes_uso || '',
        Cuidados_Tratamento: p.cuidados_tratamento || '',
        Restricoes_Uso: p.restricoes_uso || '',
        Acompanhamento_Medico: p.acompanhamento_medico || '',
        O_Que_Indicar: p.o_que_indicar || '',
        Exige_Receita: p.exige_receita || '',
        Tarja: p.tarja || '',
        Controlado: p.medicamento_controlado || '',
        Contraindicacoes: p.contraindicacoes || '',
        Efeitos_Colaterais: p.efeitos_colaterais || '',
        Interacoes: p.interacoes_medicamentosas || '',
        Armazenamento: p.orientacoes_armazenamento || '',
        Status_Verificacao: p.status_verificacao || '',
        Ultima_Verificacao: p.data_ultima_verificacao || '',
        Fonte: p.fonte_informacao || '',
        Atualizado_Em: p.atualizado_em || '',
        Situacao: p.situacao,
        Origem: p.origem || '',
        Localizacoes: locs,
      };
    });
    const wsCatalogo = XLSX.utils.json_to_sheet(catalogoData);
    XLSX.utils.book_append_sheet(wb, wsCatalogo, 'Catalogo');

    const locData = Array.from(this.localizacoes.values()).map((l) => ({
      ID: l.id,
      Produto_ID: l.produto_id,
      Prateleira_ID: l.prateleira_id,
      Principal: l.principal ? 'SIM' : 'NAO',
    }));
    const wsLoc = XLSX.utils.json_to_sheet(locData);
    XLSX.utils.book_append_sheet(wb, wsLoc, 'Localizacoes');

    const shelfData = Array.from(this.prateleiras.values()).map((s) => ({
      ID: s.id,
      Fileira: s.fileira,
      Numero: s.numero,
      Rotulo: s.rotulo,
      X_Pct: s.x,
      Y_Pct: s.y,
      Largura_Pct: s.largura,
      Altura_Pct: s.altura,
      Foto: this.fileiras.get(s.fileira)?.foto_url || '',
    }));
    const wsShelves = XLSX.utils.json_to_sheet(shelfData);
    XLSX.utils.book_append_sheet(wb, wsShelves, 'Prateleiras');

    const pendData = Array.from(this.produtos.values())
      .filter((p) => {
        if (p.situacao === 'indisponivel_em_loja' || p.situacao === 'balcao') return false;
        const hasLoc = Array.from(this.localizacoes.values()).some((l) => l.produto_id === p.id);
        return !hasLoc || p.situacao === 'sem_localizacao';
      })
      .map((p) => ({
        ID: p.id,
        Nome: p.nome,
        Principio_Ativo: p.principio_ativo || '',
        Categoria: p.categoria || '',
        Fabricante: p.fabricante || '',
        Aviso: 'Localização ainda não cadastrada',
      }));
    const wsPend = XLSX.utils.json_to_sheet(pendData);
    XLSX.utils.book_append_sheet(wb, wsPend, 'Pendencias');

    const out = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    return new Uint8Array(out);
  }

  public applyServerSnapshot(snapshot: {
    fileiras: Fileira[];
    prateleiras: Prateleira[];
    produtos: Produto[];
    localizacoes: Localizacao[];
  }) {
    if (!snapshot || !Array.isArray(snapshot.produtos)) return;
    this.fileiras.clear();
    this.prateleiras.clear();
    this.produtos.clear();
    this.localizacoes.clear();

    snapshot.fileiras.forEach((f) => this.fileiras.set(f.letra, f));
    snapshot.prateleiras.forEach((s) => this.prateleiras.set(s.id, s));
    snapshot.produtos.forEach((p) => this.produtos.set(p.id, p));
    snapshot.localizacoes.forEach((l) => this.localizacoes.set(l.id, l));

    this.persistAll();
  }

  public async syncFromServer(): Promise<boolean> {
    try {
      const res = await fetch('/api/catalog', {
        method: 'GET',
        cache: 'no-store',
      });
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok || !contentType.includes('application/json')) return false;
      const snapshot = await res.json();
      this.applyServerSnapshot(snapshot);
      return true;
    } catch {
      return false;
    }
  }

  private async adminRequest<T = any>(
    url: string,
    options: RequestInit = {}
  ): Promise<T | null> {
    const token = await getCurrentFirebaseIdToken();
    if (!token) {
      throw new Error('AUTH_REQUIRED');
    }

    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          ...(options.headers || {}),
        },
      });
      if (res.status === 401 || res.status === 403) {
        throw new Error('AUTH_REQUIRED');
      }
      const contentType = res.headers.get('content-type') || '';
      // On static hosts (e.g. Netlify SPA fallback returning text/html or 404), fall back cleanly to local store
      if (res.status === 404 || !contentType.includes('application/json')) {
        return null;
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Erro ao executar operação administrativa.');
      }
      if (data.snapshot) {
        this.applyServerSnapshot(data.snapshot);
      }
      return data as T;
    } catch (err) {
      if (err instanceof Error && err.message === 'AUTH_REQUIRED') {
        throw err;
      }
      // If running statically without Express API, allow local fallback
      if (err instanceof TypeError) {
        return null;
      }
      throw err;
    }
  }

  public async adminSalvarProduto(
    dados: Partial<Produto> & { id?: string; prateleiras?: string[] },
    isNew = false
  ) {
    const url =
      isNew || !dados.id
        ? '/api/admin/products'
        : `/api/admin/products/${encodeURIComponent(dados.id)}`;
    const method = isNew || !dados.id ? 'POST' : 'PUT';
    const remote = await this.adminRequest(url, {
      method,
      body: JSON.stringify(dados),
    });
    if (remote) return remote;
    const produto = this.salvarProduto(dados);
    return { produto };
  }

  public async adminExcluirProduto(id: string) {
    const remote = await this.adminRequest(`/api/admin/products/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    if (remote) return remote;
    const ok = this.excluirProduto(id);
    if (!ok) throw new Error('Medicamento não encontrado.');
    return { ok: true };
  }

  public async adminSetProdutoPrateleiras(produtoId: string, prateleiras: string[]) {
    const remote = await this.adminRequest(
      `/api/admin/products/${encodeURIComponent(produtoId)}/shelves`,
      {
        method: 'PUT',
        body: JSON.stringify({ prateleiras }),
      }
    );
    if (remote) return remote;
    const produto = this.setProdutoPrateleiras(produtoId, prateleiras);
    if (!produto) throw new Error('Medicamento não encontrado.');
    return { produto };
  }

  public async adminAddProdutoPrateleira(produtoId: string, prateleiraId: string) {
    const remote = await this.adminRequest(
      `/api/admin/products/${encodeURIComponent(produtoId)}/shelves`,
      {
        method: 'POST',
        body: JSON.stringify({ prateleiraId }),
      }
    );
    if (remote) return remote;
    const produto = this.addProdutoPrateleira(produtoId, prateleiraId);
    if (!produto) throw new Error('Medicamento não encontrado.');
    return { produto };
  }

  public async adminRemoveProdutoPrateleira(produtoId: string, prateleiraId: string) {
    const remote = await this.adminRequest(
      `/api/admin/products/${encodeURIComponent(produtoId)}/shelves/${encodeURIComponent(prateleiraId)}`,
      {
        method: 'DELETE',
      }
    );
    if (remote) return remote;
    const produto = this.removeProdutoPrateleira(produtoId, prateleiraId);
    if (!produto) throw new Error('Medicamento não encontrado.');
    return { produto };
  }

  public async adminUpdateFileiraFoto(letra: string, fotoUrl: string) {
    const remote = await this.adminRequest(`/api/admin/rows/${encodeURIComponent(letra)}/photo`, {
      method: 'PUT',
      body: JSON.stringify({ fotoUrl }),
    });
    if (remote) return remote;
    const fileira = this.updateFileiraFoto(letra, fotoUrl);
    if (!fileira) throw new Error('Fileira não encontrada.');
    return { fileira };
  }

  public async adminImportarPlanilha(buffer: ArrayBuffer): Promise<{
    atualizados: number;
    inseridos: number;
    localizacoesImportadas: number;
    erros: string[];
  }> {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    const fileBase64 = btoa(binary);
    const remote = await this.adminRequest<{
      atualizados: number;
      inseridos: number;
      localizacoesImportadas: number;
      erros: string[];
    }>('/api/admin/import', {
      method: 'POST',
      body: JSON.stringify({ fileBase64 }),
    });
    if (remote) return remote;
    return this.importarPlanilha(buffer);
  }

  public async adminExportarPlanilha(): Promise<Blob> {
    const token = await getCurrentFirebaseIdToken();
    if (!token) {
      throw new Error('AUTH_REQUIRED');
    }

    try {
      const res = await fetch('/api/admin/export', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 401 || res.status === 403) {
        throw new Error('AUTH_REQUIRED');
      }
      const contentType = res.headers.get('content-type') || '';
      if (
        res.ok &&
        contentType.includes('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
      ) {
        return res.blob();
      }
    } catch (err) {
      if (err instanceof Error && err.message === 'AUTH_REQUIRED') {
        throw err;
      }
    }

    const bytes = this.exportarPlanilha();
    const copy = new Uint8Array(bytes.byteLength);
    copy.set(bytes);
    return new Blob([copy.buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  }

  public async adminComplementarCatalogo(): Promise<{
    ok: boolean;
    resumo: {
      totalAnalisados: number;
      verificados: number;
      incompletos: number;
      necessitaRevisao: number;
      pendentes: number;
    };
  }> {
    const remote = await this.adminRequest('/api/admin/medications/complement', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    if (remote) return remote;

    const list = Array.from(this.produtos.values());
    const { produtos: updated, resumo } = complementarListaSemSobrescrever(list);
    this.produtos.clear();
    updated.forEach((p) => this.produtos.set(p.id, p));
    this.persistAll();
    return { ok: true, resumo };
  }

  public async adminResetBase() {
    const remote = await this.adminRequest('/api/admin/reset', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    if (remote) return remote;
    this.seedInitialData();
    return { ok: true };
  }
}

export const db = new DatabaseService();

