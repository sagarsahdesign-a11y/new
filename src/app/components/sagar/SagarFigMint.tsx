import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

/* ─── Responsive CSS ─────────────────────────────────────── */
const css = `
@keyframes typeKeyFm {
  0%, 100% { transform: translateY(0); box-shadow: 0 4px 0 #a8a49a, 0 6px 5px rgba(0,0,0,0.15); }
  50%       { transform: translateY(3px); box-shadow: 0 1px 0 #a8a49a, 0 1px 2px rgba(0,0,0,0.06); }
}
.fm-key { animation: typeKeyFm 2.2s ease-in-out infinite; }
.fm-key:nth-child(3n+1) { animation-delay: 0.1s; animation-duration: 1.8s; }
.fm-key:nth-child(7n)   { animation-delay: 0.5s; animation-duration: 2.5s; }
.fm-key:nth-child(2n+4) { animation-delay: 0.85s; }
.fm-key:nth-child(5n)   { animation-delay: 1.1s; animation-duration: 1.6s; }
.fm-key:nth-child(4n+2) { animation-delay: 0.3s; }

@keyframes cursorBlink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.fm-cursor {
  display: inline-block;
  width: 7px;
  height: 13px;
  background: #555;
  vertical-align: middle;
  margin-left: 1px;
  animation: cursorBlink 1s step-end infinite;
}

/* layout */
.fm-outer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 56px;
}
.fm-right {
  flex: 1;
  max-width: 420px;
}

/* Computer scales down on small screens */
.fm-computer-wrap {
  flex-shrink: 0;
  width: 320px;
}

@media (max-width: 900px) {
  .fm-outer {
    flex-direction: column !important;
    align-items: center !important;
    gap: 32px !important;
  }
  .fm-computer-wrap {
    width: 280px !important;
  }
  .fm-right {
    max-width: 100% !important;
    width: 100% !important;
  }
}

@media (max-width: 480px) {
  .fm-computer-wrap {
    width: 240px !important;
  }
}
`;

/* ─── CRT typewriter ─────────────────────────────────────── */
const TEXTS = [
  "Good morning.\nFigma file is open.\nDesign system ready.\n— Sagar Shah",
  "Building with React.\nNo handoff needed.\nFigma → live URL ✓",
  "Security nerd.\nUX designer.\nAvailable for work ✦",
];

function CRTScreen() {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const target = TEXTS[idx];

  useEffect(() => {
    if (chars < target.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 60 + Math.random() * 40);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setChars(0); setIdx((i) => (i + 1) % TEXTS.length); }, 2600);
    return () => clearTimeout(t);
  }, [chars, target]);

  return (
    <div style={{ fontFamily: "'Courier New', monospace", fontSize: 11, lineHeight: 1.7, color: "#444", whiteSpace: "pre-wrap", minHeight: 88 }}>
      {target.slice(0, chars)}
      <span className="fm-cursor" />
    </div>
  );
}

