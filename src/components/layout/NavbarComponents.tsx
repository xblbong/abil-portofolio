"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Menu,
  X,
  Award,
  Code2,
  Briefcase,
  User,
  FolderArchiveIcon,
  Heart,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about", icon: <User size={18} />, isPending: false },
  { name: "Skills", href: "#skills", icon: <Code2 size={18} />, isPending: false },
  {
    name: "MyProjects",
    href: "#projects",
    icon: <FolderArchiveIcon size={18} />,
    isPending: false,
  },
  // isPending: true untuk yang belum ada kontennya
  { name: "Experience", href: "#experience", icon: <Briefcase size={18} />, isPending: true },
  { name: "Certificates", href: "#certificates", icon: <Award size={18} />, isPending: true },
  { name: "Contact", href: "#contact", icon: <Mail size={18} />, isPending: false },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (e: React.MouseEvent, link: any) => {
    if (link.isPending) {
      e.preventDefault(); // Mencegah scroll ke id yang kosong
      alert("Maaf ya maniezz fitur ini masih di proses Abil \nKalau kamu mau order jasa freelance bisa klik bagian menu kontak yaa! ><");
    } else {
      setIsOpen(false); // Tutup menu mobile jika link valid diklik
    }
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="w-full max-w-7xl backdrop-blur-xl bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl md:rounded-full px-10 py-3 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <h1
          className="font-bold text-2xl tracking-tighter
            bg-gradient-to-r from-white via-purple-200 to-purple-400
            bg-clip-text text-transparent
            [filter:drop-shadow(0_0_2px_rgba(0,0,0,0.5))]"
        >
          PortoBila
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="px-4 py-2 rounded-full text-lg font-medium 
             text-white
             hover:bg-white/10 dark:hover:bg-white/5 
             transition-all relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.div className="absolute inset-0 bg-purple-300/80 rounded-full scale-0 group-hover:scale-100 transition-transform origin-center" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2.5 rounded-full bg-gray-500/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl lg:hidden flex flex-col gap-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-purple-500/10 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  {link.icon}
                </div>
                <span className="text-lg font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}