export interface Experience {
  id: string
  role: string
  company: string
  status: 'In Progress' | 'Completed'
  description: string
  period: string
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'codveda',
    role: 'Frontend Development Intern',
    company: 'Codveda Technologies',
    status: 'In Progress',
    description:
      'Developing responsive web interfaces, collaborating with senior developers, and applying modern frontend practices in a professional environment.',
    period: '2025 — Present',
  },
]
