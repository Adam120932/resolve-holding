import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-[13px] font-medium tracking-[0.28em]">
          VOLTBOX
        </Link>
        <nav className="flex items-center gap-8 text-[13px] tracking-wide">
          <a href="/#solutions" className="text-black/70 transition-colors hover:text-black">
            Solutions
          </a>
          <a href="/#purpose" className="text-black/70 transition-colors hover:text-black">
            Purpose
          </a>
          <a
            href="mailto:hello@voltbox.lb"
            className="hidden border border-black px-4 py-1.5 text-black transition-colors hover:bg-black hover:text-white sm:inline-block"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
