# Mohammed Mubasshir Rashid — Portfolio

Personal developer portfolio. React 19, Vite 8, Tailwind CSS 3, React Router 7
and Motion. A static site: no backend, no database.

## Run it locally

Requires Node.js **20.19 or newer** (or 22.12+), which is what Vite 8 needs.

```bash
npm install
npm run dev       # http://localhost:5173, reloads as you edit
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## How the content works

Content lives in `src/data/`. The components only display what those files
contain, so changing the site's content never means editing a component.

| File                     | What it controls                                             |
| ------------------------ | ------------------------------------------------------------ |
| `src/data/site.js`       | Name, intro line, location, availability, email, résumé link |
| `src/data/social.js`     | GitHub / LinkedIn / email links                              |
| `src/data/skills.js`     | The skill categories (`category` + `items`)                  |
| `src/data/experience.js` | Work history                                                 |
| `src/data/projects.js`   | Every project, including case study content                  |

The hero's "Tech Stack" panel is not written separately. It reads the `stack`
of the project marked `featured: true`.

### Adding a project

Add one object to the `projects` array in `src/data/projects.js`:

```js
{
  slug: 'my-new-project',          // becomes /work/my-new-project
  name: 'My New Project',
  problem: 'One sentence: what it solves, and for whom.',
  year: '2027',
  role: 'Solo · full-stack',
  status: 'live',                  // 'live' | 'archived' | 'building'
  stack: ['React', 'Node.js'],
  links: {
    demo: 'https://example.com',   // leave a link out to hide it
    repo: 'https://github.com/you/repo',
  },
  cover: {
    src: '/images/my-new-project-cover.webp',
    alt: 'Describe what is visible in the screenshot.',
    width: 1600,                   // the image's real size in pixels
    height: 900,
  },
}
```

That is all. It appears in the grid automatically. Optional fields:

- `featured: true` makes it the large tile at the top and feeds the hero's
  Tech Stack panel. Use it on one project only.
- `span: 'wide'` makes a normal tile full width.
- `note: '...'` adds a small caveat under the details.
- `caseStudy: { ... }` creates a page at `/work/<slug>` and adds a
  "Read the case study" link. Every field inside is optional:

  | Field           | Shown as                                                 |
  | --------------- | -------------------------------------------------------- |
  | `summary`       | The paragraph under the title                            |
  | `context`       | "The problem": an array of paragraphs                    |
  | `decisions`     | "Architecture decisions": an array of `{ title, body }`  |
  | `gallery`       | "Interface": an array of `{ src, alt, width, height }`   |
  | `challenge`     | "A problem worth describing": `{ title, body: [lines] }` |
  | `retrospective` | "What I would do differently": an array of paragraphs    |

See the NearAIIMS entry for a complete example. Put screenshots in
`public/images/`, as `.webp` for small file size, and give each its real
`width` and `height` so the page does not jump while images load.

### Adding experience

Add an object to the array in `src/data/experience.js`: `company`, `role`,
`period`, `location`, `points` (an array of bullet strings), and optionally
`platform`, `footnote`, and `highlight: true` with `stat` / `statLabel` for the
large number at the top of the card.

## Behaviour worth knowing

- Dark is the default theme. A visitor's choice is saved in the browser only
  when they use the toggle, and applied before first paint so there is no flash.
- All colours are CSS variables at the top of `src/index.css`, one set for dark
  and one for light. Change a value there and it changes everywhere.
- Below 768px the top navigation links are replaced by a fixed bar at the
  bottom of the screen that highlights the section you are in.
- Animations are skipped for visitors who have turned on "reduce motion".

## Notes

`npm audit` reports issues in build-time tooling (Tailwind 3's dependencies).
None of it is shipped to visitors, and `npm audit --omit=dev` reports zero. Do
not run `npm audit fix --force`: it upgrades Tailwind to v4 and breaks the
configuration.
