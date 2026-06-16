import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { cn, scrollToSection } from '@/lib/utils'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0.5 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'px-4 sm:px-6' : 'px-4 sm:px-6',
        )}
      >
        <nav
          className={cn(
            'section-container mx-auto flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-300 md:px-6',
            scrolled ? 'glass shadow-glow mt-2' : 'bg-transparent mt-2',
          )}
          aria-label="Main navigation"
        >
          <button
            onClick={() => handleNavClick('#home')}
            className="focus-ring rounded-lg text-lg font-bold gradient-text cursor-pointer"
          >
            {SITE.shortName.split(' ')[0]}
            <span className="text-electric">.</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'focus-ring rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer',
                    activeSection === id
                      ? 'text-electric-light'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => handleNavClick('#contact')}
            >
              Hire Me
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xl md:hidden"
      >
        <motion.nav
          initial={false}
          animate={mobileOpen ? { x: 0 } : { x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-1 border-l border-border bg-card p-6 pt-24"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'focus-ring rounded-xl px-4 py-3 text-left text-base font-medium transition-colors cursor-pointer',
                  activeSection === id
                    ? 'bg-electric/10 text-electric-light'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {link.label}
              </button>
            )
          })}
          <Button
            variant="default"
            className="mt-4 w-full"
            onClick={() => handleNavClick('#contact')}
          >
            Hire Me
          </Button>
        </motion.nav>
      </motion.div>
    </>
  )
}
