"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-[color:var(--accent-cream)] via-[color:var(--accent-sand)] to-[color:var(--accent-coffee)]"
      style={{ scaleX }}
    />
  );
}

