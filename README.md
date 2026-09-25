# Dr. Soso — Creator Portfolio

English, video-first portfolio for an Egypt-based Arabic skincare creator. Static HTML/CSS/JS; no build step or backend.

## Preview
Run `python3 -m http.server 8000 --bind 127.0.0.1` in this folder and open `http://127.0.0.1:8000`.

## Files
- `index.html`: copy, selected work, source links and dated public-profile statistics.
- `ar/index.html`: Arabic (RTL) version of the same page, sharing `styles.css` and `script.js`. Keep both pages in sync; Arabic copy is MSA and should be proofread by Dr. Soso.
- `styles.css`: responsive layout, reduced-motion and basic print styles.
- `script.js`: on-demand TikTok player in a keyboard-accessible native dialog.
- `assets/`: local video stills and favicon. Stills are extracted from the creator’s original videos.
- `handoff/`: private planning; excluded by `.gitignore`.

## Updating videos
Each video thumbnail is a normal TikTok link that works without JavaScript. To update a card, change its link, `data-video-id`, `data-video-title`, thumbnail and descriptive copy together. JavaScript opens the official TikTok player only after a click; every player includes an original-link fallback. TikTok availability varies by browser, region and privacy settings.

## Content awaiting confirmation
- Business email: hello@drsosoreviews.com. Instagram remains unconfirmed.
- Second brand collaboration and paid/gifted classification.
- Audience demographics and period analytics: not inferred from public views.
- Portrait: dedicated creator-supplied photo in assets/dr-soso-portrait.jpg.

Public follower/like numbers are rounded snapshots, dated in the page. Update numbers and date together. The Altesse project is described as a collaboration, without claiming payment, sales or campaign results.

## Hosting
Custom domain: `https://drsosoreviews.com/`. GitHub Pages origin: `https://xawam.github.io/drsoso-portfolio/`.
The deployed site changes only after intended files are committed and pushed to the configured branch. Review changes and stage specific files; never include private handoff files. The local draft may differ from the deployed site.

The domain is configured in repository Settings → Pages. Preserve Spaceship MX, SPF, DKIM, DMARC and autodiscovery records when maintaining website DNS. Canonical and Open Graph URLs use the custom domain.

## PDF
The two-page September 2026 kit is assets/dr-soso-media-kit.pdf, linked from the contact section. It includes dated metrics, selected videos, services and contact links. Update the PDF when metrics or the brief change.
