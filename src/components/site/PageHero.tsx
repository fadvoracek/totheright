import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-road-texture relative overflow-hidden text-road-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-14 lg:px-8 lg:pb-16 lg:pt-20">
        <span className="eyebrow animate-rise">{eyebrow}</span>
        <h1 className="animate-rise mt-4 max-w-3xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-road-muted">
            {children}
          </div>
        )}
      </div>
      <div className="lane-line" aria-hidden />
    </section>
  );
}
