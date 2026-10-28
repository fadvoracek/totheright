import { createFileRoute } from "@tanstack/react-router";
import { Compass, Handshake, Leaf, Timer } from "lucide-react";

import delivery from "@/assets/home-delivery.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { company } from "@/lib/site";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás – autodoprava ToTheRight s.r.o. z Prahy" },
      {
        name: "description",
        content:
          "ToTheRight s.r.o. je pražská autodoprava zaměřená na doručování zásilek a přepravu nábytku, elektroniky a palet.",
      },
      { property: "og:title", content: "O společnosti ToTheRight s.r.o." },
      {
        property: "og:description",
        content: "Mladá pražská autodoprava, která staví na dochvilnosti, péči o náklad a férovém jednání.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Compass, title: "Správný směr", text: "Náš název je i naším slibem: zásilka jede vždy tam, kam má, a nejkratší cestou." },
  { icon: Timer, title: "Čas je zboží", text: "Víme, že zpoždění stojí peníze. Plánujeme trasy tak, aby termíny seděly." },
  { icon: Handshake, title: "Férové jednání", text: "Jasná cena předem, žádné skryté poplatky a komunikace bez zbytečných kliček." },
  { icon: Leaf, title: "Rozumná doprava", text: "Správně zvolené auto a vytížené trasy znamenají méně kilometrů naprázdno." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="O nás" title={<>Mladá firma, která jezdí s rozvahou.</>}>
        ToTheRight s.r.o. sídlí v pražské Libni. Specializujeme se na rozvoz zásilek a přepravu zboží
        dodávkami — pro e‑shopy, obchody, firmy i domácnosti.
      </PageHero>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 lg:py-16 lg:grid-cols-2 lg:px-8">
        <img
          src={delivery}
          alt="Řidič ToTheRight předává zásilku zákaznici"
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-card"
        />
        <div>
          <span className="eyebrow">Náš příběh</span>
          <h2 className="mt-3 text-3xl font-black leading-tight lg:text-4xl">
            Doprava, na kterou se dá spolehnout.
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Založili jsme ToTheRight s jednoduchou myšlenkou: přeprava má být předvídatelná. Když řekneme,
              že přijedeme v osm, přijedeme v osm.
            </p>
            <p>
              Jezdíme s plechovými, skříňovými a plachtovými dodávkami, takže zvládneme balíky na poslední míli, závozy
              výdejních boxů, stěhování nábytku, citlivou elektroniku i paletové zboží.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:py-16 lg:px-8">
          <span className="eyebrow">Na čem stavíme</span>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <span className="grid size-12 place-items-center rounded-md bg-road text-signal">
                  <v.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:py-16 lg:px-8">
        <span className="eyebrow">Firemní údaje</span>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Obchodní firma", company.name],
            ["IČO", company.ico],
            ["Sídlo", `${company.street}, ${company.district}, ${company.city}`],
            ["Zápis v OR", company.register],
          ].map(([k, val]) => (
            <div key={k} className="bg-card p-6">
              <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{k}</dt>
              <dd className="mt-2 font-semibold">{val}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBand />
    </>
  );
}
