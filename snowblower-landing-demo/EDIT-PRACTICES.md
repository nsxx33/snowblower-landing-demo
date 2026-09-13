# Edit Practices — Snowblower Landing

Keep this file in the project FILES area. Read it before changing `index.html`.

## What actually worked

- Small, named edits only.
- Live path: edit `snowblower-landing-demo/index.html` on `main` → GitHub push → Vercel auto-deploy
- Vercel Root Directory must stay `snowblower-landing-demo`
- Production URL: https://snowblower-landing.vercel.app
- Last known good full-page commits: `d27eeb15`, `9a23f9c` (26142 bytes), `ab79d94` (27851 bytes)
- Badge that matched the user zoom: `snowblower-review.svg` at 17199 bytes (user composite `71954C0B` + official house `0BB64A5C`). SHA `128b054f`.

## What broke the site

- Stub / placeholder `index.html`
- Two agents writing the same file at once
- **Sep 13 2026 wipe (`ccc0989`):** a GitHub write meant for the hero uploaded a truncated page (26142 → 5929 bytes) and deleted pricing, How It Works, FAQ, and `#booking-modal`.
- **Sep 13 2026 badge stub:** `snowblower-review.svg` written as 8 bytes (`see-file`). Large PNG/SVG data-URIs triggered this. Files that landed were ~17–19KB.

## Official house vs wrong house

- **Correct official house:** attachment `0BB64A5C` — chimney RIGHT, double 3D roof, script Angi, full SUPER SERVICE AWARD ribbon, 2023.
- **Correct card:** `71954C0B`, `IMG_9134.jpg`, `340712A6`.
- **Wrong:** `34298082` (no chimney, banner cut to PER SERVICE AWA).
- **Wrong:** reconstructed SVG house (Georgia italic Angi). Looks fake zoomed.
- Do not redraw the house. Overlay `0BB64A5C` into the card house slot.

## Rules for every edit

1. GitHub write tools upload the **whole file**. Never upload a partial page.
2. Never replace `index.html` with a stub or anything under 20KB.
3. Never delete `index.html`.
4. Keep `#booking-modal` and its script.
5. Keep the Angi review badge unless the user asks to change it. Do not reconstruct the house logo.
6. Before commit: size ≥20KB, 4+ sections, Choose Your Service, How It Works, Your questions answered, booking-modal, $139.00, $69.95, hero-truck.webp, 413 Verified Reviews.
7. After every write, re-fetch blob size. If `index.html` dropped below 20KB, restore first.
8. One writer at a time.
9. After writing `snowblower-review.svg` or `.png`, re-fetch. If size is 8 bytes or contents are `see-file`, restore the 17KB SVG.
10. Keep badge files under ~20KB on GitHub text tools. Never embed a large data-URI in `index.html`. Do not put Angi in the filename.

## If the live site ends at the hero photo

Restore `index.html` from `9a23f9c` / `ab79d94` or later full-page commit. Do not invent a short replacement file.

## If the hero badge is a broken image

The badge file is the 8-byte `see-file` stub. Restore the 17199-byte SVG. Do not rebuild a vector house.

## Switching the hero to PNG

Change only `src="snowblower-review.svg"` to `src="snowblower-review.png"` in the existing full `index.html`. Upload the whole ~26KB page. GitHub text tools cannot carry raw PNG bytes.
