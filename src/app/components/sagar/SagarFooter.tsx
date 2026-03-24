import { useRef } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "../../../imports/svg-17p0nvqqsx";

export function SagarFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const contacts = [
    {
      icon: (
        <svg width="20" height="16" viewBox="0 0 22 16.96" fill="none">
          <path d={svgPaths.p2bc43d00} fill="#525252" fillOpacity="0.85" />
        </svg>
      ),
      label: "sagar.sah.design@gmail.com",
      href: "mailto:sagar.sah.design@gmail.com",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d={svgPaths.p3c621200} fill="#525252" fillOpacity="0.85" />
        </svg>
      ),
      label: "+91 74162 92404",
      href: "tel:+917416292404",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="4" cy="4" r="2" stroke="#525252" strokeWidth="1.5" fill="none" />
        </svg>
      ),
      label: "Linkedin",
      href: "https://www.linkedin.com/in/sagar-shah-389980319/",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#525252" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="12" r="4" stroke="#525252" strokeWidth="1.5" fill="none" />
          <circle cx="17.5" cy="6.5" r="1" fill="#525252" />
        </svg>
      ),
      label: "Instagram",
      href: "https://www.instagram.com/sagaruiux.1/",
    },
  ];

  return (
    <footer className="py-10 px-8 bg-[#f7f7f7] border-t border-[#e8e8e8]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
        >
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#e8e8e8] rounded-full"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              {c.icon}
              <span
                className="text-[14px] text-[#525252] font-medium tracking-[-0.4px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {c.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#e8e8e8] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[#8b8b8b]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 Sagar Shah · All rights reserved
          </p>
          <p className="text-[13px] text-[#8b8b8b]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            UI/UX Designer · B.Tech @ JNTUK
          </p>
        </div>
      </div>
    </footer>
  );
}
