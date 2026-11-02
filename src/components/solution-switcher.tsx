import Link from "next/link";
import { SolutionIcon } from "@/components/solution-icon";
import { solutions } from "@/data/solutions";

// Sticks under the header on every solution page, so visitors always see
// which solution they're on and can jump to the others in one tap.
export function SolutionSwitcher({ current }: { current: string }) {
  return (
    <nav
      aria-label="Solutions"
      className="sticky top-[4.5rem] z-10 border-b border-white/10 bg-black/90 backdrop-blur-md"
    >
      <div className="wrap flex items-stretch overflow-x-auto">
        <span className="hidden shrink-0 items-center pr-6 text-[0.75rem] tracking-[0.28em] text-white/60 md:flex">
          SOLUTIONS
        </span>
        <ul className="flex items-stretch gap-1 sm:gap-2">
          {solutions.map((solution) => {
            const active = solution.slug === current;
            return (
              <li key={solution.slug} className="flex">
                <Link
                  href={`/solutions/${solution.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`-mb-px flex items-center gap-2 border-b-2 px-3 py-3.5 text-[0.875rem] transition-colors ${
                    active
                      ? "border-white font-medium text-white"
                      : "border-transparent text-white/60 hover:text-white"
                  }`}
                >
                  <SolutionIcon slug={solution.slug} className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap sm:hidden">{solution.shortName}</span>
                  <span className="hidden whitespace-nowrap sm:inline">{solution.title}</span>
                  <span className="hidden whitespace-nowrap text-white/60 lg:inline">
                    · {solution.category}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
