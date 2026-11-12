'use client';

import React, { useEffect, useState } from 'react';

interface LeadDetails {
  name: string;
  phone: string;
  service?: string;
  budget?: string;
}

export default function LeadSuccessModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [lead, setLead] = useState<LeadDetails>({ name: '', phone: '' });

  useEffect(() => {
    const handleLeadSuccess = (e: Event) => {
      const customEvent = e as CustomEvent<LeadDetails>;
      if (customEvent.detail) {
        setLead(customEvent.detail);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('vyora:leadSuccess', handleLeadSuccess);
    return () => {
      window.removeEventListener('vyora:leadSuccess', handleLeadSuccess);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Vyora Digital team, I submitted my details on your website.\nName: ${lead.name}\nPhone: ${lead.phone}${
      lead.service ? `\nRequirement: ${lead.service}` : ''
    }`
  );

  return (
    <div
      className="modal-overlay active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="leadSuccessTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        backgroundColor: 'rgba(8, 9, 12, 0.72)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out',
      }}
    >
      <div
        className="modal-dialog"
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '2px solid var(--c-metallic-gold)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.2), 0 0 40px rgba(212,175,55,0.2)',
          maxWidth: '500px',
          width: '100%',
          padding: '40px 32px',
          textAlign: 'center',
          position: 'relative',
          animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close Popup"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border-card)',
            background: 'var(--bg-body, #FAF8F5)',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        {/* Animated Success Badge */}
        <div
          style={{
            width: '76px',
            height: '76px',
            margin: '0 auto 20px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(212,175,55,0.18), rgba(16,185,129,0.18))',
            border: '2px solid #10B981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(16,185,129,0.25)',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div className="eyebrow" style={{ color: 'var(--c-metallic-gold-dark)', marginBottom: '8px' }}>
          ✦ Consultation Request Received ✦
        </div>

        <h3
          id="leadSuccessTitle"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '26px',
            fontWeight: 800,
            color: 'var(--text-main)',
            marginBottom: '12px',
          }}
        >
          Details Submitted Successfully!
        </h3>

        <p
          style={{
            fontSize: '15px',
            color: 'var(--text-body)',
            lineHeight: 1.65,
            marginBottom: '24px',
          }}
        >
          Thank you for reaching out to <strong style={{ color: 'var(--text-main)' }}>Vyora Digital</strong>. We have received your details and our growth director will contact you shortly.
        </p>

        {/* Lead Details Confirmation Box */}
        {(lead.name || lead.phone) && (
          <div
            style={{
              background: 'var(--bg-body, #FAF8F5)',
              border: '1.5px solid var(--border-card)',
              borderRadius: '16px',
              padding: '16px 20px',
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '14px',
            }}
          >
            {lead.name && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Name:</span>
                <strong style={{ color: 'var(--text-main)' }}>{lead.name}</strong>
              </div>
            )}
            {lead.phone && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: lead.service || lead.budget ? '8px' : 0 }}>
                <span style={{ color: 'var(--text-muted)' }}>Contact:</span>
                <strong style={{ color: 'var(--text-main)' }}>{lead.phone}</strong>
              </div>
            )}
            {(lead.service || lead.budget) && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Requirement:</span>
                <strong style={{ color: 'var(--c-metallic-gold-dark)' }}>{lead.service || lead.budget}</strong>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href={`https://wa.me/918925502557?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              width: '100%',
              justifyContent: 'center',
              minHeight: '48px',
              fontSize: '14.5px',
              gap: '8px',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              <path d="M9.5 9.5c.3 1.6 1.4 3 3 3.8l.9-.9c.2-.2.5-.2.8-.1l1.3.6c.3.1.4.4.3.7-.3 1-1.2 1.6-2.2 1.4-3-.6-5.3-2.9-5.9-5.9-.2-1 .4-1.9 1.4-2.2.3-.1.6 0 .7.3l.6 1.3c.1.3.1.6-.1.8z" />
            </svg>
            <span>Connect on WhatsApp (+91 89255 02557)</span>
          </a>

          <button
            type="button"
            onClick={closeModal}
            className="btn-ghost"
            style={{
              width: '100%',
              justifyContent: 'center',
              minHeight: '44px',
              fontSize: '14px',
              borderRadius: '12px',
              border: '1.5px solid var(--border-card)',
              background: 'transparent',
              color: 'var(--text-main)',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            Close Window
          </button>
        </div>

        <div style={{ marginTop: '18px', fontSize: '12px', color: 'var(--text-muted)' }}>
          Salem Headquarters · Krishna Nagar, Mamamgam, Salem - 636302.
        </div>
      </div>
    </div>
  );
}
