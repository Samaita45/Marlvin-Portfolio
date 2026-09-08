import { ORGANIZATIONS } from '@/data/organizations'
import { PROJECTS, PROJECT_FILTERS } from '@/data/projects'
import { buildingLabelFromStatus } from '@/lib/status'
import type {
  BuildingItem,
  Organization,
  Project,
  ProjectFilter,
  RoadmapBucket,
} from '@/lib/types'

export { PROJECTS, PROJECT_FILTERS, ORGANIZATIONS }

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}

export function getOrganizationBySlug(slug: string): Organization | undefined {
  return ORGANIZATIONS.find((org) => org.slug === slug)
}

export function getOrganizationById(id: string): Organization | undefined {
  return ORGANIZATIONS.find((org) => org.id === id)
}

export function getProjectsByOrganization(organizationId: string): Project[] {
  return PROJECTS.filter((project) => project.organizationId === organizationId)
}

export function getProjectsByFilter(filter: ProjectFilter): Project[] {
  if (filter === 'all') return PROJECTS
  return PROJECTS.filter((project) => project.filters.includes(filter))
}

export function getLabProjects(): Project[] {
  return PROJECTS.filter((project) => project.showInLab)
}

export function getProductProjects(): Project[] {
  return PROJECTS.filter((project) => project.showInProducts)
}

export function getProjectLink(project: Project): { href: string; external: boolean } {
  if (project.liveUrl) return { href: project.liveUrl, external: true }
  if (project.organizationUrl) return { href: project.organizationUrl, external: false }
  return { href: '/#projects', external: false }
}

export function getRoadmap(): Record<RoadmapBucket, Project[]> {
  return {
    now: PROJECTS.filter((project) => project.roadmapBucket === 'now'),
    next: PROJECTS.filter((project) => project.roadmapBucket === 'next'),
    later: PROJECTS.filter((project) => project.roadmapBucket === 'later'),
  }
}

export function getBuildingItems(): BuildingItem[] {
  const neighbourlink = getOrganizationById('neighbourlink')
  const items: BuildingItem[] = []

  if (neighbourlink) {
    items.push({
      id: neighbourlink.id,
      title: 'NeighborLink',
      status: 'Building',
      summary: neighbourlink.description,
      href: `/org/${neighbourlink.slug}`,
      kind: 'organization',
      image: '/projects/neighbourlink.jpg',
    })
  }

  for (const project of PROJECTS.filter((item) => item.showInBuilding)) {
    items.push({
      id: project.id,
      title: project.title,
      status: buildingLabelFromStatus(project.status),
      summary: project.description,
      href: getProjectLink(project).href,
      kind: 'project',
      image: project.screenshots[0]?.src ?? null,
      subtitle: project.category,
    })
  }

  items.push({
    id: 'future-projects',
    title: 'Future Projects',
    status: 'Planned',
    summary: 'Work that is planned or still at concept stage.',
    href: '/#roadmap',
    kind: 'slot',
  })

  return items
}

export function getCurrentlyBuilding(): BuildingItem[] {
  return getBuildingItems().filter((item) => item.status === 'Building').slice(0, 4)
}
