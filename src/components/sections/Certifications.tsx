import { motion } from 'framer-motion'
import { Award, Clock, Target } from 'lucide-react'
import { CERTIFICATIONS, type CertificationStatus } from '@/data/certifications'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const statusConfig: Record<
  CertificationStatus,
  { label: string; variant: 'success' | 'warning' | 'outline'; icon: typeof Award }
> = {
  completed: { label: 'Completed', variant: 'success', icon: Award },
  'in-progress': { label: 'In Progress', variant: 'warning', icon: Clock },
  future: { label: 'Future Learning', variant: 'outline', icon: Target },
}

export function Certifications() {
  const grouped = {
    completed: CERTIFICATIONS.filter((c) => c.status === 'completed'),
    'in-progress': CERTIFICATIONS.filter((c) => c.status === 'in-progress'),
    future: CERTIFICATIONS.filter((c) => c.status === 'future'),
  }

  return (
    <section id="certifications" className="section-padding bg-card/20" aria-label="Certifications section">
      <div className="section-container">
        <SectionHeading
          label="Certifications"
          title="Continuous Learning"
          description="Committed to expanding knowledge through certifications and professional development."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {(Object.entries(grouped) as [CertificationStatus, typeof CERTIFICATIONS][]).map(
            ([status, items], groupIndex) => {
              const config = statusConfig[status]
              const Icon = config.icon

              return (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 }}
                >
                  <div className="mb-4 flex items-center gap-2">
                    <Icon className={cn('h-5 w-5', status === 'completed' ? 'text-emerald-400' : status === 'in-progress' ? 'text-amber-400' : 'text-muted-foreground')} aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">{config.label}</h3>
                  </div>
                  <div className="space-y-3">
                    {items.map((cert, i) => (
                      <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.1 + i * 0.05 }}
                        className="glass-hover rounded-xl p-4"
                      >
                        <p className="text-sm font-medium text-foreground">{cert.title}</p>
                        {cert.provider && (
                          <p className="mt-1 text-xs text-muted-foreground">{cert.provider}</p>
                        )}
                        <Badge variant={config.variant} className="mt-2">
                          {config.label}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}
