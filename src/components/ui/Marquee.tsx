import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex overflow-hidden ${className ?? ""}`}>
      <div
        className={`flex shrink-0 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } [will-change:transform]`}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
