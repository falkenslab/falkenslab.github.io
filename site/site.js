// Falken's Lab's home page: English and Spanish, light, dark or the system's theme, and the projects as
// cards with filter chips. Every element with data-text="key" takes TEXTS[lang][key] (HTML allowed in "intro").
const TEXTS = {
  en: {
    language: "Language", theme: "Theme", themes: { light: "Light", dark: "Dark", system: "System" },
    projects: "Projects", notebook: "Notebook", explore: "Explore the projects", exploreShort: "Explore",
    title: "Open tools for AI agents",
    intro: "Falken's Lab is an independent AI research lab. We build open-source agents, MCP servers and libraries, many of them for teaching and <a href=\"https://moodle.org\" target=\"_blank\" rel=\"noopener\">Moodle</a>, and we write up every experiment in <a href=\"https://falkenslab.github.io/falkens-notebook/\">Dr. Falken's notebook</a>.",
    what1Title: "Agents that do the work", what1: "Assistants that grade with your rubric, answer the forum or build a course, and a foundation to build your own.",
    what2Title: "MCP servers", what2: "Moodle, H5P or Docker within reach of any agent: Claude, Codex or yours, with modes and limits you choose.",
    what3Title: "Research in the open", what3: "Experiments, measurements and lessons learned, published as they happen in the lab's notebook.",
    projectsLabel: "Projects", projectsTitle: "What's coming out of the lab",
    projectsIntro: "Each one has its own site, with its documentation in English and Spanish.",
    all: "All repositories on GitHub", moreTitle: "More from the lab", repo: "Repository on GitHub",
    categories: { all: "All", agents: "Agents", mcp: "MCP servers", moodle: "Moodle", libraries: "Libraries", research: "Research" },
  },
  es: {
    language: "Idioma", theme: "Tema", themes: { light: "Claro", dark: "Oscuro", system: "Sistema" },
    projects: "Proyectos", notebook: "Cuaderno", explore: "Ver los proyectos", exploreShort: "Explorar",
    title: "Herramientas abiertas para agentes de IA",
    intro: "Falken's Lab es un laboratorio independiente de investigación en IA. Creamos agentes, servidores MCP y librerías de código abierto, muchos pensados para la docencia y <a href=\"https://moodle.org\" target=\"_blank\" rel=\"noopener\">Moodle</a>, y contamos cada experimento en el <a href=\"https://falkenslab.github.io/falkens-notebook/\">cuaderno del Dr. Falken</a>.",
    what1Title: "Agentes que hacen el trabajo", what1: "Asistentes que corrigen con tu rúbrica, atienden el foro o montan un curso, y una base para construir los tuyos.",
    what2Title: "Servidores MCP", what2: "Moodle, H5P o Docker al alcance de cualquier agente: Claude, Codex o el tuyo, con los modos y límites que elijas.",
    what3Title: "Investigación en abierto", what3: "Experimentos, mediciones y lecciones aprendidas, publicados según ocurren en el cuaderno del laboratorio.",
    projectsLabel: "Proyectos", projectsTitle: "Lo que sale del laboratorio",
    projectsIntro: "Cada uno tiene su propio sitio, con su documentación en inglés y en español.",
    all: "Todos los repositorios en GitHub", moreTitle: "Más del laboratorio", repo: "Repositorio en GitHub",
    categories: { all: "Todos", agents: "Agentes", mcp: "Servidores MCP", moodle: "Moodle", libraries: "Librerías", research: "Investigación" },
  },
};

