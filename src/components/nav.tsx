"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 border-b border-transparent bg-white/80 text-[var(--text-primary)] backdrop-blur-xl transition-all duration-200",
        scrolled && "border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      )}
    >
      <div className="section-shell flex items-center justify-between py-4">
        <div className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#eaded4] bg-[#f6eee6] shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
            <Image src="/brain-icon.svg" alt="Second Brain logo" width={28} height={28} priority />
          </span>
          <span className="hidden text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)] sm:block">
            Second Brain
          </span>
        </div>
        <form action="#cta" className="hidden items-center gap-3 md:flex">
          <label className="sr-only" htmlFor="nav-email">
            Work email
          </label>
          <input
            id="nav-email"
            type="email"
            placeholder="you@company.com"
            className="w-52 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-[var(--text-primary)] shadow-sm outline-none transition focus:border-[#6f4bff] focus:ring-2 focus:ring-[#6f4bff]/30"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-[#6e4af9] via-[#7e70ff] to-[#5f5bff] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(111,75,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f4bff]"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </nav>
  );
}
