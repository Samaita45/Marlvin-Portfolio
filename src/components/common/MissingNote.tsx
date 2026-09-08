export function MissingNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="border border-dashed border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground">
      {children}
    </p>
  )
}
