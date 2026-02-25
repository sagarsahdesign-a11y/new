"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./RecentlyMade.module.css";

const projects = [
    {
        title: "ZenTrade",
        desc: "B2B trading platform with smart workflows",
        link: "#",
        emoji: "📈",
        color: "#0D1B2A",
    },
    {
        title: "MountainBrew",
        desc: "Café app with ordering & loyalty flows",
        link: "#",
        emoji: "☕",
        color: "#4A2C2A",
    },
    {
        title: "ATG Hotels",
        desc: "Responsive booking-first hospitality UI",
        link: "#",
        emoji: "🏨",
        color: "#2d1b5e",
    },
    {
        title: "FitPulse",
        desc: "Fitness dashboard with accessibility-first design",
        link: "#",
        emoji: "💪",
        color: "#1b5e20",
    },
];

export default function RecentlyMade() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [sectionOffset, setSectionOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateOffset = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setSectionOffset({ x: rect.left, y: rect.top });
            }
        };
        updateOffset();
        window.addEventListener("scroll", updateOffset);
        window.addEventListener("resize", updateOffset);
        return () => {
            window.removeEventListener("scroll", updateOffset);
            window.removeEventListener("resize", updateOffset);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <section
            className={styles.section}
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            id="work"
        >
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Recently Made ▶</h2>

                <div className={styles.projectGrid}>
                    {projects.map((p, i) => (
                        <a
                            key={i}
                            href={p.link}
                            className={styles.card}
                            target="_blank"
                            rel="noopener"
                        >
                            <div className={styles.cardText}>
                                <h3 className={styles.cardTitle}>{p.title}</h3>
                                <p className={styles.cardDesc}>{p.desc}</p>
                            </div>
                            <div
                                className={styles.cardIcon}
                                style={{ backgroundColor: p.color }}
                            >
                                <span className={styles.cardEmoji}>{p.emoji}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* "You" cursor — follow mouse */}
            <div
                className={styles.youCursor}
                style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                }}
            >
                <div className={styles.youCursorArrow}>
                    <svg width="24" height="24" viewBox="0 0 16 20" fill="none">
                        <path
                            d="M1 1L1 16L5 12L8.5 19L11 18L7.5 11L13 11L1 1Z"
                            fill="#242424"
                            stroke="#fff"
                            strokeWidth="0.5"
                        />
                    </svg>
                </div>
                <div className={styles.youCursorTag}>You</div>
            </div>

            {/* "Sagar" cursor — floating with parallax */}
            <div className={styles.sagarCursor}>
                <div className={styles.sagarCursorArrow}>
                    <svg width="29" height="27" viewBox="0 0 29 27" fill="none">
                        <path
                            d="M2.439 4.588C1.355 2.549 2.885 0.101 5.193 0.181L11.684 0.408L18.175 0.635C20.483 0.715 21.839 3.264 20.615 5.223L17.173 10.731L13.731 16.239C12.507 18.198 9.622 18.097 8.538 16.058L5.489 10.323Z"
                            transform="translate(2.914 3.135) rotate(16 11.75 10.25)"
                            fill="#F76240"
                        />
                    </svg>
                </div>
                <div className={styles.sagarCursorTag}>Sagar</div>
            </div>
        </section>
    );
}
