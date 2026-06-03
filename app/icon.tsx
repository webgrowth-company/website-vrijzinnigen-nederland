import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Tijdelijk favicon: terracotta vierkant met een witte "V". Vervangen zodra
// het echte logo van Vrijzinnigen Nederland is aangeleverd.
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
          background: "#b1492f",
          borderRadius: 14,
          color: "#faf6ef",
          fontSize: 42,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        V
      </div>
    ),
    { ...size },
  );
}
