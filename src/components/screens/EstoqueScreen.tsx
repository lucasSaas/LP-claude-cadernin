import { TrendingUp } from "lucide-react";
import { ScreenLayout } from "./ScreenLayout";

export function EstoqueScreen() {
  return (
    <ScreenLayout title="Estoque">
      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-slate-500">Estoque atual</span>
          <span className="text-[13px] font-bold text-emerald-600">R$ 19.490</span>
        </div>
      </div>

      <div className="space-y-2.5 rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[12px] font-bold text-slate-900">Camiseta Polo Branca</div>
            <div className="mt-0.5 text-[9px] text-slate-500">100 unidades em estoque</div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[14px]">
            👕
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-2">
          <div>
            <div className="text-[9px] text-slate-500">Custo</div>
            <div className="text-[14px] font-bold text-slate-700">R$ 13</div>
          </div>
          <div>
            <div className="text-[9px] text-slate-500">Venda</div>
            <div className="text-[14px] font-bold text-slate-700">R$ 35</div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
            <span className="text-[10px] font-semibold text-emerald-800">Lucro por unidade</span>
          </div>
          <span className="text-[15px] font-extrabold text-emerald-600">R$ 22</span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-[12px]">
            🥤
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-900">Red Bull</div>
            <div className="text-[9px] text-slate-500">1.799 unidades</div>
          </div>
        </div>
        <div className="text-[11px] font-bold text-emerald-600">+R$ 10</div>
      </div>
    </ScreenLayout>
  );
}
