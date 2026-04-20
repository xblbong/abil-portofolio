"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Award, Code2, Briefcase, User, FolderOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Anchor sections to observe (only on landing page "/")
const ANCHOR_SECTIONS = ["about", "skills", "contact"];

const navLinks = [
  { name: "About", href: "/#about", sectionId: "about", icon: <User size={16} /> },
  { name: "Skills", href: "/#skills", sectionId: "skills", icon: <Code2 size={16} /> },
  { name: "Projects", href: "/projects", sectionId: null, icon: <FolderOpen size={16} /> },
  { name: "Experience", href: "/experience", sectionId: null, icon: <Briefcase size={16} /> },
  { name: "Certificates", href: "/certificates", sectionId: null, icon: <Award size={16} /> },
  { name: "Contact", href: "/#contact", sectionId: "contact", icon: <Mail size={16} /> },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (pathname !== "/") return () => window.removeEventListener("scroll", onScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    ANCHOR_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  if (!mounted) return null;

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.sectionId) return pathname === "/" && activeSection === link.sectionId;
    return pathname === link.href;
  };

  const isDark = theme === "dark";

  return (
    <header className="select-none fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 transition-all duration-300">
      <nav
        className="w-full max-w-6xl px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center rounded-2xl transition-all duration-500"
        style={{
          background: scrolled
            ? "var(--bg-nav-scrolled)"
            : "var(--bg-nav)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? isDark
              ? "0 4px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(139,92,246,0.08)"
              : "0 4px 30px rgba(139,92,246,0.12), 0 0 0 1px rgba(139,92,246,0.1)"
            : "none",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-xl tracking-tighter shrink-0 flex items-center gap-1.5"
        >
          <span
            style={{
              color: isDark ? "#ffffff" : "#5b21b6",
              letterSpacing: "-0.04em",
            }}
          >
            Porto
          </span>
          <span
            style={{
              color: isDark ? "#a78bfa" : "#7c3aed",
              letterSpacing: "-0.04em",
            }}
          >
            Bila
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-0.5 items-center">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  color: active
                    ? isDark ? "#c4b5fd" : "#7c3aed"
                    : isDark ? "rgba(196,181,253,0.5)" : "rgba(100,50,180,0.55)",
                  background: active
                    ? isDark ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0.1)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = isDark ? "rgba(196,181,253,0.85)" : "rgba(100,50,180,0.9)";
                    e.currentTarget.style.background = isDark ? "rgba(139,92,246,0.07)" : "rgba(139,92,246,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = isDark ? "rgba(196,181,253,0.5)" : "rgba(100,50,180,0.55)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.name}
                {active && (
                  <motion.div
                    layoutId="navActiveDot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: isDark ? "#a78bfa" : "#7c3aed" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-xl transition-all duration-300"
            style={{
              color: isDark ? "rgba(196,181,253,0.7)" : "rgba(109,40,217,0.75)",
              background: isDark ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.1)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark
                ? "rgba(139,92,246,0.16)"
                : "rgba(139,92,246,0.18)";
              e.currentTarget.style.color = isDark ? "#c4b5fd" : "#6d28d9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isDark
                ? "rgba(139,92,246,0.08)"
                : "rgba(139,92,246,0.1)";
              e.currentTarget.style.color = isDark
                ? "rgba(196,181,253,0.7)"
                : "rgba(109,40,217,0.75)";
            }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.div>
          </button>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 rounded-xl transition-all duration-200"
            style={{
              color: isDark ? "rgba(196,181,253,0.5)" : "rgba(109,40,217,0.65)",
              background: isDark ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.1)",
              border: "1px solid var(--border)",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-[72px] left-4 right-4 p-3 rounded-2xl lg:hidden flex flex-col"
            style={{
              background: isDark
                ? "rgba(6,4,20,0.97)"
                : "rgba(253,252,255,0.97)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: isDark
                ? "0 20px 60px rgba(0,0,0,0.7)"
                : "0 20px 60px rgba(139,92,246,0.15)",
            }}
          >
            {navLinks.map((link, idx) => {
              const active = isActive(link);
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.035 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200"
                    style={{
                      background: active
                        ? isDark ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0.1)"
                        : "transparent",
                      color: active
                        ? isDark ? "#c4b5fd" : "#7c3aed"
                        : isDark ? "rgba(196,181,253,0.5)" : "rgba(100,50,180,0.6)",
                    }}
                  >
                    <div
                      className="p-1.5 rounded-lg"
                      style={{
                        background: active
                          ? isDark ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.15)"
                          : isDark ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.07)",
                        color: active
                          ? isDark ? "#a78bfa" : "#7c3aed"
                          : isDark ? "rgba(167,139,250,0.4)" : "rgba(109,40,217,0.4)",
                      }}
                    >
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
