import { UI } from "../styles/ui";

export default function Why({ t, goQuote }: { t: any; goQuote: () => void }) {
  return (
    <section className={UI.section}>
      <h2 className="text-3xl font-bold mb-6">{t.why.title}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {t.why.points.map((p: any, i: number) => (
          <div key={i} className={UI.card}>
            <div className="text-2xl">{p.i}</div>
            <h3 className="font-semibold mt-2">{p.t}</h3>
            <p className="text-sm text-slate-600 mt-1">{p.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {t.why.testimonials.map((x: any, i: number) => (
          <div key={i} className={UI.card + " text-sm text-slate-700"}>
            “{x.q}”<div className="mt-2 text-slate-500">{x.a}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button onClick={goQuote} className={UI.btnPrimary}>
          {t.cta.quote}
        </button>
      </div>
    </section>
  );
}
