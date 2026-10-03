# Dr. Bharat Mehta — Academic Website

Gujarati-first academic website (Next.js 16 · TypeScript · Tailwind CSS v4 · Lucide).

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL=https://your-domain` in production. Canonical URLs, Open Graph, sitemap, robots and JSON-LD all read from it.

## Structure

| Path | Purpose |
| --- | --- |
| `lib/types.ts` | Content models (profile, research, publications, courses, guidance, posts, events) |
| `lib/content/*` | Placeholder content. **Replace with verified data before launch** |
| `lib/api.ts` | Async data layer. The only module to change when connecting a CMS/API |
| `lib/seo.ts` | Metadata builder + JSON-LD (Person, CollegeOrUniversity, WebSite, Article, BreadcrumbList) |
| `components/home/*` | Homepage sections |
| `components/ui/*` | Reusable primitives (buttons, cards, headings, breadcrumbs, form, map) |
| `components/pages/*` | Client explorers (publications filter, blog filter, share) |
| `app/api/contact` | Validated contact endpoint. Wire it to an email provider |

## Before launch
- Replace placeholder biography, degrees, awards, publications, posts and phone number (`lib/content/`).
- Add an official portrait at `profile.portrait` (a monogram placeholder is shown until then).
- Replace `public/cv/bharat-mehta-cv.pdf` (sample generated from placeholder data).
- Connect `/api/contact` to an email service; set real social links.
- Photos are openly licensed from Wikimedia Commons. Credits are listed at `/about#credits`.
