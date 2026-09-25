const paths = {
  github: 'M12 2C6.477 2 2 6.484 2 12.017c0...',  
  linkedin: 'M20.447 20.452h-3.554v-5.569c0...',
  mail: 'M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5...',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0...',
  moon: 'M21.5 14.08A9.5 9.5 0 1 1 9.92 2.5a7.5...',
}

const strokeIcons = new Set(['sun', 'moon'])

export function Icon({ name, size = 16, className = '' }) {
  const d = paths[name]
  if (!d) return null

  const stroke = strokeIcons.has(name)

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={className}
      fill={stroke ? 'none' : 'currentColor'}
      stroke={stroke ? 'currentColor' : 'none'}
      strokeWidth={stroke ? 1.75 : 0}
      strokeLinecap="round"
    >
      <path d={d} />
    </svg>
  )
}

export function StatusDot({ status }) {
  const config = {
    live: { label: 'Live', tone: 'bg-accent' },
    archived: { label: 'Archived', tone: 'bg-muted' },
    building: { label: 'In progress', tone: 'bg-accent/50' },
  }[status] ?? { label: status, tone: 'bg-muted' }

  return (
    <span className="inline-flex items-center gap-1.5 text-spec text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${config.tone}`} aria-hidden="true" />
      {config.label}
    </span>
  )
}