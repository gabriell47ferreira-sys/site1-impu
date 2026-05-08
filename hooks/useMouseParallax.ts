"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMouseParallax(strength = 12) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.8 });

  useEffect(() => {
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = ((e.clientX - cx) / cx) * strength;
        const dy = ((e.clientY - cy) / cy) * strength;
        rawX.set(dx);
        rawY.set(dy);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [rawX, rawY, strength]);

  return { x, y };
}
