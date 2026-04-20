"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Users, Calendar, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Navbar from "@/src/components/layout/NavbarComponents";
import { experiences, professionalExperiences, leadershipExperiences } from "@/src/data/experiences";
import PageLoader from "@/src/components/ui/PageLoader";
import Footer from "@/src/components/layout/Footer";

const stats = [
  { label: "Years of Experience", value: "2+", icon: TrendingUp },
  { label: "Companies Worked With", value: "4+", icon: Briefcase },
  { label: "Students Mentored", value: "30+", icon: Users },
  { label: "Projects Delivered", value: "12+", icon: Zap },
];

function ExperienceCard({
  item,
  index,
  isDark,
}: {
  item: (typeof experiences)[0];
  index: number;
  isDark: boolean;
}) {
  const isLeadership = item.category === "leadership";
  const accentColor = isLeadership ? "#f472b6" : "#a78bfa";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="group relative rounded-2xl p-6 transition-all duration-300"
      style={{
        background: isDark
          ? "linear-gradient(145deg, #0f0c1e, #0a0817)"
          : "linear-gradient(145deg, rgba(255,255,255,0.88), rgba(243,232,255,0.7))",
        border: isDark ? "1px solid rgba(139,92,246,0.1)" : "1px solid rgba(139,92,246,0.15)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${accentColor}35`;
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${accentColor}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(139,92,246,0.1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }}
      />

      {/* Impact badge */}
      <div className="flex items-start justify-between mb-4">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
          style={{
            background: `${accentColor}15`,
            border: `1px solid ${accentColor}30`,
            color: accentColor,
          }}
        >
          <Zap size={8} />
          {item.impact}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold mb-1 leading-snug group-hover:text-purple-300 transition-colors duration-200"
        style={{ color: "var(--text-1)" }}
      >
        {item.title}
      </h3>

      {/* Company */}
      <p className="font-semibold mb-1" style={{ color: accentColor, fontSize: 13 }}>
        {item.company}
      </p>

      {/* Period */}
      <div className="flex items-center gap-1.5 mb-5" style={{ color: "var(--text-3)" }}>
        <Calendar size={12} />
        <span className="text-xs">{item.period}</span>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-4"
        style={{ background: "rgba(139,92,246,0.1)" }}
      />

      {/* Points */}
      <ul className="space-y-2.5">
        {item.points.map((point, i) => (
          <li key={i} className="flex gap-3 text-sm" style={{ color: "var(--text-2)" }}>
            <div
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: accentColor, opacity: 0.6 }}
            />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ExperiencePage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="min-h-screen themed-page">
      <PageLoader minDuration={600} />
      <Navbar />

      {/* Ambient glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />

      <main className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-12 transition-colors"
            style={{ color: "var(--text-3)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = isDark ? "#a78bfa" : "#7c3aed"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-3)"}
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4 text-purple-400">
            My Journey
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            <span style={{ color: "var(--text-1)" }}>Growth &amp;</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: isDark ? "linear-gradient(135deg, #c4b5fd, #a78bfa, #e879f9)" : "linear-gradient(135deg, #7c3aed, #8b5cf6, #a855f7)" }}
            >
              Impact.
            </span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-2)" }}>
            Every role I&apos;ve taken has shaped how I think, build, and lead. Here&apos;s a chronological look at my professional journey.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl text-center"
              style={{
                background: isDark
                  ? "linear-gradient(145deg, #0f0c1e, #0a0817)"
                  : "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(243,232,255,0.65))",
                border: isDark ? "1px solid rgba(139,92,246,0.12)" : "1px solid rgba(139,92,246,0.18)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}
              >
                <stat.icon size={16} className="text-purple-400" />
              </div>
              <div className="text-2xl font-black mb-1" style={{ color: "var(--text-1)" }}>{stat.value}</div>
              <div className="text-[11px]" style={{ color: "var(--text-3)" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mb-16"
          style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.4), transparent)" }}
        />

        {/* Two-column Experience */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="p-2 rounded-lg"
                style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}
              >
                <Briefcase size={16} className="text-purple-400" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "var(--text-1)" }}>
                  Professional Experience
                </h2>
                <p className="text-[11px]" style={{ color: "var(--text-3)" }}>
                  {professionalExperiences.length} roles
                </p>
              </div>
            </motion.div>
            <div className="space-y-4">
              {professionalExperiences.map((item, i) => (
                <ExperienceCard key={item.id} item={item} index={i} isDark={isDark} />
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="p-2 rounded-lg"
                style={{ background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.2)" }}
              >
                <Users size={16} style={{ color: "#f472b6" }} />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "var(--text-1)" }}>
                  Leadership &amp; Volunteer
                </h2>
                <p className="text-[11px]" style={{ color: "var(--text-3)" }}>
                  {leadershipExperiences.length} roles
                </p>
              </div>
            </motion.div>
            <div className="space-y-4">
              {leadershipExperiences.map((item, i) => (
                <ExperienceCard key={item.id} item={item} index={i} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-sm mb-4" style={{ color: "var(--text-3)" }}>
            Interested in working together?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              boxShadow: "0 0 24px rgba(124,58,237,0.4)",
            }}
          >
            Let's Talk
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
