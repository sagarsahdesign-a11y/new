"use client";

import { motion } from "framer-motion";
import styles from "./DesignProcess.module.css";

const steps = [
    {
        num: "01",
        icon: "🔍",
        title: "Research",
        body: "Deep-dive into user needs, market landscape, and competitor analysis to build a strong foundation.",
    },
    {
        num: "02",
        icon: "🎯",
        title: "Define",
        body: "Synthesize findings into clear problem statements, user personas, and measurable design goals.",
    },
    {
        num: "03",
        icon: "💡",
        title: "Ideate",
        body: "Explore multiple solutions through brainstorming, sketching, and collaborative design sprints.",
    },
    {
        num: "04",
        icon: "⚡",
        title: "Prototype",
        body: "Craft high-fidelity prototypes in Figma with real interactions and micro-animations.",
    },
    {
        num: "05",
        icon: "🔄",
        title: "Test & Iterate",
        body: "Validate designs with usability testing, collect feedback, and refine until it feels right.",
    },
    {
        num: "06",
        icon: "🚀",
        title: "Ship",
        body: "Hand off pixel-perfect specs and collaborate with engineers to ship polished products.",
    },
];

export default function DesignProcess() {
    return (
        <section id="about-section" className={styles.section}>
            <div className={styles.container}>
                <p className={styles.label}>MY APPROACH</p>
                <h2 className={styles.heading}>Design Process.</h2>

                <div className={styles.grid}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{
                                duration: 0.55,
                                ease: "easeOut",
                                delay: i * 0.08,
                            }}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.stepNum}>{step.num}</span>
                                <span className={styles.stepIcon}>{step.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardBody}>{step.body}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
