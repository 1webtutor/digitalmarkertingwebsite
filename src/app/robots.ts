import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'AhrefsBot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://vyoradigital.com/sitemap.xml',
  };
}
