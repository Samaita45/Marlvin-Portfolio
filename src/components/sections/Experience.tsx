import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { StatusBadge } from '@/components/common/StatusBadge'
import { FORMAL_EXPERIENCE, VENTURE_EXPERIENCE } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border" aria-label="Experience">
      <div className="section-container">
        <SectionHeading index="07" label="07" title="Experience" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Formal experience
            </p>
            <div className="mt-4 space-y-4">
              {FORMAL_EXPERIENCE.map((item) => (
                <article key={item.id} className="border border-border p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-2xl text-foreground">{item.role}</h3>
                    <StatusBadge
                      status={item.status === 'In Progress' ? 'development' : 'completed'}
                      label={item.status}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.company}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Ventures & product development
            </p>
            <div className="mt-4 space-y-4">
              {VENTURE_EXPERIENCE.map((item) => (
                <article key={item.id} className="border border-border p-6">
                  <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
                  {item.organizationSlug ? (
                    <Link to={`/org/${item.organizationSlug}`} className="mt-2 inline-block text-sm text-accent hover:underline">
                      {item.organization}
                    </Link>
                  ) : (
                    <p className="mt-2 text-sm text-muted-foreground">{item.organization}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
