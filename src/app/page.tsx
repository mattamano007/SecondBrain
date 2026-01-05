import { FadeIn } from "@/components/fade-in";
import { Nav } from "@/components/nav";
import Image from "next/image";

const featureCards = [
  {
    title: "You keep repeating yourself",
    body: "Same questions. Different people. Every day. You've answered this 50 times. But your inbox doesn't remember.",
    accent: "from-[#58b5b2] to-[#1e6e9b]",
    image: "/ai-dash-orchestrator.svg",
    alt: "Orchestrator dashboard for a digital brain delegating tasks",
  },
  {
    title: "Future-proof your knowledge",
    body: "Your AI clone remembers everything.",
    accent: "from-[#5d7bff] to-[#7cb3ff]",
    image: "/ai-dash-briefings.svg",
    alt: "AI briefing board synthesizing feedback and drafts",
  },
  {
    title: "You are not the bottleneck",
    body: "Feed it your emails, meeting notes, and documents. It learns how you think, how you answer, what you prioritize.",
    accent: "from-[#85c9a8] to-[#3b8c5a]",
    image: "/ai-dash-knowledge.svg",
    alt: "Knowledge map for an AI clone with linked artifacts",
  },
];

const knowledgeCardClass =
  "flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)]";

const integrations = [
  { name: "Slack", color: "bg-[#4a154b]", glyph: "S" },
  { name: "Jira", color: "bg-[#0c7ff2]", glyph: "J" },
  { name: "Gmail", color: "bg-[#ea4335]", glyph: "M" },
  { name: "Zoom", color: "bg-[#2d8cff]", glyph: "Z" },
  { name: "Google Meet", color: "bg-[#0f9d58]", glyph: "G" },
  { name: "Trello", color: "bg-[#0079bf]", glyph: "T" },
  { name: "Workday", color: "bg-[#f6871f]", glyph: "W" },
  { name: "Monday.com", color: "bg-[#ff3d57]", glyph: "M" },
];

