import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Ahmad AlFaraj — Developer & Automation Consultant. Slow code, written carefully.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(209,140,140,0.15) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(139,94,94,0.18) 0%, transparent 50%), #0F172A",
          color: "#F7F1ED",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#E9D5D1",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>Ahmad AlFaraj</span>
          <span>Jubail · KSA</span>
        </div>

        {/* Big italic headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#F7F1ED",
            }}
          >
            Slow code,
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontStyle: "italic",
              color: "#D18C8C",
            }}
          >
            written carefully.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#9AA5B8",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>Developer & Automation Consultant</span>
          <span style={{ color: "#D18C8C" }}>ahmadalfaraj.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
