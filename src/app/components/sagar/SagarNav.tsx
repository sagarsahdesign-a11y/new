import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function SagarNav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Scroll progress */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-[#fe6301] z-50 origin-left"
        style={{ scaleX: progressScaleX, width: "100%" }}
      />

      <motion.div
        className={`absolute inset-0 bg-[rgba(247,247,247,0.92)] backdrop-blur-[12px] transition-all duration-300 ${scrolled ? "shadow-[0_1px_0_#e8e8e8]" : ""}`}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 h-[56px] flex items-center justify-between">
        {/* Logo — sagar shah */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex flex-col leading-tight hover:opacity-70 transition-opacity"
        >
          <span
            className="text-[15px] font-bold text-black tracking-[-0.5px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            sagar
          </span>
          <span
            className="text-[15px] font-bold text-black tracking-[-0.5px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            shah
          </span>
        </button>

        {/* Right — Figma icon + Resume pill + Let's Talk pill */}
        <div className="flex items-center gap-2.5">
          {/* Figma colorful icon */}
          <div className="w-[38px] h-[38px] flex items-center justify-center">
            <svg width="22" height="32" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5a9.5 9.5 0 1 1 0-19h9.5v19H19z" fill="#1ABCFE" />
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
              <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
            </svg>
          </div>

          {/* Resume pill */}
          <motion.a
            href="https://drive.google.com/file/d/14h3tJdt53D2hXQq6d3jlFpNO55HU79yz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white border border-[#d0d0d0] rounded-full px-5 h-[36px] text-[13px] font-medium text-black tracking-[-0.3px] flex items-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Resume
          </motion.a>

          {/* Let's Talk pill */}
          <motion.a
            href="mailto:sagar.sah.design@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#313131] text-white rounded-full px-5 h-[36px] flex items-center text-[13px] font-medium tracking-[-0.3px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Let's Talk!
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
