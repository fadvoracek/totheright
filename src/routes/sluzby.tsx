import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby – home delivery, výdejní boxy, nábytek, palety | ToTheRight" },
      {
        name: "description",
        content:
          "Home delivery, závozy výdejních boxů, přeprava nábytku, elektroniky a paletového zboží dodávkami do 3,5 t.",
      },
      { property: "og:title", content: "Služby autodopravy ToTheRight" },
      {
        property: "og:description",
        content: "Doručení až domů, výdejní boxy, nábytek, elektronika i europalety — vše z jedné ruky.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Naše služby" title={<>Převezeme to, na čem vám záleží.</>}>
        Od jednoho balíku až po plnou dodávku palet. Každá zakázka dostane správné auto a řidiče, který ví,
        co veze.
      </PageHero>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="space-y-24">
          {services.map((s, i) => (
            <section
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-xl object-cover shadow-card"
                  />
                  <span className="absolute -bottom-5 left-6 rounded-md bg-signal px-4 py-2 font-display text-2xl font-black text-signal-foreground shadow-signal">
                    0{i + 1}
                  </span>
                </div>
              </div>
              <div>
                <span className="eyebrow">Služba</span>
                <h2 className="mt-3 text-3xl font-black leading-tight lg:text-4xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.long}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 font-semibold">
                      <span className="grid size-6 place-items-center rounded-full bg-accent text-signal">
                        <Check className="size-4" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="road" size="lg" className="mt-8">
                  <Link to="/kontakt">
                    Poptat tuto službu <ArrowRight />
                  </Link>
                </Button>
              </div>
            </section>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
