import Image from "next/image";
import { sideProjects } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@/components/icons";

export function SideProjects() {
  return (
    <section id="side-projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          kicker="Side Projects"
          title={
            <>
              Things I&apos;ve built{" "}
              <span className="text-ash">on my own time.</span>
            </>
          }
          intro="Independent products I designed and shipped end to end — live and in the wild."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {sideProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-coal/40 transition-colors duration-500 hover:border-cream/20 hover:bg-stone/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink">
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    width={p.cover.w}
                    height={p.cover.h}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl tracking-tight text-cream sm:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-2 max-w-sm text-pretty leading-relaxed text-sand">
                        {p.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-6 w-6 shrink-0 text-lime transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-sand"
                      >
                        {s}
                      </span>
                    ))}
                    <span className="ml-auto font-mono text-xs text-ash">
                      {p.url.replace(/^https?:\/\//, "").replace(/\/.*$/, "")}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
