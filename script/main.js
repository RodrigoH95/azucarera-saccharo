const HAMBURGER = document.querySelector(".hamburguer");
const NAV_BAR = document.querySelector(".nav-bar");
const MENU_DESPLEGABLE = document.querySelector(".menu-desplegable");
const INDICE = document.querySelector(".indice");

HAMBURGER.addEventListener("click", () => NAV_BAR.classList.toggle("active"))

document.querySelectorAll(".nav-enlace").forEach(n => n.addEventListener("click", () => NAV_BAR.classList.remove("active")));

MENU_DESPLEGABLE.addEventListener("click", () => {
    MENU_DESPLEGABLE.classList.toggle("active");
    INDICE.classList.toggle("active");
})

document.querySelectorAll(".indice-link").forEach(n => n.addEventListener("click", () =>{
    MENU_DESPLEGABLE.classList.remove("active");
    INDICE.classList.remove("active");
}));