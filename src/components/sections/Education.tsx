import { SectionHeading } from '@/components/common/SectionHeading'
import { EDUCATION } from '@/data/education'

export function Education() {
  return (
    <section id="education" className="section-padding border-t border-border" aria-label="Education">
      <div className="section-container">
        <SectionHeading index="10" label="10" title="Education" />

        <div className="border border-border p-6 md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {EDUCATION.status}
          </p>
          <h3 className="mt-3 font-display text-3xl text-foreground">{EDUCATION.institution}</h3>
          <p className="mt-2 text-lg text-muted-foreground">{EDUCATION.degree}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {EDUCATION.location} · Expected graduation {EDUCATION.graduation}
          </p>
        </div>
      </div>
    </section>
  )
}
