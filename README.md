# Marlvin Anesu Munyanyi — Portfolio

A world-class, production-ready portfolio website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Shadcn UI.

**Live Demo:** [marlvinmunyanyi.dev](https://marlvinmunyanyi.dev) *(update after deployment)*

## Features

- Premium dark-mode design with glassmorphism and electric blue accents
- Animated hero with rotating titles and GitHub statistics
- Project filtering, skills cards, experience timeline, and certifications
- Live GitHub API integration (repos, languages, contribution chart)
- Contact form with EmailJS + WhatsApp integration
- Light/dark mode toggle, scroll progress, back-to-top button
- Fully responsive and accessibility compliant
- SEO optimized with Open Graph metadata, sitemap, and robots.txt

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS, Shadcn UI |
| Animation | Framer Motion |
| Routing | React Router |
| Icons | Lucide React |
| Contact | EmailJS |
| API | GitHub REST API |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Samaita45/Marlvin-Portfolio.git
cd Marlvin-Portfolio
npm install
cp .env.example .env
```

### Environment Variables

Create a `.env` file from `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_TOKEN=           # optional, increases API rate limit
VITE_BASE_PATH=/               # use /repo-name/ for GitHub Pages
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy — `vercel.json` is pre-configured

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Samaita45/Marlvin-Portfolio)

### GitHub Pages

1. Push to `main` branch
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically
4. Site will be available at `https://Samaita45.github.io/Marlvin-Portfolio/`

> **Note:** For GitHub Pages, set `VITE_BASE_PATH=/Marlvin-Portfolio/` in the workflow (already configured).

## Project Structure

```
src/
├── components/
│   ├── common/       # Shared UI (ScrollProgress, ThemeToggle, etc.)
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, Projects, etc.)
│   └── ui/           # Shadcn UI components
├── data/             # Static content (projects, skills, education)
├── hooks/            # Custom React hooks
├── lib/              # Utilities, constants, GitHub API
├── pages/            # Route pages
├── App.tsx
└── main.tsx
public/
├── favicon.svg
├── og-image.svg
├── robots.txt
├── sitemap.xml
└── cv/               # Place your CV PDF here as marlvin-cv.pdf
```

## Customization

| What to change | File |
|----------------|------|
| Personal info | `src/lib/constants.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Certifications | `src/data/certifications.ts` |
| SEO metadata | `index.html` |
| CV download | Add `public/cv/marlvin-cv.pdf` |

## EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service and template
3. Add your Service ID, Template ID, and Public Key to `.env`
4. Template variables: `from_name`, `from_email`, `subject`, `message`, `to_email`

## License

MIT © Marlvin Anesu Munyanyi

---

**Designed and Developed by Marlvin Anesu Munyanyi**
