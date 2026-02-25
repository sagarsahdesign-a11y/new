"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.glow}></div>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className={styles.handwritten}>Let&apos;s build something 🔥</p>
                <h2 className={styles.heading}>
                    Let&apos;s Build Something
                    <br />
                    <span className={styles.headingAccent}>Great.</span>
                </h2>
                <p className={styles.subtext}>
                    Open for freelance, full-time, and collaborations.
                </p>

                <div className={styles.ctas}>
                    <a
                        href="mailto:sagar.sah.design@gmail.com"
                        className={styles.ctaLink}
                    >
                        📧 Send an Email
                    </a>
                    <a
                        href="https://linkedin.com/in/sagar-shah-389980319"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaLink}
                    >
                        💼 LinkedIn
                    </a>
                </div>

                <div className={styles.info}>
                    <span>📱 +91 74162 92404</span>
                    <span>📍 Bengaluru, India</span>
                    <span>🌐 fearless-yards-788912.framer.app</span>
                </div>
            </motion.div>

            <footer className={styles.footer}>
                <span className={styles.footerLogo}>SS.</span>
                <span className={styles.footerCopy}>
                    © {new Date().getFullYear()} Sagar Sah
                </span>
                <span className={styles.footerTagline}>
                    Designed with ♥ & lots of coffee
                </span>
            </footer>
        </section>
    );
}
