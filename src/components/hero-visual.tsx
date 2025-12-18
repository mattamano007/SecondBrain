"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CitationBadge } from "./citation-badge";

const cards = [
  {
    title: "Deck review",
    body: "Slide 7 needs the decision tree you agreed on last quarter.",
    badge: "Source: Ops email — Feb 14",
    detail: "Pulled verbatim from Ops inbox thread 02/14, 9:12am.",
  },
  {
    title: "Decision memo",
    body: "Manager prefers Option B when ARR < $1M. Cite finance recap.",
    badge: "Fact vs inference shown",
    detail: "Separates quoted finance recap from the recommended branch.",
  },
  {
    title: "Project plan",
    body: "Add risk owner: Maya (as in the Q3 postmortem notes).",
    badge: "Source: Transcript — Q3 sync",
  },
  {
    title: "Tone check",
    body: "Rewrite opener in the concise style your CTO likes.",
    badge: "Voice match enabled",
    tone: "neutral" as const,
  },
  {
    title: "Quick check",
    body: "Proceed. This matches priorities shared last Monday.",
    badge: "Verified",
  },
  {
    title: "Answer with receipts",
    body: "Every response links to the exact email, doc, or transcript.",
    badge: "Citations on",
  },
];

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translate = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-[#0f1419]/40 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 grid-backdrop"
        style={{ translateY: translate }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,102,255,0.35),transparent_60%)] blur-3xl"
        style={{ translateY: translate }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-12 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_40%_60%,rgba(0,168,150,0.35),transparent_55%)] blur-3xl"
        style={{ translateY: useTransform(translate, (v) => v * -0.6) }}
        aria-hidden
      />
      <div className="relative grid gap-3 sm:grid-cols-2">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="glass relative rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-xl"
            initial={{ opacity: 0, scale: 0.98, translateY: 16 }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.04 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-2xl border border-white/10" aria-hidden />
            <div className="relative space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.08em] text-white/70">
                {card.title}
              </p>
              <p className="text-base text-white/90">{card.body}</p>
              <CitationBadge
                label={card.badge}
                detail={card.detail}
                tone={card.tone}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
