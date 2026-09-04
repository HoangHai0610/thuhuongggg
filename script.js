const sketch = (content) => `
  <svg class="sketch-svg" viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg">
    ${content}
  </svg>`;

const SKETCHES = {
  meet: sketch(`
    <path class="sketch-wash" d="M26 104c14-55 70-78 116-48 35-29 103-14 124 34 16 36-31 52-98 50-88-2-151 4-142-36Z"/>
    <circle cx="84" cy="73" r="34"/><circle cx="61" cy="45" r="12"/><circle cx="107" cy="45" r="12"/>
    <circle cx="82" cy="72" r="2"/><circle cx="97" cy="72" r="2"/><path d="M87 82q6 7 12 0"/>
    <ellipse cx="211" cy="76" rx="34" ry="32"/><ellipse cx="196" cy="35" rx="10" ry="29"/><ellipse cx="224" cy="35" rx="10" ry="29"/>
    <circle cx="201" cy="73" r="2"/><circle cx="216" cy="73" r="2"/><path d="M205 83q6 7 12 0"/>
    <rect x="130" y="83" width="42" height="28" rx="5"/><circle cx="151" cy="97" r="9"/><path d="m139 83 5-8h13l5 8M151 68v-9m-8 4 8-4 8 4"/>
  `),
  lunch: sketch(`
    <path class="sketch-wash" d="M29 91c13-42 66-64 111-35 46-32 111-7 127 36 12 32-20 53-107 51-96-1-142-13-131-52Z"/>
    <ellipse cx="102" cy="92" rx="58" ry="34"/><ellipse cx="102" cy="92" rx="42" ry="21"/>
    <path d="M73 88q14-17 29 0t28 0M70 99q16 12 31 0t31 0"/>
    <path d="M180 55v76m-10-76v24m10-24v24m10-24v24M224 58v73m-10-73c0 19 20 19 20 0"/>
    <path d="M84 46q-11-13 1-23m18 23q-11-13 1-23m18 23q-11-13 1-23"/>
  `),
  walk: sketch(`
    <path class="sketch-wash" d="M23 116c35-51 57-48 92-25 33-60 111-70 153-4 27 43-41 56-122 55-69-1-143 7-123-26Z"/>
    <path d="M35 112h230M48 111V66h38v45m9 0V43h49v68m9 0V71h35v40m10 0V54h57v57"/>
    <path d="M60 83h12m-12 15h12m52-37h-12m12 17h-12m62 10h-10m58-17h-16m16 18h-16"/>
    <ellipse cx="111" cy="129" rx="9" ry="5" transform="rotate(-18 111 129)"/><ellipse cx="140" cy="121" rx="9" ry="5" transform="rotate(16 140 121)"/>
    <ellipse cx="169" cy="132" rx="9" ry="5" transform="rotate(-18 169 132)"/><ellipse cx="198" cy="123" rx="9" ry="5" transform="rotate(16 198 123)"/>
    <path d="M32 39q19-22 38 0m159 3q17-20 34 0"/>
  `),
  coffee: sketch(`
    <path class="sketch-wash" d="M30 91c5-46 59-61 112-34 47-27 114-3 126 39 11 39-44 49-117 47-76-2-126-10-121-52Z"/>
    <path d="M55 63h72l-8 67H64l-9-67Zm7 15h59M75 31l11 32m19-40-5 40"/>
    <path d="M178 84h64v46h-64zM242 94q31 2 15 25-6 8-15 4"/>
    <path d="M184 84q9-14 18 0t18 0 18 0M197 66q-10-12 0-23m22 23q-10-12 0-23"/>
    <path d="M137 130h34l-9-38h-16l-9 38Zm7-18h21"/>
  `),
  badminton: sketch(`
    <path class="sketch-wash" d="M20 104c18-56 72-76 124-41 47-35 110-4 136 42 20 36-46 43-131 41-86-2-141-4-129-42Z"/>
    <path d="M145 50v93m10-93v93M145 61h10m-10 14h10m-10 14h10m-10 14h10m-10 14h10m-10 14h10"/>
    <ellipse cx="80" cy="82" rx="29" ry="40" transform="rotate(-28 80 82)"/>
    <path d="m98 116 24 31M61 54l42 57M51 70l50 28M55 91l34 12"/>
    <ellipse cx="224" cy="88" rx="29" ry="40" transform="rotate(30 224 88)"/>
    <path d="m205 121-21 27m62-87-43 54m49-36-51 25m47-4-35 12"/>
    <path d="m151 23-11 19h22l-11-19Zm-8-3 8 3 8-3M37 135h96m35 0h96"/>
  `),
};

