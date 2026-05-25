# Ulvi Quliyev — Personal Portfolio Website

A modern, premium portfolio landing page built to present web development, WordPress, and digital automation services for small and medium-sized businesses in Germany.

---

## Description

This project is a personal portfolio website for **Ulvi Quliyev**, a freelance web developer based in **Backnang, Baden-Württemberg**. The site is designed to attract local clients in the Stuttgart region and present digital services in a clean, professional way.

The design follows a **dark premium aesthetic** with glassmorphism cards, subtle gradient backgrounds, and smooth scroll animations — targeting small business owners who are looking for a modern web presence.

---

## Features

- **Premium dark UI** — custom glassmorphism design with cyan and fuchsia accents
- **Fully responsive** — mobile-first layout, works on all screen sizes
- **Smooth animations** — scroll-triggered entrance effects via Framer Motion
- **German-language content** — written for the local German SMB market (Backnang, Stuttgart, Baden-Württemberg)
- **Local SEO** — meta title and description geo-targeted for the Stuttgart region
- **Open Graph metadata** — proper social sharing preview (title, description, locale)
- **SVG favicon** — custom branded icon matching the site's color scheme
- **Sticky navbar** — responsive navigation with mobile hamburger menu
- **Honest service presentation** — each service card has unique, specific descriptions
- **Clear workflow section** — 6-step process with individual descriptions per step

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 14.2.5 | React framework, routing, metadata API |
| [React](https://react.dev) | 18.3.1 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5.6.2 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 3.4.4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 11.0.0 | Scroll animations |
| [Claude Code](https://claude.ai/code) | — | AI-assisted development workflow |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page — all sections
│   ├── layout.tsx        # Root layout, metadata, Open Graph
│   ├── globals.css       # Global styles, Tailwind base, glass-card component
│   └── icon.svg          # Favicon
└── components/
    ├── Navbar.tsx         # Sticky responsive navigation with mobile menu
    └── SectionHeading.tsx # Reusable section title component
```

---

## Local Setup

**Requirements:** Node.js 18+

```bash
# 1. Clone the repository
git clone https://github.com/ulvibaku/first-landing-page.git
cd first-landing-page

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Build for production:**

```bash
npm run build
npm run start
```

---

## Page Sections

| Section | Description |
|---|---|
| **Hero** | Headline, CTA buttons, service overview card |
| **Leistungen** | 6 service cards with unique descriptions |
| **Einsatzbereiche** | Industry areas: Handwerk, Reinigung, Umzug, and more |
| **Warum ich** | Key working principles |
| **Arbeitsweise** | 6-step workflow with individual descriptions |
| **Kontakt** | Direct contact info — email and phone |

---

## Project Status

**In development** — actively being improved.

The site is currently used as a portfolio project and is not yet deployed to production. Local development is fully functional.

---

## Planned Improvements

- [ ] Refactor `page.tsx` to use server-side rendering (extract animations to separate client components)
- [ ] Add real portfolio screenshots and project case studies to the Einsatzbereiche section
- [ ] Add a personal photo to strengthen the personal brand
- [ ] Strengthen the "Warum ich" section with concrete facts and numbers
- [ ] Add a contact form (currently contact is email/phone only)
- [ ] Deploy to production (Vercel or similar)

---

## Contact

**Ulvi Quliyev**
Backnang, Deutschland

- Email: [ulviroza2013@gmail.com](mailto:ulviroza2013@gmail.com)
- Phone: [+49 15510 595198](tel:+4915510595198)
