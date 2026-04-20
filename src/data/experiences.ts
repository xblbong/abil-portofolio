import { ExperienceItem } from "@/src/types";

export const experiences: ExperienceItem[] = [
  // ── PROFESSIONAL EXPERIENCE ───────────────────────────────
  {
    id: "e1",
    category: "professional",
    title: "Frontend Web Developer",
    company: "Badan Inovasi dan Kreativitas (BIK) Vokasi UB",
    period: "Feb 2025 – Present",
    impact: "Vokapedia Platform",
    points: [
      "Spearheaded the development of Vokapedia, a central platform built with Next.js to showcase and commercialize student-led innovations.",
      "Implemented dynamic product catalogs and SEO-friendly architectures to increase visibility of vocational products to a wider market.",
    ],
  },
  {
    id: "e2",
    category: "professional",
    title: "Web Administrator & Creative Designer",
    company: "PSIK Faculty of Vocational Studies UB",
    period: "Jan 2025 – Feb 2026",
    impact: "1,100% Reach Increase",
    points: [
      "Managed the faculty website via WordPress for 10+ academic staff, ensuring SEO-optimized content and 100% information accuracy.",
      "Designed visual assets and user-centric content using Figma, increasing digital reach from 1,000 to 12,000+ views.",
    ],
  },
  {
    id: "e3",
    category: "professional",
    title: "Frontend Web Developer (Project-Based)",
    company: "PKKMB Vokasi Yuwaraja UB",
    period: "Aug 2025 – Sep 2025",
    impact: "1,000+ Active Users",
    points: [
      "Engineered a high-traffic student orientation portal using Laravel & Filament, handling concurrent traffic from 1,000+ active students.",
      "Acted as a hybrid developer and creative specialist, generating 12,000+ views through strategic digital asset designs.",
    ],
  },
  {
    id: "e4",
    category: "professional",
    title: "Frontend Developer (Freelance)",
    company: "ICASVE",
    period: "Jan 2025 – Mar 2025",
    impact: "5-Hour Delivery",
    points: [
      "Built admin dashboard frontend pages using Laravel in under 5 hours, ensuring on-time launch and seamless backend integration.",
      "Authored a comprehensive frontend manual book and executed 30+ manual test cases to support production stability.",
    ],
  },
  {
    id: "e5",
    category: "professional",
    title: "Frontend Developer & QA Intern",
    company: "PT. Nusantara Technology Solutions",
    period: "May 2023 – Aug 2024",
    impact: "20% Faster Delivery",
    points: [
      "Developed 10+ production-ready pages using React.js and Next.js, accelerating client delivery cycles by 20% through efficient RESTful API integrations.",
      "Translated complex Figma wireframes into clean, responsive code with 80%+ visual consistency.",
      "Implemented interactive animations and smooth transitions for a highlight project, improving landing-page engagement.",
      "Reduced potential launch errors by 15% through routine QA testing, debugging, and iterative refinement.",
    ],
  },

  // ── LEADERSHIP & VOLUNTEER ────────────────────────────────
  {
    id: "l1",
    category: "leadership",
    title: "Google Student Ambassador",
    company: "Google & Brawijaya University",
    period: "Mar 2026 – Present",
    impact: "Student Leadership",
    points: [
      "Selected as the lead student representative to bridge Google's industry-standard technologies with the Vocational Studies developer community.",
      "Facilitated tech initiatives and workshops, promoting modern web development and software engineering best practices to students.",
    ],
  },
  {
    id: "l2",
    category: "leadership",
    title: "UI/UX Speaker & Mentor",
    company: "Provoks (Programmer Vokasi UB)",
    period: "Dec 2025 – Present",
    impact: "50+ Participants",
    points: [
      "Invited as a speaker to deliver workshops on UI/UX principles to 50+ students, focusing on aesthetic and user-centric interfaces.",
    ],
  },
];

export const professionalExperiences = experiences.filter(
  (e) => e.category === "professional"
);
export const leadershipExperiences = experiences.filter(
  (e) => e.category === "leadership"
);
