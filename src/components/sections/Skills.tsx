import { SectionHeading } from '@/components/common/SectionHeading'
import { SKILL_GROUPS } from '@/data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border" aria-label="Skills">
      <div className="section-container">
        <SectionHeading index="09" label="09" title="Skills" />

        <div className="grid gap-8 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="border-b border-border py-2 text-sm text-foreground">
                    {skill}
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
