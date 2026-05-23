import { Star } from "lucide-react";

// TODO: substituir por depoimentos reais antes de publicar
const testimonials = [
  {
    name: "[Nome real do lojista 1]",
    initials: "L1",
    business: "[Nome da loja]",
    city: "[Cidade]",
    quote:
      "[Depoimento real com pelo menos UM número específico — aumento de vendas, número de vendedores controlados, produto descoberto que não dava lucro, etc.]",
  },
  {
    name: "[Nome real do lojista 2]",
    initials: "L2",
    business: "[Nome da loja]",
    city: "[Cidade]",
    quote:
      "[Depoimento real com pelo menos UM número específico — aumento de vendas, número de vendedores controlados, produto descoberto que não dava lucro, etc.]",
  },
  {
    name: "[Nome real do lojista 3]",
    initials: "L3",
    business: "[Nome da loja]",
    city: "[Cidade]",
    quote:
      "[Depoimento real com pelo menos UM número específico — aumento de vendas, número de vendedores controlados, produto descoberto que não dava lucro, etc.]",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
            O que os lojistas que testaram estão dizendo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-muted">
            Histórias reais de quem trocou o caderno pelo No Cadernin.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.initials}
              className="flex flex-col rounded-card border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 font-heading text-base font-bold text-brand-primary"
                >
                  {t.initials}
                </div>
                <div
                  className="flex gap-0.5 text-amber-500"
                  aria-label="5 de 5 estrelas"
                  role="img"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-brand-fg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-brand-muted">
                <span className="font-semibold text-brand-fg">{t.name}</span>
                <br />
                {t.business} · {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
