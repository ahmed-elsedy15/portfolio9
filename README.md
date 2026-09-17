# Ahmed Elshahat — Portfolio (React + Vite)

A single-page portfolio built with React, Vite, Tailwind CSS, Framer
Motion, and Lucide icons. All content is sourced from the CV — no
invented projects, links, or experience.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

Standard Vite build — deploys as-is to Vercel, Netlify, or any static
host. Build command: `npm run build`, output directory: `dist`.

## Where to edit things

Almost everything is driven from **`src/data/portfolio.js`** — update
that file to change any text, skills, experience, or project info.

- `src/data/portfolio.js` — profile, skills, experience, projects, education
- `src/assets/ahmed-photo.jpg` — your photo (used in the Hero section)
- `public/Ahmed_Elshahat_CV.pdf` — the file the "Download CV" button links to
- `src/sections/` — one file per section, if you want to change layout
- `tailwind.config.js` — colors (`indigo`, `cyan`, `base`, `surface`) and fonts

## Important: project links

The CV lists "Live Demo" and "GitHub" next to each project, but doesn't
print the actual URLs, so:

- Every **GitHub** button currently points to your general profile
  (`github.com/ahmed-elsedy15`).
- Every **Live Demo** shows "coming soon" instead of a fake link.

Once you have the real repo and deployed-site URLs, open
`src/data/portfolio.js` and fill in each project's `github` and `demo`
fields.

## Notes

- Animations respect `prefers-reduced-motion` (see `src/index.css`).
- The navbar's active-section highlight uses an `IntersectionObserver`
  (`src/hooks/useActiveSection.js`).
- The top progress bar and navbar background transition both read from
  `src/hooks/useScrollProgress.js`.
