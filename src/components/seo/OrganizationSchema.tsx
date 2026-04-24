export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://tigerledgers.com/#organization",
    name: "Tiger Ledgers",
    description:
      "Strategic financial leadership providing accounting, tax, fractional CFO, and AI-enabled finance operations for small businesses, eCommerce, freelancers, and SaaS startups.",
    url: "https://tigerledgers.com",
    logo: {
      "@type": "ImageObject",
      url: "https://tigerledgers.com/assets/logo.jpg",
      width: 512,
      height: 512,
    },
    image: "https://tigerledgers.com/assets/hero-1.avif",
    telephone: "+1-765-415-4779",
    email: "hello@tigerledgers.com",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Girish Bandodakar",
        jobTitle: "Co-Founder",
        sameAs: "https://www.linkedin.com/in/girishbandodakar",
      },
      {
        "@type": "Person",
        name: "Prashant Meharwade",
        jobTitle: "Co-Founder",
        sameAs: "https://www.linkedin.com/in/ca-prashant-meharwade-b7475015b",
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress:
          "V4 complex 3rd Floor, Krishna Kamala Enclave, Uttarahalli",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560061",
        addressCountry: "IN",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-765-415-4779",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: ["US", "IN"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9738369939",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/tigerledgers",
      "https://x.com/tigerledgers",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Financial Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accounting Services",
            description: "General accounting and financial reporting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tax Filing",
            description: "Professional tax preparation and submission",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fractional CFO",
            description: "Strategic financial leadership on a part-time basis",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Payroll & Expenses Management",
            description: "Employee payments and expense tracking",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accounting Software Implementation",
            description: "Setup and migration of financial systems",
          },
        },
      ],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    serviceType: [
      "Accounting",
      "Tax Filing",
      "Fractional CFO",
      "Financial Advisory",
      "AI-Enabled Finance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
