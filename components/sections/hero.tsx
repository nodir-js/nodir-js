import { profile, stats } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

const marquee = [
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "Next.js",
  "AWS",
  "Redux",
  "GraphQL",
  "Serverless",
  "WebRTC",
  "MySQL",
  "MongoDB",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-faint absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #c9f24a, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-stone/50 px-3.5 py-1.5 font-mono text-xs text-sand">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            {profile.available}
          </span>
          <span className="kicker">{profile.location}</span>
        </div>

        <h1 className="mt-10 font-display text-[clamp(2.8rem,9vw,7.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-cream">
          Nodirbek
          <br />
          <span className="text-ash">Sharipov</span>
          <span className="text-lime">.</span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <p className="max-w-2xl text-pretty text-xl leading-relaxed text-sand sm:text-2xl">
            <span className="text-cream">{profile.role}.</span>{" "}
            {profile.tagline}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href="/#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/40 hover:bg-stone/40"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink p-6">
              <dt className="font-display text-4xl text-cream sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-sand">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Tech marquee */}
      <div className="relative border-y border-line py-4">
        <div className="flex w-max marquee-track gap-10 whitespace-nowrap pl-10">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={i}
              className="font-mono text-sm uppercase tracking-wider text-ash"
            >
              {t}
              <span className="ml-10 text-lime/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
