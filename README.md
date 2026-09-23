# Dr. Soso — Creator Portfolio

A one-page portfolio / media kit for Dr. Soso (dentist + skincare & mesotherapy content creator).
Plain HTML + CSS, no build step. Also exports to a PDF media kit via the print stylesheet.

## Files
- `index.html` — the page (all content lives here)
- `styles.css` — screen + print styles
- `assets/` — put `headshot.jpg` and any brand logos here

## Editing content
Everything is plain text in `index.html`. Replace the placeholders:
- Stats: search for `120K`, `350K`, `8.4%`, `2.1M` (TikTok) and `18K`, `95K`, `5.1%`, `210K` (Instagram).
- Email: search for `drsoso.review@gmail.com`.
- Handles: search for `dr.soso_review`.
- Brands: replace the `<span>Your brand</span>` items.

## Adding real videos
In the `#work` section, replace a placeholder card with a TikTok embed:

```html
<blockquote class="tiktok-embed"
  cite="https://www.tiktok.com/@dr.soso_review/video/VIDEO_ID"
  data-video-id="VIDEO_ID">
  <section></section>
</blockquote>
```

For Instagram:

```html
<blockquote class="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/reel/REEL_ID/">
  <a href="https://www.instagram.com/reel/REEL_ID/"></a>
</blockquote>
```

The embed scripts are already loaded at the bottom of `index.html`.

## PDF media kit
Open the page in a browser → **File → Print → Save as PDF**. Margins: **None**.
The print stylesheet hides the nav/buttons and formats it as a clean document.

## Deploy (GitHub Pages)
```
git add .
git commit -m "Update portfolio"
git push
```
The site rebuilds automatically. Live URL: `https://xawam.github.io/drsoso-portfolio/`

## Add a custom domain later
1. Buy a domain (e.g. `drsoso.com`).
2. Repo → Settings → Pages → Custom domain → enter it.
3. At the domain registrar add a CNAME record pointing to `xawam.github.io`.
