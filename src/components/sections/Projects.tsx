import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { PROJECTS, PROJECT_FILTERS, type ProjectCategory } from '@/data/projects'
import { getLucideIcon } from '@/lib/icons'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn, getPublicAssetSrc } from '@/lib/utils'

function getStatusVariant(status?: string) {
  switch (status) {
    case 'Live':
      return 'success' as const
    case 'Concept':
      return 'concept' as const
    default:
      return 'secondary' as const
  }
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all')

  const filtered =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-padding" aria-label="Projects section">
      <div className="section-container">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Real-world solutions spanning IoT, machine learning, web development, and startup concepts."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {PROJECT_FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={cn(
                'focus-ring rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer',
                filter === value
                  ? 'bg-electric text-white shadow-glow'
                  : 'border border-border bg-secondary/50 text-muted-foreground hover:border-electric/30 hover:text-foreground',
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => {
            const IconComponent = getLucideIcon(project.icon)
            const gallery =
              project.images && project.images.length > 0
                ? project.images
                : project.image
                  ? [project.image]
                  : []

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group glass-hover flex flex-col overflow-hidden rounded-2xl"
              >
                {/* Project image */}
                <div
                  className={cn(
                    'relative h-48 overflow-hidden bg-gradient-to-br',
                    project.imageGradient,
                  )}
                >
                  {gallery.length > 1 ? (
                    <div className="grid h-full grid-cols-2 gap-0.5">
                      {gallery.map((img, idx) => (
                        <img
                          key={img}
                          src={getPublicAssetSrc(img)}
                          alt={`${project.imageAlt ?? project.title} — view ${idx + 1}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  ) : gallery.length === 1 ? (
                    <img
                      src={getPublicAssetSrc(gallery[0])}
                      alt={project.imageAlt ?? `${project.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <IconComponent
                        className="h-16 w-16 text-white/60 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  {project.status && (
                    <Badge
                      variant={getStatusVariant(project.status)}
                      className="absolute right-4 top-4"
                    >
                      {project.status}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-electric-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && project.status === 'Live' && (
                      <Button variant="default" size="sm" asChild className="flex-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
