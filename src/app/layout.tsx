import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Motion } from "@/components/motion";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Archivo is the typeface of the Voltbox wordmark; used for all titles.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <head>
        {/* Marks the page as scripted before paint, so reveal animations
            only hide content when they can also show it again. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-black text-white">
        <Motion />
        <Header />
        <div className="relative z-[1] flex flex-1 flex-col">{children}</div>
        <div className="relative z-[1]">
          <Footer />
        </div>
        {/* Vercel Web Analytics: cookieless visitor counts, shown in the Vercel dashboard. */}
        <Analytics />
      </body>
    </html>
  );
}
