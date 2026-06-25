import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@/components/icons";

export function Work() {
  const featured = featuredProjects;

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          kicker="Selected Work"
          title={
            <>
              Products I&apos;ve shipped across{" "}
              <span className="text-ash">health, fintech & edtech.</span>
            </>
          }
          intro="A few of the cross-platform products I've designed, built and led — from native mobile apps to the APIs and design systems behind them."
        />

        <div className="flex flex-col gap-4">
          {featured.map((p, i) => {
            const cover = p.images[0];
            const portrait = cover && cover.h > cover.w;
            return (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid items-stretch gap-6 rounded-3xl border border-line bg-coal/40 p-4 transition-colors duration-500 hover:border-cream/20 hover:bg-stone/40 md:grid-cols-2 md:gap-8 md:p-5"
                >
                  {/* Visual */}
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-line bg-ink ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background:
                          "radial-gradient(120% 100% at 50% 0%, rgba(201,242,74,0.10), transparent 60%)",
                      }}
                      aria-hidden
                    />
                    {cover ? (
                      <div
                        className={`relative flex h-full min-h-56 items-center justify-center ${
                          portrait ? "p-6" : "p-0"
                        }`}
                      >
                        <Image
                          src={cover.src}
                          alt={cover.alt}
                          width={cover.w}
                          height={cover.h}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className={
                            portrait
                              ? "h-72 w-auto rounded-xl object-contain shadow-2xl shadow-black/40 transition-transform duration-700 group-hover:-translate-y-1.5"
                              : "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          }
                        />
                      </div>
                    ) : (
                      <div className="grid h-full min-h-56 place-items-center font-display text-6xl text-stone">
                        {p.name}
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between gap-8 p-3 md:p-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-lime">
                          0{i + 1}
                        </span>
                        {p.status ? (
                          <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-sand">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
                            {p.status}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-6 font-display text-3xl tracking-tight text-cream sm:text-4xl">
                        {p.name}
                      </h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ash">
                        {p.role} · {p.year}
                      </p>
                      <p className="mt-5 max-w-md text-pretty leading-relaxed text-sand">
                        {p.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {p.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-sand"
                        >
                          {s}
                        </span>
                      ))}
                      <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-cream">
                        Case
                        <ArrowUpRight className="h-4 w-4 text-lime transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
