"use client";
import { Project } from "@/src/types";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const typeLabel: Record<string, string> = {
  web: "Web Dev",
  design: "Design",
  video: "Video",
};
const typeColor: Record<string, string> = {
  web: "#a78bfa",
  design: "#f472b6",
  video: "#fb923c",
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const accentColor = typeColor[project.type] ?? "#a78bfa";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-[1.75rem] overflow-hidden h-full transition-all duration-300"
      style={{
        background: "linear-gradient(145deg, #0f0c1e, #0a0817)",
        border: "1px solid rgba(139,92,246,0.1)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${accentColor}35`;
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(139,92,246,0.1)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
      }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#0a0817]">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        {/* Gradient overlay always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c1e] via-transparent to-transparent" />

        {/* Hover action overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div
            className="absolute inset-0"
            style={{ background: `${accentColor}18` }}
          />
          {project.link_demo && (
            <motion.a
              href={project.link_demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all"
              style={{
                background: accentColor,
                boxShadow: `0 0 20px ${accentColor}60`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {project.type === "video" ? (
                <><Play size={13} fill="white" /> Play</>
              ) : (
                <><ExternalLink size={13} /> Live Demo</>
              )}
            </motion.a>
          )}
          {project.link_github && (
            <motion.a
              href={project.link_github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 p-2.5 rounded-full text-white border border-white/20 hover:border-white/50 transition-all"
              style={{ background: "rgba(255,255,255,0.1)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
            </motion.a>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
            style={{
              background: `${accentColor}20`,
              border: `1px solid ${accentColor}40`,
              color: accentColor,
            }}
          >
            {typeLabel[project.type]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3
          className="text-base font-bold text-white mb-1.5 leading-snug group-hover:text-purple-300 transition-colors duration-200 line-clamp-1"
        >
          {project.title}
        </h3>
        <p className="text-[13px] text-white/40 leading-relaxed line-clamp-2 mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
          {project.tech_stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium tracking-wide"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.15)",
                color: "rgba(196,181,253,0.7)",
              }}
            >
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] text-white/25">
              +{project.tech_stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}