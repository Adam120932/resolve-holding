export type Step = { title: string; body: string };
export type Faq = { question: string; answer: string };

export type Solution = {
  slug: string;
  shortName: string;
  index: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  description: string;
  steps: Step[];
  // Heading above the steps (defaults to "How it works").
  stepsLabel?: string;
  features: string[];
  audience: string;
  status: "In development" | "Coming soon" | "Live";
  // The solution's own website, once it has one.
  website?: { label: string; url: string };
  faq?: Faq[];
};

export const solutions: Solution[] = [
  {
    slug: "charge",
    shortName: "Voltbox",
    index: "01",
    title: "Voltbox",
    category: "Energy",
    tagline: "Rent · Charge · Return",
    summary:
      "Power bank charging stations. Rent a charged power bank, use it on the go, and return it at any Voltbox station.",
    description:
      "A dead phone shouldn't stop your day. Voltbox stations hold fully charged power banks in everyday places, so you can grab one in seconds, keep moving, and drop it back at any station when you're done.",
    stepsLabel: "How our stations work",
    steps: [
      {
        title: "Rent",
        body: "Find a Voltbox station, scan the code, and a fully charged power bank is released.",
      },
      {
        title: "Charge",
        body: "Take it with you and charge your phone while you get on with your day.",
      },
      {
        title: "Return",
        body: "Drop it back at any Voltbox station when you're done.",
      },
    ],
    features: [
      "Rent and return at any Voltbox station",
      "Charge on the go, with no need to wait by a socket",
      "Useful during power cuts and long days out",
      "Stations placed in busy, everyday locations",
    ],
    audience:
      "For anyone on the move who needs their phone charged without waiting by a socket.",
    status: "In development",
    website: { label: "voltboxcharge.com", url: "https://voltboxcharge.com" },
    faq: [
      {
        question: "Do I have to return it to the same station?",
        answer: "No. You can return the power bank to any Voltbox station.",
      },
      {
        question: "What do I need to rent one?",
        answer: "Your phone, to scan the code on the station.",
      },
      {
        question: "Where are the stations, and how much does it cost?",
        answer:
          "Station locations, pricing and rental times will be published on voltboxcharge.com.",
      },
    ],
  },
  {
    slug: "cloak",
    shortName: "Cloak",
    index: "02",
    title: "Cloak",
    category: "Security & Privacy",
    tagline: "Your connection, kept private.",
    summary:
      "A private VPN that encrypts your connection and keeps your online activity yours, at home, at work or on public Wi-Fi.",
    description:
      "Cloak is a VPN built by our own team to protect your connection on any network. Your traffic travels through an encrypted tunnel, so what you do online stays between you and the sites you visit.",
    steps: [
      {
        title: "Connect",
        body: "Open the app and connect with a single tap.",
      },
      {
        title: "Encrypt",
        body: "Your traffic travels through an encrypted tunnel, hidden from anyone else on the network.",
      },
      {
        title: "Browse",
        body: "Use the internet as usual: privately and securely, wherever you are.",
      },
    ],
    features: [
      "Strong encryption for all your traffic",
      "Protection on public and shared Wi-Fi",
      "A clear, published privacy policy",
      "Designed for individuals and businesses",
    ],
    audience:
      "For people who value their privacy, and for businesses that need secure connections for their teams.",
    status: "In development",
    website: { label: "thecloakvpn.com", url: "https://thecloakvpn.com" },
  },
  {
    slug: "ai",
    shortName: "Formula",
    index: "03",
    title: "Formula",
    category: "AI & Automation",
    tagline: "Automation, on demand.",
    summary:
      "Custom AI automations for businesses, delivered through one simple API, from revenue reporting to everyday operations.",
    description:
      "Formula is developed entirely in-house. It builds automations around a business, then gives full and easy access to them through a single API, so the work runs itself and the business stays in control.",
    steps: [
      {
        title: "Define",
        body: "Choose what to automate: revenue tracking, reporting, customer follow-ups and more.",
      },
      {
        title: "Build",
        body: "Automations are built and tuned around the business's data and the way it works.",
      },
      {
        title: "Connect",
        body: "Everything is accessed through the Formula API, with full control over how and when it runs.",
      },
    ],
    features: [
      "One API for all automations",
      "Revenue tracking and financial reporting",
      "Automated customer messages and follow-ups",
      "Operations workflows: data entry, inventory and scheduling",
      "Secure API keys and access control",
      "Developed and supported in-house",
    ],
    audience:
      "For businesses of any size that want to save time and see their numbers clearly, without building AI themselves.",
    status: "In development",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
