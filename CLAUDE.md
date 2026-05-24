@AGENTS.md

# Ahmad Website — Session State

## Status
- [x] Phase 1: Foundation
- [x] Phase 2: Inner Pages
- [x] Phase 3: Contact & Backend (Resend)
- [x] Phase 4: Polish (SEO + scroll animation)
- [x] Phase 5: Pricing page + editorial imagery
- [x] Phase 6: Supabase DB + admin panel + Stripe checkout
- [ ] Awaiting env vars: Resend, Supabase, Stripe, Admin

## Decisions Made
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind v4, CSS-first `@theme` in `app/globals.css`
- Framer Motion, Resend, @vercel/analytics, Drizzle ORM, Stripe SDK installed
- All site copy lives in `lib/content.ts`
- DB: Supabase Postgres via Drizzle ORM; prices stored as integer minor units (halalas / cents)
- Admin: single-password login, HMAC-signed cookie, 7-day session

## Aesthetic Variables
- **Palette:** Navy `#0F172A / #1E293B / #334155` · Ivory `#F7F1ED` · Blush `#E9D5D1` · Rose `#D18C8C` · Mauve `#8B5E5E`
- **Fonts:** Fraunces (display) + Inter (body), Google Fonts with fallback stacks
- **Mood:** Editorial / poetic — large display type, generous whitespace, soft fade + rise on scroll

## File map
- `app/layout.tsx` — root layout, fonts, metadata, Analytics
- `app/globals.css` — Tailwind v4 `@theme` (palette + type scale)
- `app/page.tsx` `/services` `/portfolio` `/about` `/contact` — public pages
- `app/pricing/page.tsx` — live tiers (reads DB, falls back to seed)
- `app/pricing/success/page.tsx` — post-checkout thank-you
- `app/admin/login/page.tsx` — admin sign-in (outside protected layout)
- `app/admin/(protected)/` — dashboard, pricing, transactions; auth-gated by layout
- `app/admin/(protected)/actions.ts` — server actions for tier CRUD + seeding
- `app/api/contact/route.ts` — Resend POST handler
- `app/api/checkout/route.ts` — Stripe Checkout session creator
- `app/api/stripe/webhook/route.ts` — Stripe webhook → transactions table
- `app/sitemap.ts` `app/robots.ts`
- `components/Header.tsx` `Footer.tsx` `Reveal.tsx` `ContactForm.tsx`
- `db/schema.ts` `db/index.ts` `db/migrations/` — Drizzle schema + initial migration
- `lib/content.ts` — **all copy + tier seed data**
- `lib/format.ts` — currency formatters
- `lib/auth.ts` — admin session cookie helpers
- `lib/stripe.ts` — Stripe client singleton
- `drizzle.config.ts` — Drizzle Kit config
- `public/photos/` — placeholder photos; README explains how to swap them

---

## SETUP — what Ahmad needs to do to activate everything

### 1. Resend (contact form — already documented)
- Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in Vercel env vars.
- Redeploy.

### 2. Supabase (database)
1. Create project at https://supabase.com/dashboard
2. **Project Settings → Database → Connection string → "Transaction pooler"** (port 6543, NOT port 5432)
3. Replace `[YOUR-PASSWORD]` in that URL with the password you set when creating the project
4. Add to Vercel env vars as `DATABASE_URL`
5. Run the initial migration once. Two options:
   - **From your local machine:**
     ```
     # in ahmad-website/
     cp .env.example .env.local        # then fill in DATABASE_URL
     npm run db:push                    # creates tiers + transactions tables
     ```
   - **From Supabase SQL editor:** copy/paste the contents of
     `db/migrations/0000_initial.sql` and run it.
6. Visit `/admin/pricing` → click **"Seed default tiers"** once to populate the 3 starter tiers.

### 3. Stripe (payments)
1. Create account at https://stripe.com (start in **test mode**)
2. **Developers → API keys** → copy the **secret key** (starts with `sk_test_…`)
3. Add to Vercel env vars as `STRIPE_SECRET_KEY`
4. **Developers → Webhooks → Add endpoint:**
   - URL: `https://dreamy-developer.vercel.app/api/stripe/webhook` (or your custom domain)
   - Events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`,
     `checkout.session.async_payment_failed`, `charge.refunded`
5. Copy the **signing secret** (starts with `whsec_…`)
6. Add to Vercel env vars as `STRIPE_WEBHOOK_SECRET`
7. Test with a Stripe test card (4242 4242 4242 4242) — transaction should appear in `/admin/transactions`
8. When ready, flip Stripe to **live mode** and replace both env vars with live-mode equivalents.

### 4. Admin panel
1. Pick a strong password. Add to Vercel env vars as `ADMIN_PASSWORD`.
2. Generate a random 32+ char string (run `openssl rand -base64 32` or use a password generator).
   Add as `ADMIN_SESSION_SECRET`.
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL (used for Stripe redirects).
4. Redeploy.
5. Visit `/admin/login`, sign in, you should see the dashboard.

---

## Local run
```
npm run dev          # http://localhost:3000
npm run build        # production build
npm run db:push      # push schema to DATABASE_URL (run once)
npm run db:studio    # browse the DB locally
```

## Awaiting real content from Ahmad
- Email address (replace `hello@ahmadalfaraj.com` in `lib/content.ts`)
- LinkedIn slug (currently a guess)
- WhatsApp number (optional)
- Personal photos to replace `public/photos/*.jpg` (see `public/photos/README.md`)
- Real project case studies to replace the 3 placeholders in `portfolio.projects`
- Final tier prices once you've reviewed them in `/admin/pricing`

## Known Issues
- None. Build clean. All four backends (Resend, Supabase, Stripe, admin) gracefully degrade
  when their env vars are missing — the site keeps working, with the affected feature showing
  a "not configured yet" message.
