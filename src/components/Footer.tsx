'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div className="footer-brand-monogram">
                <img src="/assets/images/vy-monogram.svg" alt="Vyora Monogram" width={30} height={30} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, color: '#FFFFFF' }}>
                  VYORA<span style={{ color: 'var(--c-metallic-gold)' }}>DIGITAL</span>
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-champagne-gold)' }}>
                  AI Growth &amp; Digital Authority
                </div>
              </div>
            </div>
            <p className="tagline" style={{ color: 'var(--c-champagne-gold)', fontWeight: 700, fontSize: '14px', marginBottom: '10px' }}>
              Build Visibility. Earn Authority. Accelerate Growth.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', margin: '0 0 16px 0' }}>
              Full-service AI-driven performance marketing agency. We engineer sub-second funnels, high-ROAS paid media, and automated client acquisition systems for high-growth businesses.
            </p>
            <div>
              <a
                href="https://www.instagram.com/vyora.ai_digitalgrowth"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--c-champagne-gold)', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}
              >
                Instagram: @vyora.ai_digitalgrowth
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/about">About Agency</Link></li>
              <li><Link href="/services">All Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/framework">Our Framework</Link></li>
              <li><Link href="/pricing">Growth Packages</Link></li>
              <li><Link href="/reviews">Client Reviews</Link></li>
              <li><Link href="/faq">Agency FAQs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Growth Solutions */}
          <div className="footer-col">
            <h4>Growth Solutions</h4>
            <ul>
              <li><Link href="/services/meta-ads">Meta Ads Engine</Link></li>
              <li><Link href="/services/google-ads">Google Search Domination</Link></li>
              <li><Link href="/services/seo-authority">Google Maps 3-Pack</Link></li>
              <li><Link href="/services/web-funnels">Web &amp; Funnel Architecture</Link></li>
              <li><Link href="/services/crm-automation">Lead Gen &amp; CRM Sync</Link></li>
              <li><Link href="/services/video-vsl">High-Retention Video Ads</Link></li>
              <li><Link href="/services/ai-solutions">24/7 WhatsApp AI Bot</Link></li>
            </ul>
          </div>

          {/* Column 4: Salem Headquarters */}
          <div className="footer-col">
            <h4>Salem Headquarters</h4>
            <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)' }}>
              Krishna Nagar, Mamamgam,<br />
              Salem - 636302, Tamil Nadu, India.
            </p>
            <p style={{ marginTop: '12px', fontSize: '14px' }}>
              <strong style={{ color: '#FFFFFF' }}>Direct:</strong>{' '}
              <a href="tel:+918925502557" style={{ color: 'var(--c-champagne-gold)' }}>+91 89255 02557</a><br />
              <strong style={{ color: '#FFFFFF' }}>WhatsApp:</strong>{' '}
              <a href="https://wa.me/918925502557" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-champagne-gold)' }}>+91 89255 02557</a><br />
              <strong style={{ color: '#FFFFFF' }}>Inquiries:</strong>{' '}
              <a href="mailto:hello@vyoradigital.com" style={{ color: 'var(--c-champagne-gold)' }}>hello@vyoradigital.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Vyora Digital (vyoradigital.com). All rights reserved. Registered Digital Marketing Agency.<br />
            <span style={{ fontSize: '12px', opacity: 0.8, marginTop: '4px', display: 'inline-block' }}>
              <Link href="/privacy" style={{ color: 'var(--c-champagne-gold)', textDecoration: 'none', marginRight: '14px' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: 'var(--c-champagne-gold)', textDecoration: 'none', marginRight: '14px' }}>Terms of Service</Link>
              <Link href="/refund-policy" style={{ color: 'var(--c-champagne-gold)', textDecoration: 'none' }}>Refund Policy</Link>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Official Domain: vyoradigital.com</span>
            <button className="totop" type="button" onClick={scrollToTop} aria-label="Back to Top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
