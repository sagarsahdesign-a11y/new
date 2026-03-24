import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const smallCards = [
    { role: 'UX Design', company: '@ ZenTrade', emoji: '📊' },
    { role: 'UX Design', company: '@ MountainBrew', emoji: '☕' },
    { role: 'B.Tech · Cyber Security', company: '@ GIET', emoji: '🎓' },
];

export default function RecentExperience() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.08 });

    return (
        <section id="experience" ref={ref} className="px-6 max-[480px]:px-5 py-16 max-w-[1100px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-[22px]">💧</span>
                    <h2 className="text-[26px] font-semibold tracking-[-0.03em] text-primary m-0 mt-1">
                        Recent Experience
                    </h2>
                    <p className="text-[13px] text-gray-muted m-0 mt-1">Little big steps</p>
                </div>

                {/* Two columns */}
                <div className="grid grid-cols-2 max-[880px]:grid-cols-1 gap-8">
                    {/* LEFT */}
                    <div className="flex flex-col gap-4">
                        {/* Big orange card */}
                        <div
                            className="relative rounded-[28px] p-[22px] text-white overflow-hidden"
                            style={{ background: 'rgb(254,99,1)' }}
                        >
                            <div className="absolute top-4 right-5 text-[48px] opacity-70">🧑‍💻</div>
                            <h3 className="text-[20px] font-bold m-0 font-inter leading-tight">
                                Freelance UI/UX Designer
                            </h3>
                            <p className="text-[13px] text-white/80 m-0 mt-1">@ Self-Employed / Remote</p>
                            <span className="inline-flex items-center mt-4 px-4 py-[5px] rounded-full text-[11px] font-medium bg-white/[0.22]">
                                Jan 2024 – Present
                            </span>
                        </div>

                        {/* 3 small cards row */}
                        <div className="grid grid-cols-3 gap-3">
                            {smallCards.map((c, i) => (
                                <div
                                    key={i}
                                    className="relative rounded-[20px] p-4 bg-[#f7f7f7]"
                                    style={{ border: '1px solid #ebebeb' }}
                                >
                                    <span className="absolute top-3 right-3 text-[24px]">{c.emoji}</span>
                                    <p className="text-[12px] font-semibold text-primary m-0 mt-2 leading-tight">
                                        {c.role}
                                    </p>
                                    <p className="text-[11px] text-gray-muted m-0 mt-1">{c.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col justify-between">
                        <p className="text-[13.5px] text-gray-muted leading-[1.7] m-0 max-w-[360px]">
                            I don't just design — I build. End-to-end UI/UX across projects, shipped with Figma +
                            Framer + HTML/CSS/JS. From wireframe to live product. Solo.
                        </p>
                        <div className="self-start mt-6 text-[72px]" style={{ transform: 'rotate(-10deg)' }}>
                            🧔
                        </div>
                    </div>
                </div>

                {/* See All */}
                <div className="text-center mt-10">
                    <button className="inline-flex items-center h-[36px] px-6 rounded-full text-[13px] font-medium text-white bg-primary hover:opacity-90 transition-opacity duration-200 border-none cursor-pointer">
                        See All
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
