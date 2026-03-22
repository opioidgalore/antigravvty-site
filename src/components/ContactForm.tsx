"use client";

/*
 * FORMSPREE SETUP (REQUIRED):
 * 1. Go to https://formspree.io and sign up with baueradam535@gmail.com
 * 2. Create a new form
 * 3. Copy the endpoint URL (https://formspree.io/f/xxxxx)
 * 4. Create .env.local file in project root
 * 5. Add: NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ENDPOINT
 * 6. Restart dev server
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

const contactSchema = z.object({
  name: z.string().min(2, "Meno musí mať aspoň 2 znaky"),
  email: z.string().email("Zadajte platný e-mail"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^(\+421|0)\s?\d{3}\s?\d{3}\s?\d{3}$/.test(val.replace(/\s/g, "")),
      "Zadajte platné slovenské číslo"
    ),
  message: z.string().optional(),
  gdpr: z.boolean().refine((val) => val === true, {
    message: "Musíte súhlasiť so spracovaním údajov",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      // Formspree or custom endpoint
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
        "https://formspree.io/f/placeholder";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || "",
          message: data.message || "",
        }),
      });

      if (res.ok) {
        setStatus("success");
        reset();
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
            Kontaktujte ma
          </h2>
          <p className="text-lg text-gray">
            Odpoviem do 2 hodín (aj cez víkend)
          </p>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.15}>
          {status === "success" ? (
            <div className="text-center py-12 px-6 bg-success/5 rounded-xl border border-success/20">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <p className="text-xl font-semibold text-charcoal mb-2">
                Ďakujem!
              </p>
              <p className="text-gray">Odpoviem do 2 hodín.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {/* Meno */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-charcoal mb-1.5"
                >
                  Meno *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ján Novák"
                  {...register("name")}
                  className={`w-full h-12 px-4 rounded-lg border text-base text-charcoal placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-charcoal mb-1.5"
                >
                  E-mail *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jan.novak@firma.sk"
                  {...register("email")}
                  className={`w-full h-12 px-4 rounded-lg border text-base text-charcoal placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Telefón */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-charcoal mb-1.5"
                >
                  Telefón
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+421 900 123 456"
                  {...register("phone")}
                  className={`w-full h-12 px-4 rounded-lg border text-base text-charcoal placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Správa */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-charcoal mb-1.5"
                >
                  Správa
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Čo potrebujete? (chatbot, SMS agent, Google recenzie, webstránka...)"
                  {...register("message")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-base text-charcoal placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                />
              </div>

              {/* GDPR */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("gdpr")}
                    className="mt-0.5 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-[#0066FF]"
                  />
                  <span className="text-sm text-gray leading-5">
                    Súhlasím so spracovaním osobných údajov podľa GDPR
                  </span>
                </label>
                {errors.gdpr && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.gdpr.message}
                  </p>
                )}
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
                    <span>Odosielam...</span>
                  </>
                ) : (
                  "Odoslať správu"
                )}
              </button>

              {/* Error state */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    Chyba. Skúste znova alebo napíšte na{" "}
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
