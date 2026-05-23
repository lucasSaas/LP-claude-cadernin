"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { cn } from "@/lib/utils";

type Slide = {
  title: string;
  description: string;
  bonus: string | null;
  image: string;
  imageAlt: string;
  highlight: string | null;
};

const slides: Slide[] = [
  {
    title: "Anote uma venda em 10 segundos",
    description:
      "Descrição do produto, valor, vendedor e forma de pagamento. Pronto — venda registrada, com confirmação na hora. Funciona pra dinheiro, PIX e cartão, e o sistema já separa pra você no fim do dia.",
    bonus:
      "Bônus: você pode vender até item que não está cadastrado no estoque. Não trava a sua loja por causa de cadastro.",
    image: "/images/screens/nova-venda.png",
    imageAlt: "Tela de Nova Venda com produto adicionado",
    highlight: null,
  },
  {
    title: "Estoque que calcula seu lucro automático",
    description:
      "Cadastra o produto com o preço de custo. Vende pelo preço de venda. O No Cadernin calcula sua margem de lucro automaticamente. Você sabe quanto sobrou de verdade no fim do mês, não só quanto entrou.",
    bonus: null,
    image: "/images/screens/estoque.png",
    imageAlt: "Tela de Estoque Manual com produtos cadastrados",
    highlight: "Custo R$10 + Venda R$20 = Lucro R$10/un. Tudo calculado pra você.",
  },
  {
    title: "Ranking de vendedores e comissão automática",
    description:
      'Cada vendedor faz login no celular dele. Você vê quem vendeu mais, quanto faturou, e o sistema já calcula a comissão. Fim das discussões no fechamento, fim do "acho que vendi mais que ela".',
    bonus: null,
    image: "/images/screens/vendedores.png",
    imageAlt: "Tela de Vendedores com ranking de vendas",
    highlight: null,
  },
  {
    title: "Metas com calculadora inteligente",
    description:
      "Diz quanto quer faturar no mês. O No Cadernin calcula a meta diária e semanal que você precisa bater pra chegar lá. Acompanha tudo em tempo real — sem precisar saber Excel.",
    bonus: null,
    image: "/images/screens/metas.png",
    imageAlt: "Tela de Metas com calculadora",
    highlight: null,
  },
  {
    title: "Relatórios que cabem na mão",
    description:
      'Filtra por período. Vê total de vendas, lucro estimado, formas de pagamento mais usadas, produtos campeões. Tudo no celular, em segundos. Fim do "achismo".',
    bonus: null,
    image: "/images/screens/relatorios.png",
    imageAlt: "Tela de Relatórios com métricas",
    highlight: null,
  },
  {
    title: "Exporta tudo pra planilha num clique",
    description:
      "Precisa mandar pro contador? Quer fazer análise no Excel? Um clique e baixa tudo. Seus dados são seus — sem amarra, sem ficar refém da gente.",
    bonus: null,
    image: "/images/screens/configuracoes.png",
    imageAlt: "Tela de Configurações com botão exportar CSV",
    highlight: null,
  },
  {
    title: "Trancar funcionalidades com senha",
    description:
      "Funcionário não precisa ver tudo o que você vê. Trava com senha as áreas sensíveis (relatórios, estoque, dados da loja). Você decide o que cada um pode acessar.",
    bonus: null,
    image: "/images/screens/configuracoes.png",
    imageAlt: "Configurações com proteção por senha",
    highlight: null,
  },
];

export function FeaturesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 25 },
    [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const currentSlide = slides[selectedIndex];

  return (
    <section id="funcionalidades" className="bg-brand-bg py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl lg:text-5xl">
            Tudo o que você precisa pra parar de perder dinheiro
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            7 ferramentas que substituem caderno, planilha e papo solto.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, idx) => (
                <div key={idx} className="min-w-0 flex-[0_0_100%]">
                  <PhoneFrame src={slide.image} alt={slide.imageAlt} />
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 text-center lg:text-left">
            <h3 className="font-heading text-2xl font-extrabold leading-tight text-brand-fg md:text-3xl">
              {currentSlide.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
              {currentSlide.description}
            </p>
            {currentSlide.bonus && (
              <p className="mt-3 text-base leading-relaxed text-brand-muted md:text-lg">
                {currentSlide.bonus}
              </p>
            )}
            {currentSlide.highlight && (
              <div className="mt-6 inline-block rounded-xl border border-amber-200 bg-brand-warning px-4 py-3">
                <p className="text-sm font-semibold text-amber-900 md:text-base">
                  {currentSlide.highlight}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 lg:mt-12">
          <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar funcionalidade">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === selectedIndex}
                aria-label={`Ir pro slide ${idx + 1}`}
                onClick={() => scrollTo(idx)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  idx === selectedIndex
                    ? "w-8 bg-brand-primary"
                    : "w-2 bg-slate-300 hover:bg-slate-400",
                )}
              />
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Slide anterior"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-fg transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Próximo slide"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-fg transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
