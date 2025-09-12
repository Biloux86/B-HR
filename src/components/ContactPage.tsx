import { UI } from "../styles/ui";

export default function ContactPage({ t }: { t: any }) {
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
        <input name="email" type="email" required className={UI.input} placeholder={t.contact.fields.email} />
        <input name="phone" required className={UI.input} placeholder={t.contact.fields.phone} />
        <input name="file" type="file" className={UI.input} />
        <textarea name="message" className={UI.input + " sm:col-span-2"} rows={4} placeholder={t.contact.fields.message} />
        <div className="sm:col-span-2 flex justify-end">
          <button className={UI.btnPrimary}>{t.contact.send}</button>
        </div>
      </form>
    </section>
  );
}
