import { Github, Heart, Linkedin, Mail } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="section-container section-padding pb-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold gradient-text">{SITE.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-sm text-muted-foreground transition-colors hover:text-electric-light cursor-pointer focus-ring rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={`https://github.com/${SITE.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-electric/40 hover:text-electric-light"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-electric/40 hover:text-electric-light"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Send email"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-electric/40 hover:text-electric-light"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Designed and Developed by{' '}
            <span className="font-medium text-foreground">{SITE.name}</span>
            <Heart className="inline h-3.5 w-3.5 text-red-500" aria-hidden="true" />
          </p>
          <p className="text-sm text-muted-foreground">&copy; {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
