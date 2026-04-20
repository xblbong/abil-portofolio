"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github, ArrowUpRight, Copy, Check, MapPin, Clock, User } from "lucide-react";
import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const WindmillCanvas = dynamic(() => import("../../canvas/WindmolenCanvas"), { ssr: false });


export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const email = "sblhh.m@gmail.com";


  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: "GitHub",    icon: Github,    link: "https://github.com/xblbong", accentColor: isDark ? "rgba(255,255,255,0.9)" : "#1c0838" },
    { name: "LinkedIn",  icon: Linkedin,  link: "https://www.linkedin.com/in/sabilah-mudrikah-41b21b301/", accentColor: "#0a66c2" },
    { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/sblhh.m/", accentColor: "#e1306c" },
  ];

  // Shared card style
  const cardStyle = {
    background: isDark
      ? "rgba(255,255,255,0.025)"
      : "rgba(255,255,255,0.7)",
    border: isDark
      ? "1px solid rgba(139,92,246,0.15)"
      : "1px solid rgba(139,92,246,0.2)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: isDark ? "#050505" : "transparent" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-layer"
        style={{
          background: isDark ? "rgba(124,58,237,0.06)" : "rgba(167,139,250,0.15)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase mb-6"
            style={{
              background: isDark ? "rgba(139,92,246,0.1)" : "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: isDark ? "#a78bfa" : "#7c3aed",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Available for Projects
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-none mb-5"
            style={{ color: "var(--text-1)", letterSpacing: "-0.03em" }}
          >
            Let&apos;s{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: isDark
                  ? "linear-gradient(135deg, #a78bfa, #c4b5fd)"
                  : "linear-gradient(135deg, #7c3aed, #a78bfa)",
              }}
            >
              Connect.
            </span>
          </motion.h2>
          <p
            className="text-base md:text-lg max-w-md mx-auto"
            style={{ color: "var(--text-2)" }}
          >
            Got a project in mind? Let&apos;s build something great together.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* ─ EMAIL CARD (spans 2 cols) ─ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300"
            style={{
              ...cardStyle,
              boxShadow: isDark ? "none" : "0 4px 24px rgba(139,92,246,0.08)",
            }}
          >
            <div className="flex items-start justify-between">
              {/* Mail icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: isDark ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  color: isDark ? "#a78bfa" : "#7c3aed",
                }}
              >
                <Mail size={22} />
              </div>

              {/* Copy button */}
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest transition-all duration-200"
                style={{
                  background: copied
                    ? "rgba(34,197,94,0.12)"
                    : isDark ? "rgba(255,255,255,0.06)" : "rgba(139,92,246,0.08)",
                  border: copied
                    ? "1px solid rgba(34,197,94,0.3)"
                    : "1px solid var(--border)",
                  color: copied
                    ? "#22c55e"
                    : isDark ? "rgba(196,181,253,0.7)" : "#7c3aed",
                }}
              >
                {copied ? <Check size={11} /> : <Copy size={11} />}
                {copied ? "COPIED!" : "COPY EMAIL"}
              </button>
            </div>

            <div className="mt-8">
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: "var(--text-3)" }}>
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-200 break-all"
                style={{ color: "var(--text-1)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = isDark ? "#a78bfa" : "#7c3aed"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-1)"}
              >
                {email}
              </a>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-5 mt-6">
              <div className="flex items-center gap-2" style={{ color: "var(--text-3)" }}>
                <MapPin size={13} />
                <span className="text-xs">Malang, Indonesia</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: "var(--text-3)" }}>
                <Clock size={13} />
                <span className="text-xs">WIB (UTC+7)</span>
              </div>
            </div>
          </motion.div>

          {/* ─ STATUS CARD ─ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-8 flex flex-col justify-center items-center text-center gap-4 transition-all duration-300"
            style={cardStyle}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: isDark ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0.08)",
                border: "1px solid rgba(139,92,246,0.2)",
                color: isDark ? "#a78bfa" : "#7c3aed",
              }}
            >
              <User size={26} />
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: "#22c55e" }}>
                  Available
                </span>
              </div>
              <p className="font-bold text-base mb-1" style={{ color: "var(--text-1)" }}>
                Open to Freelance
              </p>
              <p className="text-xs" style={{ color: "var(--text-3)" }}>
                Working worldwide, based in Indonesia
              </p>
            </div>
          </motion.div>

          {/* ─ SOCIAL CARDS ─ */}
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-7 flex flex-col justify-between min-h-[160px] group transition-all duration-300 cursor-pointer"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = `1px solid ${social.accentColor}50`;
                e.currentTarget.style.boxShadow = `0 8px 30px ${social.accentColor}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = cardStyle.border as string;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(139,92,246,0.07)",
                    color: "var(--text-2)",
                  }}
                >
                  <social.icon size={20} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300"
                  style={{ color: "var(--text-3)" }}
                />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--text-3)" }}>
                  {social.name}
                </p>
                <p className="font-bold text-base" style={{ color: "var(--text-1)" }}>
                  Let&apos;s Connect
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── Windmill 3D Spline Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 rounded-3xl overflow-hidden relative"
          style={{
            ...cardStyle,
            boxShadow: isDark ? "none" : "0 4px 24px rgba(139,92,246,0.08)",
          }}
        >
          {/* Header bar */}
          <div
            className="flex items-center gap-3 px-7 pt-6 pb-4"
            style={{ borderBottom: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(139,92,246,0.1)" }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{
                background: isDark ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: isDark ? "#a78bfa" : "#7c3aed",
              }}
            >
              {/* Cube / 3D icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: isDark ? "#a78bfa" : "#7c3aed" }}
              >
                Interactive 3D Scene
              </p>
              <p className="text-[10px]" style={{ color: "var(--text-3)" }}>
                Drag to interact
              </p>
            </div>
          </div>
          {/* Spline scene */}
          <WindmillCanvas />
        </motion.div>
      </div>
    </section>
  );
}
