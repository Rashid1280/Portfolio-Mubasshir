

export const projects = [
  {
    slug: 'nearaiims',
    name: 'NearAIIMS',
    problem:
      'Families travelling to Raipur for treatment at AIIMS need a place to stay for a few weeks, near the hospital, without a hotel budget.',
    year: '2026',
    role: 'Solo · full-stack',
    status: 'live',
    featured: true,
    span: 'large',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    links: {
      demo: 'https://nearaiims.vercel.app',
      repo: 'https://github.com/Rashid1280/nearaiims',
    },
    cover: {
      src: '/images/nearaiims-cover.webp',
      alt: 'NearAIIMS home page showing the search panel and a featured property listing.',
      width: 1600,
      height: 759,
    },
    note: 'The API runs on a free Render instance, so the first request after a period of inactivity can take up to 30 seconds to wake.',

    caseStudy: {
      summary:
        'A short-term rental platform built specifically around one situation: a family arriving in an unfamiliar city, on a difficult day, needing a verified place to stay within reach of the hospital.',

      context: [
        'AIIMS Raipur draws patients from across Chhattisgarh and neighbouring states. Treatment often runs for weeks, which puts families in an awkward gap — too long for a hotel budget, too short for a rental agreement.',
        'The existing options are informal: noticeboards, word of mouth, and WhatsApp groups. There is no way to check what is actually available, what it costs, or how far it is from the hospital gate before you arrive.',
      ],

      decisions: [
        {
          title: 'JWT stored in an httpOnly cookie, not localStorage',
          body: 'Tokens in localStorage are readable by any script on the page, which turns a single XSS into a full account takeover. Setting the cookie httpOnly and sameSite means the browser attaches the token automatically and no JavaScript on the page — mine or an attacker\'s — can read it. The cost is that the frontend has to send credentials on every request and the API needs an explicit CORS origin allowlist.',
        },
        {
          title: 'Ownership checks in middleware, not in the route handlers',
          body: 'Every write route that touches a property or a booking passes through a check that the authenticated user actually owns the resource. Putting that in middleware rather than repeating it per-handler means a new route cannot accidentally ship without it.',
        },
        {
          title: 'Bookings modelled as a state machine, not a boolean',
          body: 'A booking moves through a fixed set of states rather than flipping a confirmed flag. That makes invalid transitions impossible to express, and it means the UI can render the current state without inferring it from a combination of fields.',
        },
        {
          title: 'MongoDB text index for search instead of a regex scan',
          body: 'Regex matching on a growing collection scales badly and cannot rank results. A text index lets Mongo do the matching and return relevance-ordered results without loading every document.',
        },
        {
          title: 'Split deployment: Vercel for the client, Render for the API',
          body: 'The frontend is static and benefits from a CDN; the API needs a persistent Node process. Splitting them means the site itself stays fast even when the free-tier backend is cold — the page renders, and only the data waits.',
        },
      ],

      challenge: {
        title: '⟨ PLACEHOLDER — write this one yourself ⟩',
        body: [
          'This is the section a hiring manager will actually read closely, and it has to be yours. Pick the bug or constraint that genuinely cost you the most time. Strong candidates from what you built:',
          '• The httpOnly cookie not persisting across the Vercel → Render origin boundary (CORS credentials, sameSite=None, secure, and the proxy/cookie-domain mismatch).',
          '• Multer image uploads: validating MIME type rather than trusting the file extension, and what happens to the ephemeral filesystem on a Render free instance between restarts.',
          '• The PropertyCard component rendering hardcoded data instead of the props passed from its parent — why it looked correct in the UI while being completely wrong, and how you found it.',
          '',
          'Structure it in four beats: what broke → what you first assumed → how you actually diagnosed it → what the fix was and what it cost. Roughly 150–250 words. Specifics beat polish; name the error message if you remember it.',
        ],
      },

      retrospective: [
        '⟨ PLACEHOLDER ⟩ What you would change if you started again. Two or three items, concrete.',
        '⟨ PLACEHOLDER ⟩ One thing you would keep, and why.',
      ],

      gallery: [
        {
          src: '/images/nearaiims-listings.webp',
          alt: 'Property listings view with filters applied.',
          width: 1400,
          height: 720,
        },
        {
          src: '/images/nearaiims-detail.webp',
          alt: 'A single property detail page showing availability and booking controls.',
          width: 1400,
          height: 710,
        },
      ],
    },
  },

  {
    slug: 'ayush-locator',
    name: 'AYUSH Hospital Locator',
    problem:
      'Patients looking for Ayurveda, Yoga, Unani, Siddha or Homeopathy care have no single place to see which certified hospitals are nearby.',
    year: '2025',
    role: 'Solo · frontend',
    status: 'live',
    span: 'small',
    stack: ['JavaScript', 'Bootstrap', 'Google Maps Embed'],
    links: {
      demo: 'https://ayushhospitals.netlify.app/',
      repo: 'https://github.com/Rashid1280/Nearby-AYUSH-Hospitals',
    },
    cover: {
      src: '/images/ayush-cover.webp',
      alt: 'AYUSH hospital locator landing page with a search prompt.',
      width: 1000,
      height: 518,
    },
    note: 'A static directory plotted on an embedded map — no live geolocation or distance ranking.',
  },

  {
    slug: 'rental-v1',
    name: 'Short-Term Rental Service (v1)',
    problem:
      'The first attempt at the NearAIIMS idea — server-rendered, no auth, kept here as the before half of a before-and-after.',
    year: '2025',
    role: 'Solo · full-stack',
    status: 'archived',
    span: 'small',
    stack: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    links: {
      repo: 'https://github.com/Rashid1280/short-term-rental-service',
    },
    cover: {
      src: '/images/rental-v1-cover.webp',
      alt: 'The original rental service interface, built with Bootstrap.',
      width: 1000,
      height: 516,
    },
  },
]

export const featuredProject = projects.find((p) => p.featured) ?? projects[0]

export const projectsWithCaseStudies = projects.filter((p) => p.caseStudy)

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)