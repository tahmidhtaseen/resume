# Tahmid Hossain Ta-Seen — Personal Portfolio

> A modern, professional personal portfolio website for **Tahmid Hossain Ta-Seen**, an IT Support Engineer & Network Enthusiast based in Dhaka, Bangladesh. Built with Next.js 16, TypeScript, and Tailwind CSS — featuring a refined editorial design, full dark mode, a working contact form, WhatsApp integration, and comprehensive SEO.

---

## ✨ Overview

This is a single-page portfolio website that presents a complete professional profile — skills, experience, education, projects, certifications, and contact information — in a polished, formal, and creative layout. The design follows an "editorial premium" aesthetic with a warm off-white background, deep teal-emerald accents, and a consistent formal numbering system across all sections.

The site is designed to rank well in search engines with structured data, a dynamic sitemap, Open Graph imagery, and semantic HTML — while remaining fully responsive across mobile, tablet, and desktop.

---

## 🎯 Features

### Design & UX
- **Editorial premium aesthetic** — warm off-white paper background, deep ink text, refined teal-emerald accent
- **Formal section numbering** (00–07) with mono-font indices and rule lines for a magazine-style flow
- **Full dark mode** with system preference detection via `next-themes`
- **Fully responsive** — mobile-first design with a hamburger menu, tablet and desktop layouts
- **Smooth animations** powered by Framer Motion (subtle fade-up entrances, no flashy effects)
- **Sticky footer** that pins to the bottom on short pages and pushes down naturally on long content
- **Scroll-spy navigation** with active section highlighting
- **Floating WhatsApp button** for instant contact from anywhere on the page

### Sections
1. **Hero** — name, tagline, enthusiasm statement, CTAs, and a stats card with current role
2. **About** — professional summary, commitment statement, languages with proficiency bars, quick facts, and four core values
3. **Skills** — four categorized skill cards (Networking, Systems & Hardware, IT Support & Operations, Web Fundamentals)
4. **Experience** — vertical timeline with highlighted "Key results" panels
5. **Education** — academic history with prominent trophy-badged GPA/result scores
6. **Projects** — detailed project cards with highlighted result panels
7. **Certificates & Interests** — industry certifications and personal interests with emojis
8. **Contact** — working contact form (saved to database) + WhatsApp CTA + social links

### Result Highlights
- Achievement points are rendered in special **"Key results" panels** with a tinted background, accent rail, Sparkles label, and emoji-prefixed points
- Education scores (GPA 4.61, 4.44, Result 3.05) are displayed as **prominent trophy badges**
- Tasteful emojis throughout result points and interest chips

### Contact & Communication
- **Working contact form** — validates input and persists messages to a SQLite database via Prisma
- **WhatsApp integration** — prominent green CTA in 6 locations (navbar, hero, contact, footer, floating button, mobile menu), all linking to `wa.me` with a pre-filled greeting
- **Toast notifications** for form submission feedback

### SEO & Discoverability
- **Comprehensive metadata** — `metadataBase`, canonical URL, robots directives, Open Graph, Twitter cards, theme color
- **JSON-LD structured data** — `Person` schema (name, job title, email, phone, skills, languages, social profiles, employer, education) + `WebSite` schema for rich search results
- **Dynamic sitemap** at `/sitemap.xml` listing the homepage and all 8 sections
- **Dynamic robots.txt** at `/robots.txt` with sitemap reference
- **Dynamic Open Graph image** (1200×630) — edge-rendered branded card for social sharing
- **Dynamic favicon & Apple touch icon** — teal "TT" monogram
- **Web manifest** for PWA-style mobile install metadata
- **Semantic HTML** — proper `<main>`, `<section>`, `<header>`, `<footer>`, `<figure>` tags

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 + shadcn/ui (New York style) |
| **UI Components** | Radix UI primitives, Lucide icons |
| **Animations** | Framer Motion |
| **Theming** | next-themes (light/dark) |
| **Database** | Prisma ORM + SQLite |
| **Forms** | React Hook Form + Zod |
| **Icons** | Lucide React + custom WhatsApp SVG |
| **Fonts** | Geist Sans & Geist Mono (Google Fonts) |
| **Package Manager** | Bun |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/route.ts        # Contact form API (Prisma)
│   ├── apple-icon.tsx              # Dynamic Apple touch icon
│   ├── globals.css                 # Global styles + theme tokens
│   ├── icon.tsx                    # Dynamic favicon
│   ├── layout.tsx                  # Root layout + metadata + JSON-LD
│   ├── manifest.ts                 # Web manifest
│   ├── opengraph-image.tsx         # Dynamic OG image (edge)
│   ├── page.tsx                    # Home page composition
│   ├── robots.ts                   # Dynamic robots.txt
│   └── sitemap.ts                  # Dynamic sitemap.xml
├── components/
│   ├── portfolio/
│   │   ├── layout/                 # Navbar, Footer, FloatingActions, Theme*
│   │   ├── sections/               # Hero, About, Skills, Experience, etc.
│   │   ├── result-points.tsx       # Reusable "Key results" panel
│   │   ├── section-heading.tsx     # Numbered section heading
│   │   ├── structured-data.tsx     # JSON-LD Person + WebSite
│   │   └── whatsapp-icon.tsx       # Custom WhatsApp SVG
│   └── ui/                         # shadcn/ui component library
├── hooks/                          # use-toast, use-mobile
└── lib/
    ├── db.ts                       # Prisma client singleton
    ├── portfolio-data.ts           # All resume content (single source)
    ├── site-config.ts              # SEO site configuration
    └── utils.ts                    # cn() helper
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/)
- A SQLite-compatible environment (or update the Prisma datasource for production)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
bun install
# or: npm install
```

### Environment Setup

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./db/custom.db"
```

