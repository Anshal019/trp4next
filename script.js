/* ==========================================================================
   TRP4Next Café & Studio — SCRIPT.JS
   Vanilla JavaScript for lightweight scroll fade-in & smooth interaction
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
    // Fallback for older browsers
    fadeElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // 2. Smooth Scroll for Internal Links
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
