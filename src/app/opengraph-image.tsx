import { ImageResponse } from "next/og";

export const alt = "No Cadernin — Saia do caderno e venda com cabeça";
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
          padding: 72,
          background:
            "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "white",
              color: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 900,
            }}
          >
            NC
          </div>
          No Cadernin
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 1000,
            }}
          >
            Saia do caderno. Venda com cabeça.
          </div>
          <div style={{ fontSize: 30, color: "#DBEAFE", maxWidth: 900 }}>
            Sistema de gestão mobile-first por R$4,99/mês. Sem fidelidade.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#DBEAFE",
          }}
        >
          <span>nocadernin.com.br</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
