"use client";
import { Project } from "@/src/types";
import { motion } from "framer-motion";
import ProjectCard from "../../canvas/ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function MyProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 bg-[#fcfaff]">
      <div className="container mx-auto px-10 md:px-6 lg:px-32">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 font-black tracking-[0.2em] text-sm capitalize"
          >
            My Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-800 italic mt-2 capitalize text-shadow-2xs"
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-800/60 mt-4 text-lg">
            A collection of my latest work on building meaningful digital experiences.
          </p>
        </div>

        {/* Grid Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}