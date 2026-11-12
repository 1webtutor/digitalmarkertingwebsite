import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Growth Retainers & Pricing — Zero Lock-In Handcuffs',
  description: 'Transparent monthly marketing retainers for ambitious businesses. Month-to-month flexibility, zero lock-in contracts, and 100% asset ownership.',
};

export default function PricingPage() {
  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Growth Packages</span>
          </div>

          <div style={{ maxWidth: '840px' }}>
            <div className="eyebrow">Investment Architecture</div>
            <h1 className="h1" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', marginBottom: '18px' }}>
              Transparent Growth Retainers. <span className="gold-gradient-text">Zero Lock-In Contracts.</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              No hidden fees, no junior account managers, and no multi-month handcuffs. We partner on a month-to-month basis where we earn our place through pipeline value and net revenue.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>100%</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Asset Ownership</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--color-meta)' }}>Month-to-Month</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>No Lock-In Handcuffs</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#10B981' }}>7–10 Days</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Rapid Launch Velocity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
            
            {/* Tier 1 */}
            <div className="card" style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--text-muted)' }}>Starter Tier</div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '8px 0 12px' }}>Starter Accelerator</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Designed for local service providers, single-location healthcare clinics, and specialized firms testing paid acquisition.
                </p>
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 900, color: 'var(--text-main)' }}>₹35,000 <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-muted)' }}>/ month</span></div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>+ Ad spend (billed directly to your card)</div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--text-body)' }}>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Meta Ads OR Google Ads</strong> single-channel</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>1 Sub-Second Landing Page</strong> (&lt;0.8s mobile LCP)</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ Server-Side CAPI / GTM tracking installation</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>6 Custom Creative Assets</strong> per month</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ Instant WhatsApp Lead Sync (&lt;60s alert)</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ Weekly performance summary &amp; WhatsApp support</li>
                </ul>
              </div>
              <Link className="btn btn-secondary" href="/contact" style={{ width: '100%', justifyContent: 'center' }}>
                Choose Starter
              </Link>
            </div>

            {/* Tier 2: Popular */}
            <div className="card" style={{ padding: '44px 34px', position: 'relative', border: '2px solid var(--c-metallic-gold)', boxShadow: 'var(--shadow-hover)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(180deg, #FFFFFF, rgba(243,229,171,0.08))' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, var(--c-metallic-gold), var(--c-metallic-gold-dark))', color: '#08090C', padding: '4px 18px', borderRadius: '20px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Most Selected by 82% of Clients
              </div>
              <div>
                <div className="eyebrow" style={{ color: 'var(--c-metallic-gold)' }}>Scale Tier</div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, margin: '8px 0 12px' }}>Growth Engine</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Engineered for aggressive scale: luxury real estate, multi-branch healthcare, DTC brands, and established regional leaders.
                </p>
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '46px', fontWeight: 900, color: 'var(--c-metallic-gold)' }}>₹75,000 <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-muted)' }}>/ month</span></div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>+ Ad spend (billed directly to your card)</div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--text-body)' }}>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Omnichannel Ads:</strong> Meta (Advantage+) + Google Ads (Search &amp; PMax)</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Multi-Step Funnel System:</strong> Sub-second qualification &amp; booking pages</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Full Server-Side CAPI:</strong> Real-time deduplication &amp; offline event sync</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>15 Video &amp; UGC Assets / Mo:</strong> 3-second hook testing matrix</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>24/7 WhatsApp AI Concierge:</strong> Instant qualification &amp; calendar slotting</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Dedicated Senior Growth Lead</strong> + Bi-weekly strategy sprint calls</li>
                </ul>
              </div>
              <Link className="btn btn-primary" href="/contact" style={{ width: '100%', justifyContent: 'center' }}>
                Deploy Growth Engine ➔
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="card" style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--text-muted)' }}>Enterprise Tier</div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '8px 0 12px' }}>Market Domination</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '24px' }}>
                  For high-volume brands, national retail chains, and property conglomerates spending ₹3L+ monthly on paid traffic.
                </p>
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 900, color: 'var(--text-main)' }}>₹1,50,000 <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-muted)' }}>/ month</span></div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>+ Ad spend (billed directly to your card)</div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: 'var(--text-body)' }}>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Comprehensive Omnichannel:</strong> Meta, Google, YouTube, LinkedIn, Native Ads</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Custom Web App / Headless Funnels:</strong> Infinite A/B testing variations</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>30 Video/VSL Assets / Mo:</strong> Studio cinematic + Creator UGC pipeline</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Enterprise CRM Architecture:</strong> Custom webhooks, HubSpot, Salesforce sync</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ <strong>Dedicated 4-Person Growth Squad:</strong> Media Buyer, Tech Lead, Copywriter, Editor</li>
                  <li style={{ display: 'flex', gap: '10px' }}>✓ Direct Slack/WhatsApp Priority Channel with 15-minute SLA</li>
                </ul>
              </div>
              <Link className="btn btn-secondary" href="/contact" style={{ width: '100%', justifyContent: 'center' }}>
                Inquire for Domination
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section" style={{ background: 'var(--bg-body)', borderTop: '1px solid var(--border-card)' }}>
        <div className="wrap">
          <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 50px' }}>
            <div className="eyebrow">Clear Answers</div>
            <h2 className="h2">Frequently Asked Pricing Questions</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <details className="card" style={{ padding: '24px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 800, fontSize: '17px', color: 'var(--text-main)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Is our advertising media spend included in the monthly retainer?</span>
                <span style={{ color: 'var(--c-metallic-gold)', fontSize: '20px' }}>+</span>
              </summary>
              <p style={{ marginTop: '14px', fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                No. Your advertising budget is paid directly from your company credit card or bank account to Meta (Facebook/Instagram) and Google Ads. This ensures 100% financial transparency, lets you retain all credit card reward points, and gives you total control over your ad spend.
              </p>
            </details>

            <details className="card" style={{ padding: '24px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 800, fontSize: '17px', color: 'var(--text-main)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Are we locked into a long-term contract?</span>
                <span style={{ color: 'var(--c-metallic-gold)', fontSize: '20px' }}>+</span>
              </summary>
              <p style={{ marginTop: '14px', fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                No. We do not believe in holding clients hostage with 6-month or 12-month lock-in agreements. All Vyora partnerships operate on a month-to-month retainer with a standard 30-day notice period. We earn our fee month after month based on positive return on investment.
              </p>
            </details>

            <details className="card" style={{ padding: '24px', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 800, fontSize: '17px', color: 'var(--text-main)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Who owns the landing pages, creatives, and ad accounts?</span>
                <span style={{ color: 'var(--c-metallic-gold)', fontSize: '20px' }}>+</span>
              </summary>
              <p style={{ marginTop: '14px', fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                You own 100% of everything forever. All ad accounts, pixel history, custom code, video creative masters, and CRM integrations belong exclusively to your business. If you ever decide to take marketing in-house, your assets remain completely intact.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
