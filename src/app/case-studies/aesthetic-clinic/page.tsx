import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SidebarLeadForm from '@/components/SidebarLeadForm';

export const metadata: Metadata = {
  title: 'Novaderm Aesthetic Clinic Case Study — 185+ Monthly Patients (-62% CAC)',
  description: 'How Vyora Digital scaled Novaderm Aesthetic Clinic to 185+ monthly patients with Google Search Ads, Google Maps 3-Pack, and WhatsApp AI bot.',
  alternates: {
    canonical: 'https://vyoradigital.com/case-studies/aesthetic-clinic/',
  },
  openGraph: {
    title: 'Novaderm Aesthetic Clinic Case Study — Vyora Digital',
    description: 'How Vyora Digital scaled Novaderm Aesthetic Clinic to 185+ monthly patients with Google Search Ads, Google Maps 3-Pack, and WhatsApp AI bot.',
    url: 'https://vyoradigital.com/case-studies/aesthetic-clinic/',
  },
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
            <span style={{ color: 'var(--text-main)' }}>Novaderm Aesthetic Clinic</span>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <div className="eyebrow">Healthcare &amp; Aesthetic Medicine · Google Scale</div>
            <h1 className="h1" style={{ fontSize: 'clamp(32px, 4vw, 50px)', marginBottom: '18px' }}>
              How Novaderm Scaled to <span className="gold-gradient-text">185+ Bookings / Month</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              Slashing patient acquisition cost by 62.4% with bottom-of-funnel Google Search Ads, local Google Maps 3-Pack authority, and a sub-45s WhatsApp AI patient concierge.
            </p>

            {/* Stats Chips Bar */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--color-google)' }}>185+ / Mo</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Qualified Consultations</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#10B981' }}>-62%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Patient Acquisition Cost</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--color-seo)' }}>#1 Rank</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Maps 3-Pack (14 Treatments)</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>&lt; 45s</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>WhatsApp AI Reply Velocity</div>
              </div>
            </div>

            <Link className="btn" href="/contact">
              <span>Schedule Clinic Growth Strategy Call</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '70px 0' }}>
        <div className="wrap subpage-grid">
          <div className="subpage-main">
            {/* Real Google Ads Report Dashboard */}
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1.5px solid var(--border-card)', boxShadow: 'var(--shadow-card)', marginBottom: '30px' }}>
              <img src="/assets/images/case-study-google-clinic.svg" alt="Novaderm Aesthetic Clinic Google Ads &amp; Local 3-Pack Growth Teardown" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            <div className="content-block">
              <h2>1. The Challenge: Fierce Local Competition &amp; Slow Front-Desk Response</h2>
              <p>
                Novaderm Aesthetic Clinic is a premier cosmetic dermatology practice offering advanced skin rejuvenation, laser treatments, and hair restoration. Despite having world-class doctors and state-of-the-art US-FDA approved lasers, the clinic struggled with patient acquisition.
              </p>
              <p>
                Their Google Business Profile sat on page 2 of local search results, while large corporate hospital chains dominated the map pack. Furthermore, patients searching high-intent terms like <em>&ldquo;dermatologist clinic near me&rdquo;</em> or <em>&ldquo;laser skin rejuvenation treatment&rdquo;</em> were captured by competing clinics running Google Search Ads, while Novaderm&apos;s inbound leads waited 3 to 4 hours for front-desk replies.
              </p>
            </div>

            <div className="content-block">
              <h2>2. The Solution: High-Intent Google Search Ads, Maps 3-Pack &amp; WhatsApp AI</h2>
              <p>
                Vyora Digital engineered an end-to-end Google search acquisition pipeline:
              </p>

              <div className="deliverables-grid">
                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Google Search Ads (Exact &amp; Phrase Match)
                  </h4>
                  <p>Targeted bottom-of-funnel commercial keywords like <code>[dermatologist clinic near me]</code> and <code>&ldquo;laser skin rejuvenation treatment&rdquo;</code> with 9.4/10 Quality Scores and strict negative keyword lists to eliminate junk clicks.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Google Maps 3-Pack Authority Engine
                  </h4>
                  <p>Standardized NAP citations across 60+ healthcare directories, injected MedicalBusiness schema markup, geo-tagged clinic photos, and automated 5-star review collection after appointments.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Call Extensions &amp; Promoted Map Pins
                  </h4>
                  <p>Direct click-to-call mobile buttons and promoted location pins generated 620+ calls and 840+ driving direction requests directly from local search results.</p>
                </div>

                <div className="deliverable-box">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-metallic-gold)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    24/7 WhatsApp AI Appointment Concierge
                  </h4>
                  <p>Deployed a custom WhatsApp bot that answered treatment FAQs, pre-screened patient skin concerns in &lt; 45 seconds, and booked consultation slots directly into the doctor&apos;s calendar.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>3. The Results: 1,110 Total Bookings, 185+ / Mo at -62.4% CAC</h2>
              <p>
                Within 6 months of campaign execution, Novaderm experienced a transformative surge in booked patients:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-main)' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ECFDF5', color: '#047857', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '13px' }}>✓</span>
                  Achieved <strong>#1 position on Google Maps</strong> for 14 major dermatology and cosmetic treatment keywords.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-main)' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ECFDF5', color: '#047857', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '13px' }}>✓</span>
                  Scaled to <strong>185+ monthly qualified patient consultations</strong> (1,110 total conversions across the 6-month cycle).
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--text-main)' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ECFDF5', color: '#047857', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '13px' }}>✓</span>
                  Cost per acquisition (CAC) dropped by <strong>62.4%</strong>, from ₹628 down to ₹236.70 per booked patient consultation.
                </li>
              </ul>
            </div>

            {/* Client Endorsement Card */}
            <div className="content-block" style={{ background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF5E8 60%, #F5EED8 100%)', border: '2px solid var(--c-metallic-gold)', boxShadow: '0 16px 36px -10px rgba(212,175,55,0.25)', borderRadius: '24px', padding: '42px', color: '#0F172A', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '28px', top: '18px', fontFamily: 'serif', fontSize: '88px', lineHeight: 1, color: 'rgba(212,175,55,0.18)', pointerEvents: 'none' }}>“</div>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold-dark)' }}>★ Verified Client Endorsement</div>
              <blockquote style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: 1.75, color: '#1E293B', margin: '12px 0 24px 0', fontWeight: 500 }}>
                &ldquo;We were invisible on Google Maps and spending money on agencies with zero accountability. Vyora got us to the top 3 on Google Search in 45 days and built high-intent Exact Match search ads. Our front desk receives 6 to 8 qualified patient consultations every single morning.&rdquo;
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)', color: '#FFFFFF', fontWeight: 800, fontSize: '18px', display: 'grid', placeItems: 'center' }}>DA</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>Dr. Ananya Kapoor</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--c-metallic-gold-dark)' }}>Founder &amp; Chief Dermatologist, Novaderm Aesthetic Clinic · ★★★★★</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="subpage-sidebar">
            <SidebarLeadForm
              title="Fill Your Consultation Calendar"
              subtitle="Request a 30-minute healthcare growth audit. We will evaluate your local Google Maps rank and front-desk conversion speed."
              serviceDefault="Aesthetic Clinic Growth Audit"
              customFieldLabel="Clinic Specialty"
              customFieldPlaceholder="e.g. Dermatology, Dental, Cosmetic"
              btnText="Schedule Clinic Audit"
              sourcePage="Aesthetic Clinic Case Study"
            />

            {/* Salem Headquarters Luxury Card */}
            <div className="sidebar-card" style={{ background: '#FFFFFF', border: '2px solid rgba(212,175,55,0.35)', borderRadius: '20px', padding: '28px', boxShadow: '0 12px 30px -8px rgba(0,0,0,0.06)' }}>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold-dark)', marginBottom: '8px' }}>📍 Salem Headquarters</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Direct Healthcare Growth Advisory</h4>
              <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.6, marginBottom: '16px' }}>
                Krishna Nagar, Mamamgam, Salem - 636302, Tamil Nadu, India.
              </p>
              <div style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '12px', padding: '12px 16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Direct Line</div>
                <a href="tel:+918925502557" style={{ color: '#0F172A', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '18px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <span>📞</span> +91 89255 02557
                </a>
              </div>
              <a href="https://wa.me/918925502557?text=Hi%20Vyora%20Digital%2C%20I%20would%20like%20to%20audit%20our%20clinic%20growth." target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', justifyContent: 'center', minHeight: '44px', fontSize: '13.5px' }}>
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
