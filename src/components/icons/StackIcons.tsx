import type { ReactElement, SVGProps } from "react";

/* Monochrome, single-color glyph versions so they sit inside the
   editorial system instead of fighting it with brand colors. */

export function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M8.5 2h3.5v6.5H8.5a3.25 3.25 0 0 1 0-6.5Z" />
      <path d="M12 2h3.5a3.25 3.25 0 0 1 0 6.5H12V2Z" opacity=".75" />
      <path d="M8.5 8.5H12V15H8.5a3.25 3.25 0 0 1 0-6.5Z" opacity=".55" />
      <circle cx="15.25" cy="11.75" r="3.25" opacity=".4" />
      <path d="M8.5 15H12v3.25a3.25 3.25 0 1 1-3.5-3.25Z" opacity=".85" />
    </svg>
  );
}

export function PhotoshopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect
        x="2.25"
        y="2.25"
        width="19.5"
        height="19.5"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 16.5V7.6h3.05c1.78 0 2.95 1.07 2.95 2.74 0 1.66-1.2 2.76-3 2.76H8.7v3.4H7Zm1.7-4.85h1.1c.86 0 1.4-.5 1.4-1.28 0-.79-.53-1.27-1.4-1.27H8.7v2.55Z"
        fill="currentColor"
      />
      <path
        d="M14.2 16.05l.5-1.28c.5.34 1.2.6 1.86.6.6 0 .92-.22.92-.58 0-.4-.4-.53-1.15-.78-1.05-.34-1.93-.78-1.93-1.95 0-1.16.95-1.9 2.3-1.9.78 0 1.55.22 2.1.58l-.48 1.26c-.5-.3-1.1-.49-1.6-.49-.52 0-.82.2-.82.53 0 .38.42.5 1.16.76 1.04.35 1.92.8 1.92 1.97 0 1.2-.95 1.95-2.45 1.95-.86 0-1.74-.26-2.33-.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IllustratorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect
        x="2.25"
        y="2.25"
        width="19.5"
        height="19.5"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.2 16.5 9.1 7.6h2.1l2.9 8.9h-1.85l-.6-1.98H8.62l-.6 1.98H6.2Zm2.85-3.45h2.05L10.07 9.6l-1.02 3.45Z"
        fill="currentColor"
      />
      <path
        d="M15.6 16.5V9.9h1.7v6.6h-1.7Zm.85-7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Claude / Anthropic sunburst mark, single color */
export function ClaudeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <g transform="translate(12 12)">
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="-0.85"
            y="-10"
            width="1.7"
            height="7.4"
            rx="0.85"
            transform={`rotate(${i * 30})`}
          />
        ))}
      </g>
    </svg>
  );
}

export const stackIcons: Record<
  string,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  Figma: FigmaIcon,
  Photoshop: PhotoshopIcon,
  Illustrator: IllustratorIcon,
  Claude: ClaudeIcon,
};
