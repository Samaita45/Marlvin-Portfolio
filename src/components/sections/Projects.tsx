import { useMemo, useState } from 'react'
import { ProjectCard } from '@/components/common/ProjectCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { PROJECT_FILTERS, getProjectsByFilter } from '@/data/catalog'
import type { ProjectFilter } from '@/lib/types'
import { cn } from '@/lib/utils'

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const filtered = useMemo(() => getProjectsByFilter(filter), [filter])

  return (
    <section id="projects" className="section-padding border-t border-border" aria-label="Projects">
      <div className="section-container">
        <SectionHeading index="03" label="03" title="Projects" />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
          {PROJECT_FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={cn(
                'focus-ring border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors',
                filter === value
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="border border-dashed border-border px-5 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            No projects in this filter
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
