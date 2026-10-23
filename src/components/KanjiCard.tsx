import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Volume2, Check, Bookmark, Compass } from 'lucide-react';
import { KanjiItem } from '../data/kanjiData';
import { StudyStatus } from '../utils/kanjiLogic';
import { speakJapanese } from '../utils/speech';

interface KanjiCardProps {
  item: KanjiItem;
  globalShowKanji: boolean;
  globalShowReading: boolean;
  globalShowMeaning: boolean;
  status: StudyStatus;
  onUpdateStatus: (id: number, status: StudyStatus) => void;
  onInspectStrokeOrder: (item: KanjiItem) => void;
}

export const KanjiCard: React.FC<KanjiCardProps> = ({
  item,
  globalShowKanji,
  globalShowReading,
  globalShowMeaning,
  status,
  onUpdateStatus,
  onInspectStrokeOrder
}) => {
  const [showKanji, setShowKanji] = useState(globalShowKanji);
  const [showReading, setShowReading] = useState(globalShowReading);
  const [showMeaning, setShowMeaning] = useState(globalShowMeaning);
  const [speakingKey, setSpeakingKey] = useState<string | null>(null);

  useEffect(() => {
    setShowKanji(globalShowKanji);
  }, [globalShowKanji]);

  useEffect(() => {
    setShowReading(globalShowReading);
  }, [globalShowReading]);

  useEffect(() => {
    setShowMeaning(globalShowMeaning);
  }, [globalShowMeaning]);

  const handleSpeak = (text: string, key: string) => {
    speakJapanese(
      text,
      () => setSpeakingKey(key),
      () => setSpeakingKey(prev => (prev === key ? null : prev))
    );
  };

  return (
    <article
      data-testid={`kanji-card-${item.id}`}
      className="app-card rounded-xl border p-4 sm:p-5 flex flex-col justify-between transition-colors shadow-2xs"
    >
      <div>
        {/* Card Metadata & Status Bar */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#e2e8f0] dark:border-slate-700/80">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 font-jp">
            <span className="font-mono-num font-bold">No. {item.id}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-num">{item.strokes}画</span>
            <span aria-hidden="true">·</span>
            <span className="truncate max-w-[130px] sm:max-w-[175px]">{item.categoryJp}</span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => onInspectStrokeOrder(item)}
              aria-label={`Inspect stroke order for Kanji ${item.kanji}`}
              title="Stroke Order & Breakdown (#လေ့လာရန်)"
              className="min-h-[34px] px-2 py-1 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-[#38bdf8] hover:bg-slate-200/50 dark:hover:bg-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">筆順</span>
            </button>

            <button
              type="button"
              onClick={() => onUpdateStatus(item.id, status === 'review' ? 'unseen' : 'review')}
              aria-label={`Mark Kanji ${item.kanji} for Review Later`}
              className={`min-h-[34px] px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                status === 'review'
                  ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">復習</span>
            </button>

            <button
              type="button"
              onClick={() => onUpdateStatus(item.id, status === 'learned' ? 'unseen' : 'learned')}
              aria-label={`Mark Kanji ${item.kanji} as Learned`}
              className={`min-h-[34px] px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                status === 'learned'
                  ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">習得</span>
            </button>
          </div>
        </div>

        {/* Individual Active Recall "Eye" Toggle Bar */}
        <div
          role="group"
          aria-label={`Active recall toggles for Kanji No. ${item.id}`}
          className="mt-3 flex items-center justify-between gap-1.5 p-1 rounded-lg app-subcard border"
        >
          <button
            type="button"
            onClick={() => setShowKanji(prev => !prev)}
            aria-pressed={showKanji}
            aria-label={`Toggle Kanji visibility for No. ${item.id}`}
            className={`flex-1 min-h-[36px] px-2 py-1 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              showKanji
                ? 'app-card shadow-2xs'
                : 'text-slate-500 dark:text-slate-400 hover: opacity-90'
            }`}
          >
            {showKanji ? (
              <Eye className="w-3.5 h-3.5 text-sky-600 dark:text-[#38bdf8] shrink-0" />
            ) : (
              <EyeOff className="w-3.5 h-3.5 shrink-0" />
            )}
            <span>漢字 (Kanji)</span>
          </button>

          <button
            type="button"
            onClick={() => setShowReading(prev => !prev)}
            aria-pressed={showReading}
            aria-label={`Toggle Reading visibility for No. ${item.id}`}
            className={`flex-1 min-h-[36px] px-2 py-1 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              showReading
                ? 'app-card shadow-2xs'
                : 'text-slate-500 dark:text-slate-400 hover:opacity-90'
            }`}
          >
            {showReading ? (
              <Eye className="w-3.5 h-3.5 text-sky-600 dark:text-[#38bdf8] shrink-0" />
            ) : (
              <EyeOff className="w-3.5 h-3.5 shrink-0" />
            )}
            <span>読み (Reading)</span>
          </button>

          <button
            type="button"
            onClick={() => setShowMeaning(prev => !prev)}
            aria-pressed={showMeaning}
            aria-label={`Toggle Myanmar Meaning visibility for No. ${item.id}`}
            className={`flex-1 min-h-[36px] px-2 py-1 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              showMeaning
                ? 'app-card shadow-2xs'
                : 'text-slate-500 dark:text-slate-400 hover:opacity-90'
            }`}
          >
            {showMeaning ? (
              <Eye className="w-3.5 h-3.5 text-sky-600 dark:text-[#38bdf8] shrink-0" />
            ) : (
              <EyeOff className="w-3.5 h-3.5 shrink-0" />
            )}
            <span className="font-mm">အဓိပ္ပာယ်</span>
          </button>
        </div>

        {/* Main Kanji Character + Onyomi / Kunyomi Readings */}
        <div className="mt-4 flex items-stretch gap-4">
          <div className="relative w-24 sm:w-28 shrink-0 rounded-xl app-subcard border flex flex-col items-center justify-center p-3">
            {showKanji ? (
              <span
                data-testid={`kanji-char-${item.id}`}
                className="text-5xl sm:text-6xl font-jp font-bold select-all leading-none"
              >
                {item.kanji}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setShowKanji(true)}
                aria-label={`Reveal hidden Kanji No. ${item.id}`}
                className="w-full h-16 flex flex-col items-center justify-center text-xs text-slate-400 hover:text-sky-500 cursor-pointer"
              >
                <EyeOff className="w-5 h-5 mb-1" />
                <span>Tap to peek</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => handleSpeak(item.vocab[0]?.cleanWord || item.kanji, `kanji-${item.id}`)}
              aria-label={`Pronounce Kanji ${item.kanji}`}
              className={`mt-2.5 min-w-[44px] min-h-[36px] px-3 py-1 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                speakingKey === `kanji-${item.id}`
                  ? 'bg-sky-600 text-white dark:bg-[#38bdf8] dark:text-slate-950'
                  : 'app-card border hover:border-sky-500 dark:hover:border-[#38bdf8]'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5 text-sky-600 dark:text-[#38bdf8]" />
              <span>発音</span>
            </button>
          </div>

          {/* Onyomi & Kunyomi Block */}
          <div className="flex-1 flex flex-col justify-center space-y-2 text-sm">
            <div>
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                音読み (Onyomi · カタカナ)
              </div>
              {showReading ? (
                <div className="font-jp font-semibold mt-0.5">{item.onyomi}</div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowReading(true)}
                  className="text-xs text-slate-400 italic hover:text-sky-500 mt-0.5 text-left cursor-pointer"
                >
                  [ 音読み hidden — tap to reveal ]
                </button>
              )}
            </div>

            <div>
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                訓読み (Kunyomi · ひらがな)
              </div>
              {showReading ? (
                <div className="font-jp font-semibold text-sky-700 dark:text-[#38bdf8] mt-0.5">
                  {item.kunyomi}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowReading(true)}
                  className="text-xs text-slate-400 italic hover:text-sky-500 mt-0.5 text-left cursor-pointer"
                >
                  [ 訓読み hidden — tap to reveal ]
                </button>
              )}
            </div>

            <div className="pt-1 border-t border-[#e2e8f0]/70 dark:border-slate-700/70 text-xs text-slate-500 dark:text-slate-400">
              <span>Meaning: </span>
              <span className="font-medium text-slate-700 dark:text-slate-200">{item.english}</span>
            </div>
          </div>
        </div>

        {/* Vocabulary & Compounds (熟語・単語) */}
        <div className="mt-4 pt-3 border-t border-[#e2e8f0] dark:border-slate-700/80">
          <div className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-2 flex items-center justify-between">
            <span>熟語・単語 (Vocabulary & Compounds)</span>
            <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 font-mm">
              ဝေါဟာရများ ({item.vocab.length})
            </span>
          </div>

          <ul className="divide-y divide-[#e2e8f0]/60 dark:divide-slate-700/60">
            {item.vocab.map((v, vIdx) => {
              const vKey = `vocab-${item.id}-${vIdx}`;
              return (
                <li key={vKey} className="py-2 flex items-start justify-between gap-2 text-sm">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="font-jp font-bold">
                        {showKanji ? v.word : '【 漢字非表示 】'}
                      </span>
                      {showReading ? (
                        <span className="text-xs font-jp text-sky-700 dark:text-[#38bdf8]">
                          【{v.reading}】
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400">【 ・・・ 】</span>
                      )}
                    </div>

                    {showMeaning ? (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-mm mt-0.5">
                        {v.meaning}
                      </p>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setShowMeaning(true)}
                        className="text-xs text-slate-400 italic hover:text-sky-500 font-mm mt-0.5 cursor-pointer"
                      >
                        [ မြန်မာအဓိပ္ပာယ် ဖုံးထားသည် — နှိပ်၍ကြည့်ပါ ]
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSpeak(v.cleanWord || v.cleanReading, vKey)}
                    aria-label={`Listen to vocabulary ${v.cleanWord}`}
                    className={`min-w-[38px] min-h-[38px] rounded-lg flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                      speakingKey === vKey
                        ? 'bg-sky-600 text-white dark:bg-[#38bdf8] dark:text-slate-950'
                        : 'app-subcard border hover:text-sky-600 dark:hover:text-[#38bdf8]'
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* 2 Realistic JLPT N3 Example Sentences */}
      <div className="mt-3 pt-3 border-t border-[#e2e8f0] dark:border-slate-700/80">
        <div className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-2 flex items-center justify-between">
          <span>JLPT N3 例文 (Example Sentences)</span>
          <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 font-mm">
            ဥပမာဝါကျ (၂) ကြောင်း
          </span>
        </div>

        <div className="space-y-2">
          {item.sentences.map((sent, sIdx) => {
            const sKey = `sent-${item.id}-${sIdx}`;
            return (
              <div
                key={sKey}
                className="p-2.5 rounded-lg app-subcard border flex items-start justify-between gap-2"
              >
                <div className="flex-1 min-w-0 space-y-0.5">
                  <p className="text-xs sm:text-sm font-jp font-medium">
                    {sIdx + 1}. {showKanji ? sent.jp : sent.furigana}
                  </p>
                  {showReading && (
                    <p className="text-[11px] font-jp text-slate-500 dark:text-slate-400">
                      {sent.furigana}
                    </p>
                  )}
                  {showMeaning && (
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-mm pt-0.5">
                      {sent.mm}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleSpeak(sent.jp, sKey)}
                  aria-label={`Listen to example sentence ${sIdx + 1} for Kanji ${item.kanji}`}
                  className={`min-w-[38px] min-h-[38px] rounded-lg flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                    speakingKey === sKey
                      ? 'bg-sky-600 text-white dark:bg-[#38bdf8] dark:text-slate-950'
                      : 'app-card border hover:text-sky-600 dark:hover:text-[#38bdf8]'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
