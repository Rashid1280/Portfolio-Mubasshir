import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { Icon, StatusDot } from './Icon'
import { Reveal, SectionHeading, SpecRow, TextLink } from './primitives'

const spanClasses = {
  large: 'sm:col-span-2',
  wide: 'sm:col-span-2',
  small: '',
}

export function ProjectGrid() {
  const ordered = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  )

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mx-auto max-w-shell scroll-mt-20 px-5 pb-5 pt-10 sm:px-8 sm:pb-8 sm:pt-14"
    >
      <SectionHeading id="work-heading">Work</SectionHeading>

      <ul className="grid gap-px bg-line sm:grid-cols-2">
        {ordered.map((project, i) => {
          const span = project.span ?? 'small'
          return (
            <li key={project.slug} className={`flex ${spanClasses[span] ?? ''}`}>
              <Reveal delay={Math.min(i, 3) * 0.05} className="w-full">
                <ProjectTile project={project} wide={span !== 'small'} />
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function ProjectTile({ project, wide }) {
  const { name, problem, stack, year, role, status, links, cover, note, caseStudy, slug } =
    project

  return (
    <article
      className={`group flex h-full flex-col bg-bg p-6 transition-colors duration-200
                  ease-out hover:bg-surface sm:p-7 ${
                    wide ? 'lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-8' : ''
                  }`}
    >
      {cover && (
        <div
          className={`overflow-hidden rounded-tile border border-line ${
            wide ? 'mb-6 lg:mb-0' : 'mb-6'
          }`}
        >
          <img
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}

            loading={wide ? 'eager' : 'lazy'}
            fetchPriority={wide ? 'high' : 'auto'}
            decoding="async"

            className="h-auto w-full transition-transform duration-500 ease-out
                       motion-safe:group-hover:scale-[1.015]"
          />
        </div>
      )}

      <div className="flex h-full flex-col">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className={`font-extrabold tracking-tight ${wide ? 'text-title' : 'text-xl'}`}>
            {name}
          </h3>
          <span className="mt-1 shrink-0">
            <StatusDot status={status} />
          </span>
        </div>

        <p
          className={`max-w-prose text-muted ${
            wide ? 'text-lead' : 'text-[0.9375rem] leading-relaxed'
          }`}
        >
          {problem}
        </p>

        <div className="mt-6">
          <SpecRow
            items={[
              { label: 'Stack', value: stack.join(' · ') },
              { label: 'Role', value: role },
              { label: 'Year', value: year },
            ]}
          />
        </div>

        {note && (
          <p className="mt-4 border-l-2 border-line pl-3 text-spec text-muted">{note}</p>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-spec">
          {caseStudy && (
            <Link
              to={`/work/${slug}`}
              className="font-medium text-accent underline decoration-accent/40
                         underline-offset-4 transition-colors duration-150 ease-out
                         hover:decoration-accent"
            >
              Read the case study
            </Link>
          )}
          {links.demo && (
            <TextLink href={links.demo} external>
              Live demo
            </TextLink>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text underline
                         decoration-line underline-offset-4 transition-colors
                         duration-150 ease-out hover:text-accent hover:decoration-accent"
            >
              <Icon name="github" size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}