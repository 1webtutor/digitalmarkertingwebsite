# Vyora Digital — Deployment Guide (Cloudflare Pages & Vercel)

This repository is built with **Next.js 14**, **React 18**, and **TypeScript**, configured for dual deployment:
- **Cloudflare Pages** (Static HTML Export via `out/` or Wrangler)
- **Vercel** (Native Next.js zero-config deployment)

---

## 1. Quick Local Development

```bash
# 1. Install dependencies (if cloning fresh)
npm install

# 2. Run local Next.js dev server
npm run dev
# -> Opens http://localhost:3000

# 3. Build for production export
npm run build
# -> Compiles all React components and outputs production static site to /out
```

---

## 2. Deploying to Cloudflare Pages

### Option A: Via Cloudflare Dashboard (Recommended with Git)
1. Push your repository to **GitHub** or **GitLab**.
2. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the `vyoradigital.com` repository.
4. Set the **Build Settings**:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: `20.x` or higher (add environment variable `NODE_VERSION=20.18.0`)
5. Click **Save and Deploy**. Cloudflare Pages will build and deploy globally on its ultra-fast edge CDN.

### Option B: Direct CLI Deployment via Wrangler
If you have Cloudflare CLI (`wrangler`):
```bash
npm run build
npx wrangler pages deploy out --project-name=vyoradigital
```

---

## 3. Deploying to Vercel

### Option A: Via Vercel Dashboard (Zero-Config)
1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New...** > **Project**.
3. Import the `vyoradigital.com` repository.
4. Vercel automatically detects **Next.js** framework settings (`vercel.json` is already pre-configured in root).
5. Click **Deploy**. Your site will be live within 30 seconds with automatic SSL and global CDN caching.

### Option B: Via Vercel CLI
```bash
npx vercel
# For production deployment:
npx vercel --prod
```

---

## 4. Key Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Global metadata, fonts, header, footer, modal
│   │   ├── page.tsx                    # Homepage with interactive funnel simulator
│   │   ├── about/page.tsx              # About Agency & 4 Engine Pillars
│   │   ├── case-studies/page.tsx       # Case Studies Hub
│   │   │   ├── real-estate-luxury/     # ₹14.8 Cr Luxury Villas Case Study
│   │   │   ├── aesthetic-clinic/       # 185+ Patient Bookings Clinic Case Study
│   │   │   └── ecommerce-dtc/          # ₹48L/mo DTC Scaling Case Study
│   │   ├── services/page.tsx           # Full-Stack Services Directory
│   │   ├── pricing/page.tsx            # Transparent Growth Retainers
│   │   ├── reviews/page.tsx            # 40+ Verified Founder Testimonials
│   │   ├── framework/page.tsx          # 5-Stage Performance Framework
│   │   ├── faq/page.tsx                # Client Knowledge Base
│   │   ├── contact/page.tsx            # Free Growth Audit Booking
│   │   ├── privacy/page.tsx            # Privacy Policy
│   │   ├── terms/page.tsx              # Terms of Service
│   │   └── refund-policy/page.tsx      # Refund Policy
│   └── components/
│       ├── Header.tsx                  # Navigation, dark toggle, mobile drawer
│       ├── Footer.tsx                  # 4-Column Luxury Footer & HQ
│       ├── BookingModal.tsx            # Interactive Discovery Call Modal
│       └── WhatsAppFloat.tsx           # Floating WhatsApp Concierge (+91 89255 02557)
├── public/
│   ├── assets/images/                  # Verified SVG Case Study Dashboards
│   │   ├── case-study-meta-realestate.svg
│   │   ├── case-study-google-clinic.svg
│   │   └── case-study-dtc-ecommerce.svg
│   └── data/content.json               # Dynamic Agency Content
├── next.config.js                      # Configured with output: 'export'
├── vercel.json                         # Vercel security headers and redirects
├── wrangler.toml                       # Cloudflare Pages deployment configuration
└── package.json                        # Next.js 14, React 18, TypeScript
```
