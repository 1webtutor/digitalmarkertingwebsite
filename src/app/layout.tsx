import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BookingModal from '@/components/BookingModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://vyoradigital.com'),
  title: {
    default: 'Vyora Digital — AI Growth & Digital Authority | Performance Marketing Agency',
    template: '%s — Vyora Digital',
  },
  description:
    'Full-service performance digital marketing agency. We engineer sub-second funnels, high-ROAS Meta and Google ads, automated CRM pipelines, and 24/7 AI concierges.',
  keywords: [
    'Digital Marketing Agency',
    'AI Growth Agency',
    'Meta Ads Agency',
    'Google Ads Specialist',
    'Performance Marketing Salem',
    'High-Converting Funnels',
    'WhatsApp AI Automation',
    'Vyora Digital',
  ],
  authors: [{ name: 'Vyora Digital' }],
  creator: 'Vyora Digital',
  publisher: 'Vyora Digital',
  alternates: {
    canonical: 'https://vyoradigital.com/',
    languages: {
      'en': 'https://vyoradigital.com/',
      'en-IN': 'https://vyoradigital.com/',
      'x-default': 'https://vyoradigital.com/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/images/vy-monogram.svg',
    shortcut: '/assets/images/vy-monogram.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vyoradigital.com',
    siteName: 'Vyora Digital',
    title: 'Vyora Digital — AI Growth & Digital Authority',
    description: 'Build Visibility. Earn Authority. Accelerate Growth. Delivering predictable, high-ROAS customer acquisition.',
    images: [
      {
        url: '/assets/images/case-study-meta-realestate.svg',
        width: 1200,
        height: 630,
        alt: 'Vyora Digital AI Growth Engine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyora Digital — AI Growth & Digital Authority',
    description: 'Build Visibility. Earn Authority. Accelerate Growth. Delivering predictable, high-ROAS customer acquisition.',
    images: ['/assets/images/case-study-meta-realestate.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnected Google Web Fonts with display=swap (Immune to webpack font loader errors) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/animations.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/interactive.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MarketingAgency',
              name: 'Vyora Digital',
              url: 'https://vyoradigital.com',
              logo: 'https://vyoradigital.com/assets/images/vy-monogram.svg',
              description: 'AI Growth & Digital Authority. Build Visibility. Earn Authority. Accelerate Growth.',
              telephone: '+91 89255 02557',
              email: 'hello@vyoradigital.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Krishna Nagar, Mamamgam',
                addressLocality: 'Salem',
                postalCode: '636302',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
              },
              sameAs: ['https://www.instagram.com/vyora.ai_digitalgrowth'],
            }),
          }}
        />
      </head>
      <body>
        <div className="progress" aria-hidden="true" />
        <WhatsAppFloat />
        <Header />
        <main>{children}</main>
        <Footer />
        <BookingModal />

        {/* High-Performance Lazy Loaded 3D Experience (Zero TBT impact) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/three-scene.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
