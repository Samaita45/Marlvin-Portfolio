import { statusTone } from '@/lib/status'
import type { BuildingLabel, ProjectStatus } from '@/lib/types'
import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: ProjectStatus | BuildingLabel
  label?: string
  className?: string
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const text = label ?? status.toString()
  return (
    <span
      className={cn(
        'inline-flex items-center border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em]',
        statusTone(status),
        className,
      )}
    >
      {text}
    </span>
  )
}
