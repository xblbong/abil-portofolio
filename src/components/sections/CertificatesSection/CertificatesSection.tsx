"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { featuredCertificates } from "@/src/data/certificates";

const catColors: Record<string, string> = {
  Technical: "#a78bfa",
  Frontend: "#34d399",
  Academic: "#60a5fa",
  Leadership: "#f472b6",
};

export default function CertificatesSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      id="certificates"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-section)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{
                background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.2)",
                color: "#a78bfa",
              }}
            >
              <ShieldCheck size={11} />
              Verified Credentials
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
              <span style={{ color: "var(--text-1)" }}>Proof of</span>{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, var(--purple-400), var(--purple-300))" }}
              >
                Expertise.
              </span>
            </h2>
            <p className="mt-3 text-sm max-w-md" style={{ color: "var(--text-2)" }}>
              Certifications that validate my skills — from national licensing to global platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/certificates"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group hover:-translate-y-0.5"
              style={{
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.3)",
                color: "var(--purple-400)",
              }}
            >
              View All
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Certificate Grid — featured only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCertificates.map((cert, idx) => {
            const color = catColors[cert.category] ?? "#a78bfa";
            const imageUrl = cert.image_url?.trim();
            const hasImage = Boolean(imageUrl);
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `1px solid ${color}35`;
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.5)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden bg-[#0a0817]">
                  {hasImage ? (
                    <img
                      src={imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-90"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-2"
                      style={{
                        background: "radial-gradient(circle at 30% 20%, rgba(167,139,250,0.18) 0%, rgba(10,8,23,0.2) 55%, rgba(10,8,23,1) 100%)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-2xl grid place-items-center"
                        style={{ background: `${color}22`, border: `1px solid ${color}35` }}
                      >
                        <ShieldCheck size={18} style={{ color }} />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wide" style={{ color: "var(--text-3)" }}>
                        No preview image
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c1e] via-[#0f0c1e]/40 to-transparent" />
                  {hasImage && (
                    <button
                      onClick={() => setLightbox(imageUrl)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white"
                        style={{ background: `${color}25`, border: `1px solid ${color}40`, backdropFilter: "blur(10px)" }}
                      >
                        <Search size={10} /> Preview
                      </div>
                    </button>
                  )}
                  <div className="absolute top-2 left-2">
                    <span
                      className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase"
                      style={{ background: `${color}20`, border: `1px solid ${color}40`, color }}
                    >
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3
                    className="font-bold text-xs leading-snug mb-1 group-hover:text-purple-400 transition-colors line-clamp-2"
                    style={{ color: "var(--text-1)" }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-[11px] mb-3" style={{ color: "var(--text-3)" }}>
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/certificates"
            className="text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5"
            style={{ color: "var(--text-3)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--purple-400)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-3)"}
          >
            View all certifications <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 cursor-zoom-out"
          style={{ background: "rgba(3,2,12,0.95)", backdropFilter: "blur(20px)" }}
          onClick={() => setLightbox(null)}
        >
          <motion.img
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightbox}
            alt="Certificate"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            style={{ border: "1px solid rgba(167,139,250,0.2)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
