/* ==========================================================================
   TRP4Next Café & Studio — SCRIPT.JS
   Vanilla JavaScript for scroll fade-in, section nav tracking & smooth scroll
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Intersection Observer for Gentle Scroll Fade-In
  var fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries, observerInstance) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // 2. Active Section Navigation Link Highlight on Scroll
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var activeId = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              if (link.getAttribute('href') === '#' + activeId) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  // 3. Smooth Scroll for Internal Nav Links
  var internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
