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
    var data = eventsData[eventId] || eventsData.cricket;
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


  /* ==========================================================================
     5. DIGITAL MENU SLIDER, ZOOM LIGHTBOX & QR CODE (SCOPED)
     ========================================================================== */
  (function initTrpMenu() {
    var sliderContainer = document.getElementById('trp-slider-container');
    var sliderTrack = document.getElementById('trp-slider-track');
    if (!sliderContainer || !sliderTrack) return;

    var prevBtn = document.getElementById('trp-prev-btn');
    var nextBtn = document.getElementById('trp-next-btn');
    var dots = document.querySelectorAll('.trp-dot');
    var currentNum = document.getElementById('trp-current-num');
    var totalNum = document.getElementById('trp-total-num');
    var slideCards = document.querySelectorAll('.trp-slide-card');

    var lightbox = document.getElementById('trp-lightbox');
    var lightboxImg = document.getElementById('trp-lightbox-img');
    var lightboxTitle = document.getElementById('trp-lightbox-title');
    var lightboxClose = document.getElementById('trp-lightbox-close');
    var lightboxBackdrop = document.getElementById('trp-lightbox-backdrop');
    var lightboxPrev = document.getElementById('trp-lightbox-prev');
    var lightboxNext = document.getElementById('trp-lightbox-next');

    var qrContainer = document.getElementById('trp-qrcode');
    var qrDownloadBtn = document.getElementById('trp-download-qr-btn');
    var qrTargetText = document.getElementById('trp-qr-target-text');

    var menuPages = [
      { title: "Hot Beverages & Chai", src: "images/menu-1.png", alt: "TRP Café Menu Page 1: Hot Beverages & Chai" },
      { title: "Soft Drinks & Mocktails", src: "images/menu-2.png", alt: "TRP Café Menu Page 2: Soft Drinks & Mocktails" },
      { title: "Wood Fired Pizza & Brownie Blitz", src: "images/menu-3.png", alt: "TRP Café Menu Page 3: Wood Fired Pizza & Brownie Blitz" },
      { title: "Chaat, Rice Bowls & Paratha Combos", src: "images/menu-4.png", alt: "TRP Café Menu Page 4: Chaat, Rice Bowls & Paratha Combos" }
    ];

    var currentIndex = 0;
    var totalSlides = menuPages.length;
    var hasDragged = false;

    if (totalNum) {
      totalNum.textContent = totalSlides;
    }

    function updateLightboxContent() {
      if (!lightbox || !lightboxImg || !lightboxTitle) return;
      var page = menuPages[currentIndex];
      lightboxImg.src = page.src;
      lightboxImg.alt = page.alt;
      lightboxTitle.textContent = 'Menu Page ' + (currentIndex + 1) + ' of ' + totalSlides + ' — ' + page.title;
    }

    function goToSlide(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      sliderTrack.style.transform = 'translate3d(-' + (currentIndex * 100) + '%, 0, 0)';

      if (currentNum) {
        currentNum.textContent = currentIndex + 1;
      }

      dots.forEach(function (dot, i) {
        if (i === currentIndex) {
          dot.classList.add('trp-active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('trp-active');
          dot.setAttribute('aria-selected', 'false');
        }
      });

      if (lightbox && lightbox.classList.contains('trp-open')) {
        updateLightboxContent();
      }
    }

    // Slider Navigation Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      });
    }

    // Dots Navigation
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          goToSlide(idx);
        }
      });
    });

    // Touch Swipe Support on Slider Container
    var touchStartX = 0;
    var touchStartY = 0;
    var touchDiffX = 0;
    var touchDiffY = 0;

    sliderContainer.addEventListener('touchstart', function (e) {
      if (e.touches.length > 1) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchDiffX = 0;
      touchDiffY = 0;
      hasDragged = false;
    }, { passive: true });

    sliderContainer.addEventListener('touchmove', function (e) {
      if (e.touches.length > 1) return;
      touchDiffX = e.touches[0].clientX - touchStartX;
      touchDiffY = e.touches[0].clientY - touchStartY;
      if (Math.abs(touchDiffX) > 10) {
        hasDragged = true;
      }
    }, { passive: true });

    sliderContainer.addEventListener('touchend', function () {
      if (Math.abs(touchDiffX) > 40 && Math.abs(touchDiffX) > Math.abs(touchDiffY)) {
        if (touchDiffX < 0) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex - 1);
        }
      }
      setTimeout(function () {
        hasDragged = false;
      }, 150);
    });

    // Mouse Drag Support on Desktop
    var isMouseDown = false;
    var mouseStartX = 0;
    var mouseDiffX = 0;

    sliderContainer.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      isMouseDown = true;
      mouseStartX = e.clientX;
      mouseDiffX = 0;
      hasDragged = false;
    });

    window.addEventListener('mousemove', function (e) {
      if (!isMouseDown) return;
      mouseDiffX = e.clientX - mouseStartX;
      if (Math.abs(mouseDiffX) > 10) {
        hasDragged = true;
      }
    });

    window.addEventListener('mouseup', function () {
      if (!isMouseDown) return;
      isMouseDown = false;
      if (hasDragged && Math.abs(mouseDiffX) > 50) {
        if (mouseDiffX < 0) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex - 1);
        }
      }
      setTimeout(function () {
        hasDragged = false;
      }, 150);
    });

    // Keyboard Arrow navigation when slider container is focused
    sliderContainer.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      }
    });

    // Lightbox / Zoom Overlay Functions
    function openLightbox(index) {
      goToSlide(index);
      updateLightboxContent();
      if (!lightbox) return;
      lightbox.classList.add('trp-open');
      lightbox.removeAttribute('hidden');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('trp-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      setTimeout(function () {
        if (!lightbox.classList.contains('trp-open')) {
          lightbox.setAttribute('hidden', '');
        }
      }, 250);
    }

    // Tap/Click on slide cards to zoom
    slideCards.forEach(function (card) {
      var slideIndex = parseInt(card.closest('.trp-slide').getAttribute('data-index'), 10);
      card.addEventListener('click', function (e) {
        e.preventDefault();
        if (!hasDragged) {
          openLightbox(slideIndex);
        }
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(slideIndex);
        }
      });
    });

    // Lightbox Controls
    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxBackdrop) {
      lightboxBackdrop.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', function (e) {
        e.stopPropagation();
        goToSlide(currentIndex - 1);
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', function (e) {
        e.stopPropagation();
        goToSlide(currentIndex + 1);
      });
    }

    // Gallery Tap-to-Zoom Lightbox
    var galleryPhotos = document.querySelectorAll('.photo-strip-grid .photo-item');
    galleryPhotos.forEach(function (photoItem) {
      photoItem.setAttribute('role', 'button');
      photoItem.setAttribute('tabindex', '0');

      function showGalleryZoom() {
        var img = photoItem.querySelector('img');
        var caption = photoItem.querySelector('.photo-caption');
        if (!img || !lightbox || !lightboxImg || !lightboxTitle) return;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxTitle.textContent = caption ? caption.textContent : img.alt;

        lightbox.classList.add('trp-open');
        lightbox.removeAttribute('hidden');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (lightboxClose) lightboxClose.focus();
      }

      photoItem.addEventListener('click', function (e) {
        e.preventDefault();
        showGalleryZoom();
      });

      photoItem.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showGalleryZoom();
        }
      });
    });

    // Global Key Listener for Lightbox (Esc, Left, Right)
    document.addEventListener('keydown', function (e) {
      if (!lightbox || !lightbox.classList.contains('trp-open')) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
      }
    });

    // QRCode Generation via QRCode.js
    function generateMenuQR() {
      if (!qrContainer) return;
      qrContainer.innerHTML = '';

      var baseUrl = window.location.href.split('#')[0].split('?')[0];
      if (!baseUrl || baseUrl.startsWith('file:') || baseUrl === 'about:blank') {
        baseUrl = window.location.href.split('#')[0];
      }
      var targetMenuUrl = baseUrl + '#menu';

      if (qrTargetText) {
        qrTargetText.textContent = 'Points to ' + (window.location.protocol === 'file:' ? 'this page #menu' : targetMenuUrl.replace(/^https?:\/\//, ''));
      }

      if (typeof QRCode !== 'undefined') {
        new QRCode(qrContainer, {
          text: targetMenuUrl,
          width: 180,
          height: 180,
          colorDark: '#201611',
          colorLight: '#FFFFFF',
          correctLevel: QRCode.CorrectLevel.M
        });
      } else {
        console.warn('QRCode library is loading or unavailable.');
      }
    }

    // Generate QR code
    generateMenuQR();

    // Download QR Code as PNG
    if (qrDownloadBtn) {
      qrDownloadBtn.addEventListener('click', function () {
        if (!qrContainer) return;
        var canvas = qrContainer.querySelector('canvas');
        var img = qrContainer.querySelector('img');
        var dataUrl = '';

        if (canvas && canvas.width > 0) {
          try {
            dataUrl = canvas.toDataURL('image/png');
          } catch (err) {
            console.warn('Canvas export warning:', err);
          }
        }

        if (!dataUrl && img && img.src && img.src.indexOf('data:image') === 0) {
          dataUrl = img.src;
        }

        if (dataUrl) {
          var a = document.createElement('a');
          a.download = 'trp-cafe-menu-qr.png';
          a.href = dataUrl;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          alert('QR code image is still generating. Please try again in a moment.');
        }
      });
    }

  })();

});
