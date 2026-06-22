document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function setHeaderHeight() {
    const h = header.offsetHeight + 'px';
    document.documentElement.style.setProperty('--header-height', h);
  }

  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
});

//site header

window.addEventListener("scroll", function () {
  const header = document.querySelector(".site-header");

  if (window.scrollY >= 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//hideden and show
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hidden");
    }
  });
}, {
  threshold: 0.2 // trigger when 10% visible
});

const elements = document.querySelectorAll(".hidden");
elements.forEach(el => observer.observe(el));

