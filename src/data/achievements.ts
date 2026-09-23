import type { Achievement } from '@/lib/types'

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'cs50-ai',
    title: 'CS50 Artificial Intelligence & Expert Systems',
    kind: 'certification',
    status: 'completed',
  },
  {
    id: 'icdl-outlook',
    title: 'ICDL Microsoft Office Specialist: Outlook',
    kind: 'certification',
    status: 'completed',
    issuer: 'ICDL',
  },
  {
    id: 'fcc-python',
    title: 'freeCodeCamp Python Certification',
    kind: 'certification',
    status: 'in-progress',
    issuer: 'freeCodeCamp',
  },
  {
    id: 'ccna-itn',
    title: 'CCNA: Introduction to Networks',
    kind: 'certification',
    status: 'completed',
    issuer: 'Cisco Networking Academy',
    detail: 'Offered by University of Zimbabwe Computer Science · completed 23 Sep 2026 · first CCNA milestone',
    credential: '/certificates/ccna-introduction-to-networks.png',
  },
  {
    id: 'ccna',
    title: 'CCNA',
    kind: 'certification',
    status: 'in-progress',
    issuer: 'Cisco',
    detail: 'Introduction to Networks complete · continuing the remaining courses',
  },
  {
    id: 'uz-progression',
    title: 'University of Zimbabwe academic progression',
    kind: 'academic',
    status: 'in-progress',
    issuer: 'University of Zimbabwe',
    detail: 'BSc (Honours) Computer Science · expected 2028',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    kind: 'certification',
    status: 'planned',
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Computing',
    kind: 'certification',
    status: 'planned',
    issuer: 'Amazon Web Services',
  },
]
