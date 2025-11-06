/**
 * Eldritchify API - Text Corruption Endpoint
 * POST /api/corrupt
 *
 * Corrupts text using Unicode combining marks (Zalgo effect)
 *
 * Request Body:
 * {
 *   "text": "string (required)",
 *   "chaosLevel": number 1-100 (required),
 *   "voidSpacing": boolean (optional, default: false),
 *   "spacingProbability": number 0-100 (optional, default: 50),
 *   "verticalMode": boolean (optional, default: true)
 * }
 *
 * Response:
 * {
 *   "success": true,
 *   "input": "original text",
 *   "output": "corrupted text",
 *   "chaosLevel": 50,
 *   "verticalMode": true,
 *   "characterCount": 123
 * }
 */

// Unicode combining character arrays
const CHARS_ABOVE = [
  "\u0300",
  "\u0301",
  "\u0302",
  "\u0303",
  "\u0304",
  "\u0305",
  "\u0306",
  "\u0307",
  "\u0308",
  "\u0309",
  "\u030A",
  "\u030B",
  "\u030C",
  "\u030D",
  "\u030E",
  "\u030F",
  "\u0310",
  "\u0311",
  "\u0312",
  "\u0313",
  "\u0314",
  "\u033D",
  "\u033E",
  "\u033F",
  "\u0340",
  "\u0341",
  "\u0342",
  "\u0343",
  "\u0344",
  "\u034A",
  "\u034B",
  "\u034C",
  "\u0350",
  "\u0351",
  "\u0352",
  "\u0357",
  "\u035B",
  "\u035C",
  "\u035D",
  "\u035E",
  "\u035F",
  "\u0360",
  "\u0361",
  "\u0362",
  "\u0363",
  "\u0364",
  "\u0365",
  "\u0366",
  "\u0367",
  "\u0368",
  "\u0369",
  "\u036A",
  "\u036B",
  "\u036C",
  "\u036D",
  "\u036E",
  "\u036F",
];

const CHARS_BELOW = [
  "\u0316",
  "\u0317",
  "\u0318",
  "\u0319",
  "\u031A",
  "\u031B",
  "\u031C",
  "\u031D",
  "\u031E",
  "\u031F",
  "\u0320",
  "\u0321",
  "\u0322",
  "\u0323",
  "\u0324",
  "\u0325",
  "\u0326",
  "\u0327",
  "\u0328",
  "\u0329",
  "\u032A",
  "\u032B",
  "\u032C",
  "\u032D",
  "\u032E",
  "\u032F",
  "\u0330",
  "\u0331",
  "\u0332",
  "\u0333",
  "\u0339",
  "\u033A",
  "\u033B",
  "\u033C",
  "\u0345",
  "\u0346",
  "\u0347",
  "\u0348",
  "\u0349",
  "\u034D",
  "\u034E",
  "\u0353",
  "\u0354",
  "\u0355",
  "\u0356",
  "\u0359",
  "\u035A",
];

const CHARS_MIDDLE = [
  "\u0334",
  "\u0335",
  "\u0336",
  "\u0337",
  "\u0338",
  "\u0358",
  "\u035E",
  "\u0359",
];

function getRandomChar(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function corruptText(text, chaosLevel, voidSpacing = false, spacingProb = 0.5) {
  let inputText = text;

  // Apply void spacing if enabled
  if (voidSpacing) {
    let spacedText = "";
    for (const char of inputText) {
      spacedText += char;
      if (Math.random() < spacingProb) {
        spacedText += " ";
      }
    }
    inputText = spacedText;
  }

  let outputText = "";
  const intensity = chaosLevel / 100;

  for (const char of inputText) {
    outputText += char;

    // Skip newlines and tabs
    if (char === "\n" || char === "\r" || char === "\t") continue;

    // Check if uppercase (needs more marks)
    const isSpace = char === " ";
    const isUpperCase =
      char === char.toUpperCase() && char !== char.toLowerCase();
    const upperCaseMultiplier = isUpperCase ? 1.5 : 1.0;
    const spaceMultiplier = isSpace ? 0.7 : 1.0;

    // Calculate marks
    const baseMinMarks = Math.floor(intensity * 8);
    const baseMaxMarks = Math.ceil(intensity * 35);
    const minMarks = Math.floor(
      baseMinMarks * upperCaseMultiplier * spaceMultiplier
    );
    const maxMarks = Math.ceil(
      baseMaxMarks * upperCaseMultiplier * spaceMultiplier
    );
    const numMarks =
      minMarks + Math.floor(Math.random() * (maxMarks - minMarks + 1));

    // Add corruption marks
    for (let i = 0; i < numMarks; i++) {
      const position = Math.random();
      if (position < 0.45) {
        outputText += getRandomChar(CHARS_ABOVE);
      } else if (position < 0.85) {
        outputText += getRandomChar(CHARS_BELOW);
      } else {
        outputText += getRandomChar(CHARS_MIDDLE);
      }
    }
  }

  return outputText;
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

    if (
      !body.chaosLevel ||
      typeof body.chaosLevel !== "number" ||
      body.chaosLevel < 1 ||
      body.chaosLevel > 100
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing or invalid "chaosLevel" field (must be number 1-100)',
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

    // Rate limiting check (simple version using text length)
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

    const voidSpacing = body.voidSpacing || false;
    const spacingProb = (body.spacingProbability || 50) / 100;
    const verticalMode = body.verticalMode !== false; // default true

    // Corrupt the text
    const corruptedText = corruptText(
      body.text,
      body.chaosLevel,
      voidSpacing,
      spacingProb
    );

    // Return response
    return new Response(
      JSON.stringify({
        success: true,
        input: body.text,
        output: corruptedText,
        chaosLevel: body.chaosLevel,
        voidSpacing: voidSpacing,
        verticalMode: verticalMode,
        characterCount: corruptedText.length,
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
