function togglemobilemenu(menu) {
    menu.classlist.toggle('open');
}
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
})