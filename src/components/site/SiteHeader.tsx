import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { contact, navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="shrink-0" aria-label="ToTheRight – úvod">
          <img src={logo} alt="ToTheRight" width={1200} height={214} className="h-8 w-auto lg:h-9" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hlavní menu">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground underline decoration-signal decoration-2 underline-offset-8" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-foreground"
          >
            <Phone className="size-4 text-signal-ink" />
            {contact.phone}
          </a>
          <Button asChild variant="signal">
            <Link to="/kontakt">Poptat přepravu</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobilní menu">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-display text-lg font-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a href={contact.phoneHref} className="flex items-center gap-2 font-bold">
              <Phone className="size-4 text-signal-ink" /> {contact.phone}
            </a>
            <Button asChild variant="signal" size="lg">
              <Link to="/kontakt" onClick={() => setOpen(false)}>
                Poptat přepravu
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
