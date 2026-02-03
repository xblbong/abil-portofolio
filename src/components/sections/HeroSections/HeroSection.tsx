"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Sparkles, ExternalLink, Send } from "lucide-react";
import PremiumProfileCard from "../../canvas/PremiumProfileCard";
import MouseGlow from "../../effect/MouseGlow";

export default function HeroSection() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty("--x", `${e.clientX}px`);
            document.documentElement.style.setProperty("--y", `${e.clientY}px`);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <MouseGlow />
            <section className="relative min-h-screen mt-10 flex items-center justify-center py-20 lg:py-0 overflow-hidden px-4 sm:px-8">
                {/* Background Ambient Light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />

                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
                    
                    {/* LEFT CONTENT: Text & SEO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs sm:text-sm mb-6 backdrop-blur-md">
                            <Sparkles size={14} className="animate-pulse text-purple-400" />
                            <span className="font-medium tracking-wide">Available for New Projects</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-white">
                            Hi! I’m <br />
                            <span className="bg-gradient-to-r from-[#b06fec] via-purple-300 to-white bg-clip-text text-transparent pb-2">
                                Sabilah Mudrikah
                            </span>
                        </h1>

                        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
                            Crafting <span className="text-white font-medium">high-end digital experiences</span> through modern frontend development and minimalist design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group px-8 py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-[#b06fec] hover:text-white"
                            >
                                View Projects
                                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 rounded-2xl font-bold backdrop-blur-md flex items-center justify-center gap-2 transition-all"
                            >
                                <Send size={18} />
                                Get in Touch
                            </motion.a>
                        </div>

                        {/* Social Links - Law of Proximity */}
                        <div className="mt-12 flex items-center gap-8">
                            {[
                                { icon: Github, link: "#" },
                                { icon: Linkedin, link: "#" },
                                { icon: Instagram, link: "#" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    whileHover={{ y: -4 }}
                                    className="text-gray-500 hover:text-[#b06fec] transition-colors p-2"
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
                            {/* Decorative background for the card */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-transparent blur-3xl -z-10 rounded-[3rem]" />
                            <PremiumProfileCard
                                name="Sabilah Mudrikah"
                                title="Frontend Developer"
                                handle="sblhh.m"
                                avatarUrl="/image/myself/me.jpg"
                                status="Freelancer"
                            />
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    );
}