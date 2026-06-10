# Visuals by Marv — Portfolio

A world-class, editorial-monochrome portfolio for **Marvin** — a 25-year-old
German B.A. Media Design graduate building a future in social-first content.

Designed to feel intentional, bold and memorable — not another templated
designer site.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (custom token-based design system)
- **Framer Motion** (page transitions, staggered reveals, kinetic type, magnetic UI)
- **next-themes** — Light mode default with smooth Dark mode transitions
- **Plus Jakarta Sans** (global font via `next/font`)

## Design system

- Warm-paper light theme ↔ near-black dark theme, driven by CSS variables
- Film-grain overlay, oversized display typography, art-directed project "posters"
- Strictly monochrome — the only color is authentic iMessage-blue in the
  testimonial section

## Pages

| Route    | Purpose                                                            |
| -------- | ----------------------------------------------------------------- |
| `/`      | Hero · tech stack · 3 selected works · social proof · testimonials |
| `/work`  | Full, filterable project library                                   |
| `/about` | Long-form story, principles, timeline                              |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Deploy (Vercel)

Push to the repo and import it into Vercel — zero config. The project builds to
fully static pages.

## Assets

Personal branding (logo, portrait, client logos) lives in
`public/images/personal_branding/`.
