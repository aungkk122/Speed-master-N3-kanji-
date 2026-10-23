import { KanjiItem } from '../data/kanjiData';

export type StudyStatus = 'unseen' | 'review' | 'learned';
export type ExamQuestionType = 'reading' | 'kanji' | 'context';

export interface ExamQuestion {
  id: string;
  kanjiId: number;
  targetKanji: string;
  type: ExamQuestionType;
  typeLabelJp: string;
  typeLabelMm: string;
  promptJp: string;
  promptSub: string;
  highlightWord: string;
  options: string[];
  correctIndex: number;
  explanationJp: string;
  explanationMm: string;
}

export interface ExamSummary {
  total: number;
  correct: number;
  incorrect: number;
  percentage: number;
  passed: boolean;
  grade: string;
  wrongQuestions: {
    question: ExamQuestion;
    selectedIndex: number;
  }[];
}

export interface StrokeStepInfo {
  step: number;
  labelJp: string;
  labelMm: string;
  ruleJp: string;
  pathD: string;
}

/**
 * Normalize Katakana to Hiragana for unified Japanese phonetic search
 */
export function normalizeKana(str: string): string {
  return str
    .replace(/[\u30a1-\u30f6]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
    .replace(/[-・\s~〜()（）]/g, '')
    .toLowerCase();
}

/**
 * Trilingual live search + category + study status filtering
 */
export function filterKanjiList(
  items: KanjiItem[],
  searchQuery: string,
  category: string = 'ALL',
  statusFilter: 'ALL' | 'learned' | 'review' = 'ALL',
  statusMap: Record<number, StudyStatus> = {}
): KanjiItem[] {
  const trimmed = searchQuery.trim();
  const qLower = trimmed.toLowerCase();
  const qKana = normalizeKana(trimmed);
  const numMatch = qLower.match(/^(?:no\.?\s*|#\s*)?(\d+)$/);
  const exactId = numMatch ? Number(numMatch[1]) : null;

  return items.filter(item => {
    if (category !== 'ALL' && item.category !== category) {
      return false;
    }

    if (statusFilter !== 'ALL') {
      const currentStatus = statusMap[item.id] || 'unseen';
      if (currentStatus !== statusFilter) return false;
    }

    if (!trimmed) return true;

    if (exactId !== null && item.id === exactId) {
      return true;
    }

    // Direct Kanji match
    if (item.kanji.includes(trimmed)) return true;

    // English or Romaji match
    if (item.english.toLowerCase().includes(qLower)) return true;
    if (item.romaji.toLowerCase().includes(qLower)) return true;
    if (item.category.toLowerCase().includes(qLower)) return true;
    if (item.categoryMm.includes(trimmed)) return true;

    // Onyomi / Kunyomi normalized Kana match
    if (qKana.length > 0) {
      if (normalizeKana(item.onyomi).includes(qKana)) return true;
      if (normalizeKana(item.kunyomi).includes(qKana)) return true;
    }

    // Vocabulary match (Word, Reading, Romaji, Myanmar meaning)
    for (const v of item.vocab) {
      if (
        v.word.toLowerCase().includes(qLower) ||
        v.cleanWord.toLowerCase().includes(qLower) ||
        v.reading.toLowerCase().includes(qLower) ||
        v.romaji.toLowerCase().includes(qLower) ||
        v.meaning.toLowerCase().includes(qLower) ||
        (qKana.length > 0 && normalizeKana(v.cleanReading).includes(qKana))
      ) {
        return true;
      }
    }

    // Sentence match (Japanese, Furigana, Myanmar)
    for (const s of item.sentences) {
      if (
        s.jp.includes(trimmed) ||
        s.furigana.includes(trimmed) ||
        s.mm.includes(trimmed) ||
        (qKana.length > 0 && normalizeKana(s.furigana).includes(qKana))
      ) {
        return true;
      }
    }

    return false;
  });
}

/**
 * Deterministic-capable Fisher-Yates shuffle
 */
export function shuffleArray<T>(array: T[], seed?: number): T[] {
  const result = [...array];
  let currentSeed = seed ?? Date.now();
  const nextRand = () => {
    if (seed === undefined) return Math.random();
    currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
    return currentSeed / 4294967296;
  };

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(nextRand() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generate JLPT N3 style multiple choice questions (Type 1: Reading, Type 2: Kanji, Type 3: Context)
 */
export function generateExamQuestions(
  allItems: KanjiItem[],
  count: number = 10,
  questionTypeFilter: 'ALL' | ExamQuestionType = 'ALL',
  categoryFilter: string = 'ALL',
  seed?: number
): ExamQuestion[] {
  const pool = categoryFilter === 'ALL'
    ? allItems
    : allItems.filter(k => k.category === categoryFilter);

  const sourcePool = pool.length >= 4 ? pool : allItems;
  const shuffledPool = shuffleArray(sourcePool, seed);
  const selectedItems = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  const types: ExamQuestionType[] = ['reading', 'kanji', 'context'];

  return selectedItems.map((item, idx) => {
    const qType: ExamQuestionType =
      questionTypeFilter === 'ALL' ? types[idx % types.length] : questionTypeFilter;

    const targetVocab = item.vocab[0];

    // Pick 3 distinct distractors from other Kanji items
    const distractorCandidates = shuffleArray(
      allItems.filter(other => other.id !== item.id && other.vocab.length > 0),
      seed !== undefined ? seed + idx + 17 : undefined
    );

    if (qType === 'reading') {
      const correctOption = targetVocab.cleanReading;
      const distractors: string[] = [];
      for (const cand of distractorCandidates) {
        const r = cand.vocab[0].cleanReading;
        if (r && r !== correctOption && !distractors.includes(r)) {
          distractors.push(r);
        }
        if (distractors.length === 3) break;
      }
      const options = shuffleArray([correctOption, ...distractors], seed !== undefined ? seed + idx * 31 : undefined);
      const correctIndex = options.indexOf(correctOption);

      return {
        id: `q-${item.id}-reading-${idx}`,
        kanjiId: item.id,
        targetKanji: item.kanji,
        type: 'reading',
        typeLabelJp: '漢字読み問題 (Kanji to Reading)',
        typeLabelMm: 'ခန်းဂျီးအသံထွက် ရွေးချယ်ခြင်း',
        promptJp: `次の言葉の読み方として最もよいものを一つ選びなさい。`,
        promptSub: `「${targetVocab.cleanWord}」 (${targetVocab.meaning})`,
        highlightWord: targetVocab.cleanWord,
        options,
        correctIndex,
        explanationJp: `「${targetVocab.cleanWord}」の正しい読み方は「${targetVocab.cleanReading}」です。（漢字：${item.kanji} / 音：${item.onyomi}・訓：${item.kunyomi}）`,
        explanationMm: `「${targetVocab.cleanWord}」 ၏ အသံထွက်မှန်မှာ 「${targetVocab.cleanReading}」 ဖြစ်ပြီး အဓိပ္ပာယ်မှာ "${targetVocab.meaning}" ဖြစ်ပါသည်။`
      };
    }

    if (qType === 'kanji') {
      const correctOption = targetVocab.cleanWord;
      const distractors: string[] = [];
      for (const cand of distractorCandidates) {
        const w = cand.vocab[0].cleanWord;
        if (w && w !== correctOption && !distractors.includes(w)) {
          distractors.push(w);
        }
        if (distractors.length === 3) break;
      }
      const options = shuffleArray([correctOption, ...distractors], seed !== undefined ? seed + idx * 43 : undefined);
      const correctIndex = options.indexOf(correctOption);

      return {
        id: `q-${item.id}-kanji-${idx}`,
        kanjiId: item.id,
        targetKanji: item.kanji,
        type: 'kanji',
        typeLabelJp: '表記問題 (Hiragana to Kanji)',
        typeLabelMm: 'ဟီရာဂနမှ ခန်းဂျီး အမှန်ရွေးချယ်ခြင်း',
        promptJp: `「${targetVocab.cleanReading}」の漢字表記として最もよいものを一つ選びなさい。`,
        promptSub: `အဓိပ္ပာယ် — ${targetVocab.meaning}`,
        highlightWord: targetVocab.cleanReading,
        options,
        correctIndex,
        explanationJp: `「${targetVocab.cleanReading}」は漢字で「${targetVocab.cleanWord}」と書きます。（${item.kanji}：${item.strokes}画）`,
        explanationMm: `「${targetVocab.cleanReading}」 (${targetVocab.meaning}) ကို ခန်းဂျီးဖြင့် 「${targetVocab.cleanWord}」 ဟု ရေးသားပါသည်။`
      };
    }

    // Type 3: Contextual Word Usage (文脈規定・意味)
    const correctOption = targetVocab.cleanWord;
    const distractors: string[] = [];
    for (const cand of distractorCandidates) {
      const w = cand.vocab[0].cleanWord;
      if (w && w !== correctOption && !distractors.includes(w)) {
        distractors.push(w);
      }
      if (distractors.length === 3) break;
    }
    const options = shuffleArray([correctOption, ...distractors], seed !== undefined ? seed + idx * 59 : undefined);
    const correctIndex = options.indexOf(correctOption);

    const sentence = item.sentences[0];
    const blankedJp = sentence.jp.includes(targetVocab.cleanWord)
      ? sentence.jp.replace(targetVocab.cleanWord, '【 ＿＿＿ 】')
      : `「 ${targetVocab.meaning} 」を表す言葉として【 ＿＿＿ 】に入る最もよいものを選びなさい。`;

    return {
      id: `q-${item.id}-context-${idx}`,
      kanjiId: item.id,
      targetKanji: item.kanji,
      type: 'context',
      typeLabelJp: '文脈規定 (Contextual Usage)',
      typeLabelMm: 'ဝါကျအဓိပ္ပာယ်နှင့် ကိုက်ညီသော စကားလုံးရွေးချယ်ခြင်း',
      promptJp: blankedJp,
      promptSub: `${sentence.mm} （ヒント：${targetVocab.meaning}）`,
      highlightWord: '【 ＿＿＿ 】',
      options,
      correctIndex,
      explanationJp: `正解は「${targetVocab.cleanWord}」（${targetVocab.cleanReading}）です。文全体：${sentence.jp}`,
      explanationMm: `အဖြေမှန်မှာ 「${targetVocab.cleanWord}」 (${targetVocab.cleanReading} — ${targetVocab.meaning}) ဖြစ်ပါသည်။`
    };
  });
}

/**
 * Score & review summary calculator for Mock Exam
 */
export function calculateExamSummary(
  questions: ExamQuestion[],
  answers: Record<string, number>
): ExamSummary {
  const total = questions.length;
  let correct = 0;
  const wrongQuestions: { question: ExamQuestion; selectedIndex: number }[] = [];

  for (const q of questions) {
    const selected = answers[q.id];
    if (selected === q.correctIndex) {
      correct++;
    } else {
      wrongQuestions.push({
        question: q,
        selectedIndex: selected ?? -1
      });
    }
  }

  const incorrect = total - correct;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const passed = percentage >= 70;
  let grade = 'C (要復習 / ပြန်လည်လေ့ကျင့်ရန်လို)';
  if (percentage >= 90) grade = 'S (優秀・合格圏 / အထူးထူးချွန် အောင်မြင်)';
  else if (percentage >= 80) grade = 'A (合格圏内 / ကောင်းမွန်စွာ အောင်မြင်)';
  else if (percentage >= 70) grade = 'B (合格ライン / အောင်မှတ်ရရှိ)';

  return {
    total,
    correct,
    incorrect,
    percentage,
    passed,
    grade,
    wrongQuestions
  };
}

/**
 * Generates pedagogical stroke breakdown steps for Study Mode (#လေ့လာရန်)
 */
export function getStrokeBreakdown(item: KanjiItem): StrokeStepInfo[] {
  const strokeRules = [
    {
      labelJp: '横画（よこかく）',
      labelMm: 'အလျားလိုက်မျဉ်း (ဘယ်မှညာသို့)',
      ruleJp: '左から右へ真っ直ぐ引く基本の画',
      pathD: 'M 22 28 L 78 28'
    },
    {
      labelJp: '縦画（たてかく）',
      labelMm: 'ဒေါင်လိုက်မျဉ်း (အပေါ်မှအောက်သို့)',
      labelRule: '上から下へ垂直に引き下ろす画',
      ruleJp: '上から下へ垂直に引き下ろす画',
      pathD: 'M 50 16 L 50 84'
    },
    {
      labelJp: '左払い（ひだりはらい）',
      labelMm: 'ဘယ်ဘက်သို့ သိမ်းဆွဲချက်',
      ruleJp: '右上から左下へすっと払う画',
      pathD: 'M 48 34 Q 36 58 18 76'
    },
    {
      labelJp: '右払い・止め（みぎはらい）',
      labelMm: 'ညာဘက်သို့ သိမ်းဆွဲချက် / အဆုံးသတ်ချက်',
      ruleJp: '左上から右下へ力を込めて払う画',
      pathD: 'M 52 38 Q 66 58 84 76'
    },
    {
      labelJp: '折れ・曲がり（おれ・まがり）',
      labelMm: 'ထောင့်ချိုးနှင့် ကွေးဆွဲချက်',
      ruleJp: '角で一度止めて方向を変える画',
      pathD: 'M 26 44 L 74 44 L 74 78'
    },
    {
      labelJp: '点・結び（てん・むすび）',
      labelMm: 'အစက်ချချက်နှင့် အပိတ်မျဉ်း',
      ruleJp: '全体のバランスを整える最終画',
      pathD: 'M 26 78 L 74 78'
    }
  ];

  const steps: StrokeStepInfo[] = [];
  for (let i = 1; i <= item.strokes; i++) {
    const template = strokeRules[(i - 1) % strokeRules.length];
    steps.push({
      step: i,
      labelJp: `第${i}画：${template.labelJp}`,
      labelMm: `စုတ်ချက် (${i}) — ${template.labelMm}`,
      ruleJp: template.ruleJp,
      pathD: template.pathD
    });
  }
  return steps;
}
