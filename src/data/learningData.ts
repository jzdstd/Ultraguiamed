export type NivelAprendizado = 'basico' | 'intermediario' | 'avancado';

export interface ModuloEstudoMedicamento {
  id: string;
  nivel: NivelAprendizado;
  nomeComercial: string;
  principioAtivo: string;
  categoria: string;
  paraQueServe: string;
  comoFunciona: string;
  comoUtilizar: string;
  principaisContraindicacoes: string;
  efeitosColaterais: string;
  interacoes: string;
  cuidadosAtendimento: string;
  quandoChamarFarmaceutico: string;
  exemploPraticoBalcao: string;
}

export interface PerguntaQuiz {
  id: string;
  nivel: NivelAprendizado;
  pergunta: string;
  opcoes: string[];
  respostaCorretaIndex: number;
  explicacao: string;
  medicamentoRelacionado?: string;
}

export interface PerguntaFrequente {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: string;
}

export const MODULOS_ESTUDO: ModuloEstudoMedicamento[] = [
  {
    id: 'estudo-alivium',
    nivel: 'basico',
    nomeComercial: 'Alivium (50 mg/mL, 100 mg/mL, GC 200 mg/mL, 400 mg e 600 mg)',
    principioAtivo: 'Ibuprofeno',
    categoria: 'Analgésicos / Anti-inflamatórios / Antitérmicos',
    paraQueServe: 'Aliviar dores (cabeça, dente, ouvido, garganta, muscular, cólica), reduzir inflamação e baixar a febre.',
    comoFunciona: 'Bloqueia substâncias inflamatórias (prostaglandinas) produzidas pelo organismo quando há dor, inflamação ou febre.',
    comoUtilizar:
      'Nas gotas infantis, a dose depende sempre do PESO da criança e da concentração do frasco (50 mg/mL é metade do 100 mg/mL). Nos adultos, 400 mg é isento de prescrição; 600 mg exige receita médica.',
    principaisContraindicacoes:
      'Úlcera no estômago, alergia a anti-inflamatórios (AAS, diclofenaco, nimesulida), suspeita de dengue, crianças menores de 6 meses e 3º trimestre da gravidez.',
    efeitosColaterais: 'Dor ou queimação no estômago, náusea; em casos graves, sangramento digestivo ou reação alérgica.',
    interacoes: 'Anticoagulantes (varfarina), corticoides, anti-hipertensivos e outros anti-inflamatórios.',
    cuidadosAtendimento:
      'Nunca confundir Alivium 50 mg/mL, 100 mg/mL e GC 200 mg/mL! Confirmar idade, peso e se há suspeita de dengue antes de encaminhar.',
    quandoChamarFarmaceutico:
      'Crianças menores de 2 anos, dúvida no cálculo de gotas por peso, pedido de 600 mg sem receita ou presença de dor estomacal/hipertensão.',
    exemploPraticoBalcao:
      'Mãe pede "Alivium gotas para criança de 15 kg". Pergunte qual concentração o pediatra prescreveu (50 mg/mL ou 100 mg/mL) e confira na bula/farmacêutico antes de entregar.',
  },
  {
    id: 'estudo-allegra',
    nivel: 'basico',
    nomeComercial: 'Allegra (120 mg, 180 mg, Pediátrico 6 mg/mL e Allegra D)',
    principioAtivo: 'Cloridrato de fexofenadina (+ pseudoefedrina apenas no Allegra D)',
    categoria: 'Antialérgicos',
    paraQueServe:
      'Allegra 120 mg trata rinite alérgica (espirros e coriza); 180 mg trata alergia na pele (urticária); Allegra D trata rinite COM nariz entupido.',
    comoFunciona:
      'Bloqueia a histamina (substância da alergia) sem causar sono na maioria das pessoas. No Allegra D, a pseudoefedrina desentope o nariz contraindo vasos nasais.',
    comoUtilizar:
      'Tomar com água! Evitar sucos de frutas (laranja, maçã, toranja), pois reduzem a absorção. Allegra D deve ser engolido inteiro, sem partir.',
    principaisContraindicacoes:
      'Allegra D é contraindicado em hipertensão grave, doença coronariana, glaucoma de ângulo fechado e uso de IMAO. Pediátrico respeita idade mínima de bula.',
    efeitosColaterais: 'Dor de cabeça leve; no Allegra D, insônia, boca seca, nervosismo e palpitações.',
    interacoes: 'Antiácidos com alumínio e magnésio (espaçar 2h). Allegra D interage com anti-hipertensivos e IMAO.',
    cuidadosAtendimento: 'NUNCA entregar Allegra D no lugar do Allegra comum para um cliente com pressão alta!',
    quandoChamarFarmaceutico:
      'Sempre que o cliente pedir Allegra D (ou qualquer descongestionante), em crianças menores de 2 anos, gestantes ou alergias com falta de ar.',
    exemploPraticoBalcao:
      'Cliente hipertenso pede "Allegra para nariz entupido". Chame o farmacêutico antes de sugerir Allegra D, pois a pseudoefedrina eleva a pressão arterial.',
  },
  {
    id: 'estudo-altad',
    nivel: 'intermediario',
    nomeComercial: 'AltaD (500 UI gotas, Caps 15.000 UI, Caps 50.000 UI e AltaD Cal)',
    principioAtivo: 'Colecalciferol (Vitamina D3) — AltaD Cal associa Cálcio + Vitamina D3',
    categoria: 'Vitaminas e suplementos',
    paraQueServe: 'Repor vitamina D3 no organismo, auxiliando na absorção de cálcio e saúde dos ossos. AltaD Cal também fornece cálcio.',
    comoFunciona: 'A vitamina D3 estimula a absorção intestinal de cálcio e fósforo, fortalecendo ossos e músculos.',
    comoUtilizar:
      'Tomar junto a uma refeição (absorve melhor com gorduras). Caps de 15.000 UI e 50.000 UI geralmente são semanais conforme receita médica — NÃO diárias!',
    principaisContraindicacoes: 'Hipercalcemia (excesso de cálcio no sangue), hipervitaminose D e histórico de cálculo renal sem controle médico.',
    efeitosColaterais: 'Em doses excessivas: náusea, constipação, sede intensa, fraqueza e risco renal.',
    interacoes:
      'Diuréticos tiazídicos, digoxina, anticonvulsivantes. No AltaD Cal, o cálcio atrapalha a absorção da levotiroxina (espaçar 4h) e antibióticos!',
    cuidadosAtendimento:
      'Diferenciar bem 500 UI gotas, 15.000 UI, 50.000 UI e AltaD Cal. Um erro de concentração pode causar excesso grave de vitamina D.',
    quandoChamarFarmaceutico:
      'Cliente sem receita pedindo 15.000 ou 50.000 UI, dúvidas sobre frequência semanal ou cliente usando remédio de tireoide/coração.',
    exemploPraticoBalcao:
      'Cliente com receita de AltaD 50.000 UI 1x/semana pergunta se pode tomar 1 por dia para melhorar mais rápido. Explique que NÃO e chame o farmacêutico.',
  },
  {
    id: 'estudo-alginac-alektos',
    nivel: 'intermediario',
    nomeComercial: 'Alginac 1.000 / Alginac Retard & Alektos 20 mg / PED',
    principioAtivo: 'Alginac: Diclofenaco + Vitaminas B1, B6, B12 | Alektos: Bilastina',
    categoria: 'Anti-inflamatórios / Antialérgicos',
    paraQueServe:
      'Alginac trata dor lombar, ciática e inflamação nervosa (exige receita). Alektos trata rinite alérgica e urticária sem causar sono (exige receita).',
    comoFunciona:
      'Alginac combina anti-inflamatório com vitaminas protetoras do nervo. Alektos bloqueia receptores de alergia H1 periféricos.',
    comoUtilizar:
      'Alginac: após refeições (Retard não pode ser partido). Alektos: EM JEJUM (1h antes ou 2h depois de comer ou tomar suco!).',
    principaisContraindicacoes:
      'Alginac: úlcera, gastrite, hipertensão, doença renal e alergia a AINEs. Alektos: menores que o limite da bula e alergia à bilastina.',
    efeitosColaterais: 'Alginac: dor gástrica, sangramento digestivo, edema. Alektos: dor de cabeça leve.',
    interacoes: 'Alginac: anticoagulantes, corticoides, anti-hipertensivos. Alektos: sucos cítricos e alimentos reduzem muito o efeito.',
    cuidadosAtendimento:
      'No Alginac, nunca trocar 1.000 (50 mg diclofenaco) por Retard (100 mg). No Alektos, lembrar sempre da regra do jejum.',
    quandoChamarFarmaceutico:
      'Sempre quando não houver receita, em idosos ou quando houver dúvida de interação ou apresentação.',
    exemploPraticoBalcao:
      'Paciente pergunta por que o Alektos não fez efeito tomando no café da manhã com suco de laranja: o alimento e o suco reduzem a absorção da bilastina.',
  },
  {
    id: 'estudo-ancoron-amome-andolba',
    nivel: 'avancado',
    nomeComercial: 'Ancoron (100 mg e 200 mg) & Amome (50 mcg) & Andolba',
    principioAtivo: 'Ancoron: Amiodarona | Amome: Furoato de mometasona | Andolba: Benzocaína + Mentol + Antissépticos',
    categoria: 'Coração / Uso Nasal / Dermatológicos',
    paraQueServe:
      'Ancoron controla arritmias cardíacas graves; Amome trata rinite alérgica inflamatória no nariz; Andolba alivia dor/ardor superficial na pele.',
    comoFunciona:
      'Amiodarona estabiliza o ritmo elétrico do coração; Mometasona reduz a inflamação nasal em dias; Benzocaína anestesia terminações da pele.',
    comoUtilizar:
      'Ancoron exige precisão absoluta entre 100 mg e 200 mg. Amome não age em minutos (uso diário contínuo). Andolba é só uso externo e inflamável.',
    principaisContraindicacoes:
      'Ancoron: bradicardia grave, doença da tireoide sem controle, alergia ao iodo e gravidez. Amome: cirurgia nasal recente. Andolba: feridas extensas/olhos.',
    efeitosColaterais:
      'Ancoron: fotossensibilidade solar intensa, alteração de tireoide, tosse seca/toxicidade pulmonar. Amome: leve sangramento nasal.',
    interacoes:
      'Ancoron tem interações gravíssimas com varfarina, digoxina, sinvastatina e antibióticos macrolídeos/quinolonas (risco de arritmia fatal).',
    cuidadosAtendimento:
      'Ancoron é medicamento de alta vigilância: NUNCA sugerir, ajustar ou dispensar sem receita clara e conferência farmacêutica.',
    quandoChamarFarmaceutico:
      'SEMPRE em qualquer dúvida ou associação com Ancoron; em cliente relatando falta de ar/tosse usando amiodarona; em feridas extensas ou infectadas.',
    exemploPraticoBalcao:
      'Paciente usando Ancoron 200 mg pede um antibiótico ou antiarrítmico sem receita ou relata tosse seca há semanas. Encaminhe imediatamente ao farmacêutico/médico.',
  },
];

