function fnv1a32(input: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function clampChannel(value: number): number {
  return Math.max(32, Math.min(223, value));
}

/**
 * Deterministic hex color derived from any string (stable for the same input).
 */
export function hexColorFromString(input: string): string {
  const trimmed = input.trim();
  if (trimmed.length === 0) {
    return "#64748b";
  }

  const hash = fnv1a32(trimmed);
  const r = clampChannel((hash >>> 16) & 0xff);
  const g = clampChannel((hash >>> 8) & 0xff);
  const b = clampChannel(hash & 0xff);

  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
