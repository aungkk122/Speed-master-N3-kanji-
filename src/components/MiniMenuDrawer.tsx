import React from 'react';
import { X, BookOpen, Compass, Layers, CheckCircle2, Download, RotateCcw } from 'lucide-react';
import { ActiveAppMode } from './TopHeader';

interface MiniMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeMode: ActiveAppMode;
  onSelectMode: (mode: ActiveAppMode) => void;
  onResetToTextbook: () => void;
  learnedCount: number;
  reviewCount: number;
  totalCount: number;
  onResetProgress: () => void;
  onExportStandaloneHtml: () => void;
}

export const MiniMenuDrawer: React.FC<MiniMenuDrawerProps> = ({
  isOpen,
  onClose,
  activeMode,
  onSelectMode,
  onResetToTextbook,
  learnedCount,
  reviewCount,
  totalCount,
  onResetProgress,
  onExportStandaloneHtml
}) => {
  if (!isOpen) return null;

  const handleModeClick = (mode: ActiveAppMode) => {
    if (mode === 'textbook') {
      onResetToTextbook();
    } else {
      onSelectMode(mode);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[1100] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-over panel */}
      <aside className="relative z-10 w-full max-w-sm bg-white dark:bg-[#1e293b] text-slate-900 dark:text-slate-100 h-full shadow-2xl border-l border-[#e2e8f0] dark:border-slate-800 flex flex-col justify-between overflow-y-auto">
        <div className="p-5 sm:p-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0] dark:border-slate-800">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                JLPT N3 漢字マスター
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mm">
                Speed Master N3 ခန်းဂျီး (၄၀၅) လုံး လေ့လာရေး
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="mt-5 space-y-2.5" aria-label="Feature Modes">
            <button
              type="button"
              onClick={() => handleModeClick('textbook')}
              className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                activeMode === 'textbook'
                  ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-500 dark:border-[#38bdf8]'
                  : 'bg-[#f8fafc] dark:bg-[#0f172a]/60 border-[#e2e8f0] dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <BookOpen className="w-5 h-5 text-sky-600 dark:text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  Major Menu · 教科書一覧 (Textbook View)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mm mt-0.5">
                  အခန်းအလိုက် ခန်းဂျီး ၄၀၅ လုံး၊ ဝေါဟာရ၊ ဝါကျနှင့် Active Recall (👁️) လေ့ကျင့်ခန်း
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleModeClick('study')}
              className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                activeMode === 'study'
                  ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-500 dark:border-[#38bdf8]'
                  : 'bg-[#f8fafc] dark:bg-[#0f172a]/60 border-[#e2e8f0] dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <Compass className="w-5 h-5 text-sky-600 dark:text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white font-mm">
                  #လေ့လာရန် (Study Mode)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mm mt-0.5">
                  Kanji Stroke Order ရေးဆွဲပုံအဆင့်ဆင့်နှင့် 音読み (Onyomi) / 訓読み (Kunyomi) သီအိုရီလမ်းညွှန်
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleModeClick('practice')}
              className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                activeMode === 'practice'
                  ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-500 dark:border-[#38bdf8]'
                  : 'bg-[#f8fafc] dark:bg-[#0f172a]/60 border-[#e2e8f0] dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <Layers className="w-5 h-5 text-sky-600 dark:text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white font-mm">
                  #လေ့ကျင့်ရန် (Flashcard Practice)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mm mt-0.5">
                  3D Flip Flashcards ဖြင့် အသံထွက်၊ အဓိပ္ပာယ်နှင့် ဝါကျများကို အလွတ်ကျက်မှတ်လေ့ကျင့်ရန်
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleModeClick('exam')}
              className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                activeMode === 'exam'
                  ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-500 dark:border-[#38bdf8]'
                  : 'bg-[#f8fafc] dark:bg-[#0f172a]/60 border-[#e2e8f0] dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white font-mm">
                  #စမ်းသပ်ဖြေဆိုရန် (JLPT N3 Mock Exam)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mm mt-0.5">
                  JLPT N3 စာမေးပွဲပုံစံ (漢字読み・表記・文脈規定) မေးခွန်းများဖြင့် စမ်းသပ်ဖြေဆိုရန်
                </p>
              </div>
            </button>
          </nav>

          {/* Study Mastery Summary */}
          <div className="mt-6 pt-5 border-t border-[#e2e8f0] dark:border-slate-800">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              <span>学習進捗 · Mastery Progress</span>
              <span className="font-mono-num">
                {learnedCount} / {totalCount} Learned ({Math.round((learnedCount / totalCount) * 100)}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${Math.min(100, (learnedCount / totalCount) * 100)}%` }}
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-num">
              <span>Learned: {learnedCount}</span>
              <span>·</span>
              <span>Review Later: {reviewCount}</span>
              <span>·</span>
              <span>Remaining: {totalCount - learnedCount}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-[#e2e8f0] dark:border-slate-800 bg-[#f8fafc] dark:bg-[#0f172a]/50 space-y-2.5">
          <button
            type="button"
            onClick={onExportStandaloneHtml}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 dark:bg-[#38bdf8] dark:hover:bg-sky-300 text-white dark:text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Offline Self-Contained index.html</span>
          </button>

          {(learnedCount > 0 || reviewCount > 0) && (
            <button
              type="button"
              onClick={onResetProgress}
              className="w-full min-h-[40px] px-3 py-2 rounded-lg border border-[#e2e8f0] dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Learned / Review Progress</span>
            </button>
          )}
        </div>
      </aside>
    </div>
  );
};
