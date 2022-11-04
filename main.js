'use strict';

const navbar = document.querySelector('.navbar');
const navbarMenue = document.querySelector('.navbar__menu');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
    navbarMenue.classList.add('navbar__menu--dark');
  } else {
    navbar.classList.remove('navbar--dark');
    navbarMenue.classList.remove('navbar__menu--dark');
  }
});

navbarMenue.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;

  if (!link) {
    return;
  }

  scrollIntoView(link);

  const active = document.querySelector('.navbar__menu__item.selected');
  active.classList.remove('selected');
  target.classList.add('selected');

  navbarMenue.classList.remove('open');
  navbar.classList.remove('open');
});

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('open');
  navbarMenue.classList.toggle('open');
});

const intro = document.querySelector('#intro');
const introHeight = intro.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > introHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#intro');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
