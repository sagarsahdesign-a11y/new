"use client";

import { forwardRef, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./ScrapbookHero.module.css";

interface ScrapbookHeroProps {
    isCleaned: boolean;
    isDraggable: boolean;
    onPolaroidClick: () => void;
}

interface StickerConfig {
    id: string;
    x: number;
    y: number;
    rotate: number;
    gridX: number;
    gridY: number;
    content: React.ReactNode;
}

const ScrapbookHero = forwardRef<HTMLDivElement, ScrapbookHeroProps>(
    ({ isCleaned, isDraggable, onPolaroidClick }, ref) => {
        const constraintsRef = useRef<HTMLDivElement>(null);
        const [zStack, setZStack] = useState<string[]>([]);

        const bringToFront = useCallback((id: string) => {
            setZStack((prev) => [...prev.filter((i) => i !== id), id]);
        }, []);

        const getZ = (id: string) => {
            const idx = zStack.indexOf(id);
            return idx === -1 ? 10 : 20 + idx;
        };

        const stickers: StickerConfig[] = [
            {
                id: "polaroid",
                x: -280,
                y: -140,
                rotate: -11,
                gridX: 0,
                gridY: 0,
                content: (
                    <div className={styles.polaroid} onClick={onPolaroidClick}>
                        <div className={styles.polaroidImage}>
                            <span style={{ fontSize: 48 }}>👨‍💻</span>
                        </div>
                        <p className={styles.polaroidCaption}>Hello from Bengaluru! 🇮🇳</p>
                    </div>
                ),
            },
            {
                id: "social",
                x: 220,
                y: -160,
                rotate: 7,
                gridX: 2,
                gridY: 0,
                content: (
                    <div className={styles.socialBadge}>
                        <div className={styles.socialNumber}>8k+</div>
                        <div className={styles.socialLabel}>Followers on Socials</div>
                        <div className={styles.socialPills}>
                            <span>IG</span>
                            <span>LI</span>
                            <span>BE</span>
                        </div>
                    </div>
                ),
            },
            {
                id: "sticky",
                x: -320,
                y: 30,
                rotate: 5,
                gridX: 0,
                gridY: 1,
                content: (
                    <div className={styles.stickyNote}>
                        <div className={styles.stickyTape}></div>
                        <p className={styles.stickyText}>📄 Check out my Resume →</p>
                        <p className={styles.stickySubtext}>click to download</p>
                    </div>
                ),
            },
            {
                id: "cyber",
                x: 260,
                y: 20,
                rotate: -4,
                gridX: 2,
                gridY: 1,
                content: (
                    <div className={styles.cyberBadge}>
                        <span className={styles.cyberIcon}>🛡️</span>
                        <div className={styles.cyberLabel}>B.Tech</div>
                        <div className={styles.cyberTitle}>Cyber Security</div>
                        <div className={styles.cyberDots}>
                            {[...Array(8)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`${styles.dot} ${i < 5 ? styles.dotFilled : styles.dotDim}`}
                                ></span>
                            ))}
                        </div>
                    </div>
                ),
            },
            {
                id: "music",
                x: -240,
                y: 180,
                rotate: -9,
                gridX: 0,
                gridY: 2,
                content: (
                    <MusicWidget />
                ),
            },
            {
                id: "palette",
                x: 20,
                y: 200,
                rotate: 13,
                gridX: 1,
                gridY: 2,
                content: (
                    <div className={styles.paletteCard}>
                        <p className={styles.paletteTitle}>My Brand 🎨</p>
                        <div className={styles.swatches}>
                            {["#FF7A3D", "#FFB347", "#FF6B5B", "#0A0A0A", "#F9F8F4"].map(
                                (c) => (
                                    <div
                                        key={c}
                                        className={styles.swatch}
                                        style={{ background: c }}
                                    ></div>
                                )
                            )}
                        </div>
                        <p className={styles.paletteCode}>#FF7A3D · #0A0A0A</p>
                    </div>
                ),
            },
            {
                id: "toolbox",
                x: 10,
                y: -180,
                rotate: -6,
                gridX: 1,
                gridY: 0,
                content: (
                    <div className={styles.toolboxCard}>
                        <p className={styles.toolboxTitle}>My Toolbox 🛠</p>
                        <div className={styles.toolboxIcons}>
                            <div className={styles.toolIcon} style={{ background: "#F24E1E" }}>🎨</div>
                            <div className={styles.toolIcon} style={{ background: "#0A0A0A" }}>⚡</div>
                            <div className={styles.toolIcon} style={{ background: "#FF7A3D" }}>🔒</div>
                        </div>
                        <div className={styles.toolboxPills}>
                            <span>UX Research</span>
                            <span>Figma</span>
                            <span>React</span>
                            <span>A11y</span>
                        </div>
                    </div>
                ),
            },
        ];

        // Grid positions for cleaned state
        const gridPositions = [
            { x: -170, y: -120 },
            { x: 0, y: -120 },
            { x: 170, y: -120 },
            { x: -170, y: 50 },
            { x: 0, y: 50 },
            { x: 170, y: 50 },
            { x: 0, y: 220 },
        ];

        return (
            <section className={styles.hero} ref={constraintsRef}>
                {/* Central Text */}
                <div className={styles.centerText}>
                    <h1 className={styles.heroName}>Sagar Sah</h1>
                    <p className={styles.heroTitle}>UI/UX DESIGNER</p>
                    <p className={styles.heroTagline}>
                        <em>Designing interfaces that are beautiful, buildable, and secure.</em>
                    </p>
                    <div className={styles.locationPill}>📍 Bengaluru, India</div>
                </div>

                {/* Stickers */}
                <div className={styles.stickerCanvas}>
                    {stickers.map((sticker, i) => (
                        <motion.div
                            key={sticker.id}
                            className={styles.sticker}
                            drag={isDraggable}
                            dragConstraints={constraintsRef}
                            dragElastic={0.12}
                            whileDrag={{ scale: 1.04, cursor: "grabbing" }}
                            onPointerDown={() => bringToFront(sticker.id)}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                x: isCleaned ? gridPositions[i].x : sticker.x,
                                y: isCleaned ? gridPositions[i].y : sticker.y,
                                rotate: isCleaned ? 0 : sticker.rotate,
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 22,
                                delay: i * 0.08,
                                opacity: { duration: 0.4, delay: i * 0.08 },
                            }}
                            style={{
                                zIndex: getZ(sticker.id),
                                position: "absolute",
                                cursor: isDraggable ? "grab" : "default",
                            }}
                        >
                            {sticker.content}
                        </motion.div>
                    ))}
                </div>
            </section>
        );
    }
);

ScrapbookHero.displayName = "ScrapbookHero";

function MusicWidget() {
    const [playing, setPlaying] = useState(false);

    return (
        <div className={styles.musicWidget} onClick={() => setPlaying((p) => !p)}>
            <div className={`${styles.vinyl} ${playing ? styles.spinning : ""}`}>🎵</div>
            <div className={styles.musicInfo}>
                <div className={styles.musicTrack}>Lofi Coding Beats</div>
                <div className={styles.musicSub}>🎧 Sagar&apos;s coding mix</div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                </div>
            </div>
        </div>
    );
}

export default ScrapbookHero;
