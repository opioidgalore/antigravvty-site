"use client";

import { Mail, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Chatbot", href: "#services" },
  { label: "SMS agent", href: "#services" },
  { label: "Google recenzie", href: "#services" },
  { label: "Tvorba webstránok", href: "#contact" },
  { label: "Cenová ponuka", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400">
      <div className="mx-auto max-w-[1200px] px-6 py-15 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Ádám Bauer</h3>
            <p className="text-sm font-semibold text-primary mb-4">
              AI Automatizácia pre malé firmy
            </p>
            <p className="text-sm leading-6 text-gray-400">
              Pomáham elektrikárom, vodárom a stavbárom získavať viac zákazníkov
              bez toho, aby museli zdvihnúť telefón.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              Kontakt
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
                (SMS preferovaná, hovor v EN/HU/FR)
              </li>
            </ul>
          </div>

          {/* Služby */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Služby</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
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
          <p>© 2026 Ádám Bauer. Všetky práva vyhradené.</p>
          <p>Šamorín, Slovensko</p>
        </div>
      </div>
    </footer>
  );
}
