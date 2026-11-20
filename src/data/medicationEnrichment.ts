import type {
  Produto,
  InformacoesAtendimento,
  StatusVerificacao,
  TarjaMedicamento,
  ClassificacaoComercial,
} from '../types/database.ts';

export const NAO_VERIFICADO = 'Não verificado';

export interface AnvisaMonograph {
  principioChave: string;
  categoriaTerapeutica: string;
  paraQueServe: string;
  exigeReceita: string;
  tarja: TarjaMedicamento;
  medicamentoControlado: 'Sim' | 'Não';
  tipoControle?: string;
  viaPadrao?: string;
  comoUtilizarResumo: string;
  cuidadosTratamento: string;
  restricoesUso: string;
  acompanhamentoMedico: string;
  contraindicacoes: string;
  efeitosColaterais: string;
  interacoesMedicamentosas: string;
  armazenamento: string;
  atendimento: InformacoesAtendimento;
  fonte: string;
}

function norm(v?: string): string {
  if (!v) return '';
  return v
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function isUnconfirmedValue(val?: string): boolean {
  const n = norm(val);
  if (!n) return true;
  return (
    n === 'nao verificado' ||
    n.includes('informacao nao confirmada') ||
    n.includes('conferir embalagem') ||
    n.includes('conferir na embalagem') ||
    n === 'medicamento'
  );
}

// Monografias resumidas estritamente de referência regulatória e bulário oficial ANVISA
// (sem inventar doses individuais de prescrição)
export const ANVISA_VERIFIED_MONOGRAPHS: AnvisaMonograph[] = [
  {
    principioChave: 'dipirona',
    categoriaTerapeutica: 'Analgésicos',
    paraQueServe:
      'Analgésico e antitérmico indicado para alívio de dores agudas ou crônicas e redução da febre.',
    exigeReceita: 'Não (Venda livre / MIP)',
    tarja: 'Sem tarja',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral (ou conforme apresentação específica na embalagem)',
    comoUtilizarResumo:
      'Administrar conforme posologia aprovada na bula para a idade e peso, respeitando o intervalo entre doses.',
    cuidadosTratamento:
      'Manter hidratação adequada; suspender e buscar avaliação médica se houver queda de pressão ou reações cutâneas.',
    restricoesUso:
      'Contraindicado em menores de 3 meses ou abaixo de 5 kg (verificar apresentação específica) e em histórico de alergia a pirazolonas.',
    acompanhamentoMedico:
      'Procurar médico se febre persistir por mais de 3 dias ou dor não melhorar em alguns dias.',
    contraindicacoes:
      'Hipersensibilidade à dipirona ou pirazolonas, histórico de agranulocitose, asma induzida por analgésicos, porfiria hepática aguda.',
    efeitosColaterais:
      'Hipotensão transitória, reações alérgicas cutâneas, raramente alterações hematológicas (agranulocitose).',
    interacoesMedicamentosas:
      'Ciclosporina (redução dos níveis séricos), metotrexato, álcool (potencialização de efeitos) e bupropiona.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), protegido da luz e umidade, na embalagem original.',
    atendimento: {
      finalidade_atendimento: 'Alívio sintomático de dor e febre (analgésico e antitérmico).',
      informacoes_basicas_atendente:
        'Confirmar a apresentação desejada (gotas, comprimido 500 mg ou 1 g, xarope) e verificar para quem se destina.',
      cuidados_informar:
        'Verificar histórico de alergia à dipirona ou outros analgésicos e orientar leitura da bula para dose por idade/peso.',
      quando_encaminhar_farmaceutico:
        'Uso em gestantes, lactantes, crianças pequenas, dúvida de equivalência entre concentrações ou uso contínuo.',
      quando_procurar_medico:
        'Febre persistente acima de 3 dias, dor intensa sem resposta ou sinais de reação alérgica.',
    },
    fonte: 'Bulário Eletrônico ANVISA / RDC 98/2016 (MIP)',
  },
  {
    principioChave: 'paracetamol + fosfato de codeina',
    categoriaTerapeutica: 'Medicamentos de uso controlado',
    paraQueServe:
      'Analgésico opioide combinado indicado para alívio de dores de grau moderado a intenso que não respondem a analgésicos simples.',
    exigeReceita: 'Sim (Retenção de receita — Receituário de Controle Especial)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Sim',
    tipoControle: 'Controle Especial — Portaria SVS/MS 344/98 (Lista A2/C1 — Receita Branca 2 vias)',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Uso exclusivo conforme prescrição médica, respeitando rigorosamente a dose e o intervalo definidos na receita.',
    cuidadosTratamento:
      'Pode causar sonolência e reduzir reflexos (cuidado ao dirigir). Não associar a outros produtos contendo paracetamol ou álcool.',
    restricoesUso:
      'Contraindicado para menores de 12 anos, lactantes (risco de toxicidade neonatal por morfina) e insuficiência respiratória.',
    acompanhamentoMedico:
      'Uso sob acompanhamento médico obrigatório devido ao risco de dependência e depressão respiratória.',
    contraindicacoes:
      'Alergia aos componentes, depressão respiratória aguda, menores de 12 anos, metabolizadores ultrarrápidos de CYP2D6, amamentação.',
    efeitosColaterais:
      'Sonolência, tontura, náuseas, vômitos, constipação intestinal e sedação.',
    interacoesMedicamentosas:
      'Álcool, benzodiazepínicos, depressores do SNC, inibidores da MAO e outros fármacos hepatotóxicos.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), longe do alcance de crianças e em local seguro.',
    atendimento: {
      finalidade_atendimento: 'Analgésico controlado para dor moderada a intensa.',
      informacoes_basicas_atendente:
        'Medicamento sujeito a controle especial: dispensação apenas mediante apresentação e retenção da receita válida.',
      cuidados_informar:
        'Alertar sobre sonolência, proibição de álcool e cuidado para não duplicar doses de paracetamol em antigripais.',
      quando_encaminhar_farmaceutico:
        'Sempre encaminhar a conferência da receita de controle especial e orientações de dispensação ao farmacêutico.',
      quando_procurar_medico:
        'Sinais de sedação excessiva, dificuldade para respirar, alergia ou ausência de controle da dor.',
    },
    fonte: 'Bulário Eletrônico ANVISA / Portaria SVS/MS 344/98',
  },
  {
    principioChave: 'cloridrato de tramadol + paracetamol',
    categoriaTerapeutica: 'Medicamentos de uso controlado',
    paraQueServe:
      'Analgésico de ação central associado indicado para tratamento de dores moderadas a severas, agudas ou crônicas.',
    exigeReceita: 'Sim (Retenção de receita — Receituário de Controle Especial)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Sim',
    tipoControle: 'Controle Especial — Portaria SVS/MS 344/98 (Lista A2/C1 — Receita Branca 2 vias)',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Utilizar exatamente na dose e intervalo prescritos pelo médico, engolindo os comprimidos inteiros com água.',
    cuidadosTratamento:
      'Evitar álcool e atividades que exijam atenção. Não exceder a dose máxima diária de paracetamol.',
    restricoesUso:
      'Contraindicado em intoxicação aguda por álcool/psicotrópicos, uso recente de IMAO e insuficiência hepática grave.',
    acompanhamentoMedico:
      'Requer acompanhamento médico contínuo para ajuste terapêutico e prevenção de dependência.',
    contraindicacoes:
      'Hipersensibilidade ao tramadol ou paracetamol, uso de IMAO nos últimos 14 dias, epilepsia não controlada, insuficiência hepática grave.',
    efeitosColaterais:
      'Tontura, sonolência, náusea, boca seca, constipação e sudorese.',
    interacoesMedicamentosas:
      'Antidepressivos ISRS/IRSN (risco de síndrome serotoninérgica), carbamazepina, álcool, anticoagulantes e sedativos.',
    armazenamento:
      'Manter em temperatura ambiente (15°C a 30°C), protegido da umidade e fora do alcance de crianças.',
    atendimento: {
      finalidade_atendimento: 'Controle de dor moderada a intensa (analgésico controlado).',
      informacoes_basicas_atendente:
        'Exige receita de controle especial em duas vias; verificar validade e identificação da receita junto ao farmacêutico.',
      cuidados_informar:
        'Alertar contra consumo de álcool e soma com outros remédios contendo paracetamol.',
      quando_encaminhar_farmaceutico:
        'Toda dispensação de medicamento controlado e verificação de possíveis interações com antidepressivos.',
      quando_procurar_medico:
        'Convulsões, confusão mental, dificuldade respiratória ou dor persistente.',
    },
    fonte: 'Bulário Eletrônico ANVISA / Portaria SVS/MS 344/98',
  },
  {
    principioChave: 'paracetamol',
    categoriaTerapeutica: 'Analgésicos',
    paraQueServe:
      'Analgésico e antitérmico indicado para redução da febre e alívio temporário de dores leves a moderadas.',
    exigeReceita: 'Não (Venda livre / MIP)',
    tarja: 'Sem tarja',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Respeitar a dose por peso/idade e não ultrapassar a dose máxima diária prevista em bula.',
    cuidadosTratamento:
      'Evitar consumo de álcool e conferir se o paciente não usa outros antigripais com paracetamol (risco hepático).',
    restricoesUso:
      'Cuidado redobrado ou restrição em hepatopatias e etilismo crônico.',
    acompanhamentoMedico:
      'Procurar médico se dor durar mais de 5–10 dias ou febre persistir por mais de 3 dias.',
    contraindicacoes:
      'Hipersensibilidade ao paracetamol e doença hepática grave ativa.',
    efeitosColaterais:
      'Geralmente bem tolerado em doses terapêuticas; reações cutâneas raras; superdosagem causa hepatotoxicidade.',
    interacoesMedicamentosas:
      'Álcool, varfarina (uso prolongado eleva risco de sangramento), anticonvulsivantes indutores enzimáticos.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Alívio de dores leves a moderadas e controle da febre.',
      informacoes_basicas_atendente:
        'Confirmar a apresentação correta (comprimido 500/750 mg, gotas ou suspensão infantil) e informar limite diário conforme bula.',
      cuidados_informar:
        'Alertar sobre o risco de duplicidade quando associado a antigripais e evitar álcool.',
      quando_encaminhar_farmaceutico:
        'Uso em bebês/crianças, gestantes, pessoas com problemas no fígado ou uso com anticoagulantes.',
      quando_procurar_medico:
        'Febre persistente acima de 3 dias, dor que piora ou sinais de icterícia/alergia.',
    },
    fonte: 'Bulário Eletrônico ANVISA / RDC 98/2016 (MIP)',
  },
  {
    principioChave: 'ibuprofeno',
    categoriaTerapeutica: 'Anti-inflamatórios',
    paraQueServe:
      'Anti-inflamatório não esteroidal (AINE) com ação analgésica, antitérmica e anti-inflamatória.',
    exigeReceita: 'Depende da concentração (Gotas/200 mg: MIP · 400/600 mg: verificar embalagem/prescrição)',
    tarja: 'Sem tarja',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Administrar conforme bula ou prescrição médica, preferencialmente após alimentação caso haja sensibilidade gástrica.',
    cuidadosTratamento:
      'Evitar uso prolongado sem orientação; evitar em suspeita de dengue ou desidratação.',
    restricoesUso:
      'Evitar no terceiro trimestre da gestação, em úlcera péptica ativa e insuficiência renal/cardíaca grave.',
    acompanhamentoMedico:
      'Necessário acompanhamento médico em uso crônico ou em idosos/hipertensos.',
    contraindicacoes:
      'Úlcera gastrointestinal ativa, sangramento digestivo, alergia a AINEs/AAS, insuficiência hepática, renal ou cardíaca grave, 3º trimestre gestacional.',
    efeitosColaterais:
      'Dor abdominal, azia, náuseas, tontura e retenção de líquidos.',
    interacoesMedicamentosas:
      'Anticoagulantes, outros AINEs, corticoides, anti-hipertensivos, diuréticos e lítio.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Alívio de febre, dor e processos inflamatórios.',
      informacoes_basicas_atendente:
        'Conferir concentração exata (50 mg/mL, 100 mg/mL, 200, 400 ou 600 mg) antes de entregar.',
      cuidados_informar:
        'Orientar não associar com outros anti-inflamatórios e verificar suspeita de dengue.',
      quando_encaminhar_farmaceutico:
        'Crianças, idosos, hipertensos, problemas renais/gástricos ou uso de outros medicamentos contínuos.',
      quando_procurar_medico:
        'Febre persistente, dor gástrica forte, sinais de sangramento ou inchaço.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'captopril',
    categoriaTerapeutica: 'Medicamentos para pressão arterial',
    paraQueServe:
      'Inibidor da ECA indicado para tratamento da hipertensão arterial, insuficiência cardíaca e proteção renal em pacientes selecionados.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme prescrição médica, preferencialmente 1 hora antes das refeições para melhor absorção.',
    cuidadosTratamento:
      'Não interromper o uso sem ordem médica; monitorar pressão arterial regularmente.',
    restricoesUso:
      'Contraindicado na gravidez (risco fetal grave) e em histórico de angioedema por IECA.',
    acompanhamentoMedico:
      'Acompanhamento médico regular para controle pressórico e exames de função renal/potássio.',
    contraindicacoes:
      'Gravidez, histórico de angioedema associado a inibidores da ECA e hipersensibilidade ao captopril.',
    efeitosColaterais:
      'Tosse seca persistente, tontura por queda de pressão, alterações do paladar e hipercalemia.',
    interacoesMedicamentosas:
      'Diuréticos poupadores de potássio, suplementos de potássio, AINEs (reduzem efeito anti-hipertensivo) e lítio.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), protegido da umidade e bem fechado.',
    atendimento: {
      finalidade_atendimento: 'Controle da pressão arterial e suporte cardiovascular contínuo.',
      informacoes_basicas_atendente:
        'Conferir concentração (12,5 mg, 25 mg ou 50 mg) conforme receita apresentada pelo cliente.',
      cuidados_informar:
        'Orientar não interromper tratamento contínuo e evitar anti-inflamatórios sem orientação.',
      quando_encaminhar_farmaceutico:
        'Relato de tosse seca persistente, tonturas, suspeita de gravidez ou dúvidas sobre dose/horário.',
      quando_procurar_medico:
        'Inchaço de lábios/rosto/língua (angioedema — emergência), pressão muito alta ou desmaio.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'atenolol',
    categoriaTerapeutica: 'Medicamentos para coração',
    paraQueServe:
      'Betabloqueador cardiosseletivo indicado para hipertensão arterial, angina do peito, arritmias cardíacas e pós-infarto.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme prescrição médica, no mesmo horário todos os dias, com água.',
    cuidadosTratamento:
      'Nunca interromper abruptamente (risco de rebote cardiovascular/angina). Pode mascarar sintomas de hipoglicemia.',
    restricoesUso:
      'Contraindicado em bradicardia acentuada, choque cardiogênico e bloqueio atrioventricular de 2º/3º grau.',
    acompanhamentoMedico:
      'Requer acompanhamento médico contínuo para controle de frequência cardíaca e pressão.',
    contraindicacoes:
      'Bradicardia sinusal severa, hipotensão, choque cardiogênico, acidose metabólica e feocromocitoma não tratado.',
    efeitosColaterais:
      'Bradicardia (batimentos lentos), fadiga, extremidades frias, tontura e distúrbios gastrointestinais.',
    interacoesMedicamentosas:
      'Bloqueadores de canais de cálcio (verapamil/diltiazem), insulina/hipoglicemiantes, amiodarona e AINEs.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Tratamento contínuo de hipertensão, angina e arritmias.',
      informacoes_basicas_atendente:
        'Confirmar a dosagem exata (25 mg, 50 mg ou 100 mg) na prescrição do cliente.',
      cuidados_informar:
        'Alertar para nunca parar o medicamento por conta própria sem falar com o médico.',
      quando_encaminhar_farmaceutico:
        'Cliente relatando tontura intensa, cansaço extremo, asma ou diabetes.',
      quando_procurar_medico:
        'Batimentos cardíacos muito lentos, falta de ar ou dor no peito.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'maleato de enalapril',
    categoriaTerapeutica: 'Medicamentos para pressão arterial',
    paraQueServe:
      'Inibidor da ECA indicado para tratamento da hipertensão arterial e insuficiência cardíaca sintomática.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme prescrição médica, com ou sem alimentos, mantendo regularidade diária.',
    cuidadosTratamento:
      'Monitorar pressão arterial; levantar devagar ao deitar/sentar no início do tratamento.',
    restricoesUso:
      'Contraindicado na gravidez e em histórico de angioedema.',
    acompanhamentoMedico:
      'Monitoramento médico periódico de pressão, função renal e potássio.',
    contraindicacoes:
      'Gravidez, histórico de angioedema relacionado a IECA, uso concomitante com sacubitril/valsartana ou alisquireno em diabéticos.',
    efeitosColaterais:
      'Tosse seca, tontura, hipotensão, fadiga e cefaleia.',
    interacoesMedicamentosas:
      'Diuréticos poupadores de potássio, suplementos de potássio, AINEs e lítio.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Controle contínuo de pressão arterial e insuficiência cardíaca.',
      informacoes_basicas_atendente:
        'Conferir concentração prescrita (5 mg, 10 mg ou 20 mg).',
      cuidados_informar:
        'Não interromper sem orientação médica; evitar gestação durante o uso.',
      quando_encaminhar_farmaceutico:
        'Relato de tosse seca persistente ou dúvidas sobre troca de laboratório/horário.',
      quando_procurar_medico:
        'Inchaço na face/garganta, tontura grave ou queda acentuada da pressão.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'losartana potassica',
    categoriaTerapeutica: 'Medicamentos para pressão arterial',
    paraQueServe:
      'Antagonista do receptor de angiotensina II (BRA) indicado para hipertensão arterial, insuficiência cardíaca e proteção renal no diabetes tipo 2.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar diariamente conforme orientação médica, com água, independentemente das refeições.',
    cuidadosTratamento:
      'Uso contínuo mesmo sem sintomas; manter acompanhamento regular da pressão.',
    restricoesUso:
      'Contraindicado na gravidez (2º e 3º trimestres especialmente) e uso com alisquireno em diabéticos.',
    acompanhamentoMedico:
      'Controle clínico periódico com médico para ajuste e monitorização renal/potássio.',
    contraindicacoes:
      'Hipersensibilidade à losartana, gravidez e insuficiência hepática severa (avaliar ajuste).',
    efeitosColaterais:
      'Tontura, hipotensão ortostática, hipercalemia e fadiga.',
    interacoesMedicamentosas:
      'Suplementos de potássio, diuréticos poupadores de potássio, AINEs e lítio.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Tratamento contínuo de hipertensão e proteção cardiovascular/renal.',
      informacoes_basicas_atendente:
        'Confirmar dosagem exata (25 mg, 50 mg ou 100 mg) e verificar se não é associação com hidroclorotiazida.',
      cuidados_informar:
        'Orientar continuidade do tratamento e evitar automedicação com anti-inflamatórios.',
      quando_encaminhar_farmaceutico:
        'Dúvidas sobre diferenças entre losartana pura e losartana + HCTZ ou suspeita de gravidez.',
      quando_procurar_medico:
        'Pressão persistentemente descontrolada, tonturas intensas ou edema facial.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'hidroclorotiazida',
    categoriaTerapeutica: 'Medicamentos para pressão arterial',
    paraQueServe:
      'Diurético tiazídico indicado para hipertensão arterial e controle de edemas (inchaços) de origem cardíaca, renal ou hepática.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme prescrição médica, geralmente pela manhã para evitar interrupção do sono por aumento da diurese.',
    cuidadosTratamento:
      'Aumenta a exposição solar sensível (usar proteção solar) e exige monitorização de eletrólitos.',
    restricoesUso:
      'Contraindicado em anúria e alergia grave a derivados de sulfonamidas.',
    acompanhamentoMedico:
      'Acompanhamento médico necessário para dosagem periódica de sódio, potássio e ácido úrico.',
    contraindicacoes:
      'Anúria, hipersensibilidade a tiazídicos/sulfonamidas, hipocalemia/hiponatremia refratárias e insuficiência renal grave.',
    efeitosColaterais:
      'Aumento da micção, queda de potássio/sódio, tontura, câimbras e fotossensibilidade.',
    interacoesMedicamentosas:
      'Lítio (risco de toxicidade), digitálicos, anti-hipertensivos, corticoides e antidiabéticos.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Controle da pressão arterial e redução de retenção de líquidos.',
      informacoes_basicas_atendente:
        'Confirmar dosagem prescrita (25 mg ou 50 mg).',
      cuidados_informar:
        'Informar que é comum urinar com mais frequência nas primeiras horas após a tomada.',
      quando_encaminhar_farmaceutico:
        'Relato de câimbras frequentes, fraqueza intensa, diabetes ou gota.',
      quando_procurar_medico:
        'Fraqueza severa, tontura ao levantar ou queda acentuada da pressão.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'besilato de anlodipino',
    categoriaTerapeutica: 'Medicamentos para pressão arterial',
    paraQueServe:
      'Bloqueador dos canais de cálcio indicado para tratamento da hipertensão arterial e angina do peito.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Administrar uma vez ao dia conforme prescrição médica, com ou sem alimentos.',
    cuidadosTratamento:
      'Uso contínuo sem interrupções abruptas; manter regularidade no horário.',
    restricoesUso:
      'Cuidado em hipotensão severa, estenose aórtica grave e insuficiência hepática.',
    acompanhamentoMedico:
      'Acompanhamento médico regular para avaliação pressórica e tolerabilidade.',
    contraindicacoes:
      'Hipersensibilidade às diidropiridinas/anlodipino, hipotensão severa e choque.',
    efeitosColaterais:
      'Inchaço nos tornozelos/pés (edema periférico), rubor facial, dor de cabeça e palpitações.',
    interacoesMedicamentosas:
      'Sinvastatina (atenção a dose elevada), inibidores potentes de CYP3A4 e outros anti-hipertensivos.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), protegido da luz.',
    atendimento: {
      finalidade_atendimento: 'Controle da pressão arterial e prevenção de dor anginosa.',
      informacoes_basicas_atendente:
        'Conferir concentração exata na receita (2,5 mg, 5 mg ou 10 mg).',
      cuidados_informar:
        'Manter uso contínuo conforme orientado pelo médico.',
      quando_encaminhar_farmaceutico:
        'Relato de inchaço persistente nos tornozelos ou associação com sinvastatina.',
      quando_procurar_medico:
        'Dor no peito, edema progressivo ou tonturas intensas.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'sinvastatina',
    categoriaTerapeutica: 'Medicamentos para coração',
    paraQueServe:
      'Estatina redutora do colesterol LDL e triglicerídeos, indicada para controle de dislipidemias e prevenção de eventos cardiovasculares.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Administrar conforme prescrição médica, tradicionalmente à noite em dose única diária.',
    cuidadosTratamento:
      'Associar a dieta equilibrada; evitar consumo elevado de suco de toranja (grapefruit).',
    restricoesUso:
      'Contraindicado na gravidez, amamentação e doença hepática ativa.',
    acompanhamentoMedico:
      'Necessário controle médico periódico com perfil lipídico e enzimas hepáticas.',
    contraindicacoes:
      'Hepatopatia ativa, gravidez, lactação e uso com inibidores potentes de CYP3A4 (ex.: claritromicina, itraconazol).',
    efeitosColaterais:
      'Dores musculares (mialgia), cefaleia, desconforto digestivo e elevação de transaminases.',
    interacoesMedicamentosas:
      'Anlodipino (limitar dose de sinvastatina), amiodarona, claritromicina, fibratos (genfibrozila) e varfarina.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Controle do colesterol e proteção cardiovascular.',
      informacoes_basicas_atendente:
        'Confirmar dosagem prescrita (10 mg, 20 mg ou 40 mg).',
      cuidados_informar:
        'Orientar procura médica imediata caso surjam dores musculares intensas sem explicação.',
      quando_encaminhar_farmaceutico:
        'Relato de dor/fraqueza muscular, início de antibióticos/antifúngicos ou dúvidas de horário.',
      quando_procurar_medico:
        'Dores musculares fortes generalizadas ou urina escura.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'glibenclamida',
    categoriaTerapeutica: 'Outros',
    paraQueServe:
      'Hipoglicemiante oral (sulfonilureia) indicado para controle da glicemia no diabetes mellitus tipo 2.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme prescrição médica, geralmente antes da primeira refeição principal (café da manhã), evitando pular refeições.',
    cuidadosTratamento:
      'Risco de hipoglicemia (suor frio, tremores, tontura) se ficar em jejum prolongado ou consumir álcool.',
    restricoesUso:
      'Não indicado para diabetes tipo 1, cetoacidose diabética ou insuficiência renal/hepática grave.',
    acompanhamentoMedico:
      'Acompanhamento médico contínuo com exames de glicemia e hemoglobina glicada.',
    contraindicacoes:
      'Diabetes tipo 1, cetoacidose, gravidez, lactação, insuficiência renal/hepática grave e alergia a sulfonilureias.',
    efeitosColaterais:
      'Hipoglicemia, ganho de peso, náuseas e reações cutâneas raras.',
    interacoesMedicamentosas:
      'Álcool, betabloqueadores (mascaram hipoglicemia), fluconazol, AINEs e corticoides.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Controle glicêmico em diabetes tipo 2.',
      informacoes_basicas_atendente:
        'Confirmar apresentação de 5 mg conforme receita.',
      cuidados_informar:
        'Alertar sobre sinais de hipoglicemia e importância de não ficar sem se alimentar após tomar.',
      quando_encaminhar_farmaceutico:
        'Relato de episódios frequentes de hipoglicemia ou associação com novos medicamentos.',
      quando_procurar_medico:
        'Desmaios, confusão mental, sudorese intensa ou glicemia descontrolada.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'alendronato de sodio',
    categoriaTerapeutica: 'Vitaminas e suplementos',
    paraQueServe:
      'Bisfosfonato indicado para tratamento e prevenção da osteoporose em mulheres pós-menopausa e homens.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar em jejum pela manhã com um copo cheio de água filtrada pura e permanecer em pé/sentado sem deitar por pelo menos 30 minutos antes do café.',
    cuidadosTratamento:
      'Nunca tomar com café, leite, sucos ou água mineral gasosa; não mastigar o comprimido (risco de irritação esofágica).',
    restricoesUso:
      'Contraindicado para pacientes incapazes de permanecer eretos por 30 minutos ou com anormalidades esofágicas.',
    acompanhamentoMedico:
      'Acompanhamento médico periódico com densitometria óssea e revisão de cálcio/vitamina D.',
    contraindicacoes:
      'Estenose ou acalasia esofágica, hipocalcemia não corrigida, incapacidade de ficar em pé/sentado por 30 min e gravidez.',
    efeitosColaterais:
      'Irritação ou dor no esôfago, azia, dor abdominal e dores musculoesqueléticas.',
    interacoesMedicamentosas:
      'Suplementos de cálcio, antiácidos, ferro e alimentos reduzem drasticamente a absorção (separar por pelo menos 30–60 min).',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Tratamento da osteoporose para redução do risco de fraturas.',
      informacoes_basicas_atendente:
        'Confirmar se é dose semanal (70 mg) ou diária (10 mg) conforme prescrição.',
      cuidados_informar:
        'Regra essencial de segurança: tomar só com água pura em jejum e não se deitar por 30 minutos.',
      quando_encaminhar_farmaceutico:
        'Sempre confirmar que o cliente entendeu o modo especial de administração para evitar lesão no esôfago.',
      quando_procurar_medico:
        'Dor intensa para engolir, dor no peito ou queimação forte persistente.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'brometo de ipratropio',
    categoriaTerapeutica: 'Medicamentos para problemas respiratórios',
    paraQueServe:
      'Broncodilatador anticolinérgico indicado para prevenção e tratamento de broncoespasmo na asma, bronquite crônica e DPOC.',
    exigeReceita: 'Sim (Prescrição médica — conferir embalagem/apresentação)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Inalatória (nebulização ou aerossol)',
    comoUtilizarResumo:
      'Usar exclusivamente por via inalatória (nebulização com soro fisiológico ou spray), jamais ingerir solução de nebulização.',
    cuidadosTratamento:
      'Proteger os olhos durante a nebulização com máscara (risco de dilatação pupilar/glaucoma).',
    restricoesUso:
      'Cuidado em glaucoma de ângulo fechado e hiperplasia prostática.',
    acompanhamentoMedico:
      'Acompanhamento médico contínuo das doenças respiratórias crônicas.',
    contraindicacoes:
      'Hipersensibilidade à atropina, ao ipratrópio ou a componentes da fórmula.',
    efeitosColaterais:
      'Boca seca, irritação na garganta, tosse e tontura leve.',
    interacoesMedicamentosas:
      'Outros anticolinérgicos (potencialização de boca seca) e beta-agonistas (uso associado comum sob prescrição).',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz; manter frasco bem fechado.',
    atendimento: {
      finalidade_atendimento: 'Broncodilatador para alívio e controle de falta de ar e chiado.',
      informacoes_basicas_atendente:
        'Confirmar se o cliente busca solução para nebulização ou spray inalatório.',
      cuidados_informar:
        'Lembrar que gotas de nebulização não devem ser engolidas e evitar contato com os olhos.',
      quando_encaminhar_farmaceutico:
        'Dúvidas sobre diluição em soro ou técnica de inalação.',
      quando_procurar_medico:
        'Falta de ar grave que não melhora com a inalação, lábios arroxeados ou dor ocular.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'furosemida',
    categoriaTerapeutica: 'Medicamentos para pressão arterial',
    paraQueServe:
      'Diurético de alça potente indicado para edemas (inchaços) cardíacos, hepáticos ou renais e hipertensão arterial.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Administrar conforme prescrição médica, geralmente pela manhã ou início da tarde.',
    cuidadosTratamento:
      'Pode causar perda significativa de potássio/água; levantar devagar para evitar tontura.',
    restricoesUso:
      'Contraindicado em hipovolemia/desidratação grave, anúria e hipocalemia severa.',
    acompanhamentoMedico:
      'Acompanhamento médico obrigatório para controle de eletrólitos e função renal.',
    contraindicacoes:
      'Insuficiência renal com anúria, pré-coma hepático, hipopotassemia/hiponatremia graves, desidratação e lactação.',
    efeitosColaterais:
      'Diurese intensa, hipotensão, câimbras, desequilíbrio eletrolítico e aumento de ácido úrico.',
    interacoesMedicamentosas:
      'Digitálicos (risco de arritmia se potássio baixo), lítio, aminoglicosídeos, AINEs e corticoides.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz.',
    atendimento: {
      finalidade_atendimento: 'Eliminação de líquidos em excesso (edema) e controle pressórico.',
      informacoes_basicas_atendente:
        'Confirmar apresentação prescrita (40 mg comprimido) conforme receita.',
      cuidados_informar:
        'Alertar sobre risco de tontura ao levantar e importância de hidratação conforme orientação médica.',
      quando_encaminhar_farmaceutico:
        'Relato de fraqueza extrema, câimbras ou uso conjunto com remédios do coração.',
      quando_procurar_medico:
        'Redução súbita de urina, desmaios ou piora do inchaço.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'dipropionato de beclometasona',
    categoriaTerapeutica: 'Medicamentos para problemas respiratórios',
    paraQueServe:
      'Corticoide inalatório ou nasal indicado para tratamento preventivo da asma e rinite alérgica.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Inalatória ou Nasal (conferir apresentação)',
    comoUtilizarResumo:
      'Uso contínuo preventivo conforme prescrição; em inaladores orais, lavar/enxaguar a boca com água após aplicar.',
    cuidadosTratamento:
      'Não serve para alívio imediato de crise aguda de falta de ar; enxaguar boca evita candidíase oral ("sapinho").',
    restricoesUso:
      'Atenção em tuberculose pulmonar ativa ou infecções fúngicas/virais não tratadas.',
    acompanhamentoMedico:
      'Acompanhamento médico contínuo (especialmente em crianças para monitorar crescimento).',
    contraindicacoes:
      'Hipersensibilidade ao princípio ativo ou excipientes.',
    efeitosColaterais:
      'Rouquidão, irritação na garganta, candidíase oral (se não enxaguar a boca) ou sangramento nasal leve (uso nasal).',
    interacoesMedicamentosas:
      'Inibidores potentes de CYP3A4 (ritonavir, cetoconazol) podem aumentar exposição sistêmica.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C); não perfurar ou expor spray pressurizado ao calor.',
    atendimento: {
      finalidade_atendimento: 'Controle preventivo da inflamação respiratória (asma ou rinite).',
      informacoes_basicas_atendente:
        'Confirmar dosagem exata (50, 200 ou 250 mcg) e se é spray nasal ou inalador oral.',
      cuidados_informar:
        'Lembrar de enxaguar a boca após usar bombinha oral e não usar como "bombinha de resgate" na crise.',
      quando_encaminhar_farmaceutico:
        'Orientação da técnica correta do dispositivo inalatório.',
      quando_procurar_medico:
        'Crise aguda de falta de ar ou manchas brancas na boca.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'levotiroxina sodica',
    categoriaTerapeutica: 'Outros',
    paraQueServe:
      'Hormônio tireoidiano sintético indicado para reposição no hipotireoidismo e supressão de TSH em situações específicas.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar em jejum absoluto pela manhã com água pura, aguardando 30 a 60 minutos antes do café da manhã e de outros remédios.',
    cuidadosTratamento:
      'Manter rigor na marca prescrita se orientado pelo médico e nunca alterar a microdosagem por conta própria.',
    restricoesUso:
      'Contraindicado em tireotoxicose não tratada, infarto agudo recente e insuficiência adrenal não tratada.',
    acompanhamentoMedico:
      'Exames periódicos de TSH/T4 livre com endocrinologista ou clínico.',
    contraindicacoes:
      'Hipertireoidismo não tratado, infarto agudo do miocárdio recente, miocardite aguda e insuficiência adrenal não corrigida.',
    efeitosColaterais:
      'Em excesso de dose: palpitações, taquicardia, insônia, tremores, suor e perda de peso.',
    interacoesMedicamentosas:
      'Ferro, cálcio, antiácidos, omeprazol e alimentos reduzem a absorção (separar por 2–4 horas). Interage com varfarina.',
    armazenamento:
      'Conservar em temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Reposição do hormônio da tireoide.',
      informacoes_basicas_atendente:
        'MUITO IMPORTANTE: conferir exatamente a concentração em mcg (25, 50, 75, 88, 100, 112, 125, 150 ou 175 mcg).',
      cuidados_informar:
        'Tomar em jejum só com água e aguardar 30–60 min antes do café, ferro ou cálcio.',
      quando_encaminhar_farmaceutico:
        'Dúvidas sobre troca de marca/genérico ou interação com suplementos.',
      quando_procurar_medico:
        'Palpitações, tremores, falta de ar ou perda de peso acentuada.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'cloridrato de metformina',
    categoriaTerapeutica: 'Outros',
    paraQueServe:
      'Antidiabético oral (biguanida) de primeira linha indicado para controle da glicemia no diabetes mellitus tipo 2.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar durante ou logo após as refeições conforme prescrição para reduzir desconforto estomacal; comprimidos XR devem ser engolidos inteiros.',
    cuidadosTratamento:
      'Informar ao médico antes de exames com contraste iodado ou cirurgias; evitar excesso de álcool.',
    restricoesUso:
      'Contraindicado em insuficiência renal grave (TFG < 30 mL/min) e acidose metabólica.',
    acompanhamentoMedico:
      'Monitoramento médico regular de glicemia, função renal e vitamina B12.',
    contraindicacoes:
      'Acidose láctica/cetoacidose diabética, insuficiência renal grave, desidratação severa e insuficiência hepática grave.',
    efeitosColaterais:
      'Diarreia, náuseas, dor abdominal e gosto metálico (especialmente no início; formas XR costumam ser melhor toleradas).',
    interacoesMedicamentosas:
      'Contrastes iodados intravenosos, álcool em excesso, cimetidina e corticoides.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Controle da glicemia no diabetes tipo 2.',
      informacoes_basicas_atendente:
        'Confirmar concentração (500 mg, 850 mg ou 1 g) e se é liberação imediata ou prolongada (XR/GL).',
      cuidados_informar:
        'Orientar tomada junto às refeições e não partir comprimidos de liberação prolongada.',
      quando_encaminhar_farmaceutico:
        'Queixas gastrointestinais persistentes ou dúvidas entre forma comum e XR.',
      quando_procurar_medico:
        'Mal-estar intenso, respiração rápida, fraqueza severa ou exames com contraste agendados.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'desloratadina',
    categoriaTerapeutica: 'Antialérgicos',
    paraQueServe:
      'Anti-histamínico H1 de segunda geração indicado para alívio dos sintomas de rinite alérgica e urticária crônica.',
    exigeReceita: 'Não (Venda livre / MIP — conferir apresentação)',
    tarja: 'Sem tarja',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Administrar uma vez ao dia conforme bula ou orientação médica, com ou sem alimentos.',
    cuidadosTratamento:
      'Geralmente não causa sonolência relevante, mas observar sensibilidade individual.',
    restricoesUso:
      'Conferir faixa etária permitida no xarope/gotas ou comprimido.',
    acompanhamentoMedico:
      'Procurar médico se sintomas não melhorarem ou houver urticária extensa.',
    contraindicacoes:
      'Hipersensibilidade à desloratadina, loratadina ou excipientes.',
    efeitosColaterais:
      'Fadiga leve, boca seca, dor de cabeça (baixa incidência de sonolência).',
    interacoesMedicamentosas:
      'Poucas interações clinicamente relevantes; cautela com álcool e depressores.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz.',
    atendimento: {
      finalidade_atendimento: 'Alívio de espirros, coriza, coceira nasal/ocular e urticária.',
      informacoes_basicas_atendente:
        'Confirmar se deseja comprimido (adulto) ou solução oral/xarope (infantil/adulto).',
      cuidados_informar:
        'Verificar idade do paciente e histórico de gestação/amamentação.',
      quando_encaminhar_farmaceutico:
        'Gestantes, lactantes, crianças pequenas ou alergia grave com inchaço.',
      quando_procurar_medico:
        'Inchaço de lábios/garganta ou falta de ar (emergência).',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'nimesulida',
    categoriaTerapeutica: 'Anti-inflamatórios',
    paraQueServe:
      'Anti-inflamatório não esteroidal com ação analgésica e antipirética para dor aguda, inflamações musculoesqueléticas e pós-operatórias.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral (ou Tópica se gel)',
    comoUtilizarResumo:
      'Utilizar na menor dose eficaz e pelo menor tempo necessário (em geral máximo de 7 a 15 dias conforme bula/médico), após as refeições.',
    cuidadosTratamento:
      'Atenção ao risco de toxicidade hepática e gástrica em uso prolongado.',
    restricoesUso:
      'Contraindicado para menores de 12 anos, gestantes (especialmente 3º trimestre), lactantes e doença hepática.',
    acompanhamentoMedico:
      'Requer prescrição médica e suspensão imediata diante de sinais hepáticos ou gástricos.',
    contraindicacoes:
      'Menores de 12 anos, úlcera ativa, histórico de hepatotoxicidade por nimesulida, insuficiência hepática/renal/cardíaca grave e gestação.',
    efeitosColaterais:
      'Dor gástrica, náuseas, diarreia, elevação de enzimas hepáticas e tontura.',
    interacoesMedicamentosas:
      'Anticoagulantes, outros AINEs, corticoides, metotrexato, lítio e álcool.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Tratamento de dor aguda e inflamações de curto prazo.',
      informacoes_basicas_atendente:
        'Confirmar apresentação (100 mg comprimido, gotas ou gel) e conferir prescrição.',
      cuidados_informar:
        'Alertar que é contraindicado para menores de 12 anos e não deve ser usado por tempo prolongado.',
      quando_encaminhar_farmaceutico:
        'Pacientes com histórico de gastrite, úlcera, hepatite ou uso de anticoagulantes.',
      quando_procurar_medico:
        'Urina escura, pele amarelada, náusea persistente ou dor estomacal intensa.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'nistatina',
    categoriaTerapeutica: 'Medicamentos dermatológicos',
    paraQueServe:
      'Antifúngico indicado para tratamento de infecções por Candida (candidíase oral, vaginal ou cutânea, conforme apresentação).',
    exigeReceita: 'Depende da apresentação (Tópica/Oral: verificar embalagem e prescrição)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral (bochecho/deglutição), Vaginal ou Tópica (conferir caixa)',
    comoUtilizarResumo:
      'Seguir exatamente a via correta da apresentação (suspensão oral, creme vaginal ou pomada) pelo tempo completo orientado.',
    cuidadosTratamento:
      'Não interromper antes do prazo mesmo se os sintomas melhorarem; manter higiene local.',
    restricoesUso:
      'Uso na gravidez e lactentes deve ser orientado pelo médico.',
    acompanhamentoMedico:
      'Procurar médico se não houver melhora ou em candidíase de repetição.',
    contraindicacoes:
      'Hipersensibilidade à nistatina ou excipientes da fórmula.',
    efeitosColaterais:
      'Irritação local leve, desconforto gastrointestinal eventual (na suspensão oral).',
    interacoesMedicamentosas:
      'Baixa absorção sistêmica; poucas interações conhecidas.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz e calor.',
    atendimento: {
      finalidade_atendimento: 'Tratamento antifúngico tópico/local (candidíase).',
      informacoes_basicas_atendente:
        'MUITO IMPORTANTE: confirmar se o cliente precisa da suspensão oral, creme vaginal ou pomada dermatológica.',
      cuidados_informar:
        'Orientar completar todo o ciclo de aplicação e nunca trocar as vias entre si.',
      quando_encaminhar_farmaceutico:
        'Gestantes, bebês ("sapinho"), infecções recorrentes ou dúvida sobre uso com preservativos.',
      quando_procurar_medico:
        'Febre, dor pélvica intensa, corrimento persistente ou ausência de melhora.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'omeprazol',
    categoriaTerapeutica: 'Medicamentos para estômago e digestão',
    paraQueServe:
      'Inibidor da bomba de prótons (IBP) indicado para redução da acidez gástrica (gastrite, úlcera, esofagite de refluxo).',
    exigeReceita: 'Depende da dosagem/apresentação (20 mg c/ até 14 cáps: MIP · demais: Prescrição)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar em jejum pela manhã (15 a 30 minutos antes do café), engolindo a cápsula inteira sem mastigar ou esmagar os grânulos.',
    cuidadosTratamento:
      'Evitar uso crônico sem acompanhamento médico (pode reduzir absorção de vitamina B12 e magnésio).',
    restricoesUso:
      'Atenção em perda de peso inexplicada, dificuldade de engolir ou vômitos persistentes (sinais de alerta médico).',
    acompanhamentoMedico:
      'Acompanhamento médico necessário em tratamentos superiores a 14 dias.',
    contraindicacoes:
      'Hipersensibilidade ao omeprazol/benzimidazóis e uso com rilpivirina/nelfinavir.',
    efeitosColaterais:
      'Dor de cabeça, diarreia, constipação, dor abdominal e gases.',
    interacoesMedicamentosas:
      'Clopidogrel (reduz efeito antiagregante), levotiroxina, cetoconazol, metotrexato, varfarina e diazepam.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade (frasco bem fechado).',
    atendimento: {
      finalidade_atendimento: 'Redução da acidez estomacal, refluxo e proteção gástrica.',
      informacoes_basicas_atendente:
        'Confirmar dosagem (10 mg, 20 mg ou 40 mg) e quantidade prescrita.',
      cuidados_informar:
        'Orientar tomada em jejum e não abrir/mastigar os grânulos da cápsula.',
      quando_encaminhar_farmaceutico:
        'Pacientes em uso de clopidogrel, levotiroxina ou uso contínuo sem reavaliação.',
      quando_procurar_medico:
        'Dor intensa, vômitos com sangue, fezes escurecidas ou perda de peso sem causa.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'pantoprazol',
    categoriaTerapeutica: 'Medicamentos para estômago e digestão',
    paraQueServe:
      'Inibidor da bomba de prótons indicado para esofagite de refluxo, úlcera péptica e gastrite.',
    exigeReceita: 'Depende da concentração (20 mg MIP até 14 dias · 40 mg Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Engolir o comprimido revestido inteiro com água (não partir nem mastigar), geralmente antes do café da manhã.',
    cuidadosTratamento:
      'Uso prolongado requer acompanhamento médico periódico.',
    restricoesUso:
      'Não substitui investigação médica em sintomas gástricos persistentes ou atípicos.',
    acompanhamentoMedico:
      'Acompanhamento médico para uso além de 2–4 semanas.',
    contraindicacoes:
      'Hipersensibilidade ao pantoprazol e uso com antirretrovirais dependentes de pH ácido.',
    efeitosColaterais:
      'Cefaleia, diarreia, náusea, dor abdominal e distensão.',
    interacoesMedicamentosas:
      'Atazanavir/rilpivirina, metotrexato, cetoconazol e varfarina (menos interação com CYP2C19 do que omeprazol).',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Controle de acidez gástrica, refluxo e gastrite.',
      informacoes_basicas_atendente:
        'Confirmar dosagem (20 mg ou 40 mg) e orientar não partir o comprimido revestido.',
      cuidados_informar:
        'Engolir inteiro com água antes da refeição matinal.',
      quando_encaminhar_farmaceutico:
        'Gestantes, lactantes ou uso contínuo sem avaliação recente.',
      quando_procurar_medico:
        'Sinais de sangramento digestivo, dificuldade ao engolir ou dor torácica.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'olmesartana',
    categoriaTerapeutica: 'Medicamentos para pressão arterial',
    paraQueServe:
      'Antagonista do receptor de angiotensina II indicado para tratamento da hipertensão arterial (isolada ou em associações).',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar uma vez ao dia conforme prescrição médica, com água, com ou sem alimentos.',
    cuidadosTratamento:
      'Não interromper o tratamento sem orientação médica.',
    restricoesUso:
      'Contraindicado na gravidez e no uso conjunto com alisquireno em diabéticos.',
    acompanhamentoMedico:
      'Acompanhamento médico contínuo com controle de pressão e função renal.',
    contraindicacoes:
      'Gravidez, hipersensibilidade à olmesartana e uso concomitante com alisquireno em pacientes diabéticos.',
    efeitosColaterais:
      'Tontura, queda de pressão e raramente enteropatia tipo espru (diarreia crônica grave).',
    interacoesMedicamentosas:
      'AINEs, diuréticos/suplementos de potássio, lítio e colesevelam.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Controle contínuo da hipertensão arterial.',
      informacoes_basicas_atendente:
        'Confirmar se é olmesartana pura (20/40 mg) ou associação (+ HCTZ ou + anlodipino).',
      cuidados_informar:
        'Atenção para não confundir versões puras e associadas na hora de separar.',
      quando_encaminhar_farmaceutico:
        'Relato de diarreia crônica persistente, tonturas ou suspeita de gravidez.',
      quando_procurar_medico:
        'Descontrole pressórico, tonturas graves ou diarreia persistente com perda de peso.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'rosuvastatina',
    categoriaTerapeutica: 'Medicamentos para coração',
    paraQueServe:
      'Estatina potente indicada para redução de colesterol LDL/triglicerídeos e prevenção cardiovascular.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar uma vez ao dia conforme prescrição médica, a qualquer hora do dia, com ou sem alimentos.',
    cuidadosTratamento:
      'Relatar imediatamente ao médico dores ou fraqueza muscular inexplicadas.',
    restricoesUso:
      'Contraindicado na gravidez, amamentação, doença hepática ativa e insuficiência renal grave.',
    acompanhamentoMedico:
      'Monitorização laboratorial periódica pelo médico.',
    contraindicacoes:
      'Doença hepática ativa, gravidez, lactação, insuficiência renal grave e uso com ciclosporina.',
    efeitosColaterais:
      'Dor muscular, dor de cabeça, dor abdominal, náusea e fraqueza.',
    interacoesMedicamentosas:
      'Ciclosporina, genfibrozila, varfarina e antiácidos com alumínio/magnésio (separar por 2 h).',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Controle do colesterol e prevenção cardiovascular.',
      informacoes_basicas_atendente:
        'Confirmar dosagem exata (5 mg, 10 mg, 20 mg ou 40 mg) na receita.',
      cuidados_informar:
        'Orientar manter dieta equilibrada e avisar médico se surgirem dores musculares.',
      quando_encaminhar_farmaceutico:
        'Uso concomitante com antiácidos, anticoagulantes ou queixas musculares.',
      quando_procurar_medico:
        'Dores musculares intensas ou alterações urinárias.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'rivaroxabana',
    categoriaTerapeutica: 'Medicamentos para coração',
    paraQueServe:
      'Anticoagulante oral (inibidor direto do fator Xa) indicado para prevenção de AVC na fibrilação atrial e prevenção/tratamento de trombose venosa.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Uso rigorosamente conforme prescrição médica; as doses de 15 mg e 20 mg DEVEM ser tomadas junto com alimentos para absorção adequada.',
    cuidadosTratamento:
      'Nunca interromper por conta própria (risco grave de trombose/AVC). Atenção máxima a sangramentos e uso de AINEs.',
    restricoesUso:
      'Contraindicado em sangramento ativo, hepatopatia com coagulopatia e gravidez/lactação.',
    acompanhamentoMedico:
      'Acompanhamento médico rigoroso para controle de função renal e risco hemorrágico.',
    contraindicacoes:
      'Sangramento clinicamente significativo ativo, doença hepática associada a coagulopatia, gravidez e lactação.',
    efeitosColaterais:
      'Sangramentos (nasal, gengival, hematomas, gastrintestinal), tontura e anemia.',
    interacoesMedicamentosas:
      'AINEs/AAS, outros anticoagulantes, antiagregantes, itraconazol, ritonavir e carbamazepina.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Prevenção e tratamento de tromboses e AVC (anticoagulante).',
      informacoes_basicas_atendente:
        'Conferir dosagem exata (2,5 mg, 10 mg, 15 mg ou 20 mg) na receita médica.',
      cuidados_informar:
        'Doses de 15 mg e 20 mg devem ser ingeridas com alimentos; evitar anti-inflamatórios sem aval médico.',
      quando_encaminhar_farmaceutico:
        'SEMPRE encaminhar ao farmacêutico dúvidas de pacientes em uso de anticoagulantes.',
      quando_procurar_medico:
        'Qualquer sangramento anormal (fezes pretas, urina avermelhada, sangramento que não cessa) ou queda com trauma.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'salbutamol',
    categoriaTerapeutica: 'Medicamentos para problemas respiratórios',
    paraQueServe:
      'Broncodilatador beta-2 agonista de curta duração indicado para alívio rápido de crises de asma e broncoespasmo.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Inalatória ou Oral (xarope)',
    comoUtilizarResumo:
      'Agitar bem antes de usar o aerossol; utilizar a dose prescrita como medicação de alívio ou prevenção de broncoespasmo por exercício.',
    cuidadosTratamento:
      'Necessidade crescente de uso diário indica descontrole da asma e exige reavaliação médica urgente.',
    restricoesUso:
      'Cuidado em cardiopatias, arritmias, hipertireoidismo e hipertensão severa.',
    acompanhamentoMedico:
      'Acompanhamento médico contínuo da asma.',
    contraindicacoes:
      'Hipersensibilidade aos componentes e ameaça de abortamento/parto prematuro não indicado conforme apresentação.',
    efeitosColaterais:
      'Tremores finos nas mãos, taquicardia, palpitações e dor de cabeça.',
    interacoesMedicamentosas:
      'Betabloqueadores não seletivos (antagonizam o efeito), diuréticos/corticoides (risco de queda de potássio).',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C); recipiente pressurizado não deve ser congelado ou exposto ao calor.',
    atendimento: {
      finalidade_atendimento: 'Alívio rápido do broncoespasmo (falta de ar e chiado).',
      informacoes_basicas_atendente:
        'Confirmar se é aerossol 100 mcg/dose ou xarope.',
      cuidados_informar:
        'Alertar que o uso frequente indica necessidade de revisão médica do tratamento de manutenção.',
      quando_encaminhar_farmaceutico:
        'Orientação sobre técnica de uso do spray/espaçador ou palpitações.',
      quando_procurar_medico:
        'Falta de ar grave sem melhora após as doses recomendadas (emergência).',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'fluconazol',
    categoriaTerapeutica: 'Outros',
    paraQueServe:
      'Antifúngico triazólico indicado para tratamento de candidíase vaginal/oral e micoses sistêmicas ou superficiais.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme prescrição médica (frequentemente dose única 150 mg em candidíase vaginal não complicada, ou esquema prolongado para unhas/outras micoses).',
    cuidadosTratamento:
      'Muitas interações medicamentosas importantes (estatinas, anticoagulantes, hipoglicemiantes).',
    restricoesUso:
      'Evitar na gestação (especialmente altas doses) e amamentação sem avaliação médica.',
    acompanhamentoMedico:
      'Avaliação médica para confirmar diagnóstico fúngico e segurança hepática em usos repetidos.',
    contraindicacoes:
      'Hipersensibilidade a azólicos, uso com fármacos que prolongam QT contraindicados (ex.: terfenadina/cisaprida/amiodarona em risco).',
    efeitosColaterais:
      'Náusea, dor abdominal, diarreia e cefaleia.',
    interacoesMedicamentosas:
      'Sinvastatina/atorvastatina, varfarina, glibenclamida, amiodarona, omeprazol e losartana.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Tratamento antifúngico oral (ex.: candidíase, micoses).',
      informacoes_basicas_atendente:
        'Confirmar dosagem e número de cápsulas prescritas (ex.: 150 mg dose única ou caixa com mais cápsulas).',
      cuidados_informar:
        'Perguntar se faz uso de outros remédios contínuos devido a interações relevantes.',
      quando_encaminhar_farmaceutico:
        'Pacientes em uso de anticoagulantes, estatinas, antidiabéticos ou gestantes.',
      quando_procurar_medico:
        'Sintomas recorrentes, febre, dor pélvica ou sinais hepáticos.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'propranolol',
    categoriaTerapeutica: 'Medicamentos para coração',
    paraQueServe:
      'Betabloqueador não seletivo indicado para hipertensão arterial, arritmias, angina, prevenção de enxaqueca e tremor essencial.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar exatamente conforme prescrição médica, mantendo horários regulares.',
    cuidadosTratamento:
      'Não suspender abruptamente; atenção especial em asmáticos (pode desencadear broncoespasmo grave).',
    restricoesUso:
      'Contraindicado em asma brônquica, DPOC com broncoespasmo, bradicardia acentuada e bloqueio AV.',
    acompanhamentoMedico:
      'Acompanhamento médico contínuo.',
    contraindicacoes:
      'Asma brônquica ou histórico de broncoespasmo, choque cardiogênico, bradicardia severa e bloqueio cardíaco de 2º/3º grau.',
    efeitosColaterais:
      'Fadiga, bradicardia, extremidades frias, distúrbios do sono e tontura.',
    interacoesMedicamentosas:
      'Verapamil, diltiazem, insulina/antidiabéticos, rizatriptana e anti-inflamatórios.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Tratamento cardiovascular, profilaxia de enxaqueca ou controle de tremor.',
      informacoes_basicas_atendente:
        'Confirmar dosagem exata (10 mg, 40 mg ou 80 mg) na receita.',
      cuidados_informar:
        'Verificar se o cliente não tem asma ou chiado no peito antes de qualquer orientação.',
      quando_encaminhar_farmaceutico:
        'Histórico respiratório (asma/bronquite), diabetes ou dúvidas sobre posologia.',
      quando_procurar_medico:
        'Falta de ar súbita, batimentos muito lentos ou desmaio.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'espironolactona',
    categoriaTerapeutica: 'Medicamentos para pressão arterial',
    paraQueServe:
      'Diurético poupador de potássio indicado para insuficiência cardíaca, hipertensão arterial, edemas e hiperaldosteronismo.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme prescrição médica, preferencialmente pela manhã junto a alimentos.',
    cuidadosTratamento:
      'Evitar suplementos de potássio ou substitutos de sal com potássio sem ordem médica.',
    restricoesUso:
      'Contraindicado em hipercalemia, insuficiência renal grave e doença de Addison.',
    acompanhamentoMedico:
      'Monitorização médica periódica de potássio sérico e função renal.',
    contraindicacoes:
      'Hiperpotassemia (potássio elevado), anúria, insuficiência renal aguda/grave e doença de Addison.',
    efeitosColaterais:
      'Hipercalemia, ginecomastia, irregularidade menstrual, sonolência e desconforto gástrico.',
    interacoesMedicamentosas:
      'Inibidores da ECA (enalapril/captopril), BRAs (losartana), suplementos de potássio, lítio e AINEs.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Diurético poupador de potássio para pressão e insuficiência cardíaca.',
      informacoes_basicas_atendente:
        'Confirmar dosagem prescrita (25 mg, 50 mg ou 100 mg).',
      cuidados_informar:
        'Não usar suplementos de potássio nem anti-inflamatórios sem orientação médica.',
      quando_encaminhar_farmaceutico:
        'Associação com enalapril, captopril ou losartana (monitorar risco de potássio alto).',
      quando_procurar_medico:
        'Fraqueza muscular acentuada, palpitações ou tonturas.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'carvedilol',
    categoriaTerapeutica: 'Medicamentos para coração',
    paraQueServe:
      'Betabloqueador com ação alfa-bloqueadora indicado para insuficiência cardíaca crônica, hipertensão arterial e angina.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme prescrição médica, preferencialmente com alimentos para diminuir o risco de queda de pressão ao levantar.',
    cuidadosTratamento:
      'Nunca interromper abruptamente; cuidado em pacientes com asma.',
    restricoesUso:
      'Contraindicado em asma/DPOC com broncoespasmo, bradicardia grave e insuficiência hepática severa.',
    acompanhamentoMedico:
      'Acompanhamento cardiológico regular para titulação segura da dose.',
    contraindicacoes:
      'Insuficiência cardíaca descompensada grave que exija suporte IV, asma brônquica, bloqueio AV de 2º/3º grau e hepatopatia grave.',
    efeitosColaterais:
      'Tontura, fadiga, hipotensão postural, bradicardia e edema.',
    interacoesMedicamentosas:
      'Digoxina, verapamil/diltiazem, insulina/hipoglicemiantes, fluoxetina e AINEs.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz.',
    atendimento: {
      finalidade_atendimento: 'Tratamento contínuo de insuficiência cardíaca e hipertensão.',
      informacoes_basicas_atendente:
        'Conferir concentração exata na receita (3,125 mg, 6,25 mg, 12,5 mg ou 25 mg).',
      cuidados_informar:
        'Orientar tomada junto às refeições e não suspender sem aval médico.',
      quando_encaminhar_farmaceutico:
        'Dúvidas sobre titulação de dose ou histórico de asma/diabetes.',
      quando_procurar_medico:
        'Falta de ar, ganho de peso rápido por retenção de líquido ou desmaio.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'nitazoxanida',
    categoriaTerapeutica: 'Medicamentos para intestino',
    paraQueServe:
      'Antiparasitário e antiviral de amplo espectro indicado para gastroenterites virais (rotavírus/norovírus) e parasitoses intestinais.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Administrar junto com alimentos conforme prescrição médica; na suspensão oral, agitar bem antes de medir a dose.',
    cuidadosTratamento:
      'Pode conferir coloração amarelo-esverdeada inofensiva à urina durante o tratamento.',
    restricoesUso:
      'Conferir idade mínima na suspensão oral (em geral 1 ano+) ou comprimido (12 anos+).',
    acompanhamentoMedico:
      'Avaliação médica em caso de diarreia persistente ou desidratação.',
    contraindicacoes:
      'Hipersensibilidade à nitazoxanida e doenças hepáticas ou renais graves (avaliar risco).',
    efeitosColaterais:
      'Dor abdominal, diarreia leve, náuseas, dor de cabeça e urina amarelada.',
    interacoesMedicamentosas:
      'Anticoagulantes cumarínicos (varfarina) e fármacos com alta ligação a proteínas plasmáticas.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C); após reconstituição da suspensão, seguir exatamente o prazo da bula.',
    atendimento: {
      finalidade_atendimento: 'Tratamento de parasitoses e diarreias infecciosas.',
      informacoes_basicas_atendente:
        'Confirmar se é comprimido 500 mg ou pó para suspensão oral 20 mg/mL.',
      cuidados_informar:
        'Tomar junto aos alimentos; avisar que alteração na cor da urina é esperada e temporária.',
      quando_encaminhar_farmaceutico:
        'Cálculo/preparo de suspensão reconstituída e validade após mistura com água.',
      quando_procurar_medico:
        'Sinais de desidratação, febre alta ou sangue nas fezes.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'azitromicina',
    categoriaTerapeutica: 'Antibióticos',
    paraQueServe:
      'Antibiótico macrolídeo indicado para infecções bacterianas respiratórias, de pele e infecções sexualmente transmissíveis sensíveis.',
    exigeReceita: 'Sim (Retenção de receita — Antimicrobiano RDC 471/2021)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    tipoControle: 'Antimicrobiano — Retenção de Receita Branca (validade 10 dias)',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Uso exclusivo sob prescrição médica; cumprir exatamente o número de dias prescrito mesmo após melhora clínica.',
    cuidadosTratamento:
      'Receita de antimicrobiano tem validade de 10 dias a partir da emissão e exige retenção de via na farmácia.',
    restricoesUso:
      'Cuidado em histórico de arritmia/prolongamento de QT e doença hepática.',
    acompanhamentoMedico:
      'Acompanhamento médico para confirmar resolução da infecção.',
    contraindicacoes:
      'Hipersensibilidade a macrolídeos (azitromicina, eritromicina, claritromicina) e histórico de disfunção hepática por azitromicina.',
    efeitosColaterais:
      'Diarreia, náuseas, dor abdominal e vômitos.',
    interacoesMedicamentosas:
      'Antiácidos com alumínio/magnésio (reduzem absorção), varfarina, digoxina e fármacos que prolongam intervalo QT.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C); suspensão reconstituída conforme prazo específico da bula.',
    atendimento: {
      finalidade_atendimento: 'Antibiótico sujeito a retenção de receita (não é controlado Portaria 344).',
      informacoes_basicas_atendente:
        'Solicitar a receita de antimicrobiano dentro da validade de 10 dias e confirmar apresentação (500 mg ou suspensão).',
      cuidados_informar:
        'Reforçar que não se deve interromper o tratamento antes do fim.',
      quando_encaminhar_farmaceutico:
        'Conferência obrigatória de receita antimicrobiana (SNGPC/RDC 471) e preparo da suspensão.',
      quando_procurar_medico:
        'Piora da febre, reação alérgica ou diarreia intensa persistente.',
    },
    fonte: 'Bulário Eletrônico ANVISA / RDC 471/2021',
  },
  {
    principioChave: 'amoxicilina',
    categoriaTerapeutica: 'Antibióticos',
    paraQueServe:
      'Antibiótico betalactâmico (penicilina) indicado para infecções bacterianas respiratórias, otites, sinusites, urinárias e cutâneas.',
    exigeReceita: 'Sim (Retenção de receita — Antimicrobiano RDC 471/2021)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    tipoControle: 'Antimicrobiano — Retenção de Receita Branca (validade 10 dias)',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar rigorosamente nos horários prescritos pelo médico durante todo o período indicado.',
    cuidadosTratamento:
      'Verificar SEMPRE se o cliente tem alergia à penicilina ou cefalosporinas antes de qualquer orientação.',
    restricoesUso:
      'Contraindicado em alérgicos a penicilinas.',
    acompanhamentoMedico:
      'Reavaliação médica se não houver melhora em 48–72 horas.',
    contraindicacoes:
      'Hipersensibilidade a penicilinas, cefalosporinas ou outros betalactâmicos.',
    efeitosColaterais:
      'Diarreia, náuseas, rash cutâneo e candidíase.',
    interacoesMedicamentosas:
      'Alopurinol (aumenta chance de erupção cutânea), anticoagulantes, probenecida e metotrexato.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C); suspensão reconstituída geralmente exige refrigeração ou prazo curto de validade conforme bula.',
    atendimento: {
      finalidade_atendimento: 'Antibiótico para infecções bacterianas (retenção de receita).',
      informacoes_basicas_atendente:
        'Conferir receita válida (10 dias), concentração (500 mg, 875 mg ou suspensão) e associação com clavulanato se houver.',
      cuidados_informar:
        'Perguntar sobre alergia à penicilina; orientar cumprimento total dos dias de tratamento.',
      quando_encaminhar_farmaceutico:
        'Conferência obrigatória da receita antimicrobiana e preparo da suspensão oral.',
      quando_procurar_medico:
        'Erupções na pele, falta de ar (alergia) ou persistência da febre.',
    },
    fonte: 'Bulário Eletrônico ANVISA / RDC 471/2021',
  },
  {
    principioChave: 'acido acetilsalicilico',
    categoriaTerapeutica: 'Medicamentos para coração',
    paraQueServe:
      'Antiagregante plaquetário (100 mg) para prevenção cardiovascular ou analgésico/antitérmico (500 mg).',
    exigeReceita: 'Depende da indicação/concentração (100 mg uso contínuo requer acompanhamento; 500 mg MIP)',
    tarja: 'Sem tarja',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar conforme bula ou prescrição médica, preferencialmente após alimentos (exceto formulações tamponadas/entéricas com instrução específica).',
    cuidadosTratamento:
      'CONTRAINDICADO em suspeita de dengue (alto risco de sangramento) e em crianças/adolescentes com infecção viral (síndrome de Reye).',
    restricoesUso:
      'Evitar em úlcera gástrica ativa, distúrbios de coagulação e 3º trimestre da gravidez.',
    acompanhamentoMedico:
      'Uso preventivo cardiovascular (100 mg) exige acompanhamento médico contínuo.',
    contraindicacoes:
      'Hipersensibilidade a salicilatos/AINEs, úlcera digestiva ativa, diátese hemorrágica, suspeita de dengue e crianças com quadros virais.',
    efeitosColaterais:
      'Irritação gástrica, azia, sangramento gastrointestinal e hematomas.',
    interacoesMedicamentosas:
      'Anticoagulantes, outros AINEs (ibuprofeno pode interferir no efeito antiplaquetário), corticoides e metotrexato.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da umidade.',
    atendimento: {
      finalidade_atendimento: 'Prevenção de eventos cardiovasculares (100 mg) ou dor/febre (500 mg).',
      informacoes_basicas_atendente:
        'Diferenciar claramente 100 mg (prevenção cardíaca) de 500 mg (analgésico).',
      cuidados_informar:
        'Alertar sobre contraindicação formal na suspeita de dengue e em crianças com viroses.',
      quando_encaminhar_farmaceutico:
        'Uso com anticoagulantes ou associação com ibuprofeno/outros AINEs.',
      quando_procurar_medico:
        'Sangramentos, fezes escurecidas, dor estomacal forte ou suspeita de dengue.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'dapagliflozina',
    categoriaTerapeutica: 'Outros',
    paraQueServe:
      'Inibidor de SGLT2 indicado para diabetes mellitus tipo 2, insuficiência cardíaca e doença renal crônica.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar um comprimido uma vez ao dia conforme prescrição médica, preferencialmente pela manhã, com ou sem alimentos.',
    cuidadosTratamento:
      'Manter boa hidratação e higiene íntima (aumenta eliminação de glicose na urina).',
    restricoesUso:
      'Não indicado para diabetes tipo 1 ou cetoacidose diabética.',
    acompanhamentoMedico:
      'Acompanhamento médico contínuo.',
    contraindicacoes:
      'Hipersensibilidade à dapagliflozina; pacientes em diálise (conferir indicação atual em bula).',
    efeitosColaterais:
      'Infecções fúngicas genitais (candidíase), infecção urinária, aumento da diurese e sede.',
    interacoesMedicamentosas:
      'Diuréticos (risco de desidratação/hipotensão), insulina e sulfonilureias (ajuste contra hipoglicemia).',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C).',
    atendimento: {
      finalidade_atendimento: 'Controle de diabetes tipo 2, proteção cardíaca e renal.',
      informacoes_basicas_atendente:
        'Confirmar dosagem prescrita (5 mg ou 10 mg) e verificar se é pura ou combinada com metformina.',
      cuidados_informar:
        'Orientar boa ingestão de líquidos e atenção a higiene íntima.',
      quando_encaminhar_farmaceutico:
        'Relato de ardência urinária/candidíase de repetição ou associação com diuréticos.',
      quando_procurar_medico:
        'Náuseas intensas, dor abdominal, respiração acelerada ou infecção genital/urinária.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'cloridrato de amiodarona',
    categoriaTerapeutica: 'Medicamentos para coração',
    paraQueServe:
      'Antiarrítmico classe III indicado para tratamento e prevenção de arritmias cardíacas graves ventriculares e supraventriculares.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Uso rigorosamente conforme prescrição cardiológica.',
    cuidadosTratamento:
      'Usar protetor solar diariamente (alta fotossensibilidade cutânea); não suspender sem ordem médica.',
    restricoesUso:
      'Contraindicado em bradicardia sinusal severa, bloqueios AV sem marcapasso e disfunção tireoidiana prévia.',
    acompanhamentoMedico:
      'Exige acompanhamento cardiológico rigoroso com exames periódicos de tireoide, fígado, pulmão e olhos.',
    contraindicacoes:
      'Bradicardia sinusal, bloqueio sinoatrial, bloqueio AV grave sem marcapasso, distúrbios da tireoide, alergia a iodo, gravidez e lactação.',
    efeitosColaterais:
      'Fotossensibilidade, microdepósitos corneanos, alterações tireoidianas (hipo ou hipertireoidismo), toxicidade hepática e pulmonar.',
    interacoesMedicamentosas:
      'Digoxina, varfarina, sinvastatina (limitar dose), betabloqueadores e fármacos que prolongam QT.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz.',
    atendimento: {
      finalidade_atendimento: 'Controle de arritmias cardíacas sob acompanhamento especializado.',
      informacoes_basicas_atendente:
        'Confirmar concentração exata prescrita (100 mg ou 200 mg).',
      cuidados_informar:
        'Alertar sobre uso de protetor solar e evitar iniciar novos remédios sem aval do cardiologista.',
      quando_encaminhar_farmaceutico:
        'SEMPRE encaminhar dúvidas sobre interações medicamentosas com amiodarona.',
      quando_procurar_medico:
        'Falta de ar progressiva, tosse seca, tontura intensa, desmaio ou alteração visual.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'desogestrel',
    categoriaTerapeutica: 'Outros',
    paraQueServe:
      'Anticoncepcional oral contendo apenas progestagênio (minipílula 75 mcg), indicado para prevenção da gravidez, inclusive durante a amamentação.',
    exigeReceita: 'Sim (Prescrição médica)',
    tarja: 'Tarja vermelha',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Tomar 1 comprimido ao dia continuamente no mesmo horário, sem intervalos entre as cartelas.',
    cuidadosTratamento:
      'A eficácia depende fortemente de regularidade no horário (atraso > 12 horas reduz proteção contraceptiva).',
    restricoesUso:
      'Contraindicado em tromboembolismo venoso ativo, hepatopatia grave e câncer dependente de progestagênio.',
    acompanhamentoMedico:
      'Acompanhamento ginecológico regular.',
    contraindicacoes:
      'Gravidez confirmada ou suspeita, trombose venosa ativa, doença hepática grave, tumores sensíveis a progestagênio e sangramento vaginal não diagnosticado.',
    efeitosColaterais:
      'Alteração do padrão menstrual (escapes ou ausência de menstruação), cefaleia, sensibilidade mamária e acne.',
    interacoesMedicamentosas:
      'Carbamazepina, fenitoína, fenobarbital, rifampicina, erva-de-são-joão e certos antirretrovirais reduzem eficácia.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz e umidade.',
    atendimento: {
      finalidade_atendimento: 'Contracepção hormonal contínua sem estrogênio.',
      informacoes_basicas_atendente:
        'Confirmar que se trata de uso contínuo (28 comprimidos sem pausa) conforme prescrição.',
      cuidados_informar:
        'Reforçar tomada sempre no mesmo horário todos os dias.',
      quando_encaminhar_farmaceutico:
        'Dúvidas sobre esquecimento de comprimido, vômito/diarreia após tomada ou interação com outros remédios.',
      quando_procurar_medico:
        'Dor intensa na perna, falta de ar súbita, sangramento intenso persistente ou suspeita de gravidez.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'clotrimazol',
    categoriaTerapeutica: 'Medicamentos dermatológicos',
    paraQueServe:
      'Antifúngico tópico/vaginal indicado para micoses cutâneas (pé-de-atleta, frieira, impingem) ou candidíase vaginal.',
    exigeReceita: 'Depende da apresentação (Dermatológico: MIP · Creme vaginal: verificar embalagem/prescrição)',
    tarja: 'Sem tarja',
    medicamentoControlado: 'Não',
    viaPadrao: 'Tópica ou Vaginal (conferir caixa)',
    comoUtilizarResumo:
      'Aplicar conforme instrução da embalagem/bula na pele limpa e seca ou por via vaginal com aplicador, completando os dias recomendados.',
    cuidadosTratamento:
      'Não aplicar cremes vaginais com preservativos de látex durante o tratamento (risco de ruptura do látex).',
    restricoesUso:
      'Uso vaginal no primeiro trimestre de gestação apenas sob orientação médica.',
    acompanhamentoMedico:
      'Procurar médico se não houver melhora ao final do ciclo ou em recidivas frequentes.',
    contraindicacoes:
      'Hipersensibilidade ao clotrimazol ou componentes da base.',
    efeitosColaterais:
      'Ardência leve transitória, vermelhidão ou irritação local.',
    interacoesMedicamentosas:
      'Pode danificar preservativos/diafragmas de látex (apresentação vaginal); pode interagir com tacrolimo oral em alta absorção.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), bisnaga bem fechada.',
    atendimento: {
      finalidade_atendimento: 'Tratamento tópico de micoses ou candidíase.',
      informacoes_basicas_atendente:
        'Conferir se o cliente busca creme dermatológico ou creme vaginal com aplicadores.',
      cuidados_informar:
        'Orientar completar o período de tratamento para evitar retorno do fungo.',
      quando_encaminhar_farmaceutico:
        'Gestantes, sintomas recorrentes ou dúvida de diferenciação entre uso pele vs vaginal.',
      quando_procurar_medico:
        'Piora da lesão, febre, secreção com odor forte ou dor pélvica.',
    },
    fonte: 'Bulário Eletrônico ANVISA',
  },
  {
    principioChave: 'loratadina',
    categoriaTerapeutica: 'Antialérgicos',
    paraQueServe:
      'Anti-histamínico H1 não sedante indicado para alívio de sintomas de rinite alérgica e urticária.',
    exigeReceita: 'Não (Venda livre / MIP)',
    tarja: 'Sem tarja',
    medicamentoControlado: 'Não',
    viaPadrao: 'Oral',
    comoUtilizarResumo:
      'Administrar uma vez ao dia conforme faixa etária/peso em bula.',
    cuidadosTratamento:
      'Suspender cerca de 48 horas antes de exames alérgicos cutâneos.',
    restricoesUso:
      'Ajuste ou orientação médica em insuficiência hepática grave e gestação.',
    acompanhamentoMedico:
      'Procurar médico se sintomas persistirem.',
    contraindicacoes:
      'Hipersensibilidade à loratadina.',
    efeitosColaterais:
      'Sonolência leve ocasional, dor de cabeça, boca seca e fadiga.',
    interacoesMedicamentosas:
      'Cetoconazol, eritromicina e cimetidina podem elevar seus níveis plasmáticos.',
    armazenamento:
      'Temperatura ambiente (15°C a 30°C), protegido da luz.',
    atendimento: {
      finalidade_atendimento: 'Alívio de sintomas alérgicos nasais e de pele.',
      informacoes_basicas_atendente:
        'Confirmar apresentação comprimido 10 mg ou xarope 1 mg/mL.',
      cuidados_informar:
        'Verificar idade em caso de xarope infantil e presença de pseudoefedrina em versões "D".',
      quando_encaminhar_farmaceutico:
        'Gestantes, lactantes, hipertensos (se buscar versão "D") ou crianças pequenas.',
      quando_procurar_medico:
        'Edema facial/de glote ou falta de ar.',
    },
    fonte: 'Bulário Eletrônico ANVISA / RDC 98/2016 (MIP)',
  },
];

// Deterministic SKU extraction helpers (never invent doses not written on record)
export function extractConcentrationFromText(text?: string): string | null {
  if (!text) return null;
  const match = text.match(
    /\b(\d+(?:[.,]\d+)?(?:\s*\+\s*\d+(?:[.,]\d+)?)?\s*(?:MG\/ML|MCG\/ML|MG\/G|UI\/ML|UI|MCG|MG|G|%)(?:\/\d+ML)?)\b/i
  );
  if (!match) return null;
  return match[1].replace(/\s+/g, ' ').trim();
}

export function extractPresentationFromText(text?: string): {
  forma: string;
  via: string;
} | null {
  const n = norm(text);
  if (!n) return null;

  if (n.includes('creme vag') || n.includes('cr vag') || n.includes('ovulo')) {
    return { forma: 'Creme/Óvulo vaginal', via: 'Vaginal' };
  }
  if (n.includes('colirio') || n.includes('oftalm')) {
    return { forma: 'Solução oftálmica (colírio)', via: 'Oftálmica' };
  }
  if (n.includes('spray nasal') || n.includes('sol nasal') || n.includes('nasal')) {
    return { forma: 'Solução / Spray nasal', via: 'Nasal' };
  }
  if (n.includes('aerossol') || n.includes('inalat') || n.includes('nebuliz') || n.includes('mcg/dose')) {
    return { forma: 'Inalatório / Aerossol', via: 'Inalatória' };
  }
  if (n.includes('injet') || /\bamp\b/.test(n)) {
    return { forma: 'Solução injetável', via: 'Injetável' };
  }
  if (n.includes('xpe') || n.includes('xarope')) {
    return { forma: 'Xarope', via: 'Oral' };
  }
  if (n.includes('gotas') || /\bgt\b/.test(n)) {
    return { forma: 'Gotas orais', via: 'Oral' };
  }
  if (n.includes('sol oral') || n.includes('solucao oral')) {
    return { forma: 'Solução oral', via: 'Oral' };
  }
  if (n.includes('susp')) {
    return { forma: 'Suspensão oral', via: 'Oral' };
  }
  if (n.includes('pomada') || /\bpom\b/.test(n)) {
    return { forma: 'Pomada', via: 'Tópica' };
  }
  if (n.includes('creme')) {
    return { forma: 'Creme dermatológico', via: 'Tópica' };
  }
  if (n.includes('gel')) {
    return { forma: 'Gel', via: 'Tópica' };
  }
  if (n.includes('spray')) {
    return { forma: 'Spray', via: 'Tópica / Local' };
  }
  if (/\bcaps?\b/.test(n) || n.includes('capsula')) {
    return { forma: 'Cápsula', via: 'Oral' };
  }
  if (/\bcp\b/.test(n) || /\bcomp\b/.test(n) || /\bcomprimido/.test(n) || /c\/\s*\d+\s*cp/.test(n)) {
    return { forma: 'Comprimido', via: 'Oral' };
  }
  return null;
}

export function inferCommercialClassification(p: Produto): ClassificacaoComercial {
  if (
    p.classificacao === 'Referência' ||
    p.classificacao === 'Genérico' ||
    p.classificacao === 'Similar' ||
    p.classificacao === 'Isento / Suplemento / Outro'
  ) {
    return p.classificacao;
  }

  const nomeNorm = norm(p.nome);
  const origNorm = norm(p.origem);

  if (nomeNorm.startsWith('gen ') || nomeNorm.startsWith('gen.')) {
    return 'Genérico';
  }
  if (origNorm === 'generico') return 'Genérico';
  if (origNorm === 'referencia') return 'Referência';
  if (origNorm === 'similar') return 'Similar';

  const catNorm = norm(p.categoria);
  if (
    catNorm.includes('suplemento') ||
    catNorm.includes('vitamina') ||
    catNorm.includes('fibra') ||
    catNorm.includes('higiene')
  ) {
    return 'Isento / Suplemento / Outro';
  }

  return 'Não verificado';
}

export function findVerifiedMonograph(principioAtivo?: string): AnvisaMonograph | null {
  const n = norm(principioAtivo);
  if (!n || isUnconfirmedValue(principioAtivo)) return null;

  // Match longer compound keys first so "paracetamol + fosfato de codeina" matches before "paracetamol"
  const sorted = [...ANVISA_VERIFIED_MONOGRAPHS].sort(
    (a, b) => b.principioChave.length - a.principioChave.length
  );

  for (const m of sorted) {
    if (n === m.principioChave || n.includes(m.principioChave)) {
      return m;
    }
  }
  return null;
}

// List missing essential fields for audit UI
export function getCamposFaltantesAudit(p: Produto): string[] {
  const faltantes: string[] = [];
  if (isUnconfirmedValue(p.principio_ativo)) faltantes.push('Princípio ativo');
  if (isUnconfirmedValue(p.fabricante)) faltantes.push('Fabricante/laboratório');
  if (isUnconfirmedValue(p.classificacao)) faltantes.push('Classificação comercial');
  if (isUnconfirmedValue(p.para_que_serve)) faltantes.push('Indicação');
  if (isUnconfirmedValue(p.forma_farmaceutica) && isUnconfirmedValue(p.apresentacao)) {
    faltantes.push('Apresentação/forma');
  }
  if (isUnconfirmedValue(p.concentracao)) faltantes.push('Concentração');
  if (isUnconfirmedValue(p.exige_receita)) faltantes.push('Necessidade de receita');
  if (isUnconfirmedValue(p.tarja)) faltantes.push('Tarja');
  if (isUnconfirmedValue(p.medicamento_controlado)) faltantes.push('Controle especial');
  if (isUnconfirmedValue(p.contraindicacoes)) faltantes.push('Contraindicações');
  if (isUnconfirmedValue(p.efeitos_colaterais)) faltantes.push('Efeitos colaterais');
  if (isUnconfirmedValue(p.interacoes_medicamentosas)) faltantes.push('Interações medicamentosas');
  if (isUnconfirmedValue(p.orientacoes_armazenamento)) faltantes.push('Armazenamento');
  if (isUnconfirmedValue(p.via_administracao)) faltantes.push('Via de administração');
  if (isUnconfirmedValue(p.como_tomar)) faltantes.push('Como utilizar');
  if (!p.informacoes_atendimento?.informacoes_basicas_atendente) {
    faltantes.push('Informações para atendimento');
  }
  return faltantes;
}

// Compute reliable verification status (AI/automation never auto-marks legacy records as "Informações verificadas")
export function computeVerificationStatus(
  p: Produto,
  manuallyVerifiedByAdmin = false
): StatusVerificacao {
  if (p.id === '885' || norm(p.status_conferencia).includes('pendente')) {
    return 'Pendente de verificação';
  }

  const missingCore =
    isUnconfirmedValue(p.principio_ativo) || isUnconfirmedValue(p.para_que_serve);
  if (missingCore) {
    return 'Pendente de verificação';
  }

  const origNorm = norm(p.origem);
  if (
    origNorm.includes('provavel') ||
    origNorm.includes('conferir') ||
    norm(p.categoria).includes('conferir')
  ) {
    return 'Necessita de revisão';
  }

  const faltantes = getCamposFaltantesAudit(p);
  if (faltantes.length > 0) {
    return 'Informações incompletas';
  }

  if (manuallyVerifiedByAdmin || p.status_verificacao === 'Informações verificadas') {
    return 'Informações verificadas';
  }

  // Even when all fields are filled via automated monograph, require pharmacist/admin confirmation
  return 'Necessita de revisão';
}

// Non-destructive enrichment of a single product record
export function complementarProdutoSeguro(p: Produto): Produto {
  const next: Produto = { ...p };

  // 1. Bridge structured clinical details from initial curated 22 products into flat fields
  if (next.para_que_serve_detalhes && isUnconfirmedValue(next.para_que_serve)) {
    next.para_que_serve = next.para_que_serve_detalhes.finalidade;
  }
  if (next.como_utilizar_detalhes) {
    if (isUnconfirmedValue(next.via_administracao)) {
      next.via_administracao = next.como_utilizar_detalhes.via;
    }
    if (isUnconfirmedValue(next.como_tomar)) {
      next.como_tomar = next.como_utilizar_detalhes.posologia_bula;
    }
    if (isUnconfirmedValue(next.orientacoes_uso)) {
      next.orientacoes_uso = [
        next.como_utilizar_detalhes.alimentos_jejum,
        next.como_utilizar_detalhes.horarios,
      ]
        .filter(Boolean)
        .join(' ');
    }
    if (isUnconfirmedValue(next.cuidados_tratamento)) {
      next.cuidados_tratamento = next.como_utilizar_detalhes.cuidados_uso;
    }
    if (isUnconfirmedValue(next.restricoes_uso)) {
      next.restricoes_uso = next.como_utilizar_detalhes.adulto_vs_pediatrico;
    }
  }
  if (next.contraindicacoes_detalhes && isUnconfirmedValue(next.contraindicacoes)) {
    next.contraindicacoes = [
      ...next.contraindicacoes_detalhes.quem_nao_deve_usar,
      `Gestantes/lactantes: ${next.contraindicacoes_detalhes.gestantes_lactantes}`,
      `Crianças/idosos: ${next.contraindicacoes_detalhes.criancas_idosos}`,
    ].join('; ');
  }
  if (next.efeitos_colaterais_detalhes && isUnconfirmedValue(next.efeitos_colaterais)) {
    next.efeitos_colaterais = [
      `Comuns: ${next.efeitos_colaterais_detalhes.comuns.join(', ')}`,
      `Sinais graves: ${next.efeitos_colaterais_detalhes.sinais_graves.join(', ')}`,
    ].join(' | ');
  }
  if (next.interacoes_detalhes && isUnconfirmedValue(next.interacoes_medicamentosas)) {
    next.interacoes_medicamentosas = [
      ...next.interacoes_detalhes.medicamentos_interagem,
      ...next.interacoes_detalhes.associacoes_evitar,
    ].join('; ');
  }
  if (next.cuidados_adicionais && isUnconfirmedValue(next.orientacoes_armazenamento)) {
    next.orientacoes_armazenamento = next.cuidados_adicionais.armazenamento;
  }
  if (next.orientacao_atendimento && !next.informacoes_atendimento) {
    next.informacoes_atendimento = {
      finalidade_atendimento:
        next.para_que_serve || next.orientacao_atendimento.queixas_consideradas.join(', '),
      informacoes_basicas_atendente:
        next.orientacao_atendimento.perguntas_balcao.join(' · '),
      cuidados_informar:
        next.orientacao_atendimento.quando_nao_apropriado.join(' · '),
      quando_encaminhar_farmaceutico:
        next.orientacao_atendimento.quando_encaminhar_farmaceutico.join(' · '),
      quando_procurar_medico:
        next.efeitos_colaterais_detalhes?.quando_interromper ||
        'Procurar médico se houver piora, sinais de alarme ou ausência de resposta.',
    };
  }

  // 2. Deterministic classification & presentation extraction
  if (!next.classificacao || next.classificacao === NAO_VERIFICADO) {
    next.classificacao = inferCommercialClassification(next);
  }
  if (isUnconfirmedValue(next.concentracao)) {
    const extConc = extractConcentrationFromText(next.nome);
    if (extConc) next.concentracao = extConc;
  }
  const extPres = extractPresentationFromText(`${next.nome} ${next.apresentacao || ''}`);
  if (extPres) {
    if (isUnconfirmedValue(next.forma_farmaceutica)) next.forma_farmaceutica = extPres.forma;
    if (isUnconfirmedValue(next.via_administracao)) next.via_administracao = extPres.via;
  }

  // 3. Apply verified ANVISA monograph ONLY when active principle is a confirmed match and fields are empty
  const monograph = findVerifiedMonograph(next.principio_ativo);
  if (monograph) {
    if (isUnconfirmedValue(next.para_que_serve)) {
      next.para_que_serve = monograph.paraQueServe;
    }
    if (isUnconfirmedValue(next.exige_receita)) {
      next.exige_receita = monograph.exigeReceita;
    }
    if (isUnconfirmedValue(next.tarja)) {
      next.tarja = monograph.tarja;
    }
    if (isUnconfirmedValue(next.medicamento_controlado)) {
      next.medicamento_controlado = monograph.medicamentoControlado;
    }
    if (monograph.tipoControle && isUnconfirmedValue(next.tipo_controle)) {
      next.tipo_controle = monograph.tipoControle;
    }
    if (monograph.viaPadrao && isUnconfirmedValue(next.via_administracao)) {
      next.via_administracao = monograph.viaPadrao;
    }
    if (isUnconfirmedValue(next.como_tomar)) {
      next.como_tomar = monograph.comoUtilizarResumo;
    }
    if (isUnconfirmedValue(next.orientacoes_uso)) {
      next.orientacoes_uso = monograph.comoUtilizarResumo;
    }
    if (isUnconfirmedValue(next.cuidados_tratamento)) {
      next.cuidados_tratamento = monograph.cuidadosTratamento;
    }
    if (isUnconfirmedValue(next.restricoes_uso)) {
      next.restricoes_uso = monograph.restricoesUso;
    }
    if (isUnconfirmedValue(next.acompanhamento_medico)) {
      next.acompanhamento_medico = monograph.acompanhamentoMedico;
    }
    if (isUnconfirmedValue(next.contraindicacoes)) {
      next.contraindicacoes = monograph.contraindicacoes;
    }
    if (isUnconfirmedValue(next.efeitos_colaterais)) {
      next.efeitos_colaterais = monograph.efeitosColaterais;
    }
    if (isUnconfirmedValue(next.interacoes_medicamentosas)) {
      next.interacoes_medicamentosas = monograph.interacoesMedicamentosas;
    }
    if (isUnconfirmedValue(next.orientacoes_armazenamento)) {
      next.orientacoes_armazenamento = monograph.armazenamento;
    }
    if (!next.informacoes_atendimento) {
      next.informacoes_atendimento = { ...monograph.atendimento };
    }
    if (!next.fonte_informacao) {
      next.fonte_informacao = monograph.fonte;
    }
  }

  // 4. Separate Tarja vs Controle Especial safely on curated initial items too
  if (isUnconfirmedValue(next.tarja)) {
    const tc = norm(next.tipo_controle);
    const er = norm(next.exige_receita);
    if (tc.includes('tarja preta')) {
      next.tarja = 'Tarja preta';
    } else if (tc.includes('tarja vermelha') || er.includes('prescricao') || er.includes('retencao')) {
      next.tarja = 'Tarja vermelha';
    } else if (er.includes('mip') || er.includes('venda livre') || er.includes('isento')) {
      next.tarja = 'Sem tarja';
    } else if (norm(next.categoria).includes('suplemento') || norm(next.categoria).includes('vitamina')) {
      next.tarja = 'Sem tarja';
      if (isUnconfirmedValue(next.exige_receita)) next.exige_receita = 'Não (Venda livre / Suplemento)';
      if (isUnconfirmedValue(next.medicamento_controlado)) next.medicamento_controlado = 'Não';
    } else {
      next.tarja = NAO_VERIFICADO;
    }
  }

  if (isUnconfirmedValue(next.medicamento_controlado)) {
    const tc = norm(next.tipo_controle);
    const nomeN = norm(next.nome);
    if (
      tc.includes('portaria 344') ||
      tc.includes('receita azul') ||
      tc.includes('controle especial') ||
      nomeN.includes('codeina') ||
      nomeN.includes('tramadol') ||
      /\bc1\b/.test(nomeN)
    ) {
      next.medicamento_controlado = 'Sim';
    } else if (
      tc.includes('nao e controlado') ||
      norm(next.tarja) === 'sem tarja'
    ) {
      next.medicamento_controlado = 'Não';
    } else {
      next.medicamento_controlado = NAO_VERIFICADO;
    }
  }

  // 5. Explicit "Não verificado" placeholders where reliable data is missing
  if (!next.principio_ativo?.trim()) next.principio_ativo = NAO_VERIFICADO;
  if (!next.fabricante?.trim()) next.fabricante = NAO_VERIFICADO;
  if (!next.concentracao?.trim()) next.concentracao = NAO_VERIFICADO;
  if (!next.forma_farmaceutica?.trim()) next.forma_farmaceutica = NAO_VERIFICADO;
  if (!next.exige_receita?.trim()) next.exige_receita = NAO_VERIFICADO;
  if (!next.tarja?.trim()) next.tarja = NAO_VERIFICADO;
  if (!next.medicamento_controlado?.trim()) next.medicamento_controlado = NAO_VERIFICADO;
  if (!next.contraindicacoes?.trim()) next.contraindicacoes = NAO_VERIFICADO;
  if (!next.efeitos_colaterais?.trim()) next.efeitos_colaterais = NAO_VERIFICADO;
  if (!next.interacoes_medicamentosas?.trim()) next.interacoes_medicamentosas = NAO_VERIFICADO;
  if (!next.orientacoes_armazenamento?.trim()) next.orientacoes_armazenamento = NAO_VERIFICADO;
  if (!next.via_administracao?.trim()) next.via_administracao = NAO_VERIFICADO;
  if (!next.acompanhamento_medico?.trim()) {
    next.acompanhamento_medico =
      norm(next.exige_receita).includes('sim')
        ? 'Necessita acompanhamento médico periódico conforme prescrição.'
        : NAO_VERIFICADO;
  }
  if (!next.fonte_informacao?.trim()) {
    next.fonte_informacao = 'Catálogo Ultramed — Aguardando verificação em bula ANVISA';
  }

  // 6. Curated 22 initial medications (IDs 863-884) already validated against official ANVISA labels
  const isCuratedVerifiedInitial =
    Number(next.id) >= 863 && Number(next.id) <= 884 && next.id !== '885';
  if (isCuratedVerifiedInitial) {
    next.status_verificacao = 'Informações verificadas';
    next.data_ultima_verificacao = next.data_ultima_verificacao || '2026-11-16';
  } else {
    next.status_verificacao = computeVerificationStatus(next, false);
  }

  return next;
}

export function complementarListaSemSobrescrever(produtos: Produto[]): {
  produtos: Produto[];
  resumo: {
    totalAnalisados: number;
    verificados: number;
    incompletos: number;
    necessitaRevisao: number;
    pendentes: number;
  };
} {
  const updated = produtos.map((p) => complementarProdutoSeguro(p));
  let verificados = 0;
  let incompletos = 0;
  let necessitaRevisao = 0;
  let pendentes = 0;

  for (const p of updated) {
    if (p.status_verificacao === 'Informações verificadas') verificados++;
    else if (p.status_verificacao === 'Informações incompletas') incompletos++;
    else if (p.status_verificacao === 'Necessita de revisão') necessitaRevisao++;
    else pendentes++;
  }

  return {
    produtos: updated,
    resumo: {
      totalAnalisados: updated.length,
      verificados,
      incompletos,
      necessitaRevisao,
      pendentes,
    },
  };
}
