"use client";

import { forwardRef, useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

interface HeroProps {
    isCleaned: boolean;
    isDraggable: boolean;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
    ({ isCleaned, isDraggable }, ref) => {
        const constraintsRef = useRef<HTMLDivElement>(null);
        const [zStack, setZStack] = useState<string[]>([]);
        const [musicPlaying, setMusicPlaying] = useState(false);
        const audioRef = useRef<HTMLAudioElement | null>(null);
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);

        useEffect(() => {
            const audio = new Audio("/NeverMine.mpeg");
            audio.loop = true;
            audioRef.current = audio;

            audio.addEventListener("loadedmetadata", () => {
                setDuration(audio.duration);
            });
            audio.addEventListener("timeupdate", () => {
                setCurrentTime(audio.currentTime);
            });

            return () => {
                audio.pause();
                audio.removeEventListener("loadedmetadata", () => { });
                audio.removeEventListener("timeupdate", () => { });
            };
        }, []);

        const toggleMusic = useCallback(() => {
            const audio = audioRef.current;
            if (!audio) return;
            if (musicPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setMusicPlaying((p) => !p);
        }, [musicPlaying]);

        const formatTime = (t: number) => {
            const mins = Math.floor(t / 60);
            const secs = Math.floor(t % 60);
            return `${mins}:${secs.toString().padStart(2, "0")}`;
        };

        const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

        const bringToFront = useCallback((id: string) => {
            setZStack((prev) => [...prev.filter((i) => i !== id), id]);
        }, []);

        const getZ = (id: string) => {
            const idx = zStack.indexOf(id);
            return idx === -1 ? 10 : 20 + idx;
        };

        const springTransition = {
            type: "spring" as const,
            stiffness: 200,
            damping: 22,
        };

        /* Sticker positions: scattered vs cleaned grid */
        const items = [
            { id: "lamp", sx: -520, sy: -280, sr: -8, gx: -400, gy: -200 },
            { id: "newspaper", sx: -320, sy: -220, sr: 12, gx: -200, gy: -200 },
            { id: "notebook", sx: -400, sy: 20, sr: -15, gx: -400, gy: 0 },
            { id: "filmroll", sx: -460, sy: 120, sr: 5, gx: -200, gy: 0 },
            { id: "lighter", sx: -200, sy: 60, sr: 8, gx: 0, gy: 0 },
            { id: "handcream", sx: -280, sy: 240, sr: -10, gx: -400, gy: 200 },
            { id: "music", sx: 340, sy: -240, sr: 3, gx: 200, gy: -200 },
            { id: "cursor", sx: 240, sy: -120, sr: -20, gx: 0, gy: -200 },
            { id: "folder", sx: 320, sy: 20, sr: 8, gx: 200, gy: 0 },
            { id: "airdrop", sx: 280, sy: 120, sr: -5, gx: 0, gy: 200 },
            { id: "toolbar", sx: 540, sy: 0, sr: 0, gx: 400, gy: 0 },
        ];

        return (
            <section className={styles.hero} ref={constraintsRef}>
                {/* Central Text */}
                <div className={styles.centerText}>
                    <h1 className={styles.name}>Sagar Sah</h1>
                    <p className={styles.role}>UI/UX Design</p>
                    <p className={styles.roleItalic}>Verb &amp; Noun</p>
                    <p className={styles.tagline}>
                        a thoughtful process of designing interfaces
                        <br />
                        that are beautiful, buildable, and secure.
                    </p>
                </div>

                {/* ========== Scattered Objects ========== */}

                {/* 1. Desk Lamp — top left */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04, cursor: "grabbing" }}
                    onPointerDown={() => bringToFront("lamp")}
                    animate={{
                        x: isCleaned ? -520 : items[0].sx,
                        y: isCleaned ? -280 : items[0].sy,
                        rotate: isCleaned ? 0 : items[0].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("lamp"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.lamp}>
                        <div className={styles.lampShade}></div>
                        <div className={styles.lampGlow}></div>
                        <div className={styles.lampNeck}></div>
                        <div className={styles.lampBase}></div>
                    </div>
                </motion.div>

                {/* 2. Torn Newspaper — "Designing" definition */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("newspaper")}
                    animate={{
                        x: isCleaned ? -200 : items[1].sx,
                        y: isCleaned ? -200 : items[1].sy,
                        rotate: isCleaned ? 0 : items[1].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("newspaper"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.newspaper}>
                        <div className={styles.newspaperTorn}></div>
                        <p className={styles.newspaperSmall}>from natural affinity, or true</p>
                        <p className={styles.newspaperSmall}>sympathy and manifesting</p>
                        <p className={styles.newspaperWord}>Design</p>
                        <p className={styles.newspaperSmall}>to conceive, create and</p>
                        <p className={styles.newspaperSmall}>execute a plan</p>
                    </div>
                </motion.div>

                {/* 3. Notebook with pen */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("notebook")}
                    animate={{
                        x: isCleaned ? -400 : items[2].sx,
                        y: isCleaned ? 0 : items[2].sy,
                        rotate: isCleaned ? 0 : items[2].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("notebook"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.notebook}>
                        <div className={styles.notebookGrid}></div>
                        <div className={styles.coffeeStain}></div>
                        <div className={styles.pen}></div>
                    </div>
                </motion.div>

                {/* 4. Film Roll (Portra 400) */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("filmroll")}
                    animate={{
                        x: isCleaned ? -200 : items[3].sx,
                        y: isCleaned ? 60 : items[3].sy,
                        rotate: isCleaned ? 0 : items[3].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("filmroll"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.filmRoll}>
                        <div className={styles.filmCanister}>
                            <div className={styles.filmLabel}>
                                <span className={styles.filmBrand}>KODAK</span>
                                <span className={styles.filmType}>PORTRA</span>
                                <span className={styles.filmSpeed}>400</span>
                            </div>
                        </div>
                        <div className={styles.filmStrip}>
                            <div className={styles.filmSprocket}></div>
                            <div className={styles.filmSprocket}></div>
                            <div className={styles.filmSprocket}></div>
                        </div>
                    </div>
                </motion.div>

                {/* 5. Lighter sticker */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("lighter")}
                    animate={{
                        x: isCleaned ? 0 : items[4].sx,
                        y: isCleaned ? 60 : items[4].sy,
                        rotate: isCleaned ? 0 : items[4].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("lighter"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.lighter}>
                        <div className={styles.lighterBody}>
                            <div className={styles.lighterFlame}>🔥</div>
                            <div className={styles.lighterLabel}>SS</div>
                        </div>
                    </div>
                </motion.div>

                {/* 6. Hand cream tube */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("handcream")}
                    animate={{
                        x: isCleaned ? -300 : items[5].sx,
                        y: isCleaned ? 200 : items[5].sy,
                        rotate: isCleaned ? 0 : items[5].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("handcream"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.tube}>
                        <div className={styles.tubeCap}></div>
                        <div className={styles.tubeBody}>
                            <span className={styles.tubeLogo}>☕</span>
                            <span className={styles.tubeText}>Bengaluru Brew</span>
                        </div>
                    </div>
                </motion.div>

                {/* 7. Vinyl Record Music Player — top right */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("music")}
                    animate={{
                        x: isCleaned ? 350 : items[6].sx,
                        y: isCleaned ? -200 : items[6].sy,
                        rotate: isCleaned ? 0 : items[6].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("music"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.musicPlayer}>
                        <div className={styles.vinylContainer} onClick={(e) => { e.stopPropagation(); toggleMusic(); }} style={{ cursor: "pointer" }}>
                            <div className={`${styles.vinyl} ${musicPlaying ? styles.spinning : ""}`}>
                                <div className={styles.vinylCenter}></div>
                            </div>
                        </div>
                        <div className={styles.musicMeta}>
                            <div className={styles.musicIcon}>{musicPlaying ? "⏸" : "▶"}</div>
                            <div>
                                <p className={styles.musicArtist}>Sagar Sah</p>
                                <p className={styles.musicTrack}>NeverMine</p>
                            </div>
                        </div>
                        <div className={styles.musicProgress}>
                            <div className={styles.musicProgressBar}>
                                <div className={styles.musicProgressFill} style={{ width: `${progressPct}%` }}></div>
                                <div className={styles.musicProgressDot} style={{ left: `${progressPct}%` }}></div>
                            </div>
                            <div className={styles.musicTime}>
                                <span>{formatTime(currentTime)}</span>
                                <span>/ {formatTime(duration)}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 8. Pixel Cursor */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("cursor")}
                    animate={{
                        x: isCleaned ? 200 : items[7].sx,
                        y: isCleaned ? -80 : items[7].sy,
                        rotate: isCleaned ? 0 : items[7].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("cursor"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.pixelCursor}>
                        <svg width="40" height="48" viewBox="0 0 16 20" fill="none">
                            <path d="M1 1L1 16L5 12L8.5 19L11 18L7.5 11L13 11L1 1Z" fill="#FFB6C1" stroke="#333" strokeWidth="0.8" />
                        </svg>
                    </div>
                </motion.div>

                {/* 9. Blue macOS Folder */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("folder")}
                    animate={{
                        x: isCleaned ? 300 : items[8].sx,
                        y: isCleaned ? 0 : items[8].sy,
                        rotate: isCleaned ? 0 : items[8].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("folder"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.folder}>
                        <img
                            src="https://framerusercontent.com/images/zBTrYExuPA4oelyKSUOT0Jd5Jw.png?scale-down-to=512"
                            alt="macOS Folder"
                            className={styles.folderImage}
                            draggable={false}
                        />
                        <p className={styles.folderLabel}>Final_Final_Final</p>
                    </div>
                </motion.div>

                {/* 10. AirDrop Notification */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("airdrop")}
                    animate={{
                        x: isCleaned ? 250 : items[9].sx,
                        y: isCleaned ? 140 : items[9].sy,
                        rotate: isCleaned ? 0 : items[9].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("airdrop"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.airdrop}>
                        <div className={styles.airdropHeader}>
                            <p className={styles.airdropTitle}>AirDrop</p>
                            <p className={styles.airdropSub}>Sagar would like to share a photo</p>
                        </div>
                        <div className={styles.airdropImage}>
                            <div className={styles.airdropGradient}></div>
                        </div>
                        <div className={styles.airdropActions}>
                            <button className={styles.airdropDecline}>Decline</button>
                            <button className={styles.airdropAccept}>Accept</button>
                        </div>
                    </div>
                </motion.div>

                {/* 11. MS Paint-style Toolbar — right edge */}
                <motion.div
                    className={styles.object}
                    drag={isDraggable}
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    whileDrag={{ scale: 1.04 }}
                    onPointerDown={() => bringToFront("toolbar")}
                    animate={{
                        x: isCleaned ? 500 : items[10].sx,
                        y: isCleaned ? 0 : items[10].sy,
                        rotate: isCleaned ? 0 : items[10].sr,
                    }}
                    transition={springTransition}
                    style={{ zIndex: getZ("toolbar"), top: "50%", left: "50%", cursor: isDraggable ? "grab" : "default" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    <div className={styles.paintToolbar}>
                        {["✏️", "🖌️", "🎨", "🪣", "✂️", "🔍", "📐", "⬜", "⭕", "📏", "🅰️", "💧"].map((icon, i) => (
                            <div key={i} className={styles.paintTool}>{icon}</div>
                        ))}
                    </div>
                </motion.div>

                {/* Currently cooking section */}
                <div className={styles.cookingBadge}>
                    <span>Currently cooking ☺︎</span>
                </div>
            </section>
        );
    }
);

Hero.displayName = "Hero";
export default Hero;
