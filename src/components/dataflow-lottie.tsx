"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

type DataflowLottieProps = {
  src?: string;
  className?: string;
};

export function DataflowLottie({ className, src }: DataflowLottieProps) {
  const [canAnimate, setCanAnimate] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setCanAnimate(!media.matches);
    update();
    const listener = () => update();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const showFallback = !src || loadError || !canAnimate;

  if (showFallback) {
    return (
      <div
        className={`relative flex h-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-[#e6f0ff] via-white to-[#e1fff5] text-sm font-medium text-slate-600 shadow-md ${className}`}
        aria-label="Data flowing"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,255,0.15),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(0,168,150,0.12),transparent_35%)]" />
        <div className="relative flex w-full max-w-md justify-between px-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-3">
              {[0, 1, 2, 3].map((j) => (
                <span
                  key={`${i}-${j}`}
                  className="block h-2.5 w-20 rounded-full bg-slate-300/80"
                  style={{
                    animation: "pulse 1.8s ease-in-out infinite",
                    animationDelay: `${0.15 * (i + j)}s`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      className={className}
      onError={() => setLoadError(true)}
    />
  );
}
