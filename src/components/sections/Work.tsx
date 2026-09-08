import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '@/components/common/ProjectCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { StatusBadge } from '@/components/common/StatusBadge'
import { Button } from '@/components/ui/button'
import { getProjectBySlug, PROJECTS } from '@/data/catalog'
import { STATUS_LABEL } from '@/lib/status'
import { getPublicAssetSrc } from '@/lib/utils'

export function Work() {
  const omnia = getProjectBySlug('omnia-delivery')
  const rest = PROJECTS.filter((project) => project.id !== 'omnia-delivery')

  return (
    <section id="work" className="section-padding border-t border-border" aria-label="Work">
      <div className="section-container">
        <SectionHeading index="02" label="02" title="Work" />

        {omnia && (
          <article className="overflow-hidden border border-border bg-card">
            <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex min-h-72 items-center justify-center bg-secondary/50 p-10">
                <img
                  src={getPublicAssetSrc('/logos/omnia-logo.png')}
                  alt="Omnia logo"
                  className="max-h-48 w-auto max-w-[260px] object-contain"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={omnia.status} label={STATUS_LABEL[omnia.status]} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {omnia.company}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-5xl">
                  {omnia.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {omnia.description}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {omnia.features.slice(0, 6).map((feature) => (
                    <li key={feature} className="text-sm text-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={omnia.liveUrl ?? 'https://omniatech.co.zw/'} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      Open Omnia
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to={`/work/${omnia.slug}`}>Case study</Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
