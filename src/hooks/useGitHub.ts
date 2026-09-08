import { useEffect, useState } from 'react'
import { fetchGitHubStats, fetchOrgRepos, type GitHubRepo, type GitHubStats } from '@/lib/github'

export function useGitHub() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let mounted = true

    async function load() {
      setLoading(true)
      const data = await fetchGitHubStats()
      if (!mounted) return

      if (data) {
        setStats(data)
        setError(false)
      } else {
        setStats(null)
        setError(true)
      }
      setLoading(false)
    }

    load()
    return () => {
      mounted = false
    }
  }, [])

  return { stats, loading, error }
}

export function useOrgRepos(org: string | null | undefined) {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null)
  const [loading, setLoading] = useState(Boolean(org))

  useEffect(() => {
    if (!org) {
      setRepos(null)
      setLoading(false)
      return
    }

    let mounted = true
    setLoading(true)

    fetchOrgRepos(org).then((data) => {
      if (!mounted) return
      setRepos(data)
      setLoading(false)
    })

    return () => {
      mounted = false
    }
  }, [org])

  return { repos, loading }
}
