import { Check, Lock, Shield } from "lucide-react";
import { ScreenLayout } from "./ScreenLayout";

export function TrancarScreen() {
  return (
    <ScreenLayout title="Proteção">
      <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-4 text-center text-white shadow-sm">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
          <Lock className="h-6 w-6 text-white" strokeWidth={2.5} />
        </div>
        <div className="mb-1 text-[12px] font-bold">Proteção ativada</div>
        <div className="text-[9px] text-blue-100">3 áreas trancadas com senha</div>
      </div>

      <div className="divide-y divide-slate-100 rounded-xl bg-white shadow-sm">
        <div className="flex items-center justify-between p-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
              <Lock className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-900">Relatórios</div>
              <div className="text-[9px] text-slate-500">Só você acessa</div>
            </div>
          </div>
          <Check className="h-4 w-4 text-emerald-500" strokeWidth={3} />
        </div>

        <div className="flex items-center justify-between p-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
              <Lock className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-900">Estoque</div>
              <div className="text-[9px] text-slate-500">Só você acessa</div>
            </div>
          </div>
          <Check className="h-4 w-4 text-emerald-500" strokeWidth={3} />
        </div>

        <div className="flex items-center justify-between p-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
              <Lock className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-900">Configurações</div>
              <div className="text-[9px] text-slate-500">Só você acessa</div>
            </div>
          </div>
          <Check className="h-4 w-4 text-emerald-500" strokeWidth={3} />
        </div>

        <div className="flex items-center justify-between p-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100">
              <Shield className="h-3.5 w-3.5 text-slate-400" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-700">Vendedores</div>
              <div className="text-[9px] text-slate-400">Livre</div>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
}
