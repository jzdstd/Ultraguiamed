import type { Fileira, Prateleira, Produto, Localizacao } from '../types/database.ts';
import { CATALOGO_ULTRAMED_COMPLETO } from './catalogoData.ts';
import { INITIAL_MEDICATIONS_DATA } from './initialMedications.ts';
import { complementarListaSemSobrescrever } from './medicationEnrichment.ts';
import { applyCatalogUpdates2026 } from './catalogMigration2026.ts';

export const SEED_FILEIRAS: Fileira[] = [
  {
    letra: 'A',
    nome: 'Fileira A',
    descricao: 'Analgésicos, Antitérmicos, Antigripais e Xaropes',
    foto_url: '/assets/aistudio/Captura_de_tela_2026-10-31_122041_45ecadbd.png',
    total_prateleiras: 12,
  },
  {
    letra: 'B',
    nome: 'Fileira B',
    descricao: 'Anti-inflamatórios, Relaxantes Musculares e Colírios',
    foto_url: '/assets/aistudio/Captura_de_tela_2026-10-31_122041_45ecadbd.png',
    total_prateleiras: 12,
  },
  {
    letra: 'C',
    nome: 'Fileira C',
    descricao: 'Antibióticos, Antimicrobianos e Antifúngicos',
    foto_url: '/assets/aistudio/fileira_C_ee4baa95.jpg',
    total_prateleiras: 12,
  },
  {
    letra: 'D',
    nome: 'Fileira D',
    descricao: 'Anti-hipertensivos, Cardiovasculares e Colesterol',
    foto_url: '/assets/aistudio/fileira_D_e382bcd0.jpg',
    total_prateleiras: 12,
  },
  {
    letra: 'E',
    nome: 'Fileira E',
    descricao: 'Aparelhos, Glicosímetros, Primeiros Socorros e Digestivos',
    foto_url: '/assets/aistudio/fileira_E_ae196d27.jpg',
    total_prateleiras: 12,
  },
  {
    letra: 'F',
    nome: 'Fileira F',
    descricao: 'Anticoncepcionais, Hormônios e Saúde da Mulher',
    foto_url: '/assets/aistudio/fileira_F_3f6f387a.jpg',
    total_prateleiras: 12,
  },
  {
    letra: 'G',
    nome: 'Fileira G',
    descricao: 'Vitaminas, Polivitamínicos e Suplementos Alimentares',
    foto_url: '/assets/aistudio/fileira_G_64e5c1a3.jpg',
    total_prateleiras: 12,
  },
  {
    letra: 'H',
    nome: 'Fileira H',
    descricao: 'Suplementos Especiais, Ômega 3, Minerais e Fitoterápicos',
    foto_url: '/assets/aistudio/fileira_H_2f0bcda1.jpg',
    total_prateleiras: 12,
  },
  {
    letra: 'I',
    nome: 'Fileira I',
    descricao: 'Tireoide (Levotiroxina), Anestésicos Tópicos, Aminoácidos e Anti-hipertensivos',
    foto_url: '/assets/aistudio/prateleira_I_d81f61e3.png',
    total_prateleiras: 9,
  },
  {
    letra: 'J',
    nome: 'Fileira J',
    descricao: 'Nimesulida, Nistatina, Olmesartana, Omeprazol, Ondansetrona e Expectorantes',
    foto_url: '/assets/aistudio/prateleira_J_535419a5.png',
    total_prateleiras: 9,
  },
  {
    letra: 'K',
    nome: 'Fileira K',
    descricao: 'Pantoprazol, Paracetamol, Prednisolona, Propranolol, Rivaroxabana e Rosuvastatina',
    foto_url: '/assets/aistudio/prateleira_k_ccca00df.png',
    total_prateleiras: 9,
  },
  {
    letra: 'L',
    nome: 'Fileira L',
    descricao: 'Medicamentos Genéricos e Similares',
    foto_url: '/assets/aistudio/prateleira_L_e0457078.png',
    total_prateleiras: 9,
  },
];

