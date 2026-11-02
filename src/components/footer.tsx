import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";
import { solutions } from "@/data/solutions";

const heading = "text-[0.8125rem] tracking-[0.32em] text-white/60";
const link = "text-[0.875rem] text-white/70 transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();
  const websites = solutions.filter((solution) => solution.website);

  return (
    <footer className="border-t border-white/10">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <Logo className="text-white" />
          <p className="text-[0.75rem] tracking-[0.32em] text-white/60">
            {site.tagline.toUpperCase()}
          </p>
        </div>
        <div>
          <p className={heading}>SOLUTIONS</p>
          <ul className="mt-4 flex flex-col gap-2">
            {solutions.map((solution) => (
              <li key={solution.slug}>
                <Link href={`/solutions/${solution.slug}`} className={link}>
                  {solution.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {websites.length > 0 && (
          <div>
            <p className={heading}>WEBSITES</p>
            <ul className="mt-4 flex flex-col gap-2">
              {websites.map((solution) => (
                <li key={solution.slug}>
                  <a href={solution.website!.url} className={link}>
                    {solution.website!.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <p className={heading}>COMPANY</p>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link href="/#about" className={link}>
                About
              </Link>
            </li>
            <li>
              <a href="#top" className={link}>
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-6 text-[0.8125rem] text-white/60">
          © {year} {site.name}. A privately owned company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
