/****************************************************************
*  2026 Italy Trip – 13-Day 30-min Schedule  (완전판)
*  helper cost(n)  →  "€ n / ₩ n×1 500"
*  모든 <a> : target="_blank" rel="noopener"
****************************************************************/

const cost = n => `€ ${n} / ₩ ${(n*1500).toLocaleString()}`;

/* ————— 13-Day 데이터 ————— */
const scheduleData = [
/* ========== 13 JAN ========== */
{date:"1월 13일 (화)",title:"Ancient Rome Kick-off",
 prep:[["Colosseum 통합권 예매","https://colosseo.it/"]],
 rows:[
  ["07:45-08:30","✈️ FCO → <a href=\"https://www.trenitalia.com/\" target=\"_blank\" rel=\"noopener\">Leonardo Express</a>",cost(14)],
  ["10:30-11:00","☕ <a href=\"https://goo.gl/maps/JU2JLsFpvUm3XGbU6\" target=\"_blank\" rel=\"noopener\">Caffè Fondi</a>",cost(5)],
  ["11:00-13:00","🏛 <a href=\"https://colosseo.it/\" target=\"_blank\" rel=\"noopener\">Colosseum</a>",cost(18)],
  ["13:00-13:45","Foro Romano & Palatino","–"],
  ["14:00-14:30","🍦 <a href=\"https://goo.gl/maps/JucFPbhV6ogEjXMR8\" target=\"_blank\" rel=\"noopener\">Gelateria dell’Angeletto</a>",cost(4)],
  ["15:00-17:00","🎨 <a href=\"https://museicapitolini.org/\" target=\"_blank\" rel=\"noopener\">Musei Capitolini</a>",cost(13)],
  ["18:00-20:00","🍝 <a href=\"https://vecchiaroma.com/\" target=\"_blank\" rel=\"noopener\">Trattoria Vecchia Roma</a>",cost(22)]
 ], total:76},

/* ========== 14 JAN ========== */
{date:"1월 14일 (수)",title:"Vatican & Trastevere",
 prep:[
  ["바티칸 박물관 타임슬롯","https://tickets.museivaticani.va/home"],
  ["성 베드로 대성당 돔 예약","https://www.stpetersbasilica.info/"]],
 rows:[
  ["10:00-10:30","🚇 Termini → Ottaviano (A)",cost(1.5)],
  ["10:30-12:30","🖼 <a href=\"https://m.museivaticani.va\" target=\"_blank\" rel=\"noopener\">Vatican Museums</a>",cost(20)],
  ["13:00-14:00","✝️ <a href=\"https://www.vatican.va/\" target=\"_blank\" rel=\"noopener\">St Peter’s Basilica 돔</a>",cost(8)],
  ["14:00-14:30","🍦 <a href=\"https://goo.gl/maps/cBfaCeUVsPXrPgox7\" target=\"_blank\" rel=\"noopener\">Old Bridge Gelato</a>",cost(3.5)],
  ["15:00-17:00","트라스테베레 골목 산책","–"],
  ["18:00-20:00","🍝 <a href=\"https://osteriaderbelli.com/\" target=\"_blank\" rel=\"noopener\">Osteria der Belli</a>",cost(25)]
 ], total:59.5},

/* ========== 15 JAN ========== */
{date:"1월 15일 (목)",title:"Renaissance Rome",
 prep:[["Galleria Borghese 예약","https://galleriaborghese.beniculturali.it"]],
 rows:[
  ["10:00-10:30","⛪ <a href=\"https://www.pantheonroma.com/\" target=\"_blank\" rel=\"noopener\">Pantheon</a> 외관","–"],
  ["10:30-11:00","Pantheon 오디오 가이드",cost(5)],
  ["11:00-11:45","⛲ <a href=\"https://goo.gl/maps/E2J9UFEae5v\" target=\"_blank\" rel=\"noopener\">Piazza Navona</a>","–"],
  ["11:45-12:15","⛲ <a href=\"https://goo.gl/maps/7FdZm4CAaGx\" target=\"_blank\" rel=\"noopener\">Trevi Fountain</a>","–"],
  ["12:15-13:00","🍕 <a href=\"https://goo.gl/maps/urRZ1aE49w82\" target=\"_blank\" rel=\"noopener\">Pinsitaly Trevi</a>",cost(6)],
  ["13:30-15:30","🎨 <a href=\"https://galleriaborghese.beniculturali.it\" target=\"_blank\" rel=\"noopener\">Galleria Borghese</a>",cost(15)],
  ["16:00-16:30","☕ <a href=\"https://goo.gl/maps/gFvfx1LvDRz\" target=\"_blank\" rel=\"noopener\">Tazza d’Oro</a>",cost(1.5)],
  ["18:00-20:00","🍝 <a href=\"https://hostariaromana.it/\" target=\"_blank\" rel=\"noopener\">Hostaria Romana</a>",cost(23)]
 ], total:48.5},

/* ========== 16 JAN ========== */
{date:"1월 16일 (금)",title:"Orvieto Day-trip",
 prep:[
  ["Italo 왕복권","https://www.italotreno.it/"],
  ["Underground Tour 예약","https://www.orvietounderground.it/en/"]],
 rows:[
  ["08:30-10:15","🚆 Roma → Orvieto (Italo)",cost(25)],
  ["10:15-10:30","🚡 Funicolare",cost(1.3)],
  ["11:00-12:00","⛪ <a href=\"https://www.opsm.it/\" target=\"_blank\" rel=\"noopener\">Orvieto Duomo</a>",cost(5)],
  ["12:30-13:30","🍝 <a href=\"https://goo.gl/maps/HWuk1BdXo2GyAJWo9\" target=\"_blank\" rel=\"noopener\">Trattoria La Palomba</a>",cost(20)],
  ["13:30-14:00","🍨 <a href=\"https://goo.gl/maps/4r67meGYcnR2\" target=\"_blank\" rel=\"noopener\">L’Angolo del Gelato</a>",cost(3.5)],
  ["14:00-15:00","🔦 Underground Tour",cost(7)],
  ["18:30-20:00","🍽 <a href=\"https://goo.gl/maps/Nj3QqzstCjRZ7nmg7\" target=\"_blank\" rel=\"noopener\">La Terrazza dei Papi</a>",cost(22)]
 ], total:85.1},

/* ========== 17 JAN ========== */
{date:"1월 17일 (토)",title:"Tivoli Villas",
 prep:[
  ["Villa d’Este 티켓","https://villadestetivoli.beniculturali.it"],
  ["Villa Adriana 티켓","https://villaadriana.beniculturali.it"]],
 rows:[
  ["08:30-10:00","🚆 Tiburtina → Tivoli",cost(3.6)],
  ["10:30-12:30","💦 <a href=\"https://villadestetivoli.beniculturali.it\" target=\"_blank\" rel=\"noopener\">Villa d’Este</a>",cost(10)],
  ["12:30-13:30","🍽 <a href=\"https://ristorantesibilla.com/\" target=\"_blank\" rel=\"noopener\">Ristorante Sibilla</a>",cost(25)],
  ["14:00-16:30","🏛 <a href=\"https://villaadriana.beniculturali.it\" target=\"_blank\" rel=\"noopener\">Villa Adriana</a>",cost(10)],
  ["19:00-20:00","🍝 <a href=\"https://goo.gl/maps/QFo5W1Zpmz32\" target=\"_blank\" rel=\"noopener\">Trattoria dell’Omo</a>",cost(20)]
 ], total:78.3},

/* ========== 18 JAN ========== */
{date:"1월 18일 (일)",title:"Napoli & Pompei",
 prep:[
  ["Italo 로마↔나폴리 왕복","https://www.italotreno.it/"],
  ["Pompei 입장권","https://pompeiisites.org/"]],
 rows:[
  ["07:00-08:10","🚄 Roma → Napoli (Italo)",cost(25)],
  ["08:30-10:30","🏺 <a href=\"https://mannapoli.it/\" target=\"_blank\" rel=\"noopener\">Napoli Archaeological Museum</a>",cost(15)],
  ["11:10-11:45","🚆 Circumvesuviana (<a href=\"https://eavsrl.it\" target=\"_blank\" rel=\"noopener\">EAV</a>)",cost(3)],
  ["12:00-14:00","🏛 <a href=\"https://pompeiisites.org/\" target=\"_blank\" rel=\"noopener\">Pompei Site</a>",cost(18)],
  ["14:00-14:30","🍰 <a href=\"https://goo.gl/maps/MrXtf2fpYztqz7BZA\" target=\"_blank\" rel=\"noopener\">Pasticceria De Vivo</a>",cost(5)],
  ["16:00-17:30","🍝 <a href=\"https://goo.gl/maps/zL4Z9mqaE9BGHeRs6\" target=\"_blank\" rel=\"noopener\">Antica Trattoria da Carmine</a>",cost(20)],
  ["18:20-19:30","🚄 Napoli → Roma (Italo)",cost(25)]
 ], total:114},

/* ========== 19 JAN ========== */
{date:"1월 19일 (월)",title:"Roman Everyday Culture",
 prep:[],
 rows:[
  ["10:00-10:30","🛒 <a href=\"https://goo.gl/maps/S7MGtML48sJ2\" target=\"_blank\" rel=\"noopener\">Mercato Esquilino</a>","–"],
  ["10:30-11:30","시장 과일 시식",cost(2)],
  ["11:30-12:00","⛪ <a href=\"https://basilicasanclemente.com/\" target=\"_blank\" rel=\"noopener\">San Clemente</a>",cost(10)],
  ["13:00-13:30","☕ Bar Fondi",cost(1.5)],
  ["14:30-15:30","📚 <a href=\"https://goo.gl/maps/Ckmj9BBoyp8mRUt28\" target=\"_blank\" rel=\"noopener\">La Feltrinelli</a>",cost(10)],
  ["15:30-16:30","Piazza della Repubblica & Terme di Diocleziano","–"],
  ["17:30-19:30","🍝 <a href=\"https://goo.gl/maps/q5WkzWjHzkG9S3qC6\" target=\"_blank\" rel=\"noopener\">Da Enzo al 29</a>",cost(22)]
 ], total:45.5},

/* ========== 20 JAN ========== */
{date:"1월 20일 (화)",title:"Assisi Pilgrimage",
 prep:[["Trenitalia 왕복권","https://www.trenitalia.com/"]],
 rows:[
  ["07:30-09:00","🚆 Roma → Assisi",cost(12)],
  ["10:00-11:00","🏰 <a href=\"https://www.roccamaggioreassisi.it/\" target=\"_blank\" rel=\"noopener\">Rocca Maggiore</a>",cost(5)],
  ["11:30-12:45","⛪ <a href=\"https://www.sanfrancescoassisi.org/\" target=\"_blank\" rel=\"noopener\">Basilica di San Francesco</a>","–"],
  ["12:45-14:00","🍝 <a href=\"https://goo.gl/maps/TmxJpDqKo6C2\" target=\"_blank\" rel=\"noopener\">Trattoria Pallotta</a>",cost(23)],
  ["14:00-14:30","🍨 <a href=\"https://goo.gl/maps/M8CMZCJBB4R2\" target=\"_blank\" rel=\"noopener\">Pasticceria Sensi</a>",cost(4)],
  ["18:30-20:00","🍝 <a href=\"https://goo.gl/maps/HR3Rmq3k7TtL\" target=\"_blank\" rel=\"noopener\">La Carbonara (Monti)</a>",cost(22)]
 ], total:81},

/* ========== 21 JAN ========== */
{date:"1월 21일 (수)",title:"Florence Renaissance",
 prep:[
  ["Italo 로마↔피렌체 왕복","https://www.italotreno.it/"],
  ["Uffizi 예약","https://www.uffizi.it/"]],
 rows:[
  ["07:00-08:30","🚄 Roma → Firenze (Italo)",cost(30)],
  ["09:00-10:00","⛪ <a href=\"https://duomo.firenze.it/\" target=\"_blank\" rel=\"noopener\">Duomo di Firenze</a>",cost(15)],
  ["10:30-11:30","🎨 <a href=\"https://www.uffizi.it/\" target=\"_blank\" rel=\"noopener\">Uffizi Gallery</a>",cost(25)],
  ["11:30-12:30","🍝 <a href=\"https://goo.gl/maps/JTtuyd1zB7s\" target=\"_blank\" rel=\"noopener\">Trattoria Mario</a>",cost(20)],
  ["12:30-13:00","🍨 <a href=\"https://goo.gl/maps/BtNPcbSxSKA2\" target=\"_blank\" rel=\"noopener\">Gelateria dei Neri</a>",cost(3.5)],
  ["13:00-14:00","⛪ <a href=\"https://www.santacroceopera.it/\" target=\"_blank\" rel=\"noopener\">Santa Croce</a>",cost(8)],
  ["14:30-15:30","🌉 Ponte Vecchio","–"],
  ["16:30-18:00","🚄 Firenze → Roma",cost(30)],
  ["18:00-20:00","🍽 <a href=\"https://goo.gl/maps/JcMMMAfTDuD2\" target=\"_blank\" rel=\"noopener\">Al Moro</a>",cost(24)]
 ], total:165.5},

/* ========== 22 JAN ========== */
{date:"1월 22일 (목)",title:"Siena Medieval City-state",
 prep:[["Siena Duomo OPA Pass","https://operaduomo.siena.it"]],
 rows:[
  ["07:00-09:00","🚆 Roma → Siena",cost(17)],
  ["10:00-11:00","⛲ Piazza del Campo","–"],
  ["11:00-12:00","🏛 <a href=\"https://www.comune.siena.it/\" target=\"_blank\" rel=\"noopener\">Palazzo Pubblico</a>",cost(10)],
  ["12:00-13:30","🍝 <a href=\"https://goo.gl/maps/XjAKy96YRHx\" target=\"_blank\" rel=\"noopener\">Taverna di San Giuseppe</a>",cost(25)],
  ["13:30-14:00","🍰 <a href=\"https://goo.gl/maps/XmfGUdA5xgyrBwMV8\" target=\"_blank\" rel=\"noopener\">Pasticceria Nannini</a>",cost(4.5)],
  ["14:00-15:30","⛪ <a href=\"https://operaduomo.siena.it\" target=\"_blank\" rel=\"noopener\">Duomo di Siena</a>",cost(13)],
  ["17:18-19:20","🚆 Siena → Roma",cost(17)],
  ["19:30-20:00","🍝 <a href=\"https://goo.gl/maps/Y5HoLrK8EiN2\" target=\"_blank\" rel=\"noopener\">Osteria da Fortunata</a>",cost(22)]
 ], total:116.5},

/* ========== 23 JAN ========== */
{date:"1월 23일 (금)",title:"Civita di Bagnoregio",
 prep:[["치비타 입장권","https://civitadibagnoregio.it/"]],
 rows:[
  ["07:30-09:00","🚆 Roma → Orvieto",cost(10)],
  ["09:00-09:30","🚍 Cotral → Bagnoregio",cost(3)],
  ["10:00-10:30","🌉 치비타 다리 입장",cost(5)],
  ["10:30-12:00","중세 마을 탐방","–"],
  ["12:00-13:00","🍝 <a href=\"https://goo.gl/maps/zV2JZJTS8Tq6JdKt5\" target=\"_blank\" rel=\"noopener\">Alma Civita</a>",cost(25)],
  ["13:00-13:30","🍰 <a href=\"https://goo.gl/maps/SV8nUyjcS7HzM7Rx5\" target=\"_blank\" rel=\"noopener\">L’Arco del Gusto</a>",cost(4)],
  ["13:30-14:30","전망대 & 기념품",cost(5)],
  ["15:40-17:00","🚆 Orvieto → Roma",cost(10)],
  ["18:00-20:00","🍝 <a href=\"https://goo.gl/maps/FtQuR2eMrqU2\" target=\"_blank\" rel=\"noopener\">Hostaria al Gladiatore</a>",cost(22)]
 ], total:87},

/* ========== 24 JAN ========== */
{date:"1월 24일 (토)",title:"Last Day in Rome",
 prep:[],
 rows:[
  ["10:00-11:15","⛪ <a href=\"https://goo.gl/maps/qF7xoW6qNLsFjFtk6\" target=\"_blank\" rel=\"noopener\">San Pietro in Vincoli</a>","–"],
  ["11:15-12:00","Via del Boschetto 빈티지 골목","–"],
  ["12:00-12:45","🍬 <a href=\"https://goo.gl/maps/sx5tLxLzR7fYvKuR7\" target=\"_blank\" rel=\"noopener\">ZUM Roma</a>",cost(5)],
  ["12:45-13:30","Campo de’ Fiori 기념품",cost(10)],
  ["14:00-15:00","🍊 <a href=\"https://goo.gl/maps/k6rR7EXV8GtxzyEv5\" target=\"_blank\" rel=\"noopener\">Aventine Hill & Orange Garden</a>","–"],
  ["16:00-17:00","🛍 <a href=\"https://goo.gl/maps/ApvXrpD52uN2\" target=\"_blank\" rel=\"noopener\">Galleria Alberto Sordi</a>",cost(10)],
  ["18:00-18:30","🍨 <a href=\"https://goo.gl/maps/jU9V5VCgfkt\" target=\"_blank\" rel=\"noopener\">Come il Latte</a>",cost(3.5)],
  ["18:30-20:00","🍝 <a href=\"https://colline-emiliane.com/\" target=\"_blank\" rel=\"noopener\">Colline Emiliane</a>",cost(28)]
 ], total:58.5},

/* ========== 25 JAN ========== */
{date:"1월 25일 (일)",title:"Departure",
 prep:[["Leonardo Express 예매","https://www.trenitalia.com/"]],
 rows:[
  ["08:30-09:00","🍞 Bar Fondi 아침",cost(5)],
  ["09:30-10:00","🚆 <a href=\"https://www.trenitalia.com/\" target=\"_blank\" rel=\"noopener\">Leonardo Express</a> → FCO",cost(14)],
  ["10:35-11:30","면세점 & 초콜릿",cost(10)],
  ["11:30-","✈️ 로마 → 인천","–"]
 ], total:29}
];

