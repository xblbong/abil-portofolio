export type ProjectType = "web" | "design" | "video";

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link_demo?: string;
  link_github?: string;
  tech_stack: string[];
  type: ProjectType;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Others';
  level?: number;
}

export interface ExperienceItem {
  id: string;
  category: "professional" | "leadership";
  title: string;
  company: string;
  period: string;
  points: string[];
  impact: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "Technical" | "Academic" | "Frontend" | "Leadership";
  image_url: string;
  cert_url?: string;
  featured?: boolean;
}