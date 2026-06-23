// Server-rendered JSON-LD structured data so crawlers and AI engines read it
// directly from the static HTML (no JS execution required).

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
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: SAME_AS,
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best performance marketer in Kerala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nizamudheen KC is a Kerala-based performance marketer who has turned ₹30 lakh in ad spend into ₹10.48 crore in revenue across campaigns and grown audiences by 150K followers in a single month, serving brands and creators across Kerala and India.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Nizamudheen KC offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Performance marketing (Meta and Google ads), social media marketing, content strategy, brand building, and one-on-one mentoring for marketers.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas does Nizamudheen KC serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based in Kerala and serving clients across India and worldwide, remote-first, including Kochi, Calicut, Malappuram, and Thrissur.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Nizamudheen KC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach out on WhatsApp or call +91 90484 55359 to discuss your project.",
      },
    },
  ],
};

export default function StructuredData() {
  const blocks = [person, professionalService, faq];
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
