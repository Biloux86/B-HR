export const UI = {
  btnPrimary:
    "px-5 py-3 rounded-2xl bg-gradient-to-tr from-[#0b1b3b] to-[#0e64ff] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition",
  btnSecondary:
    "px-5 py-3 rounded-2xl border border-slate-300/60 bg-white/70 backdrop-blur hover:bg-white transition",
  input:
    "rounded-2xl border border-slate-300/60 bg-white/80 backdrop-blur px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e64ff]/30 focus:border-[#0e64ff]/40 transition",
  card:
    "rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition",
  section: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
  chip:
    "inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-slate-200 bg-white/70",
} as const;

export default UI;
