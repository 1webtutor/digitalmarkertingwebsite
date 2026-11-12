import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Vyora Digital',
  description: 'Privacy Policy and data governance commitments for vyoradigital.com and its performance marketing services.',
};

export default function PrivacyPage() {
  return (
    <section className="section" style={{ padding: '100px 0 80px' }}>
      <div className="wrap" style={{ maxWidth: '840px' }}>
        <div className="breadcrumb" style={{ marginBottom: '24px' }}>
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span style={{ color: 'var(--text-main)' }}>Privacy Policy</span>
        </div>

        <h1 className="h1" style={{ fontSize: '38px', marginBottom: '16px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px' }}>
          Last Updated: November 2026 · Official Domain: vyoradigital.com
        </p>

        <div className="card" style={{ padding: '40px', lineHeight: 1.8, fontSize: '15px', color: 'var(--text-body)' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: 0 }}>1. Data Collection &amp; Usage</h2>
          <p>
            Vyora Digital (&ldquo;vyoradigital.com&rdquo;) collects personal information solely when voluntarily submitted through our discovery call booking forms, contact channels, or WhatsApp communication lines. This includes names, business email addresses, mobile numbers, and projected advertising parameters.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: '24px' }}>2. Data Protection &amp; Confidentiality</h2>
          <p>
            We enforce stringent encryption, first-party cookie isolation, and role-based access protocols. We will never sell, rent, or distribute your corporate or personal data to third-party data brokers.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: '24px' }}>3. Contact &amp; Grievances</h2>
          <p>
            For privacy inquiries, please contact our Data Governance Officer at <a href="mailto:hello@vyoradigital.com" style={{ color: 'var(--c-metallic-gold)', fontWeight: 700 }}>hello@vyoradigital.com</a> or visit our Salem Headquarters: Krishna Nagar, Mamamgam, Salem - 636302, Tamil Nadu, India.
          </p>
        </div>
      </div>
    </section>
  );
}
