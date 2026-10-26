import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="bg-road-gradient chevron-texture relative mx-auto max-w-7xl overflow-hidden rounded-2xl px-8 py-14 text-road-foreground lg:px-16">
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <span className="eyebrow">Nezávazná poptávka</span>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight lg:text-4xl">
              Potřebujete něco převézt? Ozvěte se, nabídku pošleme ještě dnes.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="signal" size="xl">
              <Link to="/kontakt">
                Poptat přepravu <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="ghostLight" size="xl">
              <a href={contact.phoneHref}>
                <Phone /> {contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
