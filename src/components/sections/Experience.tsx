import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { VENTURE_EXPERIENCE } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border" aria-label="Experience">
      <div className="section-container">
        <SectionHeading index="07" label="07" title="Experience" />

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Ventures & product development
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
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
    </section>
  )
}
