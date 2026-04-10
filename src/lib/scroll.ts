/**
 * Smooth-scroll to a section. Safe to call from client components / event handlers only.
 */
export function scrollToSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth"
): void {
  document.getElementById(sectionId)?.scrollIntoView({ behavior, block: "start" });
}
