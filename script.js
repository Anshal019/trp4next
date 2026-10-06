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

  // 4. Event Modal Data & Interactivity
  var eventsData = {
    cricket: {
      title: "Live Cricket Match Screenings",
      subtitle: "Experience IPL & International T20 Matches Live on the Big Garden Projector",
      badge: "Every Match Day",
      entry: "Free Entry with Table Order",
      image: "images/real-courtyard-waterfall.jpg",
      schedule: "During all live evening matches",
      time: "7:00 PM Onwards",
      location: "Outdoor Courtyard Screen & Lawn Seating",
      capacity: "Small & Large Groups (Up to 35 guests)",
      fullDesc: "Cheer for your favorite cricket teams live under open skies! TRP4Next screens all major IPL, World Cup, and T20 matches on our massive outdoor garden projector screen with surround audio. Enjoy hot hand-stretched wood-fired pizzas, loaded nachos, and chilled iced beverages right at your table with your friends and fellow fans.",
      highlights: [
        "📽️ High Definition Outdoor Big-Screen Projector",
        "🔊 Immersive Surround Sound Audio",
        "🍿 Special Match-Day Wood-Fire Pizza & Brew Combos",
        "🐶 Pet-Friendly Garden Courtyard Seating",
        "📞 Direct Call Table Reservation Assistance"
      ],
      whatsappMsg: "Hi TRP4Next Cafe, I would like to reserve a table for the Live Cricket Match Screening."
    },
    music: {
      title: "Weekend Acoustic Live Music",
      subtitle: "Unplugged Acoustic Guitar & Soulful Vocal Evenings under Fairy Lights",
      badge: "Saturdays & Sundays",
      entry: "Free Admission",
      image: "images/real-bullock-cart.jpg",
      schedule: "Every Saturday & Sunday Evening",
      time: "7:30 PM – 10:30 PM",
      location: "Garden Courtyard Stage & Bullock Cart Lawn",
      capacity: "Cozy Tables & Group Seating",
      fullDesc: "Relax and rejuvenate your weekend with soulful acoustic songs performed live by talented local singers and acoustic guitarists. Nestled under warm fairy lights, rustic bullock cart decor, and lush greenery, TRP4Next provides the perfect ambiance for romantic dates, quiet conversations, or peaceful group hangouts.",
      highlights: [
        "🎸 Soulful Acoustic Vocals & Guitar Performance",
        "✨ Magical String Fairy Lights & Waterfall Backdrop",
        "☕ Artisan Espresso, Cold Brews & Fresh Bakery Delights",
        "📸 Picturesque Bullock Cart & Courtyard Photo Spots",
        "🐶 Pet-Friendly & Relaxed Casual Vibe"
      ],
      whatsappMsg: "Hi TRP4Next Cafe, I want to book a table for Weekend Acoustic Live Music night."
    },
    gazebo: {
      title: "Private Bamboo Gazebo & Birthday Parties",
      subtitle: "Exclusive Bamboo Nooks with Customized Party Menus & Floral Lights",
      badge: "On Reservation",
      entry: "Custom Group Package",
      image: "images/real-bamboo-gazebo.jpg",
      schedule: "Available Daily (Prior Booking Required)",
      time: "4:00 PM – 11:30 PM",
      location: "Private Bamboo Gazebos & Courtyard Alcove",
      capacity: "Private Groups of 6 to 35 Guests",
      fullDesc: "Celebrate birthdays, anniversaries, family reunions, or pet birthday parties in our private bamboo gazebos! We offer complete event arrangement including fairy light decor, custom cake-cutting setup, multi-course wood-fire pizza platters, mocktail pitchers, and dedicated staff service.",
      highlights: [
        "🎋 Secluded Bamboo Gazebos Surrounded by Greenery",
        "🎂 Customized Birthday & Anniversary Decoration",
        "🍕 Special Multi-Course Group Feast Packages",
        "🐶 Dedicated Pet-Friendly Celebration Space",
        "📞 Dedicated Event Manager Direct Call Support"
      ],
      whatsappMsg: "Hi TRP4Next Cafe, I would like to inquire about booking a Private Gazebo / Birthday Celebration."
    },
    openmic: {
      title: "Open Mic Comedy & Poetry Nights",
      subtitle: "Bhavnagar's Stage for Standup Comedians, Poets & Storytellers",
      badge: "Alternate Fridays",
      entry: "₹100 Cover Charge (100% Redeemable)",
      image: "images/real-drinks.jpg",
      schedule: "Alternate Friday Evenings",
      time: "8:00 PM – 10:30 PM",
      location: "Main Courtyard Stage",
      capacity: "Open Seating (Advance Booking Recommended)",
      fullDesc: "Discover Bhavnagar's finest emerging comedians, poets, spoken word artists, and acoustic musicians live on our open stage! Enjoy an evening filled with laughter, deep poetry, and vibrant energy. The ₹100 entry cover is 100% redeemable against any food or coffee order on the menu.",
      highlights: [
        "🎙️ Open Stage Platform for Local Performing Artists",
        "🎟️ 100% Food & Beverage Redeemable Entry Pass",
        "😂 Hilarious Standup Comedy & Heartfelt Poetry",
        "🍕 Fresh Hot Wood-Fire Pizzas & Chilled Drinks",
        "📞 Call Hotline to Register as Performer or Audience"
      ],
      whatsappMsg: "Hi TRP4Next Cafe, I want to reserve seats / register to perform for the Open Mic Comedy & Poetry Night."
    }
  };

  var modal = document.getElementById('eventModal');
  var closeBtn = document.getElementById('modalCloseBtn');
  var detailBtns = document.querySelectorAll('.btn-event-details');

  function openEventModal(eventId) {
    var data = eventsData[eventId];
    if (!data) return;

    var modalBadge = document.getElementById('modalBadge');
    var modalEntry = document.getElementById('modalEntry');
    var modalTitle = document.getElementById('modalTitle');
    var modalSubtitle = document.getElementById('modalSubtitle');
    var modalImage = document.getElementById('modalImage');
    var modalSchedule = document.getElementById('modalSchedule');
    var modalTime = document.getElementById('modalTime');
    var modalLocation = document.getElementById('modalLocation');
    var modalCapacity = document.getElementById('modalCapacity');
    var modalFullDesc = document.getElementById('modalFullDesc');
    var highlightsContainer = document.getElementById('modalHighlights');

    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalEntry) modalEntry.textContent = data.entry;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalImage) {
      modalImage.src = data.image;
      modalImage.alt = data.title;
    }
    if (modalSchedule) modalSchedule.textContent = data.schedule;
    if (modalTime) modalTime.textContent = data.time;
    if (modalLocation) modalLocation.textContent = data.location;
    if (modalCapacity) modalCapacity.textContent = data.capacity;
    if (modalFullDesc) modalFullDesc.textContent = data.fullDesc;

    if (highlightsContainer) {
      highlightsContainer.innerHTML = '';
      data.highlights.forEach(function (item) {
        var span = document.createElement('span');
        span.className = 'modal-highlight-chip';
        span.textContent = item;
        highlightsContainer.appendChild(span);
      });
    }

    var waBtn = document.getElementById('modalWhatsappBtn');
    if (waBtn) {
      waBtn.href = 'https://wa.me/919426212345?text=' + encodeURIComponent(data.whatsappMsg);
    }

    if (modal) {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeEventModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  detailBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var eventId = this.getAttribute('data-event');
      openEventModal(eventId);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeEventModal);
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeEventModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeEventModal();
    }
  });

});
