import { Link, useParams } from 'react-router-dom'
import { MissingNote } from '@/components/common/MissingNote'
import { ProjectCard } from '@/components/common/ProjectCard'
import { useOrgRepos } from '@/hooks/useGitHub'
import { getOrganizationBySlug, getProjectsByOrganization } from '@/data/catalog'
import { NotFoundPage } from '@/pages/NotFoundPage'

function Field({ label, value, pending }: { label: string; value: string | null; pending: string }) {
  return (
    <div className="border-t border-border py-6">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</h2>
      <div className="mt-3">
        {value ? <p className="max-w-3xl text-muted-foreground">{value}</p> : <MissingNote>{pending}</MissingNote>}
      </div>
    </div>
  )
}

export function OrganizationPage() {
  const { slug } = useParams()
  const organization = slug ? getOrganizationBySlug(slug) : undefined
  const { repos, loading } = useOrgRepos(organization?.github)

  if (!organization) return <NotFoundPage />

  const products = getProjectsByOrganization(organization.id)

  return (
    <article className="section-container pb-20 pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <Link to="/#work" className="hover:text-foreground">
          Work
        </Link>
        <span className="mx-2">/</span>
        {organization.kind}
      </p>

      <h1 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-6xl">
        {organization.name}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        {organization.description}
      </p>

      {organization.stage && (
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          Current stage · {organization.stage}
        </p>
      )}

      <Field label="Mission" value={organization.mission} pending="Mission will be added when it is confirmed." />
      <Field
        label="What we build"
        value={organization.whatWeBuild}
        pending="A product summary will be added when it is confirmed."
      />
      <Field
        label="Target market"
        value={organization.targetMarket}
        pending="Target market will be added when it is confirmed."
      />
      <Field label="My role" value={organization.role} pending="Role details will be added when they are confirmed." />
      <Field label="Team" value={organization.team} pending="Team members will be named when they can be listed." />
      <Field
        label="Collaboration notes"
        value={organization.collaborationNotes}
        pending="No additional collaboration notes yet."
      />

      <section className="border-t border-border py-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Products & projects
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {products.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Links</h2>
        <div className="mt-4 space-y-3 text-sm">
          {organization.website ? (
            <a href={organization.website} className="block underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          ) : (
            <MissingNote>No public website is listed yet.</MissingNote>
          )}
          {organization.github ? (
            <a
              href={`https://github.com/${organization.github}`}
              className="block underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Organization GitHub
            </a>
          ) : (
            <MissingNote>No organization GitHub account is listed yet.</MissingNote>
          )}
          {organization.contact ? (
            <p>{organization.contact}</p>
          ) : (
            <MissingNote>Organization contact details will be added when they are public.</MissingNote>
          )}
          {organization.socials.map((social) => (
            <a key={social.url} href={social.url} className="block underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Organization repositories
        </h2>
        <div className="mt-4">
          {!organization.github && (
            <MissingNote>
              Set the organization GitHub slug in the organizations data file to load repositories here.
            </MissingNote>
          )}
          {loading && <p className="text-sm text-muted-foreground">Loading organization repositories…</p>}
          {repos && repos.length === 0 && (
            <p className="text-sm text-muted-foreground">No public organization repositories were returned.</p>
          )}
          {repos && repos.length > 0 && (
            <ul className="space-y-3">
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url} className="text-foreground underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                  {repo.description && <p className="text-sm text-muted-foreground">{repo.description}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </article>
  )
}
