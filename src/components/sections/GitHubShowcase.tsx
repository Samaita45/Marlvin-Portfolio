import { ExternalLink, Github, Lock } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { useGitHub, useOrgRepos } from '@/hooks/useGitHub'
import { GITHUB_ORG, SITE } from '@/lib/constants'

export function GitHubShowcase() {
  const { stats, loading, error } = useGitHub()
  const { repos: orgRepos, loading: orgLoading } = useOrgRepos(GITHUB_ORG.login)

  return (
    <section id="github" className="section-padding border-t border-border" aria-label="GitHub">
      <div className="section-container">
        <SectionHeading index="11" label="11" title="GitHub" />

        <div className="mb-8 flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <a href={`https://github.com/${SITE.github}`} target="_blank" rel="noopener noreferrer">
              <Github />
              @{SITE.github}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={GITHUB_ORG.url} target="_blank" rel="noopener noreferrer">
              <Github />
              {GITHUB_ORG.name}
            </a>
          </Button>
        </div>

        {loading && <p className="text-sm text-muted-foreground">Loading public repositories…</p>}

        {error && !stats && (
          <p className="border border-dashed border-border px-5 py-8 text-sm text-muted-foreground">
            Visit{' '}
            <a
              href={`https://github.com/${SITE.github}`}
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/{SITE.github}
            </a>
          </p>
        )}

        {stats && (
          <>
            {Object.keys(stats.languages).length > 0 && (
              <ul className="mb-8 flex flex-wrap gap-2">
                {Object.entries(stats.languages)
                  .sort(([, a], [, b]) => b - a)
                  .map(([lang]) => (
                    <li key={lang} className="border border-border px-3 py-1 text-sm">
                      {lang}
                    </li>
                  ))}
              </ul>
            )}

            <div className="mb-8 overflow-x-auto border border-border p-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Contribution activity
              </h3>
              <img
                src={`https://ghchart.rshah.org/8a6a3c/${SITE.github}`}
                alt={`${SITE.name} GitHub contribution chart`}
                className="mt-4 w-full max-w-3xl"
                loading="lazy"
              />
            </div>

            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Public repositories
            </h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {stats.repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border p-5 transition-colors hover:border-foreground/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-display text-xl text-foreground">{repo.name}</h4>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </div>
                  {repo.description && (
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{repo.description}</p>
                  )}
                </a>
              ))}
            </div>
          </>
        )}

        <div className="mt-10 border border-border p-6">
          <h3 className="font-display text-2xl text-foreground">{GITHUB_ORG.name}</h3>
          <a
            href={GITHUB_ORG.url}
            className="mt-2 inline-block text-sm text-accent underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/{GITHUB_ORG.login}
          </a>
          {orgLoading && <p className="mt-3 text-sm text-muted-foreground">Loading organization repositories…</p>}
          {!orgLoading && (!orgRepos || orgRepos.length === 0) && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" aria-hidden="true" />
              Organization repositories are private
            </p>
          )}
          {orgRepos && orgRepos.length > 0 && (
            <ul className="mt-4 space-y-2">
              {orgRepos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    className="text-foreground underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
