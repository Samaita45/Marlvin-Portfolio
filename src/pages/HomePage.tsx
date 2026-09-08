import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Achievements } from '@/components/sections/Achievements'
import { Contact } from '@/components/sections/Contact'
import { Education } from '@/components/sections/Education'
import { EngineeringLab } from '@/components/sections/EngineeringLab'
import { Experience } from '@/components/sections/Experience'
import { GitHubShowcase } from '@/components/sections/GitHubShowcase'
import { Hero } from '@/components/sections/Hero'
import { Organizations } from '@/components/sections/Organizations'
import { Process } from '@/components/sections/Process'
import { ProductWork } from '@/components/sections/ProductWork'
import { Projects } from '@/components/sections/Projects'
import { Roadmap } from '@/components/sections/Roadmap'
import { Skills } from '@/components/sections/Skills'
import { Timeline } from '@/components/sections/Timeline'
import { WhatImBuilding } from '@/components/sections/WhatImBuilding'
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
      <WhatImBuilding />
      <Projects />
      <Organizations />
      <ProductWork />
      <EngineeringLab />
      <Process />
      <Experience />
      <Achievements />
      <Skills />
      <Education />
      <GitHubShowcase />
      <Roadmap />
      <Timeline />
      <Contact />
    </>
  )
}
