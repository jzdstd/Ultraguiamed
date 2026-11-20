export interface Fileira {
  letra: string; // 'A'..'L'
  nome: string; // 'Fileira A', etc.
  descricao: string;
  foto_url: string;
  total_prateleiras: number;
}

export interface Prateleira {
  id: string; // e.g. "A1", "E7"
  fileira: string; // "A".."L"
  numero: number; // 1..12
  rotulo: string; // "A1", "E7"
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  largura: number; // percentage 0-100
  altura: number; // percentage 0-100
  descricao?: string;
}

export interface Localizacao {
  id: string;
  produto_id: string;
  prateleira_id: string; // e.g. "E7"
  principal: boolean;
}

export type SituacaoProduto = 'ativo' | 'sem_localizacao' | 'balcao' | 'indisponivel_em_loja' | 'inativo';

export const CATEGORIAS_PADRAO = [
  'Analgésicos',
  'Anti-inflamatórios',
  'Antitérmicos',
  'Antialérgicos',
  'Antibióticos',
  'Medicamentos para gripe e resfriado',
  'Medicamentos para tosse',
  'Medicamentos para problemas respiratórios',
  'Medicamentos para estômago e digestão',
  'Medicamentos para intestino',
  'Medicamentos para pressão arterial',
  'Medicamentos para coração',
  'Vitaminas e suplementos',
  'Medicamentos dermatológicos',
  'Medicamentos de uso nasal',
  'Medicamentos de uso oftalmológico',
  'Medicamentos pediátricos',
  'Medicamentos de uso controlado',
] as const;

export type CategoriaPadrao = (typeof CATEGORIAS_PADRAO)[number];

export type CategoriaProduto =
  | CategoriaPadrao
  | 'Analgésicos e Antitérmicos'
  | 'Antibióticos e Antimicrobianos'
  | 'Anti-hipertensivos e Cardiovasculares'
  | 'Gastrointestinais e Digestivos'
  | 'Antialérgicos e Respiratórios'
  | 'Diabetes e Metabólicos'
  | 'Sistema Nervoso e Psiquiátricos'
  | 'Dermatológicos e Pomadas'
  | 'Primeiros Socorros e Higiene'
  | 'Saúde Infantil e Pediátricos'
  | 'Outros';

export interface ParaQueServeDetalhes {
  finalidade: string;
  condicoes: string[];
  sintomas: string[];
  como_funciona: string;
  situacoes_uso: string[];
}

export interface ComoUtilizarDetalhes {
  via: string;
  posologia_bula: string;
  alimentos_jejum: string;
  horarios: string;
  cuidados_uso: string;
  adulto_vs_pediatrico: string;
}

export interface OrientacaoAtendimentoDetalhes {
  queixas_consideradas: string[];
  perguntas_balcao: string[];
  caracteristicas_avaliar: string[];
  quando_nao_apropriado: string[];
  quando_encaminhar_farmaceutico: string[];
}

export interface ContraindicacoesDetalhes {
  quem_nao_deve_usar: string[];
  gestantes_lactantes: string;
  criancas_idosos: string;
  doencas_atencao: string[];
  alergias_relevantes: string;
}

export interface EfeitosColateraisDetalhes {
  comuns: string[];
  menos_frequentes: string[];
  sinais_graves: string[];
  quando_interromper: string;
}

export interface InteracoesDetalhes {
  medicamentos_interagem: string[];
  combinacoes_atencao: string[];
  associacoes_evitar: string[];
  quando_consultar_farmaceutico: string;
}

export interface CuidadosAdicionaisDetalhes {
  durante_tratamento: string;
  risco_automedicacao: string;
  risco_uso_prolongado: string;
  sonolencia: string;
  alcool: string;
  armazenamento: string;
}

export type ClassificacaoComercial =
  | 'Referência'
  | 'Genérico'
  | 'Similar'
  | 'Isento / Suplemento / Outro'
  | 'Não verificado';

export type TarjaMedicamento =
  | 'Sem tarja'
  | 'Tarja vermelha'
  | 'Tarja preta'
  | 'Não verificado';

export type StatusVerificacao =
  | 'Pendente de verificação'
  | 'Informações verificadas'
  | 'Informações incompletas'
  | 'Necessita de revisão';

export interface InformacoesAtendimento {
  finalidade_atendimento: string;
  informacoes_basicas_atendente: string;
  cuidados_informar: string;
  quando_encaminhar_farmaceutico: string;
  quando_procurar_medico: string;
}

export interface Produto {
  id: string;
  nome: string;
  principio_ativo?: string;
  concentracao?: string;
  apresentacao?: string;
  forma_farmaceutica?: string;
  fabricante?: string;
  classificacao?: ClassificacaoComercial | string;
  para_que_serve?: string;
  categoria: CategoriaProduto | string;
  categoria_clinica?: string[];
  como_tomar?: string;
  via_administracao?: string;
  orientacoes_uso?: string;
  cuidados_tratamento?: string;
  restricoes_uso?: string;
  acompanhamento_medico?: string;
  o_que_indicar?: string;
  informacoes_atendimento?: InformacoesAtendimento;
  exige_receita?: string;
  tipo_controle?: string;
  tarja?: TarjaMedicamento | string;
  medicamento_controlado?: 'Sim' | 'Não' | 'Não verificado' | string;
  contraindicacoes?: string;
  efeitos_colaterais?: string;
  interacoes_medicamentosas?: string;
  orientacoes_armazenamento?: string;
  fonte_informacao?: string;
  status_verificacao?: StatusVerificacao | string;
  data_ultima_verificacao?: string;
  para_que_serve_detalhes?: ParaQueServeDetalhes;
  como_utilizar_detalhes?: ComoUtilizarDetalhes;
  orientacao_atendimento?: OrientacaoAtendimentoDetalhes;
  contraindicacoes_detalhes?: ContraindicacoesDetalhes;
  efeitos_colaterais_detalhes?: EfeitosColateraisDetalhes;
  interacoes_detalhes?: InteracoesDetalhes;
  cuidados_adicionais?: CuidadosAdicionaisDetalhes;
  situacao: SituacaoProduto | string;
  observacao_localizacao?: string;
  origem?: string; // 'Referência', 'Genérico', 'Similar', 'Outro'
  status_conferencia?: string;
  favorito?: boolean;
  atualizado_em?: string;
}

export interface ProdutoComLocalizacoes extends Produto {
  localizacoes: string[]; // List of shelf codes: ["E4", "G8", "G9"]
  prateleirasInfo?: Prateleira[];
}

export interface EstatisticasLoja {
  totalProdutos: number;
  comLocalizacao: number;
  semLocalizacao: number;
  totalPrateleiras: number;
  totalFileiras: number;
}
