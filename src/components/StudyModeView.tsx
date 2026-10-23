import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Volume2,
  PenTool,
  Eraser,
  BookOpen
} from 'lucide-react';
import { KanjiItem } from '../data/kanjiData';
import { getStrokeBreakdown } from '../utils/kanjiLogic';
import { speakJapanese } from '../utils/speech';

interface StudyModeViewProps {
  kanjiList: KanjiItem[];
  selectedKanji: KanjiItem;
  onSelectKanji: (item: KanjiItem) => void;
  onBackToTextbook: () => void;
}

export const StudyModeView: React.FC<StudyModeViewProps> = ({
  kanjiList,
  selectedKanji,
  onSelectKanji,
  onBackToTextbook
}) => {
  const [activeStrokeStep, setActiveStrokeStep] = useState<number>(selectedKanji.strokes);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [practiceMode, setPracticeMode] = useState<'guide' | 'draw'>('guide');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef<boolean>(false);

  const steps = getStrokeBreakdown(selectedKanji);

  useEffect(() => {
    setActiveStrokeStep(selectedKanji.strokes);
    setIsPlaying(false);
    clearCanvas();
  }, [selectedKanji]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveStrokeStep(prev => {
        if (prev >= selectedKanji.strokes) {
          setIsPlaying(false);
          return selectedKanji.strokes;
        }
        return prev + 1;
      });
    }, 650);
    return () => window.clearInterval(timer);
  }, [isPlaying, selectedKanji.strokes]);

  const handlePlayAnimation = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setActiveStrokeStep(1);
      setIsPlaying(true);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      const t = e.touches[0] || e.changedTouches[0];
      return {
        x: ((t.clientX - rect.left) / rect.width) * canvas.width,
        y: ((t.clientY - rect.top) / rect.height) * canvas.height
      };
    }
    return {
      x: ((e.clientX - rect.left) / rect.width) * canvas.width,
      y: ((e.clientY - rect.top) / rect.height) * canvas.height
    };
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const moveDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#0284c7';
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDraw = () => {
    isDrawingRef.current = false;
  };

  const currentIdx = kanjiList.findIndex(k => k.id === selectedKanji.id);
  const handlePrevKanji = () => {
    const prevIdx = currentIdx > 0 ? currentIdx - 1 : kanjiList.length - 1;
    onSelectKanji(kanjiList[prevIdx]);
  };
  const handleNextKanji = () => {
    const nextIdx = currentIdx < kanjiList.length - 1 ? currentIdx + 1 : 0;
    onSelectKanji(kanjiList[nextIdx]);
  };

  return (
    <section className="max-w-[1380px] mx-auto px-3 sm:px-6 py-6 space-y-8">
      {/* Mode Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e2e8f0] dark:border-slate-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mm">
            #လေ့လာရန် · 漢字の筆順と音訓ガイド (Study Mode)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mm mt-1">
            ခန်းဂျီး (၄၀၅) လုံး၏ စုတ်ချက်အရေအတွက် (画数)၊ ရေးဆွဲပုံအဆင့်ဆင့်နှင့် 音読み (Onyomi) / 訓読み (Kunyomi) သီအိုရီလမ်းညွှန်
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

      {/* Two-Zone Sandbox Layout: Zone 1 (Stroke Order Visualizer) + Zone 2 (Stroke Breakdown & Selector) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Zone: Interactive Stroke Order Canvas & Calligraphy Grid (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#1e293b] rounded-xl border border-[#e2e8f0] dark:border-slate-800 p-5 sm:p-6">
          {/* Kanji Selector Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#e2e8f0] dark:border-slate-800">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevKanji}
                aria-label="Previous Kanji in Study Mode"
                className="min-w-[40px] min-h-[40px] rounded-lg border border-[#e2e8f0] dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <label htmlFor="study-kanji-select" className="sr-only">
                Select Kanji to inspect stroke order
              </label>
              <select
                id="study-kanji-select"
                value={selectedKanji.id}
                onChange={e => {
                  const found = kanjiList.find(k => k.id === Number(e.target.value));
                  if (found) onSelectKanji(found);
                }}
                className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-slate-100"
              >
                {kanjiList.map(k => (
                  <option key={k.id} value={k.id}>
                    No. {k.id} — {k.kanji} ({k.strokes}画 · {k.english.split(',')[0]})
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={handleNextKanji}
                aria-label="Next Kanji in Study Mode"
                className="min-w-[40px] min-h-[40px] rounded-lg border border-[#e2e8f0] dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => speakJapanese(selectedKanji.vocab[0]?.cleanWord || selectedKanji.kanji)}
                aria-label={`Pronounce ${selectedKanji.kanji}`}
                className="min-h-[40px] px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-700 dark:bg-sky-400/15 dark:text-[#38bdf8] text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>発音 (Audio)</span>
              </button>

              <div className="flex items-center p-1 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setPracticeMode('guide')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    practiceMode === 'guide'
                      ? 'bg-white dark:bg-[#1e293b] text-slate-900 dark:text-white shadow-2xs'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  筆順ガイド
                </button>
                <button
                  type="button"
                  onClick={() => setPracticeMode('draw')}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                    practiceMode === 'draw'
                      ? 'bg-white dark:bg-[#1e293b] text-slate-900 dark:text-white shadow-2xs'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <PenTool className="w-3 h-3" />
                  <span>手書き練習</span>
                </button>
              </div>
            </div>
          </div>

          {/* Kanji Visual Stage & Calligraphy Grid */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
            <div className="relative aspect-square max-w-[280px] w-full mx-auto rounded-2xl bg-[#f8fafc] dark:bg-[#0f172a] border-2 border-[#e2e8f0] dark:border-slate-700 overflow-hidden flex items-center justify-center select-none">
              {/* Traditional Tianzige (田字格) Quadrant Guidelines */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                <line
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="100"
                  stroke="currentColor"
                  strokeDasharray="3 3"
                  className="text-slate-300 dark:text-slate-700"
                  strokeWidth="0.6"
                />
                <line
                  x1="0"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="currentColor"
                  strokeDasharray="3 3"
                  className="text-slate-300 dark:text-slate-700"
                  strokeWidth="0.6"
                />
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  stroke="currentColor"
                  strokeDasharray="2 4"
                  className="text-slate-200 dark:text-slate-800"
                  strokeWidth="0.4"
                />
                <line
                  x1="100"
                  y1="0"
                  x2="0"
                  y2="100"
                  stroke="currentColor"
                  strokeDasharray="2 4"
                  className="text-slate-200 dark:text-slate-800"
                  strokeWidth="0.4"
                />

                {/* Animated Stroke Direction Vectors up to activeStrokeStep */}
                {practiceMode === 'guide' &&
                  steps.slice(0, activeStrokeStep).map((st, idx) => {
                    const isCurrent = idx + 1 === activeStrokeStep;
                    return (
                      <g key={st.step} opacity={isCurrent ? 0.95 : 0.35}>
                        <circle
                          cx={14 + ((idx * 13) % 72)}
                          cy={14 + ((idx * 17) % 72)}
                          r="4.2"
                          className={
                            isCurrent
                              ? 'fill-sky-600 dark:fill-[#38bdf8]'
                              : 'fill-slate-400 dark:fill-slate-600'
                          }
                        />
                        <text
                          x={14 + ((idx * 13) % 72)}
                          y={15.5 + ((idx * 17) % 72)}
                          textAnchor="middle"
                          fontSize="4.5"
                          fill="#ffffff"
                          fontWeight="bold"
                        >
                          {st.step}
                        </text>
                      </g>
                    );
                  })}
              </svg>

              {/* Main Kanji Character Display */}
              <span
                className={`text-[148px] font-jp font-bold leading-none transition-opacity ${
                  practiceMode === 'draw'
                    ? 'text-slate-300/45 dark:text-slate-700/50'
                    : 'text-slate-900 dark:text-white'
                }`}
                style={{
                  opacity:
                    practiceMode === 'draw'
                      ? 0.3
                      : Math.max(0.25, activeStrokeStep / selectedKanji.strokes)
                }}
              >
                {selectedKanji.kanji}
              </span>

              {/* Interactive Freehand Drawing Canvas */}
              {practiceMode === 'draw' && (
                <canvas
                  ref={canvasRef}
                  width={280}
                  height={280}
                  data-testid="kanji-practice-canvas"
                  onMouseDown={startDraw}
                  onMouseMove={moveDraw}
                  onMouseUp={endDraw}
                  onMouseLeave={endDraw}
                  onTouchStart={startDraw}
                  onTouchMove={moveDraw}
                  onTouchEnd={endDraw}
                  className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
                />
              )}

              {/* Corner Stroke Badge */}
              <div className="absolute bottom-2.5 right-3 text-xs font-mono-num font-bold text-slate-600 dark:text-slate-300">
                {activeStrokeStep} / {selectedKanji.strokes} 画
              </div>
            </div>

            {/* Kanji Summary Details & Playback Controls */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono-num text-slate-500 dark:text-slate-400">
                  No. {selectedKanji.id} · 総画数 {selectedKanji.strokes} 画 · {selectedKanji.category}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                  「{selectedKanji.kanji}」 — {selectedKanji.english}
                </h2>
              </div>

              <div className="space-y-1.5 text-sm p-3.5 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-800">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-500">音読み (Onyomi):</span>
                  <span className="font-jp font-bold text-slate-900 dark:text-white">
                    {selectedKanji.onyomi}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-500">訓読み (Kunyomi):</span>
                  <span className="font-jp font-bold text-sky-700 dark:text-[#38bdf8]">
                    {selectedKanji.kunyomi}
                  </span>
                </div>
                <div className="pt-1.5 border-t border-[#e2e8f0] dark:border-slate-800 text-xs font-mm text-slate-700 dark:text-slate-300">
                  အဓိကဝေါဟာရ — {selectedKanji.vocab[0]?.word} ({selectedKanji.vocab[0]?.meaning})
                </div>
              </div>

              {/* Playback & Step Controls */}
              {practiceMode === 'guide' ? (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePlayAnimation}
                      className="flex-1 min-h-[42px] px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-[#38bdf8] dark:hover:bg-sky-300 text-white dark:text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{isPlaying ? 'Pause' : 'Animate Strokes'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsPlaying(false);
                        setActiveStrokeStep(selectedKanji.strokes);
                      }}
                      aria-label="Reset stroke steps"
                      className="min-w-[42px] min-h-[42px] rounded-lg border border-[#e2e8f0] dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <label
                      htmlFor="stroke-step-slider"
                      className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1"
                    >
                      <span>Stroke Step Progression (画数ステップ)</span>
                      <span className="font-mono-num">
                        Step: {activeStrokeStep} / {selectedKanji.strokes} 画
                      </span>
                    </label>
                    <input
                      id="stroke-step-slider"
                      type="range"
                      min={1}
                      max={selectedKanji.strokes}
                      value={activeStrokeStep}
                      onChange={e => {
                        setIsPlaying(false);
                        setActiveStrokeStep(Number(e.target.value));
                      }}
                      className="w-full accent-sky-600 dark:accent-[#38bdf8] cursor-pointer"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-mm">
                    ဘယ်ဘက်ရှိ လေးထောင့်ကွက်ပေါ်တွင် မောက်စ် သို့မဟုတ် လက်ချောင်းဖြင့် ခန်းဂျီး 「{selectedKanji.kanji}」 ကို စမ်းသပ်ရေးဆွဲကြည့်ပါ။
                  </p>
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="w-full min-h-[42px] px-3 py-2 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    <Eraser className="w-4 h-4" />
                    <span>Clear Drawing Pad (消去)</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Step-by-Step Stroke Order Breakdown List */}
          <div className="mt-6 pt-5 border-t border-[#e2e8f0] dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
              画数・筆順ステップ内訳 (Stroke Breakdown: {selectedKanji.strokes} Strokes)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
              {steps.map(st => {
                const isSelected = st.step === activeStrokeStep;
                return (
                  <button
                    key={st.step}
                    type="button"
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveStrokeStep(st.step);
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50/90 dark:bg-sky-950/40 border-sky-500 dark:border-[#38bdf8]'
                        : 'bg-[#f8fafc] dark:bg-[#0f172a]/60 border-[#e2e8f0] dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {st.labelJp}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 font-mm mt-0.5">
                      {st.labelMm}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Zone: Onyomi (音読み) & Kunyomi (訓読み) Theory Guide (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-[#1e293b] rounded-xl border border-[#e2e8f0] dark:border-slate-800 p-5 sm:p-6 space-y-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              音読み (Onyomi) & 訓読み (Kunyomi) Theory Guide
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mm mt-1">
              JLPT N3 စာမေးပွဲဖြေဆိုမည့်သူများအတွက် ခန်းဂျီးအသံထွက် (၂) မျိုး ခွဲခြားနည်း သီအိုရီ
            </p>
          </div>

          {/* 1. Onyomi Section */}
          <div className="p-4 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a]/70 border border-[#e2e8f0] dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              01. 音読み (Onyomi — တရုတ်အသံထွက်အခြေခံ)
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-mm">
              ရှေးခေတ်တရုတ်ဘာသာစကားမှ ဆင်းသက်လာသော အသံထွက်ဖြစ်ပြီး အဘိဓာန်များတွင် <strong>Katakana (カタカナ)</strong> ဖြင့် ရေးသားဖော်ပြပါသည်။ ခန်းဂျီး ၂ လုံးနှင့်အထက် ပေါင်းစပ်ထားသော စကားလုံးတွဲများ (熟語 - Jukugo) တွင် အဓိကအသုံးပြုပါသည်။
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {[
                { word: '飛行場', reading: 'ひこうじょう (ヒ・コウ・ジョウ)' },
                { word: '空港', reading: 'くうこう (クウ・コウ)' },
                { word: '満席', reading: 'まんせき (マン・セキ)' }
              ].map(ex => (
                <button
                  key={ex.word}
                  type="button"
                  onClick={() => speakJapanese(ex.word)}
                  className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-slate-700 text-xs font-jp flex items-center gap-1.5 hover:border-sky-500 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-sky-600 dark:text-[#38bdf8]" />
                  <span className="font-bold">{ex.word}</span>
                  <span className="text-slate-500 dark:text-slate-400">{ex.reading}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Kunyomi Section */}
          <div className="p-4 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a]/70 border border-[#e2e8f0] dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              02. 訓読み (Kunyomi — ဂျပန်မူရင်းအသံထွက်)
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-mm">
              ဂျပန်လူမျိုးတို့၏ မူရင်းစကားသံနှင့် အဓိပ္ပာယ်ကို ခန်းဂျီးဖြင့် တွဲဖက်ထားခြင်းဖြစ်ပြီး <strong>Hiragana (ひらがな)</strong> ဖြင့် ဖော်ပြပါသည်။ ခန်းဂျီးတစ်လုံးတည်းရပ်တည်သော နာမ်များ သို့မဟုတ် နောက်တွင် Hiragana (送り仮名 - Okurigana) ပါသော ကြိယာနှင့် နာမဝိသေသနများတွင် သုံးပါသည်။
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {[
                { word: '飛ぶ', reading: 'と-ぶ (ပျံသန်းသည်)' },
                { word: '預ける', reading: 'あず-ける (အပ်နှံသည်)' },
                { word: '眠い', reading: 'ねむ-い (အိပ်ငိုက်သော)' }
              ].map(ex => (
                <button
                  key={ex.word}
                  type="button"
                  onClick={() => speakJapanese(ex.word)}
                  className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-slate-700 text-xs font-jp flex items-center gap-1.5 hover:border-sky-500 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5 text-sky-600 dark:text-[#38bdf8]" />
                  <span className="font-bold">{ex.word}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-mm">{ex.reading}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Exceptions & N3 Rules of Thumb */}
          <div className="p-4 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a]/70 border border-[#e2e8f0] dark:border-slate-800 space-y-2.5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              03. JLPT N3 重要ルールと例外 (Key Rules & Exceptions)
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-mm">
              <li>
                <strong>• 連濁 (Rendaku — အသံပြောင်းလဲခြင်း):</strong> စကားလုံးနှစ်လုံးပေါင်းသည့်အခါ ဒုတိယစကားလုံး၏ အစဗျည်းသည် အသံလေး (濁音 ゛) သို့ ပြောင်းတတ်ပါသည်။ ဥပမာ — 紙 + 袋 (ふくろ → <strong>かみぶくろ</strong>)၊ ごみ + 箱 (はこ → <strong>ごみばこ</strong>)။
              </li>
              <li>
                <strong>• 促音便 (Small っ ပြောင်းလဲခြင်း):</strong> 音読み တွင် つ・く・ち ဖြင့်ဆုံးသော ခန်းဂျီးနောက်တွင် か・さ・た・は လိုင်းလာပါက 「っ」 သို့ ပြောင်းပါသည်။ ဥပမာ — 出発 (しゅつ+はつ → <strong>しゅっぱつ</strong>)၊ 楽器 (がく+き → <strong>がっき</strong>)။
              </li>
              <li>
                <strong>• 熟字訓 (Jukujikun — အထူးအသံထွက်များ):</strong> ခန်းဂျီးတစ်လုံးချင်းမဟုတ်ဘဲ စကားလုံးတစ်ခုလုံးအနေဖြင့် ဖတ်ရသော ခြွင်းချက်များ — <strong>果物 (くだもの)</strong>၊ <strong>紅葉 (もみじ)</strong>၊ <strong>お土産 (おみやげ)</strong>၊ <strong>昨日 (きのう)</strong>။
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
