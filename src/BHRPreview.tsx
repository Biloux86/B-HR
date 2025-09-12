import { useState } from "react";
import { UI } from "./styles/ui";
import * as translations from "./i18n";
import { JOBS } from "./jobs/data";

function Logo({ size = "md", variant = "auto" }) {
  const h = size === "lg" ? "h-12" : size === "sm" ? "h-8" : "h-10";
  const w =
    variant === "wordmark" ? "w-auto" : size === "lg" ? "w-12" : size === "sm" ? "w-8" : "w-10";
  const classes = `${h} ${w}`;
  const ICON = [
    "/mnt/data/Logo moderne B-HR avec figure stylisée.png",
    "/mnt/data/Logo%20moderne%20B-HR%20avec%20figure%20stylis%C3%A9e.png",
  ];
  const WORDMARK = [
    "/mnt/data/Logo B-HR avec slogan moderne.png",
    "/mnt/data/Logo%20B-HR%20avec%20slogan%20moderne.png",
  ];
  const srcs =
    variant === "icon" ? ICON : variant === "wordmark" ? WORDMARK : [...ICON, ...WORDMARK];
  const [idx, setIdx] = useState(0);
  const safeSrc = (s: string) => (s.includes("%") ? s : encodeURI(s));
  if (idx >= srcs.length)
    return (
      <div
        className={`${classes} rounded-md bg-[#0e64ff] text-white flex items-center justify-center font-bold`}
      >
        B
      </div>
    );
  return (
    <img
      src={safeSrc(srcs[idx])}
      alt="B‑HR logo"
      className={`${classes} rounded-md object-contain`}
      loading="eager"
      draggable={false}
      onError={() => setIdx((v) => v + 1)}
    />
  );
}

