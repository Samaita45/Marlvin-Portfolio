import { Link } from 'react-router-dom'
import { ProjectCard } from '@/components/common/ProjectCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { getOrganizationById, getProjectsByOrganization, getProductProjects } from '@/data/catalog'

export function ProductWork() {
  const neighbourlink = getOrganizationById('neighbourlink')
  const companyProducts = neighbourlink ? getProjectsByOrganization(neighbourlink.id) : []
  const otherProducts = getProductProjects().filter(
    (project) => project.organizationId !== 'neighbourlink',
  )

  return (
    <section id="products" className="section-padding border-t border-border" aria-label="Product and startup work">
      <div className="section-container">
        <SectionHeading index="05" label="05" title="Product / Startup Work" />

        {neighbourlink && (
          <div>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h3 className="font-display text-3xl tracking-tight text-foreground">{neighbourlink.name}</h3>
              <Link
                to={`/org/${neighbourlink.slug}`}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground underline-offset-4 hover:underline"
              >
                Profile
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {companyProducts.map((product, i) => (
                <ProjectCard key={product.id} project={product} index={i} />
              ))}
            </div>
          </div>
        )}

        {otherProducts.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-3xl tracking-tight text-foreground">Concepts</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {otherProducts.map((product, i) => (
                <ProjectCard key={product.id} project={product} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
