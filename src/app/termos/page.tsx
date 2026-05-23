import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — No Cadernin",
  description: "Termos de uso do No Cadernin.",
};

export default function TermosPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 md:px-6">
      <h1 className="font-heading text-3xl font-extrabold text-brand-fg md:text-4xl">
        Termos de Uso
      </h1>
      <p className="mt-6 text-base text-brand-muted">Em construção.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center text-sm font-semibold text-brand-primary hover:underline"
      >
        ← Voltar para o início
      </Link>
    </main>
  );
}
