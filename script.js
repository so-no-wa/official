const toggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav-menu");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
}
