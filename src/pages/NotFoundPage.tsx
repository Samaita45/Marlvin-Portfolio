import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="section-container flex min-h-[70vh] flex-col justify-center pt-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">404</p>
      <h1 className="mt-3 font-display text-4xl text-foreground">This page is not on the site.</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The project or company you opened is not in the catalog yet.
      </p>
      <Link to="/" className="mt-6 text-sm underline-offset-4 hover:underline">
        Back to the homepage
      </Link>
    </div>
  )
}
