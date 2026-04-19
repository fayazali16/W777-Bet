import { blogPosts } from "./data";
import type { BlogPost } from "./types";

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

/** Other guides for related internal links (same order as blog index). */
export function getRelatedPostsExcluding(slug: string) {
  return getAllPosts().filter((p) => p.slug !== slug);
}
