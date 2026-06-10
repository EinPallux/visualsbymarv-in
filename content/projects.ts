import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "chromiecraft",
    title: "Content for a living game world",
    client: "ChromieCraft",
    year: "2025",
    role: "Content Design & Social Strategy",
    deliverables: ["Social content system", "Event campaigns", "Community graphics"],
    summary:
      "A progressive open-world community with thousands of active players — and no consistent visual voice. I built the content system that made every announcement feel like part of the game.",
    featured: true,
    visual: {
      word: "Worlds",
      caption: "Social content system for an open-source game community",
      tone: "frost",
      logo: "/images/personal_branding/clients/Client_ChromieCraft_Logo.png",
    },
    challenge: [
      "ChromieCraft runs a progressive, community-driven game world with players across every timezone. Announcements, events and milestones were posted as plain text — functional, but invisible in a feed full of polished gaming content.",
      "The community deserved visuals that matched the care players put into the world itself. The catch: an open-source project has no big media budget and needs assets the team can reuse without a designer on call.",
    ],
    goal: [
      "Give every announcement a recognizable face. Build a content system — not one-off graphics — that the team could extend on their own, while making event posts impossible to scroll past.",
    ],
    process: [
      {
        heading: "Listening before designing",
        body: [
          "I spent the first weeks inside the community: Discord, forums, in-game events. What players responded to wasn't hype — it was milestones, shared progress, and inside references. That became the editorial line: celebrate the players, not the product.",
        ],
      },
      {
        heading: "A system, not a stack of posters",
        body: [
          "In Figma I built a modular template family: announcement, event, milestone, patch notes. Shared grid, shared type hierarchy, one accent treatment per category. Each template works as a 1:1 post, a 16:9 banner and a Discord embed without rework.",
        ],
      },
      {
        heading: "Handing over the keys",
        body: [
          "The final delivery was a documented Figma library with locked foundations and open content layers, so moderators could ship a correct-looking post in minutes. I used Claude Code to generate a small script that batch-exports every variant, cutting release-day asset prep to a single command.",
        ],
      },
    ],
    decisions: [
      {
        title: "Player-first imagery",
        body: "Screenshots from real community events, treated with a consistent grade, instead of generic key art. Authenticity over gloss — the feed should look like the world feels.",
      },
      {
        title: "One accent per category",
        body: "Events, milestones and patch notes each own a color. Players learn to recognize what a post is about before reading a word.",
      },
      {
        title: "Templates that survive without me",
        body: "Locked grids, generous safe zones, and a one-page usage guide. A good system is one the client can run on a Tuesday night without asking questions.",
      },
    ],
    results: [
      { value: "3.2×", label: "average engagement on event posts" },
      { value: "12+", label: "reusable template variants delivered" },
      { value: "~5 min", label: "for the team to produce a new post" },
    ],
    resultsNote:
      "Event announcements went from plain text to the most-shared posts on the server's channels — and the team still ships every post from the system today.",
    motion: [
      "Reveal animations on this case study mirror the system itself: each section fades up on a shared 0.6s ease-out curve, staggered by 80ms — the same rhythm used in the animated post templates.",
      "Hover states on images use a slow 1.04 scale with overflow clipping, keeping motion noticeable but never loud.",
    ],
  },
  {
    slug: "sundevs",
    title: "A tech company that sounds human",
    client: "SunDevs",
    year: "2025",
    role: "Social Media Content Design",
    deliverables: ["LinkedIn content design", "Carousel system", "Brand templates"],
    summary:
      "A software company with strong engineering and a quiet feed. I designed the carousel and post system that turned their expertise into content people actually save.",
    featured: true,
    visual: {
      word: "Signal",
      caption: "Carousel & post system for a software company",
      tone: "dusk",
      logo: "/images/personal_branding/clients/Client_SunDevs_Logo.png",
    },
    challenge: [
      "SunDevs builds serious software, but their social presence didn't show it. Posts were irregular, visually unrelated to each other, and written for other engineers rather than the decision-makers actually scrolling LinkedIn.",
      "The brief was honest: 'We have the knowledge. We don't have the packaging.'",
    ],
    goal: [
      "Translate engineering depth into a content format that non-technical buyers understand in eight seconds — and make the visual system tight enough that three different people can post without the feed falling apart.",
    ],
    process: [
      {
        heading: "Finding the format",
        body: [
          "We tested three directions in two weeks: quote cards, short video stills, and editorial carousels. Carousels won clearly — they reward expertise, and the swipe is a built-in engagement signal.",
        ],
      },
      {
        heading: "Designing for the second slide",
        body: [
          "Most carousels die on slide two. I structured every deck like an editorial spread: a bold claim on the cover, one idea per slide, generous whitespace, and a recurring progress marker so readers always know where they are.",
        ],
      },
      {
        heading: "Production rhythm",
        body: [
          "I set up a monthly content sprint: topics from the engineering team, copy shaped together, design produced in batches from the Figma system. AI-assisted drafting shortened the copy loop; every final line stayed human.",
        ],
      },
    ],
    decisions: [
      {
        title: "Editorial over corporate",
        body: "Large serif-free type, hard grids, no stock photos. The feed reads like a publication, not a pitch deck.",
      },
      {
        title: "A claim, then proof",
        body: "Every cover slide makes one sharp statement. The remaining slides earn it. Curiosity does the marketing.",
      },
      {
        title: "Batch production",
        body: "Designing eight posts in one sitting keeps quality consistent and costs predictable — and the feed never goes quiet.",
      },
    ],
    results: [
      { value: "4.8×", label: "reach growth in three months" },
      { value: "62%", label: "of engagement from saves & shares" },
      { value: "2", label: "inbound leads traced to carousel posts" },
    ],
    resultsNote:
      "The carousel system became SunDevs' main organic channel — and the template library still produces every post the team publishes.",
    motion: [
      "Case-study sections slide in from a 24px offset with a soft spring, echoing the swipe gesture of the carousel format.",
      "The results counters animate only once, on first view — numbers should feel stated, not gamified.",
    ],
  },
  {
    slug: "adler-werbegeschenke",
    title: "Promotional products, minus the catalog look",
    client: "Adler Werbegeschenke",
    year: "2024",
    role: "Visual Branding & Content Design",
    deliverables: ["Social media kit", "Product visuals", "Seasonal campaigns"],
    summary:
      "A German promotional products company stuck between catalog photography and modern commerce. I rebuilt their visual language for the feed — clean, warm, and unmistakably theirs.",
    featured: true,
    visual: {
      word: "Geschenkt",
      caption: "Feed-first visual language for a German B2B brand",
      tone: "ember",
      logo: "/images/personal_branding/clients/Client_AdlerWerbegeschenke_Logo.png",
    },
    challenge: [
      "Promotional products are a trust business — but Adler's social presence looked like a scanned catalog. White-background product shots, inconsistent typography, and seasonal posts assembled under time pressure.",
      "B2B customers do scroll. They just rarely see anything worth stopping for in this industry.",
    ],
    goal: [
      "Make a 'boring' B2B category feel considered. Build a feed identity that elevates everyday products — pens, bags, mugs — into compositions that communicate quality, and templates that survive the seasonal rush.",
    ],
    process: [
      {
        heading: "Auditing the category",
        body: [
          "I mapped the social presence of two dozen competitors. The pattern was universal: product on white, logo, price. That made the opportunity obvious — context, color and composition were free real estate.",
        ],
      },
      {
        heading: "Color as inventory",
        body: [
          "I built a seasonal palette system tied to the product calendar: warm tones for the Christmas business, fresh ones for trade-fair season. Each campaign window has a defined backdrop, prop logic and type treatment.",
        ],
      },
      {
        heading: "Photography direction on a budget",
        body: [
          "Instead of expensive shoots, I created composition guides in Photoshop: lighting angle, shadow depth, prop spacing. The in-house team could shoot on a phone and stay on brand — I handled the final retouch and layout pass.",
        ],
      },
    ],
    decisions: [
      {
        title: "Context beats white",
        body: "Products styled in use — on desks, in hands, at events — with soft directional shadow. Quality is shown, not claimed.",
      },
      {
        title: "A seasonal system, not seasonal panic",
        body: "Every recurring campaign has a prepared template family. December stopped being an emergency.",
      },
      {
        title: "German precision in type",
        body: "A strict two-weight hierarchy and a fixed grid. Restraint reads as trustworthiness in this market.",
      },
    ],
    results: [
      { value: "2.4×", label: "profile visits during campaign windows" },
      { value: "40%", label: "less production time per seasonal campaign" },
      { value: "100%", label: "of posts now produced from the system" },
    ],
    resultsNote:
      "The seasonal kit carried two full campaign cycles without external help — the strongest compliment a system can get.",
    motion: [
      "Imagery on this page reveals with a clip-path wipe, referencing the unwrapping motion used in the Christmas campaign assets.",
      "Hover lifts are limited to 2px with a soft shadow — premium products move quietly.",
    ],
  },
  {
    slug: "azerothcore",
    title: "An identity for open source",
    client: "AzerothCore",
    year: "2024",
    role: "Visual Identity & Community Graphics",
    deliverables: ["Release graphics", "Social templates", "Documentation visuals"],
    summary:
      "One of the largest open-source game-server projects needed visuals that matched its engineering reputation. I designed the graphic language for releases, docs and community channels.",
    featured: false,
    visual: {
      word: "Core",
      caption: "Graphic language for an open-source project",
      tone: "moss",
      logo: "/images/personal_branding/clients/Client_AzerothCore_Logo.png",
    },
    challenge: [
      "AzerothCore is maintained by hundreds of contributors, and its public face was as fragmented as you'd expect: every release post, banner and doc page looked different, made by whoever had time that week.",
      "Open source lives on trust and contribution. Inconsistent visuals quietly undermine both.",
    ],
    goal: [
      "Create a lightweight graphic language any contributor can apply — strict enough to be recognizable, simple enough that a developer with zero design tools can use it.",
    ],
    process: [
      {
        heading: "Designing for non-designers",
        body: [
          "The real constraint wasn't aesthetics, it was tooling. Contributors don't open Figma. So the system is built from rules, not files: defined margins, one type pairing, a fixed badge position — reproducible in any tool, even a code-generated image.",
        ],
      },
      {
        heading: "Release graphics as a ritual",
        body: [
          "Version releases are the project's heartbeat. I designed a release-card format with the version number as the hero element — collectible, consistent, instantly recognizable in feeds and changelogs.",
        ],
      },
    ],
    decisions: [
      {
        title: "Rules over files",
        body: "A one-page visual spec instead of binary templates. Contributors apply it in whatever tool they have.",
      },
      {
        title: "The version number is the star",
        body: "Big, monospaced, unmissable. Engineering culture celebrated in engineering terms.",
      },
      {
        title: "Dark-first palette",
        body: "Developers live in dark interfaces. The graphics are designed for dark backgrounds first, light as the variant.",
      },
    ],
    results: [
      { value: "1", label: "page of rules replacing ad-hoc design" },
      { value: "30+", label: "release cards shipped by contributors" },
      { value: "0", label: "designer needed for routine releases" },
    ],
    resultsNote:
      "The spec lives in the project repository and gets applied by people I've never met — exactly how open source should work.",
    motion: [
      "Section reveals on this page use a terminal-like sequential fade — content appears in document order, never out of it.",
    ],
  },
  {
    slug: "byalexgg",
    title: "A creator brand built for consistency",
    client: "ByAlexGG",
    year: "2024",
    role: "Creator Branding & Content Kit",
    deliverables: ["Stream identity", "Thumbnail system", "Social kit"],
    summary:
      "A streamer with growing reach and a feed assembled from one-off assets. I built the brand kit that makes every thumbnail, overlay and post recognizably one person.",
    featured: false,
    visual: {
      word: "Live",
      caption: "Identity & thumbnail system for a content creator",
      tone: "sand",
      logo: "/images/personal_branding/clients/Client_ByAlexgg_Logo.png",
    },
    challenge: [
      "Creator content moves fast — daily thumbnails, clips, announcements. Alex was producing everything ad hoc, so nothing accumulated: each asset worked alone, but the channel had no face.",
    ],
    goal: [
      "Build a kit where speed and consistency stop fighting each other: a thumbnail system that takes minutes, overlays that frame any game, and social templates that keep the brand intact between uploads.",
    ],
    process: [
      {
        heading: "Brand from behavior",
        body: [
          "Instead of inventing a brand, I extracted one — from clips, chat language and the moments the community actually clips. The visual identity amplifies an existing personality rather than costuming a new one.",
        ],
      },
      {
        heading: "The five-minute thumbnail",
        body: [
          "A Photoshop template with smart-object slots: swap the screenshot, swap the expression cutout, type the hook. Strict color framing keeps every thumbnail on brand even at 2 a.m. before an upload.",
        ],
      },
    ],
    decisions: [
      {
        title: "Recognition at 120 pixels",
        body: "Thumbnails are designed at preview size first. If it doesn't read tiny, it doesn't ship.",
      },
      {
        title: "Personality over polish",
        body: "Slightly rough cutouts and bold type — the energy of a clip, not the sterility of a poster.",
      },
      {
        title: "Everything is a template",
        body: "If an asset will exist twice, it gets a system. Creators need workflows, not files.",
      },
    ],
    results: [
      { value: "5 min", label: "from stream end to published thumbnail" },
      { value: "+38%", label: "click-through on the new thumbnail format" },
      { value: "1", label: "consistent face across every channel" },
    ],
    resultsNote:
      "The kit removed design as a bottleneck — the channel posts more, looks better, and stays unmistakably Alex.",
    motion: [
      "Hover states on this page snap slightly faster than elsewhere on the site — a small nod to the pace of creator content.",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
