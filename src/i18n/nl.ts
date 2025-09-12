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
      quote: "Gratis offerte",
      getQuote: "Offerte",
      viewServices: "Diensten bekijken",
      my: "My B‑HR",
    },
    header: {
      phone: "+32 2 000 00 00",
      email: "contact@b-hr.example",
      maps: "https://maps.google.com",
    },
    home: {
      quick: [
        { t: "Payroll", d: "Berekening, fiches, RSZ/Dimona.", to: "services" },
        { t: "Juridisch advies", d: "Sociaal recht & CAO.", to: "services" },
        { t: "Digitale tools", d: "Veilig platform, 24/7.", to: "services" },
      ],
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
