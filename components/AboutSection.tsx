"use client";

import styles from "./AboutSection.module.css";

export default function AboutSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    About <span className={styles.titleIcon}>⌘</span>
                </h2>

                <div className={styles.content}>
                    <p className={styles.text}>
                        <a
                            href="https://linkedin.com/in/sagar-shah-389980319"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            LinkedIn
                        </a>
                        {" | "}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Instagram
                        </a>
                        {" | "}
                        E-mail:{" "}
                        <a
                            href="mailto:sagar.sah.design@gmail.com"
                            className={styles.link}
                        >
                            sagar.sah.design@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
