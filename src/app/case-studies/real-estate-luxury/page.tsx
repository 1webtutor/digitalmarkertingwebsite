import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SidebarLeadForm from '@/components/SidebarLeadForm';

export const metadata: Metadata = {
  title: 'Aura Luxury Villas Case Study — ₹14.8 Cr Sold via Meta Ads',
  description: 'How Vyora Digital helped Aura Luxury Villas sell ₹14.8 Cr in luxury villa inventory with 4.2x ROAS and -48% CPL using high-speed funnels and WhatsApp booking.',
  alternates: {
    canonical: 'https://vyoradigital.com/case-studies/real-estate-luxury/',
  },
  openGraph: {
    title: 'Aura Luxury Villas Case Study — Vyora Digital',
    description: 'How Vyora Digital helped Aura Luxury Villas sell ₹14.8 Cr in luxury villa inventory with 4.2x ROAS and -48% CPL.',
    url: 'https://vyoradigital.com/case-studies/real-estate-luxury/',
  },
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
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>₹14.8 Cr</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Inventory Sold</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--color-meta)' }}>4.2x</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Verified Media ROAS</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#10B981' }}>-48%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cost Per Lead</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
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
            {/* Real Meta Ads Reporting Dashboard */}
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

              <div className="deliverables-grid">
                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    High-End Instagram Reels Video Creatives
                  </h4>
                  <p>Produced 12 cinematic architectural video walkthroughs showcasing private plunge pools and high ceilings, converting 74% of traffic from Instagram Reels.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Meta Advantage+ with Conversions API (CAPI)
                  </h4>
                  <p>Server-to-server tracking captured 100% of high-net-worth iOS users, training the algorithm to target real estate buyers looking at ₹3Cr+ properties.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Sub-Second HTML5 Architectural Microsite
                  </h4>
                  <p>Replaced bloated templates with a 0.65-second bespoke landing page with interactive 3D floor plans and instant WhatsApp concierge triggers.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Automated 45-Second WhatsApp Concierge
                  </h4>
                  <p>Inbound leads received personalized floor plan PDFs within 45 seconds, scheduling 85 accompanied site visits directly with relationship managers.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>3. The Verified Results</h2>
              <p>
                Over the 90-day campaign sprint, Aura Luxury Villas achieved:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-main)' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ECFDF5', color: '#047857', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '13px' }}>✓</span>
                  <strong>₹14.8 Crore</strong> in gross villa sales directly attributed to the digital acquisition engine.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-main)' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ECFDF5', color: '#047857', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '13px' }}>✓</span>
                  <strong>85 accompanied site visits</strong> booked by pre-qualified high-net-worth individuals.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-main)' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ECFDF5', color: '#047857', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '13px' }}>✓</span>
                  Cost per verified enquiry dropped by <strong>48%</strong> (down to ₹480 average CPL).
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-main)' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ECFDF5', color: '#047857', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '13px' }}>✓</span>
                  Achieved an overall verified <strong>4.20x blended ROAS</strong> across ₹6.97L total Meta ad spend.
                </li>
              </ul>
            </div>

            {/* Client Endorsement Card */}
            <div className="content-block" style={{ background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF5E8 60%, #F5EED8 100%)', border: '2px solid var(--c-metallic-gold)', boxShadow: '0 16px 36px -10px rgba(212,175,55,0.25)', borderRadius: '24px', padding: '42px', color: '#0F172A', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '28px', top: '18px', fontFamily: 'serif', fontSize: '88px', lineHeight: 1, color: 'rgba(212,175,55,0.18)', pointerEvents: 'none' }}>“</div>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold-dark)' }}>★ Verified Client Endorsement</div>
              <blockquote style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: 1.75, color: '#1E293B', margin: '12px 0 24px 0', fontWeight: 500 }}>
                &ldquo;Vyora rebuilt our landing page and Meta ad funnels from scratch. Enquiries stopped being a trickle, and our Instagram Reels ads brought actual villa buyers directly to our sales office. They delivered ₹14.8 Cr in closed inventory in 90 days.&rdquo;
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg, #AA771C 0%, #D4AF37 100%)', color: '#FFFFFF', fontWeight: 800, fontSize: '18px', display: 'grid', placeItems: 'center' }}>RD</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>Rajiv Deshmukh</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--c-metallic-gold-dark)' }}>Managing Director, Horizon Realties &amp; Aura Luxury Villas · ★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="subpage-sidebar">
            <SidebarLeadForm
              title="Scale Your Real Estate Sales"
              subtitle="Request a 30-minute property teardown. We will analyze your current CPL, ad copy, and site visit booking rate."
              serviceDefault="Real Estate Growth Audit"
              customFieldLabel="Project Name & Location"
              customFieldPlaceholder="e.g. Greenfield Enclave, Salem"
              btnText="Schedule Real Estate Audit"
              sourcePage="Real Estate Luxury Case Study"
            />

            {/* Salem Headquarters Luxury Card */}
            <div className="sidebar-card" style={{ background: '#FFFFFF', border: '2px solid rgba(212,175,55,0.35)', borderRadius: '20px', padding: '28px', boxShadow: '0 12px 30px -8px rgba(0,0,0,0.06)' }}>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold-dark)', marginBottom: '8px' }}>📍 Salem Headquarters</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Direct Developer Growth Advisory</h4>
              <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.6, marginBottom: '16px' }}>
                Krishna Nagar, Mamamgam, Salem - 636302, Tamil Nadu, India.
              </p>
              <div style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '12px', padding: '12px 16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Direct Line</div>
                <a href="tel:+918925502557" style={{ color: '#0F172A', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '18px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <span>📞</span> +91 89255 02557
                </a>
              </div>
              <a href="https://wa.me/918925502557?text=Hi%20Vyora%20Digital%2C%20I%20would%20like%20to%20audit%20our%20real%20estate%20funnels." target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '13.5px' }}>
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
