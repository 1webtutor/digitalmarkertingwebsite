import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agency FAQs — Honest Answers to Common Questions',
  description: 'Answers to the most frequently asked questions about working with Vyora Digital, our pricing, onboarding process, and performance guarantees.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: 'How does Vyora Digital differ from traditional marketing agencies?',
      a: 'Traditional agencies sell vanity impressions, lock you into 6–12 month handcuffs, and pass your account to inexperienced interns. Vyora operates on month-to-month retainers, provides direct senior partner access, reports solely on CAC and net revenue, and gives you 100% asset ownership.',
    },
    {
      q: 'What is your onboarding timeline and speed to launch?',
      a: 'Our sprint velocity is 7 to 10 business days. During this window, we audit tracking, install server-side CAPI, handcraft your landing page, produce the first wave of creative assets, and configure automated lead delivery before traffic is turned on.',
    },
    {
      q: 'Do you charge a percentage of ad spend?',
      a: 'No. We operate on flat, transparent monthly growth retainers. Your ad spend is billed directly from Meta and Google to your company card, ensuring total financial clarity and zero hidden markups.',
    },
    {
      q: 'Who owns our ad accounts, creative assets, and landing pages?',
      a: 'You own 100% of everything forever. All pixel history, ad accounts, video creative masters, custom code, and CRM setups belong exclusively to your business.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We specialize in high-ticket lead generation and high-growth commerce: luxury real estate, aesthetic medical clinics, DTC e-commerce, professional legal/corporate firms, and B2B SaaS.',
    },
  ];

  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Agency FAQs</span>
          </div>

          <div style={{ maxWidth: '840px' }}>
            <div className="eyebrow">Knowledge Base</div>
            <h1 className="h1" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', marginBottom: '18px' }}>
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              Straightforward answers regarding our client partnerships, technical infrastructure, and performance commitments.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((f, i) => (
              <details key={i} className="card" style={{ padding: '28px', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 800, fontSize: '18px', color: 'var(--text-main)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{f.q}</span>
                  <span style={{ color: 'var(--c-metallic-gold)', fontSize: '22px' }}>+</span>
                </summary>
                <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, margin: '16px 0 0 0' }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-body)', marginBottom: '16px' }}>
              Have a specific question not covered here?
            </p>
            <Link className="btn btn-secondary" href="/contact">
              <span>Chat with our Growth Team ➔</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
