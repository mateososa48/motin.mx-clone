# Motin.mx Clone

This project now runs as a modern `Next.js + React + TypeScript` app while preserving the current Motín clone visuals and routes from the legacy Squarespace export.

## Stack

- Next.js App Router
- React
- TypeScript
- ESLint

## Routes

- `/`
- `/nosotros`
- `/menu`
- `/takeout`
- `/delivery`
- `/order`

## Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Project Structure

- `app/`: Next.js routes and layout
- `components/`: shared React helpers for route state and mobile navigation
- `lib/legacy-pages.ts`: reads and rewrites the exported legacy HTML into Next-renderable fragments
- `public/legacy/`: preserved image and CSS assets copied from the original export
- `motin_site_copy/`: original legacy source kept as a reference snapshot

## Migration Notes

- The old static HTML pages were preserved as source material, but the live app now renders through Next routes.
- Large Squarespace runtime scripts were removed from the rendered pages.
- Shared fonts and legacy CSS are still loaded so the UI stays visually aligned with the original clone.
- `public/uber_eats_menu.json` is available for the `/order` experience.

## Legacy Utilities

The original helper scripts are still available if you need them while comparing the migration against the static export:

- `serve.mjs`
- `screenshot.mjs`
