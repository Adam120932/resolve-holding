import Link from "next/link";
import { Logo } from "@/components/logo";
import { SolutionsNavLink } from "@/components/solutions-nav-link";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6">
        <Link href="/" aria-label="Resolve Holding home" className="shrink-0 text-white">
          <Logo />
        </Link>
        <nav className="flex items-center gap-5 text-[13px] tracking-wide sm:gap-8">
          <SolutionsNavLink />
          <Link href="/#about" className="text-white/70 transition-colors hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
