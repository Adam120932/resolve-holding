import Link from "next/link";
import { solutions } from "@/data/solutions";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="mb-8 text-[12px] tracking-[0.32em] text-black/45">
          LEBANON
        </p>
        <h1 className="max-w-4xl font-serif text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Technical solutions,
          <br />
          held in one place.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-black/60 sm:text-lg">
          Voltbox is a host for the systems that will reshape how the country
          works — energy, civic life, identity, logistics, knowledge, and care.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#solutions"
            className="inline-flex h-11 items-center bg-black px-6 text-[13px] tracking-[0.16em] text-white transition-opacity hover:opacity-80"
          >
            VIEW SOLUTIONS
          </a>
          <a
            href="#purpose"
            className="inline-flex h-11 items-center border border-black px-6 text-[13px] tracking-[0.16em] transition-colors hover:bg-black hover:text-white"
          >
            PURPOSE
          </a>
        </div>
      </section>

      <div className="h-px w-full bg-black/10" />

      <section id="solutions" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[12px] tracking-[0.32em] text-black/45">
              00 — INDEX
            </p>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              Solutions
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/50">
            Each entry is a living brief. Details will land as the work is
            named.
          </p>
        </div>

        <ul className="grid border-t border-black/10 sm:grid-cols-2">
          {solutions.map((solution) => (
            <li
              key={solution.slug}
              className="border-b border-black/10 sm:odd:border-r"
            >
              <Link
                href={`/solutions/${solution.slug}`}
                className="group flex h-full flex-col gap-8 p-8 transition-colors hover:bg-black hover:text-white"
              >
                <div className="flex items-baseline justify-between text-[12px] tracking-[0.22em] text-black/40 group-hover:text-white/50">
                  <span>{solution.index}</span>
                  <span>{solution.status}</span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-black/55 group-hover:text-white/70">
                    {solution.summary}
                  </p>
                </div>
                <span className="mt-auto text-[12px] tracking-[0.2em]">
                  OPEN →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="purpose" className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="mb-6 text-[12px] tracking-[0.32em] text-white/40">
            PURPOSE
          </p>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            The brief is not public yet.
          </h2>
          <p className="mt-8 max-w-lg text-base leading-7 text-white/55">
            This site exists to hold the work as it takes form. The mission,
            partners, and launch sequence will be published here when they are
            ready.
          </p>
        </div>
      </section>
    </main>
  );
}
