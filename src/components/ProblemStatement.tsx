"use client";

import AnimationWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./AnimationWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ProblemStatement() {
  const { t } = useLanguage();

  return (
    <section
      id="problem"
      className="bg-charcoal py-15 md:py-30"
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <AnimationWrapper variant="fadeIn">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-white mb-8">
            {t.problem.heading}
          </h2>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.15}>
          <p className="text-lg md:text-xl md:leading-8 text-gray-300 mb-16">
            {t.problem.description}
          </p>
        </AnimationWrapper>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.problem.stats.map((stat) => (
            <StaggerItem key={stat.value}>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
