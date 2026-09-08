import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import { StatusBadge } from '@/components/common/StatusBadge'
import { getBuildingItems } from '@/data/catalog'
import { getPublicAssetSrc } from '@/lib/utils'

export function WhatImBuilding() {
  const items = getBuildingItems()

  return (
    <section id="building" className="section-padding border-t border-border" aria-label="What I am building">
      <div className="section-container">
        <SectionHeading index="02" label="02" title="What I'm Building" />

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, i) => {
            const inner = (
              <>
                {item.image && (
                  <img
                    src={getPublicAssetSrc(item.image)}
                    alt=""
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="flex items-start justify-between gap-3 p-5">
                  <h3 className="font-display text-2xl tracking-tight text-foreground">{item.title}</h3>
                  <StatusBadge status={item.status} />
                </div>
              </>
            )

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                {item.href.startsWith('/#') || item.href.startsWith('#') ? (
                  <a href={item.href} className="block h-full overflow-hidden border border-border bg-card transition-colors hover:border-foreground/30">
                    {inner}
                  </a>
                ) : (
                  <Link to={item.href} className="block h-full overflow-hidden border border-border bg-card transition-colors hover:border-foreground/30">
                    {inner}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
