import {
  getAllCategories,
  getAllPostSlugs,
  getPostBySlug,
  getPostsByCategorySlug,
} from "@/lib/blog/queries";
import {
  ABOUT_US_FEATURE_PATH,
  HOME_HERO_BRAND_SRC,
  OG_DEFAULT_PATH,
} from "@/lib/seo-media";
import { LAST_MODIFIED } from "@/lib/site";

type SitemapUrlEntry = {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  imageLocs: string[];
};

function xmlEscape(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function isoDate(d: string): string {
  return `${d}T00:00:00.000Z`;
}

export function buildSitemapUrlEntries(base: string): SitemapUrlEntry[] {
  const siteLast = isoDate(LAST_MODIFIED);
  const staticPages: SitemapUrlEntry[] = [
    {
      loc: `${base}/`,
      lastmod: siteLast,
      changefreq: "weekly",
      priority: "1.0",
      imageLocs: [`${base}${HOME_HERO_BRAND_SRC}`],
    },
    {
      loc: `${base}/blog/`,
      lastmod: siteLast,
      changefreq: "weekly",
      priority: "0.95",
      imageLocs: [`${base}${OG_DEFAULT_PATH}`],
    },
    {
      loc: `${base}/about-us/`,
      lastmod: siteLast,
      changefreq: "monthly",
      priority: "0.85",
      imageLocs: [`${base}${ABOUT_US_FEATURE_PATH}`],
    },
    {
      loc: `${base}/guide/`,
      lastmod: siteLast,
      changefreq: "monthly",
      priority: "0.9",
      imageLocs: [`${base}${OG_DEFAULT_PATH}`],
    },
    {
      loc: `${base}/faq/`,
      lastmod: siteLast,
      changefreq: "monthly",
      priority: "0.85",
      imageLocs: [`${base}${OG_DEFAULT_PATH}`],
    },
    {
      loc: `${base}/responsible-gambling/`,
      lastmod: siteLast,
      changefreq: "monthly",
      priority: "0.85",
      imageLocs: [`${base}${OG_DEFAULT_PATH}`],
    },
  ];

  const categoryEntries: SitemapUrlEntry[] = getAllCategories().map((category) => {
    const featured =
      getPostsByCategorySlug(category.slug).find((post) => post.featuredImage)?.featuredImage?.src ??
      OG_DEFAULT_PATH;
    return {
      loc: `${base}/blog/category/${category.slug}/`,
      lastmod: siteLast,
      changefreq: "monthly",
      priority: "0.7",
      imageLocs: [`${base}${featured}`],
    };
  });

  const postEntries: SitemapUrlEntry[] = getAllPostSlugs().map((slug) => {
    const post = getPostBySlug(slug);
    const lastmod = post?.dateModified ? isoDate(post.dateModified) : siteLast;
    const img = post?.featuredImage?.src ? [`${base}${post.featuredImage.src}`] : [`${base}${OG_DEFAULT_PATH}`];
    return {
      loc: `${base}/blog/${slug}/`,
      lastmod,
      changefreq: "monthly",
      priority: "0.75",
      imageLocs: img,
    };
  });

  return [...staticPages, ...categoryEntries, ...postEntries];
}

/** Full document including optional human-friendly stylesheet for browsers. */
export function renderSitemapXml(base: string, includeStylesheet: boolean): string {
  const entries = buildSitemapUrlEntries(base);
  const hasImages = entries.some((e) => e.imageLocs.length > 0);
  const lines: string[] = [];
  lines.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  if (includeStylesheet) {
    lines.push(`<?xml-stylesheet type="text/xsl" href="${base}/sitemap.xsl"?>`);
  }
  lines.push(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${
      hasImages ? ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' : ""
    }>`,
  );

  for (const e of entries) {
    lines.push("<url>");
    lines.push(`<loc>${xmlEscape(e.loc)}</loc>`);
    for (const img of e.imageLocs) {
      lines.push("<image:image>");
      lines.push(`<image:loc>${xmlEscape(img)}</image:loc>`);
      lines.push("</image:image>");
    }
    lines.push(`<lastmod>${xmlEscape(e.lastmod)}</lastmod>`);
    lines.push(`<changefreq>${xmlEscape(e.changefreq)}</changefreq>`);
    lines.push(`<priority>${xmlEscape(e.priority)}</priority>`);
    lines.push("</url>");
  }

  lines.push("</urlset>");
  return lines.join("\n");
}
