"use client";
import { motion } from "framer-motion";
import { Briefcase, Users, Calendar } from "lucide-react";
import { leadershipExperiences, professionalExperiences } from "@/src/data/experiences";

const experiences = [
  {
    category: "Professional Experience",
    icon: <Briefcase size={18} />,
    items: professionalExperiences,
  },
  {
    category: "Leadership & Volunteer",
    icon: <Users size={18} />,
    items: leadershipExperiences,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

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
                <div className="p-2 bg-purple-600/10 border border-purple-600/20 rounded-lg text-purple-500">
                  {section.icon}
                </div>
                <h3 className="font-bold text-gray-400 tracking-[0.3em] capitalize text-xs">
                  {section.category}
                </h3>
              </div>

              {/* Garis Timeline Vertical */}
              <div className="absolute left-[19px] top-16 bottom-0 w-[1px] bg-gradient-to-b from-purple-600/50 via-purple-600/10 to-transparent hidden md:block" />

              <div className="space-y-8">
                {section.items.map((item) => (
                  <motion.div
                    key={item.id}
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
                          <span className="flex items-center text-sm gap-1 text-gray-500">
                            <Calendar size={18} /> {item.period}
                          </span>
                        </div>

                      </div>

                      <ul className="space-y-3">
                        {item.points.map((point) => (
                          <li key={point} className="text-sm text-gray-400 leading-relaxed flex gap-3">
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

      </div>
    </section>
  );
}
