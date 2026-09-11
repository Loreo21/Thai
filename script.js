/*
 * THAILANDIA 2026
 */

// ============================================================
// 1. COUNTDOWN
// ============================================================
// Data reale impostata sulla partenza indicata:
// 1 ottobre 2026 alle 21:00.
const departureDate = "2026-10-01T21:00:00";

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

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    message.textContent = "01 ottobre 2026 · ore 21:00";
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ============================================================
// 2. MENU MOBILE
// ============================================================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
});


// ============================================================
// 3. CHECKLIST
// ============================================================
const checkboxes = document.querySelectorAll("[data-check]");
const progress = document.getElementById("progress");
const progressText = document.getElementById("progress-text");

function updateChecklist() {
    let completed = 0;

    checkboxes.forEach(box => {
        const key = `thailandia-check-${box.dataset.check}`;
        box.checked = localStorage.getItem(key) === "true";

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


// ============================================================
// 4. MAPPA INTERATTIVA
// ============================================================
// Coordinate approssimative delle nostre tappe.
// Per Khao Sok viene usata la zona del parco / lago.
// La linea è volutamente "generale", come nella mappa originale.

const places = {
    chiangrai: {
        name: "Chiang Rai",
        date: "Tappa nel nord",
        coords: [19.9105, 99.8406],
        description: "Partenza nel nord della Thailandia."
    },
    chiangmai: {
        name: "Chiang Mai",
        date: "6–10 ottobre",
        coords: [18.7883, 98.9853],
        description: "Templi antichi, città storica e natura."
    },
    bangkok: {
        name: "Bangkok",
        date: "2–5 e 17–18 ottobre",
        coords: [13.7563, 100.5018],
        description: "La capitale: street food, templi e ultima notte."
    },
    surat: {
        name: "Surat Thani",
        date: "Trasferimento",
        coords: [9.1382, 99.3217],
        description: "Tappa di passaggio verso Khao Sok."
    },
    khaosok: {
        name: "Khao Sok",
        date: "10–12 ottobre",
        coords: [8.9120, 98.5290],
        description: "Giungla e natura del Parco Nazionale di Khao Sok."
    },
    aonang: {
        name: "Ao Nang",
        date: "12–17 ottobre",
        coords: [8.0340, 98.8390],
        description: "Relax tropicale, spiagge e isole."
    }
};

// Ordine effettivo del viaggio.
// Chiang Rai è incluso prima di Chiang Mai, mentre Bangkok compare
// sia all'inizio sia alla fine del percorso.
const route = [
    places.chiangrai.coords,
    places.chiangmai.coords,
    places.bangkok.coords,
    places.surat.coords,
    places.khaosok.coords,
    places.aonang.coords,
    places.bangkok.coords
];

const map = L.map("travel-map", {
    scrollWheelZoom: true
});

// Vista iniziale centrata sulla Thailandia.
map.setView([13.5, 100.0], 6);

// Mappa OpenStreetMap.
// Non serve una API key.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Disegna il percorso.
L.polyline(route, {
    color: "#0f766e",
    weight: 3,
    dashArray: "8 9",
    opacity: 0.85
}).addTo(map);

// Marker numerati.
const markerById = {};

function createNumberIcon(number) {
    return L.divIcon({
        className: "",
        html: `
            <div style="
                width:34px;
                height:34px;
                border-radius:50%;
                background:#0f766e;
                color:white;
                border:3px solid white;
                box-shadow:0 3px 10px rgba(0,0,0,.25);
                display:grid;
                place-items:center;
                font-weight:800;
                font-size:12px;
            ">${number}</div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18]
    });
}

const markerOrder = [
    ["chiangrai", 1],
    ["chiangmai", 2],
    ["bangkok", 3],
    ["surat", 4],
    ["khaosok", 5],
    ["aonang", 6]
];

markerOrder.forEach(([id, number]) => {
    const place = places[id];

    const marker = L.marker(place.coords, {
        icon: createNumberIcon(number)
    }).addTo(map);

    marker.bindPopup(`
        <div class="popup-title">${place.name}</div>
        <div class="popup-date">${place.date}</div>
        <p>${place.description}</p>
    `);

    markerById[id] = marker;
});

// Adatta automaticamente la mappa al percorso.
map.fitBounds(route, {
    padding: [35, 35]
});

// Cliccando una destinazione nella legenda,
// la mappa vola sul punto corrispondente.
document.querySelectorAll(".map-place").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.place;
        const place = places[id];

        map.flyTo(place.coords, 9, {
            duration: 1.2
        });

        markerById[id].openPopup();
    });
});
