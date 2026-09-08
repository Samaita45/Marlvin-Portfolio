import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { StatusBadge } from '@/components/common/StatusBadge'
import { ACHIEVEMENTS } from '@/data/achievements'
import { EDUCATION } from '@/data/education'
import { FORMAL_EXPERIENCE, VENTURE_EXPERIENCE } from '@/data/experience'
import { SKILL_GROUPS } from '@/data/skills'

export function About() {
  return (
    <section id="about" className="section-padding border-t border-border" aria-label="About">
      <div className="section-container">
        <SectionHeading index="03" label="03" title="About" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Experience
            </h3>
            <div className="mt-4 space-y-3">
              {FORMAL_EXPERIENCE.map((item) => (
                <article key={item.id} className="border border-border p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-display text-2xl text-foreground">{item.role}</h4>
                    <StatusBadge status="development" label={item.status} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                </article>
              ))}
              {VENTURE_EXPERIENCE.map((item) => (
                <article key={item.id} className="border border-border p-5">
                  <h4 className="font-display text-2xl text-foreground">{item.title}</h4>
                  {item.organizationSlug ? (
                    <Link to={`/org/${item.organizationSlug}`} className="mt-1 inline-block text-sm text-accent hover:underline">
                      {item.organization}
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
                  )}
                </article>
              ))}
            </div>

            <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Education
            </h3>
            <article className="mt-4 border border-border p-5">
              <h4 className="font-display text-2xl text-foreground">{EDUCATION.institution}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{EDUCATION.degree}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {EDUCATION.location} · {EDUCATION.graduation}
              </p>
            </article>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Achievements
            </h3>
            <ul className="mt-4 divide-y divide-border border border-border">
              {ACHIEVEMENTS.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-3 p-4">
                  <div>
                    <p className="text-sm text-foreground">{item.title}</p>
                    {item.issuer && (
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {item.issuer}
                      </p>
                    )}
                  </div>
                  <StatusBadge
                    status={
                      item.status === 'completed'
                        ? 'completed'
                        : item.status === 'planned'
                          ? 'planned'
                          : 'development'
                    }
                    label={
                      item.status === 'completed'
                        ? 'Completed'
                        : item.status === 'planned'
                          ? 'Next'
                          : 'In progress'
                    }
                  />
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Skills
            </h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {group.title}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-sm text-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
