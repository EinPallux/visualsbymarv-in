import type { Metadata } from "next";
import { WorkLibrary } from "@/components/work/WorkLibrary";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "The full library — social campaigns, brand visuals, content systems and motion experiments by Marvin.",
};

export default function WorkPage() {
  return (
    <div className="pt-36 sm:pt-44">
      <div className="container-x mb-12 sm:mb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="label mb-5">The index — {projects.length} projects</p>
            <AnimatedHeading
              text="The Work"
              className="display text-[20vw] leading-[0.82] tracking-tightest sm:text-[14vw] lg:text-[12rem]"
            />
          </div>
        </div>
        <p className="mt-6 max-w-xl text-pretty text-muted sm:text-lg">
          Everything in one place — campaigns, identities, content systems and
          the experiments in between. Filter by discipline, or just scroll.
        </p>
      </div>

      <WorkLibrary />
    </div>
  );
}
