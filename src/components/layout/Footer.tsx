"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { label: "GitHub",    href: "https://github.com/xblbong",     icon: <Github size={15} /> },
  { label: "LinkedIn",  href: "https://linkedin.com",            icon: <Linkedin size={15} /> },
  { label: "Instagram", href: "https://instagram.com/sblhh.m",  icon: <Instagram size={15} /> },
  { label: "Email",     href: "mailto:sabilahmudrikah@email.com",icon: <Mail size={15} /> },
];

const quickLinks = [
  { name: "About",        href: "/#about" },
  { name: "Skills",       href: "/#skills" },
  { name: "Projects",     href: "/projects" },
  { name: "Experience",   href: "/experience" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact",      href: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{
        background: "#04030c",
        borderColor: "rgba(139,92,246,0.1)",
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Left: Logo + tagline */}
          <div className="space-y-1.5">
            <Link
              href="/"
              className="font-black text-base tracking-tighter"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 60%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PortoBila
            </Link>
            <p className="text-[11px]" style={{ color: "rgba(196,181,253,0.35)" }}>
              Crafting digital experiences with precision.
            </p>
          </div>

          {/* Center: Quick links */}
          <div className="hidden md:flex items-center gap-5">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-medium transition-colors duration-200"
                style={{ color: "rgba(196,181,253,0.35)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#c4b5fd"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.35)"}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                  color: "rgba(167,139,250,0.4)",
                  background: "rgba(139,92,246,0.06)",
                  border: "1px solid rgba(139,92,246,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a78bfa";
                  e.currentTarget.style.background = "rgba(139,92,246,0.14)";
                  e.currentTarget.style.border = "1px solid rgba(139,92,246,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(167,139,250,0.4)";
                  e.currentTarget.style.background = "rgba(139,92,246,0.06)";
                  e.currentTarget.style.border = "1px solid rgba(139,92,246,0.1)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(139,92,246,0.07)" }}
        >
          <p className="text-[10px]" style={{ color: "rgba(196,181,253,0.22)" }}>
            © {new Date().getFullYear()} Sabilah Mudrikah. All rights reserved.
          </p>
          <p className="text-[10px]" style={{ color: "rgba(196,181,253,0.22)" }}>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
