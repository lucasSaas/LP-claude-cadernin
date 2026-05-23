import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  highlight?: string;
};

export function FeatureCard({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  highlight,
}: Props) {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-6 shadow-sm md:p-10">
      <div
        className={`grid items-center gap-8 md:gap-12 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg ring-1 ring-slate-900/5">
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={966}
              loading="lazy"
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 70vw, 90vw"
              className="block h-auto w-full max-w-[440px]"
            />
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-extrabold leading-tight text-brand-fg md:text-3xl">
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
            {description}
          </p>
          {highlight && (
            <div className="mt-5 rounded-xl border border-amber-200 bg-brand-warning px-4 py-3">
              <p className="text-sm font-semibold text-amber-900 md:text-base">{highlight}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
