import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Vyora Digital',
  description: 'Terms of Service governing digital marketing, ad management, and funnel engineering retainers with Vyora Digital.',
};

export default function TermsPage() {
  return (
    <section className="section" style={{ padding: '100px 0 80px' }}>
      <div className="wrap" style={{ maxWidth: '840px' }}>
        <div className="breadcrumb" style={{ marginBottom: '24px' }}>
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <span style={{ color: 'var(--text-main)' }}>Terms of Service</span>
        </div>

        <h1 className="h1" style={{ fontSize: '38px', marginBottom: '16px' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px' }}>
          Effective Date: November 2026 · Official Domain: vyoradigital.com
        </p>

        <div className="card" style={{ padding: '40px', lineHeight: 1.8, fontSize: '15px', color: 'var(--text-body)' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: 0 }}>1. Engagement Framework</h2>
          <p>
            Vyora Digital provides AI-driven performance marketing, ad account management, creative production, and sub-second funnel development under flexible month-to-month retainers.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: '24px' }}>2. 100% Asset Ownership</h2>
          <p>
            Unlike traditional agencies, our clients retain 100% permanent ownership of all advertising accounts, tracking pixels, custom code repositories, creative master files, and domain names created during the engagement.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginTop: '24px' }}>3. Jurisdiction</h2>
          <p>
            All agreements and operations are governed by the laws of India, subject to the jurisdiction of the courts of Salem, Tamil Nadu.
          </p>
        </div>
      </div>
    </section>
  );
}
