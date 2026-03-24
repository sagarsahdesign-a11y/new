import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import svgPaths from "../../imports/svg-mfsbzvon4f";

// Character illustration – directly from Figma SVG paths
function CharacterIllustration() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 208.262 156.997"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="charClip">
          <rect width="208.262" height="156.997" fill="white" />
        </clipPath>
      </defs>
      <g clipPath="url(#charClip)">
        <path d={svgPaths.p2acf0780} fill="white" stroke="#CFCFCF" strokeWidth="2.24282" />
        <path d={svgPaths.p1af1d100} fill="white" />
        <path d={svgPaths.p1af1d100} stroke="black" strokeWidth="3.20402" />
        <path d={svgPaths.p1af1d100} stroke="black" strokeOpacity="0.2" strokeWidth="3.20402" />
        <path d={svgPaths.p20b2c900} fill="black" />
        <path d={svgPaths.p20b2c900} stroke="black" strokeWidth="3.20402" />
        <path d={svgPaths.p20b2c900} stroke="black" strokeOpacity="0.2" strokeWidth="3.20402" />
        <path d={svgPaths.p37d0bc40} fill="#ECECEC" stroke="black" strokeWidth="3.20402" />
        <path d={svgPaths.p3dd96f80} stroke="black" strokeLinecap="square" strokeWidth="3.20402" />
        <path d={svgPaths.p3684be00} stroke="black" strokeLinecap="square" strokeWidth="3.20402" />
        <path d={svgPaths.p172c1700} fill="white" stroke="black" strokeWidth="3.20402" />
        <path d={svgPaths.p1c76b400} fill="black" />
        <path d={svgPaths.p9fa7400} fill="#DBDBDB" stroke="black" strokeWidth="3.20402" />
        <path d={svgPaths.p1af93800} fill="white" />
        <path d={svgPaths.p39992800} stroke="black" strokeLinecap="round" strokeWidth="3.20402" />
        <path d={svgPaths.p13d8d400} fill="#D1D1D1" />
        <path d={svgPaths.p367aaa00} fill="#D1D1D1" />
        <path d={svgPaths.p29aa5700} fill="white" stroke="black" strokeLinecap="round" strokeWidth="3.20402" />
      </g>
    </svg>
  );
}

// Star decoration
function StarSvg({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <path d={svgPaths.p273f00} fill="black" stroke="white" strokeWidth="2.34375" />
    </svg>
  );
}

// Command key icon ⌘
function CommandKeyIcon() {
  return (
    <div className="w-[84px] h-[85px] backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.86)] rounded-[14px] border-[3px] border-[#cecece] flex items-center justify-center">
      <svg width="65" height="65" viewBox="0 0 103 103" fill="none">
        <defs>
          <clipPath id="cmdClip">
            <rect width="103" height="103" fill="white" />
          </clipPath>
        </defs>
        <g clipPath="url(#cmdClip)">
          <path d={svgPaths.pb2ab400} fill="#313131" />
          <path d={svgPaths.pb2ab400} stroke="white" strokeMiterlimit="10" strokeWidth="5" />
          <path d={svgPaths.p3e409c00} fill="white" />
        </g>
      </svg>
      <div
        className="absolute text-[40px] text-black font-semibold tracking-[-1.6px]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
      </div>
    </div>
  );
}

// Mouse cursor icon
function MouseCursor() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-[34px] h-[34px]">
        <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
          <defs>
            <clipPath id="mouseClip">
              <rect width="38" height="38" fill="white" />
            </clipPath>
          </defs>
          <g clipPath="url(#mouseClip)">
            <path
              d={svgPaths.p5edfe80}
              fill="#4A77FF"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5.05857"
            />
          </g>
        </svg>
      </div>
      <div className="bg-[#4a77ff] rounded-[20px] px-4 py-1.5">
        <span
          className="text-white text-[17px] font-semibold tracking-[-0.38px]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Andrea
        </span>
      </div>
    </div>
  );
}

// Phone mockup (dark grid phone)
function PhoneMockup() {
  return (
    <div className="w-[90px] h-[150px] bg-[#313131] rounded-[10px] overflow-hidden p-2">
      <div className="grid grid-cols-2 gap-1 h-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-[4px] bg-[rgba(255,255,255,0.15)]" />
        ))}
      </div>
    </div>
  );
}

