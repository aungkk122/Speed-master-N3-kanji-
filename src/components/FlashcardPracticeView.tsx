import React, { useState, useEffect, useRef } from 'react';
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Volume2,
  Check,
  Bookmark,
  BookOpen
} from 'lucide-react';
import { KanjiItem, KANJI_CATEGORIES } from '../data/kanjiData';
import { StudyStatus, shuffleArray } from '../utils/kanjiLogic';
import { speakJapanese } from '../utils/speech';

interface FlashcardPracticeViewProps {
  allKanji: KanjiItem[];
  statusMap: Record<number, StudyStatus>;
  onUpdateStatus: (id: number, status: StudyStatus) => void;
  onBackToTextbook: () => void;
}

export const FlashcardPracticeView: React.FC<FlashcardPracticeViewProps> = ({
  allKanji,
  statusMap,
  onUpdateStatus,
  onBackToTextbook
}) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'review' | 'learned' | 'unlearned'>('ALL');
  const [deck, setDeck] = useState<KanjiItem[]>(allKanji);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  // Rebuild deck when filters change
  useEffect(() => {
    const filtered = allKanji.filter(item => {
      if (categoryFilter !== 'ALL' && item.category !== categoryFilter) return false;
      const st = statusMap[item.id] || 'unseen';
      if (statusFilter === 'learned') return st === 'learned';
      if (statusFilter === 'review') return st === 'review';
      if (statusFilter === 'unlearned') return st !== 'learned';
      return true;
    });
    setDeck(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [allKanji, categoryFilter, statusFilter]);

  const currentCard = deck[currentIndex] || null;

  const handleNext = () => {
    if (deck.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex(prev => (prev < deck.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    if (deck.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : deck.length - 1));
  };

  const handleShuffle = () => {
    if (deck.length <= 1) return;
    setIsFlipped(false);
    setDeck(prev => shuffleArray(prev));
    setCurrentIndex(0);
  };

  // Keyboard shortcuts: Space to flip, ArrowLeft / ArrowRight to navigate
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [deck.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const currentStatus: StudyStatus = currentCard ? statusMap[currentCard.id] || 'unseen' : 'unseen';

  return (
    <section className="max-w-[1100px] mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e2e8f0] dark:border-slate-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mm">
            #လေ့ကျင့်ရန် · フラッシュカード練習 (3D Flashcard Practice)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mm mt-1">
            ကတ်ကိုနှိပ်၍ (သို့မဟုတ် Space နှိပ်၍) လှန်ကြည့်ပါ။ မိုဘိုင်းတွင် ဘယ်/ညာ ပွတ်ဆွဲ၍ ကတ်ပြောင်းနိုင်ပါသည်။
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

      {/* Filter & Deck Toolbar */}
      <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[#e2e8f0] dark:border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="flashcard-category-select" className="sr-only">
            Filter flashcards by category
          </label>
          <select
            id="flashcard-category-select"
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            {KANJI_CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.nameJp} ({cat.range})
              </option>
            ))}
          </select>

          {/* Status Filter Segmented Buttons */}
          <div className="flex items-center p-1 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-800">
            {(
              [
                { id: 'ALL', label: 'All (အားလုံး)' },
                { id: 'unlearned', label: 'Unlearned' },
                { id: 'review', label: 'Review Later (復習)' },
                { id: 'learned', label: 'Learned (習得)' }
              ] as const
            ).map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusFilter(tab.id)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  statusFilter === tab.id
                    ? 'bg-white dark:bg-[#1e293b] text-sky-700 dark:text-[#38bdf8] shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span
            data-testid="flashcard-counter"
            className="text-xs sm:text-sm font-mono-num font-bold text-slate-700 dark:text-slate-300"
          >
            Card: {deck.length > 0 ? currentIndex + 1 : 0} / {deck.length}
          </span>

          <button
            type="button"
            onClick={handleShuffle}
            aria-label="Shuffle flashcards (ကျပန်း)"
            className="min-h-[40px] px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-700 dark:bg-sky-400/15 dark:text-[#38bdf8] text-xs font-semibold flex items-center gap-1.5 hover:bg-sky-500/20 transition-colors cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="font-mm">Shuffle (ကျပန်း)</span>
          </button>
        </div>
      </div>

      {/* Empty State if filter has 0 cards */}
      {!currentCard ? (
        <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[#e2e8f0] dark:border-slate-800 p-10 text-center space-y-3">
          <p className="text-base font-bold text-slate-800 dark:text-slate-200 font-mm">
            ရွေးချယ်ထားသော စစ်ထုတ်မှုအတွက် ခန်းဂျီးကတ် မရှိသေးပါ။
          </p>
          <button
            type="button"
            onClick={() => {
              setCategoryFilter('ALL');
              setStatusFilter('ALL');
            }}
            className="min-h-[42px] px-4 py-2 rounded-lg bg-sky-600 text-white text-xs font-semibold cursor-pointer"
          >
            Show All 405 Kanji Cards
          </button>
        </div>
      ) : (
        <>
          {/* 3D Flip Flashcard Container */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="perspective-1200 w-full max-w-2xl mx-auto"
          >
            <div
              data-testid="flashcard-3d-inner"
              data-flipped={isFlipped ? 'true' : 'false'}
              className={`relative w-full min-h-[430px] sm:min-h-[460px] preserve-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT FACE */}
              <div
                onClick={() => setIsFlipped(true)}
                className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white dark:bg-[#1e293b] border-2 border-[#e2e8f0] dark:border-slate-700 shadow-lg p-6 sm:p-8 flex flex-col justify-between cursor-pointer ${
                  isFlipped ? 'pointer-events-none' : ''
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-num">
                  <span>
                    No. {currentCard.id} · {currentCard.categoryJp}
                  </span>
                  <span>画数: {currentCard.strokes} 画 (Strokes)</span>
                </div>

                <div className="my-auto flex flex-col items-center justify-center text-center space-y-5">
                  <div
                    data-testid="flashcard-front-kanji"
                    className="text-8xl sm:text-9xl font-jp font-bold text-slate-900 dark:text-white leading-none select-none"
                  >
                    {currentCard.kanji}
                  </div>

                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      speakJapanese(currentCard.vocab[0]?.cleanWord || currentCard.kanji);
                    }}
                    aria-label={`Pronounce Kanji ${currentCard.kanji}`}
                    className="min-h-[44px] px-5 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-700 dark:bg-sky-400/15 dark:text-[#38bdf8] text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>発音を聞く (Listen)</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 pt-3 border-t border-[#e2e8f0] dark:border-slate-800">
                  <span className="font-mm">အဖြေနှင့် မြန်မာအဓိပ္ပာယ်ကြည့်ရန် ကတ်ကိုနှိပ်ပါ</span>
                  <span className="font-semibold text-sky-600 dark:text-[#38bdf8] flex items-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" /> Tap / Space to Flip
                  </span>
                </div>
              </div>

              {/* BACK FACE */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-white dark:bg-[#1e293b] border-2 border-sky-500/60 dark:border-[#38bdf8]/60 shadow-lg p-5 sm:p-7 flex flex-col justify-between overflow-y-auto ${
                  !isFlipped ? 'pointer-events-none' : ''
                }`}
              >
                <div>
                  {/* Back Header */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#e2e8f0] dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-jp font-bold text-slate-900 dark:text-white">
                        {currentCard.kanji}
                      </span>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900 dark:text-white">
                          音: {currentCard.onyomi} ／ 訓: {currentCard.kunyomi}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400">
                          No. {currentCard.id} · {currentCard.strokes} 画 · {currentCard.english}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsFlipped(false)}
                      className="min-h-[38px] px-3 py-1.5 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Front</span>
                    </button>
                  </div>

                  {/* Key Vocabularies */}
                  <div className="mt-3">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5 font-mm">
                      အဓိက ဝေါဟာရများ (Key Vocabularies)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentCard.vocab.slice(0, 4).map((v, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-800 flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-jp font-bold text-slate-900 dark:text-white truncate">
                              {v.word} 【{v.reading}】
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-300 font-mm truncate">
                              {v.meaning}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => speakJapanese(v.cleanWord)}
                            aria-label={`Pronounce ${v.cleanWord}`}
                            className="min-w-[36px] min-h-[36px] rounded-md bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-slate-700 flex items-center justify-center shrink-0 hover:text-sky-600 cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Example Sentences */}
                  <div className="mt-3 pt-3 border-t border-[#e2e8f0] dark:border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-300 font-mm">
                      JLPT N3 ဥပမာဝါကျများ (Example Sentences)
                    </div>
                    {currentCard.sentences.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a]/80 border border-[#e2e8f0] dark:border-slate-800 flex items-start justify-between gap-2"
                      >
                        <div className="text-xs space-y-0.5">
                          <div className="font-jp font-semibold text-slate-900 dark:text-white">
                            {s.jp}
                          </div>
                          <div className="font-jp text-slate-500 dark:text-slate-400">
                            {s.furigana}
                          </div>
                          <div className="font-mm text-slate-700 dark:text-slate-300">
                            {s.mm}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => speakJapanese(s.jp)}
                          aria-label={`Listen to example sentence ${idx + 1}`}
                          className="min-w-[36px] min-h-[36px] rounded-md bg-white dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-slate-700 flex items-center justify-center shrink-0 hover:text-sky-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flashcard Controls Bar */}
          <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#1e293b] rounded-xl border border-[#e2e8f0] dark:border-slate-800 p-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous card"
                className="min-h-[44px] px-4 py-2 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={() => setIsFlipped(prev => !prev)}
                aria-label="Flip flashcard"
                className="min-h-[44px] px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-[#38bdf8] dark:hover:bg-sky-300 text-white dark:text-slate-950 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                <span>Flip Card</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next card"
                className="min-h-[44px] px-4 py-2 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  onUpdateStatus(currentCard.id, currentStatus === 'review' ? 'unseen' : 'review')
                }
                className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-colors cursor-pointer ${
                  currentStatus === 'review'
                    ? 'bg-amber-500/15 border-amber-500 text-amber-700 dark:text-amber-300'
                    : 'border-[#e2e8f0] dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>Review Later</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onUpdateStatus(currentCard.id, currentStatus === 'learned' ? 'unseen' : 'learned')
                }
                className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-colors cursor-pointer ${
                  currentStatus === 'learned'
                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                    : 'border-[#e2e8f0] dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>Mark as Learned</span>
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
