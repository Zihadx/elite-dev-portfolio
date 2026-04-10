import type { Project } from "./types";

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
