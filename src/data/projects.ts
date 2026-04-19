import { Project } from "@/src/types";

export const allProjects: Project[] = [
  // ── WEB PROJECTS ──────────────────────────────────────────
  {
    id: "w1",
    type: "web",
    featured: true,
    title: "Klinik Rumah Swadaya",
    description:
      "Platform konsultasi & bantuan teknis gratis dari Kementerian PUPR untuk membantu masyarakat membangun rumah layak huni secara swadaya.",
    image_url: "/image/project/7.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link_demo: "https://krs.perumahan.pu.go.id/",
  },
  {
    id: "w2",
    type: "web",
    featured: true,
    title: "PT. Nusantech",
    description:
      "Company profile & layanan IT untuk PT. Solusi Teknologi Nusantara, perusahaan penyedia riset teknologi yang berfokus pada transformasi digital.",
    image_url: "/image/project/nusantech.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link_demo: "https://nusantech.com/en",
  },
  {
    id: "w3",
    type: "web",
    featured: true,
    title: "Joint Crediting Mechanism (JCM)",
    description:
      "Portal inisiatif Pemerintah Jepang untuk mendorong investasi proyek pembangunan rendah karbon di Indonesia.",
    image_url: "/image/project/jcm.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link_demo: "https://jcm.ekon.go.id/id/",
    link_github: "https://gitlab.com/nusantech/jcm/frontend-jcm",
  },
  {
    id: "w4",
    type: "web",
    featured: false,
    title: "We Run The City",
    description:
      "Landing page event half-marathon 21km. Tampilan yang energik dan responsif untuk menarik pendaftaran peserta lomba lari.",
    image_url: "/image/project/werunthecity.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link_demo: "http://staging.werunthecity.id/",
  },
  {
    id: "w5",
    type: "web",
    featured: false,
    title: "ICASVE 2025",
    description:
      "Website konferensi internasional tentang AI dan inovasi kreatif yang memiliki admin dashboard yang dikerjakan dalam waktu kurang dari 5 jam.",
    image_url: "/image/project/icasve.png",
    tech_stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    link_demo: "https://icasve.ub.ac.id/",
    link_github: "https://github.com/AnasKhalif/ICASVE",
  },
  {
    id: "w6",
    type: "web",
    featured: false,
    title: "HMPSTI UB — Kabinet Gema Nirvana",
    description:
      "Portal resmi Himpunan Mahasiswa Program Studi Teknologi Informasi UB. Menampilkan kegiatan, program kerja, dan informasi organisasi.",
    image_url: "/image/project/hmpsti.png",
    tech_stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    link_demo: "https://www.hmpstiub.site/",
    link_github: "https://github.com/Alfahreziii/HMPSTIUB",
  },
  {
    id: "w7",
    type: "web",
    featured: false,
    title: "Samba TI UB 2025",
    description:
      "Portal orientasi mahasiswa baru Teknologi Informasi UB. Sistem registrasi, jadwal kegiatan, dan informasi SAMBA TI.",
    image_url: "/image/project/sambati.png",
    tech_stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    link_demo: "https://hmpsti.my.id/login",
    link_github: "https://github.com/xblbong/samba-ti",
  },
  {
    id: "w8",
    type: "web",
    featured: false,
    title: "PKKMB Yuwaraja XVII UB 2023",
    description:
      "Platform digital PKKMB UB untuk 1,000+ mahasiswa baru. Mengelola registrasi, jadwal, dan informasi kegiatan orientasi kampus.",
    image_url: "/image/project/yuwarajaxvii.png",
    tech_stack: ["Laravel Breeze", "Filament", "PHP", "MySQL", "Tailwind CSS"],
    link_demo: "https://yuwaraja.my.id/",
    link_github: "https://github.com/3EZYY/yuwarajaxvii",
  },
  {
    id: "w9",
    type: "web",
    featured: false,
    title: "Fakultas Vokasi UB",
    description:
      "Website resmi Fakultas Vokasi Universitas Brawijaya. Menyediakan informasi program studi, fasilitas, berita, dan kegiatan fakultas.",
    image_url: "/image/project/vokasiub.png",
    tech_stack: ["WordPress"],
    link_demo: "https://vokasi.ub.ac.id/",
  },

  // ── DESIGN PROJECTS ──────────────────────────────────────
  {
    id: "d1",
    type: "design",
    featured: true,
    title: "Brand Identity — HMPSTI UB",
    description:
      "Perancangan identitas visual lengkap untuk HMPSTI UB Kabinet Gema Nirvana 2023, meliputi logo, color palette, typography, dan panduan penggunaan aset.",
    image_url: "/image/project/hmpsti.png",
    tech_stack: ["Figma", "Illustrator"],
  },
  {
    id: "d2",
    type: "design",
    featured: true,
    title: "UI/UX Design — Samba TI Portal",
    description:
      "Desain antarmuka portal orientasi mahasiswa baru dengan fokus pada kemudahan navigasi, user flow yang intuitif, dan visual yang sesuai identitas TI UB.",
    image_url: "/image/project/sambati.png",
    tech_stack: ["Figma", "Canva"],
  },
  {
    id: "d3",
    type: "design",
    featured: false,
    title: "Social Media Kit — PSIK UB",
    description:
      "Desain konten media sosial terpadu untuk PSIK Brawijaya University. Termasuk template post, story, dan banner event berkonsep modern dan profesional.",
    image_url: "/image/project/hmpsti.png",
    tech_stack: ["Canva", "Figma"],
  },

  // ── VIDEO PROJECTS ────────────────────────────────────────
  {
    id: "v1",
    type: "video",
    featured: true,
    title: "Aftermovie SAMBA TI 2025",
    description:
      "Video dokumentasi dan aftermovie acara orientasi mahasiswa baru Teknologi Informasi UB 2025. Dikerjakan dengan pemotongan cinematic dan color grading.",
    image_url: "/image/project/sambati.png",
    tech_stack: ["Filmora", "CapCut"],
  },
  {
    id: "v2",
    type: "video",
    featured: true,
    title: "Konten Video — PSIK UB",
    description:
      "Seri konten video edukasi dan promosi untuk PSIK Brawijaya University. Meliputi Reels, Short, dan video profile yang dioptimasi untuk media sosial.",
    image_url: "/image/project/hmpsti.png",
    tech_stack: ["CapCut", "CCP"],
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);
export const webProjects = allProjects.filter((p) => p.type === "web");
export const designProjects = allProjects.filter((p) => p.type === "design");
export const videoProjects = allProjects.filter((p) => p.type === "video");
