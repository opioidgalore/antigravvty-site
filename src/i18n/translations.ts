export type Language = "en" | "hu" | "sk";

export const translations = {
  en: {
    hero: {
      subtitle: "AI AUTOMATION FOR SMALL BUSINESSES",
      heading: "Get more customers without having to ",
      headingHighlight: "pick up the phone",
      description:
        "A website chatbot answers 24/7, an SMS agent responds to missed calls, and a Google review system collects ratings automatically. ",
      descriptionHighlight: "First month free.",
      ctaPrimary: "See the demo",
      ctaSecondary: "Pricing",
      badges: ["No commitments", "First month free", "Setup in 1 day"],
      chatHeader: "AI Automation",
      chatOnline: "Online now",
      chatMessages: [
        { sender: "agent", text: "Hello! Do you need an appointment?" },
        { sender: "user", text: "Yes, please." },
        { sender: "agent", text: "Great. When works for you?" },
        { sender: "user", text: "Tomorrow afternoon?" },
        { sender: "agent", text: "✓ Booked for tomorrow at 2:00 PM!" },
      ],
    },
    problem: {
      heading: "Why do businesses lose customers?",
      description:
        "Most businesses don't lose customers because of bad service — but because they don't answer the phone in time or nobody responds on their website. While you're on a job, your competitor answers in 2 minutes. And the customer won't call back.",
      stats: [
        { value: "68%", label: "of customers don't call back after a missed call" },
        { value: "4 min", label: "average business response time" },
        { value: "82%", label: "of customers choose the first company to respond" },
      ],
    },
    services: {
      heading: "How does it work?",
      subtitle: "Three automations that work 24/7, even while you sleep",
      items: [
        {
          title: "Website Chatbot",
          description:
            "Answers customers anytime, explains services, responds to FAQs, and collects contacts. Works even when you can't.",
          features: [
            "Available 24/7, including weekends",
            "Collects names, phone numbers, emails",
            "Explains prices and services",
            "Redirects to a call if the customer wants",
          ],
          cta: "See the chatbot in action →",
        },
        {
          title: "SMS Agent for Missed Calls",
          description:
            "When you can't answer the phone, the customer gets an automatic SMS within 10 seconds. Nobody leaves just because you're busy.",
          features: [
            "Response within 10 seconds of a missed call",
            "Customer knows you received the call",
            "They can text back what they need",
            "You respond when you have time",
          ],
          cta: "SMS agent demo →",
        },
        {
          title: "Google Reviews Automation",
          description:
            "After a job is done, the system automatically asks the customer for a review. Happy customers rate you on Google; unhappy ones contact you privately.",
          features: [
            "Automatic emails after a job",
            "Happy → Google, unhappy → private",
            "Better reputation without personal requests",
            "More customers from search results",
          ],
          cta: "How reviews work →",
        },
      ],
    },
    howItWorks: {
      heading: "From contact to setup in 48 hours",
      steps: [
        {
          number: "01",
          title: "Contact me",
          description: "Email or SMS, I reply within 2 hours",
        },
        {
          number: "02",
          title: "Get a demo",
          description: "A demo tailored to your business",
        },
        {
          number: "03",
          title: "Contract + payment",
          description: "50% upfront, 50% on delivery",
        },
        {
          number: "04",
          title: "Setup in 1 day",
          description: "Everything works, first month free",
        },
      ],
    },
    pricing: {
      heading: "Pricing",
      subtitle: "Simple prices, no hidden fees",
      plans: [
        {
          name: "Chatbot",
          badge: "For beginners",
          price: "150€",
          monthly: "35€/month",
          description: "One-time setup + monthly maintenance",
          features: [
            "Chatbot on your website",
            "Responds 24/7",
            "Collects contacts",
            "Explains services and prices",
            "First month free",
            "Updates and maintenance included",
          ],
          cta: "Start with chatbot",
        },
        {
          name: "Complete Package",
          badge: "Recommended",
          price: "300€",
          monthly: "80€/month",
          description: "Chatbot + SMS + Google Reviews",
          features: [
            'Everything from the "Chatbot" plan',
            "SMS agent for missed calls",
            "Google reviews automation",
            "WhatsApp/Viber → Google Sheets (optional)",
            "First month free",
            "Priority support",
          ],
          cta: "I want the complete package",
        },
      ],
      footer:
        "Prices are final. No hidden fees. Cancel anytime, no commitment.",
    },
    websiteUpsell: {
      heading: "Need a new website too?",
      description:
        "Have an outdated website? I'll create a modern site that works on mobile, starting from 400€. Delivered in 5 days.",
      features: ["Modern design", "Mobile version", "Delivered in 5 days"],
      cta: "Get a quote",
    },
    socialProof: {
      heading: "Why trust me?",
      items: [
        {
          title: "No commitments",
          description:
            "First month free. If you're not satisfied, simply stop paying.",
        },
        {
          title: "Setup in 1 day",
          description:
            "No weeks of waiting. The chatbot works within 24 hours of signing the contract.",
        },
        {
          title: "Fast Support",
          description:
            "Support is 100% via SMS and email — you get answers in minutes, not missed calls.",
        },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "How long does setup take?",
          answer:
            "The chatbot is ready within 24 hours. SMS agent and Google reviews within 48 hours. I just need access to your website and Google Business profile.",
        },
        {
          question: "Do I need a new website?",
          answer:
            "No. The chatbot works on any existing website. Just add one line of code. If you want a modern site, I'll build one from 400€.",
        },
        {
          question: "What if I'm not satisfied?",
          answer:
            "The first month is free. If it doesn't help, simply stop paying. No cancellation periods.",
        },
        {
          question: "How many customers will this bring me?",
          answer:
            "I won't bring you new customers. But I'll help you not lose the ones already calling. 68% of customers don't call back after a missed call. This solves that.",
        },
        {
          question: "How do I pay?",
          answer:
            "50% upfront, 50% on delivery. Then monthly via PayPal. You can cancel anytime.",
        },
        {
          question: "Does it work for my business (electrician/plumber/heating)?",
          answer:
            "Yes. The chatbot is customized for your specific business. I'll show you a demo before signing.",
        },
      ],
    },
    finalCta: {
      heading: "Ready to get your first customer automatically?",
      subtitle: "Setup in 1 day. First month free. No commitments.",
      cta: "See the demo now",
      emailText: "Or write to me directly: ",
    },
    contact: {
      heading: "Contact me",
      subtitle: "I'll respond within 2 hours (even on weekends)",
      nameLabel: "Name *",
      namePlaceholder: "John Smith",
      nameError: "Name must be at least 2 characters",
      emailLabel: "E-mail *",
      emailError: "Enter a valid email",
      phoneLabel: "Phone",
      phoneError: "Enter a valid phone number",
      phonePlaceholder: "+421 900 123 456",
      messageLabel: "Message",
      messagePlaceholder:
        "What do you need? (chatbot, SMS agent, Google reviews, website...)",
      gdpr: "I agree to the processing of personal data according to the",
      gdprLinkText: "Privacy Policy",
      gdprError: "You must agree to data processing",
      submit: "Send message",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMessage: "I'll respond within 2 hours.",
      errorMessage: "Error. Try again or write to ",
    },
    footer: {
      brandSubtitle: "AI Automation for small businesses",
      brandDescription:
        "I help electricians, plumbers, and builders get more customers without having to pick up the phone.",
      contactHeading: "Contact",
      smsNote: "(SMS preferred, support in EN/HU/SK)",
      servicesHeading: "Services",
      serviceLinks: [
        "Chatbot",
        "SMS agent",
        "Google reviews",
        "Website development",
        "Pricing",
      ],
      copyright: "© 2026 Ádám Bauer. All rights reserved.",
      location: "Šamorín, Slovakia",
    },
  },

  hu: {
    hero: {
      subtitle: "AI AUTOMATIZÁLÁS KISVÁLLALKOZÁSOKNAK",
      heading: "Szerezzen több ügyfelet anélkül, hogy ",
      headingHighlight: "felvenné a telefont",
      description:
        "Egy chatbot a weboldalon 24/7 válaszol, az SMS ügynök reagál az elmulasztott hívásokra, és a Google értékelő rendszer automatikusan gyűjti a véleményeket. ",
      descriptionHighlight: "Az első hónap ingyenes.",
      ctaPrimary: "Nézze meg a demót",
      ctaSecondary: "Árajánlat",
      badges: ["Kötelezettségek nélkül", "Első hónap ingyen", "Telepítés 1 nap alatt"],
      chatHeader: "AI Automatizálás",
      chatOnline: "Online most",
      chatMessages: [
        { sender: "agent", text: "Jó napot! Időpontot szeretne foglalni?" },
        { sender: "user", text: "Igen, kérem." },
        { sender: "agent", text: "Remek. Mikor felel meg Önnek?" },
        { sender: "user", text: "Holnap délután?" },
        { sender: "agent", text: "✓ Lefoglalva holnap 14:00-ra!" },
      ],
    },
    problem: {
      heading: "Miért veszítenek ügyfeleket a vállalkozások?",
      description:
        "A legtöbb vállalkozás nem azért veszít ügyfelet, mert rossz a szolgáltatása — hanem azért, mert nem veszi fel időben a telefont, vagy senki sem válaszol a weboldalon. Amíg Ön munkán van, a konkurencia 2 perc alatt válaszol. És az ügyfél már nem hív vissza.",
      stats: [
        { value: "68%", label: "az ügyfelek nem hívnak vissza elmulasztott hívás után" },
        { value: "4 perc", label: "átlagos válaszidő a vállalkozásoknál" },
        { value: "82%", label: "az ügyfelek az elsőként válaszoló céget választják" },
      ],
    },
    services: {
      heading: "Hogyan működik?",
      subtitle: "Három automatizálás, ami 24/7 dolgozik, még alvás közben is",
      items: [
        {
          title: "Chatbot a weboldalon",
          description:
            "Bármikor válaszol az ügyfeleknek, elmagyarázza a szolgáltatásokat, válaszol a gyakori kérdésekre és gyűjti a kapcsolatokat. Akkor is működik, amikor Ön nem ér rá.",
          features: [
            "Elérhető 24/7, hétvégén is",
            "Neveket, telefonszámokat, e-maileket gyűjt",
            "Elmagyarázza az árakat és szolgáltatásokat",
            "Átirányít telefonhívásra, ha az ügyfél kéri",
          ],
          cta: "Nézze meg a chatbotot működés közben →",
        },
        {
          title: "SMS ügynök elmulasztott hívásokra",
          description:
            "Ha nem tudja felvenni a telefont, az ügyfél 10 másodpercen belül automatikus SMS-t kap. Senki sem megy el csak azért, mert Ön elfoglalt.",
          features: [
            "Válasz 10 másodpercen belül az elmulasztott hívás után",
            "Az ügyfél tudja, hogy megkapta a hívást",
            "Visszaírhatja, mire van szüksége",
            "Ön akkor válaszol, amikor ráér",
          ],
          cta: "SMS ügynök bemutató →",
        },
        {
          title: "Google értékelések automatizálása",
          description:
            "A munka befejezése után a rendszer automatikusan kéri az ügyfelet értékelésre. Az elégedettek a Google-on értékelnek, az elégedetlenek privátban keresik meg.",
          features: [
            "Automatikus e-mailek a munka után",
            "Elégedett → Google, elégedetlen → privát",
            "Jobb hírnév személyes kérés nélkül",
            "Több ügyfél a keresési találatokból",
          ],
          cta: "Hogyan működnek az értékelések →",
        },
      ],
    },
    howItWorks: {
      heading: "A kapcsolatfelvételtől a telepítésig 48 óra alatt",
      steps: [
        {
          number: "01",
          title: "Keressen meg",
          description: "E-mail vagy SMS, 2 órán belül válaszolok",
        },
        {
          number: "02",
          title: "Kap egy demót",
          description: "Az Ön vállalkozásához szabott bemutató",
        },
        {
          number: "03",
          title: "Szerződés + fizetés",
          description: "50% előre, 50% átadáskor",
        },
        {
          number: "04",
          title: "Telepítés 1 nap alatt",
          description: "Minden működik, az első hónap ingyenes",
        },
      ],
    },
    pricing: {
      heading: "Árajánlat",
      subtitle: "Egyszerű árak, nincsenek rejtett díjak",
      plans: [
        {
          name: "Chatbot",
          badge: "Kezdőknek",
          price: "150€",
          monthly: "35€/hónap",
          description: "Egyszeri telepítés + havi karbantartás",
          features: [
            "Chatbot az Ön weboldalán",
            "24/7 válaszol",
            "Kapcsolatokat gyűjt",
            "Elmagyarázza a szolgáltatásokat és árakat",
            "Első hónap ingyenes",
            "Frissítések és karbantartás benne van",
          ],
          cta: "Kezdés chatbottal",
        },
        {
          name: "Komplett csomag",
          badge: "Ajánlott",
          price: "300€",
          monthly: "80€/hónap",
          description: "Chatbot + SMS + Google értékelések",
          features: [
            'Minden a "Chatbot" csomagból',
            "SMS ügynök elmulasztott hívásokra",
            "Google értékelések automatizálása",
            "WhatsApp/Viber → Google Sheets (opcionális)",
            "Első hónap ingyenes",
            "Elsőbbségi támogatás",
          ],
          cta: "Kérem a komplett csomagot",
        },
      ],
      footer:
        "Az árak véglegesek. Nincsenek rejtett díjak. Bármikor lemondható, nincs kötelezettség.",
    },
    websiteUpsell: {
      heading: "Új weboldalra is szüksége van?",
      description:
        "Elavult a weboldala? Készítek Önnek egy modern weboldalt, ami mobilon is működik, már 400€-tól. Kiszállítás 5 nap alatt.",
      features: ["Modern dizájn", "Mobil verzió", "Kiszállítás 5 nap alatt"],
      cta: "Árajánlat kérés",
    },
    socialProof: {
      heading: "Miért bízzon bennem?",
      items: [
        {
          title: "Kötelezettségek nélkül",
          description:
            "Az első hónap ingyenes. Ha nem elégedett, egyszerűen abbahagyja a fizetést.",
        },
        {
          title: "Telepítés 1 nap alatt",
          description:
            "Nem kell heteket várni. A chatbot a szerződés aláírásától számított 24 órán belül működik.",
        },
        {
          title: "Gyors támogatás",
          description:
            "A támogatás 100%-ban SMS-ben és e-mailben zajlik — percek alatt kap választ, nem elmulasztott hívásokat.",
        },
      ],
    },
    faq: {
      heading: "Gyakran Ismételt Kérdések",
      items: [
        {
          question: "Mennyi idő a telepítés?",
          answer:
            "A chatbot 24 órán belül kész. Az SMS ügynök és a Google értékelések 48 órán belül. Csak a weboldalához és a Google Business profiljához kell hozzáférés.",
        },
        {
          question: "Szükségem van új weboldalra?",
          answer:
            "Nem. A chatbot bármely meglévő weboldalon működik. Csak egy sor kódot kell hozzáadni. Ha azonban modern weboldalt szeretne, készítek egyet 400€-tól.",
        },
        {
          question: "Mi van, ha nem vagyok elégedett?",
          answer:
            "Az első hónap ingyenes. Ha nem segít, egyszerűen abbahagyja a fizetést. Nincsenek felmondási határidők.",
        },
        {
          question: "Hány ügyfelet hoz ez nekem?",
          answer:
            "Nem hozok új ügyfeleket. De segítek, hogy ne veszítse el azokat, akik már hívják. Az ügyfelek 68%-a nem hív vissza elmulasztott hívás után. Ez megoldja ezt a problémát.",
        },
        {
          question: "Hogyan fizetek?",
          answer:
            "50% előre, 50% átadáskor. Utána havonta PayPal-lal. Bármikor lemondhatja.",
        },
        {
          question:
            "Működik az én vállalkozásomnál is (villanyszerelő/vízvezeték-szerelő/fűtés)?",
          answer:
            "Igen. A chatbot kifejezetten az Ön vállalkozásához van szabva. A szerződés aláírása előtt megmutatom a demót.",
        },
      ],
    },
    finalCta: {
      heading: "Készen áll automatikusan megszerezni az első ügyfelét?",
      subtitle: "Telepítés 1 nap alatt. Első hónap ingyenes. Kötelezettségek nélkül.",
      cta: "Nézze meg a demót most",
      emailText: "Vagy írjon nekem közvetlenül: ",
    },
    contact: {
      heading: "Keressen meg",
      subtitle: "2 órán belül válaszolok (hétvégén is)",
      nameLabel: "Név *",
      namePlaceholder: "Kovács János",
      nameError: "A név legalább 2 karakter legyen",
      emailLabel: "E-mail *",
      emailError: "Adjon meg érvényes e-mail címet",
      phoneLabel: "Telefon",
      phoneError: "Adjon meg érvényes telefonszámot",
      phonePlaceholder: "+421 900 123 456",
      messageLabel: "Üzenet",
      messagePlaceholder:
        "Mire van szüksége? (chatbot, SMS ügynök, Google értékelések, weboldal...)",
      gdpr: "Hozzájárulok a személyes adatok feldolgozásához az",
      gdprLinkText: "Adatvédelmi szabályzat",
      gdprError: "Hozzá kell járulnia az adatfeldolgozáshoz",
      submit: "Üzenet küldése",
      sending: "Küldés...",
      successTitle: "Köszönöm!",
      successMessage: "2 órán belül válaszolok.",
      errorMessage: "Hiba. Próbálja újra vagy írjon a ",
    },
    footer: {
      brandSubtitle: "AI Automatizálás kisvállalkozásoknak",
      brandDescription:
        "Segítek villanyszerelőknek, vízvezeték-szerelőknek és építőknek több ügyfelet szerezni anélkül, hogy felvennék a telefont.",
      contactHeading: "Kapcsolat",
      smsNote: "(SMS előnyben, támogatás EN/HU/SK nyelven)",
      servicesHeading: "Szolgáltatások",
      serviceLinks: [
        "Chatbot",
        "SMS ügynök",
        "Google értékelések",
        "Weboldal készítés",
        "Árajánlat",
      ],
      copyright: "© 2026 Bauer Ádám. Minden jog fenntartva.",
      location: "Somorja, Szlovákia",
    },
  },

  sk: {
    hero: {
      subtitle: "AI AUTOMATIZÁCIA PRE MALÉ FIRMY",
      heading: "Získajte viac zákazníkov bez toho, aby ste museli ",
      headingHighlight: "zdvihnúť telefón",
      description:
        "Chatbot na webe odpovedá 24/7, SMS agent reaguje na zmeškané hovory a systém Google recenzií zbiera hodnotenia automaticky. ",
      descriptionHighlight: "Prvý mesiac zadarmo.",
      ctaPrimary: "Pozrite si demo",
      ctaSecondary: "Cenová ponuka",
      badges: ["Bez záväzkov", "Prvý mesiac zadarmo", "Inštalácia za 1 deň"],
      chatHeader: "Automatizácia AI",
      chatOnline: "Online teraz",
      chatMessages: [
        { sender: "agent", text: "Dobrý deň! Potrebujete termín?" },
        { sender: "user", text: "Áno, prosím." },
        { sender: "agent", text: "Perfektné. Kedy vám to vyhovuje?" },
        { sender: "user", text: "Zajtra popoludní?" },
        { sender: "agent", text: "✓ Rezervované na zajtra 14:00!" },
      ],
    },
    problem: {
      heading: "Prečo firmy prichádzajú o zákazníkov?",
      description:
        "Väčšina firiem príde o zákazníka nie preto, že majú zlú službu — ale preto, že nestihnú zdvihnúť telefón alebo nikto neodpovie na webe včas. Zatiaľ čo vy ste na zákazke, konkurencia odpovedá za 2 minúty. A zákazník sa už neozvem späť.",
      stats: [
        { value: "68%", label: "zákazníkov neodpovedá na zmeškané hovory" },
        { value: "4 min", label: "priemerný čas odpovede firiem" },
        { value: "82%", label: "zákazníkov si vyberie prvú firmu, ktorá odpovie" },
      ],
    },
    services: {
      heading: "Ako to funguje?",
      subtitle: "Tri automatizácie, ktoré pracujú 24/7, aj keď vy spíte",
      items: [
        {
          title: "Chatbot na webe",
          description:
            "Odpovedá zákazníkom kedykoľvek, vysvetlí služby, odpovie na časté otázky a zbiera kontakty. Funguje aj keď vy nestíhate.",
          features: [
            "Dostupný 24/7, aj cez víkendy",
            "Zbiera mená, telefóny, e-maily",
            "Vysvetľuje ceny a služby",
            "Presmerovanie na telefonát, ak zákazník chce",
          ],
          cta: "Pozrite si chatbot v akcii →",
        },
        {
          title: "SMS agent pri zmeškanom hovore",
          description:
            "Keď nestíhate zdvihnúť telefón, zákazník dostane automatickú SMS odpoveď do 10 sekúnd. Nikto neodíde len preto, že ste zaneprázdnení.",
          features: [
            "Odpoveď do 10 sekúnd po zmeškanom hovore",
            "Zákazník vie, že ste dostali hovor",
            "Môže napísať späť, čo potrebuje",
            "Vy odpoviete, keď máte čas",
          ],
          cta: "Ukážka SMS agenta →",
        },
        {
          title: "Automatizácia Google recenzií",
          description:
            "Po dokončení zákazky systém automaticky požiada zákazníka o hodnotenie. Spokojní vás hodnotiť na Google, nespokojní vás kontaktujú súkromne.",
          features: [
            "Automatické e-maily po zákazke",
            "Spokojní → Google, nespokojní → súkromne",
            "Lepšia reputácia bez osobných žiadostí",
            "Viac zákazníkov z vyhľadávania",
          ],
          cta: "Ako fungujú recenzie →",
        },
      ],
    },
    howItWorks: {
      heading: "Od kontaktu k inštalácii za 48 hodín",
      steps: [
        {
          number: "01",
          title: "Kontaktujete ma",
          description: "E-mail alebo SMS, odpoviem do 2 hodín",
        },
        {
          number: "02",
          title: "Dostanete demo",
          description: "Ukážka presne pre váš biznis",
        },
        {
          number: "03",
          title: "Zmluva + platba",
          description: "50% vopred, 50% pri odovzdaní",
        },
        {
          number: "04",
          title: "Inštalácia za 1 deň",
          description: "Všetko funguje, prvý mesiac zadarmo",
        },
      ],
    },
    pricing: {
      heading: "Cenová ponuka",
      subtitle: "Jednoduché ceny, žiadne skryté poplatky",
      plans: [
        {
          name: "Chatbot",
          badge: "Pre začiatočníkov",
          price: "150€",
          monthly: "35€/mesiac",
          description: "Jednorazová inštalácia + mesačná údržba",
          features: [
            "Chatbot na vašej webstránke",
            "Odpovedá 24/7",
            "Zbiera kontakty",
            "Vysvetľuje služby a ceny",
            "Prvý mesiac zadarmo",
            "Úpravy a údržba zahrnuté",
          ],
          cta: "Začať s chatbotom",
        },
        {
          name: "Kompletný balík",
          badge: "Odporúčané",
          price: "300€",
          monthly: "80€/mesiac",
          description: "Chatbot + SMS + Google recenzie",
          features: [
            'Všetko z balíka "Chatbot"',
            "SMS agent pri zmeškanom hovore",
            "Automatizácia Google recenzií",
            "WhatsApp/Viber → Google Sheets (voliteľné)",
            "Prvý mesiac zadarmo",
            "Prioritná podpora",
          ],
          cta: "Chcem kompletný balík",
        },
      ],
      footer:
        "Ceny sú konečné. Žiadne skryté poplatky. Zrušenie kedykoľvek, bez záväzkov.",
    },
    websiteUpsell: {
      heading: "Potrebujete aj novú webstránku?",
      description:
        "Máte zastaranú webstránku? Vytvorím vám modernú stránku, ktorá funguje na mobiloch, už od 400€. Dodanie za 5 dní.",
      features: ["Moderný dizajn", "Mobilná verzia", "Dodanie za 5 dní"],
      cta: "Cenová ponuka",
    },
    socialProof: {
      heading: "Prečo mi dôverovať?",
      items: [
        {
          title: "Bez záväzkov",
          description:
            "Prvý mesiac zadarmo. Ak nie ste spokojní, jednoducho prestanete platiť.",
        },
        {
          title: "Inštalácia za 1 deň",
          description:
            "Nie týždne čakania. Chatbot funguje do 24 hodín od podpisu zmluvy.",
        },
        {
          title: "Rýchla podpora",
          description:
            "Podpora je 100% cez SMS a e-mail — odpoveď dostanete za minúty, nie zmeškané hovory.",
        },
      ],
    },
    faq: {
      heading: "Často kladené otázky",
      items: [
        {
          question: "Ako dlho trvá inštalácia?",
          answer:
            "Chatbot je hotový do 24 hodín. SMS agent a Google recenzie do 48 hodín. Stačí mi prístup k vašej webstránke a Google Business profilu.",
        },
        {
          question: "Potrebujem novú webstránku?",
          answer:
            "Nie. Chatbot funguje na akejkoľvek existujúcej stránke. Stačí pridať jeden riadok kódu. Ak však chcete modernú stránku, vytvorím vám ju od 400€.",
        },
        {
          question: "Čo ak nie som spokojný?",
          answer:
            "Prvý mesiac máte zadarmo. Ak vám to nepomôže, jednoducho prestanete platiť. Žiadne výpovedné lehoty.",
        },
        {
          question: "Koľko zákazníkov mi to prinesie?",
          answer:
            "Neprinesiem vám nových zákazníkov. Ale pomôžem vám nestratiť tých, ktorí už volajú. 68% zákazníkov sa neozvem späť po zmeškanom hovore. Toto to rieši.",
        },
        {
          question: "Ako platím?",
          answer:
            "50% vopred, 50% pri odovzdaní. Potom mesačne cez PayPal. Môžete zrušiť kedykoľvek.",
        },
        {
          question: "Funguje to aj pre moju firmu (elektrikár/vodár/kúrenie)?",
          answer:
            "Áno. Chatbot je prispôsobený presne pre vašu firmu. Ukážem vám demo pred podpisom zmluvy.",
        },
      ],
    },
    finalCta: {
      heading: "Pripravený získať prvého zákazníka automaticky?",
      subtitle: "Inštalácia za 1 deň. Prvý mesiac zadarmo. Bez záväzkov.",
      cta: "Pozrite si demo teraz",
      emailText: "Alebo mi napíšte priamo: ",
    },
    contact: {
      heading: "Kontaktujte ma",
      subtitle: "Odpoviem do 2 hodín (aj cez víkend)",
      nameLabel: "Meno *",
      namePlaceholder: "Ján Novák",
      nameError: "Meno musí mať aspoň 2 znaky",
      emailLabel: "E-mail *",
      emailError: "Zadajte platný e-mail",
      phoneLabel: "Telefón",
      phoneError: "Zadajte platné slovenské číslo",
      phonePlaceholder: "+421 900 123 456",
      messageLabel: "Správa",
      messagePlaceholder:
        "Čo potrebujete? (chatbot, SMS agent, Google recenzie, webstránka...)",
      gdpr: "Súhlasím so spracovaním osobných údajov podľa",
      gdprLinkText: "Zásady ochrany osobných údajov",
      gdprError: "Musíte súhlasiť so spracovaním údajov",
      submit: "Odoslať správu",
      sending: "Odosielam...",
      successTitle: "Ďakujem!",
      successMessage: "Odpoviem do 2 hodín.",
      errorMessage: "Chyba. Skúste znova alebo napíšte na ",
    },
    footer: {
      brandSubtitle: "AI Automatizácia pre malé firmy",
      brandDescription:
        "Pomáham elektrikárom, vodárom a stavbárom získavať viac zákazníkov bez toho, aby museli zdvihnúť telefón.",
      contactHeading: "Kontakt",
      smsNote: "(SMS preferovaná, podpora v EN/HU/SK)",
      servicesHeading: "Služby",
      serviceLinks: [
        "Chatbot",
        "SMS agent",
        "Google recenzie",
        "Tvorba webstránok",
        "Cenová ponuka",
      ],
      copyright: "© 2026 Ádám Bauer. Všetky práva vyhradené.",
      location: "Šamorín, Slovensko",
    },
  },
};

export type Translations = (typeof translations)["en"];
