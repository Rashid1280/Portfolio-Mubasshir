import { skillGroups } from '../data/skills'
import { SectionHeading } from './primitives'

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-shell scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
    >
      <SectionHeading id="skills-heading" aside="By area, not by year">
        Skills
      </SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-tile border border-line p-6 sm:p-7"
          >
            <h3 className="text-lg font-extrabold tracking-tight">
              {group.category}
            </h3>

            <ul className="mt-5 flex flex-col">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-2 text-[0.9375rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}