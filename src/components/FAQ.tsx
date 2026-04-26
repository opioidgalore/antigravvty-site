"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimationWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./AnimationWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-shadow duration-200 hover:shadow-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-charcoal">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="faq-content"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-5 pb-5 text-sm text-gray leading-6">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const faqs = t.faq.items;

  // split into 2 columns
  const half = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

  return (
    <section id="faq" className="bg-white py-15 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimationWrapper variant="fadeIn" className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-charcoal mb-4">
            {t.faq.heading}
          </h2>
        </AnimationWrapper>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          staggerDelay={0.1}
        >
          <div className="space-y-4">
            {leftCol.map((faq, i) => (
              <StaggerItem key={i}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </StaggerItem>
            ))}
          </div>
          <div className="space-y-4">
            {rightCol.map((faq, i) => (
              <StaggerItem key={i}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
