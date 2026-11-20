import type {
  ParaQueServeDetalhes,
  ComoUtilizarDetalhes,
  OrientacaoAtendimentoDetalhes,
  ContraindicacoesDetalhes,
  EfeitosColateraisDetalhes,
  InteracoesDetalhes,
  CuidadosAdicionaisDetalhes,
} from '../types/database.ts';

// Auto-generated full catalog from official Ultramed database + initial clinical catalog
export interface SeedProduct {
  id: string;
  nome: string;
  principio_ativo?: string;
  concentracao?: string;
  apresentacao?: string;
  forma_farmaceutica?: string;
  fabricante?: string;
  para_que_serve?: string;
  categoria: string;
  categoria_clinica?: string[];
  como_tomar?: string;
  o_que_indicar?: string;
  exige_receita?: string;
  tipo_controle?: string;
  contraindicacoes?: string;
  efeitos_colaterais?: string;
  interacoes_medicamentosas?: string;
  fonte_informacao?: string;
  atualizado_em?: string;
  para_que_serve_detalhes?: ParaQueServeDetalhes;
  como_utilizar_detalhes?: ComoUtilizarDetalhes;
  orientacao_atendimento?: OrientacaoAtendimentoDetalhes;
  contraindicacoes_detalhes?: ContraindicacoesDetalhes;
  efeitos_colaterais_detalhes?: EfeitosColateraisDetalhes;
  interacoes_detalhes?: InteracoesDetalhes;
  cuidados_adicionais?: CuidadosAdicionaisDetalhes;
  situacao: "ativo" | "sem_localizacao";
  origem?: string;
  status_conferencia?: string;
  prateleiras: string[];
}

