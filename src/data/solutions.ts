export type Solution = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  status: "coming soon" | "in development";
};

export const solutions: Solution[] = [
  {
    slug: "grid",
    index: "01",
    title: "Grid",
    summary:
      "A systems layer for energy, reliability, and local infrastructure — designed to hold under real-world constraints.",
    status: "coming soon",
  },
  {
    slug: "civic",
    index: "02",
    title: "Civic",
    summary:
      "Tools that make public services clearer, faster, and accountable. Built for institutions and citizens alike.",
    status: "coming soon",
  },
  {
    slug: "identity",
    index: "03",
    title: "Identity",
    summary:
      "Secure digital rails for people, businesses, and records — without the noise of unnecessary platforms.",
    status: "coming soon",
  },
  {
    slug: "logistics",
    index: "04",
    title: "Logistics",
    summary:
      "Coordination software for movement, supply, and last-mile delivery across a fragmented landscape.",
    status: "coming soon",
  },
  {
    slug: "knowledge",
    index: "05",
    title: "Knowledge",
    summary:
      "Education and skills infrastructure that scales with talent, not with bureaucracy.",
    status: "coming soon",
  },
  {
    slug: "care",
    index: "06",
    title: "Care",
    summary:
      "Health and emergency systems that prioritize access, continuity, and operational truth.",
    status: "coming soon",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
