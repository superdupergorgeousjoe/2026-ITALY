/****************************************************************
* 2026 Italy History Trip — 13‑Day · 30‑min Blocks (FULL)
****************************************************************/
const cost = n => `€ ${n} / ₩ ${(n*1500).toLocaleString()}`;
const ORIGIN = "126 Via della Marranella Rome";
const gLink = n => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n)}`;

/* ───────────────────────── 공통 교통 가이드 ──────────────────────── */
document.getElementById("transport-guide").innerHTML = `
<strong>🚍 대중교통 · 티켓 팁</strong><br>
<b>도시 내부</b> : Tap 결제(Travel‑Wallet) + 100분 BIT(로마)·75분 ACTV(베네치아) 등<br>
<b>도시간</b> : 고속 Italo / Frecciarossa → 전자 PNR · Regionale → 종이 티켓<br><br>
<b>추천 티켓</b><br>
Roma BIT €1.50 / 24 h €7 · Tivoli CAT Tap · Napoli UNICO 1‑Day €4.5 + Circum 종이<br>
Firenze·Pisa·Siena·Bologna Tap good · Venezia Vaporetto 1‑Day €25 · Milano Metro Tap`;

/* ───────────────────────── 일정 데이터 ──────────────────────── */
const trip = [

/* ========== 13 JAN ========== */
{
 date:"1월 13일 (화)", title:"Roma — Ancient Foundations", city:"로마",
 weather:"3–12 °C · 롱패딩", daily:76,
 prep:[["Colosseum 통합권","https://colosseo.it/"]],
 blocks:[
  ["10:00‑10:30","Colosseum","25 min walk / 12 min Metro B",
   `https://www.google.com/maps/dir/?api=1&origin=${ORIGIN}&destination=Colosseum&travelmode=walking`,
   `https://www.google.com/maps/dir/?api=1&origin=${ORIGIN}&destination=Colosseum&travelmode=transit`,"€18",
   "콜로세움|https://namu.wiki/w/콜로세움|서기 80년|5만 관중 원형극장|검투·해전 무대장치|중세 채석장|18C 보존령"],
  ["12:30‑13:30","Roman Forum","walk 8 min","","","–",
   "포로 로마노|https://namu.wiki/w/포로%20로마노|공화·제정 정치 중심|Via Sacra 개선행렬|카이사르 장례 화장터|19C 대발굴|팔라티노 포함"],
  ["15:00‑17:00","Capitoline Museums","walk 10 min","","","€13",
   "카피톨리노 박물관|https://namu.wiki/w/카피톨리노%20박물관|1471 세계 첫 공공 미술관|늑대상 Lupa|콘스탄티누스 두상|미켈란젤로 광장|포로 전망"],
  ["18:00‑20:00","Trattoria Vecchia Roma 저녁","walk 12 min","","","€22"]
]},

/* ========== 14 JAN ========== */
{
 date:"1월 14일 (수)", title:"Vatican & Trastevere", city:"바티칸",
 weather:"4–11 °C · 방풍 재킷", daily:59.5,
 prep:[["바티칸 박물관","https://tickets.museivaticani.va/home"],["St Peter 돔","https://stpetersbasilica.info"]],
 blocks:[
  ["10:00‑10:30","Vatican Museums","22 min Metro A","",
   `https://www.google.com/maps/dir/?api=1&origin=${ORIGIN}&destination=Vatican+Museums&travelmode=transit`,"€20",
   "바티칸 박물관|https://namu.wiki/w/바티칸%20박물관|54전시·7 km|라파엘로·시스티나|교황 미술품|화·목 새벽투어|보안 심사"],
  ["13:00‑14:00","St Peter’s Basilica","walk 7 min","","","€8",
   "성 베드로 대성당|https://namu.wiki/w/성%20베드로%20대성당|1506‑1626 건축|187 m 길이|42 m 돔|베르니니 발다키노|피에타 소장"],
  ["14:00‑14:30","Old Bridge Gelato","walk 3 min","","","€3.5"],
  ["15:00‑17:00","Castel Sant’Angelo","walk 18 min","+",
   "","€0",
   "산탄젤로 성|https://namu.wiki/w/산탄젤로%20성|하드리아누스 영묘|교황 피난 통로|나선 경사로|천사 동상|테베레 강변"],
  ["18:00‑20:00","Osteria der Belli 저녁","walk 2 min","","","€25"]
]},

