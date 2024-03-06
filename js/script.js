document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  if (window.scrollY === 0) {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    return;
  }

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight / 3 && rect.bottom >= 0) {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});
