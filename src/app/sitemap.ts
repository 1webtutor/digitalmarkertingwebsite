import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vyoradigital.com';
  const now = new Date();

  const routes = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about/`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/framework/`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/pricing/`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/reviews/`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/faq/`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact/`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services/`, priority: 0.95, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services/meta-ads/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services/google-ads/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services/seo-authority/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services/web-funnels/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services/crm-automation/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services/video-vsl/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services/ai-solutions/`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/case-studies/`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/case-studies/aesthetic-clinic/`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/case-studies/real-estate-luxury/`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/case-studies/ecommerce-dtc/`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy/`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms/`, priority: 0.5, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/refund-policy/`, priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
