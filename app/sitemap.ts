import type { MetadataRoute } from "next";
import { getAllCategories, getAllPostSlugs, getPostBySlug } from "@/lib/blog/queries";
import { getSiteUrl, LAST_MODIFIED } from "@/lib/site";

/** Prefer static sitemap output at build time (fewer runtime surprises on hosts). */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastMod = `${LAST_MODIFIED}T00:00:00.000Z`;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/about-us/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/guide/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/faq/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/responsible-gambling/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const postUrls: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => {
    const post = getPostBySlug(slug);
    const modified = post?.dateModified ? `${post.dateModified}T00:00:00.000Z` : lastMod;
    return {
      url: `${base}/blog/${slug}/`,
      lastModified: modified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    };
  });

  const categoryUrls: MetadataRoute.Sitemap = getAllCategories().map((category) => ({
    url: `${base}/blog/category/${category.slug}/`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryUrls, ...postUrls];
}
