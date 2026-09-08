export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  fork: boolean
}

export interface GitHubUser {
  login: string
  name: string | null
  bio: string | null
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export interface GitHubStats {
  user: GitHubUser
  repos: GitHubRepo[]
  languages: Record<string, number>
  totalStars: number
}

const GITHUB_USERNAME = 'Samaita45'

function headers(): HeadersInit {
  const next: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }
  const token = import.meta.env.VITE_GITHUB_TOKEN
  if (token) {
    next.Authorization = `Bearer ${token}`
  }
  return next
}

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const requestHeaders = headers()
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers: requestHeaders }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
        { headers: requestHeaders },
      ),
    ])

    if (!userRes.ok || !reposRes.ok) {
      return null
    }

    const user: GitHubUser = await userRes.json()
    const allRepos: GitHubRepo[] = await reposRes.json()
    const ownRepos = allRepos.filter((repo) => !repo.fork)
    const repos = ownRepos.slice(0, 8)

    const languages: Record<string, number> = {}
    let totalStars = 0

    for (const repo of ownRepos) {
      totalStars += repo.stargazers_count
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1
      }
    }

    return { user, repos, languages, totalStars }
  } catch {
    return null
  }
}

export async function fetchOrgRepos(org: string): Promise<GitHubRepo[] | null> {
  try {
    const res = await fetch(`https://api.github.com/orgs/${org}/repos?sort=updated&per_page=20`, {
      headers: headers(),
    })
    if (!res.ok) return null
    const repos: GitHubRepo[] = await res.json()
    return repos.filter((repo) => !repo.fork)
  } catch {
    return null
  }
}
