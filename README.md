# Deep Ideas

A small editorial web app: one current, cross-disciplinary idea at a time, with conversation bridges and blog-writing scaffolding.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Import the GitHub repository into Vercel. The app is a standard Next.js App Router project and needs no environment variables.

Every push to the production branch can trigger a new Vercel deployment.

## Content model

Content lives in `lib/ideas.ts`. Each idea includes:

- infographic configuration
- one-line model + deep explanation
- useful distinctions
- real-life conversation bridges (date, work, community, friends, news)
- three escalating party-conversation levels
- critiques / strongest pushback
- one memorable pocket line
- blog seeds, outlines, and prompts to make the essay personal
- books / thinkers to know

A daily publishing automation can append a new idea to `lib/ideas.ts` and set the newest item to `status: "today"`.
