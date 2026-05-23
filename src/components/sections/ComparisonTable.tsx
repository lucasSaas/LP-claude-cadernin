import { Check, Minus, Trophy, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ColKey = "caderno" | "excel" | "outros" | "nocadernin";

const columns: { key: ColKey; label: string }[] = [
  { key: "caderno", label: "Caderno" },
  { key: "excel", label: "Excel/planilha" },
  { key: "outros", label: "Outros sistemas" },
  { key: "nocadernin", label: "No Cadernin" },
];

const rows: { label: string; values: Record<ColKey, string> }[] = [
  {
    label: "Custo mensal",
    values: {
      caderno: "Grátis (mas erro sai caro)",
      excel: "Grátis (se souber)",
      outros: "R$100–300",
      nocadernin: "R$4,99",
    },
  },
  {
    label: "Quanto tempo pra aprender",
    values: {
      caderno: "Já sabe",
      excel: "2 semanas estudando",
      outros: "30+ dias de treinamento",
      nocadernin: "15 minutos",
    },
  },
  {
    label: "Funciona no celular",
    values: {
      caderno: "Não",
      excel: "Mais ou menos",
      outros: "Limitado",
      nocadernin: "Sim, foi feito pra isso",
    },
  },
  {
    label: "Login pra vendedores",
    values: {
      caderno: "Não",
      excel: "Não",
      outros: "Sim (pago à parte)",
      nocadernin: "Sim, incluído",
    },
  },
  {
    label: "Backup automático",
    values: {
      caderno: "Pode perder",
      excel: "Pode perder",
      outros: "Depende do sistema",
      nocadernin: "Sim, na nuvem",
    },
  },
  {
    label: "Calcula lucro automático",
    values: {
      caderno: "Você que faz",
      excel: "Você que faz",
      outros: "Depende",
      nocadernin: "Sim",
    },
  },
  {
    label: "Exporta pra planilha",
    values: {
      caderno: "—",
      excel: "Já é planilha",
      outros: "Geralmente sim",
      nocadernin: "1 clique",
    },
  },
];

type CellStatus = "positive" | "negative" | "neutral" | "info";

function classifyCell(value: string, column: ColKey): CellStatus {
  if (column === "nocadernin") return "positive";

  const v = value.toLowerCase();
  const negativeKeywords = ["não", "pode perder", "limitado", "você que faz"];
  if (negativeKeywords.some((kw) => v.includes(kw))) return "negative";

  const neutralKeywords = ["depende", "mais ou menos", "geralmente", "já sabe", "—"];
  if (neutralKeywords.some((kw) => v.includes(kw))) return "neutral";

  return "info";
}

const STATUS_CONFIG = {
  positive: {
    Icon: Check,
    iconColor: "text-emerald-600",
    textColor: "text-emerald-900 font-semibold",
    ariaLabel: "Disponível",
  },
  negative: {
    Icon: X,
    iconColor: "text-red-500",
    textColor: "text-red-700",
    ariaLabel: "Não disponível",
  },
  neutral: {
    Icon: Minus,
    iconColor: "text-amber-500",
    textColor: "text-amber-700",
    ariaLabel: "Parcial ou variável",
  },
  info: {
    Icon: null,
    iconColor: "",
    textColor: "text-slate-600",
    ariaLabel: "",
  },
} as const;

function Cell({ value, status }: { value: string; status: CellStatus }) {
  const config = STATUS_CONFIG[status];
  const Icon = config.Icon;
  return (
    <span className="inline-flex items-center gap-2">
      {Icon && (
        <Icon
          className="h-4 w-4 flex-shrink-0 lg:h-5 lg:w-5"
          strokeWidth={3}
          role="img"
          aria-label={config.ariaLabel}
        />
      )}
      <span className={config.textColor}>{value}</span>
    </span>
  );
}

export function ComparisonTable() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
            Por que não usar caderno, planilha ou outros sistemas?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-muted">
            A gente fez essa conta pra você. Olhe com calma.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-12 hidden md:block">
          <table className="w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th className="w-[28%] px-5 py-4" aria-hidden />
                {columns.map((c) => {
                  const isPrimary = c.key === "nocadernin";
                  return (
                    <th
                      key={c.key}
                      scope="col"
                      className={cn(
                        "px-5 py-4 text-base font-semibold",
                        isPrimary
                          ? "rounded-t-xl bg-brand-primary text-center text-white shadow-lg"
                          : "text-brand-muted",
                      )}
                    >
                      {isPrimary ? (
                        <span className="inline-flex items-center justify-center gap-2 font-extrabold lg:text-lg">
                          <Trophy className="h-5 w-5" aria-hidden />
                          {c.label}
                        </span>
                      ) : (
                        c.label
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const isLast = i === rows.length - 1;
                return (
                  <tr key={r.label}>
                    <th
                      scope="row"
                      className={cn(
                        "px-5 py-4 text-left text-sm font-semibold text-brand-fg",
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/70",
                        i === 0 && "rounded-tl-xl",
                        isLast && "rounded-bl-xl",
                      )}
                    >
                      {r.label}
                    </th>
                    {columns.map((c) => {
                      const isPrimary = c.key === "nocadernin";
                      const value = r.values[c.key];
                      const status = classifyCell(value, c.key);
                      return (
                        <td
                          key={c.key}
                          className={cn(
                            "border-t border-slate-200 px-5 py-4 align-middle text-sm",
                            !isPrimary && (i % 2 === 0 ? "bg-white" : "bg-slate-50/70"),
                            isPrimary &&
                              "border-x-2 border-brand-primary bg-blue-50 text-brand-fg shadow-lg",
                            isPrimary && isLast && "rounded-b-xl border-b-2",
                          )}
                        >
                          <Cell value={value} status={status} />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards: No Cadernin row at top of each card */}
        <div className="mt-12 grid gap-4 md:hidden">
          {rows.map((r) => {
            const others = columns.filter((c) => c.key !== "nocadernin");
            const ncValue = r.values.nocadernin;
            return (
              <div
                key={r.label}
                className="overflow-hidden rounded-card border border-slate-200 bg-white"
              >
                <div className="bg-slate-50 px-4 py-3 text-sm font-semibold text-brand-fg">
                  {r.label}
                </div>

                <div className="flex items-start gap-3 border-l-4 border-brand-primary bg-blue-50 px-4 py-3.5">
                  <Check
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600"
                    strokeWidth={3}
                    role="img"
                    aria-label="Disponível"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-bold text-brand-primary">No Cadernin</span>
                      <span className="rounded-full bg-brand-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Recomendado
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-brand-fg">{ncValue}</p>
                  </div>
                </div>

                <dl className="divide-y divide-slate-100">
                  {others.map((c) => {
                    const value = r.values[c.key];
                    const status = classifyCell(value, c.key);
                    const config = STATUS_CONFIG[status];
                    const Icon = config.Icon;
                    return (
                      <div
                        key={c.key}
                        className="flex items-start justify-between gap-4 px-4 py-3"
                      >
                        <dt className="flex items-center gap-2 text-sm font-medium text-brand-muted">
                          {Icon && (
                            <Icon
                              className={cn("h-4 w-4 flex-shrink-0", config.iconColor)}
                              strokeWidth={3}
                              role="img"
                              aria-label={config.ariaLabel}
                            />
                          )}
                          {c.label}
                        </dt>
                        <dd className={cn("text-right text-sm", config.textColor)}>{value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
