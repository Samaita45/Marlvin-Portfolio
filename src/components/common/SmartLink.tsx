import { Link } from 'react-router-dom'

export function SmartLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}
