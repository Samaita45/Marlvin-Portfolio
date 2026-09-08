import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { cn, getPublicAssetSrc, hashFromHref, scrollToSection } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
      if (location.pathname !== '/') return

      const ids = ['home', 'work', 'about', 'github', 'contact']
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const go = (href: string) => {
    const hash = hashFromHref(href)
    setMobileOpen(false)
    if (!hash) {
      navigate(href)
      return
    }
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash })
      return
    }
    scrollToSection(hash)
  }

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300',
          scrolled ? 'border-border bg-background/90 backdrop-blur-md' : 'border-transparent bg-background/40',
        )}
      >
        <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') scrollToSection('home')
            }}
            className="focus-ring flex items-center gap-3 font-display text-lg text-foreground"
          >
            <img
              src={getPublicAssetSrc(SITE.profileImage)}
              alt=""
              className="h-8 w-8 rounded-full object-cover object-[center_12%]"
            />
            {SITE.shortName}
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const hash = hashFromHref(link.href)
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className={cn(
                    'focus-ring px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors',
                    activeSection === hash && location.pathname === '/'
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" onClick={() => go('/#contact')}>
              Contact
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
      >
        <motion.nav
          initial={false}
          animate={mobileOpen ? { x: 0 } : { x: '100%' }}
          transition={{ duration: 0.25 }}
          className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-1 border-l border-border bg-card p-6 pt-24"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="focus-ring px-3 py-3 text-left font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <Button className="mt-4" onClick={() => go('/#contact')}>
            Contact
          </Button>
        </motion.nav>
      </motion.div>
    </>
  )
}