// The featured projects, in the order they show. logoDark only when the logo has a variant for the dark theme;
// a tag that is a word, not a name, comes in both languages.
const PROJECTS = [
  {
    name: "miyagi", logo: "img/miyagi.svg", logoDark: "img/miyagi-dark.svg", categories: ["agents", "moodle"],
    kind: { en: "AI assistant for teachers", es: "Asistente de IA para docentes" },
    desc: {
      en: "You teach, miyagi does the rest: in your Moodle course, it grades with your rubric, answers the forum, builds units and quizzes, and tells you how the class is doing.",
      es: "Tú enseñas y miyagi se ocupa del resto: en tu curso de Moodle, corrige con tu rúbrica, atiende el foro, monta temas y cuestionarios y te dice cómo va la clase.",
    },
    tags: ["Moodle", "Claude Agent SDK"],
  },
  {
    name: "moodle-mcp", logo: "img/moodle-mcp.svg", categories: ["mcp", "moodle"],
    kind: { en: "MCP server", es: "Servidor MCP" },
    desc: {
      en: "Let an AI agent work in your Moodle courses as you, with your own login. Your students stay anonymous to the AI, and you decide what it can do.",
      es: "Deja que un agente de IA trabaje en tus cursos de Moodle como tú, con tu propio acceso. Tus estudiantes siguen siendo anónimos para la IA, y tú decides qué puede hacer.",
    },
    tags: ["Moodle", "MCP"],
  },
  {
    name: "moodle-driver", logo: "img/moodle-driver.svg", categories: ["libraries", "moodle"],
    kind: { en: "Library and CLI", es: "Librería y CLI" },
    desc: {
      en: "Node.js library and command line for full control of Moodle as any user, with their own login: no web services, no tokens, no admin.",
      es: "Librería de Node.js y línea de comandos para controlar Moodle por completo como cualquier usuario, con su propio acceso: sin servicios web, sin tokens, sin administrador.",
    },
    tags: ["Moodle", "Node.js", "CLI"],
  },
  {
    name: "agent-kit", logo: "img/agent-kit.svg", logoDark: "img/agent-kit-dark.svg", categories: ["agents", "libraries"],
    kind: { en: "Agent foundation", es: "Base para agentes" },
    desc: {
      en: "A foundation for building AI agents on top of the Claude Agent SDK: human oversight, safety, memory and a good terminal, solved once, so each agent only writes its own domain.",
      es: "Una base para construir agentes de IA sobre el Claude Agent SDK: supervisión humana, seguridad, memoria y un buen terminal, resueltos una vez, para que cada agente solo escriba lo suyo.",
    },
    tags: ["Claude Agent SDK", "TypeScript"],
  },
  {
    name: "agent-extensions", logo: "img/agent-extensions.svg", logoDark: "img/agent-extensions-dark.svg", categories: ["agents"],
    kind: { en: "Extensions and plugins", es: "Extensiones y plugins" },
    desc: {
      en: "Extensions for Claude Code, Codex and agents built on agent-kit: the same folder for all. Install one, and your agent gains its tools, its skills and the know-how to use them.",
      es: "Extensiones para Claude Code, Codex y los agentes hechos con agent-kit: la misma carpeta para todos. Instala una y tu agente gana sus herramientas, sus skills y el saber usarlas.",
    },
    tags: ["Claude Code", "Codex", "agent-kit"],
  },
  {
    name: "h5p-mcp", logo: "img/h5p-mcp.svg", categories: ["mcp"],
    kind: { en: "MCP server", es: "Servidor MCP" },
    desc: {
      en: "Your AI agent writes interactive H5P content, as a package ready to upload: multiple choice, fill in the blanks, cards, question sets and more, built and checked on your computer.",
      es: "Tu agente de IA escribe contenido H5P interactivo, como un paquete listo para subir: opción múltiple, rellenar huecos, tarjetas, baterías de preguntas y más, creado y validado en tu equipo.",
    },
    tags: ["H5P", "MCP", "eLearning"],
  },
  {
    name: "docker-mcp", logo: "img/docker-mcp.svg", categories: ["mcp"],
    kind: { en: "MCP server", es: "Servidor MCP" },
    desc: {
      en: "Your AI agent works Docker for you: containers, images, Compose and practice labs, with modes chosen at startup: only read, only safe labs, or everything.",
      es: "Tu agente de IA maneja Docker por ti: contenedores, imágenes, Compose y laboratorios de prácticas, con modos elegidos al arrancar: solo leer, solo laboratorios seguros, o todo.",
    },
    tags: ["Docker", "MCP"],
  },
  {
    name: "pseudonym", logo: "img/pseudonym.svg", logoDark: "img/pseudonym-dark.svg", categories: ["libraries"],
    kind: { en: "Library", es: "Librería" },
    desc: {
      en: "A pseudonymization library for AI tools: let them talk about people without ever naming them.",
      es: "Una librería de seudonimización para herramientas de IA: que hablen de personas sin llegar a nombrarlas nunca.",
    },
    tags: [{ en: "Privacy", es: "Privacidad" }, "TypeScript"],
  },
  {
    name: "falkens-notebook", logo: "img/logo.svg", categories: ["research"],
    kind: { en: "Lab notebook", es: "Cuaderno de laboratorio" },
    desc: {
      en: "Dr. Falken's lab notebook: ideas, concepts and reflections on AI, and the experiments and results of our small applied AI lab.",
      es: "El cuaderno de laboratorio del Dr. Falken: ideas, conceptos y reflexiones sobre la IA, y los experimentos y resultados de nuestro pequeño laboratorio de IA aplicada.",
    },
    tags: [{ en: "Experiments", es: "Experimentos" }, "LLM"],
  },
];

// Smaller repositories, listed under the cards.
const MORE = [
  { name: "moodle-sandbox", desc: { en: "A real Moodle in Docker with seeded courses, to test programs and agents that work with Moodle.", es: "Un Moodle real en Docker con cursos de ejemplo, para probar programas y agentes que trabajan con Moodle." } },
  { name: "mcp-server-template", desc: { en: "The starting point for the lab's MCP servers: one bundled file, tests and docs in English and Spanish.", es: "El punto de partida de los servidores MCP del laboratorio: un único fichero, tests y docs en inglés y español." } },
  { name: "katalog", desc: { en: "A shared catalog of teaching activities (katas) for AI agents, through MCP: search, pull and push.", es: "Catálogo compartido de actividades educativas (katas) para agentes de IA, vía MCP: search, pull y push." } },
  { name: "minispec", desc: { en: "A lightweight specification standard for AI-assisted software development.", es: "Un estándar ligero de especificación para el desarrollo de software asistido por IA." } },
];

