"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Site-wide motion layer:
// - a fixed canvas behind the page that draws the Resolve mark's idea at
//   full scale: many faint lines that drift and converge as you scroll down,
//   with a few bright pulses travelling along them toward the meeting point;
// - scroll-linked CSS variables (--progress, --sy) used by the header
//   progress bar and hero parallax;
// - reveal-on-scroll for any element with data-reveal.
// Everything settles to a still picture when the visitor prefers reduced motion.

const LINES = 17;

export function Motion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  // Background canvas + scroll variables.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let progress = 0; // 0 at top, 1 at bottom of the page
    let target = 0;
    let mouseY = 0.5;
    let mouseYTarget = 0.5;
    let raf = 0;
    let running = true;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const readScroll = () => {
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      target = Math.min(1, Math.max(0, window.scrollY / max));
      root.style.setProperty("--progress", target.toFixed(4));
      root.style.setProperty("--sy", String(Math.round(window.scrollY)));
    };

    const onPointer = (e: PointerEvent) => {
      mouseYTarget = e.clientY / Math.max(1, h);
    };

    // Point on a cubic Bezier.
    const bez = (a: number, b: number, c: number, d: number, t: number) => {
      const u = 1 - t;
      return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
    };

    const draw = (time: number) => {
      // Ease toward the real scroll position so the lines glide.
      progress += (target - progress) * (reduce ? 1 : 0.08);
      mouseY += (mouseYTarget - mouseY) * (reduce ? 1 : 0.05);

      ctx.clearRect(0, 0, w, h);

      const spread = 1 - progress * 0.8; // lines gather as you scroll
      const cx = w * 1.02;
      const cy = h * (0.5 + (mouseY - 0.5) * 0.12);
      const sx = -w * 0.04;
      const t = reduce ? 0 : time * 0.00025;

      for (let i = 0; i < LINES; i++) {
        const k = i / (LINES - 1) - 0.5; // -0.5 .. 0.5
        const y0 = h * 0.5 + k * h * 1.5 * spread;
        const wave = Math.sin(t + i * 0.7) * 14 * spread;
        const c1x = w * 0.42;
        const c1y = y0 + wave;
        const c2x = w * 0.62;
        const c2y = cy + k * h * 0.08 * spread - wave * 0.5;

        const main = i === 0 || i === (LINES - 1) / 2 || i === LINES - 1;
        ctx.beginPath();
        ctx.moveTo(sx, y0);
        ctx.bezierCurveTo(c1x, c1y, c2x, c2y, cx, cy);
        ctx.lineWidth = main ? 1.6 : 1;
        ctx.strokeStyle = main
          ? `rgba(255,255,255,${0.14 + progress * 0.08})`
          : `rgba(255,255,255,${0.05 + progress * 0.04})`;
        ctx.stroke();

        // Pulses that travel toward the meeting point.
        if (!reduce && i % 4 === 0) {
          const p = (time * 0.00008 + i * 0.137) % 1;
          const px = bez(sx, c1x, c2x, cx, p);
          const py = bez(y0, c1y, c2y, cy, p);
          const g = ctx.createRadialGradient(px, py, 0, px, py, 12);
          g.addColorStop(0, "rgba(255,255,255,0.5)");
          g.addColorStop(0.35, "rgba(255,255,255,0.12)");
          g.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = g;
          ctx.fillRect(px - 12, py - 12, 24, 24);
        }
      }

      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    const redrawStill = () => draw(0);

    resize();
    readScroll();
    progress = target;

    const onResize = () => {
      resize();
      readScroll();
      if (reduce) redrawStill();
    };
    const onScroll = () => {
      readScroll();
      if (reduce) redrawStill();
    };
    const onVisibility = () => {
      if (reduce) return;
      cancelAnimationFrame(raf);
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    if (reduce) redrawStill();
    else raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Reveal on scroll; re-run on every page change.
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in])"));
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

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
