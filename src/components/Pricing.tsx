"use client";

import { Check } from "lucide-react";
import AnimationWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./AnimationWrapper";

const plans = [
  {
    name: "Chatbot",
    badge: "Pre začiatočníkov",
    badgeColor: "bg-success/10 text-success",
    price: "150€",
    monthly: "35€/mesiac",
    description: "Jednorazová inštalácia + mesačná údržba",
    features: [
      "Chatbot na vašej webstránke",
      "Odpovedá 24/7",
      "Zbiera kontakty",
      "Vysvetľuje služby a ceny",
      "Prvý mesiac zadarmo",
      "Úpravy a údržba zahrnuté",
    ],
    cta: "Začať s chatbotom",
    featured: false,
  },
  {
    name: "Kompletný balík",
    badge: "Odporúčané",
    badgeColor: "bg-primary/10 text-primary animate-pulse-badge",
    price: "300€",
    monthly: "80€/mesiac",
    description: "Chatbot + SMS + Google recenzie",
    features: [
      'Všetko z balíka "Chatbot"',
      "SMS agent pri zmeškanom hovore",
      "Automatizácia Google recenzií",
      "WhatsApp/Viber → Google Sheets (voliteľné)",
      "Prvý mesiac zadarmo",
      "Prioritná podpora",
    ],
    cta: "Chcem kompletný balík",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-15 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimationWrapper variant="fadeIn" className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-charcoal mb-4">
            Cenová ponuka
          </h2>
          <p className="text-lg text-gray">
            Jednoduché ceny, žiadne skryté poplatky
          </p>
        </AnimationWrapper>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto"
          staggerDelay={0.2}
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`rounded-xl p-8 h-full flex flex-col shadow-card hover:shadow-card-hover transition-all duration-300 ${
                  plan.featured
                    ? "border-3 border-primary bg-white relative"
                    : "border border-gray-200 bg-white"
                }`}
              >
                {/* Badge */}
                <span
                  className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-6 ${plan.badgeColor}`}
                >
                  {plan.badge}
                </span>

                {/* Plan name */}
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-5xl font-bold text-charcoal">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray mb-1">{plan.monthly}</p>
                <p className="text-sm text-gray mb-8">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-charcoal"
                    >
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center font-semibold py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                    plan.featured
                      ? "bg-primary text-white hover:bg-primary-dark shadow-button"
                      : "bg-white text-primary border-2 border-primary hover:shadow-card"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimationWrapper variant="fadeIn" delay={0.4} className="mt-8">
          <p className="text-center text-sm text-gray">
            Ceny sú konečné. Žiadne skryté poplatky. Zmluva na 6 alebo 12
            mesiacov. Dlhšia zmluva = nižšia mesačná cena.
          </p>
        </AnimationWrapper>
      </div>
    </section>
  );
}
