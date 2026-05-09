# AI Home Lab

Responsive Vite + React + Tailwind frontend for a curated local AI project catalog.

The site presents open-source, source-available, and self-hostable AI tools people can run locally at home. The visual identity is dark, arctic, premium, and consistent with the Hey Initium channel palette: black surfaces, icy blue accents, and controlled gold highlights.

## Commands

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run lint
```

## Design System

- Tailwind is the default styling layer.
- Theme tokens live in `src/styles/index.css` and mirror the CSS palette used by the app.
- Custom CSS is reserved for global browser resets, the arctic background, the gold crest, flag icons, favicon-adjacent brand details, and motion keyframes.
- Components should stay responsive by default with Tailwind breakpoints and avoid hard-coded desktop-only layouts.

## Structure

```text
src/
  app/              App composition and page state
  components/       Reusable UI components
  data/             Catalog projects and category taxonomy
  hooks/            Browser-persisted favorites
  i18n/
    locales/        Edit English and French translations here
  styles/           Tailwind import, theme tokens, and small custom effects
  types/            Shared catalog types
  utils/            Filtering and safe localStorage helpers
```

Read `ARCHITECTURE.md` for the short technical overview used by developers and AI agents.

## Maintaining Translations

Edit:

- `src/i18n/locales/en.ts`
- `src/i18n/locales/fr.ts`

Keep keys identical between both files. Project entries use:

- `project.<projectId>.summary`
- `project.<projectId>.needs`
- `project.<projectId>.licenseNote`

Language preference is stored in the browser as `ai-home-lab:language:v1`.
Favorites are stored as sanitized project IDs in `ai-home-lab:favorites:v1`.

## Catalog Data

Add or modify projects in `src/data/projects.ts`. License and commercial-use tags are intentionally separated because free, open source, source-available, and commercial-friendly are different things.
