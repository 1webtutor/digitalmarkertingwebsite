import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aura Luxury Villas Case Study — ₹14.8 Cr Sold via Meta Ads',
  description: 'How Vyora Digital helped Aura Luxury Villas sell ₹14.8 Cr in luxury villa inventory with 4.2x ROAS and -48% CPL using high-speed funnels and WhatsApp booking.',
};

export default function RealEstateCaseStudy() {
  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/case-studies">Case Studies</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Aura Luxury Villas</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <div className="eyebrow">Real Estate · Ultra Luxury Scale</div>
            <h1 className="h1" style={{ fontSize: 'clamp(32px, 4vw, 50px)', marginBottom: '18px' }}>
              How Aura Luxury Villas Sold <span className="gold-gradient-text">₹14.8 Cr in 90 Days</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              Replacing slow WordPress lead forms with a 0.65s architectural microsite, HNI Meta Advantage+ targeting, and automated WhatsApp site visit bookings.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>₹14.8 Cr</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Inventory Sold</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--color-meta)' }}>4.2x</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Verified Media ROAS</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#10B981' }}>-48%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cost Per Lead</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#047857' }}>+310%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Site Visit Bookings</div>
              </div>
            </div>

            <Link className="btn" href="/contact">
              <span>Schedule Strategy Call for Your Property</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '70px 0' }}>
        <div className="wrap subpage-grid">
          <div className="subpage-main">
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1.5px solid var(--border-card)', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
              <img src="/assets/images/case-study-meta-realestate.svg" alt="Aura Luxury Villas Meta Ads Campaign Results" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            <div className="content-block">
              <h2>1. The Challenge: High CPL &amp; Unqualified Lead Leakage</h2>
              <p>
                Aura Luxury Villas had launched an exclusive enclave of bespoke private villas priced between ₹2.8 Cr and ₹4.5 Cr. Prior to partnering with Vyora Digital, their previous marketing agency was running generic Facebook Lead Ads pointing to an unoptimized 5.2-second slow WordPress website.
              </p>
              <p>
                Their sales team was overwhelmed by low-intent tire-kickers, students asking for price lists, and disconnected phone numbers. Cost per genuine site visit was skyrocketing above ₹4,200, and inventory sales had ground to a halt.
              </p>
            </div>

            <div className="content-block">
              <h2>2. The Vyora Architecture: Sub-Second Microsite &amp; WhatsApp Qualification</h2>
              <p>
                We deployed our full 3-pillar acquisition infrastructure:
              </p>
              <ul>
                <li><strong>Ultralight Architectural Microsite:</strong> Replaced WordPress with a handcrafted HTML5/CSS3 landing page loading in 0.65 seconds, featuring interactive 3D floor plans and high-resolution video walkthroughs.</li>
                <li><strong>HNI Creative Angle Testing:</strong> Produced 12 cinematic 4K video ads highlighting private pool amenities, gated community exclusivity, and Salem-Bangalore highway proximity.</li>
                <li><strong>Automated WhatsApp CRM Integration:</strong> Inbound leads were routed directly into a conversational WhatsApp bot that verified buyer intent, checked investment budget, and scheduled an accompanied site visit within 45 seconds.</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>3. The Verified Results</h2>
              <p>
                Over the 90-day campaign sprint, Aura Luxury Villas achieved:
              </p>
              <ul>
                <li><strong>₹14.8 Crore</strong> in gross villa sales directly attributed to the digital acquisition engine.</li>
                <li><strong>85 accompanied site visits</strong> booked by pre-qualified high-net-worth individuals.</li>
                <li><strong>48.2% reduction</strong> in cost-per-lead (CPL) compared to previous agency benchmarks.</li>
                <li><strong>4.2x blended ROAS</strong> across total media spend and creative production.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="subpage-sidebar">
            <div className="card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Project Summary</h3>
              <div style={{ fontSize: '14px', lineHeight: 2 }}>
                <div><strong>Client:</strong> Aura Luxury Villas</div>
                <div><strong>Industry:</strong> Ultra-Luxury Real Estate</div>
                <div><strong>Location:</strong> Salem &amp; Bangalore Corridor</div>
                <div><strong>Channels:</strong> Meta Ads, Server-Side CAPI, WhatsApp Bot</div>
                <div><strong>Timeline:</strong> 90 Days</div>
                <div><strong>Outcome:</strong> ₹14.8 Cr Sold (4.2x ROAS)</div>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-card)' }}>
                <Link className="btn btn-primary" href="/contact" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Claim Real Estate Audit</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
