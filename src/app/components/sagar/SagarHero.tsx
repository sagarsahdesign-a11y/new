import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import svgPaths from "../../../imports/svg-17p0nvqqsx";
import imgCartoonMan from "figma:asset/67194e1bcf056a5eff239b9c81607727e39a13de.png";
import imgMusic from "figma:asset/1efe2cbd764d6e03e4d27eeba2307afaa0634bca.png";
import imgVinylCenter from "figma:asset/519de0ccb698c64920d0a3f223e35a8f3111dd25.png";

/* ——————————————————————————————————
   SVG Icons for the 4-nav boxes
   —————————————————————————————————— */
function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function IconWork() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
function IconChat() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/* ——————————————————————————————————
   Cursor arrow SVG
   —————————————————————————————————— */
function CursorSvg() {
  return (
    <svg width="28" height="28" viewBox="0 0 38 38" fill="none">
      <path d={svgPaths.p5edfe80} fill="#4A77FF" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
    </svg>
  );
}

/* ——————————————————————————————————
   Time formatter helper
   —————————————————————————————————— */
function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

/* ——————————————————————————————————
   Vinyl music card — interactive player
   —————————————————————————————————— */
function VinylPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const audio = new Audio("/NeverMine.mpeg");
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    const tick = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      audio.pause();
      audio.src = "";
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play().then(() => setPlaying(true)).catch(() => {}); }
  };

  const pct = `${(progress * 100).toFixed(1)}%`;
  const elapsed = audioRef.current?.duration ? formatTime(audioRef.current.currentTime) : "0:00";

  return (
    <div
      onClick={toggle}
      style={{
        width: 170,
        background: "rgb(39,39,39)",
        borderRadius: 18,
        padding: 14,
        boxShadow: "0 8px 28px rgba(0,0,0,0.22)",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        userSelect: "none" as const,
      }}
    >
      {/* Vinyl record */}
      <div style={{ position: "relative", width: 142, height: 142, margin: "0 auto" }}>
        <motion.div
          animate={{ rotate: playing ? 360 : 0 }}
          transition={playing ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.4 }}
          style={{ width: "100%", height: "100%" }}
        >
          <img src={imgMusic} style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="" />
        </motion.div>
        {/* Center image */}
        <div style={{ position: "absolute", inset: "22%", borderRadius: "50%", overflow: "hidden" }}>
          <img src={imgVinylCenter} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
        </div>
        {/* Play/pause icon */}
        <div style={{
          position: "absolute", inset: "38%", borderRadius: "50%",
          background: "rgba(254,99,1,0.92)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5,
        }}>
          {playing ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
              <rect x="1.5" y="1" width="2.5" height="8" rx="1" />
              <rect x="6" y="1" width="2.5" height="8" rx="1" />
            </svg>
          ) : (
            <svg width="9" height="9" viewBox="0 0 10 10" fill="white">
              <path d="M2.5 1.5l6 3.5-6 3.5V1.5z" />
            </svg>
          )}
        </div>
        {/* Pulse ring */}
        {playing && (
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "2px solid #fe6301", pointerEvents: "none" }}
          />
        )}
      </div>

      {/* Song info */}
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <p style={{ color: "#999", fontSize: 11, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>Souleance</p>
        <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", margin: "2px 0 0" }}>Never Mine</p>
      </div>

      {/* Live progress bar */}
      <div style={{ marginTop: 10 }}>
        <div style={{ height: 3, background: "rgba(255,255,255,0.15)", borderRadius: 2 }}>
          <motion.div
            style={{ height: "100%", background: "#fe6301", borderRadius: 2 }}
            animate={{ width: pct }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}>{elapsed}</span>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}>3:42</span>
        </div>
      </div>
    </div>
  );
}

/* ——————————————————————————————————
   CSS for keyframe animations &
   responsive breakpoints
   —————————————————————————————————— */