/* ========== 15 JAN ========== */
{
 date:"1월 15일 (목)", title:"Via Appia & Catacombs", city:"로마 남부",
 weather:"4–13 °C", daily:48.5,
 prep:[["카타콤바 티켓","https://www.catacombe.org/"]],
 blocks:[
  ["10:00‑10:30","Porta San Sebastiano","32 min walk / 18 min Tram5+Bus118",
   `https://www.google.com/maps/dir/?api=1&origin=${ORIGIN}&destination=Porta+San+Sebastiano&travelmode=walking`,
   `https://www.google.com/maps/dir/?api=1&origin=${ORIGIN}&destination=Porta+San+Sebastiano&travelmode=transit`,"–",
   "아피아 가도|https://namu.wiki/w/아피아%20가도|로마‑브린디시 군용로|BC 312 개통|성벽 최대 문|파시스트 박물관 흔적|전망대"],
  ["11:30‑13:00","Catacombs of Callixtus","walk 20 min","+","",
   "€9",
   "로마 카타콤바|https://namu.wiki/w/로마%20카타콤바|2C 기독교 지하묘지|4층 20 km 미로|교황 무덤|벽화 상징|40 분 가이드"],
  ["15:00‑16:30","Hostaria Antica Roma 점심","walk 5 min","","","€23"],
  ["17:00‑18:30","숙소 복귀","40 min Tram","","","€1.5"]
]},

/* ========== 16 JAN ========== */
{
 date:"1월 16일 (금)", title:"Tivoli — Hadrian & d’Este", city:"티볼리",
 weather:"2–10 °C · 안개", daily:85.1,
 prep:[["Villa Adriana","https://villaadriana.beniculturali.it"],["Villa d’Este","https://villadestetivoli.beniculturali.it"]],
 blocks:[
  ["08:30‑09:45","Roma → Tivoli","70 min Regionale","+","","€3.6"],
  ["10:00‑12:00","Villa Adriana","CAT bus 10 min","+","",
   "€10",
   "하드리아누스 빌라|https://namu.wiki/w/하드리아누스%20빌라|120헥타르 별궁|카노푸스 인공호수|팔라티움 목욕장|그리스풍 건축|1999 세계유산"],
  ["12:15‑13:45","Ristorante Sibilla 점심","bus 10 min","","","€25"],
  ["14:00‑16:00","Villa d’Este","walk 5 min","+","",
   "€10",
   "빌라 데스테|https://namu.wiki/w/빌라%20데스테|1550 르네상스 정원|500 분수|음악분수 오르간|낙차 수로|세계 정원 교본"],
  ["16:00‑17:30","Tivoli → Roma","80 min train","","","incl."],
  ["18:00‑20:00","Trattoria dell’Omo 저녁","walk 8 min","","","€20"]
]},

/* ========== 17 JAN ========== */
{
 date:"1월 17일 (토)", title:"Orvieto & Civita", city:"오르비에토",
 weather:"0–8 °C · 방수", daily:78.3,
 prep:[["Underground 투어","https://orvietounderground.it"]],
 blocks:[
  ["08:30‑09:45","Roma → Orvieto","75 min Italo","+","","€25"],
  ["10:00‑11:30","Orvieto Duomo","funicolare 5 min","+",
   "","€5",
   "오르비에토 대성당|https://namu.wiki/w/오르비에토%20대성당|1290‑1591 고딕|황금 모자이크|성체 기적|줄무늬 대리석|시뇨렐리 심판"],
  ["13:00‑13:30","Civita 이동","Cotral 30 min","+","","€3"],
  ["13:30‑15:30","Civita di Bagnoregio","—","+","",
   "€5",
   "치비타 디 반뇨레조|https://namu.wiki/w/치비타%20디%20반뇨레조|응회암 침식|죽어가는 도시|300 m 인도교|인구 12명|경관 잠정목록"],
  ["17:00‑18:30","Orvieto → Roma","75 min train","","","€10"],
  ["18:30‑20:00","La Terrazza dei Papi 저녁","walk 6 min","","","€22"]
]},