// Z icon (Figma-like)
function ZIcon() {
  return (
    <div className="w-[80px] h-[80px] bg-[rgba(255,255,255,0.86)] backdrop-blur-[1.5px] rounded-[12px] border-[3px] border-[#cecece] flex items-center justify-center rotate-7">
      <span
        className="text-[38px] text-black font-semibold"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Z
      </span>
    </div>
  );
}

// Floating animation helper
const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen bg-[#fbfbfb] flex items-center overflow-hidden pt-[72px]"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fbfbfb] via-[#f7f8fc] to-[#fbfbfb] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="w-full max-w-[1400px] mx-auto px-8 pt-12 pb-20"
      >
        {/* Scroll progress bar */}
        <motion.div
          className="fixed top-0 left-0 h-[3px] bg-[#0151fe] z-[100] origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative"
        >
          {/* Top row: character + text + phone */}
          <div className="flex items-center justify-between gap-4 min-h-[400px]">
            {/* LEFT: Character illustration */}
            <motion.div
              variants={fadeUp}
              className="relative flex-shrink-0 hidden lg:block"
            >
              <motion.div
                variants={floatVariant}
                animate="animate"
                initial="initial"
                className="w-[280px] h-[210px] rotate-1"
              >
                <CharacterIllustration />
              </motion.div>

              {/* Command icon below character */}
              <motion.div
                variants={fadeUp}
                className="absolute -bottom-12 left-8"
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <CommandKeyIcon />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* CENTER: Main heading text */}
            <div className="flex-1 text-center px-4 lg:px-8">
              {/* Stars */}
              <motion.div variants={fadeUp} className="flex justify-center gap-32 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <StarSvg size={20} />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
                >
                  <StarSvg size={16} />
                </motion.div>
              </motion.div>

              {/* Main heading */}
              <motion.div variants={staggerContainer} className="relative">
                {["All about people,", "growth, fun and"].map((line, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-[clamp(36px,5vw,55px)] text-black leading-[1.04] tracking-[-2.2px] whitespace-nowrap"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontVariationSettings: "'opsz' 9" }}
                  >
                    {line}
                  </motion.p>
                ))}

                {/* "beauty." with blue highlight box */}
                <motion.div
                  variants={fadeUp}
                  className="relative inline-block mt-1"
                >
                  {/* Blue selection rectangle */}
                  <div className="absolute inset-[-4px_-12px_-4px_-8px] bg-[#c1dcfa] border-[3px] border-[#0151fe] -z-10 rounded-sm" />
                  {/* Corner resize handles */}
                  <div className="absolute -left-[4px] -top-[4px] w-2 h-2 bg-white border-[3px] border-[#0151fe]" />
                  <div className="absolute -right-[4px] -top-[4px] w-2 h-2 bg-white border-[3px] border-[#0151fe]" />
                  <div className="absolute -left-[4px] -bottom-[4px] w-2 h-2 bg-white border-[3px] border-[#0151fe]" />
                  <div className="absolute -right-[4px] -bottom-[4px] w-2 h-2 bg-white border-[3px] border-[#0151fe]" />
                  <p
                    className="text-[clamp(36px,5vw,55px)] text-black leading-[1.04] tracking-[-2.2px] italic"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontVariationSettings: "'opsz' 9" }}
                  >
                    beauty.
                  </p>
                </motion.div>
              </motion.div>

              {/* UX Design Portfolio pill / search bar */}
              <motion.div
                variants={fadeUp}
                className="mt-10 inline-flex items-center border border-[#d0d0d0] rounded-full px-5 py-2.5 bg-white"
              >
                <span
                  className="text-[16px] text-[#6e6e6e] tracking-[-0.36px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  UX Design Portfolio
                </span>
              </motion.div>

              {/* Mouse cursor icon */}
              <motion.div
                variants={fadeUp}
                className="mt-6 flex justify-end mr-8"
              >
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <MouseCursor />
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT: Phone mockup + Z icon */}
            <motion.div
              variants={fadeUp}
              className="relative flex-shrink-0 hidden lg:flex flex-col items-center gap-6"
            >
              <motion.div
                variants={floatVariant}
                animate="animate"
                initial="initial"
                style={{ animationDelay: "0.5s" }}
              >
                <PhoneMockup />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <ZIcon />
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-[#8b8b8b] cursor-pointer"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span
                className="text-[13px] tracking-[0.05em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                scroll
              </span>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
                <rect x="1" y="1" width="14" height="20" rx="7" stroke="#8b8b8b" strokeWidth="1.5" />
                <motion.rect
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  x="7" y="4" width="2" height="5" rx="1"
                  fill="#8b8b8b"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
