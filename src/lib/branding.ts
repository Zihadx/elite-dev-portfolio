/** Two-letter monogram from a display name (e.g. "Nur Zihad" → "NZ"). */
export function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
