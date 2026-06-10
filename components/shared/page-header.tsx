import { Reveal } from "@/components/shared/reveal";

interface PageHeaderProps {
  label: string;
  title: React.ReactNode;
  intro?: string;
}

export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <header className="container-x pb-16 pt-20 md:pb-24 md:pt-28">
      <Reveal>
        <p className="meta-label">
          <span className="text-accent">●</span> {label}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="text-display mt-6 max-w-5xl text-balance">{title}</h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
