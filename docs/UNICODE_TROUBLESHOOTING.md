# Unicode Combining Characters - Troubleshooting Guide

## Issue: Combining Marks Appearing Inline

If you're seeing the Unicode combining marks appearing next to characters instead of above/below them, this is typically a **font rendering issue**.

### Why This Happens

1. **Font Support**: Not all fonts properly render Unicode combining diacritical marks
2. **Browser Rendering**: Different browsers handle complex Unicode differently
3. **Operating System**: OS-level font rendering affects how marks stack
4. **Text Direction**: BiDi (bidirectional text) settings can affect mark placement

### Solutions

#### Option 1: Font-Family Changes
Try different monospace fonts that better support combining marks:

```css
font-family: 'Consolas', 'DejaVu Sans Mono', 'Liberation Mono', 'Courier New', monospace;
```

#### Option 2: Line-Height Adjustment
Increase line-height to give more vertical space:

```css
line-height: 2.0; /* or even higher */
```

#### Option 3: Writing Mode
Force proper text direction:

```css
writing-mode: horizontal-tb;
direction: ltr;
unicode-bidi: embed;
```

#### Option 4: CSS Text Rendering
```css
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Browser-Specific Testing

**Best Support:**
- Chrome/Edge (Chromium): Excellent
- Firefox: Very Good
- Safari: Good

**Test String:**
```
Ḩ̸̗̲̱̭͙̳̏̓̋̍͗̎̊e̷̡̛̖̦̺̝͈̍̂̈́̌̒ͅl̸̢̧̛̦̰̙̩̈́̏̓̌l̷̨̛̜̗̰̙̈́̎̋ǫ̷̧̛̺̭̈́̌̎
```

If this doesn't render with marks above/below in your browser, the issue is browser/font related.

### Current Implementation

The textarea already has:
- `line-height: 1.6` (can be increased)
- `unicode-bidi: bidi-override` (forces proper direction)
- `font-family: 'Courier New', monospace`

### Recommended Fix for Users

If marks still appear inline:

1. **Try Different Browser**: Chrome usually works best
2. **Increase Font Size**: Larger text renders marks better
3. **Install Better Fonts**: DejaVu Sans Mono, Source Code Pro
4. **Use Copy Function**: Even if display looks wrong, copied text works correctly

### For Developers

To maximize compatibility, the current code uses:
- Standard combining mark ranges (U+0300-U+036F)
- Common monospace fonts
- Proper text direction properties
- Adequate line spacing

The marks WILL work when pasted elsewhere (Discord, Twitter, etc.) even if local display has issues.

---

**Last Updated**: November 6, 2025