const CONFIG = {
  invitee: "Thu Hương",
  date: "2026-09-05T10:00:00+07:00",
  reply: "Em đồng ý trốn làm đi chơi cùng anh ngày mai nha 🌼",
  plans: [
    { time: "10:00", spokenTime: "10 giờ", title: "Gặp nhau nè", description: "Check-in trạm đầu tiên, chính thức bật chế độ trốn deadline.", secret: "mật mã: không nhắc chuyện công việc", sketch: "meet", sticker: "✦", accent: "#f29ab2", tape: "#f5b3c5" },
    { time: "12:00", spokenTime: "12 giờ", title: "Ăn trưa thui", description: "Nạp năng lượng bằng đồ ngon. Công việc có thể chờ, bụng đói thì không.", secret: "nhiệm vụ: gọi món em thích", sketch: "lunch", sticker: "☻", accent: "#efbd42", tape: "#f3d36d" },
    { time: "14:00", spokenTime: "14 giờ", title: "Lang thang phố", description: "Đi dạo, hóng gió và thu thập vài tấm ảnh làm bằng chứng ngoại phạm.", secret: "thử thách: chụp một ảnh thật xinh", sketch: "walk", sticker: "☁", accent: "#69bce9", tape: "#8ac8ea" },
    { time: "16:00", spokenTime: "16 giờ", title: "Cà phê tám chuyện", description: "Uống gì đó ngon ngon, kể chuyện linh tinh và cười hơi nhiều một chút.", secret: "luật chơi: deadline bị cấm nhắc tới", sketch: "coffee", sticker: "♫", accent: "#aa86e8", tape: "#b9a0e8" },
    { time: "18:00", spokenTime: "18 giờ", title: "Đi đánh cầu lông", description: "Thay đồ, khởi động và ra sân. Chặng cuối là xem ai phải đi nhặt cầu nhiều hơn.", secret: "luật chơi: thua không được đổ tại gió", sketch: "badminton", sticker: "✦", accent: "#8bcf58", tape: "#a7d879" },
  ],
};

const root = document.documentElement;
const rail = document.querySelector("#timeline-rail");
rail.setAttribute("aria-valuemax", String(CONFIG.plans.length));
CONFIG.plans.forEach((plan, index) => {
  const dot = document.createElement("button");
  dot.className = `timeline-dot${index === 0 ? " is-active" : ""}`;
  dot.type = "button";
  dot.dataset.index = String(index);
  dot.setAttribute("aria-label", plan.spokenTime);
  dot.style.setProperty("--dot-position", String(index / (CONFIG.plans.length - 1)));
  rail.insertBefore(dot, document.querySelector("#flower-thumb"));
});
const dots = [...document.querySelectorAll(".timeline-dot")];
const planCard = document.querySelector(".plan-card");
const planPhoto = document.querySelector("#plan-photo");
const planSketch = document.querySelector("#plan-sketch");
const planSticker = document.querySelector("#plan-sticker");
const planNumber = document.querySelector("#plan-number");
const planTime = document.querySelector("#plan-time");
const planTitle = document.querySelector("#plan-title");
const planDescription = document.querySelector("#plan-description");
const planSecret = document.querySelector("#plan-secret");
const timelineCount = document.querySelector("#timeline-count");
const successDialog = document.querySelector("#success-dialog");
const shareNote = document.querySelector("#share-note");
let activeIndex = 0;
let isDragging = false;

document.querySelectorAll("[data-invitee]").forEach((element) => {
  element.textContent = CONFIG.invitee;
});

function formatInvitationDate() {
  const date = new Date(CONFIG.date);
  const weekday = new Intl.DateTimeFormat("vi-VN", { weekday: "long" }).format(date);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  document.querySelector("#date-day").textContent = String(date.getDate()).padStart(2, "0");
  document.querySelector("#date-weekday").textContent = weekday;
  document.querySelector("#date-month-year").textContent = `Tháng ${month} · ${year}`;
}

