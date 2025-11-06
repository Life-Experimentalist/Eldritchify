# Security Policy

## Supported Versions

Currently, we support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Eldritchify seriously. Although this is a client-side only application with no server components, we still value security reports.

### Where to Report

If you discover a security vulnerability, please report it by:

1. **Email**: Contact the maintainer at the email associated with [@VKrishna04](https://github.com/VKrishna04)
2. **GitHub Security Advisory**: Use the [private vulnerability reporting feature](https://github.com/Life-Experimentalists/Eldritchify/security/advisories/new)

### What to Include

Please include the following information in your report:

- **Description**: A clear description of the vulnerability
- **Impact**: What could be affected
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Proof of Concept**: Code or screenshots if applicable
- **Suggested Fix**: If you have ideas on how to fix it

### What to Expect

- **Acknowledgment**: We'll acknowledge receipt within 48 hours
- **Updates**: We'll provide updates every 7 days until resolution
- **Timeline**: We aim to fix critical vulnerabilities within 30 days
- **Credit**: We'll credit you in the CHANGELOG (unless you prefer to remain anonymous)

## Security Considerations

### Client-Side Only
Eldritchify runs entirely in the browser with no:
- Server-side processing
- Data transmission
- External API calls
- User authentication
- Data storage (except optional localStorage for settings)

### Privacy
- All text processing happens locally in your browser
- No text is ever sent to any server
- No tracking or analytics are implemented
- No cookies are used

### Potential Concerns

1. **XSS (Cross-Site Scripting)**
   - We sanitize all user inputs
   - Text areas are properly escaped
   - No dynamic HTML injection from user input

2. **Clipboard Access**
   - We use the Clipboard API responsibly
   - User action is required for clipboard operations
   - Clear feedback is provided when clipboard is accessed

3. **Unicode Rendering**
   - Excessive combining marks could cause browser performance issues
   - We limit the maximum chaos level to prevent browser crashes
   - Rendering is handled by the browser's native Unicode support

## Best Practices

When contributing to Eldritchify:

- ✅ Validate and sanitize all user inputs
- ✅ Use Content Security Policy headers if deploying
- ✅ Keep dependencies minimal (currently zero)
- ✅ Test in multiple browsers
- ✅ Avoid using `eval()` or `innerHTML` with user data
- ✅ Use HTTPS when deploying

## Known Limitations

1. **Browser Performance**: Extremely high chaos levels (90-100) with long text may slow down some browsers
2. **Mobile Keyboards**: Some mobile keyboards may struggle with heavy Unicode combining characters
3. **Screen Readers**: Corrupted text may not be read correctly by screen readers

---

**Last Updated**: November 6, 2025

*"In strange aeons, even security may die"* 🜏
