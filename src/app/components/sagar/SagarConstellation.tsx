import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

/* ─── Constellation Canvas ───────────────────────────────── */
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  bpm: number;
  phase: number;
  isUser?: boolean;
  size: number;
}

const INITIAL_NODES: { label: string; bpm: number }[] = [
  { label: "Figma", bpm: 90 },
  { label: "Framer", bpm: 78 },
  { label: "React", bpm: 95 },
  { label: "HTML/CSS", bpm: 70 },
  { label: "JavaScript", bpm: 85 },
  { label: "Python", bpm: 65 },
  { label: "Tailwind", bpm: 80 },
  { label: "Prototyping", bpm: 88 },
  { label: "UX Research", bpm: 72 },
  { label: "Motion", bpm: 92 },
  { label: "Branding", bpm: 68 },
  { label: "3D CSS", bpm: 75 },
];

const CONNECT_DIST = 140;

function ConstellationCanvas({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const rafRef = useRef<number>(0);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // reinitialise nodes
      nodesRef.current = INITIAL_NODES.map((n) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        label: n.label,
        bpm: n.bpm,
        phase: Math.random() * Math.PI * 2,
        size: 4,
      }));
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const draw = (time: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;

      // update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 10 || n.x > w - 10) n.vx *= -1;
        if (n.y < 10 || n.y > h - 10) n.vy *= -1;

        const freq = (n.bpm / 60) * Math.PI * 2;
        (n as any).pulse = Math.pow(Math.abs(Math.sin((time / 1000) * freq + n.phase)), 3);
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.35;
            ctx.strokeStyle = `rgba(254, 99, 1, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // draw nodes
      for (const n of nodes) {
        const pulse = (n as any).pulse ?? 0;
        const r = n.size + pulse * 4;

        // glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3);
        grad.addColorStop(0, n.isUser ? "rgba(254,99,1,0.5)" : "rgba(49,49,49,0.3)");
        grad.addColorStop(1, "rgba(49,49,49,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // crosshair dot
        ctx.strokeStyle = n.isUser ? "#fe6301" : "rgb(49,49,49)";
        ctx.lineWidth = 1.4;
        const cs = r + 2;
        ctx.beginPath();
        ctx.moveTo(n.x - cs, n.y);
        ctx.lineTo(n.x + cs, n.y);
        ctx.moveTo(n.x, n.y - cs);
        ctx.lineTo(n.x, n.y + cs);
        ctx.stroke();

        // dot centre
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = n.isUser ? "#fe6301" : "rgb(49,49,49)";
        ctx.fill();

        // label
        ctx.font = `${n.isUser ? 600 : 500} 11px 'DM Sans', sans-serif`;
        ctx.fillStyle = n.isUser ? "#fe6301" : "rgba(49,49,49,0.8)";
        ctx.fillText(n.label, n.x + r + 5, n.y + 4);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setHint(false);
      nodesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        label: "You ✦",
        bpm: 75 + Math.random() * 20,
        phase: 0,
        isUser: true,
        size: 5,
      });
    };

    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: 360,
          display: "block",
          cursor: "crosshair",
          borderRadius: 18,
          background: "#fafafa",
          border: "1px solid #ececec",
        }}
      />
      {hint && (
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(49,49,49,0.75)",
            backdropFilter: "blur(8px)",
            color: "white",
            fontSize: 12,
            padding: "6px 16px",
            borderRadius: 999,
            fontFamily: "'DM Sans', sans-serif",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          Click anywhere to add your node ✦
        </div>
      )}
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────── */
export function SagarConstellation() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{
        padding: "80px 24px",
        background: "white",
        borderTop: "1px solid #e8e8e8",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        {/* Header */}
        <div ref={ref} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36 }}>
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
                Infinite Field / Scale 1:100
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
              Skills Network
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
              Tools &amp; technologies I work with daily
            </p>
          </motion.div>

          {/* Live status pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#f7f7f7",
              border: "1px solid #e8e8e8",
              borderRadius: 999,
              padding: "8px 16px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: "rgb(49,49,49)",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#fe6301" }}
            />
            Live
          </motion.div>
        </div>

        {/* Canvas */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <ConstellationCanvas containerRef={containerRef} />
        </motion.div>

        {/* Skill chips row below canvas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}
        >
          {INITIAL_NODES.map((n) => (
            <span
              key={n.label}
              style={{
                background: "#f7f7f7",
                border: "1px solid #e8e8e8",
                color: "rgb(49,49,49)",
                fontSize: 12,
                padding: "5px 14px",
                borderRadius: 999,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              {n.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
