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

var titles = document.querySelectorAll(".agenda-title");
titles.forEach(function (title) {
  title.addEventListener("click", function (event) {
    // Stop propagation to prevent the document's click event from being triggered
    event.stopPropagation();

    // Check if the clicked item is already open
    var content = this.nextElementSibling;
    var wasOpen = content.classList.contains("open");

    // Close all items
    titles.forEach(function (otherTitle) {
      var otherContent = otherTitle.nextElementSibling;
      otherContent.classList.remove("open");
    });

    // Open the clicked item, unless it was already open
    if (!wasOpen) {
      content.classList.add("open");
    }
  });
});

// Add a click event to the document to close all items
document.addEventListener("click", function () {
  titles.forEach(function (title) {
    var content = title.nextElementSibling;
    content.classList.remove("open");
  });
});
