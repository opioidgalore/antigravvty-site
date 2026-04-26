"use client";

import { MessageSquare, Smartphone, Star, Check } from "lucide-react";
import AnimationWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./AnimationWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceIcons = [MessageSquare, Smartphone, Star];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-15 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimationWrapper variant="fadeIn" className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-charcoal mb-4">
            {t.services.heading}
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </AnimationWrapper>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {t.services.items.map((service, idx) => {
            const Icon = serviceIcons[idx];
            return (
              <StaggerItem key={idx}>
                <div className="group bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 h-full flex flex-col border border-gray-100">
                  <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl md:text-[28px] md:leading-9 font-bold text-charcoal mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base leading-7 text-gray mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-2.5 text-sm text-charcoal"
                      >
                        <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="text-primary font-semibold text-sm hover:underline mt-auto"
                  >
                    {service.cta}
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
