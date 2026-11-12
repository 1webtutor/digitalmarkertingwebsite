import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ServiceData {
  title: string;
  tagline: string;
  eyebrow: string;
  color: string;
  desc: string;
  metrics: { label: string; val: string }[];
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  deliverables: string[];
  techStack: string[];
}

const servicesRecord: Record<string, ServiceData> = {
  'meta-ads': {
    title: 'Meta Ads & Paid Social Acquisition',
    tagline: 'High-ROAS Facebook & Instagram Advertising',
    eyebrow: 'Paid Social Acquisition Engine',
    color: 'var(--color-meta)',
    desc: 'Facebook and Instagram advertising engineered around buyer psychology, rapid creative split-testing, and server-side Conversions API (CAPI) tracking. Stop burning ad budget on tire-kickers.',
    metrics: [
      { label: 'Average Client ROAS', val: '3.8x' },
      { label: 'Tracking Accuracy', val: '100% CAPI' },
      { label: 'Cost Per Qualified Lead', val: '-48%' },
    ],
    problemTitle: 'Why 80% of Meta Ad Budgets Are Wasted by Typical Agencies',
    problemDesc:
      'Most digital agencies treat Facebook and Instagram ads like lottery tickets: boost random posts, throw broad audiences at generic homepages, and blame iOS privacy updates when campaigns underperform. At Vyora Digital, we engineer Meta Ads as a mathematical revenue system with server-side CAPI and high-converting funnels.',
    solutionTitle: 'Our 4-Pillar Meta Ads Engineering Framework',
    deliverables: [
      'Advantage+ campaign architecture with audience segmentation and excluded buyer lists',
      'Full server-side Meta Conversions API (CAPI) setup via Google Tag Manager Server Container',
      '12–15 creative hook variations tested weekly across short-form Reels and carousels',
      'Sub-second dedicated landing page funnels eliminating 80% of bounce drop-off',
      'Automated WhatsApp lead delivery notifying sales reps in under 45 seconds',
    ],
    techStack: ['Meta Advantage+', 'Conversions API (CAPI)', 'Google Tag Manager', 'Stape.io', 'WhatsApp Cloud API'],
  },
  'google-ads': {
    title: 'Google Ads & Search Domination',
    tagline: 'Capture Active Bottom-of-Funnel Commercial Intent',
    eyebrow: 'Commercial Intent Search Engine',
    color: 'var(--color-google)',
    desc: 'Target high-intent searchers at the exact moment they look for your products or medical services. Precision negative keywords, Performance Max optimization, and real-time offline conversion imports.',
    metrics: [
      { label: 'Search Impression Share', val: '86%+' },
      { label: 'Cost Per Conversion', val: '-42%' },
      { label: 'Call Lead Quality', val: '94%' },
    ],
    problemTitle: 'The Broad Match Money Pit in Google Ads',
    problemDesc:
      'Without rigorous negative keyword discipline and conversion value bidding, Google Ads algorithms spend your money on junk informational search queries that never turn into paying customers.',
    solutionTitle: 'The Vyora Search Domination Methodology',
    deliverables: [
      'Granular Single-Intent Ad Groups (SIAGs) bidding strictly on high-intent terms',
      'Aggressive daily negative keyword mining eliminating wasteful budget drains',
      'Performance Max (PMax) asset groups tailored with verified first-party audience signals',
      'Call tracking & offline conversion tracking synced with your CRM sales data',
      'High-converting mobile landing pages achieving 100/100 Core Web Vitals',
    ],
    techStack: ['Google Ads AI', 'Performance Max', 'CallRail', 'GA4 Server-Side', 'Offline GCLID Sync'],
  },
  'seo-authority': {
    title: 'Local Google Maps 3-Pack & Technical SEO',
    tagline: 'Rank #1 in Your City for Commercial Queries',
    eyebrow: 'Local Authority Architecture',
    color: 'var(--color-seo)',
    desc: 'Dominate Google Local 3-Pack rankings and organic search. Clean local schema markup, citation building, geotagged photos, and automated customer review generation for clinics, real estate, and professional firms.',
    metrics: [
      { label: 'Maps 3-Pack Rank', val: '#1 Spot' },
      { label: 'Local Organic Traffic', val: '+240%' },
      { label: 'Direct Phone Inquiries', val: '3.4x' },
    ],
    problemTitle: 'Why Traditional SEO Takes 12 Months and Produces Zero Revenue',
    problemDesc:
      'Typical SEO agencies write generic 500-word blog posts that rank for irrelevant questions while your Google Business Profile remains invisible to local high-ticket customers.',
    solutionTitle: 'Hyper-Local Search Authority Blueprint',
    deliverables: [
      'Google Business Profile (GBP) deep optimization with location and medical/real estate schema',
      'Consistent citation building across 50+ tier-1 business directories',
      'Automated WhatsApp review acquisition workflows generating 5-star customer ratings',
      'Technical site audits fixing Core Web Vitals, mobile UX, and crawl architecture',
      'Localized procedure/service landing pages targeting high-ticket search terms',
    ],
    techStack: ['Google Business Profile API', 'Schema.org JSON-LD', 'BrightLocal', 'Search Console', 'Ahrefs'],
  },
  'web-funnels': {
    title: 'Sub-Second Web & Funnel Architecture',
    tagline: 'Speed is the Silent Multiplier of ROAS',
    eyebrow: 'Conversion Engineering Lab',
    color: 'var(--c-metallic-gold)',
    desc: 'Ultralight landing pages loaded in <0.8 seconds with zero WordPress bloat. Engineered with psychological offer architecture to double paid traffic conversion rates.',
    metrics: [
      { label: 'Mobile Page Speed', val: '< 0.8s LCP' },
      { label: 'Conversion Rate Boost', val: '+140%' },
      { label: 'Core Web Vitals', val: '100 / 100' },
    ],
    problemTitle: 'Slow Websites are the Silent Killer of Paid Traffic',
    problemDesc:
      'For every 1-second delay in page load time, conversions plummet by 20%. Typical WordPress sites loading in 4–6 seconds waste over half of your Meta and Google ad spend before visitors even see your headline.',
    solutionTitle: 'High-Converting Sub-Second Funnel Stack',
    deliverables: [
      'Custom handcrafted HTML5/CSS3/Next.js pages loading in under 0.8s on 4G mobile connections',
      'Psychological offer structuring, social proof ribbons, and interactive quote calculators',
      'Zero third-party plugin drag with server-side script tagging',
      '1-click checkout and seamless booking forms with frictionless auto-fill',
      'Multi-variant A/B testing infrastructure testing headlines, pricing, and CTA angles',
    ],
    techStack: ['Next.js 14', 'Cloudflare Edge CDN', 'Tailwind CSS', 'Vercel Edge', 'Lighthouse 100'],
  },
  'crm-automation': {
    title: 'Lead Generation & CRM Pipeline Automation',
    tagline: 'Eliminate Lead Leakage and Slash Response Time to <45 Seconds',
    eyebrow: 'Automated Pipeline Operations',
    color: 'var(--color-crm)',
    desc: 'Connect your ad accounts directly into an automated sales machine. Instant WhatsApp lead alerts, multi-step SMS follow-ups, and seamless CRM integrations with HubSpot, Salesforce, and HighLevel.',
    metrics: [
      { label: 'Lead Response Time', val: '< 45 Sec' },
      { label: 'Lead-to-Call Rate', val: '+68%' },
      { label: 'No-Show Reduction', val: '-45%' },
    ],
    problemTitle: 'Why Leads Go Cold in the First 15 Minutes',
    problemDesc:
      'Studies show that contacting an inbound lead within 5 minutes makes them 21x more likely to convert compared to waiting 30 minutes. Traditional manual spreadsheets lose leads forever.',
    solutionTitle: 'Real-Time Lead Acceleration Architecture',
    deliverables: [
      'Instant webhook synchronization between Meta Lead Forms, Google Ads, and CRM',
      'Sub-45s automated WhatsApp message delivery with calendar booking links',
      'Multi-touch SMS & email nurture sequences keeping prospects warm',
      'Automated calendar slotting syncing directly with sales team Google Calendar',
      'Real-time lead scoring and sales team assignment routing',
    ],
    techStack: ['HighLevel CRM', 'WhatsApp Cloud API', 'Make / Zapier', 'HubSpot', 'Custom Webhooks'],
  },
  'video-vsl': {
    title: 'High-Retention Video & VSL Creatives',
    tagline: 'Stop Scrollers in the First 3 Seconds',
    eyebrow: 'Cinematic Creative Studio',
    color: 'var(--color-video)',
    desc: 'Short-form UGC video ads, cinematic brand films, and persuasive Video Sales Letters (VSLs). Engineered to beat ad fatigue and command the lowest cost-per-click on Meta and TikTok.',
    metrics: [
      { label: '3-Sec Hook Retention', val: '42%+' },
      { label: 'Creative Velocity', val: '15 Ads/Wk' },
      { label: 'CTR Improvement', val: '+85%' },
    ],
    problemTitle: 'Ad Creative is the New Targeting',
    problemDesc:
      'With AI managing ad bidding, creative is the single biggest leverage point in digital marketing. Boring corporate videos and static images get ignored and punished by ad algorithms with high CPMs.',
    solutionTitle: 'Rapid Creative Testing Matrix',
    deliverables: [
      'High-velocity 3-second hook split-testing matrix testing 15 angles weekly',
      'UGC creator video production showcasing authentic customer experiences',
      'Cinematic 4K property walkthroughs and clinical procedure breakdowns',
      'Direct-response Video Sales Letters (VSLs) guiding prospects from problem to purchase',
      'Iterative post-production editing optimized for 9:16 vertical mobile feeds',
    ],
    techStack: ['DaVinci Resolve Studio', 'Adobe Premiere Pro', 'CapCut Pro', 'Cinema 4K Cameras', 'Meta Ads Studio'],
  },
  'ai-solutions': {
    title: '24/7 WhatsApp AI Booking Concierge',
    tagline: 'AI Agents That Turn Midnight Scrollers Into Paying Clients',
    eyebrow: 'Conversational AI Infrastructure',
    color: 'var(--color-ai)',
    desc: 'Custom-trained conversational AI bots deployed directly on your official WhatsApp Business number. Responding in under 30 seconds to answer FAQs, qualify budgets, and book appointments 24/7/365.',
    metrics: [
      { label: 'Response Latency', val: '< 30 Sec' },
      { label: 'Appointment Booking Rate', val: '34%' },
      { label: 'After-Hours Coverage', val: '24/7/365' },
    ],
    problemTitle: '60% of High-Intent Leads Inquire After Business Hours',
    problemDesc:
      'Prospects browse ads late at night and on weekends when your office is closed. If they do not receive an immediate response, they move on to your competitor. Human front-desk staff cannot be awake 24/7.',
    solutionTitle: 'Enterprise Conversational AI Engine',
    deliverables: [
      'Custom LLM trained on your specific service pricing, FAQs, and clinic protocols',
      'Official WhatsApp Business API integration with green tick verification support',
      'Smart lead qualification screening for budget, location, and purchase readiness',
      'Direct calendar booking with live doctor/consultant availability integration',
      'Seamless human hand-off protocol for complex VIP inquiries',
    ],
    techStack: ['WhatsApp Cloud API', 'OpenAI / Claude API', 'Node.js Edge Functions', 'Google Calendar API', 'PostgreSQL'],
  },
};

