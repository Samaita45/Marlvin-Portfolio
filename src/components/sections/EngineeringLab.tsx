import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { StatusBadge } from '@/components/common/StatusBadge'
import { getLabProjects } from '@/data/catalog'
import { STATUS_LABEL } from '@/lib/status'

export function EngineeringLab() {
  const experiments = getLabProjects()

  return (
    <section id="lab" className="section-padding border-t border-border" aria-label="Engineering lab">
      <div className="section-container">
        <SectionHeading index="06" label="06" title="Engineering Lab" />

        <div className="divide-y divide-border border border-border">
          {experiments.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="flex flex-col gap-3 p-5 transition-colors hover:bg-secondary/40 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-display text-2xl text-foreground">{project.title}</h3>
              </div>
              <StatusBadge status={project.status} label={STATUS_LABEL[project.status]} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
