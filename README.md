# Yousef Shohber — Portfolio

Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Motion, Lucide.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the production domain so canonical URLs,
the sitemap and social previews are correct.

## Update content

- `src/data/site.ts` — name, contact links, status, navigation
- `src/data/projects.ts` — PropFlow, deep-dive projects, "more work"
- `src/data/profile.ts` — expertise, about, training, learning curriculum
- `public/images` — project overviews and portrait; `public/files` — CV PDF

## Still needed

- Production domain (`NEXT_PUBLIC_SITE_URL`)
- Real screenshots/demo clips of running apps (current images are architecture overviews)
- Live demo links for projects other than PropFlow and the E-commerce API
- Final favicon (`src/app/icon.svg` is a placeholder monogram)
