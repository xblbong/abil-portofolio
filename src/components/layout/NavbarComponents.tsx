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
  { name: "About",        href: "/#about",        sectionId: "about",        icon: <User size={16} /> },
  { name: "Skills",       href: "/#skills",       sectionId: "skills",       icon: <Code2 size={16} /> },
  { name: "Projects",     href: "/projects",      sectionId: null,           icon: <FolderOpen size={16} /> },
  { name: "Experience",   href: "/experience",    sectionId: null,           icon: <Briefcase size={16} /> },
  { name: "Certificates", href: "/certificates",  sectionId: null,           icon: <Award size={16} /> },
  { name: "Contact",      href: "/#contact",      sectionId: "contact",      icon: <Mail size={16} /> },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Which anchor section is currently visible (null = none / at top)
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setMounted(true);

    // Scroll-aware background
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Only run IntersectionObserver on landing page
    if (pathname !== "/") return () => window.removeEventListener("scroll", onScroll);

    // Observe each section
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Trigger when section reaches ~30% of viewport height
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
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

  /**
   * Determine if a nav link is "active":
   * - Route links (/projects etc.) → active when pathname matches
   * - Anchor links (/#about etc.) → active only when that section is in view
   */
  const isActive = (link: typeof navLinks[0]) => {
    if (link.sectionId) {
      // Anchor link: only active when section is in viewport
      return pathname === "/" && activeSection === link.sectionId;
    }
    // Route link
    return pathname === link.href;
  };

  return (
    <header className="select-none fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
      <nav
        className="w-full max-w-6xl px-6 py-3 flex justify-between items-center transition-all duration-500 rounded-2xl"
        style={{
          background: scrolled ? "rgba(6,4,20,0.88)" : "rgba(6,4,20,0.5)",
          border: "1px solid rgba(139,92,246,0.15)",
          backdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.08)"
            : "none",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-xl tracking-tighter shrink-0"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 60%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PortoBila
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
                  color: active ? "#c4b5fd" : "rgba(196,181,253,0.5)",
                  background: active ? "rgba(139,92,246,0.12)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "rgba(196,181,253,0.85)";
                    e.currentTarget.style.background = "rgba(139,92,246,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "rgba(196,181,253,0.5)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.name}
                {/* Active dot indicator */}
                {active && (
                  <motion.div
                    layoutId="navActiveDot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#a78bfa" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-xl transition-all duration-200"
            style={{
              color: "rgba(196,181,253,0.5)",
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.12)",
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 rounded-xl transition-all duration-200"
            style={{
              color: "rgba(196,181,253,0.5)",
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.12)",
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
              background: "rgba(6,4,20,0.96)",
              border: "1px solid rgba(139,92,246,0.18)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
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
                      background: active ? "rgba(139,92,246,0.12)" : "transparent",
                      color: active ? "#c4b5fd" : "rgba(196,181,253,0.5)",
                    }}
                  >
                    <div
                      className="p-1.5 rounded-lg"
                      style={{
                        background: active ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.08)",
                        color: active ? "#a78bfa" : "rgba(167,139,250,0.4)",
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