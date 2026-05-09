# AI Home Lab Architecture

## Purpose

AI Home Lab is a client-side catalog for local and self-hosted AI tools. It helps technical and non-technical users filter projects by category, search by need, and save favorites in the browser.

## Stack

- Vite for local development and production bundling.
- React with TypeScript for UI composition and state.
- Tailwind CSS v4 for most styling.
- Small custom CSS in `src/styles/index.css` for design tokens, browser resets, arctic/crest visuals, flag icons, and animations.
- `localStorage` for persisted language and favorites.

## Runtime Flow

`src/main.tsx` mounts the app and wraps it with `I18nProvider`.

`src/app/App.tsx` owns page state:

- search query
- active category
- favorites-only toggle
- derived filtered project list

Filtering and sorting are pure functions in `src/utils/catalog.ts`.

Favorites are managed by `src/hooks/useFavorites.ts`, with storage safety helpers in `src/utils/storage.ts`.

## Data Model

Catalog entries live in `src/data/projects.ts`. Category definitions live in `src/data/taxonomy.ts`. Shared TypeScript types are in `src/types/catalog.ts`.

Project text uses translation keys instead of inline strings. English defines the key set, and other locales must satisfy it at TypeScript build time. Edit localized copy in:

- `src/i18n/locales/en.ts`
- `src/i18n/locales/fr.ts`

Keep translation keys identical across locales.

## UI Organization

- `App.tsx`: page shell, hero, search, catalog orchestration.
- `components/CatalogFilters.tsx`: horizontal category and favorites filters.
- `components/ProjectCard.tsx`: project presentation, external links, and verification source disclosure.
- `components/LanguageSwitch.tsx`: language selection.
- `components/StatPill.tsx` and `components/EmptyState.tsx`: small reusable UI.

Use Tailwind utilities for component layout and states. Add custom CSS only when Tailwind cannot reasonably express the design, such as complex decorative shapes or keyframes.

## Design Rules

- Keep the interface responsive from 320px upward.
- Preserve the dark arctic palette: black/charcoal base, icy blue surfaces, gold highlights for premium actions.
- Cards should be clear and scannable, with simple borders and no nested card layouts.
- Motion should be subtle and disabled through `prefers-reduced-motion`.

## Maintenance Checklist

Before shipping changes, run:

```bash
npm.cmd run lint
npm.cmd run build
```

When adding a project, update `src/data/projects.ts` and both locale files. When adding a language, update `src/i18n/types.ts`, `I18nProvider`, locale files, and `LanguageSwitch`.
