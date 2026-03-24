import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

const testimonials = [
    {
        body: '"Sagar delivered exceptional UX work for our trading platform. His attention to detail and understanding of user flows was impressive."',
        name: 'Priya Sharma',
        role: 'Product Manager',
        company: 'ZenTrade',
    },
    {
        body: '"Working with Sagar was a breeze. He transformed our cafe app concept into a beautiful, intuitive experience our customers love."',
        name: 'Rahul Verma',
        role: 'Founder',
        company: 'MountainBrew',
    },
    {
        body: '"His designs are clean, modern and well-thought. Sagar brings both creativity and technical understanding to every project."',
        name: 'Ananya Patel',
        role: 'Design Lead',
        company: 'TechStar Inc.',
    },
    {
        body: '"Sagar has a unique ability to simplify complex interfaces. Our airline booking flow improved dramatically after his redesign."',
        name: 'Vikram Singh',
        role: 'CTO',
        company: 'AirX',
    },
    {
        body: '"Exceptional designer who truly understands user needs. Sagar\'s work on our fitness app exceeded all expectations."',
        name: 'Neha Gupta',
        role: 'CEO',
        company: 'ActivePulse',
    },
    {
        body: '"Sagar\'s systematic approach to design and his coding skills make him a rare find. Highly recommend for any UX project."',
        name: 'Arjun Mehta',
        role: 'Engineering Manager',
        company: 'FinFlow',
    },
    {
        body: '"From wireframes to high-fidelity prototypes, Sagar delivered pixel-perfect work on time. A true professional."',
        name: 'Deepa Krishnan',
        role: 'Product Owner',
        company: 'CloudBase',
    },
    {
        body: '"Sagar doesn\'t just design — he solves problems. His UX research and insights drove meaningful improvements to our product."',
        name: 'Karan Joshi',
        role: 'VP Product',
        company: 'DataVault',
    },
];

export default function Testimonials() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.08 });
    const [page, setPage] = useState(0);
    const totalPages = 2;

    // Auto-rotate
    useEffect(() => {
        const id = setInterval(() => setPage((p) => (p + 1) % totalPages), 2600);
        return () => clearInterval(id);
    }, []);

    const visible = testimonials.slice(page * 4, page * 4 + 4);

    return (
        <section ref={ref} className="px-6 max-[480px]:px-5 py-16 max-w-[1100px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-[22px]">💬</span>
                    <h2 className="text-[26px] font-medium tracking-[-0.02em] text-primary m-0 mt-1">
                        What others say!
                    </h2>
                    <p className="text-[13px] text-gray-muted m-0 mt-1">Kind words from real people 🙏</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-4 max-[880px]:grid-cols-2 max-[480px]:grid-cols-1 gap-3">
                    {visible.map((t, i) => (
                        <div
                            key={`${page}-${i}`}
                            className="bg-white rounded-[14px] p-4 transition-transform duration-200 hover:-translate-y-1 cursor-default"
                            style={{ border: '1.5px solid #e8e8e8' }}
                        >
                            <p className="text-[12px] leading-[1.7] text-[#333] m-0">{t.body}</p>
                            <div className="border-t border-[#eee] mt-3 pt-3">
                                <p className="text-[11.5px] font-bold text-primary m-0">{t.name}</p>
                                <p className="text-[11px] text-gray-muted m-0 mt-[2px]">
                                    {t.role} · {t.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className="border-none p-0 cursor-pointer rounded-full transition-colors duration-200"
                            style={{
                                width: 8,
                                height: 8,
                                background: page === i ? 'rgb(49,49,49)' : '#d8d8d8',
                            }}
                            aria-label={`Page ${i + 1}`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
