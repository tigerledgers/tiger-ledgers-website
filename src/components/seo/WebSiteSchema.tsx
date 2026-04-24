export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tigerledgers.com/#website",
    name: "Tiger Ledgers",
    url: "https://tigerledgers.com",
    description:
      "Accounting, tax, fractional CFO, and AI-enabled finance operations for small businesses, eCommerce, freelancers, and SaaS startups in USA & India.",
    inLanguage: "en-US",
    publisher: {
      "@id": "https://tigerledgers.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://tigerledgers.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
