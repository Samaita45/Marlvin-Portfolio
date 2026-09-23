import { SectionHeading } from '@/components/common/SectionHeading'
import { StatusBadge } from '@/components/common/StatusBadge'
import { ACHIEVEMENTS } from '@/data/achievements'
import { getPublicAssetSrc } from '@/lib/utils'

const KIND_LABEL: Record<string, string> = {
  certification: 'Certification',
  academic: 'Academic',
  company: 'Company',
  product: 'Product',
  deployment: 'Deployment',
  client: 'Client',
  competition: 'Competition',
  hackathon: 'Hackathon',
  opensource: 'Open source',
  partnership: 'Partnership',
  other: 'Milestone',
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding border-t border-border" aria-label="Achievements">
      <div className="section-container">
        <SectionHeading index="08" label="08" title="Achievements" />

        <ul className="divide-y divide-border border border-border">
          {ACHIEVEMENTS.map((item) => (
            <li key={item.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {KIND_LABEL[item.kind]}
                  {item.issuer ? ` · ${item.issuer}` : ''}
                </p>
                <h3 className="mt-2 font-display text-xl text-foreground">{item.title}</h3>
                {item.detail && <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>}
                {item.credential && (
                  <a
                    href={getPublicAssetSrc(item.credential)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 block max-w-[240px]"
                  >
                    <img
                      src={getPublicAssetSrc(item.credential)}
                      alt={`${item.title} certificate`}
                      loading="lazy"
                      className="w-full border border-border transition-opacity group-hover:opacity-90"
                    />
                    <span className="mt-2 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-foreground underline underline-offset-4 group-hover:text-muted-foreground">
                      View full certificate ↗
                    </span>
                  </a>
                )}
              </div>
              <StatusBadge
                status={
                  item.status === 'completed'
                    ? 'completed'
                    : item.status === 'planned'
                      ? 'planned'
                      : 'development'
                }
                label={
                  item.status === 'completed'
                    ? 'Completed'
                    : item.status === 'planned'
                      ? 'Next'
                      : 'In progress'
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
