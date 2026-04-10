/**
 * Portfolio content — replace with your real projects, links, and story.
 */

export const site = {
  name: "Alex Mercer",
  role: "Full-Stack Engineer & Product Craftsman",
  tagline:
    "I architect resilient systems and luminous interfaces — where performance meets poetry.",
  email: "hello@example.com",
  location: "Remote · UTC±0",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "featured", label: "Spotlight" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  lead: "A decade at the intersection of systems thinking and interface design.",
  body: `I build products that feel inevitable — typed end-to-end, observable in production, and polished down to the last micro-interaction. From edge functions to design systems, I care about the whole stack.`,
  strengths: [
    { title: "Systems", desc: "Distributed patterns, APIs, data modeling" },
    { title: "Craft", desc: "Motion, a11y, and design-adjacent UX" },
    { title: "Velocity", desc: "Shipping without sacrificing quality" },
  ],
};

export type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
  span?: "sm" | "md" | "lg" | "xl";
};

export const projects: Project[] = [
  {
    title: "Nebula Commerce",
    description:
      "Headless storefront with real-time inventory, edge caching, and a glass-native checkout experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    stack: ["Next.js", "tRPC", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
    span: "xl",
  },
  {
    title: "Pulse Analytics",
    description:
      "Streaming metrics pipeline with drill-down dashboards and anomaly alerts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    stack: ["React", "Kafka", "ClickHouse", "D3"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    span: "lg",
  },
  {
    title: "Aether Design System",
    description:
      "Token-driven UI kit with documentation, theming, and accessibility baked in.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    stack: ["Storybook", "Radix", "Tailwind", "Vitest"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    span: "md",
  },
  {
    title: "Orbit CRM",
    description:
      "Relationship graph, automations, and AI-assisted summaries for sales teams.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    stack: ["Next.js", "GraphQL", "Prisma", "OpenAI"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    span: "md",
  },
  {
    title: "Velvet API Gateway",
    description:
      "Policy-aware gateway with rate limits, JWT rotation, and request tracing.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    stack: ["Go", "Redis", "K8s", "OpenTelemetry"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    span: "sm",
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

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
];

export const experience = [
  {
    role: "Principal Engineer",
    company: "Lumen Labs",
    period: "2023 — Present",
    summary:
      "Led platform modernization, design system adoption, and SLO-driven reliability.",
  },
  {
    role: "Staff Full-Stack Engineer",
    company: "Northwind",
    period: "2019 — 2023",
    summary:
      "Owned core billing and auth services; mentored engineers; shipped 0→1 products.",
  },
  {
    role: "Senior Software Engineer",
    company: "Atlas Dynamics",
    period: "2016 — 2019",
    summary:
      "Built realtime dashboards and API surfaces for enterprise customers.",
  },
];
