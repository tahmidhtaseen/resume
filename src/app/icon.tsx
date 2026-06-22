import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Dynamic favicon served at /icon.
 * A teal rounded square with the initials "TT" — clean and on-brand.
 */
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
          borderRadius: "8px",
          background: "#0f766e",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-1px",
        }}
      >
        TT
      </div>
    ),
    { ...size },
  );
}
