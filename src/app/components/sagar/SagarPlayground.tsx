import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";

/* ─── Local audio from public folder ────────────────────────────────────── */
const AUDIO_SRC = "/NeverMine.mpeg";

/* ─── Waveform canvas ───────────────────────────────────── */
function WaveformCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // background
      ctx.fillStyle = "rgb(39,39,39)";
      ctx.fillRect(0, 0, w, h);

      // waveform
      ctx.strokeStyle = "#fe6301";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const pts = 80;
      for (let i = 0; i < pts; i++) {
        const x = (i / pts) * w;
        const s1 = Math.sin(i * 0.15 + offsetRef.current) * 10;
        const s2 = Math.sin(i * 0.6 - offsetRef.current * 2) * 6;
        const spike = i % 20 === 0 ? Math.sin(offsetRef.current * 4) * 18 : 0;
        const y = h / 2 + s1 + s2 + spike;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // subtle grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 0.5;
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, (h / 4) * i);
        ctx.lineTo(w, (h / 4) * i);
        ctx.stroke();
      }

      offsetRef.current += 0.06;
      rafRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });
    ro.observe(canvas);
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
}

/* ─── Vinyl disc ─────────────────────────────────────────── */
function VinylDisc() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      style={{
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, #444 0%, #1a1a1a 60%, #313131 100%)",
        boxShadow: "0 0 0 8px #252525, 0 0 0 10px #333, inset 0 0 20px rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {/* grooves */}
      {[30, 45, 55, 65].map((r) => (
        <div
          key={r}
          style={{
            position: "absolute",
            width: r,
            height: r,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        />
      ))}
      {/* center hole */}
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#fe6301",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a1a1a" }} />
      </div>
    </motion.div>
  );
}

/* ─── BPM live counter ───────────────────────────────────── */
function BpmBadge({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "rgb(49,49,49)",
          letterSpacing: "-0.05em",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 10,
          color: "#8b8b8b",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontFamily: "'DM Sans', sans-serif",
          marginTop: 2,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── Small data tag ─────────────────────────────────────── */
function DataTag({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #f0f0f0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <span style={{ fontSize: 12, color: "#8b8b8b", letterSpacing: "0.04em", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontSize: 13, fontWeight: 600, color: "rgb(49,49,49)" }}>{value}</span>
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────── */
const css = `
.pg-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 16px;
}
.pg-card-wide {
  grid-column: 1 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
}
.pg-nodes-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: 1px solid rgba(255,255,255,0.08);
  padding-left: 24px;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .pg-grid {
    grid-template-columns: 1fr;
  }
  .pg-card-wide {
    grid-column: 1;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 24px !important;
    padding: 24px 20px !important;
  }
  .pg-nodes-col {
    border-left: none !important;
    border-top: 1px solid rgba(255,255,255,0.08) !important;
    padding-left: 0 !important;
    padding-top: 20px !important;
    width: 100% !important;
  }
}
`;

export function SagarPlayground() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [playing, setPlaying] = useState(false);
  const [audioFailed, setAudioFailed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0.55;
    audio.onerror = () => setAudioFailed(true);
    audioRef.current = audio;
    return () => { audio.pause(); audio.src = ""; };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audioFailed) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {
        setAudioFailed(true);
      });
    }
  }, [playing, audioFailed]);

  return (
    <>
      <style>{css}</style>
      <section
        id="playground"
        style={{
          padding: "80px 24px",
          background: "#f7f7f7",
          borderTop: "1px solid #e8e8e8",
        }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          {/* Section header */}
          <div ref={ref} style={{ marginBottom: 36 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fe6301" }} />
                <span
                  style={{
                    fontSize: 12,
                    color: "#8b8b8b",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Synchronized Rhythms
                </span>
              </div>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 600,
                  color: "rgb(49,49,49)",
                  letterSpacing: "-0.04em",
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Life at 3 AM
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#8b8b8b",
                  margin: "4px 0 0",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Design, music, and way too much coffee
              </p>
            </motion.div>
          </div>

          {/* Bento grid */}
          <div className="pg-grid">

            {/* ── Card 1: Now Playing (wide) ── */}
            <motion.div
              className="pg-card-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                background: "rgb(27,27,27)",
                borderRadius: 20,
                padding: "24px 28px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* subtle crosshair grid overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  pointerEvents: "none",
                }}
              />

              {/* Vinyl + play button */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <motion.div
                  animate={{ rotate: playing ? 360 : 0 }}
                  transition={playing ? { duration: 6, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
                  style={{
                    width: 120, height: 120, borderRadius: "50%",
                    background: "radial-gradient(circle at 50% 50%, #444 0%, #1a1a1a 60%, #313131 100%)",
                    boxShadow: "0 0 0 8px #252525, 0 0 0 10px #333, inset 0 0 20px rgba(0,0,0,0.8)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={togglePlay}
                >
                  {[30, 45, 55, 65].map((r) => (
                    <div key={r} style={{ position: "absolute", width: r, height: r, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
                  ))}
                  {/* Center circle with play/pause */}
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#fe6301", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {playing ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                        <rect x="1" y="1" width="3" height="8" rx="1" />
                        <rect x="6" y="1" width="3" height="8" rx="1" />
                      </svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                        <path d="M2 1.5l7 3.5-7 3.5V1.5z" />
                      </svg>
                    )}
                  </div>
                </motion.div>
                {/* Playing pulse ring */}
                {playing && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: "absolute", inset: -6, borderRadius: "50%", border: "2px solid #fe6301", pointerEvents: "none" }}
                  />
                )}
              </div>

              {/* Track info + waveform */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const, letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>
                  {playing ? "▶ Now Playing" : "⏸ Paused — tap vinyl to play"}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "white",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Never Mine
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: 16,
                  }}
                >
                  Souleance
                </div>

                {/* Waveform canvas */}
                <div style={{ height: 52, borderRadius: 10, overflow: "hidden" }}>
                  <WaveformCanvas />
                </div>

                {/* Progress bar */}
                <div style={{ marginTop: 10 }}>
                  <div
                    style={{
                      height: 3,
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 2,
                    }}
                  >
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={inView ? { width: "57%" } : {}}
                      transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                      style={{ height: "100%", background: "#fe6301", borderRadius: 2 }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 5,
                      fontFamily: "monospace",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    <span>1:13</span>
                    <span>3:42</span>
                  </div>
                </div>
              </div>

              {/* Live data column */}
              <div className="pg-nodes-col">
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Active Nodes
                </div>
                {[
                  { city: "Hyderabad", bpm: "92 BPM" },
                  { city: "Mumbai", bpm: "105 BPM" },
                  { city: "Berlin", bpm: "84 BPM" },
                ].map((n) => (
                  <div key={n.city} style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
                    <span
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {n.city}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "monospace",
                      }}
                    >
                      {n.bpm}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Card 2: Stats ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{
                background: "white",
                borderRadius: 20,
                padding: "24px 28px",
                border: "1px solid #ececec",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "#8b8b8b",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: 20,
                }}
              >
                Sync Quality
              </div>
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  color: "rgb(49,49,49)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: 20,
                }}
              >
                98.2
                <span style={{ fontSize: 28, color: "#fe6301" }}>%</span>
              </div>
              <DataTag label="State" value="Stable" />
              <DataTag label="Scale" value="1:100" />
              <DataTag label="Usual bedtime" value="3 AM" />
              <div style={{ marginTop: 20 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    paddingTop: 16,
                    borderTop: "1px solid #f0f0f0",
                  }}
                >
                  <BpmBadge value="4.2k+" label="Layers organized" />
                  <BpmBadge value="1.2M+" label="Pixels nudged" />
                </div>
              </div>
            </motion.div>

            {/* ── Card 3: Passions ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.3 }}
              style={{
                background: "#fe6301",
                borderRadius: 20,
                padding: "24px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* grid overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: 16,
                }}
              >
                Current Isolate
              </div>
              <div
                style={{
                  position: "relative",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  marginBottom: 24,
                }}
              >
                Design
                <br />
                <span style={{ fontWeight: 300 }}>by day</span>
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {["🍳 Cooking", "⚽ Football", "☕ Coffee", "💻 Code @ 2am", "🎵 Music"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                      color: "white",
                      fontSize: 12,
                      padding: "5px 12px",
                      borderRadius: 999,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
