export type ProjectCategory = 'all' | 'iot' | 'web' | 'desktop' | 'startup'

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: ProjectCategory
  status?: 'Live' | 'Concept' | 'Completed'
  githubUrl?: string
  liveUrl?: string
  imageGradient: string
  icon: string
}

export const PROJECTS: Project[] = [
  {
    id: 'water-quality',
    title: 'Smart Water Quality Monitoring System',
    description:
      'IoT and Machine Learning solution that monitors water quality in real-time using sensors and mobile notifications.',
    technologies: ['IoT', 'Machine Learning', 'Mobile Development', 'Data Analytics'],
    category: 'iot',
    status: 'Completed',
    githubUrl: 'https://github.com/Samaita45',
    imageGradient: 'from-cyan-500/20 via-blue-600/20 to-indigo-600/20',
    icon: 'Droplets',
  },
  {
    id: 'dairy-farm',
    title: 'Dairy Farm Records Management System',
    description:
      'Desktop application developed in Visual Basic for managing dairy farm records and operations.',
    technologies: ['Visual Basic', 'Database Systems'],
    category: 'desktop',
    status: 'Completed',
    githubUrl: 'https://github.com/Samaita45',
    imageGradient: 'from-emerald-500/20 via-green-600/20 to-teal-600/20',
    icon: 'Database',
  },
  {
    id: 'farmer-marketplace',
    title: 'Farmer Transport & Marketplace Platform',
    description:
      'Digital platform connecting farmers, buyers, and transporters through a logistics marketplace.',
    technologies: ['React', 'Node.js', 'Database Design', 'Logistics'],
    category: 'startup',
    status: 'Concept',
    githubUrl: 'https://github.com/Samaita45',
    imageGradient: 'from-amber-500/20 via-orange-600/20 to-red-600/20',
    icon: 'Truck',
  },
  {
    id: 'gardening-website',
    title: 'Gardening Services Company Website',
    description:
      'Professional business website developed for a real client to improve visibility and customer engagement.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'web',
    status: 'Live',
    liveUrl: 'https://deepwatersgardens.netlify.app/',
    githubUrl: 'https://github.com/Samaita45',
    imageGradient: 'from-lime-500/20 via-green-500/20 to-emerald-600/20',
    icon: 'Leaf',
  },
  {
    id: 'catering-website',
    title: 'Catering Services Responsive Website',
    description:
      'Responsive website designed and built for a catering business with modern UI and mobile-first approach.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    category: 'web',
    status: 'Live',
    liveUrl: 'https://dare2taste.netlify.app/#contact',
    githubUrl: 'https://github.com/Samaita45',
    imageGradient: 'from-rose-500/20 via-pink-600/20 to-purple-600/20',
    icon: 'UtensilsCrossed',
  },
]

export const PROJECT_FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'IoT & ML', value: 'iot' },
  { label: 'Web', value: 'web' },
  { label: 'Desktop', value: 'desktop' },
  { label: 'Startup', value: 'startup' },
]
