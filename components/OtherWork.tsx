"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./OtherWork.module.css";

const works = [
    {
        title: "CloudShield",
        tag: "Security Tool | 2024",
        desc: "Personal cloud security monitoring dashboard with real-time threat analysis.",
    },
    {
        title: "DesignSys",
        tag: "Design System | 2024",
        desc: "A comprehensive design system built for scalable enterprise web applications.",
    },
    {
        title: "100 Days of UI",
        tag: "User Interface | 2023",
        desc: "Daily design challenge exploring different UI patterns — what some might call \"organisms\" — and rethinking creative alternatives to conventional solutions.",
    },
    {
        title: "SecureAuth",
        tag: "Cybersecurity Project | 2023",
        desc: "A multi-factor authentication flow designed with accessibility-first patterns and zero-trust principles.",
    },
];

export default function OtherWork() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    Other Work <span className={styles.titleIcon}>⁕</span>
                </h2>

                <div className={styles.list}>
                    {works.map((w, i) => (
                        <div key={i} className={styles.item}>
                            <div
                                className={styles.itemHeader}
                                onClick={() => setExpanded(expanded === i ? null : i)}
                            >
                                <div>
                                    <h3 className={styles.itemTitle}>{w.title}</h3>
                                    <p className={styles.itemTag}>{w.tag}</p>
                                </div>
                                <span className={`${styles.arrow} ${expanded === i ? styles.arrowOpen : ""}`}>
                                    ↗
                                </span>
                            </div>
                            <AnimatePresence>
                                {expanded === i && (
                                    <motion.div
                                        className={styles.itemContent}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <p className={styles.itemDesc}>{w.desc}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
