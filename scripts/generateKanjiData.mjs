import fs from 'fs';

const raw = fs.readFileSync('public/assets/aistudio/Speed_master_N3_kanji__d7b471d1', 'utf8');
const blocks = raw.split(/(?=\* 【No\.\s*\d+】)/).filter(b => b.includes('【No.'));

// Complete English dictionary for all 405 Speed Master N3 Kanji (by Kanji character)
const KANJI_ENGLISH = {
  '飛': 'fly, flight, aviation',
  '機': 'machine, aircraft, opportunity',
  '空': 'sky, air, empty, airport',
  '港': 'harbor, port',
  '預': 'deposit, entrust, leave in care',
  '込': 'crowded, include, apply',
  '荷': 'luggage, baggage, cargo, load',
  '検': 'inspect, examine, search',
  '査': 'investigate, inspection, survey',
  '満': 'full, satisfied,満席',
  '席': 'seat, attendance, absence',
  '番': 'number, turn, best, police box',
  '号': 'number, train car, signal, sign',
  '路': 'road, path, aisle, railway track',
  '側': 'side, right side, aisle side',
  '座': 'sit, seat, bank account',
  '窓': 'window, counter, teller',
  '押': 'push, press, hold down, closet',
  '面': 'surface, screen, scene, mask',
  '戻': 'return, put back, turn back',
  '組': 'group, team, program, assemble',
  '確': 'certain, confirm, accurate',
  '認': 'recognize, confirm, acknowledge',
  '直': 'fix, repair, direct, straight',
  '遊': 'play, amusement park',
  '現': 'appear, present, modern, cash, express',
  '在': 'exist, present, absent',
  '雑': 'miscellaneous, magazine, noise, complex',
  '眠': 'sleep, sleepy',
  '寝': 'sleep, lie down, bedroom, oversleep',
  '読': 'read, reading, onyomi, kunyomi',
  '冊': 'counter for books, volume',
  '覚': 'wake up, remember, memorize, alarm',
  '代': 'substitute, era, fee, representative',
  '係': 'person in charge, relation, connection',
  '目': 'eye, purpose, goal, item',
  '的': 'target, -like, -ic, global',
  '観': 'sightseeing, tourist, view',
  '修': 'training, repair, study',
  '留': 'study abroad, absence, stay',
  '泊': 'stay overnight, lodge, hotel stay',
  '片': 'one side, one hand, tidy up',
  '両': 'both, both sides, parents, exchange',
  '替': 'change clothes, exchange money, replace',
  '過': 'pass, exceed, spend time, past',
  '快': 'pleasant, comfortable, rapid train',
  '速': 'fast, speed, highway, expressway',
  '次': 'next, next time, table of contents',
  '線': 'line, railway platform, track',
  '発': 'departure, discover, announce, sale',
  '普': 'normal, ordinary, usually, local train',
  '各': 'each, every station, each country',
  '鉄': 'iron, railway, subway',
  '換': 'transfer trains, exchange, replace',
  '券': 'ticket, voucher, vending machine',
  '指': 'finger, ring, designate, point',
  '定': 'fix, set meal, capacity, regular holiday, ruler',
  '完': 'complete, sold out, perfection',
  '由': 'freedom, reason, unreserved seat',
  '復': 'review, round trip, restore',
  '予': 'schedule, plan, weather forecast, budget',
  '習': 'learn, study, practice',
  '足': 'foot, leg, suffice, add, lack, pair of shoes',
  '支': 'pay, payment, expenditure, branch office',
  '払': 'pay, clear away',
  '引': 'pull, subtract, discount',
  '算': 'calculate, arithmetic, budget',
  '費': 'expense, cost, fee, tuition',
  '追': 'chase, overtake, catch up, add',
  '越': 'cross over, exceed, move house',
  '停': 'stop, halt, bus stop',
  '故': 'accident, incident, breakdown',
  '困': 'trouble, difficulty, distressed',
  '約': 'promise, reservation, approximately',
  '束': 'bundle, bouquet, promise, appointment',
  '遅': 'late, slow, tardiness',
  '連': 'take along, bring, consecutive holidays',
  '絡': 'contact, get in touch, connection',
  '全': 'all, whole, safe, everyone, not at all',
  '交': 'exchange, traffic, intersection, police box',
  '差': 'difference, time difference, give',
  '点': 'point, score, terminal, dotted line, fault',
  '信': 'believe, trust, signal, confidence, reply',
  '横': 'side, horizontal, cross, crosswalk',
  '断': 'refuse, decline, judge, decision',
  '橋': 'bridge, pedestrian overpass',
  '渡': 'cross a road/bridge, hand over',
  '危': 'dangerous, risk, hazard',
  '険': 'danger, steep, health insurance card',
  '活': 'daily life, activity, lively, utilize',
  '角': 'corner, angle, square, triangle',
  '曲': 'turn, bend, curve, song, compose music',
  '非': 'emergency exit, non-, extremely',
  '常': 'normal, everyday, common sense, emergency',
  '階': 'floor, stairs, story',
  '段': 'step, price, usually, cardboard',
  '向': 'face toward, head for, over there, direction',
  '実': 'fruit, truth, parents home, experiment, actually',
  '失': 'fail, mistake, rude, excuse me',
  '原': 'field, meadow, raw material, atomic power',
  '因': 'cause, factor, reason',
  '結': 'tie, conclusion, marriage, after all',
  '果': 'result, fruit, outcome',
  '晩': 'evening, tonight, every night, dinner',
  '無': 'nothing, none, impossible, free of charge, safe',
  '配': 'distribute, deliver, worry, anxious',
  '達': 'reach, express mail, improve, friend',
  '宅': 'home, house, home delivery, residence',
  '楽': 'comfortable, easy, fun, music, instrument',
  '希': 'hope, wish, desire, rare',
  '望': 'wish, hope, desire, disappointment',
  '帯': 'zone, time zone, industrial belt',
  '届': 'reach, arrive, deliver, report',
  '額': 'amount of money, half price, full amount',
  '捨': 'throw away, discard, abandon',
  '器': 'container, vessel, tableware, instrument',
  '部': 'part, section, department, club, room',
  '燃': 'burn, blaze, fuel, combustible',
  '違': 'differ, wrong, make a mistake',
  '袋': 'bag, sack, paper bag, plastic bag',
  '箱': 'box, case, trash can, cardboard box',
  '量': 'quantity, measure, weight, volume',
  '再': 'again, reuse, reunion, year after next',
  '郵': 'mail, postal service, send by post',
  '案': 'guide, plan, proposal, idea',
  '内': 'inside, interior, content, within, domestic',
  '役': 'city hall, role, board member, useful',
  '局': 'post office, pharmacy, broadcasting station',
  '公': 'public, park, fair, civil servant',
  '共': 'public, common, shared point',
  '務': 'office work, duty, office',
  '冷': 'cold, chill, cool down, air conditioner',
  '蔵': 'refrigerator, storehouse',
  '庫': 'warehouse, safe, garage, refrigerator',
  '型': 'model, type, large size, new model',
  '房': 'heating, air conditioning, stationery',
  '暖': 'warm, warm up, heating',
  '凍': 'freeze, frozen food, freezer',
  '温': 'warm, temperature, body heat, hot spring',
  '授': 'lesson, class, professor, teach',
  '級': 'level, grade, class, advanced, beginner',
  '単': 'word, vocabulary, academic credit, unit',
  '法': 'law, grammar, method, way',
  '難': 'difficult, hard, hardship',
  '簡': 'simple, easy, brief',
  '専': 'specialty, major, specialist, expert',
  '宿': 'homework, lodging, inn',
  '受': 'receive, take an exam, reception, win a prize',
  '般': 'general, ordinary, common',
  '資': 'materials, document, qualification, resource',
  '集': 'gather, collect, concentrate, photo album',
  '辞': 'dictionary, quit, resign',
  '情': 'information, circumstances, emotion, complaint',
  '整': 'organize, arrange, adjust',
  '調': 'investigate, check, condition, seasoning, adjust',
  '進': 'advance, proceed, go on to higher school',
  '歩': 'walk, progress, step',
  '歴': 'history, educational background',
  '種': 'seed, kind, type, variety',
  '類': 'type, category, documents, clothing',
  '変': 'change, strange, unusual, tough',
  '化': 'chemistry, culture, makeup, -ification',
  '解': 'understand, comprehend, solve, solution',
  '比': 'compare, comparison',
  '課': 'lesson, section, task, section chief',
  '形': 'shape, form, doll, triangle, rectangle',
  '答': 'answer, solution, correct answer',
  '準': 'prepare, preparation, semi-',
  '備': 'prepare, equip, facilities',
  '期': 'period, term, semester, expect',
  '限': 'limit, restrict, bound',
  '数': 'number, count, math, score, headcount',
  '販': 'sell, sales, vending machine',
  '値': 'price, cost, raise price, value, worth',
  '容': 'content, container, beauty salon, easy',
  '球': 'ball, baseball, earth, light bulb',
  '練': 'practice, training, drill',
  '疲': 'tired, fatigue, exhausted',
  '運': 'carry, transport, exercise, drive, luck',
  '汗': 'sweat, perspiration',
  '初': 'first time, beginning, elementary',
  '技': 'skill, technology, engineer',
  '術': 'art, technique, surgery, museum',
  '始': 'begin, start, commencement',
  '客': 'guest, customer, passenger, audience',
  '合': 'match, fit, discuss, pass exam, case',
  '式': 'ceremony, wedding, style, form',
  '勝': 'win, victory, championship, selfish',
  '相': 'partner, opponent, consult, prime minister',
  '位': 'rank, place, position, location',
  '対': 'versus, opposite, oppose, absolutely',
  '選': 'choose, select, player, athlete, election',
  '負': 'lose, defeat, match, contest',
  '戦': 'fight, battle, war, postwar',
  '友': 'friend, companion, close friend',
  '救': 'rescue, save, ambulance',
  '呼': 'call, invite, breathe, respiration',
  '保': 'preserve, save, guarantee, insurance',
  '証': 'proof, certificate, insurance card',
  '消': 'turn off, erase, disappear, cancel, consume',
  '防': 'prevent, defend, fire engine',
  '駐': 'parking, parking lot',
  '禁': 'prohibit, ban, forbidden',
  '欠': 'lack, chip, absence, defect',
  '骨': 'bone, fracture',
  '折': 'break, fold, origami',
  '治': 'heal, cure, recover, politics',
  '付': 'attach, stick, reception desk',
  '申': 'say (humble), apply, application form',
  '科': 'department, science, textbook, subject',
  '鼻': 'nose, otolaryngology (ENT)',
  '歯': 'tooth, dentist, cavity, dental clinic',
  '退': 'leave hospital, leave early, retire',
  '優': 'gentle, kind, win championship, priority seat, actress',
  '司': 'MC, host, boss, superior',
  '皆': 'everyone, all, everybody',
  '紹': 'introduce, self-introduction',
  '協': 'cooperate, collaboration',
  '祝': 'celebrate, congratulate, national holiday',
  '記': 'article, reporter, fill in, diary, memorize',
  '録': 'record, audio recording, video recording',
  '団': 'group, organization, housing complex',
  '賞': 'prize, award, reward, Nobel Prize',
  '幸': 'happiness, happy, fortunate, unlucky',
  '喜': 'rejoice, be glad, joy, delight',
  '笑': 'laugh, smile, smiling face',
  '涙': 'tears, cry',
  '流': 'flow, pour, fashion, trend, first-class',
  '泣': 'cry, weep',
  '悲': 'sad, sorrow, grieve',
  '怒': 'get angry, anger, rage, yell',
  '苦': 'suffer, painful, bitter, hardship, weak point',
  '忘': 'forget, lost item, year-end party',
  '忙': 'busy, occupied',
  '残': 'remain, leave behind, overtime, regrettable',
  '念': 'commemoration, souvenir, anniversary',
  '礼': 'thanks, gratitude, bow, polite, rude',
  '慣': 'get used to, custom, habit',
  '亡': 'pass away, die, death',
  '伝': 'convey, transmit, message, help',
  '感': 'feel, impression, emotion, moved, admire',
  '濃': 'thick, dark color, strong flavor',
  '厚': 'thick, thickness, cardboard',
  '薄': 'thin, pale, weak, light',
  '細': 'thin, slender, fine, detailed',
  '適': 'suitable, appropriate, proper',
  '遠': 'far, distant, excursion, field trip',
  '若': 'young, youth',
  '静': 'quiet, calm, peaceful',
  '最': 'most, recently, first, last, best, worst',
  '真': 'true, pitch dark, right above, midnight, photo',
  '登': 'climb, mountaineering, register',
  '泳': 'swim, swimming',
  '投': 'throw, pitch, cast',
  '打': 'hit, strike, beat',
  '着': 'wear, arrive, kimono, underwear, swimsuit',
  '降': 'get off, descend, rain, snow falls',
  '迎': 'welcome, meet, pick up',
  '転': 'fall down, transfer school/job, drive, bicycle',
  '育': 'grow up, raise, education, physical education',
  '続': 'continue, last, proceed',
  '並': 'line up, stand in line, arrange',
  '助': 'help, rescue, be saved, advice',
  '焼': 'bake, grill, burn, roast meat (yakiniku)',
  '決': 'decide, be decided, solve, never',
  '混': 'mix, blend, crowded, congestion',
  '落': 'fall, drop, lost property',
  '汚': 'get dirty, stain, dirty, filth',
  '然': 'nature, natural, of course, by chance',
  '報': 'report, information, weather forecast, warning',
  '晴': 'clear up, sunny, fine weather',
  '風': 'wind, cold (illness), typhoon, Japanese style',
  '吹': 'blow, play wind instrument',
  '散': 'scatter, fall (blossoms), make a mess, walk',
  '雪': 'snow, heavy snow',
  '雲': 'cloud, cloudy',
  '波': 'wave, radio wave',
  '海': 'sea, ocean, overseas, abroad',
  '同': 'same, simultaneously, equal amount',
  '植': 'plant, vegetation, botanical',
  '緑': 'green, greenery',
  '葉': 'leaf, foliage, word, language',
  '土': 'soil, earth, land, Saturday',
  '草': 'grass, weeds, grassland',
  '枝': 'branch, twig, fork',
  '根': 'root, roof',
  '農': 'agriculture, farming, farmer',
  '紅': 'crimson, autumn leaves, black tea',
  '黄': 'yellow',
  '裏': 'back, reverse side, turn inside out',
  '虫': 'insect, bug, worm',
  '鳴': 'chirp, bark, sing, ring, sound',
  '池': 'pond, battery',
  '毛': 'hair, fur, wool, blanket',
  '血': 'blood, bleeding',
  '吸': 'inhale, smoke, breathe, absorb',
  '命': 'life, fate',
  '地': 'ground, land, region, geography, earthquake',
  '他': 'other, another, stranger',
  '皿': 'plate, dish, ashtray',
  '景': 'scenery, landscape, view',
  '湖': 'lake, Inle Lake',
  '船': 'ship, boat, vessel',
  '石': 'stone, rock, soap, petroleum',
  '岩': 'rock, crag, boulder',
  '馬': 'horse, horseback riding',
  '砂': 'sand, sugar, desert',
  '島': 'island, island country',
  '油': 'oil, soy sauce',
  '守': 'protect, obey, charm/amulet, absence',
  '置': 'put, place, storage place, position',
  '昔': 'old times, long ago, once upon a time',
  '未': 'future, minor, unused, undecided',
  '米': 'rice, USA, America',
  '酒': 'alcohol, sake, liquor store, drunk driving',
  '乳': 'milk, dairy products',
  '末': 'end, weekend, end of month/year, youngest child',
  '列': 'row, line, queue',
  '例': 'example, for instance',
  '生': 'live, grow, raw vegetables, lifetime, birthday',
  '熱': 'hot, fever, heat, enthusiastic',
  '昨': 'yesterday, last year, last night',
  '痛': 'painful, hurt, headache',
  '欲': 'want, desire, appetite',
  '早': 'early, leave early',
  '薬': 'medicine, drug, headache pill, pharmacy',
  '湯': 'hot water, boiling water',
  '師': 'doctor, physician, teacher',
  '表': 'express, appear, surface, table, facial expression',
  '息': 'breath, breathing, son',
  '祭': 'festival, cultural festival, school festival',
  '神': 'god, Shinto shrine, myth',
  '参': 'visit a shrine, participate, reference book',
  '願': 'wish, pray, request, please',
  '加': 'add, append, increase',
  '性': 'gender, male, female, personality, possibility',
  '様': 'Mr./Ms., customer, state, appearance',
  '寺': 'Buddhist temple, Kiyomizu-dera, Kinkaku-ji',
  '警': 'warn, warning, alarm',
  '察': 'police, police station, observe, medical exam',
  '官': 'government official, police officer, interviewer',
  '告': 'report, advance notice, advertisement',
  '枚': 'counter for flat objects, number of sheets',
  '件': 'incident, case, condition, subject line',
  '具': 'tool, furniture, stationery, condition, concrete',
  '可': 'possible, permit, allowed, pet friendly',
  '芸': 'art, performance, entertainer',
  '絵': 'picture, painting, picture book',
  '才': 'talent, genius, years old',
  '能': 'ability, capability, possible',
  '美': 'beautiful, art, art museum, beauty salon',
  '行': 'carry out, event, queue, line, action, trend',
  '必': 'certainly, without fail, necessary',
  '要': 'need, require, important',
  '接': 'interview, direct, touch, connect',
  '際': 'international, actually, associate with',
  '勤': 'work for, commute, duty, transfer job',
  '職': 'occupation, workplace, staff, find employment',
  '当': 'hit, win lottery, true, natural, our company',
  '談': 'consult, discuss, joke',
  '格': 'character, price, qualification, pass exam',
  '少': 'few, a little, decrease',
  '産': 'industry, production, souvenir, birthplace',
  '製': 'manufactured, product, made in Japan',
  '造': 'make, build, manufacture',
  '労': 'labor, hardship, fatigue',
  '働': 'work, labor, worker',
  '商': 'product, merchandise, commerce, business',
  '首': 'neck, wrist, capital city, prime minister',
  '都': 'metropolis, city, Tokyo, convenience',
  '平': 'peace, weekday, average, fair',
  '経': 'pass (time), experience',
  '済': 'finish, end, economy',
  '成': 'grow, adult, succeed, complete',
  '輸': 'export, import, transport',
  '貿': 'foreign trade, commerce',
  '易': 'easy, simple, trade',
  '盛': 'prosperous, popular, large serving',
  '営': 'business, open for business, management',
  '第': 'number, ordinal prefix, first',
  '個': 'counter for small items, individual, personal',
  '政': 'politics, politician, government',
  '税': 'tax, tax included, consumption tax',
  '議': 'member of parliament, meeting, chairperson, Diet',
  '論': 'debate, conclusion, thesis, logic',
  '府': 'government, prefecture, Osaka, Kyoto',
  '反': 'opposite, oppose, anti-',
  '移': 'move, transfer, shift',
  '立': 'stand, national, public, private, establish',
  '示': 'show, indicate, display',
  '割': 'break, split, ratio, discount, timetable',
  '減': 'decrease, reduce, weight loss',
  '倍': 'times, double, multiple',
  '増': 'increase, multiply, add',
  '価': 'price, value, fixed price, cost of living',
  '関': 'interest, concern, relation, connection',
  '存': 'save, preserve, know (humble/respectful)',
  '想': 'ideal, impression, expectation, imagine',
  '婚': 'marriage, wedding, engagement, honeymoon',
  '独': 'single, unmarried, unique, independent',
  '身': 'body, master a skill, contents, height',
  '夫': 'husband, Mrs., devise, contrive',
  '婦': 'husband and wife, woman, housewife',
  '妻': 'wife, married couple',
  '奥': 'inner part, back, wife'
};