/* ——— 2 인 총경비 계산 ——— */
const totalOne = scheduleData.reduce((s,d)=>s+d.total,0);   // 1 095
const totalTwo = totalOne*2;
document.getElementById("total-cost").textContent =
  `💸 2 인 예상 총경비 : € ${totalTwo.toLocaleString()} ≈ ₩ ${(totalTwo*1500).toLocaleString()}`;

/* ——— 렌더링 ——— */
const renderDay = d => {
  const prepBox = d.prep.length
    ? `<div class="prep-box"><strong>📝 사전 준비</strong><ul>${d.prep
        .map(([t,l])=>`<li><a href="${l}" target="_blank" rel="noopener">${t}</a></li>`).join("")}</ul></div>` : "";
  const rows = d.rows.map(
    ([t,a,c])=>`<tr><td>${t}</td><td>${a}</td><td>${c}</td></tr>`
  ).join("");
  return `<section class="day-block">
    <h2>📅 ${d.date} – ${d.title}</h2>
    ${prepBox}
    <table class="schedule-table">
      <thead><tr><th>시간</th><th>활동</th><th>비용</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <p class="day-total">💰 하루 합계  ${cost(d.total).replace('€ ','€ ')}</p>
  </section>`;
};

document.getElementById("schedule-container").innerHTML =
  scheduleData.map(renderDay).join("");
