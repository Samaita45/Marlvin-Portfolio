export interface SkillCategory {
  title: string
  skills: string[]
  icon: string
  color: string
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'JavaScript', 'Visual Basic', 'Java'],
    icon: 'Code2',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
    icon: 'Globe',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Database',
    skills: ['Relational Databases', 'Database Design', 'SQL'],
    icon: 'Database',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Microsoft Office'],
    icon: 'Wrench',
    color: 'from-amber-500 to-orange-500',
  },
]
