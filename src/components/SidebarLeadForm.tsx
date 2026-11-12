'use client';

import React, { useState } from 'react';
import { submitLead } from '@/lib/leadDispatcher';

interface SidebarLeadFormProps {
  title?: string;
  subtitle?: string;
  serviceDefault?: string;
  customFieldLabel?: string;
  customFieldPlaceholder?: string;
  btnText?: string;
  sourcePage?: string;
}

export default function SidebarLeadForm({
  title = 'Fast-Track Growth Consultation',
  subtitle = 'Request a 30-minute growth diagnostic session. We will evaluate your ad accounts, funnel drop-offs, and competitor benchmarks.',
  serviceDefault = 'Growth Audit',
  customFieldLabel = 'Business / Specialty',
  customFieldPlaceholder = 'e.g. Healthcare, Real Estate, E-Commerce',
  btnText = 'Schedule Growth Audit',
  sourcePage = 'Sidebar Form',
}: SidebarLeadFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [customVal, setCustomVal] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitLead({
        name,
        phone,
        service: serviceDefault,
        message: `${customFieldLabel}: ${customVal || 'None'}`,
        page: sourcePage,
      });
      setName('');
      setPhone('');
      setCustomVal('');
    } catch (err) {
      console.warn('Sidebar form submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="sidebar-card">
      <div className="eyebrow" style={{ color: 'var(--c-metallic-gold)' }}>Strategy Session</div>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '20px' }}>
        {subtitle}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="sbName">Your Name *</label>
          <input
            className="form-input"
            id="sbName"
            type="text"
            required
            placeholder="e.g. Dr. Ananya Kapoor"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="sbPhone">Phone / WhatsApp *</label>
          <input
            className="form-input"
            id="sbPhone"
            type="tel"
            required
            placeholder="+91 89255 02557"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="sbCustom">{customFieldLabel}</label>
          <input
            className="form-input"
            id="sbCustom"
            type="text"
            placeholder={customFieldPlaceholder}
            value={customVal}
            onChange={(e) => setCustomVal(e.target.value)}
          />
        </div>
        <button
          className="btn"
          type="submit"
          disabled={submitting}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <span>{submitting ? 'Submitting Details...' : btnText}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>
  );
}
