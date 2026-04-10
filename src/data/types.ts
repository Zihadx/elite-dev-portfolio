/** Domain types for portfolio content. */

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
