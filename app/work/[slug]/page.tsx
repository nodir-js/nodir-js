import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, featuredProjects, projectBySlug } from "@/lib/data";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { projectJsonLd, breadcrumbJsonLd } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const p = projectBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.company}`,
    description: p.tagline,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${p.slug}`,
      title: `${p.name} — ${p.company}`,
      description: p.tagline,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const order = project.featured
    ? featuredProjects
    : [...featuredProjects, project];
  const idx = order.findIndex((p) => p.slug === project.slug);
  const next = order[(idx + 1) % order.length];

  return (
    <>
      <JsonLd data={[projectJsonLd(project), breadcrumbJsonLd(project)]} />
      <Nav />
      <main className="mx-auto max-w-5xl px-5 pt-28 sm:px-8 sm:pt-36">
        <a
          href="/#work"
          className="link-line inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-sand hover:text-cream"
        >
          <ArrowRight className="h-4 w-4 rotate-180 text-lime" />
          All work
        </a>

        {/* Header */}
        <header className="mt-10 border-b border-line pb-12">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="kicker">{project.company}</span>
            {project.status ? (
              <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-sand">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
                {project.status}
              </span>
            ) : null}
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,5.5rem)] font-light leading-[0.95] tracking-tight text-cream">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-xl leading-relaxed text-sand">
            {project.tagline}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <dt className="kicker">Role</dt>
              <dd className="mt-2 text-sm text-cream">{project.role}</dd>
            </div>
            <div>
              <dt className="kicker">Timeline</dt>
              <dd className="mt-2 text-sm text-cream">{project.period}</dd>
            </div>
            <div className="col-span-2">
              <dt className="kicker">Live</dt>
              <dd className="mt-2 text-sm">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line inline-flex items-center gap-1.5 text-cream hover:text-lime"
                  >
                    {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    <ArrowUpRight className="h-4 w-4 text-lime" />
                  </a>
                ) : (
                  <span className="text-ash">Internal / proprietary</span>
                )}
              </dd>
            </div>
          </dl>
        </header>

        {/* Body */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1fr_16rem] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-cream">
                {project.blurb}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-12 kicker">What I worked on</h2>
              <ul className="mt-6 flex flex-col gap-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3.5 leading-relaxed text-sand">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                    <span className="text-pretty">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 rounded-2xl border border-line bg-coal/40 p-6 sm:p-8">
                <h2 className="kicker text-lime">Outcome</h2>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-cream">
                  {project.outcome}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Stack rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="kicker">Stack</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-sand"
                >
                  {s}
                </span>
              ))}
            </div>
          </aside>
        </div>

        {/* Gallery */}
        {project.images.length > 0 ? (
          <Gallery project={project} />
        ) : null}

        {/* Next */}
        <Link
          href={`/work/${next.slug}`}
          className="group mt-8 flex items-center justify-between gap-4 border-t border-line py-12"
        >
          <div>
            <span className="kicker">Next project</span>
            <p className="mt-3 font-display text-3xl text-cream transition-colors group-hover:text-lime sm:text-4xl">
              {next.name}
            </p>
          </div>
          <ArrowRight className="h-7 w-7 text-lime transition-transform group-hover:translate-x-1.5" />
        </Link>
      </main>
      <Footer />
    </>
  );
}

function Gallery({ project }: { project: NonNullable<ReturnType<typeof projectBySlug>> }) {
  const portrait = project.images.every((im) => im.h > im.w);

  return (
    <section className="border-t border-line py-14">
      <h2 className="kicker">Gallery</h2>
      <div
        className={
          portrait
            ? "mt-8 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
            : "mt-8 grid gap-4 sm:grid-cols-2"
        }
      >
        {project.images.map((im, i) => {
          const isPortrait = im.h > im.w;
          return (
            <Reveal
              key={im.src}
              delay={(i % 3) * 60}
              className={
                portrait
                  ? "shrink-0"
                  : isPortrait
                    ? "row-span-2"
                    : ""
              }
            >
              <div
                className={`overflow-hidden rounded-2xl border border-line bg-ink ${
                  portrait ? "w-44 sm:w-52" : ""
                }`}
              >
                <Image
                  src={im.src}
                  alt={im.alt}
                  width={im.w}
                  height={im.h}
                  sizes={portrait ? "208px" : "(max-width: 640px) 100vw, 50vw"}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