const GITHUB_ICON = document.querySelector(".gh svg").outerHTML;

function stored(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
// ?lang=es, else what the person chose last time, else the browser's language, else English.
function pickLang() {
  const params = new URLSearchParams(location.search);
  for (const lang of [params.get("lang"), stored("lang"), ...(navigator.languages ?? [navigator.language])]) {
    const short = String(lang ?? "").slice(0, 2).toLowerCase();
    if (short in TEXTS) return short;
  }
  return "en";
}
let lang = pickLang();
const t = (key) => TEXTS[lang][key];

// Light, dark or the system's; the choice is remembered (the head applies it before painting).
let theme = ["light", "dark"].includes(stored("theme")) ? stored("theme") : "system";
function applyTheme() {
  if (theme === "system") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme;
  for (const button of document.querySelectorAll("[data-theme-choice]")) {
    const choice = button.dataset.themeChoice;
    button.setAttribute("aria-pressed", String(choice === theme));
    button.title = t("themes")[choice];
    button.setAttribute("aria-label", t("themes")[choice]);
  }
}
for (const button of document.querySelectorAll("[data-theme-choice]")) {
  button.addEventListener("click", () => {
    theme = button.dataset.themeChoice;
    try { theme === "system" ? localStorage.removeItem("theme") : localStorage.setItem("theme", theme); } catch {}
    applyTheme();
  });
}

const escape = (text) => text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const site = (name) => `https://falkenslab.github.io/${name}/`;
const repo = (name) => `https://github.com/falkenslab/${name}`;

// The filter chips: a category per chip, "all" first; the chosen one is kept across languages.
let category = "all";
function renderChips() {
  const used = new Set(PROJECTS.flatMap((project) => project.categories));
  const keys = ["all", ...Object.keys(t("categories")).filter((key) => used.has(key))];
  const chips = document.getElementById("chips");
  chips.innerHTML = keys.map((key) =>
    `<button type="button" class="chip${key === category ? " on" : ""}" data-category="${key}" aria-pressed="${key === category}">${t("categories")[key]}</button>`).join("");
  for (const chip of chips.querySelectorAll(".chip")) {
    chip.addEventListener("click", () => { category = chip.dataset.category; renderChips(); renderCards(); });
  }
}

function logo(project) {
  if (!project.logoDark) return `<img class="logo" src="${project.logo}" alt="" width="48" height="48">`;
  return `<img class="logo only-light" src="${project.logo}" alt="" width="48" height="48"><img class="logo only-dark" src="${project.logoDark}" alt="" width="48" height="48">`;
}

function renderCards() {
  const shown = PROJECTS.filter((project) => category === "all" || project.categories.includes(category));
  document.getElementById("grid").innerHTML = shown.map((project) => `
    <article class="card">
      <div class="top">
        ${logo(project)}
        <div><a class="main" href="${site(project.name)}"><span class="name">${project.name}</span></a><span class="kind">${escape(project.kind[lang])}</span></div>
      </div>
      <p class="desc">${escape(project.desc[lang])}</p>
      <div class="foot">
        <div class="tags">${project.tags.map((tag) => `<span class="tag">${escape(tag[lang] ?? tag)}</span>`).join("")}</div>
        <a class="repo" href="${repo(project.name)}" target="_blank" rel="noopener" aria-label="${t("repo")}" title="${t("repo")}">${GITHUB_ICON}</a>
      </div>
    </article>`).join("");
}

function renderMore() {
  document.getElementById("more").innerHTML = MORE.map((item) =>
    `<li><a href="${repo(item.name)}" target="_blank" rel="noopener"><strong>${item.name}</strong><span>${escape(item.desc[lang])}</span></a></li>`).join("");
}

function applyLang() {
  document.documentElement.lang = lang;
  for (const element of document.querySelectorAll("[data-text]")) {
    const text = t(element.dataset.text);
    if (text === undefined) continue;
    if (element.dataset.text === "intro") element.innerHTML = text;
    else element.textContent = text;
  }
  document.getElementById("langs")?.setAttribute("aria-label", t("language"));
  document.getElementById("themes")?.setAttribute("aria-label", t("theme"));
  for (const button of document.querySelectorAll(".lang")) button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  applyTheme();
  renderChips();
  renderCards();
  renderMore();
}
for (const button of document.querySelectorAll(".lang")) {
  button.addEventListener("click", () => {
    lang = button.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch {}
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    applyLang();
  });
}

applyLang();
