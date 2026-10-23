import React from 'react';
import { Search, X, Sun, Moon, BookOpen, Menu } from 'lucide-react';

export type ActiveAppMode = 'textbook' | 'study' | 'practice' | 'exam';

interface TopHeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  matchCount: number;
  totalCount: number;
  isDark: boolean;
  onToggleTheme: () => void;
  activeMode: ActiveAppMode;
  onSelectMode: (mode: ActiveAppMode) => void;
  onResetToTextbook: () => void;
  onOpenDrawer: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  searchQuery,
  onSearchChange,
  matchCount,
  totalCount,
  isDark,
  onToggleTheme,
  activeMode,
  onSelectMode,
  onResetToTextbook,
  onOpenDrawer
}) => {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        paddingTop: 'env(safe-area-inset-top, 0px)'
      }}
      className="w-full app-header backdrop-blur-md border-b transition-colors"
    >
      <div className="max-w-[1380px] mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-wrap md:flex-nowrap items-center justify-between gap-2 sm:gap-4">
        {/* 1. Brand / Major Menu Button (Textbook View Reset) */}
        <button
          type="button"
          onClick={onResetToTextbook}
          aria-label="Major Menu: Reset filters and open Textbook View"
          className={`min-h-[44px] px-2.5 sm:px-3.5 py-1.5 rounded-lg flex items-center gap-2 text-left transition-colors shrink-0 cursor-pointer ${
            activeMode === 'textbook'
              ? 'bg-sky-500/15 text-sky-700 dark:text-[#38bdf8]'
              : 'text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-800/70'
          }`}
        >
          <BookOpen className="w-5 h-5 text-sky-600 dark:text-[#38bdf8] shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-tight whitespace-nowrap leading-tight">
              Speed Master N3
            </span>
            <span className="hidden lg:inline text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap leading-tight">
              教科書一覧 · Textbook (405字)
            </span>
          </div>
        </button>

        {/* 3. Theme Toggle & 4. Mini Menu (Hamburger ☰) — Placed on row 1 right side on mobile, far right on desktop */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 order-2 md:order-4">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border app-card hover:opacity-90 transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[#38bdf8]" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenDrawer}
            aria-label="Open Mini Menu navigation drawer"
            className="min-w-[44px] min-h-[44px] px-2.5 flex items-center justify-center gap-1.5 rounded-lg border app-card hover:opacity-90 transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" />
            <span className="hidden sm:inline text-xs font-semibold whitespace-nowrap">Menu</span>
          </button>
        </div>

        {/* 2. Powerful Trilingual Search Bar (Full width row 2 on mobile, centered flex-1 on desktop) */}
        <div className="w-full md:w-auto md:flex-1 max-w-xl min-h-[42px] px-3 py-1 rounded-lg app-card border flex items-center gap-2 focus-within:ring-2 focus-within:ring-sky-500 dark:focus-within:ring-[#38bdf8] transition-all order-3 md:order-2">
          <label htmlFor="kanji-trilingual-search" className="sr-only">
            Search Kanji, Hiragana, Katakana, Romaji, English, or Myanmar meaning
          </label>
          <Search className="w-4 h-4 app-muted shrink-0 pointer-events-none" />
          <input
            id="kanji-trilingual-search"
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Search 漢字, かな, Romaji, English, မြန်မာ..."
            className="flex-1 min-w-0 bg-transparent border-0 text-xs sm:text-sm focus:outline-none placeholder:text-slate-400"
          />

          <div className="flex items-center gap-1 shrink-0">
            {searchQuery.length > 0 && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="Clear search query"
                className="w-6 h-6 flex items-center justify-center rounded-md app-muted hover:opacity-80 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <span
              aria-live="polite"
              data-testid="search-match-counter"
              className="text-[11px] font-mono-num font-semibold app-muted pl-1.5 border-l border-[#e2e8f0] dark:border-slate-700 whitespace-nowrap select-none"
            >
              Matches: {matchCount} / {totalCount}
            </span>
          </div>
        </div>

        {/* Desktop quick navigation links */}
        <nav
          aria-label="Study Modes"
          className="hidden xl:flex items-center gap-1 shrink-0 order-3"
        >
          <button
            type="button"
            onClick={() => onSelectMode('study')}
            className={`min-h-[40px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeMode === 'study'
                ? 'bg-sky-600 text-white dark:bg-[#38bdf8] dark:text-slate-950'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
          >
            #လေ့လာရန် · Study
          </button>
          <button
            type="button"
            onClick={() => onSelectMode('practice')}
            className={`min-h-[40px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeMode === 'practice'
                ? 'bg-sky-600 text-white dark:bg-[#38bdf8] dark:text-slate-950'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
          >
            #လေ့ကျင့်ရန် · Practice
          </button>
          <button
            type="button"
            onClick={() => onSelectMode('exam')}
            className={`min-h-[40px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeMode === 'exam'
                ? 'bg-sky-600 text-white dark:bg-[#38bdf8] dark:text-slate-950'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
          >
            #စမ်းသပ်ဖြေဆိုရန် · Exam
          </button>
        </nav>
      </div>
    </header>
  );
};
