# Edit Practices — Snowblower Landing

Keep this file in the project FILES area. Read it before changing `index.html`.

## What actually worked

- Small, named edits only. Examples that landed cleanly:
  - Hero CTA: add `text-lg` to `#open-form`
  - Problem step: `#problem-options` uses `grid grid-cols-2 gap-3`
  - Service cards: YouTube-style header + divider + fine print, green checks kept
  - FAQ heading: `Your questions, answered.` left-aligned in one gray list
  - Sticky click-to-call header above the hero
  - Angi review badge in the hero review slot (4.6 / 413 Verified Reviews / Super Service Award 2023)
- Live path: edit `snowblower-landing-demo/index.html` on `main` → GitHub push → Vercel auto-deploy
- Vercel Root Directory must stay `snowblower-landing-demo`
- Production URL: https://snowblower-landing.vercel.app
- Last known good full-page commits: `d27eeb15`, `9a23f9c` (26142 bytes, header + full page before the Angi wipe), `ab79d94` (27851 bytes, Angi badge + full page restore)

## What broke the site

- Pushing a stub / placeholder `index.html` (a few hundred bytes)
- Deleting `index.html` from `main`
- Rewriting the whole file and collapsing repeated markup
  - Five yellow review stars became one star
- Two agents writing the same file at once
- **Sep 13 2026 wipe — commit `ccc0989`:** GitHub `create_or_update_file` / `push_files` **replace the entire file**. An agent sent only the hero (Angi badge + truck) and closed `</section></body></html>` there. GitHub accepted it. Result: `index.html` went from **26142 bytes → 5929 bytes**. Deleted on that commit: Choose Your Service cards, How It Works, FAQ, `#booking-modal`, and the booking script. Vercel auto-deployed the stub, so the live page ended at the truck photo.

## Rules for every edit

1. Change only the requested block **in your working copy**. The GitHub write tools still upload the **whole file**. Never upload a partial page.
2. Never replace `index.html` with a stub, comment-only file, hero-only file, or anything under 20KB.
3. Never delete `index.html`.
4. Do not compact repeated UI. Keep all brand logos, all FAQ items, all green check rows.
5. Keep `#booking-modal` and its script on the same page.
6. Keep the Angi review badge in the hero (4.6, 413 Verified Reviews, Super Service Award 2023) unless the user asks to change it. Do not silently revert it to five generic stars.
7. After the edit, check **all** of these before commit:
   - file size is **20KB or larger** (current good page is ~27–28KB)
   - at least **4** `<section>` tags
   - `Choose Your Service` is present
   - `How It Works` is present
   - `Your questions, answered.` is present
   - `booking-modal` is present
   - `DOMContentLoaded` / the booking script is present
   - `$139.00` and `$69.95` are present
   - `hero-truck.webp` is still referenced
   - `413 Verified Reviews` is present
   - the last 80 characters include `</script>` then `</body>` then `</html>`
   - the file does **not** end right after the hero `</section>`
8. Commit + push `main`, then immediately re-fetch the blob size. If it dropped below 20KB, restore before telling the user it shipped.
9. One writer at a time. Do not call `create_or_update_file` or `push_files` in parallel.

## If the live site 404s, goes blank, or ends at the hero photo

The page was truncated. Restore `snowblower-landing-demo/index.html` from a known good **full-page** commit (`9a23f9c`, `ab79d94`, or later complete restore), then re-apply only the missing requested block. Do not invent a short replacement file. Do not "fix" it by pushing the hero again.
