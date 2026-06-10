import type { Metadata } from "next";

import { Cta } from "@/components/home/cta";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/work/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Marvin — social media content systems, visual branding and creator identities for companies and communities.",
};

export default function WorkPage() {
  const [first, ...rest] = projects;

  return (
    <>
      <PageHeader
        label={`Work — ${projects.length} projects`}
        title={
          <>
            Systems, stories
            <br />
            and the occasional <span className="text-accent">thumbnail.</span>
          </>
        }
        intro="Every project here shipped into a real feed, for a real audience. Case studies cover the challenge, the process and what actually happened afterwards."
      />

      <section aria-label="All projects" className="container-x pb-24 md:pb-36">
        <div className="space-y-16 md:space-y-24">
          {first && (
            <Reveal>
              <ProjectCard
                project={first}
                index={0}
                visualClassName="md:aspect-[21/9]"
              />
            </Reveal>
          )}
          <div className="grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
            {rest.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta
        title="Your project could be next."
        subline="If your brand needs content people remember, the work page has room for one more case study."
      />
    </>
  );
}
