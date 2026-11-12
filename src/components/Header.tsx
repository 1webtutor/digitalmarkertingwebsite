'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vyora-theme') as 'light' | 'dark';
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('vyora-theme', next);
  };

  const openBookingModal = (e: React.MouseEvent) => {
    e.preventDefault();
    const modal = document.getElementById('bookingModal');
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }
  };

  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        <Link href="/" className="brand" aria-label="Vyora Digital Home">
          <div className="brand-monogram">
            <svg viewBox="0 0 120 120" width="30" height="30" fill="none">
              <defs>
                <linearGradient id="navVyGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F3DC7C" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
              </defs>
              <polygon points="26,24 38,24 60,78 48,78" fill="url(#navVyGold)" />
              <polygon points="94,24 82,24 60,78 72,78" fill="url(#navVyGold)" />
              <polygon points="34,36 44,24 60,54 50,60" fill="#FFF4D0" />
              <polygon points="86,36 76,24 60,54 70,60" fill="url(#navVyGold)" />
              <polygon points="60,48 68,60 60,72 52,60" fill="#FFFFFF" />
              <polygon points="56,66 64,66 64,100 56,100" fill="url(#navVyGold)" />
            </svg>
          </div>
          <div className="brand-info">
            <div className="brand-name">VYORA<span>DIGITAL</span></div>
            <div className="brand-sub">AI Growth &amp; Authority</div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav" aria-label="Main Navigation">
          <Link href="/about">About</Link>

          {/* Services Dropdown */}
          <div className="dd">
            <Link href="/services" className="dd-trigger">
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <div className="dd-menu" style={{ width: '520px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
              <Link href="/services/meta-ads">Meta Ads &amp; Acquisition</Link>
              <Link href="/services/google-ads">Google Ads &amp; Search</Link>
              <Link href="/services/seo-authority">SEO &amp; Map-Pack Authority</Link>
              <Link href="/services/web-funnels">High-Converting Funnels</Link>
              <Link href="/services/crm-automation">Lead CRM Automation</Link>
              <Link href="/services/video-vsl">Video &amp; VSL Creatives</Link>
              <Link href="/services/ai-solutions">24/7 WhatsApp AI Bot</Link>
              <Link href="/services" style={{ gridColumn: 'span 2', fontWeight: 800, color: 'var(--c-metallic-gold)', borderTop: '1px solid rgba(212,175,55,0.2)', marginTop: '4px', paddingTop: '8px' }}>
                Explore All Growth Services ➔
              </Link>
            </div>
          </div>

          <Link href="/#engine">Growth Engine</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/#why-us">Why Vyora</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/pricing">Packages</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Actions: Theme Toggle & CTA */}
        <div className="nav-actions">
          <button className="theme-toggle-btn" type="button" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a className="btn header-cta" href="/contact" onClick={openBookingModal}>
            <span className="cta-full">Claim Audit</span>
            <span className="cta-short">Audit</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>

          {/* Mobile Drawer */}
          <details className="mnav" open={isMobileOpen} onToggle={(e) => setIsMobileOpen((e.target as HTMLDetailsElement).open)}>
            <summary aria-label="Open Navigation"><span></span><span></span><span></span></summary>
            <div className="mnav-panel" onClick={() => setIsMobileOpen(false)}>
              <Link href="/about">About Agency</Link>
              <Link href="/services">All Services</Link>
              <Link href="/#engine">Growth Engine</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/#why-us">Why Vyora</Link>
              <Link href="/reviews">Client Reviews</Link>
              <Link href="/pricing">Packages</Link>
              <Link href="/framework">Methodology</Link>
              <Link href="/contact">Contact Us</Link>
              <a href="https://wa.me/918925502557" target="_blank" rel="noopener" style={{ color: 'var(--c-metallic-gold-dark)', fontWeight: 700 }}>
                WhatsApp (+91 89255 02557)
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
