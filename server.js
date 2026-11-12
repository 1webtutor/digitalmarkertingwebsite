/**
 * VYORA DIGITAL — NODE.JS HIGH-PERFORMANCE WEB SERVER
 * AI Growth & Digital Authority (vyoradigital.com)
 * Serves rich animated HTML design, Three.js WebGL canvas, clean URLs, and dynamic APIs
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security & Caching Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Dynamic API Endpoint: /api/content (GET & POST for dynamic JSON updates)
const contentPath = path.join(ROOT_DIR, 'data', 'content.json');

app.get('/api/content', (req, res) => {
  if (fs.existsSync(contentPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
      res.setHeader('Cache-Control', 'no-cache');
      return res.json({ status: 'ok', data });
    } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Failed to read content.json' });
    }
  }
  res.status(404).json({ status: 'error', message: 'Content file not found' });
});

app.post('/api/content', (req, res) => {
  try {
    const updatedData = req.body;
    fs.writeFileSync(contentPath, JSON.stringify(updatedData, null, 2), 'utf8');
    return res.json({ status: 'ok', message: 'Content updated successfully' });
  } catch (err) {
    return res.status(500).json({ status: 'error', message: 'Failed to write content.json' });
  }
});

// Static Assets (/assets, /public, /data)
app.use('/assets', express.static(path.join(ROOT_DIR, 'assets'), {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.svg')) res.setHeader('Content-Type', 'image/svg+xml');
    if (filePath.endsWith('.mp4')) res.setHeader('Content-Type', 'video/mp4');
  }
}));

app.use('/public', express.static(path.join(ROOT_DIR, 'public')));
app.use('/data', express.static(path.join(ROOT_DIR, 'data')));

// Root Files: robots.txt, sitemap.xml, favicon.ico
app.get('/robots.txt', (req, res) => res.sendFile(path.join(ROOT_DIR, 'robots.txt')));
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(ROOT_DIR, 'sitemap.xml'));
});
app.get('/favicon.ico', (req, res) => res.sendFile(path.join(ROOT_DIR, 'assets', 'images', 'vy-monogram.svg')));

// Explicit Route Mapping (Supports clean URLs AND .html extensions)
const routeMap = {
  '/': 'index.html',
  '/index': 'index.html',
  '/about': 'about.html',
  '/about.html': 'about.html',
  '/services': 'services.html',
  '/services.html': 'services.html',
  '/services/meta-ads': 'services/meta-ads.html',
  '/services/meta-ads.html': 'services/meta-ads.html',
  '/services/google-ads': 'services/google-ads.html',
  '/services/google-ads.html': 'services/google-ads.html',
  '/services/seo-authority': 'services/seo-authority.html',
  '/services/seo-authority.html': 'services/seo-authority.html',
  '/services/web-funnels': 'services/web-funnels.html',
  '/services/web-funnels.html': 'services/web-funnels.html',
  '/services/crm-automation': 'services/crm-automation.html',
  '/services/crm-automation.html': 'services/crm-automation.html',
  '/services/video-vsl': 'services/video-vsl.html',
  '/services/video-vsl.html': 'services/video-vsl.html',
  '/services/ai-solutions': 'services/ai-solutions.html',
  '/services/ai-solutions.html': 'services/ai-solutions.html',
  '/services/lead-generation': 'services/lead-generation.html',
  '/services/lead-generation.html': 'services/lead-generation.html',
  '/services/seo': 'services/seo.html',
  '/services/seo.html': 'services/seo.html',
  '/services/video-editing': 'services/video-editing.html',
  '/services/video-editing.html': 'services/video-editing.html',
  '/services/website-development': 'services/website-development.html',
  '/services/website-development.html': 'services/website-development.html',
  '/case-studies': 'case-studies.html',
  '/case-studies.html': 'case-studies.html',
  '/case-studies/real-estate-luxury': 'case-studies/real-estate-luxury.html',
  '/case-studies/real-estate-luxury.html': 'case-studies/real-estate-luxury.html',
  '/case-studies/aesthetic-clinic': 'case-studies/aesthetic-clinic.html',
  '/case-studies/aesthetic-clinic.html': 'case-studies/aesthetic-clinic.html',
  '/case-studies/ecommerce-dtc': 'case-studies/ecommerce-dtc.html',
  '/case-studies/ecommerce-dtc.html': 'case-studies/ecommerce-dtc.html',
  '/pricing': 'pricing.html',
  '/pricing.html': 'pricing.html',
  '/reviews': 'reviews.html',
  '/reviews.html': 'reviews.html',
  '/framework': 'framework.html',
  '/framework.html': 'framework.html',
  '/faq': 'faq.html',
  '/faq.html': 'faq.html',
  '/contact': 'contact.html',
  '/contact.html': 'contact.html',
  '/privacy': 'privacy.html',
  '/privacy.html': 'privacy.html',
  '/privacy-policy': 'privacy-policy.html',
  '/privacy-policy.html': 'privacy-policy.html',
  '/terms': 'terms.html',
  '/terms.html': 'terms.html',
  '/terms-and-conditions': 'terms-and-conditions.html',
  '/terms-and-conditions.html': 'terms-and-conditions.html',
  '/refund-policy': 'refund-policy.html',
  '/refund-policy.html': 'refund-policy.html'
};

// Register all defined routes
Object.keys(routeMap).forEach((cleanRoute) => {
  const filePath = path.join(ROOT_DIR, routeMap[cleanRoute]);
  app.get(cleanRoute, (req, res) => {
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      return res.sendFile(filePath);
    }
    res.status(404).send('File not found: ' + routeMap[cleanRoute]);
  });
});

// Dynamic Fallback for any clean URL or subpage
app.use((req, res, next) => {
  let cleanPath = req.path.replace(/^\/+|\/+$/g, '');
  if (!cleanPath) cleanPath = 'index';

  // 1. Try file directly
  let testFile = path.join(ROOT_DIR, cleanPath);
  if (fs.existsSync(testFile) && fs.statSync(testFile).isFile()) {
    return res.sendFile(testFile);
  }

  // 2. Try file + .html
  let testHtml = path.join(ROOT_DIR, cleanPath + '.html');
  if (fs.existsSync(testHtml) && fs.statSync(testHtml).isFile()) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    return res.sendFile(testHtml);
  }

  // 3. Try directory/index.html
  let testIndex = path.join(ROOT_DIR, cleanPath, 'index.html');
  if (fs.existsSync(testIndex) && fs.statSync(testIndex).isFile()) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    return res.sendFile(testIndex);
  }

  next();
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>404 — Page Not Found · Vyora Digital</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/assets/css/style.css">
    </head>
    <body style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#08090C;color:#FFFFFF;text-align:center;padding:20px;">
      <div>
        <div style="font-size:72px;font-weight:900;color:#D4AF37;">404</div>
        <h1 style="font-size:28px;margin-top:10px;">Page Not Found</h1>
        <p style="color:rgba(255,255,255,0.7);margin-top:12px;max-width:440px;">The page you are looking for does not exist or has been relocated.</p>
        <div style="margin-top:24px;">
          <a href="/" class="btn" style="display:inline-flex;padding:12px 28px;background:#D4AF37;color:#08090C;text-decoration:none;border-radius:100px;font-weight:700;">Back to Homepage</a>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`✨ Vyora Digital Node.js Server Active!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🌟 Three.js 3D WebGL Canvas: Active on Homepage`);
  console.log(`🔗 Clean URLs & .html URLs: Fully Supported`);
  console.log(`💾 Dynamic API: http://localhost:${PORT}/api/content`);
  console.log(`==================================================\n`);
});
