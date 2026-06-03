import { ImageResponse } from "next/og";

export const alt = "Vrijzinnigen Nederland, ruimte voor zingeving en verbinding";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #faf6ef 0%, #f2ebe0 55%, #efe2d2 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#b1492f",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: "#1c1a17" }}>
            Vrijzinnigen Nederland
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#1c1a17",
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            Ruimte voor zingeving, verbinding en vrij denken.
          </div>
          <div style={{ fontSize: 30, color: "rgba(28,26,23,0.65)", maxWidth: 880 }}>
            Een vereniging die gelijkgestemden verbindt, van vrijzinnigen tot
            religieus humanisten.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ height: 6, width: 64, background: "#d29a2c", borderRadius: 4 }} />
          <div style={{ fontSize: 26, color: "#b1492f", fontWeight: 600 }}>
            vrijzinnigen.nl
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
