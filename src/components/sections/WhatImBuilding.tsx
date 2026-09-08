import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SmartLink } from '@/components/common/SmartLink'
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
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <SmartLink
                href={item.href}
                className="block h-full overflow-hidden border border-border bg-card transition-colors hover:border-foreground/30"
              >
                {item.image && (
                  <img
                    src={getPublicAssetSrc(item.image)}
                    alt=""
                    className={
                      item.image.includes('logo')
                        ? 'h-40 w-full bg-secondary/50 object-contain p-8'
                        : 'h-40 w-full object-cover'
                    }
                    loading="lazy"
                  />
                )}
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-foreground">{item.title}</h3>
                    {item.subtitle && (
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  <StatusBadge status={item.status} />
                </div>
              </SmartLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
