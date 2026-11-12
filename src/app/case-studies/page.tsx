import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies & Verified Transformations — Digital Marketing & Paid Media',
  description:
    'Explore real client case studies from Vyora Digital: +310% luxury real estate inquiries, -62% clinic patient CAC, and ₹48L/mo DTC e-commerce scale.',
  alternates: {
    canonical: 'https://vyoradigital.com/case-studies/',
  },
  openGraph: {
    title: 'Case Studies & Verified Transformations — Vyora Digital',
    description: 'Explore real client case studies from Vyora Digital: +310% luxury real estate inquiries, -62% clinic patient CAC, and ₹48L/mo DTC e-commerce scale.',
    url: 'https://vyoradigital.com/case-studies/',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Case Studies</span>
          </div>

          <div style={{ maxWidth: '840px' }}>
            <div className="eyebrow">Documented Client Proof</div>
            <h1 className="h1" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', marginBottom: '18px' }}>
              Case Studies That Prove <span className="gold-gradient-text">Our Numbers</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              We operate as an embedded growth partner for brands that demand verifiable business returns. Explore three in-depth client scale-up breakdowns below.
            </p>

            {/* Stats Chips Bar */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>₹42 Cr+</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Revenue Influenced</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--color-meta)' }}>3.8x</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Average Media ROAS</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#10B981' }}>180K+</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Inbound Enquiries</div>
              </div>
            </div>

            <div>
              <Link className="btn" href="/contact">
                <span>Replicate These Numbers for Your Brand</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="work-section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div className="work-grid">
            {/* 01: Real Estate */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-meta-realestate.svg" alt="Aura Luxury Villas Meta Ads Manager Results" />
                <span className="work-badge">+310% Enquiries · 4.2x ROAS</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">Real Estate · Ultra Luxury</div>
                  <h3 className="work-title">Aura Luxury Villas</h3>
                  <p className="work-desc">How a luxury developer sold ₹14.8 Cr of villa inventory in 90 days by replacing slow WordPress pages with a 0.65s architectural microsite, HNI Meta targeting, and automated WhatsApp site visit bookings.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">4.2x</div>
                    <div className="metric-lbl">ROAS</div>
                  </div>
                  <div>
                    <div className="metric-val">₹14.8 Cr</div>
                    <div className="metric-lbl">Inventory Sold</div>
                  </div>
                  <div>
                    <div className="metric-val">-48%</div>
                    <div className="metric-lbl">Cost Per Lead</div>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Link href="/case-studies/real-estate-luxury" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '14px' }}>
                    <span>Read Real Estate Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* 02: Healthcare */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-google-clinic.svg" alt="Novaderm Aesthetic Clinic Google Ads & Local 3-Pack Results" />
                <span className="work-badge">185+ Monthly Bookings · -62% CAC</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">Healthcare · Dermatology</div>
                  <h3 className="work-title">Novaderm Aesthetic Clinic</h3>
                  <p className="work-desc">How a high-end cosmetic clinic dominated local Google Search and Google Maps 3-Pack, scaling qualified monthly patient bookings to 185+ while lowering customer acquisition cost by 62%.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">0.6s</div>
                    <div className="metric-lbl">Mobile Speed</div>
                  </div>
                  <div>
                    <div className="metric-val">-62%</div>
                    <div className="metric-lbl">Acquisition Cost</div>
                  </div>
                  <div>
                    <div className="metric-val">#1 Rank</div>
                    <div className="metric-lbl">Maps 3-Pack</div>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Link href="/case-studies/aesthetic-clinic" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '14px' }}>
                    <span>Read Healthcare Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* 03: E-Commerce */}
            <article className="work">
              <div className="work-cover-wrap">
                <img className="cover" src="/assets/images/case-study-dtc-ecommerce.svg" alt="Zenith Living Shopify & Meta Scaling Dashboard" />
                <span className="work-badge">₹48L Monthly Revenue · 4.8x ROAS</span>
              </div>
              <div className="work-body">
                <div>
                  <div className="work-sector">E-Commerce · Home Décor</div>
                  <h3 className="work-title">Zenith Living DTC</h3>
                  <p className="work-desc">How a boutique lifestyle brand scaled from ₹4.5L/mo to ₹48L/mo in 90 days with rapid short-form video creative split-testing, 1-click checkout funnels, and automated WhatsApp cart recovery.</p>
                </div>
                <div className="work-metrics">
                  <div>
                    <div className="metric-val">4.8x</div>
                    <div className="metric-lbl">Media ROAS</div>
                  </div>
                  <div>
                    <div className="metric-val">10.6x</div>
                    <div className="metric-lbl">Revenue Scale</div>
                  </div>
                  <div>
                    <div className="metric-val">24%</div>
                    <div className="metric-lbl">Cart Recovery</div>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Link href="/case-studies/ecommerce-dtc" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '14px' }}>
                    <span>Read E-Commerce Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-body)', borderTop: '1px solid var(--border-card)' }}>
        <div className="wrap">
          <div className="card text-center" style={{ padding: '60px 40px', background: 'linear-gradient(135deg, rgba(8,9,12,0.98), rgba(24,27,38,0.96))', color: '#FFFFFF' }}>
            <div className="eyebrow" style={{ color: 'var(--c-metallic-gold)' }}>Your Growth Blueprint</div>
            <h2 className="h2" style={{ color: '#FFFFFF', marginBottom: '16px' }}>Ready to Turn Paid Media and Search into Predictable Profit?</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.76)', maxWidth: '640px', margin: '0 auto 30px' }}>
              Book a complimentary 30-minute growth teardown. We will analyze your competitors, search market share, and landing page conversion bottlenecks.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" href="/contact">
                <span>Claim Free Strategy Call</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a className="btn btn-secondary" href="https://wa.me/918925502557?text=Hi%20Vyora%20team%2C%20let%27s%20discuss%20case%20studies." target="_blank" rel="noopener noreferrer">
                WhatsApp Chat (+91 89255 02557)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