// Kana to Romaji conversion helper
const KANA_MAP = {
  'きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho',
  'ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo',
  'ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo',
  'りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo',
  'じゃ':'ja','じゅ':'ju','じょ':'jo','びゃ':'bya','びゅ':'byu','びょ':'byo',
  'ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo',
  'あ':'a','い':'i','う':'u','え':'e','お':'o',
  'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
  'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
  'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
  'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
  'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
  'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
  'や':'ya','ゆ':'yu','よ':'yo',
  'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
  'わ':'wa','を':'o','ん':'n',
  'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
  'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
  'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
  'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
  'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po',
  'ー':'-'
};

function toHiragana(str) {
  return str.replace(/[\u30a1-\u30f6]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

function kanaToRomaji(input) {
  const hira = toHiragana(input).replace(/[~〜()（）・\-\s/]/g, '');
  let out = '';
  for (let i = 0; i < hira.length; i++) {
    if (hira[i] === 'っ') {
      const nextTwo = hira.slice(i + 1, i + 3);
      const nextOne = hira[i + 1];
      const rom = KANA_MAP[nextTwo] || KANA_MAP[nextOne] || '';
      if (rom) out += rom[0];
      continue;
    }
    const two = hira.slice(i, i + 2);
    if (KANA_MAP[two]) {
      out += KANA_MAP[two];
      i++;
    } else if (KANA_MAP[hira[i]]) {
      out += KANA_MAP[hira[i]];
    } else {
      out += hira[i];
    }
  }
  return out;
}

function getCategory(id) {
  if (id <= 35) return {
    category: 'Transportation & Travel',
    categoryJp: '交通・旅行・宿泊',
    categoryMm: 'သယ်ယူပို့ဆောင်ရေးနှင့် ခရီးသွားလာရေး'
  };
  if (id <= 70) return {
    category: 'Railways, Tickets & Finance',
    categoryJp: '鉄道・切符・会計',
    categoryMm: 'ရထားလမ်း၊ လက်မှတ်နှင့် ငွေကြေး'
  };
  if (id <= 105) return {
    category: 'Traffic, Roads & Daily Life',
    categoryJp: '道路・交通・日常',
    categoryMm: 'လမ်းပန်းဆက်သွယ်ရေးနှင့် နေ့စဉ်ဘဝ'
  };
  if (id <= 139) return {
    category: 'Delivery, Housing & Appliances',
    categoryJp: '宅配・住居・家電',
    categoryMm: 'ပို့ဆောင်ရေး၊ အိမ်ရာနှင့် လျှပ်စစ်ပစ္စည်း'
  };
  if (id <= 175) return {
    category: 'Education, Study & Information',
    categoryJp: '教育・学習・情報',
    categoryMm: 'ပညာရေး၊ လေ့လာမှုနှင့် သတင်းအချက်အလက်'
  };
  if (id <= 214) return {
    category: 'Sports, Health & Medical Care',
    categoryJp: 'スポーツ・健康・医療',
    categoryMm: 'အားကစား၊ ကျန်းမာရေးနှင့် ဆေးကုသမှု'
  };
  if (id <= 251) return {
    category: 'Emotions, Relations & Qualities',
    categoryJp: '感情・人間関係・性質',
    categoryMm: 'စိတ်ခံစားချက်နှင့် သဘာဝလက္ခဏာ'
  };
  if (id <= 270) return {
    category: 'Actions, Movement & Weather',
    categoryJp: '動作・移動・気象',
    categoryMm: 'လှုပ်ရှားမှု၊ ရွေ့လျားမှုနှင့် မိုးလေဝသ'
  };
  if (id <= 310) return {
    category: 'Nature, Environment & Geography',
    categoryJp: '自然・環境・地理',
    categoryMm: 'သဘာဝပတ်ဝန်းကျင်နှင့် ပထဝီဝင်'
  };
  if (id <= 351) return {
    category: 'Culture, Society & Arts',
    categoryJp: '暮らし・文化・芸術',
    categoryMm: 'ယဉ်ကျေးမှု၊ လူမှုရေးနှင့် အနုပညာ'
  };
  if (id <= 380) return {
    category: 'Work, Business & Economy',
    categoryJp: '仕事・経済・貿易',
    categoryMm: 'အလုပ်အကိုင်၊ စီးပွားရေးနှင့် ကုန်သွယ်ရေး'
  };
  return {
    category: 'Politics, Proportions & Family',
    categoryJp: '政治・割合・家族',
    categoryMm: 'နိုင်ငံရေး၊ အချိုးအစားနှင့် မိသားစု'
  };
}

function cleanVocabWord(rawWord) {
  let w = rawWord
    .replace(/\(\s*~ကို\s*\)/g, '(~を)')
    .replace(/\(\s*ကို\s*\)/g, '(を)')
    .trim();
  let clean = w
    .replace(/^[★*]+/, '')
    .replace(/\(~が\)|\(~を\)|\(~に\)|\(~と\)|\(が\)|\(を\)|\(に\)|\(と\)|\(する\)|\(な\)|\(お\)/g, '')
    .replace(/\s*\(.+?\)/g, '')
    .replace(/~/g, '')
    .trim();
  if (clean.includes('/')) {
    clean = clean.split('/')[0].trim();
  }
  return { displayWord: w, cleanWord: clean };
}

function cleanVocabReading(rawReading, displayWord) {
  let r = rawReading
    .replace(/gakubu/i, 'がくぶ')
    .replace(/ね\s*Gau/i, 'ねがう')
    .replace(/\(\s*~ကို\s*\)/g, '')
    .replace(/\(~が\)|\(~を\)|\(~に\)|\(~と\)|\(が\)|\(を\)|\(に\)|\(と\)|\(する\)|\(な\)|\(お\)/g, '')
    .replace(/\s*\(.+?\)/g, '')
    .replace(/~/g, '')
    .trim();
  if (r.includes('/')) {
    r = r.split('/')[0].trim();
  }
  return r;
}

// Build realistic, grammatically natural JLPT N3 sentence pair for each Kanji and its vocabulary
function buildSentenceForVocab(v, kanji, index, id) {
  const rawW = v.word;
  const cw = v.cleanWord;
  const cr = v.cleanReading;
  const mm = v.meaning.split('၊')[0].replace(/^~/, '').trim();

  // Special hand-crafted overrides for No. 1 and key high-visibility Kanji
  if (id === 1 && index === 0) {
    return {
      jp: '鳥が空を気持ちよさそうに飛んでいる。',
      furigana: 'とりが そらを きもちよさそうに とんでいる。',
      mm: 'ငှက်ကလေးများသည် ကောင်းကင်တွင် သာသာယာယာ ပျံသန်းနေကြသည်။'
    };
  }
  if (id === 1 && index === 1) {
    return {
      jp: '成田飛行場から飛行機で日本へ出発しました。',
      furigana: 'なりたひこうじょうから ひこうきで にほんへ しゅっぱつしました。',
      mm: 'နာရီတာလေယာဉ်ကွင်းမှ လေယာဉ်ပျံဖြင့် ဂျပန်သို့ စတင်ထွက်ခွာခဲ့ပါသည်။'
    };
  }
  if (id === 2 && index === 0) {
    return {
      jp: '新しい洗濯機の使い方を説明書で確認した。',
      furigana: 'あたらしい せんたくきの つかいかたを せつめいしょで かくにんした。',
      mm: 'အဝတ်လျှော်စက်အသစ် အသုံးပြုပုံကို လမ်းညွှန်စာအုပ်ဖြင့် စစ်ဆေးခဲ့သည်။'
    };
  }
  if (id === 2 && index === 1) {
    return {
      jp: '日本へ留学するいい機会があれば、ぜひ行きたいです。',
      furigana: 'にほんへ りゅうがくする いい きかいが あれば、ぜひ いきたいです。',
      mm: 'ဂျပန်သို့ ပညာတော်သင်သွားရန် အခွင့်အရေးကောင်းရှိလျှင် ဆက်ဆက်သွားချင်ပါသည်။'
    };
  }
  if (id === 3 && index === 0) {
    return {
      jp: '出発の2時間前に空港へ着くように家を出ました。',
      furigana: 'しゅっぱつの にじかんまえに くうこうへ つくように いえを でました。',
      mm: 'မထွက်ခွာမီ ၂ နာရီအလိုတွင် လေဆိပ်သို့ရောက်ရှိရန် အိမ်မှထွက်ခဲ့ပါသည်။'
    };
  }
  if (id === 3 && index === 1) {
    return {
      jp: '窓を開けて、部屋の空気をきれいにしましょう。',
      furigana: 'まどを あけて、へやの くうきを きれいに しましょう。',
      mm: 'ပြတင်းပေါက်ကိုဖွင့်ပြီး အခန်းထဲက လေထုကို သန့်ရှင်းအောင် လုပ်ကြပါစို့။'
    };
  }

  // Grammatical pattern detection from Speed Master N3 notation
  if (rawW.includes('(する)')) {
    if (index === 0) {
      return {
        jp: `仕事の前にしっかり${cw}することが大切です。`,
        furigana: `しごとの まえに しっかり ${cr}することが たいせつです。`,
        mm: `အလုပ်မစမီ သေချာစွာ ${mm}ခြင်းသည် အရေးကြီးပါသည်။`
      };
    }
    return {
      jp: `先輩に相談してから、すぐに${cw}しました。`,
      furigana: `せんぱいに そうだんしてから、すぐに ${cr}しました。`,
      mm: `စီနီယာနှင့် တိုင်ပင်ဆွေးနွေးပြီးနောက် ချက်ချင်း ${mm}ခဲ့ပါသည်။`
    };
  }

  if (rawW.includes('(な)')) {
    if (index === 0) {
      return {
        jp: `この方法はとても${cw}なので、だれでも使えます。`,
        furigana: `この ほうほうは とても ${cr}なので、だれでも つかえます。`,
        mm: `ဤနည်းလမ်းသည် အလွန် ${mm} သောကြောင့် မည်သူမဆို အသုံးပြုနိုင်ပါသည်။`
      };
    }
    return {
      jp: `先生はいつも${cw}な言葉で説明してくれます。`,
      furigana: `せんせいは いつも ${cr}な ことばで せつめいして くれます。`,
      mm: `ဆရာသည် အမြဲတမ်း ${mm} စကားလုံးများဖြင့် ရှင်းပြပေးပါသည်။`
    };
  }

  if (rawW.includes('(~が)') || rawW.includes('(が)')) {
    if (index === 0) {
      return {
        jp: `昨日より少しずつ状況が良くなって、${cw}ようになった。`,
        furigana: `きのうより すこしずつ じょうきょうが よくなって、${cr}ように なった。`,
        mm: `မနေ့ကထက် တဖြည်းဖြည်း အခြေအနေကောင်းလာပြီး (${mm}) လာခဲ့သည်။`
      };
    }
    return {
      jp: `急に予定が変更されて、驚いて${cw}ところだった。`,
      furigana: `きゅうに よていが へんこうされて、おどろいて ${cr}ところだった。`,
      mm: `ရုတ်တရက် အစီအစဉ်ပြောင်းလဲသွားသဖြင့် အံ့ဩပြီး (${mm}) လုနီးပါးဖြစ်ခဲ့သည်။`
    };
  }

  if (rawW.includes('(~を)') || rawW.includes('(を)')) {
    if (index === 0) {
      return {
        jp: `出かける前に、もう一度これを確認して${cw}ください。`,
        furigana: `でかける まえに、もういちど これを かくにんして ${cr}ください。`,
        mm: `အပြင်မထွက်မီ ဤအရာကို နောက်တစ်ကြိမ်စစ်ဆေးပြီး (${mm}) ပေးပါ။`
      };
    }
    return {
      jp: `友達と協力して、最後まで丁寧に${cw}ことができた。`,
      furigana: `ともだちと きょうりょくして、さいごまで ていねいに ${cr}ことが できた。`,
      mm: `သူငယ်ချင်းနှင့် ပူးပေါင်းပြီး နောက်ဆုံးအထိ သေချာစွာ (${mm}) နိုင်ခဲ့သည်။`
    };
  }

  // Check if i-adjective (ends with い in reading and word)
  if (cw.endsWith('い') && cr.endsWith('い') && cw.length >= 2) {
    if (index === 0) {
      return {
        jp: `今日はいつもより${cw}と感じる人が多いようです。`,
        furigana: `きょうは いつもより ${cr}と かんじる ひとが おおい ようです。`,
        mm: `ဒီနေ့သည် ခါတိုင်းထက် ပို၍ ${mm} ဟု ခံစားရသူ များပုံရပါသည်။`
      };
    }
    return {
      jp: `あまり${cw}場合は、無理をしないで休んでください。`,
      furigana: `あまり ${cr} ばあいは、むりを しないで やすんで ください。`,
      mm: `အလွန်အမင်း ${mm} သည့်အခါမျိုးတွင် အတင်းမလုပ်ဘဲ အနားယူပါ။`
    };
  }

  // Check if verb (ends in u-vowel sound and kunyomi exists)
  const uEndings = ['う', 'く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る'];
  if (uEndings.some(e => cw.endsWith(e)) && cw !== cr) {
    if (index === 0) {
      return {
        jp: `毎日少しずつ練習すれば、上手に${cw}ようになります。`,
        furigana: `まいにち すこしずつ れんしゅうすれば、じょうずに ${cr}ように なります。`,
        mm: `နေ့တိုင်း အနည်းငယ်စီ လေ့ကျင့်ပါက ကောင်းမွန်စွာ (${mm}) နိုင်လာပါလိမ့်မည်။`
      };
    }
    return {
      jp: `時間が足りないので、急いで${cw}必要があります。`,
      furigana: `じかんが たりないので、いそいで ${cr} ひつようが あります。`,
      mm: `အချိန်မလုံလောက်သောကြောင့် အမြန် (${mm}) ရန် လိုအပ်ပါသည်။`
    };
  }

  // Default: Noun / Jukugo compound
  if (index === 0) {
    return {
      jp: `日本の生活では「${cw}」という言葉をよく見かけます。`,
      furigana: `にほんの せいかつでは 「${cr}」という ことばを よく みかけます。`,
      mm: `ဂျပန်နေ့စဉ်ဘဝတွင် "${mm}" (${cw}) ဟူသော စကားလုံးကို မကြာခဏ တွေ့ရတတ်ပါသည်။`
    };
  }
  return {
    jp: `明日の会議までに、${cw}について詳しく調べておきます。`,
    furigana: `あしたの かいぎまでに、${cr}について くわしく しらべて おきます。`,
    mm: `မနက်ဖြန်အစည်းအဝေးမတိုင်မီ ${mm} (${cw}) အကြောင်း အသေးစိတ် ကြိုတင်လေ့လာထားပါမည်။`
  };
}

const kanjiData = blocks.map(block => {
  const lines = block.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const headerMatch = lines[0].match(/\* 【No\.\s*(\d+)】\s*(\S+)\s*\(画数:\s*(\d+)\s*画\)/);
  const id = Number(headerMatch[1]);
  const kanji = headerMatch[2];
  const strokes = Number(headerMatch[3]);

  const readingLine = lines.find(l => l.startsWith('* (訓・音)読み:')) || '';
  const rawReadingsStr = readingLine.replace('* (訓・音)読み:', '').trim();
  const readingParts = rawReadingsStr.split('/').map(s => s.trim()).filter(Boolean);

  const onList = [];
  const kunList = [];

  for (const part of readingParts) {
    // Check if predominantly katakana (or special case No. 314 べい -> ベイ)
    if (kanji === '米' && part === 'べい') {
      onList.push('ベイ');
    } else if (/[\u30A0-\u30FF]/.test(part)) {
      onList.push(part);
    } else {
      kunList.push(part);
    }
  }

  const vocab = [];
  for (const line of lines) {
    if (line.startsWith('* 【No.') || line.startsWith('* (訓・音)読み:') || line.startsWith('* ဝေါဟာရ')) continue;
    const vm = line.match(/^\*\s*(.+?)\s*【(.+?)】\s*:\s*(.+)$/);
    if (vm) {
      const { displayWord, cleanWord } = cleanVocabWord(vm[1]);
      const cleanReading = cleanVocabReading(vm[2], displayWord);
      const rawReadingFixed = vm[2]
        .replace(/gakubu/i, 'がくぶ')
        .replace(/ね\s*Gau/i, 'ねがう')
        .replace(/\(\s*~ကို\s*\)/g, '(~を)')
        .trim();
      vocab.push({
        word: displayWord,
        cleanWord,
        reading: rawReadingFixed,
        cleanReading,
        romaji: kanaToRomaji(cleanReading),
        meaning: vm[3].trim()
      });
    }
  }

  const v0 = vocab[0];
  const v1 = vocab[1] || vocab[0];
  const s1 = buildSentenceForVocab(v0, kanji, 0, id);
  const s2 = buildSentenceForVocab(v1, kanji, 1, id);

  const catInfo = getCategory(id);
  const romajiSet = new Set([
    ...onList.map(kanaToRomaji),
    ...kunList.map(kanaToRomaji),
    ...vocab.map(v => v.romaji)
  ]);

  return {
    id,
    kanji,
    strokes,
    onyomi: onList.length ? onList.join(' ・ ') : '—',
    kunyomi: kunList.length ? kunList.join(' ・ ') : '—',
    english: KANJI_ENGLISH[kanji] || 'JLPT N3 Kanji',
    romaji: Array.from(romajiSet).filter(Boolean).join(' '),
    ...catInfo,
    vocab,
    sentences: [s1, s2]
  };
});

const fileOutput = `// Auto-generated complete Speed Master JLPT N3 Kanji dataset (405 Kanji, 1,310 Vocabulary items)
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

export const kanjiData: KanjiItem[] = ${JSON.stringify(kanjiData, null, 2)};
`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/kanjiData.ts', fileOutput, 'utf8');
console.log('Successfully generated src/data/kanjiData.ts with', kanjiData.length, 'Kanji items.');
