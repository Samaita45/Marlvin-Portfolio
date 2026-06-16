import { useEffect, useState } from 'react'
import { fetchGitHubStats, getFallbackGitHubStats, type GitHubStats } from '@/lib/github'

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
        setStats(getFallbackGitHubStats())
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
