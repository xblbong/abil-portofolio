"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShieldCheck, ExternalLink, Search, X, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Navbar from "@/src/components/layout/NavbarComponents";
import { certificates } from "@/src/data/certificates";
import { Certificate } from "@/src/types";
import PageLoader from "@/src/components/ui/PageLoader";
import Footer from "@/src/components/layout/Footer";

type CatTab = "All" | Certificate["category"];

const categoryTabs: CatTab[] = ["All", "Technical", "Frontend", "Academic", "Leadership"];

const catColors: Record<CatTab, string> = {
  All: "#a78bfa",
  Technical: "#a78bfa",
  Frontend: "#34d399",
  Academic: "#60a5fa",
  Leadership: "#f472b6",
};

function CertCard({
  cert,
  index,
  onPreview,
}: {
  cert: Certificate;
  index: number;
  onPreview: (url: string) => void;
}) {
  const color = catColors[cert.category] ?? "#a78bfa";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "linear-gradient(145deg, #0f0c1e, #0a0817)",
        border: "1px solid rgba(139,92,246,0.1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${color}35`;
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(139,92,246,0.1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
      />

      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-[#0a0817]">
        <img
          src={cert.image_url}
          alt={cert.title}
          className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c1e] via-[#0f0c1e]/40 to-transparent" />

        {/* Preview button */}
        <button
          onClick={() => onPreview(cert.image_url)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
            style={{ background: `${color}30`, border: `1px solid ${color}50`, backdropFilter: "blur(10px)" }}
          >
            <Search size={11} />
            Preview
          </div>
        </button>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase"
            style={{
              background: `${color}20`,
              border: `1px solid ${color}40`,
              color,
            }}
          >
            {cert.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-mono" style={{ color: "rgba(196,181,253,0.4)" }}>
            {cert.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-white text-sm leading-snug mb-1 group-hover:text-purple-300 transition-colors duration-200">
          {cert.title}
        </h3>
        <p className="text-[12px] mb-4" style={{ color: "rgba(196,181,253,0.45)" }}>
          {cert.issuer}
        </p>
        {cert.cert_url && cert.cert_url !== "#" && (
          <a
            href={cert.cert_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-200"
            style={{ color: "rgba(196,181,253,0.3)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = color}
            onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.3)"}
          >
            Verify Credential
            <ExternalLink size={9} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function CertificatesPage() {
  const [activeTab, setActiveTab] = useState<CatTab>("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered = useMemo(() =>
    activeTab === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeTab),
    [activeTab]
  );

  const counts = useMemo(() => {
    const c: Record<CatTab, number> = { All: certificates.length, Technical: 0, Frontend: 0, Academic: 0, Leadership: 0 };
    certificates.forEach((cert) => { c[cert.category] = (c[cert.category] ?? 0) + 1; });
    return c;
  }, []);

  const accentColor = catColors[activeTab];

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #03020c 0%, #06041a 50%, #03020c 100%)" }}
    >
      <PageLoader minDuration={600} />
      <Navbar />

      {/* Ambient glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, ${accentColor}12 0%, transparent 70%)`,
          transition: "background 0.5s ease",
        }}
      />

      <main className="relative pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-12 transition-colors"
            style={{ color: "rgba(196,181,253,0.5)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#a78bfa"}
            onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.5)"}
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
          className="mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
            style={{
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#a78bfa",
            }}
          >
            <ShieldCheck size={12} />
            Verified Credentials
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            <span className="text-white">Proof of</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-300">
              Expertise.
            </span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "rgba(196,181,253,0.55)" }}>
            Certifications and credentials that validate my technical skills and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab;
            const color = catColors[tab];
            const count = counts[tab] ?? 0;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: isActive ? `${color}18` : "rgba(255,255,255,0.04)",
                  border: isActive ? `1px solid ${color}50` : "1px solid rgba(255,255,255,0.07)",
                  color: isActive ? color : "rgba(196,181,253,0.4)",
                  boxShadow: isActive ? `0 0 20px ${color}15` : "none",
                }}
              >
                {tab === "All" && <LayoutGrid size={12} />}
                {tab}
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded-md"
                  style={{
                    background: isActive ? `${color}25` : "rgba(255,255,255,0.06)",
                    color: isActive ? color : "rgba(196,181,253,0.35)",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div
          className="h-px mb-12 transition-all duration-500"
          style={{ background: `linear-gradient(90deg, ${accentColor}40, transparent)` }}
        />

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((cert, idx) => (
              <CertCard
                key={cert.id}
                cert={cert}
                index={idx}
                onPreview={(url) => setLightboxImg(url)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs mt-20 tracking-wider"
          style={{ color: "rgba(196,181,253,0.25)" }}
        >
          And 10+ other technical & leadership certifications...
        </motion.p>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 cursor-zoom-out"
            style={{ background: "rgba(3,2,12,0.95)", backdropFilter: "blur(20px)" }}
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={lightboxImg}
              alt="Certificate"
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              style={{ border: "1px solid rgba(167,139,250,0.2)" }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full transition-all duration-200"
              style={{
                background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.2)",
                color: "#a78bfa",
              }}
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
