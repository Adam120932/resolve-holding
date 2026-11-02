import Link from "next/link";
import { Logo } from "@/components/logo";
import { SolutionsNavLink } from "@/components/solutions-nav-link";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-3">
        <Link href="/" aria-label="Resolve Holding home" className="shrink-0 text-white">
          <Logo />
        </Link>
        <nav className="flex items-center gap-5 text-[0.9375rem] tracking-wide sm:gap-10">
          <SolutionsNavLink />
          <Link href="/#about" className="text-white/70 transition-colors hover:text-white">
            About
          </Link>
        </nav>
      </div>
      <span
        aria-hidden="true"
        className="progress-line absolute bottom-[-1px] left-0 h-px w-full bg-white/70"
      />
    </header>
  );
}
