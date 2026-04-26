"use client";

import { ArrowRight } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section
      id="final-cta"
      className="py-15 md:py-30"
      style={{
        background: "linear-gradient(135deg, #003D99 0%, #0066FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[700px] px-6 text-center">
        <AnimationWrapper variant="fadeIn">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-white mb-6">
            {t.finalCta.heading}
          </h2>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.15}>
          <p className="text-lg text-white/80 mb-10">
            {t.finalCta.subtitle}
          </p>
        </AnimationWrapper>

        <AnimationWrapper variant="scale" delay={0.3}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-primary-dark font-semibold px-10 py-4 rounded-lg text-lg shadow-button hover:shadow-card hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            {t.finalCta.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimationWrapper>

        <AnimationWrapper variant="fadeIn" delay={0.45}>
          <p className="mt-6 text-sm text-white/60">
            {t.finalCta.emailText}
            <a
              href="mailto:baueradam535@gmail.com"
              className="underline hover:text-white/90 transition-colors"
            >
              baueradam535@gmail.com
            </a>
          </p>
        </AnimationWrapper>
      </div>
    </section>
  );
}
