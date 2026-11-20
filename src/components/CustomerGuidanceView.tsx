import React, { useState } from 'react';
import {
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Stethoscope,
  RotateCcw,
} from 'lucide-react';

interface PerguntaAtendimento {
  numero: number;
  pergunta: string;
  objetivo: string;
  alertaFarmaceutico: string;
}

const PERGUNTAS_OBRIGATORIAS: PerguntaAtendimento[] = [
  {
    numero: 1,
    pergunta: 'Qual sintoma você está sentindo?',
    objetivo: 'Compreender a queixa principal relatada pelo cliente sem tentar diagnosticar doenças.',
    alertaFarmaceutico: 'Sintomas como dor no peito, falta de ar, desmaio ou sangramento exigem encaminhamento médico imediato.',
  },
  {
    numero: 2,
    pergunta: 'Há quanto tempo está sentindo isso?',
    objetivo: 'Diferenciar um desconforto agudo recente de quadros persistentes ou agravados.',
    alertaFarmaceutico: 'Sintomas com mais de 3 dias (especialmente febre ou dor intensa) devem ser avaliados pelo farmacêutico ou médico.',
  },
  {
    numero: 3,
    pergunta: 'O medicamento é para você ou outra pessoa?',
    objetivo: 'Identificar quem realmente vai utilizar o produto para coletar dados reais do paciente.',
    alertaFarmaceutico: 'Quando um terceiro compra sem saber histórico clínico, redobrar cautela e encaminhar ao farmacêutico.',
  },
  {
    numero: 4,
    pergunta: 'Qual é a idade da pessoa?',
    objetivo: 'Verificar se a apresentação (adulta, pediátrica ou geriátrica) é compatível com a faixa etária da bula.',
    alertaFarmaceutico: 'Crianças, bebês e idosos apresentam risco maior de erro de dose e reações adversas.',
  },
  {
    numero: 5,
    pergunta: 'É para uma criança? Qual é o peso?',
    objetivo: 'Em pediatria, doses de líquidos e gotas dependem diretamente do peso corporal (mg/kg) e da concentração.',
    alertaFarmaceutico: 'Nunca calcular ou ajustar dose pediátrica por conta própria; sempre validar peso e concentração com o farmacêutico.',
  },
  {
    numero: 6,
    pergunta: 'Você possui alguma alergia?',
    objetivo: 'Evitar reações alérgicas graves (urticária, edema de glote) por substâncias como AINEs, dipirona ou penicilinas.',
    alertaFarmaceutico: 'Qualquer relato de alergia prévia a medicamentos exige conferência imediata com o farmacêutico.',
  },
  {
    numero: 7,
    pergunta: 'Utiliza algum outro medicamento?',
    objetivo: 'Identificar risco de duplicidade de princípio ativo ou interações medicamentosas perigosas.',
    alertaFarmaceutico: 'Uso contínuo (pressão, coração, anticoagulante, tireoide, diabetes) exige revisão farmacêutica.',
  },
  {
    numero: 8,
    pergunta: 'Possui alguma doença ou condição de saúde?',
    objetivo: 'Mapear hipertensão, diabetes, gastrite/úlcera, asma ou problemas nos rins e fígado antes de qualquer orientação.',
    alertaFarmaceutico: 'Hipertensos não devem receber descongestionantes (ex.: Allegra D); pacientes com gastrite evitam anti-inflamatórios.',
  },
  {
    numero: 9,
    pergunta: 'Está grávida ou amamentando, quando aplicável?',
    objetivo: 'Proteger a gestante e o bebê contra medicamentos contraindicados na gestação ou excretados no leite materno.',
    alertaFarmaceutico: 'TODA orientação para gestante ou lactante deve passar obrigatoriamente pelo farmacêutico ou obstetra.',
  },
];

interface FatorRiscoTriagem {
  id: string;
  label: string;
  cuidado: string;
  acao: 'farmaceutico' | 'emergencia';
}

