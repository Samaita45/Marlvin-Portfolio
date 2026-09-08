import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ORGANIZATIONS, getProjectsByOrganization } from '@/data/catalog'

const KIND_LABEL = {
  venture: 'Venture',
  collaboration: 'Collaboration',
  client: 'Client',
  employer: 'Employer',
}

export function Organizations() {
  return (
    <section id="companies" className="section-padding border-t border-border" aria-label="Companies and organizations">
      <div className="section-container">
        <SectionHeading index="04" label="04" title="Companies & Organizations" />

        <div className="space-y-4">
          {ORGANIZATIONS.map((org, i) => {
            const products = getProjectsByOrganization(org.id)
            return (
              <motion.article
                key={org.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border border-border bg-card p-6 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {KIND_LABEL[org.kind]}
                    </p>
                    <h3 className="mt-2 font-display text-3xl tracking-tight text-foreground">{org.name}</h3>
                  </div>
                  {org.stage && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{org.stage}</span>
                  )}
                </div>
                {products.length > 0 && (
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {products.map((product) => product.title).join(' · ')}
                  </p>
                )}
                <Link
                  to={`/org/${org.slug}`}
                  className="mt-5 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-foreground underline-offset-4 hover:underline"
                >
                  Company profile
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
