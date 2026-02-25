"use client";

import styles from "./BottomDock.module.css";

interface BottomDockProps {
    isCleaned: boolean;
    isDraggable: boolean;
    onToggleClean: () => void;
    onToggleDrag: () => void;
}

export default function BottomDock({
    isCleaned,
    isDraggable,
    onToggleClean,
    onToggleDrag,
}: BottomDockProps) {
    return (
        <div className={styles.dock}>
            <button
                className={`${styles.btn} ${!isDraggable ? styles.active : ""}`}
                onClick={onToggleDrag}
                title={isDraggable ? "Disable dragging" : "Enable dragging"}
            >
                ✎
            </button>
            <button
                className={`${styles.btn} ${isCleaned ? styles.active : ""}`}
                onClick={onToggleClean}
                title={isCleaned ? "Scatter items" : "Clean up items"}
            >
                🧹
            </button>
            <a
                href="mailto:sagar.sah.design@gmail.com"
                className={styles.btn}
                title="Contact"
            >
                ☕
            </a>
        </div>
    );
}
