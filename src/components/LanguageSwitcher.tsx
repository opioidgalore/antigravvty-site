"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hu", label: "HU" },
  { code: "sk", label: "SK" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="fixed top-0 right-0 z-50 flex items-center gap-0.5 px-3 py-2 m-3 rounded-full backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.85)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
      }}
    >
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 cursor-pointer ${
              language === lang.code
                ? "text-[#0066FF] font-bold underline underline-offset-4 decoration-2 bg-[#E6F0FF]"
                : "text-[#666] hover:text-[#1A1A1A] hover:bg-gray-100"
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && (
            <span className="text-gray-300 text-xs select-none mx-0.5">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
