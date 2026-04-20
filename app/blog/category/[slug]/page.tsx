import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  getAllCategorySlugs,
  getCategoryBySlug,
  getPostsByCategorySlug,
} from "@/lib/blog/queries";
import { OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category" };

  const path = `/blog/category/${slug}/`;
  const posts = getPostsByCategorySlug(slug);
  const firstImage = posts.find((post) => post.featuredImage)?.featuredImage?.src;
  const imageUrl = `${getSiteUrl()}${firstImage ?? OG_DEFAULT_PATH}`;

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `${getSiteUrl()}${path}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${getSiteUrl()}${path}`,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: category.metaTitle,
      description: category.metaDescription,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategorySlug(slug);
  const base = getSiteUrl();
  const categoryUrl = `${base}/blog/category/${slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${categoryUrl}#webpage`,
        url: categoryUrl,
        name: category.metaTitle,
        description: category.metaDescription,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${categoryUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog/` },
          { "@type": "ListItem", position: 3, name: category.name, item: categoryUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${categoryUrl}#postlist`,
        name: `${category.name} posts`,
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "BlogPosting",
            "@id": `${base}/blog/${post.slug}/#article`,
            name: post.title,
            url: `${base}/blog/${post.slug}/`,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd as unknown as Record<string, unknown>} />
      <main id="main" className="wrap blog-post-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/blog/">Blog</Link> / {category.name}
        </nav>
        <article className="prose page-article blog-article">
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </article>

        <section aria-labelledby="category-posts-heading">
          <h2 id="category-posts-heading" className="section-title">
            Posts in this category
          </h2>
          <ul className="blog-post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="blog-post-card">
                  <h3>
                    <Link href={`/blog/${post.slug}/`} className="blog-card-link">
                      {post.featuredImage ? (
                        <span className="blog-card-image-wrap">
                          <Image
                            src={post.featuredImage.src}
                            alt={post.featuredImage.alt}
                            width={post.featuredImage.width}
                            height={post.featuredImage.height}
                            className="blog-card-image"
                            sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            decoding="async"
                          />
                        </span>
                      ) : null}
                      <span className="blog-card-title">{post.title}</span>
                    </Link>
                  </h3>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
