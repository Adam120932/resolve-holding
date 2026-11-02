import type { CSSProperties } from "react";
import Link from "next/link";
import { SolutionIcon } from "@/components/solution-icon";
import { solutions } from "@/data/solutions";

const principles = [
  {
    title: "Built in-house",
    body: "Every product is designed and developed by our own team. Nothing is white-labelled or resold.",
  },
  {
    title: "Made for local conditions",
    body: "Designed around real life in Lebanon, including unpredictable power and uneven connectivity.",
  },
  {
    title: "One group, one standard",
    body: "Voltbox, Cloak and Formula share the same commitment to reliability, privacy and support.",
  },
];

const label = "text-[12px] tracking-[0.32em] uppercase";

// Stagger index for CSS animations (see globals.css).
const d = (n: number) => ({ "--d": n }) as CSSProperties;

const tickerWords = [
  ...solutions.map((s) => s.title),
  "Built in Lebanon",
  "Built in-house",
];

export default function Home() {
  return (
    <main className="flex-1 scroll-mt-16">
      {/* Hero */}
      <section className="relative mx-auto w-full max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="square"
          aria-hidden="true"
          className="hero-mark pointer-events-none absolute top-24 right-6 hidden h-[360px] w-[360px] text-white lg:block"
        >
          <path pathLength={1} d="M10 14C46 14 50 50 90 50" />
          <path pathLength={1} d="M10 50H90" />
          <path pathLength={1} d="M10 86C46 86 50 50 90 50" />
        </svg>

        <p className={`fade-in mb-8 text-white/60 ${label}`} style={d(0)}>
          Resolve Holding · Lebanon
        </p>
        <h1 className="max-w-4xl font-display font-extrabold text-balance text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="rise">
            <span style={d(0)}>Technology,</span>
          </span>
          <span className="rise">
            <span style={d(1)}>built for Lebanon.</span>
          </span>
        </h1>
        <p
          className="fade-in mt-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg"
          style={d(2)}
        >
          Resolve Holding is a privately owned group that develops and runs
          technology services for everyday life in Lebanon: power on the go,
          private internet access and AI automation, all built in-house.
        </p>
        <div className="fade-in mt-12 flex flex-wrap items-center gap-4" style={d(3)}>
          <a
            href="#solutions"
            className="inline-flex h-11 items-center gap-2 bg-white px-6 text-[13px] tracking-[0.16em] text-black transition-opacity hover:opacity-80"
          >
            EXPLORE SOLUTIONS <span className="nudge" aria-hidden="true">↓</span>
          </a>
        </div>
        <ul className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-[12px] tracking-[0.22em]">
          {solutions.map((solution, i) => (
            <li key={solution.slug} className="fade-in" style={d(4 + i)}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="inline-flex items-center gap-2.5 text-white/60 transition-colors hover:text-white"
              >
                <SolutionIcon slug={solution.slug} className="h-4 w-4 text-white" />
                {solution.category.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Ticker */}
      <div
        className="ticker-wrap overflow-hidden border-y border-white/10 bg-black/40 py-5 backdrop-blur-[2px]"
        aria-hidden="true"
      >
        <div className="ticker">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {[...tickerWords, ...tickerWords].map((word, i) => (
                <li
                  key={`${copy}-${i}`}
                  className="flex items-center gap-10 pr-10 font-display text-2xl font-extrabold tracking-tight whitespace-nowrap text-white/80 sm:text-3xl"
                >
                  {word}
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={12}
                    strokeLinecap="square"
                    className="h-5 w-5 shrink-0 text-white/40"
                  >
                    <path d="M10 14C46 14 50 50 90 50M10 50H90M10 86C46 86 50 50 90 50" />
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <section id="solutions" className="mx-auto w-full max-w-6xl scroll-mt-16 px-6 py-24">
        <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div data-reveal>
            <p className={`mb-3 text-white/60 ${label}`}>Solutions</p>
            <h2 className="font-display font-extrabold text-balance text-4xl tracking-tight sm:text-5xl">
              Three solutions, one standard.
            </h2>
          </div>
          <p data-reveal style={d(1)} className="max-w-sm text-sm leading-6 text-white/60">
            Each solution is designed, built and run by our own team. All three
            are currently in development.
          </p>
        </div>

        <ul className="grid border-t border-white/10 bg-black/50 backdrop-blur-[2px] lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <li
              key={solution.slug}
              data-reveal
              style={d(i)}
              className="border-b border-white/10 lg:border-r lg:last:border-r-0"
            >
              <Link
                href={`/solutions/${solution.slug}`}
                className="card group flex h-full flex-col gap-8 p-8 transition-colors duration-300 hover:text-black focus-visible:text-black"
              >
                <div className="flex items-center justify-between text-[12px] tracking-[0.22em] text-white/60 transition-colors duration-300 group-hover:text-black/60">
                  <SolutionIcon
                    slug={solution.slug}
                    className="card-icon h-7 w-7 text-white transition-colors duration-300 group-hover:text-black"
                  />
                  <span>{solution.status.toUpperCase()}</span>
                </div>
                <div>
                  <p className="mb-3 text-[12px] tracking-[0.22em] text-white/60 transition-colors duration-300 group-hover:text-black/60">
                    {String(i + 1).padStart(2, "0")} · {solution.category.toUpperCase()}
                  </p>
                  <h3 className="font-display font-bold text-3xl tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/60 transition-colors duration-300 group-hover:text-black/70">
                    {solution.summary}
                  </p>
                </div>
                <span className="mt-auto text-[12px] tracking-[0.2em]">
                  LEARN MORE <span className="card-arrow">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-16 bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div data-reveal>
            <p className={`mb-6 text-black/60 ${label}`}>About</p>
            <h2 className="max-w-3xl font-display font-extrabold text-balance text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              Built here, for the way Lebanon works.
            </h2>
          </div>
          <p data-reveal style={d(1)} className="mt-8 max-w-2xl text-base leading-7 text-black/60">
            Resolve Holding is a privately owned company that brings practical
            technology to Lebanon. We build every solution ourselves, from the
            stations behind Voltbox to the software behind Cloak and
            Formula, so we control quality, security and support from end to
            end.
          </p>
          <ul className="mt-16 grid border-t border-black/10 md:grid-cols-3">
            {principles.map((principle, i) => (
              <li
                key={principle.title}
                data-reveal
                style={d(i)}
                className="border-b border-black/10 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-[12px] tracking-[0.22em] text-black/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display font-bold text-2xl tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
