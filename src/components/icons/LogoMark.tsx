import type { SVGProps } from "react";

/* Marvin's personal mark, redrawn with currentColor so it inverts
   cleanly between light and dark themes. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 44 31" fill="currentColor" aria-hidden {...props}>
      <path d="M19.07,8.49c1.15-2.39.15-5.26-2.24-6.41-2.39-1.15-5.26-.15-6.41,2.24L2.08,21.61c-1.15,2.39-.15,5.26,2.24,6.41,2.39,1.15,5.26.15,6.41-2.24l8.34-17.29Z" />
      <path d="M30.46,8.49c1.15-2.39.15-5.26-2.24-6.41-2.39-1.15-5.26-.15-6.41,2.24l-2.91,6.04c-1.15,2.39-.15,5.26,2.24,6.41,2.39,1.15,5.26.15,6.41-2.24l2.91-6.04Z" />
      <path d="M41.92,8.49c1.15-2.39.15-5.26-2.24-6.41-2.39-1.15-5.26-.15-6.41,2.24l-8.34,17.29c-1.15,2.39-.15,5.26,2.24,6.41,2.39,1.15,5.26.15,6.41-2.24l8.34-17.29Z" />
    </svg>
  );
}
