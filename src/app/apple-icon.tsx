import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon served at /apple-icon.
 * Rounded teal square with "TT" monogram for iOS home-screen bookmarks.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f766e",
          color: "#ffffff",
          fontSize: "100px",
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-4px",
        }}
      >
        TT
      </div>
    ),
    { ...size },
  );
}
