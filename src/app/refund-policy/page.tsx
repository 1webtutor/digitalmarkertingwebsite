import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund & Performance Policy — Vyora Digital',
  description: 'Our transparent refund, cancellation, and service performance policy for digital growth retainers.',
  alternates: {
    canonical: 'https://vyoradigital.com/refund-policy/',
  },
};

export default function RefundPolicyPage() {
  return (
    <section className="section" style={{ padding: '100px 0 80px' }}>
      <div className="wrap" style={{ maxWidth: '840px' }}>
        <div className="breadcrumb" style={{ marginBottom: '24px' }}>
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span style={{ color: 'var(--text-main)' }}>Refund Policy</span>
        </div>

        <h1 className="h1" style={{ fontSize: '38px', marginBottom: '16px' }}>Refund &amp; Performance Policy</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px' }}>
          Effective Date: November 2026 · Official Domain: vyoradigital.com
        </p>

        <div className="card" style={{ padding: '40px', lineHeight: 1.8, fontSize: '15px', color: 'var(--text-body)' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: 0 }}>1. Month-to-Month Retainer Flexibility</h2>
          <p>
            Vyora Digital enforces zero multi-month lock-in agreements. All growth retainers operate on a 30-day rolling monthly basis. Clients may cancel or pause retainers at any time with a standard 30-day written notice.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: '24px' }}>2. Ad Spend Disbursements</h2>
          <p>
            Paid media budgets are billed directly by advertising platforms (Meta, Google, TikTok, LinkedIn) to the client&rsquo;s business payment method. Vyora Digital never holds or marks up ad spend.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: '24px' }}>3. Service Guarantee</h2>
          <p>
            If during the initial 30 days of active traffic, our tracking architecture or campaign launch fails to meet our agreed Technical Service Level Agreement (SLA), our leadership will execute corrective sprints without additional engineering fees.
          </p>
        </div>
      </div>
    </section>
  );
}
