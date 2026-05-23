const items = [
  { icon: "📓", text: "Ainda anota suas vendas em caderno ou folha de papel" },
  { icon: "🤷", text: "Não faz ideia de qual produto vende mais" },
  { icon: "📦", text: "Perde dinheiro com estoque desorganizado" },
  { icon: "👥", text: "Não consegue acompanhar quem está vendendo mais na loja" },
  { icon: "📊", text: "Quer relatório, mas planilha é complicado demais" },
  { icon: "💰", text: "Acha caro pagar R$100+ por mês em sistema de gestão" },
];

export function PersonaSection() {
  return (
    <section id="beneficios" className="bg-brand-bg py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
            O No Cadernin é pra você se...
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-muted">
            Se algum desses pontos parece a sua loja, você está no lugar certo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.text}
              className="group rounded-card border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-4xl" aria-hidden>
                {it.icon}
              </span>
              <p className="mt-3 text-base font-medium leading-snug text-brand-fg">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
