export type CertificationStatus = 'completed' | 'in-progress' | 'future'

export interface Certification {
  title: string
  status: CertificationStatus
  provider?: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'CS50 Artificial Intelligence and Expert Systems',
    status: 'completed',
    provider: 'Harvard / edX',
  },
  {
    title: 'Front End Development Internship',
    status: 'in-progress',
    provider: 'Codveda Technologies',
  },
  {
    title: 'freeCodeCamp Python Certification',
    status: 'in-progress',
    provider: 'freeCodeCamp',
  },
  {
    title: 'Cisco Networking Basics',
    status: 'future',
    provider: 'Cisco',
  },
  {
    title: 'Python Essentials',
    status: 'future',
    provider: 'Cisco / OpenEDG',
  },
  {
    title: 'SQL Fundamentals',
    status: 'future',
    provider: 'Various',
  },
]
