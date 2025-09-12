export interface Job {
  id: string;
  title: string;
  location: string;
  contract: string;
  department: string;
  intro: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const JOBS: Job[] = [
  {
    id: "payroll-specialist",
    title: "Payroll Specialist",
    location: "Bruxelles",
    contract: "CDI",
    department: "Paie",
    intro: "Vous gérez un portefeuille de PME et assurez un calcul de paie impeccable.",
    responsibilities: ["Préparer et contrôler les fiches de paie", "DMFA/ONSS et Dimona", "Conseils de premier niveau"],
    requirements: ["2+ ans d’expérience payroll", "FR/NL professionnel", "Outils SIRH"],
    benefits: ["Télétravail hybride", "Budget formation", "Assurance groupe"],
  },
  {
    id: "juriste-social",
    title: "Juriste en droit social",
    location: "Namur",
    contract: "CDD",
    department: "Juridique",
    intro: "Vous accompagnez nos clients sur leurs questions de droit social.",
    responsibilities: ["Rédaction de contrats", "Veille légale", "Appui aux consultants"],
    requirements: ["Master en droit", "Connaissance ONSS/CP", "Capacité pédagogique"],
    benefits: ["Horaire flexible", "Télétravail", "Équipement IT"],
  },
  {
    id: "stagiaire-hr",
    title: "Stagiaire RH",
    location: "Liège",
    contract: "Stage",
    department: "RH",
    intro: "Vous participez aux projets RH et au support administratif.",
    responsibilities: ["Onboarding", "Soutien recrutement", "Mise à jour dossiers"],
    requirements: ["Étudiant·e RH", "Rigoureux·se", "Esprit d’équipe"],
    benefits: ["Encadrement", "Possibilité d’embauche", "Titre‑repas"],
  },
];

export default JOBS;