/* ========== 18 JAN ========== */
{
 date:"1월 18일 (일)", title:"Assisi Pilgrimage", city:"아시시",
 weather:"‑1–7 °C · 안개", daily:87.5,
 prep:[["Basilica 입장","https://sanfrancescoassisi.org"]],
 blocks:[
  ["07:30‑09:00","Roma → Assisi","90 min Regionale","+","","€12"],
  ["09:15‑11:15","Basilica S. Francesco","bus 15 min","+",
   "","€8",
   "성 프란체스코 성당|https://namu.wiki/w/성%20프란체스코%20성당|1228 착공|상·하 2중|조토 프레스코|1997 복원|성인 무덤"],
  ["11:30‑12:30","Rocca Maggiore","walk 15 min","+","",
   "€5",
   "로카 마조레|https://namu.wiki/w/로카%20마조레|12C 제국 요새|움브리아 평야 전망|프리드리히 2세|저항군 피난|석회암 절경"],
  ["13:00‑14:00","Trattoria Pallotta 점심","walk 10 min","","","€23"],
  ["15:00‑16:30","Assisi → Roma","90 min train","","","€12"],
  ["18:00‑20:00","La Carbonara Monti 저녁","walk 8 min","","","€22"]
]},

/* ========== 19 JAN ========== */
{
 date:"1월 19일 (월)", title:"Napoli & Pompei", city:"나폴리",
 weather:"6–12 °C · 해풍", daily:115,
 prep:[["Pompei 티켓","https://pompeiisites.org"]],
 blocks:[
  ["07:00‑08:10","Roma → Napoli","70 min Italo","+","","€25"],
  ["08:30‑10:30","Naples Archaeological Museum","Metro 12 min","+",
   "","€15",
   "나폴리 국립 고고학 박물관|https://namu.wiki/w/나폴리%20국립%20고고학%20박물관|폼페이 유물 총본산|파르네제 컬렉션|모자이크·벽화|아폴로 벨베데레|지진계단"],
  ["10:40‑11:15","Napoli → Pompei","Circum 35 min","+","","€3"],
  ["11:15‑13:30","Pompei Archaeological Park","—","+","",
   "€18",
   "폼페이|https://namu.wiki/w/폼페이|79년 화산재 도시|라리쿰|원형극장|Regio V 복원|UNESCO 1997"],
  ["13:30‑14:00","Pasticceria De Vivo 간식","walk 5 min","","","€5"],
  ["15:15‑16:45","Antica Trattoria da Carmine 점심","walk 10 min","","","€20"],
  ["17:00‑18:10","Napoli → Roma","70 min Italo","","","€25"]
]},

/* ========== 20 JAN ========== */
{
 date:"1월 20일 (화)", title:"Firenze Renaissance", city:"피렌체",
 weather:"2–9 °C", daily:135.5,
 prep:[["Uffizi 예약","https://uffizi.it"]],
 blocks:[
  ["07:00‑08:30","Roma → Firenze","90 min Italo","+","","€30"],
  ["09:00‑10:00","Duomo di Firenze","walk 5 min","+",
   "","€15",
   "피렌체 대성당|https://namu.wiki/w/피렌체%20대성당|브루넬레스키 돔|463계단|줄무늬 대리석|세례당 천국의 문|산 로렌초 구조"],
  ["10:30‑12:30","Uffizi Gallery","walk 7 min","+",
   "","€25",
   "우피치 미술관|https://namu.wiki/w/우피치%20미술관|1560 메디치|보티첼리 비너스|레오나르도 초기작|카라바조|예약 필수"],
  ["12:30‑13:30","Trattoria Mario 점심","walk 6 min","","","€20"],
  ["13:30‑14:00","Gelateria dei Neri","walk 8 min","","","€3.5"],
  ["14:00‑15:00","Santa Croce 성당","walk 6 min","+",
   "","€8",
   "산타 크로체 성당|https://namu.wiki/w/산타%20크로체%20성당|프란체스코 수도회|갈릴레오 묘|미켈란젤로 묘|피렌체 홍수 복원|고딕 내벽"],
  ["16:00‑17:30","Firenze → Roma","90 min Italo","","","€30"],
  ["18:30‑20:00","Al Moro 저녁","walk 5 min","","","€24"]
]},

