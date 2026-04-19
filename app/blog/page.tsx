import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getAllPosts } from "@/lib/blog/queries";
import { blogIndexJsonLd } from "@/lib/jsonld-blog";
import { OG_DEFAULT_PATH } from "@/lib/seo-media";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

const path = "/blog/";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "W777 Bet Information Hub blog: educational posts on signup, deposits, withdrawals, and app downloads with direct blog URLs.",
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      "Download, signup, withdraw, and deposit guides published directly in the blog section.",
    url: `${getSiteUrl()}${path}`,
    images: [
      {
        url: `${getSiteUrl()}${OG_DEFAULT_PATH}`,
        width: 1200,
        height: 630,
        alt: "W777 Bet Information Hub blog guides",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${SITE_NAME}`,
    description: "Download, signup, withdraw, and deposit guides for W777Bet Game readers in Pakistan.",
    images: [`${getSiteUrl()}${OG_DEFAULT_PATH}`],
  },
};

export default function BlogIndexPage() {
  const base = getSiteUrl();
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={blogIndexJsonLd(base, posts) as unknown as Record<string, unknown>} />
      <main id="main" className="wrap blog-post-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / Blog
        </nav>

        <header className="blog-header">
          <h1>Blog Guides for Pakistan</h1>
          <p className="section-sub" style={{ marginBottom: "2rem" }}>
            Explore practical guides for download, signup, deposits, and withdrawals.
          </p>
        </header>

        <section aria-labelledby="posts-heading">
          <h2 id="posts-heading" className="section-title">
            All Guides
          </h2>
          <ul className="blog-post-list">
            {posts.map((post, index) => {
              const isLcpCard = index === 0;
              return (
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
                              priority={isLcpCard}
                              fetchPriority={isLcpCard ? "high" : "low"}
                              decoding="async"
                            />
                          </span>
                        ) : null}
                        <span className="blog-card-title">{post.title}</span>
                      </Link>
                    </h3>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
