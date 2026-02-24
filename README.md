# Peter Ejeh — Portfolio

Personal developer portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**.


---

## Features

- **Dark / Light mode** — CSS-variable-driven theming; toggle in the Navbar
- **Animated code background** — Matrix-style falling code tokens (Code2 icon toggle, opt-in)
- **Hero section** — Two-column layout with animated avatar orb (rotating rings, floating badges)
- **Projects** — Filterable project cards with detailed modal view
- **Experience timeline** — Work, projects, learning, and certifications
- **Skills** — Grouped skill sections with icon badges
- **Contact form** — Email form via server action
- **CV page** — Print-ready curriculum vitae at `/cv` (Save as PDF supported)
- **PE favicon** — Custom SVG favicon with violet gradient

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS variables |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter · Sora (Google Fonts) |
| Notifications | react-hot-toast |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page (all sections)
│   ├── layout.tsx        # Root layout (Navbar, Footer, providers)
│   ├── globals.css       # Design tokens + utility classes
│   ├── cv/               # Print-ready CV page
│   └── actions/          # Server actions (contact form)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── providers/        # ThemeProvider, CodeBgProvider
│   ├── sections/         # Hero, About, Projects, Skills, Contact …
│   └── ui/               # Reusable components (Cards, Modal, Timeline …)
└── data/
    └── portfolio.ts      # All content — projects, skills, timeline, certs
```

> **All content lives in `src/data/portfolio.ts`** — update projects, skills, timeline, and profile info there.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customisation

1. **Profile & contact info** → `src/data/portfolio.ts` → `profile`
2. **Projects** → `src/data/portfolio.ts` → `projects[]`
3. **Experience / Timeline** → `src/data/portfolio.ts` → `timeline[]`
4. **Skills** → `src/data/portfolio.ts` → `skills[]`
5. **Certifications** → `src/data/portfolio.ts` → `certifications[]`
6. **Avatar photo** → replace `public/avatar.jpg`
7. **Theme colours** → `src/app/globals.css` → `:root / .dark / .light` variables

---

## Deploy

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```
