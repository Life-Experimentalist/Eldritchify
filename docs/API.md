# 🔮 Eldritchify API Documentation

**Version:** 2.0.0
**Base URL:** `https://eldritchify.vkrishna04.me/api`
**Rate Limit:** 10,000 characters per request (free tier)

---

## 📡 Endpoints

### 1. Health Check
Check API status and version.

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "operational",
  "version": "2.0.0",
  "timestamp": "2025-11-06T12:00:00.000Z",
  "endpoints": {
    "corrupt": "/api/corrupt (POST)",
    "purify": "/api/purify (POST)",
    "health": "/api/health (GET)"
  },
  "limits": {
    "maxTextLength": 10000,
    "chaosLevelRange": "1-100"
  },
  "message": "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
}
```

---

### 2. Corrupt Text
Transform normal text into corrupted Zalgo text.

**Endpoint:** `POST /api/corrupt`

**Request Body:**
```json
{
  "text": "He comes",
  "chaosLevel": 50,
  "voidSpacing": false,
  "spacingProbability": 50,
  "verticalMode": true
}
```

**Parameters:**
| Parameter            | Type    | Required | Range | Description                              |
| -------------------- | ------- | -------- | ----- | ---------------------------------------- |
| `text`               | string  | ✅ Yes    | -     | Text to corrupt (max 10,000 chars)       |
| `chaosLevel`         | number  | ✅ Yes    | 1-100 | Corruption intensity                     |
| `voidSpacing`        | boolean | ❌ No     | -     | Add random spacing (default: false)      |
| `spacingProbability` | number  | ❌ No     | 0-100 | Spacing frequency (default: 50)          |
| `verticalMode`       | boolean | ❌ No     | -     | Enable vertical stacking (default: true) |

**Response:**
```json
{
  "success": true,
  "input": "He comes",
  "output": "H̸̨̢̧̛e̶̢̢̨̛̛ ̴̡̢̧c̴̡̨̨̡̨̛̛ơ̵̧̡̨̡m̴̧̡̛e̶̢̧̨̨̛̛s̴̨̡̨̨̛̛",
  "chaosLevel": 50,
  "voidSpacing": false,
  "verticalMode": true,
  "characterCount": 127
}
```

**Chaos Level Guide:**
- **1-20:** Whisper (Light corruption)
- **21-40:** Murmur (Moderate corruption)
- **41-70:** Chant (Heavy corruption)
- **71-100:** Scream (Extreme corruption)

---

### 3. Purify Text
Remove all Unicode combining marks from corrupted text.

**Endpoint:** `POST /api/purify`

**Request Body:**
```json
{
  "text": "H̸̨̢̧̛e̶̢̢̨̛̛ ̴̡̢̧c̴̡̨̨̡̨̛̛ơ̵̧̡̨̡m̴̧̡̛e̶̢̧̨̨̛̛s̴̨̡̨̨̛̛"
}
```

**Parameters:**
| Parameter | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| `text`    | string | ✅ Yes    | Corrupted text to purify (max 10,000 chars) |

**Response:**
```json
{
  "success": true,
  "input": "H̸̨̢̧̛e̶̢̢̨̛̛ ̴̡̢̧c̴̡̨̨̡̨̛̛ơ̵̧̡̨̡m̴̧̡̛e̶̢̧̨̨̛̛s̴̨̡̨̨̛̛",
  "output": "He comes",
  "marksRemoved": 119,
  "characterCount": 8
}
```

---

## 🔧 Error Responses

All endpoints return error responses in this format:

```json
{
  "success": false,
  "error": "Error message description"
}
```

**Common Error Codes:**
- `400` - Bad Request (missing/invalid parameters)
- `405` - Method Not Allowed (wrong HTTP method)
- `413` - Payload Too Large (text exceeds 10,000 chars)
- `500` - Internal Server Error

---

## 💻 Code Examples

### JavaScript (Fetch API)
```javascript
// Corrupt text
const corruptText = async (text, chaosLevel) => {
  const response = await fetch('https://eldritchify.vkrishna04.me/api/corrupt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text,
      chaosLevel: chaosLevel
    })
  });

  const data = await response.json();
  return data.output;
};

// Usage
const corrupted = await corruptText('He comes', 50);
console.log(corrupted);
```

### Python (requests)
```python
import requests

def corrupt_text(text, chaos_level):
    url = "https://eldritchify.vkrishna04.me/api/corrupt"
    payload = {
        "text": text,
        "chaosLevel": chaos_level
    }

    response = requests.post(url, json=payload)
    data = response.json()

    return data["output"]

# Usage
corrupted = corrupt_text("He comes", 50)
print(corrupted)
```

### cURL
```bash
# Corrupt text
curl -X POST https://eldritchify.vkrishna04.me/api/corrupt \
  -H "Content-Type: application/json" \
  -d '{"text":"He comes","chaosLevel":50}'

# Purify text
curl -X POST https://eldritchify.vkrishna04.me/api/purify \
  -H "Content-Type: application/json" \
  -d '{"text":"H̸e̶ ̴c̴ơ̵m̴e̶s̴"}'

# Health check
curl https://eldritchify.vkrishna04.me/api/health
```

---

## 🌐 CORS Support

All API endpoints support CORS with:
- `Access-Control-Allow-Origin: *`
- Methods: `GET, POST, OPTIONS`
- Headers: `Content-Type`

The API can be called from any domain, including client-side JavaScript.

---

## ⚡ Rate Limiting

**Free Tier Limits:**
- **Text Length:** 10,000 characters per request
- **Request Frequency:** Managed by Cloudflare (generous free tier)
- **No API key required**

For batch processing or higher limits, consider self-hosting the API functions.

---

## 🔮 Unicode Technical Details

The corruption uses **Unicode Combining Diacritical Marks** from these ranges:

- **Above characters:** U+0300 – U+036F (56 marks)
- **Below characters:** U+0316 – U+035A (46 marks)
- **Middle characters:** U+0334 – U+0358 (8 marks)

**Algorithm:**
- Chaos level determines mark density (8-35 marks per character at max)
- Uppercase letters receive 50% more marks for better concealment
- Space characters receive 70% marks to maintain block effect
- Distribution: 45% above, 40% below, 15% through middle

---

## 🚀 Self-Hosting

To host your own instance:

1. Clone the repository:
```bash
git clone https://github.com/Life-Experimentalists/Eldritchify.git
```

2. Deploy to Cloudflare Pages:
```bash
cd Eldritchify
# Connect to Cloudflare Pages via dashboard
# API functions in /functions/api/* will auto-deploy
```

3. Update URLs in your frontend to point to your domain

---

## 📞 Support

- **GitHub Issues:** [Report bugs](https://github.com/Life-Experimentalists/Eldritchify/issues)
- **Documentation:** [README.md](https://github.com/Life-Experimentalists/Eldritchify)
- **Author:** [@VKrishna04](https://github.com/VKrishna04)

---

**License:** Apache 2.0
**Version:** 2.0.0
**Last Updated:** November 6, 2025

*"That is not dead which can eternal lie..."* 🜏
