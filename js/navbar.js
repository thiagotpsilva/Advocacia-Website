const nav = document.querySelector('.navbar');
const hero = document.getElementById('hero-info');

window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('active');
    hero.classList.add('change');
  } else {
    nav.classList.remove('active');
    hero.classList.remove('change');
  }
}
