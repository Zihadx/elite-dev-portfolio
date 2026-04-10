/**
 * Portfolio data — single import surface for the app.
 *
 * - `types` — shared TypeScript shapes
 * - `site` — identity + nav
 * - `about`, `projects`, `skills`, `experience`, `hero` — section content
 */

export type { Project } from "./types";
export { site, navItems, type NavSectionId } from "./site";
export { about } from "./about";
export { projects, featuredProject } from "./projects";
export { skillCategories } from "./skills";
export { experience } from "./experience";
export {
  heroAvailabilityLabel,
  heroEasterEgg,
  heroProfileImage,
  heroProfileMeta,
  heroTaglines,
} from "./hero";
