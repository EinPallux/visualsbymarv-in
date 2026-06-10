import { ImageResponse } from "next/og";

export const alt = "Marvin — Content & Visual Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0c",
          color: "#f2f1ec",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8f8d85",
          }}
        >
          <span>Marvin — Media Designer</span>
          <span>Germany</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          <span>Content people</span>
          <span style={{ color: "#ff6a3d" }}>stop scrolling for.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#8f8d85",
          }}
        >
          <span>Social Media Content · Visual Branding</span>
          <span>visualsbymarv.in</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
