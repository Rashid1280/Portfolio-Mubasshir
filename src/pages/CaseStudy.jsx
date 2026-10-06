import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { Icon, StatusDot } from '../components/Icon'
import { Button, SpecRow } from '../components/primitives'

export function CaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project?.caseStudy) return <Navigate to="/#work" replace />

  const { name, stack, year, role, status, links, note, caseStudy } = project

  return (
    <article className="mx-auto max-w-shell px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <Meta name={name} summary={caseStudy.summary} />

      <Link
        to="/#work"
        className="text-spec text-muted underline decoration-line underline-offset-4
                   transition-colors duration-150 ease-out hover:text-accent"
      >
        Back to all work
      </Link>

      <header className="mt-8 border-t border-line pt-8">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-display font-extrabold">{name}</h1>
          <StatusDot status={status} />
        </div>

        <p className="mt-6 max-w-prose text-lead text-muted">{caseStudy.summary}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="flex flex-wrap items-center gap-3">
            {links.demo && (
              <Button href={links.demo} external>
                Open the live app
              </Button>
            )}
            {links.repo && (
              <Button href={links.repo} variant="ghost" external>
                <Icon name="github" size={14} />
                Source code
              </Button>
            )}
          </div>

          <SpecRow
            items={[
              { label: 'Stack', value: stack.join(' · ') },
              { label: 'Role', value: role },
              { label: 'Year', value: year },
            ]}
          />
        </div>

        {note && (
          <p className="mt-6 max-w-prose border-l-2 border-accent/50 pl-4 text-spec text-muted">
            {note}
          </p>
        )}
      </header>

      {caseStudy.context?.length > 0 && (
        <Section heading="The problem">
          {caseStudy.context.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Section>
      )}

      {caseStudy.decisions?.length > 0 && (
        <Section heading="Architecture decisions" prose={false}>
          <ol className="flex flex-col gap-px bg-line">
            {caseStudy.decisions.map((decision, i) => (
              <li key={decision.title} className="bg-bg p-6 sm:p-7">
                <div className="flex gap-5">
                  <span className="mt-1 shrink-0 text-spec text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight">
                      {decision.title}
                    </h3>
                    <p className="mt-3 max-w-prose leading-relaxed text-muted">
                      {decision.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {caseStudy.gallery?.length > 0 && (
        <Section heading="Interface" prose={false}>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {caseStudy.gallery.map((shot) => (
              <figure key={shot.src} className="bg-bg">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full border border-line object-cover"
                />
              </figure>
            ))}
          </div>
        </Section>
      )}

      {caseStudy.challenge && (
        <Section heading="A problem worth describing">
          <h3 className="text-lg font-extrabold tracking-tight text-text">
            {caseStudy.challenge.title}
          </h3>
          {caseStudy.challenge.body.map((line, i) =>
            line === '' ? (
              <span key={`gap-${i}`} className="block h-2" />
            ) : (
              <p key={line}>{line}</p>
            )
          )}
        </Section>
      )}

      {caseStudy.retrospective?.length > 0 && (
        <Section heading="What I would do differently">
          {caseStudy.retrospective.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </Section>
      )}
    </article>
  )
}

function Section({ heading, children, prose = true }) {
  return (
    <section className="mt-16 sm:mt-20">
      <h2 className="border-t border-line pt-5 text-title font-extrabold">
        {heading}
      </h2>
      <div className={prose ? 'mt-6 max-w-prose space-y-4 leading-relaxed text-muted' : 'mt-6'}>
        {children}
      </div>
    </section>
  )
}

function Meta({ name, summary }) {
  useDocumentMeta({
    title: `${name} — case study · Mohammed Mubasshir Rashid`,
    description: summary,
  })
  return null
}