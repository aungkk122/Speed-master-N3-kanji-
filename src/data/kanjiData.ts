// Auto-generated complete Speed Master JLPT N3 Kanji dataset (405 Kanji, 1,310 Vocabulary items)
export interface KanjiVocab {
  word: string;
  cleanWord: string;
  reading: string;
  cleanReading: string;
  romaji: string;
  meaning: string;
}

export interface KanjiSentence {
  jp: string;
  furigana: string;
  mm: string;
}

export interface KanjiItem {
  id: number;
  kanji: string;
  strokes: number;
  onyomi: string;
  kunyomi: string;
  english: string;
  romaji: string;
  category: string;
  categoryJp: string;
  categoryMm: string;
  vocab: KanjiVocab[];
  sentences: [KanjiSentence, KanjiSentence];
}

export const KANJI_CATEGORIES = [
  { id: 'ALL', name: 'All 405 Kanji', nameJp: '全405漢字', nameMm: 'ခန်းဂျီးအားလုံး (၄၀၅ လုံး)', range: '1–405' },
  { id: 'Transportation & Travel', name: 'Transportation & Travel', nameJp: '交通・旅行・宿泊', nameMm: 'သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး', range: '1–35' },
  { id: 'Railways, Tickets & Finance', name: 'Railways, Tickets & Finance', nameJp: '鉄道・切符・会計', nameMm: 'ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး', range: '36–70' },
  { id: 'Traffic, Roads & Daily Life', name: 'Traffic, Roads & Daily Life', nameJp: '道路・交通・日常', nameMm: 'လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ', range: '71–105' },
  { id: 'Delivery, Housing & Appliances', name: 'Delivery, Housing & Appliances', nameJp: '宅配・住居・家電', nameMm: 'ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း', range: '106–139' },
  { id: 'Education, Study & Information', name: 'Education, Study & Information', nameJp: '教育・学習・情報', nameMm: 'ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်', range: '140–175' },
  { id: 'Sports, Health & Medical Care', name: 'Sports, Health & Medical Care', nameJp: 'スポーツ・健康・医療', nameMm: 'အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု', range: '176–214' },
  { id: 'Emotions, Relations & Qualities', name: 'Emotions, Relations & Qualities', nameJp: '感情・人間関係・性質', nameMm: 'စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ', range: '215–251' },
  { id: 'Actions, Movement & Weather', name: 'Actions, Movement & Weather', nameJp: '動作・移動・気象', nameMm: 'လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ', range: '252–270' },
  { id: 'Nature, Environment & Geography', name: 'Nature, Environment & Geography', nameJp: '自然・環境・地理', nameMm: 'သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်', range: '271–310' },
  { id: 'Culture, Society & Arts', name: 'Culture, Society & Arts', nameJp: '暮らし・文化・芸術', nameMm: 'ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ', range: '311–351' },
  { id: 'Work, Business & Economy', name: 'Work, Business & Economy', nameJp: '仕事・経済・貿易', nameMm: 'အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး', range: '352–380' },
  { id: 'Politics, Proportions & Family', name: 'Politics, Proportions & Family', nameJp: '政治・割合・家族', nameMm: 'နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု', range: '381–405' }
] as const;

export const kanjiData: KanjiItem[] = [
  {
    "id": 1,
    "kanji": "飛",
    "strokes": 9,
    "onyomi": "ヒ",
    "kunyomi": "と-ぶ",
    "english": "fly, flight, aviation",
    "romaji": "hi tobu hikoujou hikouki",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "飛ぶ",
        "cleanWord": "飛ぶ",
        "reading": "とぶ",
        "cleanReading": "とぶ",
        "romaji": "tobu",
        "meaning": "ပျံသန်းသည်"
      },
      {
        "word": "飛行場",
        "cleanWord": "飛行場",
        "reading": "ひこうじょう",
        "cleanReading": "ひこうじょう",
        "romaji": "hikoujou",
        "meaning": "လေယာဉ်ကွင်း"
      },
      {
        "word": "飛行機",
        "cleanWord": "飛行機",
        "reading": "ひこうき",
        "cleanReading": "ひこうき",
        "romaji": "hikouki",
        "meaning": "လေယာဉ်ပျံ"
      }
    ],
    "sentences": [
      {
        "jp": "鳥が空を気持ちよさそうに飛んでいる。",
        "furigana": "とりが そらを きもちよさそうに とんでいる。",
        "mm": "ငှက်ကလေးများသည် ကောင်းကင်တွင် သာသာယာယာ ပျံသန်းနေကြသည်။"
      },
      {
        "jp": "成田飛行場から飛行機で日本へ出発しました。",
        "furigana": "なりたひこうじょうから ひこうきで にほんへ しゅっぱつしました。",
        "mm": "နာရီတာလေယာဉ်ကွင်းမှ လေယာဉ်ပျံဖြင့် ဂျပန်သို့ စတင်ထွက်ခွာခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 2,
    "kanji": "機",
    "strokes": 16,
    "onyomi": "キ",
    "kunyomi": "—",
    "english": "machine, aircraft, opportunity",
    "romaji": "ki kikai sentakuki kopi-ki",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "機械",
        "cleanWord": "機械",
        "reading": "きかい",
        "cleanReading": "きかい",
        "romaji": "kikai",
        "meaning": "စက်"
      },
      {
        "word": "洗濯機",
        "cleanWord": "洗濯機",
        "reading": "せんたくき",
        "cleanReading": "せんたくき",
        "romaji": "sentakuki",
        "meaning": "အဝတ်လျှော်စက်"
      },
      {
        "word": "コピー機",
        "cleanWord": "コピー機",
        "reading": "コピーき",
        "cleanReading": "コピーき",
        "romaji": "kopi-ki",
        "meaning": "မိတ္တူကူးစက်"
      },
      {
        "word": "機会",
        "cleanWord": "機会",
        "reading": "きかい",
        "cleanReading": "きかい",
        "romaji": "kikai",
        "meaning": "အခွင့်အရေး"
      }
    ],
    "sentences": [
      {
        "jp": "新しい洗濯機の使い方を説明書で確認した。",
        "furigana": "あたらしい せんたくきの つかいかたを せつめいしょで かくにんした。",
        "mm": "အဝတ်လျှော်စက်အသစ် အသုံးပြုပုံကို လမ်းညွှန်စာအုပ်ဖြင့် စစ်ဆေးခဲ့သည်။"
      },
      {
        "jp": "日本へ留学するいい機会があれば、ぜひ行きたいです。",
        "furigana": "にほんへ りゅうがくする いい きかいが あれば、ぜひ いきたいです。",
        "mm": "ဂျပန်သို့ ပညာတော်သင်သွားရန် အခွင့်အရေးကောင်းရှိလျှင် ဆက်ဆက်သွားချင်ပါသည်။"
      }
    ]
  },
  {
    "id": 3,
    "kanji": "空",
    "strokes": 8,
    "onyomi": "クウ",
    "kunyomi": "そら ・ あ-く ・ あ-ける",
    "english": "sky, air, empty, airport",
    "romaji": "kuu sora aku akeru kuukou kuuki",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "(~が)空く",
        "cleanWord": "空く",
        "reading": "あく",
        "cleanReading": "あく",
        "romaji": "aku",
        "meaning": "~လစ်လပ်သည်"
      },
      {
        "word": "(~を)空ける",
        "cleanWord": "空ける",
        "reading": "あける",
        "cleanReading": "あける",
        "romaji": "akeru",
        "meaning": "~လစ်လပ်အောင်လုပ်သည်"
      },
      {
        "word": "空港",
        "cleanWord": "空港",
        "reading": "くうこう",
        "cleanReading": "くうこう",
        "romaji": "kuukou",
        "meaning": "လေဆိပ်"
      },
      {
        "word": "空気",
        "cleanWord": "空気",
        "reading": "くうき",
        "cleanReading": "くうき",
        "romaji": "kuuki",
        "meaning": "လေ"
      },
      {
        "word": "空",
        "cleanWord": "空",
        "reading": "そら",
        "cleanReading": "そら",
        "romaji": "sora",
        "meaning": "ကောင်းကင်"
      }
    ],
    "sentences": [
      {
        "jp": "出発の2時間前に空港へ着くように家を出ました。",
        "furigana": "しゅっぱつの にじかんまえに くうこうへ つくように いえを でました。",
        "mm": "မထွက်ခွာမီ ၂ နာရီအလိုတွင် လေဆိပ်သို့ရောက်ရှိရန် အိမ်မှထွက်ခဲ့ပါသည်။"
      },
      {
        "jp": "窓を開けて、部屋の空気をきれいにしましょう。",
        "furigana": "まどを あけて、へやの くうきを きれいに しましょう。",
        "mm": "ပြတင်းပေါက်ကိုဖွင့်ပြီး အခန်းထဲက လေထုကို သန့်ရှင်းအောင် လုပ်ကြပါစို့။"
      }
    ]
  },
  {
    "id": 4,
    "kanji": "港",
    "strokes": 12,
    "onyomi": "コウ",
    "kunyomi": "みなと",
    "english": "harbor, port",
    "romaji": "kou minato minatomachi yokohamakou",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "港",
        "cleanWord": "港",
        "reading": "みなと",
        "cleanReading": "みなと",
        "romaji": "minato",
        "meaning": "ဆိပ်ကမ်း"
      },
      {
        "word": "港町",
        "cleanWord": "港町",
        "reading": "みなとまち",
        "cleanReading": "みなとまち",
        "romaji": "minatomachi",
        "meaning": "ဆိပ်ကမ်းမြို့"
      },
      {
        "word": "横浜港",
        "cleanWord": "横浜港",
        "reading": "よこはまこう",
        "cleanReading": "よこはまこう",
        "romaji": "yokohamakou",
        "meaning": "YOKOHAMA ဆိပ်ကမ်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「港」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「みなと」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆိပ်ကမ်း\" (港) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、港町について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、みなとまちについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆိပ်ကမ်းမြို့ (港町) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 5,
    "kanji": "預",
    "strokes": 13,
    "onyomi": "ヨ",
    "kunyomi": "あず-ける ・ あず-かる",
    "english": "deposit, entrust, leave in care",
    "romaji": "yo azukeru azukaru yokin",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "預ける",
        "cleanWord": "預ける",
        "reading": "あずける",
        "cleanReading": "あずける",
        "romaji": "azukeru",
        "meaning": "အပ်နှံသည်၊ တာဝန်လွှဲပေးသည်၊ အမှီသတ်ပြုသည်"
      },
      {
        "word": "預かる",
        "cleanWord": "預かる",
        "reading": "あずかる",
        "cleanReading": "あずかる",
        "romaji": "azukaru",
        "meaning": "ထိန်းသိမ်းသည်၊ တာဝန်လွှဲအပ်ခြင်းခံရသည်။"
      },
      {
        "word": "預金",
        "cleanWord": "預金",
        "reading": "よきん",
        "cleanReading": "よきん",
        "romaji": "yokin",
        "meaning": "စုငွေ၊ အပ်ငွေ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に預けるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに あずけるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (အပ်နှံသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで預かる必要があります。",
        "furigana": "じかんが たりないので、いそいで あずかる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ထိန်းသိမ်းသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 6,
    "kanji": "込",
    "strokes": 5,
    "onyomi": "—",
    "kunyomi": "こ-む",
    "english": "crowded, include, apply",
    "romaji": "komu komutomo書ku mochikomu moushikomu moushikomisho",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "込む",
        "cleanWord": "込む",
        "reading": "こむ (混む)とも書く",
        "cleanReading": "こむとも書く",
        "romaji": "komutomo書ku",
        "meaning": "ပြည့်ကျပ်သည်"
      },
      {
        "word": "持ち込む",
        "cleanWord": "持ち込む",
        "reading": "もちこむ",
        "cleanReading": "もちこむ",
        "romaji": "mochikomu",
        "meaning": "ယူလာသည်၊ သယ်လာသည်"
      },
      {
        "word": "申し込む",
        "cleanWord": "申し込む",
        "reading": "もうしこむ",
        "cleanReading": "もうしこむ",
        "romaji": "moushikomu",
        "meaning": "လျှောက်လွှာတင်သည်"
      },
      {
        "word": "申込書",
        "cleanWord": "申込書",
        "reading": "もうしこみしょ",
        "cleanReading": "もうしこみしょ",
        "romaji": "moushikomisho",
        "meaning": "ဖောင်၊ လျှောက်လွှာ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に込むようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに こむとも書くように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပြည့်ကျပ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで持ち込む必要があります。",
        "furigana": "じかんが たりないので、いそいで もちこむ ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ယူလာသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 7,
    "kanji": "荷",
    "strokes": 10,
    "onyomi": "—",
    "kunyomi": "に",
    "english": "luggage, baggage, cargo, load",
    "romaji": "ni nimotsu",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "荷物",
        "cleanWord": "荷物",
        "reading": "にもつ",
        "cleanReading": "にもつ",
        "romaji": "nimotsu",
        "meaning": "ပစ္စည်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「荷物」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「にもつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပစ္စည်း\" (荷物) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、荷物について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、にもつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပစ္စည်း (荷物) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 8,
    "kanji": "検",
    "strokes": 12,
    "onyomi": "ケン",
    "kunyomi": "—",
    "english": "inspect, examine, search",
    "romaji": "ken kensa kensaku",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "検査",
        "cleanWord": "検査",
        "reading": "けんさ",
        "cleanReading": "けんさ",
        "romaji": "kensa",
        "meaning": "စစ်ဆေးစမ်းသပ်မှု"
      },
      {
        "word": "検索",
        "cleanWord": "検索",
        "reading": "けんさく",
        "cleanReading": "けんさく",
        "romaji": "kensaku",
        "meaning": "အချက်အလက်ရှာဖွေခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「検査」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「けんさ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စစ်ဆေးစမ်းသပ်မှု\" (検査) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、検索について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、けんさくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အချက်အလက်ရှာဖွေခြင်း (検索) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 9,
    "kanji": "査",
    "strokes": 9,
    "onyomi": "サ",
    "kunyomi": "—",
    "english": "investigate, inspection, survey",
    "romaji": "sa chousa",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "調査",
        "cleanWord": "調査",
        "reading": "ちょうさ",
        "cleanReading": "ちょうさ",
        "romaji": "chousa",
        "meaning": "စုံစမ်းစစ်ဆေးမှု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「調査」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ちょうさ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စုံစမ်းစစ်ဆေးမှု\" (調査) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、調査について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ちょうさについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စုံစမ်းစစ်ဆေးမှု (調査) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 10,
    "kanji": "満",
    "strokes": 12,
    "onyomi": "マン",
    "kunyomi": "—",
    "english": "full, satisfied,満席",
    "romaji": "man manseki manin manshitsu manzoku fuman",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "満席",
        "cleanWord": "満席",
        "reading": "まんせき",
        "cleanReading": "まんせき",
        "romaji": "manseki",
        "meaning": "နေရာပြည့်ခြင်း၊ လူပြည့်ခြင်း"
      },
      {
        "word": "満員",
        "cleanWord": "満員",
        "reading": "まんいん",
        "cleanReading": "まんいん",
        "romaji": "manin",
        "meaning": "လူပြည့်နေခြင်း"
      },
      {
        "word": "満室",
        "cleanWord": "満室",
        "reading": "まんしつ",
        "cleanReading": "まんしつ",
        "romaji": "manshitsu",
        "meaning": "အခန်းပြည့်နေခြင်း"
      },
      {
        "word": "満足",
        "cleanWord": "満足",
        "reading": "まんぞく",
        "cleanReading": "まんぞく",
        "romaji": "manzoku",
        "meaning": "အားရကျေနပ်ခြင်း"
      },
      {
        "word": "不満",
        "cleanWord": "不満",
        "reading": "ふまん",
        "cleanReading": "ふまん",
        "romaji": "fuman",
        "meaning": "မကျေနပ်ခြင်း၊ တင်းတိမ်ရောင့်ရဲမှုမရှိခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「満席」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「まんせき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နေရာပြည့်ခြင်း\" (満席) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、満員について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、まんいんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လူပြည့်နေခြင်း (満員) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 11,
    "kanji": "席",
    "strokes": 10,
    "onyomi": "セキ",
    "kunyomi": "—",
    "english": "seat, attendance, absence",
    "romaji": "seki shusseki kesseki",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "席",
        "cleanWord": "席",
        "reading": "せき",
        "cleanReading": "せき",
        "romaji": "seki",
        "meaning": "ထိုင်ခုံ"
      },
      {
        "word": "出席",
        "cleanWord": "出席",
        "reading": "しゅっせき",
        "cleanReading": "しゅっせき",
        "romaji": "shusseki",
        "meaning": "တက်ရောက်ခြင်း"
      },
      {
        "word": "欠席",
        "cleanWord": "欠席",
        "reading": "けっせき",
        "cleanReading": "けっせき",
        "romaji": "kesseki",
        "meaning": "တက်ရောက်ခြင်းပျက်ကွက်မှု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「席」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ထိုင်ခုံ\" (席) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、出席について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しゅっせきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တက်ရောက်ခြင်း (出席) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 12,
    "kanji": "番",
    "strokes": 12,
    "onyomi": "バン",
    "kunyomi": "—",
    "english": "number, turn, best, police box",
    "romaji": "ban ichiban ichibanme kouban",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "一番",
        "cleanWord": "一番",
        "reading": "いちばん",
        "cleanReading": "いちばん",
        "romaji": "ichiban",
        "meaning": "နံပါတ်တစ်"
      },
      {
        "word": "一番目",
        "cleanWord": "一番目",
        "reading": "いちばんめ",
        "cleanReading": "いちばんめ",
        "romaji": "ichibanme",
        "meaning": "ပထမမြောက်၊"
      },
      {
        "word": "交番",
        "cleanWord": "交番",
        "reading": "こうばん",
        "cleanReading": "こうばん",
        "romaji": "kouban",
        "meaning": "ရဲကင်း၊ ရဲစခန်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「一番」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いちばん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နံပါတ်တစ်\" (一番) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、一番目について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、いちばんめについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပထမမြောက် (一番目) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 13,
    "kanji": "号",
    "strokes": 5,
    "onyomi": "ゴウ",
    "kunyomi": "—",
    "english": "number, train car, signal, sign",
    "romaji": "gou bangou sangousha shingou kigou",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "番号",
        "cleanWord": "番号",
        "reading": "ばんごう",
        "cleanReading": "ばんごう",
        "romaji": "bangou",
        "meaning": "နံပါတ်"
      },
      {
        "word": "3号車",
        "cleanWord": "3号車",
        "reading": "さんごうしゃ",
        "cleanReading": "さんごうしゃ",
        "romaji": "sangousha",
        "meaning": "အတွဲ၃ (ရထား) ၊ ရထားရဲ့၃တွဲမြောက်"
      },
      {
        "word": "信号",
        "cleanWord": "信号",
        "reading": "しんごう",
        "cleanReading": "しんごう",
        "romaji": "shingou",
        "meaning": "မီးပွိုင့်"
      },
      {
        "word": "記号",
        "cleanWord": "記号",
        "reading": "きごう",
        "cleanReading": "きごう",
        "romaji": "kigou",
        "meaning": "သင်္ကေတ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「番号」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ばんごう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နံပါတ်\" (番号) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、3号車について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、さんごうしゃについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အတွဲ၃ (ရထား) (3号車) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 14,
    "kanji": "路",
    "strokes": 13,
    "onyomi": "ロ",
    "kunyomi": "—",
    "english": "road, path, aisle, railway track",
    "romaji": "ro tsuuro douro senro",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "通路",
        "cleanWord": "通路",
        "reading": "つうろ",
        "cleanReading": "つうろ",
        "romaji": "tsuuro",
        "meaning": "လူသွားလမ်း၊ လျှောက်လမ်း"
      },
      {
        "word": "道路",
        "cleanWord": "道路",
        "reading": "どうろ",
        "cleanReading": "どうろ",
        "romaji": "douro",
        "meaning": "လမ်း၊ ကားလမ်း"
      },
      {
        "word": "線路",
        "cleanWord": "線路",
        "reading": "せんろ",
        "cleanReading": "せんろ",
        "romaji": "senro",
        "meaning": "မီးရထားလမ်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「通路」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「つうろ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လူသွားလမ်း\" (通路) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、道路について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、どうろについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လမ်း (道路) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 15,
    "kanji": "側",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "がわ",
    "english": "side, right side, aisle side",
    "romaji": "gawa migigawa sotogawa tsuurogawa",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "右側",
        "cleanWord": "右側",
        "reading": "みぎがわ",
        "cleanReading": "みぎがわ",
        "romaji": "migigawa",
        "meaning": "ညာဘက်"
      },
      {
        "word": "外側",
        "cleanWord": "外側",
        "reading": "そとがわ",
        "cleanReading": "そとがわ",
        "romaji": "sotogawa",
        "meaning": "အပြင်ဘက်"
      },
      {
        "word": "通路側",
        "cleanWord": "通路側",
        "reading": "つうろがわ",
        "cleanReading": "つうろがわ",
        "romaji": "tsuurogawa",
        "meaning": "လူသွားလမ်းဘက်ခြမ်း၊ လျှောက်လမ်းဘက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「右側」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「みぎがわ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ညာဘက်\" (右側) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、外側について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、そとがわについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အပြင်ဘက် (外側) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 16,
    "kanji": "座",
    "strokes": 10,
    "onyomi": "ザ",
    "kunyomi": "すわ-る",
    "english": "sit, seat, bank account",
    "romaji": "za suwaru zaseki kouza",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "座る",
        "cleanWord": "座る",
        "reading": "すわる",
        "cleanReading": "すわる",
        "romaji": "suwaru",
        "meaning": "ထိုင်သည်"
      },
      {
        "word": "座席",
        "cleanWord": "座席",
        "reading": "ざせき",
        "cleanReading": "ざせき",
        "romaji": "zaseki",
        "meaning": "ထိုင်ခုံ"
      },
      {
        "word": "口座",
        "cleanWord": "口座",
        "reading": "こうざ",
        "cleanReading": "こうざ",
        "romaji": "kouza",
        "meaning": "ဘဏ်အကောင့်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に座るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに すわるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ထိုင်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、座席について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ざせきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ထိုင်ခုံ (座席) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 17,
    "kanji": "窓",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "まど",
    "english": "window, counter, teller",
    "romaji": "mado madogawa madoguchi madogarasu",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "窓",
        "cleanWord": "窓",
        "reading": "まど",
        "cleanReading": "まど",
        "romaji": "mado",
        "meaning": "ပြတင်းပေါက်"
      },
      {
        "word": "窓側",
        "cleanWord": "窓側",
        "reading": "まどがわ",
        "cleanReading": "まどがわ",
        "romaji": "madogawa",
        "meaning": "ပြတင်းပေါက်ဘက်"
      },
      {
        "word": "窓口",
        "cleanWord": "窓口",
        "reading": "まどぐち",
        "cleanReading": "まどぐち",
        "romaji": "madoguchi",
        "meaning": "ဆက်သွယ်မေးမြန်းစုံစမ်းနိုင်သောကောင်တာနေရာ"
      },
      {
        "word": "窓ガラス",
        "cleanWord": "窓ガラス",
        "reading": "まどガラス",
        "cleanReading": "まどガラス",
        "romaji": "madogarasu",
        "meaning": "ပြတင်းပေါက်မှန်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「窓」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「まど」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပြတင်းပေါက်\" (窓) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、窓側について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、まどがわについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပြတင်းပေါက်ဘက် (窓側) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 18,
    "kanji": "押",
    "strokes": 8,
    "onyomi": "—",
    "kunyomi": "お-す ・ お-さえる",
    "english": "push, press, hold down, closet",
    "romaji": "osu osaeru oshiire",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "押す",
        "cleanWord": "押す",
        "reading": "おす",
        "cleanReading": "おす",
        "romaji": "osu",
        "meaning": "တွန်းသည်၊ ဖိနှိပ်သည်"
      },
      {
        "word": "押し入れ",
        "cleanWord": "押し入れ",
        "reading": "おしいれ",
        "cleanReading": "おしいれ",
        "romaji": "oshiire",
        "meaning": "နံရံကပ်ဗီဒို"
      },
      {
        "word": "押さえる",
        "cleanWord": "押さえる",
        "reading": "おさえる",
        "cleanReading": "おさえる",
        "romaji": "osaeru",
        "meaning": "ဖိနှိပ်သည်၊ ထိန်းချုပ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に押すようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに おすように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (တွန်းသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、押し入れについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おしいれについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နံရံကပ်ဗီဒို (押し入れ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 19,
    "kanji": "面",
    "strokes": 9,
    "onyomi": "メン",
    "kunyomi": "—",
    "english": "surface, screen, scene, mask",
    "romaji": "men gamen bamen",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "面",
        "cleanWord": "面",
        "reading": "めん",
        "cleanReading": "めん",
        "romaji": "men",
        "meaning": "မျက်နှာဖုံး"
      },
      {
        "word": "画面",
        "cleanWord": "画面",
        "reading": "がめん",
        "cleanReading": "がめん",
        "romaji": "gamen",
        "meaning": "မျက်နှာပြင်၊ ဖန်သားပြင်"
      },
      {
        "word": "場面",
        "cleanWord": "場面",
        "reading": "ばめん",
        "cleanReading": "ばめん",
        "romaji": "bamen",
        "meaning": "ပြကွက်၊ ပြကွက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「面」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「めん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မျက်နှာဖုံး\" (面) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、画面について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、がめんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မျက်နှာပြင် (画面) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 20,
    "kanji": "戻",
    "strokes": 7,
    "onyomi": "—",
    "kunyomi": "もど-る ・ もど-す",
    "english": "return, put back, turn back",
    "romaji": "modoru modosu",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "(~が)戻る",
        "cleanWord": "戻る",
        "reading": "(~が)もどる",
        "cleanReading": "もどる",
        "romaji": "modoru",
        "meaning": "ပြန်လှည့်လာသည်"
      },
      {
        "word": "(~を)戻す",
        "cleanWord": "戻す",
        "reading": "(~を)もどす",
        "cleanReading": "もどす",
        "romaji": "modosu",
        "meaning": "ပကတိအကောင်းအတိုင်းဖြစ်အောင်လုပ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、戻るようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、もどるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ပြန်လှည့်လာသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に戻すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに もどすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ပကတိအကောင်းအတိုင်းဖြစ်အောင်လုပ်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 21,
    "kanji": "組",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "く-む ・ くみ ・ ~ぐみ",
    "english": "group, team, program, assemble",
    "romaji": "kumu kumi gumi bangumi kumitateru",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "番組",
        "cleanWord": "番組",
        "reading": "ばんぐみ",
        "cleanReading": "ばんぐみ",
        "romaji": "bangumi",
        "meaning": "တီဗွီအစီအစဉ်"
      },
      {
        "word": "~組",
        "cleanWord": "組",
        "reading": "~くみ",
        "cleanReading": "くみ",
        "romaji": "kumi",
        "meaning": "အဖွဲ့"
      },
      {
        "word": "組む",
        "cleanWord": "組む",
        "reading": "くむ",
        "cleanReading": "くむ",
        "romaji": "kumu",
        "meaning": "ဖွဲ့စည်း၊ ဖွဲ့စည်းသည်၊ တွဲဖက်သည်"
      },
      {
        "word": "組み立てる",
        "cleanWord": "組み立てる",
        "reading": "くみたてる",
        "cleanReading": "くみたてる",
        "romaji": "kumitateru",
        "meaning": "ဆောက်လုပ်သည်၊ တပ်ဆင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「番組」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ばんぐみ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တီဗွီအစီအစဉ်\" (番組) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、組について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、くみについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အဖွဲ့ (組) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 22,
    "kanji": "確",
    "strokes": 14,
    "onyomi": "カク",
    "kunyomi": "たし-かめる ・ たし-か",
    "english": "certain, confirm, accurate",
    "romaji": "kaku tashikameru tashika seikaku",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "確かめる",
        "cleanWord": "確かめる",
        "reading": "たしかめる",
        "cleanReading": "たしかめる",
        "romaji": "tashikameru",
        "meaning": "မှန်မမှန်စစ်ဆေးသည်၊ သေချာအောင်ပြုလုပ်သည်"
      },
      {
        "word": "確か",
        "cleanWord": "確か",
        "reading": "たしか",
        "cleanReading": "たしか",
        "romaji": "tashika",
        "meaning": "ဖြစ်နိုင်ဖွယ်ရာ၊ မှတ်မိသလောက်"
      },
      {
        "word": "確か(な)",
        "cleanWord": "確か",
        "reading": "たしか(な)",
        "cleanReading": "たしか",
        "romaji": "tashika",
        "meaning": "သေချာသော"
      },
      {
        "word": "正確(な)",
        "cleanWord": "正確",
        "reading": "せいかく(な)",
        "cleanReading": "せいかく",
        "romaji": "seikaku",
        "meaning": "တိကျမှန်ကန်သော"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に確かめるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに たしかめるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (မှန်မမှန်စစ်ဆေးသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、確かについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、たしかについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဖြစ်နိုင်ဖွယ်ရာ (確か) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 23,
    "kanji": "認",
    "strokes": 14,
    "onyomi": "ニン",
    "kunyomi": "—",
    "english": "recognize, confirm, acknowledge",
    "romaji": "nin kakunin",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "確認(する)",
        "cleanWord": "確認",
        "reading": "かくにん(する)",
        "cleanReading": "かくにん",
        "romaji": "kakunin",
        "meaning": "အသိအမှတ်ပြုသည်၊ သေချာအောင်စစ်ဆေးသည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり確認することが大切です。",
        "furigana": "しごとの まえに しっかり かくにんすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ အသိအမှတ်ပြုသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに確認しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに かくにんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အသိအမှတ်ပြုသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 24,
    "kanji": "直",
    "strokes": 8,
    "onyomi": "チョク",
    "kunyomi": "なお-す ・ なお-る",
    "english": "fix, repair, direct, straight",
    "romaji": "choku naosu naoru chokugo chokusen chokuzen chokusetsu",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "(が)直る",
        "cleanWord": "直る",
        "reading": "(が)なおる",
        "cleanReading": "なおる",
        "romaji": "naoru",
        "meaning": "ကောင်းလာသည် (ပစ္စည်းပျက်ရာမှ)"
      },
      {
        "word": "(を)直す",
        "cleanWord": "直す",
        "reading": "(を)なおす",
        "cleanReading": "なおす",
        "romaji": "naosu",
        "meaning": "ပြုပြင်သည်"
      },
      {
        "word": "直後",
        "cleanWord": "直後",
        "reading": "ちょくご",
        "cleanReading": "ちょくご",
        "romaji": "chokugo",
        "meaning": "ပြီးပြီးနောက်၊ ပြီးပြီးခြင်း"
      },
      {
        "word": "直線",
        "cleanWord": "直線",
        "reading": "ちょくせん",
        "cleanReading": "ちょくせん",
        "romaji": "chokusen",
        "meaning": "မျဉ်းဖြောင့်"
      },
      {
        "word": "直前",
        "cleanWord": "直前",
        "reading": "ちょくぜん",
        "cleanReading": "ちょくぜん",
        "romaji": "chokuzen",
        "meaning": "မဖြစ်ခင်၊ ဖြစ်ခါနီး၊ -ဆဲဆဲ"
      },
      {
        "word": "直接",
        "cleanWord": "直接",
        "reading": "ちょくせつ",
        "cleanReading": "ちょくせつ",
        "romaji": "chokusetsu",
        "meaning": "တိုက်ရိုက်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、直るようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、なおるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကောင်းလာသည် (ပစ္စည်းပျက်ရာမှ)) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に直すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに なおすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ပြုပြင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 25,
    "kanji": "遊",
    "strokes": 12,
    "onyomi": "ユウ",
    "kunyomi": "あそ-ぶ",
    "english": "play, amusement park",
    "romaji": "yuu asobu yuuenchi",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "遊ぶ",
        "cleanWord": "遊ぶ",
        "reading": "あそぶ",
        "cleanReading": "あそぶ",
        "romaji": "asobu",
        "meaning": "ကစားသည်"
      },
      {
        "word": "遊園地",
        "cleanWord": "遊園地",
        "reading": "ゆうえんち",
        "cleanReading": "ゆうえんち",
        "romaji": "yuuenchi",
        "meaning": "ကစားကွင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に遊ぶようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに あそぶように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကစားသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、遊園地について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ゆうえんちについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကစားကွင်း (遊園地) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 26,
    "kanji": "現",
    "strokes": 11,
    "onyomi": "ゲン",
    "kunyomi": "あらわ-れる",
    "english": "appear, present, modern, cash, express",
    "romaji": "gen arawareru gendai genkin hyougen",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "現れる",
        "cleanWord": "現れる",
        "reading": "あらわれる",
        "cleanReading": "あらわれる",
        "romaji": "arawareru",
        "meaning": "ဖြစ်ပေါ်လာသည်၊ ပေါ်ထွက်လာသည်"
      },
      {
        "word": "現代",
        "cleanWord": "現代",
        "reading": "げんだい",
        "cleanReading": "げんだい",
        "romaji": "gendai",
        "meaning": "မျက်မှောက်ခေတ်၊ ဒုတိယကမ္ဘာစစ်ပြီးနောက်ခေတ်"
      },
      {
        "word": "現金",
        "cleanWord": "現金",
        "reading": "げんきん",
        "cleanReading": "げんきん",
        "romaji": "genkin",
        "meaning": "လက်ငင်းငွေ"
      },
      {
        "word": "表現",
        "cleanWord": "表現",
        "reading": "ひょうげん",
        "cleanReading": "ひょうげん",
        "romaji": "hyougen",
        "meaning": "သရုပ်ဖော်ပြခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に現れるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに あらわれるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဖြစ်ပေါ်လာသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、現代について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、げんだいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မျက်မှောက်ခေတ် (現代) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 27,
    "kanji": "在",
    "strokes": 6,
    "onyomi": "ザイ",
    "kunyomi": "—",
    "english": "exist, present, absent",
    "romaji": "zai genzai fuzai",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "現在",
        "cleanWord": "現在",
        "reading": "げんざい",
        "cleanReading": "げんざい",
        "romaji": "genzai",
        "meaning": "လက်ရှိ၊ ယခုအချိန်အခါ၊"
      },
      {
        "word": "不在",
        "cleanWord": "不在",
        "reading": "ふざい",
        "cleanReading": "ふざい",
        "romaji": "fuzai",
        "meaning": "မရှိခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「現在」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「げんざい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လက်ရှိ\" (現在) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、不在について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ふざいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မရှိခြင်း (不在) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 28,
    "kanji": "雑",
    "strokes": 14,
    "onyomi": "ザツ ・ ザッ",
    "kunyomi": "—",
    "english": "miscellaneous, magazine, noise, complex",
    "romaji": "zatsu za zasshi zatsuon fukuzatsu",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "雑誌",
        "cleanWord": "雑誌",
        "reading": "ざっし",
        "cleanReading": "ざっし",
        "romaji": "zasshi",
        "meaning": "မဂ္ဂဇင်း"
      },
      {
        "word": "雑音",
        "cleanWord": "雑音",
        "reading": "ざつおん",
        "cleanReading": "ざつおん",
        "romaji": "zatsuon",
        "meaning": "ဆူညံသံ၊ မလိုအပ်သောပြင်ပအသံများ"
      },
      {
        "word": "複雑(な)",
        "cleanWord": "複雑",
        "reading": "ふくざつ(な)",
        "cleanReading": "ふくざつ",
        "romaji": "fukuzatsu",
        "meaning": "ရှုပ်ထွေးသော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「雑誌」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ざっし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မဂ္ဂဇင်း\" (雑誌) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、雑音について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ざつおんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆူညံသံ (雑音) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 29,
    "kanji": "眠",
    "strokes": 10,
    "onyomi": "—",
    "kunyomi": "ねむ-る ・ ねむ-い",
    "english": "sleep, sleepy",
    "romaji": "nemuru nemui",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "眠る",
        "cleanWord": "眠る",
        "reading": "ねむる",
        "cleanReading": "ねむる",
        "romaji": "nemuru",
        "meaning": "အိပ်ပျော်သည်"
      },
      {
        "word": "眠い",
        "cleanWord": "眠い",
        "reading": "ねむい",
        "cleanReading": "ねむい",
        "romaji": "nemui",
        "meaning": "အိပ်ငိုက်သော"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に眠るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに ねむるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (အိပ်ပျော်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "あまり眠い場合は、無理をしないで休んでください。",
        "furigana": "あまり ねむい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း အိပ်ငိုက်သော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 30,
    "kanji": "寝",
    "strokes": 13,
    "onyomi": "シン",
    "kunyomi": "ね-る ・ ね-かす",
    "english": "sleep, lie down, bedroom, oversleep",
    "romaji": "shin neru nekasu hirune shinshitsu nebou",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "寝る",
        "cleanWord": "寝る",
        "reading": "ねる",
        "cleanReading": "ねる",
        "romaji": "neru",
        "meaning": "အိပ်သည်"
      },
      {
        "word": "昼寝",
        "cleanWord": "昼寝",
        "reading": "ひるね",
        "cleanReading": "ひるね",
        "romaji": "hirune",
        "meaning": "နေ့လည်အိပ်ခြင်း"
      },
      {
        "word": "寝室",
        "cleanWord": "寝室",
        "reading": "しんしつ",
        "cleanReading": "しんしつ",
        "romaji": "shinshitsu",
        "meaning": "အိပ်ခန်း"
      },
      {
        "word": "寝かす",
        "cleanWord": "寝かす",
        "reading": "ねかす",
        "cleanReading": "ねかす",
        "romaji": "nekasu",
        "meaning": "အိပ်စေသည်၊ လှဲသည်"
      },
      {
        "word": "寝坊",
        "cleanWord": "寝坊",
        "reading": "ねぼう",
        "cleanReading": "ねぼう",
        "romaji": "nebou",
        "meaning": "အိပ်ရာထနောက်ကျခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に寝るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに ねるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (အိပ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、昼寝について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ひるねについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နေ့လည်အိပ်ခြင်း (昼寝) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 31,
    "kanji": "読",
    "strokes": 14,
    "onyomi": "ドク",
    "kunyomi": "よ-む ・ よ-み",
    "english": "read, reading, onyomi, kunyomi",
    "romaji": "doku yomu yomi dokusho onyomi kunyomi",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "読書",
        "cleanWord": "読書",
        "reading": "どくしょ",
        "cleanReading": "どくしょ",
        "romaji": "dokusho",
        "meaning": "စာဖတ်ခြင်း"
      },
      {
        "word": "音読み",
        "cleanWord": "音読み",
        "reading": "おんよみ",
        "cleanReading": "おんよみ",
        "romaji": "onyomi",
        "meaning": "ONYOMI တရုတ်ခန်းဂျီးကိုအခြေခံထားသောအသံထွက်"
      },
      {
        "word": "訓読み",
        "cleanWord": "訓読み",
        "reading": "くんよみ",
        "cleanReading": "くんよみ",
        "romaji": "kunyomi",
        "meaning": "KUNYOMI ဂျပန်ခန်းဂျီးအသံထွက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「読書」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「どくしょ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စာဖတ်ခြင်း\" (読書) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、音読みについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おんよみについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ONYOMI တရုတ်ခန်းဂျီးကိုအခြေခံထားသောအသံထွက် (音読み) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 32,
    "kanji": "冊",
    "strokes": 5,
    "onyomi": "サツ",
    "kunyomi": "—",
    "english": "counter for books, volume",
    "romaji": "satsu",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "~冊",
        "cleanWord": "冊",
        "reading": "~さつ",
        "cleanReading": "さつ",
        "romaji": "satsu",
        "meaning": "အုပ်ရေ (စာအုပ်အရေအတွက်)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「冊」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「さつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အုပ်ရေ (စာအုပ်အရေအတွက်)\" (冊) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、冊について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、さつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အုပ်ရေ (စာအုပ်အရေအတွက်) (冊) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 33,
    "kanji": "覚",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "さ-める ・ さ-ます ・ -ざ-まし ・ おぼ-える",
    "english": "wake up, remember, memorize, alarm",
    "romaji": "sameru samasu zamashi oboeru megasameru meosamasu mezamashidokei",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "目が覚める",
        "cleanWord": "目が覚める",
        "reading": "めがさめる",
        "cleanReading": "めがさめる",
        "romaji": "megasameru",
        "meaning": "မျက်လုံးပွင့်သည်၊ နိုးသည်"
      },
      {
        "word": "目を覚ます",
        "cleanWord": "目を覚ます",
        "reading": "めをさます",
        "cleanReading": "めをさます",
        "romaji": "meosamasu",
        "meaning": "မျက်လုံးကိုဖွင့်သည်၊ နိုးစေသည်"
      },
      {
        "word": "覚える",
        "cleanWord": "覚える",
        "reading": "おぼえる",
        "cleanReading": "おぼえる",
        "romaji": "oboeru",
        "meaning": "မှတ်မိသည်၊ မှတ်သားသည်၊ ခံစားသည်"
      },
      {
        "word": "目覚まし時計",
        "cleanWord": "目覚まし時計",
        "reading": "めざましどけい",
        "cleanReading": "めざましどけい",
        "romaji": "mezamashidokei",
        "meaning": "နှိုးစက်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に目が覚めるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに めがさめるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (မျက်လုံးပွင့်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで目を覚ます必要があります。",
        "furigana": "じかんが たりないので、いそいで めをさます ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (မျက်လုံးကိုဖွင့်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 34,
    "kanji": "代",
    "strokes": 5,
    "onyomi": "ダイ",
    "kunyomi": "か-わる",
    "english": "substitute, era, fee, representative",
    "romaji": "dai kawaru kawarini jidai daikin daihyou dairi denkidai",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "代わる",
        "cleanWord": "代わる",
        "reading": "かわる",
        "cleanReading": "かわる",
        "romaji": "kawaru",
        "meaning": "အစားထိုးသည်"
      },
      {
        "word": "代わりに",
        "cleanWord": "代わりに",
        "reading": "かわりに",
        "cleanReading": "かわりに",
        "romaji": "kawarini",
        "meaning": "အစား (ကိုယ်စား)"
      },
      {
        "word": "時代",
        "cleanWord": "時代",
        "reading": "じだい",
        "cleanReading": "じだい",
        "romaji": "jidai",
        "meaning": "ခေတ်"
      },
      {
        "word": "代金",
        "cleanWord": "代金",
        "reading": "だいきん",
        "cleanReading": "だいきん",
        "romaji": "daikin",
        "meaning": "အခကြေးငွေ"
      },
      {
        "word": "代表",
        "cleanWord": "代表",
        "reading": "だいひょう",
        "cleanReading": "だいひょう",
        "romaji": "daihyou",
        "meaning": "ကိုယ်စားပြုသူ၊ ခေါင်းဆောင်သူ"
      },
      {
        "word": "代理",
        "cleanWord": "代理",
        "reading": "だいり",
        "cleanReading": "だいり",
        "romaji": "dairi",
        "meaning": "ကိုယ်စားအစား"
      },
      {
        "word": "電気代",
        "cleanWord": "電気代",
        "reading": "でんきだい",
        "cleanReading": "でんきだい",
        "romaji": "denkidai",
        "meaning": "လျှပ်စစ်ခ၊ မီတာခ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に代わるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに かわるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (အစားထိုးသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、代わりにについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かわりにについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အစား (ကိုယ်စား) (代わりに) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 35,
    "kanji": "係",
    "strokes": 9,
    "onyomi": "ケイ",
    "kunyomi": "かかり",
    "english": "person in charge, relation, connection",
    "romaji": "kei kakari kakariin kankei",
    "category": "Transportation & Travel",
    "categoryJp": "交通・旅行・宿泊",
    "categoryMm": "သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး",
    "vocab": [
      {
        "word": "係り",
        "cleanWord": "係り",
        "reading": "かかり",
        "cleanReading": "かかり",
        "romaji": "kakari",
        "meaning": "တာဝန်ရှိသူ၊ တာဝန်ခံ"
      },
      {
        "word": "係員",
        "cleanWord": "係員",
        "reading": "かかりいん",
        "cleanReading": "かかりいん",
        "romaji": "kakariin",
        "meaning": "တာဝန်ခံ"
      },
      {
        "word": "関係",
        "cleanWord": "関係",
        "reading": "かんけい",
        "cleanReading": "かんけい",
        "romaji": "kankei",
        "meaning": "ဆက်စပ်မှု၊ ပတ်သက်မှု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「係り」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かかり」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တာဝန်ရှိသူ\" (係り) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、係員について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かかりいんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တာဝန်ခံ (係員) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 36,
    "kanji": "目",
    "strokes": 5,
    "onyomi": "モク",
    "kunyomi": "め",
    "english": "eye, purpose, goal, item",
    "romaji": "moku me mokuteki",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "目",
        "cleanWord": "目",
        "reading": "め",
        "cleanReading": "め",
        "romaji": "me",
        "meaning": "မျက်လုံး"
      },
      {
        "word": "目的",
        "cleanWord": "目的",
        "reading": "もくてき",
        "cleanReading": "もくてき",
        "romaji": "mokuteki",
        "meaning": "ရည်ရွယ်ချက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「目」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「め」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မျက်လုံး\" (目) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、目的について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、もくてきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရည်ရွယ်ချက် (目的) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 37,
    "kanji": "的",
    "strokes": 8,
    "onyomi": "テキ",
    "kunyomi": "—",
    "english": "target, -like, -ic, global",
    "romaji": "teki sekaiteki",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "世界的(な)",
        "cleanWord": "世界的",
        "reading": "せかいてき",
        "cleanReading": "せかいてき",
        "romaji": "sekaiteki",
        "meaning": "ကမ္ဘာနှင့်ဆိုင်သော၊ ကမ္ဘာအနှံ့ဖြစ်သော"
      },
      {
        "word": "~的(な)",
        "cleanWord": "的",
        "reading": "~てき(な)",
        "cleanReading": "てき",
        "romaji": "teki",
        "meaning": "~ဆိုင်သော"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても世界的なので、だれでも使えます。",
        "furigana": "この ほうほうは とても せかいてきなので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် ကမ္ဘာနှင့်ဆိုင်သော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "先生はいつも的な言葉で説明してくれます。",
        "furigana": "せんせいは いつも てきな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း ဆိုင်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 38,
    "kanji": "観",
    "strokes": 18,
    "onyomi": "カン",
    "kunyomi": "—",
    "english": "sightseeing, tourist, view",
    "romaji": "kan kankou kankoukyaku",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "観光",
        "cleanWord": "観光",
        "reading": "かんこう",
        "cleanReading": "かんこう",
        "romaji": "kankou",
        "meaning": "ခရီးသွားခြင်း၊ ကမ္ဘာလှည့်ခရီး"
      },
      {
        "word": "観光客",
        "cleanWord": "観光客",
        "reading": "かんこうきゃく",
        "cleanReading": "かんこうきゃく",
        "romaji": "kankoukyaku",
        "meaning": "ခရီးသွားဧည့်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「観光」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かんこう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ခရီးသွားခြင်း\" (観光) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、観光客について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かんこうきゃくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခရီးသွားဧည့်သည် (観光客) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 39,
    "kanji": "修",
    "strokes": 10,
    "onyomi": "シュウ",
    "kunyomi": "—",
    "english": "training, repair, study",
    "romaji": "shuu kenshuu shuuri",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "研修",
        "cleanWord": "研修",
        "reading": "けんしゅう",
        "cleanReading": "けんしゅう",
        "romaji": "kenshuu",
        "meaning": "လက်တွေ့လေ့လာခြင်း၊ ပညာပေးသင်တန်း"
      },
      {
        "word": "修理",
        "cleanWord": "修理",
        "reading": "しゅうり",
        "cleanReading": "しゅうり",
        "romaji": "shuuri",
        "meaning": "ပြုပြင်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「研修」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「けんしゅう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လက်တွေ့လေ့လာခြင်း\" (研修) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、修理について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しゅうりについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပြုပြင်ခြင်း (修理) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 40,
    "kanji": "留",
    "strokes": 10,
    "onyomi": "リュウ ・ ル",
    "kunyomi": "と-まる ・ と-める",
    "english": "study abroad, absence, stay",
    "romaji": "ryuu ru tomaru tomeru ryuugaku rusu rusuban",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "留学(する)",
        "cleanWord": "留学",
        "reading": "りゅうがく(する)",
        "cleanReading": "りゅうがく",
        "romaji": "ryuugaku",
        "meaning": "နိုင်ငံခြားပညာတော်သင်သွားသည်"
      },
      {
        "word": "留守",
        "cleanWord": "留守",
        "reading": "るす",
        "cleanReading": "るす",
        "romaji": "rusu",
        "meaning": "အိမ်မှာမရှိခြင်း"
      },
      {
        "word": "留守番",
        "cleanWord": "留守番",
        "reading": "るすばん",
        "cleanReading": "るすばん",
        "romaji": "rusuban",
        "meaning": "အိမ်စောင့်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり留学することが大切です。",
        "furigana": "しごとの まえに しっかり りゅうがくすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ နိုင်ငံခြားပညာတော်သင်သွားသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、留守について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、るすについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အိမ်မှာမရှိခြင်း (留守) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 41,
    "kanji": "泊",
    "strokes": 8,
    "onyomi": "ハク ・ -パク",
    "kunyomi": "と-まる ・ と-める",
    "english": "stay overnight, lodge, hotel stay",
    "romaji": "haku paku tomaru tomeru ippakufutsuka nihakumikka shukuhaku",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "(~が)泊まる",
        "cleanWord": "泊まる",
        "reading": "(~が)とまる",
        "cleanReading": "とまる",
        "romaji": "tomaru",
        "meaning": "တည်းခိုသည်"
      },
      {
        "word": "(~を)泊める",
        "cleanWord": "泊める",
        "reading": "(~を)とめる",
        "cleanReading": "とめる",
        "romaji": "tomeru",
        "meaning": "တည်းစေသည်"
      },
      {
        "word": "1泊2日",
        "cleanWord": "1泊2日",
        "reading": "いっぱくふつか",
        "cleanReading": "いっぱくふつか",
        "romaji": "ippakufutsuka",
        "meaning": "၁ညအိပ်၂ရက်"
      },
      {
        "word": "2泊3日",
        "cleanWord": "2泊3日",
        "reading": "にはくみっか",
        "cleanReading": "にはくみっか",
        "romaji": "nihakumikka",
        "meaning": "၂ညအိပ်၃ရက်"
      },
      {
        "word": "宿泊",
        "cleanWord": "宿泊",
        "reading": "しゅくはく",
        "cleanReading": "しゅくはく",
        "romaji": "shukuhaku",
        "meaning": "တည်းခိုခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、泊まるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、とまるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (တည်းခိုသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に泊めることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに とめることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (တည်းစေသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 42,
    "kanji": "片",
    "strokes": 4,
    "onyomi": "—",
    "kunyomi": "かた",
    "english": "one side, one hand, tidy up",
    "romaji": "kata katahou katate katazukeru",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "片方",
        "cleanWord": "片方",
        "reading": "かたほう",
        "cleanReading": "かたほう",
        "romaji": "katahou",
        "meaning": "တဖက်ခြမ်း"
      },
      {
        "word": "片手",
        "cleanWord": "片手",
        "reading": "かたて",
        "cleanReading": "かたて",
        "romaji": "katate",
        "meaning": "လက်တစ်ဖက်"
      },
      {
        "word": "片付ける",
        "cleanWord": "片付ける",
        "reading": "かたづける",
        "cleanReading": "かたづける",
        "romaji": "katazukeru",
        "meaning": "သိမ်းဆည်းသည်၊ ရှင်းလင်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「片方」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かたほう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တဖက်ခြမ်း\" (片方) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、片手について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かたてについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လက်တစ်ဖက် (片手) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 43,
    "kanji": "両",
    "strokes": 6,
    "onyomi": "リョウ",
    "kunyomi": "—",
    "english": "both, both sides, parents, exchange",
    "romaji": "ryou ryouhou ryougawa ryoute ryoushin",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "両方",
        "cleanWord": "両方",
        "reading": "りょうほう",
        "cleanReading": "りょうほう",
        "romaji": "ryouhou",
        "meaning": "နှစ်ခုစလုံး"
      },
      {
        "word": "両側",
        "cleanWord": "両側",
        "reading": "りょうがわ",
        "cleanReading": "りょうがわ",
        "romaji": "ryougawa",
        "meaning": "နှစ်ဘက်စလုံး"
      },
      {
        "word": "両手",
        "cleanWord": "両手",
        "reading": "りょうて",
        "cleanReading": "りょうて",
        "romaji": "ryoute",
        "meaning": "လက်နှစ်ဘက်"
      },
      {
        "word": "両親",
        "cleanWord": "両親",
        "reading": "りょうしん",
        "cleanReading": "りょうしん",
        "romaji": "ryoushin",
        "meaning": "မိဘနှစ်ပါး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「両方」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「りょうほう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နှစ်ခုစလုံး\" (両方) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、両側について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、りょうがわについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နှစ်ဘက်စလုံး (両側) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 44,
    "kanji": "替",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "か-える ・ -がえる ・ -がえ",
    "english": "change clothes, exchange money, replace",
    "romaji": "kaeru gaeru gae kigaeru ryougae",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "着替える",
        "cleanWord": "着替える",
        "reading": "きがえる",
        "cleanReading": "きがえる",
        "romaji": "kigaeru",
        "meaning": "အဝတ်လဲသည်"
      },
      {
        "word": "両替(する)",
        "cleanWord": "両替",
        "reading": "りょうがえ(する)",
        "cleanReading": "りょうがえ",
        "romaji": "ryougae",
        "meaning": "ငွေလဲလှယ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に着替えるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに きがえるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (အဝတ်လဲသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに両替しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに りょうがえしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ငွေလဲလှယ်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 45,
    "kanji": "過",
    "strokes": 12,
    "onyomi": "カ",
    "kunyomi": "す-ぎる ・ す-ごす",
    "english": "pass, exceed, spend time, past",
    "romaji": "ka sugiru sugosu jisugi tsuuka kako",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "過ぎる",
        "cleanWord": "過ぎる",
        "reading": "すぎる",
        "cleanReading": "すぎる",
        "romaji": "sugiru",
        "meaning": "ကျော်လွန်သည်"
      },
      {
        "word": "~時過ぎ",
        "cleanWord": "時過ぎ",
        "reading": "~じすぎ",
        "cleanReading": "じすぎ",
        "romaji": "jisugi",
        "meaning": "~နာရီကျော်"
      },
      {
        "word": "過ごす",
        "cleanWord": "過ごす",
        "reading": "すごす",
        "cleanReading": "すごす",
        "romaji": "sugosu",
        "meaning": "အချိန်ကုန်စေသည်"
      },
      {
        "word": "通過(する)",
        "cleanWord": "通過",
        "reading": "つうか(する)",
        "cleanReading": "つうか",
        "romaji": "tsuuka",
        "meaning": "ဖြတ်ကျော်သည်"
      },
      {
        "word": "過去",
        "cleanWord": "過去",
        "reading": "かこ",
        "cleanReading": "かこ",
        "romaji": "kako",
        "meaning": "အတိတ်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に過ぎるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに すぎるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကျော်လွန်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、時過ぎについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じすぎについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နာရီကျော် (時過ぎ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 46,
    "kanji": "快",
    "strokes": 7,
    "onyomi": "カイ",
    "kunyomi": "こころよ-い",
    "english": "pleasant, comfortable, rapid train",
    "romaji": "kai kokoroyoi kaisoku kaiteki",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "快い",
        "cleanWord": "快い",
        "reading": "こころよい",
        "cleanReading": "こころよい",
        "romaji": "kokoroyoi",
        "meaning": "စိတ်ကြည်နူးသော"
      },
      {
        "word": "快速",
        "cleanWord": "快速",
        "reading": "かいそく",
        "cleanReading": "かいそく",
        "romaji": "kaisoku",
        "meaning": "အမြန် (rapid)"
      },
      {
        "word": "快適(な)",
        "cleanWord": "快適",
        "reading": "かいてき(な)",
        "cleanReading": "かいてき",
        "romaji": "kaiteki",
        "meaning": "သာယာသော၊ သက်တောင့်သက်သာဖြစ်သော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより快いと感じる人が多いようです。",
        "furigana": "きょうは いつもより こころよいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ စိတ်ကြည်နူးသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、快速について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かいそくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အမြန် (rapid) (快速) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 47,
    "kanji": "速",
    "strokes": 10,
    "onyomi": "ソク",
    "kunyomi": "はや-い",
    "english": "fast, speed, highway, expressway",
    "romaji": "soku hayai sokudo kousokudouro",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "速い",
        "cleanWord": "速い",
        "reading": "はやい",
        "cleanReading": "はやい",
        "romaji": "hayai",
        "meaning": "မြန်သော"
      },
      {
        "word": "速度",
        "cleanWord": "速度",
        "reading": "そくど",
        "cleanReading": "そくど",
        "romaji": "sokudo",
        "meaning": "အမြန်နှုန်း"
      },
      {
        "word": "高速道路",
        "cleanWord": "高速道路",
        "reading": "こうそくどうろ",
        "cleanReading": "こうそくどうろ",
        "romaji": "kousokudouro",
        "meaning": "အမြန်ကားလမ်းမ"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより速いと感じる人が多いようです。",
        "furigana": "きょうは いつもより はやいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ မြန်သော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、速度について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、そくどについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အမြန်နှုန်း (速度) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 48,
    "kanji": "次",
    "strokes": 6,
    "onyomi": "ジ",
    "kunyomi": "つぎ",
    "english": "next, next time, table of contents",
    "romaji": "ji tsugi jikai mokuji",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "次",
        "cleanWord": "次",
        "reading": "つぎ",
        "cleanReading": "つぎ",
        "romaji": "tsugi",
        "meaning": "နောက်"
      },
      {
        "word": "次回",
        "cleanWord": "次回",
        "reading": "じかい",
        "cleanReading": "じかい",
        "romaji": "jikai",
        "meaning": "နောက်တစ်ခါ"
      },
      {
        "word": "目次",
        "cleanWord": "目次",
        "reading": "もくじ",
        "cleanReading": "もくじ",
        "romaji": "mokuji",
        "meaning": "မာတိကာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「次」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「つぎ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နောက်\" (次) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、次回について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じかいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နောက်တစ်ခါ (次回) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 49,
    "kanji": "線",
    "strokes": 15,
    "onyomi": "セン",
    "kunyomi": "—",
    "english": "line, railway platform, track",
    "romaji": "sen rokubansen senro chokusen",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "6番線",
        "cleanWord": "6番線",
        "reading": "ろくばんせん",
        "cleanReading": "ろくばんせん",
        "romaji": "rokubansen",
        "meaning": "ရထားစင်္ကြံပလက်ဖောင်းနံပတ်၆"
      },
      {
        "word": "線路",
        "cleanWord": "線路",
        "reading": "せんろ",
        "cleanReading": "せんろ",
        "romaji": "senro",
        "meaning": "မီးရထားလမ်း"
      },
      {
        "word": "直線",
        "cleanWord": "直線",
        "reading": "ちょくせん",
        "cleanReading": "ちょくせん",
        "romaji": "chokusen",
        "meaning": "မျဉ်းဖြောင့်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「6番線」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ろくばんせん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရထားစင်္ကြံပလက်ဖောင်းနံပတ်၆\" (6番線) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、線路について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せんろについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မီးရထားလမ်း (線路) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 50,
    "kanji": "発",
    "strokes": 9,
    "onyomi": "ハツ ・ ハッ ・ -パツ",
    "kunyomi": "—",
    "english": "departure, discover, announce, sale",
    "romaji": "hatsu ha patsu jihatsu toukyouhatsu hakken shuppatsu hatsubai happyou",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "~時発",
        "cleanWord": "時発",
        "reading": "~じはつ",
        "cleanReading": "じはつ",
        "romaji": "jihatsu",
        "meaning": "~နာရီမှာထွက်မယ့် (ကား၊ရထား၊လေယာဉ်..)"
      },
      {
        "word": "東京発",
        "cleanWord": "東京発",
        "reading": "とうきょうはつ",
        "cleanReading": "とうきょうはつ",
        "romaji": "toukyouhatsu",
        "meaning": "တိုကျိုမှစထွက်ခွာခြင်း"
      },
      {
        "word": "発見",
        "cleanWord": "発見",
        "reading": "はっけん",
        "cleanReading": "はっけん",
        "romaji": "hakken",
        "meaning": "စတင်တွေ့ရှိခြင်း၊ ရှာတွေ့ခြင်း"
      },
      {
        "word": "出発",
        "cleanWord": "出発",
        "reading": "しゅっぱつ",
        "cleanReading": "しゅっぱつ",
        "romaji": "shuppatsu",
        "meaning": "စတင်ထွက်ခွာခြင်း"
      },
      {
        "word": "発売",
        "cleanWord": "発売",
        "reading": "はつばい",
        "cleanReading": "はつばい",
        "romaji": "hatsubai",
        "meaning": "စတင်ရောင်းချခြင်း"
      },
      {
        "word": "発表",
        "cleanWord": "発表",
        "reading": "はっぴょう",
        "cleanReading": "はっぴょう",
        "romaji": "happyou",
        "meaning": "ထုတ်ပြန်ကြေငြာခြင်း၊ စာတမ်းဖတ်ကြားခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「時発」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じはつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နာရီမှာထွက်မယ့် (ကား\" (時発) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、東京発について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、とうきょうはつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တိုကျိုမှစထွက်ခွာခြင်း (東京発) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 51,
    "kanji": "普",
    "strokes": 12,
    "onyomi": "フ",
    "kunyomi": "—",
    "english": "normal, ordinary, usually, local train",
    "romaji": "fu futsuu fudan",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "普通",
        "cleanWord": "普通",
        "reading": "ふつう",
        "cleanReading": "ふつう",
        "romaji": "futsuu",
        "meaning": "ရိုးရိုး၊ သာမန်"
      },
      {
        "word": "普段",
        "cleanWord": "普段",
        "reading": "ふだん",
        "cleanReading": "ふだん",
        "romaji": "fudan",
        "meaning": "ခါတိုင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「普通」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ふつう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရိုးရိုး\" (普通) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、普段について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ふだんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခါတိုင်း (普段) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 52,
    "kanji": "各",
    "strokes": 6,
    "onyomi": "カク ・ カッ",
    "kunyomi": "—",
    "english": "each, every station, each country",
    "romaji": "kaku ka kakueki kakuji kakkoku kakukurasu",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "各駅",
        "cleanWord": "各駅",
        "reading": "かくえき",
        "cleanReading": "かくえき",
        "romaji": "kakueki",
        "meaning": "ဘူတာတိုင်း"
      },
      {
        "word": "各自",
        "cleanWord": "各自",
        "reading": "かくじ",
        "cleanReading": "かくじ",
        "romaji": "kakuji",
        "meaning": "ကိုယ်စီကိုယ်ငှ"
      },
      {
        "word": "各国",
        "cleanWord": "各国",
        "reading": "かっこく",
        "cleanReading": "かっこく",
        "romaji": "kakkoku",
        "meaning": "နိုင်ငံအသီးသီး"
      },
      {
        "word": "各クラス",
        "cleanWord": "各クラス",
        "reading": "かくクラス",
        "cleanReading": "かくクラス",
        "romaji": "kakukurasu",
        "meaning": "အတန်းတိုင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「各駅」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かくえき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဘူတာတိုင်း\" (各駅) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、各自について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かくじについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကိုယ်စီကိုယ်ငှ (各自) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 53,
    "kanji": "鉄",
    "strokes": 13,
    "onyomi": "テツ",
    "kunyomi": "—",
    "english": "iron, railway, subway",
    "romaji": "tetsu tetsudou chikatetsu",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "鉄",
        "cleanWord": "鉄",
        "reading": "てつ",
        "cleanReading": "てつ",
        "romaji": "tetsu",
        "meaning": "သံ"
      },
      {
        "word": "鉄道",
        "cleanWord": "鉄道",
        "reading": "てつどう",
        "cleanReading": "てつどう",
        "romaji": "tetsudou",
        "meaning": "သံလမ်း"
      },
      {
        "word": "地下鉄",
        "cleanWord": "地下鉄",
        "reading": "ちかてつ",
        "cleanReading": "ちかてつ",
        "romaji": "chikatetsu",
        "meaning": "မြေအောက်ရထားလမ်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「鉄」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「てつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သံ\" (鉄) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、鉄道について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、てつどうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သံလမ်း (鉄道) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 54,
    "kanji": "換",
    "strokes": 12,
    "onyomi": "カン",
    "kunyomi": "か-える",
    "english": "transfer trains, exchange, replace",
    "romaji": "kan kaeru norikaeru norikae koukan",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "乗り換える",
        "cleanWord": "乗り換える",
        "reading": "のりかえる",
        "cleanReading": "のりかえる",
        "romaji": "norikaeru",
        "meaning": "ပြောင်းစီးသည်"
      },
      {
        "word": "乗り換え",
        "cleanWord": "乗り換え",
        "reading": "のりかえ",
        "cleanReading": "のりかえ",
        "romaji": "norikae",
        "meaning": "ပြောင်းစီးခြင်း"
      },
      {
        "word": "交換(する)",
        "cleanWord": "交換",
        "reading": "こうかん(する)",
        "cleanReading": "こうかん",
        "romaji": "koukan",
        "meaning": "လဲလှယ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に乗り換えるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに のりかえるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပြောင်းစီးသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、乗り換えについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、のりかえについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပြောင်းစီးခြင်း (乗り換え) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 55,
    "kanji": "券",
    "strokes": 8,
    "onyomi": "ケン",
    "kunyomi": "—",
    "english": "ticket, voucher, vending machine",
    "romaji": "ken joushaken tokkyuuken shoutaiken kenbaiki nyuujouken",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "乗車券",
        "cleanWord": "乗車券",
        "reading": "じょうしゃけん",
        "cleanReading": "じょうしゃけん",
        "romaji": "joushaken",
        "meaning": "ယာဉ်စီးလက်မှတ်"
      },
      {
        "word": "特急券",
        "cleanWord": "特急券",
        "reading": "とっきゅうけん",
        "cleanReading": "とっきゅうけん",
        "romaji": "tokkyuuken",
        "meaning": "အထူးအမြန် (ရထား၊ဘတ်စ်ကား) လက်မှတ်"
      },
      {
        "word": "招待券",
        "cleanWord": "招待券",
        "reading": "しょうたいけん",
        "cleanReading": "しょうたいけん",
        "romaji": "shoutaiken",
        "meaning": "ဖိတ်ကြားလွှာလက်မှတ်၊ မေတ္တာလက်မှတ်"
      },
      {
        "word": "券売機",
        "cleanWord": "券売機",
        "reading": "けんばいき",
        "cleanReading": "けんばいき",
        "romaji": "kenbaiki",
        "meaning": "လက်မှတ်ရောင်းစက်"
      },
      {
        "word": "入場券",
        "cleanWord": "入場券",
        "reading": "にゅうじょうけん",
        "cleanReading": "にゅうじょうけん",
        "romaji": "nyuujouken",
        "meaning": "ဝင်ခွင့်လက်မှတ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「乗車券」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じょうしゃけん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ယာဉ်စီးလက်မှတ်\" (乗車券) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、特急券について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、とっきゅうけんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အထူးအမြန် (ရထား (特急券) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 56,
    "kanji": "指",
    "strokes": 9,
    "onyomi": "シ",
    "kunyomi": "ゆび",
    "english": "finger, ring, designate, point",
    "romaji": "shi yubi yubiwa shitei",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "指",
        "cleanWord": "指",
        "reading": "ゆび",
        "cleanReading": "ゆび",
        "romaji": "yubi",
        "meaning": "လက်ချောင်း"
      },
      {
        "word": "指輪",
        "cleanWord": "指輪",
        "reading": "ゆびわ",
        "cleanReading": "ゆびわ",
        "romaji": "yubiwa",
        "meaning": "လက်စွပ်"
      },
      {
        "word": "指定(する)",
        "cleanWord": "指定",
        "reading": "してい(する)",
        "cleanReading": "してい",
        "romaji": "shitei",
        "meaning": "ညွှန်ပြသည်၊ သတ်မှတ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「指」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ゆび」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လက်ချောင်း\" (指) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、指輪について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ゆびわについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လက်စွပ် (指輪) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 57,
    "kanji": "定",
    "strokes": 4,
    "onyomi": "テイ ・ ジョウ",
    "kunyomi": "さだ-まる",
    "english": "fix, set meal, capacity, regular holiday, ruler",
    "romaji": "tei jou sadamaru teishoku teiin teikyuubi teinen teika jougi",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "定まる",
        "cleanWord": "定まる",
        "reading": "さだまる",
        "cleanReading": "さだまる",
        "romaji": "sadamaru",
        "meaning": "ပြဌာန်းသည်"
      },
      {
        "word": "定食",
        "cleanWord": "定食",
        "reading": "ていしょく",
        "cleanReading": "ていしょく",
        "romaji": "teishoku",
        "meaning": "သတ်မှတ်ထားသောထမင်းနှင့်ဟင်း (set menu)"
      },
      {
        "word": "定員",
        "cleanWord": "定員",
        "reading": "ていいん",
        "cleanReading": "ていいん",
        "romaji": "teiin",
        "meaning": "သတ်မှတ်ဦးရေ"
      },
      {
        "word": "定休日",
        "cleanWord": "定休日",
        "reading": "ていきゅうび",
        "cleanReading": "ていきゅうび",
        "romaji": "teikyuubi",
        "meaning": "ပုံမှန်ပိတ်ရက်၊ သတ်မှတ်ပိတ်ရက်"
      },
      {
        "word": "定年",
        "cleanWord": "定年",
        "reading": "ていねん",
        "cleanReading": "ていねん",
        "romaji": "teinen",
        "meaning": "ပင်စင်ယူရန်အသက်အရွယ်"
      },
      {
        "word": "定価",
        "cleanWord": "定価",
        "reading": "ていか",
        "cleanReading": "ていか",
        "romaji": "teika",
        "meaning": "ပုံသေဈေးနှုန်း"
      },
      {
        "word": "定規",
        "cleanWord": "定規",
        "reading": "じょうぎ",
        "cleanReading": "じょうぎ",
        "romaji": "jougi",
        "meaning": "ပေတံ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に定まるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに さだまるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပြဌာန်းသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、定食について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ていしょくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သတ်မှတ်ထားသောထမင်းနှင့်ဟင်း (set menu) (定食) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 58,
    "kanji": "完",
    "strokes": 7,
    "onyomi": "カン",
    "kunyomi": "—",
    "english": "complete, sold out, perfection",
    "romaji": "kan kanbai kansei kanzen",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "完売",
        "cleanWord": "完売",
        "reading": "かんばい",
        "cleanReading": "かんばい",
        "romaji": "kanbai",
        "meaning": "ရောင်းကုန်ခြင်း"
      },
      {
        "word": "完成(する)",
        "cleanWord": "完成",
        "reading": "かんせい(する)",
        "cleanReading": "かんせい",
        "romaji": "kansei",
        "meaning": "ပြီးမြောက်သည်"
      },
      {
        "word": "完全(な)",
        "cleanWord": "完全",
        "reading": "かんぜん(な)",
        "cleanReading": "かんぜん",
        "romaji": "kanzen",
        "meaning": "ပြည့်စုံသော၊ ချို့တဲ့ခြင်းမရှိသော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「完売」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かんばい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရောင်းကုန်ခြင်း\" (完売) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに完成しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに かんせいしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ပြီးမြောက်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 59,
    "kanji": "由",
    "strokes": 5,
    "onyomi": "ユウ",
    "kunyomi": "—",
    "english": "freedom, reason, unreserved seat",
    "romaji": "yuu jiyuu jiyuuseki riyuu",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "自由",
        "cleanWord": "自由",
        "reading": "じゆう",
        "cleanReading": "じゆう",
        "romaji": "jiyuu",
        "meaning": "လွတ်လပ်ခြင်း"
      },
      {
        "word": "自由席",
        "cleanWord": "自由席",
        "reading": "じゆうせき",
        "cleanReading": "じゆうせき",
        "romaji": "jiyuuseki",
        "meaning": "ခုံနံပါတ်တပ်မထားသော၊ ကြိုက်သည့်နေရာတွင်ထိုင်နိုင်သောခုံ"
      },
      {
        "word": "理由",
        "cleanWord": "理由",
        "reading": "りゆう",
        "cleanReading": "りゆう",
        "romaji": "riyuu",
        "meaning": "အကြောင်းပြချက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「自由」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じゆう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လွတ်လပ်ခြင်း\" (自由) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、自由席について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じゆうせきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခုံနံပါတ်တပ်မထားသော (自由席) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 60,
    "kanji": "復",
    "strokes": 12,
    "onyomi": "フク",
    "kunyomi": "—",
    "english": "review, round trip, restore",
    "romaji": "fuku fukushuu oufuku",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "復習(する)",
        "cleanWord": "復習",
        "reading": "ふくしゅう(する)",
        "cleanReading": "ふくしゅう",
        "romaji": "fukushuu",
        "meaning": "ပြန်လှန်လေ့ကျင့်သည်"
      },
      {
        "word": "往復(する)",
        "cleanWord": "往復",
        "reading": "おうふく",
        "cleanReading": "おうふく",
        "romaji": "oufuku",
        "meaning": "အသွားအပြန်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり復習することが大切です。",
        "furigana": "しごとの まえに しっかり ふくしゅうすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ပြန်လှန်လေ့ကျင့်သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに往復しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに おうふくしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အသွားအပြန်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 61,
    "kanji": "予",
    "strokes": 4,
    "onyomi": "ヨ",
    "kunyomi": "—",
    "english": "schedule, plan, weather forecast, budget",
    "romaji": "yo yotei tenkiyohou yosan yoshuu",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "予定(する)",
        "cleanWord": "予定",
        "reading": "よてい(する)",
        "cleanReading": "よてい",
        "romaji": "yotei",
        "meaning": "ကြိုတင်စီမံချက်၊ အစီအစဉ်"
      },
      {
        "word": "天気予報",
        "cleanWord": "天気予報",
        "reading": "てんきよほう",
        "cleanReading": "てんきよほう",
        "romaji": "tenkiyohou",
        "meaning": "မိုးလေဝသခန့်မှန်းချက်"
      },
      {
        "word": "予算",
        "cleanWord": "予算",
        "reading": "よさん",
        "cleanReading": "よさん",
        "romaji": "yosan",
        "meaning": "ဘတ်ဂျက်ငွေ"
      },
      {
        "word": "予習(する)",
        "cleanWord": "予習",
        "reading": "よしゅう(する)",
        "cleanReading": "よしゅう",
        "romaji": "yoshuu",
        "meaning": "ကြိုတင်လေ့ကျင့်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり予定することが大切です。",
        "furigana": "しごとの まえに しっかり よていすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ကြိုတင်စီမံချက်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、天気予報について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、てんきよほうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မိုးလေဝသခန့်မှန်းချက် (天気予報) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 62,
    "kanji": "習",
    "strokes": 11,
    "onyomi": "シュウ",
    "kunyomi": "なら-う",
    "english": "learn, study, practice",
    "romaji": "shuu narau gakushuu",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "学習(する)",
        "cleanWord": "学習",
        "reading": "がくしゅう(する)",
        "cleanReading": "がくしゅう",
        "romaji": "gakushuu",
        "meaning": "စာသင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり学習することが大切です。",
        "furigana": "しごとの まえに しっかり がくしゅうすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ စာသင်သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに学習しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに がくしゅうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း စာသင်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 63,
    "kanji": "足",
    "strokes": 7,
    "onyomi": "ソク ・ ゾク",
    "kunyomi": "あし ・ た-りる ・ た-す",
    "english": "foot, leg, suffice, add, lack, pair of shoes",
    "romaji": "soku zoku ashi tariru tasu teashi tashizan fusoku issoku manzoku",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "手足",
        "cleanWord": "手足",
        "reading": "てあし",
        "cleanReading": "てあし",
        "romaji": "teashi",
        "meaning": "ခြေလက်အင်္ဂါ၊ ခြေထောက်နဲ့လက်"
      },
      {
        "word": "足りる",
        "cleanWord": "足りる",
        "reading": "たりる",
        "cleanReading": "たりる",
        "romaji": "tariru",
        "meaning": "လုံလောက်သည်"
      },
      {
        "word": "足す",
        "cleanWord": "足す",
        "reading": "たす",
        "cleanReading": "たす",
        "romaji": "tasu",
        "meaning": "ပေါင်းသည်"
      },
      {
        "word": "足し算(する)",
        "cleanWord": "足し算",
        "reading": "たしざん(する)",
        "cleanReading": "たしざん",
        "romaji": "tashizan",
        "meaning": "အပေါင်း၊ ပေါင်းသည်"
      },
      {
        "word": "不足",
        "cleanWord": "不足",
        "reading": "ふそく",
        "cleanReading": "ふそく",
        "romaji": "fusoku",
        "meaning": "မလုံလောက်ခြင်း"
      },
      {
        "word": "1足",
        "cleanWord": "1足",
        "reading": "いっそく",
        "cleanReading": "いっそく",
        "romaji": "issoku",
        "meaning": "တစ်စုံ၊ တစ်ရံ (ဖိနပ်)"
      },
      {
        "word": "満足",
        "cleanWord": "満足",
        "reading": "まんぞく",
        "cleanReading": "まんぞく",
        "romaji": "manzoku",
        "meaning": "အားရကျေနပ်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「手足」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「てあし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ခြေလက်အင်္ဂါ\" (手足) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで足りる必要があります。",
        "furigana": "じかんが たりないので、いそいで たりる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (လုံလောက်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 64,
    "kanji": "支",
    "strokes": 4,
    "onyomi": "シ",
    "kunyomi": "—",
    "english": "pay, payment, expenditure, branch office",
    "romaji": "shi shiharai shishutsu shiten",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "支払い",
        "cleanWord": "支払い",
        "reading": "しはらい",
        "cleanReading": "しはらい",
        "romaji": "shiharai",
        "meaning": "ပေးချေသည်"
      },
      {
        "word": "支出",
        "cleanWord": "支出",
        "reading": "ししゅつ",
        "cleanReading": "ししゅつ",
        "romaji": "shishutsu",
        "meaning": "ထွက်ငွေ"
      },
      {
        "word": "支店",
        "cleanWord": "支店",
        "reading": "してん",
        "cleanReading": "してん",
        "romaji": "shiten",
        "meaning": "ဆိုင်ခွဲ၊ ဘဏ်ခွဲ"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより支払いと感じる人が多いようです。",
        "furigana": "きょうは いつもより しはらいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ပေးချေသည် ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、支出について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ししゅつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ထွက်ငွေ (支出) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 65,
    "kanji": "払",
    "strokes": 5,
    "onyomi": "—",
    "kunyomi": "はら-う",
    "english": "pay, clear away",
    "romaji": "harau shiharau",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "払う",
        "cleanWord": "払う",
        "reading": "はらう",
        "cleanReading": "はらう",
        "romaji": "harau",
        "meaning": "ပေးဆောင်သည်"
      },
      {
        "word": "支払う",
        "cleanWord": "支払う",
        "reading": "しはらう",
        "cleanReading": "しはらう",
        "romaji": "shiharau",
        "meaning": "ငွေပေးဆောင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に払うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに はらうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပေးဆောင်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで支払う必要があります。",
        "furigana": "じかんが たりないので、いそいで しはらう ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ငွေပေးဆောင်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 66,
    "kanji": "引",
    "strokes": 4,
    "onyomi": "—",
    "kunyomi": "ひ-く ・ び-き",
    "english": "pull, subtract, discount",
    "romaji": "hiku biki hikizan waribiki",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "引く",
        "cleanWord": "引く",
        "reading": "ひく",
        "cleanReading": "ひく",
        "romaji": "hiku",
        "meaning": "ဆွဲသည်၊ နှုတ်သည်"
      },
      {
        "word": "引き算(する)",
        "cleanWord": "引き算",
        "reading": "ひきざん(する)",
        "cleanReading": "ひきざん",
        "romaji": "hikizan",
        "meaning": "အနှုတ်၊ နှုတ်သည်"
      },
      {
        "word": "割引き(する)",
        "cleanWord": "割引き",
        "reading": "わりびき(する)",
        "cleanReading": "わりびき",
        "romaji": "waribiki",
        "meaning": "ဈေးလျှော့သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に引くようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに ひくように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဆွဲသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに引き算しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ひきざんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အနှုတ်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 67,
    "kanji": "算",
    "strokes": 14,
    "onyomi": "サン",
    "kunyomi": "—",
    "english": "calculate, arithmetic, budget",
    "romaji": "san keisan yosan",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "計算(する)",
        "cleanWord": "計算",
        "reading": "けいさん(する)",
        "cleanReading": "けいさん",
        "romaji": "keisan",
        "meaning": "တွက်ချက်သည်"
      },
      {
        "word": "予算",
        "cleanWord": "予算",
        "reading": "よさん",
        "cleanReading": "よさん",
        "romaji": "yosan",
        "meaning": "ဘက်ဂျက်ငွေ"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり計算することが大切です。",
        "furigana": "しごとの まえに しっかり けいさんすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ တွက်ချက်သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、予算について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、よさんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဘက်ဂျက်ငွေ (予算) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 68,
    "kanji": "費",
    "strokes": 12,
    "onyomi": "ヒ",
    "kunyomi": "—",
    "english": "expense, cost, fee, tuition",
    "romaji": "hi hiyou kaihi gakuhi shokuhi koutsuuhi",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "費用",
        "cleanWord": "費用",
        "reading": "ひよう",
        "cleanReading": "ひよう",
        "romaji": "hiyou",
        "meaning": "ကုန်ကျစရိတ်"
      },
      {
        "word": "会費",
        "cleanWord": "会費",
        "reading": "かいひ",
        "cleanReading": "かいひ",
        "romaji": "kaihi",
        "meaning": "အဖွဲ့ဝင်ကြေး၊ အသင်းဝင်ကြေး"
      },
      {
        "word": "学費",
        "cleanWord": "学費",
        "reading": "がくひ",
        "cleanReading": "がくひ",
        "romaji": "gakuhi",
        "meaning": "ကျောင်းလခ"
      },
      {
        "word": "食費",
        "cleanWord": "食費",
        "reading": "しょくひ",
        "cleanReading": "しょくひ",
        "romaji": "shokuhi",
        "meaning": "စားစရိတ်"
      },
      {
        "word": "交通費",
        "cleanWord": "交通費",
        "reading": "こうつうひ",
        "cleanReading": "こうつうひ",
        "romaji": "koutsuuhi",
        "meaning": "လမ်းစရိတ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「費用」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ひよう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကုန်ကျစရိတ်\" (費用) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、会費について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かいひについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အဖွဲ့ဝင်ကြေး (会費) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 69,
    "kanji": "追",
    "strokes": 9,
    "onyomi": "ツイ",
    "kunyomi": "お-う",
    "english": "chase, overtake, catch up, add",
    "romaji": "tsui ou oikakeru oikosu oitsuku tsuika",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "追う",
        "cleanWord": "追う",
        "reading": "おう",
        "cleanReading": "おう",
        "romaji": "ou",
        "meaning": "ပြေးလိုက်သည်"
      },
      {
        "word": "追いかける",
        "cleanWord": "追いかける",
        "reading": "おいかける",
        "cleanReading": "おいかける",
        "romaji": "oikakeru",
        "meaning": "အနောက်မှပြေးလိုက်သည်"
      },
      {
        "word": "追い越す",
        "cleanWord": "追い越す",
        "reading": "おいこす",
        "cleanReading": "おいこす",
        "romaji": "oikosu",
        "meaning": "ဖြတ်ကျော်တက်သည်"
      },
      {
        "word": "追いつく",
        "cleanWord": "追いつく",
        "reading": "おいつく",
        "cleanReading": "おいつく",
        "romaji": "oitsuku",
        "meaning": "လိုက်မီသည်"
      },
      {
        "word": "追加(する)",
        "cleanWord": "追加",
        "reading": "ついか(する)",
        "cleanReading": "ついか",
        "romaji": "tsuika",
        "meaning": "ထပ်ဖြည့်သည်၊ ထပ်ပေါင်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に追うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに おうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပြေးလိုက်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで追いかける必要があります。",
        "furigana": "じかんが たりないので、いそいで おいかける ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (အနောက်မှပြေးလိုက်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 70,
    "kanji": "越",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "こ-える ・ こ-す",
    "english": "cross over, exceed, move house",
    "romaji": "koeru kosu hikkosu hikkoshi",
    "category": "Railways, Tickets & Finance",
    "categoryJp": "鉄道・切符・会計",
    "categoryMm": "ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး",
    "vocab": [
      {
        "word": "越える",
        "cleanWord": "越える",
        "reading": "こえる",
        "cleanReading": "こえる",
        "romaji": "koeru",
        "meaning": "ကျော်လွန်သည်၊ ကျော်ဖြတ်သည်"
      },
      {
        "word": "引っ越す",
        "cleanWord": "引っ越す",
        "reading": "ひっこす",
        "cleanReading": "ひっこす",
        "romaji": "hikkosu",
        "meaning": "အိမ်ပြောင်းသည်"
      },
      {
        "word": "引っ越し",
        "cleanWord": "引っ越し",
        "reading": "ひっこし",
        "cleanReading": "ひっこし",
        "romaji": "hikkoshi",
        "meaning": "အိမ်ပြောင်းခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に越えるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに こえるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကျော်လွန်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで引っ越す必要があります。",
        "furigana": "じかんが たりないので、いそいで ひっこす ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (အိမ်ပြောင်းသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 71,
    "kanji": "停",
    "strokes": 11,
    "onyomi": "テイ",
    "kunyomi": "と-まる ・ と-める",
    "english": "stop, halt, bus stop",
    "romaji": "tei tomaru tomeru teishi kakuekiteisha basutei teiryuujo",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "~(が)停まる",
        "cleanWord": "停まる",
        "reading": "~(が)とまる",
        "cleanReading": "とまる",
        "romaji": "tomaru",
        "meaning": "ရပ်သည်"
      },
      {
        "word": "~(を)停める",
        "cleanWord": "停める",
        "reading": "~(ကို)とめる",
        "cleanReading": "とめる",
        "romaji": "tomeru",
        "meaning": "ရပ်တန့်စေသည်"
      },
      {
        "word": "停止(する)",
        "cleanWord": "停止",
        "reading": "ていし(する)",
        "cleanReading": "ていし",
        "romaji": "teishi",
        "meaning": "ရပ်တန့်သည်"
      },
      {
        "word": "各駅停車",
        "cleanWord": "各駅停車",
        "reading": "かくえきていしゃ",
        "cleanReading": "かくえきていしゃ",
        "romaji": "kakuekiteisha",
        "meaning": "ဘူတာတိုင်းရပ်တန့်ခြင်း"
      },
      {
        "word": "バス停",
        "cleanWord": "バス停",
        "reading": "バスてい",
        "cleanReading": "バスてい",
        "romaji": "basutei",
        "meaning": "ဘတ်စ်ကားမှတ်တိုင်"
      },
      {
        "word": "停留所",
        "cleanWord": "停留所",
        "reading": "ていりゅうじょ",
        "cleanReading": "ていりゅうじょ",
        "romaji": "teiryuujo",
        "meaning": "ဘတ်စကားမှတ်တိုင်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、停まるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、とまるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ရပ်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に停めることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに とめることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ရပ်တန့်စေသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 72,
    "kanji": "故",
    "strokes": 9,
    "onyomi": "コ",
    "kunyomi": "—",
    "english": "accident, incident, breakdown",
    "romaji": "ko jiko koutsuujiko",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "事故",
        "cleanWord": "事故",
        "reading": "じこ",
        "cleanReading": "じこ",
        "romaji": "jiko",
        "meaning": "ယာဉ်တိုက်မှု၊ မတော်တဆမှု"
      },
      {
        "word": "交通事故",
        "cleanWord": "交通事故",
        "reading": "こうつうじこ",
        "cleanReading": "こうつうじこ",
        "romaji": "koutsuujiko",
        "meaning": "ယာဉ်တိုက်မှု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「事故」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じこ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ယာဉ်တိုက်မှု\" (事故) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、交通事故について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、こうつうじこについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ယာဉ်တိုက်မှု (交通事故) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 73,
    "kanji": "困",
    "strokes": 7,
    "onyomi": "コン",
    "kunyomi": "こま-る",
    "english": "trouble, difficulty, distressed",
    "romaji": "kon komaru konnan",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "困る",
        "cleanWord": "困る",
        "reading": "こまる",
        "cleanReading": "こまる",
        "romaji": "komaru",
        "meaning": "ဒုက္ခရောက်သည်"
      },
      {
        "word": "困難(な)",
        "cleanWord": "困難",
        "reading": "こんなん(な)",
        "cleanReading": "こんなん",
        "romaji": "konnan",
        "meaning": "အခက်အခဲရှိသော"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に困るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに こまるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဒုက္ခရောက်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先生はいつも困難な言葉で説明してくれます。",
        "furigana": "せんせいは いつも こんなんな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း အခက်အခဲရှိသော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 74,
    "kanji": "約",
    "strokes": 9,
    "onyomi": "ヤク",
    "kunyomi": "—",
    "english": "promise, reservation, approximately",
    "romaji": "yaku yoyaku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "予約",
        "cleanWord": "予約",
        "reading": "よやく",
        "cleanReading": "よやく",
        "romaji": "yoyaku",
        "meaning": "ကြိုတင်မှာကြားခြင်း၊ ဘိုကင်တင်ထားခြင်း"
      },
      {
        "word": "約",
        "cleanWord": "約",
        "reading": "やく",
        "cleanReading": "やく",
        "romaji": "yaku",
        "meaning": "ခန့်မှန်းခြေ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「予約」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「よやく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကြိုတင်မှာကြားခြင်း\" (予約) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、約について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、やくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခန့်မှန်းခြေ (約) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 75,
    "kanji": "束",
    "strokes": 7,
    "onyomi": "ソク",
    "kunyomi": "た-ば",
    "english": "bundle, bouquet, promise, appointment",
    "romaji": "soku taba hanataba yakusoku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "花束",
        "cleanWord": "花束",
        "reading": "はなたば",
        "cleanReading": "はなたば",
        "romaji": "hanataba",
        "meaning": "ပန်းစည်း"
      },
      {
        "word": "約束",
        "cleanWord": "約束",
        "reading": "やくそく",
        "cleanReading": "やくそく",
        "romaji": "yakusoku",
        "meaning": "ကတိ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「花束」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「はなたば」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပန်းစည်း\" (花束) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、約束について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、やくそくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကတိ (約束) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 76,
    "kanji": "遅",
    "strokes": 12,
    "onyomi": "チ",
    "kunyomi": "おく-れる ・ おそ-い",
    "english": "late, slow, tardiness",
    "romaji": "chi okureru osoi chikoku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "遅れる",
        "cleanWord": "遅れる",
        "reading": "おくれる",
        "cleanReading": "おくれる",
        "romaji": "okureru",
        "meaning": "နောက်ကျသည်"
      },
      {
        "word": "遅い",
        "cleanWord": "遅い",
        "reading": "おそい",
        "cleanReading": "おそい",
        "romaji": "osoi",
        "meaning": "နှေးသော"
      },
      {
        "word": "遅刻",
        "cleanWord": "遅刻",
        "reading": "ちこく",
        "cleanReading": "ちこく",
        "romaji": "chikoku",
        "meaning": "နောက်ကျခြင်း၊ သတ်မှတ်ချိန်မမှီခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に遅れるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに おくれるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (နောက်ကျသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "あまり遅い場合は、無理をしないで休んでください。",
        "furigana": "あまり おそい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း နှေးသော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 77,
    "kanji": "連",
    "strokes": 10,
    "onyomi": "レン",
    "kunyomi": "つ-れる",
    "english": "take along, bring, consecutive holidays",
    "romaji": "ren tsureru tsureteiku tsuretekuru renkyuu",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "連れていく",
        "cleanWord": "連れていく",
        "reading": "つれていく",
        "cleanReading": "つれていく",
        "romaji": "tsureteiku",
        "meaning": "ခေါ်သွားသည်"
      },
      {
        "word": "連れてくる",
        "cleanWord": "連れてくる",
        "reading": "つれてくる",
        "cleanReading": "つれてくる",
        "romaji": "tsuretekuru",
        "meaning": "ခေါ်လာသည်"
      },
      {
        "word": "連休",
        "cleanWord": "連休",
        "reading": "れんきゅう",
        "cleanReading": "れんきゅう",
        "romaji": "renkyuu",
        "meaning": "ပိတ်ရက်ဆက်နေခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に連れていくようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに つれていくように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ခေါ်သွားသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで連れてくる必要があります。",
        "furigana": "じかんが たりないので、いそいで つれてくる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ခေါ်လာသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 78,
    "kanji": "絡",
    "strokes": 13,
    "onyomi": "ラク",
    "kunyomi": "—",
    "english": "contact, get in touch, connection",
    "romaji": "raku renraku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "連絡",
        "cleanWord": "連絡",
        "reading": "れんらく",
        "cleanReading": "れんらく",
        "romaji": "renraku",
        "meaning": "ဆက်သွယ်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「連絡」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「れんらく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆက်သွယ်ခြင်း\" (連絡) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、連絡について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、れんらくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆက်သွယ်ခြင်း (連絡) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 79,
    "kanji": "全",
    "strokes": 6,
    "onyomi": "ゼン",
    "kunyomi": "—",
    "english": "all, whole, safe, everyone, not at all",
    "romaji": "zen anzen zenzennai zenin zenbu",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "安全(な)",
        "cleanWord": "安全",
        "reading": "あんぜん(な)",
        "cleanReading": "あんぜん",
        "romaji": "anzen",
        "meaning": "လုံခြုံစိတ်ချသော"
      },
      {
        "word": "全然~ない",
        "cleanWord": "全然ない",
        "reading": "ぜんぜん~ない",
        "cleanReading": "ぜんぜんない",
        "romaji": "zenzennai",
        "meaning": "လုံးဝ မ....ဘူး"
      },
      {
        "word": "全員",
        "cleanWord": "全員",
        "reading": "ぜんいん",
        "cleanReading": "ぜんいん",
        "romaji": "zenin",
        "meaning": "အသင်းဝင်အားလုံး၊ လူအားလုံး"
      },
      {
        "word": "全部",
        "cleanWord": "全部",
        "reading": "ぜんぶ",
        "cleanReading": "ぜんぶ",
        "romaji": "zenbu",
        "meaning": "အားလုံး"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても安全なので、だれでも使えます。",
        "furigana": "この ほうほうは とても あんぜんなので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် လုံခြုံစိတ်ချသော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "あまり全然ない場合は、無理をしないで休んでください。",
        "furigana": "あまり ぜんぜんない ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း လုံးဝ မ....ဘူး သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 80,
    "kanji": "交",
    "strokes": 6,
    "onyomi": "コウ",
    "kunyomi": "か-わす",
    "english": "exchange, traffic, intersection, police box",
    "romaji": "kou kawasu kouban kouryuu koutsuu koukan kousaten",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "交わす",
        "cleanWord": "交わす",
        "reading": "かわす",
        "cleanReading": "かわす",
        "romaji": "kawasu",
        "meaning": "လဲလှယ်သည်။"
      },
      {
        "word": "交番",
        "cleanWord": "交番",
        "reading": "こうばん",
        "cleanReading": "こうばん",
        "romaji": "kouban",
        "meaning": "ရဲကင်း၊ ရဲစခန်း"
      },
      {
        "word": "交流(する)",
        "cleanWord": "交流",
        "reading": "こうりゅう(する)",
        "cleanReading": "こうりゅう",
        "romaji": "kouryuu",
        "meaning": "ဖလှယ်သည်"
      },
      {
        "word": "交通",
        "cleanWord": "交通",
        "reading": "こうつう",
        "cleanReading": "こうつう",
        "romaji": "koutsuu",
        "meaning": "လမ်းပန်းဆက်သွယ်ရေး"
      },
      {
        "word": "交換(する)",
        "cleanWord": "交換",
        "reading": "こうかん(する)",
        "cleanReading": "こうかん",
        "romaji": "koukan",
        "meaning": "လဲလှယ်သည်"
      },
      {
        "word": "交差点",
        "cleanWord": "交差点",
        "reading": "こうさてん",
        "cleanReading": "こうさてん",
        "romaji": "kousaten",
        "meaning": "လမ်းဆုံ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に交わすようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに かわすように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (လဲလှယ်သည်။) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、交番について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、こうばんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရဲကင်း (交番) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 81,
    "kanji": "差",
    "strokes": 10,
    "onyomi": "サ",
    "kunyomi": "—",
    "english": "difference, time difference, give",
    "romaji": "sa jisa sashiageru",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "時差",
        "cleanWord": "時差",
        "reading": "じさ",
        "cleanReading": "じさ",
        "romaji": "jisa",
        "meaning": "ဒေသအလိုက်စံတော်ချိန်ကွာခြားခြင်း"
      },
      {
        "word": "差し上げる",
        "cleanWord": "差し上げる",
        "reading": "さしあげる",
        "cleanReading": "さしあげる",
        "romaji": "sashiageru",
        "meaning": "ပေးကမ်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「時差」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じさ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဒေသအလိုက်စံတော်ချိန်ကွာခြားခြင်း\" (時差) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで差し上げる必要があります。",
        "furigana": "じかんが たりないので、いそいで さしあげる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ပေးကမ်းသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 82,
    "kanji": "点",
    "strokes": 9,
    "onyomi": "テン",
    "kunyomi": "—",
    "english": "point, score, terminal, dotted line, fault",
    "romaji": "ten shuuten kyuujutten chuuiten tensen ketten",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "終点",
        "cleanWord": "終点",
        "reading": "しゅうてん",
        "cleanReading": "しゅうてん",
        "romaji": "shuuten",
        "meaning": "ဂိတ်ဆုံး"
      },
      {
        "word": "90点",
        "cleanWord": "90点",
        "reading": "きゅうじゅってん",
        "cleanReading": "きゅうじゅってん",
        "romaji": "kyuujutten",
        "meaning": "အမှတ်၉၀"
      },
      {
        "word": "注意点",
        "cleanWord": "注意点",
        "reading": "ちゅういてん",
        "cleanReading": "ちゅういてん",
        "romaji": "chuuiten",
        "meaning": "သတိထားရမည့်အချက်"
      },
      {
        "word": "点線",
        "cleanWord": "点線",
        "reading": "てんせん",
        "cleanReading": "てんせん",
        "romaji": "tensen",
        "meaning": "အစက်ချမျဉ်း"
      },
      {
        "word": "欠点",
        "cleanWord": "欠点",
        "reading": "けってん",
        "cleanReading": "けってん",
        "romaji": "ketten",
        "meaning": "အားနည်းချက်၊ ချို့ယွင်းချက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「終点」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しゅうてん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဂိတ်ဆုံး\" (終点) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、90点について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きゅうじゅってんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အမှတ်၉၀ (90点) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 83,
    "kanji": "信",
    "strokes": 9,
    "onyomi": "シン",
    "kunyomi": "—",
    "english": "believe, trust, signal, confidence, reply",
    "romaji": "shin shingou shinjiru shinyou jishin henshin soushin",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "信号",
        "cleanWord": "信号",
        "reading": "しんごう",
        "cleanReading": "しんごう",
        "romaji": "shingou",
        "meaning": "မီးပွိုင့်"
      },
      {
        "word": "信じる",
        "cleanWord": "信じる",
        "reading": "しんじる",
        "cleanReading": "しんじる",
        "romaji": "shinjiru",
        "meaning": "ယုံကြည်သည်"
      },
      {
        "word": "信用",
        "cleanWord": "信用",
        "reading": "しんよう",
        "cleanReading": "しんよう",
        "romaji": "shinyou",
        "meaning": "ယုံကြည်မှု"
      },
      {
        "word": "自信",
        "cleanWord": "自信",
        "reading": "じしん",
        "cleanReading": "じしん",
        "romaji": "jishin",
        "meaning": "ကိုယ့်ကိုယ်ကိုယ်ယုံကြည်မှု"
      },
      {
        "word": "返信",
        "cleanWord": "返信",
        "reading": "へんしん",
        "cleanReading": "へんしん",
        "romaji": "henshin",
        "meaning": "ပြန်စာ"
      },
      {
        "word": "送信",
        "cleanWord": "送信",
        "reading": "そうしん",
        "cleanReading": "そうしん",
        "romaji": "soushin",
        "meaning": "ကြေးနန်းပို့ခြင်း၊ မေးလ်ပို့ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「信号」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しんごう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မီးပွိုင့်\" (信号) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで信じる必要があります。",
        "furigana": "じかんが たりないので、いそいで しんじる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ယုံကြည်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 84,
    "kanji": "横",
    "strokes": 15,
    "onyomi": "オウ",
    "kunyomi": "よこ",
    "english": "side, horizontal, cross, crosswalk",
    "romaji": "ou yoko oudan oudanhodou",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "横",
        "cleanWord": "横",
        "reading": "よこ",
        "cleanReading": "よこ",
        "romaji": "yoko",
        "meaning": "ဘေး၊ အနံ၊ အလျားလိုက်"
      },
      {
        "word": "横断(する)",
        "cleanWord": "横断",
        "reading": "おうだん(する)",
        "cleanReading": "おうだん",
        "romaji": "oudan",
        "meaning": "ဖြတ်ကူးသည်"
      },
      {
        "word": "横断歩道",
        "cleanWord": "横断歩道",
        "reading": "おうだんほどう",
        "cleanReading": "おうだんほどう",
        "romaji": "oudanhodou",
        "meaning": "လူကူးမျဉ်းကျား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「横」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「よこ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဘေး\" (横) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに横断しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに おうだんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ဖြတ်ကူးသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 85,
    "kanji": "断",
    "strokes": 11,
    "onyomi": "ダン",
    "kunyomi": "ことわ-る",
    "english": "refuse, decline, judge, decision",
    "romaji": "dan kotowaru handan",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "断る",
        "cleanWord": "断る",
        "reading": "ことわる",
        "cleanReading": "ことわる",
        "romaji": "kotowaru",
        "meaning": "ငြင်းဆန်သည်"
      },
      {
        "word": "判断(する)",
        "cleanWord": "判断",
        "reading": "はんだん(する)",
        "cleanReading": "はんだん",
        "romaji": "handan",
        "meaning": "တွေးတောဆုံးဖြတ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に断るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに ことわるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ငြင်းဆန်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに判断しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに はんだんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း တွေးတောဆုံးဖြတ်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 86,
    "kanji": "橋",
    "strokes": 16,
    "onyomi": "キョウ",
    "kunyomi": "はし",
    "english": "bridge, pedestrian overpass",
    "romaji": "kyou hashi hodoukyou",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "橋",
        "cleanWord": "橋",
        "reading": "はし",
        "cleanReading": "はし",
        "romaji": "hashi",
        "meaning": "တံတား"
      },
      {
        "word": "歩道橋",
        "cleanWord": "歩道橋",
        "reading": "ほどうきょう",
        "cleanReading": "ほどうきょう",
        "romaji": "hodoukyou",
        "meaning": "လူကူးတံတား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「橋」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「はし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တံတား\" (橋) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、歩道橋について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ほどうきょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လူကူးတံတား (歩道橋) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 87,
    "kanji": "渡",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "わた-る ・ わた-す",
    "english": "cross a road/bridge, hand over",
    "romaji": "wataru watasu michiowataru",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "道を渡る",
        "cleanWord": "道を渡る",
        "reading": "みちをわたる",
        "cleanReading": "みちをわたる",
        "romaji": "michiowataru",
        "meaning": "လမ်းဖြတ်ကူးသည်"
      },
      {
        "word": "渡す",
        "cleanWord": "渡す",
        "reading": "わたす",
        "cleanReading": "わたす",
        "romaji": "watasu",
        "meaning": "ပေးကမ်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に道を渡るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに みちをわたるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (လမ်းဖြတ်ကူးသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで渡す必要があります。",
        "furigana": "じかんが たりないので、いそいで わたす ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ပေးကမ်းသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 88,
    "kanji": "危",
    "strokes": 6,
    "onyomi": "キ",
    "kunyomi": "あ-ぶない",
    "english": "dangerous, risk, hazard",
    "romaji": "ki abunai kikenna",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "危ない",
        "cleanWord": "危ない",
        "reading": "あぶない",
        "cleanReading": "あぶない",
        "romaji": "abunai",
        "meaning": "အန္တရာယ်ရှိသော"
      },
      {
        "word": "危険な",
        "cleanWord": "危険な",
        "reading": "きけんな",
        "cleanReading": "きけんな",
        "romaji": "kikenna",
        "meaning": "အန္တရာယ်ရှိသော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより危ないと感じる人が多いようです。",
        "furigana": "きょうは いつもより あぶないと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ အန္တရာယ်ရှိသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、危険なについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きけんなについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အန္တရာယ်ရှိသော (危険な) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 89,
    "kanji": "険",
    "strokes": 11,
    "onyomi": "ケン",
    "kunyomi": "—",
    "english": "danger, steep, health insurance card",
    "romaji": "ken hokenshou",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "保険証",
        "cleanWord": "保険証",
        "reading": "ほけんしょう",
        "cleanReading": "ほけんしょう",
        "romaji": "hokenshou",
        "meaning": "အာမခံကဒ်ပြား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「保険証」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ほけんしょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အာမခံကဒ်ပြား\" (保険証) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、保険証について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ほけんしょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အာမခံကဒ်ပြား (保険証) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 90,
    "kanji": "活",
    "strokes": 9,
    "onyomi": "カツ",
    "kunyomi": "—",
    "english": "daily life, activity, lively, utilize",
    "romaji": "katsu seikatsu katsudou kakki katsuyou katsuyaku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "生活",
        "cleanWord": "生活",
        "reading": "せいかつ",
        "cleanReading": "せいかつ",
        "romaji": "seikatsu",
        "meaning": "နေထိုင်မှု၊ ဘဝ၊ စားဝတ်နေရေး"
      },
      {
        "word": "活動",
        "cleanWord": "活動",
        "reading": "かつどう",
        "cleanReading": "かつどう",
        "romaji": "katsudou",
        "meaning": "လှုပ်ရှားမှု"
      },
      {
        "word": "活気",
        "cleanWord": "活気",
        "reading": "かっき",
        "cleanReading": "かっき",
        "romaji": "kakki",
        "meaning": "သက်ဝင်လှုပ်ရှားမှု၊ သွက်လက်ဖျတ်လတ်ခြင်း"
      },
      {
        "word": "活用",
        "cleanWord": "活用",
        "reading": "かつよう",
        "cleanReading": "かつよう",
        "romaji": "katsuyou",
        "meaning": "အသုံးချခြင်း"
      },
      {
        "word": "活躍",
        "cleanWord": "活躍",
        "reading": "かつやく",
        "cleanReading": "かつやく",
        "romaji": "katsuyaku",
        "meaning": "အစွမ်းပြခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「生活」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せいかつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နေထိုင်မှု\" (生活) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、活動について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かつどうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လှုပ်ရှားမှု (活動) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 91,
    "kanji": "角",
    "strokes": 7,
    "onyomi": "カク",
    "kunyomi": "かど",
    "english": "corner, angle, square, triangle",
    "romaji": "kaku kado kakudo shikakui sankaku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "角",
        "cleanWord": "角",
        "reading": "かど",
        "cleanReading": "かど",
        "romaji": "kado",
        "meaning": "ထောင့်"
      },
      {
        "word": "角度",
        "cleanWord": "角度",
        "reading": "かくど",
        "cleanReading": "かくど",
        "romaji": "kakudo",
        "meaning": "ထောင့်ဒီဂရီ၊ ရှုထောင့်"
      },
      {
        "word": "四角い",
        "cleanWord": "四角い",
        "reading": "しかくい",
        "cleanReading": "しかくい",
        "romaji": "shikakui",
        "meaning": "လေးထောင့်ကျသော"
      },
      {
        "word": "三角",
        "cleanWord": "三角",
        "reading": "さんかく",
        "cleanReading": "さんかく",
        "romaji": "sankaku",
        "meaning": "သုံးထောင့်ပုံ၊ တြိဂံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「角」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かど」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ထောင့်\" (角) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、角度について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かくどについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ထောင့်ဒီဂရီ (角度) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 92,
    "kanji": "曲",
    "strokes": 6,
    "onyomi": "キョク",
    "kunyomi": "ま-がる ・ ま-げる",
    "english": "turn, bend, curve, song, compose music",
    "romaji": "kyoku magaru mageru kadoomagaru kyokusen sakkyoku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "(~が)曲がる",
        "cleanWord": "曲がる",
        "reading": "(~が)まがる",
        "cleanReading": "まがる",
        "romaji": "magaru",
        "meaning": "ကောက်သည်၊ ကွေးသည်"
      },
      {
        "word": "角を曲がる",
        "cleanWord": "角を曲がる",
        "reading": "かどをまがる",
        "cleanReading": "かどをまがる",
        "romaji": "kadoomagaru",
        "meaning": "ထောင့်ကိုကွေ့သည်"
      },
      {
        "word": "(~を)曲げる",
        "cleanWord": "曲げる",
        "reading": "(~を)まげる",
        "cleanReading": "まげる",
        "romaji": "mageru",
        "meaning": "ကွေးအောင်လုပ်သည်"
      },
      {
        "word": "曲線",
        "cleanWord": "曲線",
        "reading": "きょくせん",
        "cleanReading": "きょくせん",
        "romaji": "kyokusen",
        "meaning": "မျဉ်းကွေး"
      },
      {
        "word": "曲",
        "cleanWord": "曲",
        "reading": "きょく",
        "cleanReading": "きょく",
        "romaji": "kyoku",
        "meaning": "တေးသွား"
      },
      {
        "word": "作曲(する)",
        "cleanWord": "作曲",
        "reading": "さっきょく(する)",
        "cleanReading": "さっきょく",
        "romaji": "sakkyoku",
        "meaning": "သီချင်းရေးစပ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、曲がるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、まがるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကောက်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "時間が足りないので、急いで角を曲がる必要があります。",
        "furigana": "じかんが たりないので、いそいで かどをまがる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ထောင့်ကိုကွေ့သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 93,
    "kanji": "非",
    "strokes": 8,
    "onyomi": "ヒ",
    "kunyomi": "—",
    "english": "emergency exit, non-, extremely",
    "romaji": "hi hijouguchi hikagakuteki hiteki hijouni",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "非常口",
        "cleanWord": "非常口",
        "reading": "ひじょうぐち",
        "cleanReading": "ひじょうぐち",
        "romaji": "hijouguchi",
        "meaning": "အရေးပေါ်ထွက်ပေါက်"
      },
      {
        "word": "非科学的(な)",
        "cleanWord": "非科学的",
        "reading": "ひかがくてき(な)",
        "cleanReading": "ひかがくてき",
        "romaji": "hikagakuteki",
        "meaning": "သိပ္ပံနည်းကျမဟုတ်သော"
      },
      {
        "word": "非~的(な)",
        "cleanWord": "非的",
        "reading": "ひ~てき(な)",
        "cleanReading": "ひてき",
        "romaji": "hiteki",
        "meaning": "မ....ဆိုင်သော"
      },
      {
        "word": "非常に",
        "cleanWord": "非常に",
        "reading": "ひじょうに",
        "cleanReading": "ひじょうに",
        "romaji": "hijouni",
        "meaning": "အလွန်အမင်း၊ အင်မတန်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「非常口」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ひじょうぐち」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အရေးပေါ်ထွက်ပေါက်\" (非常口) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先生はいつも非科学的な言葉で説明してくれます。",
        "furigana": "せんせいは いつも ひかがくてきな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း သိပ္ပံနည်းကျမဟုတ်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 94,
    "kanji": "常",
    "strokes": 11,
    "onyomi": "ジョウ",
    "kunyomi": "—",
    "english": "normal, everyday, common sense, emergency",
    "romaji": "jou nichijou nichijouteki seijouna joushiki",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "日常",
        "cleanWord": "日常",
        "reading": "にちじょう",
        "cleanReading": "にちじょう",
        "romaji": "nichijou",
        "meaning": "နေ့စဉ်ဘဝ"
      },
      {
        "word": "日常的(な)",
        "cleanWord": "日常的",
        "reading": "にちじょうてき(な)",
        "cleanReading": "にちじょうてき",
        "romaji": "nichijouteki",
        "meaning": "နေ့စဉ်ဘဝနှင့်ဆိုင်သော"
      },
      {
        "word": "正常(な)",
        "cleanWord": "正常",
        "reading": "せいじょうな",
        "cleanReading": "せいじょうな",
        "romaji": "seijouna",
        "meaning": "ပုံမှန်ဖြစ်သော"
      },
      {
        "word": "常識",
        "cleanWord": "常識",
        "reading": "じょうしき",
        "cleanReading": "じょうしき",
        "romaji": "joushiki",
        "meaning": "သာမန်အသိပညာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「日常」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「にちじょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နေ့စဉ်ဘဝ\" (日常) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先生はいつも日常的な言葉で説明してくれます。",
        "furigana": "せんせいは いつも にちじょうてきな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း နေ့စဉ်ဘဝနှင့်ဆိုင်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 95,
    "kanji": "階",
    "strokes": 12,
    "onyomi": "カイ",
    "kunyomi": "—",
    "english": "floor, stairs, story",
    "romaji": "kai kaidan nikai",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "階段",
        "cleanWord": "階段",
        "reading": "かいだん",
        "cleanReading": "かいだん",
        "romaji": "kaidan",
        "meaning": "လှေကား"
      },
      {
        "word": "2階",
        "cleanWord": "2階",
        "reading": "にかい",
        "cleanReading": "にかい",
        "romaji": "nikai",
        "meaning": "၂ထပ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「階段」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かいだん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လှေကား\" (階段) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、2階について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、にかいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ၂ထပ် (2階) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 96,
    "kanji": "段",
    "strokes": 9,
    "onyomi": "ダン",
    "kunyomi": "—",
    "english": "step, price, usually, cardboard",
    "romaji": "dan nedan fudan danbo-ru",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "値段",
        "cleanWord": "値段",
        "reading": "ねだん",
        "cleanReading": "ねだん",
        "romaji": "nedan",
        "meaning": "ဈေးနှုန်း"
      },
      {
        "word": "普段",
        "cleanWord": "普段",
        "reading": "ふだん",
        "cleanReading": "ふだん",
        "romaji": "fudan",
        "meaning": "ခါတိုင်း"
      },
      {
        "word": "段ボール",
        "cleanWord": "段ボール",
        "reading": "だんボール",
        "cleanReading": "だんボール",
        "romaji": "danbo-ru",
        "meaning": "ကတ်ထူပုံး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「値段」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ねだん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဈေးနှုန်း\" (値段) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、普段について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ふだんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခါတိုင်း (普段) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 97,
    "kanji": "向",
    "strokes": 6,
    "onyomi": "コウ",
    "kunyomi": "む-く ・ む-かう ・ む-こう",
    "english": "face toward, head for, over there, direction",
    "romaji": "kou muku mukau mukou minamimuki houkou",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "南向き",
        "cleanWord": "南向き",
        "reading": "みなみむき",
        "cleanReading": "みなみむき",
        "romaji": "minamimuki",
        "meaning": "တောင်အရပ်သို့မျက်နှာမူသော"
      },
      {
        "word": "(に)向かう",
        "cleanWord": "向かう",
        "reading": "(に)むかう",
        "cleanReading": "むかう",
        "romaji": "mukau",
        "meaning": "ဦးတည်သည်၊"
      },
      {
        "word": "向こう",
        "cleanWord": "向こう",
        "reading": "むこう",
        "cleanReading": "むこう",
        "romaji": "mukou",
        "meaning": "ဟိုဘက်"
      },
      {
        "word": "方向",
        "cleanWord": "方向",
        "reading": "ほうこう",
        "cleanReading": "ほうこう",
        "romaji": "houkou",
        "meaning": "အရပ်မျက်နှာ၊ လားရာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「南向き」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「みなみむき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တောင်အရပ်သို့မျက်နှာမူသော\" (南向き) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで向かう必要があります。",
        "furigana": "じかんが たりないので、いそいで むかう ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ဦးတည်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 98,
    "kanji": "実",
    "strokes": 8,
    "onyomi": "ジツ ・ ジッ",
    "kunyomi": "み ・ みの-る",
    "english": "fruit, truth, parents home, experiment, actually",
    "romaji": "jitsu ji mi minoru jikka jikken jissai jitsugen jijitsu jitsuryoku jitsuha",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "実",
        "cleanWord": "実",
        "reading": "み",
        "cleanReading": "み",
        "romaji": "mi",
        "meaning": "အသီး၊ အနှစ်သာရ၊ အောင်မြင်မှု"
      },
      {
        "word": "実る",
        "cleanWord": "実る",
        "reading": "みのる",
        "cleanReading": "みのる",
        "romaji": "minoru",
        "meaning": "အသီးသီးသည်"
      },
      {
        "word": "実家",
        "cleanWord": "実家",
        "reading": "じっか",
        "cleanReading": "じっか",
        "romaji": "jikka",
        "meaning": "မိဘလက်ထက်မှာနေလာသောအိမ်၊ မိဘအိမ်"
      },
      {
        "word": "実験",
        "cleanWord": "実験",
        "reading": "じっけん",
        "cleanReading": "じっけん",
        "romaji": "jikken",
        "meaning": "စမ်းသပ်မှု"
      },
      {
        "word": "実際に",
        "cleanWord": "実際に",
        "reading": "じっさい",
        "cleanReading": "じっさい",
        "romaji": "jissai",
        "meaning": "အမှန်တကယ်၊ လက်တွေ့"
      },
      {
        "word": "実現",
        "cleanWord": "実現",
        "reading": "じつげん",
        "cleanReading": "じつげん",
        "romaji": "jitsugen",
        "meaning": "အကောင်အထည်ပေါ်လာခြင်း"
      },
      {
        "word": "事実",
        "cleanWord": "事実",
        "reading": "じじつ",
        "cleanReading": "じじつ",
        "romaji": "jijitsu",
        "meaning": "အဖြစ်မှန်၊ ဖြစ်ရပ်မှန်"
      },
      {
        "word": "実力",
        "cleanWord": "実力",
        "reading": "じつりょく",
        "cleanReading": "じつりょく",
        "romaji": "jitsuryoku",
        "meaning": "အရည်အချင်း၊ စွမ်းအစွမ်း၊ အရည်အသွေး"
      },
      {
        "word": "実は",
        "cleanWord": "実は",
        "reading": "じつは",
        "cleanReading": "じつは",
        "romaji": "jitsuha",
        "meaning": "တကယ်တော့၊ အမှန်ပြောရရင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「実」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「み」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အသီး\" (実) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで実る必要があります。",
        "furigana": "じかんが たりないので、いそいで みのる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (အသီးသီးသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 99,
    "kanji": "失",
    "strokes": 5,
    "onyomi": "シツ ・ シッ",
    "kunyomi": "—",
    "english": "fail, mistake, rude, excuse me",
    "romaji": "shitsu shi shippai shitsurei shitsureishimasu",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "失敗(する)",
        "cleanWord": "失敗",
        "reading": "しっぱい(する)",
        "cleanReading": "しっぱい",
        "romaji": "shippai",
        "meaning": "ဆုံးရှုံးသည်"
      },
      {
        "word": "失礼(な)",
        "cleanWord": "失礼",
        "reading": "しつれい(な)",
        "cleanReading": "しつれい",
        "romaji": "shitsurei",
        "meaning": "ရိုင်းစိုင်းသော"
      },
      {
        "word": "失礼します",
        "cleanWord": "失礼します",
        "reading": "しつれいします",
        "cleanReading": "しつれいします",
        "romaji": "shitsureishimasu",
        "meaning": "ဝင်ခွင့်ပြုပါ၊ ခွင့်ပြုပါ"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり失敗することが大切です。",
        "furigana": "しごとの まえに しっかり しっぱいすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ဆုံးရှုံးသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先生はいつも失礼な言葉で説明してくれます。",
        "furigana": "せんせいは いつも しつれいな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း ရိုင်းစိုင်းသော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 100,
    "kanji": "原",
    "strokes": 10,
    "onyomi": "ゲン",
    "kunyomi": "はら",
    "english": "field, meadow, raw material, atomic power",
    "romaji": "gen hara nohara harappa genryou genshiryoku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "野原",
        "cleanWord": "野原",
        "reading": "のはら",
        "cleanReading": "のはら",
        "romaji": "nohara",
        "meaning": "စိမ်းလန်းသောလွင်ပြင်"
      },
      {
        "word": "原っぱ",
        "cleanWord": "原っぱ",
        "reading": "はらっぱ",
        "cleanReading": "はらっぱ",
        "romaji": "harappa",
        "meaning": "လယ်ကွင်းပြင်"
      },
      {
        "word": "原料",
        "cleanWord": "原料",
        "reading": "げんりょう",
        "cleanReading": "げんりょう",
        "romaji": "genryou",
        "meaning": "ကုန်ကြမ်း"
      },
      {
        "word": "原子力",
        "cleanWord": "原子力",
        "reading": "げんしりょく",
        "cleanReading": "げんしりょく",
        "romaji": "genshiryoku",
        "meaning": "အနုမြူဓါတ်အား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「野原」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「のはら」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စိမ်းလန်းသောလွင်ပြင်\" (野原) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、原っぱについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、はらっぱについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လယ်ကွင်းပြင် (原っぱ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 101,
    "kanji": "因",
    "strokes": 6,
    "onyomi": "イン",
    "kunyomi": "—",
    "english": "cause, factor, reason",
    "romaji": "in genin",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "原因",
        "cleanWord": "原因",
        "reading": "げんいん",
        "cleanReading": "げんいん",
        "romaji": "genin",
        "meaning": "အကြောင်းရင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「原因」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「げんいん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အကြောင်းရင်း\" (原因) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、原因について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、げんいんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အကြောင်းရင်း (原因) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 102,
    "kanji": "結",
    "strokes": 12,
    "onyomi": "ケツ ・ ケッ",
    "kunyomi": "むす-ぶ",
    "english": "tie, conclusion, marriage, after all",
    "romaji": "ketsu ke musubu ketsuron kekkon kekkyoku",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "結ぶ",
        "cleanWord": "結ぶ",
        "reading": "むすぶ",
        "cleanReading": "むすぶ",
        "romaji": "musubu",
        "meaning": "ချည်နှောင်သည်"
      },
      {
        "word": "結論",
        "cleanWord": "結論",
        "reading": "けつろん",
        "cleanReading": "けつろん",
        "romaji": "ketsuron",
        "meaning": "နိဂုံး၊"
      },
      {
        "word": "結婚(する)",
        "cleanWord": "結婚",
        "reading": "けっこん(する)",
        "cleanReading": "けっこん",
        "romaji": "kekkon",
        "meaning": "လက်ထပ်သည်"
      },
      {
        "word": "結局",
        "cleanWord": "結局",
        "reading": "けっきょく",
        "cleanReading": "けっきょく",
        "romaji": "kekkyoku",
        "meaning": "နောက်ဆုံးတော့"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に結ぶようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに むすぶように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ချည်နှောင်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、結論について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、けつろんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နိဂုံး (結論) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 103,
    "kanji": "果",
    "strokes": 8,
    "onyomi": "カ",
    "kunyomi": "—",
    "english": "result, fruit, outcome",
    "romaji": "ka kekka kudamono",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "結果",
        "cleanWord": "結果",
        "reading": "けっか",
        "cleanReading": "けっか",
        "romaji": "kekka",
        "meaning": "ရလဒ်"
      },
      {
        "word": "果物",
        "cleanWord": "果物",
        "reading": "くだもの",
        "cleanReading": "くだもの",
        "romaji": "kudamono",
        "meaning": "သစ်သီးဝလံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「結果」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「けっか」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရလဒ်\" (結果) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、果物について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、くだものについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သစ်သီးဝလံ (果物) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 104,
    "kanji": "晩",
    "strokes": 12,
    "onyomi": "バン",
    "kunyomi": "—",
    "english": "evening, tonight, every night, dinner",
    "romaji": "ban maiban konban bangohan sakuban",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "毎晩",
        "cleanWord": "毎晩",
        "reading": "まいばん",
        "cleanReading": "まいばん",
        "romaji": "maiban",
        "meaning": "ညတိုင်း"
      },
      {
        "word": "今晩",
        "cleanWord": "今晩",
        "reading": "こんばん",
        "cleanReading": "こんばん",
        "romaji": "konban",
        "meaning": "ဒီနေ့ည"
      },
      {
        "word": "晩ご飯",
        "cleanWord": "晩ご飯",
        "reading": "ばんごはん",
        "cleanReading": "ばんごはん",
        "romaji": "bangohan",
        "meaning": "ညစာထမင်း"
      },
      {
        "word": "昨晩",
        "cleanWord": "昨晩",
        "reading": "さくばん",
        "cleanReading": "さくばん",
        "romaji": "sakuban",
        "meaning": "မနေ့ညက"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「毎晩」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「まいばん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ညတိုင်း\" (毎晩) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、今晩について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、こんばんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဒီနေ့ည (今晩) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 105,
    "kanji": "無",
    "strokes": 12,
    "onyomi": "ム ・ ブ",
    "kunyomi": "な-い",
    "english": "nothing, none, impossible, free of charge, safe",
    "romaji": "mu bu nai muri muryou mukyuu buji",
    "category": "Traffic, Roads & Daily Life",
    "categoryJp": "道路・交通・日常",
    "categoryMm": "လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ",
    "vocab": [
      {
        "word": "無い",
        "cleanWord": "無い",
        "reading": "ない",
        "cleanReading": "ない",
        "romaji": "nai",
        "meaning": "မရှိသော"
      },
      {
        "word": "無理(する)",
        "cleanWord": "無理",
        "reading": "むり(する)",
        "cleanReading": "むり",
        "romaji": "muri",
        "meaning": "မဖြစ်နိုင်တာကိုလုပ်သည်"
      },
      {
        "word": "無理(な)",
        "cleanWord": "無理",
        "reading": "むり(な)",
        "cleanReading": "むり",
        "romaji": "muri",
        "meaning": "မဖြစ်နိုင်သော"
      },
      {
        "word": "無料",
        "cleanWord": "無料",
        "reading": "むりょう",
        "cleanReading": "むりょう",
        "romaji": "muryou",
        "meaning": "အခမဲ့"
      },
      {
        "word": "無休",
        "cleanWord": "無休",
        "reading": "むきゅう",
        "cleanReading": "むきゅう",
        "romaji": "mukyuu",
        "meaning": "နားရက်မရှိခြင်း၊ ပိတ်ရက်မရှိခြင်း"
      },
      {
        "word": "無事(な)",
        "cleanWord": "無事",
        "reading": "ぶじ(な)",
        "cleanReading": "ぶじ",
        "romaji": "buji",
        "meaning": "ဘေးအန္တရာယ်ကင်းသော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより無いと感じる人が多いようです。",
        "furigana": "きょうは いつもより ないと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ မရှိသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに無理しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに むりしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း မဖြစ်နိုင်တာကိုလုပ်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 106,
    "kanji": "配",
    "strokes": 10,
    "onyomi": "ハイ ・ パイ",
    "kunyomi": "くば-る",
    "english": "distribute, deliver, worry, anxious",
    "romaji": "hai pai kubaru haitatsu haisouryou shinpai",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "配る",
        "cleanWord": "配る",
        "reading": "くばる",
        "cleanReading": "くばる",
        "romaji": "kubaru",
        "meaning": "ဝေငှသည်"
      },
      {
        "word": "配達(する)",
        "cleanWord": "配達",
        "reading": "はいたつ",
        "cleanReading": "はいたつ",
        "romaji": "haitatsu",
        "meaning": "ပို့ဆောင်သည်"
      },
      {
        "word": "配送料",
        "cleanWord": "配送料",
        "reading": "はいそうりょう",
        "cleanReading": "はいそうりょう",
        "romaji": "haisouryou",
        "meaning": "ပို့ခ"
      },
      {
        "word": "心配(する)",
        "cleanWord": "心配",
        "reading": "しんぱい(する)",
        "cleanReading": "しんぱい",
        "romaji": "shinpai",
        "meaning": "စိတ်ပူသည်"
      },
      {
        "word": "心配(な)",
        "cleanWord": "心配",
        "reading": "しんぱい(な)",
        "cleanReading": "しんぱい",
        "romaji": "shinpai",
        "meaning": "စိတ်ပူသော"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に配るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに くばるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဝေငှသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに配達しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに はいたつしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ပို့ဆောင်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 107,
    "kanji": "達",
    "strokes": 12,
    "onyomi": "タツ ・ ダチ",
    "kunyomi": "—",
    "english": "reach, express mail, improve, friend",
    "romaji": "tatsu dachi sokutatsu joutatsu hattatsu tomodachi",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "速達",
        "cleanWord": "速達",
        "reading": "そくたつ",
        "cleanReading": "そくたつ",
        "romaji": "sokutatsu",
        "meaning": "အမြန်ပို့စာ"
      },
      {
        "word": "上達(する)",
        "cleanWord": "上達",
        "reading": "じょうたつ(する)",
        "cleanReading": "じょうたつ",
        "romaji": "joutatsu",
        "meaning": "တိုးတက်လာခြင်း"
      },
      {
        "word": "発達(する)",
        "cleanWord": "発達",
        "reading": "はったつ(する)",
        "cleanReading": "はったつ",
        "romaji": "hattatsu",
        "meaning": "ဖွံ့ဖြိုးတိုးတက်ခြင်း၊ ထွန်းကားခြင်း"
      },
      {
        "word": "友達",
        "cleanWord": "友達",
        "reading": "ともだち",
        "cleanReading": "ともだち",
        "romaji": "tomodachi",
        "meaning": "သူငယ်ချင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「速達」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「そくたつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အမြန်ပို့စာ\" (速達) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに上達しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに じょうたつしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း တိုးတက်လာခြင်းခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 108,
    "kanji": "宅",
    "strokes": 6,
    "onyomi": "タク",
    "kunyomi": "—",
    "english": "home, house, home delivery, residence",
    "romaji": "taku takuhai jitaku otaku juutaku",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "宅配",
        "cleanWord": "宅配",
        "reading": "たくはい",
        "cleanReading": "たくはい",
        "romaji": "takuhai",
        "meaning": "ပို့ဆောင်ခြင်း"
      },
      {
        "word": "自宅",
        "cleanWord": "自宅",
        "reading": "じたく",
        "cleanReading": "じたく",
        "romaji": "jitaku",
        "meaning": "မိမိအိမ်"
      },
      {
        "word": "お宅",
        "cleanWord": "お宅",
        "reading": "おたく",
        "cleanReading": "おたく",
        "romaji": "otaku",
        "meaning": "အိမ်"
      },
      {
        "word": "住宅",
        "cleanWord": "住宅",
        "reading": "じゅうたく",
        "cleanReading": "じゅうたく",
        "romaji": "juutaku",
        "meaning": "အိမ်ယာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「宅配」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「たくはい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပို့ဆောင်ခြင်း\" (宅配) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、自宅について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じたくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မိမိအိမ် (自宅) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 109,
    "kanji": "楽",
    "strokes": 13,
    "onyomi": "ガク ・ ガッ ・ ラク",
    "kunyomi": "たの-しい",
    "english": "comfortable, easy, fun, music, instrument",
    "romaji": "gaku ga raku tanoshii ongaku gakki",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "楽(な)",
        "cleanWord": "楽",
        "reading": "らく(な)",
        "cleanReading": "らく",
        "romaji": "raku",
        "meaning": "သက်တောင့်သက်သာရှိသော"
      },
      {
        "word": "楽しい",
        "cleanWord": "楽しい",
        "reading": "たのしい",
        "cleanReading": "たのしい",
        "romaji": "tanoshii",
        "meaning": "ပျော်ရွှင်သော"
      },
      {
        "word": "音楽",
        "cleanWord": "音楽",
        "reading": "おんがく",
        "cleanReading": "おんがく",
        "romaji": "ongaku",
        "meaning": "တေးဂီတ"
      },
      {
        "word": "楽器",
        "cleanWord": "楽器",
        "reading": "がっき",
        "cleanReading": "がっき",
        "romaji": "gakki",
        "meaning": "တူရိယာ"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても楽なので、だれでも使えます。",
        "furigana": "この ほうほうは とても らくなので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် သက်တောင့်သက်သာရှိသော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "あまり楽しい場合は、無理をしないで休んでください。",
        "furigana": "あまり たのしい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း ပျော်ရွှင်သော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 110,
    "kanji": "希",
    "strokes": 7,
    "onyomi": "キ",
    "kunyomi": "—",
    "english": "hope, wish, desire, rare",
    "romaji": "ki kibou",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "希望",
        "cleanWord": "希望",
        "reading": "きぼう",
        "cleanReading": "きぼう",
        "romaji": "kibou",
        "meaning": "မျှော်လင့်ချက်၊ ဆန္ဒ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「希望」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きぼう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မျှော်လင့်ချက်\" (希望) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、希望について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きぼうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မျှော်လင့်ချက် (希望) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 111,
    "kanji": "望",
    "strokes": 11,
    "onyomi": "ボウ",
    "kunyomi": "のぞ-む",
    "english": "wish, hope, desire, disappointment",
    "romaji": "bou nozomu shitsubou",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "望む",
        "cleanWord": "望む",
        "reading": "のぞむ",
        "cleanReading": "のぞむ",
        "romaji": "nozomu",
        "meaning": "မျှော်လင့်သည်"
      },
      {
        "word": "失望(する)",
        "cleanWord": "失望",
        "reading": "しつぼう(する)",
        "cleanReading": "しつぼう",
        "romaji": "shitsubou",
        "meaning": "စိတ်ပျက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に望むようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに のぞむように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (မျှော်လင့်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに失望しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに しつぼうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း စိတ်ပျက်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 112,
    "kanji": "帯",
    "strokes": 10,
    "onyomi": "タイ",
    "kunyomi": "—",
    "english": "zone, time zone, industrial belt",
    "romaji": "tai jikantai kougyouchitai",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "時間帯",
        "cleanWord": "時間帯",
        "reading": "じかんたい",
        "cleanReading": "じかんたい",
        "romaji": "jikantai",
        "meaning": "တူညီသောဒေသစံတော်ချိန်အကန့် (Time Zone)"
      },
      {
        "word": "工業地帯",
        "cleanWord": "工業地帯",
        "reading": "こうぎょうちたい",
        "cleanReading": "こうぎょうちたい",
        "romaji": "kougyouchitai",
        "meaning": "စက်မှုလက်မှုဒေသ၊ စက်မှုဇုံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「時間帯」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じかんたい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တူညီသောဒေသစံတော်ချိန်အကန့် (Time Zone)\" (時間帯) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、工業地帯について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、こうぎょうちたいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စက်မှုလက်မှုဒေသ (工業地帯) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 113,
    "kanji": "届",
    "strokes": 8,
    "onyomi": "—",
    "kunyomi": "とど-く ・ とど-ける",
    "english": "reach, arrive, deliver, report",
    "romaji": "todoku todokeru",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "(~が)届く",
        "cleanWord": "届く",
        "reading": "(~が)とどく",
        "cleanReading": "とどく",
        "romaji": "todoku",
        "meaning": "ရောက်ရှိသည်၊ (ပစ္စည်း၊ စာ၊ အထုတ်အပိုး)"
      },
      {
        "word": "(~を)届ける",
        "cleanWord": "届ける",
        "reading": "(~を)とどける",
        "cleanReading": "とどける",
        "romaji": "todokeru",
        "meaning": "အကြောင်းကြားသည်၊ အိမ်အထိယူသွားသည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、届くようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、とどくように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ရောက်ရှိသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に届けることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに とどけることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (အကြောင်းကြားသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 114,
    "kanji": "額",
    "strokes": 18,
    "onyomi": "ガク",
    "kunyomi": "—",
    "english": "amount of money, half price, full amount",
    "romaji": "gaku kingaku hangaku zengaku",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "金額",
        "cleanWord": "金額",
        "reading": "きんがく",
        "cleanReading": "きんがく",
        "romaji": "kingaku",
        "meaning": "ကျသင့်ငွေ၊ ငွေပမာဏ"
      },
      {
        "word": "半額",
        "cleanWord": "半額",
        "reading": "はんがく",
        "cleanReading": "はんがく",
        "romaji": "hangaku",
        "meaning": "တဝက်ဈေး၊ ထက်ဝက်ဈေး"
      },
      {
        "word": "全額",
        "cleanWord": "全額",
        "reading": "ぜんがく",
        "cleanReading": "ぜんがく",
        "romaji": "zengaku",
        "meaning": "ကျသင့်ငွေအားလုံး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「金額」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きんがく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကျသင့်ငွေ\" (金額) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、半額について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、はんがくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တဝက်ဈေး (半額) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 115,
    "kanji": "捨",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "す-てる",
    "english": "throw away, discard, abandon",
    "romaji": "suteru",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "捨てる",
        "cleanWord": "捨てる",
        "reading": "すてる",
        "cleanReading": "すてる",
        "romaji": "suteru",
        "meaning": "လွှင့်ပစ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に捨てるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに すてるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (လွှင့်ပစ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで捨てる必要があります。",
        "furigana": "じかんが たりないので、いそいで すてる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (လွှင့်ပစ်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 116,
    "kanji": "器",
    "strokes": 15,
    "onyomi": "キ",
    "kunyomi": "—",
    "english": "container, vessel, tableware, instrument",
    "romaji": "ki youki shokki gakki",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "容器",
        "cleanWord": "容器",
        "reading": "ようき",
        "cleanReading": "ようき",
        "romaji": "youki",
        "meaning": "ထည့်စရာဘူး၊ ခွက်"
      },
      {
        "word": "食器",
        "cleanWord": "食器",
        "reading": "しょっき",
        "cleanReading": "しょっき",
        "romaji": "shokki",
        "meaning": "ထမင်းစားသည့်ပန်းကန်ခွက်"
      },
      {
        "word": "楽器",
        "cleanWord": "楽器",
        "reading": "がっき",
        "cleanReading": "がっき",
        "romaji": "gakki",
        "meaning": "တူရိယာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「容器」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ようき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ထည့်စရာဘူး\" (容器) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、食器について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょっきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ထမင်းစားသည့်ပန်းကန်ခွက် (食器) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 117,
    "kanji": "部",
    "strokes": 11,
    "onyomi": "ブ ・ ヘ",
    "kunyomi": "—",
    "english": "part, section, department, club, room",
    "romaji": "bu he zenbu ichibu bubun gakubu buchou heya",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "全部",
        "cleanWord": "全部",
        "reading": "ぜんぶ",
        "cleanReading": "ぜんぶ",
        "romaji": "zenbu",
        "meaning": "အားလုံး"
      },
      {
        "word": "一部",
        "cleanWord": "一部",
        "reading": "いちぶ",
        "cleanReading": "いちぶ",
        "romaji": "ichibu",
        "meaning": "တစိတ်တပိုင်း"
      },
      {
        "word": "部分",
        "cleanWord": "部分",
        "reading": "ぶぶん",
        "cleanReading": "ぶぶん",
        "romaji": "bubun",
        "meaning": "အစိတ်အပိုင်း"
      },
      {
        "word": "学部",
        "cleanWord": "学部",
        "reading": "がくぶ",
        "cleanReading": "がくぶ",
        "romaji": "gakubu",
        "meaning": "ဘာသာရပ်ဌာန"
      },
      {
        "word": "部長",
        "cleanWord": "部長",
        "reading": "ぶちょう",
        "cleanReading": "ぶちょう",
        "romaji": "buchou",
        "meaning": "ဌာနမှူး"
      },
      {
        "word": "*部屋",
        "cleanWord": "部屋",
        "reading": "へや",
        "cleanReading": "へや",
        "romaji": "heya",
        "meaning": "အခန်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「全部」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ぜんぶ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အားလုံး\" (全部) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、一部について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、いちぶについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တစိတ်တပိုင်း (一部) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 118,
    "kanji": "燃",
    "strokes": 16,
    "onyomi": "ネン",
    "kunyomi": "も-える ・ も-やす",
    "english": "burn, blaze, fuel, combustible",
    "romaji": "nen moeru moyasu nenryou",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "(~が)燃える",
        "cleanWord": "燃える",
        "reading": "もえる",
        "cleanReading": "もえる",
        "romaji": "moeru",
        "meaning": "လောင်ကျွမ်းသည်"
      },
      {
        "word": "(~を)燃やす",
        "cleanWord": "燃やす",
        "reading": "もやす",
        "cleanReading": "もやす",
        "romaji": "moyasu",
        "meaning": "လောင်ကျွမ်းစေသည်"
      },
      {
        "word": "燃料",
        "cleanWord": "燃料",
        "reading": "ねんりょう",
        "cleanReading": "ねんりょう",
        "romaji": "nenryou",
        "meaning": "လောင်စာ"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、燃えるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、もえるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (လောင်ကျွမ်းသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に燃やすことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに もやすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (လောင်ကျွမ်းစေသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 119,
    "kanji": "違",
    "strokes": 13,
    "onyomi": "—",
    "kunyomi": "ちが-う",
    "english": "differ, wrong, make a mistake",
    "romaji": "chigau machigau machigaeru",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "(~と)違う",
        "cleanWord": "違う",
        "reading": "(~と)ちがう",
        "cleanReading": "ちがう",
        "romaji": "chigau",
        "meaning": "~နှင့်မတူခြားနားသည်၊ ကွဲပြားခြားနားသည်"
      },
      {
        "word": "間違う",
        "cleanWord": "間違う",
        "reading": "まちがう",
        "cleanReading": "まちがう",
        "romaji": "machigau",
        "meaning": "မှားယွင်းသည်"
      },
      {
        "word": "間違える",
        "cleanWord": "間違える",
        "reading": "まちがえる",
        "cleanReading": "まちがえる",
        "romaji": "machigaeru",
        "meaning": "မှားယွင်းသည်၊ မှားနေသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に違うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに ちがうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (နှင့်မတူခြားနားသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで間違う必要があります。",
        "furigana": "じかんが たりないので、いそいで まちがう ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (မှားယွင်းသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 120,
    "kanji": "袋",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "ふくろ ・ ぶくろ",
    "english": "bag, sack, paper bag, plastic bag",
    "romaji": "fukuro bukuro kamibukuro bini-rubukuro",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "袋",
        "cleanWord": "袋",
        "reading": "ふくろ",
        "cleanReading": "ふくろ",
        "romaji": "fukuro",
        "meaning": "အိတ်"
      },
      {
        "word": "紙袋",
        "cleanWord": "紙袋",
        "reading": "かみぶくろ",
        "cleanReading": "かみぶくろ",
        "romaji": "kamibukuro",
        "meaning": "စက္ကူအိတ်"
      },
      {
        "word": "ビニール袋",
        "cleanWord": "ビニール袋",
        "reading": "ビニールぶくろ",
        "cleanReading": "ビニールぶくろ",
        "romaji": "bini-rubukuro",
        "meaning": "ပလပ်စတစ်အိတ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「袋」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ふくろ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အိတ်\" (袋) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、紙袋について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かみぶくろについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စက္ကူအိတ် (紙袋) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 121,
    "kanji": "箱",
    "strokes": 15,
    "onyomi": "—",
    "kunyomi": "はこ ・ -ばこ",
    "english": "box, case, trash can, cardboard box",
    "romaji": "hako bako danbo-rubako gomibako",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "箱",
        "cleanWord": "箱",
        "reading": "はこ",
        "cleanReading": "はこ",
        "romaji": "hako",
        "meaning": "ဘူး၊ သေတ္တာ"
      },
      {
        "word": "段ボール箱",
        "cleanWord": "段ボール箱",
        "reading": "だんボールばこ",
        "cleanReading": "だんボールばこ",
        "romaji": "danbo-rubako",
        "meaning": "ကတ်ထူစက္ကူပုံး"
      },
      {
        "word": "ごみ箱",
        "cleanWord": "ごみ箱",
        "reading": "ごみばこ",
        "cleanReading": "ごみばこ",
        "romaji": "gomibako",
        "meaning": "အမှိုက်ပုံး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「箱」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「はこ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဘူး\" (箱) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、段ボール箱について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、だんボールばこについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကတ်ထူစက္ကူပုံး (段ボール箱) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 122,
    "kanji": "量",
    "strokes": 12,
    "onyomi": "リョウ",
    "kunyomi": "はか-る",
    "english": "quantity, measure, weight, volume",
    "romaji": "ryou hakaru suuryou onryou",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "量る",
        "cleanWord": "量る",
        "reading": "はかる",
        "cleanReading": "はかる",
        "romaji": "hakaru",
        "meaning": "တိုင်းတာသည်"
      },
      {
        "word": "数量",
        "cleanWord": "数量",
        "reading": "すうりょう",
        "cleanReading": "すうりょう",
        "romaji": "suuryou",
        "meaning": "အရေအတွက်၊ ပမာဏ"
      },
      {
        "word": "音量",
        "cleanWord": "音量",
        "reading": "おんりょう",
        "cleanReading": "おんりょう",
        "romaji": "onryou",
        "meaning": "အသံပမာဏ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に量るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに はかるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (တိုင်းတာသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、数量について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、すうりょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရေအတွက် (数量) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 123,
    "kanji": "再",
    "strokes": 6,
    "onyomi": "サイ ・ サ",
    "kunyomi": "—",
    "english": "again, reuse, reunion, year after next",
    "romaji": "sai sa sairiyou saikai sarainen saraishuu",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "再利用(する)",
        "cleanWord": "再利用",
        "reading": "さいりよう(する)",
        "cleanReading": "さいりよう",
        "romaji": "sairiyou",
        "meaning": "ပြန်အသုံးပြုသည်"
      },
      {
        "word": "再会(する)",
        "cleanWord": "再会",
        "reading": "さいかい(する)",
        "cleanReading": "さいかい",
        "romaji": "saikai",
        "meaning": "ပြန်လည်စတင်သည်"
      },
      {
        "word": "再来年",
        "cleanWord": "再来年",
        "reading": "さらいねん",
        "cleanReading": "さらいねん",
        "romaji": "sarainen",
        "meaning": "လာမယ့်နှစ်ပြီးနောက်နှစ်"
      },
      {
        "word": "再来週",
        "cleanWord": "再来週",
        "reading": "さらいしゅう",
        "cleanReading": "さらいしゅう",
        "romaji": "saraishuu",
        "meaning": "လာမယ့်အပတ်ပြီးနောက်တစ်ပတ်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり再利用することが大切です。",
        "furigana": "しごとの まえに しっかり さいりようすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ပြန်အသုံးပြုသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに再会しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに さいかいしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ပြန်လည်စတင်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 124,
    "kanji": "郵",
    "strokes": 11,
    "onyomi": "ユウ",
    "kunyomi": "—",
    "english": "mail, postal service, send by post",
    "romaji": "yuu yuubin yuusou",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "郵便",
        "cleanWord": "郵便",
        "reading": "ゆうびん",
        "cleanReading": "ゆうびん",
        "romaji": "yuubin",
        "meaning": "စာတိုက်လုပ်ငန်း"
      },
      {
        "word": "郵送(する)",
        "cleanWord": "郵送",
        "reading": "ゆうそう(する)",
        "cleanReading": "ゆうそう",
        "romaji": "yuusou",
        "meaning": "စာပို့သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「郵便」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ゆうびん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စာတိုက်လုပ်ငန်း\" (郵便) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに郵送しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ゆうそうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း စာပို့သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 125,
    "kanji": "案",
    "strokes": 10,
    "onyomi": "アン",
    "kunyomi": "—",
    "english": "guide, plan, proposal, idea",
    "romaji": "an annai keikakuan teian",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "案内(する)",
        "cleanWord": "案内",
        "reading": "あんない(する)",
        "cleanReading": "あんない",
        "romaji": "annai",
        "meaning": "လမ်းညွှန်သည်၊ လမ်းပြသည်"
      },
      {
        "word": "案",
        "cleanWord": "案",
        "reading": "あん",
        "cleanReading": "あん",
        "romaji": "an",
        "meaning": "အကြံဉာဏ်"
      },
      {
        "word": "計画案",
        "cleanWord": "計画案",
        "reading": "けいかくあん",
        "cleanReading": "けいかくあん",
        "romaji": "keikakuan",
        "meaning": "စီမံကိန်းအကြံပြုခြင်း"
      },
      {
        "word": "提案(する)",
        "cleanWord": "提案",
        "reading": "ていあん(する)",
        "cleanReading": "ていあん",
        "romaji": "teian",
        "meaning": "အဆိုတင်သွင်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり案内することが大切です。",
        "furigana": "しごとの まえに しっかり あんないすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ လမ်းညွှန်သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、案について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、あんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အကြံဉာဏ် (案) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 126,
    "kanji": "内",
    "strokes": 4,
    "onyomi": "ナイ",
    "kunyomi": "うち",
    "english": "inside, interior, content, within, domestic",
    "romaji": "nai uchi uchigawa naiyou naibu mikkainai kokunai shanai",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "内側",
        "cleanWord": "内側",
        "reading": "うちがわ",
        "cleanReading": "うちがわ",
        "romaji": "uchigawa",
        "meaning": "အတွင်းဘက်"
      },
      {
        "word": "内容",
        "cleanWord": "内容",
        "reading": "ないよう",
        "cleanReading": "ないよう",
        "romaji": "naiyou",
        "meaning": "အကြောင်းအရာ"
      },
      {
        "word": "内部",
        "cleanWord": "内部",
        "reading": "ないぶ",
        "cleanReading": "ないぶ",
        "romaji": "naibu",
        "meaning": "အတွင်းပိုင်း"
      },
      {
        "word": "3日以内",
        "cleanWord": "3日以内",
        "reading": "みっかいない",
        "cleanReading": "みっかいない",
        "romaji": "mikkainai",
        "meaning": "၃ရက်အတွင်း"
      },
      {
        "word": "国内",
        "cleanWord": "国内",
        "reading": "こくない",
        "cleanReading": "こくない",
        "romaji": "kokunai",
        "meaning": "ပြည်တွင်း"
      },
      {
        "word": "車内",
        "cleanWord": "車内",
        "reading": "しゃない",
        "cleanReading": "しゃない",
        "romaji": "shanai",
        "meaning": "ကားအတွင်း၊ ရထားအတွင်း"
      },
      {
        "word": "社内",
        "cleanWord": "社内",
        "reading": "しゃない",
        "cleanReading": "しゃない",
        "romaji": "shanai",
        "meaning": "ကုမ္ပဏီအတွင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「内側」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「うちがわ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အတွင်းဘက်\" (内側) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、内容について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ないようについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အကြောင်းအရာ (内容) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 127,
    "kanji": "役",
    "strokes": 7,
    "onyomi": "ヤク",
    "kunyomi": "—",
    "english": "city hall, role, board member, useful",
    "romaji": "yaku shiyakusho yakuwari yakuin yakunitatsu",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "市役所",
        "cleanWord": "市役所",
        "reading": "しやくしょ",
        "cleanReading": "しやくしょ",
        "romaji": "shiyakusho",
        "meaning": "မြို့နယ်ရုံး"
      },
      {
        "word": "役割",
        "cleanWord": "役割",
        "reading": "やくわり",
        "cleanReading": "やくわり",
        "romaji": "yakuwari",
        "meaning": "လုပ်ငန်းတာဝန်"
      },
      {
        "word": "役員",
        "cleanWord": "役員",
        "reading": "やくいん",
        "cleanReading": "やくいん",
        "romaji": "yakuin",
        "meaning": "အလုပ်အမှုဆောင်အဖွဲ့ဝင်"
      },
      {
        "word": "役に立つ",
        "cleanWord": "役に立つ",
        "reading": "やくにたつ",
        "cleanReading": "やくにたつ",
        "romaji": "yakunitatsu",
        "meaning": "အသုံးဝင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「市役所」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しやくしょ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မြို့နယ်ရုံး\" (市役所) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、役割について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、やくわりについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လုပ်ငန်းတာဝန် (役割) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 128,
    "kanji": "局",
    "strokes": 7,
    "onyomi": "キョク",
    "kunyomi": "—",
    "english": "post office, pharmacy, broadcasting station",
    "romaji": "kyoku yuubinkyoku yakkyoku terebikyoku kekkyoku",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "郵便局",
        "cleanWord": "郵便局",
        "reading": "ゆうびんきょく",
        "cleanReading": "ゆうびんきょく",
        "romaji": "yuubinkyoku",
        "meaning": "စာတိုက်"
      },
      {
        "word": "薬局",
        "cleanWord": "薬局",
        "reading": "やっきょく",
        "cleanReading": "やっきょく",
        "romaji": "yakkyoku",
        "meaning": "ဆေးဆိုင်"
      },
      {
        "word": "テレビ局",
        "cleanWord": "テレビ局",
        "reading": "テレビきょく",
        "cleanReading": "テレビきょく",
        "romaji": "terebikyoku",
        "meaning": "တီဗွီအသံလွှင့်ဌာန"
      },
      {
        "word": "結局",
        "cleanWord": "結局",
        "reading": "けっきょく",
        "cleanReading": "けっきょく",
        "romaji": "kekkyoku",
        "meaning": "နောက်ဆုံးတော့"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「郵便局」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ゆうびんきょく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စာတိုက်\" (郵便局) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、薬局について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、やっきょくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆေးဆိုင် (薬局) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 129,
    "kanji": "公",
    "strokes": 4,
    "onyomi": "コウ",
    "kunyomi": "—",
    "english": "public, park, fair, civil servant",
    "romaji": "kou kouen kouritsu kouheina koumuin",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "公園",
        "cleanWord": "公園",
        "reading": "こうえん",
        "cleanReading": "こうえん",
        "romaji": "kouen",
        "meaning": "ပန်းခြံ"
      },
      {
        "word": "公立",
        "cleanWord": "公立",
        "reading": "こうりつ",
        "cleanReading": "こうりつ",
        "romaji": "kouritsu",
        "meaning": "ခရိုင်အစိုးရရှိသောကိုယ်ပိုင်အုပ်ချုပ်ရေးအဖွဲ့မှတည်ထောင်သော"
      },
      {
        "word": "公平な",
        "cleanWord": "公平な",
        "reading": "こうへいな",
        "cleanReading": "こうへいな",
        "romaji": "kouheina",
        "meaning": "တရားမျှတသော"
      },
      {
        "word": "公務員",
        "cleanWord": "公務員",
        "reading": "こうむいん",
        "cleanReading": "こうむいん",
        "romaji": "koumuin",
        "meaning": "အစိုးရဝန်ထမ်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「公園」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「こうえん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပန်းခြံ\" (公園) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、公立について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、こうりつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခရိုင်အစိုးရရှိသောကိုယ်ပိုင်အုပ်ချုပ်ရေးအဖွဲ့မှတည်ထောင်သော (公立) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 130,
    "kanji": "共",
    "strokes": 6,
    "onyomi": "キョウ",
    "kunyomi": "—",
    "english": "public, common, shared point",
    "romaji": "kyou koukyou kyoutsuu kyoutsuuten",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "公共",
        "cleanWord": "公共",
        "reading": "こうきょう",
        "cleanReading": "こうきょう",
        "romaji": "koukyou",
        "meaning": "အများသုံး၊ အများနှင့်ဆိုင်သော"
      },
      {
        "word": "共通(する)",
        "cleanWord": "共通",
        "reading": "きょうつう(する)",
        "cleanReading": "きょうつう",
        "romaji": "kyoutsuu",
        "meaning": "တူညီသည်"
      },
      {
        "word": "共通点",
        "cleanWord": "共通点",
        "reading": "きょうつうてん",
        "cleanReading": "きょうつうてん",
        "romaji": "kyoutsuuten",
        "meaning": "တူညီသောအချက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「公共」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「こうきょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အများသုံး\" (公共) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに共通しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに きょうつうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း တူညီသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 131,
    "kanji": "務",
    "strokes": 11,
    "onyomi": "ム",
    "kunyomi": "—",
    "english": "office work, duty, office",
    "romaji": "mu jimu jimushitsu jimusho",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "事務",
        "cleanWord": "事務",
        "reading": "じむ",
        "cleanReading": "じむ",
        "romaji": "jimu",
        "meaning": "ရုံးလုပ်ငန်း"
      },
      {
        "word": "事務室",
        "cleanWord": "事務室",
        "reading": "じむしつ",
        "cleanReading": "じむしつ",
        "romaji": "jimushitsu",
        "meaning": "ရုံးခန်း (ရုံးအခန်း)"
      },
      {
        "word": "事務所",
        "cleanWord": "事務所",
        "reading": "じむしょ",
        "cleanReading": "じむしょ",
        "romaji": "jimusho",
        "meaning": "ရုံးခန်း (ရုံးလုပ်ငန်းနေရာ)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「事務」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じむ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရုံးလုပ်ငန်း\" (事務) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、事務室について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じむしつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရုံးခန်း (ရုံးအခန်း) (事務室) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 132,
    "kanji": "冷",
    "strokes": 7,
    "onyomi": "レイ",
    "kunyomi": "ひ-える ・ ひ-やす ・ さ-める ・ つめ-たい",
    "english": "cold, chill, cool down, air conditioner",
    "romaji": "rei hieru hiyasu sameru tsumetai samasu reibou",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "冷たい",
        "cleanWord": "冷たい",
        "reading": "つめたい",
        "cleanReading": "つめたい",
        "romaji": "tsumetai",
        "meaning": "အေးသော"
      },
      {
        "word": "(~が)冷える",
        "cleanWord": "冷える",
        "reading": "(~が)ひえる",
        "cleanReading": "ひえる",
        "romaji": "hieru",
        "meaning": "~ကအေးစက်သည်"
      },
      {
        "word": "(~を)冷やす",
        "cleanWord": "冷やす",
        "reading": "(~を)ひやす",
        "cleanReading": "ひやす",
        "romaji": "hiyasu",
        "meaning": "~ကိုအအေးခံသည်"
      },
      {
        "word": "(~が)冷める",
        "cleanWord": "冷める",
        "reading": "(~が)さめる",
        "cleanReading": "さめる",
        "romaji": "sameru",
        "meaning": "~ကအေးသွားသည်"
      },
      {
        "word": "(~を)冷ます",
        "cleanWord": "冷ます",
        "reading": "(~を)さます",
        "cleanReading": "さます",
        "romaji": "samasu",
        "meaning": "~ကိုအေးစေသည်"
      },
      {
        "word": "冷房",
        "cleanWord": "冷房",
        "reading": "れいぼう",
        "cleanReading": "れいぼう",
        "romaji": "reibou",
        "meaning": "လေအေးပေးခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより冷たいと感じる人が多いようです。",
        "furigana": "きょうは いつもより つめたいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ အေးသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "急に予定が変更されて、驚いて冷えるところだった。",
        "furigana": "きゅうに よていが へんこうされて、おどろいて ひえるところだった。",
        "mm": "ရုတ်တရက် အစီအစဉ်ပြောင်းလဲသွားသဖြင့် အံ့ဩပြီး (ကအေးစက်သည်) လုနီးပါးဖြစ်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 133,
    "kanji": "蔵",
    "strokes": 15,
    "onyomi": "ゾウ",
    "kunyomi": "—",
    "english": "refrigerator, storehouse",
    "romaji": "zou reizouko",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "冷蔵庫",
        "cleanWord": "冷蔵庫",
        "reading": "れいぞうこ",
        "cleanReading": "れいぞうこ",
        "romaji": "reizouko",
        "meaning": "ရေခဲသေတ္တာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「冷蔵庫」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「れいぞうこ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရေခဲသေတ္တာ\" (冷蔵庫) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、冷蔵庫について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、れいぞうこについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရေခဲသေတ္တာ (冷蔵庫) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 134,
    "kanji": "庫",
    "strokes": 10,
    "onyomi": "コ",
    "kunyomi": "—",
    "english": "warehouse, safe, garage, refrigerator",
    "romaji": "ko kinko shako souko",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "金庫",
        "cleanWord": "金庫",
        "reading": "きんこ",
        "cleanReading": "きんこ",
        "romaji": "kinko",
        "meaning": "မီးခံသေတ္တာ"
      },
      {
        "word": "車庫",
        "cleanWord": "車庫",
        "reading": "しゃこ",
        "cleanReading": "しゃこ",
        "romaji": "shako",
        "meaning": "ကားဂိုဒေါင်"
      },
      {
        "word": "倉庫",
        "cleanWord": "倉庫",
        "reading": "そうこ",
        "cleanReading": "そうこ",
        "romaji": "souko",
        "meaning": "ဂိုဒေါင် ၊ ကုန်လှောင်ရုံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「金庫」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きんこ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မီးခံသေတ္တာ\" (金庫) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、車庫について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しゃこについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကားဂိုဒေါင် (車庫) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 135,
    "kanji": "型",
    "strokes": 9,
    "onyomi": "—",
    "kunyomi": "かた ・ -がた",
    "english": "model, type, large size, new model",
    "romaji": "kata gata oogata shingata",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "大型",
        "cleanWord": "大型",
        "reading": "おおがた",
        "cleanReading": "おおがた",
        "romaji": "oogata",
        "meaning": "အကြီးစား"
      },
      {
        "word": "新型",
        "cleanWord": "新型",
        "reading": "しんがた",
        "cleanReading": "しんがた",
        "romaji": "shingata",
        "meaning": "ပုံစံအသစ် (New Style)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「大型」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「おおがた」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အကြီးစား\" (大型) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、新型について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しんがたについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပုံစံအသစ် (New Style) (新型) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 136,
    "kanji": "房",
    "strokes": 8,
    "onyomi": "ボウ",
    "kunyomi": "—",
    "english": "heating, air conditioning, stationery",
    "romaji": "bou danbou bunbougu",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "暖房",
        "cleanWord": "暖房",
        "reading": "だんぼう",
        "cleanReading": "だんぼう",
        "romaji": "danbou",
        "meaning": "လေပူပေးစက်"
      },
      {
        "word": "文房具",
        "cleanWord": "文房具",
        "reading": "ぶんぼうぐ",
        "cleanReading": "ぶんぼうぐ",
        "romaji": "bunbougu",
        "meaning": "စာရေးကိရိယာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「暖房」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「だんぼう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လေပူပေးစက်\" (暖房) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、文房具について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ぶんぼうぐについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စာရေးကိရိယာ (文房具) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 137,
    "kanji": "暖",
    "strokes": 13,
    "onyomi": "ダン",
    "kunyomi": "あたた-まる ・ あたた-める ・ あたた-かい",
    "english": "warm, warm up, heating",
    "romaji": "dan atatamaru atatameru atatakai danbou",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "(~が)暖まる",
        "cleanWord": "暖まる",
        "reading": "(~が)あたたまる",
        "cleanReading": "あたたまる",
        "romaji": "atatamaru",
        "meaning": "~ကနွေးလာသည် (အခန်း)"
      },
      {
        "word": "(~を)暖める",
        "cleanWord": "暖める",
        "reading": "(~を)あたためる",
        "cleanReading": "あたためる",
        "romaji": "atatameru",
        "meaning": "~ကိုနွေးသည်၊"
      },
      {
        "word": "暖かい",
        "cleanWord": "暖かい",
        "reading": "あたたかい",
        "cleanReading": "あたたかい",
        "romaji": "atatakai",
        "meaning": "နွေးသော"
      },
      {
        "word": "暖房",
        "cleanWord": "暖房",
        "reading": "だんぼう",
        "cleanReading": "だんぼう",
        "romaji": "danbou",
        "meaning": "လေပူပေးစက်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、暖まるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、あたたまるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကနွေးလာသည် (အခန်း)) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に暖めることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに あたためることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ကိုနွေးသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 138,
    "kanji": "凍",
    "strokes": 10,
    "onyomi": "トウ",
    "kunyomi": "こお-る",
    "english": "freeze, frozen food, freezer",
    "romaji": "tou kooru reitouko reitoushokuhin",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "凍る",
        "cleanWord": "凍る",
        "reading": "こおる",
        "cleanReading": "こおる",
        "romaji": "kooru",
        "meaning": "ရေခဲသည်"
      },
      {
        "word": "冷凍庫",
        "cleanWord": "冷凍庫",
        "reading": "れいとうこ",
        "cleanReading": "れいとうこ",
        "romaji": "reitouko",
        "meaning": "ရေခဲခဲစေသောအဆန်း၊ နေရာ / အခန်း"
      },
      {
        "word": "冷凍食品",
        "cleanWord": "冷凍食品",
        "reading": "れいとうしょくひん",
        "cleanReading": "れいとうしょくひん",
        "romaji": "reitoushokuhin",
        "meaning": "ရေခဲရိုက်ထားသောအစာအစားများ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に凍るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに こおるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရေခဲသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、冷凍庫について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、れいとうこについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရေခဲခဲစေသောအဆန်း (冷凍庫) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 139,
    "kanji": "温",
    "strokes": 12,
    "onyomi": "オン",
    "kunyomi": "あたた-まる ・ あたた-める ・ あたた-かい",
    "english": "warm, temperature, body heat, hot spring",
    "romaji": "on atatamaru atatameru atatakai ondo taion kion onsen",
    "category": "Delivery, Housing & Appliances",
    "categoryJp": "宅配・住居・家電",
    "categoryMm": "ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း",
    "vocab": [
      {
        "word": "(~が)温まる",
        "cleanWord": "温まる",
        "reading": "(~が)あたたまる",
        "cleanReading": "あたたまる",
        "romaji": "atatamaru",
        "meaning": "နွေးလာသည် (ဟင်းချို၊ ဟင်း)"
      },
      {
        "word": "(~を)温める",
        "cleanWord": "温める",
        "reading": "(~を)あたためる",
        "cleanReading": "あたためる",
        "romaji": "atatameru",
        "meaning": "နွေးသည်၊ ပူအောင်လုပ်သည်"
      },
      {
        "word": "温かい",
        "cleanWord": "温かい",
        "reading": "あたたかい",
        "cleanReading": "あたたかい",
        "romaji": "atatakai",
        "meaning": "နွေးသော"
      },
      {
        "word": "温度",
        "cleanWord": "温度",
        "reading": "おんど",
        "cleanReading": "おんど",
        "romaji": "ondo",
        "meaning": "အပူချိန်"
      },
      {
        "word": "体温",
        "cleanWord": "体温",
        "reading": "たいおん",
        "cleanReading": "たいおん",
        "romaji": "taion",
        "meaning": "ကိုယ်အပူချိန်"
      },
      {
        "word": "気温",
        "cleanWord": "気温",
        "reading": "きおん",
        "cleanReading": "きおん",
        "romaji": "kion",
        "meaning": "အပူချိန်"
      },
      {
        "word": "温泉",
        "cleanWord": "温泉",
        "reading": "おんせん",
        "cleanReading": "おんせん",
        "romaji": "onsen",
        "meaning": "ရေပူစမ်း"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、温まるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、あたたまるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (နွေးလာသည် (ဟင်းချို) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に温めることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに あたためることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (နွေးသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 140,
    "kanji": "授",
    "strokes": 11,
    "onyomi": "ジュ",
    "kunyomi": "—",
    "english": "lesson, class, professor, teach",
    "romaji": "ju jugyou kyouju",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "授業",
        "cleanWord": "授業",
        "reading": "じゅぎょう",
        "cleanReading": "じゅぎょう",
        "romaji": "jugyou",
        "meaning": "ကျောင်းစာသင်ခြင်း၊ အတန်းသင်တန်း"
      },
      {
        "word": "教授",
        "cleanWord": "教授",
        "reading": "きょうじゅ",
        "cleanReading": "きょうじゅ",
        "romaji": "kyouju",
        "meaning": "ပါမောက္ခ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「授業」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じゅぎょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကျောင်းစာသင်ခြင်း\" (授業) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、教授について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きょうじゅについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပါမောက္ခ (教授) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 141,
    "kanji": "級",
    "strokes": 9,
    "onyomi": "キュウ",
    "kunyomi": "—",
    "english": "level, grade, class, advanced, beginner",
    "romaji": "kyuu joukyuu shokyuu sankyuu koukyuu",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "上級",
        "cleanWord": "上級",
        "reading": "じょうきゅう",
        "cleanReading": "じょうきゅう",
        "romaji": "joukyuu",
        "meaning": "အဆင့်မြင့်၊ Advanced"
      },
      {
        "word": "初級",
        "cleanWord": "初級",
        "reading": "しょきゅう",
        "cleanReading": "しょきゅう",
        "romaji": "shokyuu",
        "meaning": "အခြေခံအဆင့်၊ Basic"
      },
      {
        "word": "3級",
        "cleanWord": "3級",
        "reading": "さんきゅう",
        "cleanReading": "さんきゅう",
        "romaji": "sankyuu",
        "meaning": "အဆင့်၃ (level 3)"
      },
      {
        "word": "高級(な)",
        "cleanWord": "高級",
        "reading": "こうきゅう(な)",
        "cleanReading": "こうきゅう",
        "romaji": "koukyuu",
        "meaning": "အထက်တန်းကျသော၊ အဆင့်မြင့်သော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「上級」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じょうきゅう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အဆင့်မြင့်\" (上級) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、初級について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょきゅうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အခြေခံအဆင့် (初級) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 142,
    "kanji": "単",
    "strokes": 9,
    "onyomi": "タン",
    "kunyomi": "—",
    "english": "word, vocabulary, academic credit, unit",
    "romaji": "tan tango tani",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "単語",
        "cleanWord": "単語",
        "reading": "たんご",
        "cleanReading": "たんご",
        "romaji": "tango",
        "meaning": "စကားလုံး၊ ဝေါဟာရ"
      },
      {
        "word": "単位",
        "cleanWord": "単位",
        "reading": "たんい",
        "cleanReading": "たんい",
        "romaji": "tani",
        "meaning": "ယူနစ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「単語」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「たんご」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စကားလုံး\" (単語) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、単位について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、たんいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ယူနစ် (単位) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 143,
    "kanji": "法",
    "strokes": 8,
    "onyomi": "ホウ ・ -ポウ",
    "kunyomi": "—",
    "english": "law, grammar, method, way",
    "romaji": "hou pou bunpou houhou hougakubu",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "文法",
        "cleanWord": "文法",
        "reading": "ぶんぽう",
        "cleanReading": "ぶんぽう",
        "romaji": "bunpou",
        "meaning": "သဒ္ဒါ"
      },
      {
        "word": "方法",
        "cleanWord": "方法",
        "reading": "ほうほう",
        "cleanReading": "ほうほう",
        "romaji": "houhou",
        "meaning": "နည်းလမ်း"
      },
      {
        "word": "法学部",
        "cleanWord": "法学部",
        "reading": "ほうがくぶ",
        "cleanReading": "ほうがくぶ",
        "romaji": "hougakubu",
        "meaning": "ဥပဒေဘာသာရပ်ဌာန"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「文法」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ぶんぽう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သဒ္ဒါ\" (文法) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、方法について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ほうほうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နည်းလမ်း (方法) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 144,
    "kanji": "難",
    "strokes": 18,
    "onyomi": "ナン",
    "kunyomi": "むずか-しい",
    "english": "difficult, hard, hardship",
    "romaji": "nan muzukashii konnan",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "難しい",
        "cleanWord": "難しい",
        "reading": "むずかしい",
        "cleanReading": "むずかしい",
        "romaji": "muzukashii",
        "meaning": "ခက်ခဲသော"
      },
      {
        "word": "困難(な)",
        "cleanWord": "困難",
        "reading": "こんなん(な)",
        "cleanReading": "こんなん",
        "romaji": "konnan",
        "meaning": "အခက်အခဲရှိသော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより難しいと感じる人が多いようです。",
        "furigana": "きょうは いつもより むずかしいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ခက်ခဲသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "先生はいつも困難な言葉で説明してくれます。",
        "furigana": "せんせいは いつも こんなんな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း အခက်အခဲရှိသော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 145,
    "kanji": "簡",
    "strokes": 18,
    "onyomi": "カン",
    "kunyomi": "—",
    "english": "simple, easy, brief",
    "romaji": "kan kantan",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "簡単(な)",
        "cleanWord": "簡単",
        "reading": "かんたん(な)",
        "cleanReading": "かんたん",
        "romaji": "kantan",
        "meaning": "လွယ်ကူသော"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても簡単なので、だれでも使えます。",
        "furigana": "この ほうほうは とても かんたんなので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် လွယ်ကူသော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "先生はいつも簡単な言葉で説明してくれます。",
        "furigana": "せんせいは いつも かんたんな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း လွယ်ကူသော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 146,
    "kanji": "専",
    "strokes": 9,
    "onyomi": "セン",
    "kunyomi": "—",
    "english": "specialty, major, specialist, expert",
    "romaji": "sen senmon senmonka",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "専門",
        "cleanWord": "専門",
        "reading": "せんもん",
        "cleanReading": "せんもん",
        "romaji": "senmon",
        "meaning": "အဓိကဘာသာရပ်"
      },
      {
        "word": "専門家",
        "cleanWord": "専門家",
        "reading": "せんもんか",
        "cleanReading": "せんもんか",
        "romaji": "senmonka",
        "meaning": "အတတ်ပညာရှင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「専門」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せんもん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အဓိကဘာသာရပ်\" (専門) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、専門家について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せんもんかについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အတတ်ပညာရှင် (専門家) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 147,
    "kanji": "宿",
    "strokes": 11,
    "onyomi": "シュク",
    "kunyomi": "—",
    "english": "homework, lodging, inn",
    "romaji": "shuku shukudai shukuhaku",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "宿題",
        "cleanWord": "宿題",
        "reading": "しゅくだい",
        "cleanReading": "しゅくだい",
        "romaji": "shukudai",
        "meaning": "အိမ်စာ"
      },
      {
        "word": "宿泊(する)",
        "cleanWord": "宿泊",
        "reading": "しゅくはく(する)",
        "cleanReading": "しゅくはく",
        "romaji": "shukuhaku",
        "meaning": "တည်းခိုသည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「宿題」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しゅくだい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အိမ်စာ\" (宿題) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに宿泊しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに しゅくはくしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း တည်းခိုသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 148,
    "kanji": "受",
    "strokes": 8,
    "onyomi": "ジュ",
    "kunyomi": "う-ける ・ う-かる",
    "english": "receive, take an exam, reception, win a prize",
    "romaji": "ju ukeru ukaru shikenniukeru uketoru uketsuke juken jushin jushou",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "受ける",
        "cleanWord": "受ける",
        "reading": "うける",
        "cleanReading": "うける",
        "romaji": "ukeru",
        "meaning": "လက်ခံယူသည်"
      },
      {
        "word": "試験に受ける",
        "cleanWord": "試験に受ける",
        "reading": "しけんにうける",
        "cleanReading": "しけんにうける",
        "romaji": "shikenniukeru",
        "meaning": "စာမေးပွဲဖြေသည်"
      },
      {
        "word": "受け取る",
        "cleanWord": "受け取る",
        "reading": "うけとる",
        "cleanReading": "うけとる",
        "romaji": "uketoru",
        "meaning": "လက်ခံရရှိသည်၊ နားလည်သဘောပေါက်သည်"
      },
      {
        "word": "受付",
        "cleanWord": "受付",
        "reading": "うけつけ",
        "cleanReading": "うけつけ",
        "romaji": "uketsuke",
        "meaning": "ဧည့်ကြိုကောင်တာ၊ လက်ခံခြင်း"
      },
      {
        "word": "受験",
        "cleanWord": "受験",
        "reading": "じゅけん",
        "cleanReading": "じゅけん",
        "romaji": "juken",
        "meaning": "စာမေးပွဲဖြေခြင်း"
      },
      {
        "word": "受信",
        "cleanWord": "受信",
        "reading": "じゅしん",
        "cleanReading": "じゅしん",
        "romaji": "jushin",
        "meaning": "email, fax ဝင်ခြင်း၊ လက်ခံရှိခြင်း"
      },
      {
        "word": "受賞(する)",
        "cleanWord": "受賞",
        "reading": "じゅしょう(する)",
        "cleanReading": "じゅしょう",
        "romaji": "jushou",
        "meaning": "ဆုရရှိသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に受けるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに うけるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (လက်ခံယူသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで試験に受ける必要があります。",
        "furigana": "じかんが たりないので、いそいで しけんにうける ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (စာမေးပွဲဖြေသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 149,
    "kanji": "般",
    "strokes": 10,
    "onyomi": "ハン ・ パン",
    "kunyomi": "—",
    "english": "general, ordinary, common",
    "romaji": "han pan ippan ippanteki",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "一般",
        "cleanWord": "一般",
        "reading": "いっぱん",
        "cleanReading": "いっぱん",
        "romaji": "ippan",
        "meaning": "သာမန်"
      },
      {
        "word": "一般的(な)",
        "cleanWord": "一般的",
        "reading": "いっぱんてき(な)",
        "cleanReading": "いっぱんてき",
        "romaji": "ippanteki",
        "meaning": "သာမန်ဖြစ်သော၊ ယေဘုယျအားဖြင့်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「一般」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いっぱん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သာမန်\" (一般) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先生はいつも一般的な言葉で説明してくれます。",
        "furigana": "せんせいは いつも いっぱんてきな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း သာမန်ဖြစ်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 150,
    "kanji": "資",
    "strokes": 13,
    "onyomi": "シ",
    "kunyomi": "—",
    "english": "materials, document, qualification, resource",
    "romaji": "shi shiryou shikaku shigen",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "資料",
        "cleanWord": "資料",
        "reading": "しりょう",
        "cleanReading": "しりょう",
        "romaji": "shiryou",
        "meaning": "စာရွက်စာတမ်း"
      },
      {
        "word": "資格",
        "cleanWord": "資格",
        "reading": "しかく",
        "cleanReading": "しかく",
        "romaji": "shikaku",
        "meaning": "အရည်အချင်း"
      },
      {
        "word": "資源",
        "cleanWord": "資源",
        "reading": "しげん",
        "cleanReading": "しげん",
        "romaji": "shigen",
        "meaning": "သယံဇာတပစ္စည်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「資料」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しりょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စာရွက်စာတမ်း\" (資料) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、資格について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しかくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရည်အချင်း (資格) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 151,
    "kanji": "集",
    "strokes": 12,
    "onyomi": "シュウ",
    "kunyomi": "あつ-まる ・ あつ-める",
    "english": "gather, collect, concentrate, photo album",
    "romaji": "shuu atsumaru atsumeru shuugou shuuchuu shuukin shashinshuu shuudan",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "(~が)集まる",
        "cleanWord": "集まる",
        "reading": "(~が)あつまる",
        "cleanReading": "あつまる",
        "romaji": "atsumaru",
        "meaning": "စုသည်၊ စုဝေးရောက်လာသည်၊ စုရုံးသည်"
      },
      {
        "word": "(~を)集める",
        "cleanWord": "集める",
        "reading": "(~を)あつめる",
        "cleanReading": "あつめる",
        "romaji": "atsumeru",
        "meaning": "စုဆောင်းသည်"
      },
      {
        "word": "集合(する)",
        "cleanWord": "集合",
        "reading": "しゅうごう(する)",
        "cleanReading": "しゅうごう",
        "romaji": "shuugou",
        "meaning": "စုဝေးသည်"
      },
      {
        "word": "集中(する)",
        "cleanWord": "集中",
        "reading": "しゅうちゅう(する)",
        "cleanReading": "しゅうちゅう",
        "romaji": "shuuchuu",
        "meaning": "အာရုံစိုက်သည်"
      },
      {
        "word": "集金(する)",
        "cleanWord": "集金",
        "reading": "しゅうきん(する)",
        "cleanReading": "しゅうきん",
        "romaji": "shuukin",
        "meaning": "ငွေကောက်ခံသည်"
      },
      {
        "word": "写真集",
        "cleanWord": "写真集",
        "reading": "しゃしんしゅう",
        "cleanReading": "しゃしんしゅう",
        "romaji": "shashinshuu",
        "meaning": "စုစည်းထားသောဓါတ်ပုံများ၊ ဓါတ်ပုံအယ်လ်ဘမ်"
      },
      {
        "word": "集団",
        "cleanWord": "集団",
        "reading": "しゅうだん",
        "cleanReading": "しゅうだん",
        "romaji": "shuudan",
        "meaning": "လူအုပ်စု"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、集まるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、あつまるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (စုသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に集めることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに あつめることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (စုဆောင်းသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 152,
    "kanji": "辞",
    "strokes": 13,
    "onyomi": "ジ",
    "kunyomi": "や-める",
    "english": "dictionary, quit, resign",
    "romaji": "ji yameru jisho jiten",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "辞書",
        "cleanWord": "辞書",
        "reading": "じしょ",
        "cleanReading": "じしょ",
        "romaji": "jisho",
        "meaning": "အဘိဓာန်"
      },
      {
        "word": "辞典",
        "cleanWord": "辞典",
        "reading": "じてん",
        "cleanReading": "じてん",
        "romaji": "jiten",
        "meaning": "အဘိဓာန်"
      },
      {
        "word": "辞める",
        "cleanWord": "辞める",
        "reading": "やめる",
        "cleanReading": "やめる",
        "romaji": "yameru",
        "meaning": "အလုပ်မှထွက်သည်၊ ရပ်စဲသည်၊ ရပ်ဆိုင်းသည်၊ ဖြတ်သည် (ဆေးလိပ်၊ အရက်)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「辞書」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じしょ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အဘိဓာန်\" (辞書) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、辞典について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じてんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အဘိဓာန် (辞典) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 153,
    "kanji": "情",
    "strokes": 11,
    "onyomi": "ジョウ",
    "kunyomi": "—",
    "english": "information, circumstances, emotion, complaint",
    "romaji": "jou jouhou jijou kanjou kujou",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "情報",
        "cleanWord": "情報",
        "reading": "じょうほう",
        "cleanReading": "じょうほう",
        "romaji": "jouhou",
        "meaning": "သတင်းအချက်အလက်"
      },
      {
        "word": "事情",
        "cleanWord": "事情",
        "reading": "じじょう",
        "cleanReading": "じじょう",
        "romaji": "jijou",
        "meaning": "အကျိုးအကြောင်း"
      },
      {
        "word": "感情",
        "cleanWord": "感情",
        "reading": "かんじょう",
        "cleanReading": "かんじょう",
        "romaji": "kanjou",
        "meaning": "အာရုံခံစားမှု"
      },
      {
        "word": "苦情",
        "cleanWord": "苦情",
        "reading": "くじょう",
        "cleanReading": "くじょう",
        "romaji": "kujou",
        "meaning": "တိုင်တန်းခြင်း၊ ညည်းညူခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「情報」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じょうほう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သတင်းအချက်အလက်\" (情報) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、事情について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じじょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အကျိုးအကြောင်း (事情) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 154,
    "kanji": "整",
    "strokes": 16,
    "onyomi": "セイ",
    "kunyomi": "—",
    "english": "organize, arrange, adjust",
    "romaji": "sei seiri chousei",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "整理",
        "cleanWord": "整理",
        "reading": "せいり",
        "cleanReading": "せいり",
        "romaji": "seiri",
        "meaning": "သပ်ရပ်အောင်ပြုလုပ်ခြင်း"
      },
      {
        "word": "調整(する)",
        "cleanWord": "調整",
        "reading": "ちょうせい(する)",
        "cleanReading": "ちょうせい",
        "romaji": "chousei",
        "meaning": "ညှိသည် (ရက်ညှိခြင်း)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「整理」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せいり」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သပ်ရပ်အောင်ပြုလုပ်ခြင်း\" (整理) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに調整しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ちょうせいしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ညှိသည် (ရက်ညှိခြင်း)ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 155,
    "kanji": "調",
    "strokes": 15,
    "onyomi": "チョウ",
    "kunyomi": "しら-べる",
    "english": "investigate, check, condition, seasoning, adjust",
    "romaji": "chou shiraberu chousa choushi choumiryou chousetsu",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "調べる",
        "cleanWord": "調べる",
        "reading": "しらべる",
        "cleanReading": "しらべる",
        "romaji": "shiraberu",
        "meaning": "စုံစမ်းစစ်ဆေးသည်၊"
      },
      {
        "word": "調査(する)",
        "cleanWord": "調査",
        "reading": "ちょうさ(する)",
        "cleanReading": "ちょうさ",
        "romaji": "chousa",
        "meaning": "စုံစမ်းစစ်ဆေးမှု"
      },
      {
        "word": "調子",
        "cleanWord": "調子",
        "reading": "ちょうし",
        "cleanReading": "ちょうし",
        "romaji": "choushi",
        "meaning": "အခြေအနေ"
      },
      {
        "word": "調味料",
        "cleanWord": "調味料",
        "reading": "ちょうみりょう",
        "cleanReading": "ちょうみりょう",
        "romaji": "choumiryou",
        "meaning": "ဟင်းခတ်အမွှေးအကြိုင်"
      },
      {
        "word": "調節(する)",
        "cleanWord": "調節",
        "reading": "ちょうせつ(する)",
        "cleanReading": "ちょうせつ",
        "romaji": "chousetsu",
        "meaning": "ညှိသည် (အခန်းအပူချိန်)"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に調べるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに しらべるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (စုံစမ်းစစ်ဆေးသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに調査しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ちょうさしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း စုံစမ်းစစ်ဆေးမှုခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 156,
    "kanji": "進",
    "strokes": 11,
    "onyomi": "シン",
    "kunyomi": "すす-む ・ すす-める",
    "english": "advance, proceed, go on to higher school",
    "romaji": "shin susumu susumeru shingaku zenshin",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "(~が)進む",
        "cleanWord": "進む",
        "reading": "(~が)すすむ",
        "cleanReading": "すすむ",
        "romaji": "susumu",
        "meaning": "ရှေ့တိုးသည်"
      },
      {
        "word": "(~を)進める",
        "cleanWord": "進める",
        "reading": "(~を)すすめる",
        "cleanReading": "すすめる",
        "romaji": "susumeru",
        "meaning": "ရှေ့တိုးစေသည်"
      },
      {
        "word": "進学(する)",
        "cleanWord": "進学",
        "reading": "しんがく(する)",
        "cleanReading": "しんがく",
        "romaji": "shingaku",
        "meaning": "ကျောင်းဆက်တက်သည်"
      },
      {
        "word": "前進(する)",
        "cleanWord": "前進",
        "reading": "ぜんしん(する)",
        "cleanReading": "ぜんしん",
        "romaji": "zenshin",
        "meaning": "ရှေ့သို့ချီတက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、進むようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、すすむように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ရှေ့တိုးသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に進めることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに すすめることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ရှေ့တိုးစေသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 157,
    "kanji": "歩",
    "strokes": 8,
    "onyomi": "ホ ・ ポ",
    "kunyomi": "ある-く",
    "english": "walk, progress, step",
    "romaji": "ho po aruku shinpo",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "歩く",
        "cleanWord": "歩く",
        "reading": "あるく",
        "cleanReading": "あるく",
        "romaji": "aruku",
        "meaning": "လမ်းလျှောက်သည်"
      },
      {
        "word": "進歩(する)",
        "cleanWord": "進歩",
        "reading": "しんぽ(する)",
        "cleanReading": "しんぽ",
        "romaji": "shinpo",
        "meaning": "တိုးတက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に歩くようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに あるくように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (လမ်းလျှောက်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに進歩しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに しんぽしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း တိုးတက်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 158,
    "kanji": "歴",
    "strokes": 14,
    "onyomi": "レキ",
    "kunyomi": "—",
    "english": "history, educational background",
    "romaji": "reki rekishi gakureki",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "歴史",
        "cleanWord": "歴史",
        "reading": "れきし",
        "cleanReading": "れきし",
        "romaji": "rekishi",
        "meaning": "သမိုင်း"
      },
      {
        "word": "学歴",
        "cleanWord": "学歴",
        "reading": "がくれき",
        "cleanReading": "がくれき",
        "romaji": "gakureki",
        "meaning": "ပညာရေးသမိုင်း၊ ပညာရေးအတွေ့အကြုံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「歴史」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「れきし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သမိုင်း\" (歴史) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、学歴について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、がくれきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပညာရေးသမိုင်း (学歴) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 159,
    "kanji": "種",
    "strokes": 14,
    "onyomi": "シュ",
    "kunyomi": "たね",
    "english": "seed, kind, type, variety",
    "romaji": "shu tane shurui",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "種",
        "cleanWord": "種",
        "reading": "たね",
        "cleanReading": "たね",
        "romaji": "tane",
        "meaning": "မျိုးစေ့"
      },
      {
        "word": "種類",
        "cleanWord": "種類",
        "reading": "しゅるい",
        "cleanReading": "しゅるい",
        "romaji": "shurui",
        "meaning": "အမျိုးအစား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「種」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「たね」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မျိုးစေ့\" (種) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、種類について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しゅるいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အမျိုးအစား (種類) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 160,
    "kanji": "類",
    "strokes": 18,
    "onyomi": "ルイ",
    "kunyomi": "—",
    "english": "type, category, documents, clothing",
    "romaji": "rui shorui irui",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "書類",
        "cleanWord": "書類",
        "reading": "しょるい",
        "cleanReading": "しょるい",
        "romaji": "shorui",
        "meaning": "စာရွက်စာတမ်း"
      },
      {
        "word": "衣類",
        "cleanWord": "衣類",
        "reading": "いるい",
        "cleanReading": "いるい",
        "romaji": "irui",
        "meaning": "အဝတ်အစား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「書類」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しょるい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စာရွက်စာတမ်း\" (書類) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、衣類について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、いるいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အဝတ်အစား (衣類) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 161,
    "kanji": "変",
    "strokes": 9,
    "onyomi": "ヘン",
    "kunyomi": "か-わる ・ か-える",
    "english": "change, strange, unusual, tough",
    "romaji": "hen kawaru kaeru henka taihen",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "(~が)変わる",
        "cleanWord": "変わる",
        "reading": "(~が)かわる",
        "cleanReading": "かわる",
        "romaji": "kawaru",
        "meaning": "ပြောင်းလဲသည်"
      },
      {
        "word": "(~を)変える",
        "cleanWord": "変える",
        "reading": "(~を)かえる",
        "cleanReading": "かえる",
        "romaji": "kaeru",
        "meaning": "ပြောင်းစေသည်"
      },
      {
        "word": "変化(する)",
        "cleanWord": "変化",
        "reading": "へんか(する)",
        "cleanReading": "へんか",
        "romaji": "henka",
        "meaning": "အပြောင်းအလဲ (ပြောင်းလဲသည်)"
      },
      {
        "word": "変(な)",
        "cleanWord": "変",
        "reading": "へん(な)",
        "cleanReading": "へん",
        "romaji": "hen",
        "meaning": "မူမမှန်သော၊ တစ်မျိုးဖြစ်သော"
      },
      {
        "word": "大変(な)",
        "cleanWord": "大変",
        "reading": "たいへん(な)",
        "cleanReading": "たいへん",
        "romaji": "taihen",
        "meaning": "အလွန်ပင်ပန်းသော၊ ဒုက္ခရောက်သော"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、変わるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、かわるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ပြောင်းလဲသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に変えることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに かえることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ပြောင်းစေသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 162,
    "kanji": "化",
    "strokes": 4,
    "onyomi": "カ ・ ケ",
    "kunyomi": "—",
    "english": "chemistry, culture, makeup, -ification",
    "romaji": "ka ke kagaku bunka keshou kikaika",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "化学",
        "cleanWord": "化学",
        "reading": "かがく",
        "cleanReading": "かがく",
        "romaji": "kagaku",
        "meaning": "ဓာတုဗေဒ"
      },
      {
        "word": "★科学",
        "cleanWord": "科学",
        "reading": "かがく",
        "cleanReading": "かがく",
        "romaji": "kagaku",
        "meaning": "သိပ္ပံ"
      },
      {
        "word": "文化",
        "cleanWord": "文化",
        "reading": "ぶんか",
        "cleanReading": "ぶんか",
        "romaji": "bunka",
        "meaning": "ယဉ်ကျေးမှု"
      },
      {
        "word": "化粧(する)",
        "cleanWord": "化粧",
        "reading": "けしょう(する)",
        "cleanReading": "けしょう",
        "romaji": "keshou",
        "meaning": "အလှပြင်သည်၊ မိတ်ကပ်လိမ်းသည်"
      },
      {
        "word": "機械化(する)",
        "cleanWord": "機械化",
        "reading": "きかいか(する)",
        "cleanReading": "きかいか",
        "romaji": "kikaika",
        "meaning": "စက်ဖြင့်အစားထိုးအသုံးပြုသည်"
      },
      {
        "word": "~化(する)",
        "cleanWord": "化",
        "reading": "~か(する)",
        "cleanReading": "か",
        "romaji": "ka",
        "meaning": "ဖြစ်လာသည်၊ ပြောင်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「化学」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かがく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဓာတုဗေဒ\" (化学) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、科学について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かがくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သိပ္ပံ (科学) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 163,
    "kanji": "解",
    "strokes": 13,
    "onyomi": "カイ",
    "kunyomi": "—",
    "english": "understand, comprehend, solve, solution",
    "romaji": "kai rikai kaiketsu",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "理解(する)",
        "cleanWord": "理解",
        "reading": "りかい(する)",
        "cleanReading": "りかい",
        "romaji": "rikai",
        "meaning": "နားလည်သည်"
      },
      {
        "word": "解決(する)",
        "cleanWord": "解決",
        "reading": "かいけつ(する)",
        "cleanReading": "かいけつ",
        "romaji": "kaiketsu",
        "meaning": "ဖြေရှင်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり理解することが大切です。",
        "furigana": "しごとの まえに しっかり りかいすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ နားလည်သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに解決しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに かいけつしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ဖြေရှင်းသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 164,
    "kanji": "比",
    "strokes": 4,
    "onyomi": "ヒ",
    "kunyomi": "くら-べる",
    "english": "compare, comparison",
    "romaji": "hi kuraberu hikaku",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "比べる",
        "cleanWord": "比べる",
        "reading": "くらべる",
        "cleanReading": "くらべる",
        "romaji": "kuraberu",
        "meaning": "နှိုင်းယှဉ်သည်"
      },
      {
        "word": "比較(する)",
        "cleanWord": "比較",
        "reading": "ひかく(する)",
        "cleanReading": "ひかく",
        "romaji": "hikaku",
        "meaning": "နှိုင်းယှဉ်သည်၊ ယှဉ်ကြည့်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に比べるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに くらべるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (နှိုင်းယှဉ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに比較しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ひかくしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း နှိုင်းယှဉ်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 165,
    "kanji": "課",
    "strokes": 15,
    "onyomi": "カ",
    "kunyomi": "—",
    "english": "lesson, section, task, section chief",
    "romaji": "ka kadai daiikka kachou",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "課題",
        "cleanWord": "課題",
        "reading": "かだい",
        "cleanReading": "かだい",
        "romaji": "kadai",
        "meaning": "ဖြေရှင်းရမည့်ကိစ္စ"
      },
      {
        "word": "第1課",
        "cleanWord": "第1課",
        "reading": "だいいっか",
        "cleanReading": "だいいっか",
        "romaji": "daiikka",
        "meaning": "သင်ခန်းစာ ၁"
      },
      {
        "word": "課長",
        "cleanWord": "課長",
        "reading": "かちょう",
        "cleanReading": "かちょう",
        "romaji": "kachou",
        "meaning": "ဌာနမှူး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「課題」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かだい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဖြေရှင်းရမည့်ကိစ္စ\" (課題) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、第1課について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、だいいっかについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သင်ခန်းစာ ၁ (第1課) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 166,
    "kanji": "形",
    "strokes": 7,
    "onyomi": "ギョウ ・ ケイ",
    "kunyomi": "かたち",
    "english": "shape, form, doll, triangle, rectangle",
    "romaji": "gyou kei katachi ningyou sankakukei shikakukei",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "形",
        "cleanWord": "形",
        "reading": "かたち",
        "cleanReading": "かたち",
        "romaji": "katachi",
        "meaning": "ပုံသဏ္ဌာန်"
      },
      {
        "word": "人形",
        "cleanWord": "人形",
        "reading": "にんぎょう",
        "cleanReading": "にんぎょう",
        "romaji": "ningyou",
        "meaning": "အရုပ်၊ လူရုပ်"
      },
      {
        "word": "三角形",
        "cleanWord": "三角形",
        "reading": "さんかくけい",
        "cleanReading": "さんかくけい",
        "romaji": "sankakukei",
        "meaning": "တြိဂံ ၊ သုံးထောင့်ပုံ"
      },
      {
        "word": "四角形",
        "cleanWord": "四角形",
        "reading": "しかくけい",
        "cleanReading": "しかくけい",
        "romaji": "shikakukei",
        "meaning": "စတုဂံ၊ လေးထောင့်ပုံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「形」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かたち」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပုံသဏ္ဌာန်\" (形) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、人形について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、にんぎょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရုပ် (人形) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 167,
    "kanji": "答",
    "strokes": 12,
    "onyomi": "トウ",
    "kunyomi": "こた-える ・ こた-え",
    "english": "answer, solution, correct answer",
    "romaji": "tou kotaeru kotae kaitou seitou",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "解答(する)",
        "cleanWord": "解答",
        "reading": "かいとう(する)",
        "cleanReading": "かいとう",
        "romaji": "kaitou",
        "meaning": "ဖြေရှင်းသည်၊ ဖြေသည်"
      },
      {
        "word": "正答",
        "cleanWord": "正答",
        "reading": "せいとう",
        "cleanReading": "せいとう",
        "romaji": "seitou",
        "meaning": "အဖြေမှန်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり解答することが大切です。",
        "furigana": "しごとの まえに しっかり かいとうすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ဖြေရှင်းသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、正答について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せいとうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အဖြေမှန် (正答) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 168,
    "kanji": "準",
    "strokes": 13,
    "onyomi": "ジュン",
    "kunyomi": "—",
    "english": "prepare, preparation, semi-",
    "romaji": "jun junbi",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "準備(する)",
        "cleanWord": "準備",
        "reading": "じゅんび",
        "cleanReading": "じゅんび",
        "romaji": "junbi",
        "meaning": "ကြိုတင်ပြင်ဆင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり準備することが大切です。",
        "furigana": "しごとの まえに しっかり じゅんびすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ကြိုတင်ပြင်ဆင်သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに準備しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに じゅんびしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ကြိုတင်ပြင်ဆင်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 169,
    "kanji": "備",
    "strokes": 12,
    "onyomi": "ビ",
    "kunyomi": "そな-える",
    "english": "prepare, equip, facilities",
    "romaji": "bi sonaeru setsubi",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "(~に)備える",
        "cleanWord": "備える",
        "reading": "(~に)そなえる",
        "cleanReading": "そなえる",
        "romaji": "sonaeru",
        "meaning": "အသင့်ပြင်ဆင်သည်"
      },
      {
        "word": "設備",
        "cleanWord": "設備",
        "reading": "せつび",
        "cleanReading": "せつび",
        "romaji": "setsubi",
        "meaning": "လိုအပ်သောအထောက်အပံ့၊ ပစ္စည်း၊ ကိရိယာ၊ စက်ပစ္စည်း (facility)"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に備えるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに そなえるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (အသင့်ပြင်ဆင်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、設備について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せつびについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လိုအပ်သောအထောက်အပံ့ (設備) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 170,
    "kanji": "期",
    "strokes": 12,
    "onyomi": "キ",
    "kunyomi": "—",
    "english": "period, term, semester, expect",
    "romaji": "ki kikan tanki gakki jiki kitai",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "期間",
        "cleanWord": "期間",
        "reading": "きかん",
        "cleanReading": "きかん",
        "romaji": "kikan",
        "meaning": "ကာလအပိုင်းအခြား"
      },
      {
        "word": "短期",
        "cleanWord": "短期",
        "reading": "たんき",
        "cleanReading": "たんき",
        "romaji": "tanki",
        "meaning": "တိုတောင်းသောကာလ"
      },
      {
        "word": "学期",
        "cleanWord": "学期",
        "reading": "がっき",
        "cleanReading": "がっき",
        "romaji": "gakki",
        "meaning": "ပညာသင်နှစ်"
      },
      {
        "word": "時期",
        "cleanWord": "時期",
        "reading": "じき",
        "cleanReading": "じき",
        "romaji": "jiki",
        "meaning": "အချိန်ကာလ၊ ကာလအပိုင်းအခြား"
      },
      {
        "word": "期待(する)",
        "cleanWord": "期待",
        "reading": "きたい(する)",
        "cleanReading": "きたい",
        "romaji": "kitai",
        "meaning": "မျှော်လင့်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「期間」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きかん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကာလအပိုင်းအခြား\" (期間) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、短期について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、たんきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တိုတောင်းသောကာလ (短期) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 171,
    "kanji": "限",
    "strokes": 9,
    "onyomi": "ゲン",
    "kunyomi": "かぎ-る",
    "english": "limit, restrict, bound",
    "romaji": "gen kagiru gentei seigen",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "限る",
        "cleanWord": "限る",
        "reading": "かぎる",
        "cleanReading": "かぎる",
        "romaji": "kagiru",
        "meaning": "ကန့်သတ်သည်"
      },
      {
        "word": "限定(する)",
        "cleanWord": "限定",
        "reading": "げんてい(する)",
        "cleanReading": "げんてい",
        "romaji": "gentei",
        "meaning": "(ပမာဏ၊ ဘောင်၊ အရေအတွက်) ကိုကန့်သတ်သည်"
      },
      {
        "word": "制限(する)",
        "cleanWord": "制限",
        "reading": "せいげん(する)",
        "cleanReading": "せいげん",
        "romaji": "seigen",
        "meaning": "အကန့်အသတ်ထားသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に限るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに かぎるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကန့်သတ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに限定しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに げんていしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း (ပမာဏခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 172,
    "kanji": "数",
    "strokes": 13,
    "onyomi": "スウ ・ -ズウ",
    "kunyomi": "かぞ-える ・ かず",
    "english": "number, count, math, score, headcount",
    "romaji": "suu zuu kazoeru kazu suuji suugaku suuryou tensuu suukagetsu ninzuu",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "数える",
        "cleanWord": "数える",
        "reading": "かぞえる",
        "cleanReading": "かぞえる",
        "romaji": "kazoeru",
        "meaning": "ရေတွက်သည်"
      },
      {
        "word": "数",
        "cleanWord": "数",
        "reading": "かず",
        "cleanReading": "かず",
        "romaji": "kazu",
        "meaning": "အရေအတွက်"
      },
      {
        "word": "数字",
        "cleanWord": "数字",
        "reading": "すうじ",
        "cleanReading": "すうじ",
        "romaji": "suuji",
        "meaning": "ကိန်းဂဏန်း"
      },
      {
        "word": "数学",
        "cleanWord": "数学",
        "reading": "すうがく",
        "cleanReading": "すうがく",
        "romaji": "suugaku",
        "meaning": "သင်္ချာ"
      },
      {
        "word": "数量",
        "cleanWord": "数量",
        "reading": "すうりょう",
        "cleanReading": "すうりょう",
        "romaji": "suuryou",
        "meaning": "အရေအတွက်၊ ပမာဏ"
      },
      {
        "word": "点数",
        "cleanWord": "点数",
        "reading": "てんすう",
        "cleanReading": "てんすう",
        "romaji": "tensuu",
        "meaning": "အမှတ်"
      },
      {
        "word": "数か月",
        "cleanWord": "数か月",
        "reading": "すうかげつ",
        "cleanReading": "すうかげつ",
        "romaji": "suukagetsu",
        "meaning": "လအနည်းငယ်"
      },
      {
        "word": "人数",
        "cleanWord": "人数",
        "reading": "にんずう",
        "cleanReading": "にんずう",
        "romaji": "ninzuu",
        "meaning": "လူဦးရေအရေအတွက်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に数えるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに かぞえるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရေတွက်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、数について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かずについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရေအတွက် (数) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 173,
    "kanji": "販",
    "strokes": 11,
    "onyomi": "ハン",
    "kunyomi": "—",
    "english": "sell, sales, vending machine",
    "romaji": "han hanbai jidouhanbaiki",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "販売(する)",
        "cleanWord": "販売",
        "reading": "はんばい(する)",
        "cleanReading": "はんばい",
        "romaji": "hanbai",
        "meaning": "ရောင်းချသည်"
      },
      {
        "word": "自動販売機",
        "cleanWord": "自動販売機",
        "reading": "じどうはんばいき",
        "cleanReading": "じどうはんばいき",
        "romaji": "jidouhanbaiki",
        "meaning": "မုန့်၊ အချိုရည်ဘူး၊ သတင်းစာစသည်တို့ကိုအလိုအလျောက်ရောင်းသောစက်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり販売することが大切です。",
        "furigana": "しごとの まえに しっかり はんばいすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ရောင်းချသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、自動販売機について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じどうはんばいきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မုန့် (自動販売機) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 174,
    "kanji": "値",
    "strokes": 10,
    "onyomi": "チ",
    "kunyomi": "ね",
    "english": "price, cost, raise price, value, worth",
    "romaji": "chi ne nedan neage nesage kachi",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "値段",
        "cleanWord": "値段",
        "reading": "ねだん",
        "cleanReading": "ねだん",
        "romaji": "nedan",
        "meaning": "ဈေးနှုန်း"
      },
      {
        "word": "値上げ(する)",
        "cleanWord": "値上げ",
        "reading": "ねあげ(する)",
        "cleanReading": "ねあげ",
        "romaji": "neage",
        "meaning": "ဈေးမြှင့်သည်"
      },
      {
        "word": "値下げ(する)",
        "cleanWord": "値下げ",
        "reading": "ねさげ(する)",
        "cleanReading": "ねさげ",
        "romaji": "nesage",
        "meaning": "ဈေးချသည်"
      },
      {
        "word": "価値",
        "cleanWord": "価値",
        "reading": "かち",
        "cleanReading": "かち",
        "romaji": "kachi",
        "meaning": "တန်ဖိုး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「値段」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ねだん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဈေးနှုန်း\" (値段) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに値上げしました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ねあげしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ဈေးမြှင့်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 175,
    "kanji": "容",
    "strokes": 10,
    "onyomi": "ヨウ",
    "kunyomi": "—",
    "english": "content, container, beauty salon, easy",
    "romaji": "you naiyou youki biyou biyouin youi",
    "category": "Education, Study & Information",
    "categoryJp": "教育・学習・情報",
    "categoryMm": "ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်",
    "vocab": [
      {
        "word": "内容",
        "cleanWord": "内容",
        "reading": "ないよう",
        "cleanReading": "ないよう",
        "romaji": "naiyou",
        "meaning": "အကြောင်းအရာ၊ အနှစ်သာရ"
      },
      {
        "word": "容器",
        "cleanWord": "容器",
        "reading": "ようき",
        "cleanReading": "ようき",
        "romaji": "youki",
        "meaning": "ထည့်စရာဘူး၊ ခွက်"
      },
      {
        "word": "美容",
        "cleanWord": "美容",
        "reading": "びよう",
        "cleanReading": "びよう",
        "romaji": "biyou",
        "meaning": "အလှပြင်ခြင်း"
      },
      {
        "word": "美容院",
        "cleanWord": "美容院",
        "reading": "びよういん",
        "cleanReading": "びよういん",
        "romaji": "biyouin",
        "meaning": "အလှပြင်ဆိုင်"
      },
      {
        "word": "容易(な)",
        "cleanWord": "容易",
        "reading": "ようい(な)",
        "cleanReading": "ようい",
        "romaji": "youi",
        "meaning": "လွယ်ကူသော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「内容」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ないよう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အကြောင်းအရာ\" (内容) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、容器について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ようきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ထည့်စရာဘူး (容器) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 176,
    "kanji": "球",
    "strokes": 11,
    "onyomi": "キュウ",
    "kunyomi": "—",
    "english": "ball, baseball, earth, light bulb",
    "romaji": "kyuu yakyuu chikyuu denkyuu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "野球",
        "cleanWord": "野球",
        "reading": "やきゅう",
        "cleanReading": "やきゅう",
        "romaji": "yakyuu",
        "meaning": "ဘေ့စ်ဘော"
      },
      {
        "word": "地球",
        "cleanWord": "地球",
        "reading": "ちきゅう",
        "cleanReading": "ちきゅう",
        "romaji": "chikyuu",
        "meaning": "ကမ္ဘာမြေကြီး"
      },
      {
        "word": "電球",
        "cleanWord": "電球",
        "reading": "でんきゅう",
        "cleanReading": "でんきゅう",
        "romaji": "denkyuu",
        "meaning": "မီးလုံး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「野球」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「やきゅう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဘေ့စ်ဘော\" (野球) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、地球について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ちきゅうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကမ္ဘာမြေကြီး (地球) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 177,
    "kanji": "練",
    "strokes": 14,
    "onyomi": "レン",
    "kunyomi": "—",
    "english": "practice, training, drill",
    "romaji": "ren renshuu kunren",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "練習(する)",
        "cleanWord": "練習",
        "reading": "れんしゅう(する)",
        "cleanReading": "れんしゅう",
        "romaji": "renshuu",
        "meaning": "လေ့ကျင့်ခန်း (လုပ်သည်)"
      },
      {
        "word": "訓練(する)",
        "cleanWord": "訓練",
        "reading": "くんれん(する)",
        "cleanReading": "くんれん",
        "romaji": "kunren",
        "meaning": "လေ့ကျင့်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり練習することが大切です。",
        "furigana": "しごとの まえに しっかり れんしゅうすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ လေ့ကျင့်ခန်း (လုပ်သည်)ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに訓練しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに くんれんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း လေ့ကျင့်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 178,
    "kanji": "疲",
    "strokes": 10,
    "onyomi": "ヒ",
    "kunyomi": "つか-れる",
    "english": "tired, fatigue, exhausted",
    "romaji": "hi tsukareru tsukare hirou",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "疲れる",
        "cleanWord": "疲れる",
        "reading": "つかれる",
        "cleanReading": "つかれる",
        "romaji": "tsukareru",
        "meaning": "ပင်ပန်းသည်၊ မောသည်"
      },
      {
        "word": "疲れ",
        "cleanWord": "疲れ",
        "reading": "つかれ",
        "cleanReading": "つかれ",
        "romaji": "tsukare",
        "meaning": "ပင်ပန်းခြင်း၊ မောပန်းခြင်း"
      },
      {
        "word": "疲労",
        "cleanWord": "疲労",
        "reading": "ひろう",
        "cleanReading": "ひろう",
        "romaji": "hirou",
        "meaning": "မောပန်းခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に疲れるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに つかれるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပင်ပန်းသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、疲れについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、つかれについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပင်ပန်းခြင်း (疲れ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 179,
    "kanji": "運",
    "strokes": 12,
    "onyomi": "ウン",
    "kunyomi": "はこ-ぶ",
    "english": "carry, transport, exercise, drive, luck",
    "romaji": "un hakobu undou unten",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "運ぶ",
        "cleanWord": "運ぶ",
        "reading": "はこぶ",
        "cleanReading": "はこぶ",
        "romaji": "hakobu",
        "meaning": "သယ်ဆောင်သည်"
      },
      {
        "word": "運動(する)",
        "cleanWord": "運動",
        "reading": "うんどう(する)",
        "cleanReading": "うんどう",
        "romaji": "undou",
        "meaning": "အားကစား (လုပ်သည်)"
      },
      {
        "word": "運転(する)",
        "cleanWord": "運転",
        "reading": "うんてん(する)",
        "cleanReading": "うんてん",
        "romaji": "unten",
        "meaning": "ကားမောင်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に運ぶようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに はこぶように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (သယ်ဆောင်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに運動しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに うんどうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အားကစား (လုပ်သည်)ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 180,
    "kanji": "汗",
    "strokes": 6,
    "onyomi": "—",
    "kunyomi": "あせ",
    "english": "sweat, perspiration",
    "romaji": "ase",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "汗",
        "cleanWord": "汗",
        "reading": "あせ",
        "cleanReading": "あせ",
        "romaji": "ase",
        "meaning": "ချွေး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「汗」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「あせ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ချွေး\" (汗) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、汗について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、あせについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ချွေး (汗) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 181,
    "kanji": "初",
    "strokes": 7,
    "onyomi": "ショ",
    "kunyomi": "はじ-め",
    "english": "first time, beginning, elementary",
    "romaji": "sho hajime hajimete saisho shokyuu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "初めて",
        "cleanWord": "初めて",
        "reading": "はじめて",
        "cleanReading": "はじめて",
        "romaji": "hajimete",
        "meaning": "ပထမဦးဆုံးအကြိမ်"
      },
      {
        "word": "初め",
        "cleanWord": "初め",
        "reading": "はじめ",
        "cleanReading": "はじめ",
        "romaji": "hajime",
        "meaning": "အစ"
      },
      {
        "word": "最初",
        "cleanWord": "最初",
        "reading": "さいしょ",
        "cleanReading": "さいしょ",
        "romaji": "saisho",
        "meaning": "ဦးစွာ၊ ဦးဆုံး"
      },
      {
        "word": "初級",
        "cleanWord": "初級",
        "reading": "しょきゅう",
        "cleanReading": "しょきゅう",
        "romaji": "shokyuu",
        "meaning": "အခြေခံအဆင့်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「初めて」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「はじめて」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပထမဦးဆုံးအကြိမ်\" (初めて) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、初めについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、はじめについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အစ (初め) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 182,
    "kanji": "技",
    "strokes": 7,
    "onyomi": "ギ",
    "kunyomi": "—",
    "english": "skill, technology, engineer",
    "romaji": "gi gijutsu gijutsusha",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "技術",
        "cleanWord": "技術",
        "reading": "ぎじゅつ",
        "cleanReading": "ぎじゅつ",
        "romaji": "gijutsu",
        "meaning": "နည်းပညာ"
      },
      {
        "word": "技術者",
        "cleanWord": "技術者",
        "reading": "ぎじゅつしゃ",
        "cleanReading": "ぎじゅつしゃ",
        "romaji": "gijutsusha",
        "meaning": "နည်းပညာရှင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「技術」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ぎじゅつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နည်းပညာ\" (技術) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、技術者について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ぎじゅつしゃについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နည်းပညာရှင် (技術者) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 183,
    "kanji": "術",
    "strokes": 11,
    "onyomi": "ジュツ",
    "kunyomi": "—",
    "english": "art, technique, surgery, museum",
    "romaji": "jutsu shujutsu bijutsu bijutsukan geijutsu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "手術",
        "cleanWord": "手術",
        "reading": "しゅじゅつ",
        "cleanReading": "しゅじゅつ",
        "romaji": "shujutsu",
        "meaning": "ခွဲစိတ်ခြင်း"
      },
      {
        "word": "美術",
        "cleanWord": "美術",
        "reading": "びじゅつ",
        "cleanReading": "びじゅつ",
        "romaji": "bijutsu",
        "meaning": "အနုပညာ (ပန်းပု၊ ပန်းချီစသည့်)"
      },
      {
        "word": "美術館",
        "cleanWord": "美術館",
        "reading": "びじゅつかん",
        "cleanReading": "びじゅつかん",
        "romaji": "bijutsukan",
        "meaning": "အနုပညာပြတိုက်၊ ပန်းချီပြတိုက်"
      },
      {
        "word": "芸術",
        "cleanWord": "芸術",
        "reading": "げいじゅつ",
        "cleanReading": "げいじゅつ",
        "romaji": "geijutsu",
        "meaning": "အနုပညာ (စာပေ၊ ဂီတ၊ ပြဇာတ်...)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「手術」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しゅじゅつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ခွဲစိတ်ခြင်း\" (手術) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、美術について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、びじゅつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အနုပညာ (ပန်းပု (美術) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 184,
    "kanji": "始",
    "strokes": 8,
    "onyomi": "シ",
    "kunyomi": "はじ-まる ・ はじ-める",
    "english": "begin, start, commencement",
    "romaji": "shi hajimaru hajimeru kaishi",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~が)始まる",
        "cleanWord": "始まる",
        "reading": "(~が)はじまる",
        "cleanReading": "はじまる",
        "romaji": "hajimaru",
        "meaning": "စတင်နေသည်"
      },
      {
        "word": "(~を)始める",
        "cleanWord": "始める",
        "reading": "(~を)はじめる",
        "cleanReading": "はじめる",
        "romaji": "hajimeru",
        "meaning": "စတင်သည်"
      },
      {
        "word": "開始",
        "cleanWord": "開始",
        "reading": "かいし",
        "cleanReading": "かいし",
        "romaji": "kaishi",
        "meaning": "စတင်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、始まるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、はじまるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (စတင်နေသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に始めることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに はじめることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (စတင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 185,
    "kanji": "客",
    "strokes": 9,
    "onyomi": "キャク",
    "kunyomi": "—",
    "english": "guest, customer, passenger, audience",
    "romaji": "kyaku okyakusama joukyaku kankyaku",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "客",
        "cleanWord": "客",
        "reading": "きゃく",
        "cleanReading": "きゃく",
        "romaji": "kyaku",
        "meaning": "ဧည့်သည်"
      },
      {
        "word": "お客様",
        "cleanWord": "お客様",
        "reading": "おきゃくさま",
        "cleanReading": "おきゃくさま",
        "romaji": "okyakusama",
        "meaning": "ဖောက်သည်၊ ဧည့်သည်"
      },
      {
        "word": "乗客",
        "cleanWord": "乗客",
        "reading": "じょうきゃく",
        "cleanReading": "じょうきゃく",
        "romaji": "joukyaku",
        "meaning": "ယာဉ်စီးခရီးသည်"
      },
      {
        "word": "観客",
        "cleanWord": "観客",
        "reading": "かんきゃく",
        "cleanReading": "かんきゃく",
        "romaji": "kankyaku",
        "meaning": "ဧည့်ပရိသတ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「客」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きゃく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဧည့်သည်\" (客) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、お客様について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おきゃくさまについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဖောက်သည် (お客様) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 186,
    "kanji": "合",
    "strokes": 6,
    "onyomi": "ゴウ",
    "kunyomi": "あ-う",
    "english": "match, fit, discuss, pass exam, case",
    "romaji": "gou au shiai hanashiau baai goukaku fugoukaku",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "試合",
        "cleanWord": "試合",
        "reading": "しあい",
        "cleanReading": "しあい",
        "romaji": "shiai",
        "meaning": "ပြိုင်ပွဲ"
      },
      {
        "word": "(~に)合う",
        "cleanWord": "合う",
        "reading": "(~に)あう",
        "cleanReading": "あう",
        "romaji": "au",
        "meaning": "ကိုက်ညီသည်၊ လိုက်ဖက်သည်"
      },
      {
        "word": "話し合う",
        "cleanWord": "話し合う",
        "reading": "はなしあう",
        "cleanReading": "はなしあう",
        "romaji": "hanashiau",
        "meaning": "အပြန်အလှန်စကားပြောသည်"
      },
      {
        "word": "場合",
        "cleanWord": "場合",
        "reading": "ばあい",
        "cleanReading": "ばあい",
        "romaji": "baai",
        "meaning": "အချိန်အခါ၊ ကိစ္စ"
      },
      {
        "word": "合格(する)",
        "cleanWord": "合格",
        "reading": "ごうかく(する)",
        "cleanReading": "ごうかく",
        "romaji": "goukaku",
        "meaning": "စာမေးပွဲအောင်သည်"
      },
      {
        "word": "不合格",
        "cleanWord": "不合格",
        "reading": "ふごうかく",
        "cleanReading": "ふごうかく",
        "romaji": "fugoukaku",
        "meaning": "စာမေးပွဲမအောင်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「試合」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しあい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပြိုင်ပွဲ\" (試合) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで合う必要があります。",
        "furigana": "じかんが たりないので、いそいで あう ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ကိုက်ညီသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 187,
    "kanji": "式",
    "strokes": 6,
    "onyomi": "シキ",
    "kunyomi": "—",
    "english": "ceremony, wedding, style, form",
    "romaji": "shiki kaikaishiki nyuugakushiki kekkonshiki keishiki",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "開会式",
        "cleanWord": "開会式",
        "reading": "かいかいしき",
        "cleanReading": "かいかいしき",
        "romaji": "kaikaishiki",
        "meaning": "ဖွင့်ပွဲ"
      },
      {
        "word": "入学式",
        "cleanWord": "入学式",
        "reading": "にゅうがくしき",
        "cleanReading": "にゅうがくしき",
        "romaji": "nyuugakushiki",
        "meaning": "ကျောင်းဝင်ခွင့်အခမ်းအနား"
      },
      {
        "word": "結婚式",
        "cleanWord": "結婚式",
        "reading": "けっこんしき",
        "cleanReading": "けっこんしき",
        "romaji": "kekkonshiki",
        "meaning": "လက်ထပ်ပွဲ၊ မင်္ဂလာဆောင်"
      },
      {
        "word": "形式",
        "cleanWord": "形式",
        "reading": "けいしき",
        "cleanReading": "けいしき",
        "romaji": "keishiki",
        "meaning": "ပုံစံ၊ အပြင်ပိုင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「開会式」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かいかいしき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဖွင့်ပွဲ\" (開会式) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、入学式について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、にゅうがくしきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကျောင်းဝင်ခွင့်အခမ်းအနား (入学式) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 188,
    "kanji": "勝",
    "strokes": 12,
    "onyomi": "ショウ",
    "kunyomi": "か-つ ・ かつ",
    "english": "win, victory, championship, selfish",
    "romaji": "shou katsu katte yuushou",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~に)勝つ",
        "cleanWord": "勝つ",
        "reading": "(~に)かつ",
        "cleanReading": "かつ",
        "romaji": "katsu",
        "meaning": "နိုင်သည်"
      },
      {
        "word": "勝手(な)",
        "cleanWord": "勝手",
        "reading": "かって(な)",
        "cleanReading": "かって",
        "romaji": "katte",
        "meaning": "တဖက်သတ်ဆန်သော"
      },
      {
        "word": "優勝(する)",
        "cleanWord": "優勝",
        "reading": "ゆうしょう(する)",
        "cleanReading": "ゆうしょう",
        "romaji": "yuushou",
        "meaning": "ဗိုလ်ဆွဲခြင်း၊ အနိုင်ရခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に勝つようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに かつように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (နိုင်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先生はいつも勝手な言葉で説明してくれます。",
        "furigana": "せんせいは いつも かってな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း တဖက်သတ်ဆန်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 189,
    "kanji": "相",
    "strokes": 9,
    "onyomi": "ソウ ・ ショウ",
    "kunyomi": "あい",
    "english": "partner, opponent, consult, prime minister",
    "romaji": "sou shou ai aite soudan shushou",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "相手",
        "cleanWord": "相手",
        "reading": "あいて",
        "cleanReading": "あいて",
        "romaji": "aite",
        "meaning": "တဖက်လူ၊ တဖက်သား"
      },
      {
        "word": "相談(する)",
        "cleanWord": "相談",
        "reading": "そうだん(する)",
        "cleanReading": "そうだん",
        "romaji": "soudan",
        "meaning": "တိုင်ပင်ဆွေးနွေးသည်"
      },
      {
        "word": "首相",
        "cleanWord": "首相",
        "reading": "しゅしょう",
        "cleanReading": "しゅしょう",
        "romaji": "shushou",
        "meaning": "ဝန်ကြီးချုပ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「相手」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「あいて」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တဖက်လူ\" (相手) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに相談しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに そうだんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း တိုင်ပင်ဆွေးနွေးသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 190,
    "kanji": "位",
    "strokes": 7,
    "onyomi": "イ",
    "kunyomi": "—",
    "english": "rank, place, position, location",
    "romaji": "i nii ichi",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "2位",
        "cleanWord": "2位",
        "reading": "にい",
        "cleanReading": "にい",
        "romaji": "nii",
        "meaning": "အဆင့် ၂"
      },
      {
        "word": "位置",
        "cleanWord": "位置",
        "reading": "いち",
        "cleanReading": "いち",
        "romaji": "ichi",
        "meaning": "တည်နေရာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「2位」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「にい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အဆင့် ၂\" (2位) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、位置について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、いちについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တည်နေရာ (位置) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 191,
    "kanji": "対",
    "strokes": 7,
    "onyomi": "タイ",
    "kunyomi": "—",
    "english": "versus, opposite, oppose, absolutely",
    "romaji": "tai ichitaisan hantai zettai",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "1対3",
        "cleanWord": "1対3",
        "reading": "いちたいさん",
        "cleanReading": "いちたいさん",
        "romaji": "ichitaisan",
        "meaning": "၁ အချိုး ၃ (၁:၃)"
      },
      {
        "word": "反対",
        "cleanWord": "反対",
        "reading": "はんたい",
        "cleanReading": "はんたい",
        "romaji": "hantai",
        "meaning": "ဆန့်ကျင်ခြင်း"
      },
      {
        "word": "絶対(に)",
        "cleanWord": "絶対",
        "reading": "ぜったい(に)",
        "cleanReading": "ぜったい",
        "romaji": "zettai",
        "meaning": "လုံးဝ၊ သေချာပေါက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「1対3」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いちたいさん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"၁ အချိုး ၃ (၁:၃)\" (1対3) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、反対について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、はんたいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆန့်ကျင်ခြင်း (反対) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 192,
    "kanji": "選",
    "strokes": 15,
    "onyomi": "セン",
    "kunyomi": "えら-ぶ",
    "english": "choose, select, player, athlete, election",
    "romaji": "sen erabu senshu senkyo",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "選ぶ",
        "cleanWord": "選ぶ",
        "reading": "えらぶ",
        "cleanReading": "えらぶ",
        "romaji": "erabu",
        "meaning": "ရွေးချယ်သည်"
      },
      {
        "word": "選手",
        "cleanWord": "選手",
        "reading": "せんしゅ",
        "cleanReading": "せんしゅ",
        "romaji": "senshu",
        "meaning": "လက်ရွေးစင်အားကစားသမား"
      },
      {
        "word": "選挙",
        "cleanWord": "選挙",
        "reading": "せんきょ",
        "cleanReading": "せんきょ",
        "romaji": "senkyo",
        "meaning": "ရွေးကောက်ပွဲ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に選ぶようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに えらぶように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရွေးချယ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、選手について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せんしゅについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လက်ရွေးစင်အားကစားသမား (選手) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 193,
    "kanji": "負",
    "strokes": 9,
    "onyomi": "フ ・ ブ",
    "kunyomi": "まけ-る",
    "english": "lose, defeat, match, contest",
    "romaji": "fu bu makeru shoubu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~に)負ける",
        "cleanWord": "負ける",
        "reading": "(~に)まける",
        "cleanReading": "まける",
        "romaji": "makeru",
        "meaning": "ရှုံးနိမ့်သည်"
      },
      {
        "word": "勝負",
        "cleanWord": "勝負",
        "reading": "しょうぶ",
        "cleanReading": "しょうぶ",
        "romaji": "shoubu",
        "meaning": "အနိုင်အရှုံးပြိုင်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に負けるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに まけるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရှုံးနိမ့်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、勝負について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょうぶについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အနိုင်အရှုံးပြိုင်ခြင်း (勝負) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 194,
    "kanji": "戦",
    "strokes": 13,
    "onyomi": "セン",
    "kunyomi": "たたか-う",
    "english": "fight, battle, war, postwar",
    "romaji": "sen tatakau tatakai amerikasen sensou sengo",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~と)戦う",
        "cleanWord": "戦う",
        "reading": "(~と)たたかう",
        "cleanReading": "たたかう",
        "romaji": "tatakau",
        "meaning": "တိုက်ခိုက်သည်"
      },
      {
        "word": "戦い",
        "cleanWord": "戦い",
        "reading": "たたかい",
        "cleanReading": "たたかい",
        "romaji": "tatakai",
        "meaning": "တိုက်ခိုက်သော၊ စစ်ပွဲဖြစ်သော"
      },
      {
        "word": "アメリカ戦",
        "cleanWord": "アメリカ戦",
        "reading": "アメリカせん",
        "cleanReading": "アメリカせん",
        "romaji": "amerikasen",
        "meaning": "အမေရိကန်စစ်ပွဲ"
      },
      {
        "word": "戦争",
        "cleanWord": "戦争",
        "reading": "せんそう",
        "cleanReading": "せんそう",
        "romaji": "sensou",
        "meaning": "စစ်ပွဲ"
      },
      {
        "word": "戦後",
        "cleanWord": "戦後",
        "reading": "せんご",
        "cleanReading": "せんご",
        "romaji": "sengo",
        "meaning": "စစ်ပြီးသည့်နောက်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に戦うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに たたかうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (တိုက်ခိုက်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "あまり戦い場合は、無理をしないで休んでください。",
        "furigana": "あまり たたかい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း တိုက်ခိုက်သော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 195,
    "kanji": "友",
    "strokes": 4,
    "onyomi": "ユウ",
    "kunyomi": "とも",
    "english": "friend, companion, close friend",
    "romaji": "yuu tomo tomodachi yuujin shinyuu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "友達",
        "cleanWord": "友達",
        "reading": "ともだち",
        "cleanReading": "ともだち",
        "romaji": "tomodachi",
        "meaning": "သူငယ်ချင်း"
      },
      {
        "word": "友人",
        "cleanWord": "友人",
        "reading": "ゆうじん",
        "cleanReading": "ゆうじん",
        "romaji": "yuujin",
        "meaning": "အသိမိတ်ဆွေ၊ သူငယ်ချင်း"
      },
      {
        "word": "親友",
        "cleanWord": "親友",
        "reading": "しんゆう",
        "cleanReading": "しんゆう",
        "romaji": "shinyuu",
        "meaning": "ခင်မင်ရင်းနှီးသူ၊ အပေါင်းအသင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「友達」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ともだち」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သူငယ်ချင်း\" (友達) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、友人について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ゆうじんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အသိမိတ်ဆွေ (友人) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 196,
    "kanji": "救",
    "strokes": 11,
    "onyomi": "キュウ",
    "kunyomi": "すく-う",
    "english": "rescue, save, ambulance",
    "romaji": "kyuu sukuu kyuukyuusha kyuushutsu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "救う",
        "cleanWord": "救う",
        "reading": "すくう",
        "cleanReading": "すくう",
        "romaji": "sukuu",
        "meaning": "ကယ်ဆယ်သည်"
      },
      {
        "word": "救急車",
        "cleanWord": "救急車",
        "reading": "きゅうきゅうしゃ",
        "cleanReading": "きゅうきゅうしゃ",
        "romaji": "kyuukyuusha",
        "meaning": "လူနာတင်ယာဉ်၊ အရေးပေါ်ကား"
      },
      {
        "word": "救出(する)",
        "cleanWord": "救出",
        "reading": "きゅうしゅつ(する)",
        "cleanReading": "きゅうしゅつ",
        "romaji": "kyuushutsu",
        "meaning": "လွတ်မြောက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に救うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに すくうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကယ်ဆယ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、救急車について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きゅうきゅうしゃについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လူနာတင်ယာဉ် (救急車) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 197,
    "kanji": "呼",
    "strokes": 8,
    "onyomi": "コ",
    "kunyomi": "よ-ぶ",
    "english": "call, invite, breathe, respiration",
    "romaji": "ko yobu kokyuu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "呼ぶ",
        "cleanWord": "呼ぶ",
        "reading": "よぶ",
        "cleanReading": "よぶ",
        "romaji": "yobu",
        "meaning": "ခေါ်သည်"
      },
      {
        "word": "呼吸(する)",
        "cleanWord": "呼吸",
        "reading": "こきゅう(する)",
        "cleanReading": "こきゅう",
        "romaji": "kokyuu",
        "meaning": "အသက်ရှုသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に呼ぶようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに よぶように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ခေါ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに呼吸しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに こきゅうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အသက်ရှုသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 198,
    "kanji": "保",
    "strokes": 9,
    "onyomi": "ホ",
    "kunyomi": "—",
    "english": "preserve, save, guarantee, insurance",
    "romaji": "ho hozon hoshou hoken",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "保存",
        "cleanWord": "保存",
        "reading": "ほぞん",
        "cleanReading": "ほぞん",
        "romaji": "hozon",
        "meaning": "သိုလှောင်ခြင်း၊ ထိန်းသိမ်းခြင်း"
      },
      {
        "word": "保証(する)",
        "cleanWord": "保証",
        "reading": "ほしょう(する)",
        "cleanReading": "ほしょう",
        "romaji": "hoshou",
        "meaning": "အာမခံသည်"
      },
      {
        "word": "保険",
        "cleanWord": "保険",
        "reading": "ほけん",
        "cleanReading": "ほけん",
        "romaji": "hoken",
        "meaning": "အာမခံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「保存」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ほぞん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သိုလှောင်ခြင်း\" (保存) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに保証しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ほしょうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အာမခံသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 199,
    "kanji": "証",
    "strokes": 12,
    "onyomi": "ショウ",
    "kunyomi": "—",
    "english": "proof, certificate, insurance card",
    "romaji": "shou hokenshou shoumeisho",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "保険証",
        "cleanWord": "保険証",
        "reading": "ほけんしょう",
        "cleanReading": "ほけんしょう",
        "romaji": "hokenshou",
        "meaning": "အာမခံကတ်"
      },
      {
        "word": "証明書",
        "cleanWord": "証明書",
        "reading": "しょうめいしょ",
        "cleanReading": "しょうめいしょ",
        "romaji": "shoumeisho",
        "meaning": "အောင်လက်မှတ်၊ အထောက်အထားပြစာရွက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「保険証」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ほけんしょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အာမခံကတ်\" (保険証) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、証明書について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょうめいしょについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အောင်လက်မှတ် (証明書) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 200,
    "kanji": "消",
    "strokes": 10,
    "onyomi": "ショウ",
    "kunyomi": "き-える ・ け-す",
    "english": "turn off, erase, disappear, cancel, consume",
    "romaji": "shou kieru kesu torikesu shouhi shouhisha",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~が)消える",
        "cleanWord": "消える",
        "reading": "(~が)きえる",
        "cleanReading": "きえる",
        "romaji": "kieru",
        "meaning": "မီးငြိမ်းသည်၊ ပျောက်ကွယ်သည်"
      },
      {
        "word": "(~を)消す",
        "cleanWord": "消す",
        "reading": "(~を)けす",
        "cleanReading": "けす",
        "romaji": "kesu",
        "meaning": "ဖျောက်သည်၊ ဖျက်သည်၊ မီးပိတ်သည်"
      },
      {
        "word": "取り消す",
        "cleanWord": "取り消す",
        "reading": "とりけす",
        "cleanReading": "とりけす",
        "romaji": "torikesu",
        "meaning": "ဖျက်သိမ်းသည်၊ ကန်ဆယ်လုပ်သည်"
      },
      {
        "word": "消費",
        "cleanWord": "消費",
        "reading": "しょうひ",
        "cleanReading": "しょうひ",
        "romaji": "shouhi",
        "meaning": "သုံးစွဲမှု"
      },
      {
        "word": "消費者",
        "cleanWord": "消費者",
        "reading": "しょうひしゃ",
        "cleanReading": "しょうひしゃ",
        "romaji": "shouhisha",
        "meaning": "သုံးစွဲသူ"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、消えるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、きえるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (မီးငြိမ်းသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に消すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに けすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ဖျောက်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 201,
    "kanji": "防",
    "strokes": 7,
    "onyomi": "ボウ",
    "kunyomi": "ふせ-ぐ",
    "english": "prevent, defend, fire engine",
    "romaji": "bou fusegu yobou shoubousha",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "防ぐ",
        "cleanWord": "防ぐ",
        "reading": "ふせぐ",
        "cleanReading": "ふせぐ",
        "romaji": "fusegu",
        "meaning": "ကာကွယ်သည်"
      },
      {
        "word": "予防(する)",
        "cleanWord": "予防",
        "reading": "よぼう",
        "cleanReading": "よぼう",
        "romaji": "yobou",
        "meaning": "ကြိုတင်ကာကွယ်မှု"
      },
      {
        "word": "消防車",
        "cleanWord": "消防車",
        "reading": "しょうぼうしゃ",
        "cleanReading": "しょうぼうしゃ",
        "romaji": "shoubousha",
        "meaning": "မီးသတ်ကား"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に防ぐようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに ふせぐように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကာကွယ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに予防しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに よぼうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ကြိုတင်ကာကွယ်မှုခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 202,
    "kanji": "駐",
    "strokes": 15,
    "onyomi": "チュウ",
    "kunyomi": "—",
    "english": "parking, parking lot",
    "romaji": "chuu chuusha chuushajou",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "駐車",
        "cleanWord": "駐車",
        "reading": "ちゅうしゃ",
        "cleanReading": "ちゅうしゃ",
        "romaji": "chuusha",
        "meaning": "ကားရပ်နားခြင်း"
      },
      {
        "word": "駐車場",
        "cleanWord": "駐車場",
        "reading": "ちゅうしゃじょう",
        "cleanReading": "ちゅうしゃじょう",
        "romaji": "chuushajou",
        "meaning": "ကားရပ်နားနေရာ၊ ကားပါကင်နေရာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「駐車」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ちゅうしゃ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကားရပ်နားခြင်း\" (駐車) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、駐車場について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ちゅうしゃじょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကားရပ်နားနေရာ (駐車場) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 203,
    "kanji": "禁",
    "strokes": 13,
    "onyomi": "キン",
    "kunyomi": "—",
    "english": "prohibit, ban, forbidden",
    "romaji": "kin kinshi",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "禁止",
        "cleanWord": "禁止",
        "reading": "きんし",
        "cleanReading": "きんし",
        "romaji": "kinshi",
        "meaning": "တားမြစ်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「禁止」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きんし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တားမြစ်ခြင်း\" (禁止) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、禁止について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きんしについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တားမြစ်ခြင်း (禁止) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 204,
    "kanji": "欠",
    "strokes": 4,
    "onyomi": "ケツ ・ ケッ",
    "kunyomi": "か-ける",
    "english": "lack, chip, absence, defect",
    "romaji": "ketsu ke kakeru kesseki kekkin ketten",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~が)欠ける",
        "cleanWord": "欠ける",
        "reading": "(~が)かける",
        "cleanReading": "かける",
        "romaji": "kakeru",
        "meaning": "ကျိုးပဲ့သည်"
      },
      {
        "word": "欠席(する)",
        "cleanWord": "欠席",
        "reading": "けっせき(する)",
        "cleanReading": "けっせき",
        "romaji": "kesseki",
        "meaning": "တက်ရောက်ခြင်းပျက်ကွက်မှု"
      },
      {
        "word": "欠勤",
        "cleanWord": "欠勤",
        "reading": "けっきん",
        "cleanReading": "けっきん",
        "romaji": "kekkin",
        "meaning": "အလုပ်ပျက်ခြင်း"
      },
      {
        "word": "欠点",
        "cleanWord": "欠点",
        "reading": "けってん",
        "cleanReading": "けってん",
        "romaji": "ketten",
        "meaning": "ချို့ယွင်းချက်၊ အားနည်းချက်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、欠けるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、かけるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကျိုးပဲ့သည်) လာခဲ့သည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに欠席しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに けっせきしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း တက်ရောက်ခြင်းပျက်ကွက်မှုခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 205,
    "kanji": "骨",
    "strokes": 10,
    "onyomi": "コツ ・ コッ",
    "kunyomi": "ほね",
    "english": "bone, fracture",
    "romaji": "kotsu ko hone kossetsu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "骨",
        "cleanWord": "骨",
        "reading": "ほね",
        "cleanReading": "ほね",
        "romaji": "hone",
        "meaning": "အရိုး"
      },
      {
        "word": "骨折(する)",
        "cleanWord": "骨折",
        "reading": "こっせつ",
        "cleanReading": "こっせつ",
        "romaji": "kossetsu",
        "meaning": "အရိုးကျိုးခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「骨」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ほね」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အရိုး\" (骨) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに骨折しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに こっせつしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အရိုးကျိုးခြင်းခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 206,
    "kanji": "折",
    "strokes": 7,
    "onyomi": "セツ",
    "kunyomi": "お-れる ・ お-る",
    "english": "break, fold, origami",
    "romaji": "setsu oreru oru origami",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~が)折れる",
        "cleanWord": "折れる",
        "reading": "(~が)おれる",
        "cleanReading": "おれる",
        "romaji": "oreru",
        "meaning": "ကျိုးသည်"
      },
      {
        "word": "(~を)折る",
        "cleanWord": "折る",
        "reading": "(~を)おる",
        "cleanReading": "おる",
        "romaji": "oru",
        "meaning": "ချိုးသည်"
      },
      {
        "word": "折り紙",
        "cleanWord": "折り紙",
        "reading": "おりがみ",
        "cleanReading": "おりがみ",
        "romaji": "origami",
        "meaning": "စက္ကူခေါက်ခြင်း၊ စက္ကူခေါက်ခြင်းအတတ်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、折れるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、おれるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကျိုးသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に折ることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに おることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ချိုးသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 207,
    "kanji": "治",
    "strokes": 8,
    "onyomi": "ジ",
    "kunyomi": "なお-る ・ なお-す",
    "english": "heal, cure, recover, politics",
    "romaji": "ji naoru naosu seiji",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~が)治る",
        "cleanWord": "治る",
        "reading": "(~が)なおる",
        "cleanReading": "なおる",
        "romaji": "naoru",
        "meaning": "ရောဂါပျောက်ကင်းသည်"
      },
      {
        "word": "(~を)治す",
        "cleanWord": "治す",
        "reading": "(~を)なおす",
        "cleanReading": "なおす",
        "romaji": "naosu",
        "meaning": "ပြုပြင်သည်၊ ဆေးကုသပေးသည်"
      },
      {
        "word": "政治",
        "cleanWord": "政治",
        "reading": "せいじ",
        "cleanReading": "せいじ",
        "romaji": "seiji",
        "meaning": "နိုင်ငံရေး"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、治るようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、なおるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ရောဂါပျောက်ကင်းသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に治すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに なおすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ပြုပြင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 208,
    "kanji": "付",
    "strokes": 5,
    "onyomi": "—",
    "kunyomi": "つ-く ・ つ-ける",
    "english": "attach, stick, reception desk",
    "romaji": "tsuku tsukeru uketsuke",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "(~が)付く",
        "cleanWord": "付く",
        "reading": "(~が)つく",
        "cleanReading": "つく",
        "romaji": "tsuku",
        "meaning": "စွဲမြဲသည်"
      },
      {
        "word": "(~を)付ける",
        "cleanWord": "付ける",
        "reading": "(~を)つける",
        "cleanReading": "つける",
        "romaji": "tsukeru",
        "meaning": "တပ်ဆင်သည်"
      },
      {
        "word": "受付",
        "cleanWord": "受付",
        "reading": "うけつけ",
        "cleanReading": "うけつけ",
        "romaji": "uketsuke",
        "meaning": "ဧည့်ကြိုကောင်တာ၊ ကောင်တာ"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、付くようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、つくように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (စွဲမြဲသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に付けることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに つけることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (တပ်ဆင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 209,
    "kanji": "申",
    "strokes": 5,
    "onyomi": "—",
    "kunyomi": "もう-す",
    "english": "say (humble), apply, application form",
    "romaji": "mousu moushikomu moushikomisho",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "申す",
        "cleanWord": "申す",
        "reading": "もうす",
        "cleanReading": "もうす",
        "romaji": "mousu",
        "meaning": "ပြောဆိုသည်၊ -လို့ခေါ်သည်"
      },
      {
        "word": "申し込む",
        "cleanWord": "申し込む",
        "reading": "もうしこむ",
        "cleanReading": "もうしこむ",
        "romaji": "moushikomu",
        "meaning": "လျှောက်လွှာတင်သည်"
      },
      {
        "word": "申込書",
        "cleanWord": "申込書",
        "reading": "もうしこみしょ",
        "cleanReading": "もうしこみしょ",
        "romaji": "moushikomisho",
        "meaning": "ဖောင်၊ လျှောက်လွှာ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に申すようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに もうすように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပြောဆိုသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで申し込む必要があります。",
        "furigana": "じかんが たりないので、いそいで もうしこむ ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (လျှောက်လွှာတင်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 210,
    "kanji": "科",
    "strokes": 9,
    "onyomi": "カ",
    "kunyomi": "—",
    "english": "department, science, textbook, subject",
    "romaji": "ka geka naika kamoku kagaku kagakusha kyoukasho",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "外科",
        "cleanWord": "外科",
        "reading": "げか",
        "cleanReading": "げか",
        "romaji": "geka",
        "meaning": "ခွဲစိတ်ကုသမှုပညာ၊ ခွဲစိတ်ကုဌာန"
      },
      {
        "word": "内科",
        "cleanWord": "内科",
        "reading": "ないか",
        "cleanReading": "ないか",
        "romaji": "naika",
        "meaning": "အတွင်းရောဂါ၊ ဆေးဘက်ဆိုင်ရာကုသမှုပညာ"
      },
      {
        "word": "科目",
        "cleanWord": "科目",
        "reading": "かもく",
        "cleanReading": "かもく",
        "romaji": "kamoku",
        "meaning": "ဘာသာရပ်"
      },
      {
        "word": "科学",
        "cleanWord": "科学",
        "reading": "かがく",
        "cleanReading": "かがく",
        "romaji": "kagaku",
        "meaning": "သိပ္ပံပညာ"
      },
      {
        "word": "科学者",
        "cleanWord": "科学者",
        "reading": "かがくしゃ",
        "cleanReading": "かがくしゃ",
        "romaji": "kagakusha",
        "meaning": "သိပ္ပံပညာရှင်"
      },
      {
        "word": "教科書",
        "cleanWord": "教科書",
        "reading": "きょうかしょ",
        "cleanReading": "きょうかしょ",
        "romaji": "kyoukasho",
        "meaning": "ကျောင်းသုံးဖတ်စာအုပ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「外科」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「げか」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ခွဲစိတ်ကုသမှုပညာ\" (外科) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、内科について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ないかについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အတွင်းရောဂါ (内科) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 211,
    "kanji": "鼻",
    "strokes": 14,
    "onyomi": "ビ",
    "kunyomi": "はな",
    "english": "nose, otolaryngology (ENT)",
    "romaji": "bi hana jibika",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "鼻",
        "cleanWord": "鼻",
        "reading": "はな",
        "cleanReading": "はな",
        "romaji": "hana",
        "meaning": "နှာခေါင်း"
      },
      {
        "word": "耳鼻科",
        "cleanWord": "耳鼻科",
        "reading": "じびか",
        "cleanReading": "じびか",
        "romaji": "jibika",
        "meaning": "နား၊ နှာခေါင်း၊ ဆေးကုဌာန"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「鼻」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「はな」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နှာခေါင်း\" (鼻) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、耳鼻科について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じびかについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နား (耳鼻科) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 212,
    "kanji": "歯",
    "strokes": 12,
    "onyomi": "パ ・ シ",
    "kunyomi": "は",
    "english": "tooth, dentist, cavity, dental clinic",
    "romaji": "pa shi ha haisha mushiba shika",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "歯",
        "cleanWord": "歯",
        "reading": "は",
        "cleanReading": "は",
        "romaji": "ha",
        "meaning": "သွား"
      },
      {
        "word": "歯医者",
        "cleanWord": "歯医者",
        "reading": "はいしゃ",
        "cleanReading": "はいしゃ",
        "romaji": "haisha",
        "meaning": "သွားဆရာဝန်"
      },
      {
        "word": "虫歯",
        "cleanWord": "虫歯",
        "reading": "むしば",
        "cleanReading": "むしば",
        "romaji": "mushiba",
        "meaning": "သွားပိုးစားခြင်း"
      },
      {
        "word": "歯科",
        "cleanWord": "歯科",
        "reading": "しか",
        "cleanReading": "しか",
        "romaji": "shika",
        "meaning": "သွားဆေးခန်း၊ သွားဘက်ဆိုင်ရာဌာန"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「歯」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「は」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သွား\" (歯) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、歯医者について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、はいしゃについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သွားဆရာဝန် (歯医者) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 213,
    "kanji": "退",
    "strokes": 9,
    "onyomi": "タイ",
    "kunyomi": "—",
    "english": "leave hospital, leave early, retire",
    "romaji": "tai taiin soutai intai",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "退院",
        "cleanWord": "退院",
        "reading": "たいいん",
        "cleanReading": "たいいん",
        "romaji": "taiin",
        "meaning": "ဆေးရုံဆင်းခြင်း"
      },
      {
        "word": "早退(する)",
        "cleanWord": "早退",
        "reading": "そうたい(する)",
        "cleanReading": "そうたい",
        "romaji": "soutai",
        "meaning": "စောစောပြန်အနားယူသည်"
      },
      {
        "word": "引退(する)",
        "cleanWord": "引退",
        "reading": "いんたい(する)",
        "cleanReading": "いんたい",
        "romaji": "intai",
        "meaning": "အငြိမ်းစားယူသည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「退院」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「たいいん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆေးရုံဆင်းခြင်း\" (退院) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに早退しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに そうたいしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း စောစောပြန်အနားယူသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 214,
    "kanji": "優",
    "strokes": 17,
    "onyomi": "ユウ",
    "kunyomi": "やさ-しい",
    "english": "gentle, kind, win championship, priority seat, actress",
    "romaji": "yuu yasashii yuushou yuusenseki joyuu",
    "category": "Sports, Health & Medical Care",
    "categoryJp": "スポーツ・健康・医療",
    "categoryMm": "အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု",
    "vocab": [
      {
        "word": "優しい",
        "cleanWord": "優しい",
        "reading": "やさしい",
        "cleanReading": "やさしい",
        "romaji": "yasashii",
        "meaning": "သဘောကောင်းသော"
      },
      {
        "word": "優勝(する)",
        "cleanWord": "優勝",
        "reading": "ゆうしょう(する)",
        "cleanReading": "ゆうしょう",
        "romaji": "yuushou",
        "meaning": "အနိုင်ရသည်၊ ဗိုလ်ဆွဲသည်"
      },
      {
        "word": "優先席",
        "cleanWord": "優先席",
        "reading": "ゆうせんせき",
        "cleanReading": "ゆうせんせき",
        "romaji": "yuusenseki",
        "meaning": "ဦးစားပေးထိုင်ခုံ"
      },
      {
        "word": "女優",
        "cleanWord": "女優",
        "reading": "じょゆう",
        "cleanReading": "じょゆう",
        "romaji": "joyuu",
        "meaning": "မင်းသမီး"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより優しいと感じる人が多いようです。",
        "furigana": "きょうは いつもより やさしいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ သဘောကောင်းသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに優勝しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ゆうしょうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အနိုင်ရသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 215,
    "kanji": "司",
    "strokes": 5,
    "onyomi": "シ",
    "kunyomi": "—",
    "english": "MC, host, boss, superior",
    "romaji": "shi shikai joushi",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "司会",
        "cleanWord": "司会",
        "reading": "しかい",
        "cleanReading": "しかい",
        "romaji": "shikai",
        "meaning": "အခမ်းအနားမှူး"
      },
      {
        "word": "上司",
        "cleanWord": "上司",
        "reading": "じょうし",
        "cleanReading": "じょうし",
        "romaji": "joushi",
        "meaning": "အထက်အရာရှိ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「司会」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しかい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အခမ်းအနားမှူး\" (司会) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、上司について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じょうしについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အထက်အရာရှိ (上司) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 216,
    "kanji": "皆",
    "strokes": 9,
    "onyomi": "—",
    "kunyomi": "みな ・ みんな",
    "english": "everyone, all, everybody",
    "romaji": "mina minna minasama minasan",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "皆",
        "cleanWord": "皆",
        "reading": "みんな",
        "cleanReading": "みんな",
        "romaji": "minna",
        "meaning": "အားလုံး"
      },
      {
        "word": "皆様",
        "cleanWord": "皆様",
        "reading": "みなさま",
        "cleanReading": "みなさま",
        "romaji": "minasama",
        "meaning": "အားလုံး"
      },
      {
        "word": "皆さん",
        "cleanWord": "皆さん",
        "reading": "みなさん",
        "cleanReading": "みなさん",
        "romaji": "minasan",
        "meaning": "အားလုံး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「皆」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「みんな」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အားလုံး\" (皆) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、皆様について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、みなさまについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အားလုံး (皆様) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 217,
    "kanji": "紹",
    "strokes": 11,
    "onyomi": "ショウ",
    "kunyomi": "—",
    "english": "introduce, self-introduction",
    "romaji": "shou shoukai jikoshoukai",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "紹介(する)",
        "cleanWord": "紹介",
        "reading": "しょうかい(する)",
        "cleanReading": "しょうかい",
        "romaji": "shoukai",
        "meaning": "မိတ်ဆက်သည်"
      },
      {
        "word": "自己紹介",
        "cleanWord": "自己紹介",
        "reading": "じこしょうかい",
        "cleanReading": "じこしょうかい",
        "romaji": "jikoshoukai",
        "meaning": "မိမိကိုယ်ကိုမိတ်ဆက်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり紹介することが大切です。",
        "furigana": "しごとの まえに しっかり しょうかいすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ မိတ်ဆက်သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、自己紹介について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じこしょうかいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မိမိကိုယ်ကိုမိတ်ဆက်ခြင်း (自己紹介) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 218,
    "kanji": "協",
    "strokes": 8,
    "onyomi": "キョウ",
    "kunyomi": "—",
    "english": "cooperate, collaboration",
    "romaji": "kyou kyouryoku",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "協力(する)",
        "cleanWord": "協力",
        "reading": "きょうりょく(する)",
        "cleanReading": "きょうりょく",
        "romaji": "kyouryoku",
        "meaning": "ပူးပေါင်းကူညီသည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり協力することが大切です。",
        "furigana": "しごとの まえに しっかり きょうりょくすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ပူးပေါင်းကူညီသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに協力しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに きょうりょくしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ပူးပေါင်းကူညီသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 219,
    "kanji": "祝",
    "strokes": 9,
    "onyomi": "シュク",
    "kunyomi": "いわ-う",
    "english": "celebrate, congratulate, national holiday",
    "romaji": "shuku iwau shukujitsu",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "祝う",
        "cleanWord": "祝う",
        "reading": "いわう",
        "cleanReading": "いわう",
        "romaji": "iwau",
        "meaning": "ဂုဏ်ပြုသည်"
      },
      {
        "word": "祝日",
        "cleanWord": "祝日",
        "reading": "しゅくじつ",
        "cleanReading": "しゅくじつ",
        "romaji": "shukujitsu",
        "meaning": "အများပြည်သူဆိုင်ရာပိတ်ရက်၊ နေ့ကြီးရက်ကြီးပိတ်ရက်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に祝うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに いわうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဂုဏ်ပြုသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、祝日について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しゅくじつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အများပြည်သူဆိုင်ရာပိတ်ရက် (祝日) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 220,
    "kanji": "記",
    "strokes": 10,
    "onyomi": "キ",
    "kunyomi": "—",
    "english": "article, reporter, fill in, diary, memorize",
    "romaji": "ki kiji kisha kinyuu kigou nikki anki",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "記事",
        "cleanWord": "記事",
        "reading": "きじ",
        "cleanReading": "きじ",
        "romaji": "kiji",
        "meaning": "သတင်းဆောင်းပါး"
      },
      {
        "word": "記者",
        "cleanWord": "記者",
        "reading": "きしゃ",
        "cleanReading": "きしゃ",
        "romaji": "kisha",
        "meaning": "သတင်းထောက်"
      },
      {
        "word": "記入(する)",
        "cleanWord": "記入",
        "reading": "きにゅう(する)",
        "cleanReading": "きにゅう",
        "romaji": "kinyuu",
        "meaning": "ရေးသွင်းသည်"
      },
      {
        "word": "記号",
        "cleanWord": "記号",
        "reading": "きごう",
        "cleanReading": "きごう",
        "romaji": "kigou",
        "meaning": "သင်္ကေတ"
      },
      {
        "word": "日記",
        "cleanWord": "日記",
        "reading": "にっき",
        "cleanReading": "にっき",
        "romaji": "nikki",
        "meaning": "နေ့စဉ်မှတ်တမ်း၊ ဒိုင်ယာရီ"
      },
      {
        "word": "暗記(する)",
        "cleanWord": "暗記",
        "reading": "あんき(する)",
        "cleanReading": "あんき",
        "romaji": "anki",
        "meaning": "အလွတ်ကျက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「記事」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きじ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သတင်းဆောင်းပါး\" (記事) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、記者について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きしゃについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သတင်းထောက် (記者) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 221,
    "kanji": "録",
    "strokes": 16,
    "onyomi": "ロク",
    "kunyomi": "—",
    "english": "record, audio recording, video recording",
    "romaji": "roku kiroku rokuon rokuga shinkiroku",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "記録(する)",
        "cleanWord": "記録",
        "reading": "きろく(する)",
        "cleanReading": "きろく",
        "romaji": "kiroku",
        "meaning": "မှတ်တမ်းတင်သည်၊ စံချိန်တင်သည်"
      },
      {
        "word": "録音(する)",
        "cleanWord": "録音",
        "reading": "ろくおん(する)",
        "cleanReading": "ろくおん",
        "romaji": "rokuon",
        "meaning": "အသံသွင်းသည်"
      },
      {
        "word": "録画(する)",
        "cleanWord": "録画",
        "reading": "ろくが(する)",
        "cleanReading": "ろくが",
        "romaji": "rokuga",
        "meaning": "ရုပ်သံကူးယူသည်"
      },
      {
        "word": "新記録",
        "cleanWord": "新記録",
        "reading": "しんきろく",
        "cleanReading": "しんきろく",
        "romaji": "shinkiroku",
        "meaning": "စံချိန်သစ်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり記録することが大切です。",
        "furigana": "しごとの まえに しっかり きろくすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ မှတ်တမ်းတင်သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに録音しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ろくおんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အသံသွင်းသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 222,
    "kanji": "団",
    "strokes": 6,
    "onyomi": "ダン",
    "kunyomi": "—",
    "english": "group, organization, housing complex",
    "romaji": "dan dantai danchi shuudan",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "団体",
        "cleanWord": "団体",
        "reading": "だんたい",
        "cleanReading": "だんたい",
        "romaji": "dantai",
        "meaning": "အသင်းအဖွဲ့၊ အဖွဲ့အစည်း"
      },
      {
        "word": "団地",
        "cleanWord": "団地",
        "reading": "だんち",
        "cleanReading": "だんち",
        "romaji": "danchi",
        "meaning": "စုပေါင်းအိမ်ရာ"
      },
      {
        "word": "集団",
        "cleanWord": "集団",
        "reading": "しゅうだん",
        "cleanReading": "しゅうだん",
        "romaji": "shuudan",
        "meaning": "လူအုပ်စု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「団体」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「だんたい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အသင်းအဖွဲ့\" (団体) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、団地について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、だんちについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စုပေါင်းအိမ်ရာ (団地) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 223,
    "kanji": "賞",
    "strokes": 15,
    "onyomi": "ショウ",
    "kunyomi": "—",
    "english": "prize, award, reward, Nobel Prize",
    "romaji": "shou shouhin shoukin no-berushou",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "賞品",
        "cleanWord": "賞品",
        "reading": "しょうひん",
        "cleanReading": "しょうひん",
        "romaji": "shouhin",
        "meaning": "ဆုပစ္စည်း"
      },
      {
        "word": "賞金",
        "cleanWord": "賞金",
        "reading": "しょうきん",
        "cleanReading": "しょうきん",
        "romaji": "shoukin",
        "meaning": "ဆုကြေးငွေ"
      },
      {
        "word": "ノーベル賞",
        "cleanWord": "ノーベル賞",
        "reading": "ノーベルしょう",
        "cleanReading": "ノーベルしょう",
        "romaji": "no-berushou",
        "meaning": "နိုဘယ်ဆု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「賞品」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しょうひん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆုပစ္စည်း\" (賞品) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、賞金について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょうきんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆုကြေးငွေ (賞金) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 224,
    "kanji": "幸",
    "strokes": 8,
    "onyomi": "コウ",
    "kunyomi": "しあわ-せ",
    "english": "happiness, happy, fortunate, unlucky",
    "romaji": "kou shiawase fukou kouun",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "幸せ(な)",
        "cleanWord": "幸せ",
        "reading": "しあわせ(な)",
        "cleanReading": "しあわせ",
        "romaji": "shiawase",
        "meaning": "ချမ်းသာသုခရှိသော၊ စိတ်ချမ်းသာသော"
      },
      {
        "word": "不幸(な)",
        "cleanWord": "不幸",
        "reading": "ふこう(な)",
        "cleanReading": "ふこう",
        "romaji": "fukou",
        "meaning": "ဆင်းရဲဒုက္ခခံရသော"
      },
      {
        "word": "幸運(な)",
        "cleanWord": "幸運",
        "reading": "こううん(な)",
        "cleanReading": "こううん",
        "romaji": "kouun",
        "meaning": "ကံကောင်းသော"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても幸せなので、だれでも使えます。",
        "furigana": "この ほうほうは とても しあわせなので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် ချမ်းသာသုခရှိသော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "先生はいつも不幸な言葉で説明してくれます。",
        "furigana": "せんせいは いつも ふこうな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း ဆင်းရဲဒုက္ခခံရသော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 225,
    "kanji": "喜",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "よろこ-ぶ",
    "english": "rejoice, be glad, joy, delight",
    "romaji": "yorokobu yorokobi",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "喜ぶ",
        "cleanWord": "喜ぶ",
        "reading": "よろこぶ",
        "cleanReading": "よろこぶ",
        "romaji": "yorokobu",
        "meaning": "ဝမ်းသာသည်"
      },
      {
        "word": "喜び",
        "cleanWord": "喜び",
        "reading": "よろこび",
        "cleanReading": "よろこび",
        "romaji": "yorokobi",
        "meaning": "ဝမ်းသာမှု၊ ပျော်ရွှင်မှု၊ ပီတိ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に喜ぶようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに よろこぶように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဝမ်းသာသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、喜びについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、よろこびについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဝမ်းသာမှု (喜び) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 226,
    "kanji": "笑",
    "strokes": 10,
    "onyomi": "—",
    "kunyomi": "わら-う ・ え-む",
    "english": "laugh, smile, smiling face",
    "romaji": "warau emu warai egao",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "笑う",
        "cleanWord": "笑う",
        "reading": "わらう",
        "cleanReading": "わらう",
        "romaji": "warau",
        "meaning": "ရယ်မောသည်"
      },
      {
        "word": "笑い",
        "cleanWord": "笑い",
        "reading": "わらい",
        "cleanReading": "わらい",
        "romaji": "warai",
        "meaning": "ရယ်မောခြင်း"
      },
      {
        "word": "笑顔",
        "cleanWord": "笑顔",
        "reading": "えがお",
        "cleanReading": "えがお",
        "romaji": "egao",
        "meaning": "အပြုံးမျက်နှာ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に笑うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに わらうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရယ်မောသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "あまり笑い場合は、無理をしないで休んでください。",
        "furigana": "あまり わらい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း ရယ်မောခြင်း သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 227,
    "kanji": "涙",
    "strokes": 10,
    "onyomi": "—",
    "kunyomi": "なみだ",
    "english": "tears, cry",
    "romaji": "namida",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "涙",
        "cleanWord": "涙",
        "reading": "なみだ",
        "cleanReading": "なみだ",
        "romaji": "namida",
        "meaning": "မျက်ရည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「涙」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「なみだ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မျက်ရည်\" (涙) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、涙について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、なみだについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မျက်ရည် (涙) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 228,
    "kanji": "流",
    "strokes": 10,
    "onyomi": "リュウ",
    "kunyomi": "なが-れ",
    "english": "flow, pour, fashion, trend, first-class",
    "romaji": "ryuu nagare nagareru nagasu ryuukou ichiryuu",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "(~が)流れる",
        "cleanWord": "流れる",
        "reading": "(~が)ながれる",
        "cleanReading": "ながれる",
        "romaji": "nagareru",
        "meaning": "ရေစီးသည်၊ စီးဆင်းသည်"
      },
      {
        "word": "(~を)流す",
        "cleanWord": "流す",
        "reading": "(~を)ながす",
        "cleanReading": "ながす",
        "romaji": "nagasu",
        "meaning": "ရေသွန်သည်၊ ရေမျှောသည်"
      },
      {
        "word": "流れ",
        "cleanWord": "流れ",
        "reading": "ながれ",
        "cleanReading": "ながれ",
        "romaji": "nagare",
        "meaning": "ရေစီးခြင်း၊ စီးဆင်းခြင်း"
      },
      {
        "word": "流行(する)",
        "cleanWord": "流行",
        "reading": "りゅうこう(する)",
        "cleanReading": "りゅうこう",
        "romaji": "ryuukou",
        "meaning": "ခေတ်စားသည်၊ ရေပန်းစားသည်"
      },
      {
        "word": "一流",
        "cleanWord": "一流",
        "reading": "いちりゅう",
        "cleanReading": "いちりゅう",
        "romaji": "ichiryuu",
        "meaning": "ပထမတန်းစား"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、流れるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、ながれるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ရေစီးသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に流すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに ながすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ရေသွန်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 229,
    "kanji": "泣",
    "strokes": 8,
    "onyomi": "—",
    "kunyomi": "な-く",
    "english": "cry, weep",
    "romaji": "naku",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "泣く",
        "cleanWord": "泣く",
        "reading": "なく",
        "cleanReading": "なく",
        "romaji": "naku",
        "meaning": "ငိုသည်"
      },
      {
        "word": "★鳴く",
        "cleanWord": "鳴く",
        "reading": "なく",
        "cleanReading": "なく",
        "romaji": "naku",
        "meaning": "အော်မြည်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に泣くようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに なくように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ငိုသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで鳴く必要があります。",
        "furigana": "じかんが たりないので、いそいで なく ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (အော်မြည်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 230,
    "kanji": "悲",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "かな-しむ ・ かな-しい",
    "english": "sad, sorrow, grieve",
    "romaji": "kanashimu kanashii kanashimi",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "悲しい",
        "cleanWord": "悲しい",
        "reading": "かなしい",
        "cleanReading": "かなしい",
        "romaji": "kanashii",
        "meaning": "ဝမ်းနည်းသော"
      },
      {
        "word": "悲しむ",
        "cleanWord": "悲しむ",
        "reading": "かなしむ",
        "cleanReading": "かなしむ",
        "romaji": "kanashimu",
        "meaning": "ဝမ်းနည်းသည်"
      },
      {
        "word": "悲しみ",
        "cleanWord": "悲しみ",
        "reading": "かなしみ",
        "cleanReading": "かなしみ",
        "romaji": "kanashimi",
        "meaning": "ဝမ်းနည်းမှု၊ ဝမ်းနည်းခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより悲しいと感じる人が多いようです。",
        "furigana": "きょうは いつもより かなしいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ဝမ်းနည်းသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで悲しむ必要があります。",
        "furigana": "じかんが たりないので、いそいで かなしむ ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ဝမ်းနည်းသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 231,
    "kanji": "怒",
    "strokes": 9,
    "onyomi": "—",
    "kunyomi": "おこ-る ・ いか-り",
    "english": "get angry, anger, rage, yell",
    "romaji": "okoru ikari donaru",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "怒る",
        "cleanWord": "怒る",
        "reading": "おこる",
        "cleanReading": "おこる",
        "romaji": "okoru",
        "meaning": "စိတ်ဆိုးသည်၊ ဒေါသထွက်သည်"
      },
      {
        "word": "怒り",
        "cleanWord": "怒り",
        "reading": "いかり",
        "cleanReading": "いかり",
        "romaji": "ikari",
        "meaning": "ဒေါသ"
      },
      {
        "word": "怒鳴る",
        "cleanWord": "怒鳴る",
        "reading": "どなる",
        "cleanReading": "どなる",
        "romaji": "donaru",
        "meaning": "မာန်မဲသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に怒るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに おこるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (စိတ်ဆိုးသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、怒りについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、いかりについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဒေါသ (怒り) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 232,
    "kanji": "苦",
    "strokes": 8,
    "onyomi": "ク",
    "kunyomi": "くる-しむ ・ くる-しい ・ にが-い",
    "english": "suffer, painful, bitter, hardship, weak point",
    "romaji": "ku kurushimu kurushii nigai kurou kutsuu kujou nigate",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "苦しむ",
        "cleanWord": "苦しむ",
        "reading": "くるしむ",
        "cleanReading": "くるしむ",
        "romaji": "kurushimu",
        "meaning": "ဝေဒနာခံစားသည်၊ စိတ်သောကရောက်ပြီးစိတ်ညစ်သည်"
      },
      {
        "word": "苦しい",
        "cleanWord": "苦しい",
        "reading": "くるしい",
        "cleanReading": "くるしい",
        "romaji": "kurushii",
        "meaning": "ဆင်းရဲပင်ပန်းသော၊ ဝေဒနာရှိသော၊ စိတ်သောကရှိသော"
      },
      {
        "word": "苦い",
        "cleanWord": "苦い",
        "reading": "にがい",
        "cleanReading": "にがい",
        "romaji": "nigai",
        "meaning": "ခါးသော"
      },
      {
        "word": "苦労(する)",
        "cleanWord": "苦労",
        "reading": "くろう(する)",
        "cleanReading": "くろう",
        "romaji": "kurou",
        "meaning": "ဒုက္ခခံသည်၊ ပင်ပန်းဆင်းရဲသည်"
      },
      {
        "word": "苦痛",
        "cleanWord": "苦痛",
        "reading": "くつう",
        "cleanReading": "くつう",
        "romaji": "kutsuu",
        "meaning": "ဝေဒနာ"
      },
      {
        "word": "苦情",
        "cleanWord": "苦情",
        "reading": "くじょう",
        "cleanReading": "くじょう",
        "romaji": "kujou",
        "meaning": "တိုင်တန်းခြင်း၊ ညည်းညူခြင်း"
      },
      {
        "word": "苦手(な)",
        "cleanWord": "苦手",
        "reading": "にがて(な)",
        "cleanReading": "にがて",
        "romaji": "nigate",
        "meaning": "ညံ့ဖျင်းသော"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に苦しむようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに くるしむように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဝေဒနာခံစားသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "あまり苦しい場合は、無理をしないで休んでください。",
        "furigana": "あまり くるしい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း ဆင်းရဲပင်ပန်းသော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 233,
    "kanji": "忘",
    "strokes": 7,
    "onyomi": "ボウ",
    "kunyomi": "わす-れる",
    "english": "forget, lost item, year-end party",
    "romaji": "bou wasureru wasuremono bounenkai",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "忘れる",
        "cleanWord": "忘れる",
        "reading": "わすれる",
        "cleanReading": "わすれる",
        "romaji": "wasureru",
        "meaning": "မေ့သည်"
      },
      {
        "word": "忘れ物",
        "cleanWord": "忘れ物",
        "reading": "わすれもの",
        "cleanReading": "わすれもの",
        "romaji": "wasuremono",
        "meaning": "မေ့ကျန်ပစ္စည်း"
      },
      {
        "word": "忘年会",
        "cleanWord": "忘年会",
        "reading": "ぼうねんかい",
        "cleanReading": "ぼうねんかい",
        "romaji": "bounenkai",
        "meaning": "နှစ်ကုန်ပါတီ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に忘れるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに わすれるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (မေ့သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、忘れ物について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、わすれものについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မေ့ကျန်ပစ္စည်း (忘れ物) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 234,
    "kanji": "忙",
    "strokes": 6,
    "onyomi": "—",
    "kunyomi": "いそが-しい",
    "english": "busy, occupied",
    "romaji": "isogashii",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "忙しい",
        "cleanWord": "忙しい",
        "reading": "いそがしい",
        "cleanReading": "いそがしい",
        "romaji": "isogashii",
        "meaning": "အလုပ်ရှုပ်သော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより忙しいと感じる人が多いようです。",
        "furigana": "きょうは いつもより いそがしいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ အလုပ်ရှုပ်သော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "あまり忙しい場合は、無理をしないで休んでください。",
        "furigana": "あまり いそがしい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း အလုပ်ရှုပ်သော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 235,
    "kanji": "残",
    "strokes": 10,
    "onyomi": "ザン",
    "kunyomi": "のこ-る ・ のこ-す",
    "english": "remain, leave behind, overtime, regrettable",
    "romaji": "zan nokoru nokosu nokori zangyou zannen",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "(~が)残る",
        "cleanWord": "残る",
        "reading": "(~が)のこる",
        "cleanReading": "のこる",
        "romaji": "nokoru",
        "meaning": "ကျန်သည်၊ ကြွင်းကျန်သည်"
      },
      {
        "word": "(~を)残す",
        "cleanWord": "残す",
        "reading": "(~を)のこす",
        "cleanReading": "のこす",
        "romaji": "nokosu",
        "meaning": "ချန်သည်"
      },
      {
        "word": "残り",
        "cleanWord": "残り",
        "reading": "のこり",
        "cleanReading": "のこり",
        "romaji": "nokori",
        "meaning": "အကြွင်းအကျန်"
      },
      {
        "word": "残業",
        "cleanWord": "残業",
        "reading": "ざんぎょう",
        "cleanReading": "ざんぎょう",
        "romaji": "zangyou",
        "meaning": "အချိန်ပိုအလုပ်လုပ်ခြင်း"
      },
      {
        "word": "残念(な)",
        "cleanWord": "残念",
        "reading": "ざんねん(な)",
        "cleanReading": "ざんねん",
        "romaji": "zannen",
        "meaning": "စိတ်မကောင်းဖြစ်သော"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、残るようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、のこるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကျန်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に残すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに のこすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ချန်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 236,
    "kanji": "念",
    "strokes": 8,
    "onyomi": "ネン",
    "kunyomi": "—",
    "english": "commemoration, souvenir, anniversary",
    "romaji": "nen kinen kinenhin kinenbi",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "記念",
        "cleanWord": "記念",
        "reading": "きねん",
        "cleanReading": "きねん",
        "romaji": "kinen",
        "meaning": "အမှတ်တရ"
      },
      {
        "word": "記念品",
        "cleanWord": "記念品",
        "reading": "きねんひん",
        "cleanReading": "きねんひん",
        "romaji": "kinenhin",
        "meaning": "အမှတ်တရပစ္စည်း"
      },
      {
        "word": "記念日",
        "cleanWord": "記念日",
        "reading": "きねんび",
        "cleanReading": "きねんび",
        "romaji": "kinenbi",
        "meaning": "အမှတ်တရနေ့"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「記念」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きねん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အမှတ်တရ\" (記念) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、記念品について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きねんひんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အမှတ်တရပစ္စည်း (記念品) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 237,
    "kanji": "礼",
    "strokes": 5,
    "onyomi": "レイ",
    "kunyomi": "—",
    "english": "thanks, gratitude, bow, polite, rude",
    "romaji": "rei orei shitsurei",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "お礼",
        "cleanWord": "お礼",
        "reading": "おれい",
        "cleanReading": "おれい",
        "romaji": "orei",
        "meaning": "ကျေးဇူး"
      },
      {
        "word": "礼",
        "cleanWord": "礼",
        "reading": "れい",
        "cleanReading": "れい",
        "romaji": "rei",
        "meaning": "အရိုအသေပြုခြင်း"
      },
      {
        "word": "失礼(な)",
        "cleanWord": "失礼",
        "reading": "しつれい(な)",
        "cleanReading": "しつれい",
        "romaji": "shitsurei",
        "meaning": "ရိုင်းပြသော၊ ရိုင်းစိုင်းသော"
      },
      {
        "word": "失礼",
        "cleanWord": "失礼",
        "reading": "しつれい(する)",
        "cleanReading": "しつれい",
        "romaji": "shitsurei",
        "meaning": "တဆိတ်လောက်၊ ကျေးဇူးပြု၍"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「お礼」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「おれい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကျေးဇူး\" (お礼) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、礼について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、れいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရိုအသေပြုခြင်း (礼) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 238,
    "kanji": "慣",
    "strokes": 14,
    "onyomi": "カン",
    "kunyomi": "な-れる",
    "english": "get used to, custom, habit",
    "romaji": "kan nareru shuukan",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "(~に)慣れる",
        "cleanWord": "慣れる",
        "reading": "(~に)なれる",
        "cleanReading": "なれる",
        "romaji": "nareru",
        "meaning": "ကျင့်သားရသည်"
      },
      {
        "word": "習慣",
        "cleanWord": "習慣",
        "reading": "しゅうかん",
        "cleanReading": "しゅうかん",
        "romaji": "shuukan",
        "meaning": "ဓလေ့ထုံးစံ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に慣れるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに なれるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကျင့်သားရသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、習慣について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しゅうかんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဓလေ့ထုံးစံ (習慣) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 239,
    "kanji": "亡",
    "strokes": 3,
    "onyomi": "ボウ",
    "kunyomi": "な-くなる",
    "english": "pass away, die, death",
    "romaji": "bou nakunaru shibou",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "(~が)亡くなる",
        "cleanWord": "亡くなる",
        "reading": "(~が)なくなる",
        "cleanReading": "なくなる",
        "romaji": "nakunaru",
        "meaning": "သေဆုံးသည်"
      },
      {
        "word": "死亡(する)",
        "cleanWord": "死亡",
        "reading": "しぼう(する)",
        "cleanReading": "しぼう",
        "romaji": "shibou",
        "meaning": "သေဆုံးမှု"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、亡くなるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、なくなるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (သေဆုံးသည်) လာခဲ့သည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに死亡しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに しぼうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း သေဆုံးမှုခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 240,
    "kanji": "伝",
    "strokes": 6,
    "onyomi": "デン",
    "kunyomi": "つた-わる ・ つた-える",
    "english": "convey, transmit, message, help",
    "romaji": "den tsutawaru tsutaeru dengon tetsudau",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "(~が)伝わる",
        "cleanWord": "伝わる",
        "reading": "(~が)つたわる",
        "cleanReading": "つたわる",
        "romaji": "tsutawaru",
        "meaning": "တဆင့်ပြောခံရသည်၊ သတင်းရသည်"
      },
      {
        "word": "(~を)伝える",
        "cleanWord": "伝える",
        "reading": "(~を)つたえる",
        "cleanReading": "つたえる",
        "romaji": "tsutaeru",
        "meaning": "တဆင့်ပြောသည်"
      },
      {
        "word": "伝言",
        "cleanWord": "伝言",
        "reading": "でんごん",
        "cleanReading": "でんごん",
        "romaji": "dengon",
        "meaning": "တဆင့်စကား"
      },
      {
        "word": "手伝う",
        "cleanWord": "手伝う",
        "reading": "てつだう",
        "cleanReading": "てつだう",
        "romaji": "tetsudau",
        "meaning": "ကူညီသည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、伝わるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、つたわるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (တဆင့်ပြောခံရသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に伝えることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに つたえることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (တဆင့်ပြောသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 241,
    "kanji": "感",
    "strokes": 13,
    "onyomi": "カン",
    "kunyomi": "—",
    "english": "feel, impression, emotion, moved, admire",
    "romaji": "kan kanjiru kanji kansou kanjou kandou kanshin kankaku",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "感じる",
        "cleanWord": "感じる",
        "reading": "かんじる",
        "cleanReading": "かんじる",
        "romaji": "kanjiru",
        "meaning": "ခံစားသည်"
      },
      {
        "word": "感じ",
        "cleanWord": "感じ",
        "reading": "かんじ",
        "cleanReading": "かんじ",
        "romaji": "kanji",
        "meaning": "ခံစားမှု"
      },
      {
        "word": "感想",
        "cleanWord": "感想",
        "reading": "かんそう",
        "cleanReading": "かんそう",
        "romaji": "kansou",
        "meaning": "ခံစားချက်"
      },
      {
        "word": "感情",
        "cleanWord": "感情",
        "reading": "かんじょう",
        "cleanReading": "かんじょう",
        "romaji": "kanjou",
        "meaning": "အာရုံခံစားမှု"
      },
      {
        "word": "感動(する)",
        "cleanWord": "感動",
        "reading": "かんどう(する)",
        "cleanReading": "かんどう",
        "romaji": "kandou",
        "meaning": "စိတ်လှုပ်ရှားသည်"
      },
      {
        "word": "感心(する)",
        "cleanWord": "感心",
        "reading": "かんしん(する)",
        "cleanReading": "かんしん",
        "romaji": "kanshin",
        "meaning": "စိတ်ထဲမှချီးကျူးခြင်း"
      },
      {
        "word": "感覚",
        "cleanWord": "感覚",
        "reading": "かんかく",
        "cleanReading": "かんかく",
        "romaji": "kankaku",
        "meaning": "ထိတွေ့ခံစားမှု"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に感じるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに かんじるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ခံစားသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、感じについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かんじについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခံစားမှု (感じ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 242,
    "kanji": "濃",
    "strokes": 16,
    "onyomi": "—",
    "kunyomi": "こ-い",
    "english": "thick, dark color, strong flavor",
    "romaji": "koi kosa",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "濃い",
        "cleanWord": "濃い",
        "reading": "こい",
        "cleanReading": "こい",
        "romaji": "koi",
        "meaning": "ပျစ်သော၊ အရောင်ရင့်သော"
      },
      {
        "word": "濃さ",
        "cleanWord": "濃さ",
        "reading": "こさ",
        "cleanReading": "こさ",
        "romaji": "kosa",
        "meaning": "အရင့်"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより濃いと感じる人が多いようです。",
        "furigana": "きょうは いつもより こいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ပျစ်သော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、濃さについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、こさについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရင့် (濃さ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 243,
    "kanji": "厚",
    "strokes": 9,
    "onyomi": "—",
    "kunyomi": "あつ-い",
    "english": "thick, thickness, cardboard",
    "romaji": "atsui atsusa atsugami",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "厚い",
        "cleanWord": "厚い",
        "reading": "あつい",
        "cleanReading": "あつい",
        "romaji": "atsui",
        "meaning": "ထူသော"
      },
      {
        "word": "厚さ",
        "cleanWord": "厚さ",
        "reading": "あつさ",
        "cleanReading": "あつさ",
        "romaji": "atsusa",
        "meaning": "အထူ"
      },
      {
        "word": "厚紙",
        "cleanWord": "厚紙",
        "reading": "あつがみ",
        "cleanReading": "あつがみ",
        "romaji": "atsugami",
        "meaning": "စာရွက်အထူ"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより厚いと感じる人が多いようです。",
        "furigana": "きょうは いつもより あついと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ထူသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、厚さについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、あつさについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အထူ (厚さ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 244,
    "kanji": "薄",
    "strokes": 16,
    "onyomi": "—",
    "kunyomi": "うす-い",
    "english": "thin, pale, weak, light",
    "romaji": "usui",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "薄い",
        "cleanWord": "薄い",
        "reading": "うすい",
        "cleanReading": "うすい",
        "romaji": "usui",
        "meaning": "ပါးသော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより薄いと感じる人が多いようです。",
        "furigana": "きょうは いつもより うすいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ပါးသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "あまり薄い場合は、無理をしないで休んでください。",
        "furigana": "あまり うすい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း ပါးသော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 245,
    "kanji": "細",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "ほそ-い",
    "english": "thin, slender, fine, detailed",
    "romaji": "hosoi hosonagai komakai",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "細い",
        "cleanWord": "細い",
        "reading": "ほそい",
        "cleanReading": "ほそい",
        "romaji": "hosoi",
        "meaning": "ပိန်သော"
      },
      {
        "word": "細長い",
        "cleanWord": "細長い",
        "reading": "ほそながい",
        "cleanReading": "ほそながい",
        "romaji": "hosonagai",
        "meaning": "သေးသွယ်သော"
      },
      {
        "word": "細かい",
        "cleanWord": "細かい",
        "reading": "こまかい",
        "cleanReading": "こまかい",
        "romaji": "komakai",
        "meaning": "သေးနုပ်သော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより細いと感じる人が多いようです。",
        "furigana": "きょうは いつもより ほそいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ပိန်သော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "あまり細長い場合は、無理をしないで休んでください。",
        "furigana": "あまり ほそながい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း သေးသွယ်သော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 246,
    "kanji": "適",
    "strokes": 14,
    "onyomi": "テキ",
    "kunyomi": "—",
    "english": "suitable, appropriate, proper",
    "romaji": "teki tekitou tekisetsu",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "適当",
        "cleanWord": "適当",
        "reading": "てきとう",
        "cleanReading": "てきとう",
        "romaji": "tekitou",
        "meaning": "သင့်တော်သော"
      },
      {
        "word": "適切(な)",
        "cleanWord": "適切",
        "reading": "てきせつ(な)",
        "cleanReading": "てきせつ",
        "romaji": "tekisetsu",
        "meaning": "သင့်လျော်သော၊ ဆီလျော်သော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「適当」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「てきとう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သင့်တော်သော\" (適当) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先生はいつも適切な言葉で説明してくれます。",
        "furigana": "せんせいは いつも てきせつな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း သင့်လျော်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 247,
    "kanji": "遠",
    "strokes": 13,
    "onyomi": "エン",
    "kunyomi": "とお-い",
    "english": "far, distant, excursion, field trip",
    "romaji": "en tooi ensoku",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "遠い",
        "cleanWord": "遠い",
        "reading": "とおい",
        "cleanReading": "とおい",
        "romaji": "tooi",
        "meaning": "ဝေးသော"
      },
      {
        "word": "遠足",
        "cleanWord": "遠足",
        "reading": "えんそく",
        "cleanReading": "えんそく",
        "romaji": "ensoku",
        "meaning": "ပျော်ပွဲစားထွက်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより遠いと感じる人が多いようです。",
        "furigana": "きょうは いつもより とおいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ဝေးသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、遠足について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、えんそくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပျော်ပွဲစားထွက်ခြင်း (遠足) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 248,
    "kanji": "若",
    "strokes": 8,
    "onyomi": "—",
    "kunyomi": "わか-い",
    "english": "young, youth",
    "romaji": "wakai wakamono",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "若い",
        "cleanWord": "若い",
        "reading": "わかい",
        "cleanReading": "わかい",
        "romaji": "wakai",
        "meaning": "ငယ်ရွယ်သော"
      },
      {
        "word": "若者",
        "cleanWord": "若者",
        "reading": "わかもの",
        "cleanReading": "わかもの",
        "romaji": "wakamono",
        "meaning": "လူငယ်"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより若いと感じる人が多いようです。",
        "furigana": "きょうは いつもより わかいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ငယ်ရွယ်သော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、若者について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、わかものについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လူငယ် (若者) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 249,
    "kanji": "静",
    "strokes": 14,
    "onyomi": "—",
    "kunyomi": "しず-か",
    "english": "quiet, calm, peaceful",
    "romaji": "shizuka shizukana",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "静か(な)",
        "cleanWord": "静か",
        "reading": "しずかな",
        "cleanReading": "しずかな",
        "romaji": "shizukana",
        "meaning": "တိတ်ဆိတ်သော"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても静かなので、だれでも使えます。",
        "furigana": "この ほうほうは とても しずかななので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် တိတ်ဆိတ်သော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "先生はいつも静かな言葉で説明してくれます。",
        "furigana": "せんせいは いつも しずかなな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း တိတ်ဆိတ်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 250,
    "kanji": "最",
    "strokes": 12,
    "onyomi": "サイ",
    "kunyomi": "もっと-も",
    "english": "most, recently, first, last, best, worst",
    "romaji": "sai mottomo saikin saisho saigo saitei saikou",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "最も",
        "cleanWord": "最も",
        "reading": "もっとも",
        "cleanReading": "もっとも",
        "romaji": "mottomo",
        "meaning": "....ဆုံး"
      },
      {
        "word": "最近",
        "cleanWord": "最近",
        "reading": "さいきん",
        "cleanReading": "さいきん",
        "romaji": "saikin",
        "meaning": "အခုတလော"
      },
      {
        "word": "最初",
        "cleanWord": "最初",
        "reading": "さいしょ",
        "cleanReading": "さいしょ",
        "romaji": "saisho",
        "meaning": "ဦးဆုံး"
      },
      {
        "word": "最後",
        "cleanWord": "最後",
        "reading": "さいご",
        "cleanReading": "さいご",
        "romaji": "saigo",
        "meaning": "နောက်ဆုံး"
      },
      {
        "word": "最低",
        "cleanWord": "最低",
        "reading": "さいてい",
        "cleanReading": "さいてい",
        "romaji": "saitei",
        "meaning": "အောက်ဆုံး၊ အနိမ့်ဆုံး"
      },
      {
        "word": "最高",
        "cleanWord": "最高",
        "reading": "さいこう",
        "cleanReading": "さいこう",
        "romaji": "saikou",
        "meaning": "ထိပ်ဆုံး၊ အမြင့်ဆုံး၊ အကောင်းဆုံး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「最も」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「もっとも」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"....ဆုံး\" (最も) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、最近について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、さいきんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အခုတလော (最近) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 251,
    "kanji": "真",
    "strokes": 10,
    "onyomi": "シン",
    "kunyomi": "ま",
    "english": "true, pitch dark, right above, midnight, photo",
    "romaji": "shin ma makkura maue mayonaka shashin",
    "category": "Emotions, Relations & Qualities",
    "categoryJp": "感情・人間関係・性質",
    "categoryMm": "စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ",
    "vocab": [
      {
        "word": "真っ暗(な)",
        "cleanWord": "真っ暗",
        "reading": "まっくら(な)",
        "cleanReading": "まっくら",
        "romaji": "makkura",
        "meaning": "မှောင်မည်းသော"
      },
      {
        "word": "真上",
        "cleanWord": "真上",
        "reading": "まうえ",
        "cleanReading": "まうえ",
        "romaji": "maue",
        "meaning": "အပေါ်တည့်တည့်"
      },
      {
        "word": "真夜中",
        "cleanWord": "真夜中",
        "reading": "まよなか",
        "cleanReading": "まよなか",
        "romaji": "mayonaka",
        "meaning": "သန်းခေါင်ယံအချိန်"
      },
      {
        "word": "写真",
        "cleanWord": "写真",
        "reading": "しゃしん",
        "cleanReading": "しゃしん",
        "romaji": "shashin",
        "meaning": "ဓါတ်ပုံ"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても真っ暗なので、だれでも使えます。",
        "furigana": "この ほうほうは とても まっくらなので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် မှောင်မည်းသော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、真上について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、まうえについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အပေါ်တည့်တည့် (真上) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 252,
    "kanji": "登",
    "strokes": 12,
    "onyomi": "ト ・ トウ",
    "kunyomi": "のぼ-る",
    "english": "climb, mountaineering, register",
    "romaji": "to tou noboru yamanobori tozan touroku",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "登る",
        "cleanWord": "登る",
        "reading": "のぼる",
        "cleanReading": "のぼる",
        "romaji": "noboru",
        "meaning": "တက်သည်"
      },
      {
        "word": "山登り",
        "cleanWord": "山登り",
        "reading": "やまのぼり",
        "cleanReading": "やまのぼり",
        "romaji": "yamanobori",
        "meaning": "တောင်တက်ခြင်း"
      },
      {
        "word": "登山",
        "cleanWord": "登山",
        "reading": "とざん",
        "cleanReading": "とざん",
        "romaji": "tozan",
        "meaning": "တောင်တက်ခြင်း"
      },
      {
        "word": "登録(する)",
        "cleanWord": "登録",
        "reading": "とうろく(する)",
        "cleanReading": "とうろく",
        "romaji": "touroku",
        "meaning": "မှတ်ပုံတင်ခြင်း၊ အမည်စာရင်းသွင်းခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に登るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに のぼるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (တက်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、山登りについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、やまのぼりについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တောင်တက်ခြင်း (山登り) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 253,
    "kanji": "泳",
    "strokes": 8,
    "onyomi": "エイ",
    "kunyomi": "およ-ぐ",
    "english": "swim, swimming",
    "romaji": "ei oyogu suiei",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "泳ぐ",
        "cleanWord": "泳ぐ",
        "reading": "およぐ",
        "cleanReading": "およぐ",
        "romaji": "oyogu",
        "meaning": "ရေကူးသည်"
      },
      {
        "word": "水泳",
        "cleanWord": "水泳",
        "reading": "すいえい",
        "cleanReading": "すいえい",
        "romaji": "suiei",
        "meaning": "ရေကူးခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に泳ぐようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに およぐように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရေကူးသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、水泳について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、すいえいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရေကူးခြင်း (水泳) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 254,
    "kanji": "投",
    "strokes": 7,
    "onyomi": "—",
    "kunyomi": "な-げる",
    "english": "throw, pitch, cast",
    "romaji": "nageru",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "投げる",
        "cleanWord": "投げる",
        "reading": "なげる",
        "cleanReading": "なげる",
        "romaji": "nageru",
        "meaning": "ပစ်ပေါက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に投げるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに なげるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပစ်ပေါက်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで投げる必要があります。",
        "furigana": "じかんが たりないので、いそいで なげる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ပစ်ပေါက်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 255,
    "kanji": "打",
    "strokes": 5,
    "onyomi": "—",
    "kunyomi": "う-つ",
    "english": "hit, strike, beat",
    "romaji": "utsu",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "打つ",
        "cleanWord": "打つ",
        "reading": "うつ",
        "cleanReading": "うつ",
        "romaji": "utsu",
        "meaning": "ရိုက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に打つようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに うつように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရိုက်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで打つ必要があります。",
        "furigana": "じかんが たりないので、いそいで うつ ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ရိုက်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 256,
    "kanji": "着",
    "strokes": 12,
    "onyomi": "チャク",
    "kunyomi": "き-る ・ つ-く ・ -ぎ",
    "english": "wear, arrive, kimono, underwear, swimsuit",
    "romaji": "chaku kiru tsuku gi kimono shitagi mizugi touchaku toukyouchaku 12jichaku",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "着る",
        "cleanWord": "着る",
        "reading": "きる",
        "cleanReading": "きる",
        "romaji": "kiru",
        "meaning": "ဝတ်ဆင်သည် (အင်္ကျီ၊ အပေါ်ပိုင်း)"
      },
      {
        "word": "(~に)着く",
        "cleanWord": "着く",
        "reading": "(~に)つく",
        "cleanReading": "つく",
        "romaji": "tsuku",
        "meaning": "ရောက်ရှိသည်"
      },
      {
        "word": "着物",
        "cleanWord": "着物",
        "reading": "きもの",
        "cleanReading": "きもの",
        "romaji": "kimono",
        "meaning": "ကီမိုနို (ဂျပန်အမျိုးသမီးရိုးရာဝတ်စုံ)"
      },
      {
        "word": "下着",
        "cleanWord": "下着",
        "reading": "したぎ",
        "cleanReading": "したぎ",
        "romaji": "shitagi",
        "meaning": "အတွင်းခံ"
      },
      {
        "word": "水着",
        "cleanWord": "水着",
        "reading": "みずぎ",
        "cleanReading": "みずぎ",
        "romaji": "mizugi",
        "meaning": "ရေကူးဝတ်စုံ"
      },
      {
        "word": "到着",
        "cleanWord": "到着",
        "reading": "とうちゃく",
        "cleanReading": "とうちゃく",
        "romaji": "touchaku",
        "meaning": "ဆိုက်ရောက်ခြင်း"
      },
      {
        "word": "東京着",
        "cleanWord": "東京着",
        "reading": "とうきょうちゃく",
        "cleanReading": "とうきょうちゃく",
        "romaji": "toukyouchaku",
        "meaning": "တိုကျိုဆိုက်ရောက်ခြင်း"
      },
      {
        "word": "12時着",
        "cleanWord": "12時着",
        "reading": "12じちゃく",
        "cleanReading": "12じちゃく",
        "romaji": "12jichaku",
        "meaning": "၁၂နာရီရောက်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に着るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに きるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဝတ်ဆင်သည် (အင်္ကျီ) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで着く必要があります。",
        "furigana": "じかんが たりないので、いそいで つく ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ရောက်ရှိသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 257,
    "kanji": "降",
    "strokes": 10,
    "onyomi": "—",
    "kunyomi": "お-りる ・ ふ-る",
    "english": "get off, descend, rain, snow falls",
    "romaji": "oriru furu",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "降りる",
        "cleanWord": "降りる",
        "reading": "おりる",
        "cleanReading": "おりる",
        "romaji": "oriru",
        "meaning": "ဆင်းသည်"
      },
      {
        "word": "(~が)降る",
        "cleanWord": "降る",
        "reading": "(~が)ふる",
        "cleanReading": "ふる",
        "romaji": "furu",
        "meaning": "ရွာသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に降りるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに おりるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဆင်းသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "急に予定が変更されて、驚いて降るところだった。",
        "furigana": "きゅうに よていが へんこうされて、おどろいて ふるところだった。",
        "mm": "ရုတ်တရက် အစီအစဉ်ပြောင်းလဲသွားသဖြင့် အံ့ဩပြီး (ရွာသည်) လုနီးပါးဖြစ်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 258,
    "kanji": "迎",
    "strokes": 7,
    "onyomi": "—",
    "kunyomi": "むか-える",
    "english": "welcome, meet, pick up",
    "romaji": "mukaeru mukaeniiku mukae",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "迎える",
        "cleanWord": "迎える",
        "reading": "むかえる",
        "cleanReading": "むかえる",
        "romaji": "mukaeru",
        "meaning": "ကြိုဆိုသည်"
      },
      {
        "word": "迎えに行く",
        "cleanWord": "迎えに行く",
        "reading": "むかえにいく",
        "cleanReading": "むかえにいく",
        "romaji": "mukaeniiku",
        "meaning": "သွားကြိုသည်"
      },
      {
        "word": "迎え",
        "cleanWord": "迎え",
        "reading": "むかえ",
        "cleanReading": "むかえ",
        "romaji": "mukae",
        "meaning": "ကြိုဆိုခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に迎えるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに むかえるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကြိုဆိုသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いで迎えに行く必要があります。",
        "furigana": "じかんが たりないので、いそいで むかえにいく ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (သွားကြိုသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 259,
    "kanji": "転",
    "strokes": 11,
    "onyomi": "テン",
    "kunyomi": "ころ-ぶ",
    "english": "fall down, transfer school/job, drive, bicycle",
    "romaji": "ten korobu tenkou tenkin unten jitensha kaiten",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "転ぶ",
        "cleanWord": "転ぶ",
        "reading": "ころぶ",
        "cleanReading": "ころぶ",
        "romaji": "korobu",
        "meaning": "လဲသည်၊ ခလုတ်တိုက်လဲသည်"
      },
      {
        "word": "転校(する)",
        "cleanWord": "転校",
        "reading": "てんこう(する)",
        "cleanReading": "てんこう",
        "romaji": "tenkou",
        "meaning": "ကျောင်းပြောင်းသည်"
      },
      {
        "word": "転勤(する)",
        "cleanWord": "転勤",
        "reading": "てんきん(する)",
        "cleanReading": "てんきん",
        "romaji": "tenkin",
        "meaning": "တာဝန်ကျနေရာပြောင်းခြင်း"
      },
      {
        "word": "運転(する)",
        "cleanWord": "運転",
        "reading": "うんてん(する)",
        "cleanReading": "うんてん",
        "romaji": "unten",
        "meaning": "ကားမောင်းသည်၊ ယာဉ်မောင်းသည်"
      },
      {
        "word": "自転車",
        "cleanWord": "自転車",
        "reading": "じてんしゃ",
        "cleanReading": "じてんしゃ",
        "romaji": "jitensha",
        "meaning": "စက်ဘီး"
      },
      {
        "word": "回転(する)",
        "cleanWord": "回転",
        "reading": "かいてん(する)",
        "cleanReading": "かいてん",
        "romaji": "kaiten",
        "meaning": "လည်နေသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に転ぶようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに ころぶように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (လဲသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに転校しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに てんこうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ကျောင်းပြောင်းသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 260,
    "kanji": "育",
    "strokes": 8,
    "onyomi": "イク",
    "kunyomi": "そだ-つ ・ そだ-てる",
    "english": "grow up, raise, education, physical education",
    "romaji": "iku sodatsu sodateru kyouiku taiiku",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)育つ",
        "cleanWord": "育つ",
        "reading": "(~が)そだつ",
        "cleanReading": "そだつ",
        "romaji": "sodatsu",
        "meaning": "ကြီးထွားလာသည်"
      },
      {
        "word": "(~を)育てる",
        "cleanWord": "育てる",
        "reading": "(~を)そだてる",
        "cleanReading": "そだてる",
        "romaji": "sodateru",
        "meaning": "ပြုစုပျိုးထောင်သည်"
      },
      {
        "word": "教育",
        "cleanWord": "教育",
        "reading": "きょういく",
        "cleanReading": "きょういく",
        "romaji": "kyouiku",
        "meaning": "ပညာရေး"
      },
      {
        "word": "体育",
        "cleanWord": "体育",
        "reading": "たいいく",
        "cleanReading": "たいいく",
        "romaji": "taiiku",
        "meaning": "ကိုယ်လက်လှုပ်ရှားမှု၊ ကာယဗေဒ"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、育つようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、そだつように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကြီးထွားလာသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に育てることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに そだてることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ပြုစုပျိုးထောင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 261,
    "kanji": "続",
    "strokes": 13,
    "onyomi": "—",
    "kunyomi": "つづ-く ・ つづ-ける",
    "english": "continue, last, proceed",
    "romaji": "tsuzuku tsuzukeru",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)続く",
        "cleanWord": "続く",
        "reading": "(~が)つづく",
        "cleanReading": "つづく",
        "romaji": "tsuzuku",
        "meaning": "ဆက်လက်ဖြစ်သည်၊ ဆက်သည်"
      },
      {
        "word": "(~を)続ける",
        "cleanWord": "続ける",
        "reading": "(~を)つづける",
        "cleanReading": "つづける",
        "romaji": "tsuzukeru",
        "meaning": "ဆက်လက်ပြုလုပ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、続くようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、つづくように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ဆက်လက်ဖြစ်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に続けることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに つづけることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ဆက်လက်ပြုလုပ်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 262,
    "kanji": "並",
    "strokes": 8,
    "onyomi": "—",
    "kunyomi": "なら-ぶ ・ なら-べる",
    "english": "line up, stand in line, arrange",
    "romaji": "narabu naraberu",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)並ぶ",
        "cleanWord": "並ぶ",
        "reading": "(~が)ならぶ",
        "cleanReading": "ならぶ",
        "romaji": "narabu",
        "meaning": "တန်းစီသည်"
      },
      {
        "word": "(~を)並べる",
        "cleanWord": "並べる",
        "reading": "(~を)ならべる",
        "cleanReading": "ならべる",
        "romaji": "naraberu",
        "meaning": "စီတန်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、並ぶようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、ならぶように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (တန်းစီသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に並べることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに ならべることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (စီတန်းသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 263,
    "kanji": "助",
    "strokes": 7,
    "onyomi": "ジョ",
    "kunyomi": "たす-かる ・ たす-ける",
    "english": "help, rescue, be saved, advice",
    "romaji": "jo tasukaru tasukeru jogen kyuujo",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)助かる",
        "cleanWord": "助かる",
        "reading": "(~が)たすかる",
        "cleanReading": "たすかる",
        "romaji": "tasukaru",
        "meaning": "အသက်ချမ်းသာရာရသည်"
      },
      {
        "word": "(~を)助ける",
        "cleanWord": "助ける",
        "reading": "(~を)たすける",
        "cleanReading": "たすける",
        "romaji": "tasukeru",
        "meaning": "ကယ်တင်သည်"
      },
      {
        "word": "助言(する)",
        "cleanWord": "助言",
        "reading": "じょげん(する)",
        "cleanReading": "じょげん",
        "romaji": "jogen",
        "meaning": "အကြံဉာဏ်ပေးသည်"
      },
      {
        "word": "救助(する)",
        "cleanWord": "救助",
        "reading": "きゅうじょ(する)",
        "cleanReading": "きゅうじょ",
        "romaji": "kyuujo",
        "meaning": "ကယ်တင်သည်၊ အသက်ကယ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、助かるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、たすかるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (အသက်ချမ်းသာရာရသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に助けることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに たすけることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ကယ်တင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 264,
    "kanji": "焼",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "や-ける ・ や-く",
    "english": "bake, grill, burn, roast meat (yakiniku)",
    "romaji": "yakeru yaku yakiniku",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)焼ける",
        "cleanWord": "焼ける",
        "reading": "(~が)やける",
        "cleanReading": "やける",
        "romaji": "yakeru",
        "meaning": "လောင်ကျွမ်းသည်"
      },
      {
        "word": "(~を)焼く",
        "cleanWord": "焼く",
        "reading": "(~を)やく",
        "cleanReading": "やく",
        "romaji": "yaku",
        "meaning": "မီးကင်သည်"
      },
      {
        "word": "焼肉 / 焼き肉",
        "cleanWord": "焼肉",
        "reading": "やきにく",
        "cleanReading": "やきにく",
        "romaji": "yakiniku",
        "meaning": "အသားကင်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、焼けるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、やけるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (လောင်ကျွမ်းသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に焼くことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに やくことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (မီးကင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 265,
    "kanji": "決",
    "strokes": 7,
    "onyomi": "ケツ ・ ケッ",
    "kunyomi": "き-まる ・ き-める",
    "english": "decide, be decided, solve, never",
    "romaji": "ketsu ke kimaru kimeru kaiketsu kesshitenai kettei",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)決まる",
        "cleanWord": "決まる",
        "reading": "(~が)きまる",
        "cleanReading": "きまる",
        "romaji": "kimaru",
        "meaning": "ဆုံးဖြတ်ပြီးဖြစ်သည်"
      },
      {
        "word": "(~を)決める",
        "cleanWord": "決める",
        "reading": "(~を)きめる",
        "cleanReading": "きめる",
        "romaji": "kimeru",
        "meaning": "ဆုံးဖြတ်သည်"
      },
      {
        "word": "解決(する)",
        "cleanWord": "解決",
        "reading": "かいけつ(する)",
        "cleanReading": "かいけつ",
        "romaji": "kaiketsu",
        "meaning": "ဖြေရှင်းသည်"
      },
      {
        "word": "決して~ない",
        "cleanWord": "決してない",
        "reading": "けっして~ない",
        "cleanReading": "けっしてない",
        "romaji": "kesshitenai",
        "meaning": "ဘယ်တော့မှ........မ....ဘူး"
      },
      {
        "word": "決定(する)",
        "cleanWord": "決定",
        "reading": "けってい(する)",
        "cleanReading": "けってい",
        "romaji": "kettei",
        "meaning": "ဆုံးဖြတ်အတည်ပြုသည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、決まるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、きまるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ဆုံးဖြတ်ပြီးဖြစ်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に決めることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに きめることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ဆုံးဖြတ်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 266,
    "kanji": "混",
    "strokes": 12,
    "onyomi": "コン",
    "kunyomi": "ま-ざる ・ ま-ぜる",
    "english": "mix, blend, crowded, congestion",
    "romaji": "kon mazaru mazeru konzatsu",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)混ざる",
        "cleanWord": "混ざる",
        "reading": "(~が)まざる",
        "cleanReading": "まざる",
        "romaji": "mazaru",
        "meaning": "ရောနှောပါနေသည်"
      },
      {
        "word": "(~を)混ぜる",
        "cleanWord": "混ぜる",
        "reading": "(~を)まぜる",
        "cleanReading": "まぜる",
        "romaji": "mazeru",
        "meaning": "ရောစပ်သည်"
      },
      {
        "word": "混雑(する)",
        "cleanWord": "混雑",
        "reading": "こんざつ(する)",
        "cleanReading": "こんざつ",
        "romaji": "konzatsu",
        "meaning": "ရှုပ်ယှက်ခတ်ခြင်း၊ လူရှုပ်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、混ざるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、まざるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ရောနှောပါနေသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に混ぜることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに まぜることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ရောစပ်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 267,
    "kanji": "落",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "お-ちる ・ お-とす",
    "english": "fall, drop, lost property",
    "romaji": "ochiru otosu otoshimono",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)落ちる",
        "cleanWord": "落ちる",
        "reading": "(~が)おちる",
        "cleanReading": "おちる",
        "romaji": "ochiru",
        "meaning": "ပြုတ်ကျသည်၊ ကျသည်"
      },
      {
        "word": "(~を)落とす",
        "cleanWord": "落とす",
        "reading": "(~を)おとす",
        "cleanReading": "おとす",
        "romaji": "otosu",
        "meaning": "ပစ်ချသည်၊ ချသည်"
      },
      {
        "word": "落とし物",
        "cleanWord": "落とし物",
        "reading": "おとしもの",
        "cleanReading": "おとしもの",
        "romaji": "otoshimono",
        "meaning": "ကျကျန်ပစ္စည်း၊ မေ့ကျန်ပစ္စည်း"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、落ちるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、おちるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ပြုတ်ကျသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に落とすことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに おとすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ပစ်ချသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 268,
    "kanji": "汚",
    "strokes": 6,
    "onyomi": "—",
    "kunyomi": "よご-れる ・ よご-す ・ きたな-い",
    "english": "get dirty, stain, dirty, filth",
    "romaji": "yogoreru yogosu kitanai yogore",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "(~が)汚れる",
        "cleanWord": "汚れる",
        "reading": "(~が)よごれる",
        "cleanReading": "よごれる",
        "romaji": "yogoreru",
        "meaning": "ပေကျံသည်"
      },
      {
        "word": "(~を)汚す",
        "cleanWord": "汚す",
        "reading": "(~を)よごす",
        "cleanReading": "よごす",
        "romaji": "yogosu",
        "meaning": "စွန်းထင်းသည်၊ ပေကျံအောင်လုပ်သည်"
      },
      {
        "word": "汚れ",
        "cleanWord": "汚れ",
        "reading": "よごれ",
        "cleanReading": "よごれ",
        "romaji": "yogore",
        "meaning": "အညစ်အကြေး"
      },
      {
        "word": "汚い",
        "cleanWord": "汚い",
        "reading": "きたない",
        "cleanReading": "きたない",
        "romaji": "kitanai",
        "meaning": "ညစ်ပတ်သော"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、汚れるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、よごれるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ပေကျံသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に汚すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに よごすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (စွန်းထင်းသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 269,
    "kanji": "然",
    "strokes": 12,
    "onyomi": "ゼン",
    "kunyomi": "—",
    "english": "nature, natural, of course, by chance",
    "romaji": "zen shizen touzen zenzennai guuzen",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "自然",
        "cleanWord": "自然",
        "reading": "しぜん",
        "cleanReading": "しぜん",
        "romaji": "shizen",
        "meaning": "သဘာဝ"
      },
      {
        "word": "当然",
        "cleanWord": "当然",
        "reading": "とうぜん",
        "cleanReading": "とうぜん",
        "romaji": "touzen",
        "meaning": "ပြောစရာမလို"
      },
      {
        "word": "全然~ない",
        "cleanWord": "全然ない",
        "reading": "ぜんぜん~ない",
        "cleanReading": "ぜんぜんない",
        "romaji": "zenzennai",
        "meaning": "လုံးဝ......မ...ဘူး"
      },
      {
        "word": "偶然",
        "cleanWord": "偶然",
        "reading": "ぐうぜん",
        "cleanReading": "ぐうぜん",
        "romaji": "guuzen",
        "meaning": "ရုတ်တရက်မမျှော်လင့်ဘဲ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「自然」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しぜん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သဘာဝ\" (自然) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、当然について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、とうぜんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပြောစရာမလို (当然) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 270,
    "kanji": "報",
    "strokes": 12,
    "onyomi": "ホウ",
    "kunyomi": "—",
    "english": "report, information, weather forecast, warning",
    "romaji": "hou tenkiyohou jouhou houkoku keihou",
    "category": "Actions, Movement & Weather",
    "categoryJp": "動作・移動・気象",
    "categoryMm": "လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ",
    "vocab": [
      {
        "word": "天気予報",
        "cleanWord": "天気予報",
        "reading": "てんきよほう",
        "cleanReading": "てんきよほう",
        "romaji": "tenkiyohou",
        "meaning": "မိုးလေဝသခန့်မှန်းချက်"
      },
      {
        "word": "情報",
        "cleanWord": "情報",
        "reading": "じょうほう",
        "cleanReading": "じょうほう",
        "romaji": "jouhou",
        "meaning": "သတင်းအချက်အလက်"
      },
      {
        "word": "報告(する)",
        "cleanWord": "報告",
        "reading": "ほうこく(する)",
        "cleanReading": "ほうこく",
        "romaji": "houkoku",
        "meaning": "အစီအရင်ခံခြင်း"
      },
      {
        "word": "警報",
        "cleanWord": "警報",
        "reading": "けいほう",
        "cleanReading": "けいほう",
        "romaji": "keihou",
        "meaning": "သတိပေးမှု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「天気予報」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「てんきよほう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မိုးလေဝသခန့်မှန်းချက်\" (天気予報) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、情報について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じょうほうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သတင်းအချက်အလက် (情報) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 271,
    "kanji": "晴",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "は-れる ・ は-れ",
    "english": "clear up, sunny, fine weather",
    "romaji": "hareru hare",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "晴れる",
        "cleanWord": "晴れる",
        "reading": "はれる",
        "cleanReading": "はれる",
        "romaji": "hareru",
        "meaning": "ရာသီဥတုသာယာသည်၊ နေသာသည်"
      },
      {
        "word": "晴れ",
        "cleanWord": "晴れ",
        "reading": "はれ",
        "cleanReading": "はれ",
        "romaji": "hare",
        "meaning": "နေသာခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に晴れるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに はれるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရာသီဥတုသာယာသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、晴れについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、はれについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နေသာခြင်း (晴れ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 272,
    "kanji": "風",
    "strokes": 9,
    "onyomi": "フウ",
    "kunyomi": "かぜ",
    "english": "wind, cold (illness), typhoon, Japanese style",
    "romaji": "fuu kaze fuusoku taifuu wafuu",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "風",
        "cleanWord": "風",
        "reading": "かぜ",
        "cleanReading": "かぜ",
        "romaji": "kaze",
        "meaning": "လေ"
      },
      {
        "word": "風邪",
        "cleanWord": "風邪",
        "reading": "かぜ",
        "cleanReading": "かぜ",
        "romaji": "kaze",
        "meaning": "အအေးမိခြင်း"
      },
      {
        "word": "風速",
        "cleanWord": "風速",
        "reading": "ふうそく",
        "cleanReading": "ふうそく",
        "romaji": "fuusoku",
        "meaning": "လေတိုက်နှုန်း"
      },
      {
        "word": "台風",
        "cleanWord": "台風",
        "reading": "たいふう",
        "cleanReading": "たいふう",
        "romaji": "taifuu",
        "meaning": "တိုင်ဖုန်းမုန်တိုင်း"
      },
      {
        "word": "和風",
        "cleanWord": "和風",
        "reading": "わふう",
        "cleanReading": "わふう",
        "romaji": "wafuu",
        "meaning": "ဂျပန်စတိုင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「風」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かぜ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လေ\" (風) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、風邪について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かぜについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အအေးမိခြင်း (風邪) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 273,
    "kanji": "吹",
    "strokes": 7,
    "onyomi": "—",
    "kunyomi": "ふ-く",
    "english": "blow, play wind instrument",
    "romaji": "fuku",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "(~が)吹く",
        "cleanWord": "吹く",
        "reading": "(~が)ふく",
        "cleanReading": "ふく",
        "romaji": "fuku",
        "meaning": "တိုက်သည်၊ မှုတ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、吹くようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、ふくように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (တိုက်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "急に予定が変更されて、驚いて吹くところだった。",
        "furigana": "きゅうに よていが へんこうされて、おどろいて ふくところだった。",
        "mm": "ရုတ်တရက် အစီအစဉ်ပြောင်းလဲသွားသဖြင့် အံ့ဩပြီး (တိုက်သည်) လုနီးပါးဖြစ်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 274,
    "kanji": "散",
    "strokes": 12,
    "onyomi": "サン",
    "kunyomi": "ち-る ・ ち-らかす",
    "english": "scatter, fall (blossoms), make a mess, walk",
    "romaji": "san chiru chirakasu sanpo",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "(~が)散る",
        "cleanWord": "散る",
        "reading": "(~が)ちる",
        "cleanReading": "ちる",
        "romaji": "chiru",
        "meaning": "ကြွေကျသည်"
      },
      {
        "word": "散らかす",
        "cleanWord": "散らかす",
        "reading": "ちらかす",
        "cleanReading": "ちらかす",
        "romaji": "chirakasu",
        "meaning": "ရှုပ်ပွစေသည်"
      },
      {
        "word": "散歩(する)",
        "cleanWord": "散歩",
        "reading": "さんぽ(する)",
        "cleanReading": "さんぽ",
        "romaji": "sanpo",
        "meaning": "လမ်းလျှောက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、散るようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、ちるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကြွေကျသည်) လာခဲ့သည်။"
      },
      {
        "jp": "時間が足りないので、急いで散らかす必要があります。",
        "furigana": "じかんが たりないので、いそいで ちらかす ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ရှုပ်ပွစေသည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 275,
    "kanji": "雪",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "ゆき",
    "english": "snow, heavy snow",
    "romaji": "yuki ooyuki",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "雪",
        "cleanWord": "雪",
        "reading": "ゆき",
        "cleanReading": "ゆき",
        "romaji": "yuki",
        "meaning": "နှင်း"
      },
      {
        "word": "大雪",
        "cleanWord": "大雪",
        "reading": "おおゆき",
        "cleanReading": "おおゆき",
        "romaji": "ooyuki",
        "meaning": "နှင်းများ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「雪」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ゆき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နှင်း\" (雪) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、大雪について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おおゆきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နှင်းများ (大雪) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 276,
    "kanji": "雲",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "くも",
    "english": "cloud, cloudy",
    "romaji": "kumo",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "雲",
        "cleanWord": "雲",
        "reading": "くも",
        "cleanReading": "くも",
        "romaji": "kumo",
        "meaning": "တိမ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「雲」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「くも」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တိမ်\" (雲) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、雲について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、くもについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တိမ် (雲) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 277,
    "kanji": "波",
    "strokes": 8,
    "onyomi": "ハ ・ パ",
    "kunyomi": "なみ",
    "english": "wave, radio wave",
    "romaji": "ha pa nami denpa",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "波",
        "cleanWord": "波",
        "reading": "なみ",
        "cleanReading": "なみ",
        "romaji": "nami",
        "meaning": "လှိုင်း"
      },
      {
        "word": "電波",
        "cleanWord": "電波",
        "reading": "でんぱ",
        "cleanReading": "でんぱ",
        "romaji": "denpa",
        "meaning": "လျှပ်စစ်လှိုင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「波」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「なみ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လှိုင်း\" (波) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、電波について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、でんぱについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လျှပ်စစ်လှိုင်း (電波) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 278,
    "kanji": "海",
    "strokes": 9,
    "onyomi": "カイ",
    "kunyomi": "うみ",
    "english": "sea, ocean, overseas, abroad",
    "romaji": "kai umi kaigai",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "海",
        "cleanWord": "海",
        "reading": "うみ",
        "cleanReading": "うみ",
        "romaji": "umi",
        "meaning": "ပင်လယ်"
      },
      {
        "word": "海外",
        "cleanWord": "海外",
        "reading": "かいがい",
        "cleanReading": "かいがい",
        "romaji": "kaigai",
        "meaning": "နိုင်ငံခြား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「海」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「うみ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပင်လယ်\" (海) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、海外について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かいがいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နိုင်ငံခြား (海外) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 279,
    "kanji": "同",
    "strokes": 6,
    "onyomi": "ドウ",
    "kunyomi": "おな-じ",
    "english": "same, simultaneously, equal amount",
    "romaji": "dou onaji doujini douryou",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "同時に",
        "cleanWord": "同時に",
        "reading": "どうじに",
        "cleanReading": "どうじに",
        "romaji": "doujini",
        "meaning": "တချိန်တည်း၊ တပြိုင်ထဲ"
      },
      {
        "word": "同量",
        "cleanWord": "同量",
        "reading": "どうりょう",
        "cleanReading": "どうりょう",
        "romaji": "douryou",
        "meaning": "ပမာဏတူ၊ အဆတူ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「同時に」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「どうじに」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တချိန်တည်း\" (同時に) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、同量について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、どうりょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပမာဏတူ (同量) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 280,
    "kanji": "植",
    "strokes": 12,
    "onyomi": "ショク",
    "kunyomi": "う-える",
    "english": "plant, vegetation, botanical",
    "romaji": "shoku ueru shokubutsu",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "植える",
        "cleanWord": "植える",
        "reading": "うえる",
        "cleanReading": "うえる",
        "romaji": "ueru",
        "meaning": "စိုက်ပျိုးသည်"
      },
      {
        "word": "植物",
        "cleanWord": "植物",
        "reading": "しょくぶつ",
        "cleanReading": "しょくぶつ",
        "romaji": "shokubutsu",
        "meaning": "သစ်ပင်ပန်းမံ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に植えるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに うえるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (စိုက်ပျိုးသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、植物について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょくぶつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သစ်ပင်ပန်းမံ (植物) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 281,
    "kanji": "緑",
    "strokes": 14,
    "onyomi": "—",
    "kunyomi": "みどり",
    "english": "green, greenery",
    "romaji": "midori midoriiro",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "緑",
        "cleanWord": "緑",
        "reading": "みどり",
        "cleanReading": "みどり",
        "romaji": "midori",
        "meaning": "အစိမ်း"
      },
      {
        "word": "緑色",
        "cleanWord": "緑色",
        "reading": "みどりいろ",
        "cleanReading": "みどりいろ",
        "romaji": "midoriiro",
        "meaning": "အစိမ်းရောင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「緑」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「みどり」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အစိမ်း\" (緑) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、緑色について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、みどりいろについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အစိမ်းရောင် (緑色) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 282,
    "kanji": "葉",
    "strokes": 12,
    "onyomi": "ヨウ",
    "kunyomi": "は",
    "english": "leaf, foliage, word, language",
    "romaji": "you ha kotoba happa",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "葉",
        "cleanWord": "葉",
        "reading": "は",
        "cleanReading": "は",
        "romaji": "ha",
        "meaning": "အရွက်"
      },
      {
        "word": "言葉",
        "cleanWord": "言葉",
        "reading": "ことば",
        "cleanReading": "ことば",
        "romaji": "kotoba",
        "meaning": "စကားလုံး"
      },
      {
        "word": "葉っぱ",
        "cleanWord": "葉っぱ",
        "reading": "はっぱ",
        "cleanReading": "はっぱ",
        "romaji": "happa",
        "meaning": "အရွက်၊ သစ်ရွက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「葉」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「は」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အရွက်\" (葉) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、言葉について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ことばについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စကားလုံး (言葉) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 283,
    "kanji": "土",
    "strokes": 3,
    "onyomi": "ト ・ ド",
    "kunyomi": "つち",
    "english": "soil, earth, land, Saturday",
    "romaji": "to do tsuchi tochi doyoubi",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "土",
        "cleanWord": "土",
        "reading": "つち",
        "cleanReading": "つち",
        "romaji": "tsuchi",
        "meaning": "မြေ"
      },
      {
        "word": "土地",
        "cleanWord": "土地",
        "reading": "とち",
        "cleanReading": "とち",
        "romaji": "tochi",
        "meaning": "မြေကြီး"
      },
      {
        "word": "土曜日",
        "cleanWord": "土曜日",
        "reading": "どようび",
        "cleanReading": "どようび",
        "romaji": "doyoubi",
        "meaning": "စနေနေ့"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「土」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「つち」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မြေ\" (土) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、土地について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、とちについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မြေကြီး (土地) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 284,
    "kanji": "草",
    "strokes": 9,
    "onyomi": "ソウ",
    "kunyomi": "くさ",
    "english": "grass, weeds, grassland",
    "romaji": "sou kusa sougen",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "草",
        "cleanWord": "草",
        "reading": "くさ",
        "cleanReading": "くさ",
        "romaji": "kusa",
        "meaning": "မြက်"
      },
      {
        "word": "草原",
        "cleanWord": "草原",
        "reading": "そうげん",
        "cleanReading": "そうげん",
        "romaji": "sougen",
        "meaning": "မြက်ခင်းပြင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「草」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「くさ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မြက်\" (草) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、草原について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、そうげんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မြက်ခင်းပြင် (草原) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 285,
    "kanji": "枝",
    "strokes": 8,
    "onyomi": "—",
    "kunyomi": "えだ",
    "english": "branch, twig, fork",
    "romaji": "eda edawakare",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "枝",
        "cleanWord": "枝",
        "reading": "えだ",
        "cleanReading": "えだ",
        "romaji": "eda",
        "meaning": "အကိုင်း"
      },
      {
        "word": "枝分かれ",
        "cleanWord": "枝分かれ",
        "reading": "えだわかれ",
        "cleanReading": "えだわかれ",
        "romaji": "edawakare",
        "meaning": "အကိုင်းဖြာထွက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「枝」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「えだ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အကိုင်း\" (枝) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、枝分かれについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、えだわかれについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အကိုင်းဖြာထွက် (枝分かれ) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 286,
    "kanji": "根",
    "strokes": 10,
    "onyomi": "—",
    "kunyomi": "ね",
    "english": "root, roof",
    "romaji": "ne yane nekko",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "根",
        "cleanWord": "根",
        "reading": "ね",
        "cleanReading": "ね",
        "romaji": "ne",
        "meaning": "အမြစ်"
      },
      {
        "word": "屋根",
        "cleanWord": "屋根",
        "reading": "やね",
        "cleanReading": "やね",
        "romaji": "yane",
        "meaning": "အိမ်ခေါင်မိုး"
      },
      {
        "word": "根っこ",
        "cleanWord": "根っこ",
        "reading": "ねっこ",
        "cleanReading": "ねっこ",
        "romaji": "nekko",
        "meaning": "ရေသောက်မြစ်၊ ရင်းမြစ်၊ အမြစ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「根」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ね」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အမြစ်\" (根) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、屋根について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、やねについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အိမ်ခေါင်မိုး (屋根) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 287,
    "kanji": "農",
    "strokes": 13,
    "onyomi": "ノウ",
    "kunyomi": "—",
    "english": "agriculture, farming, farmer",
    "romaji": "nou nougyou nousagyou nouka",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "農業",
        "cleanWord": "農業",
        "reading": "のうぎょう",
        "cleanReading": "のうぎょう",
        "romaji": "nougyou",
        "meaning": "လယ်ယာစိုက်ပျိုးရေး"
      },
      {
        "word": "農作業",
        "cleanWord": "農作業",
        "reading": "のうさぎょう",
        "cleanReading": "のうさぎょう",
        "romaji": "nousagyou",
        "meaning": "လယ်ယာလုပ်ငန်း"
      },
      {
        "word": "農家",
        "cleanWord": "農家",
        "reading": "のうか",
        "cleanReading": "のうか",
        "romaji": "nouka",
        "meaning": "လယ်လုပ်သူမိသားစု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「農業」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「のうぎょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လယ်ယာစိုက်ပျိုးရေး\" (農業) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、農作業について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、のうさぎょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လယ်ယာလုပ်ငန်း (農作業) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 288,
    "kanji": "紅",
    "strokes": 9,
    "onyomi": "コウ",
    "kunyomi": "—",
    "english": "crimson, autumn leaves, black tea",
    "romaji": "kou kouyou momiji koucha",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "紅葉",
        "cleanWord": "紅葉",
        "reading": "こうよう",
        "cleanReading": "こうよう",
        "romaji": "kouyou",
        "meaning": "အရွက်နီ"
      },
      {
        "word": "★紅葉",
        "cleanWord": "紅葉",
        "reading": "もみじ",
        "cleanReading": "もみじ",
        "romaji": "momiji",
        "meaning": "Momiji အရွက်၊ မေပယ်ရွက်"
      },
      {
        "word": "紅茶",
        "cleanWord": "紅茶",
        "reading": "こうちゃ",
        "cleanReading": "こうちゃ",
        "romaji": "koucha",
        "meaning": "လက်ဖက်ရည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「紅葉」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「こうよう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အရွက်နီ\" (紅葉) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、紅葉について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、もみじについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ Momiji အရွက် (紅葉) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 289,
    "kanji": "黄",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "き",
    "english": "yellow",
    "romaji": "ki kiiro kiiroi",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "黄色",
        "cleanWord": "黄色",
        "reading": "きいろ",
        "cleanReading": "きいろ",
        "romaji": "kiiro",
        "meaning": "အဝါရောင်"
      },
      {
        "word": "黄色い",
        "cleanWord": "黄色い",
        "reading": "きいろい",
        "cleanReading": "きいろい",
        "romaji": "kiiroi",
        "meaning": "အဝါရောင်ဝါသော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「黄色」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「きいろ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အဝါရောင်\" (黄色) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "あまり黄色い場合は、無理をしないで休んでください。",
        "furigana": "あまり きいろい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း အဝါရောင်ဝါသော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 290,
    "kanji": "裏",
    "strokes": 13,
    "onyomi": "—",
    "kunyomi": "うら",
    "english": "back, reverse side, turn inside out",
    "romaji": "ura uragaesu uragawa uragaeshininaru",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "裏",
        "cleanWord": "裏",
        "reading": "うら",
        "cleanReading": "うら",
        "romaji": "ura",
        "meaning": "နောက်ဘက်၊ ကျောဘက်"
      },
      {
        "word": "裏返す",
        "cleanWord": "裏返す",
        "reading": "うらがえす",
        "cleanReading": "うらがえす",
        "romaji": "uragaesu",
        "meaning": "ပြောင်းပြန်လှန်သည်"
      },
      {
        "word": "裏側",
        "cleanWord": "裏側",
        "reading": "うらがわ",
        "cleanReading": "うらがわ",
        "romaji": "uragawa",
        "meaning": "နောက်ဘက် (မမြင်ရသောအပိုင်:)"
      },
      {
        "word": "裏返しになる",
        "cleanWord": "裏返しになる",
        "reading": "うらがえしになる",
        "cleanReading": "うらがえしになる",
        "romaji": "uragaeshininaru",
        "meaning": "ပြောင်းပြန်ဖြစ်သည်၊ ဆန့်ကျင်ဘက်ဖြစ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「裏」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「うら」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နောက်ဘက်\" (裏) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで裏返す必要があります。",
        "furigana": "じかんが たりないので、いそいで うらがえす ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ပြောင်းပြန်လှန်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 291,
    "kanji": "虫",
    "strokes": 6,
    "onyomi": "—",
    "kunyomi": "むし",
    "english": "insect, bug, worm",
    "romaji": "mushi",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "虫",
        "cleanWord": "虫",
        "reading": "むし",
        "cleanReading": "むし",
        "romaji": "mushi",
        "meaning": "ပိုးကောင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「虫」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「むし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပိုးကောင်\" (虫) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、虫について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、むしについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပိုးကောင် (虫) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 292,
    "kanji": "鳴",
    "strokes": 14,
    "onyomi": "—",
    "kunyomi": "な-く ・ な-る",
    "english": "chirp, bark, sing, ring, sound",
    "romaji": "naku naru",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "(~が)鳴く",
        "cleanWord": "鳴く",
        "reading": "(~が)なく",
        "cleanReading": "なく",
        "romaji": "naku",
        "meaning": "အော်မြည်သည်"
      },
      {
        "word": "(~が)鳴る",
        "cleanWord": "鳴る",
        "reading": "(~が)なる",
        "cleanReading": "なる",
        "romaji": "naru",
        "meaning": "မြည်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、鳴くようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、なくように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (အော်မြည်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "急に予定が変更されて、驚いて鳴るところだった。",
        "furigana": "きゅうに よていが へんこうされて、おどろいて なるところだった。",
        "mm": "ရုတ်တရက် အစီအစဉ်ပြောင်းလဲသွားသဖြင့် အံ့ဩပြီး (မြည်သည်) လုနီးပါးဖြစ်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 293,
    "kanji": "池",
    "strokes": 6,
    "onyomi": "チ",
    "kunyomi": "いけ",
    "english": "pond, battery",
    "romaji": "chi ike denchi",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "池",
        "cleanWord": "池",
        "reading": "いけ",
        "cleanReading": "いけ",
        "romaji": "ike",
        "meaning": "ရေကန်"
      },
      {
        "word": "電池",
        "cleanWord": "電池",
        "reading": "でんち",
        "cleanReading": "でんち",
        "romaji": "denchi",
        "meaning": "ဓါတ်ခဲ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「池」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いけ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရေကန်\" (池) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、電池について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、でんちについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဓါတ်ခဲ (電池) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 294,
    "kanji": "毛",
    "strokes": 4,
    "onyomi": "モウ",
    "kunyomi": "け",
    "english": "hair, fur, wool, blanket",
    "romaji": "mou ke kaminoke moufu",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "毛",
        "cleanWord": "毛",
        "reading": "け",
        "cleanReading": "け",
        "romaji": "ke",
        "meaning": "အမွှေး"
      },
      {
        "word": "髪の毛",
        "cleanWord": "髪の毛",
        "reading": "かみのけ",
        "cleanReading": "かみのけ",
        "romaji": "kaminoke",
        "meaning": "ဆံပင်မွှေး"
      },
      {
        "word": "毛布",
        "cleanWord": "毛布",
        "reading": "もうふ",
        "cleanReading": "もうふ",
        "romaji": "moufu",
        "meaning": "စောင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「毛」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「け」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အမွှေး\" (毛) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、髪の毛について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かみのけについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆံပင်မွှေး (髪の毛) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 295,
    "kanji": "血",
    "strokes": 6,
    "onyomi": "ケツ",
    "kunyomi": "ち",
    "english": "blood, bleeding",
    "romaji": "ketsu chi shukketsu",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "血",
        "cleanWord": "血",
        "reading": "ち",
        "cleanReading": "ち",
        "romaji": "chi",
        "meaning": "သွေး"
      },
      {
        "word": "出血(する)",
        "cleanWord": "出血",
        "reading": "しゅっけつ",
        "cleanReading": "しゅっけつ",
        "romaji": "shukketsu",
        "meaning": "သွေးထွက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「血」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ち」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သွေး\" (血) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに出血しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに しゅっけつしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း သွေးထွက်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 296,
    "kanji": "吸",
    "strokes": 6,
    "onyomi": "キュウ",
    "kunyomi": "す-う",
    "english": "inhale, smoke, breathe, absorb",
    "romaji": "kyuu suu kokyuu",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "吸う",
        "cleanWord": "吸う",
        "reading": "すう",
        "cleanReading": "すう",
        "romaji": "suu",
        "meaning": "ရှူသည်"
      },
      {
        "word": "呼吸(する)",
        "cleanWord": "呼吸",
        "reading": "こきゅう(する)",
        "cleanReading": "こきゅう",
        "romaji": "kokyuu",
        "meaning": "အသက်ရှုသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に吸うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに すうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ရှူသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに呼吸しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに こきゅうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အသက်ရှုသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 297,
    "kanji": "命",
    "strokes": 8,
    "onyomi": "メイ",
    "kunyomi": "いのち",
    "english": "life, fate",
    "romaji": "mei inochi seimei",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "命",
        "cleanWord": "命",
        "reading": "いのち",
        "cleanReading": "いのち",
        "romaji": "inochi",
        "meaning": "အသက်၊ ဇီဝိန်"
      },
      {
        "word": "生命",
        "cleanWord": "生命",
        "reading": "せいめい",
        "cleanReading": "せいめい",
        "romaji": "seimei",
        "meaning": "အသက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「命」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いのち」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အသက်\" (命) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、生命について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せいめいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အသက် (生命) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 298,
    "kanji": "地",
    "strokes": 6,
    "onyomi": "チ ・ ジ",
    "kunyomi": "—",
    "english": "ground, land, region, geography, earthquake",
    "romaji": "chi ji tochi kankouchi sanchi chiri akichi chihou jimen jimi jishin",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "土地",
        "cleanWord": "土地",
        "reading": "とち",
        "cleanReading": "とち",
        "romaji": "tochi",
        "meaning": "မြေ"
      },
      {
        "word": "観光地",
        "cleanWord": "観光地",
        "reading": "かんこうち",
        "cleanReading": "かんこうち",
        "romaji": "kankouchi",
        "meaning": "ခရီးသွားရန်နေရာ"
      },
      {
        "word": "産地",
        "cleanWord": "産地",
        "reading": "さんち",
        "cleanReading": "さんち",
        "romaji": "sanchi",
        "meaning": "ထွက်ရှိရာဒေသ"
      },
      {
        "word": "地理",
        "cleanWord": "地理",
        "reading": "ちり",
        "cleanReading": "ちり",
        "romaji": "chiri",
        "meaning": "ပထဝီ"
      },
      {
        "word": "空き地",
        "cleanWord": "空き地",
        "reading": "あきち",
        "cleanReading": "あきち",
        "romaji": "akichi",
        "meaning": "မြေလွတ်"
      },
      {
        "word": "地方",
        "cleanWord": "地方",
        "reading": "ちほう",
        "cleanReading": "ちほう",
        "romaji": "chihou",
        "meaning": "ဒေသနယ်"
      },
      {
        "word": "地面",
        "cleanWord": "地面",
        "reading": "じめん",
        "cleanReading": "じめん",
        "romaji": "jimen",
        "meaning": "မြေမျက်နှာပြင်"
      },
      {
        "word": "地味(な)",
        "cleanWord": "地味",
        "reading": "じみ(な)",
        "cleanReading": "じみ",
        "romaji": "jimi",
        "meaning": "မှေးမှိန်သော၊ မပေါ်လွင်သော"
      },
      {
        "word": "地震",
        "cleanWord": "地震",
        "reading": "じしん",
        "cleanReading": "じしん",
        "romaji": "jishin",
        "meaning": "ငလျင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「土地」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「とち」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မြေ\" (土地) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、観光地について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かんこうちについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခရီးသွားရန်နေရာ (観光地) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 299,
    "kanji": "他",
    "strokes": 5,
    "onyomi": "タ",
    "kunyomi": "ほか",
    "english": "other, another, stranger",
    "romaji": "ta hoka hokani sonohoka tanin",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "他",
        "cleanWord": "他",
        "reading": "ほか",
        "cleanReading": "ほか",
        "romaji": "hoka",
        "meaning": "တခြား"
      },
      {
        "word": "他に",
        "cleanWord": "他に",
        "reading": "ほかに",
        "cleanReading": "ほかに",
        "romaji": "hokani",
        "meaning": "ထို့ပြင်၊ နောက်ထပ်"
      },
      {
        "word": "その他",
        "cleanWord": "その他",
        "reading": "そのほか",
        "cleanReading": "そのほか",
        "romaji": "sonohoka",
        "meaning": "ဒီ့အပြင်၊ အဲ့ဒါအပြင်"
      },
      {
        "word": "他人",
        "cleanWord": "他人",
        "reading": "たにん",
        "cleanReading": "たにん",
        "romaji": "tanin",
        "meaning": "တခြားသူ၊ လူစိမ်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「他」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ほか」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"တခြား\" (他) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、他にについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ほかにについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ထို့ပြင် (他に) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 300,
    "kanji": "皿",
    "strokes": 5,
    "onyomi": "—",
    "kunyomi": "さら ・ ざら",
    "english": "plate, dish, ashtray",
    "romaji": "sara zara haizara",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "皿",
        "cleanWord": "皿",
        "reading": "さら",
        "cleanReading": "さら",
        "romaji": "sara",
        "meaning": "ပန်းကန်ပြား"
      },
      {
        "word": "灰皿",
        "cleanWord": "灰皿",
        "reading": "はいざら",
        "cleanReading": "はいざら",
        "romaji": "haizara",
        "meaning": "ဆေးလိပ်ပြာခွက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「皿」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「さら」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပန်းကန်ပြား\" (皿) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、灰皿について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、はいざらについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆေးလိပ်ပြာခွက် (灰皿) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 301,
    "kanji": "景",
    "strokes": 12,
    "onyomi": "ケイ",
    "kunyomi": "—",
    "english": "scenery, landscape, view",
    "romaji": "kei fuukei keshiki",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "風景",
        "cleanWord": "風景",
        "reading": "ふうけい",
        "cleanReading": "ふうけい",
        "romaji": "fuukei",
        "meaning": "မြင်ကွင်း၊ ရှုခင်း"
      },
      {
        "word": "景色",
        "cleanWord": "景色",
        "reading": "けしき",
        "cleanReading": "けしき",
        "romaji": "keshiki",
        "meaning": "တောတောင်ရှုခင်း၊ သဘာဝရှုခင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「風景」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ふうけい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မြင်ကွင်း\" (風景) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、景色について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、けしきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တောတောင်ရှုခင်း (景色) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 302,
    "kanji": "湖",
    "strokes": 12,
    "onyomi": "コ",
    "kunyomi": "みずうみ",
    "english": "lake, Inle Lake",
    "romaji": "ko mizuumi inre-ko",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "湖",
        "cleanWord": "湖",
        "reading": "みずうみ",
        "cleanReading": "みずうみ",
        "romaji": "mizuumi",
        "meaning": "ရေကန်"
      },
      {
        "word": "インレー湖",
        "cleanWord": "インレー湖",
        "reading": "インレーこ",
        "cleanReading": "インレーこ",
        "romaji": "inre-ko",
        "meaning": "အင်းလေးကန်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「湖」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「みずうみ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရေကန်\" (湖) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、インレー湖について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、インレーこについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အင်းလေးကန် (インレー湖) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 303,
    "kanji": "船",
    "strokes": 11,
    "onyomi": "セン",
    "kunyomi": "ふね",
    "english": "ship, boat, vessel",
    "romaji": "sen fune oogatasen kogatasen",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "船",
        "cleanWord": "船",
        "reading": "ふね",
        "cleanReading": "ふね",
        "romaji": "fune",
        "meaning": "သင်္ဘော"
      },
      {
        "word": "大型船",
        "cleanWord": "大型船",
        "reading": "おおがたせん",
        "cleanReading": "おおがたせん",
        "romaji": "oogatasen",
        "meaning": "သင်္ဘောကြီး"
      },
      {
        "word": "小型船",
        "cleanWord": "小型船",
        "reading": "こがたせん",
        "cleanReading": "こがたせん",
        "romaji": "kogatasen",
        "meaning": "သင်္ဘောသေး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「船」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ふね」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သင်္ဘော\" (船) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、大型船について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おおがたせんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သင်္ဘောကြီး (大型船) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 304,
    "kanji": "石",
    "strokes": 5,
    "onyomi": "セキ ・ セッ",
    "kunyomi": "いし",
    "english": "stone, rock, soap, petroleum",
    "romaji": "seki se ishi sekken sekiyu",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "石",
        "cleanWord": "石",
        "reading": "いし",
        "cleanReading": "いし",
        "romaji": "ishi",
        "meaning": "ကျောက်ခဲ"
      },
      {
        "word": "石けん",
        "cleanWord": "石けん",
        "reading": "せっけん",
        "cleanReading": "せっけん",
        "romaji": "sekken",
        "meaning": "ဆပ်ပြာ"
      },
      {
        "word": "石油",
        "cleanWord": "石油",
        "reading": "せきゆ",
        "cleanReading": "せきゆ",
        "romaji": "sekiyu",
        "meaning": "ရေနံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「石」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကျောက်ခဲ\" (石) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、石けんについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せっけんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဆပ်ပြာ (石けん) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 305,
    "kanji": "岩",
    "strokes": 8,
    "onyomi": "ガン",
    "kunyomi": "いわ",
    "english": "rock, crag, boulder",
    "romaji": "gan iwa ganseki",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "岩",
        "cleanWord": "岩",
        "reading": "いわ",
        "cleanReading": "いわ",
        "romaji": "iwa",
        "meaning": "ကျောက်ဆောင်"
      },
      {
        "word": "岩石",
        "cleanWord": "岩石",
        "reading": "がんせき",
        "cleanReading": "がんせき",
        "romaji": "ganseki",
        "meaning": "ကျောက်ဆောင်၊ ကျောက်တုံး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「岩」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いわ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကျောက်ဆောင်\" (岩) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、岩石について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、がんせきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကျောက်ဆောင် (岩石) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 306,
    "kanji": "馬",
    "strokes": 10,
    "onyomi": "バ",
    "kunyomi": "うま",
    "english": "horse, horseback riding",
    "romaji": "ba uma jouba",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "馬",
        "cleanWord": "馬",
        "reading": "うま",
        "cleanReading": "うま",
        "romaji": "uma",
        "meaning": "မြင်း"
      },
      {
        "word": "乗馬(する)",
        "cleanWord": "乗馬",
        "reading": "じょうば(する)",
        "cleanReading": "じょうば",
        "romaji": "jouba",
        "meaning": "မြင်းစီးသည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「馬」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「うま」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မြင်း\" (馬) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに乗馬しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに じょうばしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း မြင်းစီးသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 307,
    "kanji": "砂",
    "strokes": 9,
    "onyomi": "サ",
    "kunyomi": "すな",
    "english": "sand, sugar, desert",
    "romaji": "sa suna satou sabaku",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "砂",
        "cleanWord": "砂",
        "reading": "すな",
        "cleanReading": "すな",
        "romaji": "suna",
        "meaning": "သဲ"
      },
      {
        "word": "砂糖",
        "cleanWord": "砂糖",
        "reading": "さとう",
        "cleanReading": "さとう",
        "romaji": "satou",
        "meaning": "သကြား"
      },
      {
        "word": "砂漠",
        "cleanWord": "砂漠",
        "reading": "さばく",
        "cleanReading": "さばく",
        "romaji": "sabaku",
        "meaning": "သဲကန္တာရ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「砂」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「すな」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"သဲ\" (砂) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、砂糖について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、さとうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သကြား (砂糖) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 308,
    "kanji": "島",
    "strokes": 10,
    "onyomi": "—",
    "kunyomi": "しま",
    "english": "island, island country",
    "romaji": "shima shimaguni jawatou",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "島",
        "cleanWord": "島",
        "reading": "しま",
        "cleanReading": "しま",
        "romaji": "shima",
        "meaning": "ကျွန်း"
      },
      {
        "word": "島国",
        "cleanWord": "島国",
        "reading": "しまぐに",
        "cleanReading": "しまぐに",
        "romaji": "shimaguni",
        "meaning": "ကျွန်းနိုင်ငံ"
      },
      {
        "word": "ジャワ島",
        "cleanWord": "ジャワ島",
        "reading": "じゃわとう",
        "cleanReading": "じゃわとう",
        "romaji": "jawatou",
        "meaning": "ဂျာဝါကျွန်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「島」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しま」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကျွန်း\" (島) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、島国について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しまぐにについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကျွန်းနိုင်ငံ (島国) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 309,
    "kanji": "油",
    "strokes": 8,
    "onyomi": "ユ",
    "kunyomi": "あぶら",
    "english": "oil, soy sauce",
    "romaji": "yu abura shouyu",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "油",
        "cleanWord": "油",
        "reading": "あぶら",
        "cleanReading": "あぶら",
        "romaji": "abura",
        "meaning": "ဆီ"
      },
      {
        "word": "しょう油",
        "cleanWord": "しょう油",
        "reading": "しょうゆ",
        "cleanReading": "しょうゆ",
        "romaji": "shouyu",
        "meaning": "ပဲငံပြာရည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「油」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「あぶら」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆီ\" (油) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、しょう油について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょうゆについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပဲငံပြာရည် (しょう油) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 310,
    "kanji": "守",
    "strokes": 6,
    "onyomi": "—",
    "kunyomi": "まも-る ・ まも-り",
    "english": "protect, obey, charm/amulet, absence",
    "romaji": "mamoru mamori omamori rusu",
    "category": "Nature, Environment & Geography",
    "categoryJp": "自然・環境・地理",
    "categoryMm": "သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်",
    "vocab": [
      {
        "word": "守る",
        "cleanWord": "守る",
        "reading": "まもる",
        "cleanReading": "まもる",
        "romaji": "mamoru",
        "meaning": "လိုက်နာသည်၊ ထိန်းသိမ်းသည်"
      },
      {
        "word": "お守り",
        "cleanWord": "お守り",
        "reading": "おまもり",
        "cleanReading": "おまもり",
        "romaji": "omamori",
        "meaning": "အဆောင်"
      },
      {
        "word": "留守",
        "cleanWord": "留守",
        "reading": "るす",
        "cleanReading": "るす",
        "romaji": "rusu",
        "meaning": "အိမ်မှာမရှိခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に守るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに まもるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (လိုက်နာသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、お守りについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おまもりについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အဆောင် (お守り) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 311,
    "kanji": "置",
    "strokes": 13,
    "onyomi": "チ",
    "kunyomi": "お-く",
    "english": "put, place, storage place, position",
    "romaji": "chi oku okiba ichi",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "置く",
        "cleanWord": "置く",
        "reading": "おく",
        "cleanReading": "おく",
        "romaji": "oku",
        "meaning": "ထားသည်၊ တပ်ဆင်သည်၊ နေရာချပေးသည်"
      },
      {
        "word": "置き場",
        "cleanWord": "置き場",
        "reading": "おきば",
        "cleanReading": "おきば",
        "romaji": "okiba",
        "meaning": "ထားတဲ့နေရာ"
      },
      {
        "word": "位置",
        "cleanWord": "位置",
        "reading": "いち",
        "cleanReading": "いち",
        "romaji": "ichi",
        "meaning": "တည်နေရာ"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に置くようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに おくように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ထားသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、置き場について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おきばについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ထားတဲ့နေရာ (置き場) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 312,
    "kanji": "昔",
    "strokes": 8,
    "onyomi": "—",
    "kunyomi": "むかし",
    "english": "old times, long ago, once upon a time",
    "romaji": "mukashi",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "昔",
        "cleanWord": "昔",
        "reading": "むかし",
        "cleanReading": "むかし",
        "romaji": "mukashi",
        "meaning": "ရှေးရှေးတုန်းက၊ ဟိုတုန်းက"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「昔」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「むかし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရှေးရှေးတုန်းက\" (昔) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、昔について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、むかしについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရှေးရှေးတုန်းက (昔) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 313,
    "kanji": "未",
    "strokes": 5,
    "onyomi": "ミ",
    "kunyomi": "—",
    "english": "future, minor, unused, undecided",
    "romaji": "mi mirai miseinen mishiyou mitei",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "未来",
        "cleanWord": "未来",
        "reading": "みらい",
        "cleanReading": "みらい",
        "romaji": "mirai",
        "meaning": "အနာဂတ်"
      },
      {
        "word": "未成年",
        "cleanWord": "未成年",
        "reading": "みせいねん",
        "cleanReading": "みせいねん",
        "romaji": "miseinen",
        "meaning": "အရွယ်မရောက်သေးသူ"
      },
      {
        "word": "未使用",
        "cleanWord": "未使用",
        "reading": "みしよう",
        "cleanReading": "みしよう",
        "romaji": "mishiyou",
        "meaning": "မသုံးရသေးခြင်း"
      },
      {
        "word": "未定",
        "cleanWord": "未定",
        "reading": "みてい",
        "cleanReading": "みてい",
        "romaji": "mitei",
        "meaning": "မဆုံးဖြတ်ရသေးခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「未来」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「みらい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အနာဂတ်\" (未来) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、未成年について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、みせいねんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရွယ်မရောက်သေးသူ (未成年) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 314,
    "kanji": "米",
    "strokes": 6,
    "onyomi": "ベイ",
    "kunyomi": "こめ",
    "english": "rice, USA, America",
    "romaji": "bei kome beikoku nanbei",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "米",
        "cleanWord": "米",
        "reading": "こめ",
        "cleanReading": "こめ",
        "romaji": "kome",
        "meaning": "ဆန်"
      },
      {
        "word": "米国",
        "cleanWord": "米国",
        "reading": "べいこく",
        "cleanReading": "べいこく",
        "romaji": "beikoku",
        "meaning": "အမေရိက"
      },
      {
        "word": "南米",
        "cleanWord": "南米",
        "reading": "なんべい",
        "cleanReading": "なんべい",
        "romaji": "nanbei",
        "meaning": "တောင်အမေရိက"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「米」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「こめ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆန်\" (米) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、米国について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、べいこくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အမေရိက (米国) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 315,
    "kanji": "酒",
    "strokes": 10,
    "onyomi": "シュ",
    "kunyomi": "さけ ・ さか",
    "english": "alcohol, sake, liquor store, drunk driving",
    "romaji": "shu sake saka sakaya nihonshu inshuunten",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "(お)酒",
        "cleanWord": "酒",
        "reading": "(お)さけ",
        "cleanReading": "さけ",
        "romaji": "sake",
        "meaning": "အရက်"
      },
      {
        "word": "酒屋",
        "cleanWord": "酒屋",
        "reading": "さかや",
        "cleanReading": "さかや",
        "romaji": "sakaya",
        "meaning": "အရက်ဆိုင်"
      },
      {
        "word": "日本酒",
        "cleanWord": "日本酒",
        "reading": "にほんしゅ",
        "cleanReading": "にほんしゅ",
        "romaji": "nihonshu",
        "meaning": "ဂျပန်အရက်"
      },
      {
        "word": "飲酒運転",
        "cleanWord": "飲酒運転",
        "reading": "いんしゅうんてん",
        "cleanReading": "いんしゅうんてん",
        "romaji": "inshuunten",
        "meaning": "အရက်သောက်ပြီးကားမောင်းခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「酒」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「さけ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အရက်\" (酒) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、酒屋について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、さかやについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရက်ဆိုင် (酒屋) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 316,
    "kanji": "乳",
    "strokes": 8,
    "onyomi": "ニュウ",
    "kunyomi": "—",
    "english": "milk, dairy products",
    "romaji": "nyuu gyuunyuu nyuuseihin",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "牛乳",
        "cleanWord": "牛乳",
        "reading": "ぎゅうにゅう",
        "cleanReading": "ぎゅうにゅう",
        "romaji": "gyuunyuu",
        "meaning": "နွားနို့"
      },
      {
        "word": "乳製品",
        "cleanWord": "乳製品",
        "reading": "にゅうせいひん",
        "cleanReading": "にゅうせいひん",
        "romaji": "nyuuseihin",
        "meaning": "နို့ဖြင့်ပြုလုပ်ထားသောကုန်ပစ္စည်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「牛乳」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ぎゅうにゅう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နွားနို့\" (牛乳) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、乳製品について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、にゅうせいひんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နို့ဖြင့်ပြုလုပ်ထားသောကုန်ပစ္စည်း (乳製品) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 317,
    "kanji": "末",
    "strokes": 5,
    "onyomi": "マツ",
    "kunyomi": "すえ",
    "english": "end, weekend, end of month/year, youngest child",
    "romaji": "matsu sue shuumatsu getsumatsu ketsumatsu nenmatsu sueko",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "末",
        "cleanWord": "末",
        "reading": "すえ",
        "cleanReading": "すえ",
        "romaji": "sue",
        "meaning": "လနောက်ဆုံး၊ အဆုံး"
      },
      {
        "word": "週末",
        "cleanWord": "週末",
        "reading": "しゅうまつ",
        "cleanReading": "しゅうまつ",
        "romaji": "shuumatsu",
        "meaning": "စနေ၊ တနင်္ဂနွေ"
      },
      {
        "word": "月末",
        "cleanWord": "月末",
        "reading": "げつまつ",
        "cleanReading": "げつまつ",
        "romaji": "getsumatsu",
        "meaning": "လကုန်ရက်"
      },
      {
        "word": "結末",
        "cleanWord": "結末",
        "reading": "けつまつ",
        "cleanReading": "けつまつ",
        "romaji": "ketsumatsu",
        "meaning": "အဆုံးသတ်"
      },
      {
        "word": "年末",
        "cleanWord": "年末",
        "reading": "ねんまつ",
        "cleanReading": "ねんまつ",
        "romaji": "nenmatsu",
        "meaning": "နှစ်ကုန်ရက်"
      },
      {
        "word": "末子",
        "cleanWord": "末子",
        "reading": "すえこ",
        "cleanReading": "すえこ",
        "romaji": "sueko",
        "meaning": "အငယ်ဆုံးကလေး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「末」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「すえ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လနောက်ဆုံး\" (末) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、週末について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しゅうまつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စနေ (週末) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 318,
    "kanji": "列",
    "strokes": 6,
    "onyomi": "レツ",
    "kunyomi": "—",
    "english": "row, line, queue",
    "romaji": "retsu gyouretsu 2retsume",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "列",
        "cleanWord": "列",
        "reading": "れつ",
        "cleanReading": "れつ",
        "romaji": "retsu",
        "meaning": "အတန်း၊ စီတန်းနေသည့်အတန်း"
      },
      {
        "word": "行列",
        "cleanWord": "行列",
        "reading": "ぎょうれつ",
        "cleanReading": "ぎょうれつ",
        "romaji": "gyouretsu",
        "meaning": "လူတန်း"
      },
      {
        "word": "2列目",
        "cleanWord": "2列目",
        "reading": "2れつめ",
        "cleanReading": "2れつめ",
        "romaji": "2retsume",
        "meaning": "၂တန်းစီ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「列」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「れつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အတန်း\" (列) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、行列について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ぎょうれつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လူတန်း (行列) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 319,
    "kanji": "例",
    "strokes": 8,
    "onyomi": "レイ",
    "kunyomi": "たと-えば",
    "english": "example, for instance",
    "romaji": "rei tatoeba",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "例えば",
        "cleanWord": "例えば",
        "reading": "たとえば",
        "cleanReading": "たとえば",
        "romaji": "tatoeba",
        "meaning": "ဥပမာအားဖြင့်"
      },
      {
        "word": "例",
        "cleanWord": "例",
        "reading": "れい",
        "cleanReading": "れい",
        "romaji": "rei",
        "meaning": "ဥပမာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「例えば」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「たとえば」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဥပမာအားဖြင့်\" (例えば) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、例について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、れいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဥပမာ (例) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 320,
    "kanji": "生",
    "strokes": 5,
    "onyomi": "ショウ ・ ジョウ ・ セイ",
    "kunyomi": "い-きる ・ い-かす ・ は-える ・ なま ・ う-まれる",
    "english": "live, grow, raw vegetables, lifetime, birthday",
    "romaji": "shou jou sei ikiru ikasu haeru nama umareru namayasai isshou tanjoubi seinengappi",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "(~が)生きる",
        "cleanWord": "生きる",
        "reading": "(~が)いきる",
        "cleanReading": "いきる",
        "romaji": "ikiru",
        "meaning": "အသက်ရှင်သည်"
      },
      {
        "word": "(~を)生かす",
        "cleanWord": "生かす",
        "reading": "(~を)いかす",
        "cleanReading": "いかす",
        "romaji": "ikasu",
        "meaning": "အသက်ရှင်စေသည်၊ လက်တွေ့အသုံးချသည်"
      },
      {
        "word": "(~が)生える",
        "cleanWord": "生える",
        "reading": "(~が)はえる",
        "cleanReading": "はえる",
        "romaji": "haeru",
        "meaning": "ပေါက်သည် (မြက်၊ သွား)"
      },
      {
        "word": "生野菜",
        "cleanWord": "生野菜",
        "reading": "なまやさい",
        "cleanReading": "なまやさい",
        "romaji": "namayasai",
        "meaning": "ဟင်းသီးဟင်းရွက်အစိမ်း"
      },
      {
        "word": "一生",
        "cleanWord": "一生",
        "reading": "いっしょう",
        "cleanReading": "いっしょう",
        "romaji": "isshou",
        "meaning": "ရာသက်ပန်၊ တစ်ဘဝလုံး၊ တသက်လုံး"
      },
      {
        "word": "誕生日",
        "cleanWord": "誕生日",
        "reading": "たんじょうび",
        "cleanReading": "たんじょうび",
        "romaji": "tanjoubi",
        "meaning": "မွေးနေ့"
      },
      {
        "word": "生年月日",
        "cleanWord": "生年月日",
        "reading": "せいねんがっぴ",
        "cleanReading": "せいねんがっぴ",
        "romaji": "seinengappi",
        "meaning": "မွေးသက္ကရာဇ်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、生きるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、いきるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (အသက်ရှင်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に生かすことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに いかすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (အသက်ရှင်စေသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 321,
    "kanji": "熱",
    "strokes": 15,
    "onyomi": "ネツ ・ ネッ",
    "kunyomi": "あつ-い",
    "english": "hot, fever, heat, enthusiastic",
    "romaji": "netsu ne atsui nesshin",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "熱い",
        "cleanWord": "熱い",
        "reading": "あつい",
        "cleanReading": "あつい",
        "romaji": "atsui",
        "meaning": "ပူသော (အရာဝတ္ထု)"
      },
      {
        "word": "熱",
        "cleanWord": "熱",
        "reading": "ねつ",
        "cleanReading": "ねつ",
        "romaji": "netsu",
        "meaning": "အပူ၊ အဖျား"
      },
      {
        "word": "熱心(な)",
        "cleanWord": "熱心",
        "reading": "ねっしん(な)",
        "cleanReading": "ねっしん",
        "romaji": "nesshin",
        "meaning": "ဝီရိယရှိသော၊ စိတ်အားထက်သန်သော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより熱いと感じる人が多いようです。",
        "furigana": "きょうは いつもより あついと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ပူသော (အရာဝတ္ထု) ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、熱について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ねつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အပူ (熱) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 322,
    "kanji": "昨",
    "strokes": 9,
    "onyomi": "サク",
    "kunyomi": "—",
    "english": "yesterday, last year, last night",
    "romaji": "saku sakujitsu sakunen sakuya",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "昨日",
        "cleanWord": "昨日",
        "reading": "さくじつ / きのう",
        "cleanReading": "さくじつ",
        "romaji": "sakujitsu",
        "meaning": "မနေ့က"
      },
      {
        "word": "昨年",
        "cleanWord": "昨年",
        "reading": "さくねん",
        "cleanReading": "さくねん",
        "romaji": "sakunen",
        "meaning": "မနှစ်က"
      },
      {
        "word": "昨夜",
        "cleanWord": "昨夜",
        "reading": "さくや",
        "cleanReading": "さくや",
        "romaji": "sakuya",
        "meaning": "မနေ့ည"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「昨日」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「さくじつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မနေ့က\" (昨日) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、昨年について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、さくねんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မနှစ်က (昨年) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 323,
    "kanji": "痛",
    "strokes": 12,
    "onyomi": "ソウ",
    "kunyomi": "いた-む ・ いた-い",
    "english": "painful, hurt, headache",
    "romaji": "sou itamu itai zutsuu",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "痛い",
        "cleanWord": "痛い",
        "reading": "いたい",
        "cleanReading": "いたい",
        "romaji": "itai",
        "meaning": "နာကျင်သော"
      },
      {
        "word": "痛む",
        "cleanWord": "痛む",
        "reading": "いたむ",
        "cleanReading": "いたむ",
        "romaji": "itamu",
        "meaning": "နာကျင်သည်၊ ဒုက္ခခံရသည်"
      },
      {
        "word": "頭痛",
        "cleanWord": "頭痛",
        "reading": "ずつう",
        "cleanReading": "ずつう",
        "romaji": "zutsuu",
        "meaning": "ခေါင်းကိုက်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより痛いと感じる人が多いようです。",
        "furigana": "きょうは いつもより いたいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ နာကျင်သော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで痛む必要があります。",
        "furigana": "じかんが たりないので、いそいで いたむ ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (နာကျင်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 324,
    "kanji": "欲",
    "strokes": 11,
    "onyomi": "ヨク",
    "kunyomi": "ほ-しい",
    "english": "want, desire, appetite",
    "romaji": "yoku hoshii shokuyoku",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "欲しい",
        "cleanWord": "欲しい",
        "reading": "ほしい",
        "cleanReading": "ほしい",
        "romaji": "hoshii",
        "meaning": "လိုချင်သော"
      },
      {
        "word": "食欲",
        "cleanWord": "食欲",
        "reading": "しょくよく",
        "cleanReading": "しょくよく",
        "romaji": "shokuyoku",
        "meaning": "စားချင်သောက်ချင်စိတ်"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより欲しいと感じる人が多いようです。",
        "furigana": "きょうは いつもより ほしいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ လိုချင်သော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、食欲について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょくよくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စားချင်သောက်ချင်စိတ် (食欲) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 325,
    "kanji": "早",
    "strokes": 6,
    "onyomi": "ソウ",
    "kunyomi": "はや-い",
    "english": "early, leave early",
    "romaji": "sou hayai soutai",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "早退(する)",
        "cleanWord": "早退",
        "reading": "そうたい(する)",
        "cleanReading": "そうたい",
        "romaji": "soutai",
        "meaning": "စောစောပြန်အနားယူသည်"
      },
      {
        "word": "早い",
        "cleanWord": "早い",
        "reading": "はやい",
        "cleanReading": "はやい",
        "romaji": "hayai",
        "meaning": "စောသော"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり早退することが大切です。",
        "furigana": "しごとの まえに しっかり そうたいすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ စောစောပြန်အနားယူသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "あまり早い場合は、無理をしないで休んでください。",
        "furigana": "あまり はやい ばあいは、むりを しないで やすんで ください。",
        "mm": "အလွန်အမင်း စောသော သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။"
      }
    ]
  },
  {
    "id": 326,
    "kanji": "薬",
    "strokes": 16,
    "onyomi": "ヤク ・ ヤッ",
    "kunyomi": "くすり",
    "english": "medicine, drug, headache pill, pharmacy",
    "romaji": "yaku ya kusuri zutsuuyaku yakuhin yakkyoku",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "薬",
        "cleanWord": "薬",
        "reading": "くすり",
        "cleanReading": "くすり",
        "romaji": "kusuri",
        "meaning": "ဆေး"
      },
      {
        "word": "頭痛薬",
        "cleanWord": "頭痛薬",
        "reading": "ずつうやく",
        "cleanReading": "ずつうやく",
        "romaji": "zutsuuyaku",
        "meaning": "ခေါင်းကိုက်ပျောက်ဆေး"
      },
      {
        "word": "薬品",
        "cleanWord": "薬品",
        "reading": "やくひん",
        "cleanReading": "やくひん",
        "romaji": "yakuhin",
        "meaning": "ဆေး၊ ဆေးဝါး"
      },
      {
        "word": "薬局",
        "cleanWord": "薬局",
        "reading": "やっきょく",
        "cleanReading": "やっきょく",
        "romaji": "yakkyoku",
        "meaning": "ဆေးဆိုင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「薬」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「くすり」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆေး\" (薬) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、頭痛薬について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ずつうやくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခေါင်းကိုက်ပျောက်ဆေး (頭痛薬) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 327,
    "kanji": "湯",
    "strokes": 12,
    "onyomi": "トウ",
    "kunyomi": "ゆ",
    "english": "hot water, boiling water",
    "romaji": "tou yu nettou",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "(お)湯",
        "cleanWord": "湯",
        "reading": "(お)ゆ",
        "cleanReading": "ゆ",
        "romaji": "yu",
        "meaning": "ရေနွေး"
      },
      {
        "word": "熱湯",
        "cleanWord": "熱湯",
        "reading": "ねっとう",
        "cleanReading": "ねっとう",
        "romaji": "nettou",
        "meaning": "ရေနွေးပူပူ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「湯」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ゆ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရေနွေး\" (湯) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、熱湯について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ねっとうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရေနွေးပူပူ (熱湯) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 328,
    "kanji": "師",
    "strokes": 10,
    "onyomi": "シ",
    "kunyomi": "—",
    "english": "doctor, physician, teacher",
    "romaji": "shi ishi kyoushi",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "医師",
        "cleanWord": "医師",
        "reading": "いし",
        "cleanReading": "いし",
        "romaji": "ishi",
        "meaning": "ဆရာဝန်"
      },
      {
        "word": "教師",
        "cleanWord": "教師",
        "reading": "きょうし",
        "cleanReading": "きょうし",
        "romaji": "kyoushi",
        "meaning": "ကျောင်းဆရာ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「医師」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆရာဝန်\" (医師) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、教師について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きょうしについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကျောင်းဆရာ (教師) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 329,
    "kanji": "表",
    "strokes": 8,
    "onyomi": "ヒョウ ・ ピョウ",
    "kunyomi": "あらわ-れる ・ あらわ-す ・ おもて",
    "english": "express, appear, surface, table, facial expression",
    "romaji": "hyou pyou arawareru arawasu omote hyougen hyoujou jikokuhyou happyou daihyou",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "(~が)表れる",
        "cleanWord": "表れる",
        "reading": "(~が)あらわれる",
        "cleanReading": "あらわれる",
        "romaji": "arawareru",
        "meaning": "ဖြစ်ပေါ်လာသည်"
      },
      {
        "word": "(~を)表す",
        "cleanWord": "表す",
        "reading": "(~を)あらわす",
        "cleanReading": "あらわす",
        "romaji": "arawasu",
        "meaning": "ဖော်ပြသည်၊ ဖြစ်ပေါ်စေသည်"
      },
      {
        "word": "表",
        "cleanWord": "表",
        "reading": "おもて / ひょう",
        "cleanReading": "おもて",
        "romaji": "omote",
        "meaning": "မျက်နှာပြင်ဘက်၊ ဇယား"
      },
      {
        "word": "表現(する)",
        "cleanWord": "表現",
        "reading": "ひょうげん(する)",
        "cleanReading": "ひょうげん",
        "romaji": "hyougen",
        "meaning": "သရုပ်ဖော်ပြခြင်း"
      },
      {
        "word": "表情",
        "cleanWord": "表情",
        "reading": "ひょうじょう",
        "cleanReading": "ひょうじょう",
        "romaji": "hyoujou",
        "meaning": "မျက်နှာထား၊ မျက်နှာအမူအရာ"
      },
      {
        "word": "時刻表",
        "cleanWord": "時刻表",
        "reading": "じこくひょう",
        "cleanReading": "じこくひょう",
        "romaji": "jikokuhyou",
        "meaning": "အချိန်ဇယား"
      },
      {
        "word": "発表(する)",
        "cleanWord": "発表",
        "reading": "はっぴょう(する)",
        "cleanReading": "はっぴょう",
        "romaji": "happyou",
        "meaning": "ထုတ်ပြန်ကြေငြာခြင်း၊ စာတမ်းဖတ်ကြားခြင်း"
      },
      {
        "word": "代表(する)",
        "cleanWord": "代表",
        "reading": "だいひょう(する)",
        "cleanReading": "だいひょう",
        "romaji": "daihyou",
        "meaning": "ကိုယ်စားလှယ်၊ ကိုယ်စားပြုသူ"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、表れるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、あらわれるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ဖြစ်ပေါ်လာသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に表すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに あらわすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ဖော်ပြသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 330,
    "kanji": "息",
    "strokes": 10,
    "onyomi": "—",
    "kunyomi": "いき",
    "english": "breath, breathing, son",
    "romaji": "iki musuko",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "息",
        "cleanWord": "息",
        "reading": "いき",
        "cleanReading": "いき",
        "romaji": "iki",
        "meaning": "အသက်ရှူခြင်း"
      },
      {
        "word": "★息子",
        "cleanWord": "息子",
        "reading": "むすこ",
        "cleanReading": "むすこ",
        "romaji": "musuko",
        "meaning": "သား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「息」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「いき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အသက်ရှူခြင်း\" (息) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、息子について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、むすこについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သား (息子) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 331,
    "kanji": "祭",
    "strokes": 11,
    "onyomi": "サイ",
    "kunyomi": "まつ-り",
    "english": "festival, cultural festival, school festival",
    "romaji": "sai matsuri bunkasai gakuensai",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "(お)祭り",
        "cleanWord": "祭り",
        "reading": "(お)まつり",
        "cleanReading": "まつり",
        "romaji": "matsuri",
        "meaning": "ပွဲတော်"
      },
      {
        "word": "文化祭",
        "cleanWord": "文化祭",
        "reading": "ぶんかさい",
        "cleanReading": "ぶんかさい",
        "romaji": "bunkasai",
        "meaning": "ယဉ်ကျေးမှုဆိုင်ရာပွဲတော်"
      },
      {
        "word": "学園祭",
        "cleanWord": "学園祭",
        "reading": "がくえんさい",
        "cleanReading": "がくえんさい",
        "romaji": "gakuensai",
        "meaning": "ကျောင်းပွဲတော်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「祭り」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「まつり」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပွဲတော်\" (祭り) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、文化祭について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ぶんかさいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ယဉ်ကျေးမှုဆိုင်ရာပွဲတော် (文化祭) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 332,
    "kanji": "神",
    "strokes": 9,
    "onyomi": "シン ・ ジン",
    "kunyomi": "かみ",
    "english": "god, Shinto shrine, myth",
    "romaji": "shin jin kami kamisama jinja shinwa",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "神様",
        "cleanWord": "神様",
        "reading": "かみさま",
        "cleanReading": "かみさま",
        "romaji": "kamisama",
        "meaning": "နတ်ဘုရား"
      },
      {
        "word": "神社",
        "cleanWord": "神社",
        "reading": "じんじゃ",
        "cleanReading": "じんじゃ",
        "romaji": "jinja",
        "meaning": "ရှင်တိုဘာသာဘုရားကျောင်း (shrine)"
      },
      {
        "word": "神話",
        "cleanWord": "神話",
        "reading": "しんわ",
        "cleanReading": "しんわ",
        "romaji": "shinwa",
        "meaning": "ဒဏ္ဍာရီပုံပြင်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「神様」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かみさま」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နတ်ဘုရား\" (神様) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、神社について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じんじゃについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရှင်တိုဘာသာဘုရားကျောင်း (shrine) (神社) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 333,
    "kanji": "参",
    "strokes": 8,
    "onyomi": "サン",
    "kunyomi": "まい-る",
    "english": "visit a shrine, participate, reference book",
    "romaji": "san mairu omairisuru sanka sankasha sankousho",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "(~に)参る",
        "cleanWord": "参る",
        "reading": "(~に)まいる",
        "cleanReading": "まいる",
        "romaji": "mairu",
        "meaning": "ဖူးမြှော်သည်၊ လာသည်"
      },
      {
        "word": "(~に)お参りする",
        "cleanWord": "お参りする",
        "reading": "(~に)おまいりする",
        "cleanReading": "おまいりする",
        "romaji": "omairisuru",
        "meaning": "ဘုရားဖူးမြှော်သည်"
      },
      {
        "word": "(~に)参加する",
        "cleanWord": "参加する",
        "reading": "(~に)さんか(する)",
        "cleanReading": "さんか",
        "romaji": "sanka",
        "meaning": "ပါဝင်ဆင်နွှဲသည်"
      },
      {
        "word": "参加者",
        "cleanWord": "参加者",
        "reading": "さんかしゃ",
        "cleanReading": "さんかしゃ",
        "romaji": "sankasha",
        "meaning": "ပါဝင်သူ"
      },
      {
        "word": "参考書",
        "cleanWord": "参考書",
        "reading": "さんこうしょ",
        "cleanReading": "さんこうしょ",
        "romaji": "sankousho",
        "meaning": "မှီငြမ်းကိုးကားရန်စာအုပ်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に参るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに まいるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ဖူးမြှော်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "時間が足りないので、急いでお参りする必要があります。",
        "furigana": "じかんが たりないので、いそいで おまいりする ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ဘုရားဖူးမြှော်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 334,
    "kanji": "願",
    "strokes": 19,
    "onyomi": "—",
    "kunyomi": "ねが-う ・ ねが-い",
    "english": "wish, pray, request, please",
    "romaji": "negau negai onegai",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "願う",
        "cleanWord": "願う",
        "reading": "ねがう",
        "cleanReading": "ねがう",
        "romaji": "negau",
        "meaning": "မျှော်လင့်သည်၊ ဆုတောင်းသည်"
      },
      {
        "word": "お願い(する)",
        "cleanWord": "お願い",
        "reading": "おねがい(する)",
        "cleanReading": "おねがい",
        "romaji": "onegai",
        "meaning": "မေတ္တာရပ်ခံသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に願うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに ねがうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (မျှော်လင့်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐにお願いしました。",
        "furigana": "せんぱいに そうだんしてから、すぐに おねがいしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း မေတ္တာရပ်ခံသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 335,
    "kanji": "加",
    "strokes": 5,
    "onyomi": "カ",
    "kunyomi": "くわ-える",
    "english": "add, append, increase",
    "romaji": "ka kuwaeru tsuika zouka",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "加える",
        "cleanWord": "加える",
        "reading": "くわえる",
        "cleanReading": "くわえる",
        "romaji": "kuwaeru",
        "meaning": "ပေါင်းထည့်သည်၊ ထပ်ပေါင်းထည့်သည်"
      },
      {
        "word": "追加(する)",
        "cleanWord": "追加",
        "reading": "ついか(する)",
        "cleanReading": "ついか",
        "romaji": "tsuika",
        "meaning": "ထပ်ဖြည့်ခြင်း၊ ထပ်ပေါင်းခြင်း"
      },
      {
        "word": "(~が)増加(する)",
        "cleanWord": "増加",
        "reading": "(~が)ぞうか(する)",
        "cleanReading": "ぞうか",
        "romaji": "zouka",
        "meaning": "တိုးပွားလာသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に加えるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに くわえるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ပေါင်းထည့်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに追加しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ついかしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ထပ်ဖြည့်ခြင်းခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 336,
    "kanji": "性",
    "strokes": 8,
    "onyomi": "セイ",
    "kunyomi": "—",
    "english": "gender, male, female, personality, possibility",
    "romaji": "sei seibetsu dansei josei seikaku kanousei kikensei",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "性別",
        "cleanWord": "性別",
        "reading": "せいべつ",
        "cleanReading": "せいべつ",
        "romaji": "seibetsu",
        "meaning": "ကျား၊ မသတ်မှတ်ခြင်း"
      },
      {
        "word": "男性",
        "cleanWord": "男性",
        "reading": "だんせい",
        "cleanReading": "だんせい",
        "romaji": "dansei",
        "meaning": "ယောက်ျားလေး"
      },
      {
        "word": "女性",
        "cleanWord": "女性",
        "reading": "じょせい",
        "cleanReading": "じょせい",
        "romaji": "josei",
        "meaning": "မိန်းကလေး"
      },
      {
        "word": "性格",
        "cleanWord": "性格",
        "reading": "せいかく",
        "cleanReading": "せいかく",
        "romaji": "seikaku",
        "meaning": "စရိုက်"
      },
      {
        "word": "可能性",
        "cleanWord": "可能性",
        "reading": "かのうせい",
        "cleanReading": "かのうせい",
        "romaji": "kanousei",
        "meaning": "ဖြစ်နိုင်ခြေ"
      },
      {
        "word": "危険性",
        "cleanWord": "危険性",
        "reading": "きけんせい",
        "cleanReading": "きけんせい",
        "romaji": "kikensei",
        "meaning": "ဘေးအန္တရာယ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「性別」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せいべつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကျား\" (性別) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、男性について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、だんせいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ယောက်ျားလေး (男性) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 337,
    "kanji": "様",
    "strokes": 14,
    "onyomi": "ヨウ",
    "kunyomi": "さま",
    "english": "Mr./Ms., customer, state, appearance",
    "romaji": "you sama okyakusama yousu",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "~様",
        "cleanWord": "様",
        "reading": "~さま",
        "cleanReading": "さま",
        "romaji": "sama",
        "meaning": "_ဦး ၊ _ဒေါ် ၊ _မောင် ၊ _မ"
      },
      {
        "word": "お客様",
        "cleanWord": "お客様",
        "reading": "おきゃくさま",
        "cleanReading": "おきゃくさま",
        "romaji": "okyakusama",
        "meaning": "ဧည့်သည်၊ ဖောက်သည်"
      },
      {
        "word": "様子",
        "cleanWord": "様子",
        "reading": "ようす",
        "cleanReading": "ようす",
        "romaji": "yousu",
        "meaning": "အခြေအနေ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「様」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「さま」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"_ဦး\" (様) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、お客様について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おきゃくさまについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဧည့်သည် (お客様) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 338,
    "kanji": "寺",
    "strokes": 6,
    "onyomi": "ジ",
    "kunyomi": "てら ・ -でら",
    "english": "Buddhist temple, Kiyomizu-dera, Kinkaku-ji",
    "romaji": "ji tera dera kiyomizudera kinkakuji",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "(お)寺",
        "cleanWord": "寺",
        "reading": "(お)てら",
        "cleanReading": "てら",
        "romaji": "tera",
        "meaning": "ဘုရားကျောင်း (Temple)"
      },
      {
        "word": "清水寺",
        "cleanWord": "清水寺",
        "reading": "きよみずでら",
        "cleanReading": "きよみずでら",
        "romaji": "kiyomizudera",
        "meaning": "Kiyomizudera (Kyoto ရှိဘုရားကျောင်းအမည်)"
      },
      {
        "word": "金閣寺",
        "cleanWord": "金閣寺",
        "reading": "きんかくじ",
        "cleanReading": "きんかくじ",
        "romaji": "kinkakuji",
        "meaning": "ရွှေကျောင်း (Kyoto ရှိ ဘုရားကျောင်းအမည်)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「寺」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「てら」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဘုရားကျောင်း (Temple)\" (寺) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、清水寺について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、きよみずでらについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ Kiyomizudera (Kyoto ရှိဘုရားကျောင်းအမည်) (清水寺) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 339,
    "kanji": "警",
    "strokes": 19,
    "onyomi": "ケイ",
    "kunyomi": "—",
    "english": "warn, warning, alarm",
    "romaji": "kei keikoku keihou",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "警告(する)",
        "cleanWord": "警告",
        "reading": "けいこく",
        "cleanReading": "けいこく",
        "romaji": "keikoku",
        "meaning": "သတိပေးမှု"
      },
      {
        "word": "警報",
        "cleanWord": "警報",
        "reading": "けいほう",
        "cleanReading": "けいほう",
        "romaji": "keihou",
        "meaning": "ဘေးအန္တရာယ်သတိပေးချက်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり警告することが大切です。",
        "furigana": "しごとの まえに しっかり けいこくすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ သတိပေးမှုခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、警報について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、けいほうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဘေးအန္တရာယ်သတိပေးချက် (警報) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 340,
    "kanji": "察",
    "strokes": 14,
    "onyomi": "サツ",
    "kunyomi": "—",
    "english": "police, police station, observe, medical exam",
    "romaji": "satsu keisatsu keisatsusho keisatsukan kansatsu shinsatsu",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "警察",
        "cleanWord": "警察",
        "reading": "けいさつ",
        "cleanReading": "けいさつ",
        "romaji": "keisatsu",
        "meaning": "ရဲ၊ ရဲအဖွဲ့"
      },
      {
        "word": "警察署",
        "cleanWord": "警察署",
        "reading": "けいさつしょ",
        "cleanReading": "けいさつしょ",
        "romaji": "keisatsusho",
        "meaning": "ရဲစခန်း"
      },
      {
        "word": "警察官",
        "cleanWord": "警察官",
        "reading": "けいさつかん",
        "cleanReading": "けいさつかん",
        "romaji": "keisatsukan",
        "meaning": "ရဲအရာရှိ"
      },
      {
        "word": "観察(する)",
        "cleanWord": "観察",
        "reading": "かんさつ(する)",
        "cleanReading": "かんさつ",
        "romaji": "kansatsu",
        "meaning": "ကြည့်ရှုတိုင်းတာခြင်း"
      },
      {
        "word": "診察(する)",
        "cleanWord": "診察",
        "reading": "しんさつ(する)",
        "cleanReading": "しんさつ",
        "romaji": "shinsatsu",
        "meaning": "ဆေးစစ်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「警察」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「けいさつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ရဲ\" (警察) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、警察署について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、けいさつしょについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရဲစခန်း (警察署) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 341,
    "kanji": "官",
    "strokes": 8,
    "onyomi": "カン",
    "kunyomi": "—",
    "english": "government official, police officer, interviewer",
    "romaji": "kan keikan mensetsukan",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "警官",
        "cleanWord": "警官",
        "reading": "けいかん",
        "cleanReading": "けいかん",
        "romaji": "keikan",
        "meaning": "ပုလိပ်၊ ရဲအရာရှိ"
      },
      {
        "word": "面接官",
        "cleanWord": "面接官",
        "reading": "めんせつかん",
        "cleanReading": "めんせつかん",
        "romaji": "mensetsukan",
        "meaning": "လူတွေ့နှုတ်ဖြေမေးသူ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「警官」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「けいかん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပုလိပ်\" (警官) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、面接官について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、めんせつかんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လူတွေ့နှုတ်ဖြေမေးသူ (面接官) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 342,
    "kanji": "告",
    "strokes": 7,
    "onyomi": "コク",
    "kunyomi": "—",
    "english": "report, advance notice, advertisement",
    "romaji": "koku houkoku yokoku koukoku",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "報告(する)",
        "cleanWord": "報告",
        "reading": "ほうこく(する)",
        "cleanReading": "ほうこく",
        "romaji": "houkoku",
        "meaning": "သတိပေးသည်"
      },
      {
        "word": "予告(する)",
        "cleanWord": "予告",
        "reading": "よこく(する)",
        "cleanReading": "よこく",
        "romaji": "yokoku",
        "meaning": "ကြိုတင်ကြေငြာသည်"
      },
      {
        "word": "広告",
        "cleanWord": "広告",
        "reading": "こうこく",
        "cleanReading": "こうこく",
        "romaji": "koukoku",
        "meaning": "ကြော်ငြာ"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり報告することが大切です。",
        "furigana": "しごとの まえに しっかり ほうこくすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ သတိပေးသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに予告しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに よこくしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ကြိုတင်ကြေငြာသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 343,
    "kanji": "枚",
    "strokes": 8,
    "onyomi": "マイ",
    "kunyomi": "—",
    "english": "counter for flat objects, number of sheets",
    "romaji": "mai maisuu",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "~枚",
        "cleanWord": "枚",
        "reading": "~まい",
        "cleanReading": "まい",
        "romaji": "mai",
        "meaning": "အချပ်၊ စာရွက်၊ အထည် (အရေအတွက်)"
      },
      {
        "word": "枚数",
        "cleanWord": "枚数",
        "reading": "まいすう",
        "cleanReading": "まいすう",
        "romaji": "maisuu",
        "meaning": "အချပ်ရေအရေအတွက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「枚」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「まい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အချပ်\" (枚) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、枚数について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、まいすうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အချပ်ရေအရေအတွက် (枚数) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 344,
    "kanji": "件",
    "strokes": 6,
    "onyomi": "ケン",
    "kunyomi": "—",
    "english": "incident, case, condition, subject line",
    "romaji": "ken jiken jouken kenmei",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "事件",
        "cleanWord": "事件",
        "reading": "じけん",
        "cleanReading": "じけん",
        "romaji": "jiken",
        "meaning": "အမှု၊ မှုခင်း"
      },
      {
        "word": "条件",
        "cleanWord": "条件",
        "reading": "じょうけん",
        "cleanReading": "じょうけん",
        "romaji": "jouken",
        "meaning": "သတ်မှတ်ချက်၊ စည်းကမ်းသတ်မှတ်ချက်၊ စည်းမျဉ်း"
      },
      {
        "word": "件名",
        "cleanWord": "件名",
        "reading": "けんめい",
        "cleanReading": "けんめい",
        "romaji": "kenmei",
        "meaning": "အကြောင်းကိစ္စ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「事件」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「じけん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အမှု\" (事件) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、条件について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じょうけんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ သတ်မှတ်ချက် (条件) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 345,
    "kanji": "具",
    "strokes": 8,
    "onyomi": "グ",
    "kunyomi": "—",
    "english": "tool, furniture, stationery, condition, concrete",
    "romaji": "gu dougu kagu bunbougu kigu guai gutaiteki",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "道具",
        "cleanWord": "道具",
        "reading": "どうぐ",
        "cleanReading": "どうぐ",
        "romaji": "dougu",
        "meaning": "ကိရိယာတန်ဆာပလာ (ပလာရာစသည်)"
      },
      {
        "word": "家具",
        "cleanWord": "家具",
        "reading": "かぐ",
        "cleanReading": "かぐ",
        "romaji": "kagu",
        "meaning": "အိမ်ထောင်ပရိဘောဂ"
      },
      {
        "word": "文房具",
        "cleanWord": "文房具",
        "reading": "ぶんぼうぐ",
        "cleanReading": "ぶんぼうぐ",
        "romaji": "bunbougu",
        "meaning": "စာရေးကိရိယာ"
      },
      {
        "word": "器具",
        "cleanWord": "器具",
        "reading": "きぐ",
        "cleanReading": "きぐ",
        "romaji": "kigu",
        "meaning": "ကိရိယာပစ္စည်း"
      },
      {
        "word": "具合",
        "cleanWord": "具合",
        "reading": "ぐあい",
        "cleanReading": "ぐあい",
        "romaji": "guai",
        "meaning": "အခြေအနေ"
      },
      {
        "word": "具体的(な)",
        "cleanWord": "具体的",
        "reading": "ぐたいてき",
        "cleanReading": "ぐたいてき",
        "romaji": "gutaiteki",
        "meaning": "လက်တွေ့ကျကျ၊ အသေးစိတ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「道具」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「どうぐ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကိရိယာတန်ဆာပလာ (ပလာရာစသည်)\" (道具) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、家具について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かぐについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အိမ်ထောင်ပရိဘောဂ (家具) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 346,
    "kanji": "可",
    "strokes": 5,
    "onyomi": "カ",
    "kunyomi": "—",
    "english": "possible, permit, allowed, pet friendly",
    "romaji": "ka kanou fukanou kyoka pettoka pettofuka",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "可能(な)",
        "cleanWord": "可能",
        "reading": "かのう(な)",
        "cleanReading": "かのう",
        "romaji": "kanou",
        "meaning": "ဖြစ်နိုင်သော"
      },
      {
        "word": "不可能(な)",
        "cleanWord": "不可能",
        "reading": "ふかのう(な)",
        "cleanReading": "ふかのう",
        "romaji": "fukanou",
        "meaning": "မဖြစ်နိုင်သော"
      },
      {
        "word": "許可(する)",
        "cleanWord": "許可",
        "reading": "きょか(する)",
        "cleanReading": "きょか",
        "romaji": "kyoka",
        "meaning": "ခွင့်ပြုသည်"
      },
      {
        "word": "ペット可",
        "cleanWord": "ペット可",
        "reading": "ペットか",
        "cleanReading": "ペットか",
        "romaji": "pettoka",
        "meaning": "အိမ်မွေးတိရစ္ဆာန် (ဝင်၊ မွေး)ခွင့်ပြုသည်"
      },
      {
        "word": "ペット不可",
        "cleanWord": "ペット不可",
        "reading": "ペットふか",
        "cleanReading": "ペットふか",
        "romaji": "pettofuka",
        "meaning": "အိမ်မွေးတိရစ္ဆာန် (ဝင်၊ မွေး)ခွင့်မပြုပါ"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても可能なので、だれでも使えます。",
        "furigana": "この ほうほうは とても かのうなので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် ဖြစ်နိုင်သော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "先生はいつも不可能な言葉で説明してくれます。",
        "furigana": "せんせいは いつも ふかのうな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း မဖြစ်နိုင်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 347,
    "kanji": "芸",
    "strokes": 7,
    "onyomi": "ゲイ",
    "kunyomi": "—",
    "english": "art, performance, entertainer",
    "romaji": "gei geijutsu geinoujin",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "芸",
        "cleanWord": "芸",
        "reading": "げい",
        "cleanReading": "げい",
        "romaji": "gei",
        "meaning": "အနုပညာဖျော်ဖြေမှု"
      },
      {
        "word": "芸術",
        "cleanWord": "芸術",
        "reading": "げいじゅつ",
        "cleanReading": "げいじゅつ",
        "romaji": "geijutsu",
        "meaning": "အနုပညာ (ရုပ်ရှင်၊ ဂီတ..)"
      },
      {
        "word": "芸能人",
        "cleanWord": "芸能人",
        "reading": "げいのうじん",
        "cleanReading": "げいのうじん",
        "romaji": "geinoujin",
        "meaning": "အနုပညာရှင်၊ ဖျော်ဖြေသူ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「芸」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「げい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အနုပညာဖျော်ဖြေမှု\" (芸) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、芸術について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、げいじゅつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အနုပညာ (ရုပ်ရှင် (芸術) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 348,
    "kanji": "絵",
    "strokes": 12,
    "onyomi": "カイ ・ エ",
    "kunyomi": "—",
    "english": "picture, painting, picture book",
    "romaji": "kai e ehon kaiga",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "絵",
        "cleanWord": "絵",
        "reading": "え",
        "cleanReading": "え",
        "romaji": "e",
        "meaning": "ပန်းချီကား"
      },
      {
        "word": "絵本",
        "cleanWord": "絵本",
        "reading": "えほん",
        "cleanReading": "えほん",
        "romaji": "ehon",
        "meaning": "ရုပ်ပုံစာအုပ်"
      },
      {
        "word": "絵画",
        "cleanWord": "絵画",
        "reading": "かいが",
        "cleanReading": "かいが",
        "romaji": "kaiga",
        "meaning": "ပန်းချီကား၊ ပန်းချီ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「絵」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「え」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပန်းချီကား\" (絵) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、絵本について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、えほんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရုပ်ပုံစာအုပ် (絵本) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 349,
    "kanji": "才",
    "strokes": 3,
    "onyomi": "サイ",
    "kunyomi": "—",
    "english": "talent, genius, years old",
    "romaji": "sai sainou tensai",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "才能",
        "cleanWord": "才能",
        "reading": "さいのう",
        "cleanReading": "さいのう",
        "romaji": "sainou",
        "meaning": "ပါရမီ၊ အရည်အချင်း"
      },
      {
        "word": "天才",
        "cleanWord": "天才",
        "reading": "てんさい",
        "cleanReading": "てんさい",
        "romaji": "tensai",
        "meaning": "ပါရမီရှင်"
      },
      {
        "word": "~才",
        "cleanWord": "才",
        "reading": "~さい",
        "cleanReading": "さい",
        "romaji": "sai",
        "meaning": "အသက်...နှစ် (အရေအတွက်)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「才能」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「さいのう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပါရမီ\" (才能) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、天才について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、てんさいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပါရမီရှင် (天才) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 350,
    "kanji": "能",
    "strokes": 10,
    "onyomi": "ノウ",
    "kunyomi": "—",
    "english": "ability, capability, possible",
    "romaji": "nou nouryoku kanou fukanou",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "能力",
        "cleanWord": "能力",
        "reading": "のうりょく",
        "cleanReading": "のうりょく",
        "romaji": "nouryoku",
        "meaning": "စွမ်းရည်"
      },
      {
        "word": "可能(な)",
        "cleanWord": "可能",
        "reading": "かのう(な)",
        "cleanReading": "かのう",
        "romaji": "kanou",
        "meaning": "ဖြစ်နိုင်သော"
      },
      {
        "word": "不可能(な)",
        "cleanWord": "不可能",
        "reading": "ふかのう(な)",
        "cleanReading": "ふかのう",
        "romaji": "fukanou",
        "meaning": "မဖြစ်နိုင်သော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「能力」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「のうりょく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စွမ်းရည်\" (能力) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先生はいつも可能な言葉で説明してくれます。",
        "furigana": "せんせいは いつも かのうな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း ဖြစ်နိုင်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 351,
    "kanji": "美",
    "strokes": 9,
    "onyomi": "—",
    "kunyomi": "うつく-しい",
    "english": "beautiful, art, art museum, beauty salon",
    "romaji": "utsukushii bijutsu bijutsukan bijin biyouin",
    "category": "Culture, Society & Arts",
    "categoryJp": "暮らし・文化・芸術",
    "categoryMm": "ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ",
    "vocab": [
      {
        "word": "美しい",
        "cleanWord": "美しい",
        "reading": "うつくしい",
        "cleanReading": "うつくしい",
        "romaji": "utsukushii",
        "meaning": "လှပသော"
      },
      {
        "word": "美術",
        "cleanWord": "美術",
        "reading": "びじゅつ",
        "cleanReading": "びじゅつ",
        "romaji": "bijutsu",
        "meaning": "အနုပညာ (ပန်းချီ၊ ပန်းပု....)"
      },
      {
        "word": "美術館",
        "cleanWord": "美術館",
        "reading": "びじゅつかん",
        "cleanReading": "びじゅつかん",
        "romaji": "bijutsukan",
        "meaning": "အနုပညာပြတိုက်"
      },
      {
        "word": "美人",
        "cleanWord": "美人",
        "reading": "びじん",
        "cleanReading": "びじん",
        "romaji": "bijin",
        "meaning": "မိန်းမလှ"
      },
      {
        "word": "美容院",
        "cleanWord": "美容院",
        "reading": "びよういん",
        "cleanReading": "びよういん",
        "romaji": "biyouin",
        "meaning": "အလှပြင်ဆိုင်"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより美しいと感じる人が多いようです。",
        "furigana": "きょうは いつもより うつくしいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ လှပသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、美術について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、びじゅつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အနုပညာ (ပန်းချီ (美術) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 352,
    "kanji": "行",
    "strokes": 6,
    "onyomi": "ギョウ ・ コウ",
    "kunyomi": "い-く ・ おこな-う",
    "english": "carry out, event, queue, line, action, trend",
    "romaji": "gyou kou iku okonau gyouji gyouretsu 1gyoume koudou jikkou ryuukou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "行う",
        "cleanWord": "行う",
        "reading": "おこなう",
        "cleanReading": "おこなう",
        "romaji": "okonau",
        "meaning": "ကျင်းပသည်"
      },
      {
        "word": "行事",
        "cleanWord": "行事",
        "reading": "ぎょうじ",
        "cleanReading": "ぎょうじ",
        "romaji": "gyouji",
        "meaning": "လုပ်ငန်းဆောင်တာ"
      },
      {
        "word": "行列",
        "cleanWord": "行列",
        "reading": "ぎょうれつ",
        "cleanReading": "ぎょうれつ",
        "romaji": "gyouretsu",
        "meaning": "စီတန်းခြင်း"
      },
      {
        "word": "1行目",
        "cleanWord": "1行目",
        "reading": "1ぎょうめ",
        "cleanReading": "1ぎょうめ",
        "romaji": "1gyoume",
        "meaning": "၁လိုင်းမြောက်"
      },
      {
        "word": "行動(する)",
        "cleanWord": "行動",
        "reading": "こうどう(する)",
        "cleanReading": "こうどう",
        "romaji": "koudou",
        "meaning": "လှုပ်ရှားမှု"
      },
      {
        "word": "実行(する)",
        "cleanWord": "実行",
        "reading": "じっこう(する)",
        "cleanReading": "じっこう",
        "romaji": "jikkou",
        "meaning": "လက်တွေ့ကျင့်သုံးခြင်း"
      },
      {
        "word": "流行(する) / 流行る",
        "cleanWord": "流行",
        "reading": "りゅうこう(する) / はやる",
        "cleanReading": "りゅうこう",
        "romaji": "ryuukou",
        "meaning": "ခေတ်စားသည်၊ ရေပန်းစားသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に行うようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに おこなうように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ကျင်းပသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、行事について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ぎょうじについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လုပ်ငန်းဆောင်တာ (行事) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 353,
    "kanji": "必",
    "strokes": 5,
    "onyomi": "ヒツ",
    "kunyomi": "かなら-ず",
    "english": "certainly, without fail, necessary",
    "romaji": "hitsu kanarazu hitsuyou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "必ず",
        "cleanWord": "必ず",
        "reading": "かならず",
        "cleanReading": "かならず",
        "romaji": "kanarazu",
        "meaning": "မပျက်မကွက်၊ သေချာပေါက်"
      },
      {
        "word": "必要(な)",
        "cleanWord": "必要",
        "reading": "ひつよう(な)",
        "cleanReading": "ひつよう",
        "romaji": "hitsuyou",
        "meaning": "လိုအပ်သော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「必ず」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かならず」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မပျက်မကွက်\" (必ず) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先生はいつも必要な言葉で説明してくれます。",
        "furigana": "せんせいは いつも ひつような ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း လိုအပ်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 354,
    "kanji": "要",
    "strokes": 9,
    "onyomi": "ヨウ",
    "kunyomi": "い-る",
    "english": "need, require, important",
    "romaji": "you iru juuyou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "(~が)要る",
        "cleanWord": "要る",
        "reading": "(~が)いる",
        "cleanReading": "いる",
        "romaji": "iru",
        "meaning": "လိုအပ်သည်"
      },
      {
        "word": "重要(な)",
        "cleanWord": "重要",
        "reading": "じゅうよう(な)",
        "cleanReading": "じゅうよう",
        "romaji": "juuyou",
        "meaning": "အရေးကြီးသော"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、要るようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、いるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (လိုအပ်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "先生はいつも重要な言葉で説明してくれます。",
        "furigana": "せんせいは いつも じゅうような ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း အရေးကြီးသော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 355,
    "kanji": "接",
    "strokes": 11,
    "onyomi": "セツ",
    "kunyomi": "—",
    "english": "interview, direct, touch, connect",
    "romaji": "setsu mensetsu chokusetsu",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "面接",
        "cleanWord": "面接",
        "reading": "めんせつ",
        "cleanReading": "めんせつ",
        "romaji": "mensetsu",
        "meaning": "အင်တာဗျူး"
      },
      {
        "word": "直接",
        "cleanWord": "直接",
        "reading": "ちょくせつ",
        "cleanReading": "ちょくせつ",
        "romaji": "chokusetsu",
        "meaning": "တိုက်ရိုက်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「面接」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「めんせつ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အင်တာဗျူး\" (面接) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、直接について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ちょくせつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တိုက်ရိုက် (直接) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 356,
    "kanji": "際",
    "strokes": 14,
    "onyomi": "サイ",
    "kunyomi": "—",
    "english": "international, actually, associate with",
    "romaji": "sai kokusai kokusaiteki jissaini kousai",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "国際",
        "cleanWord": "国際",
        "reading": "こくさい",
        "cleanReading": "こくさい",
        "romaji": "kokusai",
        "meaning": "အပြည်ပြည်ဆိုင်ရာ"
      },
      {
        "word": "国際的(な)",
        "cleanWord": "国際的",
        "reading": "こくさいてき(な)",
        "cleanReading": "こくさいてき",
        "romaji": "kokusaiteki",
        "meaning": "အပြည်ပြည်ဆိုင်ရာနှင့်ဆိုင်သော"
      },
      {
        "word": "実際に",
        "cleanWord": "実際に",
        "reading": "じっさいに",
        "cleanReading": "じっさいに",
        "romaji": "jissaini",
        "meaning": "တကယ်ကို"
      },
      {
        "word": "(~と)交際(する)",
        "cleanWord": "交際",
        "reading": "(~と)こうさい(する)",
        "cleanReading": "こうさい",
        "romaji": "kousai",
        "meaning": "ပေါင်းသင်းဆက်ဆံသည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「国際」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「こくさい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အပြည်ပြည်ဆိုင်ရာ\" (国際) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先生はいつも国際的な言葉で説明してくれます。",
        "furigana": "せんせいは いつも こくさいてきな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း အပြည်ပြည်ဆိုင်ရာနှင့်ဆိုင်သော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 357,
    "kanji": "勤",
    "strokes": 12,
    "onyomi": "キン",
    "kunyomi": "つと-める",
    "english": "work for, commute, duty, transfer job",
    "romaji": "kin tsutomeru tsuukin kinmu kinmuchi tenkin shukkin kekkin",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "勤める",
        "cleanWord": "勤める",
        "reading": "つとめる",
        "cleanReading": "つとめる",
        "romaji": "tsutomeru",
        "meaning": "အလုပ်လုပ်သည်"
      },
      {
        "word": "通勤(する)",
        "cleanWord": "通勤",
        "reading": "つうきん(する)",
        "cleanReading": "つうきん",
        "romaji": "tsuukin",
        "meaning": "အလုပ်အသွားအပြန်လုပ်သည်"
      },
      {
        "word": "勤務(する)",
        "cleanWord": "勤務",
        "reading": "きんむ(する)",
        "cleanReading": "きんむ",
        "romaji": "kinmu",
        "meaning": "အမှုထမ်းဆောင်သည်"
      },
      {
        "word": "勤務地",
        "cleanWord": "勤務地",
        "reading": "きんむち",
        "cleanReading": "きんむち",
        "romaji": "kinmuchi",
        "meaning": "အလုပ်လုပ်သည့်နေရာ"
      },
      {
        "word": "転勤(する)",
        "cleanWord": "転勤",
        "reading": "てんきん(する)",
        "cleanReading": "てんきん",
        "romaji": "tenkin",
        "meaning": "အလုပ်တာဝန်ကျနေရာပြောင်းသည်"
      },
      {
        "word": "出勤(する)",
        "cleanWord": "出勤",
        "reading": "しゅっきん(する)",
        "cleanReading": "しゅっきん",
        "romaji": "shukkin",
        "meaning": "အလုပ်တက်သည်"
      },
      {
        "word": "欠勤(する)",
        "cleanWord": "欠勤",
        "reading": "けっきん(する)",
        "cleanReading": "けっきん",
        "romaji": "kekkin",
        "meaning": "အလုပ်ပျက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に勤めるようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに つとめるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (အလုပ်လုပ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに通勤しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに つうきんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အလုပ်အသွားအပြန်လုပ်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 358,
    "kanji": "職",
    "strokes": 18,
    "onyomi": "ショク",
    "kunyomi": "—",
    "english": "occupation, workplace, staff, find employment",
    "romaji": "shoku shokugyou shokuba shokuin shuushoku tenshoku",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "職業",
        "cleanWord": "職業",
        "reading": "しょくぎょう",
        "cleanReading": "しょくぎょう",
        "romaji": "shokugyou",
        "meaning": "အလုပ်အကိုင်"
      },
      {
        "word": "職場",
        "cleanWord": "職場",
        "reading": "しょくば",
        "cleanReading": "しょくば",
        "romaji": "shokuba",
        "meaning": "အလုပ်ခွင်၊ အလုပ်ဌာန"
      },
      {
        "word": "職員",
        "cleanWord": "職員",
        "reading": "しょくいん",
        "cleanReading": "しょくいん",
        "romaji": "shokuin",
        "meaning": "ဝန်ထမ်း"
      },
      {
        "word": "就職(する)",
        "cleanWord": "就職",
        "reading": "しゅうしょく(する)",
        "cleanReading": "しゅうしょく",
        "romaji": "shuushoku",
        "meaning": "အလုပ်ဝင်သည်"
      },
      {
        "word": "転職(する)",
        "cleanWord": "転職",
        "reading": "てんしょく(する)",
        "cleanReading": "てんしょく",
        "romaji": "tenshoku",
        "meaning": "အလုပ်ပြောင်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「職業」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しょくぎょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အလုပ်အကိုင်\" (職業) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、職場について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょくばについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အလုပ်ခွင် (職場) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 359,
    "kanji": "当",
    "strokes": 6,
    "onyomi": "トウ",
    "kunyomi": "あ-たる ・ あ-てる",
    "english": "hit, win lottery, true, natural, our company",
    "romaji": "tou ataru ateru hontou touzen tekitou tousha",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "(~が)当たる",
        "cleanWord": "当たる",
        "reading": "(~が)あたる",
        "cleanReading": "あたる",
        "romaji": "ataru",
        "meaning": "ထိမှန်သည်၊ ပေါက်သည် (ထီ)"
      },
      {
        "word": "(~を)当てる",
        "cleanWord": "当てる",
        "reading": "(~を)あてる",
        "cleanReading": "あてる",
        "romaji": "ateru",
        "meaning": "ထိမှန်စေသည်၊ နေရောင်ခြည်အပူထိရောက်စေသည်"
      },
      {
        "word": "本当",
        "cleanWord": "本当",
        "reading": "ほんとう",
        "cleanReading": "ほんとう",
        "romaji": "hontou",
        "meaning": "တကယ်"
      },
      {
        "word": "当然",
        "cleanWord": "当然",
        "reading": "とうぜん",
        "cleanReading": "とうぜん",
        "romaji": "touzen",
        "meaning": "ပြောစရာမလို (ဖြစ်တတ်တဲ့သဘာဝ)"
      },
      {
        "word": "適当(な)",
        "cleanWord": "適当",
        "reading": "てきとう(な)",
        "cleanReading": "てきとう",
        "romaji": "tekitou",
        "meaning": "သင့်တော်သော"
      },
      {
        "word": "当社",
        "cleanWord": "当社",
        "reading": "とうしゃ",
        "cleanReading": "とうしゃ",
        "romaji": "tousha",
        "meaning": "မိမိ၏ကုမ္ပဏီ"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、当たるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、あたるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ထိမှန်သည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に当てることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに あてることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ထိမှန်စေသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 360,
    "kanji": "談",
    "strokes": 15,
    "onyomi": "ダン",
    "kunyomi": "—",
    "english": "consult, discuss, joke",
    "romaji": "dan soudan joudan",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "相談(する)",
        "cleanWord": "相談",
        "reading": "そうだん(する)",
        "cleanReading": "そうだん",
        "romaji": "soudan",
        "meaning": "တိုင်ပင်ဆွေးနွေးသည်"
      },
      {
        "word": "冗談",
        "cleanWord": "冗談",
        "reading": "じょうだん",
        "cleanReading": "じょうだん",
        "romaji": "joudan",
        "meaning": "နောက်ပြောင်ခြင်း"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり相談することが大切です。",
        "furigana": "しごとの まえに しっかり そうだんすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ တိုင်ပင်ဆွေးနွေးသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、冗談について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、じょうだんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နောက်ပြောင်ခြင်း (冗談) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 361,
    "kanji": "格",
    "strokes": 10,
    "onyomi": "カク",
    "kunyomi": "—",
    "english": "character, price, qualification, pass exam",
    "romaji": "kaku seikaku kakaku shikaku goukaku",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "性格",
        "cleanWord": "性格",
        "reading": "せいかく",
        "cleanReading": "せいかく",
        "romaji": "seikaku",
        "meaning": "အကျင့်စရိုက်"
      },
      {
        "word": "価格",
        "cleanWord": "価格",
        "reading": "かかく",
        "cleanReading": "かかく",
        "romaji": "kakaku",
        "meaning": "တန်ဖိုး"
      },
      {
        "word": "資格",
        "cleanWord": "資格",
        "reading": "しかく",
        "cleanReading": "しかく",
        "romaji": "shikaku",
        "meaning": "အရည်အချင်း"
      },
      {
        "word": "(~に)合格(する)",
        "cleanWord": "合格",
        "reading": "(~に)ごうかく(する)",
        "cleanReading": "ごうかく",
        "romaji": "goukaku",
        "meaning": "စာမေးပွဲအောင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「性格」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せいかく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အကျင့်စရိုက်\" (性格) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、価格について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かかくについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တန်ဖိုး (価格) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 362,
    "kanji": "少",
    "strokes": 4,
    "onyomi": "ショウ",
    "kunyomi": "すく-ない ・ すこ-し",
    "english": "few, a little, decrease",
    "romaji": "shou sukunai sukoshi genshou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "少ない",
        "cleanWord": "少ない",
        "reading": "すくない",
        "cleanReading": "すくない",
        "romaji": "sukunai",
        "meaning": "နည်းသော"
      },
      {
        "word": "少し",
        "cleanWord": "少し",
        "reading": "すこし",
        "cleanReading": "すこし",
        "romaji": "sukoshi",
        "meaning": "အနည်းငယ်"
      },
      {
        "word": "(~が)減少(する)",
        "cleanWord": "減少",
        "reading": "(~が)げんしょう(する)",
        "cleanReading": "げんしょう",
        "romaji": "genshou",
        "meaning": "လျော့နည်းသည်၊ လျော့ကျသည်"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより少ないと感じる人が多いようです。",
        "furigana": "きょうは いつもより すくないと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ နည်းသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "明日の会議までに、少しについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、すこしについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အနည်းငယ် (少し) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 363,
    "kanji": "産",
    "strokes": 11,
    "onyomi": "サン",
    "kunyomi": "—",
    "english": "industry, production, souvenir, birthplace",
    "romaji": "san sangyou furansusan seisan sanchi omiyage",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "産業",
        "cleanWord": "産業",
        "reading": "さんぎょう",
        "cleanReading": "さんぎょう",
        "romaji": "sangyou",
        "meaning": "ထုတ်လုပ်မှုလုပ်ငန်း"
      },
      {
        "word": "フランス産",
        "cleanWord": "フランス産",
        "reading": "ふらんすさん",
        "cleanReading": "ふらんすさん",
        "romaji": "furansusan",
        "meaning": "ပြင်သစ်နိုင်ငံထွက်"
      },
      {
        "word": "生産(する)",
        "cleanWord": "生産",
        "reading": "せいさん(する)",
        "cleanReading": "せいさん",
        "romaji": "seisan",
        "meaning": "ထုတ်လုပ်သည်"
      },
      {
        "word": "産地",
        "cleanWord": "産地",
        "reading": "さんち",
        "cleanReading": "さんち",
        "romaji": "sanchi",
        "meaning": "ထွက်ရှိရာဒေသ"
      },
      {
        "word": "お土産",
        "cleanWord": "お土産",
        "reading": "おみやげ",
        "cleanReading": "おみやげ",
        "romaji": "omiyage",
        "meaning": "လက်ဆောင်ပစ္စည်း (ခရီးမှဝယ်လာသော)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「産業」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「さんぎょう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ထုတ်လုပ်မှုလုပ်ငန်း\" (産業) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、フランス産について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ふらんすさんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပြင်သစ်နိုင်ငံထွက် (フランス産) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 364,
    "kanji": "製",
    "strokes": 14,
    "onyomi": "セイ",
    "kunyomi": "—",
    "english": "manufactured, product, made in Japan",
    "romaji": "sei seihin nihonsei",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "製品",
        "cleanWord": "製品",
        "reading": "せいひん",
        "cleanReading": "せいひん",
        "romaji": "seihin",
        "meaning": "ထုတ်ကုန်၊ ကုန်ချော"
      },
      {
        "word": "日本製",
        "cleanWord": "日本製",
        "reading": "にほんせい",
        "cleanReading": "にほんせい",
        "romaji": "nihonsei",
        "meaning": "ဂျပန်နိုင်ငံထုတ် (Made in Japan)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「製品」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せいひん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ထုတ်ကုန်\" (製品) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、日本製について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、にほんせいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဂျပန်နိုင်ငံထုတ် (Made in Japan) (日本製) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 365,
    "kanji": "造",
    "strokes": 10,
    "onyomi": "ゾウ",
    "kunyomi": "つく-る",
    "english": "make, build, manufacture",
    "romaji": "zou tsukuru seizou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "造る",
        "cleanWord": "造る",
        "reading": "つくる",
        "cleanReading": "つくる",
        "romaji": "tsukuru",
        "meaning": "တည်ဆောက်ပြုလုပ်သည်"
      },
      {
        "word": "製造(する)",
        "cleanWord": "製造",
        "reading": "せいぞう(する)",
        "cleanReading": "せいぞう",
        "romaji": "seizou",
        "meaning": "ကုန်ထုတ်လုပ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に造るようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに つくるように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (တည်ဆောက်ပြုလုပ်သည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに製造しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに せいぞうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ကုန်ထုတ်လုပ်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 366,
    "kanji": "労",
    "strokes": 7,
    "onyomi": "ロウ",
    "kunyomi": "—",
    "english": "labor, hardship, fatigue",
    "romaji": "rou kurou hirou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "苦労(する)",
        "cleanWord": "苦労",
        "reading": "くろう(する)",
        "cleanReading": "くろう",
        "romaji": "kurou",
        "meaning": "ဆင်းရဲပင်ပန်းသည်၊ ဒုက္ခခံသည်"
      },
      {
        "word": "疲労(する)",
        "cleanWord": "疲労",
        "reading": "ひろう(する)",
        "cleanReading": "ひろう",
        "romaji": "hirou",
        "meaning": "မောပန်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり苦労することが大切です。",
        "furigana": "しごとの まえに しっかり くろうすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ဆင်းရဲပင်ပန်းသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに疲労しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ひろうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း မောပန်းသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 367,
    "kanji": "働",
    "strokes": 13,
    "onyomi": "ドウ",
    "kunyomi": "はたら-く",
    "english": "work, labor, worker",
    "romaji": "dou hataraku roudou roudousha",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "働く",
        "cleanWord": "働く",
        "reading": "はたらく",
        "cleanReading": "はたらく",
        "romaji": "hataraku",
        "meaning": "အလုပ်လုပ်သည် (ကာယ)"
      },
      {
        "word": "労働(する)",
        "cleanWord": "労働",
        "reading": "ろうどう(する)",
        "cleanReading": "ろうどう",
        "romaji": "roudou",
        "meaning": "အလုပ်လုပ်သည်"
      },
      {
        "word": "労働者",
        "cleanWord": "労働者",
        "reading": "ろうどうしゃ",
        "cleanReading": "ろうどうしゃ",
        "romaji": "roudousha",
        "meaning": "အလုပ်သမား"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に働くようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに はたらくように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (အလုပ်လုပ်သည် (ကာယ)) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに労働しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ろうどうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အလုပ်လုပ်သည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 368,
    "kanji": "商",
    "strokes": 11,
    "onyomi": "ショウ",
    "kunyomi": "—",
    "english": "product, merchandise, commerce, business",
    "romaji": "shou shouhin shougyou shoubai",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "商品",
        "cleanWord": "商品",
        "reading": "しょうひん",
        "cleanReading": "しょうひん",
        "romaji": "shouhin",
        "meaning": "ကုန်ပစ္စည်း"
      },
      {
        "word": "商業",
        "cleanWord": "商業",
        "reading": "しょうぎょう",
        "cleanReading": "しょうぎょう",
        "romaji": "shougyou",
        "meaning": "ကုန်သွယ်မှု၊ အရောင်းအဝယ်လုပ်ငန်း"
      },
      {
        "word": "商売",
        "cleanWord": "商売",
        "reading": "しょうばい",
        "cleanReading": "しょうばい",
        "romaji": "shoubai",
        "meaning": "အရောင်းအဝယ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「商品」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「しょうひん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကုန်ပစ္စည်း\" (商品) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、商業について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、しょうぎょうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကုန်သွယ်မှု (商業) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 369,
    "kanji": "首",
    "strokes": 9,
    "onyomi": "シュ",
    "kunyomi": "くび",
    "english": "neck, wrist, capital city, prime minister",
    "romaji": "shu kubi tekubi shuto shushou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "首",
        "cleanWord": "首",
        "reading": "くび",
        "cleanReading": "くび",
        "romaji": "kubi",
        "meaning": "လည်ပင်း"
      },
      {
        "word": "手首",
        "cleanWord": "手首",
        "reading": "てくび",
        "cleanReading": "てくび",
        "romaji": "tekubi",
        "meaning": "လက်ကောက်ဝတ်"
      },
      {
        "word": "首都",
        "cleanWord": "首都",
        "reading": "しゅと",
        "cleanReading": "しゅと",
        "romaji": "shuto",
        "meaning": "မြို့တော်"
      },
      {
        "word": "首相",
        "cleanWord": "首相",
        "reading": "しゅしょう",
        "cleanReading": "しゅしょう",
        "romaji": "shushou",
        "meaning": "ဝန်ကြီးချုပ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「首」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「くび」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လည်ပင်း\" (首) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、手首について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、てくびについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ လက်ကောက်ဝတ် (手首) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 370,
    "kanji": "都",
    "strokes": 11,
    "onyomi": "ト ・ ツ",
    "kunyomi": "—",
    "english": "metropolis, city, Tokyo, convenience",
    "romaji": "to tsu toshi tokai toukyouto todoufuken tsugou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "都市",
        "cleanWord": "都市",
        "reading": "とし",
        "cleanReading": "とし",
        "romaji": "toshi",
        "meaning": "မြို့ကြီး"
      },
      {
        "word": "都会",
        "cleanWord": "都会",
        "reading": "とかい",
        "cleanReading": "とかい",
        "romaji": "tokai",
        "meaning": "မြို့ကြီးပြကြီး"
      },
      {
        "word": "東京都",
        "cleanWord": "東京都",
        "reading": "とうきょうと",
        "cleanReading": "とうきょうと",
        "romaji": "toukyouto",
        "meaning": "တိုကျိုမြို့"
      },
      {
        "word": "都道府県",
        "cleanWord": "都道府県",
        "reading": "とどうふけん",
        "cleanReading": "とどうふけん",
        "romaji": "todoufuken",
        "meaning": "ဂျပန်မှပြည်နယ်ခရိုင်စီရင်စု"
      },
      {
        "word": "都合",
        "cleanWord": "都合",
        "reading": "つごう",
        "cleanReading": "つごう",
        "romaji": "tsugou",
        "meaning": "အခြေအနေ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「都市」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「とし」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"မြို့ကြီး\" (都市) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、都会について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、とかいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မြို့ကြီးပြကြီး (都会) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 371,
    "kanji": "平",
    "strokes": 5,
    "onyomi": "ヘイ",
    "kunyomi": "—",
    "english": "peace, weekday, average, fair",
    "romaji": "hei heiwa heijitsu heikin kouhei",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "平和",
        "cleanWord": "平和",
        "reading": "へいわ",
        "cleanReading": "へいわ",
        "romaji": "heiwa",
        "meaning": "ငြိမ်းချမ်းရေး"
      },
      {
        "word": "平日",
        "cleanWord": "平日",
        "reading": "へいじつ",
        "cleanReading": "へいじつ",
        "romaji": "heijitsu",
        "meaning": "ရိုးရိုးရက်၊ ကြားရက် (တနင်္လာမှသောကြာ)"
      },
      {
        "word": "平均",
        "cleanWord": "平均",
        "reading": "へいきん",
        "cleanReading": "へいきん",
        "romaji": "heikin",
        "meaning": "ပျမ်းမျှခြင်း"
      },
      {
        "word": "公平(な)",
        "cleanWord": "公平",
        "reading": "こうへい(な)",
        "cleanReading": "こうへい",
        "romaji": "kouhei",
        "meaning": "တရားမျှတသော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「平和」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「へいわ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ငြိမ်းချမ်းရေး\" (平和) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、平日について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、へいじつについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ရိုးရိုးရက် (平日) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 372,
    "kanji": "経",
    "strokes": 11,
    "onyomi": "ケイ",
    "kunyomi": "た-つ",
    "english": "pass (time), experience",
    "romaji": "kei tatsu keiken",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "(~が)経つ",
        "cleanWord": "経つ",
        "reading": "(~が)たつ",
        "cleanReading": "たつ",
        "romaji": "tatsu",
        "meaning": "ကြာညောင်းသည်"
      },
      {
        "word": "経験(する)",
        "cleanWord": "経験",
        "reading": "けいけん(する)",
        "cleanReading": "けいけん",
        "romaji": "keiken",
        "meaning": "အတွေ့အကြုံယူသည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、経つようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、たつように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကြာညောင်းသည်) လာခဲ့သည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに経験しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに けいけんしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း အတွေ့အကြုံယူသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 373,
    "kanji": "済",
    "strokes": 11,
    "onyomi": "サイ ・ ザイ",
    "kunyomi": "す-む",
    "english": "finish, end, economy",
    "romaji": "sai zai sumu keizai",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "(~が)済む",
        "cleanWord": "済む",
        "reading": "(~が)すむ",
        "cleanReading": "すむ",
        "romaji": "sumu",
        "meaning": "ပြီးဆုံးသည်"
      },
      {
        "word": "経済",
        "cleanWord": "経済",
        "reading": "けいざい",
        "cleanReading": "けいざい",
        "romaji": "keizai",
        "meaning": "စီးပွားရေး"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、済むようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、すむように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ပြီးဆုံးသည်) လာခဲ့သည်။"
      },
      {
        "jp": "明日の会議までに、経済について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、けいざいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ စီးပွားရေး (経済) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 374,
    "kanji": "成",
    "strokes": 6,
    "onyomi": "セイ",
    "kunyomi": "—",
    "english": "grow, adult, succeed, complete",
    "romaji": "sei seichou seijin seikou kansei",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "成長(する)",
        "cleanWord": "成長",
        "reading": "せいちょう",
        "cleanReading": "せいちょう",
        "romaji": "seichou",
        "meaning": "ကြီးထွားလာသည်"
      },
      {
        "word": "成人",
        "cleanWord": "成人",
        "reading": "せいじん",
        "cleanReading": "せいじん",
        "romaji": "seijin",
        "meaning": "အရွယ်ရောက်သူ၊ လူပြည့်ပြီးသူ"
      },
      {
        "word": "成功(する)",
        "cleanWord": "成功",
        "reading": "せいこう(する)",
        "cleanReading": "せいこう",
        "romaji": "seikou",
        "meaning": "အောင်မြင်သည်"
      },
      {
        "word": "完成(する)",
        "cleanWord": "完成",
        "reading": "かんせい(する)",
        "cleanReading": "かんせい",
        "romaji": "kansei",
        "meaning": "ပြီးမြောက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり成長することが大切です。",
        "furigana": "しごとの まえに しっかり せいちょうすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ကြီးထွားလာသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、成人について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せいじんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အရွယ်ရောက်သူ (成人) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 375,
    "kanji": "輸",
    "strokes": 16,
    "onyomi": "ユ",
    "kunyomi": "—",
    "english": "export, import, transport",
    "romaji": "yu yushutsu yunyuu yushutsunyuu yusou",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "輸出(する)",
        "cleanWord": "輸出",
        "reading": "ゆしゅつ(する)",
        "cleanReading": "ゆしゅつ",
        "romaji": "yushutsu",
        "meaning": "တင်ပို့သည်"
      },
      {
        "word": "輸入(する)",
        "cleanWord": "輸入",
        "reading": "ゆにゅう(する)",
        "cleanReading": "ゆにゅう",
        "romaji": "yunyuu",
        "meaning": "တင်သွင်းသည်"
      },
      {
        "word": "輸出入",
        "cleanWord": "輸出入",
        "reading": "ゆしゅつにゅう",
        "cleanReading": "ゆしゅつにゅう",
        "romaji": "yushutsunyuu",
        "meaning": "တင်ပို့တင်သွင်းခြင်း"
      },
      {
        "word": "輸送(する)",
        "cleanWord": "輸送",
        "reading": "ゆそう(する)",
        "cleanReading": "ゆそう",
        "romaji": "yusou",
        "meaning": "သယ်ယူပို့ဆောင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり輸出することが大切です。",
        "furigana": "しごとの まえに しっかり ゆしゅつすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ တင်ပို့သည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに輸入しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに ゆにゅうしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း တင်သွင်းသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 376,
    "kanji": "貿",
    "strokes": 12,
    "onyomi": "ボウ",
    "kunyomi": "—",
    "english": "foreign trade, commerce",
    "romaji": "bou boueki",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "貿易",
        "cleanWord": "貿易",
        "reading": "ぼうえき",
        "cleanReading": "ぼうえき",
        "romaji": "boueki",
        "meaning": "ကူးသန်းရောင်းဝယ်ရေး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「貿易」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ぼうえき」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ကူးသန်းရောင်းဝယ်ရေး\" (貿易) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、貿易について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ぼうえきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ကူးသန်းရောင်းဝယ်ရေး (貿易) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 377,
    "kanji": "易",
    "strokes": 8,
    "onyomi": "エキ",
    "kunyomi": "やさ-しい",
    "english": "easy, simple, trade",
    "romaji": "eki yasashii youi",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "易しい",
        "cleanWord": "易しい",
        "reading": "やさしい",
        "cleanReading": "やさしい",
        "romaji": "yasashii",
        "meaning": "လွယ်ကူသော"
      },
      {
        "word": "容易(な)",
        "cleanWord": "容易",
        "reading": "ようい(な)",
        "cleanReading": "ようい",
        "romaji": "youi",
        "meaning": "လွယ်ကူသော"
      }
    ],
    "sentences": [
      {
        "jp": "今日はいつもより易しいと感じる人が多いようです。",
        "furigana": "きょうは いつもより やさしいと かんじる ひとが おおい ようです。",
        "mm": "ဒီနေ့သည် ခါတိုင်းထက် ပို၍ လွယ်ကူသော ဟု ခံစားရသူ များပုံရပါသည်။"
      },
      {
        "jp": "先生はいつも容易な言葉で説明してくれます。",
        "furigana": "せんせいは いつも よういな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း လွယ်ကူသော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 378,
    "kanji": "盛",
    "strokes": 11,
    "onyomi": "—",
    "kunyomi": "さか-ん ・ も-る",
    "english": "prosperous, popular, large serving",
    "romaji": "sakan moru oomori",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "盛ん(な)",
        "cleanWord": "盛ん",
        "reading": "さかん(な)",
        "cleanReading": "さかん",
        "romaji": "sakan",
        "meaning": "ထွန်းကားသော"
      },
      {
        "word": "大盛り",
        "cleanWord": "大盛り",
        "reading": "おおもり",
        "cleanReading": "おおもり",
        "romaji": "oomori",
        "meaning": "ပွဲကြီး (ထမင်း၊ ဟင်း)"
      }
    ],
    "sentences": [
      {
        "jp": "この方法はとても盛んなので、だれでも使えます。",
        "furigana": "この ほうほうは とても さかんなので、だれでも つかえます。",
        "mm": "ဤနည်းလမ်းသည် အလွန် ထွန်းကားသော သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、大盛りについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おおもりについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ပွဲကြီး (ထမင်း (大盛り) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 379,
    "kanji": "営",
    "strokes": 12,
    "onyomi": "エイ",
    "kunyomi": "—",
    "english": "business, open for business, management",
    "romaji": "ei eigyou keiei",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "営業(する)",
        "cleanWord": "営業",
        "reading": "えいぎょう(する)",
        "cleanReading": "えいぎょう",
        "romaji": "eigyou",
        "meaning": "အရောင်းအဝယ်လုပ်ခြင်း"
      },
      {
        "word": "経営(する)",
        "cleanWord": "経営",
        "reading": "けいえい(する)",
        "cleanReading": "けいえい",
        "romaji": "keiei",
        "meaning": "စီးပွားစီမံသည်၊ စီမံအုပ်ချုပ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり営業することが大切です。",
        "furigana": "しごとの まえに しっかり えいぎょうすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ အရောင်းအဝယ်လုပ်ခြင်းခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "先輩に相談してから、すぐに経営しました。",
        "furigana": "せんぱいに そうだんしてから、すぐに けいえいしました。",
        "mm": "စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း စီးပွားစီမံသည်ခဲ့ပါသည်။"
      }
    ]
  },
  {
    "id": 380,
    "kanji": "第",
    "strokes": 11,
    "onyomi": "ダイ",
    "kunyomi": "—",
    "english": "number, ordinal prefix, first",
    "romaji": "dai daiichi",
    "category": "Work, Business & Economy",
    "categoryJp": "仕事・経済・貿易",
    "categoryMm": "အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး",
    "vocab": [
      {
        "word": "第一",
        "cleanWord": "第一",
        "reading": "だいいち",
        "cleanReading": "だいいち",
        "romaji": "daiichi",
        "meaning": "ပထမ၊ အရေးကြီးသောအရာ"
      },
      {
        "word": "第~",
        "cleanWord": "第",
        "reading": "だい~",
        "cleanReading": "だい",
        "romaji": "dai",
        "meaning": "နံပါတ်.....မြောက် (ပထမ၊ ဒုတိယ....)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「第一」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「だいいち」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ပထမ\" (第一) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、第について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、だいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နံပါတ်.....မြောက် (ပထမ (第) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 381,
    "kanji": "個",
    "strokes": 10,
    "onyomi": "コ",
    "kunyomi": "—",
    "english": "counter for small items, individual, personal",
    "romaji": "ko kosuu kojin kojinteki kosei",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "~個",
        "cleanWord": "個",
        "reading": "~こ",
        "cleanReading": "こ",
        "romaji": "ko",
        "meaning": ".......ခု (သေးသည့်ပစ္စည်းကိုရေတွက်ခြင်း)"
      },
      {
        "word": "個数",
        "cleanWord": "個数",
        "reading": "こすう",
        "cleanReading": "こすう",
        "romaji": "kosuu",
        "meaning": "အခုအရေအတွက်၊ အလုံးအရေအတွက်"
      },
      {
        "word": "個人",
        "cleanWord": "個人",
        "reading": "こじん",
        "cleanReading": "こじん",
        "romaji": "kojin",
        "meaning": "တစ်ဦးတည်း၊ ပုဂ္ဂလိက"
      },
      {
        "word": "個人的(な)",
        "cleanWord": "個人的",
        "reading": "こじんてき(な)",
        "cleanReading": "こじんてき",
        "romaji": "kojinteki",
        "meaning": "ကိုယ်ရေးကိုယ်တာနှင့်ဆိုင်သော"
      },
      {
        "word": "個性",
        "cleanWord": "個性",
        "reading": "こせい",
        "cleanReading": "こせい",
        "romaji": "kosei",
        "meaning": "ကိုယ်ရေးကိုယ်သွေး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「個」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「こ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \".......ခု (သေးသည့်ပစ္စည်းကိုရေတွက်ခြင်း)\" (個) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、個数について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、こすうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အခုအရေအတွက် (個数) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 382,
    "kanji": "政",
    "strokes": 9,
    "onyomi": "セイ",
    "kunyomi": "—",
    "english": "politics, politician, government",
    "romaji": "sei seiji seijika",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "政治",
        "cleanWord": "政治",
        "reading": "せいじ",
        "cleanReading": "せいじ",
        "romaji": "seiji",
        "meaning": "နိုင်ငံရေး"
      },
      {
        "word": "政治家",
        "cleanWord": "政治家",
        "reading": "せいじか",
        "cleanReading": "せいじか",
        "romaji": "seijika",
        "meaning": "နိုင်ငံရေးသမား"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「政治」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せいじ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"နိုင်ငံရေး\" (政治) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、政治家について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、せいじかについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နိုင်ငံရေးသမား (政治家) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 383,
    "kanji": "税",
    "strokes": 12,
    "onyomi": "ゼイ",
    "kunyomi": "—",
    "english": "tax, tax included, consumption tax",
    "romaji": "zei zeikin zeikomi shouhizei",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "税金",
        "cleanWord": "税金",
        "reading": "ぜいきん",
        "cleanReading": "ぜいきん",
        "romaji": "zeikin",
        "meaning": "အခွန်ငွေ"
      },
      {
        "word": "税込 / 税込み",
        "cleanWord": "税込",
        "reading": "ぜいこみ",
        "cleanReading": "ぜいこみ",
        "romaji": "zeikomi",
        "meaning": "အခွန်ငွေပါပြီး"
      },
      {
        "word": "消費税",
        "cleanWord": "消費税",
        "reading": "しょうひぜい",
        "cleanReading": "しょうひぜい",
        "romaji": "shouhizei",
        "meaning": "စားသုံးသူ၊ ဝယ်သူမှပေးရသောအဓွန်ငွေ (အခွန်ငွေ)"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「税金」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ぜいきん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အခွန်ငွေ\" (税金) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、税込について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ぜいこみについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အခွန်ငွေပါပြီး (税込) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 384,
    "kanji": "議",
    "strokes": 20,
    "onyomi": "ギ",
    "kunyomi": "—",
    "english": "member of parliament, meeting, chairperson, Diet",
    "romaji": "gi giin kaigi gichou gikai",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "議員",
        "cleanWord": "議員",
        "reading": "ぎいん",
        "cleanReading": "ぎいん",
        "romaji": "giin",
        "meaning": "လွှတ်တော်အမတ်"
      },
      {
        "word": "会議",
        "cleanWord": "会議",
        "reading": "かいぎ",
        "cleanReading": "かいぎ",
        "romaji": "kaigi",
        "meaning": "အစည်းအဝေး"
      },
      {
        "word": "議長",
        "cleanWord": "議長",
        "reading": "ぎちょう",
        "cleanReading": "ぎちょう",
        "romaji": "gichou",
        "meaning": "ဥက္ကဋ္ဌ"
      },
      {
        "word": "議会",
        "cleanWord": "議会",
        "reading": "ぎかい",
        "cleanReading": "ぎかい",
        "romaji": "gikai",
        "meaning": "လွှတ်တော်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「議員」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ぎいん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လွှတ်တော်အမတ်\" (議員) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、会議について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かいぎについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အစည်းအဝေး (会議) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 385,
    "kanji": "論",
    "strokes": 15,
    "onyomi": "ロン",
    "kunyomi": "—",
    "english": "debate, conclusion, thesis, logic",
    "romaji": "ron giron ketsuron ronbun ronri ronriteki",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "議論(する)",
        "cleanWord": "議論",
        "reading": "ぎろん(する)",
        "cleanReading": "ぎろん",
        "romaji": "giron",
        "meaning": "ဆွေးနွေးမှု၊ အခြေအတင်ပြောဆိုသည်"
      },
      {
        "word": "結論",
        "cleanWord": "結論",
        "reading": "けつろん",
        "cleanReading": "けつろん",
        "romaji": "ketsuron",
        "meaning": "နိဂုံး"
      },
      {
        "word": "論文",
        "cleanWord": "論文",
        "reading": "ろんぶん",
        "cleanReading": "ろんぶん",
        "romaji": "ronbun",
        "meaning": "စာတမ်း"
      },
      {
        "word": "論理",
        "cleanWord": "論理",
        "reading": "ろんり",
        "cleanReading": "ろんり",
        "romaji": "ronri",
        "meaning": "ဆင်ခြင်တုံတရား"
      },
      {
        "word": "論理的(な)",
        "cleanWord": "論理的",
        "reading": "ろんりてき(な)",
        "cleanReading": "ろんりてき",
        "romaji": "ronriteki",
        "meaning": "ကျိုးကြောင်းဆီလျော်သော"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり議論することが大切です。",
        "furigana": "しごとの まえに しっかり ぎろんすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ဆွေးနွေးမှုခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "明日の会議までに、結論について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、けつろんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ နိဂုံး (結論) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 386,
    "kanji": "府",
    "strokes": 8,
    "onyomi": "フ",
    "kunyomi": "—",
    "english": "government, prefecture, Osaka, Kyoto",
    "romaji": "fu seifu todoufuken oosakafu kyoutofu",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "政府",
        "cleanWord": "政府",
        "reading": "せいふ",
        "cleanReading": "せいふ",
        "romaji": "seifu",
        "meaning": "အစိုးရ"
      },
      {
        "word": "都道府県",
        "cleanWord": "都道府県",
        "reading": "とどうふけん",
        "cleanReading": "とどうふけん",
        "romaji": "todoufuken",
        "meaning": "မြို့ခရိုင်ပြည်နယ်စီရင်စု"
      },
      {
        "word": "大阪府",
        "cleanWord": "大阪府",
        "reading": "おおさかふ",
        "cleanReading": "おおさかふ",
        "romaji": "oosakafu",
        "meaning": "အိုဆာကာနယ်"
      },
      {
        "word": "京都府",
        "cleanWord": "京都府",
        "reading": "きょうとふ",
        "cleanReading": "きょうとふ",
        "romaji": "kyoutofu",
        "meaning": "ကျိုတိုနယ်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「政府」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「せいふ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အစိုးရ\" (政府) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、都道府県について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、とどうふけんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မြို့ခရိုင်ပြည်နယ်စီရင်စု (都道府県) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 387,
    "kanji": "反",
    "strokes": 4,
    "onyomi": "ハン",
    "kunyomi": "—",
    "english": "opposite, oppose, anti-",
    "romaji": "han hantai hantaisuru",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "反対",
        "cleanWord": "反対",
        "reading": "はんたい",
        "cleanReading": "はんたい",
        "romaji": "hantai",
        "meaning": "ဆန့်ကျင်ဘက်"
      },
      {
        "word": "(~に)反対する",
        "cleanWord": "反対する",
        "reading": "(~に)はんたいする",
        "cleanReading": "はんたいする",
        "romaji": "hantaisuru",
        "meaning": "~ကိုဆန့်ကျင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「反対」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「はんたい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဆန့်ကျင်ဘက်\" (反対) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで反対する必要があります。",
        "furigana": "じかんが たりないので、いそいで はんたいする ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ကိုဆန့်ကျင်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 388,
    "kanji": "移",
    "strokes": 11,
    "onyomi": "イ",
    "kunyomi": "うつ-る ・ うつ-す",
    "english": "move, transfer, shift",
    "romaji": "i utsuru utsusu idou",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "(~が)移る",
        "cleanWord": "移る",
        "reading": "(~が)うつる",
        "cleanReading": "うつる",
        "romaji": "utsuru",
        "meaning": "~ကရွှေ့ပြောင်းလာသည်"
      },
      {
        "word": "(~を)移す",
        "cleanWord": "移す",
        "reading": "(~を)うつす",
        "cleanReading": "うつす",
        "romaji": "utsusu",
        "meaning": "~ကိုရွှေ့ပြောင်းသည်"
      },
      {
        "word": "移動(する)",
        "cleanWord": "移動",
        "reading": "いどう(する)",
        "cleanReading": "いどう",
        "romaji": "idou",
        "meaning": "နေရာပြောင်းသည်၊ ရွှေ့ပြောင်းသည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、移るようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、うつるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကရွှေ့ပြောင်းလာသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に移すことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに うつすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ကိုရွှေ့ပြောင်းသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 389,
    "kanji": "立",
    "strokes": 5,
    "onyomi": "リツ",
    "kunyomi": "た-つ ・ た-てる",
    "english": "stand, national, public, private, establish",
    "romaji": "ritsu tatsu tateru shashintate kokuritsu kouritsu shiritsu seiritsu",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "(~が)立つ",
        "cleanWord": "立つ",
        "reading": "(~が)たつ",
        "cleanReading": "たつ",
        "romaji": "tatsu",
        "meaning": "~က ထသည်၊ ရပ်သည်"
      },
      {
        "word": "(~を)立てる",
        "cleanWord": "立てる",
        "reading": "(~を)たてる",
        "cleanReading": "たてる",
        "romaji": "tateru",
        "meaning": "~ကို ထောင်သည်"
      },
      {
        "word": "写真立て",
        "cleanWord": "写真立て",
        "reading": "しゃしんたて",
        "cleanReading": "しゃしんたて",
        "romaji": "shashintate",
        "meaning": "ဓါတ်ပုံဘောင်"
      },
      {
        "word": "国立",
        "cleanWord": "国立",
        "reading": "こくりつ",
        "cleanReading": "こくりつ",
        "romaji": "kokuritsu",
        "meaning": "အစိုးရပိုင်၊"
      },
      {
        "word": "公立",
        "cleanWord": "公立",
        "reading": "こうりつ",
        "cleanReading": "こうりつ",
        "romaji": "kouritsu",
        "meaning": "ခရိုင်အစိုးရရှိသောကိုယ်ပိုင်အုပ်ချုပ်ရေးအဖွဲ့မှတည်ထောင်ထားသောအများပိုင်"
      },
      {
        "word": "私立",
        "cleanWord": "私立",
        "reading": "しりつ",
        "cleanReading": "しりつ",
        "romaji": "shiritsu",
        "meaning": "ကိုယ်ပိုင်၊ ပုဂ္ဂလိကပိုင်"
      },
      {
        "word": "成立(する)",
        "cleanWord": "成立",
        "reading": "せいりつ",
        "cleanReading": "せいりつ",
        "romaji": "seiritsu",
        "meaning": "တည်ထောင်သည်၊ အထမြောက်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、立つようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、たつように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (က ထသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に立てることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに たてることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ကို ထောင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 390,
    "kanji": "示",
    "strokes": 5,
    "onyomi": "シ",
    "kunyomi": "しめ-す",
    "english": "show, indicate, display",
    "romaji": "shi shimesu hyouji",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "示す",
        "cleanWord": "示す",
        "reading": "しめす",
        "cleanReading": "しめす",
        "romaji": "shimesu",
        "meaning": "ညွှန်ပြသည်"
      },
      {
        "word": "表示",
        "cleanWord": "表示",
        "reading": "ひょうじ",
        "cleanReading": "ひょうじ",
        "romaji": "hyouji",
        "meaning": "ဖော်ပြသည်"
      }
    ],
    "sentences": [
      {
        "jp": "毎日少しずつ練習すれば、上手に示すようになります。",
        "furigana": "まいにち すこしずつ れんしゅうすれば、じょうずに しめすように なります。",
        "mm": "နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (ညွှန်ပြသည်) နိုင်လာပါလိမ့်မည်။"
      },
      {
        "jp": "明日の会議までに、表示について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ひょうじについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဖော်ပြသည် (表示) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 391,
    "kanji": "割",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "わ-れる ・ わ-る ・ わり",
    "english": "break, split, ratio, discount, timetable",
    "romaji": "wareru waru wari wariai yonwari waribiki jikanwari",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "(~が)割れる",
        "cleanWord": "割れる",
        "reading": "(~が)われる",
        "cleanReading": "われる",
        "romaji": "wareru",
        "meaning": "ကွဲသည်"
      },
      {
        "word": "(~を)割る",
        "cleanWord": "割る",
        "reading": "(~を)わる",
        "cleanReading": "わる",
        "romaji": "waru",
        "meaning": "ခွဲခြမ်းသည်"
      },
      {
        "word": "割合",
        "cleanWord": "割合",
        "reading": "わりあい",
        "cleanReading": "わりあい",
        "romaji": "wariai",
        "meaning": "အချိုးအစား၊ နှုန်း၊ နှိုင်းယှဉ်ခြင်းအားဖြင့်"
      },
      {
        "word": "4割",
        "cleanWord": "4割",
        "reading": "よんわり",
        "cleanReading": "よんわり",
        "romaji": "yonwari",
        "meaning": "၄၀ရာခိုင်နှုန်း"
      },
      {
        "word": "割引 / 割引き",
        "cleanWord": "割引",
        "reading": "わりびき",
        "cleanReading": "わりびき",
        "romaji": "waribiki",
        "meaning": "ဈေးလျှော့ခြင်း"
      },
      {
        "word": "時間割",
        "cleanWord": "時間割",
        "reading": "じかんわり",
        "cleanReading": "じかんわり",
        "romaji": "jikanwari",
        "meaning": "အချိန်ဇယား"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、割れるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、われるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (ကွဲသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に割ることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに わることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (ခွဲခြမ်းသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 392,
    "kanji": "減",
    "strokes": 12,
    "onyomi": "ゲン",
    "kunyomi": "へ-る ・ へ-らす",
    "english": "decrease, reduce, weight loss",
    "romaji": "gen heru herasu genshou genryou",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "(~が)減る",
        "cleanWord": "減る",
        "reading": "(~が)へる",
        "cleanReading": "へる",
        "romaji": "heru",
        "meaning": "လျော့သည်"
      },
      {
        "word": "(~を)減らす",
        "cleanWord": "減らす",
        "reading": "(~を)へらす",
        "cleanReading": "へらす",
        "romaji": "herasu",
        "meaning": "လျှော့ချသည်"
      },
      {
        "word": "減少(する)",
        "cleanWord": "減少",
        "reading": "げんしょう(する)",
        "cleanReading": "げんしょう",
        "romaji": "genshou",
        "meaning": "လျော့နည်းမှု၊ လျော့ကျမှု"
      },
      {
        "word": "減量",
        "cleanWord": "減量",
        "reading": "げんりょう",
        "cleanReading": "げんりょう",
        "romaji": "genryou",
        "meaning": "လျှော့ချသောပမာဏ"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、減るようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、へるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (လျော့သည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に減らすことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに へらすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (လျှော့ချသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 393,
    "kanji": "倍",
    "strokes": 10,
    "onyomi": "バイ",
    "kunyomi": "—",
    "english": "times, double, multiple",
    "romaji": "bai sanbai",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "倍",
        "cleanWord": "倍",
        "reading": "ばい",
        "cleanReading": "ばい",
        "romaji": "bai",
        "meaning": "အဆ"
      },
      {
        "word": "3倍",
        "cleanWord": "3倍",
        "reading": "さんばい",
        "cleanReading": "さんばい",
        "romaji": "sanbai",
        "meaning": "၃ဆ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「倍」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ばい」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အဆ\" (倍) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、3倍について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、さんばいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ၃ဆ (3倍) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 394,
    "kanji": "増",
    "strokes": 14,
    "onyomi": "ゾウ",
    "kunyomi": "ふ-える ・ ふ-やす",
    "english": "increase, multiply, add",
    "romaji": "zou fueru fuyasu zouka zouryou",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "(~が)増える",
        "cleanWord": "増える",
        "reading": "(~が)ふえる",
        "cleanReading": "ふえる",
        "romaji": "fueru",
        "meaning": "တိုးပွားသည်"
      },
      {
        "word": "(~を)増やす",
        "cleanWord": "増やす",
        "reading": "(~を)ふやす",
        "cleanReading": "ふやす",
        "romaji": "fuyasu",
        "meaning": "တိုးပွားစေသည်"
      },
      {
        "word": "(~が)増加(する)",
        "cleanWord": "増加",
        "reading": "(~が)ぞうか(する)",
        "cleanReading": "ぞうか",
        "romaji": "zouka",
        "meaning": "တိုးပွားလာခြင်း"
      },
      {
        "word": "増量(する)",
        "cleanWord": "増量",
        "reading": "ぞうりょう(する)",
        "cleanReading": "ぞうりょう",
        "romaji": "zouryou",
        "meaning": "ပမာဏတိုးအောင်လုပ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、増えるようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、ふえるように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (တိုးပွားသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に増やすことができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに ふやすことが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (တိုးပွားစေသည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 395,
    "kanji": "価",
    "strokes": 8,
    "onyomi": "カ",
    "kunyomi": "—",
    "english": "price, value, fixed price, cost of living",
    "romaji": "ka kakaku kachi teika bukka kouka",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "価格",
        "cleanWord": "価格",
        "reading": "かかく",
        "cleanReading": "かかく",
        "romaji": "kakaku",
        "meaning": "ဈေးနှုန်း"
      },
      {
        "word": "価値",
        "cleanWord": "価値",
        "reading": "かち",
        "cleanReading": "かち",
        "romaji": "kachi",
        "meaning": "တန်ဖိုး"
      },
      {
        "word": "定価",
        "cleanWord": "定価",
        "reading": "ていか",
        "cleanReading": "ていか",
        "romaji": "teika",
        "meaning": "ပုံသေဈေးနှုန်း၊ သတ်မှတ်ဈေးနှုန်း"
      },
      {
        "word": "物価",
        "cleanWord": "物価",
        "reading": "ぶっか",
        "cleanReading": "ぶっか",
        "romaji": "bukka",
        "meaning": "ကုန်ဈေးနှုန်း"
      },
      {
        "word": "高価",
        "cleanWord": "高価",
        "reading": "こうか(な)",
        "cleanReading": "こうか",
        "romaji": "kouka",
        "meaning": "ဈေးကြီးသော၊ အဖိုးတန်သော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「価格」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かかく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဈေးနှုန်း\" (価格) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、価値について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かちについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တန်ဖိုး (価値) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 396,
    "kanji": "関",
    "strokes": 14,
    "onyomi": "カン",
    "kunyomi": "—",
    "english": "interest, concern, relation, connection",
    "romaji": "kan kanshin kansuru kankei",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "関心",
        "cleanWord": "関心",
        "reading": "かんしん",
        "cleanReading": "かんしん",
        "romaji": "kanshin",
        "meaning": "စိတ်ဝင်စားမှု"
      },
      {
        "word": "(~に)関する",
        "cleanWord": "関する",
        "reading": "(~に)かんする",
        "cleanReading": "かんする",
        "romaji": "kansuru",
        "meaning": "ဆက်စပ်သည်၊ ပတ်သက်သည်"
      },
      {
        "word": "関係",
        "cleanWord": "関係",
        "reading": "かんけい",
        "cleanReading": "かんけい",
        "romaji": "kankei",
        "meaning": "ဆက်စပ်မှု၊ ပတ်သက်မှု"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「関心」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「かんしん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စိတ်ဝင်စားမှု\" (関心) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで関する必要があります。",
        "furigana": "じかんが たりないので、いそいで かんする ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (ဆက်စပ်သည်) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 397,
    "kanji": "存",
    "strokes": 6,
    "onyomi": "ソン ・ ゾン",
    "kunyomi": "—",
    "english": "save, preserve, know (humble/respectful)",
    "romaji": "son zon hozon zonjiageru gozonji",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "保存(する)",
        "cleanWord": "保存",
        "reading": "ほぞん(する)",
        "cleanReading": "ほぞん",
        "romaji": "hozon",
        "meaning": "ထိန်းသိမ်းသည်၊ သိုလှောင်သည်"
      },
      {
        "word": "存じ上げる",
        "cleanWord": "存じ上げる",
        "reading": "ぞんじあげる",
        "cleanReading": "ぞんじあげる",
        "romaji": "zonjiageru",
        "meaning": "သိသည် (မိမိသိသည်)"
      },
      {
        "word": "ご存じ",
        "cleanWord": "ご存じ",
        "reading": "ごぞんじ",
        "cleanReading": "ごぞんじ",
        "romaji": "gozonji",
        "meaning": "သိပါသည် (ယဉ်ကျေးသောအသုံး)"
      }
    ],
    "sentences": [
      {
        "jp": "仕事の前にしっかり保存することが大切です。",
        "furigana": "しごとの まえに しっかり ほぞんすることが たいせつです。",
        "mm": "အလုပ်မစမီ သေချာစွာ ထိန်းသိမ်းသည်ခြင်းသည် အရေးကြီးပါသည်။"
      },
      {
        "jp": "時間が足りないので、急いで存じ上げる必要があります。",
        "furigana": "じかんが たりないので、いそいで ぞんじあげる ひつようが あります。",
        "mm": "အချိန်မလုံလောက်သောကြောင့် အမြန် (သိသည် (မိမိသိသည်)) ရန် လိုအပ်ပါသည်။"
      }
    ]
  },
  {
    "id": 398,
    "kanji": "想",
    "strokes": 13,
    "onyomi": "ソウ",
    "kunyomi": "—",
    "english": "ideal, impression, expectation, imagine",
    "romaji": "sou risou kansou yosou risouteki",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "理想",
        "cleanWord": "理想",
        "reading": "りそう",
        "cleanReading": "りそう",
        "romaji": "risou",
        "meaning": "စံပြု၊ အကောင်းဆုံး၊ စိတ်ကူးမျှော်လင့်ချက်"
      },
      {
        "word": "感想",
        "cleanWord": "感想",
        "reading": "かんそう",
        "cleanReading": "かんそう",
        "romaji": "kansou",
        "meaning": "ခံစားချက်"
      },
      {
        "word": "予想(する)",
        "cleanWord": "予想",
        "reading": "よそう(する)",
        "cleanReading": "よそう",
        "romaji": "yosou",
        "meaning": "ကြိုတင်ခန့်မှန်းသည်"
      },
      {
        "word": "理想的(な)",
        "cleanWord": "理想的",
        "reading": "りそうてき(な)",
        "cleanReading": "りそうてき",
        "romaji": "risouteki",
        "meaning": "စိတ်ကူးထဲမှာရှိသော"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「理想」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「りそう」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"စံပြု\" (理想) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、感想について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、かんそうについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ခံစားချက် (感想) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 399,
    "kanji": "婚",
    "strokes": 11,
    "onyomi": "コン",
    "kunyomi": "—",
    "english": "marriage, wedding, engagement, honeymoon",
    "romaji": "kon kekkon kekkonshiki konyaku shinkonryokou",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "結婚",
        "cleanWord": "結婚",
        "reading": "けっこん",
        "cleanReading": "けっこん",
        "romaji": "kekkon",
        "meaning": "လက်ထပ်ခြင်း"
      },
      {
        "word": "結婚式",
        "cleanWord": "結婚式",
        "reading": "けっこんしき",
        "cleanReading": "けっこんしき",
        "romaji": "kekkonshiki",
        "meaning": "မင်္ဂလာဆောင်"
      },
      {
        "word": "婚約(する)",
        "cleanWord": "婚約",
        "reading": "こんやく(する)",
        "cleanReading": "こんやく",
        "romaji": "konyaku",
        "meaning": "စေ့စပ်သည်"
      },
      {
        "word": "新婚旅行",
        "cleanWord": "新婚旅行",
        "reading": "しんこんりょこう",
        "cleanReading": "しんこんりょこう",
        "romaji": "shinkonryokou",
        "meaning": "ဟန်းနီးမွန်းခရီး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「結婚」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「けっこん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လက်ထပ်ခြင်း\" (結婚) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、結婚式について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、けっこんしきについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ မင်္ဂလာဆောင် (結婚式) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 400,
    "kanji": "独",
    "strokes": 9,
    "onyomi": "ドク",
    "kunyomi": "—",
    "english": "single, unmarried, unique, independent",
    "romaji": "doku dokushin dokutoku dokuritsu",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "独身",
        "cleanWord": "独身",
        "reading": "どくしん",
        "cleanReading": "どくしん",
        "romaji": "dokushin",
        "meaning": "လူပျို၊ အပျို"
      },
      {
        "word": "独特(な)",
        "cleanWord": "独特",
        "reading": "どくとく(な)",
        "cleanReading": "どくとく",
        "romaji": "dokutoku",
        "meaning": "ထူးခြားသော၊ သီးသန့်ဖြစ်သော"
      },
      {
        "word": "独立(する)",
        "cleanWord": "独立",
        "reading": "どくりつ(する)",
        "cleanReading": "どくりつ",
        "romaji": "dokuritsu",
        "meaning": "ကိုယ့်ခြေထောက်ပေါ်ကိုယ်ရပ်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「独身」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「どくしん」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လူပျို\" (独身) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "先生はいつも独特な言葉で説明してくれます。",
        "furigana": "せんせいは いつも どくとくな ことばで せつめいして くれます。",
        "mm": "ဆရာသည် အမြဲတမ်း ထူးခြားသော စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။"
      }
    ]
  },
  {
    "id": 401,
    "kanji": "身",
    "strokes": 7,
    "onyomi": "シン",
    "kunyomi": "み",
    "english": "body, master a skill, contents, height",
    "romaji": "shin mi minitsuku minitsukeru nakami shinchou",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "(~が)身につく",
        "cleanWord": "身につく",
        "reading": "(~が)みにつく",
        "cleanReading": "みにつく",
        "romaji": "minitsuku",
        "meaning": "~တတ်သိသည်"
      },
      {
        "word": "(~を)身につける",
        "cleanWord": "身につける",
        "reading": "(~を)みにつける",
        "cleanReading": "みにつける",
        "romaji": "minitsukeru",
        "meaning": "~တတ်သိအောင်သင်သည်"
      },
      {
        "word": "中身",
        "cleanWord": "中身",
        "reading": "なかみ",
        "cleanReading": "なかみ",
        "romaji": "nakami",
        "meaning": "အတွင်းသား"
      },
      {
        "word": "身長",
        "cleanWord": "身長",
        "reading": "しんちょう",
        "cleanReading": "しんちょう",
        "romaji": "shinchou",
        "meaning": "အရပ်အမောင်း"
      }
    ],
    "sentences": [
      {
        "jp": "昨日より少しずつ状況が良くなって、身につくようになった。",
        "furigana": "きのうより すこしずつ じょうきょうが よくなって、みにつくように なった。",
        "mm": "မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (တတ်သိသည်) လာခဲ့သည်။"
      },
      {
        "jp": "友達と協力して、最後まで丁寧に身につけることができた。",
        "furigana": "ともだちと きょうりょくして、さいごまで ていねいに みにつけることが できた。",
        "mm": "သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (တတ်သိအောင်သင်သည်) နိုင်ခဲ့သည်။"
      }
    ]
  },
  {
    "id": 402,
    "kanji": "夫",
    "strokes": 4,
    "onyomi": "フ ・ フウ",
    "kunyomi": "おっと",
    "english": "husband, Mrs., devise, contrive",
    "romaji": "fu fuu otto tanakafujin kufuu",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "夫",
        "cleanWord": "夫",
        "reading": "おっと",
        "cleanReading": "おっと",
        "romaji": "otto",
        "meaning": "ခင်ပွန်း"
      },
      {
        "word": "田中夫人",
        "cleanWord": "田中夫人",
        "reading": "たなかふじん",
        "cleanReading": "たなかふじん",
        "romaji": "tanakafujin",
        "meaning": "တနက၏ဇနီး"
      },
      {
        "word": "工夫(する)",
        "cleanWord": "工夫",
        "reading": "くふう(する)",
        "cleanReading": "くふう",
        "romaji": "kufuu",
        "meaning": "တီထွင်သည်"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「夫」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「おっと」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ခင်ပွန်း\" (夫) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、田中夫人について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、たなかふじんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ တနက၏ဇနီး (田中夫人) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 403,
    "kanji": "婦",
    "strokes": 11,
    "onyomi": "フ",
    "kunyomi": "—",
    "english": "husband and wife, woman, housewife",
    "romaji": "fu fuufu fujin shufu",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "夫婦",
        "cleanWord": "夫婦",
        "reading": "ふうふ",
        "cleanReading": "ふうふ",
        "romaji": "fuufu",
        "meaning": "လင်မယား"
      },
      {
        "word": "婦人",
        "cleanWord": "婦人",
        "reading": "ふじん",
        "cleanReading": "ふじん",
        "romaji": "fujin",
        "meaning": "အမျိုးသမီး"
      },
      {
        "word": "主婦",
        "cleanWord": "主婦",
        "reading": "しゅふ",
        "cleanReading": "しゅふ",
        "romaji": "shufu",
        "meaning": "အိမ်ရှင်မ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「夫婦」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「ふうふ」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"လင်မယား\" (夫婦) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、婦人について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ふじんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ အမျိုးသမီး (婦人) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 404,
    "kanji": "妻",
    "strokes": 8,
    "onyomi": "サイ",
    "kunyomi": "つま",
    "english": "wife, married couple",
    "romaji": "sai tsuma fusai tanakafusai",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "妻",
        "cleanWord": "妻",
        "reading": "つま",
        "cleanReading": "つま",
        "romaji": "tsuma",
        "meaning": "ဇနီး"
      },
      {
        "word": "夫妻",
        "cleanWord": "夫妻",
        "reading": "ふさい",
        "cleanReading": "ふさい",
        "romaji": "fusai",
        "meaning": "ဇနီးမောင်နှံ"
      },
      {
        "word": "田中夫妻",
        "cleanWord": "田中夫妻",
        "reading": "たなかふさい",
        "cleanReading": "たなかふさい",
        "romaji": "tanakafusai",
        "meaning": "တနက ဇနီးမောင်နှံ"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「妻」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「つま」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"ဇနီး\" (妻) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、夫妻について詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、ふさいについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဇနီးမောင်နှံ (夫妻) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  },
  {
    "id": 405,
    "kanji": "奥",
    "strokes": 12,
    "onyomi": "—",
    "kunyomi": "おく",
    "english": "inner part, back, wife",
    "romaji": "oku okusan okusama",
    "category": "Politics, Proportions & Family",
    "categoryJp": "政治・割合・家族",
    "categoryMm": "နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု",
    "vocab": [
      {
        "word": "奥",
        "cleanWord": "奥",
        "reading": "おく",
        "cleanReading": "おく",
        "romaji": "oku",
        "meaning": "အတွင်း၊ အထဲ"
      },
      {
        "word": "奥さん",
        "cleanWord": "奥さん",
        "reading": "おくさん",
        "cleanReading": "おくさん",
        "romaji": "okusan",
        "meaning": "ဇနီးသည်"
      },
      {
        "word": "奥様",
        "cleanWord": "奥様",
        "reading": "おくさま",
        "cleanReading": "おくさま",
        "romaji": "okusama",
        "meaning": "ဇနီး"
      }
    ],
    "sentences": [
      {
        "jp": "日本の生活では「奥」という言葉をよく見かけます。",
        "furigana": "にほんの せいかつでは 「おく」という ことばを よく みかけます。",
        "mm": "ဂျပန်နေ့စဉ်ဘဝတွင် \"အတွင်း\" (奥) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။"
      },
      {
        "jp": "明日の会議までに、奥さんについて詳しく調べておきます。",
        "furigana": "あしたの かいぎまでに、おくさんについて くわしく しらべて おきます。",
        "mm": "မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ဇနီးသည် (奥さん) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။"
      }
    ]
  }
];
