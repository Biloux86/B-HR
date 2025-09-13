import { UI } from "../styles/ui";

export default function ContextPage() {
  return (
    <section className={UI.section + " max-w-4xl space-y-8"}>
      <h2 className="text-3xl font-bold">Contexte et objectifs</h2>
      <div className="space-y-4 text-slate-700">
        <p>Ce site est une démonstration des capacités de B‑HR à fournir une interface moderne et multilingue.</p>
        <p>Les contenus et données présentés sont fictifs et destinés à illustrer les fonctionnalités.</p>
      </div>
    </section>
  );
}
