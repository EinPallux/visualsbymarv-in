import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  className?: string;
}

/** Editorial section opener: numbered meta label + display title. */
export function SectionHeading({
  index,
  label,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("space-y-5", className)}>
      <p className="meta-label">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true"> — </span>
        {label}
      </p>
      <h2 className="text-display-sm max-w-3xl text-balance">{title}</h2>
    </Reveal>
  );
}
