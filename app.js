const sections = document.getElementsByTagName("section")
const controls = document.getElementsByClassName("control")
const home = document.getElementById("home")
const nav = document.querySelector(".nav")
const menu = document.querySelector(".fas")
const navItems = document.querySelector(".nav-items")
// console.log(menu)
window.addEventListener("scroll", navBar)
function navBar() {
    if (home.getBoundingClientRect().bottom <= 50) {
        nav.classList.add("active-nav")
    } else {
        nav.classList.remove("active-nav")
    }
}
menu.addEventListener("click", ()=>{
    navItems.classList.toggle("active")
})
navBar();