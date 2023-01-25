const sections = document.getElementsByTagName("section")
const controls = document.getElementsByClassName("control")
const home = document.getElementById("home")
const nav = document.querySelector(".nav")
window.addEventListener("scroll", function navBar() {
    if (home.getBoundingClientRect().bottom <= 50) {
        nav.classList.add("active-nav")
    } else {
        nav.classList.remove("active-nav")
    }
})
//50