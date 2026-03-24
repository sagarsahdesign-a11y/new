import { useRef } from "react";
import { motion, useInView } from "motion/react";

const testimonials = [
  {
    id: 1,
    quote:
      "I adored Andrea's positive energy and Gen Z influence. Over three months, Andrea contributed great ideas, jumped in with enthusiasm, and made time fly. She will be deeply missed!",
    name: "Alison Tintle",
    role: "Sr. Manager",
    company: "Amazon",
  },
  {
    id: 2,
    quote:
      "Andrea is a superstar ✨ Her energy is electrical, and collaborating with her to bring designs to life was so much fun. I can't wait to see where her talent takes her, big things ahead!",
    name: "Meital Miselevich",
    role: "Sr. UX Motion Designer",
    company: "Amazon",
  },
  {
    id: 3,
    quote:
      "Andrea is a UX rockstar who continually raised the bar for interns. She worked at 10X speed, produced innovative designs outside the box, and left a lasting impression.",
    name: "Haley Martin",
    role: "UX Designer II",
    company: "Amazon",
  },
  {
    id: 4,
    quote:
      "The team was lucky to have Andrea. I especially enjoyed collaborating on projects where her passion for design, creativity, and skills truly stood out. I wish her the best in her studies.",
    name: "Lai Wei",
    role: "UX Designer II",
    company: "Amazon",
  },
  {
    id: 5,
    quote:
      "I'm grateful I got to work alongside Andrea as both a friend and designer. I admire her talent and energy. I can't wait to see where her journey takes her.",
    name: "Alex Yachi",
    role: "Visual Designer",
    company: "Amazon",
  },
  {
    id: 6,
    quote:
      "From day one, Andrea brought infectious energy and enthusiasm that uplifted the team. Andrea has talent, drive, and a bright future. Our team will always be there to support her.",
    name: "Annie Loye",
    role: "Creative Director",
    company: "Amazon",
  },
  {
    id: 7,
    quote:
      "Working with Andrea was a pleasure. She is not only a great talent but also a terrific human. I admire her positive energy and her bias for action — this combination will take her far.",
    name: "Mark Holthoff",
    role: "Sr. Conversation Designer",
    company: "Amazon",
  },
  {
    id: 8,
    quote:
      "It was a pleasure to work with and learn from Andrea over the summer. Andrea's curiosity, thoughtful approach to design, and vibrant energy inspired the whole team!",
    name: "Lily Rose",
    role: "Creative Director",
    company: "Amazon",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="flex-shrink-0 bg-white rounded-[18px] overflow-hidden border border-[#e8e8e8] flex flex-col"
      style={{ width: 280, boxShadow: "0px 0.89px 20px -21.34px rgba(0,0,0,0.13)" }}
    >
      {/* Quote */}
      <div className="p-6 flex-1">
        <p
          className="text-[15px] text-black leading-[1.6]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t.quote}
        </p>
      </div>
      {/* Author */}
      <div className="bg-[#f5f5f5] px-6 py-4">
        <p
          className="text-[15px] font-semibold text-[#828282]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t.name}
        </p>
        <p
          className="text-[14px] text-[#828282]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {t.role}
          <br />@ {t.company}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-[#fbfbfb] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div
          ref={ref}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

          {/* Pagination dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-2 items-center"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`rounded-full transition-all ${i === 0 ? "w-6 h-2 bg-[#313131]" : "w-2 h-2 bg-[#313131]/30"}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scrolling strip — full width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fbfbfb] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fbfbfb] to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 pb-4"
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`row1-${i}`} t={t} />
          ))}
        </motion.div>

        {/* Row 2 — scrolls right (opposite) */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 pt-4"
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`row2-${i}`} t={doubled[(i + 4) % doubled.length]} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
