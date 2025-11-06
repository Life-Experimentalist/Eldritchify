# Changelog

All notable changes to Eldritchify will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0]() - 2025-11-06

### 🎉 Major Release - Production-Ready PWA with API

#### ✨ Added - SEO & Discoverability
- **Comprehensive SEO Optimization**
  - Meta tags: title, description, keywords optimized for search engines
  - Open Graph protocol (10 properties) for social media sharing
  - Twitter Card support for rich previews
  - Schema.org structured data (WebApplication type)
  - Canonical URL and robots meta tag
  - Favicon and Apple touch icons

- **Search Engine Files**
  - robots.txt for crawler directives
  - sitemap.xml with image sitemap integration
  - Structured data listing 12 key features

#### ✨ Added - RESTful API (Cloudflare Workers)
- **Three Production Endpoints**
  - `POST /api/corrupt` - Text corruption with customizable parameters
  - `POST /api/purify` - Unicode mark removal
  - `GET /api/health` - API status and version check

- **API Features**
  - Full CORS support (Access-Control-Allow-Origin: *)
  - Rate limiting (10,000 characters per request)
  - JSON request/response format
  - Comprehensive error handling
  - API documentation in docs/API.md

- **API Parameters**
  - Chaos level (1-100) for corruption intensity
  - Void spacing toggle
  - Spacing probability control
  - Vertical mode selection
  - Returns input, output, character counts, and statistics

