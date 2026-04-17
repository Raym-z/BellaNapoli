"use client";

import { menu } from "@/data/menu";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const eur = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function Menu() {
  const defaultCategoryId = "pizza";
  const [activeCategoryId, setActiveCategoryId] = useState(defaultCategoryId);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;

      if (hash === "#menu" || !hash) {
        setActiveCategoryId(defaultCategoryId);
        return;
      }

      if (!hash.startsWith("#menu-")) return;
      const id = hash.slice("#menu-".length);
      if (!menu.some((c) => c.id === id)) return;
      setActiveCategoryId(id);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activeCategory = useMemo(() => {
    return (
      menu.find((c) => c.id === activeCategoryId) ||
      menu.find((c) => c.id === defaultCategoryId) ||
      menu[0]
    );
  }, [activeCategoryId]);

  return (
    <section
      id="menu"
      className="scroll-mt-24 bg-background"
      aria-labelledby="menu-title"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-18 sm:px-6">
        <div className="rounded-[2rem] bg-[#F1EEE3] px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Menu
              </p>
              <h2
                id="menu-title"
                className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl"
              >
                Crafted for clarity.
              </h2>
              <p className="mt-4 max-w-prose text-base leading-7 text-muted-foreground">
                A concise selection of refined Italian classics. Seasonal changes
                may apply.
              </p>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Menu categories">
              {menu.map((c) => {
                const isActive = c.id === activeCategory.id;
                return (
                  <a
                    key={c.id}
                    id={`menu-tab-${c.id}`}
                    href={`#menu-${c.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`menu-panel-${c.id}`}
                    className={
                      isActive
                        ? "rounded-full border border-border bg-muted px-4 py-2 text-sm text-foreground"
                        : "rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                    }
                  >
                    {c.title}
                  </a>
                );
              })}
            </div>
          </div>

          <section
            id={`menu-${activeCategory.id}`}
            className="scroll-mt-28"
            role="tabpanel"
            aria-labelledby={`menu-tab-${activeCategory.id}`}
            aria-label={`${activeCategory.title} items`}
          >
            <div className="flex items-baseline justify-between gap-6 border-b border-border pb-4">
              <div>
                <h3 className="font-serif text-3xl tracking-tight text-foreground">
                  {activeCategory.title}
                </h3>
                {activeCategory.subtitle ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {activeCategory.subtitle}
                  </p>
                ) : null}
              </div>
            </div>

            <div
              id={`menu-panel-${activeCategory.id}`}
              className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start"
            >
              <div className="order-2 rounded-2xl border border-border bg-surface lg:order-1">
                {activeCategory.items.map((item, index) => (
                  <div
                    key={item.name}
                    className={
                      index === 0
                        ? "px-5 py-4 sm:px-6"
                        : "border-t border-border px-5 py-4 sm:px-6"
                    }
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-medium text-foreground sm:text-lg">
                          {item.name}
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <p className="shrink-0 pl-4 font-serif text-lg text-foreground sm:text-xl">
                        {eur.format(item.priceEUR)}
                      </p>
                    </div>

                    {item.tags && item.tags.length ? (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] leading-5 text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="order-1 lg:order-2 lg:sticky lg:top-28">
                <div className="relative h-[300px] overflow-hidden rounded-2xl border border-border bg-surface sm:h-[340px] lg:h-[440px]">
                  <Image
                    src={activeCategory.image.src}
                    alt={activeCategory.image.alt}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.32),rgba(0,0,0,0.06))]" />
                </div>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    </section>
  );
}
