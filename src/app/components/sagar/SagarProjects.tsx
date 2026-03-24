import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

import imgZenTrade from "figma:asset/52b02a43db4d0613ecf46e3dd610007591a2dbe4.png";
import imgMountainBrew from "figma:asset/431eb795336bfd99c8210ab1dd1ccd27d77a59ff.png";
import imgAirX from "figma:asset/1f205bbc9e941684def733c865e09cc52bf6876a.png";
import imgActivePulse from "figma:asset/a4cf8aee1656fa2ff54c13e29216281cc27a3d80.png";

/* ——————————————————————————————————
   CSS for responsive breakpoints
   —————————————————————————————————— */
const projectsCSS = `
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .project-card-thumb {
    height: 220px !important;
  }
  .project-card-title-overlay {
    font-size: 26px !important;
  }
}
`;

/* ——————————————————————————————————
   Card data
   —————————————————————————————————— */
interface ProjectData {
  id: string;
  title: string;
  category: string;
  studyLabel: string;
  image: string;
  fallbackBg: string;
  bottomCategory: string;
  bottomTitle: string;
}

const projects: ProjectData[] = [
  {
    id: "zentrade",
    title: "ZenTrade",
    category: "A TRADING APP",
    studyLabel: "UI Case Study",
    image: imgZenTrade,
    fallbackBg: "#1a3a8f",
    bottomCategory: "SEAMLESS TRADING PLATFORM",
    bottomTitle: "ZenTrade",
  },
  {
    id: "mountainbrew",
    title: "Mountain\nBrew",
    category: "CAFE MOBILE APP",
    studyLabel: "UI Case Study",
    image: imgMountainBrew,
    fallbackBg: "#1e2d5a",
    bottomCategory: "CAFE MOBILE APP CASE STUDY",
    bottomTitle: "Mountain Brew",
  },
  {
    id: "airx",
    title: "AirX",
    category: "AIRLINE WEBSITE",
    studyLabel: "UI Case Study",
    image: imgAirX,
    fallbackBg: "#2563eb",
    bottomCategory: "PREDICT WEBSITE REDESIGN",
    bottomTitle: "AirX",
  },
  {
    id: "activepulse",
    title: "ActivePulse",
    category: "FITNESS APP",
    studyLabel: "UI Case Study",
    image: imgActivePulse,
    fallbackBg: "#dc2626",
    bottomCategory: "HUGGL 2.0 · CASE STUDY",
    bottomTitle: "ActivePulse",
  },
];

/* ——————————————————————————————————
   Single project card
   —————————————————————————————————— */
function ProjectCard({ p, index }: { p: ProjectData; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 22,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s cubic-bezier(0.23,1,0.32,1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.15)"
          : "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      {/* ─── Thumbnail area ─── */}
      <div
        className="project-card-thumb"
        style={{
          height: 280,
          position: "relative",
          overflow: "hidden",
          background: imgError ? `linear-gradient(135deg, ${p.fallbackBg}, ${p.fallbackBg}dd)` : undefined,
        }}
      >
        {/* Background image */}
        {!imgError && (
          <img
            src={p.image}
            alt={p.bottomTitle}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        )}

        {/* Gradient overlay — always visible */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.25) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Category tags top-left */}
        <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 6 }}>
          <span
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "white",
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: 999,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            {p.category}
          </span>
          <span
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "white",
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: 999,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            {p.studyLabel}
          </span>
        </div>

        {/* No text overlay — images already contain project names */}
      </div>

      {/* ─── Card bottom section ─── */}
      <div
        style={{
          background: "white",
          padding: "16px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#999",
              margin: 0,
              fontFamily: "'Inter', 'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            {p.bottomCategory}
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "rgb(49,49,49)",
              margin: "4px 0 0",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {p.bottomTitle}
          </p>
        </div>

        {/* Arrow circle */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1.5px solid #e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s ease",
            background: hovered ? "rgb(49,49,49)" : "transparent",
            cursor: "pointer",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke={hovered ? "white" : "#313131"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "stroke 0.25s ease" }}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ——————————————————————————————————
   Projects section
   —————————————————————————————————— */
export function SagarProjects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{projectsCSS}</style>
      <section
        id="projects"
        style={{
          padding: "80px 24px",
          background: "#f7f7f7",
          borderTop: "1px solid #e8e8e8",
        }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          {/* Header row */}
          <div
            ref={headerRef}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: 36,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
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
                Featured Projects
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#8b8b8b",
                  letterSpacing: "-0.02em",
                  margin: "4px 0 0",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Blood, sweat, and tears were sacrificed
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                background: "rgb(49,49,49)",
                color: "white",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                border: "none",
                cursor: "pointer",
                letterSpacing: "-0.02em",
                transition: "transform 0.2s ease, opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              See All
            </motion.button>
          </div>

          {/* 2×2 grid */}
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
