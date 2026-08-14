/** 靜態站路徑：結尾斜線，GitHub Pages 才能對到 index.html */
export function pageHref(...segments: string[]): string {
  const cleaned = segments
    .flatMap((s) => s.split("/"))
    .map((s) => s.replace(/^\/+|\/+$/g, "").trim())
    .filter(Boolean);
  return `/${cleaned.join("/")}/`;
}

export function decodeURIComponentSafe(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
