"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

interface Skill {
  label: string;
  value: number;
  color: string;
}

interface ProfileCardProps {
  imageUrl?: string;
  name: string;
  tagline: string;
  skills: Skill[];
}

export default function ProfileCard3D({ imageUrl, name, tagline, skills }: ProfileCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  const isDark = mounted ? resolvedTheme === "dark" : true;

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1.2 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="relative w-72 h-[430px] md:w-80 md:h-[490px] rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center overflow-hidden"
        style={{
          rotateX,
          rotateY,
          background: isDark
            ? "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(124,58,237,0.04) 100%)"
            : "linear-gradient(155deg, #5b21b6 0%, #7c3aed 42%, #8b5cf6 78%, #a78bfa 100%)",
          border: isDark
            ? "1px solid rgba(139,92,246,0.2)"
            : "1px solid rgba(196,181,253,0.4)",
          boxShadow: isDark
            ? "0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "0 24px 60px rgba(91,33,182,0.5), 0 8px 24px rgba(139,92,246,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
          backdropFilter: isDark ? "blur(24px)" : "none",
        }}
      >
        {/* Hover shimmer overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"
          style={{
            background: isDark
              ? "radial-gradient(circle at 75% 20%, rgba(176,111,236,0.14), transparent 55%)"
              : "radial-gradient(circle at 75% 20%, rgba(255,255,255,0.14), transparent 55%)",
          }}
        />

        {/* Top highlight line */}
        <div
          className="absolute inset-x-10 top-0 h-px"
          style={{
            background: isDark
              ? "linear-gradient(90deg, transparent, rgba(196,181,253,0.3), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
          }}
        />

        {/* Avatar */}
        <div className="relative mb-5">
          <div
            className="absolute -inset-2 rounded-full blur-xl opacity-35 group-hover:opacity-65 transition-opacity"
            style={{ background: isDark ? "#9d54e0" : "rgba(255,255,255,0.55)" }}
          />
          <div
            className="relative w-28 h-28 rounded-full p-[3px] transition-transform duration-500 group-hover:scale-105"
            style={{
              background: isDark
                ? "linear-gradient(135deg, #b06fec, #6d28d9)"
                : "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55))",
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{ background: isDark ? "#141020" : "#f5eeff" }}
            >
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Name + Tagline */}
        <div className="relative z-10 w-full">
          <h3
            className="text-xl font-bold mb-1.5 tracking-tight"
            style={{ color: isDark ? "#f3f2ff" : "#ffffff" }}
          >
            {name}
          </h3>
          <p
            className="italic text-xs leading-relaxed mb-7 px-1"
            style={{ color: isDark ? "rgba(196,181,253,0.68)" : "rgba(255,255,255,0.8)" }}
          >
            {tagline}
          </p>

          {/* Skill bars */}
          <div className="w-full space-y-3.5 text-left">
            {skills.map((skill, index) => (
              <div key={skill.label} className="w-full">
                <div
                  className="flex justify-between text-[9px] uppercase tracking-[0.18em] mb-1 font-bold"
                  style={{ color: isDark ? "rgba(255,255,255,0.43)" : "rgba(255,255,255,0.75)" }}
                >
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div
                  className="h-1 w-full rounded-full overflow-hidden"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.2)",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.4, delay: index * 0.18, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: isDark
                        ? `linear-gradient(90deg, ${skill.color}, ${skill.color}bb)`
                        : "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,255,255,0.65))",
                      boxShadow: isDark
                        ? `0 0 8px ${skill.color}70`
                        : "0 0 6px rgba(255,255,255,0.55)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating badge — Star */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-6 right-5 w-9 h-9 rounded-2xl flex items-center justify-center"
          style={{
            background: isDark ? "rgba(139,92,246,0.22)" : "rgba(255,255,255,0.2)",
            border: isDark ? "1px solid rgba(196,181,253,0.18)" : "1px solid rgba(255,255,255,0.38)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24"
            fill={isDark ? "none" : "rgba(255,255,255,0.85)"}
            stroke={isDark ? "#c4b5fd" : "rgba(255,255,255,0.95)"}
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </motion.div>

        {/* Floating badge — Zap */}
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-6 left-5 w-8 h-8 rounded-xl flex items-center justify-center"
          style={{
            background: isDark ? "rgba(139,92,246,0.22)" : "rgba(255,255,255,0.2)",
            border: isDark ? "1px solid rgba(196,181,253,0.18)" : "1px solid rgba(255,255,255,0.38)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24"
            fill={isDark ? "none" : "rgba(255,255,255,0.85)"}
            stroke={isDark ? "#c4b5fd" : "rgba(255,255,255,0.95)"}
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}