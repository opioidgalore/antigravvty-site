"use client";

import { Shield, Clock, Headphones } from "lucide-react";
import AnimationWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./AnimationWrapper";

const trustElements = [
  {
    icon: Shield,
    title: "Bez záväzkov",
    description:
      "Prvý mesiac zadarmo. Ak nie ste spokojní, jednoducho prestanete platiť.",
  },
  {
    icon: Clock,
    title: "Inštalácia za 1 deň",
    description:
      "Nie týždne čakania. Chatbot funguje do 24 hodín od podpisu zmluvy.",
  },
  {
    icon: Headphones,
    title: "Podpora v slovenčine",
    description:
      "Píšem e-maily, SMS. Ak potrebujete hovor, dohodneme sa v angličtine/maďarčine.",
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-primary-light py-15 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimationWrapper variant="fadeIn" className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-charcoal mb-4">
            Prečo mi dôverovať?
          </h2>
        </AnimationWrapper>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          staggerDelay={0.15}
        >
          {trustElements.map((el) => {
            const Icon = el.icon;
            return (
              <StaggerItem key={el.title}>
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

        {/* Testimonial placeholder */}
        <AnimationWrapper variant="fadeIn" delay={0.3}>
          <div className="max-w-[600px] mx-auto text-center">
            <blockquote className="text-xl md:text-2xl italic text-charcoal/70 mb-4">
              &ldquo;Placeholder for future client testimonial. Will be added
              after first paying client.&rdquo;
            </blockquote>
            <p className="text-sm text-gray">— Prvý spokojný klient (čoskoro)</p>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
