"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import WindmillCanvas from "../../canvas/WindmolenCanvas";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "sblhh.m@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/xblbong",
      color: "hover:bg-white/10"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sabilah-mudrikah-41b21b301/",
      color: "hover:bg-blue-600/20"
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/sblhh.m/",
      color: "hover:bg-pink-600/20"
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505] font-lexend">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black italic text-white capitalize tracking-wide"
          >
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Connect.</span>
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base italic">Ready to build the future of the web?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD EMAIL */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative md:col-span-2 p-8 border border-white/10 rounded-[2.5rem] backdrop-blur-xl overflow-hidden"
          >
            {/* Background Spline */}
            <iframe
              src="https://my.spline.design/mapcopycopy-EquaPl52kv8mraRAGsM4XYF5-VMB/"
              className="absolute left-0 inset-0 w-[100rem] h-full -z-10"
              frameBorder="0"
            />

            {/* Overlay biar teks kebaca
            <div className="absolute inset-0 bg-black/40 -z-10" /> */}

            {/* CONTENT */}
            <div className="flex justify-between items-start">
              <div className="p-4 bg-purple-500/20 rounded-2xl text-purple-400">
                <Mail size={28} />
              </div>

              <button
                onClick={copyToClipboard}
                className="flex items-center text-gray-800 gap-2 px-4 py-2 bg-gray-600/10 rounded-full text-[10px] font-bold hover:bg-gray-700/20 transition tracking-widest"
              >
                {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                {copied ? "COPIED" : "COPY EMAIL"}
              </button>
            </div>

            <div className="mt-12">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
                Email Me
              </span>
              <a
                href={`mailto:${email}`}
                className="block text-xl md:text-3xl font-bold text-white mt-2 hover:text-purple-400 transition-colors break-all"
              >
                {email}
              </a>
            </div>
          </motion.div>


          {/* CARD WINDMILL (Spline 3D) */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-white/10 rounded-[2.5rem] flex items-center justify-center overflow-hidden min-h-[350px]">
            <WindmillCanvas />
          </div>

          {/* SOCIAL CARDS */}
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              whileHover={{ y: -5 }}
              className={`p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] flex flex-col justify-between group transition-colors ${social.color}`}
            >
              <div className="flex justify-between items-center text-gray-500 group-hover:text-white transition">
                <div className="p-3 bg-white/5 rounded-xl"><social.icon size={24} /></div>
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
              </div>
              <div className="mt-8">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{social.name}</span>
                <p className="text-white font-bold text-xl mt-1">Let&apos;s Follow</p>
              </div>
            </motion.a>
          ))}

          {/* STATUS */}
          {/* <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest tracking-tighter">Available for Freelance</span>
            </div>
            <p className="text-gray-500 text-xs italic">Based in Indonesia, <br/> Working Worldwide.</p>
          </div> */}

        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] tracking-[0.5em] uppercase italic">
            Sabilah Mudrikah — © 2024
          </p>
        </div>
      </div>
    </section>
  );
}