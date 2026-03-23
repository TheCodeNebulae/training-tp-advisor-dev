# Training Analyzer

A training log intelligence app. Pulls activity data from TrainingPeaks and Strava, surfaces AI-generated insights about load, recovery, and performance trends.

## Stack

- **React 18 + TypeScript** — component framework
- **Vite** — dev server and bundler
- **Tailwind CSS** — utility styling
- **Lucide React** — icons
- **Vercel** — hosting and deployment

## Project structure

```
src/
  components/     # UI components (Sidebar, MetricsRow, ActivityCard, AIPanel)
  data/           # mockData.ts — replace with real API calls later
  hooks/          # useTraining.ts — central state
  lib/            # utils.ts — formatters and helpers
  types/          # index.ts — shared TypeScript types
```

## Local development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check
npx tsc --noEmit

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment (Vercel)

### One-time setup

1. Push this repo to GitHub
2. Go to vercel.com → New Project → import your repo
3. Vercel auto-detects Vite — accept defaults, click Deploy
4. Your app is live at `https://your-project.vercel.app`

### Subsequent deploys

Every push to `main` triggers an automatic redeploy. No action needed.

### Environment variables (for future API integration)

Add secrets in Vercel dashboard → Project → Settings → Environment Variables:

```
VITE_ANTHROPIC_API_KEY=sk-...      # Do not expose — use a backend route instead
VITE_STRAVA_CLIENT_ID=...
VITE_TRAININGPEAKS_CLIENT_ID=...
```

**Note**: `VITE_` prefix exposes variables to the browser. For the Anthropic API key, use a Vercel serverless function (see `/api` folder pattern) so the key stays server-side.

## What's mocked

- `src/data/mockData.ts` — activity list, week metrics, and AI insights
- `src/hooks/useTraining.ts` — chat sends a placeholder response

Replace these incrementally as real integrations are added.

## Next steps

1. Add `/api/analyze.ts` Vercel serverless function for Anthropic calls
2. Add Strava OAuth flow and replace mock activities
3. Add TrainingPeaks CSV import or API integration
4. Add the Load & Recovery screen (ATL/CTL/TSB chart)
5. Add the Race Planner screen