const FATORES_TRIAGEM: FatorRiscoTriagem[] = [
  {
    id: 'crianca',
    label: 'Paciente é criança ou bebê',
    cuidado: 'Confirmar idade exata e peso corporal; conferir concentração correta (ex.: 50 mg/mL vs 100 mg/mL) e nunca usar apresentação adulta sem receita.',
    acao: 'farmaceutico',
  },
  {
    id: 'gestante',
    label: 'Gestante ou mulher amamentando',
    cuidado: 'Diversos analgésicos, anti-inflamatórios (3º trimestre) e descongestionantes são contraindicados. Exigir validação com farmacêutico/obstetra.',
    acao: 'farmaceutico',
  },
  {
    id: 'idoso',
    label: 'Pessoa idosa (60+ anos)',
    cuidado: 'Maior sensibilidade renal, gástrica e risco de interações com múltiplos remédios contínuos. Evitar anti-inflamatórios sem avaliação.',
    acao: 'farmaceutico',
  },
  {
    id: 'cronico',
    label: 'Hipertensão, problema cardíaco, renal ou gastrite',
    cuidado: 'Atenção redobrada com anti-inflamatórios (Alginac, Alivium) e descongestionantes orais (Allegra D). Nunca sugerir sem triagem farmacêutica.',
    acao: 'farmaceutico',
  },
  {
    id: 'polimedicado',
    label: 'Já toma outros medicamentos contínuos',
    cuidado: 'Checar interações (ex.: anticoagulantes com AINEs, levotiroxina com cálcio/AltaD Cal, amiodarona/Ancoron com múltiplos fármacos).',
    acao: 'farmaceutico',
  },
  {
    id: 'alergia',
    label: 'Histórico de alergia medicamentosa',
    cuidado: 'Identificar exatamente qual substância causou reação e evitar alergia cruzada entre anti-inflamatórios.',
    acao: 'farmaceutico',
  },
  {
    id: 'persistente',
    label: 'Sintomas há mais de 3 dias ou sem melhora',
    cuidado: 'Não prolongar automedicação; encaminhar ao farmacêutico para orientar avaliação médica.',
    acao: 'farmaceutico',
  },
  {
    id: 'alarme',
    label: 'Sinal de alarme (falta de ar, dor no peito, inchaço nos lábios, febre muito alta ou suspeita de dengue)',
    cuidado: 'NÃO dispensar produto para aliviar sintomas graves no balcão. Encaminhar imediatamente ao pronto-socorro / atendimento médico de emergência.',
    acao: 'emergencia',
  },
];

