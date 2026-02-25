"use client";

import styles from "./StatsStrip.module.css";

const stats = [
    { value: "2+", label: "Yrs Experience" },
    { value: "15+", label: "Projects" },
    { value: "8k+", label: "Followers" },
    { value: "4", label: "Platforms" },
];

export default function StatsStrip() {
    return (
        <div className={styles.strip}>
            {stats.map((s, i) => (
                <div key={i} className={styles.stat}>
                    <span className={styles.value}>{s.value}</span>
                    <span className={styles.label}>{s.label}</span>
                </div>
            ))}
        </div>
    );
}
