import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Growth Marketing Services — Meta Ads, Google Ads & AI Automation',
  description: 'Explore Vyora Digital full-funnel capabilities: Meta Ads, Google Ads, Local SEO Maps 3-Pack, High-Converting Web Funnels, Video Creatives, and 24/7 WhatsApp AI.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Meta Ads & Acquisition',
      desc: 'Precision paid advertising planned around buyer psychology, rapid creative split-testing loops, and server-side Conversions API (CAPI).',
      href: '/services/meta-ads',
      tag: 'Meta Ads',
      color: 'var(--color-meta)',
      icon: '📱',
    },
    {
      title: 'Google Ads & Search Domination',
      desc: 'Capture high-intent commercial buyers actively searching for your solutions with Performance Max and strict negative keyword filtering.',
      href: '/services/google-ads',
      tag: 'Google Ads',
      color: 'var(--color-google)',
      icon: '🔍',
    },
    {
      title: 'Local Google Maps 3-Pack',
      desc: 'Rank #1 for local commercial search queries. Geotagged schema, citation authority, and automated patient review systems.',
      href: '/services/seo-authority',
      tag: 'Local SEO',
      color: 'var(--color-seo)',
      icon: '📍',
    },
    {
      title: 'Sub-Second Funnels',
      desc: 'Ultralight landing pages loaded in <0.8 seconds. Designed to eliminate bounce rates, optimize mobile LCP, and maximize ad spend efficiency.',
      href: '/services/web-funnels',
      tag: 'Web Speed',
      color: 'var(--c-metallic-gold)',
      icon: '⚡',
    },
    {
      title: 'Lead Gen & CRM Sync',
      desc: 'Automated lead pipeline routing into WhatsApp, HighLevel, HubSpot, or Salesforce with instant multi-step SMS and email nurture flows.',
      href: '/services/crm-automation',
      tag: 'CRM Automation',
      color: 'var(--color-crm)',
      icon: '🎯',
    },
    {
      title: 'Video & VSL Creatives',
      desc: 'Studio-grade short-form video ads, creator UGC variations, and video sales letters optimized for 3-second hook retention.',
      href: '/services/video-vsl',
      tag: 'Video Creatives',
      color: 'var(--color-video)',
      icon: '🎬',
    },
    {
      title: '24/7 WhatsApp AI Concierge',
      desc: 'Intelligent conversational AI bots responding to inbound inquiries in <45 seconds to qualify budgets and schedule discovery calls.',
      href: '/services/ai-solutions',
      tag: 'AI Automation',
      color: 'var(--color-ai)',
      icon: '🤖',
    },
  ];

  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Services</span>
          </div>

          <div style={{ maxWidth: '840px' }}>
            <div className="eyebrow">Full-Stack Disciplines</div>
            <h1 className="h1" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', marginBottom: '18px' }}>
              Seven Specialized <span className="gold-gradient-text">Growth Capabilities</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              Each discipline can be deployed as an independent revenue accelerator or combined into our end-to-end full-funnel growth architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {services.map((svc, i) => (
              <div key={i} className="card" style={{ padding: '36px', borderTop: `4px solid ${svc.color}` }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{svc.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>{svc.title}</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {svc.desc}
                </p>
                <Link className="btn btn-secondary" href={svc.href} style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Explore Capability ➔</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
