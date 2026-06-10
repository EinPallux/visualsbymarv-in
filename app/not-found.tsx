import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70svh] flex-col items-start justify-center py-24">
      <p className="meta-label">
        <span className="text-accent">404</span> — Not found
      </p>
      <h1 className="text-display mt-6">
        Nothing to stop
        <br />
        scrolling for here.
      </h1>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-white"
      >
        <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back home
      </Link>
    </div>
  );
}
