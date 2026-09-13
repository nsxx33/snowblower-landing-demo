# Snowblower Site Ideas & Roadmap

## Unsorted Ideas
- Add a "Before & After" slider showing a rusty vs. fully serviced snowblower.
- Offer an optional pre-winter oil change package add-on.

## Copy & Branding Notes
- Headline alternative: "Don't Get Stranded in the First Blizzard."
- Key benefit emphasis: Free local pickup within 15 miles.

## Future Features
- Interactive calendar picker for booking pickup slots.

## Design layout ideas
- figma site made me feel good chosing the FREE version. knowing once i try them i will feel even better with the paid version. More features and benefits. This is the customer journey im talking about.

## Angi review badge — what we learned (13 Sep 2026)

The hero badge is: 4 gold stars + half star, **4.6**, **413 Verified Reviews**, official Angi house, **Super Service Award 2023**.

### Which house is the real one
- **Correct official house:** attachment `0BB64A5C`. Chimney on the RIGHT, double darker roof bars (3D), script **Angi** wordmark, full notched **SUPER SERVICE AWARD** ribbon, **2023** under the ribbon.
- **Correct full card (stars + type + small house):** `71954C0B`, `IMG_9134.jpg`, `340712A6`, `Snowblower repair reviews.png`.
- **Wrong house, do not use:** `34298082` — no chimney, banner cut off to "PER SERVICE AWA", blocky Angi, flatter roof. Zoomed in this is obvious.
- Never reconstruct the house as SVG polygons + Georgia italic "Angi". Zoomed, the wordmark and roof are wrong.

### What actually shipped
- Live file: `snowblower-landing-demo/snowblower-review.svg` (~17KB).
- It is the user composite card (puffy stars + type from `71954C0B`) with the official `0BB64A5C` house overlaid in the house slot.
- Hero `<img>` points at `snowblower-review.svg`. A PNG twin (`snowblower-review.png`) is the raster of that same card.
- Do not put "Angi" in the filename.

### What broke, and how to avoid it
1. **GitHub "see-file" stub (8 bytes).** A write that was supposed to be the real SVG landed as the literal text `see-file`. Live badge became a broken image. Always re-fetch the blob after a write: size must be thousands of bytes, first bytes must be `<svg` or a real image header, never `see-file`.
2. **Large payloads get truncated.** Keep the badge file under ~20KB. Embed a small JPEG/WebP of the official house or of the whole card — do not embed a 1500px PNG data-URI in `index.html`.
3. **index.html wipe (`ccc0989`).** GitHub `create_or_update_file` / `push_files` replace the WHOLE file. Uploading only the hero dropped the page from ~26KB to 5.9KB and deleted pricing, How It Works, FAQ, and `#booking-modal`. After every `index.html` write, confirm size ≥20KB and `booking-modal` is still in the file.
4. **Two agents writing the same file** races and produces stubs. One writer at a time.
5. **Vercel file-deploy** with `rootDirectory=snowblower-landing-demo` has failed (`NOW_SANDBOX_WORKER_ROOTDIR_NOT_EXIST`). Prefer GitHub push to `main`; Vercel auto-deploys from that.

### How to edit the badge next time
1. Start from the official house `0BB64A5C` plus the user card `71954C0B` / `IMG_9134`. Do not redraw the logo.
2. Keep stars/type from the user composite; only swap the house slot if needed.
3. Ship a compact SVG (or PNG) under ~20KB.
4. Change only the `<img src="snowblower-review.svg">` / `.png` line in `index.html`. Upload the full current page (~26KB), not a snippet.
5. After deploy: hard-refresh https://snowblower-landing.vercel.app and zoom the house (chimney, ribbon, script Angi).
