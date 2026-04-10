/** Global identity, navigation, and contact endpoints. */

export const site = {
  name: "Nur Zihad",
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
} as const;

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "featured", label: "Spotlight" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

export type NavSectionId = (typeof navItems)[number]["id"];
