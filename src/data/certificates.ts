import { Certificate } from "@/src/types";

export const certificates: Certificate[] = [
  {
    id: "c1",
    featured: true,
    title: "AWS AI Academy — AI Development",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2026 – Present",
    category: "Technical",
    image_url: "",
    cert_url: "#",
  },
  {
    id: "c2",
    featured: true,
    title: "Front-End Web Development Scholarship Awardee",
    issuer: "IDCamp × Dicoding",
    date: "Oct 2024 – Mar 2025",
    category: "Frontend",
    image_url: "",
    cert_url: "#",
  },
];

export const featuredCertificates = certificates.filter((c) => c.featured);
