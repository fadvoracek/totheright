import { createFileRoute } from "@tanstack/react-router";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { company, contact } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt a poptávka přepravy | ToTheRight s.r.o." },
      {
        name: "description",
        content: `Poptejte přepravu u ToTheRight: ${contact.phone}, ${contact.email}. Sídlo ${company.street}, Praha 8.`,
      },
      { property: "og:title", content: "Kontaktujte ToTheRight – nezávazná poptávka" },
      {
        property: "og:description",
        content: "Napište nám, co potřebujete převézt. Nabídku pošleme co nejdříve.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title={<>Kam to bude? Napište nám.</>}>
        Vyplňte krátký formulář nebo zavolejte. Ozveme se s cenou a termínem co nejdříve.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <div className="space-y-6">
          <a
            href={contact.phoneHref}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-card transition-colors hover:border-signal"
          >
            <span className="grid size-12 place-items-center rounded-md bg-signal text-signal-foreground">
              <Phone className="size-5" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Telefon</div>
              <div className="font-display text-xl font-black">{contact.phone}</div>
            </div>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-card transition-colors hover:border-signal"
          >
            <span className="grid size-12 place-items-center rounded-md bg-road text-signal-ink">
              <Mail className="size-5" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">E‑mail</div>
              <div className="font-display text-xl font-black">{contact.email}</div>
            </div>
          </a>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-signal-ink" />
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sídlo</div>
                <p className="mt-1 font-semibold">
                  {company.street}
                  <br />
                  {company.district}
                  <br />
                  {company.city}
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-4 border-t border-border pt-5">
              <Building2 className="mt-1 size-5 shrink-0 text-signal-ink" />
              <div className="text-sm">
                <div className="font-bold">{company.name}</div>
                <div className="text-muted-foreground">IČO: {company.ico}</div>
                <div className="text-muted-foreground">{company.register}</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <iframe
              title="Mapa – sídlo ToTheRight, Zenklova 24/54, Praha 8"
              src="https://www.openstreetmap.org/export/embed.html?bbox=14.4705%2C50.1005%2C14.4825%2C50.1065&layer=mapnik&marker=50.1036%2C14.4764"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <span className="eyebrow">Poptávkový formulář</span>
          <h2 className="mb-6 mt-3 text-3xl font-black">Nezávazná poptávka přepravy</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
