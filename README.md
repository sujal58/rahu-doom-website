# Rahu Doom Pvt Ltd — Website

A complete website for Rahu Doom Pvt Ltd built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Brand colors and logo are already wired in.

## Pages included
- `/` — Home (hero, services, why-us, stats, process, portfolio, testimonials, tech, CTA)
- `/about` — Company story, mission/vision, team
- `/services/web-app-development`
- `/services/software-development`
- `/services/crm-solutions`
- `/services/digital-marketing`
- `/portfolio` — Filterable project grid
- `/blog` — Blog listing (placeholder posts)
- `/contact` — Contact form + details + WhatsApp link
- SEO: automatic `sitemap.xml` and `robots.txt`

## Run locally
You need Node.js 18.17+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit content
Almost all text lives in **`lib/data.ts`** — company info, services, stats, process,
testimonials, projects, and nav links. Edit there and it updates everywhere.

Page-specific text (About story, Blog posts) is marked with `// EDIT:` comments
inside `app/about/page.tsx` and `app/blog/page.tsx`.

Update your real details in `lib/data.ts`:
- `company.url` (your domain — used for SEO/sitemap)
- `company.email`, `company.phone`, `company.address`
- `company.social` links

## Logo
Your logo is at `public/logo.png` and used in the header. To swap it, replace that file
(keep the same name, or update the path in `components/Header.tsx`).

## Brand colors (already configured in `tailwind.config.ts`)
- `brand` `#A4161A` (primary red) · `brand-dark` `#7A1015` · `brand-light` `#C32127`
- `ink` `#1A1A1A` (headings) · `ink-soft` `#404040` (body)
- `cloud` `#F4F4F5` (section bg) · `line` `#E5E5E5` (borders)

## Make the contact form actually send emails
Right now the form logs to the console. To send real emails, create an API route at
`app/api/contact/route.ts` using a service like Resend, then POST to it from
`components/ContactForm.tsx` (see the `// TODO` there).

## Deploy
Easiest is **Vercel**:
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com — it auto-detects Next.js.
3. Deploy. Add your custom domain in Vercel project settings.

It also runs on Netlify, Render, or any Node host (`npm run build` then `npm start`).

---
Building Ideas. Creating Future.
