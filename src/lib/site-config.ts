/**
 * Central site configuration used across metadata, sitemap, robots, and
 * structured data.
 *
 * 👉 Update `url` to your production domain before deploying.
 *    Everything else (canonical URLs, Open Graph image URLs, sitemap,
 *    JSON-LD) derives from this value.
 */
export const siteConfig = {
  name: "Tahmid Hossain Ta-Seen",
  shortName: "Tahmid Ta-Seen",
  title: "Tahmid Hossain Ta-Seen | IT Support Engineer & Network Enthusiast",
  description:
    "Portfolio of Tahmid Hossain Ta-Seen — an IT Support Engineer specializing in network troubleshooting, hardware maintenance, and on-site support. Based in Dhaka, Bangladesh and ready to collaborate with any team.",
  /** Production URL — update this to your deployed domain. */
  url: "https://tahmid-ta-seen.vercel.app",
  locale: "en_US",
  themeColor: "#0f766e",
  keywords: [
    "Tahmid Hossain Ta-Seen",
    "IT Support Engineer",
    "Network Engineer",
    "MikroTik",
    "MTCNA",
    "CCNA",
    "CompTIA A+",
    "IT Support",
    "Network Troubleshooting",
    "Hardware Maintenance",
    "Dhaka",
    "Bangladesh",
    "Portfolio",
  ],
  author: {
    name: "Tahmid Hossain Ta-Seen",
    email: "tahmidhossain209@gmail.com",
    phone: "+8801828289668",
  },
  social: {
    linkedin: "https://linkedin.com/in/tahmidhtaseen",
    github: "https://github.com/tahmidhtaseen",
    twitter: "https://twitter.com/tahmidhtaseen",
  },
} as const;
