import { blogCategories, blogPosts } from "./data";
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

export function getAllCategories() {
  return [...blogCategories];
}

export function getAllCategorySlugs(): string[] {
  return blogCategories.map((category) => category.slug);
}

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getPostsByCategorySlug(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((post) => post.categorySlug === categorySlug);
}

/** Other guides for related internal links (same order as blog index). */
export function getRelatedPostsExcluding(slug: string) {
  return getAllPosts().filter((p) => p.slug !== slug);
}
