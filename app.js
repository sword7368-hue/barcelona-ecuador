const moments = [
  { year: "1925", title: "Nace Barcelona Sporting Club", text: "El 1 de mayo se funda el club en Guayaquil, en una reunión de amigos del barrio del Astillero. El nombre rinde homenaje a la ciudad de Barcelona, España." },
  { year: "1940", title: "El equipo se gana un lugar", text: "Barcelona comienza a destacar en el fútbol guayaquileño y construye una hinchada que crecerá con cada generación." },
  { year: "1957", title: "Primer campeonato nacional", text: "El Ídolo conquista su primer título nacional y abre una historia de grandes campañas en el fútbol ecuatoriano." },
  { year: "1990", title: "Primera final de América", text: "Barcelona llega a la final de la Copa Libertadores, un hito que lleva el nombre del club a todo el continente." },
  { year: "1998", title: "Otra noche inolvidable", text: "El club vuelve a disputar la final de la Copa Libertadores y consolida su lugar entre los grandes de Sudamérica." }
];
const timeline = document.querySelector("#timeline");
moments.forEach((moment, index) => {
  const article = document.createElement("article");
  article.className = "moment";
  article.innerHTML = `<div class="moment-year">${moment.year}</div><div><h3>${moment.title}</h3><p>${moment.text}</p></div><span class="moment-index">0${index + 1}</span>`;
  timeline.append(article);
});
document.querySelector("#year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});
nav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }
});
