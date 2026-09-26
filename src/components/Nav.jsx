import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { useTheme } from '../hooks/useTheme'
import { navSections } from './navSections'
import { Icon } from './Icon'

export function Nav() {
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-shell items-center gap-6 px-5 sm:px-8"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 text-spec font-semibold tracking-tight"
        >
          <Mark />
          <span className="hidden sm:inline">{site.shortName}</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-8 md:flex">
          {navSections.map(({ href, label }) => (
            <li key={href}>
              <a
                href={onHome ? href : `/${href}`}
                className="text-[0.95rem] font-medium text-muted transition-colors duration-150 ease-out hover:text-text"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-control
                     border border-line text-muted transition-colors duration-150 ease-out
                     hover:border-accent hover:text-accent md:ml-0"
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
        </button>
      </nav>
    </header>
  )
}

function Mark() {
  return (
    <svg
      viewBox="0 0 28 24"
      width="20"
      height="17"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <path
        d="M1 23V1l6.5 8L14 1v22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="miter"
      />
      <path
        d="M16 23V1h6a4.5 4.5 0 0 1 0 9h-6l9 13"
        fill="none"
        stroke="rgb(var(--accent))"
        strokeWidth="2.25"
        strokeLinejoin="miter"
      />
    </svg>
  )
}