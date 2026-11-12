import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us & Book Free Growth Diagnostic — Salem Headquarters',
  description:
    'Claim your 30-minute growth diagnostic session with senior performance directors at Vyora Digital. Salem Headquarters: Krishna Nagar, Mamamgam. Direct Line: +91 89255 02557.',
  alternates: {
    canonical: 'https://vyoradigital.com/contact/',
  },
  openGraph: {
    title: 'Contact Us & Book Free Growth Diagnostic — Vyora Digital',
    description: 'Claim your 30-minute growth diagnostic session with senior performance directors at Vyora Digital. Direct Line: +91 89255 02557.',
    url: 'https://vyoradigital.com/contact/',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
