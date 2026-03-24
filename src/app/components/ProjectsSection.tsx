import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

// Cheers project assets
import imgBackgroundXcuMdBtnY7I9FItg9PeIPjTmw4Png from "figma:asset/845c13492368db496bb2a75bcedbb2e05134f0a8.png";
import imgImage3B9TAjpAYcHkJin4HsqcWUtGegPng from "figma:asset/79573ae9e98852f0503dd9704bf9fae7f19562fd.png";
import imgImage2K6So7KTcZino3RTsQkYwQkj0SbIPng from "figma:asset/e8bfc3bc7614338cb498d981a9fef2015f28d49e.png";
import imgImage1TFcr98Q55Lblk09UQz8M2YXaiD4Png from "figma:asset/4a9cb22691ece11105e62799b0bbb5c4d302a93a.png";

// Dream Line project assets
import imgBackgroundCbGoZ9MPvp3B7U1VxPgq2EwVKrcPng from "figma:asset/09191613b3d8b81e3e5a95e0755937866aae28cc.png";
import imgImage3BBwlsz5C8SAprXzq5IdqUxGa9MPng from "figma:asset/46fefed669cf3eb23c702182ca711650c13b3588.png";
import imgImage20TsKkeVbpExGzvrVlj3F6XiMiPng from "figma:asset/3c9dad2207e2d5b75bd46db49fbc1432ea081f08.png";
import imgImage1Z0KL2QCkGbD2SmcGr29A0F1UVtkPng from "figma:asset/7fa1ee64d0e1f4dc989e5d47803a8fb271f9d50d.png";

// Torus project assets
import imgBackgroundHlUFkSoRzs7Ao66JriVpiiHvFdIPng from "figma:asset/1de46150cfc2ea5b7dfb98f725360b6e3aa45cc5.png";
import imgImage39BZlV1Bu7RWzL2Ci38SGckY8DkPng from "figma:asset/00b6dec59285ff3053c477a9239e6741e78718c0.png";
import imgImage2CSkf61WUwSqBs2FCzzIaxNaQ8YcPng from "figma:asset/f29aabe7e51253dac11c192c22993334a24b102a.png";
import imgImage1XQsa1DmXaNawmvfGDoDnLglu4ZkPng from "figma:asset/62c397b1be5011aebbca1886bdc71fb27440f90c.png";

interface Project {
  id: string;
  title: string;
  duration: string;
  season: string;
  description: string;
  role: string;
  bg: string;
  phones: [string, string, string];
  color: string;
}

const projects: Project[] = [
  {
    id: "cheers",
    title: "Cheers",
    duration: "10 Weeks",
    season: "Spring 2024",
    description:
      "Empathetic payment system redefining tipping through transparent, autonomous, and private guest experiences.",
    role: "UX and Interaction Designer",
    bg: imgBackgroundXcuMdBtnY7I9FItg9PeIPjTmw4Png,
    phones: [
      imgImage3B9TAjpAYcHkJin4HsqcWUtGegPng,
      imgImage2K6So7KTcZino3RTsQkYwQkj0SbIPng,
      imgImage1TFcr98Q55Lblk09UQz8M2YXaiD4Png,
    ],
    color: "#e8f2ff",
  },
  {
    id: "dreamline",
    title: "Dream Line",
    duration: "10 Weeks",
    season: "Spring 2025",
    description:
      "Immersive, autonomous pod designed to enhance mobility, comfort, and planning for families at theme parks.",
    role: "UX and Interaction Designer",
    bg: imgBackgroundCbGoZ9MPvp3B7U1VxPgq2EwVKrcPng,
    phones: [
      imgImage3BBwlsz5C8SAprXzq5IdqUxGa9MPng,
      imgImage20TsKkeVbpExGzvrVlj3F6XiMiPng,
      imgImage1Z0KL2QCkGbD2SmcGr29A0F1UVtkPng,
    ],
    color: "#fff3e8",
  },
  {
    id: "torus",
    title: "Torus",
    duration: "10 Weeks",
    season: "Winter 2025",
    description:
      "AI-powered wildfire detection system to immediately notify fires or sparking lines to prevent disasters.",
    role: "UX and Interaction Designer",
    bg: imgBackgroundHlUFkSoRzs7Ao66JriVpiiHvFdIPng,
    phones: [
      imgImage39BZlV1Bu7RWzL2Ci38SGckY8DkPng,
      imgImage2CSkf61WUwSqBs2FCzzIaxNaQ8YcPng,
      imgImage1XQsa1DmXaNawmvfGDoDnLglu4ZkPng,
    ],
    color: "#e8f5ef",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-white rounded-[26px] overflow-hidden cursor-pointer flex-1 min-w-0"
      style={{ boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.12)" : "0 4px 20px rgba(0,0,0,0.06)" }}
    >
      <motion.div
        animate={{ scale: hovered ? 1.02 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image area */}
        <div className="relative h-[300px] overflow-hidden rounded-t-[26px]" style={{ background: project.color }}>
          {/* Background image */}
          <img
            src={project.bg}
            className="absolute inset-0 w-full h-full object-cover rounded-[26px]"
            alt=""
          />

          {/* Stacked phone mockups */}
          <div className="absolute inset-0 flex items-center justify-center">
            {project.phones.map((phone, i) => {
              const rotations = [3, -10, 3];
              const xOffsets = [-45, 0, 45];
              const zIndex = i === 1 ? 3 : i === 0 ? 2 : 1;
              return (
                <motion.div
                  key={i}
                  animate={hovered ? { y: -8, rotate: rotations[i] * 0.7 } : { rotate: rotations[i] }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="absolute"
                  style={{
                    transform: `translateX(${xOffsets[i]}px) rotate(${rotations[i]}deg)`,
                    zIndex,
                  }}
                >
                  <img
                    src={phone}
                    className="w-[100px] h-[200px] object-cover rounded-[12px] shadow-lg border-[3px] border-white"
                    alt=""
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Hover overlay with description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6"
          >
            <div className="text-white">
              <p
                className="text-[15px] leading-[1.5] mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {project.description}
              </p>
              <p
                className="text-[13px] text-white/70"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Role — <span className="text-white font-semibold">{project.role}</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Info area */}
        <div className="p-6 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex gap-3 items-center mb-2">
                <span
                  className="text-[13px] text-black"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.duration}
                </span>
                <span className="text-[#8b8b8b] text-[13px]">·</span>
                <span
                  className="text-[13px] text-[#8b8b8b]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.season}
                </span>
              </div>
              <h3
                className="text-[28px] text-black tracking-[-1.1px]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontVariationSettings: "'opsz' 14" }}
              >
                {project.title}
              </h3>
            </div>

            {/* Arrow icon */}
            <motion.div
              animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#313131" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-8 bg-[#fbfbfb]">
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
              Featured Projects
            </h2>
            <p
              className="text-[18px] text-[#8b8b8b] tracking-[-0.72px] mt-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Blood, sweat, and tears were sacrificed
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

        {/* Project cards */}
        <div className="flex flex-col lg:flex-row gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
