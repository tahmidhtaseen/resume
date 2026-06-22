import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — IT Support Engineer & Network Enthusiast`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic Open Graph image served at /opengraph-image.
 * Renders a branded card with the name, title, and key credentials so that
 * links shared on social media show a polished preview.
 *
 * Note: the Satori renderer (next/og) requires every container <div> with
 * multiple children to declare an explicit `display: "flex"`.
 */
export default async function OpenGraphImage() {
  const credentials: [string, string][] = [
    ["MTCNA", "Certified"],
    ["CompTIA A+", "Certified"],
    ["Dhaka, BD", "Based"],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #fafaf7 0%, #f5f3ee 50%, #eef4f3 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: status row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(15,118,110,0.25)",
              background: "rgba(15,118,110,0.06)",
              fontSize: "22px",
              fontWeight: 600,
              color: "#0f766e",
            }}
          >
            <span
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "999px",
                background: "#0f766e",
                display: "flex",
              }}
            />
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Middle: name + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              fontWeight: 600,
              color: "#0f766e",
              letterSpacing: "2px",
            }}
          >
            TAHMID HOSSAIN TA-SEEN
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "76px",
              fontWeight: 700,
              color: "#1a1a17",
              lineHeight: 1.05,
            }}
          >
            <div style={{ display: "flex" }}>IT Support Engineer</div>
            <div style={{ display: "flex" }}>&amp; Network Enthusiast</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "#6b6b66",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Network troubleshooting, hardware maintenance, and on-site support —
            ready to collaborate with any team.
          </div>
        </div>

        {/* Bottom: credentials row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(15,118,110,0.2)",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            {credentials.map(([label, sub]) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#1a1a17",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: "16px",
                    color: "#9a9a93",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  {sub}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              fontWeight: 600,
              color: "#0f766e",
            }}
          >
            tahmidhossain209@gmail.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
