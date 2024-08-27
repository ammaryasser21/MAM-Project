//* show top-scroller && scroll to top in smoothly way  (All sections)
const topButton = document.querySelector(".top-button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 2500) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//* new cursor  (All sections)
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

//* toggle burger menu  (Navbar section)
const menu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

menu.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
});

//* active links  (Navbar section)
const links = document.querySelectorAll(".links a");

const Activate = () => {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((link) => link.classList.remove("Active"));
      this.classList.add("Active");
    });
  });
};

Activate();

//* type with erase effect (Hero section)
const typedText = document.querySelector(".typed-text");
const phrases = ["Top Scorer", "Euro League Finals", "MVP Award"];
let index = 0;
let letterIndex = 0;

function type() {
  if (letterIndex < phrases[index].length) {
    typedText.textContent += phrases[index].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (letterIndex > 0) {
    typedText.textContent = phrases[index].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, 100);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

setTimeout(type, 1000);

//* fade out effect (category section)
const fadeSection = document.getElementById("Category");
const fadeElements = document.querySelectorAll(".fade-element");

function checkInView() {
  const sectionRect = fadeSection.getBoundingClientRect();
  if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
    fadeSection.classList.add("in-view");
    fadeElements.forEach((el) => el.classList.add("in-view"));
  }
}

checkInView();
window.addEventListener("scroll", checkInView);

//* handle the active class for pagination buttons (Football section)
function handlePagination() {
  const paginationButtons = document.querySelectorAll(".pagination-btn");

  paginationButtons.forEach((button) => {
    button.addEventListener("click", function () {
      paginationButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

handlePagination();

//* handle the validation (newsLetter section)
const newsletterForm = document.querySelector("#newsletterForm");
const emailInput = document.querySelector("#newsletterEmail");

newsletterForm.addEventListener("click", function () {
  const emailValue = emailInput.value.trim();

  if (emailValue == "") {
    alert("Please enter a valid email address.");
  } else {
    emailInput.value = "";
    alert("Thank you for subscribing!");
  }
});

//* scroll effects (All section)
const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 200,
});

sr.reveal("#Category", { origin: "bottom" });
sr.reveal("#Trending", { origin: "bottom" });
sr.reveal("#Football", { origin: "bottom" });
sr.reveal("#News", { origin: "bottom" });
sr.reveal("#Articals", { origin: "bottom" });
sr.reveal("#Newsletter", { origin: "bottom" });

sr.reveal(".news-item", { interval: 200 });
sr.reveal(".article-item", { interval: 200 });
sr.reveal(".fade-element", { interval: 100 });
sr.reveal(".specialCard", { interval: 200 });
sr.reveal(".News-items", { interval: 200 });
