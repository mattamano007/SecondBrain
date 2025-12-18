"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import clsx from "clsx";

type CitationBadgeProps = {
  label: string;
  detail?: string;
  tone?: "success" | "neutral";
};

export function CitationBadge({
  label,
  detail,
  tone = "success",
}: CitationBadgeProps) {
  return (
    <Tooltip.Provider delayDuration={80}>
      <Tooltip.Root>
        <Tooltip.Trigger
          className={clsx(
            "inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4da3ff]",
            tone === "success"
              ? "border-emerald-300/60 bg-emerald-500/20 text-emerald-50"
              : "border-white/30 bg-white/10 text-white"
          )}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-current" aria-hidden />
          {label}
        </Tooltip.Trigger>
        {detail ? (
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              align="center"
              className="glass max-w-xs rounded-lg px-3 py-2 text-sm text-white shadow-xl"
            >
              {detail}
              <Tooltip.Arrow className="fill-white/10" width={10} height={6} />
            </Tooltip.Content>
          </Tooltip.Portal>
        ) : null}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
