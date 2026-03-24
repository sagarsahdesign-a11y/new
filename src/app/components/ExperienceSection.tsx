import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Company logos
import imgLogoFigma from "figma:asset/4712c9125d9d13db9b9289cf2020ce7b6e016560.png";
import imgLogoOshkosh from "figma:asset/9236c2d6a034f212af7d6ffc05b73f453d70894c.png";
import imgLogoBMW from "figma:asset/01c7e2f59e2d2680989a0771941f48121069f41e.png";
import imgLogoAmazon from "figma:asset/b92a68308a31e9eee1752213d02035a38319fa46.png";
// Amazon case study image
import imgCaseStudy from "figma:asset/18c5cec33425add558dfbb8c16d57564f953de5e.png";
// Portfolio work photos
import imgWork1 from "figma:asset/ad854c242a61ae849a8a7a8de39307b07a39aa20.png";
import imgWork2 from "figma:asset/4bd75fe7ae820ef20dd6d377eb72da0d8e14b6fd.png";
import imgWork3 from "figma:asset/012972d5c6bc9d5a2361fdea784a00c6bf5ddfc9.png";
import imgWork4 from "figma:asset/b6254da6e2e690988c982164ca7194b24eb2ffac.png";
import imgWork5 from "figma:asset/efcf8d3ccabff3d07e55a45c966ffea5cbf49f4c.png";

const workPhotos = [imgWork1, imgWork2, imgWork3, imgWork4, imgWork5, imgWork1, imgWork2, imgWork3, imgWork4, imgWork5];

const smallCards = [
  {
    id: "figma",
    title: "Ambassador",
    company: "Figma",
    logo: imgLogoFigma,
    bg: "#f7f7f7",
  },
  {
    id: "oshkosh",
    title: "UX Design",
    company: "Oshkosh",
    logo: imgLogoOshkosh,
    bg: "#f7f7f7",
  },
  {
    id: "bmw",
    title: "UX Design",
    company: "BMW",
    logo: imgLogoBMW,
    bg: "#f7f7f7",
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="py-24 px-8 bg-[#fbfbfb]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div ref={ref} className="flex items-start justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-[32px] text-black tracking-[-1.28px]"
              style={{ fontFamily: "'DM Sans', sans-serif", fontVariationSettings: "'opsz' 14" }}
            >
              Recent Experience
            </h2>
            <p
              className="text-[18px] text-[#8b8b8b] tracking-[-0.72px] mt-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Little big steps
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#313131] text-white rounded-full px-6 py-3 text-[16px] font-medium tracking-[-0.3px] self-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            See All
          </motion.button>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Amazon big card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 rounded-[26px] overflow-hidden bg-[#fe6301] relative"
            style={{ minHeight: 360 }}
          >
            {/* Header */}
            <div className="p-7 pb-0">
              <div className="mb-4">
                <p
                  className="text-white text-[18px] font-bold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  UX Design Intern
                </p>
                <p
                  className="text-white/80 text-[16px] tracking-[-0.64px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  @ Amazon Rufus AI
                </p>
              </div>
              <div className="inline-flex bg-white/20 rounded-full px-4 py-1.5">
                <span
                  className="text-white text-[14px] font-medium tracking-[-0.56px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Summer 2025
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="px-7 pt-5 pb-0">
              <p
                className="text-white/80 text-[14px] leading-[1.7]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Designed AI-powered elements for Amazon Shopping by aligning visual design, user insights,
                and LLM capabilities into cohesive, scalable tools across the app.
              </p>
              <p
                className="text-white/80 text-[14px] leading-[1.7] mt-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Led motion interactions, information layouts, and architecture flows.
              </p>
            </div>

            {/* Photo strip */}
            <div className="relative h-[120px] mt-5 overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-2 absolute top-0 left-0 h-full"
                style={{ width: "max-content" }}
              >
                {workPhotos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    className="h-full w-[140px] object-cover rounded-[8px] flex-shrink-0"
                    alt=""
                  />
                ))}
              </motion.div>
            </div>

            {/* Amazon logo */}
            <div className="absolute top-6 right-6">
              <img src={imgLogoAmazon} className="w-[60px] h-[60px] object-contain" alt="Amazon" />
            </div>

            {/* Case study badge */}
            <motion.div
              animate={{ rotate: [15, 12, 15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-6 bg-black rounded-[16px] overflow-hidden shadow-xl"
              style={{ width: 110, height: 140 }}
            >
              <img src={imgCaseStudy} className="w-full h-full object-cover" alt="Case study" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-2 px-3">
                <p className="text-white text-[9px] font-medium text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Intern Case Study
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Small cards column */}
          <div className="flex flex-col gap-5">
            {smallCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex-1 rounded-[22px] overflow-hidden relative flex flex-col justify-between p-6"
                style={{ background: card.bg, minHeight: 100 }}
              >
                <div>
                  <p
                    className="text-[15px] font-bold text-[#999]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[13px] text-[#999] tracking-[-0.56px]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    @ {card.company}
                  </p>
                </div>
                <img
                  src={card.logo}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-[42px] h-[42px] object-contain"
                  alt={card.company}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
