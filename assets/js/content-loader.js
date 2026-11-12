/**
 * VYORA DIGITAL — DYNAMIC CONTENT LOADER
 * Automatically fetches content from data/content.json or a headless DB/API
 * Preserves vibrant category styling, custom SVG icons, and scroll reveal hooks
 */

(function () {
  const DATA_ENDPOINT = window.VYORA_DATA_SOURCE || 'data/content.json';

  const SERVICE_CONFIG = {
    'meta-ads': {
      cat: 'meta',
      icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
    },
    'google-ads': {
      cat: 'google',
      icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`
    },
    'seo-authority': {
      cat: 'seo',
      icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
    },
    'web-architecture': {
      cat: 'web',
      icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
    },
    'lead-pipelines': {
      cat: 'crm',
      icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`
    },
    'video-vsl': {
      cat: 'video',
      icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`
    },
    'ai-automation': {
      cat: 'ai',
      icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`
    }
  };

  async function loadDynamicContent() {
    try {
      const response = await fetch(DATA_ENDPOINT + '?v=' + Date.now(), {
        cache: 'no-store'
      });
      if (!response.ok) return;

      const data = await response.json();
      window.VYORA_CONTENT = data;
      renderContent(data);
    } catch (err) {
      console.info('Vyora Digital: Using static HTML content fallback:', err.message);
    }
  }

  function renderContent(data) {
    if (!data) return;

    // 1. Hero Content
    if (data.hero) {
      const heroRoleTicker = document.getElementById('heroRoleTicker');
      if (heroRoleTicker && Array.isArray(data.hero.roles)) {
        heroRoleTicker.innerHTML = data.hero.roles.map(r => `<span>${r}</span>`).join('') + `<span>${data.hero.roles[0]}</span>`;
      }

      const heroLead = document.querySelector('.hero-lead');
      if (heroLead && data.hero.lead) {
        heroLead.textContent = data.hero.lead;
      }
    }

    // 2. Services Grid with Colorful Personalities
    if (Array.isArray(data.services)) {
      const servicesGrid = document.querySelector('.services-grid');
      if (servicesGrid) {
        servicesGrid.innerHTML = data.services.map((svc, idx) => {
          const config = SERVICE_CONFIG[svc.id] || {
            cat: 'meta',
            icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
          };

          return `
            <article class="svc scroll-reveal delay-${(idx % 6) + 1} in-view" data-category="${config.cat}">
              <div>
                <div class="svc-top">
                  <div class="ico">
                    ${config.icon}
                  </div>
                  <span class="num">${String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3>${svc.title}</h3>
                <p>${svc.desc}</p>
              </div>
              <div class="svc-tags">
                ${(svc.tags || []).map(t => `<span class="svc-tag">${t}</span>`).join('')}
              </div>
            </article>
          `;
        }).join('');
      }
    }

    // 3. Contact & Meta Details
    if (data.agency) {
      document.querySelectorAll('.val-phone').forEach(el => el.textContent = data.agency.phone || '+91 89255 02557');
      document.querySelectorAll('.val-address').forEach(el => el.textContent = data.agency.address || 'Krishna Nagar, Mamamgam, Salem - 636302.');
      document.querySelectorAll('.val-email').forEach(el => el.textContent = data.agency.email || 'hello@vyoradigital.com');
      document.querySelectorAll('.val-instagram').forEach(el => el.setAttribute('href', data.agency.instagram || 'https://www.instagram.com/vyora.ai_digitalgrowth'));
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDynamicContent);
  } else {
    loadDynamicContent();
  }
})();
