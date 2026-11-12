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
  // 3. THEME (PERMANENT LUXURY LIGHT / METALLIC GOLD PALETTE)
  // ==========================================================================
  document.documentElement.removeAttribute('data-theme');
  document.body.removeAttribute('data-theme');
  localStorage.setItem('vyora-theme', 'light');

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
  // ==========================================================================
  // LEAD DISPATCHER: GOOGLE SHEET (1kZpBSVbwHqxZuQpNBDKg4Eyg8Q3n4-GScuAa7iIgsVc) + EMAIL (getupramesh@gmail.com) + WHATSAPP
  // ==========================================================================
  const GOOGLE_SHEET_WEBAPP_URL = window.VYORA_LEAD_ENDPOINT || '';

  function dispatchLead(payload, whatsappText) {
    // 1. Asynchronously send to Next.js API / Google Sheet Web App
    try {
      if (window.fetch) {
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(() => {});

        if (GOOGLE_SHEET_WEBAPP_URL) {
          fetch(GOOGLE_SHEET_WEBAPP_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }).catch(() => {});
        }
      }
    } catch (e) {
      console.warn('Lead background sync error', e);
    }

    // 2. Immediate WhatsApp redirection with prefilled intent
    const encoded = encodeURIComponent(whatsappText);
    const waUrl = `https://wa.me/918925502557?text=${encoded}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Request';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting to WhatsApp...</span>`;
      }

      const name = (document.getElementById('cName') || contactForm.querySelector('[name="name"]') || {}).value || '';
      const phone = (document.getElementById('cPhone') || contactForm.querySelector('[name="phone"]') || {}).value || '';
      const email = (document.getElementById('cEmail') || contactForm.querySelector('[name="email"]') || {}).value || '';
      const service = (document.getElementById('cService') || contactForm.querySelector('[name="service"]') || {}).value || 'Comprehensive Growth Consultation';
      const budget = (document.getElementById('cBudget') || contactForm.querySelector('[name="budget"]') || {}).value || '';
      const message = (document.getElementById('cMessage') || contactForm.querySelector('[name="message"]') || {}).value || '';

      const payload = {
        name, phone, email, service, budget, message,
        page: window.location.pathname || 'Contact Page'
      };

      const waMsg = `Hi Vyora Digital team, I submitted an inquiry for ${service}.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nBudget: ${budget}\nNotes: ${message}`;

      dispatchLead(payload, waMsg);

      setTimeout(() => {
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 1000);
    });
  }

  // Modal Booking Form Submission
  const modalForm = document.getElementById('modalBookingForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Confirm Discovery Call';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting to WhatsApp...</span>`;
      }

      const name = (document.getElementById('modalName') || {}).value || '';
      const phone = (document.getElementById('modalPhone') || {}).value || '';
      const budget = (document.getElementById('modalBudget') || {}).value || '';

      const payload = {
        name: name,
        phone: phone,
        budget: budget,
        service: '30-Min Discovery Diagnostic Call',
        page: window.location.pathname || 'Homepage'
      };

      const waMsg = `Hi Vyora Digital team, I want to confirm our 30-min growth diagnostic call.\nName: ${name}\nPhone: ${phone}\nMonthly Ad Budget: ${budget}\nPage: ${window.location.pathname}`;

      dispatchLead(payload, waMsg);

      setTimeout(() => {
        modalForm.reset();
        closeModal();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 1000);
    });
  }

  // Sidebar Audit Forms Submission (Service & Case Study pages)
  const sidebarForms = document.querySelectorAll('#sidebarAuditForm, form[id*="sidebar"]');
  sidebarForms.forEach((sForm) => {
    sForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = sForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting to WhatsApp...</span>`;
      }

      const nameInput = sForm.querySelector('input[type="text"]');
      const phoneInput = sForm.querySelector('input[type="tel"]');
      const name = nameInput ? nameInput.value : '';
      const phone = phoneInput ? phoneInput.value : '';

      const payload = {
        name: name,
        phone: phone,
        service: document.title.split('—')[0].trim() || 'Service Audit',
        page: window.location.pathname
      };

      const waMsg = `Hi Vyora Digital team, I would like to request an audit for: ${payload.service}.\nName: ${name}\nPhone: ${phone}\nPage: ${window.location.pathname}`;

      dispatchLead(payload, waMsg);

      setTimeout(() => {
        sForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 1000);
    });
  });

  // Back-to-Top
  const toTopBtn = document.querySelector('.totop');
  if (toTopBtn) {
    toTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
