"use strict";

/* ============================================================
   ТҮРКІСТАН ӨҢІРІ — деректер мен интерактив
   ------------------------------------------------------------
   left / top — картадағы нүктенің орны, ПАЙЫЗБЕН.
   Карта суреті 888×1212 пиксель және 90° сағат бағытымен
   бұрылған, сондықтан координаталар айналдырылған күйде
   берілген: left = 100 − ескі top, top = ескі left.
   Нүктелер референс картадан (references/mapreference)
   дәл өлшеніп алынды.
   Мәтіндерді осы жерден өзгертуге болады.
   ============================================================ */

const PLACES = [
  {
    id: "nis",
    name: "Шымкент қаласының НЗМ-і",
    type: "Білім ордасы",
    city: "Шымкент",
    description:
      "Назарбаев Зияткерлік мектебі — өңірдегі заманауи білім ордасы. Оқу кампусы Шымкент қаласының жаңа бөлігінде, тарихи орталыққа жақын орналасқан.",
    image: "shymkentnis.jpeg",
    left: 49.5,
    top: 58.78,
  },
  {
    id: "yassaui",
    name: "Қожа Ахмет Яссауи кесенесі",
    type: "Кесене",
    city: "Түркістан",
    description:
      "XIV ғасырда Әмір Темірдің бұйрығымен салынған кесене — Түркістанның басты көрікті орны. ЮНЕСКО-ның Әлемдік мұра тізіміне енген.",
    image: "kozhaahmetyassayi.jpg",
    left: 48.43,
    top: 47.3,
  },
  {
    id: "akmeshit",
    name: "Ақмешіт үңгірі",
    type: "Табиғат ескерткіші",
    city: "Түркістан облысы",
    description:
      "Аласа таулардың ішінде орналасқан табиғи үңгір. Жергілікті халық оны киелі орындардың бірі санайды, айналасы кең жазық пен таулы өлке.",
    image: "akmeshitungiri.jpg",
    left: 48.1,
    top: 68.36,
  },
  {
    id: "kazhymukan",
    name: "Қажымұқан Мұңайтпасұлы атындағы облыстық спорт мұзейі",
    type: "Мұражай",
    city: "Шымкент",
    description:
      "Атақты қазақ балуаны Қажымұқан Мұңайтпасұлына арналған облыстық спорт мұражайы. Экспозициясында балуанның өмірі мен өңір спортының тарихы көрсетілген.",
    image: "kazhymukanmuzeyi.jpg",
    left: 43.81,
    top: 58.0,
  },
  {
    id: "domalak",
    name: "Домалақ ана кесенесі",
    type: "Кесене",
    city: "Түркістан облысы",
    description:
      "Домалақ ана — қазақ халқы құрмет тұтқан тарихи тұлға, ұрпақ жалғастырушы ана. Кесене өңірдегі зиярат ететін киелі орындардың бірі саналады.",
    image: "domalak ana kesene.jpg",
    left: 43.32,
    top: 61.15,
  },
  {
    id: "dendropark",
    name: "Шымкент мемлекеттік дендрологиялық саябағы",
    type: "Саябақ",
    city: "Шымкент",
    description:
      "Қала орталығындағы дендрологиялық саябақ: аллеялар, көгалдар және сирек ағаш түрлері. Серуендеу мен тынығуға арналған сүйікті орын.",
    image: "dendropark.jpg",
    left: 42.57,
    top: 64.19,
  },
  {
    id: "sayasat",
    name: "Саяси қуғын-сүргін құрбандары мұзейі",
    type: "Мұражай",
    city: "Шымкент",
    description:
      "Саяси қуғын-сүргін құрбандарына арналған мұражай. Экспозицияда құжаттар, фотосуреттер мен естеліктер жинақталған.",
    image: "sayasikyginsyrginqurbandarynynmyrazhayi.jpg",
    left: 40.1,
    top: 62.73,
  },
  {
    id: "saltdastur",
    name: "Салт-дәстүр орталығы",
    type: "Мәдени орталық",
    city: "Шымкент",
    description:
      "Қазақтың салт-дәстүрі мен қолөнерін насихаттайтын орталық. Мұнда ұлттық киім, қолөнер бұйымдары және дәстүрлі әдет-ғұрыптар таныстырылады.",
    image: "saltdastyrortalygy.jpg",
    left: 39.77,
    top: 64.98,
  },
  {
    id: "uezov",
    name: "М.Әуезов атындағы Оңтүстік Қазақстан университеті",
    type: "Университет",
    city: "Шымкент",
    description:
      "Мұхтар Әуезов атындағы Оңтүстік Қазақстан университеті — өңірдегі ең ірі жоғары оқу орны. Кампусы Шымкент қаласында орналасқан.",
    image: "universitymuhtarauezov.jpg",
    left: 39.19,
    top: 59.46,
  },
  {
    id: "otyrar",
    name: "Отырар қалашығы",
    type: "Көне қалашық",
    city: "Отырар ауданы",
    description:
      "Ортағасырлық Отырар қаласының орны — Ұлы Жібек жолы бойындағы ірі сауда және мәдени орталық. Қалашықтағы қазба жұмыстары бірнеше ғасырлық тарихты ашады.",
    image: "otyrar.jpg",
    left: 39.11,
    top: 32.88,
  },
  {
    id: "arystanbab",
    name: "Арыстан-баб кесенесі",
    type: "Кесене",
    city: "Отырар ауданы",
    description:
      "Қожа Ахмет Яссауидің ұстазы саналған Арыстан бабқа арналған кесене. Түркістанға барар жолдағы зиярат орындарының бірі.",
    image: "arystanbab.jpg",
    left: 35.73,
    top: 34.23,
  },
  {
    id: "shymkala",
    name: "Шым қала тарихи-мәдени кешені",
    type: "Тарихи кешен",
    city: "Шымкент",
    description:
      "Шым қала — Шымкенттің ежелгі орны, ортағасырлық қалашық. Тарихи-мәдени кешен ретінде қорғалып, қала тарихының бастауын көрсетеді.",
    image: "citadel.jpg",
    left: 31.68,
    top: 66.44,
  },
];

