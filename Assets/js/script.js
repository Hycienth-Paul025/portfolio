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

  //// Active Navliinks

  function removeActive() {
    navLinks.forEach((links) => {
      links.classList.remove('active');
    });
  }

  navLinks.forEach((links) => {
    links.addEventListener('click', () => {
      removeActive();
      links.classList.add('active');
    });
  });

  //// Show Active Section

  window.addEventListener('scroll', () => {
    const SectionEl = document.querySelectorAll('section[id]');

    const scrollDown = window.scrollY;
    SectionEl.forEach((sections) => {
      const sectHeight = sections.offsetHeight;

      const secTop = sections.offsetTop - 80;
      const sectId = sections.getAttribute('id');

      const sectLink = document.querySelector(
        '#navbar ul li a[href*=' + sectId + ']'
      );

      if (scrollDown > secTop && scrollDown <= secTop + sectHeight) {
        sectLink.classList.add('active');
      } else {
        sectLink.classList.remove('active');
      }
    });


  });


  
  /// Add shadow to header when scrolled down

  window.addEventListener('scroll', () => {
    window.scrollY >= 45
      ? headerEL.classList.add('shadow-xl')
      : headerEL.classList.remove('shadow-xl');
  });

  // Skills Swiper Function

  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 600,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },

      760: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });



  
});
