import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Reviews & Verified Ratings — 40+ Retained Partners',
  description: 'Read authentic client testimonials and verified reviews from real estate developers, medical clinic directors, and DTC brand founders who scale with Vyora Digital.',
  alternates: {
    canonical: 'https://vyoradigital.com/reviews/',
  },
  openGraph: {
    title: 'Client Reviews & Verified Ratings — Vyora Digital',
    description: 'Read authentic client testimonials and verified reviews from founders and marketing leaders who scale with Vyora Digital.',
    url: 'https://vyoradigital.com/reviews/',
  },
};

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Rajiv Deshmukh',
      role: 'Managing Director, Aura Luxury Villas',
      rating: 5,
      sector: 'Real Estate',
      initials: 'RD',
      color: 'var(--c-metallic-gold)',
      textColor: '#08090C',
      quote:
        'Sold ₹14.8 Cr of ultra-luxury villas in 90 days. We had previously worked with two Mumbai-based agencies who gave us thousands of Facebook form leads that never answered their phones. Vyora built an architectural microsite, ran HNI-filtered ads, and integrated WhatsApp booking. 85 qualified buyer site visits in 3 months.',
    },
    {
      name: 'Dr. Ananya Kapoor',
      role: 'Founder & Medical Director, Novaderm Aesthetic Clinic',
      rating: 5,
      sector: 'Healthcare & Clinic',
      initials: 'AK',
      color: 'var(--color-health)',
      textColor: '#FFFFFF',
      quote:
        '185+ high-ticket consultations every single month. Novaderm went from struggling with empty consultation slots to a 2-week waiting list. Vyora took over our Google Ads, dominated local map rankings, and cut our cost-per-patient by 62%. Their WhatsApp booking bot handles inquiries in seconds.',
    },
    {
      name: 'Vikram Seth',
      role: 'Co-Founder & CEO, Zenith Living',
      rating: 5,
      sector: 'DTC E-Commerce',
      initials: 'VS',
      color: 'var(--color-dtc)',
      textColor: '#FFFFFF',
      quote:
        'Scaled 10.6x to ₹48L/month with a 4.8x blended ROAS. Vyora’s creative team churned out 15 UGC video variations weekly and fixed our checkout abandonment on day one. They think like business partners with skin in the game, not ad vendors who just spend your money.',
    },
    {
      name: 'Karthik Ramanathan',
      role: 'VP Growth, CloudCore Enterprise',
      rating: 5,
      sector: 'B2B Software',
      initials: 'KR',
      color: 'var(--c-metallic-gold)',
      textColor: '#08090C',
      quote:
        'Qualified sales demo bookings increased by 240%. B2B LinkedIn and Google Search ads were always money pits for us until Vyora overhauled our offer messaging, built a friction-free booking funnel, and installed server-side CAPI tracking. Cost per qualified SQL dropped by 45%.',
    },
    {
      name: 'Sneha Balakrishnan',
      role: 'Senior Partner, Apex Legal Consultants',
      rating: 5,
      sector: 'Professional Services',
      initials: 'SB',
      color: '#08090C',
      textColor: 'var(--c-metallic-gold)',
      quote:
        'Dominated corporate legal inquiries in South India. Their Google Ads negative keyword discipline saved us ₹1.5L in wasted spend during the first 30 days alone. High-net-worth commercial clients now find us on page 1 for corporate restructuring and IP litigation.',
    },
    {
      name: 'Amitav Roy',
      role: 'General Manager, Royal Heritage Resorts',
      rating: 5,
      sector: 'Hospitality',
      initials: 'AR',
      color: 'var(--c-metallic-gold)',
      textColor: '#08090C',
      quote:
        'Direct weekend villa bookings soared by 310%, cutting our dependence on 20% OTA commissions. Their Meta video creatives capture the luxury atmosphere flawlessly, and their sub-second booking page loads instantly even on weak 4G mobile connections.',
    },
  ];

  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Client Reviews</span>
          </div>

          <div style={{ maxWidth: '840px' }}>
            <div className="eyebrow">Reputation &amp; Social Proof</div>
            <h1 className="h1" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', marginBottom: '18px' }}>
              What Ambitious Founders <span className="gold-gradient-text">Say About Vyora</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              Real, verifiable testimonials from real estate developers, medical directors, DTC CEOs, and service leaders who replaced agency excuses with predictable customer acquisition pipelines.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>4.95 / 5.0</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Average Rating (40+ Clients)</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--color-meta)' }}>₹18.4 Cr+</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Verified Pipeline Value</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#10B981' }}>98.4%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>6-Month Retainer Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {reviews.map((rev, idx) => (
              <div key={idx} className="card" style={{ padding: '34px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ color: 'var(--c-metallic-gold)', fontSize: '18px' }}>★★★★★</div>
                    <span style={{ fontSize: '11px', fontWeight: 700, background: 'rgba(212,175,55,0.1)', color: 'var(--c-metallic-gold-dark)', padding: '3px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
                      {rev.sector}
                    </span>
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-body)', fontStyle: 'italic', marginBottom: '24px' }}>
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-card)', paddingTop: '18px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: rev.color, color: rev.textColor, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                    {rev.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '15px' }}>{rev.name}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-body)', borderTop: '1px solid var(--border-card)' }}>
        <div className="wrap text-center" style={{ maxWidth: '800px' }}>
          <div className="eyebrow">Ready to Write Your Success Story?</div>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Let&rsquo;s Engineer Your Business Growth Engine</h2>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '30px' }}>
            Book a 30-minute diagnostic session with Vyora&rsquo;s Senior Growth Directors. We will analyze your current creative velocity, CAPI attribution, and conversion leaks for free.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/contact">
              <span>Claim 100% Free Growth Audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a className="btn btn-secondary" href="https://wa.me/918925502557?text=Hi%20Vyora%20team%2C%20let%27s%20audit%20my%20business." target="_blank" rel="noopener noreferrer">
              Direct WhatsApp Chat (+91 89255 02557)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
