export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link_demo?: string;
  link_github?: string;
  tech_stack: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Others';
  level?: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  start_date: string;
  end_date?: string; // Jika null, berarti "Present"
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  cert_url?: string;
  date?: string;
}