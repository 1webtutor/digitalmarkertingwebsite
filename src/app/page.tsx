'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  // Funnel Calculator State
  const [adSpend, setAdSpend] = useState(100000);
  const [cpc, setCpc] = useState(25);
  const [cvr, setCvr] = useState(3.5);
  const [dealValue, setDealValue] = useState(45000);

  // Calculations
  const clicks = Math.round(adSpend / cpc);
  const leads = Math.round(clicks * (cvr / 100));
  const qualifiedSales = Math.max(1, Math.round(leads * 0.12));
  const projectedRevenue = qualifiedSales * dealValue;
  const roas = (projectedRevenue / adSpend).toFixed(2);

  // Studio Preview State
  const [studioName, setStudioName] = useState('Apex Realties');
  const [studioIndustry, setStudioIndustry] = useState('realestate');

  const industryData: Record<string, { tag: string; headline: string; sub: string; cta: string }> = {
    realestate: {
      tag: 'Real Estate Growth Engine',
      headline: 'Acquire High-Intent Property Buyers on Autopilot',
      sub: 'Exclusive project showcase with interactive floorplans, HNI Meta ads, and qualified WhatsApp enquiry verification.',
      cta: 'Request Private Brochure & Site Tour'
    },
    healthcare: {
      tag: 'Clinic Patient Acquisition',
      headline: 'Fill Your Consultation Calendar with Qualified Patients',
      sub: 'Dominate local Google Search and Google Maps for high-value treatments with automated appointment scheduling.',
      cta: 'Book Private Consultation'
    },
    ecommerce: {
      tag: 'DTC Revenue Accelerator',
      headline: 'Scale Beyond 4.0x ROAS with High-Converting Creative Funnels',
      sub: 'High-velocity short-form creative testing, friction-free checkout funnels, and automated retention loops.',
      cta: 'Claim Limited Launch Offer'
    }
  };

  const currentPreview = industryData[studioIndustry] || industryData.realestate;

  // Initialize Three.js hero scene if script is ready
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).THREE) {
      const initScript = document.createElement('script');
      initScript.src = '/assets/js/three-scene.js';
      initScript.async = true;
      document.body.appendChild(initScript);
      return () => {
        try {
          document.body.removeChild(initScript);
        } catch (e) {}
      };
    }
  }, []);

  return (
    <>
      {/* ==========================================================================
           HERO SECTION (BRIGHT, VIBRANT, THREE.JS 3D LUXURY ENGINE)
           ========================================================================== */}
      <section className="hero-section" id="top">
        {/* Three.js 3D Interactive WebGL Luxury Canvas */}
        <canvas id="three-hero-canvas" className="three-canvas" aria-hidden="true" />

        {/* Vertical Guide Lines with Falling Lights */}
        <div className="vline hide-sm" style={{ left: '15%' }} />
        <div className="vline hide-sm" style={{ left: '35%' }} />
        <div className="vline hide-sm" style={{ left: '65%' }} />
        <div className="vline hide-sm" style={{ left: '85%' }} />

        {/* Ambient Radial Drift */}
        <div className="hero-glow-drift" aria-hidden="true" />

        <div className="wrap hero-grid">
          {/* Left Column: Copy, Tagline, Dynamic Roles, Action CTAs */}
          <div className="hero-content">
            <div className="eyebrow">AI Growth &amp; Digital Authority</div>

            <h1 className="hero-title">
              <span>Build <span className="gold-gradient-text">Visibility.</span></span><br />
              <span>Earn <span className="gold-gradient-text">Authority.</span></span><br />
              <span>Accelerate <span className="gold-gradient-text">Growth.</span></span>
            </h1>

            {/* Rotating Dynamic Role Track */}
            <div className="hero-roles">
              Specialist in{' '}
              <span className="role-window">
                <span className="role-track" id="heroRoleTicker">
                  <span>Meta Ads &amp; Paid Media</span>
                  <span>Google Ads &amp; High-Intent Search</span>
                  <span>SEO &amp; Map-Pack Authority</span>
                  <span>High-Converting Web Architecture</span>
                  <span>WhatsApp &amp; 24/7 AI Automation</span>
                  <span>Meta Ads &amp; Paid Media</span>
                </span>
              </span>
            </div>

            <p className="hero-lead">
              We partner with ambitious founders, clinics, real estate firms, and enterprise brands to build undeniable digital authority, dominate search intent, and turn traffic into predictable, compounding revenue.
            </p>

            {/* Action CTAs */}
            <div className="hero-actions">
              <Link className="btn" href="/contact">Claim Free Growth Audit</Link>
              <Link className="arrow" href="/contact" aria-label="Book Discovery Call">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </Link>
              <a className="btn-ghost" href="tel:+918925502557">+91 89255 02557</a>
            </div>

            {/* Markets Served */}
            <div className="hero-tags">
              <span className="hero-tags-label">Markets Served</span>
              <span className="tag">Salem &amp; Tamil Nadu</span>
              <span className="tag">India Nationwide</span>
              <span className="tag">Dubai &amp; UAE</span>
              <span className="tag">United States</span>
              <span className="tag">Global Brands</span>
            </div>

            {/* Mouse Scroll Indicator */}
            <a className="scroll-cue hide-sm" href="#services">
              <span className="mouse" aria-hidden="true" />
              Scroll to explore agency capabilities
            </a>
          </div>

          {/* Right Column: Visual Architecture, Dual Orbits, Rotating Monogram Badge */}
          <div className="hero-visual">
            <div className="orbit" aria-hidden="true" />
            <div className="orbit two" aria-hidden="true" />

            {/* Video Artifice Frame */}
            <div className="hero-media-wrap">
              <div className="hero-media-inner">
                <video autoPlay loop muted playsInline preload="none" poster="/assets/images/cosmic-poster.jpg" width={540} height={340}>
                  <source src="/assets/video/cosmic-bg.mp4" type="video/mp4" />
                  <img src="/assets/images/cosmic-poster.jpg" alt="Vyora Digital Portfolio Growth Showcase" width={540} height={340} fetchPriority="high" />
                </video>
                <div className="hero-media-overlay" aria-hidden="true" />
                <div className="hero-media-caption">
                  <div>
                    <div className="hero-caption-title">Vyora Engine</div>
                    <div className="hero-caption-sub">Engineered for Conversion</div>
                  </div>
                  <span className="hero-caption-status">Active Pipeline</span>
                </div>
              </div>
            </div>

            {/* Rotating Circle Badge with Interlocking Geometric VY Monogram */}
            <div className="hero-badge">
              <svg className="spin" width="150" height="150" viewBox="0 0 200 200" role="img" aria-label="Build Visibility. Earn Authority. Accelerate Growth.">
                <defs>
                  <path id="heroBadgeCircNext" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text fill="#D4AF37" fontSize="14.5" fontWeight="800" letterSpacing="2px">
                  <textPath href="#heroBadgeCircNext" textLength="484" lengthAdjust="spacing">✦ BUILD VISIBILITY ✦ EARN AUTHORITY ✦ ACCELERATE GROWTH ✦ </textPath>
                </text>
              </svg>
              <div className="hero-badge-monogram">
                <img src="/assets/images/vy-monogram.svg" alt="Vyora Monogram" width="38" height="38" />
              </div>
            </div>

            {/* Floating Badges */}
            <span className="bubble hide-sm" style={{ right: '-10px', top: '60px' }} aria-label="Meta Advertising Partner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
            </span>
            <span className="bubble hide-sm" style={{ right: '-24px', top: '48%' }} aria-label="Google Search Partner">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m10 15 5-3-5-3v6z" /></svg>
            </span>
            <span className="bubble hide-sm" style={{ left: '-30px', bottom: '80px' }} aria-label="24/7 AI Automation">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><rect x="4" y="8" width="16" height="12" rx="2" /><circle cx="9" cy="13" r="1" /><circle cx="15" cy="13" r="1" /></svg>
            </span>
            <span className="float-chip hide-sm" style={{ left: '-50px', top: '38%' }}>
              <span className="dot" />
              <span>94.8% Client Retention</span>
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           PROVEN STATS BAR (ANIMATED SCROLL REVEALS)
           ========================================================================== */}
      <section className="stats-section">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">3.8x</div>
              <div className="stat-label">Average Client ROAS</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">180K+</div>
              <div className="stat-label">Verified Inbound Leads</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹42 Cr+</div>
              <div className="stat-label">Revenue Influenced</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">21 Days</div>
              <div className="stat-label">Kickoff to Live Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           DOUBLE-ANGLED LUXURY INFINITE MARQUEE STRIP
           ========================================================================== */}
      <section className="marquee-strip" aria-label="Key Agency Capabilities Ticker">
        <div className="marquee-gold">
          <div className="marquee">
            <span className="mq-item">AI Growth Marketing <span className="diamond">✦</span></span>
            <span className="mq-item">Meta Ads &amp; High-ROAS Media <span className="diamond">✦</span></span>
            <span className="mq-item">Google Search Domination <span className="diamond">✦</span></span>
            <span className="mq-item">SEO &amp; Map-Pack Authority <span className="diamond">✦</span></span>
            <span className="mq-item">Sub-Second Funnel Architecture <span className="diamond">✦</span></span>
            <span className="mq-item">24/7 WhatsApp AI Automation <span className="diamond">✦</span></span>
            <span className="mq-item">High-Retention Video &amp; VSL Ads <span className="diamond">✦</span></span>
            <span className="mq-item">AI Growth Marketing <span className="diamond">✦</span></span>
            <span className="mq-item">Meta Ads &amp; High-ROAS Media <span className="diamond">✦</span></span>
          </div>
        </div>

        <div className="marquee-black">
          <div className="marquee rev">
            <span className="mq-item">3.8x Average Client ROAS <span style={{ color: 'var(--c-metallic-gold)' }}>✦</span></span>
            <span className="mq-item">180K+ Verified Inbound Leads <span style={{ color: 'var(--c-metallic-gold)' }}>✦</span></span>
            <span className="mq-item">₹42 Cr+ Revenue Influenced <span style={{ color: 'var(--c-metallic-gold)' }}>✦</span></span>
            <span className="mq-item">21-Day Kickoff to Live Launch <span style={{ color: 'var(--c-metallic-gold)' }}>✦</span></span>
            <span className="mq-item">Direct Attribution Tracking <span style={{ color: 'var(--c-metallic-gold)' }}>✦</span></span>
            <span className="mq-item">3.8x Average Client ROAS <span style={{ color: 'var(--c-metallic-gold)' }}>✦</span></span>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           BLOCKERS / "WHY MOST MARKETING FAILS"
           ========================================================================== */}
      <section className="blockers-section" id="about">
        <div className="wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px' }}>
            <div style={{ maxWidth: '680px' }}>
              <div className="eyebrow">Diagnosing Growth Bottlenecks</div>
              <h2 className="h2">Why 90% of marketing spend fails <span className="gold-gradient-text">to convert</span></h2>
            </div>
            <p style={{ maxWidth: '440px', margin: 0, fontSize: '16px' }}>
              Most businesses do not lack ad spend; they lack unified growth architecture. We replace guesswork with predictable conversion science.
            </p>
          </div>

          <div className="blockers-grid">
            <article className="blocker-card">
              <div className="blocker-num" style={{ color: 'var(--color-video)', borderColor: 'var(--color-video-border)', background: 'var(--color-video-bg)' }}>01 / LOW VISIBILITY</div>
              <h3>Invisible to High-Intent Buyers</h3>
              <p className="blocker-desc">
                Customers search for what you offer, but find competitors first on Google Search, Google Maps, and Social Feeds. You remain the best kept secret in your vertical.
              </p>
              <div className="blocker-fix" style={{ borderLeftColor: 'var(--color-video)' }}>
                <strong>Vyora Architecture:</strong> Technical SEO, Google Maps 3-Pack authority, and strategic commercial buyer-intent keyword capture.
              </div>
            </article>

            <article className="blocker-card">
              <div className="blocker-num" style={{ color: 'var(--color-google)', borderColor: 'var(--color-google-border)', background: 'var(--color-google-bg)' }}>02 / INCONSISTENT ENQUIRIES</div>
              <h3>Erratic Monthly Pipeline</h3>
              <p className="blocker-desc">
                Some months are overflowing; others are silent. Without a reliable inbound lead pipeline, scaling your staff and forecasting inventory is dangerous guesswork.
              </p>
              <div className="blocker-fix" style={{ borderLeftColor: 'var(--color-google)' }}>
                <strong>Vyora Architecture:</strong> High-converting Meta &amp; Google ad funnels generating qualified, warm customer bookings on a fixed daily schedule.
              </div>
            </article>

            <article className="blocker-card">
              <div className="blocker-num" style={{ color: 'var(--color-meta)', borderColor: 'var(--color-meta-border)', background: 'var(--color-meta-bg)' }}>03 / UNCLEAR DIRECTION</div>
              <h3>Fragmented Vanity Metrics</h3>
              <p className="blocker-desc">
                Fragmented agencies burning your budget on vanity metrics like impressions and clicks that never turn into closed sales, real clients, or bank balance.
              </p>
              <div className="blocker-fix" style={{ borderLeftColor: 'var(--color-meta)' }}>
                <strong>Vyora Architecture:</strong> A single-source growth team with end-to-end attribution, transparent CRM routing, and revenue accountability.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           CORE SERVICES SECTION (VIBRANT & DISTINCT .SVC CARDS)
           ========================================================================== */}
      <section className="services-section" id="services">
        <div className="wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px' }}>
            <div style={{ maxWidth: '720px' }}>
              <div className="eyebrow">Full-Funnel Capabilities</div>
              <h2 className="h2">Services engineered to scale <span className="gold-gradient-text">your authority</span></h2>
            </div>
            <p style={{ margin: 0, maxWidth: '440px', fontSize: '16px' }}>
              From paid acquisition and high-speed web architecture to 24/7 AI nurture agents — we architect, deploy, and scale every touchpoint.
            </p>
          </div>

          <div className="services-grid">
            <article className="svc" data-category="meta">
              <div>
                <div className="svc-top">
                  <div className="ico">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </div>
                  <span className="num">01</span>
                </div>
                <h3>Meta Ads (Facebook &amp; Instagram)</h3>
                <p>Precision social advertising planned around your buyer psychology. High-converting creative testing loops, persuasive offer hooks, and advanced retargeting funnels.</p>
              </div>
              <div className="svc-tags">
                <span className="svc-tag" style={{ background: 'var(--color-meta-bg)', color: 'var(--color-meta)', borderColor: 'var(--color-meta-border)' }}>Audience Segmentation</span>
                <span className="svc-tag">Creative Testing</span>
                <span className="svc-tag">Pixel CAPI</span>
              </div>
            </article>

            <article className="svc" data-category="google">
              <div>
                <div className="svc-top">
                  <div className="ico">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                  </div>
                  <span className="num">02</span>
                </div>
                <h3>Google Ads &amp; High-Intent PPC</h3>
                <p>Capture ready-to-buy customers at the precise moment they search for your service. Granular negative matching, high Quality Scores, and Performance Max campaigns.</p>
              </div>
              <div className="svc-tags">
                <span className="svc-tag" style={{ background: 'var(--color-google-bg)', color: 'var(--color-google)', borderColor: 'var(--color-google-border)' }}>Search Intent</span>
                <span className="svc-tag">PMax AI</span>
                <span className="svc-tag">Call Ads</span>
              </div>
            </article>

            <article className="svc" data-category="seo">
              <div>
                <div className="svc-top">
                  <div className="ico">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  </div>
                  <span className="num">03</span>
                </div>
                <h3>SEO &amp; Google Maps 3-Pack</h3>
                <p>Dominate local and national search rankings without toxic backlinks. Technical architecture, schema markup, and geo-targeted authority pages that drive organic buyers.</p>
              </div>
              <div className="svc-tags">
                <span className="svc-tag" style={{ background: 'var(--color-seo-bg)', color: 'var(--color-seo)', borderColor: 'var(--color-seo-border)' }}>Map Pack #1</span>
                <span className="svc-tag">Technical SEO</span>
                <span className="svc-tag">Schema</span>
              </div>
            </article>

            <article className="svc" data-category="web">
              <div>
                <div className="svc-top">
                  <div className="ico">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                  </div>
                  <span className="num">04</span>
                </div>
                <h3>High-Converting Web Architecture</h3>
                <p>Hand-coded, sub-second landing pages built for extreme speed and conversion rate optimization (CRO). Zero WordPress bloat, achieving &lt; 0.8s load times.</p>
              </div>
              <div className="svc-tags">
                <span className="svc-tag" style={{ background: 'var(--color-web-bg)', color: 'var(--color-web)', borderColor: 'var(--color-web-border)' }}>Sub-Second LCP</span>
                <span className="svc-tag">Zero Bloat</span>
                <span className="svc-tag">CRO</span>
              </div>
            </article>

            <article className="svc" data-category="crm">
              <div>
                <div className="svc-top">
                  <div className="ico">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <span className="num">05</span>
                </div>
                <h3>Lead Gen &amp; CRM Pipeline Automation</h3>
                <p>Never let a lead slip away. Automated WhatsApp routing, calendar appointment confirmation, SMS alerts, and two-way CRM integration directly into your sales pipeline.</p>
              </div>
              <div className="svc-tags">
                <span className="svc-tag" style={{ background: 'var(--color-crm-bg)', color: 'var(--color-crm)', borderColor: 'var(--color-crm-border)' }}>WhatsApp Flow</span>
                <span className="svc-tag">Auto Sync</span>
                <span className="svc-tag">Instant Alerts</span>
              </div>
            </article>

            <article className="svc" data-category="video">
              <div>
                <div className="svc-top">
                  <div className="ico">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
                  </div>
                  <span className="num">06</span>
                </div>
                <h3>High-Retention Video &amp; VSL Editing</h3>
                <p>Short-form Instagram Reels, YouTube Shorts, and high-converting Video Sales Letters (VSL). High-retention pacing, caption styling, and persuasive visual storytelling.</p>
              </div>
              <div className="svc-tags">
                <span className="svc-tag" style={{ background: 'var(--color-video-bg)', color: 'var(--color-video)', borderColor: 'var(--color-video-border)' }}>Instagram Reels</span>
                <span className="svc-tag">VSL</span>
                <span className="svc-tag">Hook Rate</span>
              </div>
            </article>

            <article className="svc" data-category="ai">
              <div>
                <div className="svc-top">
                  <div className="ico">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><rect x="4" y="8" width="16" height="12" rx="2" /><circle cx="9" cy="13" r="1" /><circle cx="15" cy="13" r="1" /></svg>
                  </div>
                  <span className="num">07</span>
                </div>
                <h3>24/7 WhatsApp AI Customer Agent</h3>
                <p>Deploy intelligent WhatsApp agents that instantly answer client FAQs, pre-qualify budget readiness, and book consultation appointments while your sales team sleeps.</p>
              </div>
              <div className="svc-tags">
                <span className="svc-tag" style={{ background: 'var(--color-ai-bg)', color: 'var(--color-ai)', borderColor: 'var(--color-ai-border)' }}>&lt; 30s Reply</span>
                <span className="svc-tag">Lead Qualification</span>
                <span className="svc-tag">24/7 Uptime</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           CASE STUDIES SECTION WITH AUTHENTIC META & GOOGLE REPORTING DASHBOARDS
           ========================================================================== */}
      <section className="work-section" id="case-studies">
        <div className="wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', marginBottom: '40px' }}>
            <div style={{ maxWidth: '720px' }}>
              <div className="eyebrow">Documented Client Proof</div>
              <h2 className="h2">Case studies that prove <span className="gold-gradient-text">our numbers</span></h2>
            </div>
            <p style={{ margin: 0, maxWidth: '440px', fontSize: '16px' }}>
              We build growth engines for clients who demand tangible business returns. Explore three recent verified client scale-ups.
            </p>
          </div>

          <div className="work-grid">
            {/* Case Study 01: Real Estate (Meta CAPI & Reels) */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-meta-realestate.svg" alt="Meta Ads Manager Aura Luxury Villas Dashboard" width={600} height={380} loading="lazy" decoding="async" />
                <span className="work-badge">₹14.8 Cr Sold · 4.2x Meta ROAS</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">Real Estate · Ultra Luxury</div>
                  <h3 className="work-title">Aura Luxury Villas</h3>
                  <p className="work-desc">How a luxury developer sold ₹14.8 Cr of villa inventory in 90 days by replacing slow WordPress pages with a 0.65s architectural microsite, HNI Meta Reels targeting, and automated WhatsApp site visit bookings.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">4.2x</div>
                    <div className="metric-lbl">Media ROAS</div>
                  </div>
                  <div>
                    <div className="metric-val">₹14.8 Cr</div>
                    <div className="metric-lbl">Sold Inventory</div>
                  </div>
                  <div>
                    <div className="metric-val">-48%</div>
                    <div className="metric-lbl">Cost Per Lead</div>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Link href="/case-studies/real-estate-luxury" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '14px' }}>
                    <span>Read Real Estate Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* Case Study 02: Healthcare & Clinic (Google Ads & Local 3-Pack) */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-google-clinic.svg" alt="Google Ads & Maps 3-Pack Novaderm Aesthetic Clinic Dashboard" width={600} height={380} loading="lazy" decoding="async" />
                <span className="work-badge">185+ Monthly Bookings · -62% CAC</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">Healthcare · Dermatology</div>
                  <h3 className="work-title">Novaderm Aesthetic Clinic</h3>
                  <p className="work-desc">How a premier cosmetic clinic captured #1 Google Maps 3-Pack ranking and high-intent Exact Match Google Search ads, scaling qualified monthly patient consultations from 38 to 185+ while cutting CAC by 62%.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">185+</div>
                    <div className="metric-lbl">Monthly Patients</div>
                  </div>
                  <div>
                    <div className="metric-val">-62%</div>
                    <div className="metric-lbl">Patient CAC</div>
                  </div>
                  <div>
                    <div className="metric-val">#1 Rank</div>
                    <div className="metric-lbl">Maps 3-Pack</div>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Link href="/case-studies/aesthetic-clinic" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '14px' }}>
                    <span>Read Healthcare Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* Case Study 03: E-Commerce (Shopify + Meta Advantage+ UGC) */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-dtc-ecommerce.svg" alt="Shopify Analytics & Meta Scaling Zenith Living Dashboard" width={600} height={380} loading="lazy" decoding="async" />
                <span className="work-badge">₹48.2L Monthly Revenue · 4.82x ROAS</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">E-Commerce · Home Décor</div>
                  <h3 className="work-title">Zenith Living DTC</h3>
                  <p className="work-desc">How a boutique lifestyle brand scaled from ₹4.5L/mo to ₹48.2L/mo in 90 days with rapid short-form Instagram Reels UGC split-testing, 1-click checkout funnels, and automated WhatsApp cart recovery.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">4.82x</div>
                    <div className="metric-lbl">Media ROAS</div>
                  </div>
                  <div>
                    <div className="metric-val">10.6x</div>
                    <div className="metric-lbl">Revenue Scale</div>
                  </div>
                  <div>
                    <div className="metric-val">24.2%</div>
                    <div className="metric-lbl">Cart Recovery</div>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Link href="/case-studies/ecommerce-dtc" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '14px' }}>
                    <span>Read E-Commerce Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           INTERACTIVE FUNNEL PREVIEW STUDIO
           ========================================================================== */}
      <section className="section" id="engine" style={{ background: 'var(--c-section-alt)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
        <div className="wrap">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="eyebrow">Interactive Growth Engine</div>
            <h2 className="h2">Simulate Your Custom <span className="gold-gradient-text">Acquisition Funnel</span></h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Select your industry and customize parameters to see how the Vyora Engine architects high-conversion buyer journeys.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
            {/* Controls */}
            <div className="card" style={{ padding: '36px' }}>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '8px', display: 'block' }}>Your Business Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={studioName}
                  onChange={(e) => setStudioName(e.target.value)}
                  placeholder="e.g. Apex Realties, Dr. Mehta Skin"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid var(--border-card)', background: '#FFFFFF' }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '8px', display: 'block' }}>Target Vertical / Industry</label>
                <select
                  className="form-select"
                  value={studioIndustry}
                  onChange={(e) => setStudioIndustry(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid var(--border-card)', background: '#FFFFFF' }}
                >
                  <option value="realestate">Real Estate &amp; Luxury Property</option>
                  <option value="healthcare">Healthcare, Clinic &amp; Doctors</option>
                  <option value="ecommerce">DTC E-Commerce &amp; Brands</option>
                </select>
              </div>

              <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '20px', marginTop: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>Engine Deliverables</div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                    <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span> Meta Advantage+ &amp; Google Search Setup
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                    <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span> 0.6s Sub-Second Conversion Landing Page
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                    <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span> 24/7 WhatsApp AI Appointment Scheduling
                  </li>
                </ul>
              </div>
            </div>

            {/* Live Interactive Funnel Mockup Viewport */}
            <div style={{ background: '#0F141C', borderRadius: '24px', padding: '30px', border: '2px solid var(--c-metallic-gold)', boxShadow: '0 20px 45px -10px rgba(0,0,0,0.4)', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                  <span style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '10px' }}>https://{studioName.toLowerCase().replace(/\s+/g, '')}.com/vip-funnel</span>
                </div>
                <span style={{ fontSize: '11px', background: 'rgba(16,185,129,0.15)', color: '#10B981', padding: '4px 10px', borderRadius: '100px', fontWeight: 700 }}>● Active Simulation</span>
              </div>

              <div>
                <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--c-champagne-gold)', marginBottom: '8px' }}>
                  {currentPreview.tag}
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', lineHeight: 1.3 }}>
                  {studioName} · {currentPreview.headline}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {currentPreview.sub}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link href="/contact" className="btn" style={{ minHeight: '44px', padding: '0 24px', fontSize: '14px' }}>
                    {currentPreview.cta} ➔
                  </Link>
                  <a href="https://wa.me/918925502557" target="_blank" rel="noopener" style={{ color: 'var(--c-champagne-gold)', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
                    WhatsApp Verified Concierge
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           FAST-TRACK AUDIT FORM & SALEM HQ
           ========================================================================== */}
      <section className="section" id="contact" style={{ padding: '80px 0' }}>
        <div className="wrap" style={{ maxWidth: '880px' }}>
          <div className="card" style={{ padding: '48px', border: '2px solid var(--c-metallic-gold)', borderRadius: '28px', boxShadow: 'var(--shadow-card)' }}>
            <div className="text-center" style={{ marginBottom: '32px' }}>
              <div className="eyebrow">Zero Pressure · Direct Strategy</div>
              <h2 className="h2">Claim Your 30-Minute <span className="gold-gradient-text">Growth Teardown</span></h2>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginTop: '8px' }}>
                We will audit your Meta ads, Google Search market share, and funnel speed. No generic agency fluff.
              </p>
            </div>

            <form action="https://wa.me/918925502557" method="get" target="_blank">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '20px' }}>
                <div>
                  <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block' }}>Full Name</label>
                  <input type="text" required placeholder="e.g. Dr. Ananya Kapoor" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid var(--border-card)' }} />
                </div>
                <div>
                  <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block' }}>WhatsApp Number</label>
                  <input type="tel" required placeholder="+91 89255 02557" className="form-input" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid var(--border-card)' }} />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block' }}>Current Monthly Ad Spend</label>
                <select className="form-select" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid var(--border-card)' }}>
                  <option value="under50k">₹25,000 – ₹50,000 / mo</option>
                  <option value="50k-150k" selected>₹50,000 – ₹1,50,000 / mo</option>
                  <option value="150k-500k">₹1,50,000 – ₹5,00,000 / mo</option>
                  <option value="scale">₹5,00,000+ / mo (Enterprise Scale)</option>
                </select>
              </div>

              <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '52px', fontSize: '16px' }}>
                <span>Lock In Discovery Call via WhatsApp</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </form>

            <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
              Direct Support: <a href="tel:+918925502557" style={{ color: 'var(--c-metallic-gold)', fontWeight: 700 }}>+91 89255 02557</a> · Salem Headquarters: Krishna Nagar, Mamamgam, Salem - 636302.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
