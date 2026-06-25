import { skillGroups } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const MAX = 8;

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          kicker="Toolkit"
          title={
            <>
              The stack I reach for — and{" "}
              <span className="text-ash">how long I&apos;ve lived in it.</span>
            </>
          }
          intro="Years are hands-on, in production. The numbers next to each tool are years of experience, not a self-rating."
        />

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 50} className="bg-ink">
              <div className="flex h-full flex-col p-6 sm:p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-lime">
                  {group.title}
                </h3>
                <ul className="mt-6 flex flex-1 flex-col gap-4">
                  {group.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-cream">{s.name}</span>
                        <span className="font-mono text-xs text-ash">
                          {s.years}
                          <span className="text-ash/60">y</span>
                        </span>
                      </div>
                      <div className="mt-2 h-px w-full bg-line">
                        <div
                          className="h-px bg-lime/70"
                          style={{ width: `${(s.years / MAX) * 100}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
