export const projects = [
  {
    slug: "nearaiims",
    name: "NearAIIMS",
    problem:
      "Built and deployed a full-stack MERN application that helps patients and families traveling to AIIMS Raipur for extended treatment find short-term stays directly from nearby homeowners",
    year: "2026",
    role: "Solo · full-stack",
    status: "live",
    featured: true,
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    links: {
      demo: "https://nearaiims.vercel.app",
      repo: "https://github.com/Rashid1280/nearaiims",
    },
    cover: {
      src: "/images/nearaiims.webp",
      alt: "NearAIIMS home page showing the search panel and a featured property listing.",
      width: 1600,
      height: 759,
    },
    note: "The API runs on a free Render instance, so the first request after a period of inactivity can take up to 30 seconds to wake.",
  },
  {
    slug: "URL-Shortener",
    name: "SHORTIE",
    problem:
      "Built and deployed a full-stack URL shortener, generating unique short codes from an atomic MongoDB counter encoded in Base62, with retry handling for duplicate-code collisions",
    year: "2025",
    role: "Solo · Full-Stack",
    status: "live",
    stack: ["React", "Node.js", "Express", "MongoDB", "Render"],
    links: {
      demo: "https://url-shortener-napj.onrender.com/",
      repo: "https://github.com/Rashid1280/url-shortener",
    },
    cover: {
      src: "/images/url-shortener.webp",
      alt: "URL-Shortener",
      width: 1000,
      height: 518,
    },
    note: "The API runs on a free Render instance, so the first request after a period of inactivity can take up to 30 seconds to wake.",
  },
  {
    slug: "ayush-locator",
    name: "AYUSH Hospital Locator",
    problem:
      "Patients looking for Ayurveda, Yoga, Unani, Siddha or Homeopathy care can search for hospitals nearby.",
    year: "2025",
    role: "Solo · frontend",
    status: "live",
    stack: ["JavaScript", "Bootstrap", "Google Maps Embed"],
    links: {
      demo: "https://ayushhospitals.netlify.app/",
      repo: "https://github.com/Rashid1280/Nearby-AYUSH-Hospitals",
    },
    cover: {
      src: "/images/ayush-cover.webp",
      alt: "AYUSH hospital locator landing page with a search prompt.",
      width: 1000,
      height: 518,
    },
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
