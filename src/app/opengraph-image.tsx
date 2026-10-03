import { ImageResponse } from "next/og";

export const alt = "Ngolo's Cafe & Bistro, Thakali Chowk, Rudrapur";
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
          justifyContent: "space-between",
          background: "#1f2d25",
          color: "#f5f6f2",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", width: 120, height: 10, background: "#e3a82a" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1 }}>Ngolo&apos;s</div>
          <div style={{ fontSize: 44, marginTop: 16, opacity: 0.85 }}>Cafe &amp; Bistro</div>
        </div>
        <div style={{ fontSize: 34, opacity: 0.8 }}>ADP Road, Thakali Chowk, Rudrapur</div>
      </div>
    ),
    size,
  );
}
