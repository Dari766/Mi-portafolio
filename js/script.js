// Preferencia de tema claro/oscuro
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle?.querySelector("span");
const themeColorMeta = document.querySelector("#theme-color-meta");
function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const dark = theme === "dark";
    if (themeIcon) themeIcon.textContent = dark ? "☀" : "☾";
    if (themeToggle) {
        const label = dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
        themeToggle.setAttribute("aria-label", label);
        themeToggle.setAttribute("title", label);
    }
    if (themeColorMeta) themeColorMeta.content = dark ? "#0b0b0c" : "#f8fafc";
}
applyTheme(localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light");
themeToggle?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
});

// Traducciones del contenido del portafolio
const translations = {
es: {
"language.label":"Idioma","nav.home":"Inicio","nav.about":"Sobre mí","nav.experience":"Experiencia","nav.skills":"Habilidades","nav.projects":"Proyectos","nav.contact":"Contacto",
"hero.eyebrow":"PORTAFOLIO · DESARROLLO DE SOFTWARE","hero.greeting":"Hola, soy","hero.role":"Desarrolladora de Software Junior","hero.description":"Tecnóloga en Análisis y Desarrollo de Software. Tengo experiencia práctica en desarrollo de módulos, formularios, consultas SQL y pruebas de software. Busco oportunidades para crecer en desarrollo frontend y backend.","hero.projects":"Ver mis proyectos","hero.contact":"Contactarme",
"about.eyebrow":"CONÓCEME","about.title":"Sobre mí","about.p1":"Soy tecnóloga en <strong>Análisis y Desarrollo de Software</strong>, formada en el SENA. Me interesa construir soluciones tecnológicas útiles, aprender nuevas herramientas y participar en todas las etapas del desarrollo de software.","about.p2":"Durante mis prácticas participé en <strong>SAGI</strong>, un sistema orientado a la gestión de módulos y servicios institucionales. Allí realicé actividades de desarrollo, manejo de datos, elaboración de formularios, pruebas funcionales y documentación de resultados.","about.p3":"Me encuentro en búsqueda de oportunidades junior tanto en <strong>frontend</strong> como en <strong>backend</strong>, donde pueda aportar mis conocimientos y continuar fortaleciendo mis habilidades.",
"experience.eyebrow":"EXPERIENCIA PRÁCTICA","experience.title":"Lo que he realizado","experience.type":"Prácticas formativas","experience.heading":"Participación en el desarrollo de SAGI","experience.subtitle":"Sistema de gestión de módulos y servicios institucionales del SENA","experience.task1":"Desarrollo y ajuste de módulos del sistema.","experience.task2":"Elaboración y ejecución de consultas SQL.","experience.task3":"Creación y diligenciamiento de formularios.","experience.task4":"Ingreso y gestión de información en el sistema.","experience.task5":"Ejecución de pruebas de software para validar funcionalidades.","experience.task6":"Documentación de pruebas y registro de resultados.",
"skills.eyebrow":"CONOCIMIENTOS TÉCNICOS","skills.title":"Habilidades","skills.description":"Tecnologías y herramientas con las que he trabajado.","skills.languages":"Lenguajes","skills.web":"Desarrollo web","skills.databases":"Bases de datos","skills.processes":"Procesos de software",
"projects.eyebrow":"TRABAJO REALIZADO","projects.title":"Mis proyectos","projects.description":"Una muestra de proyectos en los que he participado y trabajado.","projects.sagi.type":"Experiencia de prácticas","projects.sagi.description":"Sistema orientado a la gestión de módulos y servicios institucionales del SENA. Durante mis prácticas participé en el desarrollo de módulos, consultas SQL, formularios, ingreso de datos y pruebas de software.","projects.sagi.link":"Conocer SAGI","projects.shoop.type":"Proyecto de formación","projects.shoop.description":"Proyecto CRUD enfocado en la gestión de inventarios y administración de ventas de productos, con funcionalidades para organizar la información y apoyar los procesos comerciales.","projects.shoop.link":"Conocer Shoop",
"contact.eyebrow":"HABLEMOS","contact.title":"Contacto","contact.description":"Estoy interesada en oportunidades junior de desarrollo frontend y backend. Puedes encontrarme en estos canales:","contact.email":"Correo electrónico","contact.github":"GitHub","contact.linkedin":"LinkedIn","contact.cv":"Descargar CV","footer.text":"Desarrollado con dedicación."
},
en: {
"language.label":"Language","nav.home":"Home","nav.about":"About me","nav.experience":"Experience","nav.skills":"Skills","nav.projects":"Projects","nav.contact":"Contact",
"hero.eyebrow":"PORTFOLIO · SOFTWARE DEVELOPMENT","hero.greeting":"Hi, I'm","hero.role":"Junior Software Developer","hero.description":"Software Analysis and Development technologist. I have practical experience developing modules and forms, writing SQL queries, and software testing. I am looking for opportunities to grow in frontend and backend development.","hero.projects":"View my projects","hero.contact":"Get in touch",
"about.eyebrow":"GET TO KNOW ME","about.title":"About me","about.p1":"I am a technologist in <strong>Software Analysis and Development</strong>, trained at SENA. I enjoy building useful technology solutions, learning new tools, and taking part in every stage of software development.","about.p2":"During my internship, I contributed to <strong>SAGI</strong>, a system for managing institutional modules and services. My tasks included development, data management, form creation, functional testing, and documenting results.","about.p3":"I am seeking junior opportunities in both <strong>frontend</strong> and <strong>backend</strong> development, where I can contribute my knowledge and continue strengthening my skills.",
"experience.eyebrow":"PRACTICAL EXPERIENCE","experience.title":"What I have done","experience.type":"Internship","experience.heading":"Contributed to SAGI development","experience.subtitle":"SENA system for managing institutional modules and services","experience.task1":"Developed and updated system modules.","experience.task2":"Wrote and executed SQL queries.","experience.task3":"Created and completed forms.","experience.task4":"Entered and managed information in the system.","experience.task5":"Performed software tests to validate features.","experience.task6":"Documented tests and recorded results.",
"skills.eyebrow":"TECHNICAL KNOWLEDGE","skills.title":"Skills","skills.description":"Technologies and tools I have worked with.","skills.languages":"Programming languages","skills.web":"Web development","skills.databases":"Databases","skills.processes":"Software processes",
"projects.eyebrow":"SELECTED WORK","projects.title":"My projects","projects.description":"A selection of projects I have contributed to and worked on.","projects.sagi.type":"Internship experience","projects.sagi.description":"A system for managing SENA institutional modules and services. During my internship, I contributed to module development, SQL queries, forms, data entry, and software testing.","projects.sagi.link":"Explore SAGI","projects.shoop.type":"Training project","projects.shoop.description":"A CRUD project focused on inventory management and product sales administration, with features to organize information and support business processes.","projects.shoop.link":"Explore Shoop",
"contact.eyebrow":"LET'S TALK","contact.title":"Contact","contact.description":"I am interested in junior frontend and backend development opportunities. You can reach me through these channels:","contact.email":"Email","contact.github":"GitHub","contact.linkedin":"LinkedIn","contact.cv":"Download résumé","footer.text":"Made with dedication."
},
pt: {
"language.label":"Idioma","nav.home":"Início","nav.about":"Sobre mim","nav.experience":"Experiência","nav.skills":"Habilidades","nav.projects":"Projetos","nav.contact":"Contato",
"hero.eyebrow":"PORTFÓLIO · DESENVOLVIMENTO DE SOFTWARE","hero.greeting":"Olá, sou","hero.role":"Desenvolvedora de Software Júnior","hero.description":"Tecnóloga em Análise e Desenvolvimento de Software. Tenho experiência prática no desenvolvimento de módulos e formulários, consultas SQL e testes de software. Busco oportunidades para crescer no desenvolvimento frontend e backend.","hero.projects":"Ver meus projetos","hero.contact":"Entre em contato",
"about.eyebrow":"CONHEÇA-ME","about.title":"Sobre mim","about.p1":"Sou tecnóloga em <strong>Análise e Desenvolvimento de Software</strong>, formada pelo SENA. Gosto de criar soluções tecnológicas úteis, aprender novas ferramentas e participar de todas as etapas do desenvolvimento de software.","about.p2":"Durante meu estágio, participei do <strong>SAGI</strong>, um sistema voltado à gestão de módulos e serviços institucionais. Realizei atividades de desenvolvimento, gerenciamento de dados, criação de formulários, testes funcionais e documentação de resultados.","about.p3":"Busco oportunidades júnior tanto em desenvolvimento <strong>frontend</strong> quanto <strong>backend</strong>, onde possa contribuir com meus conhecimentos e continuar aprimorando minhas habilidades.",
"experience.eyebrow":"EXPERIÊNCIA PRÁTICA","experience.title":"O que já realizei","experience.type":"Estágio","experience.heading":"Participação no desenvolvimento do SAGI","experience.subtitle":"Sistema do SENA para gestão de módulos e serviços institucionais","experience.task1":"Desenvolvimento e ajustes de módulos do sistema.","experience.task2":"Elaboração e execução de consultas SQL.","experience.task3":"Criação e preenchimento de formulários.","experience.task4":"Inserção e gerenciamento de informações no sistema.","experience.task5":"Execução de testes de software para validar funcionalidades.","experience.task6":"Documentação de testes e registro de resultados.",
"skills.eyebrow":"CONHECIMENTOS TÉCNICOS","skills.title":"Habilidades","skills.description":"Tecnologias e ferramentas com as quais já trabalhei.","skills.languages":"Linguagens","skills.web":"Desenvolvimento web","skills.databases":"Bancos de dados","skills.processes":"Processos de software",
"projects.eyebrow":"TRABALHOS REALIZADOS","projects.title":"Meus projetos","projects.description":"Uma seleção de projetos dos quais participei e nos quais trabalhei.","projects.sagi.type":"Experiência de estágio","projects.sagi.description":"Sistema voltado à gestão de módulos e serviços institucionais do SENA. Durante meu estágio, participei do desenvolvimento de módulos, consultas SQL, formulários, inserção de dados e testes de software.","projects.sagi.link":"Conhecer SAGI","projects.shoop.type":"Projeto de formação","projects.shoop.description":"Projeto CRUD focado na gestão de estoque e administração de vendas de produtos, com funcionalidades para organizar informações e apoiar processos comerciais.","projects.shoop.link":"Conhecer Shoop",
"contact.eyebrow":"VAMOS CONVERSAR","contact.title":"Contato","contact.description":"Tenho interesse em oportunidades júnior de desenvolvimento frontend e backend. Você pode me encontrar nestes canais:","contact.email":"E-mail","contact.github":"GitHub","contact.linkedin":"LinkedIn","contact.cv":"Baixar currículo","footer.text":"Desenvolvido com dedicação."
},
fr: {
"language.label":"Langue","nav.home":"Accueil","nav.about":"À propos","nav.experience":"Expérience","nav.skills":"Compétences","nav.projects":"Projets","nav.contact":"Contact",
"hero.eyebrow":"PORTFOLIO · DÉVELOPPEMENT LOGICIEL","hero.greeting":"Bonjour, je suis","hero.role":"Développeuse logiciel junior","hero.description":"Technologue en analyse et développement logiciel. J'ai une expérience pratique dans le développement de modules et de formulaires, les requêtes SQL et les tests logiciels. Je recherche des opportunités pour progresser en développement frontend et backend.","hero.projects":"Voir mes projets","hero.contact":"Me contacter",
"about.eyebrow":"FAITES MA CONNAISSANCE","about.title":"À propos","about.p1":"Je suis technologue en <strong>analyse et développement logiciel</strong>, formée au SENA. J'aime créer des solutions technologiques utiles, apprendre de nouveaux outils et participer à toutes les étapes du développement logiciel.","about.p2":"Pendant mon stage, j'ai participé à <strong>SAGI</strong>, un système destiné à la gestion des modules et services institutionnels. J'ai réalisé des tâches de développement, de gestion des données, de création de formulaires, de tests fonctionnels et de documentation des résultats.","about.p3":"Je recherche des opportunités junior en développement <strong>frontend</strong> et <strong>backend</strong> afin de contribuer avec mes connaissances et de continuer à renforcer mes compétences.",
"experience.eyebrow":"EXPÉRIENCE PRATIQUE","experience.title":"Mes réalisations","experience.type":"Stage","experience.heading":"Participation au développement de SAGI","experience.subtitle":"Système du SENA pour la gestion des modules et services institutionnels","experience.task1":"Développement et mise à jour des modules du système.","experience.task2":"Rédaction et exécution de requêtes SQL.","experience.task3":"Création et remplissage de formulaires.","experience.task4":"Saisie et gestion des informations dans le système.","experience.task5":"Réalisation de tests logiciels pour valider les fonctionnalités.","experience.task6":"Documentation des tests et enregistrement des résultats.",
"skills.eyebrow":"CONNAISSANCES TECHNIQUES","skills.title":"Compétences","skills.description":"Technologies et outils avec lesquels j'ai travaillé.","skills.languages":"Langages","skills.web":"Développement web","skills.databases":"Bases de données","skills.processes":"Processus logiciels",
"projects.eyebrow":"TRAVAUX RÉALISÉS","projects.title":"Mes projets","projects.description":"Une sélection de projets auxquels j'ai contribué et sur lesquels j'ai travaillé.","projects.sagi.type":"Expérience de stage","projects.sagi.description":"Système destiné à la gestion des modules et services institutionnels du SENA. Pendant mon stage, j'ai participé au développement de modules, aux requêtes SQL, aux formulaires, à la saisie de données et aux tests logiciels.","projects.sagi.link":"Découvrir SAGI","projects.shoop.type":"Projet de formation","projects.shoop.description":"Projet CRUD axé sur la gestion des stocks et l'administration des ventes de produits, avec des fonctionnalités pour organiser les informations et soutenir les processus commerciaux.","projects.shoop.link":"Découvrir Shoop",
"contact.eyebrow":"ÉCHANGEONS","contact.title":"Contact","contact.description":"Je suis intéressée par des opportunités junior en développement frontend et backend. Vous pouvez me retrouver sur ces canaux :","contact.email":"E-mail","contact.github":"GitHub","contact.linkedin":"LinkedIn","contact.cv":"Télécharger le CV","footer.text":"Réalisé avec engagement."
}
};