export default function BHRPreview() {
  const [lang, setLang] = useState<"fr" | "nl">("fr");
  const [route, setRoute] = useState(
    "home" as
      | "home"
      | "services"
      | "why"
      | "resources"
      | "jobs"
      | "quote"
      | "contact"
      | "my"
      | "context"
  );
  const t = translations[lang].ui;
  const nav = (r: string) =>
    route === r ? "text-[#0e64ff] font-semibold" : "text-slate-600 hover:text-[#0e64ff]";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f9ff] via-[#eef2ff] to-white text-slate-900 pt-24">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setRoute("home")}
          >
            <Logo size="lg" variant="icon" />
            <div className="leading-tight">
              <p className="font-semibold">B‑HR</p>
              <p className="text-xs text-slate-500">
                {route === "quote" ? t.brand.taglineQuote : t.brand.taglineDefault}
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className={nav("home")} onClick={() => setRoute("home")}>
              {t.nav.home}
            </button>
            <button className={nav("services")} onClick={() => setRoute("services")}>
              {t.nav.services}
            </button>
            <button className={nav("why")} onClick={() => setRoute("why")}>
              {t.nav.why}
            </button>
            <button className={nav("resources")} onClick={() => setRoute("resources")}>
              {t.nav.resources}
            </button>
            <button className={nav("jobs")} onClick={() => setRoute("jobs")}>
              {t.nav.jobs}
            </button>
            <button className={nav("quote")} onClick={() => setRoute("quote")}>
              {t.nav.quote}
            </button>
            <button className={nav("contact")} onClick={() => setRoute("contact")}>
              {t.nav.contact}
            </button>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <a
              href={t.header.maps}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline rounded-full px-3 py-1.5 bg-white/70 border border-slate-200"
            >
              📍
            </a>
            <button
              onClick={() => setLang(lang === "fr" ? "nl" : "fr")}
              className="px-3 py-1.5 rounded-2xl border border-slate-300 bg-white/70 backdrop-blur"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setRoute("my")}
              className="px-3 py-1.5 rounded-2xl border border-slate-300 bg-white/70 backdrop-blur"
            >
              {t.nav.my}
            </button>
            <button onClick={() => setRoute("quote")} className={UI.btnPrimary}>
              {t.cta.quote}
            </button>
          </div>
        </div>
      </header>

      {route === "home" && (
        <Home
          t={t}
          goQuote={() => setRoute("quote")}
          goServices={() => setRoute("services")}
          goContact={() => setRoute("contact")}
        />
      )}
      {route === "services" && <Services t={t} />}
      {route === "why" && <Why t={t} goQuote={() => setRoute("quote")} />}
      {route === "resources" && (
        <Resources t={t} goContext={() => setRoute("context")} />
      )}
      {route === "context" && <ContextPage t={t} />}
      {route === "jobs" && <Jobs t={t} />}
      {route === "quote" && <QuotePage lang={lang} t={t} />}
      {route === "contact" && <ContactPage t={t} />}
      {route === "my" && <MyPage t={t} />}

      <footer className="mt-16 bg-[#0b1b3b] text-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-3">
              <Logo size="sm" variant="wordmark" />
              <div className="leading-tight">
                <p className="font-semibold">B‑HR</p>
                <p className="text-xs opacity-80">{t.brand.taglineDefault}</p>
              </div>
            </div>
            <p className="mt-3 text-sm opacity-80">
              Bruxelles · {t.header.email} · {t.header.phone}
            </p>
          </div>
          <nav className="text-sm grid grid-cols-2 gap-2">
            {t.footer.quick.map((x: string, i: number) => (
              <span
                key={i}
                className="text-left opacity-90 hover:opacity-100 cursor-pointer"
              >
                {x}
              </span>
            ))}
          </nav>
          <div className="text-sm space-y-3">
            <div>
              © {new Date().getFullYear()} B‑HR. {t.footer.rights}
            </div>
            <div className="flex gap-3 text-lg">
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                in
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                f
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                ig
              </a>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Recevez nos conseils"
                className="flex-1 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="px-3 py-2 rounded-2xl bg-white text-[#0b1b3b]">
                S’abonner
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home({ t, goQuote, goServices, goContact }: any) {
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

function Services({ t }: any) {
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

function Why({ t, goQuote }: any) {
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
            “{x.q}”
            <div className="mt-2 text-slate-500">{x.a}</div>
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

function Jobs({ t }: any) {
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("Tous");
  const [ct, setCt] = useState("Tous");
  const [dep, setDep] = useState("Tous");
  const [open, setOpen] = useState<any>(null);
  const [spontOpen, setSpontOpen] = useState(false);
  const locations = ["Tous", ...Array.from(new Set(JOBS.map((j) => j.location)))];
  const contracts = ["Tous", "CDI", "CDD", "Stage"];
  const departments = ["Tous", ...Array.from(new Set(JOBS.map((j) => j.department)))];

  const matches = (j: any) =>
    (loc === "Tous" || j.location === loc) &&
    (ct === "Tous" || j.contract === ct) &&
    (dep === "Tous" || j.department === dep) &&
    (q.trim() === "" ||
      (j.title + " " + j.intro + " " + j.department)
        .toLowerCase()
        .includes(q.toLowerCase()));

  const filtered = JOBS.filter(matches);

  const apply = (e: any, jobId: string) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    if (!d.name || !d.email) return alert("Nom et e‑mail requis");
    fetch("/api/jobs/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...d, jobId, intent: "job_apply" }),
    })
      .then((r) => (r.ok ? alert(t.jobs.apply.success) : alert(t.jobs.apply.error)))
      .catch(() => alert(t.jobs.apply.error));
  };

  return (
    <section className={UI.section}>
      <h2 className="text-3xl font-bold mb-2">{t.jobs.title}</h2>
      <div className="grid md:grid-cols-4 gap-3 mt-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.jobs.filters.search}
          className={UI.input}
        />
        <select
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          className={UI.input + " bg-white"}
        >
          {locations.map((x, i) => (
            <option key={i} value={x}>
              {x}
            </option>
          ))}
        </select>
        <select
          value={ct}
          onChange={(e) => setCt(e.target.value)}
          className={UI.input + " bg-white"}
        >
          {contracts.map((x, i) => (
            <option key={i} value={x}>
              {x}
            </option>
          ))}
        </select>
        <select
          value={dep}
          onChange={(e) => setDep(e.target.value)}
          className={UI.input + " bg-white"}
        >
          {departments.map((x, i) => (
            <option key={i} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className={UI.card + " sm:col-span-2 lg:col-span-1 border-dashed"}>
          <h3 className="font-semibold text-lg">{t.jobs.spont.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{t.jobs.spont.intro}</p>
          <div className="mt-4">
            <button className={UI.btnPrimary} onClick={() => setSpontOpen(true)}>
              {t.jobs.spont.cta}
            </button>
          </div>
        </div>
        {filtered.map((j: any) => (
          <div key={j.id} className={UI.card}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">{j.title}</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  <span className={UI.chip}>📍 {j.location}</span>
                  <span className={UI.chip}>🗂 {j.department}</span>
                  <span className={UI.chip}>📃 {j.contract}</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">{j.intro}</p>
            <div className="mt-4 flex gap-2">
              <button className={UI.btnSecondary} onClick={() => setOpen(j)}>
                Voir l’offre
              </button>
              <button className={UI.btnPrimary} onClick={() => setOpen(j)}>
                {t.jobs.apply.title}
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-slate-500">
            Aucune offre ne correspond à vos filtres.
          </div>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 p-4 flex items-center justify-center"
          onClick={() => setOpen(null)}
        >
          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className={UI.card}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{open.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className={UI.chip}>📍 {open.location}</span>
                    <span className={UI.chip}>🗂 {open.department}</span>
                    <span className={UI.chip}>📃 {open.contract}</span>
                  </div>
                </div>
                <button onClick={() => setOpen(null)} className={UI.btnSecondary}>
                  Fermer
                </button>
              </div>

              <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                <div className="md:col-span-1">
                  <h4 className="font-semibold">Responsabilités</h4>
                  <ul className="mt-2 list-disc ml-5 text-slate-700">
                    {open.responsibilities.map((x: string, i: number) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-1">
                  <h4 className="font-semibold">Profil</h4>
                  <ul className="mt-2 list-disc ml-5 text-slate-700">
                    {open.requirements.map((x: string, i: number) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-1">
                  <h4 className="font-semibold">Avantages</h4>
                  <ul className="mt-2 list-disc ml-5 text-slate-700">
                    {open.benefits.map((x: string, i: number) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <form
                className="mt-6 grid sm:grid-cols-2 gap-3"
                onSubmit={(e) => apply(e, open.id)}
              >
                <input name="name" required className={UI.input} placeholder="Nom" />
                <input
                  name="email"
                  type="email"
                  required
                  className={UI.input}
                  placeholder="Email"
                />
                <input name="phone" className={UI.input} placeholder="Téléphone" />
                <input
                  name="linkedin"
                  className={UI.input}
                  placeholder="Profil LinkedIn (optionnel)"
                />
                <input
                  name="cvUrl"
                  className={UI.input + " sm:col-span-2"}
                  placeholder="Lien vers CV (Drive, Dropbox…)"
                />
                <textarea
                  name="message"
                  rows={4}
                  className={UI.input + " sm:col-span-2"}
                  placeholder="Message (optionnel)"
                />
                <div className="sm:col-span-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className={UI.btnSecondary}
                  >
                    Annuler
                  </button>
                  <button className={UI.btnPrimary}>{t.jobs.apply.send}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {spontOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 p-4 flex items-center justify-center"
          onClick={() => setSpontOpen(false)}
        >
          <div className="max-w-xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className={UI.card}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{t.jobs.spont.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{t.jobs.spont.intro}</p>
                </div>
                <button
                  onClick={() => setSpontOpen(false)}
                  className={UI.btnSecondary}
                >
                  Fermer
                </button>
              </div>
              <form
                className="mt-6 grid sm:grid-cols-2 gap-3"
                onSubmit={(e) => apply(e, "spontaneous")}
              >
                <input name="name" required className={UI.input} placeholder="Nom" />
                <input
                  name="email"
                  type="email"
                  required
                  className={UI.input}
                  placeholder="Email"
                />
                <input name="phone" className={UI.input} placeholder="Téléphone" />
                <input
                  name="linkedin"
                  className={UI.input}
                  placeholder="Profil LinkedIn (optionnel)"
                />
                <input
                  name="cvUrl"
                  className={UI.input + " sm:col-span-2"}
                  placeholder="Lien vers CV (Drive, Dropbox…)"
                />
                <textarea
                  name="message"
                  rows={4}
                  className={UI.input + " sm:col-span-2"}
                  placeholder="Message"
                />
                <div className="sm:col-span-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSpontOpen(false)}
                    className={UI.btnSecondary}
                  >
                    Annuler
                  </button>
                  <button className={UI.btnPrimary}>{t.jobs.apply.send}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Resources({ t, goContext }: any) {
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

function ContactPage({ t }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(fd);
    if (!data.name || !data.email || !data.phone) return alert(t.contact.errors.required);
    if ("file" in data) delete data.file;
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, intent: "contact" }),
    })
      .then((r) => (r.ok ? alert(t.contact.toast) : alert(t.contact.errors.api)))
      .catch(() => alert(t.contact.errors.api));
  };
  return (
    <section className={UI.section.replace("py-16", "py-12") + " max-w-3xl"}>
      <h2 className="text-3xl font-bold mb-2">{t.nav.contact}</h2>
      <p className="text-slate-600 mb-6">Nous répondons sous 24h.</p>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
        <input name="name" required className={UI.input} placeholder={t.contact.fields.name} />
        <input
          name="email"
          type="email"
          required
          className={UI.input}
          placeholder={t.contact.fields.email}
        />
        <input
          name="phone"
          required
          className={UI.input}
          placeholder={t.contact.fields.phone}
        />
        <input name="file" type="file" className={UI.input} />
        <textarea
          name="message"
          className={UI.input + " sm:col-span-2"}
          rows={4}
          placeholder={t.contact.fields.message}
        />
        <div className="sm:col-span-2 flex justify-end">
          <button className={UI.btnPrimary}>{t.contact.send}</button>
        </div>
      </form>
    </section>
  );
}

function QuotePage({ lang, t }: any) {
  const [affiliated, setAffiliated] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const req = [
      "name",
      "email",
      "phone",
      "company",
      "vat",
      "sector",
      "employees",
      "consent",
    ];
    if (req.some((k) => !d[k])) return alert("Champs manquants");
    if (d["affiliated"] === "yes" && !d["which"]) return alert("Indiquez le secrétariat social");
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...d,
        lang,
        intent: "online_quote",
      }),
    })
      .then((r) => (r.ok ? alert("Envoyé") : alert("Erreur API")))
      .catch(() => alert("Erreur API"));
  };

  return (
    <section className={UI.section.replace("py-16", "py-12") + " max-w-3xl"}>
      <h2 className="text-3xl font-bold mb-2">Simulation de devis en ligne</h2>
      <p className="text-slate-600">
        Remplissez le formulaire : vous recevez le montant estimatif par e‑mail et
        réservez un rendez‑vous en ligne ou par téléphone.
      </p>
      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" required className={UI.input} placeholder="Nom" />
        <input name="email" type="email" required className={UI.input} placeholder="Email" />
        <input name="phone" required className={UI.input} placeholder="Téléphone" />
        <input name="company" required className={UI.input} placeholder="Entreprise" />
        <input name="vat" required className={UI.input} placeholder="Numéro de TVA" />
        <div>
          <label className="block text-sm text-slate-600 mb-1">Secteur d’activité</label>
          <select name="sector" required defaultValue="" className={UI.input + " bg-white"}>
            <option value="" disabled>
              Choisissez un secteur
            </option>
            {[
              "Autre",
              "Horeca",
              "Transport",
              "Construction",
              "Santé",
            ].map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Nombre de salariés (plage)
          </label>
          <select
            name="employees"
            required
            defaultValue=""
            className={UI.input + " bg-white"}
          >
            <option value="" disabled>
              Choisissez une plage
            </option>
            {[
              "1–5",
              "6–10",
              "11–20",
              "21–50",
              "51–100",
              "100+",
            ].map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <fieldset className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
            <legend className="text-sm text-slate-600">
              Êtes‑vous affilié à un autre secrétariat social ?
            </legend>
            <div className="mt-2 flex flex-wrap gap-6">
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="affiliated"
                  value="yes"
                  required
                  className="accent-[#0e64ff]"
                  onChange={() => setAffiliated("yes")}
                />
                Oui
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="affiliated"
                  value="no"
                  className="accent-[#0e64ff]"
                  onChange={() => setAffiliated("no")}
                />
                Non
              </label>
            </div>
            {affiliated === "yes" && (
              <div className="mt-4">
                <input name="which" className={UI.input + " w-full"} placeholder="Si oui, lequel ?" />
              </div>
            )}
          </fieldset>
        </div>
        <textarea
          name="message"
          className={UI.input + " sm:col-span-2"}
          rows={4}
          placeholder="Votre message (optionnel)"
        />
        <label className="sm:col-span-2 text-sm text-slate-600 flex items-center gap-2">
          <input name="consent" type="checkbox" required className="accent-[#0e64ff]" /> Je consens au traitement de mes données
        </label>
        <div className="sm:col-span-2 flex justify-end gap-3">
          <button type="submit" className={UI.btnPrimary}>
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}

function MyPage({ t }: any) {
  return (
    <section className={UI.section.replace("py-16", "py-12") + " max-w-5xl"}>
      <h2 className="text-3xl font-bold">{t.nav.my}</h2>
      <p className="text-slate-600 mt-2">
        Espace client : documents, tickets, validations et suivi des paies.
      </p>
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
        <button className="px-5 py-2 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">
          Se connecter
        </button>
        <button className={UI.btnSecondary}>Demander un accès</button>
      </div>
    </section>
  );
}

function ContextPage({ t }: any) {
  return (
    <section className={UI.section + " max-w-4xl space-y-8"}>
      <h2 className="text-3xl font-bold">Contexte et objectifs</h2>
      <div className="space-y-4 text-slate-700">
        <p>
          Ce site est une démonstration des capacités de B‑HR à fournir une
          interface moderne et multilingue.
        </p>
        <p>
          Les contenus et données présentés sont fictifs et destinés à illustrer
          les fonctionnalités.
        </p>
      </div>
    </section>
  );
}
