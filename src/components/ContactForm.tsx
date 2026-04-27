"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgjqgyo";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[600px] px-6">
        <AnimationWrapper variant="fadeIn" className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-charcoal mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-lg text-gray">
            {t.contact.subtitle}
          </p>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.15}>
          {status === "success" ? (
            <div className="text-center py-12 px-6 bg-success/5 rounded-xl border border-success/20">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <p className="text-xl font-semibold text-charcoal mb-2">
                {t.contact.successTitle}
              </p>
              <p className="text-gray">{t.contact.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-charcoal mb-1.5"
                >
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 text-base text-charcoal placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-charcoal mb-1.5"
                >
                  {t.contact.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jan.novak@firma.sk"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 text-base text-charcoal placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-charcoal mb-1.5"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-base text-charcoal placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                />
              </div>

              {/* GDPR */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gdpr"
                    required
                    className="mt-0.5 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-[#0066FF]"
                  />
                  <span className="text-sm text-gray leading-5">
                    {t.contact.gdpr}{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary-dark"
                    >
                      {t.contact.gdprLinkText}
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-12 bg-primary text-white font-semibold rounded-lg shadow-button hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t.contact.sending}</span>
                  </>
                ) : (
                  t.contact.submit
                )}
              </button>

              {/* Error state */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    {t.contact.errorMessage}
                    <a
                      href="mailto:baueradam535@gmail.com"
                      className="underline"
                    >
                      baueradam535@gmail.com
                    </a>
                  </span>
                </div>
              )}
            </form>
          )}
        </AnimationWrapper>
      </div>
    </section>
  );
}
