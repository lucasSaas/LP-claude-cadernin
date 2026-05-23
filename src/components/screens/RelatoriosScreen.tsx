import { BarChart3 } from "lucide-react";
import { ScreenLayout } from "./ScreenLayout";

const bars = [40, 65, 45, 80, 55, 90, 70];
const days = ["S", "T", "Q", "Q", "S", "S", "D"];

export function RelatoriosScreen() {
  return (
    <ScreenLayout title="Relatórios">
      <div className="flex items-center justify-between rounded-xl bg-white p-2 shadow-sm">
        <span className="text-[10px] text-slate-500">Período</span>
        <span className="text-[10px] font-semibold text-slate-900">Últimos 7 dias</span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
          <div>
            <div className="mb-0.5 text-[9px] text-slate-500">Total de vendas</div>
            <div className="text-[18px] font-extrabold text-slate-900">R$ 6.180</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-[16px]">
            📈
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
          <div>
            <div className="mb-0.5 text-[9px] text-slate-500">Lucro estimado</div>
            <div className="text-[18px] font-extrabold text-emerald-600">R$ 3.870</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-[16px]">
            💰
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
          <div>
            <div className="mb-0.5 text-[9px] text-slate-500">Itens vendidos</div>
            <div className="text-[18px] font-extrabold text-slate-900">142</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-[16px]">
            📦
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="mb-2 flex items-center gap-1.5">
          <BarChart3 className="h-3.5 w-3.5 text-slate-700" />
          <span className="text-[10px] font-bold text-slate-900">Vendas por dia</span>
        </div>
        <div className="flex h-16 items-end justify-between gap-1">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-gradient-to-t from-blue-500 to-blue-400"
                style={{ height: `${h}%` }}
              />
              <span className="text-[8px] text-slate-500">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </ScreenLayout>
  );
}
