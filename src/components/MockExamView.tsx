import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  Volume2,
  RotateCcw,
  ArrowRight,
  Award,
  BookOpen
} from 'lucide-react';
import { KanjiItem, KANJI_CATEGORIES } from '../data/kanjiData';
import {
  ExamQuestionType,
  generateExamQuestions,
  calculateExamSummary
} from '../utils/kanjiLogic';
import { speakJapanese } from '../utils/speech';

interface MockExamViewProps {
  allKanji: KanjiItem[];
  onBackToTextbook: () => void;
}

export const MockExamView: React.FC<MockExamViewProps> = ({
  allKanji,
  onBackToTextbook
}) => {
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [questionType, setQuestionType] = useState<'ALL' | ExamQuestionType>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [examSeed, setExamSeed] = useState<number>(101);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const questions = useMemo(
    () => generateExamQuestions(allKanji, questionCount, questionType, categoryFilter, examSeed),
    [allKanji, questionCount, questionType, categoryFilter, examSeed]
  );

  const currentQ = questions[currentQIndex];
  const selectedOption = currentQ ? answers[currentQ.id] : undefined;
  const hasAnsweredCurrent = selectedOption !== undefined;

  const handleSelectOption = (optionIdx: number) => {
    if (!currentQ || hasAnsweredCurrent) return;
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIdx
    }));
  };

  const handleStartNewExam = (
    newCount = questionCount,
    newType = questionType,
    newCat = categoryFilter
  ) => {
    setQuestionCount(newCount);
    setQuestionType(newType);
    setCategoryFilter(newCat);
    setExamSeed(Date.now());
    setCurrentQIndex(0);
    setAnswers({});
    setIsSubmitted(false);
  };

  const summary = useMemo(
    () => calculateExamSummary(questions, answers),
    [questions, answers]
  );

  const answeredCount = Object.keys(answers).length;

  return (
    <section className="max-w-[1040px] mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e2e8f0] dark:border-slate-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mm">
            #စမ်းသပ်ဖြေဆိုရန် · JLPT N3 模擬試験 (Mock Quiz Engine)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mm mt-1">
            JLPT N3 စာမေးပွဲပုံစံ မေးခွန်း (၃) မျိုး (漢字読み・表記・文脈規定) ဖြင့် ခန်းဂျီးစွမ်းရည်ကို စမ်းသပ်ဖြေဆိုပါ
          </p>
        </div>

        <button
          type="button"
          onClick={onBackToTextbook}
          className="min-h-[42px] px-4 py-2 rounded-lg border border-[#e2e8f0] dark:border-slate-700 bg-white dark:bg-[#1e293b] text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-sky-600 dark:text-[#38bdf8]" />
          <span>Back to Textbook Grid</span>
        </button>
      </div>

      {/* Exam Config Bar */}
      <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[#e2e8f0] dark:border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="exam-type-select" className="sr-only">
            Question Type
          </label>
          <select
            id="exam-type-select"
            value={questionType}
            onChange={e =>
              handleStartNewExam(
                questionCount,
                e.target.value as 'ALL' | ExamQuestionType,
                categoryFilter
              )
            }
            className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            <option value="ALL">All Question Types (総合問題)</option>
            <option value="reading">Type 1: 漢字読み (Kanji → Reading)</option>
            <option value="kanji">Type 2: 表記問題 (Hiragana → Kanji)</option>
            <option value="context">Type 3: 文脈規定 (Contextual Usage)</option>
          </select>

          <label htmlFor="exam-category-select" className="sr-only">
            Exam Category
          </label>
          <select
            id="exam-category-select"
            value={categoryFilter}
            onChange={e =>
              handleStartNewExam(questionCount, questionType, e.target.value)
            }
            className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            {KANJI_CATEGORIES.map(c => (
              <option key={c.id} value={c.id}>
                {c.nameJp} ({c.range})
              </option>
            ))}
          </select>

          <label htmlFor="exam-count-select" className="sr-only">
            Number of Questions
          </label>
          <select
            id="exam-count-select"
            value={questionCount}
            onChange={e =>
              handleStartNewExam(Number(e.target.value), questionType, categoryFilter)
            }
            className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            <option value={10}>10 Questions (10問)</option>
            <option value={20}>20 Questions (20問)</option>
            <option value={30}>30 Questions (30問)</option>
            <option value={50}>50 Questions (50問)</option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => handleStartNewExam()}
          className="min-h-[40px] px-3.5 py-1.5 rounded-lg bg-sky-500/10 text-sky-700 dark:bg-sky-400/15 dark:text-[#38bdf8] text-xs font-semibold flex items-center gap-1.5 hover:bg-sky-500/20 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>New Quiz Set (新しい問題)</span>
        </button>
      </div>

      {/* Results Summary View vs Active Question View */}
      {isSubmitted ? (
        <div
          data-testid="exam-summary-card"
          className="bg-white dark:bg-[#1e293b] rounded-2xl border border-[#e2e8f0] dark:border-slate-800 p-6 sm:p-8 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e2e8f0] dark:border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-[#38bdf8]">
                <Award className="w-4 h-4" />
                <span>JLPT N3 MOCK EXAM RESULT · စာမေးပွဲရလဒ်</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono-num">
                Score: {summary.correct} / {summary.total} ({summary.percentage}%)
              </h2>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-mm">
                သတ်မှတ်အဆင့် — {summary.grade}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setCurrentQIndex(0);
                  setIsSubmitted(false);
                }}
                className="min-h-[44px] px-4 py-2 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Retry Same Set
              </button>
              <button
                type="button"
                onClick={() => handleStartNewExam()}
                className="min-h-[44px] px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-[#38bdf8] text-white dark:text-slate-950 text-xs font-bold cursor-pointer"
              >
                Generate New Exam
              </button>
            </div>
          </div>

          {/* Review of Incorrect Answers */}
          {summary.wrongQuestions.length === 0 ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1">
              <p className="text-base font-bold text-emerald-700 dark:text-emerald-300">
                満点合格！ All {summary.total} questions answered correctly!
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-mm">
                မေးခွန်းအားလုံးကို မှန်ကန်စွာ ဖြေဆိုနိုင်ခဲ့ပါသည်။
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-mm">
                မှားယွင်းခဲ့သော မေးခွန်းများ ပြန်လည်လေ့လာရန် ({summary.wrongQuestions.length} ခု)
              </h3>
              <div className="space-y-3">
                {summary.wrongQuestions.map(({ question, selectedIndex }, i) => (
                  <div
                    key={question.id}
                    className="p-4 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-800 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs font-mono-num text-slate-500">
                        #{i + 1} · {question.typeLabelJp} · Kanji No. {question.kanjiId} ({question.targetKanji})
                      </div>
                      <button
                        type="button"
                        onClick={() => speakJapanese(question.options[question.correctIndex])}
                        className="px-2 py-1 rounded bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-slate-700 text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-sky-600" />
                        <span>音声</span>
                      </button>
                    </div>
                    <p className="text-sm font-jp font-bold text-slate-900 dark:text-white">
                      {question.promptJp} — {question.promptSub}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <span className="text-rose-600 dark:text-rose-400 font-semibold">
                        ✗ Your Answer: {selectedIndex >= 0 ? question.options[selectedIndex] : 'Unanswered'}
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                        ✓ Correct Answer: {question.options[question.correctIndex]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-mm">
                      {question.explanationMm}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        currentQ && (
          <div
            data-testid="exam-active-question"
            className="bg-white dark:bg-[#1e293b] rounded-2xl border border-[#e2e8f0] dark:border-slate-800 p-5 sm:p-8 space-y-6"
          >
            {/* Progress Bar & Question Meta */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-num text-slate-500 dark:text-slate-400">
                <span>
                  Question {currentQIndex + 1} of {questions.length} · {currentQ.typeLabelJp}
                </span>
                <span>
                  Answered: {answeredCount} / {questions.length}
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-sky-600 dark:bg-[#38bdf8] transition-all duration-200"
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Prompt Box */}
            <div className="p-5 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-sky-700 dark:text-[#38bdf8] font-mm">
                  {currentQ.typeLabelMm} (Kanji No. {currentQ.kanjiId})
                </span>
                <button
                  type="button"
                  onClick={() => speakJapanese(currentQ.highlightWord)}
                  aria-label="Listen to question word"
                  className="min-h-[36px] px-2.5 py-1 rounded-lg bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-slate-700 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-sky-600 dark:text-[#38bdf8]" />
                  <span>音声</span>
                </button>
              </div>

              <h2 className="text-lg sm:text-xl font-jp font-bold text-slate-900 dark:text-white leading-relaxed">
                {currentQ.promptJp}
              </h2>
              <p className="text-sm sm:text-base font-jp font-semibold text-slate-700 dark:text-slate-200 font-mm">
                {currentQ.promptSub}
              </p>
            </div>

            {/* 4 Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Answer options">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyle =
                  'bg-[#f8fafc] dark:bg-[#0f172a]/70 border-[#e2e8f0] dark:border-slate-800 text-slate-900 dark:text-slate-100 hover:border-sky-500 dark:hover:border-[#38bdf8]';

                if (hasAnsweredCurrent) {
                  if (isCorrect) {
                    btnStyle =
                      'bg-emerald-500/15 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle =
                      'bg-rose-500/15 border-rose-500 text-rose-900 dark:text-rose-200';
                  } else {
                    btnStyle =
                      'bg-[#f8fafc] dark:bg-[#0f172a]/40 border-[#e2e8f0] dark:border-slate-800 text-slate-400 dark:text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    data-testid={`exam-option-${idx}`}
                    disabled={hasAnsweredCurrent}
                    onClick={() => handleSelectOption(idx)}
                    className={`min-h-[54px] p-4 rounded-xl border-2 text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-slate-700 flex items-center justify-center text-xs font-mono-num font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-base sm:text-lg font-jp font-semibold">{opt}</span>
                    </div>

                    {hasAnsweredCurrent && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                    {hasAnsweredCurrent && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Visual & Pedagogical Feedback */}
            {hasAnsweredCurrent && (
              <div
                data-testid="exam-immediate-feedback"
                className={`p-4 rounded-xl border space-y-1.5 ${
                  selectedOption === currentQ.correctIndex
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-950 dark:text-emerald-100'
                    : 'bg-rose-500/10 border-rose-500/40 text-rose-950 dark:text-rose-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    {selectedOption === currentQ.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>正解！ (Correct · အဖြေမှန်ပါသည်)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        <span>不正解 (Incorrect · အဖြေမှားနေပါသည်)</span>
                      </>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => speakJapanese(currentQ.options[currentQ.correctIndex])}
                    className="text-xs font-semibold underline flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> 正解を聞く
                  </button>
                </div>
                <p className="text-xs font-jp">{currentQ.explanationJp}</p>
                <p className="text-xs font-mm">{currentQ.explanationMm}</p>
              </div>
            )}

            {/* Navigation Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-[#e2e8f0] dark:border-slate-800">
              <button
                type="button"
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                className="min-h-[42px] px-4 py-2 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs font-semibold disabled:opacity-40 cursor-pointer"
              >
                Previous Question
              </button>

              {currentQIndex < questions.length - 1 ? (
                <button
                  type="button"
                  data-testid="exam-next-button"
                  onClick={() => setCurrentQIndex(prev => prev + 1)}
                  className="min-h-[42px] px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-[#38bdf8] text-white dark:text-slate-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  data-testid="exam-finish-button"
                  onClick={() => setIsSubmitted(true)}
                  className="min-h-[42px] px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Finish & View Score Summary</span>
                </button>
              )}
            </div>
          </div>
        )
      )}
    </section>
  );
};
