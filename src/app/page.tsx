import Navbar from "../components/layout/NavbarComponents";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSections/HeroSection";
import MyProjectsSection from "../components/sections/MyProject/MyProjectsSection";
import SkillsSection from "../components/sections/SkillSection/SkillSection";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import ContactSection from "../components/sections/ContactSection/ContactSection";
import CertificatesSection from "../components/sections/CertificatesSection/CertificatesSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <MyProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
