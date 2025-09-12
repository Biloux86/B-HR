export const nl = {
  ui: {
    nav: {
      home: "Home",
      services: "Diensten",
      why: "Waarom wij?",
      resources: "Resources",
      jobs: "Vacatures",
      quote: "Offerte aanvragen",
      contact: "Contact",
      my: "Klantenruimte",
    },
    cta: {
      quote: "Vraag uw gratis offerte aan",
      getQuote: "Offerte",
      viewServices: "Ontdek onze diensten",
      my: "My B‑HR",
    },
    header: {
      phone: "+32 2 000 00 00",
      email: "contact@b-hr.example",
      maps: "https://maps.google.com",
    },
    home: {
      title: "B-HR | Uw sociaal secretariaat eenvoudig, snel en transparant",
      subtitle: "Lonen in alle vertrouwen",
      intro: "Bij B-HR vereenvoudigen we uw sociale administratie met:",
      features: [
        "⚡ Loonfiches in minder dan 48u.",
        "💶 Een duidelijke prijs per werknemer, alles inbegrepen.",
        "✅ Geen verborgen kosten: C4, sociale balansen en andere formaliteiten inbegrepen.",
        "🧾 Eenvoudige en transparante facturatie.",
      ],
      why: {
        title: "🚀 Waarom kiezen voor B-HR?",
        points: [
          "Gegarandeerde snelheid: loonfiches klaar binnen 48 uur.",
          "Eenvoud: één prijs per werknemer, zonder supplement.",
          "Transparantie: geen verrassingen op uw facturen.",
          "Begeleiding: wij gidsen u in al uw sociale verplichtingen (RSZ, Dimona, sociale balans, ...).",
        ],
      },
      services: {
        title: "📑 Onze diensten",
        items: [
          "Volledige loonadministratie.",
          "RSZ- en Dimona-aangiften.",
          "Juridisch en HR-advies.",
          "Opleidingen voor kmo’s.",
          "Digitale tools om tijd te winnen.",
        ],
        cta: "Ontdek onze diensten",
      },
      pricing: {
        title: "💶 100% transparante tarieven",
        intro: "Eén prijs per werknemer, alles inbegrepen:",
        items: [
          "✔️ Loonfiches",
          "✔️ RSZ/Dimona-aangiften",
          "✔️ Sociale documenten (C4, sociale balans, ...)",
          "✔️ Support en advies",
        ],
        cta: "Vraag uw gratis offerte aan",
      },
      testimonial:
        "Eindelijk een sociaal secretariaat dat to the point is: snelle loonverwerking, duidelijke prijs, geen verborgen kosten. Dank je B-HR!",
      contact: {
        cta: "Contacteer ons",
        closing: "Vereenvoudig vandaag nog het sociaal beheer van uw bedrijf.",
      },
    },
    services: {
      title: "Complete oplossingen",
      items: [
        { i: "💰", t: "Payroll", d: "Nauwkeurig, conform, automatische aangiften." },
        { i: "📄", t: "RSZ & Dimona", d: "Zonder stress, wettelijk conform." },
        { i: "🧾", t: "Contracten", d: "Opmaak, wijziging en opvolging." },
        { i: "⚖️", t: "Sociaal recht", d: "Persoonlijke begeleiding." },
        { i: "🎓", t: "Opleidingen", d: "Workshops en webinars." },
        { i: "🛠️", t: "Digitale tools", d: "Veilig HR‑platform." },
      ],
    },
    why: {
      title: "Waarom kmo’s ons vertrouwen",
      points: [
        { i: "📍", t: "Lokale expertise", d: "RSZ, Dimona, Belgische CAO’s." },
        { i: "💻", t: "Innovatieve tools", d: "Platform, calculators, 24/7." },
        { i: "🤝", t: "Persoonlijke aanpak", d: "Vaste contactpersoon." },
      ],
      testimonials: [
        { q: "We besparen tijd en fouten.", a: "— K. Janssens" },
        { q: "Duidelijk juridisch advies.", a: "— M. Peeters" },
      ],
    },
    jobs: {
      title: "Vacatures",
      filters: {
        search: "Zoek een functie",
        location: "Locatie",
        contract: "Contract",
        department: "Dienst",
        any: "Alle",
        cdi: "Onbepaalde duur",
        cdd: "Bepaalde duur",
        intern: "Stage",
      },
      apply: { title: "Solliciteer", send: "Verzenden", success: "Bedankt! Verzonden.", error: "Fout bij verzending." },
      spont: { title: "Spontane sollicitatie", intro: "Geen passende vacature? Stuur ons je CV en vertel wat je zoekt.", cta: "Spontaan solliciteren" },
    },
    resources: {
      title: "Handige resources",
      guides: [{ i: "📖", t: "RSZ‑gids 2025", href: "#" }],
      faq: [{ i: "❓", t: "Wat is Dimona?", href: "#" }],
      webinars: [{ i: "🎥", t: "Wettelijke nieuwigheden 2025", href: "#" }],
      models: [{ i: "📂", t: "Contractmodellen", href: "#" }],
    },
    contact: {
      toast: "Bedankt!",
      errors: {
        required: "Gelieve de verplichte velden in te vullen.",
        which: "Specifieer het sociaal secretariaat.",
        api: "API niet bereikbaar (demo).",
      },
      fields: {
        name: "Naam",
        email: "E‑mail",
        phone: "Telefoon",
        message: "Uw bericht",
        file: "Bijlage (optioneel)",
      },
      send: "Verzenden",
    },
    brand: { taglineDefault: "Business & Human Resources", taglineQuote: "Social Secretariat" },
    footer: {
      quick: ["Diensten", "Tarieven", "Blog", "FAQ", "Contact", "Juridisch", "Privacy"],
      rights: "Alle rechten voorbehouden.",
      legal: "Juridische vermeldingen",
    },
    common: { yes: "Ja", no: "Nee" },
  },
} as const;

export default nl;
