/**
 * Cloudflare Pages Functions: /api/content
 * Returns content with Cloudflare KV / D1 / Supabase support
 */
export async function onRequest(context) {
  const { env, request } = context;

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  try {
    // 1. If Cloudflare KV is bound (e.g., env.SITE_CONTENT_KV)
    if (env.SITE_CONTENT_KV) {
      const kvData = await env.SITE_CONTENT_KV.get("site_content", "json");
      if (kvData) {
        return new Response(JSON.stringify(kvData), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "no-cache",
          },
        });
      }
    }

    // 2. Fallback to fetching static /data/content.json
    const url = new URL(request.url);
    const contentUrl = `${url.origin}/data/content.json`;
    const res = await fetch(contentUrl);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
