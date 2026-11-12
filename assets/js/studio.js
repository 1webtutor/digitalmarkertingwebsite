/**
 * VYORA DIGITAL — LIVE GROWTH & PREVIEW STUDIO
 * Interactive business funnel preview generator
 * Inspired by Socio-Craftco
 */

(function () {
  // Elements
  const studioNameInput = document.getElementById('studioBusinessName');
  const studioIndustrySelect = document.getElementById('studioIndustry');
  const studioBottleneckSelect = document.getElementById('studioBottleneck');
  const swatchBtns = document.querySelectorAll('.swatch-btn');
  const deviceBtns = document.querySelectorAll('.device-btn');
  const mockupViewport = document.getElementById('mockupViewport');
  
  // Preview Elements
  const previewBrand = document.getElementById('mockupBrandName');
  const previewUrl = document.getElementById('mockupUrlText');
  const previewHeadline = document.getElementById('mockupHeadline');
  const previewSubtext = document.getElementById('mockupSubtext');
  const previewBadge = document.getElementById('mockupBadge');
  const previewCta = document.getElementById('mockupCta');
  const previewServicesContainer = document.getElementById('mockupServices');
  const lockInBtn = document.getElementById('studioLockInBtn');

  if (!studioNameInput || !mockupViewport) return;

  const INDUSTRY_PRESETS = {
    realestate: {
      tag: 'Real Estate Growth Engine',
      headline: 'Acquire High-Intent Property Buyers on Autopilot',
      subtext: 'Exclusive project showcase with interactive floorplans, HNI Meta ads, and qualified WhatsApp enquiry verification.',
      cta: 'Request Private Brochure & Site Tour',
      services: [
        { title: 'Project Microsite', desc: 'Sub-second luxury landing page built for high conversion.' },
        { title: 'HNI Target Ads', desc: 'Meta & Google Search ads reaching accredited investors.' },
        { title: 'WhatsApp Concierge', desc: 'Instant CRM verification for incoming buyer enquiries.' }
      ]
    },
    healthcare: {
      tag: 'Clinic Patient Acquisition',
      headline: 'Fill Your Consultation Calendar with Qualified Patients',
      subtext: 'Dominate local Google Search and Google Maps for high-value treatments with automated appointment scheduling.',
      cta: 'Book Private Consultation',
      services: [
        { title: 'Google Maps Top 3', desc: 'Rank #1 for high-intent medical and clinic keywords.' },
        { title: 'Treatment Pages', desc: 'Educational landing pages that build trust and drive bookings.' },
        { title: '24/7 AI Reception', desc: 'WhatsApp agent answers FAQs and reserves slots instantly.' }
      ]
    },
    ecommerce: {
      tag: 'DTC Revenue Accelerator',
      headline: 'Scale Beyond 4.0x ROAS with High-Converting Creative Funnels',
      subtext: 'High-velocity short-form creative testing, friction-free checkout funnels, and automated retention loops.',
      cta: 'Claim Limited Launch Offer',
      services: [
        { title: 'Meta Ads Machine', desc: 'Weekly creative split-testing targeting profitable buyers.' },
        { title: 'Product Funnels', desc: 'Custom high-speed landing pages with 1-click checkout.' },
        { title: 'Abandoned Cart AI', desc: 'Recover up to 28% of dropped checkouts via WhatsApp & Email.' }
      ]
    },
    services: {
      tag: 'B2B Client Pipeline',
      headline: 'Attract High-Value Clients & Predictable Monthly Retainers',
      subtext: 'Replace erratic word-of-mouth with a systematic inbound acquisition funnel that positions your firm as the obvious authority.',
      cta: 'Schedule Discovery Call',
      services: [
        { title: 'Authority SEO', desc: 'Rank for commercially lucrative industry search terms.' },
        { title: 'Executive Landing Page', desc: 'Clear positioning that commands premium pricing.' },
        { title: 'Lead Qualification Form', desc: 'Filter out tire-kickers before they reach your calendar.' }
      ]
    },
    local: {
      tag: 'Local Market Dominance',
      headline: 'The #1 Chosen Service in Your City & Surrounding Areas',
      subtext: 'Capture local homeowners and commercial clients right when emergencies or project needs happen.',
      cta: 'Get an Instant Free Quote',
      services: [
        { title: 'Google Local 3-Pack', desc: 'Ensure your business is first when clients search "near me".' },
        { title: 'Instant Call Routing', desc: 'Click-to-call buttons that ring your team immediately.' },
        { title: 'Review Automation', desc: 'Automate 5-star Google review collection after every job.' }
      ]
    },
    startups: {
      tag: 'SaaS & Tech Scaleup',
      headline: 'Convert Traffic into Product Demos and Active Subscriptions',
      subtext: 'Engineered growth marketing: performance search ads, product-led interactive pages, and full-funnel tracking.',
      cta: 'Start Free 14-Day Trial',
      services: [
        { title: 'Performance Search', desc: 'Capture high-intent software buyers ready to switch.' },
        { title: 'Interactive Demo Page', desc: 'Engaging feature showcases that drive signups.' },
        { title: 'Full Funnel Analytics', desc: 'Attribution modeling tracking CAC down to the penny.' }
      ]
    }
  };

  let currentColor = '#2563eb';

  function updateStudioPreview() {
    const rawName = studioNameInput.value.trim() || 'Your Brand';
    const industry = studioIndustrySelect.value || 'realestate';
    const preset = INDUSTRY_PRESETS[industry] || INDUSTRY_PRESETS.realestate;

    // Update Brand & URL
    previewBrand.textContent = rawName;
    const cleanSlug = rawName.toLowerCase().replace(/[^a-z0-9]/g, '');
    previewUrl.textContent = `https://${cleanSlug || 'yourbrand'}.vyorafunnels.com`;

    // Update Content
    previewBadge.textContent = preset.tag;
    previewHeadline.textContent = preset.headline;
    previewSubtext.textContent = preset.subtext;
    previewCta.textContent = preset.cta;

    // Update Services Grid
    previewServicesContainer.innerHTML = '';
    preset.services.forEach(svc => {
      const box = document.createElement('div');
      box.className = 'mockup-service-box';
      box.innerHTML = `
        <h4>${svc.title}</h4>
        <p>${svc.desc}</p>
      `;
      previewServicesContainer.appendChild(box);
    });

    // Update Colors
    previewCta.style.background = currentColor;
    previewBadge.style.color = currentColor;
    previewBadge.style.borderColor = currentColor;
  }

  // Event Listeners
  studioNameInput.addEventListener('input', updateStudioPreview);
  studioIndustrySelect.addEventListener('change', updateStudioPreview);
  studioBottleneckSelect.addEventListener('change', updateStudioPreview);

  // Swatches
  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentColor = btn.getAttribute('data-color') || '#2563eb';
      updateStudioPreview();
    });
  });

  // Device Toggle
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      if (view === 'mobile') {
        mockupViewport.classList.add('mobile-view');
      } else {
        mockupViewport.classList.remove('mobile-view');
      }
    });
  });

  // Lock In Blueprint -> Open Booking Modal with Pre-filled Info
  if (lockInBtn) {
    lockInBtn.addEventListener('click', () => {
      const brandName = studioNameInput.value.trim() || 'My Business';
      const industry = studioIndustrySelect.options[studioIndustrySelect.selectedIndex].text;
      const bottleneck = studioBottleneckSelect.options[studioBottleneckSelect.selectedIndex].text;

      const modalInputBusiness = document.getElementById('modalBusinessName');
      const modalInputGoal = document.getElementById('modalGoal');

      if (modalInputBusiness) modalInputBusiness.value = brandName;
      if (modalInputGoal) modalInputGoal.value = `${industry} — Overcome ${bottleneck}`;

      // Open Modal
      const modalBackdrop = document.getElementById('bookingModal');
      if (modalBackdrop) {
        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Initial call
  updateStudioPreview();
})();
