"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { featuredProjects } from "@/src/data/projects";
import ProjectCard from "../../canvas/ProjectCard";

export default function MyProjectsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{ background: isDark ? "#04030c" : "transparent" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--purple-400)" }}>
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
              <span style={{ color: "var(--text-1)" }}>Selected</span>{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: isDark ? "linear-gradient(135deg, #a78bfa, #c4b5fd)" : "linear-gradient(135deg, #7c3aed, #a78bfa)" }}
              >
                Projects.
              </span>
            </h2>
            <p className="mt-3 text-sm max-w-md" style={{ color: "var(--text-2)" }}>
              A few things I&apos;m proud of — from real-world clients to personal experiments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group hover:-translate-y-0.5"
              style={{
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#a78bfa",
              }}
            >
              View All Work
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Featured grid — 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.slice(0, 3).map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--text-3)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = isDark ? "#c4b5fd" : "#7c3aed"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-3)"}
          >
            See all {featuredProjects.length}+ projects
            <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}