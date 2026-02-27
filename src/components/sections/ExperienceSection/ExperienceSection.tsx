"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Calendar, Award } from "lucide-react";

const experiences = [
    {
        category: "Professional Experience",
        icon: <Briefcase size={18} />,
        items: [
            {
                title: "Frontend Developer & QA (Freelance)",
                company: "ICASVE 2025",
                period: "Jan 2025 - Mar 2025",
                points: [
                    "Developed admin dashboard using Laravel in under 5 hours.",
                    "Authored comprehensive frontend manual book for seamless handovers."
                ],
                impact: "Fast Delivery"
            },
            {
                title: "Social Media & WordPress Specialist (Intern)",
                company: "PSIK Brawijaya University",
                period: "Dec 2024 - Present",
                points: [
                    "Integrated Google AI & Gemini for trend analysis.",
                    "Managed SEO-optimized WordPress site with 100% information accuracy."
                ],
                impact: "1,100% Reach Increase"
            },
            {
                title: "Frontend Developer (Intern)",
                company: "PT. Nusantara Technology Solutions",
                period: "May 2023 - Aug 2024",
                points: [
                    "Optimized 5–10 production pages using React.js and Next.js.",
                    "Improved UI responsiveness, accelerating client delivery cycles."
                ],
                impact: "Team Scalability"
            }
        ]
    },
    {
        category: "Leadership & Volunteer",
        icon: <Users size={18} />,
        items: [
            {
                title: "UI/UX Designer Mentor & Speaker",
                company: "PROVOKS Community",
                period: "Nov 2025 - Present",
                points: [
                    "Mentored 30+ students in user-centered design principles.",
                    "Facilitated workshops on modern frontend implementation."
                ],
                impact: "Impactful Mentorship"
            },
            {
                title: "Staff of Creative & Frontend Development",
                company: "PKKMB Yuwaraja UB",
                period: "Aug - Sep 2025",
                points: [
                    "Architected orientation portal using Laravel for 1,000+ students.",
                    "Ensured 0% downtime during peak onboarding."
                ],
                impact: "0% Downtime"
            }
        ]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 bg-[#050505] font-lexend">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Header - Lebih Clean */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black italic text-white capitalize tracking-tighter"
                    >
                        Journey & <span className="text-purple-600">Impact.</span>
                    </motion.h2>
                    <div className="h-1 w-1/2 bg-purple-600 mt-4 rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {experiences.map((section, idx) => (
                        <div key={idx} className="relative">
                            {/* Category Title */}
                            <div className="flex items-center gap-3 mb-10">
                                <div className="p-2bg-purple-600/10 border border-purple-600/20 rounded-lg text-purple-500">
                                    {section.icon}
                                </div>
                                <h3 className="font-bold text-gray-400 tracking-[0.3em] capitalize text-xs">
                                    {section.category}
                                </h3>
                            </div>

                            {/* Garis Timeline Vertical */}
                            <div className="absolute left-[19px] top-16 bottom-0 w-[1px] bg-gradient-to-b from-purple-600/50 via-purple-600/10 to-transparent hidden md:block" />

                            <div className="space-y-8">
                                {section.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative pl-0 md:pl-12 group"
                                    >
                                        {/* Dot Timeline */}
                                        <div className="absolute left-[14px] top-2 w-[10px] h-[10px] rounded-full bg-purple-600 border-4 border-[#050505] hidden md:block z-10 group-hover:scale-150 transition-transform" />

                                        <div className="p-7 bg-[#0a0a0a] border border-white/5 rounded-[2rem] group-hover:border-purple-600/30 transition-all shadow-2xl">
                                            {/* Flex Header - Memisahkan Judul dan Badge agar tidak tabrakan */}
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                                <div className="space-y-1">
                                                    {/* Impact Tag - Sekarang posisinya aman */}
                                                    <div className="inline-flex px-3 py-1 mb-5 bg-purple-600/10 border border-purple-600/20 rounded-full h-fit">
                                                        <span className="text-[10px] font-bold text-purple-600 capitalize tracking-widest whitespace-nowrap">
                                                            {item.impact}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition leading-tight">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex mb-2 items-center gap-2 text-gray-500 text-sm italic">
                                                        <span className="text-gray-300 font-medium">{item.company}</span>
                                                    </div>
                                                        <span className="flex items-center text-sm gap-1 text-gray-500"><Calendar size={18} /> {item.period}</span>
                                                </div>

                                            </div>

                                            <ul className="space-y-3">
                                                {item.points.map((point, pIdx) => (
                                                    <li key={pIdx} className="text-sm text-gray-400 leading-relaxed flex gap-3">
                                                        <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-purple-900" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education - Dibuat lebih Minimalis */}
                <div className="mt-24 p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                        <GraduationCap size={120} className="text-purple-600" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="p-5 bg-purple-600/10 rounded-2xl text-purple-500 border border-purple-600/20">
                            <GraduationCap size={32} />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h4 className="text-2xl font-bold text-white capitalize italic tracking-tighter">Brawijaya University</h4>
                            <p className="text-purple-500 text-xs font-bold capitalize tracking-[0.2em] mt-1">Information Technology • 2024 - 2027</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Web Dev", "Software Eng", "AI Enthusiast"].map(tag => (
                                <span key={tag} className="text-[10px] px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-400 capitalize font-bold tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}