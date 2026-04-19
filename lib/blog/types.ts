export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  categorySlug: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  featuredImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /** Paragraphs of plain text (rendered as <p>) */
  paragraphs: string[];
};