/* ========== 21 JAN ========== */
{
 date:"1월 21일 (수)", title:"Siena Gothic State", city:"시에나",
 weather:"1–7 °C", daily:110,
 prep:[["OPA Pass","https://operaduomo.siena.it"]],
 blocks:[
  ["07:00‑09:00","Roma → Siena","120 min Regionale+Bus","+","","€17"],
  ["09:20‑11:00","Piazza del Campo","bus 15 min","+",
   "","€10",
   "시에나|https://namu.wiki/w/시엔나|조개형 광장|팔리오 경마|공화정 시청|캄파넬라 종탑|붉은 벽돌"],
  ["11:00‑12:00","Duomo di Siena","walk 6 min","+",
   "","€13",
   "시에나 대성당|https://namu.wiki/w/시에나%20대성당|1215 시작|흑·백 대리석|인타르시아 바닥|미켈란젤로 조각|파사토네 전망"],
  ["12:00‑13:30","Taverna San Giuseppe 점심","walk 3 min","","","€25"],
  ["13:30‑14:00","Pasticceria Nannini","walk 4 min","","","€4.5"],
  ["15:18‑17:20","Siena → Roma","120 min train","","","€17"],
  ["18:30‑20:00","Osteria da Fortunata 저녁","walk 6 min","","","€22"]
]},

/* ========== 22 JAN ========== */
{
 date:"1월 22일 (목)", title:"Pisa & Lucca", city:"피사·루카",
 weather:"3–11 °C", daily:145,
 prep:[["Leaning Tower 예약","https://opapisa.it"]],
 blocks:[
  ["07:00‑08:00","Roma → Pisa","60 min FR","+","","€30"],
  ["08:20‑09:20","Leaning Tower","bus 15 min","+",
   "","€20",
   "피사의 사탑|https://namu.wiki/w/피사의%20사탑|1173 착공|지반 침하|5° 기울기→복원|갈릴레오 실험|30 분 슬롯"],
  ["10:00‑10:30","Gelateria De’ Coltelli","walk 8 min","","","€4"],
  ["10:30‑11:00","Pisa → Lucca","26 min train","+","","€3.5"],
  ["11:00‑13:00","Lucca City Walls","—","+",
   "","€10",
   "루카 성벽|https://namu.wiki/w/루카(이탈리아)|16C 성벽|4.2 km 산책|폭 30 m|나폴레옹 산책로|Comics 페스티벌"],
  ["13:00‑14:30","Osteria Cecconi 점심","walk 5 min","","","€24"],
  ["15:00‑16:30","Lucca → Roma","90 min Italo","","","€30"],
  ["18:30‑20:00","Hostaria al Gladiatore 저녁","walk 6 min","","","€22"]
]},

/* ========== 23 JAN ========== */
{
 date:"1월 23일 (금)", title:"Bologna University", city:"볼로냐",
 weather:"1–8 °C", daily:116.5,
 prep:[],
 blocks:[
  ["07:00‑08:30","Roma → Bologna","90 min Italo","+","","€37"],
  ["09:00‑10:00","Le Due Torri","walk 10 min","+",
   "","€10",
   "볼로냐 쌍탑|https://namu.wiki/w/볼로냐|아시넬리·가리젠다|12C 권력 상징|498계단|4° 기울기|국기색 기원"],
  ["10:00‑11:00","Archiginnasio","walk 6 min","+",
   "","€7",
   "볼로냐 대학교|https://namu.wiki/w/볼로냐%20대학교|1088 개교|해부극장|학생 문장 6만|단테 졸업|시립 도서관"],
  ["12:00‑13:30","Trattoria Via Serra 점심","walk 15 min","","","€25"],
  ["14:00‑15:30","Mercato di Mezzo","walk 10 min","","","€5"],
  ["16:00‑17:30","Bologna → Roma","90 min Italo","","","€37"],
  ["18:30‑20:00","Colline Emiliane 저녁","walk 7 min","","","€22"]
]},

