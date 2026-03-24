import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const hobbies = [
    { emoji: '🍳', label: 'Cooking', accent: true },
    { emoji: '⚽', label: 'Football' },
    { emoji: '☕', label: 'Coffee' },
    { emoji: '💻', label: 'Coding at 2am' },
    { emoji: '🎵', label: 'Music' },
    { emoji: '📱', label: 'Creating content' },
];

/* Placeholder food photos using gradient blocks */
const photos = [
    { w: 220, h: 240, emoji: '🍳', caption: 'Egg special', bg: '#e8d5b0' },
    { w: 200, h: 280, emoji: '🥘', caption: 'Curry magic', bg: '#d4a76a' },
    { w: 260, h: 240, emoji: '🍝', caption: 'Pasta night', bg: '#c9b896' },
    { w: 220, h: 240, emoji: '🍲', caption: 'Comfort food', bg: '#b89e6e' },
    { w: 200, h: 280, emoji: '🥗', caption: 'Fresh vibes', bg: '#8dbd8d' },
    { w: 260, h: 240, emoji: '🍰', caption: 'Sweet tooth', bg: '#e4c9a8' },
    { w: 220, h: 240, emoji: '🥞', caption: 'Breakfast club', bg: '#dcc08e' },
    { w: 200, h: 280, emoji: '🌮', caption: 'Taco time', bg: '#c4a35a' },
];

function PhotoCard({ p }: { p: (typeof photos)[0] }) {
    const [hover, setHover] = useState(false);
    return (
        <div
            className="flex-shrink-0 rounded-[18px] overflow-hidden relative flex items-center justify-center cursor-pointer"
            style={{ width: p.w, height: p.h, background: p.bg }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span className="text-[56px]">{p.emoji}</span>
            {hover && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white transition-opacity">
                    <span className="text-[32px] mb-1">{p.emoji}</span>
                    <span className="text-[12px] font-medium">{p.caption}</span>
                </div>
            )}
        </div>
    );
}

const stats = [
    { val: '50', accent: '+', label: 'Dishes cooked' },
    { val: '∞', accent: '', label: 'Coffees consumed' },
    { val: '3', accent: 'am', label: 'Usual bedtime' },
    { val: '1', accent: 'st', label: 'Football > everything' },
];

export default function LifeOutsideDesign() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.08 });

    return (
        <section id="life" ref={ref} className="py-16 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="text-center mb-8 px-6 max-[480px]:px-5">
                    <span className="text-[22px]">🍳</span>
                    <h2 className="text-[26px] font-semibold tracking-[-0.03em] text-primary m-0 mt-1">
                        Life outside design
                    </h2>
                    <p className="text-[13px] text-gray-muted m-0 mt-1 max-w-[380px] mx-auto">
                        When I'm not pushing pixels, I'm pushing flavours
                    </p>
                </div>

                {/* Hobby tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-10 px-6 max-[480px]:px-5">
                    {hobbies.map((h, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-[5px] px-4 py-[6px] rounded-full text-[13px] font-medium"
                            style={{
                                border: h.accent ? '1.5px solid rgb(254,99,1)' : '1.5px solid #e0e0e0',
                                color: h.accent ? 'rgb(254,99,1)' : 'rgb(49,49,49)',
                            }}
                        >
                            {h.emoji} {h.label}
                        </span>
                    ))}
                </div>

                {/* Photo Strip Row 1 — scroll left */}
                <div
                    className="relative w-full overflow-hidden mb-3"
                    onMouseEnter={(e) => {
                        e.currentTarget.querySelectorAll<HTMLElement>('[data-strip]').forEach(
                            (el) => (el.style.animationPlayState = 'paused')
                        );
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.querySelectorAll<HTMLElement>('[data-strip]').forEach(
                            (el) => (el.style.animationPlayState = 'running')
                        );
                    }}
                >
                    <div
                        data-strip
                        className="flex gap-3"
                        style={{
                            animation: 'scrollL 28s linear infinite',
                            width: 'max-content',
                        }}
                    >
                        {[...photos, ...photos].map((p, i) => (
                            <PhotoCard key={i} p={p} />
                        ))}
                    </div>
                </div>

                {/* Photo Strip Row 2 — scroll right */}
                <div
                    className="relative w-full overflow-hidden mb-12"
                    onMouseEnter={(e) => {
                        e.currentTarget.querySelectorAll<HTMLElement>('[data-strip]').forEach(
                            (el) => (el.style.animationPlayState = 'paused')
                        );
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.querySelectorAll<HTMLElement>('[data-strip]').forEach(
                            (el) => (el.style.animationPlayState = 'running')
                        );
                    }}
                >
                    <div
                        data-strip
                        className="flex gap-3"
                        style={{
                            animation: 'scrollR 22s linear infinite',
                            width: 'max-content',
                        }}
                    >
                        {[...photos.slice().reverse(), ...photos.slice().reverse()].map((p, i) => (
                            <PhotoCard key={i} p={p} />
                        ))}
                    </div>
                </div>

                {/* Quote */}
                <div className="text-center px-6 max-[480px]:px-5 relative">
                    <p className="text-[22px] max-[480px]:text-[18px] font-medium text-primary leading-[1.5] m-0 max-w-[500px] mx-auto">
                        I design by day, cook by night, and{' '}
                        <span
                            className="inline italic"
                            style={{
                                background: 'rgb(254,99,1)',
                                color: 'white',
                                borderRadius: 6,
                                padding: '1px 8px',
                            }}
                        >
                            never skip coffee.
                        </span>
                    </p>

                    {/* Cooking emoji badge */}
                    <div className="absolute right-[10%] top-0 hidden min-[880px]:flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-[22px]">
                            🍳
                        </div>
                        <span className="text-[10px] text-gray-muted mt-1">Self-taught chef</span>
                    </div>
                </div>

                {/* Stats strip */}
                <div className="max-w-[800px] mx-auto mt-10 px-6 max-[480px]:px-5">
                    <div className="bg-white rounded-[20px] grid grid-cols-4 max-[480px]:grid-cols-2 divide-x divide-border">
                        {stats.map((s, i) => (
                            <div key={i} className="flex flex-col items-center py-5 px-4">
                                <span className="text-[32px] font-bold text-primary leading-none">
                                    {s.val}
                                    {s.accent && (
                                        <span className="text-orange">{s.accent}</span>
                                    )}
                                </span>
                                <span className="text-[11px] text-gray-muted mt-1">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
