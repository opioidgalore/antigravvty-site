import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "AI Automation for Small Businesses | Chatbot, SMS Agent, Google Reviews | Ádám Bauer",
  description:
    "Website chatbot, SMS agent for missed calls, and Google reviews automation for electricians, plumbers, and builders. First month free. Setup in 1 day.",
  openGraph: {
    title:
      "AI Automation for Small Businesses | Chatbot, SMS Agent, Google Reviews | Ádám Bauer",
    description:
      "Website chatbot, SMS agent for missed calls, and Google reviews automation for electricians, plumbers, and builders. First month free. Setup in 1 day.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ádám Bauer - AI Automation",
  description:
    "AI automation for small businesses. Chatbot, SMS agent, Google reviews.",
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
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
        <Script
          src="//code.tidio.co/0ydliketjalrisqglfhyegiekzaygeul.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
