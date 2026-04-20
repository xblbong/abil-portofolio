"use client";

import { useEffect } from "react";

/**
 * MouseGlow
 * Sets --x / --y CSS variables on <html> for the dark-mode radial glow in globals.css.
 * Uses passive event listener + requestAnimationFrame for smooth, non-blocking updates.
 */
export default function MouseGlow() {
  useEffect(() => {
    let rafId: number;

    const move = (e: MouseEvent) => {
      // Cancel any pending frame — only apply the latest position
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