> For production deployment (Netlify, Vercel, etc.), switch to a hosted database like [Turso](https://turso.tech) (SQLite-compatible) or [Neon](https://neon.tech) (PostgreSQL) and update the `DATABASE_URL` and `prisma/schema.prisma` datasource accordingly.

### Database Setup

```bash
# Push the Prisma schema to create the database
bun run db:push

# Generate the Prisma client
bun run db:generate
```

### Development

```bash
# Start the dev server (http://localhost:3000)
bun run dev
```

### Build & Production

```bash
# Build for production
bun run build

# Start the production server
bun run start
```

### Linting

```bash
bun run lint
```

---

## ⚙️ Customization

### Update Personal Content
All resume content lives in **`src/lib/portfolio-data.ts`** — edit this single file to update your name, summary, skills, experience, education, projects, certificates, interests, and languages.

### Update SEO / Site URL
Edit **`src/lib/site-config.ts`** and update the `url` field to your production domain. All canonical URLs, sitemap entries, Open Graph image URLs, and JSON-LD structured data derive from this value.

### Update Color Theme
Edit the CSS custom properties in **`src/app/globals.css`** under the `:root` and `.dark` selectors. The theme uses OKLCH colors for a refined, perceptually-uniform palette.

### Update Prisma Schema
Edit **`prisma/schema.prisma`** and run `bun run db:push` to apply changes to the database.

---

## 📦 Deployment

### Netlify
1. Push the repository to GitHub/GitLab/Bitbucket
2. Import the project in [Netlify](https://app.netlify.com)
3. Build command: `npm run build` · Publish directory: `.next`
4. Set environment variable `DATABASE_URL` to your hosted database URL
5. Deploy

> ⚠️ SQLite does not work on Netlify's serverless functions. Use [Turso](https://turso.tech) (SQLite-compatible, recommended) or [Neon](https://neon.tech) (PostgreSQL) instead.

### Vercel
1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set `DATABASE_URL` environment variable
4. Deploy

### Post-Deploy SEO Checklist
- [ ] Update `url` in `src/lib/site-config.ts` to your production domain
- [ ] Submit your sitemap (`https://yourdomain.com/sitemap.xml`) to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit your sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verify the JSON-LD with [Google's Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test Open Graph tags with [opengraph.xyz](https://www.opengraph.xyz/)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details. Feel free to use it as a template for your own portfolio.

---

## 👤 Author

**Tahmid Hossain Ta-Seen**
- 📧 Email: [tahmidhossain209@gmail.com](mailto:tahmidhossain209@gmail.com)
- 📱 WhatsApp: [+880 1828-289668](https://wa.me/8801828289668)
- 💼 LinkedIn: [tahmidhtaseen](https://linkedin.com/in/tahmidhtaseen)
- 🐙 GitHub: [tahmidhtaseen](https://github.com/tahmidhtaseen)
- 🐦 Twitter: [tahmidhtaseen](https://twitter.com/tahmidhtaseen)

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — the React framework for the web
- [shadcn/ui](https://ui.shadcn.com/) — beautifully designed components
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) — animation library
- [Prisma](https://www.prisma.io/) — type-safe database ORM
- [Lucide](https://lucide.dev/) — beautiful, consistent icons

---

<p align="center">Crafted with care and a genuine enthusiasm to collaborate. ✨</p>