export default function Home() {
  return (
    <div className="bg-[#f8f2eb] text-[var(--text-primary)]">
      <Nav />

      <main className="space-y-0 pb-0">
        <section id="top" className="section-shell space-y-12 pt-20 pb-16 text-center">
          <FadeIn className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Your Brain Is Doing Too Much </h1>
            </div>
            <p className="mx-auto max-w-2xl text-base text-[var(--text-secondary)]">
            SecondBrain is your AI clone — trained on how you think, write, and decide.            </p>
            <form className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center" action="#cta">
              <label className="sr-only" htmlFor="hero-email">
                Work email
              </label>
              <input
                id="hero-email"
                type="email"
                placeholder="you@company.com"
                className="w-full max-w-xs rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-[var(--text-primary)] shadow-sm outline-none transition focus:border-[#6e4af9] focus:ring-2 focus:ring-[#6e4af9]/30"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6e4af9] via-[#7e70ff] to-[#5f5bff] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(105,79,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(105,79,255,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e4af9]"
              >
                Get Early Access
              </button>
            </form>
          </FadeIn>

          <FadeIn className="relative mx-auto w-full max-w-xl md:w-[65%] md:max-w-2xl overflow-hidden rounded-[24px] border border-slate-300 bg-slate-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <Image
              src="/f074717a-f8f6-45bd-af8b-eab85add238f_1080p_gif_30_1-1.gif"
              alt="SecondBrain abstract hero"
              width={1600}
              height={900}
              className="w-full bg-slate-300 object-contain aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/9] max-h-[360px] sm:max-h-[420px] md:max-h-[520px]"
              priority
            />
          </FadeIn>
        </section>

        <section className="bg-[#0f3b45] text-white py-12">
          <div className="section-shell flex min-h-[400px] flex-col justify-center space-y-10 py-8 md:min-h-[560px]">
            <FadeIn className="text-center space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Make better &amp; faster decisions
              </h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              {featureCards.map((card, idx) => (
                <FadeIn key={card.title} delay={idx * 0.06}>
                  <article className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_46px_rgba(0,0,0,0.32)]">
                    <div
                      className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${card.accent} p-4 text-left shadow-inner`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(255,255,255,0.4),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.32),transparent_40%)]" />
                      <div className="relative overflow-hidden rounded-lg border border-white/35 bg-white/15 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                        <Image
                          src={card.image}
                          alt={card.alt}
                          width={360}
                          height={210}
                          className="h-40 w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 text-center text-white">
                      <h3 className="text-base font-semibold">{card.title}</h3>
                      <p className="text-sm text-white/80">{card.body}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell space-y-16 py-16">
          <FadeIn className="text-center space-y-5 pt-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Why you should clone your expertise
            </h2>
            <p className="text-base text-[var(--text-secondary)]">
              Your knowledge, ready on demand.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn className={knowledgeCardClass}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">Stop repeating yourself</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Answer once. Reuse everywhere.
                </p>
              </div>
              <div className="rounded-2xl border border-[#eaded4] bg-[#f8f2eb] p-4 shadow-inner">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#d9cdc3]" />
                    <div className="flex-1 space-y-2">
                      <div className="w-20 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-[#6f5a4c] shadow-sm">
                        Ask
                      </div>
                      <div className="h-6 w-32 rounded-2xl bg-white/90 shadow-sm" />
                    </div>
                  </div>
                  <div className="flex items-start justify-end gap-3">
                    <div className="flex-1 space-y-2">
                      <div className="ml-auto w-24 rounded-2xl bg-[#f3e7dd] px-3 py-2 text-xs font-semibold text-[#8d5a3c] shadow-sm text-right">
                        Answer
                      </div>
                      <div className="ml-auto h-6 w-36 rounded-2xl bg-[#f3e7dd]/80 shadow-sm" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-[#d89162]" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((idx) => (
                      <div key={idx} className="rounded-xl border border-[#eaded4] bg-white/80 p-3 shadow-sm">
                        <div className="h-2 w-12 rounded-full bg-[#e7ded6]" />
                        <div className="mt-2 h-2 w-8 rounded-full bg-[#e1c8b6]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.04}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">See every stakeholder view</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Preview tone and impact.
                </p>
              </div>
              <div className="rounded-2xl border border-[#eaded4] bg-[#f8f2eb] p-4 shadow-inner">
                <div className="rounded-xl border border-[#eaded4] bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wide text-[#6f5a4c]">
                    <span className="rounded-full bg-[#f3e7dd] px-2 py-1">You</span>
                    <span className="rounded-full bg-[#f3e7dd] px-2 py-1">Team</span>
                    <span className="rounded-full bg-[#f3e7dd] px-2 py-1">Exec</span>
                  </div>
                  <svg viewBox="0 0 200 110" className="mt-4 h-20 w-full" fill="none">
                    <circle cx="100" cy="55" r="16" fill="#0f172a" />
                    {[
                      [30, 16],
                      [170, 16],
                      [30, 94],
                      [170, 94],
                      [100, 10],
                      [100, 100],
                    ].map(([x, y]) => (
                      <g key={`${x}-${y}`}>
                        <circle cx={x} cy={y} r="10" fill="#eaded4" />
                        <path d={`M100 55 L${x} ${y}`} stroke="#c2b2a6" strokeWidth="2" />
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.08}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">Right depth, every time</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Dial detail in seconds.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-[#eaded4] bg-[#f8f2eb] p-4 shadow-inner">
                <div className="rounded-xl border border-[#eaded4] bg-white p-4 shadow-sm">
                  <div className="grid grid-cols-3 gap-3 text-[10px] font-semibold uppercase tracking-wide text-[#6f5a4c]">
                    <div className="rounded-xl border border-[#eaded4] bg-white p-3 text-center shadow-sm">
                      Brief
                      <div className="mt-3 h-2 w-full rounded-full bg-[#f3e7dd]">
                        <div className="h-2 w-1/4 rounded-full bg-[#d89162]" />
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#d8bfae] bg-[#f3e7dd] p-3 text-center shadow-sm">
                      Standard
                      <div className="mt-3 h-2 w-full rounded-full bg-white/70">
                        <div className="h-2 w-2/3 rounded-full bg-[#c9825b]" />
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#eaded4] bg-white p-3 text-center shadow-sm">
                      Deep
                      <div className="mt-3 h-2 w-full rounded-full bg-[#f3e7dd]">
                        <div className="h-2 w-4/5 rounded-full bg-[#b96d4a]" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-full bg-[#efe4da] p-2">
                    <div className="h-2 w-1/2 rounded-full bg-[#c9825b]" />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.12}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">Clarity on demand</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Rewrite without losing intent.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-[#eaded4] bg-[#f8f2eb] p-4 shadow-inner">
                <div className="grid grid-cols-2 gap-3 text-[10px] font-semibold uppercase tracking-wide text-[#6f5a4c]">
                  <div className="rounded-xl border border-[#eaded4] bg-white p-4 text-center shadow-sm">
                    Before
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full rounded-full bg-[#f1e6dc]" />
                      <div className="h-2 w-4/5 rounded-full bg-[#f1e6dc]" />
                      <div className="h-2 w-3/5 rounded-full bg-[#f1e6dc]" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#d8bfae] bg-[#f3e7dd] p-4 text-center shadow-sm text-[#8d5a3c]">
                    After
                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full rounded-full bg-[#e1c8b6]" />
                      <div className="h-2 w-5/6 rounded-full bg-[#e1c8b6]" />
                      <div className="h-2 w-2/3 rounded-full bg-[#e1c8b6]" />
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#efe4da] p-2">
                  <div className="h-2 w-3/4 rounded-full bg-[#c9825b]" />
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.16}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">One voice, many styles</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Variations that still sound like you.
                </p>
              </div>
              <div className="rounded-2xl border border-[#eaded4] bg-[#f8f2eb] p-4 shadow-inner">
                <div className="rounded-xl border border-[#eaded4] bg-white p-4 shadow-sm">
                  <div className="grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((idx) => (
                      <div key={idx} className="rounded-2xl border border-[#eaded4] bg-[#f6eee6] p-4">
                        <div className="h-10 w-10 rounded-full bg-[#e1c8b6]" />
                        <div className="mt-3 space-y-2">
                          <div className="h-2 w-full rounded-full bg-[#e7ded6]" />
                          <div className="h-2 w-4/5 rounded-full bg-[#e7ded6]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-[#eaded4] bg-white p-4 shadow-sm">
                  <div className="inline-flex items-center rounded-full bg-[#f3e7dd] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#6f5a4c]">
                    Voice
                  </div>
                  <svg viewBox="0 0 200 60" className="mt-3 h-12 w-full text-[#c2b2a6]" fill="none">
                    <path
                      d="M10 40 C25 10, 45 10, 60 40 S95 70, 110 40 S145 10, 160 40 S185 70, 190 40"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="40" r="6" fill="#c9825b" />
                  </svg>
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.2}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">Keep context across every tool you use</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Context stays in sync.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-[#eaded4] bg-[#f8f2eb] p-4 shadow-inner">
                <div className="rounded-xl border border-[#eaded4] bg-white p-4 shadow-sm">
                  <div className="grid grid-cols-3 gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#6f5a4c]">
                    {["Mail", "Docs", "Chat"].map((label) => (
                      <div key={label} className="rounded-xl border border-[#eaded4] bg-[#f6eee6] p-3 text-center">
                        <div className="mx-auto h-8 w-8 rounded-2xl bg-[#e1c8b6]" />
                        <div className="mt-2">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-[#eaded4] bg-white p-4 shadow-sm">
                  <svg viewBox="0 0 200 90" className="h-16 w-full" fill="none">
                    <circle cx="100" cy="45" r="14" fill="#0f172a" />
                    {[30, 70, 130, 170].map((x, idx) => (
                      <g key={x}>
                        <circle cx={x} cy={idx % 2 ? 20 : 70} r="10" fill="#eaded4" />
                        <path
                          d={`M100 45 L${x} ${idx % 2 ? 20 : 70}`}
                          stroke="#c2b2a6"
                          strokeWidth="2"
                        />
                      </g>
                    ))}
                    <circle cx="130" cy="70" r="10" fill="#c9825b" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#d6cffc] py-12">
          <div className="section-shell flex min-h-[300px] flex-col justify-center space-y-8 py-8 text-[#0f0a1f] md:min-h-[380px]">
            <FadeIn className="text-center space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
Hear from early superhumans            </h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "I was answering the same onboarding questions 20 times a month. Now my clone does it, with links to the right docs. I got 6 hours back last week.",
                  name: "Sarah Chen",
                  title: "Head of Sales",
                },
                {
                  quote:
                    "Our new hires used to wait days for answers. Now they ask the clone and keep moving. Onboarding went from 3 weeks to 1.",
                  name: "Marcus Johnson",
                  title: "COO",
                },
              ].map((item, idx) => (
                <FadeIn key={item.name} delay={idx * 0.05}>
                  <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/60 bg-white px-8 py-6 text-[var(--text-primary)] shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                    <p className="text-base leading-relaxed text-[var(--text-primary)]">“{item.quote}”</p>
                    <div className="space-y-1 text-sm text-[var(--text-secondary)]">
                      <p className="font-semibold text-[var(--text-primary)]">{item.name}</p>
                      <p>{item.title}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f2eb] py-16">
          <div className="section-shell space-y-6 text-center text-[#0f172a]">
            <FadeIn className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Integrates with tools you use</h2>
              <p className="text-base text-slate-600">
                Add SecondBrain without breaking your stack. Keep answers in sync where work already happens.
              </p>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {integrations.map((integration, idx) => (
                <FadeIn key={integration.name} delay={idx * 0.03} className="h-full">
                  <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white px-6 py-6 text-center shadow-[0_14px_32px_rgba(0,0,0,0.06)]">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100">
                      <span className={`grid h-8 w-8 place-items-center rounded-xl font-semibold text-white ${integration.color}`}>
                        {integration.glyph}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[#0f172a]">{integration.name}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f2eb] py-18">
          <div className="section-shell space-y-10">
            <FadeIn className="relative overflow-hidden rounded-[24px] border border-[#ead8cb] bg-gradient-to-br from-[#e5a26f] via-[#d05b3b] to-[#b12a2a] px-8 py-16 text-center text-white shadow-[0_28px_70px_rgba(0,0,0,0.2)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.16),transparent_50%)]" />
              <div className="relative mx-auto max-w-3xl space-y-4">
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">How SecondBrain works</h2>
                <p className="text-base text-white/80">
                Ready to turn yourself into an enterprise-scale product? Join the exclusive community building transformational businesses.
</p>
                <form className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center" action="#cta">
                  <label className="sr-only" htmlFor="cta-email">
                    Work email
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full max-w-xs rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 shadow-sm outline-none transition focus:border-white/60 focus:ring-2 focus:ring-white/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-black/90 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get Early Access
                  </button>
                </form>
              </div>
            </FadeIn>

            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Connect your content",
                  body: "Upload writing, meeting notes, transcripts, or link live sources—SecondBrain indexes it all with citations.",
                },
                {
                  step: "02",
                  title: "Train and customize",
                  body: "Teach your clone tone, depth, and boundaries. Add notes on how you answer for different stakeholders.",
                },
                {
                  step: "03",
                  title: "Share everywhere",
                  body: "Deploy in Slack, email, docs, or chat so people can ask and get source-linked answers immediately.",
                },
              ].map((item, idx) => (
                <FadeIn key={item.step} delay={idx * 0.05}>
                  <div className="flex h-full flex-col gap-2 rounded-3xl border border-[#f1e3d6] bg-white px-6 py-6 text-left text-[#0f172a] shadow-[0_18px_40px_rgba(0,0,0,0.05)]">
                    <div className="text-sm font-semibold text-[#c03f2a]">{item.step}</div>
                    <div className="text-lg font-semibold">{item.title}</div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell space-y-10 py-18">
          <FadeIn className="text-center space-y-3 pt-2 pb-2">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              FAQs
            </h2>
          </FadeIn>
          <div className="space-y-3 pb-4">
            {[
              "What is SecondBrain?",
              "Is my data secure with SecondBrain?",
              "Do I need to install anything to use SecondBrain?",
            ].map((question, idx) => (
              <FadeIn key={question} delay={idx * 0.04}>
                <details className="group rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.03)]">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-[var(--text-primary)] list-none">
                    <span>{question}</span>
                    <span className="text-xl leading-none text-slate-500 transition group-open:rotate-180">
                      ˅
                    </span>
                  </summary>
                </details>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="cta" className="bg-[#0f3b45] text-white py-14">
          <div className="section-shell flex flex-col justify-center space-y-8 py-8 text-left">
            <FadeIn className="space-y-2">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Scale your expertise in every moment
              </h3>
            </FadeIn>
            <FadeIn>
              <form className="flex flex-col gap-3 sm:flex-row sm:items-center" action="#top">
                <label className="sr-only" htmlFor="cta-email">
                  Work email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full max-w-xs rounded-full border border-white/40 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/70 shadow-[0_10px_26px_rgba(0,0,0,0.2)] outline-none transition focus:border-white focus:ring-2 focus:ring-white/60"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6e4af9] via-[#7e70ff] to-[#5f5bff] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(105,79,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(105,79,255,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get Early Access
                </button>
              </form>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
