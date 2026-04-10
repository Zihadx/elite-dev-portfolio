# Nur Zihad — Portfolio

A production-ready developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**-style primitives. It features a dark luxury aesthetic—glassmorphism, cinematic lighting, Framer Motion micro-interactions, and a custom cursor on desktop.

## Live site

| | |
| --- | --- |
| **Production** | [elite-dev-portfolio-zihadxs-projects.vercel.app](https://elite-dev-portfolio-zihadxs-projects.vercel.app) |
| **Vercel project** | [vercel.com/zihadxs-projects/elite-dev-portfolio](https://vercel.com/zihadxs-projects/elite-dev-portfolio) |

Set `NEXT_PUBLIC_SITE_URL` in Vercel to your primary domain (no trailing slash) so metadata matches production.

## Features

- Floating glass navbar with active section highlighting and smooth scroll
- Hero with gradient typography, rotating tagline, 3D-tilt profile card, and magnetic CTAs
- About, featured project spotlight, bento project grid, skills with animated bars, timeline experience, and glass contact form
- Ambient mouse-driven glow, noise overlay, scroll-triggered reveals, and optional “elite mode” easter egg (triple-click the small line under the hero)
- SEO metadata, JSON-LD `Person` schema, and `next/image` with lazy loading for project imagery

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18+ (or 20+ recommended)
- npm (ships with Node)

## Getting started

```bash
git clone https://github.com/Zihadx/elite-dev-portfolio.git
cd elite-dev-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description           |
| --------------- | --------------------- |
| `npm run dev`   | Start the dev server  |
| `npm run build` | Production build      |
| `npm run start` | Run production server |
| `npm run lint`  | Run ESLint            |

## Environment

Copy `.env.example` to `.env.local` and set your public site URL (no trailing slash):

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

This powers canonical URLs, Open Graph metadata, and structured data in `src/app/layout.tsx`.

## Customizing content

Edit **`src/data/portfolio.ts`**:

- Name, role, tagline, email, location, social links
- Navigation labels and section IDs
- About copy and strengths
- Projects (images, stack, live/repo URLs, bento `span` sizes)
- Skill categories and levels
- Experience timeline entries

Replace placeholder images with your own assets under `public/` or update remote URLs in `next.config.ts` (`images.remotePatterns`).

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add `NEXT_PUBLIC_SITE_URL` in **Project → Settings → Environment Variables**.
4. Deploy (default framework preset: Next.js).

## Tech stack

- [Next.js](https://nextjs.org/) · [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) · [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/) primitives · [Lucide](https://lucide.dev/) icons
- [class-variance-authority](https://cva.style/) · [clsx](https://github.com/lukeed/clsx) · [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## Project structure

```
src/
  app/                 # App Router: layout, page, globals, loading
  components/
    layout/            # Nav, cursor, ambient glow, loader, noise
    sections/          # Page sections
    ui/                  # Reusable UI (button, card, inputs, etc.)
  data/portfolio.ts    # All copy and project data
  hooks/               # Active section, mouse, reduced motion
  lib/utils.ts         # cn() helper
```

## License

Private / personal use unless you choose to add a license. All rights reserved by default.
