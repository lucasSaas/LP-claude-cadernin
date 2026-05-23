import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SIGNUP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <div className="text-center lg:text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Ainda anota no caderno?
          </span>

          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-fg sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
            Saia do caderno.
            <br />
            <span className="text-brand-primary">Comece a vender com cabeça.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-muted lg:mx-0">
            Controle suas vendas, estoque, metas e vendedores pelo celular — sem nota fiscal,
            sem maquininha cara, sem complicação. Por menos de R$5 por mês.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={SIGNUP_URL}
              className="inline-flex w-full items-center justify-center rounded-button bg-brand-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-brand-primary-dark hover:shadow-xl hover:shadow-blue-600/25 sm:w-auto"
            >
              Começar por R$4,99/mês →
            </a>
            <Link
              href="#video"
              className="inline-flex w-full items-center justify-center rounded-button border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-brand-fg transition-colors hover:border-brand-primary hover:text-brand-primary sm:w-auto"
            >
              Ver como funciona em 60 segundos
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-brand-muted lg:justify-start">
            {["Sem fidelidade", "Cancele quando quiser", "Funciona em qualquer celular"].map(
              (t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-success" aria-hidden />
                  <span>{t}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -right-10 top-10 hidden h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl lg:block" />
          <div className="absolute -left-10 bottom-0 hidden h-56 w-56 rounded-full bg-brand-success/10 blur-3xl lg:block" />
          <div className="relative -rotate-2 transition-transform duration-500 hover:rotate-0">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5">
              <Image
                src="/images/screens/home.png"
                alt="Tela inicial do No Cadernin no celular"
                width={1200}
                height={966}
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 80vw, 90vw"
                className="block h-auto w-full max-w-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
