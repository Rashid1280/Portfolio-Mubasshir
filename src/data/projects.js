export const projects = [
  {
    slug: "nearaiims",
    name: "NearAIIMS",
    problem:
      "Families travelling to Raipur for treatment at AIIMS need a place to stay for a few weeks, near the hospital, without a hotel budget.",
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
      "A full-stack URL shortener. Paste a long link and get a short one, with optional custom aliases, expiry, click statistics, and a QR code.",
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
    note: "A URL Shortener",
  },
  {
    slug: "ayush-locator",
    name: "AYUSH Hospital Locator",
    problem:
      "Patients looking for Ayurveda, Yoga, Unani, Siddha or Homeopathy care have no single place to see which certified hospitals are nearby.",
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
    note: "A static directory plotted on an embedded map — no live geolocation or distance ranking.",
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