// Helper to generate default shelf coordinates based on row image analysis
export function generateDefaultShelves(): Prateleira[] {
  const shelves: Prateleira[] = [];
  const fileiras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  fileiras.forEach((f) => {
    const totalPrat = ['I', 'J', 'K', 'L'].includes(f) ? 9 : 12;
    for (let num = 1; num <= totalPrat; num++) {
      const rotulo = `${f}${num}`;
      let x = 20;
      let largura = 60;
      let y = 3 + (num - 1) * 8.0;
      let altura = 7.2;

      // Specific adjustments based on actual uploaded photos
      if (f === 'A') {
        x = 21;
        largura = 48;
        y = 2.5 + (num - 1) * 8.0;
        altura = 7.0;
      } else if (f === 'B') {
        x = 69.5;
        largura = 30;
        y = 2.5 + (num - 1) * 8.0;
        altura = 7.0;
      } else if (f === 'C') {
        x = 25.5;
        largura = 57;
        y = 3.0 + (num - 1) * 8.0;
        altura = 7.2;
      } else if (f === 'D') {
        x = 27.5;
        largura = 52;
        y = 7.5 + (num - 1) * 7.6;
        altura = 6.9;
      } else if (f === 'E') {
        x = 19.5;
        largura = 57.5;
        y = 6.5 + (num - 1) * 9.0;
        altura = 8.2;
      } else if (f === 'F') {
        x = 14.5;
        largura = 59;
        y = 10.0 + (num - 1) * 7.4;
        altura = 6.8;
      } else if (f === 'G') {
        x = 21.5;
        largura = 52;
        y = 5.0 + (num - 1) * 8.3;
        altura = 7.5;
      } else if (f === 'H') {
        x = 19.0;
        largura = 59.5;
        y = 3.0 + (num - 1) * 8.0;
        altura = 7.3;
      } else if (f === 'I' || f === 'J' || f === 'K' || f === 'L') {
        x = 22.0;
        largura = 56.0;
        y = 14.0 + (num - 1) * 7.5;
        altura = 7.0;
      }

      shelves.push({
        id: rotulo,
        fileira: f,
        numero: num,
        rotulo,
        x: Math.round(x * 10) / 10,
        y: Math.round(y * 10) / 10,
        largura: Math.round(largura * 10) / 10,
        altura: Math.round(altura * 10) / 10,
        descricao: `Prateleira ${rotulo} - Fileira ${f}`,
      });
    }
  });

  return shelves;
}

export const SEED_PRATELEIRAS: Prateleira[] = generateDefaultShelves();

// Combine all products from the official Ultramed catalog + initial clinical medications
export function getInitialSeedData(): {
  fileiras: Fileira[];
  prateleiras: Prateleira[];
  produtos: Produto[];
  localizacoes: Localizacao[];
} {
  const fileiras = [...SEED_FILEIRAS];
  const prateleiras = [...SEED_PRATELEIRAS];
  const produtos: Produto[] = [];
  const localizacoes: Localizacao[] = [];

  let locCounter = 1;

  [...CATALOGO_ULTRAMED_COMPLETO, ...INITIAL_MEDICATIONS_DATA].forEach((item) => {
    const { prateleiras: shelves, ...prodData } = item;
    produtos.push({
      ...prodData,
      atualizado_em: prodData.atualizado_em || new Date().toISOString(),
    });

    shelves.forEach((shelfId, index) => {
      localizacoes.push({
        id: `LOC-${item.id}-${shelfId}-${locCounter++}`,
        produto_id: item.id,
        prateleira_id: shelfId,
        principal: index === 0,
      });
    });
  });

  const { produtos: enrichedProdutos } = complementarListaSemSobrescrever(produtos);

  applyCatalogUpdates2026({
    fileiras,
    prateleiras,
    produtos: enrichedProdutos,
    localizacoes,
  });

  return { fileiras, prateleiras, produtos: enrichedProdutos, localizacoes };
}
