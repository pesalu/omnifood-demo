// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Smooth Scroll to sections
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  })
);
