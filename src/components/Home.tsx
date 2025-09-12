import { UI } from "../styles/ui";

interface Props {
  t: any;
  goQuote: () => void;
  goServices: () => void;
  goContact: () => void;
}

export default function Home({ t, goQuote, goServices, goContact }: Props) {
  return (
    <section className={UI.section + " space-y-16"}>
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#0b1b3b] to-[#0e64ff] bg-clip-text text-transparent">
          {t.home.title}
        </h1>
        <p className="mt-2 text-lg text-slate-700">{t.home.subtitle}</p>
        <p className="mt-4 text-slate-700">{t.home.intro}</p>
        <ul className="mt-4 space-y-2 text-slate-700">
          {t.home.features.map((f: string, i: number) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold">{t.home.why.title}</h2>
        <ul className="space-y-2 text-slate-700">
          {t.home.why.points.map((p: string, i: number) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold">{t.home.services.title}</h2>
        <ul className="space-y-2 text-slate-700">
          {t.home.services.items.map((s: string, i: number) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <button onClick={goServices} className={UI.btnSecondary}>
          {t.home.services.cta}
        </button>
      </div>

      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold">{t.home.pricing.title}</h2>
        <p className="text-slate-700">{t.home.pricing.intro}</p>
        <ul className="space-y-2 text-slate-700">
          {t.home.pricing.items.map((p: string, i: number) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <button onClick={goQuote} className={UI.btnPrimary}>
          {t.home.pricing.cta}
        </button>
      </div>

      <blockquote className="max-w-3xl italic text-slate-700">
        “{t.home.testimonial}”
      </blockquote>

      <div className="max-w-3xl space-y-2">
        <button onClick={goContact} className={UI.btnSecondary}>
          📞 {t.home.contact.cta}
        </button>
        <p className="text-slate-700">{t.home.contact.closing}</p>
      </div>
    </section>
  );
}
