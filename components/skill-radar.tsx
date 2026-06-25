import { skillRadar, skillOverall, type RadarAxis } from "@/lib/data";

const CX = 230;
const CY = 188;
const R = 125;
const LEVELS = [0.25, 0.5, 0.75, 1];

const angleAt = (i: number, n: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n;

const point = (i: number, n: number, radius: number): [number, number] => {
  const a = angleAt(i, n);
  return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)];
};

const toPoints = (pts: [number, number][]) =>
  pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

export function SkillRadar({ data = skillRadar }: { data?: RadarAxis[] }) {
  const n = data.length;
  const ring = (lvl: number) =>
    toPoints(data.map((_, i) => point(i, n, R * lvl)));
  const dataPoints = toPoints(
    data.map((d, i) => point(i, n, R * (d.rating / 100))),
  );

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="mx-auto w-full max-w-md">
        <svg viewBox="0 0 460 376" className="w-full" role="img"
          aria-label="Radar chart of skill ratings by discipline">
          {/* grid rings */}
          {LEVELS.map((lvl) => (
            <polygon
              key={lvl}
              points={ring(lvl)}
              className="fill-none stroke-line"
              strokeWidth={1}
            />
          ))}
          {/* axes */}
          {data.map((_, i) => {
            const [x, y] = point(i, n, R);
            return (
              <line
                key={i}
                x1={CX}
                y1={CY}
                x2={x}
                y2={y}
                className="stroke-line"
                strokeWidth={1}
              />
            );
          })}

          {/* data shape */}
          <g className="radar-pop">
            <polygon
              points={dataPoints}
              className="fill-lime stroke-lime"
              fillOpacity={0.16}
              strokeWidth={2}
              strokeLinejoin="round"
            />
            {data.map((d, i) => {
              const [x, y] = point(i, n, R * (d.rating / 100));
              return <circle key={i} cx={x} cy={y} r={3.5} className="fill-lime" />;
            })}
          </g>

          {/* axis labels + ratings */}
          {data.map((d, i) => {
            const [lx, ly] = point(i, n, R + 26);
            const cos = Math.cos(angleAt(i, n));
            const anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
            return (
              <text key={i} x={lx} y={ly} textAnchor={anchor}>
                <tspan
                  x={lx}
                  className="fill-cream"
                  style={{ fontSize: 12.5, fontWeight: 500 }}
                >
                  {d.short}
                </tspan>
                <tspan
                  x={lx}
                  dy={16}
                  className="fill-lime"
                  style={{ fontSize: 13, fontFamily: "var(--font-mono)" }}
                >
                  {d.rating}
                </tspan>
              </text>
            );
          })}
        </svg>
      </div>

      {/* Overall + breakdown — FIFA-style summary card */}
      <div className="flex flex-col justify-center gap-6 rounded-3xl border border-line bg-coal/40 p-6 sm:p-8">
        <div className="flex items-end gap-4">
          <span className="font-display text-6xl leading-none text-lime">
            {skillOverall}
          </span>
          <div className="pb-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ash">
              Overall
            </p>
            <p className="text-sm text-sand">Across {n} disciplines</p>
          </div>
        </div>

        <ul className="flex flex-col">
          {data.map((d) => (
            <li
              key={d.label}
              className="flex items-baseline justify-between gap-3 border-b border-line/60 py-2.5 last:border-0 last:pb-0"
            >
              <span className="text-sm text-cream">{d.label}</span>
              <span className="font-mono text-sm text-lime">{d.rating}</span>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[0.7rem] leading-relaxed text-ash">
          Ratings derive from years of hands-on, production experience — not a
          self-assessment.
        </p>
      </div>
    </div>
  );
}
