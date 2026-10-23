import test from 'node:test';
import assert from 'node:assert/strict';
import { kanjiData } from '../data/kanjiData';
import {
  filterKanjiList,
  generateExamQuestions,
  calculateExamSummary,
  getStrokeBreakdown,
  normalizeKana
} from './kanjiLogic';

test('dataset contains all 405 Kanji from Speed Master N3 with vocab and 2 sentences each', () => {
  assert.equal(kanjiData.length, 405);
  assert.equal(kanjiData[0].id, 1);
  assert.equal(kanjiData[0].kanji, '飛');
  assert.equal(kanjiData[404].id, 405);
  assert.equal(kanjiData[404].kanji, '奥');

  for (const item of kanjiData) {
    assert.ok(item.vocab.length >= 1, `Kanji #${item.id} has vocabulary`);
    assert.equal(item.sentences.length, 2, `Kanji #${item.id} has 2 example sentences`);
    assert.ok(item.sentences[0].jp.length > 0 && item.sentences[0].mm.length > 0);
  }
});

test('trilingual search matches Japanese (Kanji/Hiragana/Katakana/Romaji), English, and Myanmar', () => {
  // Kanji search
  const byKanji = filterKanjiList(kanjiData, '飛行場');
  assert.ok(byKanji.some(k => k.id === 1));

  // Hiragana / Katakana normalization search
  assert.equal(normalizeKana('ヒコウキ'), 'ひこうき');
  const byKatakana = filterKanjiList(kanjiData, 'ヒコウキ');
  assert.ok(byKatakana.some(k => k.id === 1));

  // Romaji search
  const byRomaji = filterKanjiList(kanjiData, 'hikoujou');
  assert.ok(byRomaji.some(k => k.id === 1));

  // English search
  const byEnglish = filterKanjiList(kanjiData, 'airport');
  assert.ok(byEnglish.some(k => k.id === 3));

  // Myanmar search
  const byMyanmar = filterKanjiList(kanjiData, 'လေယာဉ်ပျံ');
  assert.ok(byMyanmar.some(k => k.id === 1));

  // Exact number search
  const byNumber = filterKanjiList(kanjiData, '405');
  assert.equal(byNumber.length, 1);
  assert.equal(byNumber[0].kanji, '奥');
});

test('JLPT N3 mock exam generator builds valid 4-option questions and calculates score accurately', () => {
  const questions = generateExamQuestions(kanjiData, 12, 'ALL', 'ALL', 42);
  assert.equal(questions.length, 12);

  const answers: Record<string, number> = {};
  questions.forEach((q, idx) => {
    assert.equal(q.options.length, 4);
    assert.ok(q.correctIndex >= 0 && q.correctIndex < 4);
    // Answer first 9 correctly, last 3 wrong
    answers[q.id] = idx < 9 ? q.correctIndex : (q.correctIndex + 1) % 4;
  });

  const summary = calculateExamSummary(questions, answers);
  assert.equal(summary.total, 12);
  assert.equal(summary.correct, 9);
  assert.equal(summary.incorrect, 3);
  assert.equal(summary.percentage, 75);
  assert.equal(summary.passed, true);
  assert.equal(summary.wrongQuestions.length, 3);
});

test('stroke breakdown returns exact number of stroke steps matching Kanji stroke count', () => {
  const firstKanji = kanjiData[0]; // 飛 (9 strokes)
  const steps = getStrokeBreakdown(firstKanji);
  assert.equal(steps.length, 9);
  assert.equal(steps[0].step, 1);
  assert.equal(steps[8].step, 9);
});
