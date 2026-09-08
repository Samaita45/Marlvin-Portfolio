import { SectionHeading } from '@/components/common/SectionHeading'
import { PRODUCT_PROCESS } from '@/data/process'

export function Process() {
  return (
    <section id="process" className="section-padding border-t border-border" aria-label="From idea to product">
      <div className="section-container">
        <SectionHeading label="Process" title="From Idea to Product" />

        <ol className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {PRODUCT_PROCESS.map((step, i) => (
            <li key={step.id} className="bg-background p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="mt-3 font-display text-xl text-foreground">{step.label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
