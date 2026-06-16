import { motion } from 'framer-motion'
import { ArrowDown, Download, FolderOpen, Mail, Github, Star, GitFork } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SITE, TECH_STACK, TITLE_ROTATION } from '@/lib/constants'
import { scrollToSection, getPublicAssetSrc } from '@/lib/utils'
import { useGitHub } from '@/hooks/useGitHub'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const { stats } = useGitHub()

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLE_ROTATION.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      aria-label="Hero section"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-electric/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
            <motion.div variants={item}>
              <Badge variant="default" className="mb-6 px-4 py-1.5 text-sm">
                Available for internships & freelance
              </Badge>
            </motion.div>

            <motion.p variants={item} className="mb-2 text-sm font-medium uppercase tracking-widest text-electric-light">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
            >
              {SITE.name}
            </motion.h1>

            <motion.div variants={item} className="mt-4 h-10 overflow-hidden">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-semibold gradient-text md:text-2xl"
              >
                {TITLE_ROTATION[titleIndex]}
              </motion.p>
            </motion.div>

            <motion.p variants={item} className="mt-2 text-sm text-muted-foreground">
              {SITE.age} years old
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {SITE.tagline}
            </motion.p>

            {/* Tech stack badges */}
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('projects')}>
                <FolderOpen />
                View Projects
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv/marlvin-cv.pdf" download="Marlvin_Munyanyi_CV.pdf">
                  <Download />
                  Download CV
                </a>
              </Button>
              <Button variant="glass" size="lg" onClick={() => scrollToSection('contact')}>
                <Mail />
                Contact Me
              </Button>
            </motion.div>

            {/* GitHub stats */}
            {stats && (
              <motion.div
                variants={item}
                className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                {[
                  { label: 'Repositories', value: stats.user.public_repos, icon: Github },
                  { label: 'Followers', value: stats.user.followers, icon: Star },
                  { label: 'Following', value: stats.user.following, icon: GitFork },
                  { label: 'Total Stars', value: stats.totalStars, icon: Star },
                ].map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="glass rounded-xl p-4 text-center transition-all hover:border-electric/30"
                  >
                    <Icon className="mx-auto mb-2 h-4 w-4 text-electric-light" aria-hidden="true" />
                    <p className="text-2xl font-bold text-foreground">
                      <AnimatedCounter value={value} />
                    </p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-electric/20 blur-2xl" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-electric/30 shadow-glow-lg sm:h-80 sm:w-80">
                  <img
                    src={getPublicAssetSrc(SITE.profileImage)}
                    alt={`${SITE.name} profile photo`}
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-2 -left-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground shadow-glass">
                  {SITE.age} yrs
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-full border border-electric/40 bg-card px-4 py-2 text-sm font-semibold text-electric-light shadow-glow">
                  UZ &apos;28
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
          className="focus-ring mx-auto mt-16 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-electric-light cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
