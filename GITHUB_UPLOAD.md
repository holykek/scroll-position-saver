# Upload this project to GitHub

Follow these steps to put Scroll Position Saver on GitHub so you can use the repo as the **homepage** and **privacy policy** link for the Chrome Web Store.

## 1. Replace placeholders

Before pushing, edit these files and replace placeholders with your real values:

- **README.md**  
  - Replace `YOUR_USERNAME` with your GitHub username (in the issues link and any repo links).  
  - After the extension is published, replace `YOUR_EXTENSION_ID` in the Chrome Web Store badge URL with your actual extension ID.

- **PRIVACY.md**  
  - Replace `YOUR_USERNAME` in the repository URL with your GitHub username (so the “Contact” link points to your repo).

## 2. Create a new repo on GitHub

1. Go to [github.com/new](https://github.com/new).
2. **Repository name:** e.g. `scroll-position-saver` (or `Scroll-Position-Saver`).
3. **Description:** e.g. `Chrome extension that remembers scroll position after reload and back/forward.`
4. Choose **Public**.
5. **Do not** check “Add a README” or “Add .gitignore” (you already have them).
6. Click **Create repository**.

## 3. Push from your machine

In a terminal, from the **Scroll Position Saver** project folder:

```bash
cd "c:\Users\Miste\Documents\Scroll Position Saver"

git init
git add .
git status
```

Check that **only** these are staged (no secrets, no `.cursor`, no `.env`):

- `.gitignore`
- `PRIVACY.md`
- `README.md`
- `content.js`
- `manifest.json`
- `popup.html`
- `popup.js`
- `icons/icon48.png`
- `icons/icon128.png`

If anything sensitive or unnecessary appears, fix `.gitignore` and run `git add .` again. Then:

```bash
git commit -m "Initial commit: Scroll Position Saver Chrome extension"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scroll-position-saver.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `scroll-position-saver` with your GitHub username and repo name.

## 4. Links for Chrome Web Store

After the repo is public, use:

| What              | URL |
|-------------------|-----|
| **Homepage**      | `https://github.com/YOUR_USERNAME/scroll-position-saver` |
| **Privacy policy**| `https://github.com/YOUR_USERNAME/scroll-position-saver/blob/main/PRIVACY.md` |

Google accepts the raw GitHub view of `PRIVACY.md` as the privacy policy URL. If you prefer a shorter or prettier link later, you can add GitHub Pages and host a single `privacy.html` page.

## 5. Optional: remove this file

If you don’t want `GITHUB_UPLOAD.md` in the repo, run:

```bash
git rm GITHUB_UPLOAD.md
git commit -m "Remove upload instructions"
git push
```

You can also delete the file from the project folder and commit that change.
