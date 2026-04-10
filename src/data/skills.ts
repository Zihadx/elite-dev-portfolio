/** Skills section — categories and proficiency levels. */

export const skillCategories = [
  {
    name: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 94 },
      { name: "Tailwind / CSS", level: 92 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "PostgreSQL", level: 88 },
      { name: "GraphQL / REST", level: 90 },
      { name: "Edge & Serverless", level: 86 },
    ],
  },
  {
    name: "AI & Data",
    items: [
      { name: "LLM integrations", level: 85 },
      { name: "Vector search", level: 80 },
      { name: "ETL pipelines", level: 82 },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git / CI/CD", level: 93 },
      { name: "Docker / K8s", level: 84 },
      { name: "Observability", level: 86 },
    ],
  },
] as const;
