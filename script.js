/* =====================
   TRADUÇÃO PT / EN
===================== */

const translations = {
  pt: {
    /* NAV */
    home: "Home",
    about: "Sobre Mim",
    skills: "Habilidades",
    languages: "Tecnologias",
    projects: "Projetos",
    contact: "Contato",

    /* HOME */
    role: "Web & Mobile Developer",
    homeDescription:
      "Desenvolvedora Web e Mobile focada na criação de interfaces modernas e responsivas.",
    viewProjects: "Ver projetos",

    /* ABOUT */
    aboutTitle: "Sobre Mim",
    aboutSubtitle: "Sobre Mim",

    aboutP1:
      "Sou desenvolvedora Web e Mobile, formada tecnicamente em Tecnologia da Informação pelo Colégio Cotemig. Atuo no desenvolvimento de interfaces web e mobile, com foco na conversão de layouts do Figma para HTML e CSS responsivos, sempre prezando pela fidelidade ao design e pela boa experiência do usuário.",

    aboutP2:
      "Tenho experiência com tecnologias como HTML, CSS, JavaScript, TypeScript, Flutter, SwiftUI e desenvolvimento Android, além de versionamento de código com Git e GitHub.",

    aboutP3:
      "Sou uma profissional dedicada, responsável e comprometida com prazos. Estou em constante aprendizado e busco oportunidades para crescer como desenvolvedora.",

    /* PROJECTS */
    projectsTitle: "Projetos",
    projectsSubtitle: "Meus Projetos",

    project1Title: "Loja de Bijuterias",
    project1Desc:
      "Conversão de layout do Figma para HTML e CSS responsivo, mantendo fidelidade ao design.",

    project2Title: "Landing Page",
    project2Desc:
      "Landing page responsiva para apresentação de serviços, focada em performance e clareza.",

    viewSite: "Ver site",

    /* CONTACT */
    contactTitle: "Contato",
    contactSubtitle: "Entre em contato",

    whatsapp: "WhatsApp",
    email: "Email",
    availableAfterContract: "Disponível após contrato"
  },

  en: {
    /* NAV */
    home: "Home",
    about: "About Me",
    skills: "Skills",
    languages: "Languages",
    projects: "Projects",
    contact: "Contact",

    /* HOME */
    role: "Web & Mobile Developer",
    homeDescription:
      "Web and Mobile Developer focused on creating modern and responsive interfaces.",
    viewProjects: "View projects",

    /* ABOUT */
    aboutTitle: "About Me",
    aboutSubtitle: "About Me",

    aboutP1:
      "I am a Web and Mobile Developer, technically graduated in Information Technology from Colégio Cotemig. I work with web and mobile interface development, focusing on converting Figma layouts into responsive HTML and CSS.",

    aboutP2:
      "I have experience with HTML, CSS, JavaScript, TypeScript, Flutter, SwiftUI, Android development, and version control using Git and GitHub.",

    aboutP3:
      "I am a dedicated and responsible professional, constantly learning and seeking opportunities to grow as a developer.",

    /* PROJECTS */
    projectsTitle: "Projects",
    projectsSubtitle: "My Projects",

    project1Title: "Jewelry Store",
    project1Desc:
      "Figma to responsive HTML and CSS conversion, maintaining design fidelity.",

    project2Title: "Landing Page",
    project2Desc:
      "Responsive landing page for service presentation, focused on performance and clarity.",

    viewSite: "View site",

    /* CONTACT */
    contactTitle: "Contact",
    contactSubtitle: "Get in touch",

    whatsapp: "WhatsApp",
    email: "Email",
    availableAfterContract: "Available after contract"
  }
};

/* =====================
   FUNÇÃO DE IDIOMA
===================== */
function setLanguage(lang) {
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

/* =====================
   CARREGAR IDIOMA SALVO
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "pt";
  setLanguage(savedLang);
});

/* =====================
   ANIMAÇÃO AO ROLAR
===================== */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll(".section, .project, .lang-card, .skills li, .about-text")
  .forEach(el => observer.observe(el));
