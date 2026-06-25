import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0b0a09";
const CREAM = "#f4f0e6";
const SAND = "#a8a094";
const LIME = "#c9f24a";

export default function Image() {
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
        {/* Top bar */}
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
              style={{
                width: 16,
                height: 16,
                borderRadius: 99,
                background: LIME,
              }}
            />
            <span style={{ color: CREAM }}>nodir</span>
            <span style={{ color: SAND }}>/dev</span>
          </div>
          <span style={{ color: SAND, letterSpacing: 6, fontSize: 22 }}>
            PORTFOLIO
          </span>
        </div>

        {/* Name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 130,
              lineHeight: 1,
              letterSpacing: -3,
              color: CREAM,
              fontWeight: 600,
            }}
          >
            Nodirbek
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 130,
              lineHeight: 1.05,
              letterSpacing: -3,
              color: SAND,
              fontWeight: 600,
            }}
          >
            Sharipov<span style={{ color: LIME }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 38,
              color: LIME,
            }}
          >
            {profile.role}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: SAND,
            borderTop: "1px solid rgba(244,240,230,0.12)",
            paddingTop: 28,
          }}
        >
          <span>7+ years · Native mobile · Web · Scalable APIs</span>
          <span>{profile.location}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
