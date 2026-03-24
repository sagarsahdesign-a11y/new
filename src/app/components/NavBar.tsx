import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import imgABiYsEguZo5YHaipyp42KL1ZoRiPng from "figma:asset/92aa6d265148f4813d771992ee22acab3f0fce3e.png";
import imgEkydKjyY1HUj4GEcz9SSodDoGoPng from "figma:asset/29b2e23130e4590be91d014703246c1ef24e6b17.png";
import imgTeTa5Yhtf8L8E7D8Gfcf5ImpZbwPng from "figma:asset/22ade8d2b73f58a2f49eeb946960b9458f8b0a98.png";
import imgNOa3VNwrUmQgAjToJSg4BtVWtMkPng from "figma:asset/567ac253bc83d841a8adec89c72ee783c3fc9803.png";
import imgImageBcZwdi3XbT28XktzuCqBdnyFmoPng from "figma:asset/1fbcfeb6c960eba6c55d01acecee11a278bc09f0.png";
import imgImageECs1XEPbHGayUYs5CCkf6Kk14UPng from "figma:asset/2ab8dd69ceedc3c3f61b6274d73022f70de9c602.png";
import imgImageAxL2SUpH1FPDtHeCwke8Lox1WnIPng from "figma:asset/bb5eef39212ed007cdcc41bac8fd4f0e9c522973.png";
import imgImage6UvkAvt2CobTSnxQwMjgQrtxAkPng from "figma:asset/026ff38b1f3abf38d6358a7002c46ba6d5e86737.png";
import svgPaths from "../../imports/svg-mfsbzvon4f";

const navSections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Reviews" },
  { id: "footer", label: "Contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0 bg-[rgba(251,251,251,0.85)] backdrop-blur-[12px]"
        style={{ opacity: bgOpacity }}
      />
      <div
        className={`relative transition-all duration-300 ${scrolled ? "border-b border-[#e8e8e8]" : ""}`}
      >
        <div className="max-w-[1400px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo + Name */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            {/* Small arrow/play logo */}
            <div className="w-5 h-5">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <path d={svgPaths.p3e3e000} fill="#313131" />
              </svg>
            </div>
            <div className="leading-none">
              <div
                className="text-[17px] font-semibold text-black tracking-[-0.5px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                andrea
              </div>
              <div
                className="text-[17px] font-semibold text-black tracking-[-0.5px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                da silva
              </div>
            </div>
          </button>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="px-4 py-2 rounded-full text-[15px] font-medium text-[#6e6e6e] hover:text-black hover:bg-[rgba(0,0,0,0.05)] transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Right CTA group */}
          <div className="hidden md:flex items-center gap-3">
            {/* Resume button with stacked photos */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-2 bg-white border border-[#d0d0d0] rounded-full px-4 h-[44px] overflow-hidden"
            >
              {/* Stacked tiny avatars */}
              <div className="flex -space-x-2 mr-1">
                {[
                  imgImageBcZwdi3XbT28XktzuCqBdnyFmoPng,
                  imgImageECs1XEPbHGayUYs5CCkf6Kk14UPng,
                  imgImageAxL2SUpH1FPDtHeCwke8Lox1WnIPng,
                  imgImage6UvkAvt2CobTSnxQwMjgQrtxAkPng,
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-6 h-6 rounded-full border border-white object-cover"
                    alt=""
                  />
                ))}
              </div>
              <span
                className="text-[15px] font-medium text-black tracking-[-0.3px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Resume
              </span>
            </motion.button>

            {/* Let's Talk CTA */}
            <motion.a
              href="mailto:andreamariadasilva03@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center bg-[#313131] text-white rounded-full px-5 h-[44px] text-[15px] font-medium tracking-[-0.3px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Let's Talk!
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-5 flex flex-col gap-1">
              <span
                className={`block h-0.5 bg-black transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block h-0.5 bg-black transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-black transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e8e8e8] py-4 px-6 flex flex-col gap-2"
          >
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left py-2 text-[16px] font-medium text-black"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.label}
              </button>
            ))}
            <a
              href="mailto:andreamariadasilva03@gmail.com"
              className="mt-2 text-center bg-[#313131] text-white rounded-full py-3 text-[15px] font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Let's Talk!
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
