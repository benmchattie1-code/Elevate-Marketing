import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a2b28 0%, #071e1c 60%, #135049 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "22px solid transparent",
              borderRight: "22px solid transparent",
              borderBottom: "38px solid #6cc9bb",
            }}
          />
          <span style={{ fontSize: 32, fontWeight: 700, color: "#a6e3d5", letterSpacing: 4 }}>
            ELEVATE MARKETING COMPANY
          </span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Marketing that shows up, every single week
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "rgba(255,255,255,0.65)" }}>
          Strategic marketing, content and consistent execution, Aberdeen &amp; UK-wide
        </div>
      </div>
    ),
    size,
  );
}
