"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import RecentlyMade from "@/components/RecentlyMade";
import OtherWork from "@/components/OtherWork";
import AboutSection from "@/components/AboutSection";
import BottomDock from "@/components/BottomDock";

export default function Home() {
  const [isCleaned, setIsCleaned] = useState(false);
  const [isDraggable, setIsDraggable] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsCleaned(true);
    }
  }, []);

  return (
    <main>
      <Hero
        ref={heroRef}
        isCleaned={isCleaned}
        isDraggable={isDraggable}
      />
      <RecentlyMade />
      <OtherWork />
      <AboutSection />
      <BottomDock
        isCleaned={isCleaned}
        isDraggable={isDraggable}
        onToggleClean={() => setIsCleaned((v) => !v)}
        onToggleDrag={() => setIsDraggable((v) => !v)}
      />
    </main>
  );
}
