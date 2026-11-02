import Link from "next/link";
import { notFound } from "next/navigation";
import { SolutionIcon } from "@/components/solution-icon";
import { SolutionSwitcher } from "@/components/solution-switcher";
import { getSolution, solutions } from "@/data/solutions";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.summary,
  };
}

const label = "text-[12px] tracking-[0.32em] uppercase";

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const current = solutions.findIndex((item) => item.slug === slug);
  const next = solutions[(current + 1) % solutions.length];
  const isLive = solution.status === "Live";

  return (
    <main className="flex-1 scroll-mt-16">
      <SolutionSwitcher current={solution.slug} />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-20 sm:pt-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[12px] tracking-[0.2em] text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                HOME
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/#solutions" className="transition-colors hover:text-white">
                SOLUTIONS
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">
              {solution.title.toUpperCase()}
            </li>
          </ol>
        </nav>
        <div className="mt-12 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/25 sm:h-14 sm:w-14">
            <SolutionIcon slug={solution.slug} className="h-6 w-6 sm:h-7 sm:w-7" />
          </span>
          <p className={`text-white/60 ${label}`}>
            {solution.category} · {solution.status}
          </p>
        </div>
        <h1 className="mt-6 font-display font-extrabold text-balance text-5xl tracking-tight sm:text-7xl">
          {solution.title}
        </h1>
        <p className="mt-6 text-[13px] tracking-[0.32em] text-white/80 uppercase">
          {solution.tagline}
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-8 text-white/60">
          {solution.description}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {solution.website && (
            <a
              href={solution.website.url}
              className="inline-flex h-11 items-center bg-white px-6 text-[13px] tracking-[0.16em] text-black transition-opacity hover:opacity-80"
            >
              VISIT {solution.website.label.toUpperCase()} ↗
            </a>
          )}
          <a
            href="#how-it-works"
            className={`inline-flex h-11 items-center px-6 text-[13px] tracking-[0.16em] transition-colors ${
              solution.website
                ? "border border-white hover:bg-white hover:text-black"
                : "bg-white text-black hover:opacity-80"
            }`}
          >
            {(solution.stepsLabel ?? "How it works").toUpperCase()} ↓
          </a>
        </div>
      </section>

      <div className="h-px w-full bg-white/10" />

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-6xl scroll-mt-32 px-6 py-20 sm:py-24"
      >
        <p className={`text-white/60 ${label}`}>
          {solution.stepsLabel ?? "How it works"}
        </p>
        <ol className="mt-10 grid border-t border-white/10 md:grid-cols-3">
          {solution.steps.map((step, i) => (
            <li
              key={step.title}
              className="border-b border-white/10 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <span className="text-[12px] tracking-[0.22em] text-white/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl tracking-tight">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/60">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* What's included + who it's for */}
      <section className="bg-white text-black">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-24 md:grid-cols-2">
          <div>
            <p className={`text-black/60 ${label}`}>What&apos;s included</p>
            <ul className="mt-8 border-t border-black/10">
              {solution.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 border-b border-black/10 py-4 text-base leading-7"
                >
                  <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-black" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`text-black/60 ${label}`}>Who it&apos;s for</p>
            <p className="mt-8 font-display font-semibold text-3xl leading-[1.2] tracking-tight">
              {solution.audience}
            </p>
          </div>
        </div>
      </section>

      {/* Good to know */}
      {solution.faq && (
        <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24">
          <p className={`text-white/60 ${label}`}>Good to know</p>
          <dl className="mt-10 grid border-t border-white/10 md:grid-cols-3">
            {solution.faq.map((item) => (
              <div
                key={item.question}
                className="border-b border-white/10 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <dt className="font-display text-xl font-bold tracking-tight">
                  {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-6 text-white/60">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Status and where to go next */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="flex flex-col gap-8 border border-white/10 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`text-white/60 ${label}`}>Status · {solution.status}</p>
            <p className="mt-4 font-display text-3xl font-bold tracking-tight">
              {solution.website
                ? `${solution.title} has its own home.`
                : isLive
                  ? `${solution.title} is available now.`
                  : `${solution.title} is ${solution.status.toLowerCase()}.`}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              {solution.website
                ? `Everything else about ${solution.title} continues on its own website.`
                : "More details will be shared here as development progresses."}
            </p>
          </div>
          {solution.website && (
            <a
              href={solution.website.url}
              className="inline-flex h-11 shrink-0 items-center self-start border border-white px-6 text-[13px] tracking-[0.16em] transition-colors hover:bg-white hover:text-black md:self-auto"
            >
              VISIT {solution.website.label.toUpperCase()} ↗
            </a>
          )}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10">
          <Link
            href="/#solutions"
            className="text-[13px] tracking-[0.16em] text-white/60 hover:text-white"
          >
            ← ALL SOLUTIONS
          </Link>
          <Link
            href={`/solutions/${next.slug}`}
            className="text-[13px] tracking-[0.16em] hover:underline"
          >
            NEXT · {next.title.toUpperCase()} →
          </Link>
        </div>
      </section>
    </main>
  );
}
