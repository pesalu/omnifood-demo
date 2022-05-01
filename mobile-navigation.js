// Make mobile navigation work
const navButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navButton.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
