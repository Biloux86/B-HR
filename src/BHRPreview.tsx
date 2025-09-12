import { useState } from "react";
import { UI } from "./styles/ui";
import * as translations from "./i18n";
import Logo from "./components/Logo";
import Home from "./components/Home";
import Services from "./components/Services";
import Why from "./components/Why";
import Jobs from "./components/Jobs";
import Resources from "./components/Resources";
import ContactPage from "./components/ContactPage";
import QuotePage from "./components/QuotePage";
import MyPage from "./components/MyPage";
import ContextPage from "./components/ContextPage";

export default function BHRPreview() {
  const [lang, setLang] = useState<"fr" | "nl">("fr");
  const [route, setRoute] = useState<
    | "home"
    | "services"
    | "why"
    | "resources"
    | "jobs"
    | "quote"
    | "contact"
    | "my"
    | "context"
  >("home");
  const t = translations[lang].ui;
  const nav = (r: string) =>
    route === r ? "text-[#0e64ff] font-semibold" : "text-slate-600 hover:text-[#0e64ff]";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f9ff] via-[#eef2ff] to-white text-slate-900 pt-24">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setRoute("home")}>
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
      {route === "resources" && <Resources t={t} goContext={() => setRoute("context")} />}
      {route === "context" && <ContextPage />}
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
              <span key={i} className="text-left opacity-90 hover:opacity-100 cursor-pointer">
                {x}
              </span>
            ))}
          </nav>
          <div className="text-sm space-y-3">
            <div>© {new Date().getFullYear()} B‑HR. {t.footer.rights}</div>
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
              <button className="px-3 py-2 rounded-2xl bg-white text-[#0b1b3b]">S’abonner</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
