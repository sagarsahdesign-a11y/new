import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const projects = [
    {
        tag: 'TRADING APP',
        num: '01',
        title: 'ZenTrade',
        subtitle: 'UX Case Study',
        bg: 'linear-gradient(135deg, #1a3a8f 0%, #0f2266 100%)',
        label: 'ZenTrade · Trading App · Case Study',
    },
    {
        tag: 'CAFE MOBILE APP',
        num: '02',
        title: 'Mountain Brew',
        subtitle: 'UX Case Study',
        bg: 'linear-gradient(135deg, #1e2d5a 0%, #162042 100%)',
        label: 'Mountain Brew · Cafe Mobile App · Case Study',
    },
    {
        tag: 'AIRLINE WEBSITE',
        num: '03',
        title: 'AirX',
        subtitle: 'UX Case Study',
        bg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        label: 'AirX · Airline Website · Case Study',
    },
    {
        tag: 'FITNESS APP',
        num: '04',
        title: 'ActivePulse',
        subtitle: 'UX Case Study',
        bg: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        label: 'ActivePulse · Fitness App · Case Study',
    },
];

/* Mockup phone skeleton */
function PhoneMockup({ index }: { index: number }) {
    const colors = ['#3b82f6', '#8b5cf6', '#60a5fa', '#f87171'];
    return (
        <div className="absolute bottom-0 right-4 flex gap-3 items-end">
            {[0, 1].map((i) => (
                <div
                    key={i}
                    className="rounded-[16px] shadow-lg"
                    style={{
                        width: 90 + i * 10,
                        height: 160 + i * 20,
                        background: colors[(index + i) % 4],
                        opacity: 0.4 + i * 0.3,
                        transform: `rotate(${i * -5}deg) translateY(${i * 10}px)`,
                    }}
                />
            ))}
        </div>
    );
}

export default function FeaturedProjects() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.08 });

    return (
        <section id="projects" ref={ref} className="px-6 max-[480px]:px-5 py-16 max-w-[1100px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[20px]">✦</span>
                            <h2 className="text-[26px] font-semibold tracking-[-0.03em] text-primary m-0">
                                Featured Projects
                            </h2>
                        </div>
                        <p className="text-[13px] text-gray-muted m-0 mt-1">
                            Blood, sweat and tears were sacrificed
                        </p>
                    </div>
                    <button className="inline-flex items-center h-[34px] px-5 rounded-full text-[13px] font-medium text-white bg-primary hover:opacity-90 transition-opacity duration-200 border-none cursor-pointer whitespace-nowrap">
                        See All
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 max-[880px]:grid-cols-1 gap-5">
                    {projects.map((p, i) => (
                        <div key={i}>
                            <div
                                className="relative overflow-hidden rounded-[22px] p-6 cursor-pointer transition-transform duration-[280ms]"
                                style={{
                                    background: p.bg,
                                    aspectRatio: '1.42',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Tags */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="inline-flex items-center px-3 py-[3px] rounded-full text-[10px] font-semibold tracking-[0.04em] text-white/90 bg-white/15 uppercase">
                                        {p.tag}
                                    </span>
                                    <span className="inline-flex items-center px-2 py-[3px] rounded-full text-[10px] font-semibold text-white/70 bg-white/10">
                                        {p.num}
                                    </span>
                                </div>
                                {/* Title */}
                                <h3 className="text-white text-[32px] max-[480px]:text-[26px] font-bold leading-[1.1] m-0 font-inter">
                                    {p.title}
                                </h3>
                                <p className="text-white/70 text-[14px] mt-1 m-0">{p.subtitle}</p>

                                {/* Phone mockups */}
                                <PhoneMockup index={i} />
                            </div>
                            {/* Label below card */}
                            <div className="flex items-center justify-between mt-2 px-1">
                                <span className="text-[12px] text-gray-muted">{p.label}</span>
                                <span className="text-[14px] text-gray-muted">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
