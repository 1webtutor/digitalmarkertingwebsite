/**
 * VYORA DIGITAL — INTERACTIVE WHATSAPP CONCIERGE & BOOKING MODAL
 * Direct integration with +91 9025804482
 */

(function () {
  const waToggleBtn = document.getElementById('waWidgetToggle');
  const waChatWindow = document.getElementById('waChatWindow');
  const waCloseBtn = document.getElementById('waCloseBtn');
  const waChips = document.querySelectorAll('.wa-chip');
  const waDirectBtn = document.getElementById('waDirectBtn');

  const WA_PHONE = '919025804482';

  // Toggle Chat Window
  if (waToggleBtn && waChatWindow) {
    waToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      waChatWindow.classList.toggle('open');
    });

    if (waCloseBtn) {
      waCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        waChatWindow.classList.remove('open');
      });
    }

    document.addEventListener('click', (e) => {
      if (!waChatWindow.contains(e.target) && !waToggleBtn.contains(e.target)) {
        waChatWindow.classList.remove('open');
      }
    });
  }

  // Handle Quick Chips
  waChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query') || chip.textContent.trim();
      const encodedMsg = encodeURIComponent(`Hi Vyora Digital team! I visited vyoradigital.com and would like to know more about: ${query}`);
      window.open(`https://wa.me/${WA_PHONE}?text=${encodedMsg}`, '_blank');
      if (waChatWindow) waChatWindow.classList.remove('open');
    });
  });

  // Direct Button Default
  if (waDirectBtn) {
    waDirectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const defaultMsg = encodeURIComponent("Hi Vyora Digital! I'm interested in scaling my business through your digital marketing and lead generation funnels.");
      window.open(`https://wa.me/${WA_PHONE}?text=${defaultMsg}`, '_blank');
    });
  }

  // Multi-step Consultation & Booking Modal
  const bookingModal = document.getElementById('bookingModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="booking"]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const bookingForm = document.getElementById('bookingForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toastNotice) return;
    if (toastMessage) toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4500);
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Form Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalClientName')?.value || 'Client';
      const phone = document.getElementById('modalClientPhone')?.value || '';
      const email = document.getElementById('modalClientEmail')?.value || '';
      const business = document.getElementById('modalBusinessName')?.value || 'New Venture';
      const goal = document.getElementById('modalGoal')?.value || 'Digital Growth';

      // Save lead locally
      const leadData = {
        name, phone, email, business, goal, date: new Date().toISOString()
      };
      try {
        const stored = JSON.parse(localStorage.getItem('vyora_leads') || '[]');
        stored.push(leadData);
        localStorage.setItem('vyora_leads', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage disabled', err);
      }

      // Close modal
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
      bookingForm.reset();

      showToast(`Thank you ${name}! Your Growth Audit request for "${business}" has been received. We will connect within 2 hours.`);

      // Optional WhatsApp confirmation prompt
      setTimeout(() => {
        const promptWa = confirm("Would you also like to connect with our growth director immediately via WhatsApp?");
        if (promptWa) {
          const text = encodeURIComponent(`Hi Vyora Digital! I just requested a Discovery Call on vyoradigital.com for my business "${business}". Name: ${name}, Phone: ${phone}. Looking forward to discussing next steps!`);
          window.open(`https://wa.me/${WA_PHONE}?text=${text}`, '_blank');
        }
      }, 1200);
    });
  }
})();
