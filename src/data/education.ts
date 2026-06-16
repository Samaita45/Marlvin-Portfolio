export interface Education {
  institution: string
  degree: string
  graduation: string
  coursework: string[]
}

export const EDUCATION: Education = {
  institution: 'University of Zimbabwe',
  degree: 'Bachelor of Science in Computer Science',
  graduation: '2028',
  coursework: [
    'Machine Learning',
    'Software Engineering',
    'Computer Networks',
    'Database Management',
    'Data Structures and Algorithms',
    'Web Development',
  ],
}
