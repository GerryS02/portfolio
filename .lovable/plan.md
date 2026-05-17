## Goal

Convert this TanStack Start (SSR, Cloudflare Workers) project into a pure static Vite + React app that builds to `dist/` for Netlify. No UI or component changes.

## Approach

The app is a single-page portfolio (`src/routes/index.tsx` renders Nav + Hero + About + Education + Skills + Projects + Contact + Footer). There is no real routing or server logic, so the cleanest conversion is to drop TanStack Router/Start entirely and mount the page directly with `react-dom/client`.

## Changes

**1. Replace Vite config** (`vite.config.ts`)
Use plain `@vitejs/plugin-react` + `@tailwindcss/vite` + `vite-tsconfig-paths`. Remove `@lovable.dev/vite-tanstack-config`, the TanStack Start plugin, and the Cloudflare plugin. Output goes to `dist/` with assets in `dist/assets/` (Vite default).

**2. New entry point**
- Create `index.html` at project root with `<div id="root">` and `<script type="module" src="/src/main.tsx">`, plus the meta tags / Google Fonts links currently in `__root.tsx`'s `head()`, and the page-specific title/description from `routes/index.tsx`.
- Create `src/main.tsx` that imports `./styles.css`, wraps the page in `QueryClientProvider`, and renders into `#root`.
- Create `src/App.tsx` that returns the same JSX currently in `routes/index.tsx`'s `Index()` (Nav + Hero + About + Education + Skills + Projects + Contact + Footer).

**3. Delete server / TanStack Start files**
- `src/server.ts`, `src/start.ts`, `src/router.tsx`, `src/routeTree.gen.ts`
- `src/routes/__root.tsx`, `src/routes/index.tsx` (and the `src/routes/` folder)
- `src/lib/error-capture.ts`, `src/lib/error-page.ts`
- `wrangler.jsonc`

**4. Update `package.json`**
- Remove deps: `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`
- Keep `@tanstack/react-query` (used by components if any; harmless to keep)
- Scripts stay: `dev`, `build` (= `vite build`), `preview`

**5. Netlify config**
Add `netlify.toml`:
```
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**6. Sanity check component imports**
Quickly grep `src/components/portfolio/*` for any `@tanstack/react-router` imports (e.g. `Link`). If found, swap for plain `<a>` tags since there's only one page — no UI change visible to the user.

## Result

`npm run build` produces:
- `dist/index.html`
- `dist/assets/*` (JS, CSS, fonts, images)
- no `server/`, no Worker output

Deployable to Netlify with build command `npm run build` and publish dir `dist`.
