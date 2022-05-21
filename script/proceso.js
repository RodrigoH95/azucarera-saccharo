const MENU_DESPLEGABLE = document.querySelector(".menu-desplegable");
const INDICE = document.querySelector(".indice");
MENU_DESPLEGABLE.addEventListener("click", () => {
    MENU_DESPLEGABLE.classList.toggle("active");
    INDICE.classList.toggle("active");
})

document.querySelectorAll(".indice-link").forEach(n => n.addEventListener("click", () =>{
    MENU_DESPLEGABLE.classList.remove("active");
    INDICE.classList.remove("active");
}));