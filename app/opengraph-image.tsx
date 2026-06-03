import { ImageResponse } from "next/og";

export const alt = "Vrijzinnigen Nederland, ruimte voor zingeving en verbinding";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Redactionele OG-kaart: diep espresso-vlak, klei-accent, serif-aanslag.
// Vervangen door merk-versie zodra logo + kleuren binnen zijn.
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
          background: "#241d18",
          padding: "84px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#c2602f",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#d9b27a",
            }}
          >
            Vrijzinnigen Nederland
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              color: "#f1e9dc",
              lineHeight: 1.04,
              letterSpacing: -1,
              maxWidth: 940,
            }}
          >
            Ruimte voor zingeving, verbinding en vrij denken.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(241,233,220,0.66)",
              maxWidth: 820,
              fontFamily: "sans-serif",
            }}
          >
            Een vereniging die gelijkgestemden verbindt, van vrijzinnigen tot
            religieus humanisten.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ fontSize: 24, color: "rgba(241,233,220,0.5)" }}>
            vrijzinnigennederland.nl
          </div>
          <div
            style={{
              width: 240,
              height: 8,
              borderRadius: 8,
              background:
                "linear-gradient(90deg,#4fb14a,#1fa79f,#2a8fd0,#6a45a0,#b83b8f,#e4322b,#ef7d1e,#f4c41f)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
