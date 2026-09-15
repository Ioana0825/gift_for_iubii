# A Little Journey to You 🌙

A small interactive journey through a relationship, built with React + Vite +
Framer Motion, ending in a personal video.

## Running it

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Making it yours

Almost everything you'd want to change lives in **`src/content.ts`**:

- his name
- the intro text
- the quiz questions and answers
- the memories ("Pieces of us")
- the love notes
- the final messages
- the video path

Photos and the video go in **`public/assets/`** — see the README there for
exact filenames. Until you add real files, the site shows elegant
placeholders instead of broken images/video, so it's always safe to preview.

## Structure

- `src/content.ts` — all editable text and data
- `src/App.tsx` — the step-by-step journey (intro → quiz → memories → notes
  → prize → video → final)
- `src/components/` — one small component per step/piece of UI
- `src/index.css` — shared design tokens (colors, buttons, layout) and the
  cinematic dark palette

## Building for deployment

```bash
npm run build
```

Outputs a static site to `dist/`, which you can host anywhere (Netlify,
Vercel, GitHub Pages, etc.).