export function generateStaticParams() {
  return [
    { slug: 'meta-ads' },
    { slug: 'google-ads' },
    { slug: 'seo-authority' },
    { slug: 'web-funnels' },
    { slug: 'crm-automation' },
    { slug: 'video-vsl' },
    { slug: 'ai-solutions' },
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const svc = servicesRecord[params.slug];
  if (!svc) return { title: 'Service Not Found' };
  return {
    title: `${svc.title} — Vyora Digital`,
    description: svc.desc,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const svc = servicesRecord[params.slug];
  if (!svc) notFound();

  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/services">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>{svc.title}</span>
          </div>

          <div style={{ maxWidth: '860px' }}>
            <div className="eyebrow" style={{ color: svc.color }}>{svc.eyebrow}</div>
            <h1 className="h1" style={{ fontSize: 'clamp(32px, 4.2vw, 54px)', marginBottom: '20px' }}>
              {svc.title} for <span className="gold-gradient-text">Predictable Acquisition</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '30px' }}>
              {svc.desc}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
              {svc.metrics.map((m, i) => (
                <div key={i} style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: svc.color }}>{m.val}</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{m.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link className="btn btn-primary" href="/contact">
                <span>Request {svc.title} Audit</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a className="btn btn-secondary" href="https://wa.me/918925502557?text=Hi%20Vyora%2C%20let's%20discuss%20our%20growth." target="_blank" rel="noopener noreferrer">
                WhatsApp Consultation (+91 89255 02557)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '70px 0' }}>
        <div className="wrap subpage-grid">
          <div className="subpage-main">
            <div className="content-block">
              <h2>{svc.problemTitle}</h2>
              <p>{svc.problemDesc}</p>
            </div>

            <div className="content-block">
              <h2>{svc.solutionTitle}</h2>
              <p>When you partner with Vyora Digital, we deploy a comprehensive execution suite:</p>
              <ul>
                {svc.deliverables.map((d, idx) => (
                  <li key={idx}><strong>{d.split('—')[0]}</strong> {d.includes('—') ? '— ' + d.split('—')[1] : ''}</li>
                ))}
              </ul>
            </div>

            <div className="content-block">
              <h2>Technology Stack &amp; Platforms</h2>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
                {svc.techStack.map((tech, idx) => (
                  <span key={idx} className="tag" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', padding: '6px 14px', borderRadius: '8px', fontWeight: 700, color: 'var(--text-main)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="subpage-sidebar">
            <div className="card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px' }}>Service Summary</h3>
              <div style={{ fontSize: '14px', lineHeight: 2 }}>
                <div><strong>Category:</strong> {svc.eyebrow}</div>
                <div><strong>SLA Delivery:</strong> 7–10 Business Days</div>
                <div><strong>Pricing:</strong> Included in Growth Retainer</div>
                <div><strong>Contract:</strong> Month-to-Month</div>
                <div><strong>Ownership:</strong> 100% Client Assets</div>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-card)' }}>
                <Link className="btn btn-primary" href="/contact" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Claim Strategy Session</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
