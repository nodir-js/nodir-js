import { publications, socials } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@/components/icons";

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          kicker="Writing"
          title="Notes from the build."
          intro="Occasional deep dives on the engineering problems I find interesting."
        />

        <div className="flex flex-col">
          {publications.map((pub, i) => (
            <Reveal key={pub.url} delay={i * 60}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 border-t border-line py-8 md:grid-cols-[6rem_1fr_auto] md:items-center md:gap-8"
              >
                <span className="font-mono text-sm text-ash">{pub.year}</span>
                <h3 className="font-display text-xl leading-snug text-cream transition-colors group-hover:text-lime sm:text-2xl">
                  {pub.title}
                </h3>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sand">
                  {pub.outlet}
                  <ArrowUpRight className="h-4 w-4 text-lime transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>

        <Reveal className="mt-8">
          <p className="font-mono text-sm text-ash">
            More on{" "}
            <a
              href={socials.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line text-sand hover:text-cream"
            >
              dev.to
            </a>{" "}
            and{" "}
            <a
              href={socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line text-sand hover:text-cream"
            >
              Medium
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
