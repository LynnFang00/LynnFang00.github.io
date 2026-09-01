# Yanlin (Lynn) Fang - Portfolio

A dependency-free static portfolio focused on evaluated ML systems, full-stack AI products, research, and the person behind the work.

## Run locally

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765`.

## Structure

- `index.html` contains the primary one-page portfolio narrative.
- `portfolio-v2.css` contains the current responsive design system.
- `script.js` handles the mobile navigation, progressive reveals, and footer year.
- `styles.css` and the legacy HTML pages are retained for compatibility with older links.
- `assets/headshot.png` and `assets/violin-photo.jpg` provide the personal photography.
- `assets/screenshots/` contains real product UI used by the portfolio; remaining project visuals are code-native HTML/CSS.

The site has no build step and no runtime dependencies.
