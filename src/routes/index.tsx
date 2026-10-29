import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Armchair,
  Boxes,
  Clock,
  Home,
  MonitorSmartphone,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

import heroAsset from "@/assets/hero-van-praha-3.jpg.asset.json";
const hero = heroAsset.url;
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { contact, fleet, services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ToTheRight s.r.o." },
      {
        name: "description",
        content:
          "Autodoprava dodávkami do 3,5 t z Prahy po celé ČR. Home delivery, výdejní boxy, nábytek, elektronika a paletové zboží.",
      },
      { property: "og:title", content: "ToTheRight – autodoprava, která jede správným směrem" },
      {
        property: "og:description",
        content:
          "Plechové, skříňové i plachtové dodávky pro home delivery, výdejní boxy, nábytek, elektroniku a palety.",
      },
    ],
  }),
  component: Index,
});

const serviceIcons = [Home, PackageCheck, Armchair, MonitorSmartphone, Boxes];

const reasons = [
  { icon: Clock, title: "Dochvilnost", text: "Termíny držíme. Když se něco změní, víte to od nás jako první." },
  { icon: ShieldCheck, title: "Péče o náklad", text: "Deky, popruhy, ukotvení. S vaším zbožím zacházíme jako s vlastním." },
  { icon: Truck, title: "Správné auto", text: "Plechová na balíky, skříňová na nábytek, plachtová na palety a objemné kusy." },
  { icon: Phone, title: "Jeden kontakt", text: "Žádné call centrum. Voláte přímo nám a domluvíme se hned." },
];

const steps = [
  { n: "01", title: "Poptávka", text: "Napište nebo zavolejte, co, odkud a kam." },
  { n: "02", title: "Nabídka", text: "Pošleme cenu a termín — rychle a bez skrytých poplatků." },
  { n: "03", title: "Nakládka", text: "Přijedeme včas, náklad zabezpečíme a vyrazíme." },
  { n: "04", title: "Doručení", text: "Předáme na místo a potvrdíme vám doručení." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-road text-road-foreground">
        <img
          src={hero}
          alt="Bílá dodávka Mercedes Sprinter na mostě nad Prahou s výhledem na Hrad"
          width={1408}
          height={768}
          className="absolute inset-x-0 top-0 -z-20 h-[370px] w-full object-cover object-[80%_center] sm:h-[460px] lg:inset-0 lg:h-full lg:object-[65%_center]"
        />
        <div className="bg-hero-fade-mobile absolute inset-x-0 top-0 -z-10 h-[370px] sm:h-[460px] lg:hidden" aria-hidden />
        <div className="bg-hero-fade absolute inset-0 -z-10 hidden lg:block" aria-hidden />
        <div className="mx-auto flex max-w-7xl flex-col justify-center px-5 pb-12 pt-[310px] sm:pt-[370px] lg:min-h-[620px] lg:py-16 lg:px-8">
          <span className="eyebrow animate-rise">Autodoprava Praha · celá ČR</span>
          <h1 className="animate-slide-right mt-4 max-w-3xl text-[2.6rem] font-black leading-[0.98] sm:text-6xl lg:text-7xl">
            Vaše zásilky vždy <span className="text-signal">správným směrem.</span>
          </h1>
          <p className="animate-rise mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-road-foreground/85">
            Jsme ToTheRight — autodoprava s plechovými, skříňovými a plachtovými dodávkami. Doručujeme až domů, do
            výdejních boxů a převážíme nábytek, elektroniku i palety.
          </p>
          <div className="animate-rise mt-7 flex flex-wrap gap-3">
            <Button asChild variant="signal" size="xl">
              <Link to="/kontakt">
                Nezávazná poptávka
              </Link>
            </Button>
            <Button asChild variant="ghostLight" size="xl">
              <Link to="/sluzby">Naše služby</Link>
            </Button>
          </div>
        </div>
        <div className="lane-line" aria-hidden />
      </section>

      {/* Quick facts strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-5 lg:grid-cols-4 lg:divide-x lg:px-8">
          {[
            ["5", "druhů přepravy"],
            ["3", "typy dodávek"],
            ["3,5 t", "vozidla do"],
            ["ČR", "Praha i celá republika"],
          ].map(([big, small]) => (
            <div key={small} className="px-2 py-8 lg:px-8">
              <div className="font-display text-4xl font-black text-primary">{big}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:py-12 lg:py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">Co převážíme</span>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight lg:text-5xl">
              Pět služeb, jeden spolehlivý dopravce.
            </h2>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link to="/sluzby">
              Všechny služby
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] ?? Home;
            return (
              <Link
                key={s.slug}
                to="/sluzby"
                hash={s.slug}
                className={`group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1 ${
                  i === 0 ? "lg:row-span-2" : ""
                }`}
              >
                <div className={`overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[16/9]"}`}>
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-md bg-accent text-signal">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-xl font-extrabold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">{s.short}</p>
                  <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-bold text-primary group-hover:text-signal">
                    Více o službě
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-road-texture text-road-foreground">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:py-12 lg:py-16 lg:px-8">
          <span className="eyebrow">Proč ToTheRight</span>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight lg:text-5xl">
            Jezdíme tak, jak bychom chtěli, aby se jezdilo s našimi věcmi.
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="border-l-2 border-signal pl-5">
                <r.icon className="size-7 text-signal" />
                <h3 className="mt-4 text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 text-road-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet teaser */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:py-12 lg:py-16 lg:px-8">
        <span className="eyebrow">Vozový park</span>
        <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight lg:text-5xl">
          Plech, skříň, nebo plachta? Vybereme správné auto.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v) => (
            <article key={v.name} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <div className="bg-muted">
                <img
                  src={v.image}
                  alt={v.imageAlt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[13/8] w-full object-contain"
                />
              </div>
              <div className="p-7">
                <div className="text-sm font-bold uppercase tracking-widest text-signal">{v.tagline}</div>
                <h3 className="mt-1 text-2xl font-black">{v.name}</h3>
                <p className="mt-3 text-muted-foreground">{v.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {v.bestFor.map((b) => (
                    <span key={b} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="road" size="lg">
            <Link to="/vozovy-park">
              Parametry vozidel
            </Link>
          </Button>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:py-12 lg:py-16 lg:px-8">
          <span className="eyebrow">Jak to funguje</span>
          <h2 className="mt-3 text-4xl font-black leading-tight lg:text-5xl">Od poptávky k doručení</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-display text-5xl font-black text-signal">{s.n}</span>
                  {i < steps.length - 1 && (
                    <span className="hidden h-px flex-1 border-t-2 border-dashed border-border md:block" aria-hidden />
                  )}
                </div>
                <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-muted-foreground">
            Rychlá domluva po telefonu:{" "}
            <a href={contact.phoneHref} className="font-bold text-foreground underline decoration-signal decoration-2 underline-offset-4">
              {contact.phone}
            </a>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
