import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter conhecimento técnico pra usar?",
    a: "Não. Foi feito pra quem nunca usou sistema de gestão. Se você sabe abrir o WhatsApp, você sabe usar o No Cadernin.",
  },
  {
    q: "Funciona no meu celular?",
    a: "Sim. O No Cadernin foi feito pra celular antes de qualquer coisa. Roda em Android, iPhone, tablet e computador.",
  },
  {
    q: "Preciso emitir nota fiscal ou ter maquininha?",
    a: "Não. O No Cadernin é pra controle interno da sua loja — anotar venda, controlar estoque, acompanhar vendedor, ver lucro. Você não emite nota nem cobra cartão por ele. Pra isso, continua usando sua maquininha do banco ou Stone, por exemplo.",
  },
  {
    q: "E se eu cancelar? Perco meus dados?",
    a: "Não. Você pode exportar todos seus dados pra planilha (Excel/Google Sheets) a qualquer momento, mesmo depois de cancelar. Seus dados são seus.",
  },
  {
    q: "Posso ter vários vendedores, cada um no celular dele?",
    a: "Sim. Cada vendedor tem login próprio. Você vê quem vendeu o quê, e o sistema já calcula comissão por venda.",
  },
  {
    q: "Como funciona o cálculo de lucro automático?",
    a: "Quando você cadastra o produto no estoque, coloca o preço de custo (quanto você pagou). Quando vende, coloca o preço de venda. O No Cadernin faz a conta sozinho e mostra sua margem de lucro real no relatório.",
  },
  {
    q: "Tem desconto pra pagamento anual?",
    a: "Em breve. Por enquanto, mantemos só o plano mensal de R$4,99 — porque a gente quer que você cancele se não estiver entregando valor.",
  },
  {
    q: "E se eu não gostar?",
    a: "Cancela quando quiser. Sem fidelidade, sem multa, sem ligar pra ninguém. Faz direto pelo painel.",
  },
  {
    q: "Funciona pra qualquer tipo de loja?",
    a: "Pra qualquer loja que venda produto e queira saber quanto vendeu, quem vendeu, e quanto sobrou. Loja de roupas, mercearia, ferragem, pet shop, papelaria, conveniência, cosméticos — funciona pra todas.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
            Perguntas que todo lojista faz
          </h2>
        </div>

        <Accordion className="mt-10 overflow-hidden rounded-card border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="border-b border-slate-200 last:border-b-0"
            >
              <AccordionTrigger className="px-5 py-5 text-left text-base font-semibold text-brand-fg hover:no-underline md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 text-base leading-relaxed text-brand-muted">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
