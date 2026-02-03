"use client";
import React, { useRef, useCallback } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  handle: string;
  status?: string;
}

export default function PremiumProfileCard({
  avatarUrl,
  name,
  title,
  handle,
  status = "Available for Work",
}: ProfileCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const updateCardTransform = useCallback((offsetX: number, offsetY: number) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const width = card.clientWidth;
    const height = card.clientHeight;

    const percentX = (offsetX / width) * 100;
    const percentY = (offsetY / height) * 100;

    const rotateX = (percentY - 50) / 6; // Mengurangi intensitas rotasi agar lebih halus
    const rotateY = -(percentX - 50) / 6;

    wrap.style.setProperty("--pointer-x", `${percentX}%`);
    wrap.style.setProperty("--pointer-y", `${percentY}%`);
    wrap.style.setProperty("--rotate-x", `${-rotateX}deg`);
    wrap.style.setProperty("--rotate-y", `${-rotateY}deg`);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    // Nonaktifkan efek 3D pada touch device agar tidak mengganggu scroll
    if (e.pointerType === 'touch') return;
    
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    updateCardTransform(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerLeave = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.setProperty("--rotate-x", `0deg`);
    wrap.style.setProperty("--rotate-y", `0deg`);
  };

  return (
    <div ref={wrapRef} className="pc-card-wrapper w-full perspective-1000">
      <section
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="pc-card relative w-full aspect-[3/4.5] sm:aspect-[3/4.2] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-200 ease-out touch-none"
        style={{
            transform: 'rotateX(var(--rotate-x)) rotateY(var(--rotate-y))',
            transformStyle: 'preserve-3d'
        }}
      >
        {/* Layer 1: Background Base */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Layer 2: Image with Gradient Overlay */}
        <div className="absolute inset-0 z-[1]">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        </div>

        {/* Layer 3: Interactive Shine (CSS Variables) */}
        <div 
            className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
                background: `radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,0.1) 0%, transparent 80%)`
            }}
        />

        {/* Layer 4: Content */}
        <div className="absolute inset-0 z-10 p-6 sm:p-8 flex flex-col justify-end">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/90 font-bold">
              {status}
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">
              {name}
            </h2>
            <p className="text-purple-400 font-medium text-sm sm:text-base">
              {title}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Social Media</span>
              <a 
                href={`https://instagram.com/${handle}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-purple-400 transition-colors font-mono text-sm flex items-center gap-1"
              >
                @{handle}
                <ArrowUpRight size={14} />
              </a>
            </div>
            
            <a 
              href="mailto:sblhh.m@gmail.com"
              className="p-3 sm:p-4 rounded-2xl bg-white text-black hover:bg-purple-500 hover:text-white transition-all duration-300 active:scale-95 shadow-lg shadow-white/5"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}