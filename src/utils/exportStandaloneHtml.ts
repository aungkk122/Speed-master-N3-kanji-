import { kanjiData } from '../data/kanjiData';

export function exportStandaloneHtml(): void {
  const jsonPayload = JSON.stringify(kanjiData);
  const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<title>Speed Master JLPT N3 Kanji (405) — Self-Contained Edition</title>
<style>
  :root { --bg: #f8fafc; --card: #ffffff; --border: #e2e8f0; --text: #0f172a; --muted: #64748b; --accent: #0284c7; }
  html.dark { --bg: #0f172a; --card: #1e293b; --border: #334155; --text: #f8fafc; --muted: #94a3b8; --accent: #38bdf8; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: system-ui, -apple-system, sans-serif; background: var(--bg); color: var(--text); }
  header { position: sticky; top: 0; z-index: 1000; background: var(--card); border-bottom: 1px solid var(--border); padding: 12px 16px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; }
  input[type="search"] { flex: 1; min-width: 220px; padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg); color: var(--text); }
  button { min-height: 40px; padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--card); color: var(--text); cursor: pointer; font-weight: 600; }
  .grid { max-width: 1320px; margin: 20px auto; padding: 0 16px; display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 16px; }
  .card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 16px; }
  .kanji-big { font-size: 48px; font-weight: 700; color: var(--accent); }
</style>
</head>
<body>
<header>
  <strong>Speed Master N3 Kanji (405)</strong>
  <input id="q" type="search" placeholder="Search 漢字, かな, Romaji, English, မြန်မာ..." />
  <span id="count">Matches: 405 / 405</span>
  <button onclick="document.documentElement.classList.toggle('dark')">Theme</button>
</header>
<main class="grid" id="grid"></main>
<script>
const kanjiData = ${jsonPayload};
function speak(t) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(t);
  u.lang = 'ja-JP'; u.rate = 0.9; u.pitch = 1.0;
  window.speechSynthesis.speak(u);
}
function render(q = '') {
  const s = q.trim().toLowerCase();
  const list = kanjiData.filter(k => !s || k.kanji.includes(s) || k.english.toLowerCase().includes(s) || k.romaji.toLowerCase().includes(s) || k.vocab.some(v => v.word.includes(s) || v.reading.includes(s) || v.meaning.includes(s)));
  document.getElementById('count').textContent = 'Matches: ' + list.length + ' / ' + kanjiData.length;
  document.getElementById('grid').innerHTML = list.map(k => \`
    <article class="card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span>No. \${k.id} · \${k.strokes}画 · \${k.category}</span>
        <button onclick="speak('\${k.kanji}')">🔊</button>
      </div>
      <div style="display:flex;gap:16px;align-items:center;margin:12px 0">
        <div class="kanji-big">\${k.kanji}</div>
        <div>
          <div>音: \${k.onyomi}</div>
          <div>訓: \${k.kunyomi}</div>
          <div style="color:var(--muted);font-size:13px">\${k.english}</div>
        </div>
      </div>
      <ul>\${k.vocab.map(v => \`<li><strong>\${v.word}</strong> 【\${v.reading}】 : \${v.meaning} <button onclick="speak('\${v.cleanWord}')" style="min-height:28px;padding:2px 6px">🔊</button></li>\`).join('')}</ul>
      <div style="border-top:1px solid var(--border);padding-top:8px;margin-top:8px;font-size:13px">
        \${k.sentences.map(st => \`<p><strong>\${st.jp}</strong><br/><span style="color:var(--muted)">\${st.furigana}</span><br/>\${st.mm} <button onclick="speak('\${st.jp}')" style="min-height:26px;padding:2px 6px">🔊</button></p>\`).join('')}
      </div>
    </article>
  \`).join('');
}
document.getElementById('q').addEventListener('input', e => render(e.target.value));
render();
</script>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'index.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
