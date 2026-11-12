import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Novaderm Aesthetic Clinic Case Study — 185+ Consultations & -62% CAC',
  description: 'How Vyora Digital helped Novaderm Clinic scale to 185+ monthly consultations and drop patient acquisition cost by 62% using Google Ads and Maps 3-Pack.',
};

export default function AestheticClinicCaseStudy() {
  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/case-studies">Case Studies</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Novaderm Clinic</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <div className="eyebrow">Healthcare &amp; Aesthetic Medicine</div>
            <h1 className="h1" style={{ fontSize: 'clamp(32px, 4vw, 50px)', marginBottom: '18px' }}>
              How Novaderm Scaled to <span className="gold-gradient-text">185+ Monthly Consultations</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              Slashing patient CAC by 62% and capturing the #1 spot on Google Maps 3-Pack with commercial search intent campaigns.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#10B981' }}>185+ / mo</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Patient Bookings</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>-62%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Patient CAC</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#2563EB' }}>#1 Rank</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Google Maps 3-Pack</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>0.58s</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Booking Speed</div>
              </div>
            </div>

            <Link className="btn" href="/contact">
              <span>Book Discovery Call for Your Clinic</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '70px 0' }}>
        <div className="wrap subpage-grid">
          <div className="subpage-main">
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1.5px solid var(--border-card)', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
              <img src="/assets/images/case-study-google-clinic.svg" alt="Novaderm Clinic Google Search and Maps Results" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            <div className="content-block">
              <h2>1. The Challenge: Fragmented Visibility &amp; Slow Front-Desk Conversions</h2>
              <p>
                Novaderm is a high-end cosmetic dermatology clinic offering advanced laser skin resurfacing and aesthetic injectables. Despite top-tier medical expertise, patient bookings were stagnant because competitors were outranking them on local Google searches, and front-desk phone lines missed after-hours inquiries.
              </p>
            </div>

            <div className="content-block">
              <h2>2. The Vyora Strategy: Commercial Search &amp; 24/7 WhatsApp AI Bot</h2>
              <p>
                We engineered a full-funnel medical patient acquisition engine:
              </p>
              <ul>
                <li><strong>Local Maps 3-Pack Optimization:</strong> Re-architected their Google Business Profile with location schema, geotagged service photos, and review acquisition workflows.</li>
                <li><strong>Bottom-of-Funnel Google Search Ads:</strong> Bidded exclusively on high-intent procedure keywords like &ldquo;laser acne scar removal clinic&rdquo; and &ldquo;dermatologist in Salem&rdquo;.</li>
                <li><strong>Sub-30s WhatsApp Concierge:</strong> Instant booking bot answered patient FAQs on treatment pricing and slotted them directly into clinic consultation software.</li>
              </ul>
            </div>
          </div>

          <aside className="subpage-sidebar">
            <div className="card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Project Summary</h3>
              <div style={{ fontSize: '14px', lineHeight: 2 }}>
                <div><strong>Client:</strong> Novaderm Aesthetic Clinic</div>
                <div><strong>Industry:</strong> Aesthetic Dermatology</div>
                <div><strong>Location:</strong> Salem &amp; Coimbatore</div>
                <div><strong>Channels:</strong> Google Ads, Maps SEO, WhatsApp AI</div>
                <div><strong>Outcome:</strong> 185+ Monthly Bookings (-62% CAC)</div>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-card)' }}>
                <Link className="btn btn-primary" href="/contact" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Claim Healthcare Audit</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
