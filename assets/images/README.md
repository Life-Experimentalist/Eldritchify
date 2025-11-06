# Assets - Images

## 📁 Image Files

### Favicon & Icons (PWA Support)
- **favicon.ico** - Classic 32x32 ICO format favicon
- **favicon.svg** - Scalable vector favicon (modern browsers)
- **favicon-96x96.png** - High-resolution PNG favicon
- **apple-touch-icon.png** - 180x180 iOS home screen icon
- **web-app-manifest-192x192.png** - PWA icon (standard size)
- **web-app-manifest-512x512.png** - PWA icon (large size, maskable)

### Site Graphics
- **logo.png** - Main Eldritchify logo (displayed in header)
- **background.png** - Cthulhu background image

### Configuration Files
- **site.webmanifest** - Alternative PWA manifest (redundant with root manifest.json)

---

## 🎨 Current Integration

### Favicon References (index.html)
```html
<link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico" />
<link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
<link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicon-96x96.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
```

### PWA Manifest Icons (manifest.json)
```json
{
  "icons": [
    { "src": "/assets/images/favicon-96x96.png", "sizes": "96x96" },
    { "src": "/assets/images/apple-touch-icon.png", "sizes": "180x180" },
    { "src": "/assets/images/web-app-manifest-192x192.png", "sizes": "192x192", "purpose": "any maskable" },
    { "src": "/assets/images/web-app-manifest-512x512.png", "sizes": "512x512", "purpose": "any maskable" }
  ]
}
```

### Service Worker Cache (service-worker.js)
All icon files are cached for offline PWA support.

---

## 📊 Icon Specifications

| File                         | Size    | Format | Purpose                 |
| ---------------------------- | ------- | ------ | ----------------------- |
| favicon.ico                  | 32x32   | ICO    | Classic browser favicon |
| favicon.svg                  | Vector  | SVG    | Modern scalable favicon |
| favicon-96x96.png            | 96x96   | PNG    | High-res favicon        |
| apple-touch-icon.png         | 180x180 | PNG    | iOS home screen         |
| web-app-manifest-192x192.png | 192x192 | PNG    | PWA standard icon       |
| web-app-manifest-512x512.png | 512x512 | PNG    | PWA large/maskable icon |

---

## 🔧 Adding New Images

### For Additional Icons
1. Generate from source with proper dimensions
2. Optimize with tools like [TinyPNG](https://tinypng.com/)
3. Add to `/assets/images/`
4. Update `manifest.json` icons array
5. Add to `service-worker.js` cache

### For Background/Graphics
1. Place in `/assets/images/`
2. Reference in CSS or HTML
3. Optimize file size for web (< 500KB recommended)
4. Add to service worker cache if needed for offline

---

## 🎯 Best Practices

- ✅ **SVG favicons** for modern browsers (scalable, small file size)
- ✅ **ICO fallback** for older browsers
- ✅ **Multiple PWA sizes** (192x192 and 512x512 minimum)
- ✅ **Maskable icons** for Android adaptive icons
- ✅ **Apple touch icon** for iOS home screen
- ✅ **Optimized file sizes** (compress PNGs)

---

*"Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"*
