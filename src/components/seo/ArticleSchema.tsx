interface ArticleSchemaProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  cover: string;
  slug: string;
}

export function ArticleSchema({
  title,
  excerpt,
  author,
  date,
  cover,
  slug,
}: ArticleSchemaProps) {
  const url = `https://tigerledgers.com/blog/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description: excerpt,
    image: cover,
    url,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author,
      url: "https://tigerledgers.com/#organization",
    },
    publisher: {
      "@id": "https://tigerledgers.com/#organization",
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://tigerledgers.com/blog#blog",
      name: "Tiger Ledgers Blog",
      publisher: {
        "@id": "https://tigerledgers.com/#organization",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
