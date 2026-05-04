import { NextResponse } from "next/server";
import { renderSitemapXml } from "@/lib/sitemap-xml";
import { getSiteUrl } from "@/lib/site";

/** Resolve canonical URLs from env at request time (avoids stale example.com from build-only env). */
export const dynamic = "force-dynamic";

export function GET() {
  const base = getSiteUrl();
  const body = renderSitemapXml(base, true);
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