export const QUIZ_PERGUNTAS: PerguntaQuiz[] = [
  // Nível Básico
  {
    id: 'q-bas-1',
    nivel: 'basico',
    pergunta: 'Para que serve o Alivium?',
    opcoes: [
      'É um antibiótico usado apenas para infecções urinárias.',
      'É um medicamento à base de ibuprofeno, utilizado para aliviar dores e reduzir a febre, respeitando suas indicações, contraindicações e orientações de uso.',
      'É uma vitamina para fortalecer unhas e cabelos.',
      'É um anti-hipertensivo de uso contínuo.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'O Alivium tem como princípio ativo o ibuprofeno (analgésico, antitérmico e anti-inflamatório) e requer atenção à concentração exata e contraindicações.',
    medicamentoRelacionado: 'Alivium',
  },
  {
    id: 'q-bas-2',
    nivel: 'basico',
    pergunta: 'Qual é a diferença principal entre o Allegra 120 mg / 180 mg e o Allegra D?',
    opcoes: [
      'Não existe diferença; ambos possuem apenas fexofenadina.',
      'O Allegra D possui vitamina C na fórmula.',
      'O Allegra D associa fexofenadina com pseudoefedrina (descongestionante nasal), que pode elevar a pressão arterial.',
      'O Allegra D é apenas para crianças menores de 2 anos.',
    ],
    respostaCorretaIndex: 2,
    explicacao:
      'O Allegra D contém pseudoefedrina (descongestionante oral) e é contraindicado em hipertensos graves e cardiopatas. Nunca confundir com Allegra comum.',
    medicamentoRelacionado: 'Allegra D',
  },
  {
    id: 'q-bas-3',
    nivel: 'basico',
    pergunta: 'Por que o atendente nunca deve trocar Alivium 50 mg/mL por Alivium 100 mg/mL mantendo o mesmo número de gotas?',
    opcoes: [
      'Porque o frasco de 100 mg/mL tem sabor diferente apenas.',
      'Porque 100 mg/mL tem o dobro de ibuprofeno por mL, causando risco de superdosagem se der a mesma quantidade de gotas.',
      'Porque o de 50 mg/mL é apenas para uso na pele.',
      'Porque ambos só servem para adultos acima de 60 anos.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'Concentrações diferentes exigem volumes diferentes em gotas. Sempre conferir o peso da criança e a bula oficial daquela apresentação.',
    medicamentoRelacionado: 'Alivium Infantil',
  },
  {
    id: 'q-bas-4',
    nivel: 'basico',
    pergunta: 'O que o atendente deve fazer quando encontra um medicamento com cadastro pendente, como "Algie", sem confirmação na embalagem?',
    opcoes: [
      'Deduzir pelo nome parecido qual deve ser o princípio ativo e dispensar.',
      'Conferir o produto físico, a bula oficial ou chamar o farmacêutico responsável antes de orientar ou dispensar.',
      'Inventar uma posologia padrão de 8 em 8 horas.',
      'Substituir por qualquer outro analgésico sem avisar.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'Nunca presumir composição por nomes parecidos! Quando não houver informação confirmada, consultar embalagem/bula oficial e o farmacêutico.',
    medicamentoRelacionado: 'Algie',
  },

  // Nível Intermediário
  {
    id: 'q-int-1',
    nivel: 'intermediario',
    pergunta: 'Qual é o princípio ativo do Alektos e qual o cuidado essencial ao tomar?',
    opcoes: [
      'Ibuprofeno; deve ser tomado junto de refeições gordurosas.',
      'Bilastina; deve ser tomado em jejum (1 hora antes ou 2 horas depois de alimentos ou sucos de frutas).',
      'Fexofenadina; deve ser mastigado com suco de laranja.',
      'Amiodarona; deve ser aplicado como spray nasal.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'A bilastina sofre grande redução de absorção quando ingerida com alimentos ou sucos de frutas (laranja, maçã, toranja).',
    medicamentoRelacionado: 'Alektos',
  },
  {
    id: 'q-int-2',
    nivel: 'intermediario',
    pergunta: 'Qual é a diferença entre AltaD Caps 15.000 UI e AltaD Cal?',
    opcoes: [
      'São exatamente o mesmo produto com nomes diferentes.',
      'AltaD Caps 15.000 UI contém apenas vitamina D3 (colecalciferol), enquanto AltaD Cal associa cálcio + vitamina D3.',
      'AltaD Cal é um spray nasal antialérgico.',
      'AltaD Caps 15.000 UI deve ser tomado 3 vezes ao dia por crianças pequenas.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'AltaD Cal contém carbonato de cálcio associado à vitamina D3, enquanto AltaD Caps 15.000 UI, 50.000 UI e gotas 500 UI contêm apenas colecalciferol.',
    medicamentoRelacionado: 'AltaD',
  },
  {
    id: 'q-int-3',
    nivel: 'intermediario',
    pergunta: 'Qual orientação correta sobre o spray nasal Amome (furoato de mometasona 50 mcg)?',
    opcoes: [
      'Desentope o nariz instantaneamente em 2 minutos como gota vasoconstritora.',
      'É um corticoide nasal para controle da rinite cujo efeito completo leva dias de uso regular; exige prescrição médica.',
      'Deve ser engolido com água em jejum.',
      'Pode ser usado sem limite em feridas abertas da pele.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'Corticoides nasais como a mometasona tratam a inflamação da mucosa gradualmente, não sendo vasoconstritores de alívio imediato.',
    medicamentoRelacionado: 'Amome',
  },
  {
    id: 'q-int-4',
    nivel: 'intermediario',
    pergunta: 'Qual é a diferença entre Alginac 1.000 e Alginac Retard?',
    opcoes: [
      'Alginac 1.000 tem 50 mg de diclofenaco; Alginac Retard tem 100 mg de diclofenaco em liberação prolongada e NÃO pode ser partido ou mastigado.',
      'Alginac Retard é em gotas infantis.',
      'Alginac 1.000 é apenas vitamina C.',
      'Podem ser trocados livremente sem receita.',
    ],
    respostaCorretaIndex: 0,
    explicacao:
      'Alginac Retard possui o dobro de diclofenaco (100 mg) com liberação prolongada e exige prescrição médica e deglutição inteira.',
    medicamentoRelacionado: 'Alginac',
  },

  // Nível Avançado
  {
    id: 'q-ava-1',
    nivel: 'avancado',
    pergunta: 'Um cliente em uso contínuo de Ancoron (amiodarona) precisa iniciar varfarina ou digoxina, ou relata tosse seca e falta de ar. Qual é a conduta correta?',
    opcoes: [
      'Orientar que é normal da vitamina e não precisa de médico.',
      'Encaminhar imediatamente ao farmacêutico e ao médico, pois amiodarona possui interações graves e risco de toxicidade pulmonar.',
      'Sugerir dobrar a dose do Ancoron por 3 dias.',
      'Recomendar Alivium 600 mg por conta própria para a falta de ar.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'A amiodarona é um antiarrítmico de alta vigilância com interações graves (varfarina, digoxina, estatinas, macrolídeos) e potencial toxicidade pulmonar/tireoidiana.',
    medicamentoRelacionado: 'Ancoron',
  },
  {
    id: 'q-ava-2',
    nivel: 'avancado',
    pergunta: 'Paciente toma levotiroxina sódica em jejum e vai iniciar AltaD Cal (cálcio + vitamina D). Qual cuidado de interação medicamentosa é obrigatório?',
    opcoes: [
      'Tomar o AltaD Cal junto com a levotiroxina no mesmo gole de água.',
      'Manter intervalo de pelo menos 4 horas entre a levotiroxina em jejum e o cálcio, pois o cálcio reduz a absorção do hormônio da tireoide.',
      'Suspender a levotiroxina por conta própria.',
      'Tomar com suco de toranja.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'Sais de cálcio (como carbonato de cálcio no AltaD Cal) quelam e diminuem a absorção da levotiroxina, ferro e antibióticos; requerem espaçamento de horas.',
    medicamentoRelacionado: 'AltaD Cal',
  },
  {
    id: 'q-ava-3',
    nivel: 'avancado',
    pergunta: 'Um cliente com febre alta há 2 dias, dor no corpo e atrás dos olhos (suspeita de dengue) pede Alivium 400 mg. Como agir?',
    opcoes: [
      'Entregar normalmente porque Alivium 400 mg é isento de prescrição.',
      'NÃO recomendar anti-inflamatórios/ibuprofeno em suspeita de dengue pelo risco de sangramento e encaminhar imediatamente ao farmacêutico e avaliação médica.',
      'Substituir por Alginac 1.000.',
      'Vender Alivium 600 mg sem receita.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'Anti-inflamatórios não esteroidais (como ibuprofeno, diclofenaco, AAS) aumentam o risco de hemorragia em pacientes com suspeita de dengue.',
    medicamentoRelacionado: 'Alivium',
  },
  {
    id: 'q-ava-4',
    nivel: 'avancado',
    pergunta: 'Por que sucos de laranja, maçã ou toranja devem ser evitados no horário de tomar Allegra ou Alektos?',
    opcoes: [
      'Porque mudam a cor do comprimido.',
      'Porque inibem transportadores intestinais (OATP), reduzindo significativamente a absorção e a eficácia da fexofenadina e da bilastina.',
      'Porque causam alergia imediata em todas as pessoas.',
      'Porque transformam o remédio em antibiótico.',
    ],
    respostaCorretaIndex: 1,
    explicacao:
      'Sucos cítricos diminuem a biodisponibilidade oral tanto da fexofenadina (Allegra) quanto da bilastina (Alektos); ambos devem ser tomados com água pura.',
    medicamentoRelacionado: 'Allegra / Alektos',
  },
];

export const PERGUNTAS_FREQUENTES: PerguntaFrequente[] = [
  {
    id: 'faq-1',
    categoria: 'Segurança no Balcão',
    pergunta: 'Posso indicar um antibiótico ou medicamento de tarja preta/controlado se o cliente disser que já tomou antes?',
    resposta:
      'Não. Antibióticos (retenção de receita RDC 471/2021) e medicamentos controlados exigem prescrição médica válida e conferência rigorosa pelo farmacêutico. O atendente não diagnostica nem prescreve.',
  },
  {
    id: 'faq-2',
    categoria: 'Apresentações e Doses',
    pergunta: 'Posso trocar a concentração de um medicamento (ex.: Alivium 50 mg/mL por 100 mg/mL ou Ancoron 100 mg por 200 mg)?',
    resposta:
      'Nunca faça troca livre de concentrações ou apresentações (como Retard vs comum ou com descongestionante "D" vs simples). A mudança altera a dose por unidade e pode causar intoxicação ou falha terapêutica. Consulte sempre o farmacêutico.',
  },
  {
    id: 'faq-3',
    categoria: 'Atendimento Infantil',
    pergunta: 'Por que sempre preciso perguntar o peso e a idade quando o medicamento é para criança?',
    resposta:
      'Em pediatria, as doses são calculadas por quilograma de peso corporal (mg/kg) e muitos medicamentos têm idade mínima segura (ex.: ibuprofeno não deve ser usado abaixo de 6 meses). Sem peso e idade, há risco grave de erro de dose.',
  },
  {
    id: 'faq-4',
    categoria: 'Bula e Fontes Oficiais',
    pergunta: 'O que devo fazer quando o sistema exibir "Informação não confirmada. Consulte a bula oficial ou o farmacêutico responsável."?',
    resposta:
      'Não invente doses, composições ou indicações. Utilize o botão "Consultar Bula (Anvisa)", confira a embalagem física do produto em estoque e peça validação ao farmacêutico responsável.',
  },
  {
    id: 'faq-5',
    categoria: 'Interações Comuns',
    pergunta: 'Quais combinações no balcão exigem alerta imediato ao farmacêutico?',
    resposta:
      'Anti-inflamatórios com anticoagulantes/corticoides ou em hipertensos; descongestionantes (Allegra D / pseudoefedrina) em hipertensos; Ancoron (amiodarona) com qualquer outro fármaco; e cálcio (AltaD Cal) no mesmo horário da levotiroxina.',
  },
  {
    id: 'faq-6',
    categoria: 'Localização',
    pergunta: 'Um mesmo medicamento pode aparecer em mais de uma prateleira no sistema?',
    resposta:
      'Sim. Caso o produto esteja exposto ou estocado em mais de uma prateleira (ex.: L8 e L9 ou I1 e L1), todas as localizações são preservadas e exibidas na ficha e nos cards.',
  },
];
