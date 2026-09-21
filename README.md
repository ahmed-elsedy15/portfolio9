# Portfolio — Ahmed Elshahat Attia

React + Vite + Framer Motion + Lucide. No Tailwind dependency (one hand-written stylesheet), so it drops into
the existing `portfolio9` repo without config clashes. Base path stays `/portfolio9/` for GitHub Pages.

## Use it
```bash
npm i framer-motion lucide-react   # if not already installed
npm run dev
npm run build
```

## What to fill in
| Where | What |
|---|---|
| `public/photo.jpg` | your portrait (a labeled placeholder shows until it exists) |
| `public/photo-cutout.png` | optional background-removed portrait → stronger 3D layering |
| `src/content.js → links.linkedin` | your LinkedIn URL (shows a dashed "add your link" chip until set) |
| `src/content.js → projectMeta[].image / live / repo` | screenshots + real links per project (empty = illustrative preview, link hidden) |
| `src/content.js → dict` | every visible string, English + Arabic |

## Notes
- English is default; the switcher flips `<html lang dir>` and the whole UI to Arabic/RTL (layout uses CSS logical properties).
- Animated headlines split on **words**, never letters, so Arabic keeps its joined letterforms.
- Project previews are small interactive UIs built in code (no real screenshots, no business data). Swap in real images via `projectMeta`.
- `prefers-reduced-motion` disables the curtain, tilt, parallax, marquee and reveals. Custom cursor + portrait tilt only run on fine-pointer desktops; mobile gets a lightweight static composition.
