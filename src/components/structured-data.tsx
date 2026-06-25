// Server-rendered JSON-LD structured data so crawlers and AI engines read it
// directly from the static HTML (no JS execution required).

import { HOME_FAQ_ITEMS } from "./v2/faq-data";

const SITE_URL = "https://marketingnizam.com";
const NAME = "Nizamudheen KC";
const PHONE = "+91-90484-55359";

const SAME_AS = [
  "https://www.instagram.com/marketing.nizam/",
  "https://www.linkedin.com/in/nizamudheen-kc/",
  "https://x.com/nizam_5359",
  "https://www.threads.com/@nizam_.udheen",
  "https://www.facebook.com/profile.php?id=61578681628133",
];

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  jobTitle: "Performance Marketer",
  description:
    "Performance marketer and digital marketing strategist based in Kerala, India. Known as India's first Marketing Nomad.",
  telephone: PHONE,
  sameAs: SAME_AS,
  knowsAbout: [
    "Performance Marketing",
    "Social Media Marketing",
    "Meta Ads",
    "Content Marketing",
    "Brand Building",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nizamudheen KC — Marketing Nomad",
  url: SITE_URL,
  image: `${SITE_URL}/favicon.ico`,
  description:
    "Performance marketing and social media growth for brands and creators across Kerala and India.",
  telephone: PHONE,
  priceRange: "$$",
  founder: { "@type": "Person", name: NAME },
  areaServed: [
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: SAME_AS,
};

// Entity-level schema (Person + ProfessionalService) — safe to render on every
// page in the layout; it describes who the site is about, site-wide.
export default function StructuredData() {
  const blocks = [person, professionalService];
  return (
    <>
      {blocks.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

// Homepage-only FAQ schema. FAQPage structured data must only appear on a page
// where those exact questions are visibly present — here, the homepage FAQ
// section — so it lives separately from the global entity schema above.
const homeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function HomeFaqSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaq) }}
    />
  );
}
