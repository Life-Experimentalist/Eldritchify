/**
 * Eldritchify API - Health Check Endpoint
 * GET /api/health
 *
 * Returns API status and version information
 */

export async function onRequest(context) {
  // Handle CORS
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=60",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        ...headers,
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  const response = {
    status: "operational",
    version: "2.0.0",
    timestamp: new Date().toISOString(),
    endpoints: {
      corrupt: "/api/corrupt (POST)",
      purify: "/api/purify (POST)",
      health: "/api/health (GET)",
    },
    limits: {
      maxTextLength: 10000,
      chaosLevelRange: "1-100",
    },
    message: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
  };

  return new Response(JSON.stringify(response, null, 2), {
    status: 200,
    headers,
  });
}
