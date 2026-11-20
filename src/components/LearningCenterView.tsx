import React, { useState } from 'react';
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  BookOpen,
  Search,
} from 'lucide-react';
import {
  MODULOS_ESTUDO,
  QUIZ_PERGUNTAS,
  PERGUNTAS_FREQUENTES,
  NivelAprendizado,
} from '../data/learningData';

interface LearningCenterViewProps {
  onQuickSearchMedication: (termo: string) => void;
}

const NIVEIS_INFO: Record<NivelAprendizado, { label: string; desc: string }> = {
  basico: {
    label: 'Básico',
    desc: 'Conhecer os medicamentos, nomes comerciais e apresentações.',
  },
  intermediario: {
    label: 'Intermediário',
    desc: 'Compreender princípios ativos, indicações e formas corretas de uso.',
  },
  avancado: {
    label: 'Avançado',
    desc: 'Estudar contraindicações, interações graves e efeitos adversos.',
  },
};

export const LearningCenterView: React.FC<LearningCenterViewProps> = ({
  onQuickSearchMedication,
}) => {
  const [subTab, setSubTab] = useState<'modulos' | 'quiz' | 'faq'>('modulos');
  const [nivelAtivo, setNivelAtivo] = useState<'todos' | NivelAprendizado>('todos');

  // Quiz state
  const [quizNivel, setQuizNivel] = useState<'todos' | NivelAprendizado>('todos');
  const [respostasQuiz, setRespostasQuiz] = useState<Record<string, number>>({});
  const [openFaqId, setOpenFaqId] = useState<string | null>(PERGUNTAS_FREQUENTES[0]?.id || null);

  const modulosFiltrados =
    nivelAtivo === 'todos'
      ? MODULOS_ESTUDO
      : MODULOS_ESTUDO.filter((m) => m.nivel === nivelAtivo);

  const perguntasFiltradas =
    quizNivel === 'todos'
      ? QUIZ_PERGUNTAS
      : QUIZ_PERGUNTAS.filter((q) => q.nivel === quizNivel);

  const totalRespondidas = perguntasFiltradas.filter((q) => respostasQuiz[q.id] !== undefined).length;
  const totalAcertos = perguntasFiltradas.filter(
    (q) => respostasQuiz[q.id] === q.respostaCorretaIndex
  ).length;

  return (
    <div className="space-y-6">
      {/* Header & Sub-navigation */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#14387F] dark:text-blue-400">
              <GraduationCap className="w-4 h-4" />
              <span>Treinamento para Atendentes</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-balance">
              Aprender sobre medicamentos
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Estude por níveis progressivos, pratique com situações reais de balcão e teste seus conhecimentos com segurança.
            </p>
          </div>

          {/* Segmented Section Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl self-start">
            <button
              onClick={() => setSubTab('modulos')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                subTab === 'modulos'
                  ? 'bg-white dark:bg-[#132238] text-[#14387F] dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Módulos de Estudo
            </button>
            <button
              onClick={() => setSubTab('quiz')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                subTab === 'quiz'
                  ? 'bg-white dark:bg-[#132238] text-[#14387F] dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Teste (Quiz)
            </button>
            <button
              onClick={() => setSubTab('faq')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                subTab === 'faq'
                  ? 'bg-white dark:bg-[#132238] text-[#14387F] dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Perguntas Frequentes
            </button>
          </div>
        </div>

        {/* Learning Levels Overview */}
        {subTab !== 'faq' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {(['basico', 'intermediario', 'avancado'] as NivelAprendizado[]).map((nivel, idx) => {
              const info = NIVEIS_INFO[nivel];
              const isSelected =
                (subTab === 'modulos' ? nivelAtivo : quizNivel) === nivel;
              return (
                <button
                  key={nivel}
                  onClick={() => {
                    if (subTab === 'modulos') {
                      setNivelAtivo(nivelAtivo === nivel ? 'todos' : nivel);
                    } else {
                      setQuizNivel(quizNivel === nivel ? 'todos' : nivel);
                    }
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-colors ${
                    isSelected
                      ? 'bg-[#14387F] text-white border-[#14387F]'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-[#14387F]/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span>Nível 0{idx + 1} · {info.label}</span>
                    {isSelected && <span className="text-[11px] underline">Mostrar todos</span>}
                  </div>
                  <p className={`text-xs ${isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {info.desc}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* TAB 1: STUDY MODULES */}
      {subTab === 'modulos' && (
        <div className="space-y-4">
          {modulosFiltrados.map((mod) => (
            <div
              key={mod.id}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-[#14387F] dark:text-blue-400">
                      Nível {NIVEIS_INFO[mod.nivel].label}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{mod.categoria}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {mod.nomeComercial}
                  </h2>
                  <p className="text-sm font-medium text-[#14387F] dark:text-blue-300 mt-0.5">
                    Princípio ativo: {mod.principioAtivo}
                  </p>
                </div>

                <button
                  onClick={() => onQuickSearchMedication(mod.nomeComercial.split(' ')[0])}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[#14387F] text-slate-800 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-[#14387F] text-xs font-semibold transition-colors whitespace-nowrap shrink-0 self-start"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Ver fichas no catálogo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="space-y-2.5">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Para que serve</h4>
                    <p className="text-slate-600 dark:text-slate-300">{mod.paraQueServe}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Como funciona</h4>
                    <p className="text-slate-600 dark:text-slate-300">{mod.comoFunciona}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Como utilizar</h4>
                    <p className="text-slate-600 dark:text-slate-300">{mod.comoUtilizar}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Cuidados no atendimento</h4>
                    <p className="text-slate-600 dark:text-slate-300">{mod.cuidadosAtendimento}</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Principais contraindicações</h4>
                    <p className="text-slate-600 dark:text-slate-300">{mod.principaisContraindicacoes}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Efeitos colaterais</h4>
                    <p className="text-slate-600 dark:text-slate-300">{mod.efeitosColaterais}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-0.5">Interações</h4>
                    <p className="text-slate-600 dark:text-slate-300">{mod.interacoes}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#E30521] dark:text-red-400 mb-0.5">Quando chamar o farmacêutico</h4>
                    <p className="text-slate-700 dark:text-slate-200 font-medium">{mod.quandoChamarFarmaceutico}</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-[#14387F] dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Situação prática de balcão: </strong>
                  <span>{mod.exemploPraticoBalcao}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: INTERACTIVE QUIZ */}
      {subTab === 'quiz' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 tabular-nums">
              Respondidas: <strong className="text-slate-900 dark:text-white">{totalRespondidas}/{perguntasFiltradas.length}</strong>
              {' · '}
              Acertos: <strong className="text-emerald-600 dark:text-emerald-400">{totalAcertos}</strong>
            </div>

            {Object.keys(respostasQuiz).length > 0 && (
              <button
                onClick={() => setRespostasQuiz({})}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-semibold text-slate-700 dark:text-slate-200"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer perguntas</span>
              </button>
            )}
          </div>

          <div className="space-y-4">
            {perguntasFiltradas.map((q, qIdx) => {
              const chosen = respostasQuiz[q.id];
              const isAnswered = chosen !== undefined;
              const isCorrect = chosen === q.respostaCorretaIndex;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-[#14387F] dark:text-blue-400">
                      Questão {qIdx + 1} · Nível {NIVEIS_INFO[q.nivel].label}
                    </span>
                    {q.medicamentoRelacionado && <span>Tema: {q.medicamentoRelacionado}</span>}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {q.pergunta}
                  </h3>

                  <div className="space-y-2">
                    {q.opcoes.map((opt, optIdx) => {
                      const isThisChosen = chosen === optIdx;
                      const isThisRight = optIdx === q.respostaCorretaIndex;

                      let btnStyle =
                        'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#14387F]/50';
                      if (isAnswered) {
                        if (isThisRight) {
                          btnStyle =
                            'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                        } else if (isThisChosen) {
                          btnStyle =
                            'bg-red-50 dark:bg-red-950/40 border-[#E30521] text-red-900 dark:text-red-200';
                        } else {
                          btnStyle =
                            'bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() =>
                            setRespostasQuiz((prev) => ({ ...prev, [q.id]: optIdx }))
                          }
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-colors flex items-start justify-between gap-3 ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isAnswered && isThisRight && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          )}
                          {isAnswered && isThisChosen && !isThisRight && (
                            <XCircle className="w-4 h-4 text-[#E30521] shrink-0 mt-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div
                      className={`p-3 rounded-xl border text-xs sm:text-sm ${
                        isCorrect
                          ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                          : 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                      }`}
                    >
                      <strong>{isCorrect ? 'Resposta correta: ' : 'Atenção: '}</strong>
                      {q.explicacao}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: FREQUENTLY ASKED QUESTIONS (FAQ) */}
      {subTab === 'faq' && (
        <div className="space-y-3">
          {PERGUNTAS_FREQUENTES.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-[#132238] border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div>
                    <div className="text-xs font-semibold text-[#14387F] dark:text-blue-400 mb-0.5">
                      {faq.categoria}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {faq.pergunta}
                    </div>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#14387F] dark:text-blue-400 shrink-0 mt-0.5" />
                    <p>{faq.resposta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
