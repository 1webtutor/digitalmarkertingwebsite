import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zenith Living DTC Case Study — Scaled 10.6x to ₹48L/Month with 4.8x ROAS',
  description: 'How Vyora Digital scaled Zenith Living from ₹4.5L to ₹48L/month in 90 days with rapid video creative testing, 1-click checkout funnels, and WhatsApp cart recovery.',
  alternates: {
    canonical: 'https://vyoradigital.com/case-studies/ecommerce-dtc/',
  },
  openGraph: {
    title: 'Zenith Living DTC Case Study — Vyora Digital',
    description: 'How Vyora Digital scaled Zenith Living from ₹4.5L to ₹48L/month in 90 days with rapid video creative testing and 1-click checkout funnels.',
    url: 'https://vyoradigital.com/case-studies/ecommerce-dtc/',
  },
};

export default function EcommerceCaseStudy() {
  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/case-studies">Case Studies</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Zenith Living DTC</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <div className="eyebrow">DTC E-Commerce Scaling · Meta Advantage+ &amp; CAPI</div>
            <h1 className="h1" style={{ fontSize: 'clamp(32px, 4vw, 50px)', marginBottom: '18px' }}>
              Scaling a DTC Brand 10.6x to <span className="gold-gradient-text">₹48L / Month</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              How rapid short-form video creative split-testing, 1-click checkout optimization, and automated WhatsApp cart recovery unlocked 4.82x blended ROAS.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--color-dtc)' }}>₹48.2L</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Monthly Revenue</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>4.82x</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Blended ROAS</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#10B981' }}>+24.2%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cart Recovery</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>15 Ads / Wk</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Creative Velocity</div>
              </div>
            </div>

            <Link className="btn" href="/contact">
              <span>Scale Your E-Commerce Brand</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '70px 0' }}>
        <div className="wrap subpage-grid">
          <div className="subpage-main">
            {/* Real DTC E-Commerce Reporting Dashboard */}
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1.5px solid var(--border-card)', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
              <img src="/assets/images/case-study-dtc-ecommerce.svg" alt="Zenith Living Shopify and Meta Scaling Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            <div className="content-block">
              <h2>1. The Challenge: Creative Fatigue &amp; Checkout Abandonment</h2>
              <p>
                Zenith Living had stagnated at ₹4.5L/month in sales. Whenever they boosted ad spend, their Meta ad campaigns experienced severe creative fatigue within 7 days, causing ROAS to drop from 2.2x to 1.1x. Furthermore, 78% of shoppers abandoned checkout due to slow load times and confusing multi-step forms.
              </p>
            </div>

            <div className="content-block">
              <h2>2. The Vyora Strategy: 15 UGC Variations/Week &amp; WhatsApp Cart Recovery</h2>
              <p>
                We deployed a multi-channel scaling playbook:
              </p>

              <div className="deliverables-grid">
                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Rapid UGC Creative Sprint (15 Ads / Week)
                  </h4>
                  <p>Produced and tested 15 short-form video hooks per week across Reels and Meta Advantage+, identifying 3 top-performing unicorn angles with 3.92% CTR.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Headless 1-Click Fastlane Checkout
                  </h4>
                  <p>Replaced slow checkout scripts with a 0.7s streamlined payment funnel that reduced checkout abandonment by 24.2%.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Meta CAPI Server Tracking
                  </h4>
                  <p>Bypassed iOS tracking loss with server-side CAPI integration, feeding clean transaction data directly back to Meta&apos;s machine learning models.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Automated WhatsApp Abandoned Cart Engine
                  </h4>
                  <p>Sent hyper-personalized WhatsApp messages with 1-click buy links within 15 minutes of cart abandonment, recovering 24.2% of lost sales.</p>
                </div>
              </div>
            </div>

            {/* Growth Comparison Table */}
            <div className="card" style={{ padding: '36px', marginBottom: '30px' }}>
              <div className="eyebrow" style={{ color: 'var(--color-dtc)' }}>Verified Transformation</div>
              <h2 className="h3" style={{ marginBottom: '24px' }}>Day 0 vs. Day 90 Results</h2>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border-card)' }}>
                      <th style={{ padding: '12px 14px', fontWeight: 800 }}>Key Performance Metric</th>
                      <th style={{ padding: '12px 14px', fontWeight: 700, color: '#991B1B' }}>Before Vyora (Day 0)</th>
                      <th style={{ padding: '12px 14px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>With Vyora (Day 90)</th>
                      <th style={{ padding: '12px 14px', fontWeight: 800, color: '#10B981' }}>Net Improvement</th>
                    </tr>
                  </thead>
                  <tbody style={{ lineHeight: 1.7 }}>
                    <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600 }}>Monthly Revenue</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>₹4,50,000</td>
                      <td style={{ padding: '12px 14px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>₹48,15,400</td>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: '#10B981' }}>+1,066% (10.6x)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600 }}>Blended ROAS</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>1.9x</td>
                      <td style={{ padding: '12px 14px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>4.82x</td>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: '#10B981' }}>+153% ROAS Gain</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600 }}>Cart Abandonment Rate</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>78.4%</td>
                      <td style={{ padding: '12px 14px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>54.2%</td>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: '#10B981' }}>-24.2% Drop</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600 }}>Average Order Value (AOV)</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>₹2,150</td>
                      <td style={{ padding: '12px 14px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>₹3,480</td>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: '#10B981' }}>+61.8% Bundle Lift</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px 14px', fontWeight: 600 }}>CAC (Customer Acquisition Cost)</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>₹1,130</td>
                      <td style={{ padding: '12px 14px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>₹722</td>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: '#10B981' }}>-36.1% Cheaper</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Client Endorsement Card */}
            <div className="content-block" style={{ background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF5E8 60%, #F5EED8 100%)', border: '2px solid var(--c-metallic-gold)', boxShadow: '0 16px 36px -10px rgba(212,175,55,0.25)', borderRadius: '24px', padding: '42px', color: '#0F172A', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '28px', top: '18px', fontFamily: 'serif', fontSize: '88px', lineHeight: 1, color: 'rgba(212,175,55,0.18)', pointerEvents: 'none' }}>“</div>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold-dark)' }}>★ Verified Client Endorsement</div>
              <blockquote style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: 1.75, color: '#1E293B', margin: '12px 0 24px 0', fontWeight: 500 }}>
                &ldquo;Before Vyora Digital, our ROAS was swinging between 1.2x and 1.9x and scaling spend burnt cash. Their short-form video creative sprint and 1-click checkout took us to ₹48 Lakhs in 90 days. They operate like co-founders, not an agency.&rdquo;
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)', color: '#FFFFFF', fontWeight: 800, fontSize: '18px', display: 'grid', placeItems: 'center' }}>SK</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>Siddharth Kumar</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--c-metallic-gold-dark)' }}>Co-Founder &amp; CEO, Zenith Living · ★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="subpage-sidebar">
            <div className="card" style={{ padding: '30px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Project Summary</h3>
              <div style={{ fontSize: '14px', lineHeight: 2 }}>
                <div><strong>Client:</strong> Zenith Living</div>
                <div><strong>Industry:</strong> Home Décor &amp; Ergonomics DTC</div>
                <div><strong>Scale:</strong> ₹4.5L/mo to ₹48.2L/mo</div>
                <div><strong>Channels:</strong> Meta Ads, Shopify Plus, WhatsApp Bot</div>
                <div><strong>Blended ROAS:</strong> 4.82x</div>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-card)' }}>
                <Link className="btn btn-primary" href="/contact" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Claim E-Commerce Audit</span>
                </Link>
              </div>
            </div>

            {/* Salem Headquarters Luxury Card */}
            <div className="sidebar-card" style={{ background: '#FFFFFF', border: '2px solid rgba(212,175,55,0.35)', borderRadius: '20px', padding: '28px', boxShadow: '0 12px 30px -8px rgba(0,0,0,0.06)' }}>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold-dark)', marginBottom: '8px' }}>📍 Salem Headquarters</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Direct DTC Brand Scale Advisory</h4>
              <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.6, marginBottom: '16px' }}>
                Krishna Nagar, Mamamgam, Salem - 636302, Tamil Nadu, India.
              </p>
              <div style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '12px', padding: '12px 16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Direct Line</div>
                <a href="tel:+918925502557" style={{ color: '#0F172A', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '18px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <span>📞</span> +91 89255 02557
                </a>
              </div>
              <a href="https://wa.me/918925502557?text=Hi%20Vyora%20Digital%2C%20I%20would%20like%20to%20audit%20our%20DTC%20e-commerce%20funnels." target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '13.5px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M9.5 9.5c.3 1.6 1.4 3 3 3.8l.9-.9c.2-.2.5-.2.8-.1l1.3.6c.3.1.4.4.3.7-.3 1-1.2 1.6-2.2 1.4-3-.6-5.3-2.9-5.9-5.9-.2-1 .4-1.9 1.4-2.2.3-.1.6 0 .7.3l.6 1.3c.1.3.1.6-.1.8z"></path></svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