const heroCSS = `
@keyframes floatA {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(1.5deg); }
}
@keyframes floatB {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}

.hero-floating { display: block; }
.hero-floating-mobile-row { display: none; }

@media (max-width: 768px) {
  /* hide absolute-positioned floaters on mobile */
  .hero-floating { display: none !important; }

  /* show the mobile widget row instead */
  .hero-floating-mobile-row {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 12px !important;
    padding: 0 16px !important;
    margin-top: 20px !important;
    flex-wrap: wrap !important;
  }

  .hero-section {
    min-height: 100svh !important;
    padding: 56px 20px 80px 20px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .hero-motion-wrapper {
    height: auto !important;
    position: relative !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .hero-center {
    min-height: auto !important;
    width: 100% !important;
    gap: 14px !important;
  }

  .hero-h1 {
    font-size: 34px !important;
    line-height: 1.1 !important;
    max-width: 320px !important;
    margin: 0 auto !important;
    padding: 0 !important;
  }

  .hero-badge {
    font-size: 12px !important;
    padding: 5px 14px !important;
  }

  .hero-sagar-pill {
    font-size: 13px !important;
  }

  .hero-nav-box {
    width: 36px !important;
    height: 36px !important;
    border-radius: 10px !important;
  }

  .hero-nav-row {
    gap: 8px !important;
    margin-top: 16px !important;
  }

  .hero-sagar-row {
    margin-top: 8px !important;
  }

  .hero-scroll {
    bottom: 20px !important;
  }
}

@media (max-width: 480px) {
  .hero-h1 {
    font-size: 32px !important;
    max-width: 290px !important;
  }
  .hero-badge { font-size: 11px !important; }
  .hero-sagar-pill { font-size: 12px !important; }
}
`;

/* desktop hero-center needs min-height in CSS not inline */
const heroCenterCSS = `
.hero-center { min-height: 100svh; }
`;

/* ——————————————————————————————————
   Main Hero Component
   —————————————————————————————————— */
