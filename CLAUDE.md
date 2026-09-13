# resume

Personal resume site. Next.js 16 (App Router), React 19, Tailwind CSS v4,
deployed on Vercel.

## UI changes

**Any change that alters how the site looks ships with screenshots in the pull
request description — light theme and dark theme, both.** This includes layout,
spacing, typography, color, and component changes; it does not include pure
refactors, copy edits, or config changes that render identically.

Capture them with `npm run screenshot` against a production build, commit them
to `screenshots/`, and embed them in the PR body. See
[`screenshots/README.md`](screenshots/README.md) for the workflow and naming
conventions.

When the change implements a design, state which frame in `designs/resume.pen`
it mirrors so a reviewer can compare against the source.

## Styling

- Tailwind v4, configured entirely in `src/app/globals.css`. There is no
  `tailwind.config.js` — v4 does not auto-load one, so do not add it back
  expecting it to take effect.
- Colors come from design tokens defined on `:root` / `.dark` in `globals.css`,
  mirroring the variables in `designs/resume.pen`. Use the Tailwind aliases
  (`bg-canvas`, `text-ink`, `text-muted`) rather than raw palette utilities like
  `dark:bg-gray-900`, so both themes stay in sync with the design.
- Dark mode is class-based (`@variant dark (.dark &)`), driven by
  `ThemeContext`, which prefers a persisted `localStorage` theme and otherwise
  follows `prefers-color-scheme`.

## Known issues

- `npm run lint` crashes with a circular-structure error inside
  `@eslint/eslintrc`. Pre-existing and unrelated to any given change; use
  `npm run build` to type-check.
- `layout.tsx` exports `viewport` through `metadata`, which Next 16 warns about.
