import { Check } from "lucide-react";
import { SIGNUP_URL } from "@/lib/constants";

const features = [
  "Vendas ilimitadas",
  "Estoque ilimitado",
  "Vendedores ilimitados",
  "Metas ilimitadas",
  "Relatórios completos com filtro por período",
  "Cálculo automático de margem de lucro",
  "Exportação pra planilha (CSV)",
  "Acesso pelo celular, tablet e computador",
  "Backup automático na nuvem",
  "Trancar funcionalidades com senha",
  "Atualizações grátis pra sempre",
  "Suporte por WhatsApp",
];

export function PricingSection() {
  return (
    <section id="preco" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
            Um plano simples. Sem letra miúda.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-muted">
            Pra quem cansou de ouvir &ldquo;tem que falar com o consultor&rdquo;.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-card border-2 border-brand-primary bg-white shadow-xl shadow-blue-600/10">
          <div className="bg-brand-primary/5 px-6 py-8 text-center md:px-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">
              Plano Único
            </p>
            <div className="mt-3 flex items-baseline justify-center gap-1">
              <span className="font-heading text-6xl font-extrabold text-brand-fg md:text-7xl">
                R$ 4,99
              </span>
              <span className="text-lg font-medium text-brand-muted">/ mês</span>
            </div>
            <p className="mt-2 text-sm text-brand-muted">Cancele quando quiser. Sem fidelidade.</p>
          </div>

          <div className="px-6 py-8 md:px-10">
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-6">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-success" aria-hidden />
                  <span className="text-sm text-brand-fg">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={SIGNUP_URL}
              className="mt-8 inline-flex w-full items-center justify-center rounded-button bg-brand-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-brand-primary-dark hover:shadow-xl"
            >
              Começar agora por R$4,99/mês →
            </a>

            <p className="mt-4 text-center text-xs text-brand-muted">
              Sem fidelidade. Sem multa. Cancela quando quiser direto no painel, sem precisar
              ligar pra ninguém.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
