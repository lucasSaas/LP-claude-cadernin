import { Check } from "lucide-react";
import { ScreenLayout } from "./ScreenLayout";

export function NovaVendaScreen() {
  return (
    <ScreenLayout title="Nova Venda">
      <div className="space-y-2 rounded-xl bg-white p-3 shadow-sm">
        <div>
          <label className="text-[9px] font-medium text-slate-500">Descrição do produto</label>
          <div className="mt-0.5 rounded-md border border-slate-200 px-2 py-1.5 text-[11px] text-slate-700">
            Camiseta polo branca
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-[9px] font-medium text-slate-500">Valor (R$)</label>
            <div className="mt-0.5 rounded-md border border-slate-200 px-2 py-1.5 text-[11px] text-slate-700">
              35,00
            </div>
          </div>
          <div>
            <label className="text-[9px] font-medium text-slate-500">Quantidade</label>
            <div className="mt-0.5 rounded-md border border-slate-200 px-2 py-1.5 text-[11px] text-slate-700">
              1
            </div>
          </div>
        </div>

        <div>
          <label className="text-[9px] font-medium text-slate-500">Vendedor</label>
          <div className="mt-0.5 rounded-md border border-slate-200 px-2 py-1.5 text-[11px] text-slate-700">
            Thaynã
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
        <div className="mb-1 flex items-center justify-center gap-1 text-emerald-700">
          <Check className="h-3 w-3" strokeWidth={3} />
          <span className="text-[10px] font-semibold">Venda registrada</span>
        </div>
        <div className="mb-1 text-[10px] text-slate-600">Total</div>
        <div className="text-[24px] font-extrabold leading-none text-emerald-600">R$ 35,00</div>
        <div className="mt-1 text-[9px] text-slate-500">Thaynã · PIX</div>
        <div className="mt-2 w-full rounded-lg bg-emerald-500 py-2 text-center text-[11px] font-semibold text-white">
          Finalizar Venda
        </div>
      </div>
    </ScreenLayout>
  );
}
