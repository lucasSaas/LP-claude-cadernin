"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, NotebookPen } from "lucide-react";
import { LOGIN_URL, SIGNUP_URL, BRAND_NAME } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#preco", label: "Preço" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm border-b border-slate-200" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-heading font-extrabold text-brand-fg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary text-white">
            <NotebookPen className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg">{BRAND_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-fg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={LOGIN_URL}
            className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-fg"
          >
            Entrar
          </a>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center rounded-button bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary-dark transition-colors"
          >
            Começar agora
          </a>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-fg md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href={LOGIN_URL}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Entrar
            </a>
            <a
              href={SIGNUP_URL}
              className="mt-1 inline-flex items-center justify-center rounded-button bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white"
            >
              Começar agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
