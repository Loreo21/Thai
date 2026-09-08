
const departureDate = "202-10-01T21:00:00";

// ---------------- COUNTDOWN ----------------
function updateCountdown() {
    const target = new Date(departureDate).getTime();
    const now = Date.now();
    const difference = target - now;

    const message = document.getElementById("countdown-message");

    if (Number.isNaN(target)) {
        message.textContent = "Data non valida: controlla departureDate in script.js.";
        return;
    }

    if (difference <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        message.textContent = "SI PARTE! 🇹🇭";
        return;
    }

    const seconds = Math.floor(difference / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(secs).padStart(2, "0");
    message.textContent = "Manca sempre meno. 🌴";
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---------------- MOBILE MENU ----------------
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ---------------- CHECKLIST ----------------
// Le caselle vengono salvate nel localStorage del browser.
const checkboxes = document.querySelectorAll("[data-check]");
const progress = document.getElementById("progress");
const progressText = document.getElementById("progress-text");

function updateChecklist() {
    let completed = 0;

    checkboxes.forEach(box => {
        const key = `thailandia-check-${box.dataset.check}`;
        const saved = localStorage.getItem(key) === "true";
        box.checked = saved;

        if (box.checked) completed++;
    });

    const percentage = Math.round((completed / checkboxes.length) * 100);
    progress.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;
}

checkboxes.forEach(box => {
    box.addEventListener("change", () => {
        const key = `thailandia-check-${box.dataset.check}`;
        localStorage.setItem(key, box.checked);
        updateChecklist();
    });
});

updateChecklist();

// ---------------- MODAL ----------------
function showTip(title, text) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-text").textContent = text;
    document.getElementById("tip-modal").classList.add("open");
}

function closeTip() {
    document.getElementById("tip-modal").classList.remove("open");
}

document.getElementById("tip-modal").addEventListener("click", (event) => {
    if (event.target.id === "tip-modal") closeTip();
});
