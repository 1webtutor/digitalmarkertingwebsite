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
  // ==========================================================================
  // LEAD DISPATCHER: GOOGLE SHEET (1kZpBSVbwHqxZuQpNBDKg4Eyg8Q3n4-GScuAa7iIgsVc) + EMAIL (getupramesh@gmail.com) + POPUP MODAL
  // ==========================================================================
  const GOOGLE_SHEET_WEBAPP_URL = window.VYORA_LEAD_ENDPOINT || '';
  const NOTIFICATION_EMAIL = 'getupramesh@gmail.com';

  function showSuccessPopup(payload) {
    let popup = document.getElementById('leadSuccessPopup');
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'leadSuccessPopup';
      popup.className = 'modal-overlay';
      popup.setAttribute('role', 'dialog');
      popup.setAttribute('aria-modal', 'true');
      popup.style.cssText = 'position:fixed;inset:0;z-index:100000;background:rgba(8,9,12,0.72);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:20px;';
      document.body.appendChild(popup);
    }

    const waText = encodeURIComponent(
      `Hi Vyora Digital team, I submitted my details on your website.\nName: ${payload.name || ''}\nPhone: ${payload.phone || ''}${payload.service ? `\nRequirement: ${payload.service}` : ''}`
    );

    popup.innerHTML = `
      <div class="modal-dialog" style="background:#FFFFFF;border-radius:24px;border:2px solid var(--c-metallic-gold);box-shadow:0 24px 60px rgba(0,0,0,0.2), 0 0 40px rgba(212,175,55,0.2);max-width:500px;width:100%;padding:40px 32px;text-align:center;position:relative;">
        <button type="button" class="close-success-btn" style="position:absolute;top:16px;right:16px;width:36px;height:36px;border-radius:50%;border:1px solid var(--border-card);background:var(--bg-body,#FAF8F5);font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--text-muted);">&times;</button>
        <div style="width:76px;height:76px;margin:0 auto 20px;border-radius:50%;background:linear-gradient(135deg,rgba(212,175,55,0.18),rgba(16,185,129,0.18));border:2px solid #10B981;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(16,185,129,0.25);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div class="eyebrow" style="color:var(--c-metallic-gold-dark);margin-bottom:8px;">✦ Consultation Request Received ✦</div>
        <h3 style="font-family:var(--font-heading);font-size:26px;font-weight:800;color:var(--text-main);margin-bottom:12px;">Details Submitted Successfully!</h3>
        <p style="font-size:15px;color:var(--text-body);line-height:1.65;margin-bottom:24px;">Thank you for reaching out to <strong style="color:var(--text-main)">Vyora Digital</strong>. We have received your details and our growth director will contact you shortly.</p>
        <div style="background:var(--bg-body,#FAF8F5);border:1.5px solid var(--border-card);border-radius:16px;padding:16px 20px;text-align:left;margin-bottom:24px;font-size:14px;">
          ${payload.name ? `<div style="display:flex;justify-content:space-between;margin-bottom:8px;"><span style="color:var(--text-muted);">Name:</span><strong style="color:var(--text-main);">${payload.name}</strong></div>` : ''}
          ${payload.phone ? `<div style="display:flex;justify-content:space-between;margin-bottom:8px;"><span style="color:var(--text-muted);">Contact:</span><strong style="color:var(--text-main);">${payload.phone}</strong></div>` : ''}
          ${payload.service ? `<div style="display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Requirement:</span><strong style="color:var(--c-metallic-gold-dark);">${payload.service}</strong></div>` : ''}
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="https://wa.me/918925502557?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn" style="width:100%;justify-content:center;min-height:48px;font-size:14.5px;">
            <span>Connect on WhatsApp (+91 89255 02557)</span>
          </a>
          <button type="button" class="btn-ghost close-success-btn" style="width:100%;justify-content:center;min-height:44px;font-size:14px;border-radius:12px;border:1.5px solid var(--border-card);background:transparent;cursor:pointer;font-weight:700;">Close Window</button>
        </div>
        <div style="margin-top:18px;font-size:12px;color:var(--text-muted);">Salem Headquarters · Krishna Nagar, Mamamgam, Salem - 636302.</div>
      </div>
    `;

    popup.classList.add('active');
    document.body.style.overflow = 'hidden';

    popup.querySelectorAll('.close-success-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  function dispatchLead(payload) {
    // 1. Asynchronously dispatch to Next.js API route
    try {
      if (window.fetch) {
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(() => {});

        // 2. Direct client-side fail-safe email to getupramesh@gmail.com
        fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: `🔥 New Lead: ${payload.name || 'Anonymous'} (${payload.phone || 'No phone'}) — Vyora Digital`,
            name: payload.name,
            phone: payload.phone,
            email: payload.email || 'Not provided',
            service: payload.service || 'Growth Consultation',
            budget: payload.budget || 'Not specified',
            notes: payload.message || 'None',
            source_url: window.location.href,
          })
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

    // 3. Show confirmation popup
    showSuccessPopup(payload);
  }

  // Contact Form Submission (Supports #contactForm and #contact-audit-form)
  const contactForms = document.querySelectorAll('#contactForm, #contact-audit-form');
  contactForms.forEach((cForm) => {
    cForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = cForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Request';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Submitting Details...</span>`;
      }

      const textInputs = cForm.querySelectorAll('input[type="text"]');
      const telInput = cForm.querySelector('input[type="tel"]');
      const emailInput = cForm.querySelector('input[type="email"]');
      const selects = cForm.querySelectorAll('select');
      const textarea = cForm.querySelector('textarea');

      const name = (document.getElementById('cName') || textInputs[0] || {}).value || '';
      const phone = (document.getElementById('cPhone') || telInput || {}).value || '';
      const email = (document.getElementById('cEmail') || emailInput || {}).value || '';
      const budget = (selects[0] || {}).value || '';
      const service = (selects[1] || selects[0] || {}).value || 'Comprehensive Growth Consultation';
      const message = (textarea || {}).value || '';

      const payload = {
        name, phone, email, service, budget, message,
        page: window.location.pathname || 'Contact Page'
      };

      dispatchLead(payload);

      const successBox = document.getElementById('form-success-box');
      if (successBox) {
        successBox.style.display = 'block';
        cForm.style.display = 'none';
      }

      setTimeout(() => {
        cForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 800);
    });
  });

  // Modal Booking Form Submission
  const modalForm = document.getElementById('modalBookingForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Confirm Discovery Call';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Submitting Details...</span>`;
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

      closeModal();
      dispatchLead(payload);

      setTimeout(() => {
        modalForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 800);
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
        submitBtn.innerHTML = `<span>Submitting Details...</span>`;
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

      dispatchLead(payload);

      setTimeout(() => {
        sForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 800);
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
