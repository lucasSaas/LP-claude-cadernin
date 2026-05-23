import { Check, Download, FileSpreadsheet } from "lucide-react";
import { ScreenLayout } from "./ScreenLayout";

export function ExportarScreen() {
  return (
    <ScreenLayout title="Exportar dados">
      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="mb-2 text-[10px] text-slate-600">
          Baixe todos os seus dados em planilha pra usar onde quiser.
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="rounded bg-slate-50 p-1.5 text-center">
            <div className="text-[14px] font-bold text-slate-900">38</div>
            <div className="text-[8px] text-slate-500">Vendas</div>
          </div>
          <div className="rounded bg-slate-50 p-1.5 text-center">
            <div className="text-[14px] font-bold text-slate-900">142</div>
            <div className="text-[8px] text-slate-500">Itens</div>
          </div>
          <div className="rounded bg-slate-50 p-1.5 text-center">
            <div className="text-[14px] font-bold text-slate-900">4</div>
            <div className="text-[8px] text-slate-500">Vendedores</div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
            <FileSpreadsheet className="h-5 w-5 text-emerald-600" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[11px] font-bold text-slate-900">
              vendas_maio_2026.csv
            </div>
            <div className="mt-0.5 text-[9px] text-slate-500">Pronto pra baixar · 24 KB</div>
          </div>
          <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-white shadow-md">
        <Download className="h-4 w-4" strokeWidth={2.5} />
        <span className="text-[12px] font-bold">Baixar planilha</span>
      </div>

      <div className="text-center text-[9px] text-slate-500">
        Abre direto no Excel ou Google Sheets
      </div>
    </ScreenLayout>
  );
}
