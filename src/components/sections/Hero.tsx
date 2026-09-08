import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { getCurrentlyBuilding } from '@/data/catalog'
import { SITE } from '@/lib/constants'
import { getPublicAssetSrc, scrollToSection } from '@/lib/utils'
import { SmartLink } from '@/components/common/SmartLink'
import { StatusBadge } from '@/components/common/StatusBadge'
import { Button } from '@/components/ui/button'

export function Hero() {
  const current = getCurrentlyBuilding()

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-28" aria-label="Introduction">
      <div className="section-container py-12 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Harare, Zimbabwe · University of Zimbabwe · Expected 2028
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {SITE.name}
            </h1>
            <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.16em] text-accent">
              Computer Science Student
              <span className="mx-2 text-border">/</span>
              Software Developer
              <span className="mx-2 text-border">/</span>
              Product Builder
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollToSection('projects')}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={getPublicAssetSrc(SITE.cvPath)} download={SITE.cvFilename}>
                  <Download />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`https://github.com/${SITE.github}`} target="_blank" rel="noopener noreferrer">
                  <Github />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                  LinkedIn
                </a>
              </Button>
            </div>

            {current.length > 0 && (
              <div className="mt-10 border-t border-border pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Currently building
                </p>
                <ul className="mt-4 space-y-3">
                  {current.map((item) => (
                    <li key={item.id} className="flex flex-wrap items-center gap-3">
                      <StatusBadge status={item.status} />
                      <SmartLink href={item.href} className="text-sm text-foreground hover:text-accent">
                        {item.title}
                        {item.subtitle ? ` · ${item.subtitle}` : ''}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="justify-self-center"
          >
            <img
              src={getPublicAssetSrc(SITE.profileImage)}
              alt={`${SITE.name} profile photo`}
              className="h-56 w-56 rounded-full object-cover object-[center_12%] sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              loading="eager"
            />
          </motion.div>
        </div>

        <button
          onClick={() => scrollToSection('building')}
          aria-label="Scroll to what I am building"
          className="focus-ring mt-14 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground md:inline-flex"
        >
          Continue
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
