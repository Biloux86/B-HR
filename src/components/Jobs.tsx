import { useState } from "react";
import { UI } from "../styles/ui";
import { JOBS } from "../jobs/data";

export default function Jobs({ t }: { t: any }) {
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
    (q.trim() === "" || (j.title + " " + j.intro + " " + j.department).toLowerCase().includes(q.toLowerCase()));

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
        <select value={loc} onChange={(e) => setLoc(e.target.value)} className={UI.input + " bg-white"}>
          {locations.map((x, i) => (
            <option key={i} value={x}>
              {x}
            </option>
          ))}
        </select>
        <select value={ct} onChange={(e) => setCt(e.target.value)} className={UI.input + " bg-white"}>
          {contracts.map((x, i) => (
            <option key={i} value={x}>
              {x}
            </option>
          ))}
        </select>
        <select value={dep} onChange={(e) => setDep(e.target.value)} className={UI.input + " bg-white"}>
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
          <div className="col-span-full text-slate-500">Aucune offre ne correspond à vos filtres.</div>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 p-4 flex items-center justify-center" onClick={() => setOpen(null)}>
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

              <form className="mt-6 grid sm:grid-cols-2 gap-3" onSubmit={(e) => apply(e, open.id)}>
                <input name="name" required className={UI.input} placeholder="Nom" />
                <input name="email" type="email" required className={UI.input} placeholder="Email" />
                <input name="phone" className={UI.input} placeholder="Téléphone" />
                <input name="linkedin" className={UI.input} placeholder="Profil LinkedIn (optionnel)" />
                <input name="cvUrl" className={UI.input + " sm:col-span-2"} placeholder="Lien vers CV (Drive, Dropbox…)" />
                <textarea name="message" rows={4} className={UI.input + " sm:col-span-2"} placeholder="Message (optionnel)" />
                <div className="sm:col-span-2 flex justify-end gap-2">
                  <button type="button" onClick={() => setOpen(null)} className={UI.btnSecondary}>
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
        <div className="fixed inset-0 z-50 bg-black/40 p-4 flex items-center justify-center" onClick={() => setSpontOpen(false)}>
          <div className="max-w-xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className={UI.card}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{t.jobs.spont.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{t.jobs.spont.intro}</p>
                </div>
                <button onClick={() => setSpontOpen(false)} className={UI.btnSecondary}>
                  Fermer
                </button>
              </div>
              <form className="mt-6 grid sm:grid-cols-2 gap-3" onSubmit={(e) => apply(e, "spontaneous") }>
                <input name="name" required className={UI.input} placeholder="Nom" />
                <input name="email" type="email" required className={UI.input} placeholder="Email" />
                <input name="phone" className={UI.input} placeholder="Téléphone" />
                <input name="linkedin" className={UI.input} placeholder="Profil LinkedIn (optionnel)" />
                <input name="cvUrl" className={UI.input + " sm:col-span-2"} placeholder="Lien vers CV (Drive, Dropbox…)" />
                <textarea name="message" rows={4} className={UI.input + " sm:col-span-2"} placeholder="Message" />
                <div className="sm:col-span-2 flex justify-end gap-2">
                  <button type="button" onClick={() => setSpontOpen(false)} className={UI.btnSecondary}>
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
