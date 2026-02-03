import Navbar from "../components/layout/NavbarComponents";
import GlassOrb from "../components/canvas/GlassOrb";
import { getCertificates, getExperiences, getProjects, getSkills } from "../services/dataService";
import MouseGlow from "../components/effect/MouseGlow";
import HeroSection from "../components/sections/HeroSections/HeroSection";
import { Project } from "../types";
import MyProjectsSection from "../components/sections/MyProject/MyProjectsSection";
import SkillsSection from "../components/sections/SkillSection/SkillSection";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import ContactSection from "../components/sections/ContactSection/ContactSection";

const dummyProjects: Project[] = [
  {
    id: "1",
    title: "Klinik rumah swadaya",
    description: "Platform layanan konsultasi dan bantuan teknis gratis dari Kementerian PUPR untuk membantu masyarakat membangun atau memperbaiki rumah agar layak huni secara swadaya.",
    image_url: "/image/project/7.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind"],
    link_demo: "https://krs.perumahan.pu.go.id/",
    link_github: "https://github.com"
  },
  {
    id: "2",
    title: "PT. Nusantech",
    description: "PT. Solusi Teknologi Nusantara (Nusantech) adalah perusahaan penyedia layanan IT dan riset teknologi yang berfokus pada transformasi digital",
    image_url: "image/project/nusantech.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind"],
    link_demo: "https://nusantech.com/en",
    link_github: "https://github.com"
  },
  {
    id: "3",
    title: "Joint Crediting Mechanism (JCM)",
    description: "inisiatif Pemerintah Jepang yang mendorong perusahaan-perusahaan Jepang untuk berinvestasi dalam proyek-proyek pembangunan rendah karbon di Indonesia.",
    image_url: "image/project/jcm.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind"],
    link_demo: "https://jcm.ekon.go.id/id/",
    link_github: "https://gitlab.com/nusantech/jcm/frontend-jcm"
  },
  {
    id: "4",
    title: "we run the city",
    description: "We Run the City! Dengan jarak setengah marathon yang menggugah (21 kilometer), acara ini menawarkan peserta tantangan lari.",
    image_url: "image/project/werunthecity.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind"],
    link_demo: "https://jcm.ekon.go.id/id/",
    link_github: "http://staging.werunthecity.id/"
  },
  {
    id: "5",
    title: "ICASVE 2025",
    description: "Humans are experiencing significant shifts in the digital era, where artificial intelligence (AI) and creative innovation are playing pivotal roles in shaping the future of entrepreneurship.",
    image_url: "image/project/icasve.png",
    tech_stack: ["Laravel", "php", "Mysql", "Tailwind"],
    link_demo: "https://icasve.ub.ac.id/",
    link_github: "https://github.com/AnasKhalif/ICASVE"
  },
  {
    id: "6",
    title: "HMPSTI UB Kabinet Gema Nirvana 2023",
    description: "HMPSTI berperan sebagai wadah bagi mahasiswa untuk mengembangkan keterampilan, pengetahuan, dan pengalaman dalam bidang teknologi informasi melalui berbagai kegiatan seperti seminar, workshop, dan kompetisi. ",
    image_url: "image/project/hmpsti.png",
    tech_stack: ["Laravel", "php", "Mysql", "Tailwind"],
    link_demo: "https://www.hmpstiub.site/",
    link_github: "https://github.com/Alfahreziii/HMPSTIUB"
  },
  {
    id: "7",
    title: "Samba TI UB 2025",
    description: "Sambut Mahasiswa Baru Teknologi Informasi (SAMBA TI) adalah acara orientasi yang dirancang khusus untuk menyambut mahasiswa baru di jurusan Teknologi Informasi.",
    image_url: "image/project/sambati.png",
    tech_stack: ["Laravel", "php", "Mysql", "Tailwind"],
    link_demo: "https://hmpsti.my.id/login",
    link_github: "https://github.com/xblbong/samba-ti"
  },
  {
    id: "8",
    title: "PKKMB Yuwaraja XVII UB 2023",
    description: "PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru) adalah serangkaian kegiatan yang dirancang untuk membantu mahasiswa baru beradaptasi dengan lingkungan kampus dan mempersiapkan mereka untuk kehidupan akademik dan sosial di perguruan tinggi.",
    image_url: "image/project/yuwarajaxvii.png",
    tech_stack: ["Laravel breeze", "filament", "php", "Mysql", "Tailwind"],
    link_demo: "https://yuwaraja.my.id/",
    link_github: "https://github.com/3EZYY/yuwarajaxvii"
  },
  {
    id: "9",
    title: "Fakultas Vokasi UB",
    description: "Website Fakultas Vokasi adalah portal resmi yang menyediakan informasi lengkap tentang Fakultas Vokasi Universitas Brawijaya, termasuk program studi, fasilitas, kegiatan mahasiswa, dan berita terkini.",
    image_url: "image/project/vokasiub.png",
    tech_stack: ["wordpress",],
    link_demo: "https://vokasi.ub.ac.id/",
    link_github: ""
  },
];

// my skills data
const mySkills = [
  { id: "1", name: "React / Next.js", category: "Frontend", level: 90 },
  { id: "2", name: "TypeScript", category: "Frontend", level: 85 },
  { id: "3", name: "Three.js", category: "Frontend", level: 75 },
  { id: "4", name: "Tailwind CSS", category: "Frontend", level: 95 },
  { id: "5", name: "Supabase", category: "Backend", level: 70 },
  { id: "6", name: "PostgreSQL", category: "Backend", level: 65 },
  { id: "7", name: "Git / GitHub", category: "Tools", level: 90 },
  { id: "8", name: "Figma", category: "Design", level: 80 },
];

export default async function HomePage() {
  const [projects, skills, experiences, certs] = await Promise.all([
    getProjects(), getSkills(), getExperiences(), getCertificates()
  ]);
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MyProjectsSection projects={dummyProjects} />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
