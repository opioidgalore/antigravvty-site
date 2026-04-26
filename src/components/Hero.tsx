"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import AnimationWrapper from "./AnimationWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const chatMessages = t.hero.chatMessages;
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= chatMessages.length - 1) {
          setTimeout(() => setVisibleMessages(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [chatMessages.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #E6F0FF 100%)",
      }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-30" />

      {/* Background blobs for depth */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column (60%) */}
          <div className="lg:col-span-3 space-y-8">
            <AnimationWrapper variant="fadeIn" delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary/70 mb-3">
                {t.hero.subtitle}
              </p>
            </AnimationWrapper>

            <AnimationWrapper variant="slideUp" delay={0.2}>
              <h1 className="text-[42px] md:text-[56px] leading-[1.1] font-bold text-charcoal tracking-tight">
                {t.hero.heading}
                <span className="text-primary">{t.hero.headingHighlight}</span>
              </h1>
            </AnimationWrapper>

            <AnimationWrapper variant="slideUp" delay={0.35}>
              <p className="text-lg md:text-xl leading-relaxed text-gray max-w-xl">
                {t.hero.description}
                <span className="text-primary font-semibold">
                  {t.hero.descriptionHighlight}
                </span>
              </p>
            </AnimationWrapper>

            <AnimationWrapper variant="slideUp" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                {/* Primary CTA - Premium Interactive Button */}
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2.5 bg-primary text-white font-semibold px-8 py-4 rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-[0_8px_24px_0_rgba(0,102,255,0.35)] hover:shadow-[0_12px_32px_0_rgba(0,102,255,0.5)]"
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="relative z-10">{t.hero.ctaPrimary}</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                {/* Secondary CTA - Premium Outline Button */}
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2.5 bg-white text-primary font-semibold px-8 py-4 rounded-lg border-2 border-primary hover:-translate-y-1 hover:bg-primary/5 transition-all duration-300 cursor-pointer shadow-[0_2px_8px_0_rgba(0,102,255,0.1)] hover:shadow-[0_6px_16px_0_rgba(0,102,255,0.2)]"
                >
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>
            </AnimationWrapper>

            <AnimationWrapper variant="fadeIn" delay={0.65}>
              <div className="flex flex-wrap gap-6 pt-4">
                {t.hero.badges.map((badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-2.5 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="font-medium">{badge}</span>
                  </motion.div>
                ))}
              </div>
            </AnimationWrapper>
          </div>

          {/* Right Column (40%) - Interactive Chatbot Mockup */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end relative">
            {/* Glow effect behind mockup */}
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-3xl scale-110" />

            {/* Floating chatbot mockup */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[420px] z-10"
            >
              {/* Phone mockup */}
              <div className="relative bg-white rounded-[2.5rem] shadow-[0_25px_80px_-10px_rgba(0,0,0,0.45)] p-3 border-[10px] border-gray-900">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20" />

                {/* Chat header */}
                <div className="bg-primary rounded-t-2xl px-5 py-4 flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {t.hero.chatHeader}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {/* Pulsing green dot */}
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 bg-success rounded-full"
                        />
                        <span className="text-white/90 text-xs">
                          {t.hero.chatOnline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="bg-gray-50 rounded-b-2xl px-4 py-6 space-y-3 min-h-[320px] flex flex-col justify-end overflow-hidden border border-gray-100 border-t-0">
                  <div className="space-y-3 flex flex-col justify-end min-h-0">
                    {chatMessages.slice(0, visibleMessages + 1).map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${
                          msg.sender === "agent" ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                            msg.sender === "agent"
                              ? "bg-white text-gray-800 shadow-sm rounded-tl-none"
                              : "bg-primary text-white shadow-sm rounded-tr-none"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    {visibleMessages < chatMessages.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center h-[38px]">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ y: [0, -4, 0] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                              }}
                              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}