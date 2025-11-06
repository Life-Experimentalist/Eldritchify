# Contributing to Eldritchify

First off, thank you for considering contributing to Eldritchify! It's people like you that make this project such a great tool.

## 🌀 Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:
- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## 🎯 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if applicable**
- **Specify your browser and OS version**

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List examples of similar features in other tools if applicable**

### 🔧 Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the coding standards below
3. **Test thoroughly** in multiple browsers
4. **Update documentation** if needed
5. **Commit with clear messages** following the format below
6. **Push to your fork** and submit a pull request

## 📋 Development Process

### Setting Up Your Development Environment

```powershell
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Eldritchify.git
cd Eldritchify

# Create a feature branch
git checkout -b feature/my-awesome-feature
```

### Testing Your Changes

1. Open `index.html` in your browser
2. Test all features:
   - Text corruption with various chaos levels
   - Void spacing mode
   - Text purification
   - Copy to clipboard functionality
3. Test on different browsers (Chrome, Firefox, Safari, Edge)
4. Test responsive design on mobile devices

### Coding Standards

#### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Keep accessibility in mind (ARIA labels where needed)

#### CSS
- Follow the existing Cthulhu-inspired theme
- Use CSS custom properties for colors when possible
- Maintain mobile-first responsive design
- Comment complex animations

#### JavaScript
- Use modern ES6+ syntax
- Keep functions small and focused
- Add comments for complex logic
- Use meaningful variable names
- Handle edge cases and errors

### Commit Message Format

```
type: Brief description (50 chars or less)

More detailed explanation if needed. Wrap at 72 characters.

- Bullet points for multiple changes
- Reference issues with #123
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Updating build tasks, etc.

**Examples:**
```
feat: Add dark/light theme toggle

Implements a theme switcher that persists user preference
in localStorage.

- Add theme toggle button
- Update CSS variables for both themes
- Add localStorage persistence
```

```
fix: Correct slider value display on page load

The chaos level slider value was not displaying correctly
when the page first loaded.

Fixes #42
```

## 🎨 Design Guidelines

### Theme Consistency
- Stick to the Lovecraftian/cosmic horror aesthetic
- Use colors from the existing palette:
  - Primary: `#8be9fd` (Cyan)
  - Secondary: `#50fa7b` (Green)
  - Accent: `#bd93f9` (Purple)
  - Warning: `#ff79c6` (Pink)
  - Background: Dark blues (`#0a0e27`, `#1a1f3a`, `#0d1b2a`)

### Typography
- Headers: Creepster, Nosifer
- Body: Georgia, serif
- Code: Courier New, monospace

### Animations
- Keep animations subtle and purposeful
- Maintain 60fps performance
- Use CSS animations over JavaScript when possible

## 📚 Documentation

When adding new features, please update:
- README.md with feature description
- Inline code comments for complex logic
- This CONTRIBUTING.md if changing the dev process

## 🚀 Release Process

Releases are handled by the maintainers. If you're a contributor:
1. Ensure your PR is merged to `main`
2. The maintainer will tag releases
3. Update CHANGELOG.md in your PR if it's a significant change

## 🤔 Questions?

Don't hesitate to ask questions by:
- Opening an issue with the `question` label
- Reaching out to [@VKrishna04](https://github.com/VKrishna04)

## 🙏 Thank You!

Your contributions help make Eldritchify better for everyone. We appreciate your time and effort!

---

*"That is not dead which can eternal lie, And with strange aeons even death may die."*
— H.P. Lovecraft
