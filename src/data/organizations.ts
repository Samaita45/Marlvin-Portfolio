import type { Organization } from '@/lib/types'

/**
 * Add a company or organization here, then set `organizationId` on its projects.
 * Leave unknown fields as null. Do not invent mission, team, funding, or customers.
 */
export const ORGANIZATIONS: Organization[] = [
  {
    id: 'neighbourlink',
    slug: 'neighbourlink-tech',
    name: 'NeighborLink Technologies',
    kind: 'venture',
    description:
      'A technology venture we started. Current public product: Omnia, a food delivery app for Zimbabwe.',
    mission: null,
    whatWeBuild: 'Software products, including Omnia.',
    targetMarket: 'Zimbabwe',
    role: 'Software engineering and planning',
    team: null,
    stage: 'Building',
    website: 'https://omniatech.co.zw/',
    github: null,
    socials: [],
    contact: null,
    location: null,
    productSlugs: ['omnia-delivery'],
    collaborationNotes: null,
  },
  {
    id: 'dyke-carbon-tech',
    slug: 'dyke-carbon-tech',
    name: 'Dyke Carbon Tech',
    kind: 'collaboration',
    description:
      'An industrial collaboration. Current work includes DCPOMS and an alarm system.',
    mission: null,
    whatWeBuild: 'DCPOMS (Dyke Carbon Tech Management System) and an alarm system.',
    targetMarket: null,
    role: 'Software engineering and planning',
    team: null,
    stage: 'Building',
    website: 'https://dcpoms-web.onrender.com/accounting',
    github: null,
    socials: [],
    contact: null,
    location: null,
    productSlugs: ['dcpoms', 'dyke-alarm-system'],
    collaborationNotes:
      'This is a collaboration project, not a company I founded. The alarm system is under development and is not presented as deployed or certified.',
  },
  {
    id: 'sky-technologies',
    slug: 'sky-technologies',
    name: 'Sky Technologies',
    kind: 'venture',
    description: 'GitHub organization. Repositories are private.',
    mission: null,
    whatWeBuild: null,
    targetMarket: null,
    role: null,
    team: null,
    stage: null,
    website: null,
    github: 'Samaz-Localman-Technologies',
    socials: [],
    contact: null,
    location: null,
    productSlugs: [],
    collaborationNotes: null,
  },
]
