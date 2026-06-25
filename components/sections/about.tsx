import { profile, education } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="05" kicker="About" title="Engineer first. Builder always." />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="text-pretty text-2xl leading-relaxed text-cream sm:text-3xl">
              {profile.summary}
            </p>
            <figure className="mt-10 border-l-2 border-lime pl-6">
              <blockquote className="font-display text-2xl leading-snug text-sand">
                “{profile.goal}”
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={80} className="flex flex-col gap-10">
            <div>
              <h3 className="kicker">Languages</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {profile.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between border-b border-line pb-3"
                  >
                    <span className="text-cream">{l.name}</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-ash">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="kicker">Education</h3>
              <ul className="mt-4 flex flex-col gap-5">
                {education.map((e) => (
                  <li key={e.school}>
                    <p className="text-cream">{e.degree}</p>
                    <p className="text-sm text-sand">{e.school}</p>
                    <p className="mt-1 font-mono text-xs text-ash">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