/* ─── The computer (flat isometric, no broken 3D) ──────── */
function RetroComputer({ scale = 1 }: { scale?: number }) {
  const w = 320 * scale;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 0, userSelect: "none" }}>

      {/* ── Monitor ── */}
      <div
        style={{
          width: "100%",
          background: "linear-gradient(160deg, #e8e4d8 0%, #d6d2c6 100%)",
          borderRadius: "12px 12px 6px 6px",
          padding: 20,
          boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 2px 2px 4px rgba(255,255,255,0.6), inset -3px -3px 8px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        {/* Screen bezel */}
        <div
          style={{
            background: "#c2beb4",
            borderRadius: 10,
            padding: 8,
            boxShadow: "inset 2px 2px 6px rgba(0,0,0,0.12), inset -1px -1px 4px rgba(255,255,255,0.3)",
          }}
        >
          {/* CRT display area */}
          <div
            style={{
              background: "#f0ede4",
              borderRadius: "28% 28% 28% 28% / 6% 6% 6% 6%",
              padding: "14px 16px",
              position: "relative",
              overflow: "hidden",
              minHeight: 140,
            }}
          >
            {/* Scanlines */}
            <div
              style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "repeating-linear-gradient(transparent, transparent 1px, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0.03) 2px)",
                zIndex: 2,
              }}
            />
            {/* macOS dots */}
            <div style={{ display: "flex", gap: 4, marginBottom: 8, paddingBottom: 6, borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
              {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
              ))}
              <span style={{ marginLeft: 4, fontSize: 8, color: "rgba(0,0,0,0.35)", fontFamily: "monospace" }}>FigOS 1.0</span>
            </div>
            <CRTScreen />
          </div>
        </div>

        {/* Bottom strip: logo + floppy */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
          {/* Rainbow apple */}
          <div style={{
            width: 16, height: 20,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            background: "linear-gradient(180deg,#63B548 17%,#F6C829 17% 34%,#E57D25 34% 51%,#D83335 51% 68%,#9C4595 68% 85%,#468CCF 85%)",
          }} />

          {/* Sticker */}
          <div style={{
            background: "#fe6301", color: "white",
            fontSize: 7, fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            padding: "2px 7px", borderRadius: 3, letterSpacing: "0.05em",
            transform: "rotate(-1.5deg)",
          }}>
            UX / SEC
          </div>

          {/* Floppy */}
          <div style={{
            width: 90, height: 9,
            background: "#2a2a2a", borderRadius: 5,
            boxShadow: "inset 1px 1px 4px rgba(0,0,0,0.5)",
          }} />
        </div>
      </div>

      {/* ── Keyboard ── */}
      <div
        style={{
          width: "92%",
          background: "linear-gradient(160deg, #dedad0 0%, #c8c4b8 100%)",
          borderRadius: "4px 4px 10px 10px",
          padding: "10px 12px 14px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.14), inset 1px 1px 2px rgba(255,255,255,0.5)",
          marginTop: 2,
        }}
      >
        {/* Row 1 */}
        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="fm-key" style={{
              flex: 1, height: 20, background: "#ece8de",
              borderRadius: 3,
              boxShadow: "0 4px 0 #a8a49a, 0 6px 5px rgba(0,0,0,0.13)",
            }} />
          ))}
        </div>
        {/* Row 2 */}
        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          <div className="fm-key" style={{ flex: 1.8, height: 20, background: "#ece8de", borderRadius: 3, boxShadow: "0 4px 0 #a8a49a, 0 5px 4px rgba(0,0,0,0.12)" }} />
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="fm-key" style={{ flex: 1, height: 20, background: "#ece8de", borderRadius: 3, boxShadow: "0 4px 0 #a8a49a, 0 5px 4px rgba(0,0,0,0.12)" }} />
          ))}
          <div className="fm-key" style={{ flex: 1.8, height: 20, background: "#ece8de", borderRadius: 3, boxShadow: "0 4px 0 #a8a49a, 0 5px 4px rgba(0,0,0,0.12)" }} />
        </div>
        {/* Row 3 */}
        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          <div className="fm-key" style={{ flex: 2.2, height: 20, background: "#ece8de", borderRadius: 3, boxShadow: "0 4px 0 #a8a49a, 0 5px 4px rgba(0,0,0,0.12)" }} />
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="fm-key" style={{ flex: 1, height: 20, background: "#ece8de", borderRadius: 3, boxShadow: "0 4px 0 #a8a49a, 0 5px 4px rgba(0,0,0,0.12)" }} />
          ))}
          <div className="fm-key" style={{ flex: 2.8, height: 20, background: "#ece8de", borderRadius: 3, boxShadow: "0 4px 0 #a8a49a, 0 5px 4px rgba(0,0,0,0.12)" }} />
        </div>
        {/* Space row */}
        <div style={{ display: "flex", gap: 4 }}>
          {[1, 1, 6, 1, 1].map((flex, i) => (
            <div key={i} className="fm-key" style={{ flex, height: 20, background: "#ece8de", borderRadius: 3, boxShadow: "0 4px 0 #a8a49a, 0 5px 4px rgba(0,0,0,0.12)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Tools list ─────────────────────────────────────────── */
const TOOLS = [
  { name: "Figma", role: "Primary design tool", accent: true },
  { name: "Framer", role: "Prototyping & production" },
  { name: "VS Code", role: "Code editor" },
  { name: "React + Vite", role: "Frontend stack" },
  { name: "Tailwind CSS", role: "Styling" },
  { name: "Framer Motion", role: "Animations" },
];

/* ─── Main export ─────────────────────────────────────────── */
export function SagarFigMint() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{css}</style>
      <section
        id="setup"
        style={{ padding: "80px 24px", background: "#f7f7f7", borderTop: "1px solid #e8e8e8" }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>

          {/* Header */}
          <div ref={ref} style={{ marginBottom: 48 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fe6301" }} />
                <span style={{ fontSize: 12, color: "#8b8b8b", textTransform: "uppercase" as const, letterSpacing: "0.08em", fontFamily: "'DM Sans', sans-serif" }}>
                  My Setup
                </span>
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 600, color: "rgb(49,49,49)", letterSpacing: "-0.04em", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                Tools I Live In
              </h2>
              <p style={{ fontSize: 16, color: "#8b8b8b", margin: "4px 0 0", fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}>
                The stack behind the design
              </p>
            </motion.div>
          </div>

          {/* Layout */}
          <div className="fm-outer">

            {/* Computer */}
            <motion.div
              className="fm-computer-wrap"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <RetroComputer />
            </motion.div>

            {/* Text + tools */}
            <motion.div
              className="fm-right"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "#8b8b8b", fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em", marginBottom: 28 }}>
                End-to-end. From Figma file to live URL — no handoff needed. I design, prototype, and ship.
              </p>

              {/* Tool rows */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {TOOLS.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "11px 0", borderBottom: "1px solid #ececec",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: tool.accent ? "#fe6301" : "#d4d4d4", flexShrink: 0 }} />
                      <span style={{ fontSize: 15, fontWeight: 600, color: "rgb(49,49,49)", letterSpacing: "-0.02em" }}>
                        {tool.name}
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: "#8b8b8b", textTransform: "uppercase" as const, letterSpacing: "0.07em" }}>
                      {tool.role}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.85 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  marginTop: 28, background: "rgb(49,49,49)", color: "white",
                  border: "none", borderRadius: 999, padding: "12px 28px",
                  fontSize: 14, fontWeight: 500, cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                See My Work
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}
