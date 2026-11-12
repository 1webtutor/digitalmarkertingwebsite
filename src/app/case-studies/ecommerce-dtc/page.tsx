import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zenith Living DTC Case Study — Scaled 10.6x to ₹48L/Month with 4.8x ROAS',
  description: 'How Vyora Digital scaled Zenith Living from ₹4.5L to ₹48L/month in 90 days with rapid video creative testing and 1-click checkout funnels.',
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
            <div className="eyebrow">DTC E-Commerce Scaling</div>
            <h1 className="h1" style={{ fontSize: 'clamp(32px, 4vw, 50px)', marginBottom: '18px' }}>
              Scaling a DTC Brand 10.6x to <span className="gold-gradient-text">₹48L/Month</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              How rapid short-form video creative split-testing, 1-click checkout optimization, and automated WhatsApp cart recovery unlocked 4.8x blended ROAS.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--color-dtc)' }}>₹48.2L</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Monthly Revenue</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>4.82x</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Blended ROAS</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#10B981' }}>+24.2%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cart Recovery</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '12px 20px', borderRadius: '14px' }}>
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
              <ul>
                <li><strong>Rapid UGC Creative Sprint:</strong> Produced and tested 15 short-form video hooks per week across Reels and Meta Advantage+, identifying 3 top-performing &ldquo;unicorn&rdquo; angles.</li>
                <li><strong>Headless 1-Click Fastlane Checkout:</strong> Replaced slow checkout scripts with a 0.7s streamlined payment funnel that reduced cart drops by 34%.</li>
                <li><strong>Automated WhatsApp Abandoned Cart Engine:</strong> Sent hyper-personalized WhatsApp messages with 1-click buy links within 15 minutes of abandonment, recovering 24.2% of lost sales.</li>
              </ul>
            </div>
          </div>

          <aside className="subpage-sidebar">
            <div className="card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
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
          </aside>
        </div>
      </section>
    </>
  );
}
