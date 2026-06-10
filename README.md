# visualsbymarv.in

Personal portfolio of **Marvin** — media designer from Germany. Social media
content design, visual branding and AI-assisted creative workflows.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- shadcn/ui-style component primitives (`components/ui`)
- [Framer Motion](https://www.framer.com/motion/) for reveals, staggers and page transitions
- [next-themes](https://github.com/pacocoursey/next-themes) — light by default, dark mode included
- [Lucide](https://lucide.dev) icons
- Plus Jakarta Sans via `next/font`

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build && npm start
```

## Structure

```
app/          routes (home, about, work, work/[slug], services, tools, contact)
components/   layout, home, work, about, contact, shared, ui
content/      typed content: projects, testimonials, services, tools, timeline
constants/    site config, nav, client logos
hooks/        small client hooks
lib/          utilities
public/images brand assets (logo, portrait, client logos)
styles/       global styles & design tokens
types/        shared TypeScript types
```

All copy and case-study data live in `content/` — edit there, not in components.

## Deployment

Built for [Vercel](https://vercel.com): zero-config — import the repository
and deploy. Sitemap, robots, Open Graph image and structured data are
generated from `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`
and the JSON-LD blocks in the layout and case-study pages.
