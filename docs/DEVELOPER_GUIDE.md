# 🚀 Getting Started - Developer Guide

Welcome to the Eldritchify project! This guide will help you get started whether you're a contributor, maintainer, or just curious about the code.

## 📋 Table of Contents

- [🚀 Getting Started - Developer Guide](#-getting-started---developer-guide)
  - [📋 Table of Contents](#-table-of-contents)
  - [🎯 Quick Start](#-quick-start)
    - [Prerequisites](#prerequisites)
    - [Clone \& Run](#clone--run)
    - [No Build Process Needed!](#no-build-process-needed)
  - [📁 Project Structure](#-project-structure)
  - [🔍 Understanding the Code](#-understanding-the-code)
    - [HTML Structure (Lines 1-70)](#html-structure-lines-1-70)
    - [CSS Architecture (Lines 8-385)](#css-architecture-lines-8-385)
      - [1. **Reset \& Base Styles**](#1-reset--base-styles)
      - [2. **Animations**](#2-animations)
      - [3. **Component Styles**](#3-component-styles)
      - [4. **Interactive Elements**](#4-interactive-elements)
    - [JavaScript Logic (Lines 387-520)](#javascript-logic-lines-387-520)
      - [1. **Unicode Character Arrays**](#1-unicode-character-arrays)
      - [2. **Core Functions**](#2-core-functions)
        - [`getRandomChar(charList)`](#getrandomcharcharlist)
        - [`updateSliderValues()`](#updateslidervalues)
        - [`generateZalgo()`](#generatezalgo)
        - [`cleanZalgo()`](#cleanzalgo)
        - [`copyToClipboard(text, buttonId)`](#copytoclipboardtext-buttonid)
      - [3. **Event Listeners**](#3-event-listeners)
  - [🛠️ Development Workflow](#️-development-workflow)
    - [Making Changes](#making-changes)
      - [1. **Edit HTML Structure**](#1-edit-html-structure)
      - [2. **Edit Styles**](#2-edit-styles)
      - [3. **Edit JavaScript**](#3-edit-javascript)
    - [Testing Your Changes](#testing-your-changes)
      - [Browser DevTools](#browser-devtools)
      - [Live Reload](#live-reload)
  - [🧪 Testing](#-testing)
    - [Manual Testing Checklist](#manual-testing-checklist)
      - [✅ Functionality Tests](#-functionality-tests)
      - [✅ UI/UX Tests](#-uiux-tests)
      - [✅ Browser Compatibility](#-browser-compatibility)
    - [Test Cases](#test-cases)
      - [Test Case 1: Basic Corruption](#test-case-1-basic-corruption)
      - [Test Case 2: Maximum Corruption](#test-case-2-maximum-corruption)
      - [Test Case 3: Void Spacing](#test-case-3-void-spacing)
      - [Test Case 4: Purification](#test-case-4-purification)
  - [🚀 Deployment](#-deployment)
    - [GitHub Pages (Recommended)](#github-pages-recommended)
      - [Automatic Deployment](#automatic-deployment)
      - [Manual Setup](#manual-setup)
    - [Custom Domain (Optional)](#custom-domain-optional)
    - [Other Platforms](#other-platforms)
      - [Netlify](#netlify)
      - [Vercel](#vercel)
  - [🔧 Advanced Customization](#-advanced-customization)
    - [Adding New Unicode Characters](#adding-new-unicode-characters)
    - [Changing Color Scheme](#changing-color-scheme)
    - [Adding New Features](#adding-new-features)
  - [📚 Additional Resources](#-additional-resources)
    - [Learning Resources](#learning-resources)
    - [Tools](#tools)
  - [🤝 Getting Help](#-getting-help)
    - [Documentation](#documentation)
    - [Community](#community)
  - [🎓 Code Walkthrough](#-code-walkthrough)
    - [Full Workflow Example](#full-workflow-example)
  - [🎯 Next Steps](#-next-steps)


## 🎯 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Code editor (VS Code recommended)
- Git (for version control)
- Basic understanding of HTML, CSS, and JavaScript

### Clone & Run
```powershell
# Clone the repository
git clone https://github.com/Life-Experimentalists/Eldritchify.git

# Navigate to directory
cd Eldritchify

# Open in browser
Start-Process index.html

# Or open in VS Code
code .
```

### No Build Process Needed!
This is a **pure vanilla JavaScript** project with:
- ❌ No Node.js required
- ❌ No npm install needed
- ❌ No build tools
- ❌ No dependencies
- ✅ Just open and edit!

## 📁 Project Structure

```
Eldritchify/
│
├── 📄 index.html              # Main application (HTML + CSS + JS)
│   ├── HTML Structure
│   ├── CSS Styling (embedded)
│   └── JavaScript Logic (embedded)
│
├── 📚 Documentation/
│   ├── README.md             # Main documentation
│   ├── QUICKSTART.md         # User quick start guide
│   ├── USAGE_EXAMPLES.md     # Platform-specific examples
│   ├── PROJECT_SUMMARY.md    # Technical overview
│   ├── CONTRIBUTING.md       # Contribution guidelines
│   ├── CHANGELOG.md          # Version history
│   └── SECURITY.md           # Security policy
│
├── ⚙️ Configuration/
│   ├── package.json          # Project metadata
│   ├── .gitignore           # Git ignore rules
│   └── LICENSE              # MIT License
│
└── 🔧 Automation/
    └── .github/
        └── workflows/
            └── deploy.yml    # GitHub Pages deployment
```

## 🔍 Understanding the Code

### HTML Structure (Lines 1-70)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, title, fonts, styles -->
</head>
<body>
  <!-- Animated background elements -->
  <!-- Header with title -->
  <!-- Main container with two panels -->
  <!-- Footer -->
  <!-- JavaScript -->
</body>
</html>
```

### CSS Architecture (Lines 8-385)

#### 1. **Reset & Base Styles**
```css
* { box-sizing: border-box; }
body { /* Dark background gradient */ }
```

#### 2. **Animations**
- `tentacleMove` - Background pulsing
- `particleFloat` - Floating particles
- `titleGlow` - Pulsing title effect
- `eyeWatch` - Watching eyes effect

#### 3. **Component Styles**
- `.header` - Title section
- `.container` - Main grid layout
- `.tool-section` - Corruption/purification panels
- `.slider-container` - Range input controls
- `.checkbox-container` - Toggle controls

#### 4. **Interactive Elements**
- Hover effects on sections
- Focus styles on textareas
- Button animations
- Slider customization

### JavaScript Logic (Lines 387-520)

#### 1. **Unicode Character Arrays**
```javascript
CHARS_ABOVE   // Characters that appear above text
CHARS_BELOW   // Characters that appear below text
CHARS_MIDDLE  // Characters that go through text
```

#### 2. **Core Functions**

##### `getRandomChar(charList)`
```javascript
// Returns random character from array
return charList[Math.floor(Math.random() * charList.length)];
```

##### `updateSliderValues()`
```javascript
// Updates displayed slider values
document.getElementById("crazinessValue").textContent = craziness;
```

##### `generateZalgo()`
```javascript
// Main corruption function
1. Get input text and settings
2. Apply void spacing (if enabled)
3. Loop through each character
4. Add random combining marks
5. Update output textareas
```

##### `cleanZalgo()`
```javascript
// Main purification function
// Uses regex to remove Unicode marks: /[\u0300-\u036f]/g
```

##### `copyToClipboard(text, buttonId)`
```javascript
// Async function using Clipboard API
// Provides visual feedback on success
```

#### 3. **Event Listeners**
```javascript
// Real-time updates
inputTextZalgo.addEventListener("input", generateZalgo);
craziness.addEventListener("input", generateZalgo);

// Button clicks
cleanButton.addEventListener("click", cleanZalgo);
copyZalgoBtn.addEventListener("click", () => {...});

// Toggle features
wideMode.addEventListener("change", () => {...});
```

## 🛠️ Development Workflow

### Making Changes

#### 1. **Edit HTML Structure**
Location: Lines 1-70, 386-520
```html
<!-- Find the section you want to modify -->
<div class="tool-section">
  <!-- Make your changes here -->
</div>
```

#### 2. **Edit Styles**
Location: Lines 8-385
```css
/* Find the selector */
.tool-section {
  /* Modify properties */
  background: /* new color */;
}
```

#### 3. **Edit JavaScript**
Location: Lines 387-520
```javascript
function generateZalgo() {
  // Modify the logic
}
```

### Testing Your Changes

#### Browser DevTools
```javascript
// Open browser console (F12)
// Test functions directly:
generateZalgo();
cleanZalgo();
updateSliderValues();
```

#### Live Reload
```powershell
# Use Python's simple HTTP server
python -m http.server 8000

# Or use VS Code's Live Server extension
# Right-click index.html > "Open with Live Server"
```

## 🧪 Testing

### Manual Testing Checklist

#### ✅ Functionality Tests
- [ ] Text corruption works at all chaos levels (1-100)
- [ ] Void spacing mode toggles correctly
- [ ] Spacing probability slider affects output
- [ ] Text purification removes all marks
- [ ] Copy to clipboard works
- [ ] Visual feedback appears on copy
- [ ] Auto-clean works when typing

#### ✅ UI/UX Tests
- [ ] All animations play smoothly
- [ ] Hover effects work on all elements
- [ ] Sliders display current values
- [ ] Responsive design works on mobile
- [ ] All fonts load correctly
- [ ] Colors match theme

#### ✅ Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

### Test Cases

#### Test Case 1: Basic Corruption
```
Input: "Hello"
Chaos: 20
Expected: Slightly corrupted text with few marks
```

#### Test Case 2: Maximum Corruption
```
Input: "Test"
Chaos: 100
Expected: Heavily corrupted, barely readable
```

#### Test Case 3: Void Spacing
```
Input: "Word"
Void: Enabled (50%)
Expected: Random spaces between characters
```

#### Test Case 4: Purification
```
Input: (Any corrupted text)
Expected: Clean text with no marks
```

## 🚀 Deployment

### GitHub Pages (Recommended)

#### Automatic Deployment
1. Push to `main` branch
2. GitHub Actions automatically deploys
3. Site available at: `https://[username].github.io/Eldritchify`

#### Manual Setup
```powershell
# In GitHub repository settings:
# Settings > Pages > Source > GitHub Actions
```

### Custom Domain (Optional)
```powershell
# Add CNAME file
echo "eldritchify.yourdomain.com" > CNAME

# Configure DNS:
# Type: CNAME
# Name: eldritchify
# Value: [username].github.io
```

### Other Platforms

#### Netlify
```powershell
# Drag and drop folder to Netlify
# Or use CLI:
netlify deploy --dir=. --prod
```

#### Vercel
```powershell
# Use Vercel CLI:
vercel --prod
```

## 🔧 Advanced Customization

### Adding New Unicode Characters
```javascript
// In CHARS_ABOVE, CHARS_BELOW, or CHARS_MIDDLE arrays
const CHARS_ABOVE = [
  "\u0300",
  "\u0301",
  "\u0302",  // Add your Unicode here
];
```

### Changing Color Scheme
```css
/* Update CSS custom properties */
:root {
  --primary: #8be9fd;
  --secondary: #50fa7b;
  /* Add your colors */
}
```

### Adding New Features
```javascript
// 1. Add HTML element
// 2. Add event listener
// 3. Implement function
// 4. Update documentation
```

## 📚 Additional Resources

### Learning Resources
- [Unicode Combining Marks](https://en.wikipedia.org/wiki/Combining_character)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

### Tools
- [Unicode Character Inspector](https://unicode-table.com)
- [CSS Gradient Generator](https://cssgradient.io/)
- [Can I Use](https://caniuse.com/)

## 🤝 Getting Help

### Documentation
1. Check README.md
2. Review CONTRIBUTING.md
3. Read USAGE_EXAMPLES.md

### Community
- [Open an Issue](https://github.com/Life-Experimentalists/Eldritchify/issues)
- [Start a Discussion](https://github.com/Life-Experimentalists/Eldritchify/discussions)
- Contact [@VKrishna04](https://github.com/VKrishna04)

## 🎓 Code Walkthrough

### Full Workflow Example
```javascript
// 1. User types "Hello"
// 2. Input event fires
document.getElementById("inputTextZalgo").addEventListener("input", generateZalgo);

// 3. generateZalgo() called
function generateZalgo() {
  // 4. Get settings
  const craziness = 20;
  const wideMode = false;

  // 5. Loop through "Hello"
  for (const char of "Hello") {
    outputText += char;  // "H"

    // 6. Add random marks (20 iterations)
    for (let i = 0; i < 20; i++) {
      outputText += getRandomChar(CHARS_ABOVE);  // "H̷"
    }
  }

  // 7. Update UI
  document.getElementById("outputTextZalgo").value = outputText;
}
```

## 🎯 Next Steps

1. **Explore the Code** - Open index.html and read through
2. **Make a Small Change** - Try changing a color or text
3. **Test It** - Open in browser and see your change
4. **Read CONTRIBUTING.md** - Learn how to contribute
5. **Build Something Cool** - Add a new feature!

---

**Ready to start coding?** Open `index.html` and dive in! 🜏

*May your code be clean and your corruption be chaotic!*
