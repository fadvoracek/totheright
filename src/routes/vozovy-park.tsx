import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { fleet } from "@/lib/site";

export const Route = createFileRoute("/vozovy-park")({
  head: () => ({
    meta: [
      { title: "Vozový park – plechové, skříňové a plachtové dodávky | ToTheRight" },
      {
        name: "description",
        content:
          "Plechové dodávky pro balíky a elektroniku, skříňové pro nábytek a objemné zboží. Plachtové dodávky pro palety a objemné zboží. Vozidla do 3,5 t.",
      },
      { property: "og:title", content: "Vozový park ToTheRight" },
      {
        property: "og:description",
        content: "Plechové, skříňové i plachtové dodávky do 3,5 t — pro každý náklad to správné auto.",
      },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <PageHero eyebrow="Vozový park" title={<>Tři dodávky. Řešení pro každý náklad.</>}>
        Uzavřené plechové dodávky chrání citlivé zboží, skříňové pojmou nejvíc objemu, plachtové dodávky zvládnou palety a nakládku z boku.
        Všechna vozidla řídíme s oprávněním skupiny B.
      </PageHero>

      <div className="mx-auto max-w-7xl space-y-10 px-5 py-12 lg:py-16 lg:px-8">
        {fleet.map((v) => (
          <article
            key={v.name}
            className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-card lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="flex items-center bg-[#e6e6e4]">
              <img
                src={v.image}
                alt={v.imageAlt}
                width={1280}
                height={800}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col p-8 lg:p-10">
              <div className="text-sm font-bold uppercase tracking-widest text-signal">{v.tagline}</div>
              <h2 className="mt-1 text-3xl font-black lg:text-4xl">{v.name}</h2>
              <p className="mt-4 text-muted-foreground">{v.description}</p>

              <dl className="mt-7 divide-y divide-border border-y border-border">
                {v.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-muted-foreground">{spec.label}</dt>
                    <dd className="text-right font-bold">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-7 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Ideální pro
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {v.bestFor.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm font-semibold">
                    <Check className="size-4 text-signal" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        <p className="text-sm text-muted-foreground">
          Uvedené parametry jsou orientační. Přesné rozměry a kapacitu vám rádi potvrdíme podle konkrétní
          zakázky.
        </p>
      </div>

      <CtaBand />
    </>
  );
}
