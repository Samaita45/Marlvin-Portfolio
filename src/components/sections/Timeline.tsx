import { SectionHeading } from '@/components/common/SectionHeading'
import { TIMELINE } from '@/data/timeline'

export function Timeline() {
  return (
    <section id="timeline" className="section-padding border-t border-border" aria-label="Timeline">
      <div className="section-container">
        <SectionHeading label="14" title="Timeline" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((group) => (
            <div key={group.year}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{group.year}</p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
