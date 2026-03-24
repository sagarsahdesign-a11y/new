import { useRef } from "react";
import { motion, useInView } from "motion/react";

import imgFood1 from "figma:asset/4875d2e7eace8935728c8128fe0300301e18efbf.png";
import imgFood2 from "figma:asset/ad57675cce8614b44d61408bb1d546ead2f05e52.png";
import imgFood3 from "figma:asset/1425c6c587a9f1a9a59917b6089716e183ea714f.png";
import imgFood4 from "figma:asset/787a1a5c0e9adcb33359850870cf38663c54fc58.png";
import imgFood5 from "figma:asset/04394adaeefdec28605b45cb1e77c2f76796c480.png";
import imgFood6 from "figma:asset/9010ead2ba0dca5c33776b9cfc2add11c7f93a59.png";
import imgFood7 from "figma:asset/9c2227835aaa01243b24b463034a2d710c91c77b.png";

const foods = [imgFood1, imgFood2, imgFood3, imgFood4, imgFood5, imgFood6, imgFood7];
const foodCaptions = [
  { emoji: "🍳", text: "Egg fried rice — cooked at midnight" },
  { emoji: "🍜", text: "Veg noodles with omelette strips" },
  { emoji: "🍛", text: "Biryani + code = perfect Friday" },
  { emoji: "🥚", text: "Upgraded fried rice with chilli egg" },
  { emoji: "📅", text: "Just a Friday >" },
  { emoji: "☕", text: "3am brew ritual" },
  { emoji: "🥗", text: "Weekend fuel" },
  { emoji: "🍗", text: "Chicken wings & design vibes" },
  { emoji: "🌮", text: "Taco Tuesday (at midnight)" },
  { emoji: "🥯", text: "The perfect morning wrap" },
];

const hobbyTags = [
  { emoji: "🍳", label: "Cooking", active: true },
  { emoji: "⚽", label: "Football" },
  { emoji: "☕", label: "Coffee" },
  { emoji: "💻", label: "Coding at 2am" },
  { emoji: "🎵", label: "Music" },
  { emoji: "📱", label: "Creating content" },
];

const stats = [
  { value: "50+", label: "Recipes explored" },
  { value: "∞", label: "Late night focus" },
  { value: "3am", label: "Creative peak hour" },
  { value: "1st", label: "Gen designer in family" },
];

// Duplicate for seamless infinite scroll
const row1 = [...foods, ...foods, ...foods];
const row2 = [...foods.slice(3), ...foods, ...foods, ...foods.slice(0, 3)];

const css = `
.lo-food-card {
  flex-shrink: 0;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  width: 200px;
  height: 244px;
}
.lo-food-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.lo-food-card:hover img { transform: scale(1.04); }
.lo-food-caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 28px 12px 12px;
  background: linear-gradient(transparent, rgba(0,0,0,0.72));
}
.lo-stat-border { border-right: 1px solid rgba(255,255,255,0.08); }
@media (max-width: 768px) {
  .lo-food-card { width: 152px; height: 190px; }
  .lo-stat-border:nth-child(2) { border-right: none; }
}
`;

function FoodCard({ src, caption, emoji }: { src: string; caption: string; emoji: string }) {
  return (
    <div className="lo-food-card">
      <img src={src} alt="" />
      <div className="lo-food-caption">
        <p style={{ color: "white", fontSize: 12, fontWeight: 600, margin: 0, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>
          {emoji} {caption}
        </p>
      </div>
    </div>
  );
}

export function SagarLifeOutside() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{css}</style>
      <section
        id="life"
        style={{
          background: "rgb(15,15,15)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
          paddingBottom: 0,
        }}
      >
        {/* ── Header ── */}
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "72px 24px 40px" }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fe6301" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const, letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" }}>
                Life outside design
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 600,
                color: "white",
                letterSpacing: "-0.04em",
                margin: "0 0 8px",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.1,
              }}
            >
              When I'm not pushing pixels,<br />
              <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>I'm pushing flavours.</span>
            </h2>
          </motion.div>

          {/* Hobby chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginTop: 24 }}
          >
            {hobbyTags.map((t) => (
              <motion.div
                key={t.label}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  borderRadius: 999,
                  padding: "7px 16px",
                  fontSize: 13,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  background: t.active ? "#fe6301" : "rgba(255,255,255,0.06)",
                  border: t.active ? "none" : "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                }}
              >
                {t.emoji} {t.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Marquee row 1 → ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: 10 }}
        >
          <motion.div
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: 10, paddingLeft: 12, width: "max-content" }}
          >
            {row1.map((src, i) => (
              <FoodCard
                key={`r1-${i}`}
                src={src}
                caption={foodCaptions[i % foodCaptions.length].text}
                emoji={foodCaptions[i % foodCaptions.length].emoji}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Marquee row 2 ← ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginBottom: 0 }}
        >
          <motion.div
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: 10, paddingLeft: 12, width: "max-content" }}
          >
            {row2.map((src, i) => (
              <FoodCard
                key={`r2-${i}`}
                src={src}
                caption={foodCaptions[(i + 3) % foodCaptions.length].text}
                emoji={foodCaptions[(i + 3) % foodCaptions.length].emoji}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Stats strip ── */}
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "48px 24px 64px" }}>
          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "-0.03em",
              lineHeight: 1.5,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: 40,
            }}
          >
            I design for the day, cook for the night, and{" "}
            <span style={{ color: "#fe6301", fontStyle: "italic" }}>ship before 3am.</span>
          </motion.p>

          {/* 4-stat grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
            }}
            className="lo-stat-grid"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={i < 3 ? "lo-stat-border" : ""}
                style={{ textAlign: "center", padding: "32px 16px" }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: 36,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "-0.05em",
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: 4,
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.02em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
