import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "Anote uma venda em 10 segundos",
    description:
      "Descrição do produto, valor, vendedor e forma de pagamento. Pronto — venda registrada, com confirmação na hora. Funciona pra dinheiro, PIX e cartão, e o sistema já separa pra você no fim do dia. Bônus: você pode vender até item que não está cadastrado no estoque. Não trava a sua loja por causa de cadastro.",
    image: "/images/screens/nova-venda.png",
    imageAlt: "Tela de Nova Venda com produto adicionado",
    reverse: false,
  },
  {
    title: "Estoque que calcula seu lucro automático",
    description:
      "Cadastra o produto com o preço de custo. Vende pelo preço de venda. O No Cadernin calcula sua margem de lucro automaticamente. Você sabe quanto sobrou de verdade no fim do mês, não só quanto entrou.",
    image: "/images/screens/estoque.png",
    imageAlt: "Tela de Estoque Manual com produtos cadastrados",
    reverse: true,
    highlight: "Custo R$10 + Venda R$20 = Lucro R$10/un. Tudo calculado pra você.",
  },
  {
    title: "Ranking de vendedores e comissão automática",
    description:
      'Cada vendedor faz login no celular dele. Você vê quem vendeu mais, quanto faturou, e o sistema já calcula a comissão. Fim das discussões no fechamento, fim do "acho que vendi mais que ela".',
    image: "/images/screens/vendedores.png",
    imageAlt: "Tela de Vendedores com ranking de vendas",
    reverse: false,
  },
  {
    title: "Metas com calculadora inteligente",
    description:
      "Diz quanto quer faturar no mês. O No Cadernin calcula a meta diária e semanal que você precisa bater pra chegar lá. Acompanha tudo em tempo real — sem precisar saber Excel.",
    image: "/images/screens/metas.png",
    imageAlt: "Tela de Metas com calculadora",
    reverse: true,
  },
  {
    title: "Relatórios que cabem na mão",
    description:
      'Filtra por período. Vê total de vendas, lucro estimado, formas de pagamento mais usadas, produtos campeões. Tudo no celular, em segundos. Fim do "achismo".',
    image: "/images/screens/relatorios.png",
    imageAlt: "Tela de Relatórios com métricas",
    reverse: false,
  },
  {
    title: "Exporta tudo pra planilha num clique",
    description:
      "Precisa mandar pro contador? Quer fazer análise no Excel? Um clique e baixa tudo. Seus dados são seus — sem amarra, sem ficar refém da gente.",
    image: "/images/screens/configuracoes.png",
    imageAlt: "Tela de Configurações com botão exportar CSV",
    reverse: true,
  },
  {
    title: "Trancar funcionalidades com senha",
    description:
      "Funcionário não precisa ver tudo o que você vê. Trava com senha as áreas sensíveis (relatórios, estoque, dados da loja). Você decide o que cada um pode acessar.",
    image: "/images/screens/configuracoes.png",
    imageAlt: "Configurações com proteção por senha",
    reverse: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
            Tudo o que você precisa pra parar de perder dinheiro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-muted">
            6 ferramentas que substituem caderno, planilha e papo solto.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
