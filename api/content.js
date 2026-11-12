import fs from 'fs';
import path from 'path';

/**
 * Vercel Serverless API endpoint: /api/content
 * Returns content from data/content.json or can be connected to Supabase/Postgres
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // If external DB URL (e.g., Supabase, KV, or REST DB) is provided in env:
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const dbRes = await fetch(`${process.env.SUPABASE_URL}/rest/v1/site_content?select=*&limit=1`, {
        headers: {
          'apikey': process.env.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`
        }
      });
      if (dbRes.ok) {
        const dbData = await dbRes.json();
        if (dbData && dbData.length > 0 && dbData[0].content) {
          return res.status(200).json(dbData[0].content);
        }
      }
    }

    // Default: read from data/content.json
    const filePath = path.join(process.cwd(), 'data', 'content.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const content = JSON.parse(fileData);

    return res.status(200).json(content);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to load content', details: error.message });
  }
}
