import { motion } from 'framer-motion'
import { Puzzle, Rocket, Users, Zap } from 'lucide-react'
import { HIGHLIGHTS, SITE } from '@/lib/constants'
import { ABOUT_TIMELINE } from '@/data/timeline'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/ui/badge'

const highlightIcons = [Puzzle, Zap, Users, Rocket]

export function About() {
  return (
    <section id="about" className="section-padding relative" aria-label="About section">
      <div className="section-container">
        <SectionHeading
          label="About Me"
          title="Passionate About Building Intelligent Systems"
          description={`${SITE.age}-year-old Computer Science student at the University of Zimbabwe with interests in software engineering, machine learning, IoT systems, databases, and web technologies.`}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                I&apos;m a {SITE.age}-year-old Computer Science student at the{' '}
                <span className="font-semibold text-foreground">University of Zimbabwe</span>{' '}
                passionate about creating software that makes a real difference. From IoT-powered
                water quality monitoring to client-facing web applications, I love turning complex
                problems into elegant solutions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                My journey spans machine learning, database design, full-stack web development, and
                embedded systems — always with a focus on practical impact and continuous learning.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, i) => {
                const Icon = highlightIcons[i]
                return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-hover rounded-xl p-5 cursor-default"
                >
                  <Icon className="h-6 w-6 text-electric-light" aria-hidden="true" />
                  <h3 className="mt-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-foreground">My Journey</h3>
            <div className="relative space-y-0">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-electric/50 to-transparent" />
              {ABOUT_TIMELINE.map((item, i) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-electric bg-background text-xs font-bold text-electric-light">
                    {item.year.slice(2)}
                  </div>
                  <div className="glass flex-1 rounded-xl p-5">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{item.year}</Badge>
                    </div>
                    <h4 className="mt-2 font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
