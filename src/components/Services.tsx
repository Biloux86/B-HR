import { UI } from "../styles/ui";

export default function Services({ t }: { t: any }) {
  return (
    <section className={UI.section}>
      <h2 className="text-3xl font-bold mb-6">{t.services.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.services.items.map((s: any, i: number) => (
          <div key={i} className={UI.card}>
            <div className="text-2xl">{s.i}</div>
            <h3 className="font-semibold mt-2">{s.t}</h3>
            <p className="text-sm text-slate-600 mt-1">{s.d}</p>
            <button className="mt-3 text-sm text-[#0e64ff]">En savoir plus →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
