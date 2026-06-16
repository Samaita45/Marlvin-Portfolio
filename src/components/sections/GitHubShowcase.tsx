import { motion } from 'framer-motion'
import { ExternalLink, GitFork, Github, Star } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { useGitHub } from '@/hooks/useGitHub'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-400',
  Java: 'bg-orange-400',
  HTML: 'bg-red-400',
  CSS: 'bg-purple-400',
  'Visual Basic': 'bg-indigo-400',
}

export function GitHubShowcase() {
  const { stats, loading } = useGitHub()

  const languages = stats?.languages ?? {}
  const totalLang = Object.values(languages).reduce((a, b) => a + b, 0)

  return (
    <section id="github" className="section-padding" aria-label="GitHub showcase section">
      <div className="section-container">
        <SectionHeading
          label="Open Source"
          title="GitHub Activity"
          description="Explore my repositories, contributions, and coding activity on GitHub."
        />

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass h-48 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <>
            {/* Language breakdown */}
            {totalLang > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass mb-8 rounded-2xl p-6"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Top Languages
                </h3>
                <div className="mb-4 flex h-3 overflow-hidden rounded-full">
                  {Object.entries(languages)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 6)
                    .map(([lang, count]) => (
                      <div
                        key={lang}
                        className={cn(LANGUAGE_COLORS[lang] ?? 'bg-gray-400')}
                        style={{ width: `${(count / totalLang) * 100}%` }}
                        title={`${lang}: ${Math.round((count / totalLang) * 100)}%`}
                      />
                    ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(languages)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 6)
                    .map(([lang, count]) => (
                      <div key={lang} className="flex items-center gap-2 text-sm">
                        <span
                          className={cn('h-3 w-3 rounded-full', LANGUAGE_COLORS[lang] ?? 'bg-gray-400')}
                        />
                        <span className="text-muted-foreground">
                          {lang}{' '}
                          <span className="text-foreground font-medium">
                            {Math.round((count / totalLang) * 100)}%
                          </span>
                        </span>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}

            {/* Contribution graph placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass mb-8 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Contribution Activity
                </h3>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://github.com/${SITE.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View Profile
                  </a>
                </Button>
              </div>
              <div className="mt-4 overflow-x-auto">
                <img
                  src={`https://ghchart.rshah.org/${SITE.github}`}
                  alt={`${SITE.name} GitHub contribution chart`}
                  className="mx-auto max-w-full rounded-lg opacity-90"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Repositories */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats?.repos.length ? (
                stats.repos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="glass-hover block rounded-2xl p-6 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground hover:text-electric-light transition-colors">
                        {repo.name}
                      </h3>
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </div>
                    {repo.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {repo.description}
                      </p>
                    )}
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className={cn(
                              'h-2.5 w-2.5 rounded-full',
                              LANGUAGE_COLORS[repo.language] ?? 'bg-gray-400',
                            )}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </motion.a>
                ))
              ) : (
                <div className="glass col-span-full rounded-2xl p-10 text-center">
                  <Github className="mx-auto h-12 w-12 text-muted-foreground" aria-hidden="true" />
                  <p className="mt-4 text-muted-foreground">
                    Visit my GitHub profile to explore repositories and contributions.
                  </p>
                  <Button variant="default" className="mt-4" asChild>
                    <a
                      href={`https://github.com/${SITE.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      @{SITE.github}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
