import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our 5-Stage Growth Framework — The Vyora Architecture',
  description: 'Discover how Vyora Digital engineers repeatable, scalable customer acquisition systems using our proprietary 5-stage performance framework.',
};

export default function FrameworkPage() {
  const steps = [
    {
      num: '01',
      title: 'Attribution & Tracking Foundation',
      desc: 'We install server-side Conversions API (CAPI), first-party cookies, and Google Tag Manager containers. No ad rupee is spent until tracking is 100% verified.',
    },
    {
      num: '02',
      title: 'Sub-Second Funnel Engineering',
      desc: 'We craft ultralight, mobile-first conversion pages with sub-0.8s load times, psychological offer framing, and zero friction booking paths.',
    },
    {
      num: '03',
      title: 'High-Velocity Creative Testing',
      desc: 'We test 12–15 creative hook angles weekly across short-form video and carousels, isolating top performers to defend against ad fatigue.',
    },
    {
      num: '04',
      title: 'AI Lead Automation & CRM Routing',
      desc: 'Inbound inquiries are instantly qualified by 24/7 WhatsApp AI bots within 45 seconds, booking hot leads directly on your sales calendar.',
    },
    {
      num: '05',
      title: 'Predictable Scale & ROAS Expansion',
      desc: 'Once unit economics are profitable, we scale media spend across Meta Advantage+ and Google Performance Max with strict ROAS thresholds.',
    },
  ];

  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Our Framework</span>
          </div>

          <div style={{ maxWidth: '840px' }}>
            <div className="eyebrow">Engineering Methodology</div>
            <h1 className="h1" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', marginBottom: '18px' }}>
              The 5-Stage <span className="gold-gradient-text">Vyora Framework</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              We don&rsquo;t guess or gamble on ad platforms. We follow a mathematical, step-by-step engineering system that turns advertising budgets into predictable revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {steps.map((s, idx) => (
              <div key={idx} className="card" style={{ padding: '36px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 900, color: 'var(--c-metallic-gold)', flexShrink: 0 }}>
                  {s.num}
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link className="btn btn-primary" href="/contact">
              <span>Apply This Framework to Your Business ➔</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
