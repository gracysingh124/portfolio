// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});
