import type { Fileira, Prateleira, Produto, Localizacao } from '../types/database.ts';
import { complementarProdutoSeguro } from './medicationEnrichment.ts';

export const NEW_ROWS_2026: Fileira[] = [
  {
    letra: 'M',
    nome: 'Fileira M',
    descricao: 'Broncodilatadores, Antialérgicos, Anti-inflamatórios, Vitamina D e Cardiologia',
    foto_url: 'Foto não cadastrada',
    total_prateleiras: 9,
  },
  {
    letra: 'O',
    nome: 'Fileira O',
    descricao: 'Anti-hipertensivos e Medicamentos em Organização',
    foto_url: 'Foto não cadastrada',
    total_prateleiras: 9,
  },
  {
    letra: 'P',
    nome: 'Fileira P',
    descricao: 'Cardiovasculares e Medicamentos em Organização',
    foto_url: 'Foto não cadastrada',
    total_prateleiras: 9,
  },
  {
    letra: 'Q',
    nome: 'Fileira Q',
    descricao: 'Respiratórios e Medicamentos em Organização',
    foto_url: 'Foto não cadastrada',
    total_prateleiras: 9,
  },
];

export const SHELF_A06_DEF: Prateleira = {
  id: 'A06',
  fileira: 'A',
  numero: 6,
  rotulo: 'A06',
  x: 56.0,
  y: 42.5,
  largura: 38.0,
  altura: 7.0,
  descricao: 'Prateleira A06 (direita - similares) - Fileira A',
};

export function generateNewRowShelves(): Prateleira[] {
  const shelves: Prateleira[] = [SHELF_A06_DEF];
  for (const f of ['M', 'O', 'P', 'Q']) {
    for (let num = 1; num <= 9; num++) {
      const rotulo = `${f}${num}`;
      shelves.push({
        id: rotulo,
        fileira: f,
        numero: num,
        rotulo,
        x: 20,
        y: Math.round((10 + (num - 1) * 8.5) * 10) / 10,
        largura: 60,
        altura: 7.5,
        descricao: `Prateleira ${rotulo} - Fileira ${f}`,
      });
    }
  }
  return shelves;
}

interface CatalogUpdateEntry {
  produtoId: string;
  prateleiras?: string[];
  situacao?: 'ativo' | 'balcao' | 'sem_localizacao' | 'indisponivel_em_loja';
  mergeBothLocations?: boolean;
  conflictAlert?: {
    existentes: string[];
    novasSolicitadas: string[];
  };
  observacao_localizacao?: string;
  fields?: Partial<Produto>;
}

