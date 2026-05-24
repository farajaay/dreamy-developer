import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          color: "#D18C8C",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: 24,
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
