import type { ReactNode } from "react";

export function SectionHeader({
  index,
  kicker,
  title,
  intro,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-lime">{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="kicker">{kicker}</span>
      </div>
      <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-stone/40 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-sand">
      {children}
    </span>
  );
}
