import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '@/components/common/ProjectCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { StatusBadge } from '@/components/common/StatusBadge'
import { Button } from '@/components/ui/button'
import { getOrganizationById, getProductProjects, getProjectBySlug } from '@/data/catalog'
import { STATUS_LABEL } from '@/lib/status'
import { getPublicAssetSrc } from '@/lib/utils'

export function ProductWork() {
  const neighbourlink = getOrganizationById('neighbourlink')
  const dyke = getOrganizationById('dyke-carbon-tech')
  const omnia = getProjectBySlug('omnia-delivery')
  const dcpoms = getProjectBySlug('dcpoms')
  const concepts = getProductProjects().filter(
    (project) =>
      project.organizationId !== 'neighbourlink' &&
      project.organizationId !== 'dyke-carbon-tech' &&
      project.id !== 'omnia-delivery' &&
      project.id !== 'dcpoms',
  )

  return (
    <section id="products" className="section-padding border-t border-border" aria-label="Product and startup work">
      <div className="section-container">
        <SectionHeading index="05" label="05" title="Product / Startup Work" />

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
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={omnia.status} label={STATUS_LABEL[omnia.status]} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {omnia.company}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-4xl tracking-tight text-foreground">{omnia.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {omnia.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="https://omniatech.co.zw/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      Open Omnia
                    </a>
                  </Button>
                  {neighbourlink && (
                    <Button variant="outline" asChild>
                      <Link to={`/org/${neighbourlink.slug}`}>Profile</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </article>
        )}

        {dcpoms && (
          <article className="mt-10 overflow-hidden border border-border bg-card">
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={dcpoms.status} label={STATUS_LABEL[dcpoms.status]} />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {dcpoms.company}
                </span>
              </div>
              <h3 className="mt-4 font-display text-4xl tracking-tight text-foreground">{dcpoms.title}</h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {dcpoms.category}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {dcpoms.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {dcpoms.liveUrl && (
                  <Button asChild>
                    <a href={dcpoms.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      Open DCPOMS
                    </a>
                  </Button>
                )}
                {dyke && (
                  <Button variant="outline" asChild>
                    <Link to={`/org/${dyke.slug}`}>Dyke Carbon Tech</Link>
                  </Button>
                )}
              </div>
            </div>
          </article>
        )}

        {concepts.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-3xl tracking-tight text-foreground">Concepts</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {concepts.map((product, i) => (
                <ProjectCard key={product.id} project={product} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
