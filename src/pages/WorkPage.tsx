import { useMemo, useState } from 'react'
import { ProjectCard } from '@/components/common/ProjectCard'
import { PROJECT_FILTERS, getProjectsByFilter } from '@/data/catalog'
import type { ProjectFilter } from '@/lib/types'
import { cn } from '@/lib/utils'

export function WorkPage() {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const filtered = useMemo(() => getProjectsByFilter(filter), [filter])

  return (
    <div className="section-container section-padding pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Work</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-5xl">
        Work
      </h1>

      <div className="mt-8 flex flex-wrap gap-2">
        {PROJECT_FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={cn(
              'focus-ring border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em]',
              filter === value
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:border-foreground/40',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
