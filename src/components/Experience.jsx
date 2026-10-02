import { experience } from '../data/experience'
import { SectionHeading, SpecRow } from './primitives'

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-shell scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
    >
      <SectionHeading id="experience-heading">Experience</SectionHeading>

      <div className="flex flex-col gap-px bg-line">
        {experience.map((role) => (
          <article key={`${role.company}-${role.period}`} className="bg-bg">
            {role.highlight && role.stat && (
              <div className="border-b border-line px-6 py-10 sm:px-7 sm:py-12">
                <p className="text-display font-extrabold leading-none">
                  {role.stat}
                </p>
                <p className="mt-3 text-lead text-muted">{role.statLabel}</p>
              </div>
            )}

            <div className="grid gap-8 p-6 sm:p-7 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {role.role}
                </h3>
                <p className="mt-1 text-spec text-muted">
                  {role.company} · {role.location}
                </p>

                <ul className="mt-6 max-w-prose space-y-3">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="border-t border-line pt-3 text-[0.9375rem] leading-relaxed text-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {role.footnote && (
                  <p className="mt-5 text-spec text-muted/80">{role.footnote}</p>
                )}
              </div>

              <SpecRow
                className="h-fit"
                items={[
                  { label: 'Period', value: role.period },
                  { label: 'Company', value: role.company },
                  { label: 'Platform', value: 'Shopify' },
                ]}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}