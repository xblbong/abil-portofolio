"use client";
import { Project } from "@/src/types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }} // Efek melayang saat hover
      className="group relative bg-white rounded-[2rem] p-4 shadow-xl shadow-purple-500/5 border border-purple-100 flex flex-col h-full"
    >
      {/* Container Image */}
      <div className="relative aspect-video overflow-hidden rounded-[1.5rem] mb-6 bg-purple-50">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay saat hover */}
        <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.link_demo && (
            <a href={project.link_demo} target="_blank" className="p-3 bg-white text-purple-600 rounded-full hover:scale-110 transition shadow-lg">
              <ExternalLink size={20} />
            </a>
          )}
          {project.link_github && (
            <a href={project.link_github} target="_blank" className="p-3 bg-purple-600 text-white rounded-full hover:scale-110 transition shadow-lg">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Konten Teks */}
      <div className="px-2 flex-grow">
        <h3 className="text-2xl font-black text-gray-800 mb-2 italic capitalize tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-700/70 text-sm line-clamp-3 mb-6 font-medium leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="px-2 pb-2 flex flex-wrap gap-2">
        {project.tech_stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-purple-50 border border-purple-100 text-gray-600 text-[10px] font-bold rounded-full capitalize tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}