import { ExperienceItem } from "@/src/types";

export const experiences: ExperienceItem[] = [
  // ── PROFESSIONAL EXPERIENCE ───────────────────────────────
  {
    id: "e1",
    category: "professional",
    title: "Frontend Developer & QA (Freelance)",
    company: "ICASVE 2025",
    period: "Jan 2025 – Mar 2025",
    impact: "Fast Delivery",
    points: [
      "Developed a fully functional admin dashboard using Laravel in under 5 hours, beating the deadline.",
      "Authored a comprehensive frontend manual book for seamless project handovers to the client team.",
    ],
  },
  {
    id: "e2",
    category: "professional",
    title: "Social Media & WordPress Specialist (Intern)",
    company: "PSIK Brawijaya University",
    period: "Dec 2024 – Present",
    impact: "1,100% Reach Increase",
    points: [
      "Integrated Google AI & Gemini tools for content trend analysis and social media strategy.",
      "Managed an SEO-optimized WordPress site, maintaining 100% information accuracy and uptime.",
    ],
  },
  {
    id: "e3",
    category: "professional",
    title: "Frontend Developer (Intern)",
    company: "PT. Nusantara Technology Solutions",
    period: "May 2023 – Aug 2024",
    impact: "5+ Pages Optimized",
    points: [
      "Optimized 5–10 production-level pages using React.js and Next.js for real clients.",
      "Improved UI responsiveness and cross-browser compatibility, accelerating client delivery cycles.",
    ],
  },

  // ── LEADERSHIP & VOLUNTEER ────────────────────────────────
  {
    id: "l1",
    category: "leadership",
    title: "UI/UX Designer Mentor & Speaker",
    company: "PROVOKS Community",
    period: "Nov 2025 – Present",
    impact: "30+ Students Mentored",
    points: [
      "Mentored 30+ students in user-centered design principles and modern UI best practices.",
      "Facilitated hands-on workshops covering Figma prototyping and frontend implementation.",
    ],
  },
  {
    id: "l2",
    category: "leadership",
    title: "Staff of Creative & Frontend Development",
    company: "PKKMB Yuwaraja UB",
    period: "Aug – Sep 2025",
    impact: "0% Downtime",
    points: [
      "Architected and deployed an orientation portal using Laravel handling 1,000+ student registrations.",
      "Ensured 0% downtime during peak onboarding days through proactive monitoring and fixes.",
    ],
  },
];

export const professionalExperiences = experiences.filter(
  (e) => e.category === "professional"
);
export const leadershipExperiences = experiences.filter(
  (e) => e.category === "leadership"
);
