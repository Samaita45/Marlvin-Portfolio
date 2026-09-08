import { SectionHeading } from '@/components/common/SectionHeading'
import { SmartLink } from '@/components/common/SmartLink'
import { StatusBadge } from '@/components/common/StatusBadge'
import { getProjectLink, getRoadmap } from '@/data/catalog'
import { STATUS_LABEL } from '@/lib/status'

const BUCKETS = [
  { key: 'now' as const, title: 'Now' },
  { key: 'next' as const, title: 'Next' },
  { key: 'later' as const, title: 'Later' },
]

export function Roadmap() {
  const roadmap = getRoadmap()

  return (
    <section id="roadmap" className="section-padding border-t border-border" aria-label="Product roadmap">
      <div className="section-container">
        <SectionHeading label="13" title="Roadmap" />

        <div className="grid gap-4 lg:grid-cols-3">
          {BUCKETS.map((bucket) => {
            const items = roadmap[bucket.key]
            return (
              <div key={bucket.key} className="border border-border p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {bucket.title}
                </p>
                <ul className="mt-5 space-y-4">
                  {items.length === 0 && (
                    <li className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">—</li>
                  )}
                  {items.map((project) => (
                    <li key={project.id}>
                      <SmartLink
                        href={getProjectLink(project).href}
                        className="flex items-center justify-between gap-2 hover:text-accent"
                      >
                        <span className="font-display text-xl text-foreground">{project.title}</span>
                        <StatusBadge status={project.status} label={STATUS_LABEL[project.status]} />
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
