import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-20">
      <div className="text-center">
        <p className="font-heading text-6xl font-extrabold text-brand-primary">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-brand-fg md:text-3xl">
          Página não encontrada
        </h1>
        <p className="mt-3 text-brand-muted">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-button bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary-dark"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
