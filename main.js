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

  console.log(e.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