const UPDATES_2026: CatalogUpdateEntry[] = [
  // ======================== FILEIRA M — M4 ========================
  {
    produtoId: '28', // AERODINI SPR 200DS TEUTO (SALBUTAMOL)
    prateleiras: ['M4'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Similar',
      origem: 'Similar',
      forma_farmaceutica: 'Aerossol (Spray 200 doses)',
    },
  },
  {
    produtoId: '91', // AEROFRIN 200 DOSES AEROSOL PHARMASCIENCE
    prateleiras: ['M4'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Similar',
      origem: 'Similar',
      forma_farmaceutica: 'Aerossol (200 doses)',
    },
  },
  {
    produtoId: '2', // AEROLIN SPR 200DS
    prateleiras: ['M4'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Referência',
      origem: 'Referência',
      forma_farmaceutica: 'Aerossol (Spray 200 doses)',
    },
  },
  {
    produtoId: '34', // AEROLIN 10ML
    prateleiras: ['M4'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Referência',
      origem: 'Referência',
      apresentacao: 'Frasco 10 mL',
    },
  },

  // ======================== FILEIRA M — M5 ========================
  { produtoId: '876', prateleiras: ['M5'], situacao: 'ativo' }, // Alektos 20 mg
  { produtoId: '875', prateleiras: ['M5'], situacao: 'ativo' }, // Alektos PED 2,5 mg/mL
  {
    produtoId: '885', // Algie
    prateleiras: ['M5'],
    situacao: 'ativo',
    fields: {
      principio_ativo: 'Conferir embalagem ou bula',
      concentracao: 'Conferir embalagem ou bula',
      classificacao: 'Conferir embalagem ou bula',
      origem: 'Conferir embalagem ou bula',
      para_que_serve: 'Conferir embalagem ou bula',
      status_conferencia: 'Conferir embalagem ou bula',
    },
  },
  { produtoId: '863', prateleiras: ['M5'], situacao: 'ativo' }, // Alginac 1.000
  { produtoId: '864', prateleiras: ['M5'], situacao: 'ativo' }, // Alginac Retard
  { produtoId: '868', prateleiras: ['M5'], situacao: 'ativo' }, // Alivium 400 mg
  { produtoId: '869', prateleiras: ['M5'], situacao: 'ativo' }, // Alivium 600 mg
  { produtoId: '867', prateleiras: ['M5'], situacao: 'ativo' }, // Alivium GC 200 mg/mL
  { produtoId: '865', prateleiras: ['M5'], situacao: 'ativo' }, // Alivium Infantil 50 mg/mL
  { produtoId: '866', prateleiras: ['M5'], situacao: 'ativo' }, // Alivium Infantil 100 mg/mL
  { produtoId: '872', prateleiras: ['M5'], situacao: 'ativo' }, // Allegra 120 mg
  { produtoId: '873', prateleiras: ['M5'], situacao: 'ativo' }, // Allegra 180 mg
  { produtoId: '874', prateleiras: ['M5'], situacao: 'ativo' }, // Allegra D 60 mg + 120 mg
  { produtoId: '870', prateleiras: ['M5'], situacao: 'ativo' }, // Allegra Pediátrico 6 mg/mL, 60 mL
  { produtoId: '871', prateleiras: ['M5'], situacao: 'ativo' }, // Allegra Pediátrico 6 mg/mL, 150 mL

  // ======================== FILEIRA M — M6 ========================
  { produtoId: '884', prateleiras: ['M6'], situacao: 'ativo' }, // AltaD Cal
  { produtoId: '881', prateleiras: ['M6'], situacao: 'ativo' }, // AltaD caps 15.000 UI
  { produtoId: '882', prateleiras: ['M6'], situacao: 'ativo' }, // AltaD caps 50.000 UI
  { produtoId: '883', prateleiras: ['M6'], situacao: 'ativo' }, // AltaD gotas 500 UI
  {
    produtoId: '877', // Amome 50 mcg/acionamento
    prateleiras: ['M6'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Conferir embalagem ou bula',
    },
  },
  { produtoId: '878', prateleiras: ['M6'], situacao: 'ativo' }, // Ancoron 100 mg
  { produtoId: '879', prateleiras: ['M6'], situacao: 'ativo' }, // Ancoron 200 mg
  { produtoId: '880', prateleiras: ['M6'], situacao: 'ativo' }, // Andolba
  {
    produtoId: '31', // ARADOIS 50MG C/30CP
    prateleiras: ['M6'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Similar',
      origem: 'Similar',
    },
  },
  {
    produtoId: '166', // ARADOIS 50MG C/60CP
    prateleiras: ['M6'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Similar',
      origem: 'Similar',
    },
  },

  // ======================== FILEIRA F — F2 ========================
  {
    produtoId: '68', // CICLO 21 C/21CP (G)
    prateleiras: ['F2'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Conferir embalagem ou bula',
    },
  },
  {
    produtoId: '347', // Ciclo 21 (já em F2)
    prateleiras: ['F2'],
    situacao: 'ativo',
  },
  {
    produtoId: '30', // CONTRACEP INJ C/1AMP 1ML
    prateleiras: ['F2'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Similar',
      origem: 'Similar',
    },
  },
  {
    produtoId: '344', // Contracep (já em F2)
    prateleiras: ['F2'],
    situacao: 'ativo',
  },
  {
    produtoId: '179', // DEMEDROX 150MG/ML INJ C/1 SER PREENC 1ML
    prateleiras: ['F2'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Similar',
      origem: 'Similar',
    },
  },
  {
    produtoId: '342', // Demedrox (já em F2)
    prateleiras: ['F2'],
    situacao: 'ativo',
  },
  {
    produtoId: '17', // DEPO PROVERA INJ SER C/1ML
    prateleiras: ['F2'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Referência',
      origem: 'Referência',
    },
  },
  {
    produtoId: '44', // DEPO PROVERA INJ C/1 AMP 1ML
    prateleiras: ['F2'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Referência',
      origem: 'Referência',
    },
  },
  {
    produtoId: '341', // Depo-Provera (já em F2)
    prateleiras: ['F2'],
    situacao: 'ativo',
  },

  // ======================== OUTRAS POSIÇÕES ========================
  {
    produtoId: '12', // CORUS 50MG C/30CP
    prateleiras: ['O6'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Similar',
      origem: 'Similar',
    },
  },
  {
    produtoId: '229', // EMPROL XR 25MG C/30CP
    prateleiras: ['P6'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Similar',
      origem: 'Similar',
    },
  },
  {
    produtoId: '690', // Flixotide Spray 60 doses (250 mcg)
    prateleiras: ['Q1'],
    situacao: 'ativo',
    fields: {
      classificacao: 'Referência',
      origem: 'Referência',
    },
  },
  // Gen Dipirona 500 mg → C6, C7 e C8 (mantendo 1 cadastro por SKU com as 3 localizações)
  {
    produtoId: '147', // GEN DIPIRONA 500MG C/10CP PRATI
    prateleiras: ['C6', 'C7', 'C8'],
    situacao: 'ativo',
  },
  {
    produtoId: '151', // GEN DIPIRONA 500MG C/10CP EMS
    prateleiras: ['C6', 'C7', 'C8'],
    situacao: 'ativo',
  },
  {
    produtoId: '279', // GEN DIPIRONA 500MG C/30CP NATULAB (L)
    prateleiras: ['C6', 'C7', 'C8'],
    situacao: 'ativo',
  },
  // Carbidol 25/250 mg → A06 (código preservado exatamente como "A06")
  {
    produtoId: '16', // CARBIDOL 25/250MG C/30CP TEUTO (G)
    prateleiras: ['A06'],
    situacao: 'ativo',
    observacao_localizacao: 'Fica na prateleira da direita, na parte de similares.',
    fields: {
      classificacao: 'Conferir embalagem ou bula',
      status_conferencia: 'Conferir embalagem ou bula',
    },
  },

  // ======================== INDISPONÍVEIS EM LOJA ========================
  {
    produtoId: '62', // CLINFAR 10MG C/30CP
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '43', // CLINFAR 20MG C/30CP
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '94', // CLINFAR 40MG C/30CP
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '8', // COZAAR 50MG C/30CP
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Referência', origem: 'Referência' },
  },
  {
    produtoId: '184', // CYTRANA 50MG CX 30 COMP REV
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '76', // DIMEFOR 500MG C/30 CP
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '11', // DIMEFOR 850MG C/30CP
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '70', // FORMYN 500MG C/30CPS MULTILAB
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '69', // FORMYN 850MG C/30CP MTLB
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '32', // GEN CARBIDOPA+LEV 25/250MG C/30 BIOSSINTETI
    situacao: 'indisponivel_em_loja',
  },
  {
    produtoId: '276', // GEN CARBIDOPA+LEV 25/250MG C/30CP ZYDUS
    situacao: 'indisponivel_em_loja',
  },

  // ======================== LOTE 2 — PRATELEIRAS C6, C7, C8 ========================
  // C6: Gen Dipirona 1 g
  {
    produtoId: '132', // GEN DIPIRONA 1G C/10 NEOQUIMICA
    prateleiras: ['C6'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '242', // GEN DIPIRONA 1G C/8CP PRATI
    prateleiras: ['C6'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '252', // GEN DIPIRONA 1G C/10CP MEDLEY
    prateleiras: ['C6'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '612', // Dipirona 1 g (já estava em C8 — manter ambas e sinalizar conflito)
    prateleiras: ['C6'],
    situacao: 'ativo',
    mergeBothLocations: true,
    conflictAlert: { existentes: ['C8'], novasSolicitadas: ['C6'] },
  },
  // C6: Gen Dipirona 500 mg/mL (abacaxi), 20 mL
  {
    produtoId: '277', // GEN DIPIRONA ABACAXI 500MG/ML 20ML NEOQUIMICA (N)
    prateleiras: ['C6'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  // C6: Gen Dipirona gotas 20 mL
  {
    produtoId: '149', // GEN DIPIRONA GTS 20ML EMS *
    prateleiras: ['C6'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '278', // GEN DIPIRONA GTS 20ML NATULAB (L)
    prateleiras: ['C6'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },

  // C7: Gen Dipirona xarope 100 mL
  {
    produtoId: '1', // GEN DIPIRONA XPE C/100ML MEDLEY
    prateleiras: ['C7'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '81', // GEN DIPIRONA XPE 100ML EMS
    prateleiras: ['C7'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  // C7: Maxalgina (dipirona) 1 g, gotas 10 mL e gotas 20 mL
  {
    produtoId: '240', // MAXALGINA (DIPIRONA) 1G C/10CP NATULAB (G)
    prateleiras: ['C7'],
    situacao: 'ativo',
    fields: { classificacao: 'Conferir embalagem ou bula', status_conferencia: 'Conferir embalagem ou bula' },
  },
  {
    produtoId: '131', // MAXALGINA (DIPIRONA) GTS 10ML * (G)
    prateleiras: ['C7'],
    situacao: 'ativo',
    fields: { classificacao: 'Conferir embalagem ou bula', status_conferencia: 'Conferir embalagem ou bula' },
  },
  {
    produtoId: '221', // MAXALGINA (DIPIRONA) GTS 20ML (G)
    prateleiras: ['C7'],
    situacao: 'ativo',
    fields: { classificacao: 'Conferir embalagem ou bula', status_conferencia: 'Conferir embalagem ou bula' },
  },
  {
    produtoId: '611', // Maxalgina (já estava em C8 — manter ambas e sinalizar conflito)
    prateleiras: ['C7'],
    situacao: 'ativo',
    mergeBothLocations: true,
    conflictAlert: { existentes: ['C8'], novasSolicitadas: ['C7'] },
  },

  // C8: Gen Dipirona + Cafeína
  {
    produtoId: '135', // GEN DIPIRONA+CAF C/16CP NEO QUIMICA
    prateleiras: ['C8'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },

  // ======================== LOTE 2 — G12 & I3 ========================
  // G12: Gen Levonorgestrel + Etinilestradiol 0,15 mg
  {
    produtoId: '195', // GEN LEVONORGESTREL+ETINILESTRADIOL 0,15MG
    prateleiras: ['G12'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '238', // GEN LEVONORGESTREL+ETINILESTRADIOL 0,15MG
    prateleiras: ['G12'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '421', // Levonorgestrel + etinilestradiol (já estava em F11 — manter ambas e sinalizar conflito)
    prateleiras: ['G12'],
    situacao: 'ativo',
    mergeBothLocations: true,
    conflictAlert: { existentes: ['F11'], novasSolicitadas: ['G12'] },
  },

  // I3: Gen Losartana Potássica 50 mg
  ...['54', '61', '67', '73', '74', '77', '119', '136', '142', '183'].map((id) => ({
    produtoId: id,
    prateleiras: ['I3'],
    situacao: 'ativo' as const,
    fields: { classificacao: 'Genérico' as const, origem: 'Genérico' },
  })),
  {
    produtoId: '838', // Losartana potássica (já estava em L3 — manter ambas e sinalizar conflito)
    prateleiras: ['I3'],
    situacao: 'ativo',
    mergeBothLocations: true,
    conflictAlert: { existentes: ['L3'], novasSolicitadas: ['I3'] },
  },

  // ======================== LOTE 2 — FILEIRA K ========================
  // K1 e K2: Gen Paracetamol 500 mg (1 cadastro, 2 localizações)
  {
    produtoId: '167', // GEN PARACETAMOL 500MG C/20CP PRATI *
    prateleiras: ['K1', 'K2'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  // K2 e K3: Gen Paracetamol 750 mg (1 cadastro, 2 localizações)
  {
    produtoId: '197', // GEN PARACETAMOL 750MG C/20CP UNIAO QUIMICA
    prateleiras: ['K2', 'K3'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '250', // GEN PARACETAMOL 750MG C/10CP PRATI
    prateleiras: ['K2', 'K3'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '814', // PARACETAMOL (PRATI E PARAMOL) 500mg e 750mg (já em K2 — acrescentar K1 e K3 e sinalizar conflito)
    prateleiras: ['K1', 'K3'],
    situacao: 'ativo',
    mergeBothLocations: true,
    conflictAlert: { existentes: ['K2'], novasSolicitadas: ['K1', 'K2', 'K3'] },
  },
  // K2: Gen Paracetamol gotas 15 mL
  {
    produtoId: '152', // GEN PARACETAMOL GTS 15ML EMS
    prateleiras: ['K2'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '213', // GEN PARACETAMOL GTS 15ML GREEN PHARMA *
    prateleiras: ['K2'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '816', // PARACETAMOL (SOLUÇÃO ORAL GOTAS - EMS E NEO QUÍMICA) (já em K3 — acrescentar K2 e sinalizar conflito)
    prateleiras: ['K2'],
    situacao: 'ativo',
    mergeBothLocations: true,
    conflictAlert: { existentes: ['K3'], novasSolicitadas: ['K2'] },
  },
  // K2: Gen Paracetamol bebê 15 mL
  {
    produtoId: '84', // GEN PARACETAMOL BEBE 15ML EMS
    prateleiras: ['K2'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '815', // TILEMAXY / PARACETAMOL (INFANTIL E BEBÊ) (já em K2 — manter K2 e sinalizar conflito com Balcão)
    prateleiras: ['K2'],
    situacao: 'ativo',
    observacao_localizacao: 'Conferir: Tilemaxy foi informado no Balcão e Paracetamol Bebê na K2.',
    conflictAlert: { existentes: ['K2'], novasSolicitadas: ['Balcão (Tilemaxy) / K2 (Paracetamol Bebê)'] },
  },
  // K3: Gen Paracetamol + Codeína 500/30 mg
  ...['120', '193', '194', '217', '232', '246', '265'].map((id) => ({
    produtoId: id,
    prateleiras: ['K3'],
    situacao: 'ativo' as const,
    fields: { classificacao: 'Genérico' as const, origem: 'Genérico' },
  })),
  // K3: Paracetamol 500 mg (Belfar)
  {
    produtoId: '256', // PARACETAMOL 500MG C/20CP BELFAR
    prateleiras: ['K3'],
    situacao: 'ativo',
    fields: { classificacao: 'Conferir embalagem ou bula', status_conferencia: 'Conferir embalagem ou bula' },
  },
  // K3 e K4: Paracetamol 750 mg (Neoquímica) (1 cadastro, 2 localizações)
  {
    produtoId: '267', // PARACETAMOL 750MG C/20CP NEO QUIMICA (G)
    prateleiras: ['K3', 'K4'],
    situacao: 'ativo',
    fields: { classificacao: 'Conferir embalagem ou bula', status_conferencia: 'Conferir embalagem ou bula' },
  },
  // K4: Gen Paracetamol + Pseudoefedrina 500/30 mg
  {
    produtoId: '101', // GEN PARACETAMOL+PSEUDOEF 500/30MG C/24CP EMS
    prateleiras: ['K4'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '110', // GEN PARACETAMOL+PSEUDOEF 500/30MG C/24CP GERMED
    prateleiras: ['K4'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },

  // ======================== LOTE 2 — FILEIRA L (L5) ========================
  {
    produtoId: '150', // GEN SINVASTATINA 10MG C/30CP EMS *
    prateleiras: ['L5'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '187', // GEN SINVASTATINA 20MG C/30CP NOVARTIS *
    prateleiras: ['L5'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '257', // GEN SINVASTATINA 20MG C/30CP GLOBO
    prateleiras: ['L5'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },
  {
    produtoId: '178', // GEN SINVASTATINA 40MG C/30CP NOVARTIS *
    prateleiras: ['L5'],
    situacao: 'ativo',
    fields: { classificacao: 'Genérico', origem: 'Genérico' },
  },

  // ======================== LOTE 2 — BALCÃO (SEM CÓDIGO DE PRATELEIRA) ========================
  {
    produtoId: '161', // TILEMAXY (PARACETAMOL) BABY 15ML (G)
    situacao: 'balcao',
    observacao_localizacao: 'Balcão — fica no balcão de atendimento (sem código de prateleira).',
    fields: { classificacao: 'Conferir embalagem ou bula', status_conferencia: 'Conferir embalagem ou bula' },
  },
  {
    produtoId: '264', // TILEMAXY GTS 200MG/ML 15ML (PARACETAMOL) NATULAB (L)
    situacao: 'balcao',
    observacao_localizacao: 'Balcão — fica no balcão de atendimento (sem código de prateleira).',
    fields: { classificacao: 'Conferir embalagem ou bula', status_conferencia: 'Conferir embalagem ou bula' },
  },
  {
    produtoId: '268', // TILEMAXY (PARACETAMOL) CRIANCA NATULAB C/60ML (L) (G)
    situacao: 'balcao',
    observacao_localizacao: 'Balcão — fica no balcão de atendimento (sem código de prateleira).',
    fields: { classificacao: 'Conferir embalagem ou bula', status_conferencia: 'Conferir embalagem ou bula' },
  },

  // ======================== LOTE 2 — SEM LOCALIZAÇÃO INFORMADA ========================
  {
    produtoId: '251', // GEN TRAMADOL+PARACETAMOL C/30CP NEO QUIMICA *
    situacao: 'sem_localizacao',
    observacao_localizacao: 'Localização não informada / Necessita de confirmação',
    fields: {
      classificacao: 'Genérico',
      origem: 'Genérico',
      concentracao: 'Conferir embalagem ou bula',
    },
  },
  ...['261', '262', '263', '271', '272', '273'].map((id) => ({
    produtoId: id,
    situacao: 'sem_localizacao' as const,
    observacao_localizacao: 'Localização não informada / Necessita de confirmação',
    fields: { classificacao: 'Genérico' as const, origem: 'Genérico' },
  })),

  // ======================== LOTE 2 — INDISPONÍVEIS EM LOJA ========================
  {
    produtoId: '82', // SINVASMAX 20 mg (correspondente a Sinvamax 20 mg)
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  {
    produtoId: '83', // SINVASMAX 40 mg (correspondente a Sinvamax 40 mg)
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Similar', origem: 'Similar' },
  },
  ...['25', '26', '72', '78'].map((id) => ({
    produtoId: id, // SINVASTACOR 10 / 20 / 40 mg
    situacao: 'indisponivel_em_loja' as const,
    fields: { classificacao: 'Similar' as const, origem: 'Similar' },
  })),
  ...['88', '177'].map((id) => ({
    produtoId: id, // SINVASTAMED 20 / 40 mg
    situacao: 'indisponivel_em_loja' as const,
    fields: { classificacao: 'Similar' as const, origem: 'Similar' },
  })),
  ...['173', '202'].map((id) => ({
    produtoId: id, // SINVAX 20 / 40 mg
    situacao: 'indisponivel_em_loja' as const,
    fields: { classificacao: 'Similar' as const, origem: 'Similar' },
  })),
  {
    produtoId: '4', // TIMOPTOL 0,5%
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Referência', origem: 'Referência' },
  },
  {
    produtoId: '9', // TIMOPTOL-XE 0,5%
    situacao: 'indisponivel_em_loja',
    fields: { classificacao: 'Referência', origem: 'Referência' },
  },
  ...['64', '65', '158'].map((id) => ({
    produtoId: id, // TORLOS 50 mg
    situacao: 'indisponivel_em_loja' as const,
    fields: { classificacao: 'Similar' as const, origem: 'Similar' },
  })),
];

export interface CatalogMigrationSummary {
  changed: boolean;
  cadastrados: number;
  atualizados: number;
  fileirasAdicionadas: string[];
  prateleirasAdicionadas: string[];
  conflitos: Array<{
    produtoId: string;
    nome: string;
    existentes: string[];
    novasSolicitadas: string[];
  }>;
  conferirEmbalagem: string[];
}

export function applyCatalogUpdates2026(data: {
  fileiras: Fileira[];
  prateleiras: Prateleira[];
  produtos: Produto[];
  localizacoes: Localizacao[];
}): CatalogMigrationSummary {
  let changed = false;
  const fileirasAdicionadas: string[] = [];
  const prateleirasAdicionadas: string[] = [];
  const conflitos: CatalogMigrationSummary['conflitos'] = [];
  const updatedProductIds = new Set<string>();

  // 1. Add missing rows M, O, P, Q preserving "Foto não cadastrada"
  const rowMap = new Map(data.fileiras.map((f) => [f.letra, f]));
  for (const row of NEW_ROWS_2026) {
    if (!rowMap.has(row.letra)) {
      data.fileiras.push({ ...row });
      rowMap.set(row.letra, row);
      fileirasAdicionadas.push(row.letra);
      changed = true;
    }
  }

  // 2. Add missing shelves (A06, M1..M9, O1..O9, P1..P9, Q1..Q9)
  const shelfMap = new Map(data.prateleiras.map((s) => [s.id, s]));
  for (const shelf of generateNewRowShelves()) {
    if (!shelfMap.has(shelf.id)) {
      data.prateleiras.push({ ...shelf });
      shelfMap.set(shelf.id, shelf);
      prateleirasAdicionadas.push(shelf.id);
      changed = true;
    }
  }

  // 3. Index products and locations
  const prodMap = new Map(data.produtos.map((p) => [p.id, p]));
  let locSeq = 1;

  for (const entry of UPDATES_2026) {
    const prod = prodMap.get(entry.produtoId);
    if (!prod) continue;

    const currentLocs = data.localizacoes
      .filter((l) => l.produto_id === prod.id)
      .map((l) => l.prateleira_id);

    let prodModified = false;

    if (entry.fields) {
      const prodRecord = prod as unknown as Record<string, unknown>;
      for (const [k, v] of Object.entries(entry.fields)) {
        if (v !== undefined && prodRecord[k] !== v) {
          prodRecord[k] = v;
          prodModified = true;
        }
      }
    }

    if (
      entry.observacao_localizacao &&
      prod.observacao_localizacao !== entry.observacao_localizacao
    ) {
      prod.observacao_localizacao = entry.observacao_localizacao;
      prodModified = true;
    }

    if (entry.situacao === 'indisponivel_em_loja') {
      if (currentLocs.length > 0) {
        conflitos.push({
          produtoId: prod.id,
          nome: prod.nome,
          existentes: currentLocs,
          novasSolicitadas: ['Indisponível em loja (sem prateleira)'],
        });
      } else if (prod.situacao !== 'indisponivel_em_loja') {
        prod.situacao = 'indisponivel_em_loja';
        prodModified = true;
      }
    } else if (entry.situacao === 'balcao') {
      if (currentLocs.length > 0) {
        conflitos.push({
          produtoId: prod.id,
          nome: prod.nome,
          existentes: currentLocs,
          novasSolicitadas: ['Balcão (sem prateleira)'],
        });
      } else if (prod.situacao !== 'balcao') {
        prod.situacao = 'balcao';
        prodModified = true;
      }
    } else if (entry.situacao === 'sem_localizacao') {
      if (currentLocs.length > 0) {
        conflitos.push({
          produtoId: prod.id,
          nome: prod.nome,
          existentes: currentLocs,
          novasSolicitadas: ['Localização não informada / Necessita de confirmação'],
        });
      } else if (prod.situacao !== 'sem_localizacao') {
        prod.situacao = 'sem_localizacao';
        prodModified = true;
      }
    } else if (entry.prateleiras && entry.prateleiras.length > 0) {
      const targetShelves = entry.prateleiras;
      const hasExistingDifferent = currentLocs.some((loc) => !targetShelves.includes(loc));

      if (entry.conflictAlert) {
        conflitos.push({
          produtoId: prod.id,
          nome: prod.nome,
          existentes: entry.conflictAlert.existentes,
          novasSolicitadas: entry.conflictAlert.novasSolicitadas,
        });
      }

      if (hasExistingDifferent && !entry.mergeBothLocations) {
        // Conflict without merge flag: do NOT overwrite existing shelf!
        if (!entry.conflictAlert) {
          conflitos.push({
            produtoId: prod.id,
            nome: prod.nome,
            existentes: currentLocs,
            novasSolicitadas: targetShelves,
          });
        }
      } else {
        // Keep existing shelves and add any missing target shelves
        let addedAnyShelf = false;
        targetShelves.forEach((shelfId, idx) => {
          if (!currentLocs.includes(shelfId)) {
            data.localizacoes.push({
              id: `LOC-2026-${prod.id}-${shelfId}-${locSeq++}`,
              produto_id: prod.id,
              prateleira_id: shelfId,
              principal: currentLocs.length === 0 && idx === 0,
            });
            addedAnyShelf = true;
          }
        });
        if (addedAnyShelf || prod.situacao !== 'ativo') {
          prod.situacao = 'ativo';
          prodModified = true;
        }
      }
    }

    if (prodModified) {
      prod.atualizado_em = new Date().toISOString();
      const enriched = complementarProdutoSeguro(prod);
      if (entry.fields) {
        const enrichedRecord = enriched as unknown as Record<string, unknown>;
        for (const [k, v] of Object.entries(entry.fields)) {
          if (v === 'Conferir embalagem ou bula') {
            enrichedRecord[k] = v;
          }
        }
      }
      prodMap.set(prod.id, enriched);
      const idx = data.produtos.findIndex((p) => p.id === prod.id);
      if (idx >= 0) data.produtos[idx] = enriched;
      updatedProductIds.add(prod.id);
      changed = true;
    }
  }

  // Flag ID 608 (Dipirona 500 mg already at C6) if Gen Dipirona 500 mg asks for C6, C7, C8
  const prod608 = prodMap.get('608');
  if (prod608) {
    const locs608 = data.localizacoes
      .filter((l) => l.produto_id === '608')
      .map((l) => l.prateleira_id);
    if (locs608.includes('C6') && (!locs608.includes('C7') || !locs608.includes('C8'))) {
      conflitos.push({
        produtoId: '608',
        nome: `${prod608.nome} (cadastro genérico sem fabricante)`,
        existentes: locs608,
        novasSolicitadas: ['C6', 'C7', 'C8'],
      });
    }
  }

  const conferirEmbalagem = data.produtos
    .filter((p) => {
      const vals = [p.principio_ativo, p.concentracao, p.classificacao, p.para_que_serve];
      return vals.some((v) => (v || '').toLowerCase().includes('conferir embalagem ou bula'));
    })
    .map((p) => `${p.nome} (#${p.id})`);

  return {
    changed,
    cadastrados: 0,
    atualizados: updatedProductIds.size,
    fileirasAdicionadas,
    prateleirasAdicionadas,
    conflitos,
    conferirEmbalagem,
  };
}
