import type { Metadata } from "next";
import Link from "next/link";
import { AboutHero } from "@/components/about/AboutHero";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Marvin — 25, German B.A. Media Design graduate and graphic designer at Adler Werbegeschenke, building a future in social-first content.",
};

const principles = [
  {
    n: "01",
    title: "Concept before craft",
    body: "The idea earns the polish. I start with what should be said before deciding how it looks.",
  },
  {
    n: "02",
    title: "Built for the feed",
    body: "Everything is designed to survive a thumb at speed — clarity, contrast and a reason to stop.",
  },
  {
    n: "03",
    title: "AI as an accelerator",
    body: "I use modern AI workflows to explore more directions, faster. The taste and final call stay human.",
  },
  {
    n: "04",
    title: "Systems over one-offs",
    body: "I leave teams with templates and a language they can keep using, not just a single pretty asset.",
  },
];

const timeline = [
  {
    when: "Now",
    title: "Graphic Designer — Adler Werbegeschenke",
    body: "Full-time graphic design across print and digital for a promotional-products brand.",
  },
  {
    when: "Foundation",
    title: "B.A. Media Design",
    body: "A bachelor’s grounding in visual communication, typography and design thinking.",
  },
  {
    when: "Next",
    title: "Social-first content for brands",
    body: "Heading toward creating and art-directing social media content for companies full-time.",
  },
];

const facts = [
  { k: "25", v: "Years old" },
  { k: "B.A.", v: "Media Design" },
  { k: "5+", v: "Brands & communities" },
  { k: "DE", v: "Based in Germany" },
];

export default function AboutPage() {
  return (
    <div>
      <AboutHero />

      {/* Bio */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="label sticky top-32">The short version</p>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.9rem]">
                I’m Marvin — a German{" "}
                <span className="text-muted">media designer</span> who treats
                social content like a craft. I turn brands, communities and
                ideas into <span className="text-muted">visuals that move</span>{" "}
                — and that people actually remember.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                By day I’m a graphic designer at Adler Werbegeschenke; the rest
                of the time I’m sharpening a practice built for the way people
                consume now — fast, visual, mobile-first. My edge is the mix:
                classic design fundamentals, a content creator’s instinct, and a
                modern AI-assisted workflow that lets me move from idea to
                finished asset without losing the craft.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-y border-fg/10">
        <div className="container-x grid grid-cols-2 divide-x divide-fg/10 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal
              key={f.v}
              delay={i * 0.08}
              className={`py-10 ${i % 2 === 0 ? "pr-6" : "pl-6"} lg:px-8 ${
                i === 2 ? "max-lg:border-t max-lg:border-fg/10" : ""
              } ${i === 3 ? "max-lg:border-t max-lg:border-fg/10" : ""}`}
            >
              <p className="display text-5xl tracking-tighter sm:text-6xl">
                {f.k}
              </p>
              <p className="mt-2 text-sm text-muted">{f.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="container-x py-24 sm:py-32">
        <div className="mb-14">
          <p className="label mb-4">How I work</p>
          <AnimatedHeading
            text={"Four rules\nI design by."}
            by="line"
            className="display text-5xl tracking-tightest sm:text-6xl lg:text-7xl"
          />
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-fg/10 bg-fg/10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.06}
              className="group bg-bg p-8 transition-colors duration-500 hover:bg-fg/[0.03] sm:p-10"
            >
              <div className="flex items-start gap-5">
                <span className="text-sm font-semibold text-muted">{p.n}</span>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-pretty text-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-12 sm:py-16">
        <div className="mb-14">
          <p className="label mb-4">The path</p>
          <h2 className="display text-5xl tracking-tightest sm:text-6xl">
            Where I’ve been,
            <br />
            where I’m headed.
          </h2>
        </div>
        <div className="flex flex-col">
          {timeline.map((t, i) => (
            <Reveal
              key={t.title}
              delay={i * 0.06}
              className="group grid items-baseline gap-2 border-t border-fg/10 py-8 sm:grid-cols-12 sm:gap-6"
            >
              <span className="label sm:col-span-2">{t.when}</span>
              <h3 className="text-2xl font-extrabold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:col-span-5 sm:text-3xl">
                {t.title}
              </h3>
              <p className="text-pretty text-muted sm:col-span-5">{t.body}</p>
            </Reveal>
          ))}
          <div className="border-t border-fg/10" />
        </div>
      </section>

      {/* Outro */}
      <section className="container-x py-24 text-center sm:py-32">
        <Reveal className="flex flex-col items-center">
          <p className="label mb-6">The work speaks louder</p>
          <h2 className="display text-balance text-5xl tracking-tightest sm:text-7xl lg:text-8xl">
            See what I’ve made.
          </h2>
          <Link
            href="/work"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-fg px-7 py-4 text-sm font-semibold text-bg"
          >
            Browse the work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
