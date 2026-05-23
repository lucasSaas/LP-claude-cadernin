"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "no-cadernin-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!stored) setVisible(true);
  }, []);

  function handle(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // localStorage may be disabled — fall through and just hide
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-card border border-slate-200 bg-white p-4 shadow-2xl md:inset-x-auto md:left-1/2 md:bottom-5 md:-translate-x-1/2 md:p-5"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-brand-fg md:max-w-xl">
          A gente usa cookies pra melhorar sua experiência. Continuando, você concorda com nossa{" "}
          <Link href="/privacidade" className="font-semibold text-brand-primary hover:underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 md:flex-shrink-0">
          <button
            type="button"
            onClick={() => handle("declined")}
            className="inline-flex items-center justify-center rounded-button border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-brand-fg hover:bg-slate-50"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => handle("accepted")}
            className="inline-flex items-center justify-center rounded-button bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-brand-primary-dark"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
