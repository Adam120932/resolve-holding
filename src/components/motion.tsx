"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Site-wide motion helpers (no background animation; the page background is
// plain black):
// - scroll-linked CSS variables (--progress, --sy) used by the header
//   progress bar and the hero mark's parallax;
// - reveal-on-scroll for any element with data-reveal.

export function Motion() {
  const pathname = usePathname();

  // Scroll variables.
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      root.style.setProperty("--progress", progress.toFixed(4));
      root.style.setProperty("--sy", String(Math.round(window.scrollY)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  // Reveal on scroll; re-run on every page change.
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in])"),
    );
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.setAttribute("data-in", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    // Recompute page length for the progress bar on the new page.
    window.dispatchEvent(new Event("scroll"));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
