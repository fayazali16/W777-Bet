import Link from "next/link";
import { getRelatedPostsExcluding } from "@/lib/blog/queries";

type Props = { currentSlug: string };

export function BlogRelatedGuides({ currentSlug }: Props) {
  const others = getRelatedPostsExcluding(currentSlug);

  return (
    <nav className="blog-related-guides" aria-labelledby="related-guides-heading">
      <h2 id="related-guides-heading">Related W777Bet Game guides</h2>
      <p className="blog-related-guides-note">
        Use the breadcrumb above for Home and the full blog index. Each related guide below is linked once from
        this page.
      </p>
      <ul>
        {others.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}/`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
