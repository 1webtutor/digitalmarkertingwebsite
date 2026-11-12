import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BookingModal from '@/components/BookingModal';
import LeadSuccessModal from '@/components/LeadSuccessModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://vyoradigital.com'),
  title: {
    default: 'Vyora Digital — AI Growth & Performance Marketing Agency',
    template: '%s — Vyora Digital',
  },
  description:
    'Full-service performance digital marketing agency headquartered in Salem, India. Engineering high-ROAS Meta and Google ads, sub-second funnels, Local SEO 3-Pack, and WhatsApp AI automation.',
  keywords: [
    'Digital Marketing Agency',
    'Performance Marketing Salem',
    'AI Growth Agency',
    'Meta Ads Agency',
    'Google Ads Specialist',
    'Local SEO Salem',
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
    apple: '/assets/images/vy-monogram.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vyoradigital.com/',
    siteName: 'Vyora Digital',
    title: 'Vyora Digital — AI Growth & Performance Marketing Agency',
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
    title: 'Vyora Digital — AI Growth & Performance Marketing Agency',
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
        {/* Preconnected High-Performance Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/animations.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/interactive.css" />

        {/* Complete LocalBusiness & MarketingAgency Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['MarketingAgency', 'LocalBusiness'],
                  '@id': 'https://vyoradigital.com/#organization',
                  name: 'Vyora Digital',
                  url: 'https://vyoradigital.com/',
                  logo: 'https://vyoradigital.com/assets/images/vy-monogram.svg',
                  image: 'https://vyoradigital.com/assets/images/case-study-meta-realestate.svg',
                  description: 'AI Growth & Performance Marketing Agency specializing in Meta ads, Google Ads, Local SEO, high-converting funnels, and WhatsApp AI automation.',
                  telephone: '+91 89255 02557',
                  email: 'hello@vyoradigital.com',
                  priceRange: '₹₹₹',
                  currenciesAccepted: 'INR, USD, AED',
                  paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Krishna Nagar, Mamamgam',
                    addressLocality: 'Salem',
                    postalCode: '636302',
                    addressRegion: 'Tamil Nadu',
                    addressCountry: 'IN',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 11.6917,
                    longitude: 78.1256,
                  },
                  openingHoursSpecification: [
                    {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                      opens: '09:00',
                      closes: '19:30',
                    },
                  ],
                  areaServed: [
                    { '@type': 'AdministrativeArea', name: 'Salem, Tamil Nadu' },
                    { '@type': 'Country', name: 'India' },
                    { '@type': 'Country', name: 'United Arab Emirates' },
                    { '@type': 'Country', name: 'United States' },
                  ],
                  sameAs: [
                    'https://www.instagram.com/vyora.ai_digitalgrowth',
                    'https://github.com/1webtutor/digitalmarkertingwebsite',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://vyoradigital.com/#website',
                  url: 'https://vyoradigital.com/',
                  name: 'Vyora Digital',
                  publisher: { '@id': 'https://vyoradigital.com/#organization' },
                  inLanguage: 'en-IN',
                },
              ],
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
        <LeadSuccessModal />
      </body>
    </html>
  );
}
