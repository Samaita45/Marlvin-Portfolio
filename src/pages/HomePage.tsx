import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { GitHubShowcase } from '@/components/sections/GitHubShowcase'
import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { scrollToSection } from '@/lib/utils'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const timer = window.setTimeout(() => scrollToSection(id), 80)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [location.hash])

  return (
    <>
      <Hero />
      <Work />
      <About />
      <GitHubShowcase />
      <Contact />
    </>
  )
}
