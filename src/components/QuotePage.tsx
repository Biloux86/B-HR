import { useState } from "react";
import { UI } from "../styles/ui";

export default function QuotePage({ lang, t }: { lang: string; t: any }) {
  const [affiliated, setAffiliated] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const req = ["name", "email", "phone", "company", "vat", "sector", "employees", "consent"];
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
            {["Autre", "Horeca", "Transport", "Construction", "Santé"].map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Nombre de salariés (plage)</label>
          <select name="employees" required defaultValue="" className={UI.input + " bg-white"}>
            <option value="" disabled>
              Choisissez une plage
            </option>
            {["1–5", "6–10", "11–20", "21–50", "51–100", "100+"].map((r, i) => (
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
        <textarea name="message" className={UI.input + " sm:col-span-2"} rows={4} placeholder="Votre message (optionnel)" />
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
