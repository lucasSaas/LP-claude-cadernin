import { SIGNUP_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-primary-dark py-20 md:py-28">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-5xl">
          Pronto pra sair do caderno?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100 md:text-xl">
          R$4,99/mês. Sem fidelidade. Sem letra miúda.
        </p>

        <div className="mt-10">
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center rounded-button bg-white px-8 py-4 text-base font-semibold text-brand-primary shadow-xl transition-all hover:bg-blue-50 md:text-lg"
          >
            Quero começar agora →
          </a>
        </div>

        <p className="mt-5 text-sm text-blue-100">
          Cadastro em 1 minuto. Cancela quando quiser.
        </p>
      </div>
    </section>
  );
}
