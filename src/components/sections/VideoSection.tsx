import { Play } from "lucide-react";
import { SIGNUP_URL, VIDEO_ID } from "@/lib/constants";

export function VideoSection() {
  return (
    <section id="video" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-fg md:text-4xl">
          Eu mesmo construí o No Cadernin pra resolver um problema que vi em mais de 50 lojas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-muted">
          Em menos de 1 minuto, te mostro como funciona e por que pode ser exatamente o que sua
          loja precisa.
        </p>

        {VIDEO_ID ? (
          <div className="relative mx-auto mt-10 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-slate-900/10">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}`}
              title="No Cadernin — Apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        ) : (
          <div
            role="img"
            aria-label="Vídeo do fundador em breve"
            className="mx-auto mt-10 flex aspect-video w-full max-w-3xl flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-100 text-slate-500"
          >
            <Play className="h-10 w-10" aria-hidden />
            <span className="text-sm font-medium md:text-base">
              Vídeo do fundador em breve
            </span>
          </div>
        )}

        <div className="mt-10">
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center rounded-button bg-brand-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-brand-primary-dark"
          >
            Quero testar por R$4,99/mês →
          </a>
        </div>
      </div>
    </section>
  );
}
