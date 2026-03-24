import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function About() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.08 });

    return (
        <section id="about" ref={ref} className="px-6 max-[480px]:px-5 py-16 max-w-[1100px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="grid max-[880px]:grid-cols-1 gap-11"
                style={{ gridTemplateColumns: '210px 1fr' }}
            >
                {/* LEFT — Dark phone mockup card */}
                <div
                    className="rounded-[24px] p-4 pb-5 flex flex-col items-center max-[880px]:mx-auto max-[880px]:w-[210px]"
                    style={{ background: 'rgb(39,39,39)' }}
                >
                    {/* Photo placeholder */}
                    <div
                        className="w-full rounded-[14px] overflow-hidden flex items-center justify-center text-[64px]"
                        style={{
                            aspectRatio: '1',
                            background: 'linear-gradient(135deg, #555 0%, #333 100%)',
                        }}
                    >
                        👤
                    </div>
                    <p className="text-white text-[14px] font-bold m-0 mt-3">Sagar Shah</p>
                    <p className="text-[10.5px] m-0 mt-[2px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        @Sagar Shah · LinkedIn
                    </p>
                    <button className="mt-3 w-full h-[34px] rounded-full bg-orange text-white text-[12px] font-semibold border-none cursor-pointer hover:opacity-90 transition-opacity">
                        Connect +
                    </button>
                </div>

                {/* RIGHT — Bio text */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-[34px] max-[480px]:text-[26px] font-semibold leading-[1.22] tracking-[-0.035em] text-primary m-0">
                        I am Sagar, a UI/UX Designer{' '}
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-[6px] bg-[#e0e0e0] text-[16px] align-middle mx-[2px]">
                            🎨
                        </span>{' '}
                        who codes,{' '}
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-[6px] bg-[#e0e0e0] text-[16px] align-middle mx-[2px]">
                            💻
                        </span>{' '}
                        thinks in systems, and designs things people actually enjoy using.
                    </h2>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 mt-8">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-2 h-[38px] px-5 rounded-full text-[13px] font-medium text-white bg-primary hover:opacity-90 transition-opacity no-underline"
                        >
                            <span className="w-2 h-2 rounded-full bg-orange" />
                            Resume
                        </a>
                        <button
                            className="inline-flex items-center h-[38px] px-5 rounded-full text-[13px] font-medium text-primary bg-transparent hover:bg-gray-100 transition-colors cursor-pointer"
                            style={{ border: '1.5px solid rgb(49,49,49)' }}
                        >
                            About Me
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
