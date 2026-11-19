// Habilita animaciones progresivas solo cuando JavaScript está disponible.
document.documentElement.classList.add("js-enabled");

// MENÚ DE NAVEGACIÓN
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
        navLinks.classList.toggle("active", !isExpanded);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
        }
    });
}

// ANIMACIONES AL ENTRAR EN PANTALLA
const revealElements = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}

// AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
const currentYear = document.querySelector("#current-year");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// FONDO DE PARTÍCULAS: si la biblioteca externa no carga, el sitio sigue funcionando.
const particlesContainer = document.querySelector("#particles-js");
if (
    particlesContainer &&
    typeof window.particlesJS === "function" &&
    !reduceMotion
) {
    window.particlesJS("particles-js", {
        particles: {
            number: { value: 48, density: { enable: true, value_area: 900 } },
            color: { value: "#38bdf8" },
            shape: { type: "circle" },
            opacity: { value: 0.28 },
            size: { value: 2 },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#38bdf8",
                opacity: 0.18,
                width: 1
            },
            move: { enable: true, speed: 1.2 }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: false },
                onclick: { enable: false },
                resize: true
            }
        },
        retina_detect: true
    });
}