export function SagarHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{heroCSS}{heroCenterCSS}</style>
      <section
        id="hero"
        ref={ref}
        className="hero-section"
        style={{
          position: "relative",
          minHeight: "100svh",
          background: "#f7f7f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.div className="hero-motion-wrapper" style={{ y, opacity, width: "100%", height: "100%", position: "relative" }}>

          {/* ═══════════════════════════════════════
              FLOATING ELEMENTS — all absolute
              ═══════════════════════════════════════ */}

          {/* CMD dark card */}
          <div
            className="hero-floating"
            style={{
              position: "absolute",
              top: "28%",
              left: "calc(50% - 340px)",
              width: 80,
              height: 80,
              background: "rgb(49,49,49)",
              borderRadius: 18,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "floatA 4s ease-in-out infinite",
              zIndex: 1,
            }}
          >
            <span style={{ color: "white", fontSize: 34, fontWeight: 300 }}>⌘</span>
          </div>

          {/* Z card */}
          <div
            className="hero-floating"
            style={{
              position: "absolute",
              top: "38%",
              left: "calc(50% - 290px)",
              width: 52,
              height: 52,
              background: "white",
              border: "2px solid #e0e0e0",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(7deg)",
              animation: "floatB 3.8s ease-in-out infinite",
              animationDelay: "0.4s",
              zIndex: 1,
            }}
          >
            <span style={{ fontSize: 32, fontWeight: 700, color: "#313131", fontFamily: "'DM Sans', sans-serif" }}>Z</span>
          </div>

          {/* Cartoon man sticker */}
          <div
            className="hero-floating"
            style={{
              position: "absolute",
              top: "44%",
              left: "calc(50% - 360px)",
              width: 110,
              animation: "floatA 5s ease-in-out infinite",
              animationDelay: "0.2s",
              zIndex: 1,
            }}
          >
            <img
              src={imgCartoonMan}
              alt="Sagar sticker"
              style={{ width: "100%", transform: "scaleX(-1)", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}
            />
          </div>

          {/* Star outline (big ☆) */}
          <div
            className="hero-floating"
            style={{
              position: "absolute",
              top: "26%",
              left: "calc(50% + 10px)",
              fontSize: 22,
              color: "rgb(49,49,49)",
              animation: "floatB 4.2s ease-in-out infinite",
              animationDelay: "0.6s",
              zIndex: 1,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <path d="M14 2l3.5 7.5L25 11l-5.5 5 1.5 8L14 20.5 7 24l1.5-8L3 11l7.5-1.5z"
                stroke="#313131" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Star small (filled ✦) */}
          <div
            className="hero-floating"
            style={{
              position: "absolute",
              top: "22%",
              right: "calc(50% - 320px)",
              fontSize: 14,
              color: "#313131",
              animation: "floatB 3.5s ease-in-out infinite",
              animationDelay: "1s",
              zIndex: 1,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 25 25" fill="none">
              <path d={svgPaths.p273f00} fill="black" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          {/* Vinyl music card */}
          <div
            className="hero-floating"
            style={{
              position: "absolute",
              top: "24%",
              right: "calc(50% - 420px)",
              animation: "floatA 4.5s ease-in-out infinite",
              animationDelay: "0.8s",
              zIndex: 10,
            }}
          >
            <VinylPlayer />
          </div>

          {/* ═══════════════════════════════════════
              CENTER CONTENT — relative, z-3
              ═══════════════════════════════════════ */}
          <div
            className="hero-center"
            style={{
              position: "relative",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center" as const,
              gap: 16,
            }}
          >
            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <span
                className="hero-badge"
                style={{
                  border: "1.4px solid #d6d6d6",
                  borderRadius: 999,
                  padding: "6px 18px",
                  fontSize: 14,
                  color: "#6e6e6e",
                  background: "transparent",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                UX Design Portfolio
              </span>
              <span style={{ fontSize: 10, color: "#6e6e6e" }}>✦</span>
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <path d="M14 2l3.5 7.5L25 11l-5.5 5 1.5 8L14 20.5 7 24l1.5-8L3 11l7.5-1.5z"
                  stroke="#313131" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* H1 heading */}
            <motion.h1
              className="hero-h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.65 }}
              style={{
                fontSize: 52,
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                maxWidth: 500,
                color: "rgb(49,49,49)",
                fontFamily: "'DM Sans', sans-serif",
                margin: 0,
              }}
            >
              Security nerd who designs things that actually{" "}
              <span
                style={{
                  background: "rgb(193,238,252)",
                  borderRadius: 7,
                  fontStyle: "italic",
                  padding: "2px 12px",
                  display: "inline",
                }}
              >
                work
              </span>
            </motion.h1>

            {/* Sagar chip row */}
            <motion.div
              className="hero-sagar-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              <CursorSvg />
              <div
                className="hero-sagar-pill"
                style={{
                  background: "rgb(74,119,255)",
                  color: "white",
                  padding: "7px 16px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  fontFamily: "'DM Sans', sans-serif",
                  marginLeft: -4,
                }}
              >
                Sagar
              </div>
            </motion.div>

            {/* 4 icon navigation boxes */}
            <motion.div
              className="hero-nav-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              style={{ display: "flex", gap: 10, marginTop: 20 }}
            >
              {[
                { icon: <IconHome />, id: "hero", label: "Home" },
                { icon: <IconUser />, id: "about", label: "About" },
                { icon: <IconWork />, id: "projects", label: "Work" },
                { icon: <IconChat />, id: "testimonials", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="hero-nav-box"
                  title={item.label}
                  style={{
                    width: 42,
                    height: 42,
                    background: "white",
                    border: "1.5px solid #e0e0e0",
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f0f0f0";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {item.icon}
                </button>
              ))}
            </motion.div>

            {/* ── Mobile-only widgets row ── */}
            <motion.div
              className="hero-floating-mobile-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
            >
              {/* Vinyl card */}
              <VinylPlayer />
              {/* CMD chip */}
              <div style={{
                width: 54, height: 54,
                background: "rgb(49,49,49)",
                borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                animation: "floatA 4s ease-in-out infinite",
              }}>
                <span style={{ color: "white", fontSize: 26, fontWeight: 300 }}>⌘</span>
              </div>
              {/* Z chip */}
              <div style={{
                width: 46, height: 46,
                background: "white",
                border: "2px solid #e0e0e0",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                transform: "rotate(7deg)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                animation: "floatB 3.8s ease-in-out infinite",
              }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: "#313131", fontFamily: "'DM Sans', sans-serif" }}>Z</span>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* ═══════════════════════════════════════
            SCROLL indicator — absolute to section
            ═══════════════════════════════════════ */}
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            zIndex: 5,
          }}
        >
          <motion.button
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollTo("projects")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 11, color: "#8b8b8b", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
              scroll
            </span>
            <svg width="13" height="18" viewBox="0 0 14 20" fill="none">
              <rect x="1" y="1" width="12" height="18" rx="6" stroke="#8b8b8b" strokeWidth="1.5" />
              <motion.rect
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                x="6" y="4" width="2" height="4" rx="1" fill="#8b8b8b"
              />
            </svg>
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}
