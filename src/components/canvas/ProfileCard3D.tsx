"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
  // 3D Tilt Logic khusus untuk Card ini
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1.2 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative group cursor-pointer"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-72 h-[420px] md:w-80 md:h-[480px] 
                   bg-gradient-to-br from-white/15 to-white/5 
                   backdrop-blur-2xl border border-white/20 
                   rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                   flex flex-col items-center justify-center p-8 text-center 
                   overflow-hidden
                   hover:border-[#b06fec]/50"
      >
        {/* Efek Cahaya Mengalir (Glow Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#b06fec]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Lingkaran Avatar dengan Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#b06fec] blur-2xl opacity-20 group-hover:opacity-50 transition-opacity" />
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-[#b06fec] to-purple-500 p-1 transition-transform duration-500 group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-[#1a1a1a] overflow-hidden border-2 border-white/10 relative">
              <img
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-purple-900/10 group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight
    transition-all duration-300 hover:text-3xl
    group-hover:[text-shadow:
      0_0_8px_rgba(176,111,236,0.9),
      0_0_18px_rgba(176,111,236,0.6)
    ]">
            {name}
          </h3>
          <p className="text-purple-200/70 italic text-sm mb-8 leading-relaxed">
            {tagline}
          </p>

          {/* Skill Bars */}
          <div className="w-full space-y-4 text-left">
            {skills.map((skill, index) => (
              <div key={skill.label} className="w-full">
                <div className="flex justify-between text-[10px] capitalize tracking-widest text-white/50 mb-1.5 font-bold">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    style={{ backgroundColor: skill.color }}
                    className="h-full shadow-[0_0_10px_rgba(176,111,236,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Decoration Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-7 right-6 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg"
        >
          <span className="text-xl">✨</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute bottom-5 left-4 w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center shadow-lg"
        >
          <span className="text-sm">🚀</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}