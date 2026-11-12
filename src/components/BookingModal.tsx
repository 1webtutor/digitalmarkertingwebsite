'use client';

import React, { useState } from 'react';
import { submitLead } from '@/lib/leadDispatcher';

export default function BookingModal() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '50k-150k',
    objective: 'Meta/Google Ads Scaling',
  });

  const closeModal = () => {
    const modal = document.getElementById('bookingModal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        budget: formData.budget,
        service: formData.objective,
        page: typeof window !== 'undefined' ? window.location.pathname : 'Homepage',
      });
    } catch (err) {
      console.warn('Booking lead submission error:', err);
    } finally {
      setSubmitting(false);
      closeModal();
      setFormData({
        name: '',
        phone: '',
        budget: '50k-150k',
        objective: 'Meta/Google Ads Scaling',
      });
    }
  };

  return (
    <div className="modal-overlay" id="bookingModal" aria-hidden="true" role="dialog" aria-modal="true">
      <div className="modal-dialog">
        <button className="modal-close-btn" type="button" onClick={closeModal} aria-label="Close Modal">&times;</button>
        <div className="eyebrow">Direct Growth Consultation</div>
        <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px' }}>Claim Your 30-Min Strategy Call</h3>
        <p style={{ fontSize: '14px', marginTop: '8px', color: 'var(--text-muted)' }}>
          No high-pressure sales pitch. We will dissect your current digital presence, identify low-hanging revenue leaks, and outline a custom acquisition blueprint.
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="modalName">Full Name</label>
            <input
              className="form-input"
              id="modalName"
              type="text"
              required
              placeholder="e.g. Dr. Ramesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="modalPhone">WhatsApp / Mobile Number</label>
            <input
              className="form-input"
              id="modalPhone"
              type="tel"
              required
              placeholder="+91 89255 02557"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="modalBudget">Estimated Monthly Ad Spend</label>
            <select
              className="form-select"
              id="modalBudget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="under50k">₹25,000 – ₹50,000 / mo</option>
              <option value="50k-150k">₹50,000 – ₹1,50,000 / mo</option>
              <option value="150k-500k">₹1,50,000 – ₹5,00,000 / mo</option>
              <option value="scale">₹5,00,000+ / mo (Enterprise Scale)</option>
            </select>
          </div>
          <button
            className="btn"
            type="submit"
            disabled={submitting}
            style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
          >
            <span>{submitting ? 'Submitting Details...' : 'Confirm Discovery Call'}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </form>
      </div>
    </div>
  );
}
