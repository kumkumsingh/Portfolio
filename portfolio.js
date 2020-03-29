const hamBurger = document.querySelector(".hamBurger");
const navLinks = document.querySelector(".nav-links")
const links = document.querySelector(".nav-links li")
hamBurger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
})