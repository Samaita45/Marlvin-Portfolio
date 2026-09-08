import { Link, useParams } from 'react-router-dom'
import { AssetPlaceholder } from '@/components/common/AssetPlaceholder'
import { MissingNote } from '@/components/common/MissingNote'
import { ProjectCard } from '@/components/common/ProjectCard'
import { RepoLink } from '@/components/common/RepoLink'
import { StatusBadge } from '@/components/common/StatusBadge'
import { getOrganizationById, getProjectBySlug, getRelatedProjects } from '@/data/catalog'
import { STATUS_LABEL } from '@/lib/status'
import { getPublicAssetSrc } from '@/lib/utils'
import { NotFoundPage } from '@/pages/NotFoundPage'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-8">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function TextOrMissing({ value, pending }: { value: string | null; pending: string }) {
  if (!value) return <MissingNote>{pending}</MissingNote>
  return <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{value}</p>
}

function ListOrMissing({ items, pending }: { items: string[]; pending: string }) {
  if (!items.length) return <MissingNote>{pending}</MissingNote>
  return (
    <ul className="max-w-3xl list-disc space-y-2 pl-5 text-muted-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function CaseStudyPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <NotFoundPage />

  const organization = project.organizationId ? getOrganizationById(project.organizationId) : undefined
  const related = getRelatedProjects(project)
  const technicalEntries = project.technical
    ? Object.entries(project.technical).filter(([, value]) => Boolean(value))
    : []

  return (
    <article className="section-container pb-20 pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <Link to="/work" className="hover:text-foreground">
          Work
        </Link>
        <span className="mx-2">/</span>
        {project.category}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} label={STATUS_LABEL[project.status]} />
        {project.year && (
          <span className="font-mono text-[11px] text-muted-foreground">{project.year}</span>
        )}
      </div>

      <h1 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-6xl">
        {project.title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.description}</p>

      <dl className="mt-8 grid gap-4 border border-border p-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Type</dt>
          <dd className="mt-1 text-sm">{project.type}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Company</dt>
          <dd className="mt-1 text-sm">
            {organization ? (
              <Link to={`/org/${organization.slug}`} className="hover:underline">
                {organization.name}
              </Link>
            ) : (
              project.company ?? 'Personal'
            )}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Role</dt>
          <dd className="mt-1 text-sm">{project.role ?? 'To be added'}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Ownership</dt>
          <dd className="mt-1 text-sm capitalize">{project.ownership}</dd>
        </div>
      </dl>

      <div className="mt-8">
        {project.screenshots.length > 0 ? (
          <div className={project.screenshots.length > 1 ? 'grid gap-3 md:grid-cols-2' : ''}>
            {project.screenshots.map((shot) => (
              <figure key={shot.src} className="border border-border">
                <img
                  src={getPublicAssetSrc(shot.src)}
                  alt={shot.alt}
                  className={shot.src.includes('logo') ? 'mx-auto max-h-64 w-auto object-contain p-10' : 'w-full object-cover'}
                  loading="lazy"
                />
                {shot.caption && (
                  <figcaption className="px-4 py-2 text-sm text-muted-foreground">{shot.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        ) : (
          <AssetPlaceholder
            label={project.title}
            caption="Screenshots, hardware photos, or diagrams will be placed here. No stock images."
            className="min-h-72"
          />
        )}
      </div>

      <Block title="Problem">
        <TextOrMissing value={project.problem} pending="Problem statement will be added when it is confirmed." />
      </Block>

      {project.existingSystem && (
        <Block title="Existing system">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{project.existingSystem}</p>
        </Block>
      )}

      {project.enhancement && (
        <Block title="Enhancement">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{project.enhancement}</p>
        </Block>
      )}

      {project.operationalEnvironment && (
        <Block title="Operational environment">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            {project.operationalEnvironment}
          </p>
        </Block>
      )}

      {project.responseWorkflow && (
        <Block title="Response workflow">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{project.responseWorkflow}</p>
        </Block>
      )}

      <Block title="Target users">
        <TextOrMissing value={project.targetUsers} pending="Target users will be added when they are confirmed." />
      </Block>

      <Block title="Target market">
        <TextOrMissing value={project.targetMarket} pending="Target market will be added when it is confirmed." />
      </Block>

      {project.currentMarket && (
        <Block title="Current market">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{project.currentMarket}</p>
        </Block>
      )}

      {project.expansionStrategy && (
        <Block title="Expansion">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{project.expansionStrategy}</p>
        </Block>
      )}

      <Block title="Objectives">
        <ListOrMissing items={project.objectives} pending="Objectives will be listed when they are confirmed." />
      </Block>

      <Block title="Features">
        <ListOrMissing items={project.features} pending="Confirmed features only. None are listed yet." />
      </Block>

      <Block title="Technology">
        {project.technologies.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="border border-border px-3 py-1 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        ) : (
          <MissingNote>Technology stack will be added when it is confirmed.</MissingNote>
        )}
      </Block>

      <Block title="My role">
        <TextOrMissing value={project.role} pending="Role details will be added when they are confirmed." />
      </Block>

      <Block title="Team">
        <TextOrMissing value={project.team} pending="Team members will be named when they can be listed." />
      </Block>

      <details className="border-t border-border py-8">
        <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Technical detail
        </summary>
        <div className="mt-5 space-y-5">
          {project.architecture && (
            <div>
              <h3 className="text-sm font-medium text-foreground">Architecture</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.architecture}</p>
            </div>
          )}
          {technicalEntries.length > 0 ? (
            technicalEntries.map(([key, value]) => (
              <div key={key}>
                <h3 className="text-sm font-medium capitalize text-foreground">{key.replace(/([A-Z])/g, ' $1')}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value}</p>
              </div>
            ))
          ) : (
            !project.architecture && (
              <MissingNote>
                Architecture, hardware, sensors, and deployment notes will be added as they are documented.
              </MissingNote>
            )
          )}
          {project.hardware.length > 0 && (
            <ListOrMissing items={project.hardware} pending="" />
          )}
        </div>
      </details>

      <Block title="Roadmap">
        <ListOrMissing items={project.roadmap} pending="A project roadmap will be added when the next steps are confirmed." />
      </Block>

      <Block title="Future plans">
        <ListOrMissing items={project.futurePlans} pending="Future plans will be added when they are confirmed." />
      </Block>

      <Block title="Links">
        <div className="flex flex-col gap-3">
          <RepoLink repository={project.repository} />
          {!project.repository && <MissingNote>No public repository is listed for this work.</MissingNote>}
          {project.organizationGithub && (
            <a
              href={project.organizationGithub}
              className="text-sm underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Organization repository
            </a>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="text-sm underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live site
            </a>
          ) : (
            project.status !== 'live' && (
              <p className="text-sm text-muted-foreground">No live demo is published yet.</p>
            )
          )}
          {project.documentationUrl && (
            <a
              href={project.documentationUrl}
              className="text-sm underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          )}
        </div>
      </Block>

      {related.length > 0 && (
        <Block title="Related work">
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item, i) => (
              <ProjectCard key={item.id} project={item} index={i} />
            ))}
          </div>
        </Block>
      )}
    </article>
  )
}
