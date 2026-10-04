import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] tracking-[0.28em]">VOLTBOX</p>
        <p className="text-[13px] text-black/50">Lebanon · Technology · Forthcoming</p>
        <Link href="/" className="text-[13px] text-black/70 hover:text-black">
          Back to top
        </Link>
      </div>
    </footer>
  );
}
