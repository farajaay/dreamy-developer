@AGENTS.md

# Ahmad Website — Session State

## Status
- [x] Phase 1: Foundation
- [x] Phase 2: Inner Pages
- [x] Phase 3: Contact & Backend
- [x] Phase 4: Polish (SEO + scroll animation + build verified). Deploy pending Ahmad's go-ahead.

## Decisions Made
- Next.js 16 (App Router) + React 19 + TypeScript (latest from create-next-app)
- Tailwind v4, CSS-first `@theme` config inside `app/globals.css` (no `tailwind.config.ts`)
- Framer Motion + Resend + @vercel/analytics installed
- All site copy lives in `lib/content.ts`
- Components in `components/` (kebab-case files, PascalCase named exports)

## Aesthetic Variables
- **Palette:**
  - Navy: `#0F172A` (ink), `#1E293B` (deep), `#334155` (slate)
  - Ivory: `#F7F1ED` (page background, light mode)
  - Rose: `#E9D5D1` (blush), `#D18C8C` (rose, primary accent), `#8B5E5E` (mauve, secondary accent)
- **Fonts:** Fraunces (display, serif, italic optical) + Inter (body, sans) via `next/font/google`
- **Mood:** Editorial / poetic — large display type, generous whitespace, soft fade + rise on scroll

## Awaiting from Ahmad
- Email address (contact form delivery target)
- LinkedIn URL
- WhatsApp number (optional)
- Profile photo (`public/ahmad.jpg`)
- Resend API key → `.env.local` as `RESEND_API_KEY` + `CONTACT_TO_EMAIL`
- Custom domain (for Vercel)

## File map
- `app/layout.tsx` — root layout, fonts, metadata, Analytics
- `app/globals.css` — Tailwind v4 `@theme` (palette + type scale)
- `app/page.tsx` `/services` `/portfolio` `/about` `/contact` — pages
- `app/api/contact/route.ts` — POST handler, Resend integration
- `app/sitemap.ts` `app/robots.ts` — SEO
- `components/Header.tsx` `Footer.tsx` `Reveal.tsx` `ContactForm.tsx`
- `lib/content.ts` — **all copy lives here**

## Local run
```
npm run dev      # http://localhost:3000
npm run build    # production build (verified passing)
npm run start    # serve the production build
```

## Deploy to Vercel (when Ahmad approves)
1. `git init && git add -A && git commit -m "initial"` then push to a new GitHub repo
2. Import the repo at https://vercel.com/new
3. Add env vars in Vercel project settings:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (must be on a domain verified in Resend)
4. Deploy. Add custom domain under Settings → Domains.
5. Update `site.url` in `lib/content.ts` to the production URL before final deploy.

## TODO Next (post-launch)
- Replace 3 placeholder cards in `lib/content.ts` → `portfolio.projects` with real work
- Add a profile photo to `public/` and reference it from `/about`
- Confirm LinkedIn slug + add WhatsApp number in `site` (lib/content.ts)
- Manual mobile pass once deployed (375px / 768px)

## Known Issues
- None. Build clean.

