import { Link, useParams } from 'react-router-dom'
import { ProjectCard } from '@/components/common/ProjectCard'
import { useOrgRepos } from '@/hooks/useGitHub'
import { getOrganizationBySlug, getProjectsByOrganization } from '@/data/catalog'
import { NotFoundPage } from '@/pages/NotFoundPage'

function Field({ label, value }: { label: string; value: string | null }) {
  if (!value) return null

  return (
    <div className="border-t border-border py-6">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</h2>
      <p className="mt-3 max-w-3xl text-muted-foreground">{value}</p>
    </div>
  )
}

export function OrganizationPage() {
  const { slug } = useParams()
  const organization = slug ? getOrganizationBySlug(slug) : undefined
  const { repos, loading } = useOrgRepos(organization?.github)

  if (!organization) return <NotFoundPage />

  const products = getProjectsByOrganization(organization.id)
  const links = [
    organization.website ? { label: 'Website', href: organization.website } : null,
    organization.github
      ? { label: 'Organization GitHub', href: `https://github.com/${organization.github}` }
      : null,
    ...organization.socials.map((social) => ({ label: social.label, href: social.url })),
  ].filter((item): item is { label: string; href: string } => Boolean(item))

  return (
    <article className="section-container pb-20 pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <Link to="/#companies" className="hover:text-foreground">
          Companies
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
          {organization.stage}
        </p>
      )}

      <Field label="Mission" value={organization.mission} />
      <Field label="What we build" value={organization.whatWeBuild} />
      <Field label="Target market" value={organization.targetMarket} />
      <Field label="My role" value={organization.role} />
      <Field label="Team" value={organization.team} />
      <Field label="Notes" value={organization.collaborationNotes} />
      <Field label="Contact" value={organization.contact} />

      {products.length > 0 && (
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
      )}

      {links.length > 0 && (
        <section className="border-t border-border py-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Links</h2>
          <div className="mt-4 space-y-3 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}

      {organization.github && (
        <section className="border-t border-border py-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Organization repositories
          </h2>
          <div className="mt-4">
            {loading && <p className="text-sm text-muted-foreground">Loading organization repositories…</p>}
            {!loading && repos && repos.length === 0 && (
              <p className="text-sm text-muted-foreground">Organization repositories are private.</p>
            )}
            {repos && repos.length > 0 && (
              <ul className="space-y-3">
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      className="text-foreground underline-offset-4 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                    {repo.description && <p className="text-sm text-muted-foreground">{repo.description}</p>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}
    </article>
  )
}
