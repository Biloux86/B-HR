export const fr = {
  ui: {
    nav: {
      home: "Accueil",
      services: "Nos services",
      why: "Pourquoi nous choisir ?",
      resources: "Ressources",
      jobs: "Offres d’emploi",
      quote: "Demander un devis",
      contact: "Contact",
      my: "Espace client",
    },
    cta: {
      quote: "Demander un devis gratuit",
      getQuote: "Obtenir un devis",
      viewServices: "Voir les services",
      my: "My B‑HR",
    },
    hero: {
      title: { pre: "Votre gestion sociale simplifiée", post: "" },
      desc: "Expertise locale, outils digitaux et accompagnement sur mesure pour les PME en Belgique.",
      kpis: [
        { label: "Fiches de paie / mois" },
        { label: "SLA moyen" },
        { label: "Satisfaction" },
      ],
      security: "RGPD & sécurité : chiffrement, contrôle d’accès, traçabilité.",
    },
    header: {
      phone: "+32 2 000 00 00",
      email: "contact@b-hr.example",
      maps: "https://maps.google.com",
    },
    home: {
      quick: [
        { t: "Gestion de la paie", d: "Calculs, fiches, déclarations ONSS/Dimona.", to: "services" },
        { t: "Conseils juridiques", d: "Droit social & conventions collectives.", to: "services" },
        { t: "Outils digitaux", d: "Plateforme sécurisée, accès 24/7.", to: "services" },
      ],
    },
    services: {
      title: "Des solutions complètes pour votre gestion sociale",
      items: [
        { i: "💰", t: "Gestion de la paie", d: "Calcul précis, fiches conformes, déclarations automatiques." },
        { i: "📄", t: "Déclarations ONSS & Dimona", d: "Trimestrielles et mensuelles sans stress." },
        { i: "🧾", t: "Contrats de travail", d: "Rédaction, modification et suivi sécurisés." },
        { i: "⚖️", t: "Conseils en droit social", d: "Accompagnement personnalisé et opérationnel." },
        { i: "🎓", t: "Formations employeurs", d: "Ateliers & webinaires sur vos obligations." },
        { i: "🛠️", t: "Outils digitaux", d: "Plateforme RH sécurisée, démo disponible." },
      ],
    },
    why: {
      title: "Pourquoi des centaines de PME nous font confiance",
      points: [
        { i: "📍", t: "Expertise locale", d: "ONSS, Dimona, CCT belges." },
        { i: "💻", t: "Outils innovants", d: "Plateforme sécurisée, calculateurs, 24/7." },
        { i: "🤝", t: "Accompagnement personnalisé", d: "Interlocuteur dédié." },
      ],
      testimonials: [
        { q: "Grâce à B‑HR, nous avons gagné un temps précieux !", a: "— Claire D., PME Bruxelles" },
        { q: "Support juridique réactif et clair.", a: "— T. Moreau, Retail" },
        { q: "Mise en place rapide des outils digitaux.", a: "— H. Van den Berg, ASBL" },
      ],
    },
    jobs: {
      title: "Offres d’emploi",
      filters: {
        search: "Rechercher un poste",
        location: "Localisation",
        contract: "Contrat",
        department: "Service",
        any: "Tous",
        cdi: "CDI",
        cdd: "CDD",
        intern: "Stage",
      },
      apply: {
        title: "Postuler à cette offre",
        send: "Envoyer la candidature",
        success: "Merci ! Candidature envoyée.",
        error: "Erreur d’envoi.",
      },
      spont: {
        title: "Candidature spontanée",
        intro: "Aucune offre ne correspond ? Envoyez-nous votre CV et dites-nous ce que vous recherchez.",
        cta: "Postuler spontanément",
      },
    },
    resources: {
      title: "Des ressources pour vous aider au quotidien",
      guides: [
        { i: "📖", t: "Guide 2025 des déclarations ONSS", href: "#" },
        { i: "✅", t: "Checklist embauche Belgique", href: "#" },
      ],
      faq: [
        { i: "❓", t: "Qu’est‑ce que la Dimona ?", href: "#" },
        { i: "🧮", t: "Calculer les cotisations", href: "#" },
      ],
      webinars: [ { i: "🎥", t: "Nouveautés légales 2025 (webinaire)", href: "#" } ],
      models: [ { i: "📂", t: "Modèles de contrats", href: "#" } ],
    },
    contact: {
      toast: "Merci ! Votre demande a bien été envoyée.",
      errors: {
        required: "Veuillez remplir tous les champs obligatoires.",
        which: "Indiquez le secrétariat social.",
        api: "Impossible de joindre l’API (démo).",
      },
      fields: {
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        message: "Votre message",
        file: "Pièce jointe (optionnel)",
      },
      send: "Envoyer",
    },
    brand: { taglineDefault: "Business & Human Resources", taglineQuote: "Social Secretariat" },
    footer: {
      quick: [
        "Nos services",
        "Tarifs",
        "Blog",
        "FAQ",
        "Contact",
        "Mentions légales",
        "Confidentialité",
      ],
      rights: "Tous droits réservés.",
      legal: "Mentions légales",
    },
    common: { yes: "Oui", no: "Non" },
  },
} as const;

export default fr;