import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Tijdelijk favicon: klei-vierkant met serif-"V". Vervangen zodra het
// echte logo van Vrijzinnigen Nederland is aangeleverd.
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
          borderRadius: 13,
          color: "#f6f0e6",
          fontSize: 44,
          fontWeight: 600,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        V
      </div>
    ),
    { ...size },
  );
}
