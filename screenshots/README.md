# Screenshots

Before/after images for UI changes, linked from pull request descriptions.

Any PR that changes how the site looks includes screenshots of both themes —
see the "UI changes" rule in [`CLAUDE.md`](../CLAUDE.md).

## Capturing

Shoot a **production build**. `next dev` paints a dev indicator badge into the
corner, which does not belong in a review screenshot.

```bash
npm run build
npx next start -p 3100 &
npm run screenshot
```

This writes `resume-light.png` and `resume-dark.png` at 1280×960 @2x. To keep a
"before" image for comparison, pass a name:

```bash
node scripts/screenshot.mjs http://localhost:3100 screenshots before
```

## Conventions

- `<name>-light.png` / `<name>-dark.png` — both themes, every time.
- Name by what the image shows (`resume-light.png`, `nav-before-dark.png`),
  not by PR number or date.
- Replace the images for a given view rather than accumulating variants; git
  history keeps the old ones.
- Embed them in the PR body with raw URLs pinned to the commit SHA, so they
  survive the branch being deleted after merge:

  ```
  https://raw.githubusercontent.com/patrickm02L/resume/<sha>/screenshots/resume-light.png
  ```
