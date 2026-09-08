import { Github, Lock } from 'lucide-react'
import type { RepositoryRef } from '@/lib/types'

const KIND_LABEL: Record<RepositoryRef['kind'], string> = {
  personal: 'Personal GitHub Repository',
  organization: 'Organization Repository',
  client: 'Client Repository',
  private: 'Private Repository',
}

export function RepoLink({ repository }: { repository: RepositoryRef | null }) {
  if (!repository) return null

  const label = KIND_LABEL[repository.kind]
  const isLinkable = Boolean(repository.url) && repository.kind !== 'private'

  if (!isLinkable) {
    return (
      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="h-4 w-4" aria-hidden="true" />
        {repository.kind === 'private' || !repository.url ? 'Private Repository' : label}
      </span>
    )
  }

  return (
    <a
      href={repository.url ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-foreground underline-offset-4 hover:underline"
    >
      <Github className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  )
}
