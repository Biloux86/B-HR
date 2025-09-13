import { useState } from "react";

export default function Logo({ size = "md", variant = "auto" }) {
  const h = size === "lg" ? "h-12" : size === "sm" ? "h-8" : "h-10";
  const w = variant === "wordmark" ? "w-auto" : size === "lg" ? "w-12" : size === "sm" ? "w-8" : "w-10";
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
      <div className={`${classes} rounded-md bg-[#0e64ff] text-white flex items-center justify-center font-bold`}>
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
