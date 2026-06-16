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

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    }

    const token = import.meta.env.VITE_GITHUB_TOKEN
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
        { headers },
      ),
    ])

    if (!userRes.ok || !reposRes.ok) {
      return null
    }

    const user: GitHubUser = await userRes.json()
    const allRepos: GitHubRepo[] = await reposRes.json()
    const repos = allRepos.filter((repo) => !repo.fork).slice(0, 8)

    const languages: Record<string, number> = {}
    let totalStars = 0

    for (const repo of allRepos.filter((r) => !r.fork)) {
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

export function getFallbackGitHubStats(): GitHubStats {
  return {
    user: {
      login: GITHUB_USERNAME,
      name: 'Marlvin Anesu Munyanyi',
      bio: 'Computer Science student passionate about software engineering and IoT.',
      avatar_url: '',
      html_url: `https://github.com/${GITHUB_USERNAME}`,
      public_repos: 0,
      followers: 0,
      following: 0,
      created_at: '2023-01-01T00:00:00Z',
    },
    repos: [],
    languages: { TypeScript: 3, Python: 2, JavaScript: 2 },
    totalStars: 0,
  }
}
