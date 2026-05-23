import { Calculator, Target } from "lucide-react";
import { ScreenLayout } from "./ScreenLayout";

export function MetasScreen() {
  return (
    <ScreenLayout title="Metas">
      <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Target className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-[11px] font-bold text-slate-900">Meta Mensal</span>
          </div>
          <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[9px] font-semibold text-blue-700">
            73%
          </span>
        </div>

        <div className="space-y-1">
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
              style={{ width: "73%" }}
            />
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="font-bold text-blue-600">R$ 22.861</span>
            <span className="text-slate-500">R$ 31.500</span>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-1 text-[9px] text-slate-600">
          Faltam <span className="font-bold text-slate-900">R$ 8.639</span> em 8 dias
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-blue-50 p-2 text-center">
          <div className="mb-0.5 text-[8px] font-semibold text-blue-700">HOJE</div>
          <div className="text-[11px] font-bold text-slate-900">R$ 1.240</div>
        </div>
        <div className="rounded-lg bg-emerald-50 p-2 text-center">
          <div className="mb-0.5 text-[8px] font-semibold text-emerald-700">SEMANA</div>
          <div className="text-[11px] font-bold text-slate-900">R$ 6.180</div>
        </div>
        <div className="rounded-lg bg-violet-50 p-2 text-center">
          <div className="mb-0.5 text-[8px] font-semibold text-violet-700">MÊS</div>
          <div className="text-[11px] font-bold text-slate-900">R$ 22.861</div>
        </div>
      </div>

      <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center gap-1.5">
          <Calculator className="h-3.5 w-3.5 text-slate-700" />
          <span className="text-[11px] font-bold text-slate-900">Calculadora de Meta</span>
        </div>
        <div className="text-[9px] text-slate-500">Quanto quer faturar no mês?</div>
        <div className="rounded-md border border-slate-200 px-2 py-1.5 text-[11px] font-semibold text-slate-700">
          R$ 50.000
        </div>
        <div className="w-full rounded-md bg-emerald-500 py-1.5 text-center text-[10px] font-semibold text-white">
          Calcular meta ideal
        </div>
      </div>
    </ScreenLayout>
  );
}
