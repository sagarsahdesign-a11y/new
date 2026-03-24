import { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgCartoonMan from "figma:asset/67194e1bcf056a5eff239b9c81607727e39a13de.png";
import imgLogo53 from "figma:asset/c007528ca91c0694c1ee162934d636285bb083b4.png";
import imgLogo54 from "figma:asset/27d9378fe27046308bcc49355d29b38694bf19a5.png";
import imgLogo55 from "figma:asset/230f4304ac00955bf1fe4c8a6fdeea4e696eae7a.png";

/* ——————————————————————————————————
   CSS for responsive layout
   —————————————————————————————————— */
const experienceCSS = `
.exp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}
.exp-small-cards {
  display: flex;
  gap: 12px;
  margin-top: 14px;
}
.exp-small-card {
  flex: 1;
  min-width: 0;
  background: #f0f0f0;
  border-radius: 20px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
@media (max-width: 768px) {
  .exp-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .exp-cartoon {
    width: 120px !important;
    height: 120px !important;
  }
  .exp-small-cards {
    gap: 8px;
  }
  .exp-small-card {
    padding: 12px;
    border-radius: 14px;
  }
  .exp-small-card p { font-size: 11px !important; }
}
@media (max-width: 400px) {
  .exp-small-card { padding: 10px; }
}
`;

/* ——————————————————————————————————
   Header icon (gear/settings)
   —————————————————————————————————— */
function GearIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="6" stroke="#313131" strokeWidth="1.8" />
      <path d="M18 4v4M18 28v4M4 18h4M28 18h4M7.8 7.8l2.8 2.8M25.4 25.4l2.8 2.8M7.8 28.2l2.8-2.8M25.4 10.6l2.8-2.8"
        stroke="#313131" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="18" cy="18" r="12" stroke="#313131" strokeWidth="1.2" strokeDasharray="3 3" />
    </svg>
  );
}

/* ——————————————————————————————————
   Cursor arrow SVG
   —————————————————————————————————— */
function CursorArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 3l14 9-14 9V3z" fill="#313131" />
    </svg>
  );
}

/* ——————————————————————————————————
   Peace hand SVG for the orange card
   —————————————————————————————————— */
function PeaceHandSvg() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.25">
      <path d="M60 15c-3 0-5.5 2.5-5.5 5.5V50h-4V30c0-3-2.5-5.5-5.5-5.5S39.5 27 39.5 30v32l-4-6c-1.8-2.4-5.2-3-7.6-1.2s-3 5.2-1.2 7.6l18 28c1 1.5 2.7 2.4 4.5 2.4h22c3.5 0 6.5-2.5 7-6l3-22c0.4-3-1.6-5.8-4.5-6.3l-4.2-.7V30c0-3-2.5-5.5-5.5-5.5S61.5 27 61.5 30v20h-4V20.5C57.5 17.5 55 15 52 15z"
        fill="white" />
      <path d="M65.5 50V25.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5V50"
        fill="white" />
    </svg>
  );
}

const smallCards = [
  {
    id: "zentrade",
    role: "UI/UX Design",
    company: "@ZenTrade",
    logo: imgLogo53,
  },
  {
    id: "mountainbrew",
    role: "UI/UX Design",
    company: "@MountainBrew",
    logo: imgLogo54,
  },
  {
    id: "jntuk",
    role: "B.Tech Student",
    company: "@ JNTUK",
    logo: imgLogo55,
  },
];

export function SagarExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{experienceCSS}</style>
      <section
        id="experience"
        style={{
          padding: "80px 24px",
          background: "#f7f7f7",
          borderTop: "1px solid #e8e8e8",
        }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>

          {/* ─── Section header ─── */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 4 }}>
              <GearIcon />
              <h2
                style={{
                  fontSize: 32,
                  color: "rgb(49,49,49)",
                  letterSpacing: "-0.04em",
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                Recent Experience
              </h2>
            </div>
            <p
              style={{
                fontSize: 16,
                color: "#8b8b8b",
                letterSpacing: "-0.02em",
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Little big steps
            </p>
          </motion.div>

          {/* ─── 2-column layout ─── */}
          <div className="exp-grid">

            {/* LEFT COLUMN */}
            <div>
              {/* Orange featured card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                <div
                  style={{
                    borderRadius: 24,
                    background: "linear-gradient(135deg, #fe6301 0%, #ff8533 100%)",
                    padding: "28px 28px 24px",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 200,
                  }}
                >
                  {/* Text */}
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <p
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: 700,
                        margin: 0,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Freelance UI/UX Designer
                    </p>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 15,
                        margin: "4px 0 0",
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      @ Self-Employed / Remote
                    </p>
                  </div>

                  {/* Date pill */}
                  <div
                    style={{
                      display: "inline-flex",
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(6px)",
                      borderRadius: 999,
                      padding: "6px 16px",
                      marginTop: 16,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: 13,
                        fontWeight: 500,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Jan 2024 – Present
                    </span>
                  </div>

                  {/* Peace hand illustration */}
                  <div
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                    }}
                  >
                    <PeaceHandSvg />
                  </div>

                  {/* Decorative circles */}
                  <div
                    style={{
                      position: "absolute",
                      right: -30,
                      top: -30,
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: -10,
                      bottom: -40,
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.06)",
                    }}
                  />
                </div>
              </motion.div>

              {/* 3 small experience cards */}
              <div className="exp-small-cards">
                {smallCards.map((c, i) => (
                  <motion.div
                    key={c.id}
                    className="exp-small-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={c.logo}
                      alt=""
                      style={{ width: 26, height: 26, objectFit: "contain", marginBottom: 10 }}
                    />
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#333", margin: 0, fontFamily: "'Inter', sans-serif" }}>
                      {c.role}
                    </p>
                    <p style={{ fontSize: 11, color: "#999", margin: "2px 0 0", fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}>
                      {c.company}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              {/* Description text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 }}
              >
                <p
                  style={{
                    color: "#6e6e6e",
                    fontSize: 14,
                    lineHeight: 1.75,
                    margin: "0 0 16px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Delivered end-to-end UI/UX for web & mobile projects — then built them myself using HTML, CSS, JS, and Framer. No handoff needed.
                </p>
                <p
                  style={{
                    color: "#6e6e6e",
                    fontSize: 14,
                    lineHeight: 1.75,
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Designed reusable component libraries, interactive prototypes, and shipped production-ready interfaces solo — from Figma file to live URL.
                </p>
              </motion.div>

              {/* Cursor arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ marginTop: 20 }}
              >
                <CursorArrow />
              </motion.div>

              {/* Cartoon man sticker — BIG */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{ alignSelf: "flex-end", marginTop: 10 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="exp-cartoon"
                  style={{ width: 220, height: 220 }}
                >
                  <img
                    src={imgCartoonMan}
                    alt="Sagar cartoon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.18))",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* ─── See All button ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "rgb(49,49,49)",
                color: "white",
                borderRadius: 999,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                border: "none",
                cursor: "pointer",
                letterSpacing: "-0.02em",
              }}
            >
              See All
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
