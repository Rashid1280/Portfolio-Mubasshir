const paths = {
  github:
    'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.42-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z',
  mail: 'M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 20.25 21H3.75a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.4.75 8.1 5.4 8.1-5.4H3.9Z',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-13.5V1m0 22v-2.5M20.5 12H23M1 12h2.5m13.02-6.52 1.77-1.77M5.71 18.29l-1.77 1.77m14.35 0-1.77-1.77M5.71 5.71 3.94 3.94',
  moon: 'M21.5 14.08A9.5 9.5 0 1 1 9.92 2.5a7.5 7.5 0 0 0 11.58 11.58Z',
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