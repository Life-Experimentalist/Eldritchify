# 🎴 Eldritchify API - Quick Reference Card

**Base URL**: `https://eldritchify.vkrishna04.me/api`
**Version**: 2.0.0
**Auth**: None (public API)
**CORS**: Enabled (all origins)

---

## 📍 Endpoints

| Endpoint       | Method | Purpose                         |
| -------------- | ------ | ------------------------------- |
| `/api/corrupt` | POST   | Corrupt text with Unicode marks |
| `/api/purify`  | POST   | Remove Unicode marks            |
| `/api/health`  | GET    | Check API status                |

---

## 🔮 POST /api/corrupt

**Corrupts text using Unicode combining marks**

### Request
```json
{
  "text": "He comes",           // Required: string, max 10k chars
  "chaosLevel": 50,             // Required: number 1-100
  "voidSpacing": false,         // Optional: boolean, default false
  "spacingProbability": 50,     // Optional: number 0-100, default 50
  "verticalMode": true          // Optional: boolean, default true
}
```

### Response (200 OK)
```json
{
  "success": true,
  "input": "He comes",
  "output": "H̸̨̢e̶̢̢ ̴̡̢c̴̡̨o̵̧m̴̧e̶̢̧s̴̨̡",
  "chaosLevel": 50,
  "voidSpacing": false,
  "verticalMode": true,
  "characterCount": 127
}
```

### Parameters

| Param                | Type    | Required | Range   | Description          |
| -------------------- | ------- | -------- | ------- | -------------------- |
| `text`               | string  | ✅        | max 10k | Text to corrupt      |
| `chaosLevel`         | number  | ✅        | 1-100   | Corruption intensity |
| `voidSpacing`        | boolean | ❌        | -       | Add random spaces    |
| `spacingProbability` | number  | ❌        | 0-100   | Space frequency (%)  |
| `verticalMode`       | boolean | ❌        | -       | Display mode hint    |

### Chaos Levels
- **1-20**: Whisper (light)
- **21-40**: Murmur (moderate)
- **41-70**: Chant (heavy)
- **71-100**: Scream (extreme)

---

## 🧹 POST /api/purify

**Removes all Unicode combining marks**

### Request
```json
{
  "text": "H̸̨̢e̶̢̢ ̴̡̢c̴̡̨o̵̧m̴̧e̶̢̧s̴̨̡"  // Required: string, max 10k chars
}
```

### Response (200 OK)
```json
{
  "success": true,
  "input": "H̸̨̢e̶̢̢ ̴̡̢c̴̡̨o̵̧m̴̧e̶̢̧s̴̨̡",
  "output": "He comes",
  "marksRemoved": 119,
  "characterCount": 8
}
```

---

## 🏥 GET /api/health

**Check API status and version**

### Request
```bash
curl https://eldritchify.vkrishna04.me/api/health
```

### Response (200 OK)
```json
{
  "status": "operational",
  "version": "2.0.0",
  "timestamp": "2025-11-06T12:34:56.789Z",
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

## ⚠️ Error Codes

| Code | Meaning               | Cause                        |
| ---- | --------------------- | ---------------------------- |
| 400  | Bad Request           | Missing/invalid parameters   |
| 405  | Method Not Allowed    | Wrong HTTP method            |
| 413  | Payload Too Large     | Text > 10,000 chars          |
| 500  | Internal Server Error | Worker crash or invalid JSON |

### Error Response Format
```json
{
  "success": false,
  "error": "Error message description"
}
```

---

## 📊 Rate Limits

| Limit               | Value        | Scope                      |
| ------------------- | ------------ | -------------------------- |
| **Max text length** | 10,000 chars | Per request                |
| **Daily requests**  | 100,000      | **Per Cloudflare account** |
| **Worker CPU**      | 10ms (free)  | Per request                |
| **Response size**   | 128 KB       | Per request                |

**Important**: 100k/day limit is shared across ALL Workers in your Cloudflare account, not per-project.

---

## 💻 Code Examples

### cURL
```bash
# Corrupt with all parameters
curl -X POST https://eldritchify.vkrishna04.me/api/corrupt \
  -H "Content-Type: application/json" \
  -d '{
    "text": "CTHULHU RISES",
    "chaosLevel": 100,
    "voidSpacing": true,
    "spacingProbability": 75,
    "verticalMode": false
  }'

# Purify
curl -X POST https://eldritchify.vkrishna04.me/api/purify \
  -H "Content-Type: application/json" \
  -d '{"text":"H̸e̶ ̴c̴o̵m̴e̶s̴"}'

# Health check
curl https://eldritchify.vkrishna04.me/api/health
```

### Python
```python
import requests

# Corrupt
response = requests.post(
    'https://eldritchify.vkrishna04.me/api/corrupt',
    json={'text': 'He comes', 'chaosLevel': 50}
)
print(response.json()['output'])

# Purify
response = requests.post(
    'https://eldritchify.vkrishna04.me/api/purify',
    json={'text': 'H̸e̶ ̴c̴o̵m̴e̶s̴'}
)
print(response.json()['output'])
```

### JavaScript
```javascript
// Corrupt
const response = await fetch('https://eldritchify.vkrishna04.me/api/corrupt', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'He comes', chaosLevel: 50 })
});
const data = await response.json();
console.log(data.output);

// Purify
const response2 = await fetch('https://eldritchify.vkrishna04.me/api/purify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'H̸e̶ ̴c̴o̵m̴e̶s̴' })
});
const data2 = await response2.json();
console.log(data2.output);
```

---

## 🎯 Quick Tips

### For Maximum Corruption
- Set `chaosLevel: 100`
- Use uppercase letters (get 50% more marks)
- Enable `voidSpacing: true` with high `spacingProbability`

### For Subtle Effect
- Set `chaosLevel: 10-20`
- Use lowercase text
- Keep `voidSpacing: false`

### For Block Text Effect
- High `chaosLevel` (70+)
- Disable `voidSpacing` (false)
- Use UPPERCASE TEXT for emphasis

### For Spaced/Floating Text
- Enable `voidSpacing: true`
- Set `spacingProbability: 75-100`
- Any `chaosLevel` works

---

## 🔐 Security

- **No authentication** required (public API)
- **CORS enabled** (call from any domain)
- **HTTPS only** (automatic encryption)
- **No logging** (text is not stored)
- **No tracking** (privacy-focused)

---

## 📚 Full Documentation

- **Human-readable**: [docs/API.md](../docs/API.md)
- **AI Agent-friendly**: [docs/API_AGENTIC.md](../docs/API_AGENTIC.md)
- **Deployment Guide**: [docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md)

---

## 🆘 Support

- **GitHub**: [Life-Experimentalists/Eldritchify](https://github.com/Life-Experimentalists/Eldritchify)
- **Issues**: [Report bugs](https://github.com/Life-Experimentalists/Eldritchify/issues)
- **Author**: [@VKrishna04](https://github.com/VKrishna04)

---

**License**: Apache 2.0
**Version**: 2.0.0
**Last Updated**: November 6, 2025

*"May your API calls summon eldritch horrors successfully."* 🜏
