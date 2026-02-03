"use client";
import { motion } from "framer-motion";
import ProfileCard3D from "../../canvas/ProfileCard3D";

const mainSkills = [
    { label: "Website Development", value: 87, color: "#b06fec" },
    { label: "Graphic Designer", value: 83, color: "#E4B7E5" },
    { label: "Photography", value: 90, color: "#815CAD" },
    { label: "Video Editing", value: 95, color: "#9A48D0" },
];

const otherSkills = [
    {
        cat: "Website Development",
        items: [
            "HTML",
            "CSS / Tailwind CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Supabase",
            "Firebase",
            "MySQL",
            "MongoDB",
            "Git",
            "Vercel",
            "Netlify"
        ],
    },
    {
        cat: "Graphic Design",
        items: [
            "Figma",
            "Canva",
            "Logo Design",
            "Sticker & Asset Design",
            "UI Layout Design"
        ],
    },
    {
        cat: "Photography",
        items: [
            "Basic Photography",
            "Composition",
            "Lighting Awareness",
            "Photo Editing"
        ],
    },
    {
        cat: "Video Editing",
        items: [
            "Filmora",
            "CCP",
            "CapCut",
            "Basic Motion Editing",
            "Visual Rhythm",
            "Social Media Video Content"
        ],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="pt-32 py-20 bg-[#050505] overflow-hidden px-10 md:px-32 lg:px-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* KOLOM KIRI: Card 3D Kamu (Visual Anchor) */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl mt-12 md:text-6xl font-black italic text-white capitalize leading-none mb-6">
                                Technical <br />
                                <span className="text-transparent bg-clip-text pr-2 bg-gradient-to-r from-[#b06fec] to-purple-100">
                                    Skills
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-xl">
                                A carefully chosen set of technologies I use to build clean, responsive, and user-friendly digital experiences with a strong focus on modern frontend development and thoughtful UI/UX.
                            </p>
                        </motion.div>

                        {/* Grid Skill Lainnya */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pt-10">
                            {otherSkills.map((group, idx) => (
                                <motion.div
                                    key={group.cat}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-2xl border border-white/10 
                                                bg-white/[0.02] backdrop-blur-md
                                                p-6 min-h-[260px]
                                                hover:border-purple-400/40 transition-all duration-300 ease-in-out"
                                >
                                    {/* Title */}
                                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400 mb-4">
                                        {group.cat}
                                    </h4>

                                    {/* Divider */}
                                    <div className="h-px w-full bg-gradient-to-r from-purple-500/40 to-transparent mb-5" />

                                    {/* Skill Pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1.5 rounded-full text-sm
                                                bg-white/5 text-gray-300
                                                hover:bg-purple-500/20 hover:text-white
                                                transition cursor-default"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                    {/* KOLOM KANAN: Detail Info (Balancing) */}

                    <div className="lg:col-span-5 flex justify-center">
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