"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Header "Solutions" link, highlighted while browsing any solution page.
export function SolutionsNavLink() {
  const pathname = usePathname();
  const active = pathname.startsWith("/solutions");

  return (
    <Link
      href="/#solutions"
      aria-current={active ? "page" : undefined}
      className={`transition-colors ${
        active
          ? "text-white underline decoration-1 underline-offset-[6px]"
          : "text-white/70 hover:text-white"
      }`}
    >
      Solutions
    </Link>
  );
}
