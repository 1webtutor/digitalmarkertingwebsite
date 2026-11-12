import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Agency — The Vyora Philosophy & Growth Architecture',
  description:
    'Learn how Vyora Digital inverts the broken traditional marketing model with sub-second infrastructure, first-party attribution, and month-to-month performance retainers.',
};

export default function AboutPage() {
  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>About Agency</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <div className="eyebrow">The Vyora Philosophy</div>
            <h1 className="h1" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', marginBottom: '20px' }}>
              We Replace Vanity Clicks with <span className="gold-gradient-text">Verified Revenue</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '32px' }}>
              Vyora Digital is an AI-augmented performance marketing firm engineered for ambitious brands that have outgrown traditional agencies. We unite sub-second technical infrastructure, server-side attribution, high-velocity creative testing, and automated CRM pipelines into one unstoppable growth engine.
            </p>

            {/* Stats Chips Bar */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>₹18.4 Cr+</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Pipeline Generated</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--color-meta)' }}>4.1x</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Average Client ROAS</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>98.4%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Client Retention Rate</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>&lt; 45 Sec</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Lead Response Speed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Mission Comparison */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
            <div className="card" style={{ padding: '40px' }}>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold)' }}>Why We Exist</div>
              <h2 className="h2" style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: '20px' }}>
                The Traditional Agency Model is Fundamentally Broken
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '16px' }}>
                Most business owners have been burned by digital marketing agencies. The story is always the same: you get pitched by charming senior directors, but the moment you sign a 6-month contract, your account is handed off to an overworked junior intern managing 20 accounts at once.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '16px' }}>
                At the end of every month, you receive a glossy 40-page PDF filled with vanity metrics: &ldquo;impressions went up 300%&rdquo; or &ldquo;reach doubled&rdquo;—while your cash register is empty, your leads are cold, and your actual sales pipeline is flat.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)' }}>
                <strong>Vyora Digital was built to invert this broken model.</strong> We do not track impressions or congratulate ourselves on clicks. We measure our worth solely on <strong>Customer Acquisition Cost (CAC)</strong>, <strong>Return on Ad Spend (ROAS)</strong>, and <strong>Net Booked Revenue</strong>.
              </p>
            </div>

            <div className="card" style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(212,175,55,0.06), rgba(243,229,171,0.08))', border: '1.5px solid rgba(212,175,55,0.3)' }}>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold)' }}>Our Core Mission</div>
              <h2 className="h2" style={{ fontSize: 'clamp(24px, 3vw, 36px)', marginBottom: '20px' }}>
                To Give Ambitious Brands Total Market Authority
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>
                Our mission is simple: to engineer predictable, self-sustaining customer acquisition pipelines that allow our clients to dominate their respective markets without being held hostage by algorithm whims or rising ad costs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--c-metallic-gold)', color: '#08090C', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 600 }}>
                    Zero Vanity Metrics — We report pipeline value, qualified consultations, and net cash collected.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--c-metallic-gold)', color: '#08090C', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 600 }}>
                    Direct Senior Partner Access — You work directly with veteran growth engineers, never interns.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--c-metallic-gold)', color: '#08090C', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 600 }}>
                    Complete Asset Ownership — You own 100% of your ad accounts, creative masters, tracking pixels, and code.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--c-metallic-gold)', color: '#08090C', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>✓</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 600 }}>
                    No Multi-Month Lock-Ins — We earn our partnership month after month based on pure performance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Grid */}
      <section className="section" style={{ background: 'var(--c-section-alt)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
        <div className="wrap">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto 50px' }}>
            <div className="eyebrow">The Engine Pillars</div>
            <h2 className="h2">The 4 Principles That Drive Every Vyora Campaign</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Built on mathematical rigor, conversion engineering, and automated first-party attribution.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div className="card" style={{ padding: '32px', borderTop: '4px solid var(--c-metallic-gold)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(212,175,55,0.12)', color: 'var(--c-metallic-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', marginBottom: '20px' }}>⚡</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>Sub-Second Speed</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)' }}>
                A slow website destroys paid traffic before it has a chance to convert. We handcraft ultralight landing pages with zero WordPress bloat, achieving &lt; 0.8s Largest Contentful Paint. Speed is the silent multiplier of ROAS.
              </p>
              <div style={{ marginTop: '18px', fontSize: '12px', fontWeight: 700, color: 'var(--c-metallic-gold)', textTransform: 'uppercase' }}>
                ✓ 100/100 Core Web Vitals
              </div>
            </div>

            <div className="card" style={{ padding: '32px', borderTop: '4px solid var(--color-meta)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--color-meta-bg)', color: 'var(--color-meta)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>Commercial Intent Only</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)' }}>
                We strictly target prospects at the bottom of the funnel who have purchasing authority, high disposable income, and active buying intent. No budget is wasted on passive scrollers or unqualified clicks.
              </p>
              <div style={{ marginTop: '18px', fontSize: '12px', fontWeight: 700, color: 'var(--color-meta)', textTransform: 'uppercase' }}>
                ✓ HNI &amp; In-Market Buyers
              </div>
            </div>

            <div className="card" style={{ padding: '32px', borderTop: '4px solid var(--color-seo)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--color-seo-bg)', color: 'var(--color-seo)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', marginBottom: '20px' }}>🤖</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>AI-Driven Automation</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)' }}>
                From 24/7 WhatsApp AI booking concierges responding in under 45 seconds to server-side Meta Conversions API (CAPI), we automate the entire lead qualification and CRM journey to eliminate lead leakage.
              </p>
              <div style={{ marginTop: '18px', fontSize: '12px', fontWeight: 700, color: 'var(--color-seo)', textTransform: 'uppercase' }}>
                ✓ &lt; 45s SLA Lead Response
              </div>
            </div>

            <div className="card" style={{ padding: '32px', borderTop: '4px solid var(--color-google)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--color-google-bg)', color: 'var(--color-google)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', marginBottom: '20px' }}>📊</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>Attribution Truth</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)' }}>
                With third-party cookies dying, we deploy first-party data tagging and server-side tracking. You get an unvarnished real-time dashboard showing exactly which ad generated which rupee in profit.
              </p>
              <div style={{ marginTop: '18px', fontSize: '12px', fontWeight: 700, color: 'var(--color-google)', textTransform: 'uppercase' }}>
                ✓ Real-Time Net Revenue P&amp;L
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Tech Stack */}
      <section className="section">
        <div className="wrap">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 46px' }}>
            <div className="eyebrow">Enterprise Tech Stack</div>
            <h2 className="h2">Engineered with Best-in-Class Platforms</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '8px' }}>
              We leverage enterprise tools and AI infrastructure to keep your customer acquisition ahead of market shifts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '18px' }}>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📱</div>
              <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '16px' }}>Meta Ads</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Advantage+ &amp; CAPI</div>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔍</div>
              <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '16px' }}>Google Ads</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Search &amp; PMax AI</div>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>💬</div>
              <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '16px' }}>WhatsApp API</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Cloud API &amp; AI Bot</div>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🛍️</div>
              <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '16px' }}>Shopify Plus</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Headless Funnels</div>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>⚡</div>
              <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '16px' }}>Next.js &amp; Edge</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Cloudflare Global CDN</div>
            </div>
            <div className="card text-center" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🎯</div>
              <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '16px' }}>CRM Automation</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>HighLevel &amp; Webhooks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Salem Headquarters & Strategic Operations */}
      <section className="section">
        <div className="wrap">
          <div className="card" style={{ padding: '44px', border: '1.5px solid var(--border-card)', background: '#FFFFFF' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--c-metallic-gold)' }}>Headquarters &amp; Direct Operations</div>
                <h2 className="h2" style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', marginBottom: '16px' }}>
                  Rooted in Salem, Tamil Nadu. Delivering Across India &amp; Globally.
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>
                  Our strategic operations and growth engineering lab are based out of Salem, Tamil Nadu, allowing us to maintain elite engineering standards and responsive client partnerships without bloated metropolitan agency overhead.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px' }}>
                  <div>
                    <strong style={{ color: 'var(--text-main)' }}>Registered Address:</strong><br />
                    <span style={{ color: 'var(--text-body)' }}>Krishna Nagar, Mamamgam, Salem - 636302, Tamil Nadu, India.</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-main)' }}>Direct Support &amp; WhatsApp:</strong><br />
                    <a href="tel:+918925502557" style={{ color: 'var(--c-metallic-gold)', fontWeight: 700, textDecoration: 'none' }}>+91 89255 02557</a>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-main)' }}>Official Instagram:</strong><br />
                    <a href="https://www.instagram.com/vyora.ai_digitalgrowth" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-metallic-gold)', fontWeight: 700, textDecoration: 'none' }}>@vyora.ai_digitalgrowth</a>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-main)' }}>Official Domain:</strong><br />
                    <span style={{ color: 'var(--text-body)' }}>vyoradigital.com</span>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1.5px solid var(--border-card)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
                  Schedule a 1-on-1 Growth Diagnostic
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Meet with our Senior Growth Strategist to review your current acquisition bottlenecks, ad spend efficiency, and conversion architecture.
                </p>
                <Link className="btn btn-primary" href="/contact" style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }}>
                  <span>Claim Free 30-Min Growth Audit</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a className="btn btn-secondary" href="https://wa.me/918925502557?text=Hi%20Vyora%20Digital%2C%20I%20want%20to%20book%20an%20audit." target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center' }}>
                  Direct WhatsApp (+91 89255 02557)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
