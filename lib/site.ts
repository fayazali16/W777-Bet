const DEFAULT_SITE = "https://example.com";

function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return DEFAULT_SITE;
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const u = new URL(withProtocol);
    if (u.protocol !== "http:" && u.protocol !== "https:") return DEFAULT_SITE;
    if (!u.hostname) return DEFAULT_SITE;
    return u.href.replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE;
  }
}

/** Safe for Next.js `metadataBase` — never throws. */
export function getMetadataBase(): URL {
  try {
    const s = getSiteUrl();
    const u = new URL(s);
    if (u.protocol !== "http:" && u.protocol !== "https:") return new URL(DEFAULT_SITE);
    if (!u.hostname) return new URL(DEFAULT_SITE);
    return u;
  } catch {
    return new URL(DEFAULT_SITE);
  }
}

/** Public site URL — set NEXT_PUBLIC_SITE_URL in .env for production */
export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof env === "string" && env.length > 0) {
    return normalizeSiteUrl(env);
  }
  return DEFAULT_SITE;
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export const SITE_NAME = "W777 Bet Information Hub";
export const THEME_COLOR = "#0f766e";
export const LAST_MODIFIED = "2026-04-19";

/** APK download URL — set NEXT_PUBLIC_APK_URL in .env.local (empty = button shown disabled) */
export function getApkDownloadUrl(): string | undefined {
  const u = process.env.NEXT_PUBLIC_APK_URL?.trim();
  return u && u.length > 0 ? u : undefined;
}
