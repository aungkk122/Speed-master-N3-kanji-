import { useState, useEffect, useMemo } from 'react';
import {
  Eye,
  EyeOff,
  Compass,
  Layers,
  CheckCircle2,
  RotateCcw,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { kanjiData, KANJI_CATEGORIES, KanjiItem } from './data/kanjiData';
import { filterKanjiList, StudyStatus } from './utils/kanjiLogic';
import { TopHeader, ActiveAppMode } from './components/TopHeader';
import { MiniMenuDrawer } from './components/MiniMenuDrawer';
import { KanjiCard } from './components/KanjiCard';
import { StudyModeView } from './components/StudyModeView';
import { FlashcardPracticeView } from './components/FlashcardPracticeView';
import { MockExamView } from './components/MockExamView';
import { exportStandaloneHtml } from './utils/exportStandaloneHtml';

const THEME_STORAGE_KEY = 'speed_master_n3_theme';
const PROGRESS_STORAGE_KEY = 'speed_master_n3_progress_v1';

export default function App() {
  // 1. Theme State (persisted in localStorage)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      return false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [isDark]);

  // 2. Navigation & Mode State
  const [activeMode, setActiveMode] = useState<ActiveAppMode>('textbook');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // 3. Search, Category & Study Status Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'learned' | 'review'>('ALL');

  // 4. Global Active Recall Master Toggles
  const [globalShowKanji, setGlobalShowKanji] = useState<boolean>(true);
  const [globalShowReading, setGlobalShowReading] = useState<boolean>(true);
  const [globalShowMeaning, setGlobalShowMeaning] = useState<boolean>(true);

  // 5. Study Progress Map (persisted in localStorage)
  const [statusMap, setStatusMap] = useState<Record<number, StudyStatus>>(() => {
    try {
      const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(statusMap));
    } catch {
      // ignore
    }
  }, [statusMap]);

  const handleUpdateStatus = (id: number, status: StudyStatus) => {
    setStatusMap(prev => ({
      ...prev,
      [id]: status
    }));
  };

  const handleResetProgress = () => {
    setStatusMap({});
  };

  // 6. Selected Kanji for Study Mode (#လေ့လာရန်)
  const [studyKanji, setStudyKanji] = useState<KanjiItem>(kanjiData[0]);

  const handleInspectStrokeOrder = (item: KanjiItem) => {
    setStudyKanji(item);
    setActiveMode('study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 7. Pagination / Page Size for Textbook Grid (keeps DOM responsive while supporting Show All 405)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(36);

  // Reset to page 1 when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, statusFilter]);

  const filteredKanji = useMemo(
    () =>
      filterKanjiList(
        kanjiData,
        searchQuery,
        selectedCategory,
        statusFilter,
        statusMap
      ),
    [searchQuery, selectedCategory, statusFilter, statusMap]
  );

  const totalPages = Math.max(1, Math.ceil(filteredKanji.length / pageSize));
  const paginatedKanji = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredKanji.slice(start, start + pageSize);
  }, [filteredKanji, currentPage, pageSize]);

  // Reset to Textbook View (Major Menu Button)
  const handleResetToTextbook = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setStatusFilter('ALL');
    setGlobalShowKanji(true);
    setGlobalShowReading(true);
    setGlobalShowMeaning(true);
    setCurrentPage(1);
    setActiveMode('textbook');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When user types in search bar while in another mode, switch to textbook mode automatically
  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    if (activeMode !== 'textbook') {
      setActiveMode('textbook');
    }
  };

  const learnedCount = useMemo(
    () => Object.values(statusMap).filter(v => v === 'learned').length,
    [statusMap]
  );
  const reviewCount = useMemo(
    () => Object.values(statusMap).filter(v => v === 'review').length,
    [statusMap]
  );

  return (
    <div className="min-h-screen flex flex-col app-canvas transition-colors">
      {/* A. Sticky & Stable Top Layer Header */}
      <TopHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        matchCount={filteredKanji.length}
        totalCount={kanjiData.length}
        isDark={isDark}
        onToggleTheme={() => setIsDark(prev => !prev)}
        activeMode={activeMode}
        onSelectMode={mode => {
          setActiveMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onResetToTextbook={handleResetToTextbook}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Slide-over Mini Menu Drawer */}
      <MiniMenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeMode={activeMode}
        onSelectMode={mode => {
          setActiveMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onResetToTextbook={handleResetToTextbook}
        learnedCount={learnedCount}
        reviewCount={reviewCount}
        totalCount={kanjiData.length}
        onResetProgress={handleResetProgress}
        onExportStandaloneHtml={exportStandaloneHtml}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeMode === 'study' && (
          <StudyModeView
            kanjiList={kanjiData}
            selectedKanji={studyKanji}
            onSelectKanji={setStudyKanji}
            onBackToTextbook={() => setActiveMode('textbook')}
          />
        )}

        {activeMode === 'practice' && (
          <FlashcardPracticeView
            allKanji={kanjiData}
            statusMap={statusMap}
            onUpdateStatus={handleUpdateStatus}
            onBackToTextbook={() => setActiveMode('textbook')}
          />
        )}

        {activeMode === 'exam' && (
          <MockExamView
            allKanji={kanjiData}
            onBackToTextbook={() => setActiveMode('textbook')}
          />
        )}

        {activeMode === 'textbook' && (
          <div className="max-w-[1380px] mx-auto px-3 sm:px-6 py-6 space-y-6">
            {/* Hero / Textbook Control Deck */}
            <section className="app-card rounded-2xl border p-5 sm:p-6 space-y-5 shadow-2xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono-num text-slate-500 dark:text-slate-400">
                    SPEED MASTER JLPT N3 KANJI · 全405漢字・1,310語彙・810例文
                  </div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight font-mm">
                    JLPT N3 ခန်းဂျီး (၄၀၅) လုံးနှင့် ဝေါဟာရ အပြည့်အစုံ လေ့လာရေး
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-mm">
                    အခန်းအလိုက် ခန်းဂျီး၊ 音読み / 訓読み၊ မြန်မာအဓိပ္ပာယ်၊ JLPT N3 ဥပမာဝါကျ (၂) ကြောင်းစီနှင့် ဂျပန်အသံထွက်များကို တစ်နေရာတည်းတွင် လေ့လာနိုင်ပါသည်။
                  </p>
                </div>

                {/* Quick Feature Mode Buttons */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveMode('study')}
                    className="min-h-[42px] px-3.5 py-2 rounded-xl border border-[#e2e8f0] dark:border-slate-700 bg-[#f8fafc] dark:bg-[#0f172a] hover:border-sky-500 dark:hover:border-[#38bdf8] text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Compass className="w-4 h-4 text-sky-600 dark:text-[#38bdf8]" />
                    <span className="font-mm">#လေ့လာရန် (Study)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMode('practice')}
                    className="min-h-[42px] px-3.5 py-2 rounded-xl border border-[#e2e8f0] dark:border-slate-700 bg-[#f8fafc] dark:bg-[#0f172a] hover:border-sky-500 dark:hover:border-[#38bdf8] text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-sky-600 dark:text-[#38bdf8]" />
                    <span className="font-mm">#လေ့ကျင့်ရန် (Flashcards)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMode('exam')}
                    className="min-h-[42px] px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-[#38bdf8] dark:hover:bg-sky-300 text-white dark:text-slate-950 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-mm">#စမ်းသပ်ဖြေဆိုရန် (Mock Exam)</span>
                  </button>
                </div>
              </div>

              {/* Global Active Recall Master Toggles & Study Filter Bar */}
              <div className="pt-4 border-t border-[#e2e8f0] dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300 mr-1">
                    Global Active Recall:
                  </span>

                  <button
                    type="button"
                    onClick={() => setGlobalShowKanji(prev => !prev)}
                    aria-pressed={globalShowKanji}
                    className={`min-h-[38px] px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      globalShowKanji
                        ? 'bg-sky-500/10 border-sky-500/40 text-sky-700 dark:text-[#38bdf8]'
                        : 'bg-[#f8fafc] dark:bg-[#0f172a] border-[#e2e8f0] dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    {globalShowKanji ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{globalShowKanji ? 'Hide All Kanji' : 'Show All Kanji'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGlobalShowReading(prev => !prev)}
                    aria-pressed={globalShowReading}
                    className={`min-h-[38px] px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      globalShowReading
                        ? 'bg-sky-500/10 border-sky-500/40 text-sky-700 dark:text-[#38bdf8]'
                        : 'bg-[#f8fafc] dark:bg-[#0f172a] border-[#e2e8f0] dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    {globalShowReading ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{globalShowReading ? 'Hide All Furigana' : 'Show All Furigana'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGlobalShowMeaning(prev => !prev)}
                    aria-pressed={globalShowMeaning}
                    className={`min-h-[38px] px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      globalShowMeaning
                        ? 'bg-sky-500/10 border-sky-500/40 text-sky-700 dark:text-[#38bdf8]'
                        : 'bg-[#f8fafc] dark:bg-[#0f172a] border-[#e2e8f0] dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    {globalShowMeaning ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{globalShowMeaning ? 'Hide All Myanmar' : 'Show All Myanmar'}</span>
                  </button>
                </div>

                {/* Status Filter & Page Size */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center p-1 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-800">
                    {(
                      [
                        { id: 'ALL', label: `All (${kanjiData.length})` },
                        { id: 'review', label: `Review (${reviewCount})` },
                        { id: 'learned', label: `Learned (${learnedCount})` }
                      ] as const
                    ).map(st => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setStatusFilter(st.id)}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                          statusFilter === st.id
                            ? 'bg-white dark:bg-[#1e293b] text-sky-700 dark:text-[#38bdf8] shadow-2xs'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>

                  <label htmlFor="cards-per-page-select" className="sr-only">
                    Cards per page
                  </label>
                  <select
                    id="cards-per-page-select"
                    value={pageSize}
                    onChange={e => {
                      setPageSize(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="min-h-[36px] px-2.5 py-1 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] border border-[#e2e8f0] dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    <option value={36}>36 Cards / Page</option>
                    <option value={72}>72 Cards / Page</option>
                    <option value={150}>150 Cards / Page</option>
                    <option value={405}>All 405 Cards</option>
                  </select>
                </div>
              </div>

              {/* Systematic Thematic Category Bar */}
              <div className="pt-3 border-t border-[#e2e8f0] dark:border-slate-800">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5">
                  {KANJI_CATEGORIES.map(cat => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-sky-600 text-white dark:bg-[#38bdf8] dark:text-slate-950'
                            : 'bg-[#f8fafc] dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 border border-[#e2e8f0] dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <span>{cat.nameJp}</span>
                        <span className="ml-1.5 opacity-75 font-mono-num">({cat.range})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Active Category / Search Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400 px-1">
              <div className="flex items-center gap-2 font-mm">
                <span>
                  ပြသနေသည် — <strong>{filteredKanji.length}</strong> / {kanjiData.length} ခန်းဂျီး
                </span>
                {selectedCategory !== 'ALL' && (
                  <>
                    <span>·</span>
                    <span>
                      အခန်းကဏ္ဍ: <strong>{selectedCategory}</strong>
                    </span>
                  </>
                )}
                {searchQuery && (
                  <>
                    <span>·</span>
                    <span>
                      ရှာဖွေမှု: <strong>"{searchQuery}"</strong>
                    </span>
                  </>
                )}
              </div>

              {(searchQuery || selectedCategory !== 'ALL' || statusFilter !== 'ALL') && (
                <button
                  type="button"
                  onClick={handleResetToTextbook}
                  className="text-xs font-semibold text-sky-600 dark:text-[#38bdf8] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {/* Kanji Cards Grid or Empty State */}
            {filteredKanji.length === 0 ? (
              <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-[#e2e8f0] dark:border-slate-800 p-12 text-center space-y-3">
                <p className="text-base font-bold text-slate-900 dark:text-white font-mm">
                  "{searchQuery}" နှင့် ကိုက်ညီသော ခန်းဂျီး မတွေ့ရှိပါ။
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mm">
                  ဂျပန်စာ (漢字・ひらがな・カタカナ)၊ Romaji၊ အင်္ဂလိပ် သို့မဟုတ် မြန်မာစာလုံးပေါင်းဖြင့် ပြန်လည်ရှာဖွေကြည့်ပါ။
                </p>
                <button
                  type="button"
                  onClick={handleResetToTextbook}
                  className="min-h-[42px] px-4 py-2 rounded-lg bg-sky-600 text-white text-xs font-bold cursor-pointer"
                >
                  Show All 405 Kanji
                </button>
              </div>
            ) : (
              <>
                <div
                  data-testid="kanji-card-grid"
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
                >
                  {paginatedKanji.map(item => (
                    <KanjiCard
                      key={item.id}
                      item={item}
                      globalShowKanji={globalShowKanji}
                      globalShowReading={globalShowReading}
                      globalShowMeaning={globalShowMeaning}
                      status={statusMap[item.id] || 'unseen'}
                      onUpdateStatus={handleUpdateStatus}
                      onInspectStrokeOrder={handleInspectStrokeOrder}
                    />
                  ))}
                </div>

                {/* Pagination Bar */}
                {totalPages > 1 && (
                  <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-[#e2e8f0] dark:border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs font-mono-num text-slate-600 dark:text-slate-300">
                      Page {currentPage} of {totalPages} · Showing {(currentPage - 1) * pageSize + 1}–
                      {Math.min(currentPage * pageSize, filteredKanji.length)} of {filteredKanji.length} Kanji
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => {
                          setCurrentPage(prev => Math.max(1, prev - 1));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="min-h-[40px] px-3 py-1.5 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs font-semibold disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Prev</span>
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(
                          p =>
                            p === 1 ||
                            p === totalPages ||
                            Math.abs(p - currentPage) <= 2
                        )
                        .map((p, idx, arr) => {
                          const prevP = arr[idx - 1];
                          const showEllipsis = prevP && p - prevP > 1;
                          return (
                            <span key={p} className="flex items-center gap-1.5">
                              {showEllipsis && (
                                <span className="text-xs text-slate-400 px-1">…</span>
                              )}
                              <button
                                type="button"
                                onClick={() => {
                                  setCurrentPage(p);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`min-w-[40px] min-h-[40px] rounded-lg text-xs font-mono-num font-bold transition-colors cursor-pointer ${
                                  currentPage === p
                                    ? 'bg-sky-600 text-white dark:bg-[#38bdf8] dark:text-slate-950'
                                    : 'border border-[#e2e8f0] dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                              >
                                {p}
                              </button>
                            </span>
                          );
                        })}

                      <button
                        type="button"
                        disabled={currentPage === totalPages}
                        onClick={() => {
                          setCurrentPage(prev => Math.min(totalPages, prev + 1));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="min-h-[40px] px-3 py-1.5 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs font-semibold disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </main>

      {/* Quiet Footer */}
      <footer className="mt-12 border-t border-[#e2e8f0] dark:border-slate-800 py-6 px-4 text-center text-xs text-slate-500 dark:text-slate-400 font-mm">
        <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Speed Master JLPT N3 Kanji (No. 1 – No. 405) · 漢字・単語・例文集</span>
          <span>မြန်မာဘာသာဖြင့် JLPT N3 ခန်းဂျီး (၄၀၅) လုံး လေ့လာရေး Web Application</span>
        </div>
      </footer>
    </div>
  );
}
