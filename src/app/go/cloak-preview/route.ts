// Server-side redirect to the Cloak early-access link.
//
// The full link contains a join code, so it is never written into the code,
// the HTML or the browser bundle. It lives only in the CLOAK_PREVIEW_URL
// environment variable (set in Vercel → Project → Settings → Environment
// Variables) and is read here, on the server, when someone clicks the button.

export const dynamic = "force-dynamic";

const noStore = {
  "Cache-Control": "no-store, max-age=0",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow",
};

export async function GET(request: Request) {
  const target = process.env.CLOAK_PREVIEW_URL;

  let url: URL | null = null;
  try {
    url = target ? new URL(target) : null;
  } catch {
    url = null;
  }

  // Only ever send people to an https address; otherwise back to the Cloak page.
  if (!url || url.protocol !== "https:") {
    return new Response(null, {
      status: 307,
      headers: { ...noStore, Location: new URL("/solutions/cloak", request.url).toString() },
    });
  }

  return new Response(null, {
    status: 307,
    headers: { ...noStore, Location: url.toString() },
  });
}
