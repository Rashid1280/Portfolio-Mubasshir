import { m } from 'motion/react'
import { site } from '../data/site'
import { socials } from '../data/social'
import { featuredProject } from '../data/projects'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Icon } from './Icon'
import { Button, SpecRow } from './primitives'

export function Hero() {
  const reduced = useReducedMotion()
  const primaryLinks = socials.filter((s) => s.primary)

  const stagger = (i) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.4,
            delay: 0.08 + i * 0.04,
            ease: [0.2, 0.8, 0.2, 1],
          },
        }

  return (
    <section
      aria-labelledby="hero-name"
      className="mx-auto max-w-shell px-5 pb-4 pt-14 sm:px-8 sm:pb-10 sm:pt-20"
    >
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-16">
        <div>
          <h1
            id="hero-name"
            className="max-w-[14ch] text-display font-extrabold uppercase"
          >
            {site.name}
          </h1>

          <m.p {...stagger(0)} className="mt-7 max-w-prose text-lead text-muted">
            {site.positioning}
          </m.p>

          <m.div {...stagger(1)} className="mt-10 max-w-lg">
            <SpecRow
              items={[
                { label: 'Role', value: site.role },
                { label: 'Based', value: site.location },
                { label: 'Status', value: site.availability },
              ]}
            />
          </m.div>

          <m.div {...stagger(2)} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#work">See the work</Button>
            <Button href={site.resume.href} variant="ghost" external>
              {site.resume.label}
            </Button>

            <ul className="flex items-center gap-1 sm:ml-2">
              {primaryLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    {...(s.href.startsWith('mailto:')
                      ? {}
                      : { target: '_blank', rel: 'noopener noreferrer' })}
                    className="flex h-9 w-9 items-center justify-center rounded-control
                               text-muted transition-colors duration-150 ease-out
                               hover:text-accent"
                  >
                    <Icon name={s.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </m.div>
        </div>

        <TechStackPanel />
      </div>
    </section>
  )
}

function TechStackPanel() {
  const reduced = useReducedMotion()
  const Wrapper = reduced ? 'div' : m.div

  const motionProps = reduced
    ? {}
    : {
        initial: { opacity: 0, x: 12 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.45, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] },
      }

  return (
    <Wrapper
      {...motionProps}
      className="hidden lg:block lg:rounded-tile lg:border lg:border-line"
    >
      <p className="border-b border-line px-6 py-4 text-spec text-muted xl:px-7">
        Tech Stack
      </p>
      <ul className="divide-y divide-line">
        {featuredProject.stack.map((tech) => (
          <li
            key={tech}
            className="px-6 py-3.5 text-base font-medium tracking-tight xl:px-7 xl:py-4 xl:text-lg"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}