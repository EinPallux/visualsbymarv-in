# 🎨 Marvin — Website Editing Guide

Everything on this site is currently filled with **my (Claude's) placeholder
content** — fake projects, generated mockups, sample testimonials and stand-in
copy. This guide shows you **exactly where to go** to swap in your own
graphics, images and words.

You don't need to be a developer. 95% of the content lives in **one file**:
`src/lib/data.ts`. Start there.

---

## 🗺️ The 30-second mental model

```
src/
├── lib/
│   └── data.ts          ⭐ THE CONTENT HUB — projects, clients, testimonials, tech stack, nav
├── app/
│   ├── layout.tsx       SEO: page title, description, your name, social preview
│   ├── page.tsx         Homepage section order
│   ├── about/page.tsx   All About-page text (bio, principles, timeline, facts)
│   ├── work/page.tsx    "All work" page intro heading + text
│   └── globals.css      Colors (light & dark mode)
├── components/
│   ├── hero/Hero.tsx           Homepage hero (greeting, your one-liner, rotating roles)
│   ├── about/AboutHero.tsx     Big About-page intro words
│   ├── sections/Footer.tsx     Email, social links, footer text
│   ├── nav/Navbar.tsx          The "marvin." logo text
│   ├── icons/LogoMark.tsx      Your "M" logo (SVG)
│   ├── icons/StackIcons.tsx    Figma / Photoshop / Illustrator / Claude icons
│   └── work/
│       ├── ProjectPoster.tsx   The generated "poster" key-art for each project
│       └── CaseVisuals.tsx     The generated phone / feed / carousel mockups
└── public/
    └── images/personal_branding/   ⭐ ALL your image files go here
```

> **Rule of thumb:** _Text & data_ → `src/lib/data.ts`. _Image files_ →
> `public/images/...`. _Page layout/wording_ → the matching file in `src/app/`
> or `src/components/`.

---

## 1. ⭐ Projects (your portfolio work) — `src/lib/data.ts`

This is the most important section. The `projects` array drives:

- The **3 large pieces** on the homepage (any project with `featured: true`)
- The **full library** at `/work`
- Each project's **sub-page** at `/work/<slug>`

Each project looks like this — edit the values, keep the structure:

```ts
{
  slug: "chromiecraft-launch",   // the URL: /work/chromiecraft-launch (lowercase, dashes)
  index: "01",                   // the number shown on the card
  title: "Progression, Reframed",// project headline
  client: "ChromieCraft",        // who it was for
  category: "Social Campaign",   // also used as a filter on /work
  year: "2025",
  blurb: "A social-first launch identity…",  // 1–2 sentence summary
  tags: ["Art Direction", "Motion", "Social"],
  palette: ["#101010", "#2b2b2b"],   // the 2 gradient colors for the generated art
  ink: "dark",                       // "dark" = white text on art, "light" = black text
  featured: true,                    // true = show on homepage (keep exactly 3 true)
  caseStudy: {
    role: "Art Direction · Motion · Social Design",
    brief: "The full background paragraph…",
    approach: [ "Paragraph 1", "Paragraph 2", "Paragraph 3" ], // exactly 3
    deliverables: [ "Launch reel", "Carousel", "…" ],          // any number
    outcome: "The one-line result / win.",
  },
},
```

**To add a project:** copy one whole `{ … }` block, paste it, change the values.
**To remove one:** delete its whole block.
**To change which 3 are on the homepage:** set `featured: true` on exactly three.

> 💡 The `palette` + `ink` fields control the auto-generated artwork colors. If
> you later add **real images** (see section 8), these matter less.

---

## 2. 🖼️ Your photo & logo — `public/images/personal_branding/`

Replace these **files directly** (keep the same filename, or update the path
where it's referenced):

| File | Where it shows | Referenced in |
|------|----------------|---------------|
| `marvin/me.png` | Hero portrait + About portrait | `Hero.tsx`, `AboutHero.tsx` |
| `logo/personal_logo_black.svg` | (source for your mark) | — |
| `logo/personal_logo_white.svg` | (source for your mark) | — |

**To replace your photo:** drop a new image at
`public/images/personal_branding/marvin/me.png` (same name = nothing else to
change). Portrait orientation works best.

**Your logo (the "M")** is drawn inline as SVG in
`src/components/icons/LogoMark.tsx` and as the browser tab icon in
`public/favicon.svg`. If your logo changes, paste the new SVG `<path>` data into
both. (It uses `currentColor` so it auto-adapts to light/dark — keep that.)

---

## 3. 🏢 Client logos (social proof) — `src/lib/data.ts` + `public/images/.../clients/`

1. Drop logo files into `public/images/personal_branding/clients/`
   (PNG with transparent background works best).
2. Edit the `clients` array in `src/lib/data.ts`:

```ts
export const clients = [
  { name: "Adler Werbegeschenke", logo: "/images/personal_branding/clients/Client_AdlerWerbegeschenke_Logo.png" },
  // add / remove / rename here…
];
```

They scroll in the marquee on the homepage (rendered by
`src/components/sections/SocialProof.tsx`). The headline above them
("From gaming communities of 100k+ players…") is also in that file.

---

## 4. 💬 Testimonials (the iMessage section) — `src/lib/data.ts`

Edit the `testimonials` array. Each is **one message** + your emoji reaction:

```ts
{
  name: "Alex",
  role: "Founder, byAlex.gg",
  message: "ok the new reels are actually insane 😭 engagement literally doubled…",
  reaction: "❤️",   // the tap-back emoji (❤️ 🔥 🎉 👏 😮 …)
},
```

The typing-animation, "Today" label and "Delivered" receipt are styled in
`src/components/sections/Testimonials.tsx` — you usually only touch the data.

---

## 5. 🛠️ Tech stack — `src/lib/data.ts` + `src/components/icons/StackIcons.tsx`

The tools row (Figma, Photoshop, Illustrator, Claude) comes from the `stack`
array in `data.ts`:

```ts
export const stack = [
  { name: "Figma", caption: "Design & Prototyping" },
  // …
];
```

The little icons are hand-drawn SVGs in
`src/components/icons/StackIcons.tsx`. If you add a new tool, add an icon
component there and map it in the `stackIcons` object at the bottom of that file.
(Section rendered by `src/components/sections/TechStack.tsx` — the heading
"A tight stack, used with intent." lives there.)

---

## 6. 🦸 Homepage hero — `src/components/hero/Hero.tsx`

| What you see | Find this in the file |
|---|---|
| Rotating roles ("Visual Designer", "Content Creator"…) | `const roles = [ … ]` at the top |
| Giant "MARVIN" word | `"MARVIN".split("")` |
| "Hey, I'm Marvin 👋" chip | search `Hey, I’m Marvin` |
| Your one-liner ("I design social-first brand visuals…") | search `I design` |
| Top corner labels ("Portfolio", "Germany · B.A. Media Design") | search `Based in` |

---

## 7. 👤 About page — `src/app/about/page.tsx` + `src/components/about/AboutHero.tsx`

**`AboutHero.tsx`** → the big stacked intro words (`const words = ["DESIGNER", …]`)
and the "About — Marvin, 25, Germany" label.

**`app/about/page.tsx`** → everything else, in clearly named arrays near the top:

- `principles` — your "four rules" cards
- `timeline` — Now / Foundation / Next career steps
- `facts` — the number strip (25, B.A., 5+, DE)
- The two **bio paragraphs** — search for `I’m Marvin — a German`
- The closing "See what I've made." — search `outro`

---

## 8. 📸 Using REAL project images instead of the generated mockups

Right now each project's visuals are **generated art** (no real screenshots):

- `src/components/work/ProjectPoster.tsx` → the colored "poster" key-art used on
  the homepage, the work grid, and the top of each case study.
- `src/components/work/CaseVisuals.tsx` → the phone/feed/carousel/type/color
  mockups inside each case-study page.

**The clean way to add real images:**

1. Put your images in `public/images/work/<your-slug>/` e.g.
   `public/images/work/chromiecraft-launch/cover.jpg`.
2. Add an image field to that project in `data.ts`, e.g. `image: "/images/work/chromiecraft-launch/cover.jpg"`.
3. In `src/components/work/ProjectPoster.tsx`, render an `<Image>` when a project
   has an `image`, otherwise fall back to the generated art. Minimal example:

```tsx
import Image from "next/image";
// near the top of the returned JSX:
if (project.image) {
  return (
    <Image src={project.image} alt={project.title} fill
           className="object-cover" sizes="100vw" />
  );
}
// …otherwise the existing generated poster renders.
```

4. For the **case-study mockups**, open `src/components/work/CaseStudyPage.tsx`,
   find the "Visual showcase (bento)" section, and replace any `<Tile>` /
   `<FeedGrid/>` / `<PhoneReel/>` etc. with your own `<Image>` inside a `<Tile>`.

> If you'd like, ask me (Claude) to "wire up real images for project X" and I'll
> do steps 1–4 for you — just tell me the filenames.

---

## 9. 📧 Footer: email & social links — `src/components/sections/Footer.tsx`

- **Email:** search `hello@visualsbymarvin.in` → change to your real address
  (it appears twice: the big "Say hi" link and the bottom Email link).
- **Social links:** find the `Instagram` / `LinkedIn` links and replace the
  `href="https://…"` with your real profile URLs.
- The "Made in Germany · …" line and the marquee words are also here.

---

## 10. 🔤 Brand name & SEO — `src/components/nav/Navbar.tsx` + `src/app/layout.tsx`

- **Navbar wordmark** ("marvin.") → `Navbar.tsx`, search `marvin`.
- **Browser tab title, Google/social description, your name, keywords, preview
  URL** → `src/app/layout.tsx` in the `metadata` object. Update `siteUrl` to your
  real domain once you have one.

---

## 11. 🎨 Colors & theme — `src/app/globals.css`

Light mode is the default. Colors are CSS variables at the top of the file:

```css
:root {            /* Light — warm paper */
  --bg: 244 242 236;   /* background  */
  --fg: 12 12 12;      /* text        */
  --muted: 90 88 82;   /* secondary text */
  ...
}
.dark {            /* Dark — near black */
  --bg: 10 10 10;
  --fg: 240 239 233;
  ...
}
```

Values are `R G B` (space-separated, no commas). Change these to re-skin the
whole site. The film-grain texture and animations also live in this file.

---

## ▶️ Running it locally

```bash
npm install      # first time only
npm run dev      # preview at http://localhost:3000
npm run build    # check everything still compiles before deploying
```

Edit a file, save, and the browser refreshes automatically.

## 🚀 Deploying

Push to GitHub → it auto-deploys on Vercel. Always run `npm run build` once
locally first; if it succeeds, the deploy will too.

---

## ✅ Quick launch checklist

- [ ] Replaced `public/images/personal_branding/marvin/me.png` with your photo
- [ ] Updated all `projects` in `src/lib/data.ts` (titles, blurbs, case studies)
- [ ] Set exactly **3** projects to `featured: true`
- [ ] Swapped the `clients` logos + files
- [ ] Rewrote the `testimonials`
- [ ] Updated hero one-liner + rotating roles (`Hero.tsx`)
- [ ] Filled in the About page (`app/about/page.tsx`, `AboutHero.tsx`)
- [ ] Set your real email + social links (`Footer.tsx`)
- [ ] Updated SEO title/description + domain (`layout.tsx`)
- [ ] (Optional) Wired in real project images (section 8)
- [ ] `npm run build` passes ✅

---

_Note: `src/components/sections/StatementBand.tsx` exists but is currently
unused — safe to ignore or delete._
