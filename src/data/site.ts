// Single source of truth for identity, contact details and navigation.
// Edit values here; components read from this file.

export const site = {
  name: "Yousef Shohber",
  role: "Backend Developer",
  title: "Yousef Shohber — Backend Developer (Node.js & NestJS)",
  description:
    "Backend developer building secure REST APIs with Node.js, TypeScript and NestJS: authentication, PostgreSQL and MongoDB, Redis, background queues, real-time updates and concurrency-safe booking logic.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Cairo, Egypt",
  email: "yousefshohber@gmail.com",
  phoneDisplay: "+20 150 158 0498",
  cv: "/files/Yousef-Shohber-CV.pdf",
  links: {
    github: "https://github.com/Joo-Shohber",
    // The CV links to this profile URL. The previous portfolio used two different
    // LinkedIn URLs; confirm this is the canonical one.
    linkedin: "https://www.linkedin.com/in/yousef-shohber-389280314/",
    whatsapp: "https://wa.me/201501580498",
    facebook: "https://www.facebook.com/yousef.m.abdelrahman",
  },
  status: "Open to backend roles, internships and freelance projects",
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
] as const;
