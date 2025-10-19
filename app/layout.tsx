import type { Metadata } from 'next';
import { Cormorant_Garamond } from "next/font/google";
import './globals.css';

export const metadata: Metadata = {
  title: "Psychologist in South Mumbai & Thane | Ankur Mental Health",
  description:
    "Trusted psychologists in South Mumbai & Thane. Therapy, counselling, and assessments for children, adults, couples & families. Call 9869378751 today.",
  applicationName: "Ankur Mental Health Services",
  generator: "Next.js",
  keywords: [
    "Psychologist South Mumbai",
    "Psychologist Thane",
    "Counselling Mumbai",
    "Therapy Thane",
    "Mental Health Services",
    "Ankur Mental Health",
  ],
  openGraph: {
    title: "Psychologist in South Mumbai & Thane | Ankur Mental Health",
    description:
      "Professional therapy, counselling, and psychological assessments for children, adults, and families. Visit our clinics in Opera House & Thane West.",
    url: "https://ankurmentalhealth.com/",
    siteName: "Ankur Mental Health Services",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://ankurmentalhealth.com/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ankurmentalhealth.com"),
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PsychologicalClinic",
              name: "Ankur Mental Health Services",
              image: "https://ankurmentalhealth.com/logo.png",
              url: "https://ankurmentalhealth.com/",
              telephone: "+91-9869378751",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Opera House, South Mumbai",
                  addressLocality: "Mumbai",
                  addressRegion: "MH",
                  postalCode: "400004",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Thane West",
                  addressLocality: "Thane",
                  addressRegion: "MH",
                  postalCode: "400601",
                  addressCountry: "IN",
                },
              ],
              sameAs: [
                "https://www.instagram.com/ankurmentalhealth",
                "https://www.facebook.com/ankurmentalhealth",
              ],
              description:
                "Professional therapy, counselling, and psychological assessments for children, adolescents, adults, couples, and families in South Mumbai & Thane.",
              founder: {
                "@type": "Person",
                name: "Mrudula Joshi",
                jobTitle: "Psychologist",
                description: "Psychologist with 13+ years of experience.",
              },
            }),
          }}
        />
      </head>
      <body className={`${cormorantGaramond.variable} font-cormorant`}>
        {children}
      </body>
    </html>
  );
}
