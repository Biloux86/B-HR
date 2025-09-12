import { UI } from "../styles/ui";

export default function MyPage({ t }: { t: any }) {
  return (
    <section className={UI.section.replace("py-16", "py-12") + " max-w-5xl"}>
      <h2 className="text-3xl font-bold">{t.nav.my}</h2>
      <p className="text-slate-600 mt-2">Espace client : documents, tickets, validations et suivi des paies.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {[
          { t: "Documents", d: "Contrats, fiches de paie, rapports." },
          { t: "Tickets", d: "Suivi des demandes en temps réel." },
          { t: "Validations", d: "Absences, prestations, notes de frais." },
        ].map((b, i) => (
          <div key={i} className={UI.card}>
            <h3 className="font-semibold">{b.t}</h3>
            <p className="text-sm text-slate-600 mt-1">{b.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <button className="px-5 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">Se connecter</button>
        <button className={UI.btnSecondary}>Demander un accès</button>
      </div>
    </section>
  );
}
