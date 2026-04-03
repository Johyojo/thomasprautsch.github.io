// --- 1. NAVIGATION & BURGER-MENÜ ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle-Funktion für das Burger-Menü
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Menü automatisch schließen, wenn ein Link geklickt wird
document.querySelectorAll(".nav-link").forEach(link => 
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);


// --- 2. ERWEITERTE LIGHTBOX MIT SLIDER-FUNKTION ---
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");

// Wir laden alle Galerie-Bilder in ein Array, um darin blättern zu können
// Es erkennt sowohl die Vorschaubilder auf der Startseite als auch die in den Kategorien
const images = Array.from(document.querySelectorAll(".work-item img, .category-item img, .gallery-img"));
let currentIndex = 0;

// Event-Listener für jedes Bild zum Öffnen der Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", (e) => {
        // Verhindert, dass bei Kategorie-Links (Startseite) die Seite sofort wechselt
        if (img.closest('.category-item')) {
            // Wenn du willst, dass man auf der Startseite direkt zur HTML-Seite kommt, 
            // entferne das e.preventDefault(). Wenn die Lightbox dort auch kommen soll, lass es so.
            // e.preventDefault(); 
        }
        
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = "flex";
    });
});

// Funktion, die das Bild und den Text in der Lightbox aktualisiert
function updateLightbox() {
    const currentImg = images[currentIndex];
    lbImg.src = currentImg.src;
    captionText.innerHTML = currentImg.alt; // Nutzt den Alt-Tag als Beschriftung
}

// --- 3. STEUERUNG (Pfeile & Schließen) ---

// Klick auf den rechten Pfeil (Nächstes Bild)
document.querySelector(".next")?.addEventListener("click", (e) => {
    e.stopPropagation(); // Verhindert, dass die Lightbox schließt
    currentIndex = (currentIndex + 1) % images.length; // Geht am Ende wieder zu Bild 0
    updateLightbox();
});

// Klick auf den linken Pfeil (Vorheriges Bild)
document.querySelector(".prev")?.addEventListener("click", (e) => {
    e.stopPropagation(); // Verhindert, dass die Lightbox schließt
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Geht am Anfang zum letzten Bild
    updateLightbox();
});

// Schließen beim Klick auf das 'X'
document.querySelector(".close")?.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Schließen beim Klick auf den dunklen Hintergrund (aber nicht auf das Bild selbst)
lightbox.addEventListener("click", (e) => {
    if (e.target !== lbImg && e.target !== document.querySelector(".next") && e.target !== document.querySelector(".prev")) {
        lightbox.style.display = "none";
    }
});

// --- 4. TASTATUR-STEUERUNG ---
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            updateLightbox();
        }
        if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateLightbox();
        }
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});