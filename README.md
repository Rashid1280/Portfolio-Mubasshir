# Mohammed Mubasshir Rashid — Portfolio

Personal developer portfolio. React 19, Vite and Tailwind CSS 3.
A single static page: no backend, no database, no router.

## Run it locally

Requires Node.js **20.19 or newer** (or 22.12+).

```bash
npm install
npm run dev       # http://localhost:5173, reloads as you edit
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## How it works (the 60-second version)

1. **Content is data.** Everything you read on the site lives in `src/data/`.
   Components only display it, so changing content never means editing a
   component.
2. **One page, five sections.** `App.jsx` renders Hero → Work → Skills →
   Experience → Contact. The nav links are plain `#section` anchors, and
   `scroll-behavior: smooth` in `index.css` does the smooth scrolling.
3. **One list renders the projects.** The project grid and the hero's "Tech
   Stack" panel both read from the `projects` array.
4. **Theme = CSS variables.** The colours are defined once in `src/index.css`
   (one set for dark, one for light). Tailwind reads them, and the toggle in
   the nav flips `data-theme` on `<html>` and saves the choice in
   `localStorage`. A tiny script in `index.html` applies the saved choice
   before the page paints, so there is no flash.
5. **Deployed on Vercel**, which builds the site with `npm run build`.

```
src/
  main.jsx            starts React
  App.jsx             nav + the five sections
  components/         Hero, ProjectGrid, Skills, Experience, Contact, Nav, ...
  data/               site, social, skills, experience, projects
  hooks/useTheme.js   the light/dark toggle logic
```

## Changing the content

| File                     | What it controls                                        |
| ------------------------ | ------------------------------------------------------- |
| `src/data/site.js`       | Name, intro line, location, availability, email, résumé |
| `src/data/social.js`     | GitHub / LinkedIn / email links                         |
| `src/data/skills.js`     | The skill categories (`category` + `items`)             |
| `src/data/experience.js` | Work history                                            |
| `src/data/projects.js`   | Every project                                           |

### Adding a project

Add one object to the `projects` array in `src/data/projects.js`:

```js
{
  slug: 'my-new-project',          // a unique id
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

It appears in the grid automatically, in the same order as the array.
Optional fields:

- `featured: true` makes it the large tile and feeds the hero's Tech Stack
  panel. Use it on one project only, and keep that project first in the array.
- `note: '...'` adds a small caveat under the details.

Put screenshots in `public/images/`, as `.webp` for small file size, and give
each its real `width` and `height` so the page does not jump while images load.

### Adding experience

Add an object to the array in `src/data/experience.js`: `company`, `role`,
`period`, `location`, `points` (an array of bullet strings), and optionally
`platform`, `footnote`, and `stat` / `statLabel` for the large number at the
top of the card.

## Notes

`npm audit` reports issues in build-time tooling (Tailwind 3's dependencies).
None of it is shipped to visitors, and `npm audit --omit=dev` reports zero. Do
not run `npm audit fix --force`: it upgrades Tailwind to v4 and breaks the
configuration.
