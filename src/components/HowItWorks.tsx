"use client";

import { Mail, Video, FileText, Rocket } from "lucide-react";
import AnimationWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./AnimationWrapper";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Kontaktujete ma",
    description: "E-mail alebo SMS, odpoviem do 2 hodín",
  },
  {
    number: "02",
    icon: Video,
    title: "Dostanete demo",
    description: "Ukážka presne pre váš biznis",
  },
  {
    number: "03",
    icon: FileText,
    title: "Zmluva + platba",
    description: "50% vopred, 50% pri odovzdaní",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Inštalácia za 1 deň",
    description: "Všetko funguje, prvý mesiac zadarmo",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-primary-light py-15 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimationWrapper variant="fadeIn" className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-charcoal mb-4">
            Od kontaktu k inštalácii za 48 hodín
          </h2>
        </AnimationWrapper>

        <StaggerContainer className="relative" staggerDelay={0.15}>
          {/* Dotted connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-primary/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.number}>
                  <div className="relative text-center flex flex-col items-center">
                    {/* Number */}
                    <span className="text-6xl md:text-7xl font-bold text-primary/10 absolute -top-4 md:-top-2 left-1/2 -translate-x-1/2 select-none">
                      {step.number}
                    </span>

                    {/* Icon circle */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-white shadow-card flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-lg font-bold text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
