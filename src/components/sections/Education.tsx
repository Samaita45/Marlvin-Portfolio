import { motion } from 'framer-motion'
import { BookOpen, Calendar, GraduationCap } from 'lucide-react'
import { EDUCATION } from '@/data/education'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/ui/badge'

export function Education() {
  return (
    <section id="education" className="section-padding" aria-label="Education section">
      <div className="section-container">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="Building a strong foundation in computer science and software engineering."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mx-auto max-w-3xl rounded-2xl p-8 md:p-10"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-indigo-600 shadow-glow">
              <GraduationCap className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground">{EDUCATION.institution}</h3>
              <p className="mt-1 text-lg text-electric-light">{EDUCATION.degree}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Expected Graduation: {EDUCATION.graduation}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <BookOpen className="h-4 w-4 text-electric-light" aria-hidden="true" />
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {EDUCATION.coursework.map((course) => (
                <Badge key={course} variant="default">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
