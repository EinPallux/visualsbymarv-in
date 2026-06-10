import { Fragment, type ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  className,
  /** how many times the content repeats within each half — higher = safer
   *  against wide viewports showing empty gaps */
  repeat = 3,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  repeat?: number;
}) {
  // One "half" = the content repeated `repeat` times. We render two identical
  // halves and translate the track by exactly -50% (one half), which lands the
  // second half precisely where the first started — a seamless, gapless loop.
  const half = (
    <div className="flex shrink-0">
      {Array.from({ length: repeat }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } [will-change:transform]`}
      >
        {half}
        <div aria-hidden className="flex shrink-0">
          {Array.from({ length: repeat }).map((_, i) => (
            <Fragment key={i}>{children}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
