interface AssetPlaceholderProps {
  label: string
  caption?: string
  className?: string
}

export function AssetPlaceholder({ label, caption, className }: AssetPlaceholderProps) {
  return (
    <div
      className={`flex min-h-48 flex-col items-center justify-center border border-dashed border-border bg-secondary/40 px-6 text-center ${className ?? ''}`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        Image pending
      </p>
      <p className="mt-2 font-display text-xl text-foreground">{label}</p>
      {caption && <p className="mt-2 max-w-sm text-sm text-muted-foreground">{caption}</p>}
    </div>
  )
}
