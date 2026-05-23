import {
  BarChart3,
  Hand,
  Package,
  Settings,
  Target,
  Users,
} from "lucide-react";

export function HomeHeroScene() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#F8FAFC] text-slate-900">
      <div className="h-7 shrink-0" />

      <header className="px-4 pb-3 pt-2 text-center">
        <div className="flex items-center justify-center gap-1.5">
          <div className="h-4 w-4 rounded-[3px] bg-blue-600" />
          <h2 className="text-[14px] font-bold">No Cadernin</h2>
        </div>
        <p className="mt-0.5 text-[8px] text-slate-500">
          A venda anotada, o controle garantido.
        </p>
      </header>

      <div className="flex-1 px-3 pb-3 [perspective:800px]">
        <div className="relative overflow-visible">
          <button
            type="button"
            className="animate-pulse-soft hero-pulse-btn relative w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-4 text-[13px] font-bold text-white shadow-lg shadow-emerald-500/30"
          >
            Anotar Venda
          </button>

          <div className="animate-finger-tap pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2">
            <div className="animate-tap-ring absolute left-1/2 top-2 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-white/80" />
            <div className="relative drop-shadow-lg">
              <Hand
                className="h-7 w-7 -rotate-12 fill-white text-slate-900"
                strokeWidth={1.8}
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2 [transform-style:preserve-3d]">
          <div className="flex origin-right items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm [transform:rotateY(-8deg)_translateX(-4px)]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <Package className="h-3.5 w-3.5 text-blue-600" strokeWidth={2.2} />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">Estoque</span>
          </div>

          <div className="flex origin-left items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm [transform:rotateY(8deg)_translateX(4px)]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-50">
              <Target className="h-3.5 w-3.5 text-violet-600" strokeWidth={2.2} />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">Metas</span>
          </div>

          <div className="flex origin-right items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm [transform:rotateY(-6deg)_translateX(-2px)]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50">
              <Users className="h-3.5 w-3.5 text-amber-600" strokeWidth={2.2} />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">Vendedores</span>
          </div>

          <div className="flex origin-left items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm [transform:rotateY(6deg)_translateX(2px)]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
              <BarChart3 className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.2} />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">Relatórios</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm [transform:rotateY(-3deg)]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100">
              <Settings className="h-3.5 w-3.5 text-slate-600" strokeWidth={2.2} />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">Configurações</span>
          </div>
        </div>
      </div>

      <div className="pb-3 text-center text-[8px] text-slate-400">
        Vendas rápidas e simples ⚡
      </div>
    </div>
  );
}
