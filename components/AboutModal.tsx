"use client";

import { motion } from "framer-motion";
import styles from "./AboutModal.module.css";

interface AboutModalProps {
    onClose: () => void;
}

const skills = [
    "UI/UX Design",
    "Figma",
    "Framer",
    "React",
    "Next.js",
    "Cloud Security",
    "A11y",
    "Prototyping",
    "User Research",
    "Design Systems",
];

export default function AboutModal({ onClose }: AboutModalProps) {
    return (
        <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className={styles.modal}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.close} onClick={onClose}>
                    ×
                </button>

                <div className={styles.header}>
                    <div className={styles.avatar}>👨‍💻</div>
                    <div>
                        <h2 className={styles.name}>Sagar Sah</h2>
                        <p className={styles.subtitle}>
                            UI/UX Designer · Cloud Security Engineer
                        </p>
                    </div>
                </div>

                <p className={styles.bio}>
                    Multidisciplinary UI/UX designer currently pursuing B.Tech in Cyber
                    Security. I design usable, accessible interfaces and ship polished
                    prototypes for web &amp; mobile. I bridge design and front-end
                    development to deliver designs that are buildable and secure.
                </p>

                <div className={styles.edu}>
                    <span className={styles.eduIcon}>🎓</span>
                    <div>
                        <p className={styles.eduTitle}>B.Tech in Cyber Security</p>
                        <p className={styles.eduSub}>JNTU · Currently Pursuing</p>
                    </div>
                </div>

                <div className={styles.skillsSection}>
                    <h3 className={styles.skillsLabel}>Skills</h3>
                    <div className={styles.skills}>
                        {skills.map((s) => (
                            <span key={s} className={styles.skillPill}>
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.links}>
                    <a href="mailto:sagar.sah.design@gmail.com" className={styles.link}>
                        📧 Email
                    </a>
                    <a
                        href="https://linkedin.com/in/sagar-shah-389980319"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        💼 LinkedIn
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}
