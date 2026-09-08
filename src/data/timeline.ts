import type { TimelineGroup } from '@/lib/types'

/** Year-level groups only. No month-level dates unless they are confirmed. */
export const TIMELINE: TimelineGroup[] = [
  {
    year: '2023',
    items: ['Education'],
  },
  {
    year: '2025',
    items: ['University technical projects'],
  },
  {
    year: '2026',
    items: [
      'Frontend internship',
      'Client websites',
      'IoT projects',
      'Software products',
      'NeighborLink Technologies',
      'Omnia',
      'DCPOMS — Dyke Carbon Tech Management System',
      'CCNA',
    ],
  },
  {
    year: 'Later',
    items: [
      'Cyber Security',
      'AWS Cloud Computing',
      'MetaPlot',
      'Landlord and tenant platform',
    ],
  },
]
