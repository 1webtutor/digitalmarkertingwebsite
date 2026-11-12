/**
 * VYORA DIGITAL — CLIENT INTERACTION & SCROLL ANIMATION ENGINE
 * Domain: vyoradigital.com
 * Hardware-accelerated IntersectionObserver scroll reveals, stat counters & theme control
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. SCROLL-TRIGGERED REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ==========================================================================
  const scrollElements = document.querySelectorAll(`
    .scroll-reveal,
    .scroll-reveal-left,
    .scroll-reveal-right,
    .scroll-reveal-scale,
    .svc,
    .blocker-card,
    .work,
    .step,
    .cl-card,
    .pkg-card,
    .faq-item,
    .stat-item,
    .studio-config-card,
    .studio-display-frame,
    .calc-card,
    .contact-form-card
  `);

  // Auto-assign stagger classes to grid siblings
  const grids = document.querySelectorAll('.services-grid, .blockers-grid, .work-grid, .framework-grid, .testimonials-grid, .pricing-grid, .stats-grid');
  grids.forEach((grid) => {
    Array.from(grid.children).forEach((child, idx) => {
      child.classList.add('scroll-reveal');
      child.classList.add(`delay-${(idx % 6) + 1}`);
    });
  });

  if ('IntersectionObserver' in window) {
    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: '150px 0px 150px 0px'
    });

    scrollElements.forEach((el) => {
      // Immediate view check for elements already near or within viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150) {
        el.classList.add('in-view');
      } else {
        scrollObserver.observe(el);
      }
    });
  } else {
    // Fallback for older browsers
    scrollElements.forEach((el) => el.classList.add('in-view'));
  }

  // Quick fallback timer: Ensure every element is 100% visible after initial render
  setTimeout(() => {
    scrollElements.forEach((el) => el.classList.add('in-view'));
  }, 400);

  // ==========================================================================
  // 2. DYNAMIC NUMBER COUNTER ANIMATION ON SCROLL
  // ==========================================================================
  const counters = document.querySelectorAll('[data-count-to]');
  let hasAnimatedCounters = false;

  function runCounters() {
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-count-to'));
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0;
      const duration = 1800; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Ease Out Cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = progress === 1 ? target : (target * ease);

        counter.textContent = prefix + (isDecimal ? currentVal.toFixed(1) : Math.round(currentVal)) + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      requestAnimationFrame(update);
    });
  }

  const statsSection = document.querySelector('.stats-section');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimatedCounters) {
          hasAnimatedCounters = true;
          runCounters();
        }
      });
    }, { threshold: 0.2 });
    statsObserver.observe(statsSection);
  } else {
    runCounters();
  }

  // ==========================================================================
  // 3. THEME CONTROLLER (DEFAULT: BRIGHT IVORY CREAM PER INSTRUCTION)
  // ==========================================================================
  const themeToggleBtns = document.querySelectorAll('[data-theme-toggle]');
  const savedTheme = localStorage.getItem('vyora-theme') || 'light';

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
      themeToggleBtns.forEach((btn) => {
        btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        btn.setAttribute('title', 'Switch to Bright Luxury Mode');
      });
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.body.removeAttribute('data-theme');
      themeToggleBtns.forEach((btn) => {
        btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        btn.setAttribute('title', 'Switch to Dark Obsidian Mode');
      });
    }
    localStorage.setItem('vyora-theme', theme);
  }

  applyTheme(savedTheme);

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  // ==========================================================================
  // 4. READING PROGRESS BAR & STICKY NAVBAR
  // ==========================================================================
  const progressBar = document.querySelector('.progress');
  const siteHeader = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
      progressBar.style.transform = `scaleX(${progress})`;
    }

    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // ==========================================================================
  // 5. SMOOTH IN-PAGE ANCHOR NAVIGATION
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile drawer if open
        const mnav = document.querySelector('.mnav');
        if (mnav && mnav.hasAttribute('open')) {
          mnav.removeAttribute('open');
        }
      }
    });
  });

  // ==========================================================================
  // 6. FAQ ACCORDION INTERACTION
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach((other) => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ==========================================================================
  // 7. BOOKING MODAL CONTROLLER
  // ==========================================================================
  const modalOverlay = document.getElementById('bookingModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="booking"]');
  const closeModalBtns = document.querySelectorAll('.modal-close-btn, [data-close-modal]');

  function openModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // ==========================================================================
  // 8. FORMS SUBMISSION HANDLERS
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Request';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Transmitting Enquiry...</span>`;
      }

      setTimeout(() => {
        alert('Thank you! Your free growth audit request has been sent to Vyora Digital. Our Growth Director will contact you within 2 hours.');
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 1000);
    });
  }

  const modalForm = document.getElementById('modalBookingForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      setTimeout(() => {
        alert('Discovery Call Confirmed! We have sent invitation details to your email and WhatsApp.');
        modalForm.reset();
        closeModal();
        if (submitBtn) submitBtn.disabled = false;
      }, 1000);
    });
  }

  // Back-to-Top
  const toTopBtn = document.querySelector('.totop');
  if (toTopBtn) {
    toTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
