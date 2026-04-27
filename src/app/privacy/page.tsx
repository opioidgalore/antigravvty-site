"use client";

import { useLanguage } from "@/i18n/LanguageContext";

const privacyContent = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 2026",
    sections: [
      {
        heading: "1. Data Controller",
        text: "The data controller is Ádám Bauer, based in Šamorín, Slovakia. Contact: baueradam535@gmail.com, +421 910 521 030.",
      },
      {
        heading: "2. Data We Collect",
        text: "Through the contact form on our website, we collect: your name, email address, phone number (optional), and any message you provide. We also store your language preference in your browser's localStorage.",
      },
      {
        heading: "3. Purpose of Data Processing",
        text: "We process your personal data solely for the purpose of responding to your inquiry, providing you with information about our services, and preparing a quote if requested.",
      },
      {
        heading: "4. Legal Basis",
        text: "The legal basis for processing your data is your explicit consent, given by checking the GDPR checkbox in the contact form (Article 6(1)(a) GDPR).",
      },
      {
        heading: "5. Data Sharing",
        text: "We do not sell or share your personal data with third parties. Form submissions are processed through Formspree (formspree.io), which acts as a data processor on our behalf.",
      },
      {
        heading: "6. Data Retention",
        text: "We retain your personal data only as long as necessary to fulfill the purpose for which it was collected, or as required by law. You can request deletion of your data at any time.",
      },
      {
        heading: "7. Your Rights",
        text: "Under the GDPR, you have the right to: access your data, rectify inaccurate data, request deletion of your data, restrict processing, data portability, and withdraw consent at any time. To exercise these rights, contact us at baueradam535@gmail.com.",
      },
      {
        heading: "8. Cookies & Local Storage",
        text: "Our website uses localStorage to save your language preference (EN/HU/SK). We do not use tracking cookies. Third-party services embedded on the site (such as the Tidio chat widget) may use their own cookies — please refer to their respective privacy policies.",
      },
      {
        heading: "9. Contact",
        text: "For any questions regarding this privacy policy or your personal data, please contact: baueradam535@gmail.com.",
      },
    ],
  },
  hu: {
    title: "Adatvédelmi Szabályzat",
    lastUpdated: "Utolsó frissítés: 2026. április",
    sections: [
      {
        heading: "1. Adatkezelő",
        text: "Az adatkezelő Bauer Ádám, székhelye: Somorja, Szlovákia. Kapcsolat: baueradam535@gmail.com, +421 910 521 030.",
      },
      {
        heading: "2. Gyűjtött adatok",
        text: "A weboldalunkon található kapcsolatfelvételi űrlapon keresztül gyűjtjük: nevét, e-mail címét, telefonszámát (opcionális), és az Ön által megadott üzenetet. A böngészője localStorage-ában tároljuk a nyelvi beállítását is.",
      },
      {
        heading: "3. Az adatfeldolgozás célja",
        text: "Személyes adatait kizárólag az Ön megkeresésének megválaszolása, szolgáltatásainkról való tájékoztatás és szükség esetén árajánlat készítése céljából kezeljük.",
      },
      {
        heading: "4. Jogalap",
        text: "Az adatkezelés jogalapja az Ön kifejezett hozzájárulása, amelyet a kapcsolatfelvételi űrlap GDPR jelölőnégyzetének bejelölésével ad meg (GDPR 6. cikk (1)(a)).",
      },
      {
        heading: "5. Adatmegosztás",
        text: "Személyes adatait nem értékesítjük és nem osztjuk meg harmadik felekkel. Az űrlapbeküldéseket a Formspree (formspree.io) dolgozza fel, amely adatfeldolgozóként jár el a nevünkben.",
      },
      {
        heading: "6. Adatmegőrzés",
        text: "Személyes adatait csak addig őrizzük meg, ameddig az szükséges a gyűjtés céljának teljesítéséhez, vagy amíg azt a törvény előírja. Bármikor kérheti adatai törlését.",
      },
      {
        heading: "7. Az Ön jogai",
        text: "A GDPR értelmében Önnek joga van: hozzáférni adataihoz, pontatlan adatokat helyesbíteni, adatai törlését kérni, a feldolgozás korlátozását kérni, adathordozhatósághoz és a hozzájárulás bármikori visszavonásához. Ezen jogok gyakorlásához írjon a baueradam535@gmail.com címre.",
      },
      {
        heading: "8. Sütik és helyi tárhely",
        text: "Weboldalunk a localStorage-t használja a nyelvi beállítás (EN/HU/SK) mentésére. Nem használunk nyomkövető sütiket. A weboldalba beágyazott harmadik féltől származó szolgáltatások (például a Tidio chat widget) saját sütiket használhatnak — kérjük, tekintse meg az adatvédelmi szabályzatukat.",
      },
      {
        heading: "9. Kapcsolat",
        text: "Ha bármilyen kérdése van az adatvédelmi szabályzattal vagy személyes adataival kapcsolatban, kérjük, lépjen kapcsolatba velünk: baueradam535@gmail.com.",
      },
    ],
  },
  sk: {
    title: "Zásady ochrany osobných údajov",
    lastUpdated: "Posledná aktualizácia: apríl 2026",
    sections: [
      {
        heading: "1. Prevádzkovateľ",
        text: "Prevádzkovateľom je Ádám Bauer, so sídlom v Šamoríne, Slovensko. Kontakt: baueradam535@gmail.com, +421 910 521 030.",
      },
      {
        heading: "2. Zhromažďované údaje",
        text: "Prostredníctvom kontaktného formulára na našej webovej stránke zhromažďujeme: vaše meno, e-mailovú adresu, telefónne číslo (nepovinné) a správu, ktorú poskytnete. V localStorage vášho prehliadača ukladáme aj vaše jazykové preferencie.",
      },
      {
        heading: "3. Účel spracovania údajov",
        text: "Vaše osobné údaje spracúvame výhradne za účelom zodpovedania vášho dopytu, poskytovania informácií o našich službách a prípravy cenovej ponuky, ak o to požiadate.",
      },
      {
        heading: "4. Právny základ",
        text: "Právnym základom spracovania vašich údajov je váš výslovný súhlas udelený zaškrtnutím políčka GDPR v kontaktnom formulári (článok 6 ods. 1 písm. a) GDPR).",
      },
      {
        heading: "5. Zdieľanie údajov",
        text: "Vaše osobné údaje nepredávame ani nezdieľame s tretími stranami. Odoslané formuláre spracúva služba Formspree (formspree.io), ktorá koná ako sprostredkovateľ v našom mene.",
      },
      {
        heading: "6. Uchovávanie údajov",
        text: "Vaše osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelu, na ktorý boli zozbierané, alebo podľa zákonných požiadaviek. Kedykoľvek môžete požiadať o vymazanie svojich údajov.",
      },
      {
        heading: "7. Vaše práva",
        text: "Podľa GDPR máte právo na: prístup k vašim údajom, opravu nepresných údajov, vymazanie údajov, obmedzenie spracovania, prenosnosť údajov a kedykoľvek odvolanie súhlasu. Na uplatnenie týchto práv nás kontaktujte na baueradam535@gmail.com.",
      },
      {
        heading: "8. Cookies a lokálne úložisko",
        text: "Naša webová stránka používa localStorage na uloženie jazykových preferencií (EN/HU/SK). Nepoužívame sledovacie cookies. Služby tretích strán vložené na stránke (ako napríklad Tidio chat widget) môžu používať vlastné cookies — pozrite si ich zásady ochrany osobných údajov.",
      },
      {
        heading: "9. Kontakt",
        text: "Ak máte akékoľvek otázky týkajúce sa týchto zásad ochrany osobných údajov alebo vašich osobných údajov, kontaktujte nás: baueradam535@gmail.com.",
      },
    ],
  },
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const content = privacyContent[language];

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-[800px] px-6 py-20 md:py-32">
        <h1 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-[#1A1A1A] mb-2">
          {content.title}
        </h1>
        <p className="text-sm text-[#666] mb-12">{content.lastUpdated}</p>

        <div className="space-y-8">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-[#1A1A1A] mb-2">
                {section.heading}
              </h2>
              <p className="text-base leading-7 text-[#666]">{section.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="text-[#0066FF] font-semibold hover:underline"
          >
            ← {language === "hu" ? "Vissza a főoldalra" : language === "sk" ? "Späť na hlavnú stránku" : "Back to homepage"}
          </a>
        </div>
      </div>
    </main>
  );
}
