import fs from 'node:fs';
import path from 'node:path';
import * as XLSX from 'xlsx';
import type {
  Fileira,
  Prateleira,
  Produto,
  Localizacao,
  EstatisticasLoja,
  StatusVerificacao,
} from '../src/types/database.ts';
import { getInitialSeedData } from '../src/data/seedData.ts';
import {
  complementarProdutoSeguro,
  complementarListaSemSobrescrever,
  computeVerificationStatus,
} from '../src/data/medicationEnrichment.ts';
import { applyCatalogUpdates2026 } from '../src/data/catalogMigration2026.ts';

const DATA_DIR = path.join(process.cwd(), '.data');
const STORE_FILE = path.join(DATA_DIR, 'ultramed-store.json');

export interface PersistedStoreData {
  fileiras: Fileira[];
  prateleiras: Prateleira[];
  produtos: Produto[];
  localizacoes: Localizacao[];
  updatedAt: string;
}

function normalizeText(text?: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true, mode: 0o700 });
  }
}

function writeStoreFile(data: PersistedStoreData) {
  ensureDataDir();
  const tmpPath = `${STORE_FILE}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data), { encoding: 'utf-8', mode: 0o600 });
  fs.renameSync(tmpPath, STORE_FILE);
}

class ServerStore {
  private fileiras: Map<string, Fileira> = new Map();
  private prateleiras: Map<string, Prateleira> = new Map();
  private produtos: Map<string, Produto> = new Map();
  private localizacoes: Map<string, Localizacao> = new Map();
  private initialized = false;

  public init() {
    if (this.initialized) return;
    ensureDataDir();

    if (fs.existsSync(STORE_FILE)) {
      try {
        const raw = fs.readFileSync(STORE_FILE, 'utf-8');
        const parsed = JSON.parse(raw) as PersistedStoreData;
        if (parsed.produtos && parsed.produtos.length >= 880) {
          const loadedFileiras = [...(parsed.fileiras || [])];
          const loadedPrateleiras = [...(parsed.prateleiras || [])];
          const loadedLocalizacoes = [...(parsed.localizacoes || [])];
          let migrated = false;
          const loadedProdutos = parsed.produtos.map((p) => {
            if (!p.status_verificacao || !p.tarja || !p.medicamento_controlado) {
              migrated = true;
              return complementarProdutoSeguro(p);
            }
            return p;
          });

          const migrationRes = applyCatalogUpdates2026({
            fileiras: loadedFileiras,
            prateleiras: loadedPrateleiras,
            produtos: loadedProdutos,
            localizacoes: loadedLocalizacoes,
          });

          loadedFileiras.forEach((f) => this.fileiras.set(f.letra, f));
          loadedPrateleiras.forEach((p) => this.prateleiras.set(p.id, p));
          loadedProdutos.forEach((p) => this.produtos.set(p.id, p));
          loadedLocalizacoes.forEach((l) => this.localizacoes.set(l.id, l));

          if (migrated || migrationRes.changed) {
            this.persist();
          }
          this.initialized = true;
          return;
        }
      } catch (err) {
        console.warn('Falha ao ler store do servidor, recriando base inicial:', err);
      }
    }

    this.resetToSeed();
    this.initialized = true;
  }

  private persist() {
    const payload: PersistedStoreData = {
      fileiras: Array.from(this.fileiras.values()),
      prateleiras: Array.from(this.prateleiras.values()),
      produtos: Array.from(this.produtos.values()),
      localizacoes: Array.from(this.localizacoes.values()),
      updatedAt: new Date().toISOString(),
    };
    writeStoreFile(payload);
  }

  public resetToSeed() {
    this.fileiras.clear();
    this.prateleiras.clear();
    this.produtos.clear();
    this.localizacoes.clear();

    const seed = getInitialSeedData();
    seed.fileiras.forEach((f) => this.fileiras.set(f.letra, f));
    seed.prateleiras.forEach((p) => this.prateleiras.set(p.id, p));
    seed.produtos.forEach((p) => this.produtos.set(p.id, p));
    seed.localizacoes.forEach((l) => this.localizacoes.set(l.id, l));

    this.persist();
  }

  public getSnapshot() {
    this.init();
    return {
      fileiras: Array.from(this.fileiras.values()),
      prateleiras: Array.from(this.prateleiras.values()),
      produtos: Array.from(this.produtos.values()),
      localizacoes: Array.from(this.localizacoes.values()),
    };
  }

  public getStats(): EstatisticasLoja {
    this.init();
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

  public setProdutoPrateleiras(produtoId: string, prateleirasList: string[]): Produto | null {
    this.init();
    const prod = this.produtos.get(produtoId);
    if (!prod) return null;

    for (const [locId, loc] of Array.from(this.localizacoes.entries())) {
      if (loc.produto_id === produtoId) {
        this.localizacoes.delete(locId);
      }
    }

    const uniqueShelves = Array.from(
      new Set(prateleirasList.map((s) => s.toUpperCase().trim()).filter(Boolean))
    );

    uniqueShelves.forEach((cleanShelf, idx) => {
      const locId = `LOC-${Date.now()}-${Math.floor(Math.random() * 10000)}-${idx}`;
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
    this.persist();
    return prod;
  }

  public addProdutoPrateleira(produtoId: string, prateleiraId: string): Produto | null {
    this.init();
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
      const locId = `LOC-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
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
    this.persist();
    return prod;
  }

  public removeProdutoPrateleira(produtoId: string, prateleiraId: string): Produto | null {
    this.init();
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
    this.persist();
    return prod;
  }

  public complementarCatalogoSeguro() {
    this.init();
    const list = Array.from(this.produtos.values());
    const { produtos: updated, resumo } = complementarListaSemSobrescrever(list);
    this.produtos.clear();
    updated.forEach((p) => this.produtos.set(p.id, p));
    this.persist();
    return resumo;
  }

  public saveProduto(dados: Partial<Produto> & { id?: string; prateleiras?: string[] }): Produto {
    this.init();
    const id = (dados.id || `MED-${Date.now().toString().slice(-5)}`).trim();
    const existing = this.produtos.get(id);

    const classificacaoFinal = dados.classificacao ?? existing?.classificacao ?? 'Não verificado';
    const origemSync =
      dados.origem ||
      (classificacaoFinal === 'Referência' ||
      classificacaoFinal === 'Genérico' ||
      classificacaoFinal === 'Similar'
        ? classificacaoFinal
        : existing?.origem || 'Similar');

    const baseProduto: Produto = {
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
      tarja: dados.tarja ?? existing?.tarja ?? 'Não verificado',
      medicamento_controlado:
        dados.medicamento_controlado ?? existing?.medicamento_controlado ?? 'Não verificado',
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
      atualizado_em: new Date().toISOString(),
    };

    const allowedStatuses: StatusVerificacao[] = [
      'Pendente de verificação',
      'Informações verificadas',
      'Informações incompletas',
      'Necessita de revisão',
    ];
    const requestedStatus = dados.status_verificacao as StatusVerificacao | undefined;
    if (requestedStatus && allowedStatuses.includes(requestedStatus)) {
      baseProduto.status_verificacao = requestedStatus;
    } else {
      baseProduto.status_verificacao = computeVerificationStatus(baseProduto, false);
    }

    if (baseProduto.status_verificacao === 'Informações verificadas') {
      baseProduto.data_ultima_verificacao =
        dados.data_ultima_verificacao || new Date().toISOString().slice(0, 10);
      baseProduto.status_conferencia = undefined;
    } else if (dados.data_ultima_verificacao !== undefined) {
      baseProduto.data_ultima_verificacao = dados.data_ultima_verificacao;
    }

    this.produtos.set(id, baseProduto);

    if (dados.prateleiras !== undefined) {
      this.setProdutoPrateleiras(id, dados.prateleiras);
    } else {
      this.persist();
    }

    return this.produtos.get(id) || baseProduto;
  }

  public deleteProduto(id: string): boolean {
    this.init();
    if (!this.produtos.has(id)) return false;
    this.produtos.delete(id);

    for (const [locId, loc] of Array.from(this.localizacoes.entries())) {
      if (loc.produto_id === id) {
        this.localizacoes.delete(locId);
      }
    }

    this.persist();
    return true;
  }

  public updateFileiraFoto(letra: string, fotoUrl: string): Fileira | null {
    this.init();
    const f = this.fileiras.get(letra.toUpperCase());
    if (!f) return null;

    f.foto_url = fotoUrl;
    this.fileiras.set(f.letra, f);
    this.persist();
    return f;
  }

  public updatePrateleiraCoordinates(
    id: string,
    coords: { x: number; y: number; largura: number; altura: number }
  ): Prateleira | null {
    this.init();
    const shelf = this.prateleiras.get(id);
    if (!shelf) return null;

    shelf.x = Math.max(0, Math.min(100, Math.round(coords.x * 10) / 10));
    shelf.y = Math.max(0, Math.min(100, Math.round(coords.y * 10) / 10));
    shelf.largura = Math.max(2, Math.min(100, Math.round(coords.largura * 10) / 10));
    shelf.altura = Math.max(2, Math.min(100, Math.round(coords.altura * 10) / 10));

    this.prateleiras.set(id, shelf);
    this.persist();
    return shelf;
  }

  public importWorkbookBase64(base64Data: string): {
    atualizados: number;
    inseridos: number;
    localizacoesImportadas: number;
    erros: string[];
  } {
    this.init();
    const buffer = Buffer.from(base64Data, 'base64');
    const wb = XLSX.read(buffer, { type: 'buffer' });

    let inseridos = 0;
    let atualizados = 0;
    let localizacoesImportadas = 0;
    const erros: string[] = [];

    const sheetNames = wb.SheetNames;
    const catalogoName =
      sheetNames.find((s) => normalizeText(s).includes('catalogo')) || sheetNames[0];

    if (catalogoName) {
      const sheet = wb.Sheets[catalogoName];
      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);

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
          principio_ativo: String(
            row.Principio_Ativo || row.principio_ativo || row['Princípio Ativo'] || existing?.principio_ativo || ''
          ).trim(),
          concentracao: String(
            row.Concentracao || row.concentracao || row['Concentração'] || existing?.concentracao || ''
          ).trim(),
          apresentacao: String(
            row.Apresentacao || row.apresentacao || row['Apresentação'] || existing?.apresentacao || ''
          ).trim(),
          forma_farmaceutica: String(
            row.Forma_Farmaceutica || row.forma_farmaceutica || row['Forma Farmacêutica'] || existing?.forma_farmaceutica || ''
          ).trim(),
          fabricante: String(row.Fabricante || row.fabricante || existing?.fabricante || '').trim(),
          classificacao: String(
            row.Classificacao || row.classificacao || existing?.classificacao || ''
          ).trim(),
          para_que_serve: String(
            row.Para_Que_Serve || row.para_que_serve || row['Para que serve'] || row.Finalidade || existing?.para_que_serve || ''
          ).trim(),
          categoria: String(row.Categoria || row.categoria || existing?.categoria || 'Outros').trim(),
          como_tomar: String(
            row.Como_Tomar || row.como_tomar || row['Como tomar'] || existing?.como_tomar || ''
          ).trim(),
          via_administracao: String(
            row.Via_Administracao || row.via_administracao || existing?.via_administracao || ''
          ).trim(),
          orientacoes_uso: String(
            row.Orientacoes_Uso || row.orientacoes_uso || existing?.orientacoes_uso || ''
          ).trim(),
          cuidados_tratamento: String(
            row.Cuidados_Tratamento || row.cuidados_tratamento || existing?.cuidados_tratamento || ''
          ).trim(),
          restricoes_uso: String(
            row.Restricoes_Uso || row.restricoes_uso || existing?.restricoes_uso || ''
          ).trim(),
          acompanhamento_medico: String(
            row.Acompanhamento_Medico || row.acompanhamento_medico || existing?.acompanhamento_medico || ''
          ).trim(),
          o_que_indicar: String(
            row.O_Que_Indicar || row.o_que_indicar || row['O que indicar'] || existing?.o_que_indicar || ''
          ).trim(),
          exige_receita: String(row.Exige_Receita || row.exige_receita || existing?.exige_receita || '').trim(),
          tarja: String(row.Tarja || row.tarja || existing?.tarja || '').trim(),
          medicamento_controlado: String(
            row.Controlado || row.medicamento_controlado || existing?.medicamento_controlado || ''
          ).trim(),
          contraindicacoes: String(
            row.Contraindicacoes || row.contraindicacoes || existing?.contraindicacoes || ''
          ).trim(),
          efeitos_colaterais: String(
            row.Efeitos_Colaterais || row.efeitos_colaterais || existing?.efeitos_colaterais || ''
          ).trim(),
          interacoes_medicamentosas: String(
            row.Interacoes || row.interacoes || existing?.interacoes_medicamentosas || ''
          ).trim(),
          orientacoes_armazenamento: String(
            row.Armazenamento || row.orientacoes_armazenamento || existing?.orientacoes_armazenamento || ''
          ).trim(),
          fonte_informacao: String(row.Fonte || row.fonte_informacao || existing?.fonte_informacao || '').trim(),
          status_verificacao: String(
            row.Status_Verificacao || row.status_verificacao || existing?.status_verificacao || ''
          ).trim() || undefined,
          data_ultima_verificacao: String(
            row.Ultima_Verificacao || row.data_ultima_verificacao || existing?.data_ultima_verificacao || ''
          ).trim() || undefined,
          situacao: String(row.Situacao || row.situacao || existing?.situacao || 'sem_localizacao'),
          origem: String(row.Origem || row.origem || existing?.origem || 'Similar').trim(),
          atualizado_em: new Date().toISOString(),
        };

        const produto = complementarProdutoSeguro(produtoRaw);
        this.produtos.set(id, produto);
        if (isNew) inseridos++;
        else atualizados++;

        const inlineLoc =
          row.Localizacoes || row.Localizacao || row.localizacao || row.Prateleira || row.prateleira;
        if (inlineLoc) {
          const locList = String(inlineLoc)
            .split(/[,;]+/)
            .map((s) => s.trim().toUpperCase())
            .filter(Boolean);
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
      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);
      rows.forEach((row) => {
        const prodId = String(row.produto_id || row.Produto_ID || row.ProdutoId || row.ID || '').trim();
        const shelfId = String(
          row.prateleira_id || row.Prateleira_ID || row.Prateleira || row.prateleira || ''
        )
          .trim()
          .toUpperCase();

        if (prodId && shelfId && this.produtos.has(prodId)) {
          this.addProdutoPrateleira(prodId, shelfId);
          localizacoesImportadas++;
        }
      });
    }

    const shelfSheetName = sheetNames.find((s) => normalizeText(s).includes('prateleira'));
    if (shelfSheetName) {
      const sheet = wb.Sheets[shelfSheetName];
      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);
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

    this.persist();
    return { atualizados, inseridos, localizacoesImportadas, erros };
  }

  public exportWorkbookBuffer(): Buffer {
    this.init();
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

    const out = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
    return Buffer.isBuffer(out) ? out : Buffer.from(out);
  }
}

export const serverStore = new ServerStore();
