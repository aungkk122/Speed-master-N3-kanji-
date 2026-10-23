// Native HTML5 SpeechSynthesis API wrapper optimized for ja-JP on iOS, Android, and Desktop

let cachedJaVoice: SpeechSynthesisVoice | null = null;

function selectJapaneseVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  if (cachedJaVoice) return cachedJaVoice;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const jaVoices = voices.filter(
    v => v.lang.toLowerCase().startsWith('ja') || v.lang.toLowerCase().includes('jp')
  );

  if (jaVoices.length === 0) return null;

  // Prefer high-clarity natural voices across iOS/macOS/Android/Chrome
  const preferredNames = ['Kyoko', 'Otoya', 'Google 日本語', 'Haruka', 'Ichiro', 'Siri'];
  for (const pref of preferredNames) {
    const found = jaVoices.find(v => v.name.includes(pref));
    if (found) {
      cachedJaVoice = found;
      return found;
    }
  }

  cachedJaVoice = jaVoices[0];
  return cachedJaVoice;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedJaVoice = null;
    selectJapaneseVoice();
  };
}

export function speakJapanese(
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  try {
    // Cancel any ongoing utterance immediately for responsive mobile tap behavior
    window.speechSynthesis.cancel();

    const cleanText = text
      .replace(/\[.*?\]|【.*?】/g, '')
      .replace(/\(~が\)|\(~を\)|\(~に\)|\(~と\)|\(する\)|\(な\)|\(お\)/g, '')
      .replace(/[★*~〜]/g, '')
      .trim();

    if (!cleanText) {
      onEnd?.();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.pitch = 1.0;
    utterance.rate = 0.9;

    const voice = selectJapaneseVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      onStart?.();
    };
    utterance.onend = () => {
      onEnd?.();
    };
    utterance.onerror = () => {
      onEnd?.();
    };

    window.speechSynthesis.speak(utterance);
  } catch {
    onEnd?.();
  }
}
