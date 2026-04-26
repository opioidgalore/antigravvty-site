"use client";

import { Shield, Clock, Headphones } from "lucide-react";
import AnimationWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./AnimationWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

const trustIcons = [Shield, Clock, Headphones];

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section id="social-proof" className="bg-primary-light py-15 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimationWrapper variant="fadeIn" className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-charcoal mb-4">
            {t.socialProof.heading}
          </h2>
        </AnimationWrapper>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          staggerDelay={0.15}
        >
          {t.socialProof.items.map((el, idx) => {
            const Icon = trustIcons[idx];
            return (
              <StaggerItem key={idx}>
                <div className="bg-white rounded-xl p-8 shadow-card text-center hover:shadow-card-hover transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary-light mx-auto flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {el.title}
                  </h3>
                  <p className="text-sm text-gray leading-6">
                    {el.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>


      </div>
    </section>
  );
}