/* ---------- Элементтер ---------- */

const mapEl = document.getElementById("map");
const pinsEl = document.getElementById("mapPins");
const listEl = document.getElementById("placesList");
const cardEl = document.getElementById("placeCard");
const photoEl = document.getElementById("placeCardPhoto");
const typeEl = document.getElementById("placeCardType");
const titleEl = document.getElementById("placeCardTitle");
const textEl = document.getElementById("placeCardText");
const closeBtn = document.getElementById("placeCardClose");

const canHover = window.matchMedia(
  "(hover: hover) and (pointer: fine)",
).matches;
const narrowScreen = window.matchMedia("(max-width: 620px)");

let activeId = null;

const byId = (id) => PLACES.find((p) => p.id === id);
const imageSrc = (p) => "images/" + p.image;

/* ---------- Нүктелер мен тізімді құру ---------- */

PLACES.forEach((place) => {
  const pin = document.createElement("button");
  pin.type = "button";
  pin.className = "pin";
  pin.dataset.id = place.id;
  pin.style.left = place.left + "%";
  pin.style.top = place.top + "%";
  pin.setAttribute("aria-label", place.name + " — толығырақ");
  pin.innerHTML =
    '<span class="pin-ring" aria-hidden="true"></span>' +
    '<span class="pin-core" aria-hidden="true"></span>';
  pinsEl.appendChild(pin);

  const item = document.createElement("li");
  item.className = "place-item";
  item.dataset.id = place.id;

  const link = document.createElement("button");
  link.type = "button";
  link.className = "place-link";
  link.dataset.id = place.id;

  const thumb = document.createElement("img");
  thumb.className = "place-thumb";
  thumb.src = imageSrc(place);
  thumb.alt = "";
  thumb.width = 72;
  thumb.height = 72;
  thumb.loading = "lazy";
  thumb.decoding = "async";

  const meta = document.createElement("span");
  meta.className = "place-meta";

  const name = document.createElement("span");
  name.className = "place-name";
  name.textContent = place.name;

  const sub = document.createElement("span");
  sub.className = "place-sub";
  sub.textContent = place.type + " · " + place.city;

  meta.append(name, sub);
  link.append(thumb, meta);
  item.appendChild(link);
  listEl.appendChild(item);
});

/* ---------- Карточка ---------- */

function useSheet() {
  return narrowScreen.matches || mapEl.clientWidth < 400;
}

