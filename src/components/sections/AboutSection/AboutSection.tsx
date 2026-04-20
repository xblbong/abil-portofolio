"use client";
import { motion } from "framer-motion";
import { MapPin, Zap, Camera, Code2, MousePointer2 } from "lucide-react";
import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("../../canvas/Lanyard"), {
    ssr: false,
    loading: () => <div className="h-[40rem] w-full" />,
});

// Quick stats to give immediate context
const highlights = [
    { icon: Code2,   label: "Frontend Dev",      sub: "React · Next.js · TypeScript" },
    { icon: Camera,  label: "Creative Eye",       sub: "Photography & Video Editing" },
    { icon: Zap,     label: "Google Ambassador",  sub: "Universitas Brawijaya" },
    { icon: MapPin,  label: "Based in Malang",    sub: "Indonesia · Open to Remote" },
];

export default function AboutSection() {
    return (
        <section
            id="about"
            className="py-24 relative overflow-hidden"
            style={{ background: "var(--bg-section)" }}
        >
            {/* Ambient glow blobs */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -mr-64 -mt-64 pointer-events-none blur-layer"
                style={{ background: "var(--glow-purple-sm)", filter: "blur(150px)" }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -ml-48 -mb-48 pointer-events-none blur-layer"
                style={{ background: "rgba(37,99,235,0.08)", filter: "blur(130px)" }}
            />

            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ── LEFT: LANYARD 3D ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="relative order-2 lg:order-1 flex flex-col items-center"
                    >
                        <div
                            className="absolute inset-0 rounded-full pointer-events-none blur-layer"
                            style={{
                                background: "var(--glow-ambient)",
                                filter: "blur(80px)",
                            }}
                        />
                        <Lanyard />
                        <p
                            className="text-center text-xs italic mt-2 inline-flex items-center justify-center gap-1.5"
                            style={{ color: "var(--text-3)" }}
                        >
                            <MousePointer2 size={13} />
                            Try dragging my ID card
                        </p>
                    </motion.div>

                    {/* ── RIGHT: STORY ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="order-1 lg:order-2 flex flex-col gap-8"
                    >
                        {/* Eyebrow */}
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase w-fit"
                            style={{
                                background: "rgba(139,92,246,0.1)",
                                border: "1px solid rgba(139,92,246,0.25)",
                                color: "var(--purple-400)",
                            }}
                        >
                            About Me
                        </div>

                        {/* Heading */}
                        <div>
                            <h2
                                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-3"
                                style={{ color: "var(--text-1)", letterSpacing: "-0.03em" }}
                            >
                                Beyond
                            </h2>
                            <h2
                                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] italic"
                                style={{ letterSpacing: "-0.03em" }}
                            >
                                <span
                                    className="text-transparent bg-clip-text"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, var(--purple-400), var(--purple-500), #93c5fd)",
                                    }}
                                >
                                    the code.
                                </span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p
                            className="text-base md:text-lg leading-relaxed"
                            style={{ color: "var(--text-2)" }}
                        >
                            I&apos;m <span className="font-semibold" style={{ color: "var(--text-1)" }}>Sabilah Mudrikah</span>,
                            a Frontend Developer from Malang, Indonesia. I build fast, responsive interfaces
                            with <span className="font-semibold" style={{ color: "var(--text-1)" }}>React, Next.js</span>, and a design-first mindset —
                            blending technical precision with a creative eye shaped by photography and video.
                        </p>

                        {/* Highlight grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={h.label}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 + i * 0.08, duration: 0.45 }}
                                    className="flex items-start gap-3 p-4 rounded-2xl"
                                    style={{
                                        background: "var(--input-bg)",
                                        border: "1px solid var(--border)",
                                    }}
                                >
                                    <div
                                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                        style={{
                                            background: "rgba(139,92,246,0.12)",
                                            color: "var(--purple-400)",
                                        }}
                                    >
                                        <h.icon size={15} />
                                    </div>
                                    <div className="min-w-0">
                                        <p
                                            className="text-sm font-semibold leading-tight truncate"
                                            style={{ color: "var(--text-1)" }}
                                        >
                                            {h.label}
                                        </p>
                                        <p
                                            className="text-[11px] mt-0.5 leading-snug"
                                            style={{ color: "var(--text-3)" }}
                                        >
                                            {h.sub}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-white font-bold text-sm tracking-wide"
                                style={{
                                    background: "linear-gradient(135deg, var(--purple-600), var(--purple-700))",
                                    boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                                }}
                                onClick={() => window.location.href = "#contact"}
                            >
                                Let&apos;s Work Together
                            </motion.button>

                            <motion.a
                                href="/file/Frontend-cv-SabilahMudrikah.pdf"
                                download
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-200"
                                style={{
                                    background: "var(--input-bg)",
                                    border: "1px solid var(--border)",
                                    color: "var(--text-2)",
                                }}
                            >
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
