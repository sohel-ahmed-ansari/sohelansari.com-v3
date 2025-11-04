export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  details: string[];
}

export interface KeyAchievement {
  title: string;
  description: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface PersonalProject {
  name: string;
  description: string;
  links: {
    github: string;
    play_link: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  field: string;
}

export interface Name {
  first: string;
  last: string;
}

export interface Role {
  title: string;
  subtitle: string;
}

export interface ResumeData {
  name: Name;
  role: Role;
  contact: Contact;
  summary: string;
  experience: Experience[];
  key_achievements: KeyAchievement[];
  skills: string[];
  languages: Language[];
  personal_project: PersonalProject;
  education: Education;
  driving_license: string;
  interests: string[];
}