function setTimeline(index, exactProgress = null) {
  const safeIndex = Math.max(0, Math.min(CONFIG.plans.length - 1, index));
  const plan = CONFIG.plans[safeIndex];
  const progress = exactProgress ?? safeIndex / (CONFIG.plans.length - 1);
  const didChange = safeIndex !== activeIndex;

  activeIndex = safeIndex;
  root.style.setProperty("--progress", progress.toFixed(4));
  dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === safeIndex));

  planNumber.textContent = String(safeIndex + 1).padStart(2, "0");
  planTime.textContent = plan.time;
  planTitle.textContent = plan.title;
  planDescription.textContent = plan.description;
  planSecret.textContent = plan.secret;
  planSketch.innerHTML = SKETCHES[plan.sketch];
  planSticker.textContent = plan.sticker;
  planCard.style.setProperty("--accent", plan.accent);
  planCard.style.setProperty("--tape", plan.tape);
  planPhoto.setAttribute("aria-label", `Minh hoạ: ${plan.title}`);
  timelineCount.textContent = `${safeIndex + 1} / ${CONFIG.plans.length}`;

  rail.setAttribute("aria-valuenow", String(safeIndex + 1));
  rail.setAttribute("aria-valuetext", `${plan.spokenTime}, ${plan.title}`);

  if (didChange) {
    planCard.classList.remove("is-changing");
    void planCard.offsetWidth;
    planCard.classList.add("is-changing");
    if (navigator.vibrate) navigator.vibrate(12);
  }
}

function progressFromPointer(event) {
  const rect = rail.getBoundingClientRect();
  return Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
}

function moveWithPointer(event) {
  const progress = progressFromPointer(event);
  const index = Math.round(progress * (CONFIG.plans.length - 1));
  setTimeline(index, progress);
}

rail.addEventListener("pointerdown", (event) => {
  isDragging = true;
  rail.classList.add("is-dragging");
  rail.setPointerCapture(event.pointerId);
  moveWithPointer(event);
});

rail.addEventListener("pointermove", (event) => {
  if (isDragging) moveWithPointer(event);
});

rail.addEventListener("pointerup", (event) => {
  isDragging = false;
  rail.classList.remove("is-dragging");
  if (rail.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId);
  setTimeline(activeIndex);
});

rail.addEventListener("pointercancel", () => {
  isDragging = false;
  rail.classList.remove("is-dragging");
  setTimeline(activeIndex);
});

rail.addEventListener("keydown", (event) => {
  if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
  event.preventDefault();

  if (event.key === "Home") setTimeline(0);
  else if (event.key === "End") setTimeline(CONFIG.plans.length - 1);
  else if (event.key === "ArrowDown" || event.key === "ArrowRight") setTimeline(activeIndex + 1);
  else setTimeline(activeIndex - 1);
});

dots.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    event.stopPropagation();
    setTimeline(Number(dot.dataset.index));
  });
});

document.querySelector("#review-button").addEventListener("click", () => {
  document.querySelector(".timeline-section").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => rail.focus({ preventScroll: true }), 650);
});

document.querySelector("#yes-button").addEventListener("click", () => {
  if (typeof successDialog.showModal === "function") successDialog.showModal();
  else successDialog.setAttribute("open", "");
});

document.querySelector("#dialog-close").addEventListener("click", () => {
  successDialog.close();
});

successDialog.addEventListener("click", (event) => {
  const rect = successDialog.getBoundingClientRect();
  const isOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
  if (isOutside) successDialog.close();
});

document.querySelector("#share-button").addEventListener("click", async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: "Câu trả lời của Thu Hương",
        text: CONFIG.reply,
      });
      shareNote.textContent = "Đã mở ứng dụng nhắn tin rồi nè 🌼";
      return;
    }

    await navigator.clipboard.writeText(CONFIG.reply);
    shareNote.textContent = "Đã sao chép câu trả lời — em dán vào Messenger nhé!";
  } catch (error) {
    if (error.name !== "AbortError") {
      shareNote.textContent = `Em nhắn anh câu này nhé: “${CONFIG.reply}”`;
    }
  }
});

formatInvitationDate();
setTimeline(0);

// Tiện cho việc chụp/kiểm tra từng phần: thêm ?view=timeline hoặc ?view=answer.
const previewParams = new URLSearchParams(window.location.search);
const previewView = previewParams.get("view");
const previewStep = Number(previewParams.get("step"));
const previewTargets = {
  letter: ".letter",
  timeline: ".timeline-section",
  answer: ".answer-section",
};

if (previewTargets[previewView]) {
  document.body.classList.add(`preview-${previewView}`);
}

if (previewView === "timeline" && Number.isInteger(previewStep)) {
  setTimeline(previewStep);
}
