import type { MetadataRoute } from "next";
import {
  getAllCategories,
  getAllPostSlugs,
  getPostBySlug,
  getPostsByCategorySlug,
} from "@/lib/blog/queries";
import { ABOUT_US_FEATURE_PATH, HOME_HERO_BRAND_SRC, OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, LAST_MODIFIED } from "@/lib/site";

function absImage(base: string, publicPath: string): string[] {
  return [`${base}${publicPath}`];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastMod = new Date(LAST_MODIFIED);
  const ogDefault = absImage(base, OG_DEFAULT_PATH);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
      images: absImage(base, HOME_HERO_BRAND_SRC),
    },
    {
      url: `${base}/blog/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.95,
      images: ogDefault,
    },
    {
      url: `${base}/about-us/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.85,
      images: absImage(base, ABOUT_US_FEATURE_PATH),
    },
    {
      url: `${base}/guide/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
      images: ogDefault,
    },
    {
      url: `${base}/faq/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.85,
      images: ogDefault,
    },
    {
      url: `${base}/responsible-gambling/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.85,
      images: ogDefault,
    },
  ];

  const postUrls: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => {
    const post = getPostBySlug(slug);
    const featured = post?.featuredImage ? absImage(base, post.featuredImage.src) : ogDefault;
    return {
      url: `${base}/blog/${slug}/`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: featured,
    };
  });

  const categoryUrls: MetadataRoute.Sitemap = getAllCategories().map((category) => {
    const featuredPath =
      getPostsByCategorySlug(category.slug).find((post) => post.featuredImage)?.featuredImage?.src ??
      OG_DEFAULT_PATH;
    return {
      url: `${base}/blog/category/${category.slug}/`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: absImage(base, featuredPath),
    };
  });

  return [...staticRoutes, ...categoryUrls, ...postUrls];
}
