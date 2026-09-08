import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-foreground">{SITE.name}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">On this site</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/#work" className="text-muted-foreground hover:text-foreground">Work</Link></li>
              <li><Link to="/#about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/#github" className="text-muted-foreground hover:text-foreground">GitHub</Link></li>
              <li><Link to="/#contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Connect</p>
            <div className="mt-4 flex gap-3">
              <a
                href={`https://github.com/${SITE.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="focus-ring flex h-10 w-10 items-center justify-center border border-border text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="focus-ring flex h-10 w-10 items-center justify-center border border-border text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Send email"
                className="focus-ring flex h-10 w-10 items-center justify-center border border-border text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{SITE.location}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>Designed and developed by {SITE.name}</p>
          <p>&copy; {year}</p>
        </div>
      </div>
    </footer>
  )
}
