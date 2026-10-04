import { navSections } from './navSections'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navSections.map((s) => s.href.slice(1))

export function BottomNav() {
  const active = useActiveSection(sectionIds)

  return (
    <nav
      aria-label="Jump to section"
      className="fixed inset-x-0 bottom-0 z-40 overflow-x-auto no-scrollbar
                 border-t border-line bg-bg
                 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="flex w-max divide-x divide-line text-sm">
        {navSections.map(({ href, label }, i) => {
          const id = href.slice(1)
          const isCurrent = id === active
          return (
            <li key={href}>
              <a
                href={href}
                aria-current={isCurrent ? 'true' : undefined}
                className={`flex items-center gap-1.5 px-4 py-3.5 transition-colors
                            duration-150 ease-out ${
                              isCurrent ? 'text-accent' : 'text-muted hover:text-text'
                            }`}
              >
                <span className="text-spec tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {label}
              </a>
            </li>
          )
        })}
        <li aria-hidden="true" className="w-2 shrink-0" />
      </ul>
    </nav>
  )
}