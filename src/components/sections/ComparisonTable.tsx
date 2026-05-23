const columns = ["Caderno", "Excel/planilha", "ERP gigante", "No Cadernin"] as const;
type Col = typeof columns[number];

const rows: { label: string; values: Record<Col, string> }[] = [
  {
    label: "Custo mensal",
    values: {
      Caderno: "Grátis (mas erro sai caro)",
      "Excel/planilha": "Grátis (se souber)",
      "ERP gigante": "R$100–300",
      "No Cadernin": "R$4,99",
    },
  },
  {
    label: "Quanto tempo pra aprender",
    values: {
      Caderno: "Já sabe",
      "Excel/planilha": "2 semanas estudando",
      "ERP gigante": "30+ dias de treinamento",
      "No Cadernin": "15 minutos",
    },
  },
  {
    label: "Funciona no celular",
    values: {
      Caderno: "Não",
      "Excel/planilha": "Mais ou menos",
      "ERP gigante": "Limitado",
      "No Cadernin": "Sim, foi feito pra isso",
    },
  },
  {
    label: "Login pra vendedores",
    values: {
      Caderno: "Não",
      "Excel/planilha": "Não",
      "ERP gigante": "Sim (pago à parte)",
      "No Cadernin": "Sim, incluído",
    },
  },
  {
    label: "Backup automático",
    values: {
      Caderno: "Pode perder",
      "Excel/planilha": "Pode perder",
      "ERP gigante": "Sim",
      "No Cadernin": "Sim, na nuvem",
    },
  },
  {
    label: "Calcula lucro automático",
    values: {
      Caderno: "Você que faz",
      "Excel/planilha": "Você que faz",
      "ERP gigante": "Sim",
      "No Cadernin": "Sim",
    },
  },
  {
    label: "Exporta pra planilha",
    values: {
      Caderno: "—",
      "Excel/planilha": "Já é planilha",
      "ERP gigante": "Geralmente sim",
      "No Cadernin": "1 clique",
    },
  },
];

export function ComparisonTable() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
            Por que não usar caderno, planilha ou um ERP gigante?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-muted">
            A gente fez essa conta pra você. Olhe com calma.
          </p>
        </div>

        <div className="mt-12 hidden overflow-hidden rounded-card border border-slate-200 bg-white md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-50">
                <th className="w-[28%] px-5 py-4 text-sm font-semibold text-brand-muted"></th>
                {columns.map((c) => (
                  <th
                    key={c}
                    className={`px-5 py-4 text-sm font-semibold ${
                      c === "No Cadernin"
                        ? "bg-blue-50 text-brand-primary"
                        : "text-brand-muted"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-5 py-4 text-sm font-semibold text-brand-fg">{r.label}</td>
                  {columns.map((c) => (
                    <td
                      key={c}
                      className={`px-5 py-4 text-sm ${
                        c === "No Cadernin"
                          ? "border-x border-brand-primary/40 bg-blue-50/70 font-semibold text-brand-fg"
                          : "text-brand-muted"
                      }`}
                    >
                      {r.values[c]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-4 md:hidden">
          {rows.map((r) => (
            <div
              key={r.label}
              className="overflow-hidden rounded-card border border-slate-200 bg-white"
            >
              <div className="bg-slate-50 px-4 py-3 text-sm font-semibold text-brand-fg">
                {r.label}
              </div>
              <dl className="divide-y divide-slate-100">
                {columns.map((c) => (
                  <div
                    key={c}
                    className={`flex items-start justify-between gap-4 px-4 py-3 ${
                      c === "No Cadernin" ? "bg-blue-50" : ""
                    }`}
                  >
                    <dt
                      className={`text-sm font-medium ${
                        c === "No Cadernin" ? "text-brand-primary" : "text-brand-muted"
                      }`}
                    >
                      {c}
                    </dt>
                    <dd
                      className={`text-right text-sm ${
                        c === "No Cadernin" ? "font-semibold text-brand-fg" : "text-brand-fg"
                      }`}
                    >
                      {r.values[c]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
