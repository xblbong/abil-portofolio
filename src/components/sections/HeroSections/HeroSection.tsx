"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Sparkles, ExternalLink, Send } from "lucide-react";
import { useTheme } from "next-themes";
import PremiumProfileCard from "../../canvas/PremiumProfileCard";
import MouseGlow from "../../effect/MouseGlow";

export default function HeroSection() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => { setMounted(true); }, []);
    const isDark = mounted ? resolvedTheme === "dark" : true; // default dark to avoid flash

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty("--x", `${e.clientX}px`);
            document.documentElement.style.setProperty("--y", `${e.clientY}px`);
        };
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <MouseGlow />
            <section
                className="relative min-h-screen mt-10 flex items-center justify-center py-20 lg:py-0 overflow-hidden px-4 sm:px-8"
            >
                {/* Background Ambient Glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-layer"
                    style={{
                        background: isDark
                            ? "rgba(124,58,237,0.18)"
                            : "rgba(167,139,250,0.22)",
                        filter: "blur(120px)",
                    }}
                />
                {/* Secondary glow light theme — always rendered, opacity controls visibility */}
                <div
                    className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full z-0 pointer-events-none blur-layer transition-opacity duration-500"
                    style={{
                        background: "rgba(196,181,253,0.3)",
                        filter: "blur(100px)",
                        opacity: isDark ? 0 : 1,
                    }}
                />

                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm mb-6 backdrop-blur-md"
                            style={{
                                background: isDark
                                    ? "rgba(255,255,255,0.05)"
                                    : "rgba(139,92,246,0.08)",
                                border: isDark
                                    ? "1px solid rgba(255,255,255,0.1)"
                                    : "1px solid rgba(139,92,246,0.22)",
                                color: isDark ? "#c4b5fd" : "#7c3aed",
                            }}
                        >
                            <Sparkles size={14} className="animate-pulse" style={{ color: isDark ? "#a78bfa" : "#8b5cf6" }} />
                            <span className="font-medium tracking-wide">Available for New Projects</span>
                        </div>

                        {/* Heading */}
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
                            style={{ color: "var(--text-1)" }}
                        >
                            Hi! I&apos;m <br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: isDark
                                        ? "linear-gradient(135deg, #b06fec, #c4b5fd, #ffffff)"
                                        : "linear-gradient(135deg, #6d28d9, #8b5cf6, #a78bfa)",
                                }}
                            >
                                Sabilah Mudrikah
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className="text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
                            style={{ color: "var(--text-2)" }}
                        >
                            Crafting{" "}
                            <span className="font-medium" style={{ color: "var(--text-1)" }}>
                                high-end digital experiences
                            </span>{" "}
                            through modern frontend development and minimalist design.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                                style={{
                                    background: isDark
                                        ? "#ffffff"
                                        : "linear-gradient(135deg, #7c3aed, #8b5cf6)",
                                    color: isDark ? "#0a0817" : "#ffffff",
                                }}
                                onMouseEnter={(e) => {
                                    if (isDark) {
                                        e.currentTarget.style.background = "#b06fec";
                                        e.currentTarget.style.color = "#ffffff";
                                    } else {
                                        e.currentTarget.style.background = "linear-gradient(135deg, #6d28d9, #7c3aed)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (isDark) {
                                        e.currentTarget.style.background = "#ffffff";
                                        e.currentTarget.style.color = "#0a0817";
                                    } else {
                                        e.currentTarget.style.background = "linear-gradient(135deg, #7c3aed, #8b5cf6)";
                                    }
                                }}
                            >
                                View Projects
                                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                href="/file/Frontend-cv-SabilahMudrikah.pdf"
                                download="Frontend-cv-SabilahMudrikah.pdf"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                                style={{
                                    background: isDark ? "rgba(255,255,255,0.05)" : "rgba(139,92,246,0.08)",
                                    border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(139,92,246,0.22)",
                                    color: "var(--text-1)",
                                }}
                            >
                                <Send size={18} />
                                Download CV
                            </motion.a>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 flex items-center gap-8">
                            {[
                                { icon: Github, link: "https://github.com/xblbong" },
                                { icon: Linkedin, link: "https://www.linkedin.com/in/sabilah-mudrikah-41b21b301/" },
                                { icon: Instagram, link: "https://www.instagram.com/sblhh.m/" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4 }}
                                    className="transition-colors p-2"
                                    style={{ color: isDark ? "rgba(209,196,255,0.7)" : "rgba(109,40,217,0.6)" }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = isDark ? "#b06fec" : "#7c3aed";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = isDark ? "rgba(209,196,255,0.7)" : "rgba(109,40,217,0.6)";
                                    }}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT: Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
                            <div
                                className="absolute -inset-4 blur-3xl -z-10 rounded-[3rem] blur-layer"
                                style={{
                                    background: isDark
                                        ? "linear-gradient(135deg, rgba(124,58,237,0.2), transparent)"
                                        : "linear-gradient(135deg, rgba(167,139,250,0.35), rgba(196,181,253,0.2))",
                                }}
                            />
                            <PremiumProfileCard
                                name="Sabilah Mudrikah"
                                title="Frontend Developer"
                                handle="sblhh.m"
                                avatarUrl="/image/me.JPG"
                                status="Freelancer"
                            />
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    );
}