import Link from "next/link";
import { notFound } from "next/navigation";
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
  if (!solution) return { title: "Voltbox" };
  return {
    title: `${solution.title} — Voltbox`,
    description: solution.summary,
  };
}

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

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-20">
      <p className="text-[12px] tracking-[0.32em] text-black/45">
        {solution.index} · {solution.status}
      </p>
      <h1 className="mt-6 font-serif text-5xl tracking-tight sm:text-7xl">
        {solution.title}
      </h1>
      <p className="mt-10 max-w-xl text-lg leading-8 text-black/60">
        {solution.summary}
      </p>
      <div className="mt-16 max-w-xl border-t border-black/10 pt-8 text-sm leading-7 text-black/50">
        Full specification, architecture, and rollout notes will be published
        with the Voltbox purpose.
      </div>
      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-10">
        <Link
          href="/#solutions"
          className="text-[13px] tracking-[0.16em] text-black/60 hover:text-black"
        >
          ← ALL SOLUTIONS
        </Link>
        <Link
          href={`/solutions/${next.slug}`}
          className="text-[13px] tracking-[0.16em] hover:underline"
        >
          NEXT · {next.title} →
        </Link>
      </div>
    </main>
  );
}
