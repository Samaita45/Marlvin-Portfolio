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
    id: 'codveda-internship',
    title: 'Front-End Development Internship',
    kind: 'other',
    status: 'in-progress',
    issuer: 'Codveda Technologies',
  },
  {
    id: 'fcc-python',
    title: 'freeCodeCamp Python Certification',
    kind: 'certification',
    status: 'in-progress',
    issuer: 'freeCodeCamp',
  },
  {
    id: 'ccna',
    title: 'CCNA',
    kind: 'certification',
    status: 'in-progress',
    issuer: 'Cisco',
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
