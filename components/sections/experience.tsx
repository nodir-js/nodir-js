import Link from "next/link";
import { experience, projectBySlug } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "@/components/icons";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          kicker="Career"
          title={
            <>
              Seven years, six teams, one constant:{" "}
              <span className="text-ash">shipping the whole stack.</span>
            </>
          }
        />

        <ol className="relative">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 40}>
              <div className="group grid gap-6 border-t border-line py-8 md:grid-cols-[10rem_1fr] md:gap-10">
                <div className="flex items-center justify-between md:flex-col md:items-start md:justify-start">
                  <span className="font-mono text-sm text-cream">
                    {job.start}
                    <span className="text-ash"> — {job.end}</span>
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ash">
                    {job.location}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl text-cream sm:text-3xl">
                      {job.company}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-lime">
                      {job.role}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-sand">
                    {job.summary}
                  </p>

                  {job.bullets ? (
                    <ul className="mt-4 grid max-w-2xl gap-2 sm:grid-cols-2">
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2.5 text-sm leading-relaxed text-sand"
                        >
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-lime" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {job.projectSlugs ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.projectSlugs.map((slug) => {
                        const p = projectBySlug(slug);
                        if (!p) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/work/${slug}`}
                            className="group/chip inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-sand transition-colors hover:border-lime hover:text-cream"
                          >
                            {p.name}
                            <ArrowUpRight className="h-3.5 w-3.5 text-lime" />
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
