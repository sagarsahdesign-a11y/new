"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectList.module.css";

const projects = [
    {
        num: "01",
        title: "ZenTrade",
        desc: "Redesigned navigation for complex B2B trading workflows.",
        tags: ["UI/UX Design", "B2B Platform"],
        year: "2024",
        gradient: "linear-gradient(135deg, #0D1B2A, #1a3a5c)",
        emoji: "📈",
    },
    {
        num: "02",
        title: "MountainBrew",
        desc: "Café app with mobile ordering & loyalty flows.",
        tags: ["Product Design", "Mobile App"],
        year: "2024",
        gradient: "linear-gradient(135deg, #1a1a2e, #16213e)",
        emoji: "☕",
    },
    {
        num: "03",
        title: "ATG Hotels",
        desc: "Responsive booking-first UI with streamlined search.",
        tags: ["Web Design", "Hospitality"],
        year: "2024",
        gradient: "linear-gradient(135deg, #1a0a2e, #2d1b5e)",
        emoji: "🏨",
    },
    {
        num: "04",
        title: "FitPulse",
        desc: "Fitness dashboard designed with accessibility-first patterns.",
        tags: ["Health Tech", "Accessibility"],
        year: "2023",
        gradient: "linear-gradient(135deg, #0a1a0a, #1b5e20)",
        emoji: "💪",
    },
];

export default function ProjectList() {
    const [hovered, setHovered] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section
            id="work"
            className={styles.section}
            ref={sectionRef}
            onMouseMove={handleMouseMove}
        >
            <div className={styles.container}>
                <p className={styles.label}>SELECTED WORK</p>
                <h2 className={styles.heading}>Featured Projects.</h2>

                <div className={styles.rows}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            className={styles.row}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            whileHover={{ x: 8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className={styles.rowLeft}>
                                <span className={styles.rowNum}>{p.num}</span>
                                <div>
                                    <h3 className={styles.rowTitle}>{p.title}</h3>
                                    <p className={styles.rowDesc}>{p.desc}</p>
                                </div>
                            </div>
                            <div className={styles.rowRight}>
                                <div className={styles.tagGroup}>
                                    {p.tags.map((t) => (
                                        <span key={t} className={styles.tag}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <span className={styles.year}>{p.year}</span>
                                <span className={styles.arrow}>→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Preview */}
            <AnimatePresence>
                {hovered !== null && (
                    <motion.div
                        className={styles.preview}
                        style={{
                            left: mousePos.x + 28,
                            top: mousePos.y - 80,
                            background: projects[hovered].gradient,
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                        <span className={styles.previewEmoji}>
                            {projects[hovered].emoji}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