function layoutCard(place) {
  const mapW = mapEl.clientWidth;
  const mapH = mapEl.clientHeight;

  if (useSheet()) {
    cardEl.classList.add("place-card--sheet");
    cardEl.style.left = "";
    cardEl.style.top = "";
    cardEl.style.width = "";
    return;
  }

  cardEl.classList.remove("place-card--sheet");

  const cardW = cardEl.offsetWidth;
  const cardH = cardEl.offsetHeight;
  const gap = 18;
  const pad = 6;

  const pinX = (place.left / 100) * mapW;
  const pinY = (place.top / 100) * mapH;

  let left = pinX + gap;
  if (left + cardW > mapW - pad) left = pinX - gap - cardW;
  left = Math.max(pad, Math.min(left, mapW - cardW - pad));

  let top = pinY - cardH / 2;
  top = Math.max(pad, Math.min(top, Math.max(pad, mapH - cardH - pad)));

  cardEl.style.left = Math.round(left) + "px";
  cardEl.style.top = Math.round(top) + "px";
}

function markActive() {
  pinsEl.querySelectorAll(".pin").forEach((pin) => {
    pin.classList.toggle("is-active", pin.dataset.id === activeId);
  });
  listEl.querySelectorAll(".place-item").forEach((item) => {
    const on = item.dataset.id === activeId;
    item.classList.toggle("is-active", on);
    const link = item.querySelector(".place-link");
    if (on) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function openCard(id) {
  const place = byId(id);
  if (!place || id === activeId) return;

  activeId = id;
  photoEl.src = imageSrc(place);
  photoEl.alt = place.name + " — сурет";
  typeEl.textContent = place.type + " · " + place.city;
  titleEl.textContent = place.name;
  textEl.textContent = place.description;

  cardEl.hidden = false;
  layoutCard(place);
  markActive();
}

function closeCard() {
  if (activeId === null) return;
  activeId = null;
  cardEl.hidden = true;
  cardEl.classList.remove("place-card--sheet");
  markActive();
}

/* ---------- Тінтуір: нүктенің үстінен өту ---------- */

if (canHover) {
  mapEl.addEventListener("mousemove", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const pin = target.closest(".pin");
    if (pin) {
      openCard(pin.dataset.id);
      return;
    }
    if (target.closest(".place-card")) return; // карточка ішінде — ашық қалады
    closeCard();
  });

  mapEl.addEventListener("mouseleave", closeCard);
}

/* ---------- Тінтуір пернесі / саусақ ---------- */

pinsEl.addEventListener("click", (event) => {
  const pin = event.target.closest(".pin");
  if (!pin) return;
  // Тінтуірі бар құрылғыда карточка курсорға байланған: басу оны ашық күйде ұстайды.
  if (canHover) {
    openCard(pin.dataset.id);
    return;
  }
  if (pin.dataset.id === activeId && !cardEl.hidden) closeCard();
  else openCard(pin.dataset.id);
});

pinsEl.addEventListener("focusin", (event) => {
  const pin = event.target.closest(".pin");
  if (pin) openCard(pin.dataset.id);
});

// Клавиатурамен келесі элементке көшкенде карточка жабылады
mapEl.addEventListener("focusout", (event) => {
  const next = event.relatedTarget;
  if (next instanceof Element && next.closest(".pin")) return;
  closeCard();
});

listEl.addEventListener("click", (event) => {
  const link = event.target.closest(".place-link");
  if (!link) return;
  const id = link.dataset.id;
  openCard(id);

  const rect = mapEl.getBoundingClientRect();
  const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  if (!fullyVisible) {
    mapEl.scrollIntoView({
      behavior: "smooth",
      block: useSheet() ? "start" : "center",
    });
  }
});

closeBtn.addEventListener("click", closeCard);

document.addEventListener("click", (event) => {
  if (activeId === null) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (
    target.closest(".place-card") ||
    target.closest(".pin") ||
    target.closest(".place-link")
  )
    return;
  closeCard();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeId !== null) closeCard();
});

window.addEventListener("resize", () => {
  if (activeId !== null) layoutCard(byId(activeId));
});

if (narrowScreen.addEventListener)
  narrowScreen.addEventListener("change", () => {
    if (activeId !== null) layoutCard(byId(activeId));
  });
