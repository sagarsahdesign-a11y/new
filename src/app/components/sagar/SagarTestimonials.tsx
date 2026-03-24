import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const testimonials = [
  {
    id: 1,
    quote: "Sagar delivered exceptional UI work for ZenTrade. His attention to detail, component-thinking, and delivery speed were unlike any freelancer I've worked with before.",
    name: "Rohan Mehta",
    role: "Co-founder",
    company: "@ ZenTrade",
  },
  {
    id: 2,
    quote: "Working with Sagar on Mountain Brew was seamless. He understood our brand instantly and brought a warmth to the UI that our customers genuinely feel.",
    name: "Priya Nair",
    role: "Brand Director",
    company: "@ Mountain Brew",
  },
  {
    id: 3,
    quote: "Sagar is a rare hybrid — designer and developer. He built our Framer site from scratch and it felt like magic. Fast, precise, and zero back-and-forth.",
    name: "Arjun Sharma",
    role: "Product Lead",
    company: "@ AirX",
  },
  {
    id: 4,
    quote: "The ActivePulse redesign by Sagar increased user retention by 40%. He thinks about product, not just pixels. That mindset is what sets him apart.",
    name: "Sneha Reddy",
    role: "CEO",
    company: "@ Huggl (ActivePulse)",
  },
  {
    id: 5,
    quote: "Sagar codes as well as he designs. Watching him go from Figma to live site in a day is honestly impressive. Highly recommended for early-stage startups.",
    name: "Vikas Patel",
    role: "CTO",
    company: "@ TechLaunch",
  },
  {
    id: 6,
    quote: "His design systems are clean, scalable, and developer-friendly. Sagar doesn't just hand off — he hands off something you can actually build from.",
    name: "Kavitha Iyer",
    role: "Senior Engineer",
    company: "@ Startup Studio",
  },
  {
    id: 7,
    quote: "I've mentored many design students and Sagar stands out. His curiosity, systems thinking, and ability to ship production-quality work in weeks is remarkable.",
    name: "Prof. Anand Krishnan",
    role: "HCI Faculty",
    company: "@ JNTUK",
  },
  {
    id: 8,
    quote: "His micro-interaction work on our onboarding flow reduced drop-off by 28%. Sagar clearly thinks about the full user journey, not just how it looks.",
    name: "Deepak Joshi",
    role: "Head of Product",
    company: "@ Freelance Client",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="bg-white rounded-[18px] overflow-hidden border border-[#e8e8e8] flex flex-col h-full"
      style={{ boxShadow: "0 0.89px 20px -21.34px rgba(0,0,0,0.13)" }}
    >
      <div className="p-6 flex-1">
        <p
          className="text-[15px] text-black leading-[1.65]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          {t.quote}
        </p>
      </div>
      <div className="bg-[#f5f5f5] px-6 py-4">
        <p className="text-[14px] font-semibold text-[#828282]" style={{ fontFamily: "'Inter', sans-serif" }}>
          {t.name}
        </p>
        <p className="text-[13px] text-[#828282]" style={{ fontFamily: "'Inter', sans-serif" }}>
          {t.role}<br />{t.company}
        </p>
      </div>
    </div>
  );
}

export function SagarTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeDot, setActiveDot] = useState(0);

  // Auto-rotate dots
  const totalDots = 4;

  return (
    <section id="testimonials" className="py-20 px-8 bg-[#f7f7f7] border-t border-[#e8e8e8]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2
            className="text-[32px] text-black tracking-[-1.28px]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontVariationSettings: "'opsz' 14" }}
          >
            What others say!
          </h2>
          <p
            className="text-[18px] text-[#8b8b8b] tracking-[-0.72px] mt-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            I didn't come up with these, I swear
          </p>
        </motion.div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="h-full"
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Rotating dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mt-8"
        >
          {Array.from({ length: totalDots }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveDot(i)}
              animate={{
                rotate: activeDot === i ? 360 : 0,
                scale: activeDot === i ? 1.2 : 1,
              }}
              transition={{ duration: 0.5 }}
              className={`rounded-full transition-all ${
                activeDot === i
                  ? "w-8 h-[10px] bg-[#313131]"
                  : "w-[10px] h-[10px] bg-[#313131]/25"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
