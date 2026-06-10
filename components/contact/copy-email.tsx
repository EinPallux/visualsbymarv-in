"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { siteConfig } from "@/constants/site";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the mailto link next to this still works
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors duration-300 hover:border-foreground"
    >
      {copied ? (
        <>
          <Check className="size-4 text-accent" />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-4" />
          Copy email
        </>
      )}
    </button>
  );
}
