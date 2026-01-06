import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05050a",
          color: "#f4f4f5",
          position: "relative",
          overflow: "hidden",
          padding: 72,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -200,
            background:
              "radial-gradient(circle at 20% 30%, rgba(34,211,238,0.25), transparent 45%), radial-gradient(circle at 80% 30%, rgba(167,139,250,0.25), transparent 45%), radial-gradient(circle at 50% 90%, rgba(217,70,239,0.22), transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                letterSpacing: "0.18em",
                fontSize: 14,
              }}
            >
              YEK
            </div>
            <div style={{ fontSize: 22, opacity: 0.9 }}>{site.role}</div>
          </div>

          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.05 }}>
            {site.name}
          </div>

          <div style={{ fontSize: 28, opacity: 0.85, maxWidth: 980 }}>
            {site.hero.headline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