#### ✨ Added - Progressive Web App (PWA)
- **PWA Manifest**
  - manifest.json with 8 icon sizes (72x72 to 512x512)
  - Standalone display mode for app-like experience
  - Dark theme color (#0a0e27)
  - App shortcuts and categories
  - Screenshots for app stores

- **Service Worker**
  - Offline functionality with intelligent caching
  - Cache version: eldritchify-v2.0.0
  - Caches: HTML, manifest, background image, Google Fonts
  - Install/activate/fetch event handlers
  - API request bypass for live data

- **Installable App**
  - beforeinstallprompt event handling
  - Install prompt for desktop/mobile
  - Full offline capability
  - Native app experience

#### ✨ Added - Cloudflare Deployment
- **Configuration Files**
  - _headers: Security headers (CSP, HSTS, X-Frame-Options)
  - _headers: CORS configuration for API endpoints
  - _headers: Cache-Control policies
  - _redirects: URL routing rules
  - Functions structure for Cloudflare Workers

- **Production Ready**
  - Free tier compatible (Cloudflare Pages + Workers)
  - "Set and forget" hosting solution
  - Global CDN distribution
  - Zero server management

#### ✨ Added - Preset Corruption Buttons
- **One-Click Presets**
  - 🌫️ Whisper (Chaos 10) - Subtle corruption
  - 🌀 Murmur (Chaos 30) - Moderate corruption
  - 🔮 Chant (Chaos 60) - Heavy corruption
  - ⚡ Scream (Chaos 100) - Maximum corruption

- **User Experience**
  - Sets chaos slider automatically
  - Regenerates text immediately
  - Responsive flex layout
  - Emoji visual indicators

#### 🎨 Improved - UI Enhancements (from v1.0.0)
- **Glass-Morphism Design**
  - Cards: 40% opacity with backdrop blur (15px)
  - Textareas: 50% opacity for better background visibility
  - Cthulhu background.png fully visible through translucent UI
  - Enhanced depth and layering

- **Dual Display Modes**
  - Vertical Mode: Arial font, white text, character stacking
  - Horizontal Mode: Courier New font, green Matrix-style text
  - Toggle button with smooth mode transitions
  - Font-specific optimizations for each mode

- **Enhanced Corruption Algorithm**
  - Capital letters: 150% marks (1.5x multiplier) for better concealment
  - Space characters: 70% marks (0.7x multiplier) for block effect
  - Intensity range: 8-35 Unicode marks per character (up from 3-15)
  - 100+ combining diacritical marks used
  - Distribution: 45% above, 40% below, 15% middle

#### 🔧 Changed
- **Version Bump**
  - Updated from v1.0.0 to v2.0.0 (major release)
  - Reflects significant new features (API, PWA, SEO)

- **License**
  - Changed from MIT to Apache License 2.0
  - Better patent protection for production use

- **Documentation**
  - Created docs/API.md (comprehensive API documentation)
  - Updated ROADMAP.md (v2.0.0 marked complete)
  - Updated CHANGELOG.md (this file)
  - Enhanced README with API and PWA sections

#### 🔧 Technical Improvements
- **Performance**
  - Line-height optimized for vertical stacking (2.8)
  - Font changes for better Unicode rendering (Arial default)
  - Debounced text generation for large inputs

- **Code Quality**
  - Modular API functions (220 lines corrupt.js, 115 lines purify.js)
  - Consistent error handling across all endpoints
  - CORS preflight support (OPTIONS method)
  - Rate limiting to prevent abuse

#### 📚 Documentation
- **New Files**
  - docs/API.md: Full API reference with examples
  - manifest.json: PWA configuration
  - service-worker.js: Offline caching logic
  - _headers: Cloudflare security configuration
  - _redirects: URL routing rules
  - robots.txt: Search engine directives
  - sitemap.xml: SEO sitemap

- **Updated Files**
  - index.html: +100 lines (SEO meta tags, Schema.org, presets, PWA JS)
  - ROADMAP.md: v2.0.0 marked complete, cleaned up removed features
  - CHANGELOG.md: Full v2.0.0 release notes

#### 🚀 Deployment
- **Hosting Platform**
  - Cloudflare Pages for static site
  - Cloudflare Workers for API endpoints
  - Free tier with generous limits
  - Global CDN (200+ locations)
  - Automatic HTTPS

- **Setup Simplicity**
  - Single git push deployment
  - Zero configuration needed
  - Automatic builds and deploys
  - Preview deployments for branches

---

## [1.0.0]() - 2025-10-15

### 🎉 Initial Release

#### Added
- **Zalgo Text Corruption**
  - Adjustable chaos level (1-100)
  - Real-time text transformation
  - Extensive Unicode combining character support (100+ characters)
  - Live preview functionality

- **Void Spacing Mode**
  - Randomized character spacing
  - Adjustable spacing probability (0-100%)
  - Enhanced corruption effect

- **Text Purification**
  - Instant Unicode mark removal
  - Auto-clean on input
  - Clipboard integration

- **Cthulhu-Inspired UI**
  - Dark cosmic horror theme
  - Animated background tentacles
  - Floating particle effects
  - Eldritch eye decorations
  - Glowing text effects
  - Custom horror fonts (Nosifer, Creepster, UnifrakturMaguntia)
  - Responsive design for mobile and desktop

- **User Experience**
  - Copy to clipboard functionality
  - Visual feedback on copy
  - Slider value displays
  - Smooth animations and transitions
  - Accessible controls

- **Documentation**
  - Comprehensive README.md
  - Contributing guidelines
  - MIT License (later changed to Apache 2.0 in v2.0.0)
  - Code of conduct

#### Technical Details
- Pure vanilla JavaScript (no dependencies)
- Client-side processing (privacy-friendly)
- Lightweight (~15KB total)
- Cross-browser compatible
- Mobile-responsive

---

## [Unreleased]()

### Ideas for Future Releases
- [ ] Preset corruption styles (subtle, moderate, extreme)
- [ ] Dark/light theme toggle
- [ ] Text animation effects
- [ ] Custom corruption patterns
- [ ] Export/import settings
- [ ] Keyboard shortcuts
- [ ] Multi-language support
- [ ] More Lovecraftian quotes
- [ ] Sound effects toggle
- [ ] Statistics (characters corrupted, etc.)

---

**Legend:**
- 🎉 Major release
- ✨ New features
- 🐛 Bug fixes
- 🔧 Changes
- 🗑️ Removals
- ⚠️ Deprecations
- 🔒 Security fixes
