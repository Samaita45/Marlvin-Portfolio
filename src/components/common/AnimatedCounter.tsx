import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
}

export function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0)
  const spring = useSpring(0, { stiffness: 80, damping: 20 })
  const rounded = useTransform(spring, (v) => Math.round(v))

  useEffect(() => {
    spring.set(value)
    const unsub = rounded.on('change', (v) => setDisplay(v))
    return unsub
  }, [value, spring, rounded])

  return (
    <motion.span>
      {display}
      {suffix}
    </motion.span>
  )
}
