import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://marketingnizam.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Performance Marketer in Kerala | Nizamudheen KC — Marketing Nomad",
  description:
    "Performance marketer in Kerala. Nizamudheen KC turns ad spend into revenue — ₹30L into ₹10.48 Cr across campaigns, 150K followers in a month. Real strategy.",
  keywords: [
    "performance marketer in Kerala",
    "best performance marketer in Kerala",
    "digital marketing expert Kerala",
    "social media marketing Kerala",
    "Nizamudheen KC",
    "Marketing Nomad",
  ],
  authors: [{ name: "Nizamudheen KC" }],
  creator: "Nizamudheen KC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nizamudheen KC — Marketing Nomad",
    title: "Performance Marketer in Kerala | Nizamudheen KC — Marketing Nomad",
    description:
      "Performance marketer in Kerala. ₹30L ad spend turned into ₹10.48 Cr in revenue, 150K followers in a month. Real strategy, measurable growth.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketer in Kerala | Nizamudheen KC — Marketing Nomad",
    description:
      "Performance marketer in Kerala. ₹30L ad spend turned into ₹10.48 Cr in revenue, 150K followers in a month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1888002675125103');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1888002675125103&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
