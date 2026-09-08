# Marlvin Anesu Munyanyi — Portfolio

Personal site for a Computer Science student who is also building software products, IoT systems, and a technology venture.

**Live:** [samaita45.github.io/Marlvin-Portfolio](https://samaita45.github.io/Marlvin-Portfolio/)

## Stack

React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, EmailJS, GitHub REST API.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel

Import the GitHub repo at [vercel.com/new](https://vercel.com/new). `vercel.json` is already configured. Add EmailJS keys if you use the contact form.

### GitHub Pages

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds with `VITE_BASE_PATH=/Marlvin-Portfolio/` and deploys.

## How to add a project

1. Open `src/data/projects.ts`.
2. Copy an existing entry.
3. Give it a unique `id` and `slug`.
4. Set `status` to one of: `concept`, `planned`, `research`, `design`, `prototype`, `development`, `testing`, `live`, `expanding`, `completed`, `paused`.
5. Fill only confirmed fields. Leave the rest as `null` or `[]`.
6. Add filter tags (`software`, `web`, `iot`, `company`, …).
7. Set `organizationId` if it belongs to a company.
8. Set `showInBuilding`, `showInLab`, `showInProducts`, and `roadmapBucket` (`now` | `next` | `later`) as needed.
9. Add screenshots under `public/projects/` and list them in `screenshots`.

The homepage, `/work`, filters, case studies, and related work all read from this file.

## How to add a company

1. Open `src/data/organizations.ts`.
2. Add an organization with a unique `id` and `slug`.
3. Leave unknown fields as `null`.
4. On each related project, set `organizationId` to that `id`.

The company page is available at `/org/<slug>`.

## How to add an organization repository

1. Create the GitHub organization.
2. Set `github` on the organization record to the org login, for example `'neighbourlink-tech'`.
3. Optionally set `organizationGithub` or `repository: { kind: 'organization', url: 'https://github.com/org/repo' }` on a project.

If a repo is private, use `{ kind: 'private' }` and do not invent a URL. The UI will show **Private Repository**.

## Other content files

| What | File |
|------|------|
| Personal info | `src/lib/constants.ts` |
| Projects | `src/data/projects.ts` |
| Companies | `src/data/organizations.ts` |
| Skills | `src/data/skills.ts` |
| Experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Achievements | `src/data/achievements.ts` |
| Timeline | `src/data/timeline.ts` |
| CV | `public/cv/marlvin-cv.pdf` |
| Photo | `public/images/marlvin-munyanyi.jpg` |

## EmailJS

Template variables: `from_name`, `from_email`, `subject`, `message`, `to_email`. If keys are missing, the form falls back to `mailto:`.

## Principle

Do not invent users, revenue, launches, sensors, team members, or awards. Empty fields are intentional.
