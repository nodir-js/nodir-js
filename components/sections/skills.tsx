"use client";

import { useState } from "react";
import { skillGroups } from "@/lib/data";
import { SectionHeader } from "@/components/ui";
import { SkillRadar } from "@/components/skill-radar";

type View = "chart" | "list";

export function Skills() {
  const [view, setView] = useState<View>("chart");

  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          kicker="Toolkit"
          title={
            <>
              The stack I reach for — and{" "}
              <span className="text-ash">how long I&apos;ve lived in it.</span>
            </>
          }
        />

        {/* View toggle */}
        <div className="-mt-4 mb-12 flex justify-end">
          <div
            role="tablist"
            aria-label="Skills view"
            className="inline-flex items-center rounded-full border border-line bg-coal/40 p-1"
          >
            <ToggleButton
              active={view === "chart"}
              onClick={() => setView("chart")}
            >
              Chart
            </ToggleButton>
            <ToggleButton
              active={view === "list"}
              onClick={() => setView("list")}
            >
              List
            </ToggleButton>
          </div>
        </div>

        {/* Radar chart (default) */}
        <div className={view === "chart" ? "" : "hidden"} aria-hidden={view !== "chart"}>
          <SkillRadar />
        </div>

        {/* Card list */}
        <div className={view === "list" ? "" : "hidden"} aria-hidden={view !== "list"}>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-ink">
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-lime">
                    {group.title}
                  </h3>
                  <ul className="mt-6 flex flex-1 flex-col">
                    {group.skills.map((s) => (
                      <li
                        key={s.name}
                        className="flex items-baseline justify-between gap-3 border-b border-line/60 py-3 first:pt-0 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-cream">{s.name}</span>
                        <span className="font-mono text-xs text-ash">
                          {s.years}
                          <span className="text-ash/60"> yrs</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
        active ? "bg-lime text-ink" : "text-sand hover:text-cream"
      }`}
    >
      {children}
    </button>
  );
}
