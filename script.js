
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


let fullHeight = () => {
  if (window.innerWidth >= 1024 && window.innerWidth <= 1440) {
    const photos = document.querySelectorAll(".photo1, .photo2, .photo3, .photo4");
    const items = {
      photo1: document.getElementById("one"),
      photo2: document.getElementById("three"),
      photo3: document.getElementById("two"),
      photo4: document.getElementById("four"),
    };

    photos.forEach(photo => {
      photo.addEventListener("mouseover", function() {
        const gridArea = this.classList[0];
        items[gridArea].style.display = "none";

        switch (gridArea) {
          case "photo1":
            this.style.gridArea = "1 / 1 / 5 / 2";
            break;
          case "photo2":
            this.style.gridArea = "1 / 2 / 5 / 3";
            break;
          case "photo3":
            this.style.gridArea = "1 / 3 / 5 / 4";
            break;
          case "photo4":
            this.style.gridArea = "1 / 4 / 5 / 5";
            break;
        }
      });

      photo.addEventListener("mouseout", function() {
        const gridArea = this.classList[0];
        items[gridArea].style.display = "grid";
        this.style.gridArea = "";
      });
    });
  }
};

fullHeight();

window.addEventListener("resize", fullHeight);


