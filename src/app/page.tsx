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
    body: "Your AI clone remembers everything. Your mind, your voice, your rules.",
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
    <div className="bg-[#fcfaf7] text-[var(--text-primary)]">
      <Nav />

      <main className="space-y-0 pb-0">
        <section id="top" className="section-shell space-y-12 pt-20 pb-16 text-center">
          <FadeIn className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-[#0c172a]">SecondBrain.</p>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Your AI clone answers for you
              </h1>
            </div>
            <p className="mx-auto max-w-2xl text-base text-[var(--text-secondary)]">
            Train it on your data. Get questions answered without repeating yourself.
            </p>
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
              AI plus an understanding of how you think, for every question you&apos;d answer.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn className={knowledgeCardClass}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">Stop repeating yourself</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Eliminate hours spent re-explaining the same context, so you&apos;re team is never stuck.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-inner">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[#0f172a]">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    Clone briefing ready
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[#0f172a]">Real-time</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center text-[13px] text-slate-700">
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 shadow-sm">
                    <p className="font-semibold text-[#0f172a]">Emails</p>
                    <p className="text-[11px] text-slate-500">Threads + links</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 shadow-sm">
                    <p className="font-semibold text-[#0f172a]">Transcripts</p>
                    <p className="text-[11px] text-slate-500">Calls + meetings</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-4 shadow-sm">
                    <p className="font-semibold text-[#0f172a]">Docs</p>
                    <p className="text-[11px] text-slate-500">Decisions + memos</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.04}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">
                  You can see your answer through every stakeholder&apos;s eyes
                </h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  See how your response might land with different people and give context to refine it.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-inner">
                <div className="text-sm font-semibold text-[#0f172a]">Stakeholder views</div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  {["Team", "Manager", "Client", "Executive", "New hire", "Partner"].map((label) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span>{label}</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      </div>
                      <p className="mt-1 text-[11px] text-slate-500">Tone + clarity check</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.08}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">Your answer fits the moment</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Because every question needs different depth, SecondBrain helps you find the right level of detail for every asker.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-inner">
                <div className="grid grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
                  {[
                    { label: "Quick", pills: ["Summary", "Brief", "Fast"] },
                    { label: "Technical", pills: ["Deep dive", "Complete", "Thorough"] },
                    { label: "Strategic", pills: ["Executive", "Concise", "Essential"] },
                  ].map((block) => (
                    <div key={block.label} className="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
                      <div className="text-[11px] uppercase tracking-wide text-slate-400">{block.label}</div>
                      <div className="flex flex-wrap gap-1">
                        {block.pills.map((pill) => (
                          <span key={pill} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700">
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-900 text-white text-[10px]">✎</span>
                    Adjust for the asker
                  </div>
                  <p className="text-sm text-slate-700">
                    &quot;Pricing starts at $50/seat, scales with usage. Let me tailor the detail based on how you&apos;ll use it.&quot;
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    {["Add context", "Simplify", "Add examples", "Cite sources", "Translate"].map((action) => (
                      <span
                        key={action}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 shadow-sm"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.12}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">AI adapts your answer for clarity</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Rephrase responses to keep your intent while adding the right level of detail, so every answer lands clearly.
                </p>
                <p className="text-sm font-semibold text-[#0f172a]">
                  Choose how detailed to make the answer and keep moving—no more re-explaining.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>Clarity + intent aligned</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                    <div className="text-xs font-semibold text-slate-500">Before</div>
                    <div className="mt-2 h-14 rounded-lg bg-slate-100" />
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-3 py-3 shadow-sm">
                    <div className="text-xs font-semibold text-emerald-700">After</div>
                    <div className="mt-2 h-14 rounded-lg bg-emerald-100" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  {["Clarity pass", "Detail match", "Source check"].map((pill) => (
                    <span key={pill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 shadow-sm">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.16}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">Get instant variations without losing your voice</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  Pick response styles and keep the core intact. SecondBrain refines context while staying true to what you&apos;d actually say.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-inner">
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  {["Friendly + brief", "Direct + structured", "Executive summary", "Technical detail"].map((style) => (
                    <div
                      key={style}
                      className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span>{style}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn className={knowledgeCardClass} delay={0.2}>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0f172a]">Keep context across every tool you use</h3>
                <p className="text-[15px] text-[var(--text-secondary)]">
                  SecondBrain remembers your team&apos;s decisions, priorities, and history wherever questions come in—Slack, email, docs, and beyond.
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-inner">
                <div className="grid grid-cols-3 gap-2 text-sm font-semibold text-[#0f172a]">
                  {["Slack", "Gmail", "Notion", "Docs", "Linear", "Jira"].map((tool) => (
                    <div key={tool} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center shadow-sm">
                      {tool}
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-500 text-[10px] text-white">✓</span>
                  History + priorities synced
                </div>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>SecondBrain brings your past decisions into every tool, so you don&apos;t restart context each time someone asks.</p>
                  <p>Consistent answers, consistent sources, everywhere you&apos;re asked.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#d6cffc] py-12">
          <div className="section-shell flex min-h-[300px] flex-col justify-center space-y-8 py-8 text-[#0f0a1f] md:min-h-[380px]">
            <FadeIn className="text-center space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What teams say
              </h2>
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

        <section className="bg-[#f7f3ea] py-16">
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

        <section className="bg-[#fcf6ef] py-18">
          <div className="section-shell space-y-10">
            <FadeIn className="relative overflow-hidden rounded-[28px] border border-[#f1e3d6] bg-gradient-to-br from-[#ffdec5] via-[#ffb48f] to-[#f15a3c] px-8 py-16 text-center text-white shadow-[0_28px_70px_rgba(0,0,0,0.12)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.2),transparent_38%)]" />
              <div className="relative mx-auto max-w-3xl space-y-4">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-white/15 text-lg font-semibold">
                  SB
                </div>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">How SecondBrain works</h2>
                <p className="text-base text-white/85">
                  Connect your sources, train your AI clone, and share it wherever questions happen.
                </p>
                <div className="flex justify-center pt-2">
                  <a
                    href="#cta"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-[#c03f2a] shadow-[0_16px_34px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get Early Access
                  </a>
                </div>
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
              "How is SecondBrain part of the Superhuman suite?",
              "How is SecondBrain different from other writing tools?",
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
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    SecondBrain delivers AI writing assistance across your apps and devices, keeping your work secure and
                    polished from draft to send.
                  </p>
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
              <p className="max-w-3xl text-base text-white/80">
              SecondBrain clones your thinking so your team gets answers instantly, and you move faster without the interruptions.
              </p>
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
