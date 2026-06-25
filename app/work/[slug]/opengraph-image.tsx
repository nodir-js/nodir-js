import { ImageResponse } from "next/og";
import { projects, projectBySlug } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0b0a09";
const CREAM = "#f4f0e6";
const SAND = "#a8a094";
const LIME = "#c9f24a";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  const name = p?.name ?? "Nodirbek Sharipov";
  const company = p?.company ?? "";
  const role = p?.role ?? "";
  const tagline = p?.tagline ?? "";
  const stack = p?.stack.slice(0, 6) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          backgroundImage:
            "linear-gradient(to right, rgba(244,240,230,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,240,230,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{ width: 16, height: 16, borderRadius: 99, background: LIME }}
            />
            <span style={{ color: CREAM }}>nodir</span>
            <span style={{ color: SAND }}>/dev</span>
          </div>
          <span style={{ color: SAND, letterSpacing: 4, fontSize: 22 }}>
            {company.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: LIME, fontSize: 30, marginBottom: 18 }}>
            {role}
          </span>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: -3,
              color: CREAM,
              fontWeight: 600,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 34,
              color: SAND,
              maxWidth: 980,
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            borderTop: "1px solid rgba(244,240,230,0.12)",
            paddingTop: 28,
          }}
        >
          {stack.map((s) => (
            <span
              key={s}
              style={{
                display: "flex",
                fontSize: 24,
                color: SAND,
                border: "1px solid rgba(244,240,230,0.16)",
                borderRadius: 99,
                padding: "8px 20px",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
