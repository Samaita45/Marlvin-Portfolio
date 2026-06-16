import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { EXPERIENCES } from '@/data/experience'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/ui/badge'

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-card/20" aria-label="Experience section">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Building real-world experience through internships and client projects."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-hover rounded-2xl p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric-light">
                    <Briefcase className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant={exp.status === 'In Progress' ? 'success' : 'secondary'}>
                    {exp.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
