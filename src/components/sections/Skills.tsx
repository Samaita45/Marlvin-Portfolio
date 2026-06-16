import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/data/skills'
import { getLucideIcon } from '@/lib/icons'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-card/20" aria-label="Skills section">
      <div className="pointer-events-none absolute inset-0 bg-card-glow" />
      <div className="section-container relative">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A diverse toolkit spanning programming, web development, databases, and professional tools."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category, i) => {
            const IconComponent = getLucideIcon(category.icon)

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-hover group rounded-2xl p-6 cursor-default"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-3 shadow-glow`}
                >
                  <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
