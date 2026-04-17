import { restaurant } from "@/data/restaurant";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(to_bottom,rgba(8,8,8,0.94),rgba(18,18,18,0.97))]"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_18%,rgba(201,163,92,0.18),transparent_42%),radial-gradient(720px_circle_at_82%_28%,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="relative">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              Contact
            </p>
            <h2
              id="contact-title"
              className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl"
            >
              Find us.
            </h2>
            <p className="mt-4 max-w-prose text-base leading-7 text-white/70">
              For private dining and special requests, call us directly.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <h3 className="font-serif text-2xl tracking-tight text-white">
                  Address
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  {restaurant.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <h3 className="font-serif text-2xl tracking-tight text-white">
                  Hours
                </h3>
                <dl className="mt-3 grid gap-2">
                  {restaurant.hours.map((h) => (
                    <div key={h.label} className="flex items-baseline justify-between">
                      <dt className="text-sm text-white/68">{h.label}</dt>
                      <dd className="text-sm text-white">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <h3 className="font-serif text-2xl tracking-tight text-white">
                  Phone
                </h3>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="mt-3 inline-block text-sm text-white underline decoration-white/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {restaurant.phone}
                </a>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/6 backdrop-blur-sm">
              <div className="flex aspect-[16/7] items-center justify-center px-8 text-center">
                <p className="text-sm text-white/60">
                  Map placeholder (embed later if desired)
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Bella Napoli. All rights reserved.
          </p>
        </footer>
        </div>
      </div>
    </section>
  );
}
