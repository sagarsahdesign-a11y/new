import { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgSagarPhoto from "figma:asset/67194e1bcf056a5eff239b9c81607727e39a13de.png";
import imgLinkedInCard from "figma:asset/0033c2d4b781252e9c7ee89e0c761ca306759329.png";
import svgPaths from "../../../imports/svg-17p0nvqqsx";

// Dark phone mockup with Sagar's LinkedIn card
function PhoneMockup() {
  return (
    <div
      className="relative rounded-[33px] overflow-hidden shadow-[0_10px_58px_rgba(94,94,94,0.17)]"
      style={{ width: 280, height: 420, background: "#f7f7f7", border: "1px solid #e8e8e8" }}
    >
      {/* LinkedIn-style card image */}
      <div className="absolute inset-[10px_10px_80px_10px] rounded-[26px] overflow-hidden">
        <img src={imgLinkedInCard} className="w-full h-full object-cover rounded-[26px]" alt="LinkedIn" />
        {/* Siuuu annotation */}
        <div
          className="absolute top-6 right-8 -rotate-3 text-white font-bold text-[16px]"
          style={{ fontFamily: "'Caveat', cursive", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
        >
          Siuuu
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-3 flex items-center justify-between rounded-b-[33px]">
        <div className="flex items-center gap-3">
          <img src={imgSagarPhoto} className="w-9 h-9 rounded-[8px] object-cover" alt="" />
          <div>
            <p className="text-[13px] font-medium text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              @Sagar Shah
            </p>
            <p className="text-[12px] text-[#787878]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Linkedin
            </p>
          </div>
        </div>
        <a
          href="https://linkedin.com/in/sagar-shah"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-[12px] px-3 py-1.5 text-[12px] font-medium flex items-center gap-1"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
            <path d={svgPaths.p19ebc180} fill="white" />
          </svg>
          Connect
        </a>
      </div>
    </div>
  );
}

export function SagarAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 px-8 bg-[#f7f7f7] border-t border-[#e8e8e8]">
      <div className="max-w-[1400px] mx-auto">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>

          {/* RIGHT: Text + buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex-1"
          >
            {/* Small indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#fe6301]" />
              <span
                className="text-[14px] text-[#8b8b8b] tracking-[-0.3px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                About me
              </span>
            </div>

            {/* Main text */}
            <p
              className="text-[clamp(22px,3vw,32px)] text-black tracking-[-1.2px] leading-[1.3] mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", fontVariationSettings: "'opsz' 9" }}
            >
              I am Sagar, a UI/UX Designer who codes, thinks in systems, and designs things people actually enjoy using.
            </p>

            {/* Sub text */}
            <p
              className="text-[16px] text-[#8b8b8b] leading-[1.7] mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              B.Tech student at JNTUK, freelance designer, and someone who genuinely gets excited about design systems, micro-interactions, and shipping things that work in the real world — not just in Figma.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#fe6301] text-white rounded-full px-7 py-3 text-[15px] font-medium tracking-[-0.3px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {/* Download icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-white border border-[#d0d0d0] text-black rounded-full px-7 py-3 text-[15px] font-medium tracking-[-0.3px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                About Me
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#313131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
