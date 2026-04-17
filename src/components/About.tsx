import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-background"
      aria-labelledby="about-title"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-18 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              About
            </p>
            <h2
              id="about-title"
              className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              Italian classics, handled with restraint.
            </h2>
            <p className="mt-5 max-w-prose text-base leading-7 text-muted-foreground">
              Bella Napoli is a modern Italian dining room with a calm,
              considered approach. Our menu celebrates tradition, shaped by
              seasonal produce and precise technique, with an emphasis on
              balance, clarity, and elegant simplicity.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/about.jpg"
                  alt="Bella Napoli dining room, Milano"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.28),rgba(0,0,0,0.04))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
