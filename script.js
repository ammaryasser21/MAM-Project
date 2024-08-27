//* show top-scroller && scroll to top in smoothly way  (All sections)
const topButton = document.querySelector(".top-button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 3000) {
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

//* handle the active class for pagination buttons (Football section)
function handlePagination() {
  const paginationButtons = document.querySelectorAll(".pagination-btn");
  const carouselElement = document.getElementById('newsCarousel');

  carouselElement.addEventListener('slid.bs.carousel', function (event) {
    const activeIndex = event.to;
    paginationButtons.forEach((btn, index) => {
      btn.classList.toggle('active', index === activeIndex);
    });
  });

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
    new MyAlert('Please enter a valid email address.', 'error');
  } else {
    emailInput.value = "";
    new MyAlert('Thank you for subscribing!', 'success');
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

//* popup Effect (Article section)
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.transform = "scale(1)";
  document.getElementById("lightbox").style.display = "flex";
}
document.getElementById("lightbox").addEventListener("click", closeLightbox);
document.querySelector('.close-btn').addEventListener("click", closeLightbox);

function closeLightbox() {
  document.getElementById("lightbox").style.transform = "scale(0)";
}

//* search Container (Navbar section)
let searchCon = document.getElementById("search-container");
let overlay = document.getElementById("overlay");
let searchBTNs = document.querySelectorAll('.search-btn');
let searchBtnIcon=document.getElementById("search-btn-icon");

searchBTNs.forEach(el=>{el.addEventListener("click", (e) => {
  searchCon.style.display = "grid";
  e.stopPropagation();
});});

overlay.addEventListener("click", () => {
  searchCon.style.display = "none";
  const highlightedElements = document.querySelectorAll('.highlight');
  highlightedElements.forEach(el => {
    el.classList.remove('highlight');
  });
});

document.body.addEventListener("click", () => {
  if (searchCon.style.display == "grid") {
    searchCon.style.display = "none";
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(el => {
      el.classList.remove('highlight');
    });
  }
});

searchCon.addEventListener("click", (e) => {
  e.stopPropagation();
});


document.getElementById('search-btn-icon').addEventListener('click', function () {
  const searchWord = document.getElementById('search').value.trim().toLowerCase();
  if (searchWord) {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(el => {
      el.classList.remove('highlight');
    });

    const content = document.body.innerText.toLowerCase();
    if (content.includes(searchWord)) {
      const elements = document.querySelectorAll('body *');
      elements.forEach(element => {
        if (element.children.length === 0 && element.textContent.toLowerCase().includes(searchWord)) {
          const regex = new RegExp(`(${searchWord})`, 'gi');
          element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
        }
      });

      const firstHighlight = document.querySelector('.highlight');
      if (firstHighlight) {
        firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      new MyAlert('Word not found!', 'error');
    }
  }
});

const style = document.createElement('style');
style.innerHTML = `
  .highlight {
    background-color: #7a7abc;
    padding: 2px;
    color: #fff;
  }
`;
document.head.appendChild(style);


//*custome Alert

class MyAlert {
  constructor(message, type = 'info') {
    this.message = message;
    this.type = type;
    this.createAlert();
  }

  createAlert() {
    const alertContainer = document.createElement('div');
    alertContainer.className = `my-alert ${this.type}`;

    const messageElement = document.createElement('p');
    messageElement.textContent = this.message;

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.className = 'my-alert-close';
    closeButton.addEventListener('click', () => this.closeAlert());

    alertContainer.appendChild(messageElement);
    alertContainer.appendChild(closeButton);
    document.body.appendChild(alertContainer);

    setTimeout(() => this.closeAlert(), 5000);
  }

  closeAlert() {
    const alert = document.querySelector('.my-alert');
    if (alert) {
      alert.classList.add('fade-out');
      setTimeout(() => alert.remove(), 500);
    }
  }
}

