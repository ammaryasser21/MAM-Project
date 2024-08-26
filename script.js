
const topButton = document.querySelector(".top-button");
const links = document.querySelectorAll(".links a");
const cursor = document.querySelector(".custom-cursor");
const menu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const typedText = document.querySelector(".typed-text");
const phrases = ["Top Scorer", "Euro League Finals", "MVP Award"];
let index = 0;
let letterIndex = 0;

//* toggle burger menu

menu.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
});

//* show top-scroller

window.addEventListener("scroll", function () {
  if (window.scrollY > 1500) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

//* scroll to top in smoothly way

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//* active links

const Activate = () => {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((link) => link.classList.remove("Active"));
      this.classList.add("Active");
    });
  });
};
Activate();

//* new cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

//* type with erase effect

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




