import { UI } from "../styles/ui";

export default function Resources({ t, goContext }: { t: any; goContext: () => void }) {
  return (
    <section className={UI.section + " space-y-8"}>
      <h2 className="text-3xl font-bold">{t.resources.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...t.resources.guides, ...t.resources.faq, ...t.resources.webinars, ...t.resources.models].map(
          (r: any, i: number) => (
            <a key={i} href={r.href} className={UI.card + " block"}>
              <div className="text-2xl">{r.i}</div>
              <div className="mt-2 font-semibold">{r.t}</div>
            </a>
          )
        )}
      </div>
      <div className="mt-6">
        <button onClick={goContext} className={UI.btnSecondary}>
          Contexte & objectifs du site →
        </button>
      </div>
    </section>
  );
}
