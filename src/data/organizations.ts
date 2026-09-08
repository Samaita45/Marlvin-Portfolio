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
    whatWeBuild: 'Software products, including Omnia. DCPOMS is also in development.',
    targetMarket: 'Zimbabwe',
    role: null,
    team: null,
    stage: 'Building',
    website: 'https://omniatech.co.zw/',
    github: null,
    socials: [],
    contact: null,
    location: null,
    productSlugs: ['omnia-delivery', 'dcpoms'],
    collaborationNotes: null,
  },
  {
    id: 'dyke-carbon-tech',
    slug: 'dyke-carbon-tech',
    name: 'Dyke Carbon Tech',
    kind: 'collaboration',
    description:
      'An industrial collaboration. I am developing an alarm system intended to alert nearby responders when a relevant event occurs.',
    mission: null,
    whatWeBuild: null,
    targetMarket: null,
    role: null,
    team: null,
    stage: 'Project in development',
    website: null,
    github: null,
    socials: [],
    contact: null,
    location: null,
    productSlugs: ['dyke-alarm-system'],
    collaborationNotes:
      'This is a collaboration project, not a company I founded. The alarm system is under development and is not presented as deployed or certified.',
  },
]
