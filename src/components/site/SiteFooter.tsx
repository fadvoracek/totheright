import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logoLight from "@/assets/logo-light.png";
import { company, contact, navItems, services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-road-texture text-road-foreground">
      <div className="lane-line opacity-80" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <img src={logoLight} alt="ToTheRight" width={1200} height={214} loading="lazy" className="h-9 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-road-muted">
            Autodoprava dodávkami do 3,5 t. Home delivery, výdejní boxy, nábytek, elektronika a palety —
            vždy správným směrem.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-signal">Služby</h3>
          <ul className="mt-4 space-y-2 text-sm text-road-muted">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/sluzby" hash={s.slug} className="hover:text-road-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-signal">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-signal">
                <Phone className="size-4" /> {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-signal">
                <Mail className="size-4" /> {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-road-muted">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {company.street}
                <br />
                {company.district}
                <br />
                {company.city}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-signal">Firemní údaje</h3>
          <dl className="mt-4 space-y-1 text-sm text-road-muted">
            <dt className="font-semibold text-road-foreground">{company.name}</dt>
            <dd>IČO: {company.ico}</dd>
            <dd>{company.register}</dd>
          </dl>
          <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Patička">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-signal">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-road-line">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs text-road-muted sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} {company.name}. Všechna práva vyhrazena.</span>
          <span>Autodoprava Praha · celá ČR</span>
        </div>
      </div>
    </footer>
  );
}
