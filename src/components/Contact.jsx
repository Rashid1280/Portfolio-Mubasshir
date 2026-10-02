import { site } from '../data/site'
import { socials } from '../data/social'
import { Icon } from './Icon'
import { Button, SectionHeading } from './primitives'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-shell scroll-mt-20 px-5 pt-16 pb-32 sm:px-8 sm:pt-24 md:pb-24"
    >
      <SectionHeading id="contact-heading">Contact</SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="max-w-prose text-lead text-muted">
            If you are hiring for an entry-level full-stack or frontend role, or
            you want to talk through anything on this page, email is the fastest
            way to reach me.
          </p>
          <p className="mt-4 text-spec text-muted">{site.responseTime}</p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.href.startsWith('mailto:')
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-flex items-center gap-2 text-spec text-muted
                             transition-colors duration-150 ease-out hover:text-accent"
                >
                  <Icon name={s.icon} size={14} />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button href={`mailto:${site.email}`}>{site.email}</Button>
          <Button href={site.resume.href} variant="ghost" external>
            {site.resume.label}
          </Button>
        </div>
      </div>
    </section>
  )
}