/* ========== 24 JAN ========== */
{
 date:"1월 24일 (토)", title:"Venezia Republic", city:"베네치아",
 weather:"1–7 °C", daily:66.5,
 prep:[["San Marco 대성당","https://basilicasanmarco.it"]],
 blocks:[
  ["07:30‑08:55","Roma → Venezia","85 min Italo","+","","€45"],
  ["09:30‑11:00","Piazza San Marco","vaporetto 10 min","+",
   "","€0",
   "산 마르코 대성당|https://namu.wiki/w/산%20마르코%20대성당|비잔틴 모자이크|사자 상징|테세라 금박|Acqua Alta|카페 플로리안"],
  ["11:00‑12:00","Basilica San Marco","—","+","",
   "€3"],
  ["12:30‑14:00","Ristorante Giubagio 점심","walk 12 min","","","€28"],
  ["14:30‑15:00","Rialto Bridge","walk 9 min","+",
   "","€0",
   "리알토 다리|https://namu.wiki/w/리알토%20다리|1591 석조|금·향신료 시장|그랜드 운하|아치 다리|새벽 수산 시장"],
  ["16:00‑17:30","Venezia → Roma","85 min Italo","","","€45"]
]},

/* ========== 25 JAN ========== */
{
 date:"1월 25일 (일)", title:"Milano Duomo & Departure", city:"밀라노",
 weather:"‑1–6 °C", daily:29,
 prep:[["Duomo 옥상 패스","https://ticket.duomomilano.it"]],
 blocks:[
  ["07:00‑08:10","Roma → Milano","70 min Frecciarossa","+","","€30"],
  ["08:30‑10:00","Duomo di Milano","Metro M1 5 min","+",
   "","€15",
   "밀라노 대성당|https://namu.wiki/w/밀라노%20대성당|1386‑1965 건축|고딕 첨탑 135|황금 마돌리나|대리석 110종|옥상 전망"],
  ["10:30‑11:00","Luini Panzerotti 간식","walk 2 min","","","€5"],
  ["11:00‑11:45","Milano → Malpensa Airport","45 min express","+","","€14",
   "밀라노 말펜사 국제공항|https://namu.wiki/w/밀라노%20말펜사%20국제공항|1909 개항|MXP Express 30분|터미널1·2|Caffarel 면세|Sky Bridge"],
  ["11:45‑12:30","면세 쇼핑","—","","","€10"]
]}
];

/* ───────────────────────── 총 경비 ──────────────────────── */
const total = trip.reduce((s,d)=>s+d.daily,0);
document.getElementById("total-cost").innerHTML =
  `💸 <strong>2 인 총경비</strong> : € ${(total*2).toLocaleString()} ≈ ₩ ${(total*2*1500).toLocaleString()}`;

/* ───────────────────────── 렌더링 ──────────────────────── */
const container=document.getElementById("schedule-container");
trip.forEach(d=>{
  const sec=document.createElement("section");sec.className="day";
  sec.innerHTML=`<h2>📅 ${d.date} – ${d.title}</h2>
    <div class="city-info"><strong>🚍 ${d.city}</strong> | ${d.weather}</div>`;
  if(d.prep.length){
    sec.innerHTML+=`<div class="prep"><strong>📝 사전 준비</strong><ul>${
      d.prep.map(([t,l])=>`<li><a href="${l}" target="_blank">${t}</a></li>`).join("")
    }</ul></div>`;
  }
  let rows="";
  d.blocks.forEach(([time,act,move,walk,pt,fee,meta])=>{
    let cell=act;
    if(meta){
      const [nm,wk,...desc]=meta.split("|");
      cell=`${nm} <a href="${wk}" target="_blank">🔗</a> <a href="${gLink(nm)}" target="_blank">📍</a><br><small>${desc.join(" · ")}</small>`;
    }else{
      cell+=` <a href="${gLink(act)}" target="_blank">📍</a>`;
    }
    const links=walk?`<a href="${walk}" target="_blank">도보</a>${pt?` / <a href="${pt}" target="_blank">대중</a>`:""}`:"";
    rows+=`<tr><td>${time}</td><td>${cell}</td><td>${move}<br>${links}</td><td>${fee||"–"}</td></tr>`;
  });
  sec.innerHTML+=`<table class="tbl"><thead><tr><th>시간</th><th>활동</th><th>이동/경로</th><th>비용</th></tr></thead><tbody>${rows}</tbody></table>
  <div class="prep">💰 하루 합계 : ${cost(d.daily)}</div>`;
  container.appendChild(sec);
});
