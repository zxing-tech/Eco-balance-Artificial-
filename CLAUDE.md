# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server on `http://0.0.0.0:3000` (host is intentional so AI Studio / containers can reach it).
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/`.
- `npm run lint` — type-check only; it's `tsc --noEmit` (the repo has no ESLint config).
- `npm run clean` — `rm -rf dist`.

There is no test runner configured. Don't claim tests pass — there aren't any.

## Architecture

Single-page marketing site for **EcoBalance Cityscapes** (artificial green walls, Malaysia). Vite 6 + React 19 + TypeScript + Tailwind v4, with `motion/react` (Framer Motion v12) for animations and `lucide-react` for icons.

The entire landing page lives in one file: **`src/App.tsx`** (~550 lines, section-commented `HERO`, `ADVANTAGE`, `TRUST`, `USE CASES`, `GALLERY`, `HOW IT WORKS`, `CLIENT REVIEWS`, `FOOTER FORM`, `POPUP MODAL`). Edit sections in place rather than scaffolding a `components/` tree unless the user asks for refactoring — the flat structure is a deliberate result of the AI Studio-generated origin. `src/main.tsx` just mounts `<App />` in `StrictMode`.

The form in the footer and the modal form are currently non-functional (`onSubmit={(e) => e.preventDefault()}`, "PROCEED TO QUOTE" just closes the modal). No backend/API wiring exists.

### Styling (Tailwind v4)

- Tailwind is loaded via the `@tailwindcss/vite` plugin — **there is no `tailwind.config.js`**.
- Design tokens are declared as CSS variables in an `@theme { … }` block inside `src/index.css`. Add/modify design tokens there (e.g. `--color-primary`, `--font-headline`), then use them via standard Tailwind utility names like `bg-primary`, `text-on-surface`, `font-headline`.
- Custom fonts (Manrope, Inter, Roboto, Open Sans) are imported from Google Fonts at the top of `index.css`.
- Parts of `App.tsx` use hard-coded hex values (`#67FF04`, `#313131`, `#46D4FE`) alongside token classes. These match the theme tokens but are not unified — pick the existing style of the section you're editing.

### Google AI Studio origin (non-obvious)

This project was scaffolded from Google AI Studio, which leaves several wires in place that **are not currently used by the app code**:

- `@google/genai` is a dependency but never imported in `src/`.
- `vite.config.ts` injects `GEMINI_API_KEY` into `process.env` at build time via `loadEnv`; `.env.example` and the README tell users to set `GEMINI_API_KEY` in `.env.local`. No runtime code reads it yet.
- `metadata.json` and AI Studio's deploy target (Cloud Run) expect `APP_URL` to be injected at runtime.
- The `server.hmr` toggle in `vite.config.ts` is driven by a `DISABLE_HMR` env var set by AI Studio during agent edits to prevent flicker. The in-file comment asks not to modify this block — honor that unless the user explicitly asks.

If the user asks to wire up Gemini, the API-key plumbing is already done; just `import { GoogleGenAI } from '@google/genai'` and use `process.env.GEMINI_API_KEY`.

### TypeScript & imports

- `tsconfig.json` sets `allowImportingTsExtensions: true` and `noEmit: true`; existing code imports with the extension (e.g. `import App from './App.tsx'`). Match that style.
- Path alias `@/*` resolves to the **repo root** (not `src/`), configured in both `tsconfig.json` and `vite.config.ts`.

### Assets

All imagery is loaded from external URLs (mostly `borneohalfmarathon.com/wp-content/uploads/…`). There is no `public/` or local assets directory. When adding images, either reuse existing hosted URLs or ask the user where to host new ones — don't invent local paths.
