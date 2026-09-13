// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Window minimize / close
document.querySelectorAll("[data-window]").forEach((win) => {
  const minBtn = win.querySelector('[data-action="minimize"]');
  const closeBtn = win.querySelector('[data-action="close"]');

  minBtn?.addEventListener("click", () => {
    win.classList.toggle("is-minimized");
  });

  closeBtn?.addEventListener("click", () => {
    win.classList.add("is-closed");
    showReopenChip(win);
  });
});

function showReopenChip(win) {
  const title = win.querySelector(".window-title")?.textContent?.trim() || "window";
  const chip = document.createElement("button");
  chip.className = "btn btn-ghost btn-sm reopen-chip";
  chip.style.cssText =
    "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:60;";
  chip.textContent = `Reopen ${title} ↺`;
  chip.addEventListener("click", () => {
    win.classList.remove("is-closed");
    chip.remove();
  });
  document.body.appendChild(chip);
  setTimeout(() => chip.remove(), 6000);
}

// Dock navigation
document.querySelectorAll(".dock-item[data-target]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    if (!target) return;
    target.classList.remove("is-closed", "is-minimized");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Mobile hamburger
const hamburger = document.getElementById("hamburger");
const topbar = document.querySelector(".topbar");
hamburger?.addEventListener("click", () => {
  topbar.classList.toggle("nav-open");
});
document.querySelectorAll(".topnav a").forEach((link) => {
  link.addEventListener("click", () => topbar.classList.remove("nav-open"));
});

// Recycle bin easter egg
const recycleIcon = document.getElementById("recycleIcon");
const recycleModal = document.getElementById("recycleModal");
const recycleClose = document.getElementById("recycleClose");
recycleIcon?.addEventListener("click", () => recycleModal.classList.add("is-open"));
recycleClose?.addEventListener("click", () => recycleModal.classList.remove("is-open"));
recycleModal?.addEventListener("click", (e) => {
  if (e.target === recycleModal) recycleModal.classList.remove("is-open");
});
