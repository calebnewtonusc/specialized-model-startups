"use client";

import Nav from "@/components/nav";
import ModelCard from "@/components/model-card";
import { models } from "@/lib/models";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const ACCENT = "#6366F1";

function SectionRule({ label }: { label: string }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal flex items-center gap-6 mb-14">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

function ThesisCard({
  number,
  title,
  body,
  index,
}: {
  number: string;
  title: string;
  body: string;
  index: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="reveal-scale border border-[#f0f0f0] rounded-xl p-6 bg-white"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <span
          className="text-xs font-mono font-bold tracking-widest shrink-0 mt-0.5"
          style={{ color: `${ACCENT}60` }}
        >
          {number}
        </span>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  stat,
  subtitle,
  index,
}: {
  stat: string;
  subtitle: string;
  index: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="reveal-scale border border-[#f0f0f0] rounded-xl p-6 bg-white text-center"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <p className="serif font-semibold text-xl text-gray-900 mb-1">{stat}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
}

function ThesisSection() {
  const headingRef = useScrollReveal();
  return (
    <section id="thesis" className="px-6 pb-24 pt-8">
      <div className="max-w-4xl mx-auto">
        <SectionRule label="The Thesis" />

        <div ref={headingRef} className="reveal mb-10">
          <h2 className="serif font-semibold text-3xl sm:text-4xl text-gray-900 leading-snug">
            When three things align,
            <br />
            scaffolding loses.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <ThesisCard
            number="01"
            title="Expert corpus"
            body="Domain knowledge encoded by practitioners, not scraped documentation. The training data is the moat."
            index={0}
          />
          <ThesisCard
            number="02"
            title="Verifiable reward"
            body="The system scores itself from reality: execution passes, CVEs drop, score improves. No human in the loop needed."
            index={1}
          />
          <ThesisCard
            number="03"
            title="General model failure"
            body="GPT-4 gives the right answer 60% of the time. That's not good enough. In production, 60% accuracy is 40% failure."
            index={2}
          />
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const headingRef = useScrollReveal();
  return (
    <section id="portfolio" className="px-6 pb-24 pt-8">
      <div className="max-w-4xl mx-auto">
        <SectionRule label="The Portfolio" />

        <div ref={headingRef} className="reveal mb-10">
          <h2 className="serif font-semibold text-3xl sm:text-4xl text-gray-900 mb-3">
            16 specialist models in training.
          </h2>
          <p className="text-base text-gray-400 max-w-xl leading-relaxed">
            Each model targets a domain where the gap between &ldquo;good
            enough&rdquo; and &ldquo;actually works&rdquo; costs millions.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {models.map((model, i) => (
            <ModelCard key={model.id} model={model} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackSection() {
  const headingRef = useScrollReveal();
  return (
    <section id="stack" className="px-6 pb-24 pt-8">
      <div className="max-w-4xl mx-auto">
        <SectionRule label="The Stack" />

        <div ref={headingRef} className="reveal mb-10">
          <h2 className="serif font-semibold text-3xl sm:text-4xl text-gray-900">
            One training infrastructure.
            <br />
            16 specialists.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard stat="18× NVIDIA A6000" subtitle="864GB total VRAM" index={0} />
          <StatCard stat="Qwen2.5-7B" subtitle="Base model, LoRA rank 64" index={1} />
          <StatCard stat="3-Stage Pipeline" subtitle="SFT → RL → DPO, ZeRO-3" index={2} />
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const subRef = useScrollReveal();
  const bodyRef = useScrollReveal();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(${ACCENT}08 1px, transparent 1px), linear-gradient(90deg, ${ACCENT}08 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-4xl mx-auto w-full">
        {/* Label */}
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em] mb-6 animate-fade-up delay-0"
          style={{ color: `${ACCENT}80` }}
        >
          Caleb Newton · USC · 2026
        </p>

        {/* Main heading */}
        <h1
          className="font-semibold leading-[1.05] tracking-tight mb-6 animate-fade-up delay-1"
          style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)" }}
        >
          Specialist{" "}
          <span className="serif" style={{ color: ACCENT }}>
            AI
          </span>
        </h1>

        {/* Subhead */}
        <p
          ref={subRef}
          className="reveal text-xl sm:text-2xl font-medium text-gray-700 mb-6 max-w-xl leading-snug"
        >
          16 trained specialists.
          <br />
          One unfair advantage.
        </p>

        {/* Body */}
        <p
          ref={bodyRef}
          className="reveal text-base text-gray-400 max-w-lg leading-relaxed"
        >
          General models are smart. Specialist models win. Each model below is
          trained on expert knowledge that doesn&apos;t exist anywhere else —
          then verified against real execution, not vibes.
        </p>

        {/* Scroll cue */}
        <div className="mt-16 flex items-center gap-3 animate-fade-up delay-4">
          <a
            href="#thesis"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors"
          >
            Read the thesis
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] overflow-x-hidden">
      <Nav />

      <HeroSection />
      <ThesisSection />
      <PortfolioSection />
      <StackSection />

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-800">Specialist AI</p>
            <p className="text-xs text-gray-400">
              Built by Caleb Newton · USC · 2026
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a
              href="https://github.com/calebnewtonusc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-700 transition-colors font-medium"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
              calebnewtonusc
            </a>
            <a href="#home" className="hover:text-gray-700 transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
