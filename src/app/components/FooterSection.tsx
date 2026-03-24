import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "../../imports/svg-mfsbzvon4f";

// LinkedIn card assets
import imgFrame29KpCvw2NWzw7WqnfO9NjDvCdBboPng from "figma:asset/767cc9fe78b28d4b7a2f0b8240e796c8a7999346.png";
import imgFrame29 from "figma:asset/1ae0073a255b17da6f7c81c3fb7abd4489fca916.png";
import imgProfilePhoto from "figma:asset/d604c8a8d23af8137f3d6b265a23d821c503aadd.png";

// Large character illustration for footer
function FooterCharacter() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 951.004 1468.36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d={svgPaths.p2e218ec0} fill="white" />
        <path d={svgPaths.p19842500} fill="black" />
        <path d={svgPaths.p2b258100} fill="#666666" stroke="black" strokeMiterlimit="10" strokeWidth="17.9973" />
        <path d={svgPaths.p69bdb00} fill="black" />
        <path d={svgPaths.p30147f00} fill="white" stroke="black" strokeMiterlimit="10" strokeWidth="17.9973" />
        <path d={svgPaths.p233ae400} fill="#ECECEC" stroke="black" strokeMiterlimit="10" strokeWidth="17.9973" />
        <path d={svgPaths.p59780} fill="#D1D1D1" />
        <path d={svgPaths.p22c6b840} fill="white" stroke="black" strokeMiterlimit="10" strokeWidth="17.9973" />
        <path d={svgPaths.p15ea5040} stroke="black" strokeMiterlimit="10" strokeWidth="17.9973" />
        <path d={svgPaths.pab35bc0} stroke="black" strokeMiterlimit="10" strokeWidth="17.9973" />
        <path d={svgPaths.p25e7a380} fill="black" />
        <path d={svgPaths.p489700} stroke="black" strokeMiterlimit="10" strokeWidth="0.999847" />
        <path d={svgPaths.p248661c8} stroke="black" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="17.9973" />
        <path d={svgPaths.p3f9d24f0} fill="white" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="14.9977" />
        <path d={svgPaths.p5960040} fill="black" />
        <path d={svgPaths.p14330400} fill="black" />
      </g>
    </svg>
  );
}

// Flip card component (LinkedIn card)
function LinkedInCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer relative"
      style={{ width: 270, height: 420, perspective: 1000 }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-[28px] overflow-hidden shadow-[0px_10.43px_58px_0px_rgba(94,94,94,0.17)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={imgFrame29KpCvw2NWzw7WqnfO9NjDvCdBboPng}
            className="w-full h-[75%] object-cover"
            alt="LinkedIn"
          />
          {/* Bottom section */}
          <div className="p-4">
            <div className="flex items-center gap-3">
              <img src={imgProfilePhoto} className="w-9 h-9 rounded-[8px] object-cover" alt="Profile" />
              <div>
                <p className="text-[13px] font-medium text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  @andreaa-das
                </p>
                <p className="text-[12px] text-[#787878]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Linkedin
                </p>
              </div>
              <a
                href="https://linkedin.com/in/andreaa-das"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="ml-auto bg-black text-white rounded-[12px] px-3 py-1.5 text-[12px] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Connect
              </a>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-white rounded-[28px] overflow-hidden shadow-[0px_10.43px_58px_0px_rgba(94,94,94,0.17)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <img
            src={imgFrame29}
            className="w-full h-[75%] object-cover"
            alt="Instagram"
          />
          <div className="p-4">
            <div className="flex items-center gap-3">
              <img src={imgProfilePhoto} className="w-9 h-9 rounded-[8px] object-cover" alt="Profile" />
              <div>
                <p className="text-[13px] font-medium text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  @andreaa-das
                </p>
                <p className="text-[12px] text-[#787878]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Instagram
                </p>
              </div>
              <a
                href="https://instagram.com/andreaa-das"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="ml-auto bg-black text-white rounded-[12px] px-3 py-1.5 text-[12px] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Follow
              </a>
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-black/50 text-white text-[10px] rounded-full px-2 py-0.5">
            Tap to flip back
          </div>
        </div>
      </motion.div>
      {/* Flip hint */}
      {!flipped && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-[12px] text-[#8b8b8b] whitespace-nowrap"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Tap to see Instagram ↩
        </motion.div>
      )}
    </div>
  );
}

export function FooterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="footer" className="bg-[#fbfbfb] pt-24 pb-12 px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Main footer content */}
        <div ref={ref} className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-20">
          {/* Left: LinkedIn flip card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Background character illustration */}
            <div className="absolute -left-16 -top-20 w-[200px] h-[300px] opacity-20 pointer-events-none">
              <FooterCharacter />
            </div>
            <LinkedInCard />
          </motion.div>

          {/* Right: About text + contact */}
          <div className="flex-1">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="mb-10"
            >
              <p
                className="text-[clamp(24px,3.5vw,38px)] text-black tracking-[-1.44px] leading-[1.2]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontVariationSettings: "'opsz' 9" }}
              >
                I am Andrea, UX Design
                <br />
                student at SCAD with minors
                <br />
                in Graphic and Industrial Design
              </p>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 mb-5"
            >
              {/* Email */}
              <motion.a
                href="mailto:andreamariadasilva03@gmail.com"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-white border border-[#e8e8e8] rounded-[14px] px-5 py-3 flex-1"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                {/* Email icon */}
                <svg width="20" height="16" viewBox="0 0 22 16.9604" fill="none">
                  <path
                    d={svgPaths.p2bc43d00}
                    fill="#525252"
                    fillOpacity="0.85"
                  />
                </svg>
                <span
                  className="text-[15px] text-[#525252] font-medium tracking-[-0.5px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  andreamariadasilva03@gmail.com
                </span>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+15154106311"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-white border border-[#e8e8e8] rounded-[14px] px-5 py-3"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                {/* Phone icon */}
                <svg width="18" height="18" viewBox="0 0 20 19.9278" fill="none">
                  <path d={svgPaths.p3c621200} fill="#525252" fillOpacity="0.85" />
                </svg>
                <span
                  className="text-[15px] text-[#525252] font-medium tracking-[-0.5px] whitespace-nowrap"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  +1 515 410 6311
                </span>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="flex gap-3"
            >
              <motion.a
                href="https://linkedin.com/in/andreaa-das"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center bg-white border border-[#e8e8e8] rounded-[14px] px-6 py-3 gap-2"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="4" cy="4" r="2" stroke="#525252" strokeWidth="1.5" fill="none" />
                </svg>
                <span
                  className="text-[15px] text-[#525252] font-medium tracking-[-0.5px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Linkedin
                </span>
              </motion.a>

              <motion.a
                href="https://instagram.com/andreaa-das"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center bg-white border border-[#e8e8e8] rounded-[14px] px-6 py-3 gap-2"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#525252" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="12" r="4" stroke="#525252" strokeWidth="1.5" fill="none" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#525252" />
                </svg>
                <span
                  className="text-[15px] text-[#525252] font-medium tracking-[-0.5px]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Instagram
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-[#e8e8e8] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="text-[14px] text-[#8b8b8b]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2025 Andrea da Silva · All rights reserved
          </p>
          <p
            className="text-[14px] text-[#8b8b8b]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            UX Design Portfolio · SCAD
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
