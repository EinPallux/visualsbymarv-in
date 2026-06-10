import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="label mb-6">Error 404</p>
      <h1 className="display text-[28vw] leading-[0.8] tracking-tightest sm:text-[16rem]">
        Lost
      </h1>
      <p className="mt-6 max-w-sm text-muted">
        This page wandered off the grid. Let’s get you back to the work.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-bg"
      >
        Back home
      </Link>
    </div>
  );
}