export const CustomerGuidanceView: React.FC = () => {
  const [fatoresSelecionados, setFatoresSelecionados] = useState<string[]>([]);
  const [perguntasMarcadas, setPerguntasMarcadas] = useState<number[]>([]);

  const toggleFator = (id: string) => {
    setFatoresSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const togglePergunta = (num: number) => {
    setPerguntasMarcadas((prev) =>
      prev.includes(num) ? prev.filter((item) => item !== num) : [...prev, num]
    );
  };

  const fatoresAtivos = FATORES_TRIAGEM.filter((f) => fatoresSelecionados.includes(f.id));
  const temEmergencia = fatoresAtivos.some((f) => f.acao === 'emergencia');
  const precisaFarmaceutico = fatoresAtivos.length > 0;

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#14387F] dark:text-blue-400">
              <MessageSquare className="w-4 h-4" />
              <span>Protocolo de Atendimento Responsável no Balcão</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-balance">
              Como atender o cliente
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
              Converse com clareza, acolhimento e segurança. Utilize o roteiro de perguntas abaixo para reunir informações essenciais antes de qualquer orientação ou encaminhamento ao farmacêutico.
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 tabular-nums shrink-0">
            Roteiro conferido: <strong className="text-slate-900 dark:text-white">{perguntasMarcadas.length}/9</strong> perguntas
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-2.5 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
          <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Regra fundamental:</strong> Este guia apoia a escuta qualificada do cliente e NÃO realiza diagnóstico médico nem prescrição automática. Em qualquer dúvida clínica, chame o farmacêutico responsável.
          </span>
        </div>
      </div>

      {/* Main Split: 9 Mandatory Questions + Dynamic Risk Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: The 9 Essential Counter Questions */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                As 9 perguntas essenciais do balcão
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Clique em cada pergunta para marcar durante a simulação ou atendimento.
              </p>
            </div>
            {perguntasMarcadas.length > 0 && (
              <button
                onClick={() => setPerguntasMarcadas([])}
                className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-[#14387F] dark:text-slate-400 dark:hover:text-blue-400"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpar</span>
              </button>
            )}
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {PERGUNTAS_OBRIGATORIAS.map((item) => {
              const checked = perguntasMarcadas.includes(item.numero);
              return (
                <button
                  key={item.numero}
                  type="button"
                  onClick={() => togglePergunta(item.numero)}
                  className="w-full text-left py-3.5 px-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-start gap-3"
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold tabular-nums shrink-0 mt-0.5 transition-colors ${
                      checked
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-[#14387F] dark:text-blue-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {checked ? <CheckCircle2 className="w-4 h-4" /> : item.numero}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.pergunta}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {item.objetivo}
                    </p>
                    <p className="text-[11px] text-[#E30521] dark:text-red-400 font-medium">
                      Atenção: {item.alertaFarmaceutico}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Interactive Care & Pharmacist Escalation Helper */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Avaliação de cuidados
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Marque as condições informadas pelo cliente para ver os cuidados obrigatórios.
                </p>
              </div>
              {fatoresSelecionados.length > 0 && (
                <button
                  onClick={() => setFatoresSelecionados([])}
                  className="text-xs font-medium text-[#14387F] dark:text-blue-400 hover:underline"
                >
                  Limpar
                </button>
              )}
            </div>

            <div className="space-y-2">
              {FATORES_TRIAGEM.map((fator) => {
                const selected = fatoresSelecionados.includes(fator.id);
                return (
                  <button
                    key={fator.id}
                    type="button"
                    onClick={() => toggleFator(fator.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-colors flex items-center justify-between gap-2 ${
                      selected
                        ? fator.acao === 'emergencia'
                          ? 'bg-red-50 dark:bg-red-950/40 border-[#E30521] text-red-900 dark:text-red-200'
                          : 'bg-blue-50 dark:bg-blue-950/40 border-[#14387F] dark:border-blue-500 text-slate-900 dark:text-white'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{fator.label}</span>
                    <span
                      className={`text-[11px] font-bold shrink-0 ${
                        selected
                          ? fator.acao === 'emergencia'
                            ? 'text-[#E30521]'
                            : 'text-[#14387F] dark:text-blue-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {selected ? 'Selecionado' : 'Marcar'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Guidance Output */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Stethoscope className="w-4 h-4 text-[#14387F] dark:text-blue-400" />
              <span>Conduta recomendada para o atendente</span>
            </div>

            {!precisaFarmaceutico ? (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <p>
                  Selecione acima qualquer característica relatada pelo cliente (ex.: criança, gestante, hipertensão, alergia ou uso de outro remédio).
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mesmo quando não houver fatores marcados, confira se o medicamento exige receita, verifique a concentração exata e encaminhe dúvidas clínicas ao farmacêutico.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {temEmergencia ? (
                  <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-[#E30521] text-xs sm:text-sm text-red-900 dark:text-red-200 flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-[#E30521] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block">EMERGÊNCIA: orientar atendimento médico imediato</strong>
                      <span className="text-xs">
                        Não tente aliviar sinais de alarme no balcão. Acione o farmacêutico imediatamente e oriente o cliente a buscar pronto atendimento médico.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block">Chamar o farmacêutico responsável</strong>
                      <span className="text-xs">
                        As condições selecionadas exigem avaliação técnica do farmacêutico antes de qualquer indicação ou entrega.
                      </span>
                    </div>
                  </div>
                )}

                <ul className="space-y-2">
                  {fatoresAtivos.map((f) => (
                    <li
                      key={f.id}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 space-y-1"
                    >
                      <div className="font-bold text-slate-900 dark:text-white">{f.label}</div>
                      <p>{f.cuidado}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
