const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("isVisible");
});

ScrollReveal().reveal(".show-case");
ScrollReveal().reveal(".new-card", { delay: 300 });
ScrollReveal().reveal(".new-card-banner", { delay: 300 });
