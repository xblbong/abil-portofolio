"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Globe, Palette, Video, LayoutGrid, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Navbar from "@/src/components/layout/NavbarComponents";
import ProjectCard from "@/src/components/canvas/ProjectCard";
import { allProjects } from "@/src/data/projects";
import { ProjectType } from "@/src/types";
import PageLoader from "@/src/components/ui/PageLoader";
import Footer from "@/src/components/layout/Footer";

type Tab = "all" | ProjectType;

const tabs: { id: Tab; label: string; Icon: LucideIcon }[] = [
  { id: "all", label: "All Work", Icon: LayoutGrid },
  { id: "web", label: "Web Dev", Icon: Globe },
  { id: "design", label: "Design", Icon: Palette },
  { id: "video", label: "Video", Icon: Video },
];

const tabColors: Record<Tab, string> = {
  all: "#a78bfa",
  web: "#a78bfa",
  design: "#f472b6",
  video: "#fb923c",
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const filtered = useMemo(() =>
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === activeTab),
    [activeTab]
  );

  const counts: Record<Tab, number> = useMemo(() => ({
    all: allProjects.length,
    web: allProjects.filter((p) => p.type === "web").length,
    design: allProjects.filter((p) => p.type === "design").length,
    video: allProjects.filter((p) => p.type === "video").length,
  }), []);

  const accentColor = tabColors[activeTab];

  return (
    <div className="min-h-screen themed-page">
      <PageLoader minDuration={600} />
      <Navbar />

      {/* Ambient glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, ${accentColor}18 0%, transparent 70%)`,
          transition: "background 0.5s ease",
        }}
      />

      <main className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-12 group transition-colors"
            style={{ color: "var(--text-3)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = isDark ? "#a78bfa" : "#7c3aed"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-3)"}
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: accentColor }}>
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            <span style={{ color: "var(--text-1)" }}>Selected</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(135deg, ${accentColor}, ${isDark ? "#c4b5fd" : "#7c3aed"})` }}
            >
              Work.
            </span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-2)" }}>
            A curated collection of projects across web development, design, and video — each built with purpose and attention to detail.
          </p>
        </motion.div>

        {/* Tab Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const color = tabColors[tab.id];
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: isActive ? `${color}18` : isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.6)",
                  border: isActive ? `1px solid ${color}50` : isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(139,92,246,0.18)",
                  color: isActive ? color : isDark ? "rgba(196,181,253,0.4)" : "rgba(80,40,160,0.55)",
                  boxShadow: isActive ? `0 0 20px ${color}15` : "none",
                }}
              >
                <tab.Icon size={13} />
                {tab.label}
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded-md"
                  style={{
                    background: isActive ? `${color}25` : isDark ? "rgba(255,255,255,0.06)" : "rgba(139,92,246,0.07)",
                    color: isActive ? color : isDark ? "rgba(196,181,253,0.35)" : "rgba(80,40,160,0.45)",
                  }}
                >
                  {counts[tab.id]}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mb-12 transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, ${accentColor}40, transparent)`,
          }}
        />

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.15)" }}
            >
              <LayoutGrid size={24} className="text-purple-400/50" />
            </div>
            <p className="text-sm" style={{ color: "var(--text-3)" }}>No projects in this category yet.</p>
          </motion.div>
        )}

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs mt-20 tracking-wider"
          style={{ color: "var(--text-3)" }}
        >
          More projects coming soon — stay tuned.
        </motion.p>
      </main>
      <Footer />
    </div>
  );
}
