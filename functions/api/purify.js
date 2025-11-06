/**
 * Eldritchify API - Text Purification Endpoint
 * POST /api/purify
 *
 * Removes all Unicode combining marks from corrupted text
 *
 * Request Body:
 * {
 *   "text": "string (required)"
 * }
 *
 * Response:
 * {
 *   "success": true,
 *   "input": "corrupted text",
 *   "output": "clean text",
 *   "marksRemoved": 1234
 * }
 */

function purifyText(text) {
  // Remove all Unicode combining marks (U+0300 to U+036F range)
  const cleaned = text.replace(/[\u0300-\u036F]/g, "");
  const marksRemoved = text.length - cleaned.length;

  return {
    cleaned,
    marksRemoved,
  };
}

export async function onRequest(context) {
  // Handle CORS preflight
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  // Only accept POST
  if (context.request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Method not allowed. Use POST.",
      }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  try {
    const body = await context.request.json();

    // Validate input
    if (!body.text || typeof body.text !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing or invalid "text" field (must be a string)',
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Rate limiting check
    if (body.text.length > 10000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Text too long. Maximum 10,000 characters allowed.",
        }),
        {
          status: 413,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Purify the text
    const result = purifyText(body.text);

    // Return response
    return new Response(
      JSON.stringify({
        success: true,
        input: body.text,
        output: result.cleaned,
        marksRemoved: result.marksRemoved,
        characterCount: result.cleaned.length,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-cache",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Invalid JSON or server error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
