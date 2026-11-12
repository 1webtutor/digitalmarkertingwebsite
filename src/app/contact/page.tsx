'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    url: '',
    budget: '50k-150k',
    service: 'meta-ads',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hi Vyora Digital team, I want to claim a free growth audit.\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nWebsite/Social: ${form.url}\nBudget: ${form.budget}\nService: ${form.service}\nNotes: ${form.message}`
      );
      window.open(`https://wa.me/918925502557?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <>
      <section className="subpage-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text-main)' }}>Contact Us</span>
          </div>

          <div style={{ maxWidth: '840px' }}>
            <div className="eyebrow">Direct Line to Growth Directors</div>
            <h1 className="h1" style={{ fontSize: 'clamp(34px, 4.4vw, 56px)', marginBottom: '18px' }}>
              Let&rsquo;s Build Your Brand&rsquo;s <span className="gold-gradient-text">Revenue Engine</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '28px' }}>
              Claim your 100% free 30-minute growth diagnostic session. We will tear down your ad accounts, landing page conversion friction, and attribution leaks with zero sales pressure.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>&lt; 15 Mins</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Average Reply Speed</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--color-meta)' }}>100% Free</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>30-Min Funnel Diagnostic</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-card)', padding: '10px 18px', borderRadius: '12px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--c-metallic-gold)' }}>Salem, TN</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Headquarters Office</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Office Details */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'start' }}>
            
            {/* Form Card */}
            <div className="card" style={{ padding: '40px 36px' }}>
              <div className="eyebrow" style={{ color: 'var(--c-metallic-gold)' }}>Fast Track Booking</div>
              <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '20px' }}>Schedule Your Free Growth Audit</h2>

              {submitted ? (
                <div style={{ padding: '36px 24px', textAlign: 'center', background: 'rgba(16,185,129,0.08)', borderRadius: '16px', border: '1px solid #10B981' }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>✓</div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#10B981' }}>Audit Request Received</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-body)', marginTop: '8px', lineHeight: 1.7 }}>
                    Connecting directly to WhatsApp (+91 89255 02557). Our Senior Growth Director is reviewing your submission right now.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactName">Your Name *</label>
                      <input
                        className="form-input"
                        id="contactName"
                        type="text"
                        required
                        placeholder="e.g. Rajiv Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactPhone">Phone / WhatsApp *</label>
                      <input
                        className="form-input"
                        id="contactPhone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contactEmail">Business Email *</label>
                    <input
                      className="form-input"
                      id="contactEmail"
                      type="email"
                      required
                      placeholder="name@yourcompany.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contactUrl">Website / Instagram URL</label>
                    <input
                      className="form-input"
                      id="contactUrl"
                      type="text"
                      placeholder="https://yourbrand.com or @handle"
                      value={form.url}
                      onChange={(e) => setForm({ ...form, url: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactBudget">Monthly Ad Spend</label>
                      <select
                        className="form-select"
                        id="contactBudget"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      >
                        <option value="under50k">₹25,000 – ₹50,000 / mo</option>
                        <option value="50k-150k">₹50,000 – ₹1.5 Lakhs / mo</option>
                        <option value="150k-500k">₹1.5L – ₹5.0 Lakhs / mo</option>
                        <option value="500k+">₹5.0 Lakhs+ / mo (Enterprise Scale)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactService">Primary Growth Need</label>
                      <select
                        className="form-select"
                        id="contactService"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="meta-ads">High-ROAS Meta/Google Ads</option>
                        <option value="funnels">Sub-Second Landing Pages</option>
                        <option value="seo">Local Google Maps 3-Pack</option>
                        <option value="crm">WhatsApp AI Booking Bot</option>
                        <option value="full-engine">Complete Full-Funnel Engine</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contactNotes">Current Bottleneck or Goal (Optional)</label>
                    <textarea
                      className="form-input"
                      id="contactNotes"
                      rows={3}
                      placeholder="Tell us about your current CAC, conversion rate, or what you want to achieve..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', minHeight: '52px', fontSize: '15px' }}>
                    <span>Claim Free 30-Minute Growth Audit ➔</span>
                  </button>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                    🔒 100% Confidential. Zero spam. We never share your data.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Contacts & Salem Headquarters */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="card" style={{ padding: '36px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>Official Headquarters &amp; Contacts</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212,175,55,0.12)', color: 'var(--c-metallic-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      📍
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Salem Headquarters:</strong>
                      <span style={{ color: 'var(--text-body)', lineHeight: 1.6, display: 'block' }}>
                        Krishna Nagar, Mamamgam,<br />Salem - 636302, Tamil Nadu, India.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16,185,129,0.12)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      📞
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Direct Phone &amp; WhatsApp:</strong>
                      <a href="tel:+918925502557" style={{ color: 'var(--c-metallic-gold)', fontWeight: 700, textDecoration: 'none', fontSize: '16px' }}>+91 89255 02557</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(239,68,68,0.12)', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      📸
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Instagram Official:</strong>
                      <a href="https://www.instagram.com/vyora.ai_digitalgrowth" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-metallic-gold)', fontWeight: 700, textDecoration: 'none' }}>@vyora.ai_digitalgrowth</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(30,115,190,0.12)', color: 'var(--color-meta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      ✉️
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Executive Inquiries:</strong>
                      <a href="mailto:hello@vyoradigital.com" style={{ color: 'var(--c-metallic-gold)', fontWeight: 700, textDecoration: 'none' }}>hello@vyoradigital.com</a>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-card)' }}>
                  <a className="btn btn-secondary" href="https://wa.me/918925502557?text=Hi%20Vyora%20team%2C%20let%27s%20connect%20now." target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center' }}>
                    Chat Directly on WhatsApp (+91 89255 02557)
                  </a>
                </div>
              </div>

              {/* SLA Guarantee Card */}
              <div className="card" style={{ padding: '28px', background: 'linear-gradient(135deg, rgba(212,175,55,0.06), rgba(243,229,171,0.08))', border: '1.5px solid rgba(212,175,55,0.3)' }}>
                <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '16px', marginBottom: '8px' }}>
                  ⚡ Guaranteed 15-Minute SLA
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                  All inquiries submitted during business hours (Monday – Saturday, 9:00 AM – 7:30 PM IST) are acknowledged by our growth directors within 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & SLA Callout Strip */}
      <section className="section" style={{ background: 'var(--bg-body)', borderTop: '1px solid var(--border-card)' }}>
        <div className="wrap text-center" style={{ maxWidth: '820px' }}>
          <div className="eyebrow">Enterprise-Grade Performance Guarantee</div>
          <h2 className="h2" style={{ marginBottom: '16px' }}>What Happens After You Inquire?</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '30px' }}>
            Within 15 minutes during operating hours, a Senior Growth Partner will review your website, ad footprint, and competitors to curate a tailored 30-minute growth action plan. Zero sales pressure, 100% technical and marketing clarity.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="https://wa.me/918925502557?text=Hi%20Vyora%20Digital%2C%20I%20would%20like%20to%20fast-track%20our%20audit." target="_blank" rel="noopener noreferrer">
              <span>Fast-Track on WhatsApp (+91 89255 02557)</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <Link className="btn btn-secondary" href="/reviews">
              Read Verified Client Reviews
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
