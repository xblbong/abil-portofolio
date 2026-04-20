"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, Sparkles } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/xblbong", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/sabilah-mudrikah-41b21b301", Icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/sblhh.m", Icon: Instagram },
  { label: "Email", href: "mailto:sblhh.m@gmail.com", Icon: Mail },
];

const quickLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t themed-footer"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Top accent glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px pointer-events-none"
        style={{
          background: "var(--footer-accent-line)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Left: Branding block */}
          <div className="space-y-2">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 select-none rounded-xl px-3 py-2 border"
              style={{
                background: "var(--footer-brand-bg)",
                borderColor: "var(--footer-brand-border)",
                boxShadow: "var(--footer-brand-shadow)",
              }}
            >
              <span
                className="grid place-items-center w-7 h-7 rounded-lg"
                style={{
                  background: "var(--footer-brand-icon-bg)",
                  border: "1px solid var(--footer-brand-icon-border)",
                }}
              >
                <Sparkles size={14} style={{ color: "var(--footer-brand-icon-fg)" }} />
              </span>
              <span
                style={{
                  color: "var(--text-1)",
                  letterSpacing: "-0.04em",
                }}
              >
                Porto
              </span>
              <span
                style={{
                  color: "var(--purple-400)",
                  letterSpacing: "-0.04em",
                }}
              >
                Bila
              </span>
              <span
                className="absolute -bottom-[1px] left-3 right-3 h-[2px] w-0 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300 rounded-full"
                style={{ background: "var(--footer-underline-grad)" }}
              />
            </Link>

            <p
              className="text-[11px] max-w-[200px] leading-relaxed"
              style={{ color: "var(--text-3)" }}
            >
              Crafting digital experiences with precision.
            </p>

            {/* Colored dot row */}
            <div className="flex items-center gap-1 pt-0.5">
              {["#b06fec", "#9d54e0", "#7c3aed"].map((c) => (
                <span
                  key={c}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>

          {/* Center: Quick links */}
          <div className="hidden md:flex items-center gap-5">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-medium transition-colors duration-200 hover:text-[var(--footer-link-hover)]"
                style={{ color: "var(--text-3)" }}
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
                className="p-2.5 rounded-xl transition-all duration-200 border hover:-translate-y-0.5 hover:text-[var(--footer-social-hover-fg)] hover:[background:var(--footer-social-hover-bg)] hover:[border-color:var(--footer-social-hover-border)]"
                style={{
                  color: "var(--footer-social-fg)",
                  background: "var(--footer-social-bg)",
                  borderColor: "var(--footer-social-border)",
                }}
              >
                <s.Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 border-t"
          style={{ borderTopColor: "var(--footer-divider)" }}
        >
          <p className="text-[10px]" style={{ color: "var(--text-3)" }}>
            &copy; {new Date().getFullYear()} Sabilah Mudrikah. All rights reserved.
          </p>
          <p className="text-[10px]" style={{ color: "var(--text-3)" }}>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
