const steps = [
  {
    n: "1",
    title: "Cadastra sua loja em 1 minuto",
    desc: "Nome da loja, vendedores e os produtos principais. Pronto, já pode usar.",
  },
  {
    n: "2",
    title: "Anota cada venda em 10 segundos",
    desc: "Pelo celular, na hora, sem perder o cliente. Descrição, valor, vendedor, forma de pagamento. Bateu, salvou.",
  },
  {
    n: "3",
    title: "Acompanha tudo no dashboard",
    desc: "Vendas do dia, lucro, estoque baixo, ranking dos vendedores, metas. Tudo na palma da mão.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
            Em 3 passos você sai do caderno
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 text-left md:flex-col md:gap-4">
              <div className="font-heading text-6xl font-extrabold leading-none text-brand-primary md:text-7xl">
                {s.n}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-brand-fg md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-brand-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
