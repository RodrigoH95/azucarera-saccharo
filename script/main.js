const HAMBURGER = document.querySelector(".hamburguer");
const NAV_BAR = document.querySelector(".nav-bar");

HAMBURGER.addEventListener("click", () => NAV_BAR.classList.toggle("active"))

document.querySelectorAll(".nav-enlace").forEach(n => n.addEventListener("click", () => NAV_BAR.classList.remove("active")));
