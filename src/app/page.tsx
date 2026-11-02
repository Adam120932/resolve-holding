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

const label = "text-[0.8125rem] tracking-[0.32em] uppercase";

// Stagger index for CSS animations (see globals.css).
const d = (n: number) => ({ "--d": n }) as CSSProperties;

export default function Home() {
  return (
    <main className="flex-1 scroll-mt-[4.5rem]">
      {/* Hero */}
      <section className="relative wrap flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-20 sm:py-24">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="square"
          aria-hidden="true"
          className="hero-mark pointer-events-none absolute top-1/2 right-[clamp(1.5rem,4vw,4rem)] hidden h-[min(27vw,520px)] w-[min(27vw,520px)] -translate-y-1/2 text-white lg:block"
        >
          <path pathLength={1} d="M10 14C46 14 50 50 90 50" />
          <path pathLength={1} d="M10 50H90" />
          <path pathLength={1} d="M10 86C46 86 50 50 90 50" />
        </svg>

        <p className={`fade-in mb-8 text-white/60 ${label}`} style={d(0)}>
          Resolve Holding · Lebanon
        </p>
        <h1 className="max-w-[14ch] font-display font-extrabold text-[clamp(3rem,6.6vw,8rem)] leading-[0.98] tracking-[-0.035em]">
          <span className="rise">
            <span style={d(0)}>Technology,</span>
          </span>
          <span className="rise">
            <span style={d(1)}>built for Lebanon.</span>
          </span>
        </h1>
        <p
          className="fade-in mt-10 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl sm:leading-9"
          style={d(2)}
        >
          Resolve Holding is a privately owned group that develops and runs
          technology services for everyday life in Lebanon: power on the go,
          private internet access and AI automation, all built in-house.
        </p>
        <div className="fade-in mt-12 flex flex-wrap items-center gap-4" style={d(3)}>
          <a
            href="#solutions"
            className="inline-flex h-12 items-center gap-2 bg-white px-6 text-[0.875rem] tracking-[0.16em] text-black transition-opacity hover:opacity-80"
          >
            EXPLORE SOLUTIONS <span className="nudge" aria-hidden="true">↓</span>
          </a>
        </div>
        <ul className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-[0.8125rem] tracking-[0.22em]">
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

      <div className="h-px w-full bg-white/10" />

      {/* Solutions */}
      <section id="solutions" className="wrap scroll-mt-[4.5rem] py-28 sm:py-40">
        <div className="mb-20 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div data-reveal>
            <p className={`mb-3 text-white/60 ${label}`}>Solutions</p>
            <h2 className="max-w-[16ch] font-display font-extrabold text-balance text-[clamp(2.5rem,5.2vw,5.5rem)] leading-[1] tracking-[-0.03em]">
              Three solutions, one standard.
            </h2>
          </div>
          <p data-reveal style={d(1)} className="max-w-md text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
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
                className="card group flex h-full min-h-[28rem] flex-col gap-10 p-8 sm:p-10 xl:p-12 transition-colors duration-300 hover:text-black focus-visible:text-black"
              >
                <div className="flex items-center justify-between text-[0.8125rem] tracking-[0.22em] text-white/60 transition-colors duration-300 group-hover:text-black/60">
                  <SolutionIcon
                    slug={solution.slug}
                    className="card-icon h-9 w-9 text-white transition-colors duration-300 group-hover:text-black"
                  />
                  <span>{solution.status.toUpperCase()}</span>
                </div>
                <div>
                  <p className="mb-3 text-[0.8125rem] tracking-[0.22em] text-white/60 transition-colors duration-300 group-hover:text-black/60">
                    {String(i + 1).padStart(2, "0")} · {solution.category.toUpperCase()}
                  </p>
                  <h3 className="font-display font-extrabold text-[clamp(2.25rem,3.4vw,3.5rem)] leading-none tracking-[-0.03em]">
                    {solution.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-7 text-white/60 transition-colors duration-300 group-hover:text-black/70">
                    {solution.summary}
                  </p>
                </div>
                <span className="mt-auto text-[0.8125rem] tracking-[0.2em]">
                  LEARN MORE <span className="card-arrow">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-[4.5rem] bg-white text-black">
        <div className="wrap py-28 sm:py-40">
          <div data-reveal>
            <p className={`mb-6 text-black/60 ${label}`}>About</p>
            <h2 className="max-w-[18ch] font-display font-extrabold text-balance text-[clamp(2.5rem,5.2vw,5.5rem)] leading-[1] tracking-[-0.03em]">
              Built here, for the way Lebanon works.
            </h2>
          </div>
          <p data-reveal style={d(1)} className="mt-10 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl sm:leading-9">
            Resolve Holding is a privately owned company that brings practical
            technology to Lebanon. We build every solution ourselves, from the
            stations behind Voltbox to the software behind Cloak and
            Formula, so we control quality, security and support from end to
            end.
          </p>
          <ul className="mt-20 grid border-t border-black/10 md:grid-cols-3">
            {principles.map((principle, i) => (
              <li
                key={principle.title}
                data-reveal
                style={d(i)}
                className="border-b border-black/10 py-10 md:border-r md:px-10 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-[0.8125rem] tracking-[0.22em] text-black/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display font-bold text-[clamp(1.5rem,2.2vw,2.25rem)] leading-tight tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-black/60">
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
