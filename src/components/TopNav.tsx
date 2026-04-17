"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#reservation", label: "Reservations" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when resizing up to desktop.
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="group inline-flex items-baseline gap-2">
          <span className="font-serif text-xl leading-none tracking-tight text-foreground">
            Bella Napoli
          </span>
          <span className="hidden text-sm leading-none text-muted-foreground sm:inline">
            Italian Cuisine
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent/90"
          >
            Book a Table
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservation"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              onClick={() => setOpen(false)}
            >
              Book a Table
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
