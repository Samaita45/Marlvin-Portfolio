import { ExternalLink, Github, Lock } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { useGitHub } from '@/hooks/useGitHub'
import { SITE } from '@/lib/constants'

export function GitHubShowcase() {
  const { stats, loading, error } = useGitHub()

  return (
    <section id="github" className="section-padding border-t border-border" aria-label="GitHub">
      <div className="section-container">
        <SectionHeading index="04" label="04" title="GitHub" />

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Button variant="outline" asChild>
            <a href={`https://github.com/${SITE.github}`} target="_blank" rel="noopener noreferrer">
              <Github />
              @{SITE.github}
            </a>
          </Button>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" aria-hidden="true" />
            Other personal and organization repositories are private
          </p>
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

            <div className="grid gap-3 md:grid-cols-2">
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
      </div>
    </section>
  )
}
