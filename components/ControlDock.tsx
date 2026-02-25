"use client";

import styles from "./ControlDock.module.css";

interface ControlDockProps {
    isCleaned: boolean;
    isDraggable: boolean;
    onToggleClean: () => void;
    onToggleDrag: () => void;
}

export default function ControlDock({
    isCleaned,
    isDraggable,
    onToggleClean,
    onToggleDrag,
}: ControlDockProps) {
    return (
        <div className={styles.dock}>
            <button
                className={`${styles.btn} ${isCleaned ? styles.active : ""}`}
                onClick={onToggleClean}
            >
                ☷ Clean Up
            </button>
            <button
                className={`${styles.btn} ${!isDraggable ? styles.active : ""}`}
                onClick={onToggleDrag}
            >
                ✎ Drag {isDraggable ? "On" : "Off"}
            </button>
        </div>
    );
}
