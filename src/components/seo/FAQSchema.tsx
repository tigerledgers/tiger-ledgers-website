export const FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: "What is a fractional CFO?",
    answer:
      "A fractional CFO is a senior finance executive who works with your business on a part-time or contract basis, providing strategic financial leadership — including budgeting, forecasting, fundraising support, and cash flow management — at a fraction of the cost of a full-time CFO.",
  },
  {
    question: "Who does Tiger Ledgers serve?",
    answer:
      "Tiger Ledgers serves small businesses, eCommerce brands, freelancers and independent contractors, and SaaS startups across the USA and India. We provide accounting, tax filing, payroll management, and fractional CFO services tailored to each segment.",
  },
  {
    question: "What accounting and finance services does Tiger Ledgers offer?",
    answer:
      "Our services include general accounting and financial reporting, payroll and expense management, professional tax preparation and filing, accounting software setup and migration (QuickBooks, Xero, and others), and fractional CFO advisory.",
  },
  {
    question:
      "How is Tiger Ledgers different from a traditional accounting firm?",
    answer:
      "Tiger Ledgers combines traditional accounting expertise with AI-enabled financial workflows and modern automation tooling. Rather than siloed bookkeeping, we deliver an integrated finance function — from daily accounting through strategic CFO leadership — under one team.",
  },
  {
    question: "Do you work with clients in both the USA and India?",
    answer:
      "Yes. Tiger Ledgers has offices in Bengaluru, India and serves clients across both countries. Our team is experienced in US GAAP, Indian accounting standards, and cross-border tax considerations for businesses operating in both markets.",
  },
  {
    question: "How do I get started with Tiger Ledgers?",
    answer:
      "You can reach us by filling out the contact form on our website or by calling +1-765-415-4779 (USA) or +91-97383-69939 (India). We typically start with a free consultation to understand your current finance setup and recommend the right service package.",
  },
];

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
