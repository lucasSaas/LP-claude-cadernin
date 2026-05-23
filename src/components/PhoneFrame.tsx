import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function PhoneFrame({ src, alt, className }: Props) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[520px] w-[260px] rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-800 p-3 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.35)] ring-1 ring-slate-900/50 lg:h-[600px] lg:w-[300px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute -left-[3px] top-24 h-12 w-[3px] rounded-l-sm bg-slate-700" />
      <div className="pointer-events-none absolute -left-[3px] top-40 h-16 w-[3px] rounded-l-sm bg-slate-700" />
      <div className="pointer-events-none absolute -right-[3px] top-32 h-20 w-[3px] rounded-r-sm bg-slate-700" />

      <div className="absolute left-1/2 top-2 z-10 h-7 w-32 -translate-x-1/2 rounded-full bg-slate-900" />

      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 300px, 260px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
