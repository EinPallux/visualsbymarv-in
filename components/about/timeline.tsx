import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { timeline } from "@/content/timeline";

export function Timeline() {
  return (
    <Stagger className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[5.5rem] top-2 hidden w-px bg-line md:block"
      />
      <ol className="space-y-12 md:space-y-16">
        {timeline.map((entry) => (
          <StaggerItem key={entry.year}>
            <li className="grid gap-3 md:grid-cols-[5.5rem_3rem_1fr] md:gap-0">
              <p className="meta-label pt-1 text-accent">{entry.year}</p>
              <div className="hidden justify-center pt-2 md:flex">
                <span className="size-2 rounded-full border border-line bg-background" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {entry.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">
                  {entry.body}
                </p>
              </div>
            </li>
          </StaggerItem>
        ))}
      </ol>
    </Stagger>
  );
}
