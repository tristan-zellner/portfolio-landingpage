# Portfolio Landing Page

Personal portfolio site for Tristan Zellner, built with [Astro](https://astro.build) and plain CSS.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro 5 (static output / SSG) |
| Styling | Custom CSS with CSS custom properties (no Tailwind) |
| Fonts | Inter + JetBrains Mono via Google Fonts |
| Language | TypeScript (strict) |
| Bundler | Vite (via Astro) |

## Project structure

```
src/
├── data/
│   └── portfolio.ts        # All content in one typed file — edit this to update the page
├── styles/
│   └── tokens.css          # Design system: colors, type scale, spacing, borders
├── layouts/
│   └── Layout.astro        # Root HTML shell, imports tokens + global resets
├── components/
│   ├── Masthead.astro
│   ├── SubBar.astro        # Section navigation bar
│   ├── Hero.astro
│   ├── About.astro         # 01 — Über
│   ├── Experience.astro    # 02 — Werdegang
│   ├── Projects.astro      # 03 — Auswahl an erfolgreichen Projekten
│   ├── Skills.astro        # 04 — Fähigkeiten
│   ├── Hobbies.astro       # 05 — Persönlich
│   ├── Contact.astro       # 06 — Kontakt
│   └── Footer.astro
└── pages/
    └── index.astro         # Composes all components into the single page
public/
└── assets/
    ├── portrait.jpg
    └── portrait-mono.jpg
portfolio-website/          # Original design handoff files (excluded from Vite watcher)
```

## Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Build static output to dist/
npm run preview   # Preview the production build locally
```

## Updating content

All page content lives in **`src/data/portfolio.ts`**. It exports a single `PORTFOLIO` constant with typed sections:

- `about` — intro paragraph and principles
- `experience` — work history (including education at the bottom)
- `projects` — selected project highlights
- `skills` — grouped skill lists
- `hobbies` — personal interests
- `contact` — links and contact info

Editing that file is the only thing needed to update any text on the page.

## Design system

`src/styles/tokens.css` defines all design tokens as CSS custom properties on `:root`. Changes there propagate across every component automatically.

| Group | Examples |
|---|---|
| Colors | `--color-paper`, `--color-ink`, `--color-accent` |
| Type scale | `--text-xs` (10px) → `--text-hero` (132px) |
| Spacing | `--space-1` (8px) → `--space-8` (64px) |
| Borders | `--border-thin`, `--border-thick`, `--border-dashed` |
| Layout | `--page-padding`, `--max-width` |

## Deployment

The site is deployed as a static site via **IONOS Deploy Now**.

Deploy Now connects to the GitHub repository and builds + publishes the site automatically on every push to the main branch.

Build configuration:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist/` |
| Node version | 20 |

No server-side runtime is required — Astro outputs plain HTML/CSS/JS files that are served directly from IONOS's CDN.

## Notes

- The `portfolio-website/` folder contains the original design handoff and is excluded from Vite's file watcher to avoid hitting the OS inotify limit (`EMFILE`).
- All CSS is scoped to its component by Astro's default behavior — no class name collisions.
- Smooth scrolling is enabled globally via `scroll-behavior: smooth` on the `html` element.
