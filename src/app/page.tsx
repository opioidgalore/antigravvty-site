import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";

const Services = dynamic(() => import("@/components/Services"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const WebsiteUpsell = dynamic(() => import("@/components/WebsiteUpsell"));
const SocialProof = dynamic(() => import("@/components/SocialProof"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Services />
      <HowItWorks />
      <Pricing />
      <WebsiteUpsell />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
