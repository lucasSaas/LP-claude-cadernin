import { Trophy } from "lucide-react";
import { ScreenLayout } from "./ScreenLayout";

export function VendedoresScreen() {
  return (
    <ScreenLayout title="Vendedores">
      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Trophy className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-[10px] font-semibold text-slate-700">Ranking do mês</span>
          </div>
          <span className="text-[10px] text-slate-500">
            Total: <span className="font-bold text-emerald-600">R$ 22.861</span>
          </span>
        </div>
      </div>

      <div className="relative rounded-xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100 p-3 shadow-sm">
        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-[16px] shadow-md">
          🥇
        </div>
        <div className="mb-1 text-[10px] font-bold text-amber-700">1º LUGAR</div>
        <div className="mb-2 text-[15px] font-extrabold text-slate-900">Vitinho</div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-[9px] text-slate-500">Vendido</div>
            <div className="text-[13px] font-bold text-emerald-600">R$ 12.383</div>
          </div>
          <div>
            <div className="text-[9px] text-slate-500">Comissão</div>
            <div className="text-[13px] font-bold text-blue-600">R$ 1.238</div>
          </div>
        </div>
        <div className="mt-1 text-[9px] text-slate-500">12 vendas</div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
            2
          </div>
          <span className="text-[11px] font-semibold text-slate-900">Michele</span>
        </div>
        <span className="text-[11px] font-bold text-emerald-600">R$ 10.000</span>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
            3
          </div>
          <span className="text-[11px] font-semibold text-slate-900">Nicoly</span>
        </div>
        <span className="text-[11px] font-bold text-emerald-600">R$ 312</span>
      </div>
    </ScreenLayout>
  );
}
