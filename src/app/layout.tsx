import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "AI Automatizácia pre malé firmy | Chatbot, SMS agent, Google recenzie | Ádám Bauer",
  description:
    "Chatbot na webe, SMS agent pri zmeškanom hovore a automatizácia Google recenzií pre elektrikárov, vodárov a stavbárov na Slovensku. Prvý mesiac zadarmo. Inštalácia za 1 deň.",
  openGraph: {
    title:
      "AI Automatizácia pre malé firmy | Chatbot, SMS agent, Google recenzie | Ádám Bauer",
    description:
      "Chatbot na webe, SMS agent pri zmeškanom hovore a automatizácia Google recenzií pre elektrikárov, vodárov a stavbárov na Slovensku. Prvý mesiac zadarmo. Inštalácia za 1 deň.",
    type: "website",
    locale: "sk_SK",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ádám Bauer - AI Automatizácia",
  description:
    "AI automatizácia pre malé firmy na Slovensku. Chatbot, SMS agent, Google recenzie.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Šamorín",
    addressCountry: "SK",
  },
  telephone: "+421910521030",
  email: "baueradam535@gmail.com",
  url: "https://antigravvty.com",
  areaServed: "SK",
  serviceType: [
    "AI Chatbot",
    "SMS Agent",
    "Google Reviews Automation",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
