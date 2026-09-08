export type ProjectStatus =
  | 'concept'
  | 'planned'
  | 'research'
  | 'design'
  | 'prototype'
  | 'development'
  | 'testing'
  | 'live'
  | 'expanding'
  | 'completed'
  | 'paused'

export type BuildingLabel =
  | 'Building'
  | 'Expanding'
  | 'Prototype'
  | 'R&D'
  | 'Concept'
  | 'Planned'

export type ProjectType = 'project' | 'product' | 'experiment' | 'concept'

export type ProjectFilter =
  | 'all'
  | 'software'
  | 'web'
  | 'mobile'
  | 'iot'
  | 'machine-learning'
  | 'database'
  | 'client'
  | 'startup'
  | 'company'
  | 'university'
  | 'experiments'

export type RepositoryKind = 'personal' | 'organization' | 'client' | 'private'

export type Ownership = 'personal' | 'company' | 'collaboration' | 'client' | 'university'

export type RoadmapBucket = 'now' | 'next' | 'later'

export interface RepositoryRef {
  kind: RepositoryKind
  url?: string | null
}

export interface ProjectScreenshot {
  src: string
  alt: string
  caption?: string
}

export interface TechnicalSection {
  architecture?: string | null
  frontend?: string | null
  backend?: string | null
  database?: string | null
  apis?: string | null
  iotHardware?: string | null
  sensors?: string | null
  communication?: string | null
  machineLearning?: string | null
  deployment?: string | null
}

export interface Project {
  id: string
  slug: string
  title: string
  type: ProjectType
  category: string
  filters: Exclude<ProjectFilter, 'all'>[]
  status: ProjectStatus
  year: string | null
  description: string
  problem: string | null
  targetUsers: string | null
  targetMarket: string | null
  currentMarket: string | null
  expansionStrategy: string | null
  objectives: string[]
  features: string[]
  technologies: string[]
  role: string | null
  team: string | null
  company: string | null
  organizationId: string | null
  organizationUrl: string | null
  repository: RepositoryRef | null
  organizationGithub: string | null
  liveUrl: string | null
  documentationUrl: string | null
  screenshots: ProjectScreenshot[]
  architecture: string | null
  hardware: string[]
  software: string[]
  challenges: string[]
  lessons: string[]
  roadmap: string[]
  futurePlans: string[]
  featured: boolean
  ownership: Ownership
  showInBuilding: boolean
  showInLab: boolean
  showInProducts: boolean
  roadmapBucket: RoadmapBucket | null
  technical: TechnicalSection | null
  existingSystem: string | null
  enhancement: string | null
  operationalEnvironment: string | null
  responseWorkflow: string | null
}

export type OrganizationKind = 'venture' | 'collaboration' | 'client' | 'employer'

export interface OrganizationSocial {
  label: string
  url: string
}

export interface Organization {
  id: string
  slug: string
  name: string
  kind: OrganizationKind
  description: string
  mission: string | null
  whatWeBuild: string | null
  targetMarket: string | null
  role: string | null
  team: string | null
  stage: string | null
  website: string | null
  github: string | null
  socials: OrganizationSocial[]
  contact: string | null
  location: string | null
  productSlugs: string[]
  collaborationNotes: string | null
}

export type AchievementKind =
  | 'certification'
  | 'academic'
  | 'company'
  | 'product'
  | 'deployment'
  | 'client'
  | 'competition'
  | 'hackathon'
  | 'opensource'
  | 'partnership'
  | 'other'

export type AchievementStatus = 'completed' | 'in-progress' | 'planned'

export interface Achievement {
  id: string
  title: string
  kind: AchievementKind
  status: AchievementStatus
  issuer?: string
  detail?: string
}

export interface FormalExperience {
  id: string
  role: string
  company: string
  status: 'In Progress' | 'Completed'
  description: string
  period: string
}

export interface VentureExperience {
  id: string
  title: string
  organization: string
  organizationSlug?: string
  description: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface EducationRecord {
  institution: string
  degree: string
  graduation: string
  location: string
  status: string
}

export interface TimelineGroup {
  year: string
  items: string[]
}

export interface ProcessStep {
  id: string
  label: string
}

export interface BuildingItem {
  id: string
  title: string
  status: BuildingLabel
  summary: string
  href: string
  kind: 'organization' | 'project' | 'slot'
  image?: string | null
}
