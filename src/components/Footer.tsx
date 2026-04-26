"use client";

import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceHrefs = ["#services", "#services", "#services", "#contact", "#pricing"];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-gray-400">
      <div className="mx-auto max-w-[1200px] px-6 py-15 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Ádám Bauer</h3>
            <p className="text-sm font-semibold text-primary mb-4">
              {t.footer.brandSubtitle}
            </p>
            <p className="text-sm leading-6 text-gray-400">
              {t.footer.brandDescription}
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              {t.footer.contactHeading}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:baueradam535@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  baueradam535@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="sms:+421910521030"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +421 910 521 030
                </a>
              </li>
              <li className="text-xs text-gray-500 pl-6">
                {t.footer.smsNote}
              </li>
            </ul>
          </div>

          {/* Služby */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              {t.footer.servicesHeading}
            </h4>
            <ul className="space-y-2.5">
              {t.footer.serviceLinks.map((label, i) => (
                <li key={i}>
                  <a
                    href={serviceHrefs[i]}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-[1200px] px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
