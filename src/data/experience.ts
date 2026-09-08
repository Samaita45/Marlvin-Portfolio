import type { FormalExperience, VentureExperience } from '@/lib/types'

export const FORMAL_EXPERIENCE: FormalExperience[] = [
  {
    id: 'codveda',
    role: 'Front-End Development Intern',
    company: 'Codveda Technologies',
    status: 'In Progress',
    description:
      'Building responsive web interfaces and applying frontend practices in a professional team. This is formal internship experience, separate from the products I am building.',
    period: 'In progress',
  },
]

export const VENTURE_EXPERIENCE: VentureExperience[] = [
  {
    id: 'neighbourlink',
    title: 'Software engineering and planning',
    organization: 'NeighborLink Technologies',
    organizationSlug: 'neighbourlink-tech',
    description:
      'We started NeighborLink Technologies. I am working on the products we are building there, including Omnia. This is not employment.',
  },
  {
    id: 'dyke-carbon-tech',
    title: 'Software engineering and planning',
    organization: 'Dyke Carbon Tech',
    organizationSlug: 'dyke-carbon-tech',
    description: 'DCPOMS (Dyke Carbon Tech Management System) and an alarm system.',
  },
]
