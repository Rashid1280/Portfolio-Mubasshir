import { m } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function SpecRow({ items, className = '' }) {
  const visible = items.filter((i) => i && i.value)
  if (!visible.length) return null

  return (
    <dl className={`grid gap-x-6 gap-y-2 text-spec ${className}`}>
      {visible.map(({ label, value }) => (
        <div key={label} className="flex gap-3 border-t border-line pt-2">
          <dt className="w-20 shrink-0 text-muted">{label}</dt>
          <dd className="text-text/90">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.45, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </m.div>
  )
}