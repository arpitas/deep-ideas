# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint via Next.js
```

No test suite is configured.

## Architecture

Next.js 15 App Router, fully static — no environment variables, no database, no API routes.

**Content is the data layer.** Everything lives in `lib/ideas.ts` as a typed `Idea[]` array. There is no CMS, no fetch, no server component data loading — the build reads the array at compile time.

**Two routes:**
- `/` — homepage (`app/page.tsx`): finds the single idea with `status: "today"` and renders it as the featured card alongside the full catalog grid.
- `/ideas/[slug]` — detail page (`app/ideas/[slug]/page.tsx`): calls `generateStaticParams` to pre-render all slugs at build time; `getIdea(slug)` looks up by slug; the "next idea" link uses `ideas[(idea.number) % ideas.length]`.

**Infographic component** (`components/Infographic.tsx`): each idea has an `infographic` string key. The `accountability` key renders a bespoke flow diagram; all other keys are handled by a `map` lookup that fills a generic three-box left→middle→right layout. Adding a new infographic key either requires an entry in `map` or a new custom branch.

**Styling** is a single global CSS file (`app/globals.css`) with CSS custom properties and no CSS framework. The `.shell` utility centers content at `min(1180px, 100% - 48px)`. The `.noise` overlay is a fixed SVG filter for texture.

## Adding a New Idea

1. Append an `Idea` object to the `ideas` array in `lib/ideas.ts` with a unique `slug`, incrementing `number`, and `status: "queued"`.
2. Add an entry in the `Infographic` `map` (or a custom branch) matching the `infographic` field value.
3. To feature it as today's idea, set its `status` to `"today"` and change the previous today's `status` to `"queued"` — only one idea should have `status: "today"` at a time.

## Deployment

Vercel — import the GitHub repo, no env vars needed. Every push to the production branch triggers a rebuild and deployment.
