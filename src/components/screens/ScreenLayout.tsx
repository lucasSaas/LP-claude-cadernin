import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function ScreenLayout({ title, children }: Props) {
  return (
    <div className="flex h-full flex-col overflow-hidden text-[11px] text-slate-900">
      <div className="h-7 shrink-0" />

      <header className="flex items-center gap-2 px-4 pb-3 pt-1">
        <ChevronLeft className="h-4 w-4 text-slate-600" strokeWidth={2.5} />
        <h2 className="text-[14px] font-bold">{title}</h2>
      </header>

      <div className="flex-1 space-y-3 overflow-hidden px-3 pb-3">{children}</div>
    </div>
  );
}
