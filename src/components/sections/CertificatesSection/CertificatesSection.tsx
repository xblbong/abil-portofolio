"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Search } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    id: "1",
    title: "Junior Web Developer (BNSP)",
    issuer: "LSP Teknologi Digital",
    date: "2024",
    category: "Technical",
    image_url: "/cert/bnsp.jpg", 
    cert_url: "#"
  },
  {
    id: "2",
    title: "Top Achiever - Frontend Path",
    issuer: "IDCamp x Dicoding",
    date: "2024",
    category: "Technical",
    image_url: "/cert/dicoding.jpg",
    cert_url: "#"
  },
  {
    id: "3",
    title: "Information Technology Minor Website",
    issuer: "Brawijaya University",
    date: "2024",
    category: "Academic",
    image_url: "/cert/ub.jpg",
    cert_url: "#"
  },
  {
    id: "4",
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    category: "Frontend",
    image_url: "/cert/fcc.jpg",
    cert_url: "#"
  }
  // Tambahkan sertifikat lainnya di sini...
];

export default function CertificatesSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-24 bg-[#050505] font-lexend relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold tracking-[0.2em] capitalize"
          >
            <ShieldCheck size={14} /> Verified Credentials
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black italic text-white capitalize tracking-tighter">
            Badges of <span className="text-purple-600">Honor.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto italic text-sm md:text-base">
            Professional certifications and learning milestones that validate my technical expertise.
          </p>
        </div>

        {/* Grid Sertifikat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-purple-600/30 transition-all shadow-2xl"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Preview */}
                <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden bg-purple-900/10">
                  <img 
                    src={cert.image_url} 
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <button 
                    onClick={() => setSelectedImg(cert.image_url)}
                    className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                  >
                    <Search className="text-white" size={32} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-bold text-purple-500 capitalize tracking-widest px-2 py-1 bg-purple-500/10 rounded-md">
                        {cert.category}
                      </span>
                      <span className="text-xs text-gray-600 font-bold italic">{cert.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">{cert.issuer}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <a 
                      href={cert.cert_url} 
                      target="_blank"
                      className="flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-white capitalize tracking-[0.2em] transition"
                    >
                      Verify Credential <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Tambahan (UX: Mengurangi keriuhan) */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm italic">
            And 10+ other technical & leadership certifications...
          </p>
        </div>
      </div>

      {/* Lightbox / Preview Modal (UX: User ga perlu pindah tab buat liat gambar) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImg} 
            className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10"
          />
          <button className="absolute top-10 right-10 text-white text-4xl font-light">&times;</button>
        </div>
      )}
    </section>
  );
}