import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Yousef Shohber — Backend Developer, Node.js & NestJS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Generated at build time, so reading from the project directory is safe.
  const serif = await readFile(join(process.cwd(), "src/fonts/instrument-serif-latin-400-normal.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0b",
          color: "#ece8de",
          padding: "64px 72px",
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 4, color: "#a7a398" }}>
          <span>YOUSEF SHOHBER</span>
          <span>BACKEND DEVELOPER</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: 1.02, letterSpacing: -2 }}>APIs that stay</div>
          <div style={{ fontSize: 104, lineHeight: 1.02, letterSpacing: -2, display: "flex" }}>
            <span style={{ color: "#ff5b35", marginRight: 24 }}>correct</span>
            <span>when requests collide.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a7a398" }}>
          <span>Node.js · NestJS · TypeScript · PostgreSQL · MongoDB · Redis</span>
          <div style={{ width: 18, height: 18, borderRadius: 18, background: "#ff5b35" }} />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument Serif", data: serif, style: "normal", weight: 400 }] },
  );
}
