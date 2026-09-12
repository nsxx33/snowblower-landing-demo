# Edit Practices — Snowblower Landing

Keep this file in the project FILES area. Read it before changing `index.html`.

## What actually worked

- Small, named edits only. Examples that landed cleanly:
  - Hero CTA: add `text-lg` to `#open-form`
  - Problem step: `#problem-options` uses `grid grid-cols-2 gap-3`
  - Service cards: YouTube-style header + divider + fine print, green checks kept
  - At-Home price: `$139.00` uses `text-2xl font-semibold` (not `text-5xl font-extrabold`)
  - FAQ heading: `Your questions, answered.` left-aligned in one gray list
- Live path: edit `snowblower-landing-demo/index.html` on `main` → GitHub push → Vercel auto-deploy
- Vercel Root Directory must stay `snowblower-landing-demo`
- Production URL: https://snowblower-landing.vercel.app
- Last known good full-page commit before later wipes: `d27eeb15`

## What broke the site

- Pushing a stub / placeholder `index.html` (a few hundred bytes)
- Deleting `index.html` from `main`
- Rewriting the whole file and collapsing repeated markup
  - Five yellow review stars became one star
- Two agents writing the same file at once

## Rules for every edit

1. Change only the requested block. Do not rewrite the page.
2. Never replace `index.html` with a stub, comment-only file, or anything under 10KB.
3. Never delete `index.html`.
4. Do not compact repeated UI. Keep all 5 star SVGs, all brand logos, all FAQ items, all green check rows.
5. Leave `<!-- FORM MOUNT POINT -->` above the hero Schedule button.
6. Keep `#booking-modal` and its script on the same page.
7. After the edit, check all of these before commit:
   - file size is roughly 20KB or larger
   - star path `M9.049 2.927` appears **5 times**
   - `$139.00` is present and uses `text-2xl font-semibold`
   - `How It Works` is present
   - `booking-modal` is present
   - `hero-truck.webp` is still referenced
8. Commit + push `main`, then hard-refresh the live URL and confirm visually.

## If the live site 404s or goes blank

Restore `snowblower-landing-demo/index.html` from a known good commit (`d27eeb15` or later full-page commit). Do not invent a short replacement file.
