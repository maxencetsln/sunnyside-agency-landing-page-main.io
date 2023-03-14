const openHamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const triangle = document.querySelector(".triangle");

openHamburger.addEventListener("click", () => {
    navMenu.classList.toggle('menuHamburger')
    triangle.classList.toggle('afficherTriangle')
})
