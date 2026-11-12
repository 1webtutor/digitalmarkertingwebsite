'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" id="top" style={{ padding: '100px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="wrap">
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              AI GROWTH &amp; DIGITAL AUTHORITY
            </div>

            <h1 className="h1" style={{ fontSize: 'clamp(38px, 5.2vw, 68px)', lineHeight: 1.15, marginBottom: '24px' }}>
              Turn Digital Chaos Into <span className="gold-gradient-text">Predictable Revenue</span>
            </h1>

            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.7, color: 'var(--text-body)', maxWidth: '780px', margin: '0 auto 36px' }}>
              Build Visibility. Earn Authority. Accelerate Growth. We combine sub-second funnels, high-ROAS paid media, automated WhatsApp bots, and server-side tracking to engineer client acquisition machines.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
              <Link className="btn btn-primary" href="/contact" style={{ minHeight: '54px', padding: '0 32px', fontSize: '16px' }}>
                <span>Claim 100% Free Growth Audit</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link className="btn btn-secondary" href="/services" style={{ minHeight: '54px', padding: '0 28px', fontSize: '16px' }}>
                <span>Explore Growth Services</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', maxWidth: '840px', margin: '0 auto' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '18px 24px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 900, color: 'var(--c-metallic-gold)' }}>₹18.4 Cr+</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Client Pipeline</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '18px 24px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 900, color: 'var(--color-meta)' }}>4.1x</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Average Blended ROAS</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '18px 24px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 900, color: '#10B981' }}>&lt; 45 Sec</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>AI Lead Response</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '18px 24px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 900, color: 'var(--text-main)' }}>98.4%</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>Client Retainer Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services" style={{ background: 'var(--c-section-alt)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
        <div className="wrap">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="eyebrow">Full-Stack Growth Disciplines</div>
            <h2 className="h2">Everything Required to <span className="gold-gradient-text">Dominate Your Market</span></h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Seven core capabilities deployed as an interconnected growth architecture.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
            <div className="card" style={{ padding: '34px', borderTop: '4px solid var(--color-meta)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>📱</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>Meta Ads Engine (IG &amp; FB)</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                Advantage+ campaigns paired with high-velocity creative testing, persuasive offer psychology, and server-side Conversions API (CAPI).
              </p>
              <Link href="/services/meta-ads" style={{ color: 'var(--color-meta)', fontWeight: 800, fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                Explore Meta Engine ➔
              </Link>
            </div>

            <div className="card" style={{ padding: '34px', borderTop: '4px solid var(--color-google)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>Google Search Domination</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                Capturing high-intent commercial buyers at the bottom of the funnel through precision negative keyword management and Performance Max AI.
              </p>
              <Link href="/services/google-ads" style={{ color: 'var(--color-google)', fontWeight: 800, fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                Explore Google Ads ➔
              </Link>
            </div>

            <div className="card" style={{ padding: '34px', borderTop: '4px solid var(--color-seo)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>📍</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>Local Maps 3-Pack Authority</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                Rank #1 on Google Maps for local commercial queries. Schema markup, geo-citations, and automated review acquisition for clinics and firms.
              </p>
              <Link href="/services/seo-authority" style={{ color: 'var(--color-seo)', fontWeight: 800, fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                Explore Local Authority ➔
              </Link>
            </div>

            <div className="card" style={{ padding: '34px', borderTop: '4px solid var(--c-metallic-gold)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>Sub-Second Funnels</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                Ultralight landing pages loaded in &lt;0.8s with zero plugin bloat. Engineered to eliminate drop-off and maximize ad conversion rate.
              </p>
              <Link href="/services/web-funnels" style={{ color: 'var(--c-metallic-gold)', fontWeight: 800, fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                Explore Funnels ➔
              </Link>
            </div>

            <div className="card" style={{ padding: '34px', borderTop: '4px solid #0D9488' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🤖</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>24/7 WhatsApp AI Bot</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                AI booking concierges responding in under 45 seconds to qualify leads, answer FAQs, and book discovery calls directly into your CRM.
              </p>
              <Link href="/services/ai-solutions" style={{ color: '#0D9488', fontWeight: 800, fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                Explore WhatsApp AI ➔
              </Link>
            </div>

            <div className="card" style={{ padding: '34px', borderTop: '4px solid var(--color-dtc)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎬</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>High-Retention Video &amp; VSL</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                Scroll-stopping 3-second hooks, creator UGC production, and video sales letters designed to out-convert competitor text ads.
              </p>
              <Link href="/services/video-vsl" style={{ color: 'var(--color-dtc)', fontWeight: 800, fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                Explore Video Ads ➔
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section" id="work" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '640px' }}>
              <div className="eyebrow">Proven Results</div>
              <h2 className="h2">Case Studies That Prove <span className="gold-gradient-text">Our Numbers</span></h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '8px' }}>
                Real digital marketing dashboard teardowns and verified return on ad spend.
              </p>
            </div>
            <Link className="btn btn-secondary" href="/case-studies">
              <span>View All Case Studies ➔</span>
            </Link>
          </div>

          <div className="work-grid">
            {/* Case Study 1 */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-meta-realestate.svg" alt="Aura Luxury Villas Meta Ads Results" />
                <span className="work-badge">+310% Enquiries · 4.2x ROAS</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">Real Estate · Ultra Luxury</div>
                  <h3 className="work-title">Aura Luxury Villas</h3>
                  <p className="work-desc">Bespoke architectural microsite, HNI Meta ads targeting, and automated WhatsApp site visit reservations. ₹14.8 Cr inventory sold.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">4.2x</div>
                    <div className="metric-lbl">ROAS</div>
                  </div>
                  <div>
                    <div className="metric-val">₹14.8 Cr</div>
                    <div className="metric-lbl">Sold</div>
                  </div>
                  <div>
                    <div className="metric-val">-48%</div>
                    <div className="metric-lbl">CPL</div>
                  </div>
                </div>
                <div style={{ marginTop: '18px' }}>
                  <Link href="/case-studies/real-estate-luxury" style={{ color: 'var(--c-metallic-gold)', fontWeight: 800, fontSize: '13.5px', textDecoration: 'none' }}>
                    Read Case Study ➔
                  </Link>
                </div>
              </div>
            </article>

            {/* Case Study 2 */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-google-clinic.svg" alt="Novaderm Aesthetic Clinic Google Search Results" />
                <span className="work-badge">185+ Monthly Bookings · -62% CAC</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">Healthcare · Dermatology</div>
                  <h3 className="work-title">Novaderm Aesthetic Clinic</h3>
                  <p className="work-desc">High-speed patient acquisition landing page paired with local Google Search &amp; Maps ads. 0.6s mobile load time.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">0.6s</div>
                    <div className="metric-lbl">Speed</div>
                  </div>
                  <div>
                    <div className="metric-val">-62%</div>
                    <div className="metric-lbl">CAC</div>
                  </div>
                  <div>
                    <div className="metric-val">#1 Rank</div>
                    <div className="metric-lbl">Maps 3-Pack</div>
                  </div>
                </div>
                <div style={{ marginTop: '18px' }}>
                  <Link href="/case-studies/aesthetic-clinic" style={{ color: 'var(--c-metallic-gold)', fontWeight: 800, fontSize: '13.5px', textDecoration: 'none' }}>
                    Read Case Study ➔
                  </Link>
                </div>
              </div>
            </article>

            {/* Case Study 3 */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-dtc-ecommerce.svg" alt="Zenith Living Shopify & Meta Scaling Dashboard" />
                <span className="work-badge">₹48L Monthly Revenue · 4.8x ROAS</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">E-Commerce · Home Décor</div>
                  <h3 className="work-title">Zenith Living DTC</h3>
                  <p className="work-desc">Scaled a DTC brand from ₹4.5L/mo to ₹48L/mo in 90 days with rapid video creative testing and streamlined 1-click checkout.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">4.8x</div>
                    <div className="metric-lbl">ROAS</div>
                  </div>
                  <div>
                    <div className="metric-val">10.6x</div>
                    <div className="metric-lbl">Scale</div>
                  </div>
                  <div>
                    <div className="metric-val">24%</div>
                    <div className="metric-lbl">Recovery</div>
                  </div>
                </div>
                <div style={{ marginTop: '18px' }}>
                  <Link href="/case-studies/ecommerce-dtc" style={{ color: 'var(--c-metallic-gold)', fontWeight: 800, fontSize: '13.5px', textDecoration: 'none' }}>
                    Read Case Study ➔
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Interactive Growth Simulator */}
      <section className="section" id="engine" style={{ background: 'var(--c-section-alt)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
        <div className="wrap">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 46px' }}>
            <div className="eyebrow">Interactive Simulator</div>
            <h2 className="h2">Simulate Your Growth Funnel</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Adjust your monthly media spend and average customer value to model projected acquisition returns.
            </p>
          </div>

          <div className="card" style={{ maxWidth: '880px', margin: '0 auto', padding: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
              <div>
                <label style={{ fontSize: '14px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                  Monthly Ad Spend: ₹{adSpend.toLocaleString('en-IN')}
                </label>
                <input
                  type="range"
                  min="30000"
                  max="500000"
                  step="10000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--c-metallic-gold)' }}
                />

                <label style={{ fontSize: '14px', fontWeight: 700, display: 'block', marginTop: '24px', marginBottom: '8px' }}>
                  Average Customer Value: ₹{dealValue.toLocaleString('en-IN')}
                </label>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--c-metallic-gold)' }}
                />
              </div>

              <div style={{ background: 'var(--bg-body)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-card)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Simulated Monthly Model</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', fontWeight: 900, color: 'var(--c-metallic-gold)', marginTop: '8px' }}>
                  ₹{projectedRevenue.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Projected Pipeline Revenue</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-card)' }}>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>{roas}x</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Estimated ROAS</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#10B981' }}>{qualifiedSales}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Expected Deals</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <Link className="btn btn-primary" href="/contact">
                <span>Deploy This Funnel For Your Business ➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="wrap text-center" style={{ maxWidth: '820px' }}>
          <div className="eyebrow">Partner with Vyora Digital</div>
          <h2 className="h2" style={{ marginBottom: '18px' }}>Build Visibility. Earn Authority. Accelerate Growth.</h2>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '32px' }}>
            Schedule your 100% free 30-minute growth diagnostic session. Zero lock-in handcuffs, direct senior partner access, and complete asset ownership.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/contact">
              <span>Claim Free 30-Min Strategy Call</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a className="btn btn-secondary" href="https://wa.me/918925502557" target="_blank" rel="noopener noreferrer">
              WhatsApp (+91 89255 02557)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
