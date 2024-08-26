const topButton = document.querySelector(".top-button");
const links = document.querySelectorAll(".links a");
const cursor = document.querySelector('.custom-cursor');
const menu=document.querySelector('.hamburger-menu');
const mobileMenu=document.querySelector('.mobile-menu');

menu.addEventListener('click', function() {
  mobileMenu.classList.toggle('open');
});


window.addEventListener("scroll", function () {
  if (window.scrollY > 1000) {
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

const Activate = () => {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((link) => link.classList.remove("Active"));
      this.classList.add("Active");
    });
  });
};
Activate();



  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });


