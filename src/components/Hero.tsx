import { restaurant } from "@/data/restaurant";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        {/* Dark base in case the PNG has transparency. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.92),rgba(18,18,18,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(201,163,92,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(255,255,255,0.08),transparent_50%)]" />

        <div className="relative h-full w-full">
          {/* Decorative hero background; keep the subject biased to the right. */}
          <Image src="/images/hero.png" alt="" fill priority sizes="100vw" className="object-cover object-right" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]" />
      </div>

      <div className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-end px-4 pb-16 pt-16 sm:px-6 sm:pb-20 md:min-h-[88vh]">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/70">
            <span className="h-px w-10 bg-accent/80" />
            Milano
          </p>

          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl">
            {restaurant.name}
          </h1>
          <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
            A refined Italian dining experience: seasonal ingredients, precise
            technique, and a quiet elegance from the first course to the last.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#reservation"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              Book a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              View Menu
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                Cuisine
              </p>
              <p className="mt-1 text-sm text-white/80">Classic Italian</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                Dress code
              </p>
              <p className="mt-1 text-sm text-white/80">Smart casual</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                Reservations
              </p>
              <p className="mt-1 text-sm text-white/80">
                Recommended
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
