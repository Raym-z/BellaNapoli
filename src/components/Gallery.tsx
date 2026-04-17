import { gallery } from "@/data/gallery";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-background"
      aria-labelledby="gallery-title"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-18 sm:px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Gallery
            </p>
            <h2
              id="gallery-title"
              className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              A quiet kind of luxury.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, idx) => (
            <figure
              key={`${g.title}-${idx}`}
              className="group overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <figcaption className="p-5">
                <p className="text-sm font-medium text-foreground">{g.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{g.subtitle}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
