export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

export interface Experience {
  period: string
  company: string
  role: string
  location: string
  type: string
  bullets: string[]
  current?: boolean
}

export interface Project {
  name: string
  description: string
  tech: string[]
  github?: string
  live?: string
  featured?: boolean
}

export interface Education {
  degree: string
  university: string
  period: string
  location: string
  cgpa: string
  achievements: string[]
}

export interface Patent {
  title: string
  applicationNo: string
  description: string
}

export interface Publication {
  title: string
  publisher: string
  description: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}
