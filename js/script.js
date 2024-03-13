document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("div.scroll-section");
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

var titles = document.querySelectorAll(".agenda-title");
titles.forEach(function (title) {
  title.addEventListener("click", function (event) {
    event.stopPropagation();

    var content = this.nextElementSibling;
    var wasOpen = content.classList.contains("open");

    titles.forEach(function (otherTitle) {
      var otherContent = otherTitle.nextElementSibling;
      otherContent.classList.remove("open");
      otherTitle.classList.remove("active-title");
    });

    if (!wasOpen) {
      content.classList.add("open");
      this.classList.add("active-title");
    }
  });
});

document.addEventListener("click", function () {
  titles.forEach(function (title) {
    var content = title.nextElementSibling;
    content.classList.remove("open");
    title.classList.remove("active-title");
  });
});

document.querySelector("#hoi-link").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".mobile-nav-links").classList.toggle("hidden");
});
