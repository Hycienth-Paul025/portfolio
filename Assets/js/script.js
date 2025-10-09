'use Strict';

document.addEventListener('DOMContentLoaded', () => {
  //// NAVBAR AND HEADER
  const headerEL = document.querySelector('header');
  const navBar = document.getElementById('navbar');
  const navToggle = document.getElementById('hamburger');
  const navClose = document.getElementById('close');
  const navLinks = document.querySelectorAll('#navbar ul li a');
  const navOverlay = document.getElementById('overlay');

  navToggle.addEventListener('click', () => {
    navBar.classList.add('top-0');
    navOverlay.classList.remove('hidden');
  });

  navClose.addEventListener('click', () => {
    navBar.classList.remove('top-0');
    navOverlay.classList.add('hidden');
  });

  navLinks.forEach((link) =>
    link.addEventListener('click', () => {
      navBar.classList.remove('top-0');
      navOverlay.classList.add('hidden');
    })
  );

  navOverlay.addEventListener('click', () => {
    navBar.classList.remove('top-0');
    navOverlay.classList.add('hidden');
  });

  /// Add shadow to header when scrolled down

  window.addEventListener('scroll', () => {
    window.scrollY >= 45
      ? headerEL.classList.add('shadow-xl')
      : headerEL.classList.remove('shadow-xl');
  });
});