const languageSelect = document.querySelector("#language-select");
function applyLanguage(language) {
    const dictionary = translations[language] || translations.es;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = dictionary[element.dataset.i18n];
        if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const value = dictionary[element.dataset.i18nAria];
        if (value !== undefined) element.setAttribute("aria-label", value);
    });
    const label = dictionary["language.label"] || "Language";
    languageSelect?.setAttribute("aria-label", label);
    document.title = language === "en" ? "Dariana de la Cruz | Junior Software Developer" :
        language === "pt" ? "Dariana de la Cruz | Desenvolvedora de Software Júnior" :
        language === "fr" ? "Dariana de la Cruz | Développeuse logiciel junior" :
        "Dariana de la Cruz | Desarrolladora de Software Junior";
}
const savedLanguage = localStorage.getItem("portfolio-language") || "es";
if (languageSelect) {
    languageSelect.value = translations[savedLanguage] ? savedLanguage : "es";
    applyLanguage(languageSelect.value);
    languageSelect.addEventListener("change", () => {
        localStorage.setItem("portfolio-language", languageSelect.value);
        applyLanguage(languageSelect.value);
    });
}

// Menú de navegación accesible
document.documentElement.classList.add("js-enabled");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
function closeMenu() {
    navLinks?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menú");
}
menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Abrir menú" : "Cerrar menú");
    navLinks?.classList.toggle("active", !expanded);
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });

// Animaciones al entrar en pantalla
const revealElements = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealElements.forEach(element => observer.observe(element));
} else {
    revealElements.forEach(element => element.classList.add("is-visible"));
}
const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = new Date().getFullYear();

// Fondo de partículas opcional
const particlesContainer = document.querySelector("#particles-js");
if (particlesContainer && typeof window.particlesJS === "function" && !reduceMotion) {
    window.particlesJS("particles-js", {
        particles: {
            number: { value: 48, density: { enable: true, value_area: 900 } },
            color: { value: "#888888" }, shape: { type: "circle" },
            opacity: { value: 0.2 }, size: { value: 2 },
            line_linked: { enable: true, distance: 150, color: "#888888", opacity: 0.12, width: 1 },
            move: { enable: true, speed: 1.2 }
        },
        interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false }, resize: true } },
        retina_detect: true
    });
}
