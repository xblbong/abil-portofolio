"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ProfileCard3D from "../../canvas/ProfileCard3D";


/* ─── SVG Icons ─── */
function IconCode({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}
function IconPalette({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r="0.5" fill={color} />
            <circle cx="17.5" cy="10.5" r="0.5" fill={color} />
            <circle cx="8.5" cy="7.5" r="0.5" fill={color} />
            <circle cx="6.5" cy="12.5" r="0.5" fill={color} />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
    );
}
function IconWrench({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    );
}
function IconCamera({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
        </svg>
    );
}
function IconFilm({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="17" x2="22" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
    );
}

/* ─── Skill Data with Devicon CDN logos ─── */
const skillCategories = [
    {
        cat: "Website Development",
        Icon: IconCode,
        color: "#b06fec",
        items: [
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#E34F26" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572B6" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#3178C6" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61DAFB" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "#ffffff" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
            { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", color: "#3FCF8E" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", color: "#FFCA28" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#4479A1" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#47A248" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F05032" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", color: "#FF2D20" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", color: "#777BB4" },
        ],
    },
    {
        cat: "Design Tools",
        Icon: IconPalette,
        color: "#9d54e0",
        items: [
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", color: "#F24E1E" },
            { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", color: "#00C4CC" },
            { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", color: "#31A8FF" },
        ],
    },
    {
        cat: "Other Tools",
        Icon: IconWrench,
        color: "#9A48D0",
        items: [
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", color: "#007ACC" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", color: "#ffffff" },
            { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", color: "#ffffff" },
            { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg", color: "#00C7B7" },
            { name: "Wordpress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg", color: "#21759B" },
        ],
    },
];

const mainSkills = [
    { label: "Website Development", value: 87, color: "#b06fec" },
    { label: "Graphic Designer", value: 83, color: "#9d54e0" },
    { label: "Photography", value: 90, color: "#815CAD" },
    { label: "Video Editing", value: 95, color: "#9A48D0" },
];

/* ─── Individual Skill Icon Card ─── */
function SkillIcon({ item, index, isDark }: { item: { name: string; icon: string; color: string }; index: number; isDark: boolean }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group flex flex-col items-center gap-2 cursor-pointer"
        >
            {/* Card */}
            <motion.div
                whileHover={{ scale: 1.15, y: -6 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{
                    background: hovered
                        ? `linear-gradient(145deg, ${item.color}22, ${item.color}0a)`
                        : isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.65)",
                    border: hovered
                        ? `1px solid ${item.color}60`
                        : isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(139,92,246,0.15)",
                    boxShadow: hovered
                        ? `0 0 20px ${item.color}25, 0 8px 25px ${isDark ? "rgba(0,0,0,0.3)" : "rgba(139,92,246,0.12)"}`
                        : "none",
                }}
            >
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)` }}
                />
                <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(176,111,236,0.6)]"
                    loading="lazy"
                />
            </motion.div>

            {/* Label */}
            <span
                className="text-[10px] sm:text-xs font-medium tracking-wide transition-colors duration-300 text-center leading-tight"
                style={{ color: hovered ? item.color : isDark ? "rgba(255,255,255,0.5)" : "rgba(80,40,160,0.6)" }}
            >
                {item.name}
            </span>
        </motion.div>
    );
}

/* ─── Main Component ─── */
export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState(0);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const isDark = mounted ? resolvedTheme === "dark" : true;

    return (
        <section
            id="skills"
            className="pt-32 py-20 overflow-hidden px-6 md:px-16 lg:px-20"
            style={{ background: isDark ? "#050505" : "transparent" }}
        >
            <div className="container mx-auto px-2 sm:px-6">
                <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">

                    {/* LEFT COLUMN: Title + Skill Icons */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="text-4xl mt-12 md:text-6xl font-black italic capitalize leading-none mb-6"
                                style={{ color: "var(--text-1)" }}
                            >
                                Technical <br />
                                <span
                                    className="text-transparent bg-clip-text pr-2"
                                    style={{ backgroundImage: isDark ? "linear-gradient(135deg, #b06fec, #e9d5ff)" : "linear-gradient(135deg, #7c3aed, #a78bfa)" }}
                                >
                                    Skills
                                </span>
                            </h2>
                            <p className="text-lg max-w-xl" style={{ color: "var(--text-2)" }}>
                                Technologies and tools I use to craft modern, responsive, and user-friendly digital experiences.
                            </p>
                        </motion.div>

                        {/* Tab Navigation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-2"
                        >
                            {skillCategories.map((cat, idx) => (
                                <button
                                    key={cat.cat}
                                    onClick={() => setActiveTab(idx)}
                                    className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
                                    style={{
                                        background: activeTab === idx
                                            ? `linear-gradient(135deg, ${cat.color}28, ${cat.color}12)`
                                            : isDark
                                                ? "rgba(255,255,255,0.04)"
                                                : "rgba(255,255,255,0.85)",
                                        border: activeTab === idx
                                            ? `1px solid ${cat.color}55`
                                            : isDark
                                                ? "1px solid rgba(255,255,255,0.09)"
                                                : "1px solid rgba(109,40,217,0.22)",
                                        color: activeTab === idx
                                            ? cat.color
                                            : isDark
                                                ? "rgba(255,255,255,0.5)"
                                                : "rgba(90,40,180,0.7)",
                                        boxShadow: activeTab === idx
                                            ? `0 0 18px ${cat.color}18, 0 2px 8px rgba(0,0,0,0.06)`
                                            : isDark
                                                ? "none"
                                                : "0 1px 4px rgba(109,40,217,0.08)",
                                    }}
                                >
                                    <cat.Icon
                                        size={14}
                                        color={
                                            activeTab === idx
                                                ? cat.color
                                                : isDark
                                                    ? "rgba(255,255,255,0.4)"
                                                    : "rgba(109,40,217,0.5)"
                                        }
                                    />
                                    {cat.cat}
                                </button>
                            ))}
                        </motion.div>

                        {/* Skill Icons Grid */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-3xl backdrop-blur-sm p-6 sm:p-8"
                            style={{
                                background: isDark ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.6)",
                                border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(139,92,246,0.15)",
                                boxShadow: isDark
                                    ? `inset 0 1px 0 rgba(255,255,255,0.04), 0 0 40px ${skillCategories[activeTab].color}08`
                                    : `0 4px 24px rgba(139,92,246,0.08), 0 0 40px ${skillCategories[activeTab].color}06`,
                            }}
                        >
                            {/* Subtle top accent line */}
                            <div
                                className="absolute top-0 left-8 right-8 h-px"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${skillCategories[activeTab].color}40, transparent)`,
                                }}
                            />

                            {/* Category badge */}
                            <div className="flex items-center gap-2.5 mb-6">
                                <div
                                    className="flex items-center justify-center w-7 h-7 rounded-lg"
                                    style={{
                                        background: `${skillCategories[activeTab].color}18`,
                                        border: `1px solid ${skillCategories[activeTab].color}30`,
                                    }}
                                >
                                    {(() => { const CatIcon = skillCategories[activeTab].Icon; return <CatIcon size={14} color={skillCategories[activeTab].color} />; })()}
                                </div>
                                <h4
                                    className="text-xs font-bold uppercase tracking-[0.25em]"
                                    style={{ color: skillCategories[activeTab].color }}
                                >
                                    {skillCategories[activeTab].cat}
                                </h4>
                                <span className="ml-auto text-[10px] font-mono" style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(80,40,160,0.35)" }}>
                                    {skillCategories[activeTab].items.length} tools
                                </span>
                            </div>

                            {/* Icons */}
                            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-5">
                                {skillCategories[activeTab].items.map((item, idx) => (
                                    <SkillIcon key={item.name} item={item} index={idx} isDark={isDark} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Photography & Video editing as simple highlight cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {([
                                {
                                    Icon: IconCamera,
                                    title: "Photography",
                                    desc: "Composition, Lighting, Photo Editing",
                                    color: "#815CAD",
                                    tools: ["Basic Photography", "Composition", "Lighting Awareness", "Photo Editing"],
                                },
                                {
                                    Icon: IconFilm,
                                    title: "Video Editing",
                                    desc: "Filmora, CapCut, Motion Editing",
                                    color: "#9A48D0",
                                    tools: ["Filmora", "CCP", "CapCut", "Basic Motion Editing", "Visual Rhythm", "Social Media Content"],
                                },
                            ] as const).map((card, idx) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="group relative rounded-2xl backdrop-blur-sm p-5 transition-all duration-300"
                                    style={{
                                        background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.6)",
                                        border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(139,92,246,0.15)",
                                    }}
                                >
                                    {/* Top accent */}
                                    <div
                                        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(90deg, transparent, ${card.color}50, transparent)`,
                                        }}
                                    />
                                    <div className="flex items-start gap-3 mb-3">
                                        <div
                                            className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                                            style={{
                                                background: `${card.color}18`,
                                                border: `1px solid ${card.color}30`,
                                            }}
                                        >
                                            <card.Icon size={18} color={card.color} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold" style={{ color: "var(--text-1)" }}>{card.title}</h4>
                                            <p className="text-[11px] mt-0.5" style={{ color: "var(--text-3)" }}>{card.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {card.tools.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-1 rounded-full text-[10px] transition-colors duration-200"
                                                style={{
                                                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(139,92,246,0.07)",
                                                    color: isDark ? "rgba(255,255,255,0.5)" : "rgba(80,40,160,0.6)",
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 3D Profile Card */}
                    <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-32">
                        <ProfileCard3D
                            imageUrl="/image/me.JPG"
                            name="Sabilah M."
                            tagline="Frontend Developer specializing in 3D Web Experiences"
                            skills={mainSkills}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}