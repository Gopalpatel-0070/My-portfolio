
export interface Project {
  title: string;
  type: string;
  description: string;
  features: string[];
  tech: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  detail: string;
}

export enum SkillCategory {
  Frontend = "Frontend",
  Backend = "Backend",
  Tools = "Tools",
  Databases = "Databases",
  Others = "Others"
}

export interface Skill {
  name: string;
  category: SkillCategory;
}
