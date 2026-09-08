import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  index?: string
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ index, label, title, description, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className={cn('mb-10 md:mb-14', className)}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {index ? `${index}  ` : ''}
        {label}
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight text-foreground md:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}
