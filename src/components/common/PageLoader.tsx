import { motion } from 'framer-motion'

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <p className="font-display text-2xl text-foreground">Marlvin Anesu Munyanyi</p>
    </motion.div>
  )
}
