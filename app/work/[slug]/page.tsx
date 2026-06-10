import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { ProjectVisual } from "@/components/work/project-visual";
import { getNextProject, getProject, projects } from "@/content/projects";
import { siteConfig } from "@/constants/site";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} · ${project.client}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${project.client}`,
      description: project.summary,
      type: "article",
    },
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="meta-label">
      <span className="text-accent">●</span> {children}
    </p>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    author: { "@type": "Person", name: "Marvin" },
    datePublished: project.year,
    url: `${siteConfig.url}/work/${project.slug}`,
  };

  return (
    <article>
      {/* Hero */}
      <header className="container-x pb-16 pt-20 md:pt-28">
        <Reveal>
          <p className="meta-label">
            <Link href="/work" className="transition-colors hover:text-foreground">
              Work
            </Link>
            {" / "}
            <span className="text-accent">{project.client}</span>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-display mt-6 max-w-5xl text-balance">
            {project.title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <dl className="rule mt-12 grid grid-cols-2 gap-x-8 gap-y-6 pt-8 md:grid-cols-4">
            <div>
              <dt className="meta-label">Client</dt>
              <dd className="mt-2 text-sm font-medium">{project.client}</dd>
            </div>
            <div>
              <dt className="meta-label">Year</dt>
              <dd className="mt-2 text-sm font-medium">{project.year}</dd>
            </div>
            <div>
              <dt className="meta-label">Role</dt>
              <dd className="mt-2 text-sm font-medium">{project.role}</dd>
            </div>
            <div>
              <dt className="meta-label">Deliverables</dt>
              <dd className="mt-2 text-sm font-medium">
                {project.deliverables.join(", ")}
              </dd>
            </div>
          </dl>
        </Reveal>
      </header>

      {/* Lead visual */}
      <Reveal className="container-x" y={40}>
        <ProjectVisual
          visual={project.visual}
          client={project.client}
          className="aspect-[16/10] rounded-xl md:aspect-[21/9]"
        />
      </Reveal>

      {/* Challenge & Goal */}
      <section className="container-x grid gap-12 py-24 md:grid-cols-2 md:py-32 lg:gap-20">
        <Reveal>
          <SectionLabel>The Challenge</SectionLabel>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {project.challenge.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionLabel>The Goal</SectionLabel>
          <div className="mt-6 space-y-5 text-lg leading-relaxed">
            {project.goal.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="rule">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
          </Reveal>
          <div className="mt-12 space-y-14 md:space-y-20">
            {project.process.map((step, i) => (
              <Reveal key={step.heading}>
                <div className="grid gap-4 md:grid-cols-[5rem_1fr] md:gap-10">
                  <p className="meta-label pt-2 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {step.heading}
                    </h2>
                    <div className="mt-4 space-y-4 leading-relaxed text-muted">
                      {step.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design decisions */}
      <section className="rule">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <SectionLabel>Design Decisions</SectionLabel>
          </Reveal>
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
            {project.decisions.map((decision) => (
              <StaggerItem key={decision.title} className="bg-background">
                <div className="h-full p-8 transition-colors duration-300 hover:bg-surface">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {decision.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {decision.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Results */}
      <section className="rule">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <SectionLabel>Results</SectionLabel>
          </Reveal>
          <Stagger className="mt-12 grid gap-10 md:grid-cols-3">
            {project.results.map((result) => (
              <StaggerItem key={result.label}>
                <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                  {result.value}
                </p>
                <p className="mt-3 text-sm text-muted">{result.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed">
              {project.resultsNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Motion details */}
      <section className="rule">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <SectionLabel>Motion Details</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 max-w-2xl space-y-4">
              {project.motion.map((note) => (
                <p
                  key={note.slice(0, 24)}
                  className="flex gap-3 leading-relaxed text-muted"
                >
                  <Sparkles className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {note}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      {next && (
        <section aria-label="Next project" className="rule">
          <Link href={`/work/${next.slug}`} className="group block">
            <div className="container-x flex flex-wrap items-end justify-between gap-6 py-20 md:py-28">
              <div>
                <p className="meta-label">Next project</p>
                <p className="text-display-sm mt-4 max-w-3xl transition-colors duration-300 group-hover:text-accent">
                  {next.title}
                </p>
                <p className="mt-3 text-sm text-muted">
                  {next.client} · {next.year}
                </p>
              </div>
              <span className="inline-flex size-14 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <ArrowRight className="size-5" />
              </span>
            </div>
          </Link>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
