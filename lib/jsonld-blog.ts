import type { BlogPost } from "./blog/types";
import { OG_DEFAULT_PATH, ORG_LOGO_WEBP_PATH, PUBLISHER_LOGO_FALLBACK_PATH } from "./seo-media";
import { LAST_MODIFIED } from "./site";

const publisherLogo = (base: string) => ({
  "@type": "ImageObject" as const,
  url: `${base}${ORG_LOGO_WEBP_PATH}`,
  width: 192,
  height: 192,
});

export function blogPostJsonLd(base: string, post: BlogPost) {
  const url = `${base}/blog/${post.slug}/`;
  const imageUrl = post.featuredImage
    ? `${base}${post.featuredImage.src}`
    : `${base}${PUBLISHER_LOGO_FALLBACK_PATH}`;
  const imageObject =
    post.featuredImage != null
      ? {
          "@type": "ImageObject" as const,
          url: imageUrl,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
          caption: post.featuredImage.alt,
        }
      : {
          "@type": "ImageObject" as const,
          url: imageUrl,
          width: 512,
          height: 512,
        };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "W777 Bet Information Hub",
        url: `${base}/`,
        logo: publisherLogo(base),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog/` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: [imageObject],
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: { "@type": "Organization", name: "W777 Bet Information Hub" },
        publisher: {
          "@type": "Organization",
          name: "W777 Bet Information Hub",
          logo: publisherLogo(base),
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
        url,
        keywords: (post.keywords ?? []).join(", "),
        articleSection: "Blog",
        inLanguage: "en-US",
        isAccessibleForFree: true,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: post.metaTitle,
        description: post.metaDescription,
        primaryImageOfPage: imageObject,
        dateModified: post.dateModified,
        isPartOf: { "@type": "WebSite", name: "W777 Bet Information Hub", url: `${base}/` },
        inLanguage: "en-US",
      },
    ],
  };
}

export function blogIndexJsonLd(base: string, posts: BlogPost[]) {
  const itemListElement = posts.map((post, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "BlogPosting" as const,
      "@id": `${base}/blog/${post.slug}/#article`,
      headline: post.title,
      name: post.title,
      url: `${base}/blog/${post.slug}/`,
      description: post.metaDescription,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      ...(post.featuredImage
        ? { image: `${base}${post.featuredImage.src}` }
        : { image: `${base}${PUBLISHER_LOGO_FALLBACK_PATH}` }),
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "W777 Bet Information Hub",
        url: `${base}/`,
        logo: publisherLogo(base),
      },
      {
        "@type": "Blog",
        "@id": `${base}/blog/#blog`,
        name: "W777 Bet Information Hub — Blog",
        description:
          "Educational articles on account setup, payments, and app downloads for readers researching online betting topics.",
        url: `${base}/blog/`,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en-US",
        blogPost: posts.map((p) => ({ "@id": `${base}/blog/${p.slug}/#article` })),
      },
      {
        "@type": "WebPage",
        "@id": `${base}/blog/#webpage`,
        url: `${base}/blog/`,
        name: "Blog | W777 Bet Information Hub",
        isPartOf: { "@type": "WebSite", url: `${base}/` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${OG_DEFAULT_PATH}`,
          width: 1200,
          height: 630,
        },
        dateModified: LAST_MODIFIED,
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${base}/blog/#postlist`,
        name: "W777 Bet guides — download, signup, deposit, withdraw",
        numberOfItems: posts.length,
        itemListElement,
      },
    ],
  };
}
