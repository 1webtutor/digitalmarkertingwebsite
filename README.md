# Vyora Digital — AI Growth & Digital Authority

Official agency website repository for **Vyora Digital** ([vyoradigital.com](https://vyoradigital.com)).

**Tagline:** *Build Visibility. Earn Authority. Accelerate Growth.*  
**Subtitle:** *AI Growth & Digital Authority.*

---

## 🎨 Official Brand Identity & Palette

- **Primary Black (`#08090C`):** Contrast backgrounds, luxury dark sections, footer, and dark mode.
- **Metallic Gold (`#D4AF37`, `#C5A059`):** Logo monogram, primary action buttons, icons, highlights.
- **Champagne Gold (`#F3E5AB`, `#E6CA65`):** Text shimmers, glowing accents, and premium badges.
- **Deep Gold (`#AA771C`, `#996515`):** Structural borders, card outlines, and depth effects.
- **Ivory Cream (`#FAF8F5`, `#F5F2EB`):** Radiant daylight background for all core sections and cards.
- **White (`#FFFFFF`):** Card backgrounds, high-contrast typography, and crisp elements.

### Logo Design Specifications
- **Symbol:** Geometric interlocking **VY** monogram.
- **Finish:** Metallic gold gradient with champagne-gold highlights and center diamond prism.
- **Vector Source:** `assets/images/vy-monogram.svg`.

---

## 🏛 Headquarters & Contact Channels

- **Salem Office:** Krishna Nagar, Mamamgam, Salem - 636302, Tamil Nadu, India.
- **Support & WhatsApp:** [+91 89255 02557](https://wa.me/918925502557)
- **Instagram:** [@vyora.ai_digitalgrowth](https://www.instagram.com/vyora.ai_digitalgrowth)
- **Email:** `hello@vyoradigital.com`
- **Domain:** `vyoradigital.com`

---

## 🚀 Key Architectural Features

1. **Fahad Naeem Resilient Component Engine**:
   - Zero fragile layout parking or hidden `yPercent: 120` transforms.
   - 100% visible defaults with smooth CSS keyframe animations.
   - Interactive `.svc` cards with bottom-up metallic gold slide-up hover effect.
   - Dual-angled infinite gold & black marquee ribbons.
   - Rotating circular text badge with spinning SVG path around the interlocking VY monogram.
   - Vertical background guide lines (`.vline`) with falling light drops.
   - Orbiting planetary rings (`.orbit`) and floating tech bubbles.

2. **Dual-Theme Luxury System**:
   - **Default:** Crisp Ivory Cream Luxury Light Mode (`#FAF8F5`).
   - **One-Click Switcher:** Dark Obsidian Luxury Mode (`#08090C`) via `[data-theme-toggle]`.
   - Remembers visitor choice in `localStorage`.

3. **Dynamic Content & Headless DB Ready**:
   - All agency copy, services, case studies, packages, and FAQ are maintained centrally in `data/content.json`.
   - `assets/js/content-loader.js` fetches `data/content.json` dynamically with zero HTML edits required.
   - Serverless API endpoints included:
     - Vercel: `/api/content.js` (with optional Supabase / Postgres connection via env variables).
     - Cloudflare Pages: `/functions/api/content.js` (with optional Cloudflare KV / D1 / Supabase binding).

4. **Interactive Growth Tools**:
   - **The Vyora Live Growth Studio (`#studio`):** Interactive funnel simulator testing customer bookings across Real Estate, Clinics, E-Commerce, and B2B.
   - **Dynamic ROI Calculator (`#calculator`):** Real-time sliders for monthly ad budget and customer lifetime value, calculating projected impressions, qualified leads, closed sales, and projected ROAS.
   - **Floating WhatsApp Concierge (`.wa-float`):** Direct link to `+91 89255 02557` with pulsing gold ring and hover tooltip.
   - **Lead Qualification Booking Modal:** 1-click modal for scheduling a 30-minute discovery call.

---

## 📂 Directory Structure

```text
vyoradigital.com/
├── index.html                   # Master homepage (semantic, SEO-ready)
├── data/
│   └── content.json             # Dynamic content source (services, stats, packages, FAQ)
├── api/
│   └── content.js               # Vercel serverless function (/api/content)
├── functions/
│   └── api/
│       └── content.js           # Cloudflare Pages Functions (/api/content)
├── assets/
│   ├── css/
│   │   ├── style.css            # Base styles, Fahad Naeem components & color palette
│   │   ├── animations.css       # Hardware-accelerated CSS keyframes
│   │   └── interactive.css      # Growth Studio, ROI Calculator & Modals
│   ├── js/
│   │   ├── main.js              # Theme controller, smooth scroll, FAQ, modal & forms
│   │   ├── studio.js            # Live interactive funnel preview studio
│   │   ├── calculator.js        # Dynamic Marketing ROI budget calculator
│   │   └── content-loader.js    # Dynamic JSON / DB hydration loader
│   ├── images/
│   │   ├── vy-monogram.svg      # Geometric Interlocking VY Monogram
│   │   ├── work-01.webp         # Case study 1 mockup
│   │   ├── work-02.webp         # Case study 2 mockup
│   │   └── work-03.webp         # Case study 3 mockup
│   └── video/
│       ├── cosmic-bg.mp4        # Ambient hero video
│       └── cosmic-poster.jpg    # Video fallback poster
├── vercel.json                  # Vercel deployment configuration
├── _headers                     # Cloudflare Pages security & caching headers
├── _redirects                   # Cloudflare Pages redirects
├── sitemap.xml                  # Search engine sitemap
├── robots.txt                   # Crawler directives
└── serve.ps1                    # Local PowerShell preview server
```

---

## ⚡ Deployment Instructions

### Deploy to Vercel
1. Push this repository to GitHub/GitLab.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Other**.
4. Root Directory: `./` (leave default).
5. Click **Deploy**. Vercel will automatically read `vercel.json` and serve both static assets and `/api/content`.

### Deploy to Cloudflare Pages
1. In the Cloudflare Dashboard, navigate to **Compute (Workers) > Pages**.
2. Connect your Git repository.
3. Build command: *(leave empty)*.
4. Build output directory: `./` (or root).
5. Click **Save and Deploy**. Cloudflare Pages will serve static files, respect `_headers` / `_redirects`, and mount `/functions/api/content.js`.
