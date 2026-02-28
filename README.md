# Scroll Position Saver

A Chrome extension that **remembers your scroll position** after reloads and when you use the back/forward buttons. No more losing your place on Reddit, GitHub, long docs, or forums.

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue?logo=googlechrome)](https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID)  
*Install from the Chrome Web Store (link above once published).*

---

## What it does

- **Saves** your scroll position as you browse (lightweight, no extra clicks).
- **Restores** when you:
  - Reload the page
  - Use the **Back** button (e.g. Reddit: open a post → back → you’re right where you were)
  - Use the **Forward** button
  - Return to a page from the browser’s back/forward cache

Works on any website. Each URL keeps its own saved position.

## Install

**From Chrome Web Store (recommended)**  
Use the Chrome Web Store link at the top of this page once the extension is published.

**Developer / unpacked**  
1. Open Chrome → `chrome://extensions`.  
2. Turn **Developer mode** on (top right).  
3. Click **Load unpacked** and select this project folder.

## Privacy

All data is stored **only on your device** in Chrome’s local storage. Nothing is sent to any server.

→ **[Full privacy policy](PRIVACY.md)** (for Chrome Web Store and transparency).

## Support

- **Bug or idea?** [Open an issue](https://github.com/YOUR_USERNAME/scroll-position-saver/issues).  
- **Like it?** [Buy me a coffee](https://buymeacoffee.com/rollingabe).

## Project structure

| File / folder   | Purpose |
|-----------------|--------|
| `manifest.json` | Extension config (Manifest V3) |
| `content.js`    | Saves and restores scroll on each page |
| `popup.html` / `popup.js` | Toolbar popup (clear saved positions) |
| `icons/`        | Extension icons (48px, 128px) |
| `PRIVACY.md`    | Privacy policy |

---

*Scroll Position Saver* – never lose your place again.