export const CATALOGO_ULTRAMED_COMPLETO: SeedProduct[] = [
  {
    "id": "1",
    "nome": "GEN DIPIRONA XPE C/100ML MEDLEY",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Xarope/solução oral para alívio da dor e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "2",
    "nome": "AEROLIN SPR 200DS",
    "principio_ativo": "Salbutamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "GSK",
    "para_que_serve": "Broncodilatador de alívio rápido da falta de ar e do chiado no peito na asma, bronquite e enfisema.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "3",
    "nome": "DAONIL 5MG C/30CP",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sanofi-Aventis",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "4",
    "nome": "TIMOPTOL",
    "principio_ativo": "Maleato de Timolol",
    "concentracao": "0,5%",
    "apresentacao": "frasco de 5 mL",
    "fabricante": "",
    "para_que_serve": "Colírio para reduzir a pressão dentro do olho no glaucoma e na hipertensão ocular.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "5",
    "nome": "ATROVENT SOL 20ML",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Boehringer Ingelheim",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas com espasmo brônquico, como asma e DPOC.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "6",
    "nome": "BECLOSOL 50MCG NAS AQUO C/200DS",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "GSK",
    "para_que_serve": "Tratamento preventivo e de manutenção da asma brônquica e de processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "7",
    "nome": "EUPRESSIN 10MG C/30 CP",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Libbs",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "8",
    "nome": "COZAAR 50MG C/30CP",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Organon / Merck",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "9",
    "nome": "TIMOPTOL-XE",
    "principio_ativo": "Maleato de Timolol",
    "concentracao": "0,5%",
    "apresentacao": "frasco de 5 mL",
    "fabricante": "",
    "para_que_serve": "Colírio para reduzir a pressão dentro do olho no glaucoma e na hipertensão ocular.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "10",
    "nome": "CAPTON 25MG C/28CP ROYTON",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Royton",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "11",
    "nome": "DIMEFOR 850MG C/30CP",
    "principio_ativo": "Cloridrato de Metformina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Merck",
    "para_que_serve": "Tratamento do diabetes tipo 2 (controle do açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "12",
    "nome": "CORUS 50MG C/30CP",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sanofi-Aventis",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "13",
    "nome": "DIURIX 25MG TEUTO C/20CP",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "14",
    "nome": "ANGIPRESS 25MG C/28CP",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "AstraZeneca",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "15",
    "nome": "IBUPRIL 600MG C/20CP (IBUPROFENO) TEUTO * (G)",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Anti-inflamatório e analgésico de 600mg.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "16",
    "nome": "CARBIDOL 25/250MG C/30CP TEUTO (G)",
    "principio_ativo": "Carbidopa + Levodopa",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Tratamento da doença de Parkinson e de síndromes parkinsonianas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "17",
    "nome": "DEPO PROVERA INJ SER C/1ML",
    "principio_ativo": "Acetato de Medroxiprogesterona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Pfizer",
    "para_que_serve": "Em injeção (150 mg/mL), contraceptivo para prevenção da gravidez; em comprimidos, usado em distúrbios menstruais e hormonais ginecológicos, sob orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "18",
    "nome": "GEN CAPTOPRIL 25MG C/30CP MEDLEY",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "19",
    "nome": "GEN ANLODIPINO 5MG C/30CP BIOS",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "20",
    "nome": "ALDACTONE 25MG C/30CP",
    "principio_ativo": "Espironolactona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Pfizer / Upjohn",
    "para_que_serve": "Diurético poupador de potássio: pressão alta, insuficiência cardíaca e inchaço (edema) por problemas no coração, fígado ou rins.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C11"
    ]
  },
  {
    "id": "21",
    "nome": "BUDECORT AQ 32MCG 120DS",
    "principio_ativo": "Budesonida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "AstraZeneca",
    "para_que_serve": "Corticoide anti-inflamatório usado na prevenção e no controle da asma e da rinite alérgica, conforme a apresentação (inalatória ou spray nasal).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "22",
    "nome": "FOSAMAX 70MG C/4CP",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Organon / Merck",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "23",
    "nome": "CLORANA 25MG C/30CP",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sanofi-Aventis",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "24",
    "nome": "DIURETIC 25MG C/20CP ROYTON",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Royton",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "25",
    "nome": "SINVASTACOR",
    "principio_ativo": "Sinvastatina",
    "concentracao": "10 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "26",
    "nome": "SINVASTACOR",
    "principio_ativo": "Sinvastatina",
    "concentracao": "20 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "27",
    "nome": "CAPTOLAB 25MG C/30CP",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Legrand",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "28",
    "nome": "AERODINI SPR 200DS TEUTO (SALBUTAMOL)",
    "principio_ativo": "Salbutamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Broncodilatador de alívio rápido da falta de ar e do chiado no peito na asma, bronquite e enfisema.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "29",
    "nome": "GEN ANLODIPINO 5MG C/30CP MEDLEY",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "30",
    "nome": "CONTRACEP INJ C/1AMP 1ML",
    "principio_ativo": "Acetato de Medroxiprogesterona + Cipionato de Estradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Contraceptivo injetável mensal combinado, para prevenção da gravidez.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "31",
    "nome": "ARADOIS 50MG C/30CP",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Merck / Libbs",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "32",
    "nome": "GEN CARBIDOPA+LEV 25/250MG C/30 BIOSSINTETI",
    "principio_ativo": "Carbidopa + Levodopa",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento da doença de Parkinson e de síndromes parkinsonianas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "33",
    "nome": "GEN ENALAPRIL 10MG C/30CP MEDLEY",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "34",
    "nome": "AEROLIN 10ML",
    "principio_ativo": "Salbutamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "GSK",
    "para_que_serve": "Broncodilatador de alívio rápido da falta de ar e do chiado no peito na asma, bronquite e enfisema.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "35",
    "nome": "GEN CAPTOPRIL 25MG C/16CP MEDLEY",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "36",
    "nome": "ENALPRIN 10MG C/30CP ROYTON",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Royton",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "37",
    "nome": "CLENIL PULV 200MCG 100 DS",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Chiesi",
    "para_que_serve": "Tratamento preventivo e de manutenção da asma brônquica e de processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "38",
    "nome": "CLAMIBEN 5MG C/30CP TEUTO",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "39",
    "nome": "GEN CAPTOPRIL 25MG C/60CP MEDLEY",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "40",
    "nome": "GEN IPRATROPIO 20ML UNIAO QUIMICA",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas (asma e DPOC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "41",
    "nome": "ENALAMED 10MG 30CP CIMED",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Cimed",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "42",
    "nome": "GEN FUROSEMIDA 40MG C/20CP TEUTO",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "43",
    "nome": "CLINFAR 20MG C/30CP",
    "principio_ativo": "Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Libbs",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "44",
    "nome": "DEPO PROVERA INJ C/1 AMP 1ML",
    "principio_ativo": "Acetato de Medroxiprogesterona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Pfizer",
    "para_que_serve": "Em injeção (150 mg/mL), contraceptivo para prevenção da gravidez; em comprimidos, usado em distúrbios menstruais e hormonais ginecológicos, sob orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "45",
    "nome": "ENAPROTEC 10MG C/30CP",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "46",
    "nome": "GEN CAPTOPRIL 25MG C/90CP MDLY",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "47",
    "nome": "GEN CAPTOPRIL 25MG C/30CP BIOS",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "48",
    "nome": "GEN ENALAPRIL 10MG C/30CP BIOS",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "49",
    "nome": "GEN FUROSEMIDA 40MG C/30CP BIOS",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "50",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP BIOS",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "51",
    "nome": "GEN ATENOLOL 25MG C/30CP MEDLEY",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "52",
    "nome": "GEN IBUPROFENO 50MG C/30ML GEOLAB *",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Gotas pediátricas para febre e dor.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "53",
    "nome": "ALGY FLANDERIL 300MG C/20CP (IBUPROFENO) * (G)",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Vitamedic",
    "para_que_serve": "Alívio de dores e febre (medicamento similar).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "54",
    "nome": "GEN LOSARTANA POT 50MG C/30CP GERMED",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "55",
    "nome": "ENALABAL 10MG C/30CP",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "56",
    "nome": "ATENOBAL 25MG C/30CP",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "57",
    "nome": "GEN ATENOLOL 25MG C/30CP BIOSINT",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "58",
    "nome": "BONALEN 70MG C/4CP UNIAO QUIMICA",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "59",
    "nome": "BUSONID 50MCG C/120DS",
    "principio_ativo": "Budesonida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Corticoide anti-inflamatório usado na prevenção e no controle da asma e da rinite alérgica, conforme a apresentação (inalatória ou spray nasal).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "60",
    "nome": "GEN CAPTOPRIL 25MG C/30CP EURO EURO",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "61",
    "nome": "GEN LOSARTANA POT 50MG C/15CP MEDLEY",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "62",
    "nome": "CLINFAR 10MG C/30CP",
    "principio_ativo": "Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Libbs",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "63",
    "nome": "ENDROSTAN 70MG C/4CP",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "64",
    "nome": "TORLOS",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "50 mg",
    "apresentacao": "14 comprimidos",
    "fabricante": "",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "65",
    "nome": "TORLOS",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "50 mg",
    "apresentacao": "28 comprimidos",
    "fabricante": "",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "66",
    "nome": "CAPOBAL 25MG C/30CP",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "67",
    "nome": "GEN LOSARTANA POT 50MG C/14CP BIOS",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "68",
    "nome": "CICLO 21 C/21CP (G)",
    "principio_ativo": "Etinilestradiol + Levonorgestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Wyeth / Pfizer",
    "para_que_serve": "Contraceptivo oral para prevenção da gravidez.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "69",
    "nome": "FORMYN 850MG C/30CP MTLB",
    "principio_ativo": "Cloridrato de Metformina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Multilab",
    "para_que_serve": "Tratamento do diabetes tipo 2 (controle do açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "70",
    "nome": "FORMYN 500MG C/30CPS MULTILAB",
    "principio_ativo": "Cloridrato de Metformina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Multilab",
    "para_que_serve": "Tratamento do diabetes tipo 2 (controle do açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "71",
    "nome": "GEN CAPTOPRIL 25MG C/30CP TEUTO",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "72",
    "nome": "SINVASTACOR",
    "principio_ativo": "Sinvastatina",
    "concentracao": "40 mg",
    "apresentacao": "100 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "73",
    "nome": "GEN LOSARTANA POT 50MG C/14CP RATIOPH",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ratiopharm",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "74",
    "nome": "GEN LOSARTANA POT 50MG C/28CP RATIOPH",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ratiopharm",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "75",
    "nome": "CAPTOMED 25MG C/60CP",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "76",
    "nome": "DIMEFOR 500MG C/30 CP",
    "principio_ativo": "Cloridrato de Metformina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Merck",
    "para_que_serve": "Tratamento do diabetes tipo 2 (controle do açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "77",
    "nome": "GEN LOSARTANA POT 50MG C/30CP EURO",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "78",
    "nome": "SINVASTACOR",
    "principio_ativo": "Sinvastatina",
    "concentracao": "40 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "79",
    "nome": "CLENIL 50MCG SPR 200 DS",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Chiesi",
    "para_que_serve": "Tratamento preventivo e de manutenção da asma brônquica e de processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "80",
    "nome": "GEN ESPIRONOLACTONA 25MG C/30CP EUROFARMA",
    "principio_ativo": "Espironolactona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Diurético poupador de potássio: pressão alta, insuficiência cardíaca e inchaço (edema) por problemas no coração, fígado ou rins.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C11"
    ]
  },
  {
    "id": "81",
    "nome": "GEN DIPIRONA XPE 100ML EMS",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Xarope/solução analgésica e antitérmica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "82",
    "nome": "SINVASMAX",
    "principio_ativo": "Sinvastatina",
    "concentracao": "20 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "83",
    "nome": "SINVASMAX",
    "principio_ativo": "Sinvastatina",
    "concentracao": "40 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "84",
    "nome": "GEN PARACETAMOL BEBE 15ML EMS",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Solução oral em gotas para recém-nascidos e bebês (febre e dor).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "85",
    "nome": "DIACQUA 25MG C/30CP",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "86",
    "nome": "GEN IPRATROPIO 20ML EMS",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas (asma e DPOC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "87",
    "nome": "GEN IPRATROPIO 20ML PRATI",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas com espasmo brônquico, como asma e DPOC.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "88",
    "nome": "SINVASTAMED",
    "principio_ativo": "Sinvastatina",
    "concentracao": "20 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "89",
    "nome": "BUSONID 32MCG AQ NASAL 120DS",
    "principio_ativo": "Budesonida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Corticoide anti-inflamatório usado na prevenção e no controle da asma e da rinite alérgica, conforme a apresentação (inalatória ou spray nasal).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "90",
    "nome": "CAPTOTEC 25MG C/30CP HEXAL",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Hexal",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "91",
    "nome": "AEROFRIN 200 DOSES AEROSOL PHARMASCIENCE",
    "principio_ativo": "Salbutamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Pharmascience",
    "para_que_serve": "Broncodilatador de alívio rápido da falta de ar e do chiado no peito na asma, bronquite e enfisema.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "92",
    "nome": "GEN ESPIRONOLACTONA 25MG C/30CP EMS",
    "principio_ativo": "Espironolactona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Diurético poupador de potássio: pressão alta, insuficiência cardíaca e inchaço (edema) por problemas no coração, fígado ou rins.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C11"
    ]
  },
  {
    "id": "93",
    "nome": "IBUPROTRAT 50MG C/30ML (IBUPROFENO) GTS NATULAB (L) (G)",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Gotas pediátricas para febre e inflamações.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "94",
    "nome": "CLINFAR 40MG C/30CP",
    "principio_ativo": "Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Libbs",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "95",
    "nome": "GEN IPRATROPIO 20ML BIOS",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas com espasmo brônquico, como asma e DPOC.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "96",
    "nome": "GEN ESPIRONOLACTONA 25MG C/30CP GERMED",
    "principio_ativo": "Espironolactona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Diurético poupador de potássio: pressão alta, insuficiência cardíaca e inchaço (edema) por problemas no coração, fígado ou rins.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C11"
    ]
  },
  {
    "id": "97",
    "nome": "CAPTOLAB 25MG C/60CP",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Legrand",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "98",
    "nome": "TELOL",
    "principio_ativo": "Atenolol",
    "concentracao": "25 mg",
    "apresentacao": "28 comprimidos",
    "fabricante": "",
    "para_que_serve": "Betabloqueador para controle da pressão alta (hipertensão) e da angina.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "99",
    "nome": "GEN CAPTOPRIL 25MG C/30CP EMS",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "100",
    "nome": "GEN HIDROCLOROTIAZIDA 25MG C/30CP MEDLEY",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "101",
    "nome": "GEN PARACETAMOL+PSEUDOEF 500/30MG C/24CP EMS",
    "principio_ativo": "Paracetamol + Cloridrato de Pseudoefedrina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Alívio dos sintomas de resfriados, gripes e rinites, combatendo a dor, febre e a congestão nasal.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "102",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP EMS",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "103",
    "nome": "GEN ENALAPRIL 10MG C/30CP EMS",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "104",
    "nome": "GEN HIDROCLOROTIAZIDA 25MG C/30CP EMS",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "105",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP GERMED",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "106",
    "nome": "GEN HIDROCLOROTIAZIDA 25MG C/30CP GERMED",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "107",
    "nome": "TEROST",
    "principio_ativo": "Alendronato de sódio",
    "concentracao": "70 mg",
    "apresentacao": "embalagem com 4 unidades",
    "fabricante": "",
    "para_que_serve": "Tratamento e prevenção da osteoporose.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "108",
    "nome": "GEN ATENOLOL 25MG C/30CP GERMED",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "109",
    "nome": "GEN ENALAPRIL 10MG C/30CP GERMED",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "110",
    "nome": "GEN PARACETAMOL+PSEUDOEF 500/30MG C/24CP GERMED",
    "principio_ativo": "Paracetamol + Cloridrato de Pseudoefedrina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Alívio de sintomas gripais, congestão nasal, dor e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "111",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP LEGRAND",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Legrand",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "112",
    "nome": "GEN ANLODIPINO 5MG C/30CP TEUTO",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "113",
    "nome": "GEN IPRATROPIO 20ML TEUTO",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Broncodilatador indicado para o tratamento de manutenção de doenças das vias aéreas associadas a espasmos brônquicos, como asma e DPOC (Doença Pulmonar Obstrutiva Crônica).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "114",
    "nome": "DIURIX 25MG C/30 (HIDROCLOROTIAZIDA) TEUTO",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "115",
    "nome": "TENOLON",
    "principio_ativo": "Atenolol",
    "concentracao": "25 mg",
    "apresentacao": "28 comprimidos",
    "fabricante": "",
    "para_que_serve": "Betabloqueador para tratamento da pressão alta (hipertensão arterial) e de arritmias cardíacas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "116",
    "nome": "BONAGRAN 70MG C/4CP",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "117",
    "nome": "ATROVENT N 20MCG/DOSE 200DS",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Boehringer Ingelheim",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas com espasmo brônquico, como asma e DPOC.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "118",
    "nome": "GEN CAPTOPRIL 25MG C/30CP MARIOL",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Mariol",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "119",
    "nome": "GEN LOSARTANA POT 50MG C/28CP BIOS",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "120",
    "nome": "GEN PARACETAMOL+CODEINA 500/30MG C/12CP EURO C1",
    "principio_ativo": "Paracetamol + Fosfato de Codeína",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Alívio de dores de intensidade moderada a forte.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "121",
    "nome": "CORDAREX 5MG C/30CP",
    "principio_ativo": "Cloridrato de Amiodarona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento de arritmias cardíacas (batimentos irregulares do coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "122",
    "nome": "CLENIL HFA 250MCG JET",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Chiesi",
    "para_que_serve": "Tratamento preventivo e de manutenção da asma brônquica e de processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "123",
    "nome": "CLENIL HFA 50MCG SPR 200DS",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Chiesi",
    "para_que_serve": "Tratamento preventivo e de manutenção da asma brônquica e de processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "124",
    "nome": "GEN ENALAPRIL 10MG C/30CP TEUTO",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "125",
    "nome": "GEN ENALAPRIL 10MG C/30CP LEGRAND",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Legrand",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "126",
    "nome": "GEN ATENOLOL 25MG C/28CP LEGRAND",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Legrand",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "127",
    "nome": "CLENIL HFA 250MCG SPR 200DS",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Chiesi",
    "para_que_serve": "Tratamento preventivo e de manutenção da asma brônquica e de processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "128",
    "nome": "GEN IPRATROPIO 20ML GERMED",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas com espasmo brônquico, como asma e DPOC.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "129",
    "nome": "GEN IBUPROFENO 100MG C/20ML MEDLEY",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Gotas para controle de febre e inflamações leves.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "130",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP MEDLEY",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "131",
    "nome": "MAXALGINA (DIPIRONA) GTS 10ML * (G)",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Solução em gotas com ação analgésica e antitérmica para adultos e crianças.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "132",
    "nome": "GEN DIPIRONA 1G C/10 NEOQUIMICA",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neoquímica",
    "para_que_serve": "Comprimido de 1g para controle rápido de dores intensas e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "133",
    "nome": "GEN ENALAPRIL 10MG C/30CP CIMED",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Cimed",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "134",
    "nome": "GEN HIDROCLOROTIAZIDA 25MG C/30CP CIMED",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Cimed",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "135",
    "nome": "GEN DIPIRONA+CAF C/16CP NEO QUIMICA",
    "principio_ativo": "Dipirona Sódica + Cafeína",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neoquímica",
    "para_que_serve": "Analgésico potencializado pela cafeína, muito utilizado para dores de cabeça e enxaquecas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "136",
    "nome": "GEN LOSARTANA POT 50MG C/30CP BIOS",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "137",
    "nome": "GEN ALEND.SODICO 70MG C/4CP SANDOZ",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sandoz",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "138",
    "nome": "GEN ATENOLOL 25MG C/30CP SANDOZ",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sandoz",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "139",
    "nome": "GEN CAPTOPRIL 25MG C/30CP CIMED",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Cimed",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "140",
    "nome": "GEN IPRATROPIO 20ML NOVA QUIMICA",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Nova Química",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas com espasmo brônquico, como asma e DPOC.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "141",
    "nome": "DIUREMIDA 40MG C/20CP (FUROSEMIDA) GEOLAB",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "142",
    "nome": "GEN LOSARTANA POT 50MG C/30CP GEOLAB",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "143",
    "nome": "ATENOL 25MG C/28CP",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética / Aché",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "144",
    "nome": "DIUREZIN 25MG C/20CP CAZI",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Cazi",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "145",
    "nome": "DIURIT 40MG C/20CP (FUROSEMIDA) CIMED",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Cimed",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "146",
    "nome": "GEN ALEND.SODICO 70MG C/4CP GERMED",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Germed",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "147",
    "nome": "GEN DIPIRONA 500MG C/10CP PRATI",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Combate a dores moderadas a intensas e estados febris.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "148",
    "nome": "ANGIPRESS 25MG C/30CP",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "AstraZeneca",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "149",
    "nome": "GEN DIPIRONA GTS 20ML EMS *",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Gotas para controle de febre e dores em geral.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "150",
    "nome": "GEN SINVASTATINA 10MG C/30CP EMS *",
    "principio_ativo": "Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Redução de colesterol e controle de gordura no sangue.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "151",
    "nome": "GEN DIPIRONA 500MG C/10CP EMS",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Alívio de dores de cabeça, musculares e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "152",
    "nome": "GEN PARACETAMOL GTS 15ML EMS",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Solução em gotas para febre e dores em crianças ou adultos.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "153",
    "nome": "GEN ATENOLOL 25MG C/28 COMP AB PHARMA",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "AB Pharma",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "154",
    "nome": "GEN ALEND.SODICO 70MG C/4CP LEGRAND",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Legrand",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "155",
    "nome": "GEN IBUPROFENO 50MG C/30ML TEUTO *",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Solução oral em gotas para febre e dor infantil.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "156",
    "nome": "GEN ALEND.SODICO 70MG C/4CP BIOS",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biosintética",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "157",
    "nome": "GEN CAPTOPRIL 25MG C/30CP AUROBINDO",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Aurobindo",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "158",
    "nome": "TORLOS",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "50 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "159",
    "nome": "GEN IBUPROFENO 100MG C/20ML GEOLAB *",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Gotas analgésicas, antitérmicas e anti-inflamatórias.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "160",
    "nome": "GEN ANLODIPINO 5MG C/30CP SANDOZ",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sandoz",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "161",
    "nome": "TILEMAXY (PARACETAMOL) BABY 15ML (G)",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Redução de febre e dores para bebês.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "162",
    "nome": "FORXIGA 10MG C/30CP (PBM)",
    "principio_ativo": "Dapagliflozina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "AstraZeneca",
    "para_que_serve": "Tratamento do diabetes tipo 2; também usada em insuficiência cardíaca e doença renal crônica, conforme orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "163",
    "nome": "AMLOVASC 5MG C/30CP (ANLODIPINO) SANDOZ",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sandoz",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "164",
    "nome": "CLENIL HFA 200MCG SPRAY 200 DS",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Chiesi",
    "para_que_serve": "Tratamento preventivo e de manutenção da asma brônquica e de processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "165",
    "nome": "GEN ANLODIPINO 5MG C/30 CP EMS",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "166",
    "nome": "ARADOIS 50MG C/60CP",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Merck / Libbs",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "167",
    "nome": "GEN PARACETAMOL 500MG C/20CP PRATI *",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Alívio de dores leves a moderadas e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "168",
    "nome": "GEN ATENOLOL 25MG C/30CP PRATI",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "169",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP PRATI",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "170",
    "nome": "GEN HIDROCLOROTIAZIDA 25MG C/30CP TEUTO",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "171",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP GEOLAB",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "172",
    "nome": "GEN ALEND.SODICO 70MG C/4CP TEUTO",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "173",
    "nome": "SINVAX",
    "principio_ativo": "sinvastatina",
    "concentracao": "20 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "174",
    "nome": "GEN ENALAPRIL 10MG C/30CP NEO QUIMICA",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neo Química",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "175",
    "nome": "GEN ENALAPRIL 10MG C/30CP SANDOZ",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sandoz",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "176",
    "nome": "GEN HIDROCLOROTIAZIDA 25MG C/30CP MEDQUIMICA",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medquímica",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "177",
    "nome": "SINVASTAMED",
    "principio_ativo": "Sinvastatina",
    "concentracao": "40 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "178",
    "nome": "GEN SINVASTATINA 40MG C/30CP NOVARTIS *",
    "principio_ativo": "Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "SANDOZ (Novartis)",
    "para_que_serve": "Redução dos níveis elevados de colesterol e prevenção de eventos cardiovasculares.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "179",
    "nome": "DEMEDROX 150MG/ML INJ C/1 SER PREENC 1ML",
    "principio_ativo": "Acetato de Medroxiprogesterona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Blau Farmacêutica",
    "para_que_serve": "Em injeção (150 mg/mL), contraceptivo para prevenção da gravidez; em comprimidos, usado em distúrbios menstruais e hormonais ginecológicos, sob orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "180",
    "nome": "GEN ANLODIPINO 5MG C/30CP PRATI",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "181",
    "nome": "ALENDIL 70MG CX 4 COMP",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Abbott",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "182",
    "nome": "GEN CAPTOPRIL 25MG C/30CP PRATI",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "183",
    "nome": "GEN LOSARTANA POT 50MG C/30CP EMS",
    "principio_ativo": "Losartana Potássica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; protege os rins de pessoas com diabetes tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "184",
    "nome": "CYTRANA 50MG CX 30 COMP REV",
    "principio_ativo": "Citrato de Tamoxifeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Libbs",
    "para_que_serve": "Tratamento e prevenção de recidiva do câncer de mama dependente de hormônio, com prescrição e acompanhamento médico.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "185",
    "nome": "GEN IBUPROFENO 600MG C/20CP PRATI",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Ação anti-inflamatória, analgésica e antitérmica, recomendada para dores musculares, articulares, cólicas e inflamações.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "186",
    "nome": "ANLO 5MG C/30CP",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "187",
    "nome": "GEN SINVASTATINA 20MG C/30CP NOVARTIS *",
    "principio_ativo": "Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "SANDOZ (Novartis)",
    "para_que_serve": "Redução dos níveis de colesterol e prevenção de complicações cardíacas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "188",
    "nome": "GEN CAPTOPRIL 25MG C/60CP TEUTO",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "189",
    "nome": "GEN ATENOLOL 25MG C/30CP EMS",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "190",
    "nome": "GEN EZETIMIBA+SINVASTATINA 10MG+10MG C/30CP EMS *",
    "principio_ativo": "Ezetimiba + Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Auxilia na redução do colesterol associando a inibição da absorção intestinal e a diminuição da produção hepática de colesterol.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C12"
    ]
  },
  {
    "id": "191",
    "nome": "GEN FUROSEMIDA 40MG C/20CP NEO QUIMICA",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neo Química",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "192",
    "nome": "GEN HIDROCLOROTIAZIDA 25MG C/30CP PRATI",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "193",
    "nome": "GEN PARACETAMOL+CODEINA 500/30MG C/24CP EURO C1",
    "principio_ativo": "Paracetamol + Fosfato de Codeína",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Analgésico de potente ação para o alívio de dores moderadas a intensas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "194",
    "nome": "GEN PARACETAMOL+CODEINA 500/30MG C/36CP EURO C1",
    "principio_ativo": "Paracetamol + Fosfato de Codeína",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento de dores intensas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "195",
    "nome": "GEN LEVONORGESTREL+ETINILESTRADIOL 0,15MG",
    "principio_ativo": "Levonorgestrel + Etinilestradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Contraceptivo oral para prevenção da gravidez.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "196",
    "nome": "IBUPRIL 400MG C/10CPS GEL (IBUPROFENO) TEUTO",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Cápsulas gelatinosas moles analgésicas e anti-inflamatórias.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "197",
    "nome": "GEN PARACETAMOL 750MG C/20CP UNIAO QUIMICA",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Ação analgésica e antitérmica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "198",
    "nome": "GEN EZETIMIBA+SINVASTATINA 10MG+40MG C/30CP EMS *",
    "principio_ativo": "Ezetimiba + Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Tratamento combinado para controle intensivo do colesterol elevado.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C12"
    ]
  },
  {
    "id": "199",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP NEO QUIMICA",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neo Química",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "200",
    "nome": "GEN ATENOLOL 25MG C/30CP VITAMEDIC",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Vitamedic",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "201",
    "nome": "GEN ATENOLOL 25MG C/60CP EMS",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "202",
    "nome": "SINVAX",
    "principio_ativo": "sinvastatina",
    "concentracao": "40 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Redução do colesterol e dos triglicérides elevados e prevenção de problemas cardiovasculares (infarto e AVC).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "203",
    "nome": "GEN ANLODIPINO 5MG C/30CP GEOLAB",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "204",
    "nome": "GEN CAPTOPRIL 25MG C/30CP MEDQUIMICA",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medquímica",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "205",
    "nome": "GEN ATENOLOL 25MG C/30CP MULTILAB",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Multilab",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "206",
    "nome": "CAPOX 25MG (CAPTOPRIL) C/30CP GEOLAB",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "207",
    "nome": "GEN CAPTOPRIL 25MG C/30CP MULTILAB",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Multilab",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "208",
    "nome": "GEN GLIBENCLAMIDA 5MG C/60CP MEDLEY",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "209",
    "nome": "GEN ALEND.SODICO 70MG C/4CP NEO QUIMICA",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neo Química",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "210",
    "nome": "GEN ANLODIPINO 5MG C/30CP MERCK",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Merck",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "211",
    "nome": "GEN CAPTOPRIL 25MG C/30CP NEO QUIMICA",
    "principio_ativo": "Captopril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neo Química",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca; também protege os rins em pessoas com diabetes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "212",
    "nome": "GEN ANLODIPINO 5MG C/60CP MERCK",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Merck",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "213",
    "nome": "GEN PARACETAMOL GTS 15ML GREEN PHARMA *",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Green Pharma",
    "para_que_serve": "Solução em gotas para febre e dores.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "214",
    "nome": "TENSALIV",
    "principio_ativo": "Besilato de anlodipino",
    "concentracao": "5 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Vasodilatador para pressão alta (hipertensão) e angina (dor no peito de origem coronariana).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "215",
    "nome": "GEN ATENOLOL 25MG C/30CP NEO QUIMICA",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neo Química",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "216",
    "nome": "BESILAPIN 5MG C/30CP (ANLODIPINO) GEOLAB",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "217",
    "nome": "GEN PARACETAMOL+CODEINA 500/30MG C/12CP EMS C1",
    "principio_ativo": "Paracetamol + Fosfato de Codeína",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Analgésico forte para dores moderadas a severas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "218",
    "nome": "GEN ANLODIPINO 5MG C/30CP NOVARTIS",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Novartis",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "219",
    "nome": "GEN ALEND.SODICO 70MG C/4CP DELTA",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Delta",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "220",
    "nome": "AERODIVENT 0,25MG/ML (IPRATROPIO) 20ML",
    "principio_ativo": "Brometo de Ipratrópio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Broncodilatador para tratamento de manutenção de doenças das vias aéreas com espasmo brônquico, como asma e DPOC.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D10",
      "D11"
    ]
  },
  {
    "id": "221",
    "nome": "MAXALGINA (DIPIRONA) GTS 20ML (G)",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Solução em gotas analgésica e antitérmica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "222",
    "nome": "CORDAREX 5MG C/60CP",
    "principio_ativo": "Cloridrato de Amiodarona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento de arritmias cardíacas (batimentos irregulares do coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "223",
    "nome": "GEN BUDESONIDA 32MCG C/120 DOSES EMS",
    "principio_ativo": "Budesonida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Corticoide anti-inflamatório usado na prevenção e no controle da asma e da rinite alérgica, conforme a apresentação (inalatória ou spray nasal).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "224",
    "nome": "IBUPROTRAT 20MG C/100ML (IBUPROFENO) INFANTIL NATULAB (L)",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Suspensão oral infantil para febre e dores corporais ou inflamações em crianças.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "225",
    "nome": "BONEPREV 70MG C/4CP (ALENDRONATO) SANDOZ",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sandoz",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "226",
    "nome": "GEN ANLODIPINO 5MG C/60CP SANDOZ",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sandoz",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "227",
    "nome": "GEN HIDROCLOROTIAZIDA 25MG C/30CP NEO QUIMICA",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neo Química",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "228",
    "nome": "GEN ENALAPRIL 10MG C/30CP VITAMEDIC",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Vitamedic",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "229",
    "nome": "EMPROL XR 25MG C/30CP",
    "principio_ativo": "Succinato de Metoprolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "AstraZeneca",
    "para_que_serve": "Tratamento da pressão alta, angina, arritmias e insuficiência cardíaca; também usado na prevenção após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "230",
    "nome": "GEN FUROSEMIDA 40MG C/20 CP GEOLAB",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "231",
    "nome": "GEN FUROSEMIDA 40MG C/20CP PRATI",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "232",
    "nome": "GEN PARACETAMOL+CODEINA 500/30MG C/36CP BIOLAB C1",
    "principio_ativo": "Paracetamol + Fosfato de Codeína",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Alívio de dores intensas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "233",
    "nome": "GEN ANLODIPINO 5MG C/30CP VITAMEDIC",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Vitamedic",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "234",
    "nome": "GEN ATENOLOL 25MG C/30CP NOVA QUIMICA",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Nova Química",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "235",
    "nome": "GEN ALEND. SODIO 70MG C/4CP EMS",
    "principio_ativo": "Alendronato de Sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Tratamento e prevenção da osteoporose (ossos fracos), principalmente em mulheres após a menopausa; também usado na doença de Paget.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "236",
    "nome": "GEN ATENOLOL 25MG C/60CPS SANDOZ",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Sandoz",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "237",
    "nome": "GEN ENALAPRIL 10MG C/30CP NOVA QUIMICA",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Nova Química",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "238",
    "nome": "GEN LEVONORGESTREL+ETINILESTRADIOL 0,15MG",
    "principio_ativo": "Levonorgestrel + Etinilestradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Contraceptivo oral para prevenção da gravidez.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "239",
    "nome": "GEN ENALAPRIL 10MG C/30CP BIOLAB",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "240",
    "nome": "MAXALGINA (DIPIRONA) 1G C/10CP NATULAB (G)",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Comprimido de 1g para dores fortes e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "241",
    "nome": "GEN BECLOMETASONA 250MCG SPRAY 200DS GLE",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Glenmark",
    "para_que_serve": "Utilizado no tratamento preventivo e de manutenção da asma brônquica e processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "242",
    "nome": "GEN DIPIRONA 1G C/8CP PRATI",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Versão em alta dosagem (1g) para dores fortes e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "243",
    "nome": "CLENIL NASAL AQUOSO 50MCG 30ML",
    "principio_ativo": "Dipropionato de Beclometasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Chiesi",
    "para_que_serve": "Tratamento preventivo e de manutenção da asma brônquica e de processos alérgicos respiratórios.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "244",
    "nome": "GEN ENALAPRIL 10MG C/30CP ALTEFAR",
    "principio_ativo": "Maleato de Enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Altefar",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "245",
    "nome": "GEN ATENOLOL 25MG C/30CPS BIOLAB",
    "principio_ativo": "Atenolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Controle da pressão alta (hipertensão), angina (dor no peito) e arritmias; também usado após infarto.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A8",
      "A9"
    ]
  },
  {
    "id": "246",
    "nome": "GEN PARACETAMOL+CODEINA 500/30MG C/24CP BIOLAB",
    "principio_ativo": "Paracetamol + Fosfato de Codeína",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Tratamento de dores agudas de intensidade moderada a forte.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "247",
    "nome": "EDISTRIDE 10MG C/30CP (PBM)",
    "principio_ativo": "Dapagliflozina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "AstraZeneca",
    "para_que_serve": "Tratamento do diabetes tipo 2; também usada em insuficiência cardíaca e doença renal crônica, conforme orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "248",
    "nome": "IBUPRIL 400MG C/8CPS GEL (IBUPROFENO) TEUTO",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Cápsulas gelatinosas de ação rápida para dores de cabeça, musculares e cólicas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "249",
    "nome": "GEN GLIBENCLAMIDA 5G C/30CP NOVA QUIMICA",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Nova Química",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "250",
    "nome": "GEN PARACETAMOL 750MG C/10CP PRATI",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Combate à febre e dores corporais.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "251",
    "nome": "GEN TRAMADOL+PARACETAMOL C/30CP NEO QUIMICA *",
    "principio_ativo": "Cloridrato de Tramadol + Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neoquímica",
    "para_que_serve": "Tratamento de dores de intensidade moderada a grave.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "252",
    "nome": "GEN DIPIRONA 1G C/10CP MEDLEY",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Analgésico e antitérmico de alta dosagem.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "253",
    "nome": "GEN GLIBENCLAMIDA 5MG C/30CP MEDQUIMICA",
    "principio_ativo": "Glibenclamida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medquímica",
    "para_que_serve": "Tratamento do diabetes tipo 2 (reduz o açúcar no sangue).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "254",
    "nome": "GEN ANLODIPINO 5MG C/30CP CIMED",
    "principio_ativo": "Besilato de Anlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Cimed",
    "para_que_serve": "Tratamento da pressão alta (hipertensão) e da angina (dor no peito por pouco oxigênio no coração).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "A7",
      "A8"
    ]
  },
  {
    "id": "255",
    "nome": "GEN DAPAGLIFLOZINA 10MG C/30CP MEDLEY",
    "principio_ativo": "Dapagliflozina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medley",
    "para_que_serve": "Tratamento do diabetes tipo 2; também usada em insuficiência cardíaca e doença renal crônica, conforme orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "256",
    "nome": "PARACETAMOL 500MG C/20CP BELFAR",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Belfar",
    "para_que_serve": "Redução de febre e alívio temporário de dores leves a moderadas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "257",
    "nome": "GEN SINVASTATINA 20MG C/30CP GLOBO",
    "principio_ativo": "Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Globo",
    "para_que_serve": "Redução dos níveis de colesterol total e triglicérides no sangue, prevenindo doenças cardiovasculares.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "258",
    "nome": "GEN EZETIMIBA+SINVASTATINA 10MG+20MG C/30CP BIOLAB *",
    "principio_ativo": "Ezetimiba + Sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Tratamento duplo para redução dos níveis de colesterol total, colesterol LDL e triglicérides.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "C12"
    ]
  },
  {
    "id": "259",
    "nome": "DOZOITO 25MG C/30CP BIOLAB",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Biolab",
    "para_que_serve": "Diurético usado no tratamento da pressão alta e do inchaço (edema).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "260",
    "nome": "GEN FUROSEMIDA 40MG C/30CP NEO QUIMICA",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neo Química",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "261",
    "nome": "GEN TRAMADOL+PARACETAMOL 37,5MG+325MG C/10CP EUROFARI",
    "principio_ativo": "Cloridrato de Tramadol + Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento analgésico para dores moderadas a graves.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "262",
    "nome": "GEN TRAMADOL+PARACETAMOL 37,5MG+325MG C/20CP EUROFARI",
    "principio_ativo": "Cloridrato de Tramadol + Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Analgésico de dupla ação indicado para o tratamento de dores moderadas a graves.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "263",
    "nome": "GEN TRAMADOL+PARACETAMOL 37,5MG+325MG C/30CP EUROFARI",
    "principio_ativo": "Cloridrato de Tramadol + Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Controle de dores moderadas a intensas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "264",
    "nome": "TILEMAXY GTS 200MG/ML 15ML (PARACETAMOL) NATULAB (L)",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Gotas pediátricas/infantis para alívio de febre e dores leves a moderadas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "265",
    "nome": "GEN PARACETAMOL+CODEINA 500/30MG C/36CP UNIAO QUIMICA A",
    "principio_ativo": "Paracetamol + Fosfato de Codeína",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Alívio de dores moderadas a fortes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "266",
    "nome": "GEN IBUPROFENO 600MG C/20CP VITAMEDIC",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Vitamedic",
    "para_que_serve": "Alívio de inflamações, dores e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "267",
    "nome": "PARACETAMOL 750MG C/20CP NEO QUIMICA (G)",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neoquímica",
    "para_que_serve": "Alívio de dores musculares, de cabeça e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "268",
    "nome": "TILEMAXY (PARACETAMOL) CRIANCA NATULAB C/60ML (L) (G)",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Suspensão oral infantil para febre e dores associadas a resfriados.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "269",
    "nome": "GEN FUROSEMIDA 40MG C/30CP PRATI",
    "principio_ativo": "Furosemida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Prati-Donaduzzi",
    "para_que_serve": "Diurético: reduz o inchaço (edema) causado por problemas no coração, fígado ou rins e ajuda no tratamento da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "270",
    "nome": "GEN DAPAGLIFLOZINA 10MG C/30CP EUROFARMA",
    "principio_ativo": "Dapagliflozina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento do diabetes tipo 2; também usada em insuficiência cardíaca e doença renal crônica, conforme orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "271",
    "nome": "GEN TRAMADOL+PARACETAMOL 37,5MG+325MG C/10CP EMS*",
    "principio_ativo": "Cloridrato de Tramadol + Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Alívio de dores moderadas a severas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "272",
    "nome": "GEN TRAMADOL+PARACETAMOL 37,5MG+325MG C/20CP EMS*",
    "principio_ativo": "Cloridrato de Tramadol + Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Associação analgésica para dores moderadas a fortes.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "273",
    "nome": "GEN TRAMADOL+PARACETAMOL 37,5MG+325MG C/30CP EMS*",
    "principio_ativo": "Cloridrato de Tramadol + Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Ems",
    "para_que_serve": "Alívio de dores moderadas a severas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "274",
    "nome": "GEN DAPAGLIFLOZINA 10MG C/30CP MEDQUIMICA",
    "principio_ativo": "Dapagliflozina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Medquímica",
    "para_que_serve": "Tratamento do diabetes tipo 2; também usada em insuficiência cardíaca e doença renal crônica, conforme orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "275",
    "nome": "GEN DAPAGLIFLOZINA 10MG C/30CP EMS",
    "principio_ativo": "Dapagliflozina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "EMS",
    "para_que_serve": "Tratamento do diabetes tipo 2; também usada em insuficiência cardíaca e doença renal crônica, conforme orientação médica.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "276",
    "nome": "GEN CARBIDOPA+LEV 25/250MG C/30CP ZYDUS",
    "principio_ativo": "Carbidopa + Levodopa",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Zydus",
    "para_que_serve": "Tratamento da doença de Parkinson e de síndromes parkinsonianas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "277",
    "nome": "GEN DIPIRONA ABACAXI 500MG/ML 20ML NEOQUIMICA (N)",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Neoquímica",
    "para_que_serve": "Solução oral sabor abacaxi com propriedades analgésicas e antitérmicas.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "278",
    "nome": "GEN DIPIRONA GTS 20ML NATULAB (L)",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Gotas para febre e dores.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "279",
    "nome": "GEN DIPIRONA 500MG C/30CP NATULAB (L)",
    "principio_ativo": "Dipirona Sódica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Alívio de dores (analgésico) e redução de febre (antitérmico).",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Lista de medicamentos",
    "prateleiras": []
  },
  {
    "id": "280",
    "nome": "GEN IBUPROFENO GTS 100MG/ML 20ML UNIAO QUIMICA",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Solução em gotas com ação anti-inflamatória, analgésica e antitérmica infantil/adulta.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "281",
    "nome": "GEN IBUPROFENO GTS 200MG/ML 20ML UNIAO QUIMICA",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Concentração maior em gotas para alívio rápido de febre e dores.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "282",
    "nome": "GEN IBUPROFENO 100MG C/10CPS MOLES PHARLAB",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Pharlab",
    "para_que_serve": "Cápsulas moles para absorção mais rápida no alívio de dores e febre.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Lista de medicamentos",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "283",
    "nome": "Agilgrip",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio dos sintomas de gripe e resfriado.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "284",
    "nome": "Apracur",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de sintomas de gripe, dores e febre, conforme apresentação.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "285",
    "nome": "Naldecon",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de sintomas de gripe e resfriado (coriza, congestão nasal, dores, febre), conforme versão.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "286",
    "nome": "Aspirina",
    "principio_ativo": "Ácido acetilsalicílico",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico, antitérmico e anti-inflamatório à base de ácido acetilsalicílico.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "287",
    "nome": "Benegrip",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio dos sintomas de gripe e resfriado.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "288",
    "nome": "Grip-7",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de sintomas gripais. Conferir embalagem ou bula.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "289",
    "nome": "Lisador",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de dores e cólicas, conforme composição.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "290",
    "nome": "Dormec",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Finalidade a confirmar (apresentação e princípio ativo). Conferir embalagem ou bula.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E2"
    ]
  },
  {
    "id": "291",
    "nome": "Calmador",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Finalidade a confirmar (composição e apresentação). Conferir embalagem ou bula.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E2"
    ]
  },
  {
    "id": "292",
    "nome": "Neosaldina",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de dores de cabeça e enxaquecas.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E2"
    ]
  },
  {
    "id": "293",
    "nome": "Coristina D",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio dos sintomas de gripe e resfriado.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E2"
    ]
  },
  {
    "id": "294",
    "nome": "Doril",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico para dores, especialmente de cabeça, conforme apresentação.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E2"
    ]
  },
  {
    "id": "295",
    "nome": "Decongex",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico e descongestionante: coriza, espirros e congestão nasal.",
    "categoria": "Antialérgico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E2"
    ]
  },
  {
    "id": "296",
    "nome": "Melhoral Infantil",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico infantil. Conferir embalagem ou bula.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E2"
    ]
  },
  {
    "id": "297",
    "nome": "Dipirona",
    "principio_ativo": "Dipirona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico para dores e febre.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E3"
    ]
  },
  {
    "id": "298",
    "nome": "Dorflex",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de dores associadas à tensão e contração muscular.",
    "categoria": "Analgésico / relaxante muscular",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E3"
    ]
  },
  {
    "id": "299",
    "nome": "Paracetamol",
    "principio_ativo": "Paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico para dores e febre.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E3"
    ]
  },
  {
    "id": "300",
    "nome": "Torsilax",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Associação com ação analgésica, anti-inflamatória e relaxante muscular.",
    "categoria": "Analgésico / relaxante muscular",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E3"
    ]
  },
  {
    "id": "301",
    "nome": "Novalgina",
    "principio_ativo": "Dipirona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "À base de dipirona, para dores e febre.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E3"
    ]
  },
  {
    "id": "302",
    "nome": "Olina",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Desconfortos digestivos, tradicionalmente. Conferir embalagem ou bula.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E4"
    ]
  },
  {
    "id": "303",
    "nome": "Figatil",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Auxílio da digestão.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E4"
    ]
  },
  {
    "id": "304",
    "nome": "Figon",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Produto digestivo. Conferir embalagem ou bula.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E4",
      "G8",
      "G9",
      "H11",
      "H12"
    ]
  },
  {
    "id": "305",
    "nome": "Natucler",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E4",
      "H12"
    ]
  },
  {
    "id": "306",
    "nome": "Eparema",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Auxiliar da digestão e desconfortos digestivos.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E4"
    ]
  },
  {
    "id": "307",
    "nome": "Epocler",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Auxiliar em distúrbios metabólicos hepáticos, conforme bula.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E4"
    ]
  },
  {
    "id": "308",
    "nome": "Luftagastro",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Desconfortos digestivos e gases, conforme apresentação.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E4"
    ]
  },
  {
    "id": "309",
    "nome": "Bisalax",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Laxante para auxiliar na prisão de ventre.",
    "categoria": "Laxante",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "310",
    "nome": "Lactopurga",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Laxante para facilitar a evacuação na constipação intestinal.",
    "categoria": "Laxante",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "311",
    "nome": "Frutaxx",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "312",
    "nome": "Estomazil",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiácido: azia, queimação e acidez estomacal.",
    "categoria": "Antiácido",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "313",
    "nome": "Gastrol",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiácido: azia e acidez do estômago.",
    "categoria": "Antiácido",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "314",
    "nome": "Pepsamar",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiácido: excesso de acidez estomacal.",
    "categoria": "Antiácido",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "315",
    "nome": "Magnésia Bisurada",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiácido: azia e má digestão.",
    "categoria": "Antiácido",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "316",
    "nome": "Engov",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de determinados sintomas de indisposição, conforme composição e bula.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "317",
    "nome": "Epocler comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mesma finalidade do Epocler, respeitando a apresentação.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E5"
    ]
  },
  {
    "id": "318",
    "nome": "Dordente",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e embalagem.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E6"
    ]
  },
  {
    "id": "319",
    "nome": "Digesliv",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Auxílio da digestão. Conferir composição.",
    "categoria": "Digestivo",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E6",
      "G8",
      "G9"
    ]
  },
  {
    "id": "320",
    "nome": "Sonrisal",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiácido efervescente: azia, má digestão e acidez.",
    "categoria": "Antiácido",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E6"
    ]
  },
  {
    "id": "321",
    "nome": "Eno",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiácido efervescente: azia e acidez estomacal.",
    "categoria": "Antiácido",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E6"
    ]
  },
  {
    "id": "322",
    "nome": "Stilgrip",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio dos sintomas gripais.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7"
    ]
  },
  {
    "id": "323",
    "nome": "Vick Analador",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de dores. Conferir apresentação.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7"
    ]
  },
  {
    "id": "324",
    "nome": "Óxido de Zinco",
    "principio_ativo": "Óxido de zinco",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Uso tópico, protetor da pele em irritações e assaduras.",
    "categoria": "Uso tópico / dermatológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7"
    ]
  },
  {
    "id": "325",
    "nome": "Milmune",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7"
    ]
  },
  {
    "id": "326",
    "nome": "Resgriliv",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7"
    ]
  },
  {
    "id": "327",
    "nome": "Pyrena",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir princípio ativo e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7"
    ]
  },
  {
    "id": "328",
    "nome": "Sal Amargo",
    "principio_ativo": "Sulfato de magnésio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Sulfato de magnésio, tradicionalmente laxante osmótico em certas apresentações.",
    "categoria": "Laxante",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7"
    ]
  },
  {
    "id": "329",
    "nome": "Cloreto de Magnésio",
    "principio_ativo": "Cloreto de magnésio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento mineral para complementar a ingestão de magnésio.",
    "categoria": "Mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7",
      "H8"
    ]
  },
  {
    "id": "330",
    "nome": "Permanganato de Potássio",
    "principio_ativo": "Permanganato de potássio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antisséptico de uso externo, em soluções diluídas, conforme orientação profissional.",
    "categoria": "Uso tópico / dermatológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "E7"
    ]
  },
  {
    "id": "331",
    "nome": "Adoless",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal para prevenir a gravidez.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "332",
    "nome": "Amora",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "333",
    "nome": "Allestra",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "334",
    "nome": "Allurene",
    "principio_ativo": "Dienogeste",
    "concentracao": "2 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Dienogeste 2 mg; tratamento da endometriose e seus sintomas dolorosos.",
    "categoria": "Endometriose (hormonal)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "335",
    "nome": "Alurax",
    "principio_ativo": "Dienogeste",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "À base de dienogeste; tratamento da endometriose.",
    "categoria": "Endometriose (hormonal)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "336",
    "nome": "Ammy",
    "principio_ativo": "Drospirenona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral à base de drospirenona, para prevenir a gravidez.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "337",
    "nome": "Angeliq",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Terapia hormonal para sintomas da menopausa.",
    "categoria": "Terapia hormonal (menopausa)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "338",
    "nome": "Artemida",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "339",
    "nome": "Belara",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F1"
    ]
  },
  {
    "id": "340",
    "nome": "Diane 35",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Manifestações de androgenização (acne e hirsutismo) em mulheres que também precisam de contracepção.",
    "categoria": "Hormonal ginecológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2",
      "F3"
    ]
  },
  {
    "id": "341",
    "nome": "Depo-Provera",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional injetável hormonal.",
    "categoria": "Anticoncepcional injetável",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "342",
    "nome": "Demedrox",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional injetável hormonal.",
    "categoria": "Anticoncepcional injetável",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "343",
    "nome": "Dalyne",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "344",
    "nome": "Contracep",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional injetável para prevenir a gravidez.",
    "categoria": "Anticoncepcional injetável",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "345",
    "nome": "Climene",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Terapia hormonal em condições relacionadas à menopausa.",
    "categoria": "Terapia hormonal (menopausa)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "346",
    "nome": "Cicloprimogyna",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Terapia hormonal em determinadas irregularidades menstruais.",
    "categoria": "Terapia hormonal (menopausa)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "347",
    "nome": "Ciclo 21",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "348",
    "nome": "Cherry",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "349",
    "nome": "Cerazette",
    "principio_ativo": "Desogestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral à base de desogestrel.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "350",
    "nome": "Ceci",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "351",
    "nome": "Belarina",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F2"
    ]
  },
  {
    "id": "352",
    "nome": "Diclin",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal, também usado em manifestações de androgenização, conforme indicação médica.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "353",
    "nome": "Diminut",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "354",
    "nome": "Dunia",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "355",
    "nome": "Dioless",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "356",
    "nome": "Elani Ciclo",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "357",
    "nome": "Elani 28",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "358",
    "nome": "Evra",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Adesivo contraceptivo hormonal.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "359",
    "nome": "Femiane",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "360",
    "nome": "Feminique 20",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F3"
    ]
  },
  {
    "id": "361",
    "nome": "Mamades",
    "principio_ativo": "Desogestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral à base de desogestrel, para prevenir a gravidez.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "362",
    "nome": "Levet",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "363",
    "nome": "Liberfem",
    "principio_ativo": "Acetato de clormadinona + etinilestradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Combinado à base de acetato de clormadinona e etinilestradiol.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "364",
    "nome": "Dienogeste",
    "principio_ativo": "Dienogeste",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Hormônio usado principalmente no tratamento da endometriose, conforme apresentação.",
    "categoria": "Endometriose (hormonal)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4",
      "F10"
    ]
  },
  {
    "id": "365",
    "nome": "Iziz",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "366",
    "nome": "Iumi ES",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "367",
    "nome": "Iumi",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "368",
    "nome": "Ginesse",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "369",
    "nome": "Gestrelan",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "370",
    "nome": "Gestinol 28",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "371",
    "nome": "Femoston",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Terapia hormonal na menopausa, em certas situações de reposição.",
    "categoria": "Terapia hormonal (menopausa)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F4"
    ]
  },
  {
    "id": "372",
    "nome": "Mercilon",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "373",
    "nome": "Mercilon Conti",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir apresentação e composição. Não classificar automaticamente como reposição hormonal.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "374",
    "nome": "Mesigyna",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional injetável mensal.",
    "categoria": "Anticoncepcional injetável",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "375",
    "nome": "Microdiol",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "376",
    "nome": "Micropil",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "377",
    "nome": "Microvlar",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "378",
    "nome": "Miranova",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "379",
    "nome": "Minian",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "380",
    "nome": "Molièri 20",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "381",
    "nome": "Molièri 30",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F5"
    ]
  },
  {
    "id": "382",
    "nome": "Norestin",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal à base de progestagênio.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F6"
    ]
  },
  {
    "id": "383",
    "nome": "Nordette",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F6"
    ]
  },
  {
    "id": "384",
    "nome": "Niki",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F6"
    ]
  },
  {
    "id": "385",
    "nome": "Nextela",
    "principio_ativo": "Estetrol + drospirenona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral combinado de estetrol e drospirenona, para prevenir a gravidez. Não é pílula do dia seguinte.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F6"
    ]
  },
  {
    "id": "386",
    "nome": "Neovlar",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F6"
    ]
  },
  {
    "id": "387",
    "nome": "Natifa",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Terapia hormonal para sintomas da menopausa.",
    "categoria": "Terapia hormonal (menopausa)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F6"
    ]
  },
  {
    "id": "388",
    "nome": "Nactali",
    "principio_ativo": "Desogestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral à base de desogestrel.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F6"
    ]
  },
  {
    "id": "389",
    "nome": "Mylus",
    "principio_ativo": "Desogestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral à base de desogestrel.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F6"
    ]
  },
  {
    "id": "390",
    "nome": "Onua",
    "principio_ativo": "Desogestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral à base de desogestrel.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "391",
    "nome": "Pérola",
    "principio_ativo": "Desogestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral à base de desogestrel.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "392",
    "nome": "Pietra ED",
    "principio_ativo": "Dienogeste",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "À base de dienogeste; tratamento da endometriose.",
    "categoria": "Endometriose (hormonal)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "393",
    "nome": "Primera 20",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "394",
    "nome": "Primera 30",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "395",
    "nome": "Primogyna",
    "principio_ativo": "Estradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "À base de estradiol, terapia hormonal.",
    "categoria": "Terapia hormonal (menopausa)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "396",
    "nome": "Primolut Nor",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Hormonal para determinados distúrbios menstruais.",
    "categoria": "Hormonal ginecológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "397",
    "nome": "Primosiston",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Hormonal para certas alterações menstruais e sangramentos uterinos.",
    "categoria": "Hormonal ginecológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "398",
    "nome": "Provera",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Hormonal para certas alterações menstruais e condições ginecológicas.",
    "categoria": "Hormonal ginecológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "399",
    "nome": "Rubia",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F7"
    ]
  },
  {
    "id": "400",
    "nome": "Tamisa 30",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "401",
    "nome": "Tamisa 20",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "402",
    "nome": "Tamisa 15",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "403",
    "nome": "Systen",
    "principio_ativo": "Estradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Adesivo transdérmico de estradiol, reposição hormonal.",
    "categoria": "Terapia hormonal (menopausa)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "404",
    "nome": "Suprema",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "405",
    "nome": "Stezza",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "406",
    "nome": "Slinda",
    "principio_ativo": "Drospirenona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional oral à base de drospirenona.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "407",
    "nome": "Siblima",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "408",
    "nome": "Selene",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Combinado, também usado em certas manifestações de androgenização.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F8"
    ]
  },
  {
    "id": "409",
    "nome": "Tantin",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F9"
    ]
  },
  {
    "id": "410",
    "nome": "Tess",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal. Conferir composição.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F9"
    ]
  },
  {
    "id": "411",
    "nome": "Triquilar",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado trifásico.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F9"
    ]
  },
  {
    "id": "412",
    "nome": "Yaz Flex",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F9"
    ]
  },
  {
    "id": "413",
    "nome": "Yaz",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F9"
    ]
  },
  {
    "id": "414",
    "nome": "Acetato de ciproterona + etinilestradiol",
    "principio_ativo": "Acetato de ciproterona + etinilestradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Associação hormonal para androgenização e acne, com efeito contraceptivo.",
    "categoria": "Hormonal ginecológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F9",
      "F10"
    ]
  },
  {
    "id": "415",
    "nome": "Yasmin",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional hormonal combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F9"
    ]
  },
  {
    "id": "416",
    "nome": "Algestona acetofenida + enantato de estradiol",
    "principio_ativo": "Algestona acetofenida + enantato de estradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Associação hormonal; anticoncepcional injetável mensal.",
    "categoria": "Anticoncepcional injetável",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F10"
    ]
  },
  {
    "id": "417",
    "nome": "Desogestrel",
    "principio_ativo": "Desogestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Progestagênio usado em formulações anticoncepcionais.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F10"
    ]
  },
  {
    "id": "418",
    "nome": "Desogestrel + etinilestradiol",
    "principio_ativo": "Desogestrel + etinilestradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Associação hormonal; anticoncepcional oral combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F10"
    ]
  },
  {
    "id": "419",
    "nome": "Drospirenona + etinilestradiol",
    "principio_ativo": "Drospirenona + etinilestradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Associação hormonal; anticoncepcional oral combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F10"
    ]
  },
  {
    "id": "420",
    "nome": "Noretisterona",
    "principio_ativo": "Noretisterona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Hormônio usado em certas condições ginecológicas e formulações contraceptivas.",
    "categoria": "Hormonal ginecológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F11"
    ]
  },
  {
    "id": "421",
    "nome": "Levonorgestrel + etinilestradiol",
    "principio_ativo": "Levonorgestrel + etinilestradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Associação hormonal; anticoncepcional oral combinado.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F11"
    ]
  },
  {
    "id": "422",
    "nome": "Gestodeno",
    "principio_ativo": "Gestodeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Progestagênio usado em formulações anticoncepcionais.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F11"
    ]
  },
  {
    "id": "423",
    "nome": "Estradiol",
    "principio_ativo": "Estradiol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Hormônio estrogênico usado em terapia hormonal.",
    "categoria": "Terapia hormonal (menopausa)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F11"
    ]
  },
  {
    "id": "424",
    "nome": "Drospirenona",
    "principio_ativo": "Drospirenona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Progestagênio usado em anticoncepcionais e certas terapias hormonais.",
    "categoria": "Anticoncepcional",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F11"
    ]
  },
  {
    "id": "425",
    "nome": "Pilem",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional de emergência, após relação desprotegida ou falha contraceptiva.",
    "categoria": "Anticoncepcional de emergência",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F12"
    ]
  },
  {
    "id": "426",
    "nome": "Pozato Uni",
    "principio_ativo": "Levonorgestrel",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional de emergência à base de levonorgestrel.",
    "categoria": "Anticoncepcional de emergência",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F12"
    ]
  },
  {
    "id": "427",
    "nome": "Hora H",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoncepcional de emergência, após relação desprotegida ou falha contraceptiva.",
    "categoria": "Anticoncepcional de emergência",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "F12"
    ]
  },
  {
    "id": "428",
    "nome": "Nutrivit",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento vitamínico e mineral.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1"
    ]
  },
  {
    "id": "429",
    "nome": "Vitaz Kid",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento vitamínico infantil.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1"
    ]
  },
  {
    "id": "430",
    "nome": "Bronqtrat",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de sintomas respiratórios e tosse. Conferir composição.",
    "categoria": "Respiratório (tosse e secreções)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1",
      "G2"
    ]
  },
  {
    "id": "431",
    "nome": "Bio-C",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de vitamina C.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1"
    ]
  },
  {
    "id": "432",
    "nome": "Angino-Rub",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de irritações e desconfortos na garganta, conforme apresentação.",
    "categoria": "Respiratório (tosse e secreções)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1"
    ]
  },
  {
    "id": "433",
    "nome": "Cloridrato de Ambroxol",
    "principio_ativo": "Cloridrato de ambroxol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Expectorante e mucolítico: facilita eliminar o muco das vias respiratórias.",
    "categoria": "Respiratório (tosse e secreções)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1"
    ]
  },
  {
    "id": "434",
    "nome": "Albendazol 400 mg",
    "principio_ativo": "Albendazol",
    "concentracao": "400 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiparasitário para certas verminoses.",
    "categoria": "Antiparasitário",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1"
    ]
  },
  {
    "id": "435",
    "nome": "Aceclofenaco 100 mg",
    "principio_ativo": "Aceclofenaco",
    "concentracao": "100 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório para dor e inflamação.",
    "categoria": "Anti-inflamatório",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1"
    ]
  },
  {
    "id": "436",
    "nome": "Aderefix",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Creme fixador de prótese dentária. Higiene e cuidado bucal, não é medicamento.",
    "categoria": "Higiene e cuidado bucal",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G1"
    ]
  },
  {
    "id": "437",
    "nome": "Cafeína + carisoprodol + diclofenaco sódico + paracetamol",
    "principio_ativo": "Cafeína + carisoprodol + diclofenaco sódico + paracetamol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Associação analgésica, anti-inflamatória e relaxante muscular.",
    "categoria": "Analgésico / relaxante muscular",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G2"
    ]
  },
  {
    "id": "438",
    "nome": "Celestrat",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico e corticosteroide em determinadas condições alérgicas.",
    "categoria": "Antialérgico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G2"
    ]
  },
  {
    "id": "439",
    "nome": "Cetoconazol + dipropionato de betametasona + sulfato de neomicina",
    "principio_ativo": "Cetoconazol + dipropionato de betametasona + sulfato de neomicina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Associação dermatológica antifúngica, anti-inflamatória e antibacteriana.",
    "categoria": "Uso tópico / dermatológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G2"
    ]
  },
  {
    "id": "440",
    "nome": "Gastrobem",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "441",
    "nome": "Gelo-Bio",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Uso tópico, sensação refrescante e alívio de desconfortos musculares, conforme apresentação.",
    "categoria": "Uso tópico / dermatológico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "442",
    "nome": "Flucistein",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico para ajudar a fluidificar secreções respiratórias.",
    "categoria": "Respiratório (tosse e secreções)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "443",
    "nome": "Florastor",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Probiótico para auxiliar no equilíbrio da flora intestinal.",
    "categoria": "Probiótico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "444",
    "nome": "Ferisept",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "445",
    "nome": "Dipirona monoidratada",
    "principio_ativo": "Dipirona monoidratada",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico para dores e febre.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "446",
    "nome": "Desloratadina",
    "principio_ativo": "Desloratadina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico: rinite alérgica e urticária.",
    "categoria": "Antialérgico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "447",
    "nome": "Clotrimazol",
    "principio_ativo": "Clotrimazol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico para infecções causadas por fungos.",
    "categoria": "Antifúngico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "448",
    "nome": "Dicloridrato de levocetirizina",
    "principio_ativo": "Dicloridrato de levocetirizina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico: rinite alérgica e urticária.",
    "categoria": "Antialérgico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "449",
    "nome": "Ibuprotrat Infantil",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "À base de ibuprofeno: dores, febre e inflamações em crianças, conforme apresentação.",
    "categoria": "Analgésico / antitérmico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "450",
    "nome": "Hislor",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. Conferir princípio ativo.",
    "categoria": "Antialérgico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "451",
    "nome": "Sulfato de neomicina + bacitracina zíncica",
    "principio_ativo": "Sulfato de neomicina + bacitracina zíncica",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antibiótico de uso tópico em certas infecções bacterianas superficiais da pele.",
    "categoria": "Antibiótico de uso tópico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "452",
    "nome": "Nimesulida betaciclodextrina",
    "principio_ativo": "Nimesulida betaciclodextrina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório para dor e inflamação.",
    "categoria": "Anti-inflamatório",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "453",
    "nome": "Neolefrin",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio dos sintomas de gripe e resfriado.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G3"
    ]
  },
  {
    "id": "454",
    "nome": "Uniclarin",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Colírio para alergia ocular e vermelhidão, conforme composição.",
    "categoria": "Colírio",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G4"
    ]
  },
  {
    "id": "455",
    "nome": "Snif",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Higiene e hidratação das narinas, conforme apresentação.",
    "categoria": "Nasal",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G4"
    ]
  },
  {
    "id": "456",
    "nome": "Proctfis H",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de sintomas de hemorroidas e desconfortos anorretais.",
    "categoria": "Hemorroidas",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G4"
    ]
  },
  {
    "id": "457",
    "nome": "Paragripe",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de sintomas gripais. Conferir composição.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G4"
    ]
  },
  {
    "id": "458",
    "nome": "Neolefrin Dia",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alívio de sintomas diurnos de gripe e resfriado.",
    "categoria": "Gripe e resfriado",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G4"
    ]
  },
  {
    "id": "459",
    "nome": "Betacaroteno",
    "principio_ativo": "Betacaroteno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Precursor da vitamina A; suplemento nutricional.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G5"
    ]
  },
  {
    "id": "460",
    "nome": "Complexo B",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Vitaminas do complexo B para complementar a alimentação.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G5",
      "H9"
    ]
  },
  {
    "id": "461",
    "nome": "Cranberry",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento vegetal, auxiliar na saúde do trato urinário. Não substitui tratamento de infecções.",
    "categoria": "Suplemento vegetal",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G5"
    ]
  },
  {
    "id": "462",
    "nome": "Guaraná",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento vegetal com cafeína, efeito estimulante.",
    "categoria": "Suplemento vegetal",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G5"
    ]
  },
  {
    "id": "463",
    "nome": "Imunne C",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de vitamina C.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G5"
    ]
  },
  {
    "id": "464",
    "nome": "Óleo de linhaça",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento vegetal com ácidos graxos, incluindo ômega 3 de origem vegetal.",
    "categoria": "Suplemento vegetal",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G5"
    ]
  },
  {
    "id": "465",
    "nome": "Óleo de prímula",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento vegetal rico em ácido gama-linolênico.",
    "categoria": "Suplemento vegetal",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G5"
    ]
  },
  {
    "id": "466",
    "nome": "X-Pecto Plus Balsâmico",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Desconfortos na garganta e tosse, conforme composição.",
    "categoria": "Respiratório (tosse e secreções)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G6"
    ]
  },
  {
    "id": "467",
    "nome": "Promuco",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Auxílio na fluidificação de secreções respiratórias. Conferir composição.",
    "categoria": "Respiratório (tosse e secreções)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G6"
    ]
  },
  {
    "id": "468",
    "nome": "Selênio",
    "principio_ativo": "Selênio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento mineral.",
    "categoria": "Mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G6"
    ]
  },
  {
    "id": "469",
    "nome": "Vitamina E",
    "principio_ativo": "Vitamina E",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Vitamina com ação antioxidante.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G6"
    ]
  },
  {
    "id": "470",
    "nome": "Vitamina D",
    "principio_ativo": "Vitamina D",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Importante para a saúde óssea e o metabolismo do cálcio.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G6",
      "H9"
    ]
  },
  {
    "id": "471",
    "nome": "Ômega 3 Lavitan",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de ácidos graxos ômega 3.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G6"
    ]
  },
  {
    "id": "472",
    "nome": "Vivente",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G7",
      "G8"
    ]
  },
  {
    "id": "473",
    "nome": "Estrela da Noite",
    "principio_ativo": "Melatonina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de melatonina, auxilia na regulação do ciclo sono-vigília.",
    "categoria": "Suplemento (sono)",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G7"
    ]
  },
  {
    "id": "474",
    "nome": "Biliplex Bold",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "G9"
    ]
  },
  {
    "id": "475",
    "nome": "A-Z Mulher",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Multivitamínico e mineral para complementar a alimentação feminina.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H1",
      "H2"
    ]
  },
  {
    "id": "476",
    "nome": "Saúde da Mulher",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Complementa nutrientes ligados à saúde feminina. Conferir composição.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H1"
    ]
  },
  {
    "id": "477",
    "nome": "Ultrasupry Mulher",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Multivitamínico e mineral, público feminino.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H1"
    ]
  },
  {
    "id": "478",
    "nome": "Ultrasupry Multivitamínico",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de vitaminas e minerais.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H1",
      "H2"
    ]
  },
  {
    "id": "479",
    "nome": "A-Z Suplemento Alimentar",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento multivitamínico e mineral.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H2"
    ]
  },
  {
    "id": "480",
    "nome": "A-Z Homem",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Multivitamínico e mineral, público masculino.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H2"
    ]
  },
  {
    "id": "481",
    "nome": "Ultracaps Homem",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Complementação nutricional masculina.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H2"
    ]
  },
  {
    "id": "482",
    "nome": "Cabelo + Pele + Unha",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Nutrientes para complementar a alimentação e manter cabelos, pele e unhas.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H3"
    ]
  },
  {
    "id": "483",
    "nome": "Ultracaps Hair",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Nutrientes relacionados à saúde capilar.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H3"
    ]
  },
  {
    "id": "484",
    "nome": "Ultrasupry Senior",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Multivitamínico e mineral, público adulto mais velho.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H3"
    ]
  },
  {
    "id": "485",
    "nome": "Multivitamínico",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Fornece vitaminas e minerais. Conferir embalagem ou bula.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H3"
    ]
  },
  {
    "id": "486",
    "nome": "A-Z Senior",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Multivitamínico e mineral, público adulto mais velho.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H3"
    ]
  },
  {
    "id": "487",
    "nome": "Ultracaps Senior 50+",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento nutricional para maiores de 50 anos.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H3"
    ]
  },
  {
    "id": "488",
    "nome": "Colágeno",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento proteico para complementar a ingestão de colágeno.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H4"
    ]
  },
  {
    "id": "489",
    "nome": "Artrimed Colágeno",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de colágeno, complementação nutricional.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H4"
    ]
  },
  {
    "id": "490",
    "nome": "Artrimed Condro",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Nutrientes relacionados à saúde das articulações. Conferir composição.",
    "categoria": "Articulações",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H4"
    ]
  },
  {
    "id": "491",
    "nome": "Colágeno Tipo II",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de colágeno, complemento relacionado à saúde articular.",
    "categoria": "Articulações",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H4"
    ]
  },
  {
    "id": "492",
    "nome": "Ultrasupry 34 Premium A-Z",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento multivitamínico e mineral.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H5"
    ]
  },
  {
    "id": "493",
    "nome": "Memo",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H5"
    ]
  },
  {
    "id": "494",
    "nome": "Ultracaps Feno-grego + Boro",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento alimentar com feno-grego e boro.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H5"
    ]
  },
  {
    "id": "495",
    "nome": "Cálcio MDK",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Minerais e vitaminas ligados à complementação de cálcio, conforme composição.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H5"
    ]
  },
  {
    "id": "496",
    "nome": "LuteinZ",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento relacionado à saúde ocular. Conferir composição.",
    "categoria": "Visão",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H6"
    ]
  },
  {
    "id": "497",
    "nome": "Luteína + Zeaxantina",
    "principio_ativo": "Luteína + zeaxantina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Carotenoides em suplementos para complementação ligada à saúde dos olhos.",
    "categoria": "Visão",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H6"
    ]
  },
  {
    "id": "498",
    "nome": "Licopeno",
    "principio_ativo": "Licopeno",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antioxidante da família dos carotenoides, suplemento nutricional.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H6"
    ]
  },
  {
    "id": "499",
    "nome": "Triptofano",
    "principio_ativo": "Triptofano",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Aminoácido usado como suplemento alimentar.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H6"
    ]
  },
  {
    "id": "500",
    "nome": "Ultrasupry Cálcio D",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cálcio e vitamina D, manutenção da saúde óssea.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H6"
    ]
  },
  {
    "id": "501",
    "nome": "Ômega 3",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Ácidos graxos para complementar a alimentação.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H7",
      "H8"
    ]
  },
  {
    "id": "502",
    "nome": "Caibra",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir composição e apresentação.",
    "categoria": "Conferir embalagem ou bula",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H7"
    ]
  },
  {
    "id": "503",
    "nome": "Coenzima Q10",
    "principio_ativo": "Coenzima Q10",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Substância da produção de energia celular, usada como suplemento.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H7"
    ]
  },
  {
    "id": "504",
    "nome": "Ultrasupry Q10",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento à base de coenzima Q10.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H7"
    ]
  },
  {
    "id": "505",
    "nome": "Ômega 3 Ultrasupry",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de ácidos graxos ômega 3.",
    "categoria": "Suplemento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H8"
    ]
  },
  {
    "id": "506",
    "nome": "Psyllium",
    "principio_ativo": "Psyllium",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Fibra alimentar para auxiliar o funcionamento intestinal.",
    "categoria": "Fibra alimentar",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H8",
      "H10"
    ]
  },
  {
    "id": "507",
    "nome": "Cúrcuma",
    "principio_ativo": "Cúrcuma",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento vegetal para complementar a alimentação.",
    "categoria": "Suplemento vegetal",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H8"
    ]
  },
  {
    "id": "508",
    "nome": "Ultrasupry B12",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de vitamina B12.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H9"
    ]
  },
  {
    "id": "509",
    "nome": "Ultracaps Magnésio PA",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento mineral à base de magnésio.",
    "categoria": "Mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H9"
    ]
  },
  {
    "id": "510",
    "nome": "B Complex",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Vitaminas do complexo B.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H9"
    ]
  },
  {
    "id": "511",
    "nome": "Vitamina K2 + D3",
    "principio_ativo": "Vitamina K2 + vitamina D3",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Vitaminas ligadas ao metabolismo do cálcio e à saúde óssea.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H9"
    ]
  },
  {
    "id": "512",
    "nome": "Óleo de Coco",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Origem vegetal, usado como alimento ou suplemento, conforme apresentação.",
    "categoria": "Suplemento vegetal",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H10"
    ]
  },
  {
    "id": "513",
    "nome": "Ultrasupry Magnésio",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento mineral à base de magnésio.",
    "categoria": "Mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H10"
    ]
  },
  {
    "id": "514",
    "nome": "Probio Supry",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Probiótico para auxiliar o equilíbrio da microbiota intestinal.",
    "categoria": "Probiótico",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H10"
    ]
  },
  {
    "id": "515",
    "nome": "Lactulose",
    "principio_ativo": "Lactulose",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Laxante osmótico para constipação; também tem indicação em certas condições hepáticas.",
    "categoria": "Laxante",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H10"
    ]
  },
  {
    "id": "516",
    "nome": "Vitamina C",
    "principio_ativo": "Vitamina C",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Vitamina com ação antioxidante.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H11"
    ]
  },
  {
    "id": "517",
    "nome": "Vitamina C Ultrasupry",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de vitamina C.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H11"
    ]
  },
  {
    "id": "518",
    "nome": "Multivitamínico A-Z",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Suplemento de vitaminas e minerais.",
    "categoria": "Vitamina / mineral",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras E-H",
    "prateleiras": [
      "H11"
    ]
  },
  {
    "id": "519",
    "nome": "Hemifumarato de bisoprolol 5 mg — 30 comprimidos",
    "principio_ativo": "Hemifumarato de bisoprolol",
    "concentracao": "5 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B1"
    ]
  },
  {
    "id": "520",
    "nome": "Bisoprolol 10 mg — 30 unidades",
    "principio_ativo": "Bisoprolol",
    "concentracao": "10 mg",
    "apresentacao": "30 unidades",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B1"
    ]
  },
  {
    "id": "521",
    "nome": "Bisoprolol 10 mg Medley",
    "principio_ativo": "Bisoprolol",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B1"
    ]
  },
  {
    "id": "522",
    "nome": "Tartarato de brimonidina",
    "principio_ativo": "Tartarato de brimonidina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Colírio para glaucoma/pressão do olho. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B1"
    ]
  },
  {
    "id": "523",
    "nome": "Cloridrato de bromexina 8 mg/5 ml",
    "principio_ativo": "Cloridrato de bromexina",
    "concentracao": "8 mg/5 ml",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Expectorante/mucolítico: tosse com secreção. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B1"
    ]
  },
  {
    "id": "524",
    "nome": "Bromoprida — registro informado como 200 ml",
    "principio_ativo": "Bromoprida",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Contra enjoo, náuseas e vômitos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B1"
    ]
  },
  {
    "id": "525",
    "nome": "Digestina 4 mg e 10 mg",
    "principio_ativo": "Bromoprida",
    "concentracao": "4 mg e 10 mg",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Contra enjoo, náuseas e vômitos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B1"
    ]
  },
  {
    "id": "526",
    "nome": "Bromoprida 10 mg",
    "principio_ativo": "Bromoprida",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Contra enjoo, náuseas e vômitos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "527",
    "nome": "Maleato de bronfeniramina + cloridrato de fenilefrina (informado 12 mg + 15 mg)",
    "principio_ativo": "Maleato de bronfeniramina + cloridrato de fenilefrina",
    "concentracao": "12 mg + 15 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "528",
    "nome": "Apresentação de 120 ml — nome do produto a confirmar",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "120 ml",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "529",
    "nome": "Budesonida 32 e 64",
    "principio_ativo": "Budesonida",
    "concentracao": "32 e 64",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Respiratório: asma, bronquite ou rinite. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "530",
    "nome": "Cabergolina 0,5 mg",
    "principio_ativo": "Cabergolina",
    "concentracao": "0,5 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Reduz a prolactina (hormônio). (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "531",
    "nome": "Candesartana cilexetila 16 mg",
    "principio_ativo": "Candesartana cilexetila",
    "concentracao": "16 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "532",
    "nome": "Candesartana cilexetila 16 mg + hidroclorotiazida 12,5 mg",
    "principio_ativo": "Candesartana cilexetila + hidroclorotiazida",
    "concentracao": "16 mg + 12,5 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B2"
    ]
  },
  {
    "id": "533",
    "nome": "Captopril 25 mg — 30 comprimidos",
    "principio_ativo": "Captopril",
    "concentracao": "25 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "534",
    "nome": "Captopril 25 mg — quantidade informada: 8 unidades",
    "principio_ativo": "Captopril",
    "concentracao": "25 mg",
    "apresentacao": "8 unidades",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "535",
    "nome": "Carbocisteína 50 mg/ml — sabor framboesa",
    "principio_ativo": "Carbocisteína",
    "concentracao": "50 mg/ml",
    "apresentacao": "sabor framboesa",
    "fabricante": "",
    "para_que_serve": "Expectorante/mucolítico: tosse com secreção. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "536",
    "nome": "Carvedilol 3,125 mg — 30 comprimidos",
    "principio_ativo": "Carvedilol",
    "concentracao": "3,125 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "537",
    "nome": "Carvedilol 6,25 mg",
    "principio_ativo": "Carvedilol",
    "concentracao": "6,25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B3"
    ]
  },
  {
    "id": "538",
    "nome": "Carvedilol 6,25 mg",
    "principio_ativo": "Carvedilol",
    "concentracao": "6,25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B4"
    ]
  },
  {
    "id": "539",
    "nome": "Cetoconazol 20 mg/g — bisnaga",
    "principio_ativo": "Cetoconazol",
    "concentracao": "20 mg/g",
    "apresentacao": "bisnaga",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B4"
    ]
  },
  {
    "id": "540",
    "nome": "Cetoconazol 200 mg — informado como shampoo",
    "principio_ativo": "Cetoconazol",
    "concentracao": "200 mg",
    "apresentacao": "shampoo",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B4"
    ]
  },
  {
    "id": "541",
    "nome": "Cetoconazol + dipropionato de betametasona — bisnaga de 30 g",
    "principio_ativo": "Cetoconazol + dipropionato de betametasona",
    "concentracao": "",
    "apresentacao": "bisnaga de 30 g",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B5"
    ]
  },
  {
    "id": "542",
    "nome": "Cetobeta 30 mg (provável bisnaga de 30 g)",
    "principio_ativo": "Cetoconazol + dipropionato de betametasona + sulfato de neomicina",
    "concentracao": "20 mg/g + 0,64 mg/g + 2,5 mg/g",
    "apresentacao": "bisnaga de 30 g (creme ou pomada)",
    "fabricante": "Cellera",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B5"
    ]
  },
  {
    "id": "543",
    "nome": "Cetoconazol 20 mg/g + dipropionato de betametasona 0,64 mg/g",
    "principio_ativo": "Cetoconazol + dipropionato de betametasona",
    "concentracao": "20 mg/g + 0,64 mg/g",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B5"
    ]
  },
  {
    "id": "544",
    "nome": "Cetoconazol + dipropionato de betametasona + sulfato de neomicina",
    "principio_ativo": "Cetoconazol + dipropionato de betametasona + sulfato de neomicina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B5"
    ]
  },
  {
    "id": "545",
    "nome": "Cetoprofeno 50 mg",
    "principio_ativo": "Cetoprofeno",
    "concentracao": "50 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B5"
    ]
  },
  {
    "id": "546",
    "nome": "Artrinid 50 mg",
    "principio_ativo": "Cetoprofeno",
    "concentracao": "50 mg",
    "apresentacao": "",
    "fabricante": "União Química",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B5"
    ]
  },
  {
    "id": "547",
    "nome": "Cetoprofeno — 24 cápsulas (informado 150 mg e 100 mg)",
    "principio_ativo": "Cetoprofeno",
    "concentracao": "150 mg e 100 mg",
    "apresentacao": "24 cápsulas",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B6"
    ]
  },
  {
    "id": "548",
    "nome": "Cetoprofeno 20 ml",
    "principio_ativo": "Cetoprofeno",
    "concentracao": "",
    "apresentacao": "20 ml",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B6"
    ]
  },
  {
    "id": "549",
    "nome": "Cetorolaco trometamol 10 mg",
    "principio_ativo": "Cetorolaco trometamol",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B6"
    ]
  },
  {
    "id": "550",
    "nome": "Cetorolaco trometamol 10 mg e 20 mg",
    "principio_ativo": "Cetorolaco trometamol",
    "concentracao": "10 mg e 20 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B7"
    ]
  },
  {
    "id": "551",
    "nome": "Cloridrato de ciclobenzaprina 5 mg e 10 mg",
    "principio_ativo": "Cloridrato de ciclobenzaprina",
    "concentracao": "5 mg e 10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Relaxante muscular. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B7"
    ]
  },
  {
    "id": "552",
    "nome": "Ciclopirox olamina (informado 10 mg e 15 ml)",
    "principio_ativo": "Ciclopirox olamina",
    "concentracao": "10 mg",
    "apresentacao": "15 ml",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B7"
    ]
  },
  {
    "id": "553",
    "nome": "Fluxon — 20 cápsulas",
    "principio_ativo": "Cinarizina",
    "concentracao": "",
    "apresentacao": "20 cápsulas",
    "fabricante": "Neo Química",
    "para_que_serve": "Tontura e vertigem. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B8"
    ]
  },
  {
    "id": "554",
    "nome": "Apresentações de 25 e 30 unidades — associar ao produto correto",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "25 e 30 unidades",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B8"
    ]
  },
  {
    "id": "555",
    "nome": "Cinarizina 25 mg",
    "principio_ativo": "Cinarizina",
    "concentracao": "25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tontura e vertigem. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B8"
    ]
  },
  {
    "id": "556",
    "nome": "Cimetidina 200 mg e 400 mg",
    "principio_ativo": "Cimetidina",
    "concentracao": "200 mg e 400 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Protetor do estômago: azia, gastrite e refluxo. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B8"
    ]
  },
  {
    "id": "557",
    "nome": "Cilostazol 100 mg — 60 comprimidos",
    "principio_ativo": "Cilostazol",
    "concentracao": "100 mg",
    "apresentacao": "60 comprimidos",
    "fabricante": "",
    "para_que_serve": "Anticoagulante/antiplaquetário: previne formação de coágulos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B8"
    ]
  },
  {
    "id": "558",
    "nome": "Cilostazol 50 mg — 60 comprimidos",
    "principio_ativo": "Cilostazol",
    "concentracao": "50 mg",
    "apresentacao": "60 comprimidos",
    "fabricante": "",
    "para_que_serve": "Anticoagulante/antiplaquetário: previne formação de coágulos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B8"
    ]
  },
  {
    "id": "559",
    "nome": "Cinarizina 75 mg",
    "principio_ativo": "Cinarizina",
    "concentracao": "75 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tontura e vertigem. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B9"
    ]
  },
  {
    "id": "560",
    "nome": "Ciprofibrato 100 mg — 30 cápsulas",
    "principio_ativo": "Ciprofibrato",
    "concentracao": "100 mg",
    "apresentacao": "30 cápsulas",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B9"
    ]
  },
  {
    "id": "561",
    "nome": "Ciprofibrato 100 mg — 60 cápsulas",
    "principio_ativo": "Ciprofibrato",
    "concentracao": "100 mg",
    "apresentacao": "60 cápsulas",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B9"
    ]
  },
  {
    "id": "562",
    "nome": "Propionato de clobetasol (informado 0,5 mg, gotas)",
    "principio_ativo": "Propionato de clobetasol",
    "concentracao": "0,5 mg",
    "apresentacao": "gotas",
    "fabricante": "",
    "para_que_serve": "Corticoide anti-inflamatório (geralmente de uso na pele ou antialérgico). (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B9"
    ]
  },
  {
    "id": "563",
    "nome": "Fendizoato de cloperastina 3,54 mg/ml",
    "principio_ativo": "Fendizoato de cloperastina",
    "concentracao": "3,54 mg/ml",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antitússico: alivia a tosse. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B9"
    ]
  },
  {
    "id": "564",
    "nome": "Clotrimazol 20 mg/g",
    "principio_ativo": "Clotrimazol",
    "concentracao": "20 mg/g",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B10"
    ]
  },
  {
    "id": "565",
    "nome": "Clotrimazol 10 mg/g",
    "principio_ativo": "Clotrimazol",
    "concentracao": "10 mg/g",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B10"
    ]
  },
  {
    "id": "566",
    "nome": "Clortalidona 25 mg — 30 comprimidos",
    "principio_ativo": "Clortalidona",
    "concentracao": "25 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Diurético: pressão alta e retenção de líquidos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B10"
    ]
  },
  {
    "id": "567",
    "nome": "Bissulfato de clopidogrel 75 mg — 28 ou 56 comprimidos",
    "principio_ativo": "Bissulfato de clopidogrel",
    "concentracao": "75 mg",
    "apresentacao": "28 ou 56 comprimidos",
    "fabricante": "",
    "para_que_serve": "Anticoagulante/antiplaquetário: previne formação de coágulos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B10"
    ]
  },
  {
    "id": "568",
    "nome": "Clotrimazol 10 mg/g — bisnaga",
    "principio_ativo": "Clotrimazol",
    "concentracao": "10 mg/g",
    "apresentacao": "bisnaga",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "569",
    "nome": "Cixin 0,5 mg — 30 unidades",
    "principio_ativo": "Colchicina",
    "concentracao": "0,5 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "Geolab",
    "para_que_serve": "Gota e controle do ácido úrico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "570",
    "nome": "Colchicina 0,5 mg — 30 comprimidos",
    "principio_ativo": "Colchicina",
    "concentracao": "0,5 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Gota e controle do ácido úrico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "571",
    "nome": "Dapagliflozina 10 mg",
    "principio_ativo": "Dapagliflozina",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diabetes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "572",
    "nome": "Dapagliflozina + cloridrato de metformina 10 mg + 1.000 mg",
    "principio_ativo": "Dapagliflozina + cloridrato de metformina",
    "concentracao": "10 mg + 1.000 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diabetes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B11"
    ]
  },
  {
    "id": "573",
    "nome": "Desloratadina 5 mg — 10 comprimidos",
    "principio_ativo": "Desloratadina",
    "concentracao": "5 mg",
    "apresentacao": "10 comprimidos",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B12"
    ]
  },
  {
    "id": "574",
    "nome": "Desloratadina xarope 0,5 mg/ml",
    "principio_ativo": "Desloratadina",
    "concentracao": "0,5 mg/ml",
    "apresentacao": "xarope",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "B12"
    ]
  },
  {
    "id": "575",
    "nome": "Desloratadina 5 mg — 30 comprimidos",
    "principio_ativo": "Desloratadina",
    "concentracao": "5 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C1"
    ]
  },
  {
    "id": "576",
    "nome": "Desloratadina xarope",
    "principio_ativo": "Desloratadina",
    "concentracao": "",
    "apresentacao": "xarope",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C1"
    ]
  },
  {
    "id": "577",
    "nome": "Desomida — bisnaga de 30 g",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "bisnaga de 30 g",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C1"
    ]
  },
  {
    "id": "578",
    "nome": "Dexametasona 0,5 mg — elixir",
    "principio_ativo": "Dexametasona",
    "concentracao": "0,5 mg",
    "apresentacao": "elixir",
    "fabricante": "",
    "para_que_serve": "Corticoide: anti-inflamatório e antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C1"
    ]
  },
  {
    "id": "579",
    "nome": "Acetato de dexametasona — 10 g",
    "principio_ativo": "Acetato de dexametasona",
    "concentracao": "",
    "apresentacao": "10 g",
    "fabricante": "",
    "para_que_serve": "Corticoide: anti-inflamatório e antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C1"
    ]
  },
  {
    "id": "580",
    "nome": "Dexametasona",
    "principio_ativo": "Dexametasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Corticoide: anti-inflamatório e antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C2"
    ]
  },
  {
    "id": "581",
    "nome": "Maleato de dexclorfeniramina 2 mg",
    "principio_ativo": "Maleato de dexclorfeniramina",
    "concentracao": "2 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C2"
    ]
  },
  {
    "id": "582",
    "nome": "Dexclorfeniramina 0,4 mg",
    "principio_ativo": "Dexclorfeniramina",
    "concentracao": "0,4 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C2"
    ]
  },
  {
    "id": "583",
    "nome": "Hislor 0,4 mg/mL",
    "principio_ativo": "Maleato de dexclorfeniramina",
    "concentracao": "0,4 mg/mL",
    "apresentacao": "solução oral",
    "fabricante": "União Química",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C2"
    ]
  },
  {
    "id": "584",
    "nome": "Hystin",
    "principio_ativo": "Maleato de dexclorfeniramina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Geolab",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C2"
    ]
  },
  {
    "id": "585",
    "nome": "Alergidex",
    "principio_ativo": "Maleato de dexclorfeniramina + betametasona",
    "concentracao": "0,4 mg/mL + 0,05 mg/mL",
    "apresentacao": "xarope 120 mL",
    "fabricante": "Neo Química",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C2"
    ]
  },
  {
    "id": "586",
    "nome": "Maleato de dexclorfeniramina + betametasona",
    "principio_ativo": "Maleato de dexclorfeniramina + betametasona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C2"
    ]
  },
  {
    "id": "587",
    "nome": "Maleato de dexclorfeniramina + betametasona (informado 0,25 mg)",
    "principio_ativo": "Maleato de dexclorfeniramina + betametasona",
    "concentracao": "0,25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C3"
    ]
  },
  {
    "id": "588",
    "nome": "Depantex",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C3"
    ]
  },
  {
    "id": "589",
    "nome": "Dexprotenol",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cicatrizante e hidratante da pele. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C3"
    ]
  },
  {
    "id": "590",
    "nome": "Fenaren gel",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "gel",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C3"
    ]
  },
  {
    "id": "591",
    "nome": "Diclofenaco dietilamônio",
    "principio_ativo": "Diclofenaco dietilamônio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C3"
    ]
  },
  {
    "id": "592",
    "nome": "Fenaflan e Fenaflan D",
    "principio_ativo": "Diclofenaco",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Teuto",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C3"
    ]
  },
  {
    "id": "593",
    "nome": "Poltax",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C3"
    ]
  },
  {
    "id": "594",
    "nome": "Sodix 50 mg",
    "principio_ativo": "Diclofenaco sódico",
    "concentracao": "50 mg",
    "apresentacao": "20 comprimidos revestidos",
    "fabricante": "Geolab",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C4"
    ]
  },
  {
    "id": "595",
    "nome": "Belfaren 50 mg",
    "principio_ativo": "Diclofenaco sódico",
    "concentracao": "50 mg",
    "apresentacao": "20 comprimidos revestidos",
    "fabricante": "Belfar",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C4"
    ]
  },
  {
    "id": "596",
    "nome": "Diclofenaco potássico",
    "principio_ativo": "Diclofenaco potássico",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C4"
    ]
  },
  {
    "id": "597",
    "nome": "Diclac SR 75 mg",
    "principio_ativo": "",
    "concentracao": "75 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C5"
    ]
  },
  {
    "id": "598",
    "nome": "Diclofenaco sódico 20 mg",
    "principio_ativo": "Diclofenaco sódico",
    "concentracao": "20 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C5"
    ]
  },
  {
    "id": "599",
    "nome": "Flexalgin",
    "principio_ativo": "Diclofenaco sódico + carisoprodol + paracetamol + cafeína",
    "concentracao": "50 mg + 125 mg + 300 mg + 30 mg",
    "apresentacao": "15 ou 30 comprimidos",
    "fabricante": "Geolab",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C5"
    ]
  },
  {
    "id": "600",
    "nome": "Tandriflan",
    "principio_ativo": "Diclofenaco sódico + carisoprodol + paracetamol + cafeína",
    "concentracao": "50 mg + 125 mg + 300 mg + 30 mg",
    "apresentacao": "15 ou 30 comprimidos",
    "fabricante": "União Química",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C5"
    ]
  },
  {
    "id": "601",
    "nome": "Infralax — 16 unidades",
    "principio_ativo": "Diclofenaco sódico + carisoprodol + paracetamol + cafeína",
    "concentracao": "50 mg + 125 mg + 300 mg + 30 mg",
    "apresentacao": "16 unidades (informado)",
    "fabricante": "EMS",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C5"
    ]
  },
  {
    "id": "602",
    "nome": "Tandene 25 mg",
    "principio_ativo": "",
    "concentracao": "25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C5"
    ]
  },
  {
    "id": "603",
    "nome": "Sandoz / Trilax — 30 unidades",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "30 unidades",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C6"
    ]
  },
  {
    "id": "604",
    "nome": "Digoxina 0,25 mg",
    "principio_ativo": "Digoxina",
    "concentracao": "0,25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Insuficiência cardíaca e arritmias. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C6"
    ]
  },
  {
    "id": "605",
    "nome": "Cloridrato de diltiazem",
    "principio_ativo": "Cloridrato de diltiazem",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C6"
    ]
  },
  {
    "id": "606",
    "nome": "Nalsicalm",
    "principio_ativo": "Dimenidrinato",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Contra enjoo, náuseas e vômitos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C6"
    ]
  },
  {
    "id": "607",
    "nome": "Dipirona monoidratada 500 mg",
    "principio_ativo": "Dipirona monoidratada",
    "concentracao": "500 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C6"
    ]
  },
  {
    "id": "608",
    "nome": "Dipirona 500 mg",
    "principio_ativo": "Dipirona",
    "concentracao": "500 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C6"
    ]
  },
  {
    "id": "609",
    "nome": "Maxalgina 20 ml",
    "principio_ativo": "Dipirona monoidratada",
    "concentracao": "500 mg/mL",
    "apresentacao": "gotas, 20 mL",
    "fabricante": "Natulab",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C7"
    ]
  },
  {
    "id": "610",
    "nome": "Dipirona xarope",
    "principio_ativo": "Dipirona",
    "concentracao": "",
    "apresentacao": "xarope",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C7"
    ]
  },
  {
    "id": "611",
    "nome": "Maxalgina",
    "principio_ativo": "Dipirona monoidratada",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "Natulab",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C8"
    ]
  },
  {
    "id": "612",
    "nome": "Dipirona 1 g",
    "principio_ativo": "Dipirona",
    "concentracao": "1 g",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C8"
    ]
  },
  {
    "id": "613",
    "nome": "Dipirona + cafeína 500 mg",
    "principio_ativo": "Dipirona + cafeína",
    "concentracao": "500 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C8"
    ]
  },
  {
    "id": "614",
    "nome": "Dorilen",
    "principio_ativo": "Dipirona + cloridrato de adifenina + cloridrato de prometazina",
    "concentracao": "500 mg + 10 mg + 5 mg",
    "apresentacao": "comprimidos ou gotas",
    "fabricante": "Legrand",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C8"
    ]
  },
  {
    "id": "615",
    "nome": "Dropropizina 3 mg",
    "principio_ativo": "Dropropizina",
    "concentracao": "3 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antitússico: alivia a tosse. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C9"
    ]
  },
  {
    "id": "616",
    "nome": "Doxaprost 4 mg",
    "principio_ativo": "Mesilato de doxazosina",
    "concentracao": "4 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "União Química",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C9"
    ]
  },
  {
    "id": "617",
    "nome": "Mesilato de doxazosina 4 mg",
    "principio_ativo": "Mesilato de doxazosina",
    "concentracao": "4 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C9"
    ]
  },
  {
    "id": "618",
    "nome": "Mesilato de doxazosina + maleato de timolol",
    "principio_ativo": "Mesilato de doxazosina + maleato de timolol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C9"
    ]
  },
  {
    "id": "619",
    "nome": "Domperidona",
    "principio_ativo": "Domperidona",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Contra enjoo, náuseas e vômitos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C9"
    ]
  },
  {
    "id": "620",
    "nome": "Empagliflozina",
    "principio_ativo": "Empagliflozina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diabetes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "621",
    "nome": "Maleato de enalapril",
    "principio_ativo": "Maleato de enalapril",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "622",
    "nome": "Esomeprazol magnésico",
    "principio_ativo": "Esomeprazol magnésico",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Protetor do estômago: azia, gastrite e refluxo. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C10"
    ]
  },
  {
    "id": "623",
    "nome": "Estriol",
    "principio_ativo": "Estriol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Hormonal: sintomas da menopausa. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C11"
    ]
  },
  {
    "id": "624",
    "nome": "Etofolaco (provável etodolaco)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C11"
    ]
  },
  {
    "id": "625",
    "nome": "Espironolactona 100 mg e 50 mg",
    "principio_ativo": "Espironolactona",
    "concentracao": "100 mg e 50 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diurético: pressão alta e retenção de líquidos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C11"
    ]
  },
  {
    "id": "626",
    "nome": "Esomeprazol magnésico",
    "principio_ativo": "Esomeprazol magnésico",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Protetor do estômago: azia, gastrite e refluxo. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C11"
    ]
  },
  {
    "id": "627",
    "nome": "Etodolaco 500 mg",
    "principio_ativo": "Etodolaco",
    "concentracao": "500 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C12"
    ]
  },
  {
    "id": "628",
    "nome": "Ezetimiba 10 mg",
    "principio_ativo": "Ezetimiba",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C12"
    ]
  },
  {
    "id": "629",
    "nome": "Ezetimiba + sinvastatina",
    "principio_ativo": "Ezetimiba + sinvastatina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C12"
    ]
  },
  {
    "id": "630",
    "nome": "Fenofibrato",
    "principio_ativo": "Fenofibrato",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "C12"
    ]
  },
  {
    "id": "631",
    "nome": "Alexofedrin",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D1"
    ]
  },
  {
    "id": "632",
    "nome": "Cloridrato de fexofenadina 6 mg",
    "principio_ativo": "Cloridrato de fexofenadina",
    "concentracao": "6 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D1"
    ]
  },
  {
    "id": "633",
    "nome": "Cloridrato de fexofenadina 120 mg",
    "principio_ativo": "Cloridrato de fexofenadina",
    "concentracao": "120 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D1"
    ]
  },
  {
    "id": "634",
    "nome": "Finasterida 5 mg — 60 comprimidos",
    "principio_ativo": "Finasterida",
    "concentracao": "5 mg",
    "apresentacao": "60 comprimidos",
    "fabricante": "",
    "para_que_serve": "Queda de cabelo masculina e/ou próstata. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D2"
    ]
  },
  {
    "id": "635",
    "nome": "Cloridrato de fexofenadina",
    "principio_ativo": "Cloridrato de fexofenadina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D2"
    ]
  },
  {
    "id": "636",
    "nome": "Fluxonid",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D3"
    ]
  },
  {
    "id": "637",
    "nome": "Fluconazol 250 mg e 100 mg",
    "principio_ativo": "Fluconazol",
    "concentracao": "250 mg e 100 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D3"
    ]
  },
  {
    "id": "638",
    "nome": "Fluconazol 150 mg",
    "principio_ativo": "Fluconazol",
    "concentracao": "150 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D4"
    ]
  },
  {
    "id": "639",
    "nome": "Fluconid c/1 cápsula",
    "principio_ativo": "Fluconazol",
    "concentracao": "150 mg",
    "apresentacao": "1 cápsula",
    "fabricante": "Vitamedic",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "640",
    "nome": "Fluconid c/2 cápsulas",
    "principio_ativo": "Fluconazol",
    "concentracao": "150 mg por cápsula",
    "apresentacao": "2 cápsulas",
    "fabricante": "Vitamedic",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "641",
    "nome": "Fluxonazol 150 mg (provável fluconazol)",
    "principio_ativo": "",
    "concentracao": "150 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "642",
    "nome": "Dicloridrato de flunarizina",
    "principio_ativo": "Dicloridrato de flunarizina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tontura e vertigem. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "643",
    "nome": "Vertigium c/50 comprimidos",
    "principio_ativo": "Dicloridrato de flunarizina",
    "concentracao": "10 mg",
    "apresentacao": "50 comprimidos",
    "fabricante": "Neo Química",
    "para_que_serve": "Tontura e vertigem. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "644",
    "nome": "Vertizan c/50 comprimidos",
    "principio_ativo": "Dicloridrato de flunarizina",
    "concentracao": "10 mg",
    "apresentacao": "50 comprimidos",
    "fabricante": "Vitamedic",
    "para_que_serve": "Tontura e vertigem. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "645",
    "nome": "Furosemida 40 mg",
    "principio_ativo": "Furosemida",
    "concentracao": "40 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diurético: pressão alta e retenção de líquidos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "646",
    "nome": "Genfibrozila 600 mg e 900 mg",
    "principio_ativo": "Genfibrozila",
    "concentracao": "600 mg e 900 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D5"
    ]
  },
  {
    "id": "647",
    "nome": "Glibenclamida 5 mg — 30 comprimidos",
    "principio_ativo": "Glibenclamida",
    "concentracao": "5 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Diabetes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "648",
    "nome": "Gliclazida 30 mg",
    "principio_ativo": "Gliclazida",
    "concentracao": "30 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diabetes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "649",
    "nome": "Glimepirida 2 mg",
    "principio_ativo": "Glimepirida",
    "concentracao": "2 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diabetes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "650",
    "nome": "Sulfato de glicosamina 1,5 g — 30 unidades",
    "principio_ativo": "Sulfato de glicosamina",
    "concentracao": "1,5 g",
    "apresentacao": "30 unidades",
    "fabricante": "",
    "para_que_serve": "Suplemento para articulações. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D6"
    ]
  },
  {
    "id": "651",
    "nome": "Hidroclorotiazida 25 mg — 30 comprimidos",
    "principio_ativo": "Hidroclorotiazida",
    "concentracao": "25 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "",
    "para_que_serve": "Diurético: pressão alta e retenção de líquidos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "652",
    "nome": "Acetato de hidrocortisona 10 mg",
    "principio_ativo": "Acetato de hidrocortisona",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Corticoide: anti-inflamatório e antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "653",
    "nome": "Hidroquinona — bisnaga de 30 g",
    "principio_ativo": "Hidroquinona",
    "concentracao": "",
    "apresentacao": "bisnaga de 30 g",
    "fabricante": "",
    "para_que_serve": "Clareador de manchas na pele. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D7"
    ]
  },
  {
    "id": "654",
    "nome": "Sulfato de hidroxicloroquina 400 mg",
    "principio_ativo": "Sulfato de hidroxicloroquina",
    "concentracao": "400 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Malária, lúpus e artrite reumatoide. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D8"
    ]
  },
  {
    "id": "655",
    "nome": "Hidróxido de alumínio",
    "principio_ativo": "Hidróxido de alumínio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Protetor do estômago: azia, gastrite e refluxo. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D8"
    ]
  },
  {
    "id": "656",
    "nome": "Alumimax 100 mL",
    "principio_ativo": "Hidróxido de alumínio",
    "concentracao": "",
    "apresentacao": "frasco de 100 mL",
    "fabricante": "Natulab",
    "para_que_serve": "Protetor do estômago: azia, gastrite e refluxo. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D8"
    ]
  },
  {
    "id": "657",
    "nome": "Dicloridrato de hidroxizina 2 mg",
    "principio_ativo": "Dicloridrato de hidroxizina",
    "concentracao": "2 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D8"
    ]
  },
  {
    "id": "658",
    "nome": "Ibupril 400 mg",
    "principio_ativo": "",
    "concentracao": "400 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D8"
    ]
  },
  {
    "id": "659",
    "nome": "Ibandronato de sódio",
    "principio_ativo": "Ibandronato de sódio",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tratamento da osteoporose. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D8"
    ]
  },
  {
    "id": "660",
    "nome": "Ibuprofeno + dicloridrato de hidroxizina",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D8"
    ]
  },
  {
    "id": "661",
    "nome": "Ibuprofeno 400 mg",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "400 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "662",
    "nome": "Ibupril 600 mg",
    "principio_ativo": "",
    "concentracao": "600 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "663",
    "nome": "Ibuprotrat Infantil 100 mL",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "20 mg/mL",
    "apresentacao": "100 mL (suspensão ou solução oral)",
    "fabricante": "Natulab",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "664",
    "nome": "Ibuprotrat gotas 30 mL",
    "principio_ativo": "Ibuprofeno",
    "concentracao": "50 mg/mL",
    "apresentacao": "gotas, 30 mL",
    "fabricante": "Natulab",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D9"
    ]
  },
  {
    "id": "665",
    "nome": "Brometo de ipratrópio 0,25 mg",
    "principio_ativo": "Brometo de ipratrópio",
    "concentracao": "0,25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Respiratório: asma, bronquite ou rinite. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D10"
    ]
  },
  {
    "id": "666",
    "nome": "Indapamida 1,5 mg",
    "principio_ativo": "Indapamida",
    "concentracao": "1,5 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diurético: pressão alta e retenção de líquidos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D10"
    ]
  },
  {
    "id": "667",
    "nome": "Indapamida 1,5 mg (segundo registro, consta na lista original)",
    "principio_ativo": "Indapamida",
    "concentracao": "1,5 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diurético: pressão alta e retenção de líquidos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D10"
    ]
  },
  {
    "id": "668",
    "nome": "Brometo de ipratrópio 0,25 mg",
    "principio_ativo": "Brometo de ipratrópio",
    "concentracao": "0,25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Respiratório: asma, bronquite ou rinite. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D11"
    ]
  },
  {
    "id": "669",
    "nome": "Irbesartana + hidroclorotiazida 300 mg + 12,5 mg",
    "principio_ativo": "Irbesartana + hidroclorotiazida",
    "concentracao": "300 mg + 12,5 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D11"
    ]
  },
  {
    "id": "670",
    "nome": "Gen Isossorbida c/30 comprimidos",
    "principio_ativo": "Mononitrato de isossorbida",
    "concentracao": "20 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "Biolab Gen",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D11"
    ]
  },
  {
    "id": "671",
    "nome": "Gen Isossorbida c/30 comprimidos",
    "principio_ativo": "Mononitrato de isossorbida",
    "concentracao": "40 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "Biosintética",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D11"
    ]
  },
  {
    "id": "672",
    "nome": "Gen Isossorbida c/30 comprimidos",
    "principio_ativo": "Mononitrato de isossorbida",
    "concentracao": "20 mg",
    "apresentacao": "30 comprimidos",
    "fabricante": "Biosintética",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D11"
    ]
  },
  {
    "id": "673",
    "nome": "Itraconazol",
    "principio_ativo": "Itraconazol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico: infecções causadas por fungos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D11"
    ]
  },
  {
    "id": "674",
    "nome": "Tramadol",
    "principio_ativo": "Tramadol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico para dor intensa. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D11"
    ]
  },
  {
    "id": "675",
    "nome": "Dicloridrato de levocetirizina",
    "principio_ativo": "Dicloridrato de levocetirizina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D12"
    ]
  },
  {
    "id": "676",
    "nome": "Montelucaste de sódio 10 mg",
    "principio_ativo": "Montelucaste de sódio",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Respiratório: asma, bronquite ou rinite. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D12"
    ]
  },
  {
    "id": "677",
    "nome": "Besilato de levanlodipino",
    "principio_ativo": "Besilato de levanlodipino",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D12"
    ]
  },
  {
    "id": "678",
    "nome": "Letrozol",
    "principio_ativo": "Letrozol",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tratamento hormonal do câncer de mama. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D12"
    ]
  },
  {
    "id": "679",
    "nome": "Ivermectina",
    "principio_ativo": "Ivermectina",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiparasitário: vermes e outros parasitas. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "D12"
    ]
  },
  {
    "id": "680",
    "nome": "Aggigrip Duo c/6 comprimidos",
    "principio_ativo": "Dipirona monoidratada + cafeína (e demais componentes da fórmula)",
    "concentracao": "",
    "apresentacao": "6 comprimidos",
    "fabricante": "Pharlab",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "681",
    "nome": "Aggigrip Duo c/12 comprimidos",
    "principio_ativo": "Dipirona monoidratada + cafeína (e demais componentes da fórmula)",
    "concentracao": "",
    "apresentacao": "12 comprimidos",
    "fabricante": "Pharlab",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "682",
    "nome": "Apracur c/6 comprimidos",
    "principio_ativo": "Dipirona + clorfeniramina + ácido ascórbico",
    "concentracao": "",
    "apresentacao": "6 comprimidos",
    "fabricante": "Hypera Pharma",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "683",
    "nome": "Apracur Duo c/12 comprimidos",
    "principio_ativo": "Dipirona + clorfeniramina + ácido ascórbico",
    "concentracao": "500 mg + 2 mg + 30 mg",
    "apresentacao": "12 comprimidos",
    "fabricante": "Hypera Pharma",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "684",
    "nome": "Apracur Duo c/6 comprimidos",
    "principio_ativo": "Dipirona + clorfeniramina + ácido ascórbico",
    "concentracao": "500 mg + 2 mg + 30 mg",
    "apresentacao": "6 comprimidos",
    "fabricante": "Hypera Pharma",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "685",
    "nome": "Naldecon Dia/Noite c/6 comprimidos",
    "principio_ativo": "Paracetamol + cloridrato de fenilefrina",
    "concentracao": "",
    "apresentacao": "6 comprimidos",
    "fabricante": "Reckitt",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "686",
    "nome": "Naldecon Multi c/16 comprimidos",
    "principio_ativo": "Paracetamol + cloridrato de fenilefrina",
    "concentracao": "",
    "apresentacao": "16 comprimidos",
    "fabricante": "Reckitt",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "687",
    "nome": "Naldecon Pack Dia/Noite c/24 comprimidos",
    "principio_ativo": "Paracetamol + cloridrato de fenilefrina",
    "concentracao": "",
    "apresentacao": "24 comprimidos",
    "fabricante": "Reckitt",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "688",
    "nome": "Naldecon Noite c/24 comprimidos",
    "principio_ativo": "Paracetamol + maleato de carbinoxamina",
    "concentracao": "",
    "apresentacao": "24 comprimidos",
    "fabricante": "Reckitt",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "689",
    "nome": "Aspirina",
    "principio_ativo": "Ácido acetilsalicílico",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Prateleiras B-E1",
    "prateleiras": [
      "E1"
    ]
  },
  {
    "id": "690",
    "nome": "Flixotide Spray 60 doses",
    "principio_ativo": "Propionato de fluticasona",
    "concentracao": "250 mcg",
    "apresentacao": "spray, 60 doses",
    "fabricante": "GSK",
    "para_que_serve": "Respiratório: asma, bronquite ou rinite. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "sem_localizacao",
    "origem": "Prateleiras B-E1",
    "prateleiras": []
  },
  {
    "id": "691",
    "nome": "Acebrofilina 25 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Broncodilatador e expectorante: tosse com secreção. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A1"
    ]
  },
  {
    "id": "692",
    "nome": "Acetilcisteína xarope — 25 mg (confirmar concentração)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A1"
    ]
  },
  {
    "id": "693",
    "nome": "Acetilcisteína 50 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico: ajuda a fluidificar a secreção respiratória. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A1"
    ]
  },
  {
    "id": "694",
    "nome": "Acebrofilina xarope 50 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Broncodilatador e expectorante: tosse com secreção. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A1"
    ]
  },
  {
    "id": "695",
    "nome": "Aciclofenaco 15 mg (confirmar nome e dosagem)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A1"
    ]
  },
  {
    "id": "696",
    "nome": "Acetilcisteína 100 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico: ajuda a fluidificar a secreção respiratória. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A1"
    ]
  },
  {
    "id": "697",
    "nome": "Acetilcisteína 200 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico: ajuda a fluidificar a secreção respiratória. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A2"
    ]
  },
  {
    "id": "698",
    "nome": "Acetilcisteína 600 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico: ajuda a fluidificar a secreção respiratória. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A2"
    ]
  },
  {
    "id": "699",
    "nome": "Flucistein 600 mg (confirmar nome comercial)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A2"
    ]
  },
  {
    "id": "700",
    "nome": "Flucetil 600 mg (confirmar nome comercial)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A2"
    ]
  },
  {
    "id": "701",
    "nome": "Acetilcisteína 600 mg — sabor laranja",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico: ajuda a fluidificar a secreção respiratória. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A2"
    ]
  },
  {
    "id": "702",
    "nome": "Ecoflux NAC 600 mg — sabor laranja",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico: ajuda a fluidificar a secreção respiratória. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A3"
    ]
  },
  {
    "id": "703",
    "nome": "Acetilcisteína 600 mg — expectorante",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico: ajuda a fluidificar a secreção respiratória. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A3"
    ]
  },
  {
    "id": "704",
    "nome": "Acetilcisteína 20 mg — sabor framboesa",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Mucolítico: ajuda a fluidificar a secreção respiratória. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A3"
    ]
  },
  {
    "id": "705",
    "nome": "Acetilcisteína 40 mg — expectorante, sabor framboesa (confirmar concentração)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A3"
    ]
  },
  {
    "id": "706",
    "nome": "Aciclovir 200 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiviral: herpes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A3"
    ]
  },
  {
    "id": "707",
    "nome": "Aciclovir 200 mg — 25 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiviral: herpes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A3"
    ]
  },
  {
    "id": "708",
    "nome": "Aciclovir 200 mg — 50 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiviral: herpes. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A3"
    ]
  },
  {
    "id": "709",
    "nome": "Cicloverde 400 mg (confirmar nome comercial)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A4"
    ]
  },
  {
    "id": "710",
    "nome": "Ácido acetilsalicílico 100 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A4"
    ]
  },
  {
    "id": "711",
    "nome": "Ácido acetilsalicílico 100 mg — 30 comprimidos (segunda embalagem)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Analgésico e antitérmico: dor e febre. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A4"
    ]
  },
  {
    "id": "712",
    "nome": "Ácido mefenâmico 500 mg — 12 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório e analgésico: dor e inflamação. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A4"
    ]
  },
  {
    "id": "713",
    "nome": "Ácido tranexâmico 250 mg — 12 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifibrinolítico: ajuda a controlar sangramentos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A4"
    ]
  },
  {
    "id": "714",
    "nome": "Adapaleno 1 mg (confirmar concentração e apresentação)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A4"
    ]
  },
  {
    "id": "715",
    "nome": "Ácido ursodesoxicólico 300 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Fígado e vesícula: dissolve cálculos biliares. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A4"
    ]
  },
  {
    "id": "716",
    "nome": "Albendazol 40 mg (confirmar concentração e apresentação)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "717",
    "nome": "Albendazol 400 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiparasitário: vermes e outros parasitas. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "718",
    "nome": "Albendazol de uso oral 40 mg (confirmar concentração e apresentação)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "719",
    "nome": "Alendronato de sódio 70 mg — 4 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tratamento da osteoporose. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "720",
    "nome": "Alopurinol 100 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Gota e controle do ácido úrico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "721",
    "nome": "Alopurinol 100 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Gota e controle do ácido úrico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "722",
    "nome": "Alopurinol 100 mg — 60 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Gota e controle do ácido úrico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "723",
    "nome": "Alopurinol 300 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Gota e controle do ácido úrico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "724",
    "nome": "Alopurinol 300 mg — 30 comprimidos (segunda embalagem)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Gota e controle do ácido úrico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A5"
    ]
  },
  {
    "id": "725",
    "nome": "Alopurinol 300 mg — 60 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Gota e controle do ácido úrico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A6"
    ]
  },
  {
    "id": "726",
    "nome": "Cloridrato de ambroxol 15 mg — xarope, sabor framboesa",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Expectorante/mucolítico: tosse com secreção. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A6"
    ]
  },
  {
    "id": "727",
    "nome": "Cloridrato de ambroxol 30 mg — xarope infantil (confirmar sabor)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A6"
    ]
  },
  {
    "id": "728",
    "nome": "Cloridrato de ambroxol 30 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Expectorante/mucolítico: tosse com secreção. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A6"
    ]
  },
  {
    "id": "729",
    "nome": "Bronquetrate infantil 15 mg (confirmar nome e concentração)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "730",
    "nome": "Cloridrato de amilorida 5 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diurético: pressão alta e retenção de líquidos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "731",
    "nome": "Aminofilina 100 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Respiratório: asma, bronquite ou rinite. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "732",
    "nome": "Amiodarona 100 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiarrítmico: controle do ritmo do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "733",
    "nome": "Amiodarona 100 mg — 30 comprimidos (segunda embalagem)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiarrítmico: controle do ritmo do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "734",
    "nome": "Amiodarona 200 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antiarrítmico: controle do ritmo do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "735",
    "nome": "Anastrozol 1 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tratamento hormonal do câncer de mama. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "736",
    "nome": "Anastrozol 1 mg — 30 comprimidos (segunda embalagem)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tratamento hormonal do câncer de mama. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "737",
    "nome": "Besilato de anlodipino 5 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A7"
    ]
  },
  {
    "id": "738",
    "nome": "Besilato de anlodipino 5 mg — 60 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A8"
    ]
  },
  {
    "id": "739",
    "nome": "Besilato de anlodipino 10 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A8"
    ]
  },
  {
    "id": "740",
    "nome": "Besilato de anlodipino 10 mg — 60 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Cardiovascular: pressão alta e/ou problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A8"
    ]
  },
  {
    "id": "741",
    "nome": "Apixabana 2,5 mg — 20 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoagulante/antiplaquetário: previne formação de coágulos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A8"
    ]
  },
  {
    "id": "742",
    "nome": "Apixabana 2,5 mg — 60 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anticoagulante/antiplaquetário: previne formação de coágulos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A8"
    ]
  },
  {
    "id": "743",
    "nome": "Atenolol 25 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A8"
    ]
  },
  {
    "id": "744",
    "nome": "Atenolol 25 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A8"
    ]
  },
  {
    "id": "745",
    "nome": "Atenolol 50 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A8"
    ]
  },
  {
    "id": "746",
    "nome": "Atenolol 50 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "747",
    "nome": "Atenolol 25 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "748",
    "nome": "Atenolol 50 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "749",
    "nome": "Atenolol 100 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Betabloqueador: pressão alta e problemas do coração. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "750",
    "nome": "Atenolol + clortalidona — 30 comprimidos (confirmar concentrações)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "751",
    "nome": "Atenolol + clortalidona — 30 comprimidos (segunda embalagem; confirmar concentrações)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "752",
    "nome": "Atenolol + clortalidona — 60 comprimidos (confirmar concentrações)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "753",
    "nome": "Atorvastatina cálcica 10 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "754",
    "nome": "Atorvastatina cálcica 10 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "755",
    "nome": "Atorvastatina cálcica 20 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "756",
    "nome": "Atorvastatina cálcica 20 mg (segunda embalagem)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "757",
    "nome": "Atorvastatina cálcica 20 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "758",
    "nome": "Atorvastatina cálcica 40 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "759",
    "nome": "Atorvastatina cálcica 80 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "760",
    "nome": "Baclofeno 10 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Relaxante muscular. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "761",
    "nome": "Dipropionato de beclometasona 250 mcg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Respiratório: asma, bronquite ou rinite. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "762",
    "nome": "Benfotiamina 150 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Vitamina B1 (suplementação). (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A9"
    ]
  },
  {
    "id": "763",
    "nome": "Dicloridrato de betahistina 16 mg",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tontura e vertigem. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A11"
    ]
  },
  {
    "id": "764",
    "nome": "Dicloridrato de betahistina 24 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tontura e vertigem. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A11"
    ]
  },
  {
    "id": "765",
    "nome": "Medicamento em bisnaga de 30 g (nome não identificado)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A11"
    ]
  },
  {
    "id": "766",
    "nome": "Valerato de betametasona 1 mg (confirmar concentração e apresentação)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A11"
    ]
  },
  {
    "id": "767",
    "nome": "Dipropionato de betametasona 1 mg (confirmar concentração e apresentação)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A11"
    ]
  },
  {
    "id": "768",
    "nome": "Bezafibrato 200 mg — 20 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Controle de colesterol e triglicerídeos. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A11"
    ]
  },
  {
    "id": "769",
    "nome": "Bilastina 20 mg — 15 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A12"
    ]
  },
  {
    "id": "770",
    "nome": "Bilastina 20 mg — 30 comprimidos",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico. (classe geral do princípio ativo; conferir bula)",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A12"
    ]
  },
  {
    "id": "771",
    "nome": "Bimatoprosta 13 ml (confirmar volume e apresentação)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A12"
    ]
  },
  {
    "id": "772",
    "nome": "Hemifumarato de bisoprolol 1,5 mg — 30 cápsulas (confirmar dosagem)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A12"
    ]
  },
  {
    "id": "773",
    "nome": "Hemifumarato de bisoprolol 12,5 mg (confirmar dosagem e apresentação)",
    "principio_ativo": "",
    "concentracao": "",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Seguir a bula ou a receita médica. Dose e horário: confirmar com o farmacêutico.",
    "o_que_indicar": "Conferir tarja/receita na embalagem: pode exigir prescrição. Indicar somente com avaliação do farmacêutico (idade, gravidez, alergias, outros remédios em uso).",
    "situacao": "ativo",
    "origem": "Fileira A",
    "prateleiras": [
      "A12"
    ]
  },
  {
    "id": "774",
    "nome": "LEVOTIROXINA SÓDICA 25 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "25 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "775",
    "nome": "LEVOTIROXINA SÓDICA 50 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "50 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "776",
    "nome": "LEVOTIROXINA SÓDICA 75 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "75 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "777",
    "nome": "LEVOTIROXINA SÓDICA 88 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "88 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "778",
    "nome": "LEVOTIROXINA SÓDICA 100 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "100 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "779",
    "nome": "LEVOTIROXINA SÓDICA 112 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "112 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "780",
    "nome": "LEVOTIROXINA SÓDICA 125 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "125 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "781",
    "nome": "LEVOTIROXINA SÓDICA 150 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "150 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "782",
    "nome": "LEVOTIROXINA SÓDICA 175 MCG C/ 30CP",
    "principio_ativo": "Levotiroxina Sódica",
    "concentracao": "175 mcg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Merck / Sanofi",
    "para_que_serve": "Reposição hormonal no tratamento do hipotireoidismo e supressão do TSH.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir em jejum pela manhã com água, de 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo sem interrupções.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "783",
    "nome": "LIDOCAÍNA 50MG/G (5%) POMADA DERMATOLÓGICA",
    "principio_ativo": "Cloridrato de Lidocaína",
    "concentracao": "50 mg/g (5%)",
    "apresentacao": "Bisnaga com 25g",
    "fabricante": "Genérico / EMS / Neo Química",
    "para_que_serve": "Anestésico local de superfície para alívio temporário da dor e prurido causados por pequenas queimaduras, picadas de insetos e abrasões na pele.",
    "categoria": "Medicamento",
    "como_tomar": "Aplicar camada fina sobre a área afetada conforme recomendação médica ou da bula.",
    "o_que_indicar": "Uso tópico externo. Evitar contato com os olhos.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "784",
    "nome": "LIDOGEL 20MG/G (2%) GEL TÓPICO / URETRAL",
    "principio_ativo": "Cloridrato de Lidocaína",
    "concentracao": "20 mg/g (2%)",
    "apresentacao": "Bisnaga com 30g",
    "fabricante": "Cristália",
    "para_que_serve": "Anestésico local de superfície para procedimentos de sondagem, cateterismo e alívio de dor em mucosas.",
    "categoria": "Medicamento",
    "como_tomar": "Aplicar topicamente conforme orientação do profissional de saúde ou indicação médica.",
    "o_que_indicar": "Medicamento para uso tópico e mucosas conforme prescrição.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "785",
    "nome": "CLORIDRATO DE LISINA 125MG",
    "principio_ativo": "Cloridrato de Lisina",
    "concentracao": "125 mg",
    "apresentacao": "Frasco ou blister com cápsulas",
    "fabricante": "Genérico / Suplementos",
    "para_que_serve": "Aminoácido essencial para auxílio na imunidade e prevenção/controle de crises de herpes simples.",
    "categoria": "Medicamento",
    "como_tomar": "Ingerir conforme orientação médica ou nutricional.",
    "o_que_indicar": "Auxilia na prevenção de crises de herpes e fortalecimento imunológico.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "786",
    "nome": "LISINOPRIL 10MG C/ 30CP",
    "principio_ativo": "Lisinopril",
    "concentracao": "10 mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Medley / EMS",
    "para_que_serve": "Anti-hipertensivo (inibidor da ECA) indicado para hipertensão arterial e insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar 1 comprimido 1 vez ao dia com água, preferencialmente sempre no mesmo horário.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo para controle da pressão arterial.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "787",
    "nome": "LISINOPRIL 20MG C/ 30CP",
    "principio_ativo": "Lisinopril",
    "concentracao": "20 mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Genérico / Medley / EMS",
    "para_que_serve": "Anti-hipertensivo (inibidor da ECA) indicado para hipertensão arterial e insuficiência cardíaca.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar 1 comprimido 1 vez ao dia com água, preferencialmente sempre no mesmo horário.",
    "o_que_indicar": "Medicamento sob prescrição médica. Uso contínuo para controle da pressão arterial.",
    "situacao": "ativo",
    "origem": "Prateleira I",
    "prateleiras": [
      "I1",
      "L1"
    ]
  },
  {
    "id": "788",
    "nome": "NIMESULIDA 100MG C/ 12CP (EMS - CAIXAS AZUIS E BRANCAS)",
    "principio_ativo": "Nimesulida",
    "concentracao": "100 mg",
    "apresentacao": "Caixa com 12 comprimidos",
    "fabricante": "EMS",
    "para_que_serve": "Anti-inflamatório não esteroide (AINE), analgésico e antitérmico para alívio de dor aguda, dor de garganta, febre e inflamações.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido (100mg) a cada 12 horas após as refeições.",
    "o_que_indicar": "Uso em adultos e adolescentes acima de 12 anos. Tomar sempre com alimentos.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J1"
    ]
  },
  {
    "id": "789",
    "nome": "NIMESULIDA 100MG C/ 12CP (GLOBO - CAIXAS VERMELHAS)",
    "principio_ativo": "Nimesulida",
    "concentracao": "100 mg",
    "apresentacao": "Caixa com 12 comprimidos",
    "fabricante": "Globo",
    "para_que_serve": "Anti-inflamatório e analgésico para dores agudas, inflamação muscular, articular e odontológica.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido de 12 em 12 horas após as principais refeições.",
    "o_que_indicar": "Anti-inflamatório potente para alívio rápido de dor e edema.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J1"
    ]
  },
  {
    "id": "790",
    "nome": "SCALID / NIMESULIDA 100MG (CAIXAS VERDES)",
    "principio_ativo": "Nimesulida",
    "concentracao": "100 mg",
    "apresentacao": "Caixa com 12 comprimidos dispersíveis / revestidos",
    "fabricante": "Aché / Medley / EMS",
    "para_que_serve": "Tratamento de dor aguda, febre e processos inflamatórios osteoarticulares e de vias aéreas.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido a cada 12 horas ingerido com água ou dissolvido conforme apresentação.",
    "o_que_indicar": "Alívio eficaz contra dores e inflamações com ação analgésica rápida.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J2"
    ]
  },
  {
    "id": "791",
    "nome": "NISTATINA SOLUÇÃO ORAL 100.000 UI/ML (EMS / TEUTO / NATULAB)",
    "principio_ativo": "Nistatina",
    "concentracao": "100.000 UI/mL",
    "apresentacao": "Frasco de 50mL com conta-gotas",
    "fabricante": "EMS / Teuto / Natulab",
    "para_que_serve": "Antifúngico oral para candidíase da cavidade oral (sapinho em bebês e adultos).",
    "categoria": "Medicamento",
    "como_tomar": "Bochechar e manter o líquido na boca o maior tempo possível antes de engolir, 4 vezes ao dia.",
    "o_que_indicar": "Tratamento de sapinho oral. Continuar o tratamento por pelo menos 48h após o desaparecimento dos sintomas.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J2"
    ]
  },
  {
    "id": "792",
    "nome": "NISTATINA DRÁGEAS 500.000 UI (EMS / TEUTO / NATULAB)",
    "principio_ativo": "Nistatina",
    "concentracao": "500.000 UI",
    "apresentacao": "Caixa com 16 drágeas",
    "fabricante": "EMS / Teuto / Natulab",
    "para_que_serve": "Tratamento de candidíase do trato digestivo e intestinal.",
    "categoria": "Medicamento",
    "como_tomar": "1 a 2 drágeas 3 a 4 vezes ao dia, conforme orientação médica.",
    "o_que_indicar": "Antifúngico oral não absorvido pelo organismo, atuando diretamente no trato digestivo.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J2"
    ]
  },
  {
    "id": "793",
    "nome": "NISTATINA + ÓXIDO DE ZINCO POMADA DERMATOLÓGICA 60G",
    "principio_ativo": "Nistatina + Óxido de Zinco",
    "concentracao": "100.000 UI/g + 200 mg/g",
    "apresentacao": "Bisnaga com 60g",
    "fabricante": "Medley / EMS / Neo Química",
    "para_que_serve": "Tratamento e prevenção de assaduras em bebês e adultos causadas por umidade e fungos (candidíase).",
    "categoria": "Medicamento",
    "como_tomar": "Aplicar fina camada sobre a pele limpa e seca a cada troca de fralda ou após o banho.",
    "o_que_indicar": "Pomada cicatrizante e antifúngica para assaduras e irritações da pele.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J3"
    ]
  },
  {
    "id": "794",
    "nome": "NIMESULIDA GOTAS / COMPRIMIDOS",
    "principio_ativo": "Nimesulida",
    "concentracao": "50 mg/mL ou 100 mg",
    "apresentacao": "Frasco conta-gotas 15mL ou Blister com comprimidos",
    "fabricante": "EMS / Medley / Eurofarma",
    "para_que_serve": "Anti-inflamatório e analgésico para dor de dente, dor de garganta, febre e processos inflamatórios.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido a cada 12h ou 1 gota por kg de peso a cada 12h após as refeições.",
    "o_que_indicar": "Para maiores de 12 anos. Tomar sempre com alimentos.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J3"
    ]
  },
  {
    "id": "795",
    "nome": "NISTATINA CREME VAGINAL 25.000 UI/G C/ APLICADORES",
    "principio_ativo": "Nistatina",
    "concentracao": "25.000 UI/g",
    "apresentacao": "Bisnaga de 60g com 14 aplicadores descartáveis",
    "fabricante": "EMS / Teuto / Prati",
    "para_que_serve": "Tratamento de candidíase vaginal (corrimento esbranquiçado, coceira e irritação na região íntima).",
    "categoria": "Medicamento",
    "como_tomar": "Aplicar 1 aplicador cheio profundamente na vagina à noite ao deitar, durante 14 dias seguidos.",
    "o_que_indicar": "Completar os 14 dias mesmo durante a menstruação. Não interromper antes do prazo.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J3"
    ]
  },
  {
    "id": "796",
    "nome": "NITAZOXANIDA 500MG C/ 6CP (GENÉRICO)",
    "principio_ativo": "Nitazoxanida",
    "concentracao": "500 mg",
    "apresentacao": "Caixa com 6 comprimidos revestidos",
    "fabricante": "EMS / Althaia / Prati",
    "para_que_serve": "Antiparasitário de amplo espectro para verminoses, giardíase, amebíase e gastroenterites virais.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido de 12 em 12 horas com alimento durante 3 dias consecutivos.",
    "o_que_indicar": "Tomar junto com as refeições para melhor absorção e reduzir desconforto gástrico.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J3"
    ]
  },
  {
    "id": "797",
    "nome": "OLMESARTANA MEDOXOMILA 20MG / 40MG",
    "principio_ativo": "Olmesartana Medoxomila",
    "concentracao": "20 mg e 40 mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "EMS / Medley / Torrent",
    "para_que_serve": "Anti-hipertensivo (bloqueador dos receptores de angiotensina II) para controle da pressão arterial alta.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido uma vez ao dia, com ou sem alimentos.",
    "o_que_indicar": "Medicamento de uso contínuo com prescrição médica para hipertensão.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J4"
    ]
  },
  {
    "id": "798",
    "nome": "NITAZOXANIDA 500MG C/ 6CP (EUROFARMA)",
    "principio_ativo": "Nitazoxanida",
    "concentracao": "500 mg",
    "apresentacao": "Caixa com 6 comprimidos revestidos",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento de infecções parasitárias intestinais por protozoários e vermes (gastroenterites, giárdia, ameba).",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido de 12/12h durante 3 dias junto às refeições.",
    "o_que_indicar": "Antiparasitário de referência com alto índice de eficácia.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J4"
    ]
  },
  {
    "id": "799",
    "nome": "OLMESARTANA MEDOXOMILA + BESILATO DE ANLODIPINO",
    "principio_ativo": "Olmesartana Medoxomila + Besilato de Anlodipino",
    "concentracao": "20mg + 5mg / 40mg + 5mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "EMS / Daiichi Sankyo / Eurofarma",
    "para_que_serve": "Tratamento da hipertensão arterial quando a monoterapia não for suficiente para controlar a pressão.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido ao dia com água no mesmo horário.",
    "o_que_indicar": "Combinação dupla para controle rigoroso da pressão alta.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J4"
    ]
  },
  {
    "id": "800",
    "nome": "OLMESARTANA MEDOXOMILA + HIDROCLOROTIAZIDA",
    "principio_ativo": "Olmesartana Medoxomila + Hidroclorotiazida",
    "concentracao": "20mg + 12,5mg / 40mg + 12,5mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "EMS / Daiichi Sankyo / Eurofarma",
    "para_que_serve": "Associação de anti-hipertensivo e diurético para redução eficaz da pressão alta.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido ao dia, preferencialmente pela manhã.",
    "o_que_indicar": "Uso sob prescrição médica. A presença de diurético recomenda uso matinal.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J4",
      "J5"
    ]
  },
  {
    "id": "801",
    "nome": "OMEPRAZOL 20MG (GEOLAB, GLOBO, NOVOPRAZOL)",
    "principio_ativo": "Omeprazol",
    "concentracao": "20 mg",
    "apresentacao": "Caixa com 28 ou 56 cápsulas",
    "fabricante": "Geolab, Globo, Novoprazol",
    "para_que_serve": "Inibidor da bomba de prótons para gastrite, refluxo gastroesofágico, queimação, azia e úlceras.",
    "categoria": "Medicamento",
    "como_tomar": "1 cápsula de manhã em jejum, 30 minutos antes do café da manhã.",
    "o_que_indicar": "Tomar a cápsula inteira com água, sem mastigar ou abrir.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J5"
    ]
  },
  {
    "id": "802",
    "nome": "CLORIDRATO DE OLOPATADINA COLÍRIO",
    "principio_ativo": "Cloridrato de Olopatadina",
    "concentracao": "1 mg/mL (0,1%) ou 2 mg/mL (0,2%)",
    "apresentacao": "Frasco conta-gotas de 5mL",
    "fabricante": "EMS / Novartis / Alcon",
    "para_que_serve": "Antialérgico oftálmico para alívio dos sinais e sintomas de conjuntivite alérgica (coceira, vermelhidão e lacrimejamento).",
    "categoria": "Medicamento",
    "como_tomar": "Instilar 1 gota no(s) olho(s) afetado(s) 1 a 2 vezes ao dia.",
    "o_que_indicar": "Remover lentes de contato antes da aplicação e aguardar 15 minutos para recolocá-las.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J5"
    ]
  },
  {
    "id": "803",
    "nome": "OMEPRAZOL 20MG / 40MG (UNIÃO QUÍMICA)",
    "principio_ativo": "Omeprazol",
    "concentracao": "20 mg e 40 mg",
    "apresentacao": "Caixa com 28 ou 56 cápsulas",
    "fabricante": "União Química",
    "para_que_serve": "Tratamento de úlceras gástricas e duodenais, refluxo e esofagite.",
    "categoria": "Medicamento",
    "como_tomar": "1 cápsula ao dia em jejum, cerca de 30 minutos antes da primeira refeição.",
    "o_que_indicar": "Excelente para proteção gástrica contra azia e queimação estomacal.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J5"
    ]
  },
  {
    "id": "804",
    "nome": "CLORIDRATO DE ONDANSETRONA (LISTÔ, ONDSET, BIOLAB, EMS)",
    "principio_ativo": "Cloridrato de Ondansetrona",
    "concentracao": "4 mg e 8 mg",
    "apresentacao": "Caixa com 10 comprimidos orodispersíveis",
    "fabricante": "Biolab, EMS, Eurofarma, União Química",
    "para_que_serve": "Antiemético potente para prevenção e tratamento de náuseas, enjoos e vômitos.",
    "categoria": "Medicamento",
    "como_tomar": "Dissolver 1 comprimido sobre a língua até completa dissolução, sem necessidade de água.",
    "o_que_indicar": "Comprimido orodispersível de rápida ação contra vômito e sensação de enjoo.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J5",
      "J6"
    ]
  },
  {
    "id": "805",
    "nome": "ORLISTATE 120MG (EMS)",
    "principio_ativo": "Orlistate",
    "concentracao": "120 mg",
    "apresentacao": "Caixa com 42 ou 84 cápsulas",
    "fabricante": "EMS",
    "para_que_serve": "Auxiliar no controle e redução de peso através do bloqueio da absorção de cerca de 30% da gordura ingerida na dieta.",
    "categoria": "Medicamento",
    "como_tomar": "1 cápsula durante ou até 1 hora após cada uma das três refeições principais que contenham gordura.",
    "o_que_indicar": "Associar a uma dieta balanceada e com teor moderado de gordura para evitar desconforto intestinal.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J6"
    ]
  },
  {
    "id": "806",
    "nome": "OSELFLU / FOSFATO DE OSELTAMIVIR (EMS / ROCHE)",
    "principio_ativo": "Fosfato de Oseltamivir",
    "concentracao": "75 mg",
    "apresentacao": "Caixa com 10 cápsulas duras",
    "fabricante": "EMS / Roche",
    "para_que_serve": "Antiviral específico para tratamento e prevenção da Gripe Influenza tipos A e B (H1N1, H3N2).",
    "categoria": "Medicamento",
    "como_tomar": "1 cápsula de 12 em 12 horas durante 5 dias consecutivos, iniciando preferencialmente nas primeiras 48h dos sintomas.",
    "o_que_indicar": "Medicamento antiviral sujeito a controle e receita médica.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J6"
    ]
  },
  {
    "id": "807",
    "nome": "CLORIDRATO DE OXIMETAZOLINA SPRAY NASAL",
    "principio_ativo": "Cloridrato de Oximetazolina",
    "concentracao": "0,5 mg/mL (0,05%)",
    "apresentacao": "Frasco nebulizador de 20mL ou 30mL",
    "fabricante": "EMS / Medley / Neo Química",
    "para_que_serve": "Descongestionante nasal tópico para alívio rápido da congestão nasal provocada por resfriados, sinusites e alergias.",
    "categoria": "Medicamento",
    "como_tomar": "1 a 2 nebulizações em cada narina a cada 12 horas. Não utilizar por mais de 3 a 5 dias seguidos.",
    "o_que_indicar": "Ação rápida em minutos. Evitar uso prolongado para não causar efeito rebote.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J6"
    ]
  },
  {
    "id": "808",
    "nome": "TOSSEXPEC XAROPE",
    "principio_ativo": "Guaifenesina + Terbutalina",
    "concentracao": "Expectorante broncodilatador",
    "apresentacao": "Frasco com 120mL + copo-medida",
    "fabricante": "EMS / Natulab",
    "para_que_serve": "Expectorante e fluidificante das secreções brônquicas para alívio de tosse produtiva e peito carregado.",
    "categoria": "Medicamento",
    "como_tomar": "Seguir dosagem da bula de acordo com a faixa etária de 2 a 3 vezes ao dia.",
    "o_que_indicar": "Ajuda a eliminar o catarro e limpa as vias respiratórias.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J6"
    ]
  },
  {
    "id": "809",
    "nome": "EXPEC XAROPE EXPECTORANTE",
    "principio_ativo": "Guaifenesina + Oxomemazina + Iodeto de Potássio",
    "concentracao": "Associação expectorante e calmante da tosse",
    "apresentacao": "Frasco com 120mL",
    "fabricante": "Legrand",
    "para_que_serve": "Tratamento de tosses de diversas causas, irritativas, secas ou produtivas com catarro acumulado.",
    "categoria": "Medicamento",
    "como_tomar": "Adultos: 5mL a cada 4 horas ou 10mL a cada 8 horas, conforme necessidade.",
    "o_que_indicar": "Alivia tanto a tosse seca quanto a tosse com secreção.",
    "situacao": "ativo",
    "origem": "Prateleira J",
    "prateleiras": [
      "J6"
    ]
  },
  {
    "id": "810",
    "nome": "SECRELISE (XAROPE EXPECTORANTE - EMS)",
    "principio_ativo": "Cloridrato de Ambroxol",
    "concentracao": "30mg/5mL adulto e 15mg/5mL pediátrico",
    "apresentacao": "Frasco de 120mL + copo dosador",
    "fabricante": "EMS",
    "para_que_serve": "Fluidificante e expectorante para eliminar secreções pulmonares e aliviar tosse com catarro.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar a dose indicada no copo-medida de 2 a 3 vezes ao dia após as refeições.",
    "o_que_indicar": "Facilita a eliminação do catarro das vias respiratórias.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K1"
    ]
  },
  {
    "id": "811",
    "nome": "CLORIDRATO DE CLENBUTEROL / EXPECTORANTE (EMS)",
    "principio_ativo": "Cloridrato de Clenbuterol",
    "concentracao": "Xarope broncodilatador",
    "apresentacao": "Frasco de 120mL",
    "fabricante": "EMS",
    "para_que_serve": "Broncodilatador e secretolítico para alívio do espasmo brônquico, asma brônquica e bronquite.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar conforme dosagem prescrita pelo médico.",
    "o_que_indicar": "Medicamento com ação broncodilatadora sob prescrição médica.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K1"
    ]
  },
  {
    "id": "812",
    "nome": "PANTOPRAZOL SÓDICO",
    "principio_ativo": "Pantoprazol Sódico",
    "concentracao": "20 mg e 40 mg",
    "apresentacao": "Caixa com 28 ou 42 comprimidos revestidos",
    "fabricante": "EMS / Medley / Eurofarma",
    "para_que_serve": "Inibidor da acidez gástrica para tratamento de esofagite de refluxo, gastrite, azia e queimação.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido pela manhã em jejum, 30 a 60 minutos antes do café da manhã.",
    "o_que_indicar": "Engolir o comprimido inteiro com um copo de água sem mastigar.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K1",
      "K2"
    ]
  },
  {
    "id": "813",
    "nome": "PANTOPRAZOL SÓDICO (BIOMÉDICA E CAIXAS CINZAS/BRANCAS)",
    "principio_ativo": "Pantoprazol Sódico",
    "concentracao": "20 mg e 40 mg",
    "apresentacao": "Caixa com 28 ou 56 comprimidos",
    "fabricante": "Biomédica / Genérico",
    "para_que_serve": "Tratamento de lesões gástricas, queimação, refluxo e alívio de sintomas de hiperacidez estomacal.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido ao acordar em jejum com água.",
    "o_que_indicar": "Protege a mucosa gástrica e reduz a dor provocada pela acidez.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K2"
    ]
  },
  {
    "id": "814",
    "nome": "PARACETAMOL (PRATI E PARAMOL)",
    "principio_ativo": "Paracetamol",
    "concentracao": "500 mg e 750 mg",
    "apresentacao": "Caixa com 20 comprimidos",
    "fabricante": "Prati-Donaduzzi / Legrand",
    "para_que_serve": "Analgésico e antitérmico para redução da febre e alívio de dores leves a moderadas (dor de cabeça, musculares e dente).",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido a cada 6 a 8 horas, não ultrapassando 4g diários.",
    "o_que_indicar": "Não agride o estômago. Seguro para quem não pode tomar anti-inflamatórios.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K2"
    ]
  },
  {
    "id": "815",
    "nome": "TILEMAXY / PARACETAMOL (INFANTIL E BEBÊ - NATULAB, EMS)",
    "principio_ativo": "Paracetamol",
    "concentracao": "100 mg/mL (bebê) e 140 mg/mL / 200 mg/mL (infantil)",
    "apresentacao": "Frasco suspensão oral com seringa/conta-gotas",
    "fabricante": "Natulab / EMS",
    "para_que_serve": "Alívio de febre e dores leves a moderadas em bebês e crianças pequenas (reações a vacinas, dentição, resfriados).",
    "categoria": "Medicamento",
    "como_tomar": "Dosagem calculada por peso corporal (1 gota por kg de 6 em 6 horas conforme a concentração).",
    "o_que_indicar": "Acompanha seringa dosadora ou conta-gotas para dosagem precisa e segura.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K2"
    ]
  },
  {
    "id": "816",
    "nome": "PARACETAMOL (SOLUÇÃO ORAL GOTAS - EMS E NEO QUÍMICA)",
    "principio_ativo": "Paracetamol",
    "concentracao": "200 mg/mL",
    "apresentacao": "Frasco conta-gotas com 15mL ou 20mL",
    "fabricante": "EMS / Neo Química",
    "para_que_serve": "Alívio rápido de dor e febre em crianças e adultos que preferem medicamento líquido.",
    "categoria": "Medicamento",
    "como_tomar": "1 gota por kg de peso corporal a cada 6 a 8 horas.",
    "o_que_indicar": "Excelente para controle de febre e dor infantil ou pós-vacinal.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K3"
    ]
  },
  {
    "id": "817",
    "nome": "PITAVASTATINA CÁLCICA (PHARLAB, BIOLAB, EMS)",
    "principio_ativo": "Pitavastatina Cálcica",
    "concentracao": "2 mg e 4 mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Pharlab, Biolab, EMS",
    "para_que_serve": "Estatina de alta eficácia para redução do colesterol LDL e triglicerídeos no sangue com menor impacto glicêmico.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido ao dia à noite, com ou sem alimentos.",
    "o_que_indicar": "Medicamento sob prescrição médica para dislipidemia e proteção cardiovascular.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K3"
    ]
  },
  {
    "id": "818",
    "nome": "CLORIDRATO DE PIOGLITAZONA",
    "principio_ativo": "Cloridrato de Pioglitazona",
    "concentracao": "15 mg e 30 mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "EMS / Aché / Medley",
    "para_que_serve": "Antidiabético oral para melhorar a sensibilidade à insulina em pacientes com Diabetes Mellitus tipo 2.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido uma vez ao dia, com ou sem alimentos.",
    "o_que_indicar": "Uso sob prescrição médica e acompanhamento da glicemia.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K3",
      "K4"
    ]
  },
  {
    "id": "819",
    "nome": "PIROXICAM",
    "principio_ativo": "Piroxicam",
    "concentracao": "20 mg",
    "apresentacao": "Caixa com 15 cápsulas ou comprimidos solúveis",
    "fabricante": "EMS / Neo Química / Teuto",
    "para_que_serve": "Anti-inflamatório não esteroide para alívio de dor e inflamação em osteoartrite, artrite reumatoide e gota.",
    "categoria": "Medicamento",
    "como_tomar": "1 cápsula (20mg) uma vez ao dia com uma refeição.",
    "o_que_indicar": "Ação prolongada (24 horas). Tomar sempre após as refeições.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K3"
    ]
  },
  {
    "id": "820",
    "nome": "PENTOXIFILINA (EMS)",
    "principio_ativo": "Pentoxifilina",
    "concentracao": "400 mg",
    "apresentacao": "Caixa com 30 comprimidos de liberação prolongada",
    "fabricante": "EMS",
    "para_que_serve": "Vasodilatador periférico indicado para melhorar a circulação sanguínea em membros inferiores (claudicação intermitente).",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido 2 a 3 vezes ao dia junto com as principais refeições.",
    "o_que_indicar": "Engolir o comprimido inteiro sem mastigar. Melhora a oxigenação dos tecidos periféricos.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K4"
    ]
  },
  {
    "id": "821",
    "nome": "PARACETAMOL + CLORIDRATO DE PSEUDOEFEDRINA (EMS, GERMED)",
    "principio_ativo": "Paracetamol + Cloridrato de Pseudoefedrina",
    "concentracao": "500 mg + 30 mg",
    "apresentacao": "Caixa com 12 ou 24 comprimidos revestidos",
    "fabricante": "EMS, Germed",
    "para_que_serve": "Combinação analgésica e descongestionante nasal para alívio de sintomas de gripes, resfriados e congestão sinusal.",
    "categoria": "Medicamento",
    "como_tomar": "1 a 2 comprimidos a cada 6 horas, conforme orientação médica ou farmacêutica.",
    "o_que_indicar": "Desentope o nariz e alivia a dor de cabeça e febre da gripe.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K4"
    ]
  },
  {
    "id": "822",
    "nome": "PREDNISOLONA (EUROFARMA)",
    "principio_ativo": "Prednisolona",
    "concentracao": "20 mg e 40 mg",
    "apresentacao": "Caixa com 10 comprimidos",
    "fabricante": "Eurofarma",
    "para_que_serve": "Corticoide potente com potente ação anti-inflamatória e antialérgica para crises alérgicas, respiratórias e articulares.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar pela manhã com um copo de água após o café da manhã conforme dose prescrita.",
    "o_que_indicar": "Uso sob prescrição médica. Não interromper abruptamente em tratamentos prolongados.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K4",
      "K5",
      "K9"
    ]
  },
  {
    "id": "823",
    "nome": "PRAVASTATINA SÓDICA",
    "principio_ativo": "Pravastatina Sódica",
    "concentracao": "10 mg, 20 mg e 40 mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "EMS / Medley",
    "para_que_serve": "Tratamento de hipercolesterolemia e prevenção de eventos cardiovasculares.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido ao dia à noite, com ou sem alimentos.",
    "o_que_indicar": "Medicamento com retenção de receita médica para controle do colesterol.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K4"
    ]
  },
  {
    "id": "824",
    "nome": "PREDNISOLONA (EUROFARMA, EMS)",
    "principio_ativo": "Prednisolona",
    "concentracao": "5 mg, 20 mg e 40 mg",
    "apresentacao": "Caixa com 10 ou 20 comprimidos",
    "fabricante": "Eurofarma, EMS",
    "para_que_serve": "Anti-inflamatório esteroide para reações alérgicas, dermatites e doenças respiratórias.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar pela manhã após refeição matinal.",
    "o_que_indicar": "Medicamento corticoide sob prescrição médica.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K5",
      "K9"
    ]
  },
  {
    "id": "825",
    "nome": "FOSFATO SÓDICO DE PREDNISOLONA (EUROFARMA, BIOSINTÉTICA, UNIÃO QUÍMICA)",
    "principio_ativo": "Fosfato Sódico de Prednisolona",
    "concentracao": "3 mg/mL (1mg por gota aprox. ou solução com seringa dosadora)",
    "apresentacao": "Frasco com 60mL ou 120mL + seringa dosadora",
    "fabricante": "Eurofarma, Biosintética, União Química",
    "para_que_serve": "Corticoide líquido infantil e adulto para laringite, asma, bronquiolite e reações alérgicas agudas.",
    "categoria": "Medicamento",
    "como_tomar": "Administrar pela manhã conforme dosagem prescrita pelo pediatra ou médico.",
    "o_que_indicar": "Alívio rápido de crises asmáticas e inflamatórias agudas.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K5",
      "K9"
    ]
  },
  {
    "id": "826",
    "nome": "PREDNISONA",
    "principio_ativo": "Prednisona",
    "concentracao": "5 mg e 20 mg",
    "apresentacao": "Caixa com 20 comprimidos",
    "fabricante": "EMS / Neo Química / Eurofarma",
    "para_que_serve": "Anti-inflamatório esteroide (corticoide) para distúrbios alérgicos, dermatológicos, respiratórios e reumáticos.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar dose única pela manhã após o desjejum para respeitar o ciclo circadiano do cortisol.",
    "o_que_indicar": "Medicamento sob prescrição médica.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K5",
      "K8"
    ]
  },
  {
    "id": "827",
    "nome": "PROMETAZINA / PROFERGAN (TEUTO)",
    "principio_ativo": "Cloridrato de Prometazina",
    "concentracao": "25 mg",
    "apresentacao": "Caixa com 20 comprimidos",
    "fabricante": "Teuto",
    "para_que_serve": "Antialérgico, antiemético e sedativo para náuseas, enjoos de viagem (cinetose), insônia e coceiras.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido de 12 em 12 horas ou ao deitar, dependendo da indicação médica.",
    "o_que_indicar": "Causa sonolência. Evitar dirigir veículos ou operar máquinas durante o uso.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K5"
    ]
  },
  {
    "id": "828",
    "nome": "CLORIDRATO DE PROMETAZINA",
    "principio_ativo": "Cloridrato de Prometazina",
    "concentracao": "25 mg",
    "apresentacao": "Caixa com 20 comprimidos",
    "fabricante": "EMS / Sanofi / Medley",
    "para_que_serve": "Alívio de reações alérgicas, urticárias, picadas de inseto e prevenção de enjoos de movimento.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido à noite ou conforme necessidade.",
    "o_que_indicar": "Potente efeito antialérgico com sedação.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K5"
    ]
  },
  {
    "id": "829",
    "nome": "PROMESTRIENO (EUROFARMA)",
    "principio_ativo": "Promestrieno",
    "concentracao": "10 mg/g (1%)",
    "apresentacao": "Bisnaga com 30g + 20 aplicadores descartáveis ou cápsulas",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento de alterações tróficas da vulva e vagina decorrentes da menopausa (ressecamento vaginal e atrofia).",
    "categoria": "Medicamento",
    "como_tomar": "Aplicar 1 dose do aplicador na vagina 1 vez ao dia durante 20 dias seguidos, preferencialmente à noite.",
    "o_que_indicar": "Estrógeno tópico de ação local que não altera níveis hormonais sistêmicos.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K5"
    ]
  },
  {
    "id": "830",
    "nome": "CLORIDRATO DE PROPRANOLOL (UNIÃO QUÍMICA, MEDLEY, TEUTO, ALTHAIA)",
    "principio_ativo": "Cloridrato de Propranolol",
    "concentracao": "10 mg e 40 mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "União Química, Medley, Teuto, Althaia",
    "para_que_serve": "Betabloqueador indicado para controle da pressão alta, palpitações cardíacas, arritmias, enxaqueca e tremor essencial.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar com água antes das refeições, nos horários prescritos pelo médico.",
    "o_que_indicar": "Uso contínuo sob prescrição médica. Não interromper bruscamente.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K6",
      "K8"
    ]
  },
  {
    "id": "831",
    "nome": "CLORIDRATO DE PROPAFENONA (ALTHAIA, EUROFARMA)",
    "principio_ativo": "Cloridrato de Propafenona",
    "concentracao": "300 mg",
    "apresentacao": "Caixa com 30 comprimidos",
    "fabricante": "Althaia, Eurofarma",
    "para_que_serve": "Antiarrítmico indicado para prevenção e tratamento de taquicardias e arritmias cardíacas graves.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar o comprimido com líquido após as refeições conforme rigorosa prescrição cardiológica.",
    "o_que_indicar": "Medicamento de controle especial cardiológico.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K6"
    ]
  },
  {
    "id": "832",
    "nome": "RIVAROXABANA (PRATI, EMS)",
    "principio_ativo": "Rivaroxabana",
    "concentracao": "10 mg, 15 mg e 20 mg",
    "apresentacao": "Caixa com 28 comprimidos revestidos",
    "fabricante": "Prati, EMS",
    "para_que_serve": "Anticoagulante oral para prevenção de AVC em fibrilação atrial e tratamento de trombose venosa profunda (TVP) e embolia pulmonar.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido ao dia com alimentos (para 15mg e 20mg) no mesmo horário.",
    "o_que_indicar": "Anticoagulante direto moderno sob prescrição médica. Não pular doses.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K6",
      "K7",
      "K9"
    ]
  },
  {
    "id": "833",
    "nome": "RISEDRONATO SÓDICO (EUROFARMA)",
    "principio_ativo": "Risedronato Sódico",
    "concentracao": "35 mg e 150 mg",
    "apresentacao": "Caixa com 4 comprimidos (semanal) ou 1 comprimido (mensal)",
    "fabricante": "Eurofarma",
    "para_que_serve": "Tratamento e prevenção da osteoporose em mulheres pós-menopausa e homens para redução do risco de fraturas.",
    "categoria": "Medicamento",
    "como_tomar": "Tomar em jejum pela manhã com 1 copo cheio de água pura e aguardar 30 minutos em pé ou sentado sem deitar.",
    "o_que_indicar": "Não deitar por pelo menos 30 minutos após ingerir para evitar irritação do esôfago.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K6"
    ]
  },
  {
    "id": "834",
    "nome": "ROSUVASTATINA CÁLCICA (EMS, SANDOZ)",
    "principio_ativo": "Rosuvastatina Cálcica",
    "concentracao": "10 mg e 20 mg",
    "apresentacao": "Caixa com 30 comprimidos revestidos",
    "fabricante": "EMS, Sandoz",
    "para_que_serve": "Redução de colesterol elevado (LDL) e triglicerídeos no sangue, auxiliando na prevenção de infarto e AVC.",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido ao dia por via oral, a qualquer hora do dia com ou sem comida.",
    "o_que_indicar": "Estatina potente com alta eficácia na redução das taxas de colesterol ruim.",
    "situacao": "ativo",
    "origem": "Prateleira K",
    "prateleiras": [
      "K6",
      "K7"
    ]
  },
  {
    "id": "835",
    "nome": "Loratadina",
    "principio_ativo": "Loratadina",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alergias (rinite, coceira, urticária)",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido 1x ao dia (adultos e crianças acima de 30 kg)",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L2"
    ]
  },
  {
    "id": "836",
    "nome": "Histadin",
    "principio_ativo": "Provável loratadina (conferir embalagem)",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antialérgico (provável loratadina). Conferir",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido 1x ao dia, conforme bula",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Similar (provável)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L2"
    ]
  },
  {
    "id": "837",
    "nome": "Loritil",
    "principio_ativo": "Loratadina",
    "concentracao": "10 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Alergias (rinite, coceira, urticária)",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido 1x ao dia",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Similar (provável)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L2"
    ]
  },
  {
    "id": "838",
    "nome": "Losartana potássica",
    "principio_ativo": "Losartana potássica",
    "concentracao": "50 mg (caixa com 30 comprimidos)",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Pressão alta e proteção dos rins em diabéticos",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido 1x ao dia",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L3"
    ]
  },
  {
    "id": "839",
    "nome": "Artritec",
    "principio_ativo": "Meloxicam",
    "concentracao": "7,5 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório para dor e inflamação (artrite, artrose)",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido 1x ao dia, junto da refeição",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Similar (provável)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L3"
    ]
  },
  {
    "id": "840",
    "nome": "Artritec",
    "principio_ativo": "Meloxicam",
    "concentracao": "15 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Anti-inflamatório para dor e inflamação (artrite, artrose)",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido 1x ao dia, junto da refeição",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Similar (provável)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L4"
    ]
  },
  {
    "id": "841",
    "nome": "Cloridrato de metformina",
    "principio_ativo": "Metformina",
    "concentracao": "500 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diabetes tipo 2",
    "categoria": "Medicamento",
    "como_tomar": "Durante ou após as refeições, 1 a 3x ao dia. Dose do médico",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L4"
    ]
  },
  {
    "id": "842",
    "nome": "Cloridrato de metformina",
    "principio_ativo": "Metformina",
    "concentracao": "850 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Diabetes tipo 2",
    "categoria": "Medicamento",
    "como_tomar": "Durante ou após as refeições, 1 a 3x ao dia. Dose do médico",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L5"
    ]
  },
  {
    "id": "843",
    "nome": "Mesalazina",
    "principio_ativo": "Mesalazina",
    "concentracao": "400 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Doenças inflamatórias do intestino (retocolite, Crohn)",
    "categoria": "Medicamento",
    "como_tomar": "Engolir inteiro, sem mastigar, dividido ao longo do dia. Dose do médico",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L5"
    ]
  },
  {
    "id": "844",
    "nome": "Metildopa",
    "principio_ativo": "Metildopa",
    "concentracao": "250 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Pressão alta",
    "categoria": "Medicamento",
    "como_tomar": "Geralmente 2 a 3x ao dia, conforme o médico",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L5"
    ]
  },
  {
    "id": "845",
    "nome": "Cloridrato de metoclopramida",
    "principio_ativo": "Metoclopramida",
    "concentracao": "4 mg (forma: gotas 4 mg/mL ou comprimido, conferir)",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Náusea e vômito",
    "categoria": "Medicamento",
    "como_tomar": "Geralmente antes das refeições, só por curto período, conforme o médico",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L5"
    ]
  },
  {
    "id": "846",
    "nome": "Succinato de metoprolol",
    "principio_ativo": "Metoprolol (succinato)",
    "concentracao": "25 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Pressão alta, angina, arritmias, insuficiência cardíaca",
    "categoria": "Medicamento",
    "como_tomar": "1x ao dia, engolir inteiro, sem mastigar",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L5"
    ]
  },
  {
    "id": "847",
    "nome": "Succinato de metoprolol",
    "principio_ativo": "Metoprolol (succinato)",
    "concentracao": "50 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Pressão alta, angina, arritmias, insuficiência cardíaca",
    "categoria": "Medicamento",
    "como_tomar": "1x ao dia, engolir inteiro, sem mastigar",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L6"
    ]
  },
  {
    "id": "848",
    "nome": "Tartarato de metoprolol",
    "principio_ativo": "Metoprolol (tartarato)",
    "concentracao": "100 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Pressão alta, angina, arritmias",
    "categoria": "Medicamento",
    "como_tomar": "1 a 2x ao dia, com ou logo após as refeições",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L6"
    ]
  },
  {
    "id": "849",
    "nome": "Nitrato de miconazol",
    "principio_ativo": "Miconazol",
    "concentracao": "20 mg (forma: conferir embalagem)",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antifúngico (micoses de pele)",
    "categoria": "Medicamento",
    "como_tomar": "Se for creme de pele: 1 a 2x ao dia na pele limpa e seca",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L6"
    ]
  },
  {
    "id": "850",
    "nome": "Gino-Mizonol",
    "principio_ativo": "Miconazol",
    "concentracao": "20 mg (creme vaginal)",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Candidíase vaginal",
    "categoria": "Medicamento",
    "como_tomar": "Geralmente 1 aplicador à noite, ao deitar, por 7 dias",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Similar (provável)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L6"
    ]
  },
  {
    "id": "851",
    "nome": "Nitrato de miconazol creme vaginal",
    "principio_ativo": "Miconazol",
    "concentracao": "20 mg (creme vaginal)",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Candidíase vaginal",
    "categoria": "Medicamento",
    "como_tomar": "Geralmente 1 aplicador à noite, ao deitar, por 7 dias",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L7"
    ]
  },
  {
    "id": "852",
    "nome": "Minoxidil refil",
    "principio_ativo": "Minoxidil",
    "concentracao": "50 mg (provável solução a 5%, conferir)",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Queda de cabelo (alopecia androgenética). Conferir",
    "categoria": "Medicamento",
    "como_tomar": "1 mL, 2x ao dia, no couro cabeludo seco. Lavar as mãos depois",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir embalagem",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L7"
    ]
  },
  {
    "id": "853",
    "nome": "Mirabegrona",
    "principio_ativo": "Mirabegrona",
    "concentracao": "50 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Bexiga hiperativa",
    "categoria": "Medicamento",
    "como_tomar": "1x ao dia, engolir inteiro com água",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L7"
    ]
  },
  {
    "id": "854",
    "nome": "Furoato de mometasona",
    "principio_ativo": "Mometasona (furoato)",
    "concentracao": "Forma e concentração: conferir embalagem",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Corticoide para coceira e inflamação da pele, ou rinite se for spray nasal. Conferir a forma",
    "categoria": "Medicamento",
    "como_tomar": "Creme: camada fina 1x ao dia. Spray nasal: 2 jatos em cada narina 1x ao dia",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L7"
    ]
  },
  {
    "id": "855",
    "nome": "Montelucaste de sódio",
    "principio_ativo": "Montelucaste",
    "concentracao": "Concentração: conferir embalagem",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Asma e rinite alérgica",
    "categoria": "Medicamento",
    "como_tomar": "1x ao dia, à noite. A dose depende da idade e da concentração",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L7"
    ]
  },
  {
    "id": "856",
    "nome": "Montelucaste de sódio",
    "principio_ativo": "Montelucaste",
    "concentracao": "5 mg (comprimido mastigável)",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Asma e rinite alérgica em crianças de 6 a 14 anos",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido mastigável 1x ao dia, à noite",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L8"
    ]
  },
  {
    "id": "857",
    "nome": "Naproxeno",
    "principio_ativo": "Naproxeno",
    "concentracao": "500 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Dor, inflamação, cólica menstrual, febre",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido a cada 12 h, após a refeição",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L8"
    ]
  },
  {
    "id": "858",
    "nome": "Cloridrato de naratriptana",
    "principio_ativo": "Naratriptana",
    "concentracao": "2,5 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Tratar crise de enxaqueca (não previne)",
    "categoria": "Medicamento",
    "como_tomar": "1 comprimido no início da crise, com água. Se a dor voltar, só repetir após 4 h. Máximo 5 mg em 24 h",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L8",
      "L9"
    ]
  },
  {
    "id": "859",
    "nome": "Cloridrato de nebivolol",
    "principio_ativo": "Nebivolol",
    "concentracao": "5 mg",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Pressão alta e insuficiência cardíaca",
    "categoria": "Medicamento",
    "como_tomar": "1x ao dia, sempre no mesmo horário",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir na embalagem (genérico, similar ou referência)",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L9"
    ]
  },
  {
    "id": "860",
    "nome": "Ferid pomada",
    "principio_ativo": "Conferir embalagem",
    "concentracao": "Conferir embalagem",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Conferir embalagem ou bula",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir embalagem",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L9"
    ]
  },
  {
    "id": "861",
    "nome": "Sulfato de neomicina",
    "principio_ativo": "Neomicina",
    "concentracao": "5 mg (provável pomada, às vezes com bacitracina, conferir)",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Antibiótico de uso na pele. Conferir",
    "categoria": "Medicamento",
    "como_tomar": "Camada fina na área, 2 a 3x ao dia, conforme bula",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir embalagem",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L9"
    ]
  },
  {
    "id": "862",
    "nome": "Neofedipina",
    "principio_ativo": "Conferir embalagem (pode ser nifedipino)",
    "concentracao": "Conferir embalagem",
    "apresentacao": "",
    "fabricante": "",
    "para_que_serve": "Conferir embalagem ou bula",
    "categoria": "Medicamento",
    "como_tomar": "Conferir embalagem ou bula",
    "o_que_indicar": "",
    "situacao": "ativo",
    "origem": "Conferir embalagem",
    "status_conferencia": "Pendente de conferência",
    "prateleiras": [
      "L9"
    ]
  }
];
