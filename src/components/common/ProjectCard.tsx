import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { STATUS_LABEL } from '@/lib/status'
import type { Project } from '@/lib/types'
import { getPublicAssetSrc } from '@/lib/utils'
import { StatusBadge } from '@/components/common/StatusBadge'
import { AssetPlaceholder } from '@/components/common/AssetPlaceholder'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const image = project.screenshots[0]

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
    >
      <Link
        to={`/work/${project.slug}`}
        className="group block h-full border border-border bg-card transition-colors hover:border-foreground/30"
      >
        <div className="overflow-hidden border-b border-border">
          {image ? (
            <img
              src={getPublicAssetSrc(image.src)}
              alt={image.alt}
              className={
                image.src.includes('logo')
                  ? 'h-48 w-full bg-secondary/50 object-contain p-8'
                  : 'h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]'
              }
              loading="lazy"
            />
          ) : (
            <AssetPlaceholder label={project.title} className="min-h-48" />
          )}
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} label={STATUS_LABEL[project.status]} />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {project.category}
            </span>
          </div>
          <h3 className="mt-3 font-display text-2xl tracking-tight text-foreground group-hover:text-accent">
            {project.title}
          </h3>
          {project.company && (
            <p className="mt-2 text-xs text-muted-foreground">{project.company}</p>
          )}
        </div>
      </Link>
    </motion.article>
  )
}
