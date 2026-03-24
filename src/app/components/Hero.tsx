import { motion } from 'motion/react';

/* ── Floating element wrapper ── */
function Float({
    children,
    className,
    duration = 4.2,
    y = -10,
    delay = 0,
    style,
}: {
    children: React.ReactNode;
    className?: string;
    duration?: number;
    y?: number;
    delay?: number;
    style?: React.CSSProperties;
}) {
    return (
        <motion.div
            className={className}
            style={{ position: 'absolute', ...style }}
            animate={{ y: [0, y, 0] }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

/* ── 4-point star SVG ── */
function Star({ size = 18, className }: { size?: number; className?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="rgb(49,49,49)" className={className}>
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
    );
}

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-bg"
            style={{ minHeight: '100vh' }}
        >
            {/* ─── Floating decorations (hidden on mobile <880px) ─── */}
            <div className="hidden min-[880px]:block">
                {/* CMD dark card */}
                <Float
                    className="z-[2]"
                    style={{ top: '22%', left: '9%' }}
                    duration={4.2}
                    y={-10}
                >
                    <div
                        className="flex items-center justify-center rounded-[18px]"
                        style={{
                            width: 80,
                            height: 80,
                            background: 'rgb(49,49,49)',
                        }}
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                    </div>
                </Float>

                {/* Z white card */}
                <Float
                    className="z-[2]"
                    style={{ top: '14%', left: '28%' }}
                    duration={3.8}
                    y={-12}
                    delay={0.4}
                >
                    <div
                        className="flex items-center justify-center bg-white rounded-[14px] font-bold text-[34px] text-primary"
                        style={{
                            width: 54,
                            height: 54,
                            border: '2px solid #e0e0e0',
                            transform: 'rotate(7deg)',
                        }}
                    >
                        Z
                    </div>
                </Float>

                {/* Cartoon man sticker — using emoji placeholder */}
                <Float
                    className="z-[2]"
                    style={{ top: '34%', left: '10%' }}
                    duration={5}
                    y={-14}
                    delay={0.8}
                >
                    <div className="w-[80px] h-[80px] flex items-center justify-center text-[58px]">
                        🧑‍💻
                    </div>
                </Float>

                {/* Vinyl record card */}
                <Float
                    className="z-[2]"
                    style={{ top: '28%', right: '9%' }}
                    duration={4.5}
                    y={-12}
                    delay={0.6}
                >
                    <div
                        className="flex flex-col items-center justify-end rounded-[20px] p-4 text-white"
                        style={{
                            width: 140,
                            height: 180,
                            background: 'rgb(39,39,39)',
                        }}
                    >
                        {/* Record disc */}
                        <div
                            className="rounded-full mb-3 flex items-center justify-center"
                            style={{
                                width: 80,
                                height: 80,
                                background: 'radial-gradient(circle, #333 30%, #111 60%, #333 62%, #111 100%)',
                                border: '2px solid #444',
                            }}
                        >
                            <div className="w-3 h-3 rounded-full bg-orange" />
                        </div>
                        <span className="text-[10px] text-white/70 text-center leading-tight">
                            Souleance<br />Never Mine
                        </span>
                    </div>
                </Float>

                {/* 4-point stars scattered */}
                <div className="absolute z-[1]" style={{ top: '18%', left: '20%' }}>
                    <Star size={15} />
                </div>
                <div className="absolute z-[1]" style={{ top: '30%', right: '22%' }}>
                    <Star size={22} />
                </div>
                <div className="absolute z-[1]" style={{ top: '60%', left: '15%' }}>
                    <Star size={18} />
                </div>
                <div className="absolute z-[1]" style={{ top: '70%', right: '18%' }}>
                    <Star size={15} />
                </div>
                <div className="absolute z-[1]" style={{ top: '45%', right: '6%' }}>
                    <Star size={20} />
                </div>
            </div>

            {/* ─── Center content ─── */}
            <div className="relative z-[3] flex flex-col items-center text-center px-5 max-w-[680px]">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-1 rounded-full px-4 py-[6px] mb-6 text-[14px]"
                    style={{
                        border: '1.4px solid rgb(214,214,214)',
                        color: 'rgb(110,110,110)',
                    }}
                >
                    UX Design Portfolio ✦
                </motion.div>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-[47px] max-[880px]:text-[36px] max-[480px]:text-[30px] font-normal leading-[1.12] tracking-[-0.04em] text-primary m-0"
                >
                    Security nerd who designs things{' '}
                    <br className="hidden min-[880px]:block" />
                    that actually{' '}
                    <span
                        className="italic inline-block"
                        style={{
                            background: 'rgb(193,238,252)',
                            borderRadius: 7,
                            padding: '2px 10px',
                        }}
                    >
                        work.
                    </span>
                </motion.h1>

                {/* Cursor arrow + "Sagar" pill */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-2 mt-5"
                >
                    {/* Blue cursor arrow */}
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                        <path d="M4 2L16 12L10 13L13 22L10 23L7 14L4 17V2Z" fill="#4A90D9" />
                    </svg>
                    {/* Sagar pill */}
                    <motion.span
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-flex items-center px-3 py-1 rounded-[8px] text-[13px] text-white font-medium bg-orange"
                    >
                        Sagar
                    </motion.span>
                </motion.div>

                {/* SCROLL ↓ */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-[11px] text-gray-muted tracking-[0.1em] uppercase mt-10"
                >
                    SCROLL ↓
                </motion.p>
            </div>

            {/* Made in Framer badge */}
            <div className="absolute bottom-5 right-6 text-[10px] text-gray-muted hidden min-[880px]:block">
                Made in Framer
            </div>
        </section>
    );
}
