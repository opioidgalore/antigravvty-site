"use client";

import { Globe, Check } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

export default function WebsiteUpsell() {
  return (
    <section className="bg-white py-4 md:py-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimationWrapper variant="slideUp">
          <div
            className="rounded-xl px-8 md:px-16 py-10 md:py-12"
            style={{
              background: "linear-gradient(135deg, #E6F0FF 0%, #FFFFFF 100%)",
              boxShadow: "0 2px 16px rgba(255, 107, 0, 0.1)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
              {/* Left Column (70%) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-8 h-8 text-orange flex-shrink-0" />
                  <h3 className="text-2xl md:text-[28px] md:leading-9 font-bold text-charcoal">
                    Potrebujete aj novú webstránku?
                  </h3>
                </div>
                <p className="text-base leading-7 text-gray mb-5 max-w-2xl">
                  Váš chatbot potrebuje moderný domov. Ak váš súčasný web
                  nefunguje na mobiloch alebo je zastaraný, vytvorím vám
                  bleskovú webstránku už od 400€.
                </p>
                <div className="flex flex-wrap gap-5">
                  {[
                    "Moderný dizajn",
                    "Mobilná verzia",
                    "Dodanie za 5 dní",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray"
                    >
                      <Check className="w-4 h-4 text-orange flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (30%) */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-dark hover:-translate-y-0.5 transition-all duration-200 shadow-button cursor-pointer w-full lg:w-auto text-center"
                >
                  Cenová ponuka
                </a>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
