import type { BuildingLabel, ProjectStatus } from '@/lib/types'

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  concept: 'Concept',
  planned: 'Planned',
  research: 'Research',
  design: 'Design',
  prototype: 'Prototype',
  development: 'Development',
  testing: 'Testing',
  live: 'Live',
  expanding: 'Expanding',
  completed: 'Completed',
  paused: 'Paused',
}

export function buildingLabelFromStatus(status: ProjectStatus): BuildingLabel {
  switch (status) {
    case 'expanding':
      return 'Expanding'
    case 'prototype':
      return 'Prototype'
    case 'research':
      return 'R&D'
    case 'concept':
      return 'Concept'
    case 'planned':
      return 'Planned'
    default:
      return 'Building'
  }
}

export function statusTone(status: ProjectStatus | BuildingLabel): string {
  const key = status.toLowerCase()
  if (key === 'live' || key === 'completed' || key === 'expanding') {
    return 'border-emerald-700/30 bg-emerald-700/10 text-emerald-800 dark:text-emerald-300'
  }
  if (key === 'development' || key === 'building' || key === 'testing') {
    return 'border-accent/30 bg-accent/10 text-accent'
  }
  if (key === 'prototype' || key === 'r&d' || key === 'research' || key === 'design') {
    return 'border-amber-800/25 bg-amber-800/10 text-amber-900 dark:text-amber-200'
  }
  return 'border-border bg-secondary text-muted-foreground'
}
